import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const hugoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const defaultOutDir = path.join(hugoRoot, "substrate-source");
const generatedAt = new Date().toISOString();

const includeRoots = new Set([".github", "archetypes", "assets", "exampleSite", "layouts", "static", "tools"]);
const includeRootFiles = new Set(["README.md", "LICENSE", "package.json", "package-lock.json", ".gitmodules", ".gitignore", "hugo.yaml", "theme.toml"]);
const includeExtensions = new Set([".js", ".json", ".md", ".txt", ".mjs", ".yaml", ".toml", ".html", ".css", ".svg", ".png", ".ico", ""]);

function gitValue(args) {
  const result = spawnSync("git", args, { cwd: hugoRoot, encoding: "utf8", shell: false });
  return result.status === 0 ? result.stdout.trim() : "";
}

function readPackageVersion() {
  try {
    return JSON.parse(fs.readFileSync(path.join(hugoRoot, "package.json"), "utf8")).version || "0.1.0";
  } catch {
    return "0.1.0";
  }
}

function slug(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function writeText(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, value);
}

function cleanDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    fs.rmSync(path.join(dir, entry.name), { recursive: true, force: true, maxRetries: 5, retryDelay: 50 });
  }
}

function sha256File(filePath) {
  const hash = crypto.createHash("sha256");
  hash.update(fs.readFileSync(filePath));
  return `sha256:${hash.digest("hex")}`;
}

function safeAssetRelativePath(relativePath) {
  return String(relativePath || "").replace(/\\/g, "/").replace(/^\.\//, "").replace(/\.\./g, "_");
}

function sourceUrl(relativePath) {
  return `https://github.com/kingc95/XanaNode-Hugo/blob/main/${safeAssetRelativePath(relativePath)}`;
}

function mimeTypeFor(relativePath) {
  const ext = path.extname(relativePath).toLowerCase();
  if (ext === ".json") return "application/json";
  if (ext === ".html") return "text/html";
  if (ext === ".css") return "text/css";
  if (ext === ".svg") return "image/svg+xml";
  if (ext === ".png") return "image/png";
  if (ext === ".ico") return "image/x-icon";
  return "text/plain";
}

function nodeKindFor(relativePath) {
  const clean = safeAssetRelativePath(relativePath);
  const ext = path.extname(clean).toLowerCase();
  if (clean.startsWith("assets/") || clean.startsWith("static/")) {
    const isImage = [".svg", ".png", ".ico"].includes(ext);
    return {
      type: isImage ? "media" : "source",
      subtype: isImage ? "projection_asset" : "renderer_asset",
      media_type: isImage ? "image" : "document",
      mime_type: mimeTypeFor(clean)
    };
  }
  if (clean.startsWith("layouts/") || clean.startsWith("tools/") || clean.startsWith("archetypes/")) {
    return {
      type: "source",
      subtype: "reference_code",
      media_type: "document",
      mime_type: mimeTypeFor(clean)
    };
  }
  if (clean.startsWith("exampleSite/")) {
    return {
      type: "source",
      subtype: "example_substrate_projection",
      media_type: "document",
      mime_type: mimeTypeFor(clean)
    };
  }
  return {
    type: "source",
    subtype: "project_document",
    media_type: "document",
    mime_type: mimeTypeFor(clean)
  };
}

function titleFor(relativePath) {
  const clean = safeAssetRelativePath(relativePath);
  if (clean === "README.md") return "XanaNode Hugo Theme README";
  if (clean === "package.json") return "XanaNode Hugo Theme Package Manifest";
  if (clean === "hugo.yaml") return "XanaNode Hugo Theme Configuration";
  if (clean === "theme.toml") return "XanaNode Hugo Theme Definition";
  return clean
    .replace(/\.[^.]+$/, "")
    .split("/")
    .filter(Boolean)
    .map((part) => part.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
    .join(" / ");
}

function summaryFor(relativePath, kind) {
  const clean = safeAssetRelativePath(relativePath);
  if (kind.type === "media") return `${clean} is preserved as a Hugo projection or branding asset in the XanaNode Hugo substrate.`;
  return `${clean} is preserved as a raw Hugo source artifact in the XanaNode Hugo substrate.`;
}

function listRepositoryFiles() {
  const files = [];
  function visit(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (entry.name === "node_modules" || entry.name === "substrate-source" || entry.name === ".hugo_build.lock" || entry.name.startsWith(".git")) continue;
      const fullPath = path.join(current, entry.name);
      const relativePath = path.relative(hugoRoot, fullPath).replace(/\\/g, "/");
      if (
        relativePath.startsWith("exampleSite/public/") ||
        relativePath === "exampleSite/public" ||
        relativePath.startsWith("exampleSite/resources/") ||
        relativePath === "exampleSite/resources" ||
        relativePath.startsWith("exampleSite/static/") ||
        relativePath === "exampleSite/static" ||
        relativePath === "exampleSite/.hugo_build.lock"
      ) {
        continue;
      }
      const top = relativePath.split("/")[0];
      if (entry.isDirectory()) {
        if (includeRoots.has(top)) visit(fullPath);
        continue;
      }
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (!includeRootFiles.has(relativePath) && !includeRoots.has(top)) continue;
      if (!includeExtensions.has(ext) && !includeRootFiles.has(relativePath)) continue;
      files.push(relativePath);
    }
  }
  visit(hugoRoot);
  return files.sort((a, b) => a.localeCompare(b));
}

function readTextIfPossible(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".js", ".json", ".md", ".txt", ".mjs", ".yaml", ".toml", ".html", ".css", ""].includes(ext)) return "";
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

export function buildHugoSubstrateSource(outDir = defaultOutDir) {
  cleanDir(outDir);
  const version = readPackageVersion();

  const manifest = {
    id: "xananode.hugo",
    name: "XanaNode Hugo Theme Substrate",
    version,
    namespace: "xananode.hugo",
    description: "A substrate source built directly from the XanaNode Hugo repository, preserving the Hugo theme, static viewer assets, example site, layouts, build glue, and projection-facing documents as first-class XanaNode records.",
    schema_version: "xananode-core@0.5.0",
    repository: {
      type: "git",
      url: "https://github.com/kingc95/XanaNode-Hugo.git",
      default_branch: "main"
    },
    imports: ["xananode.core"],
    build_metadata: {
      built_at: generatedAt,
      git_commit: gitValue(["rev-parse", "HEAD"]),
      git_branch: gitValue(["rev-parse", "--abbrev-ref", "HEAD"]),
      built_by: "xananode-hugo/tools/build-substrate-source.mjs"
    },
    sharing: {
      default_shareable: true,
      rules: [
        {
          selector: { namespace: "xananode.hugo" },
          shareable: true,
          scope: "public",
          reason: "The Hugo substrate is intended to be federated as a public projection implementation source."
        }
      ]
    }
  };

  const nodes = [
    {
      id: "xananode.hugo:project/xananode-hugo-theme",
      title: "XanaNode Hugo Theme",
      type: "project",
      subtype: "projection_layer",
      importance: 5,
      summary: "The Hugo-based projection layer that renders XanaNode substrates as readable pages, protocol artifacts, and a navigable graph.",
      source_url: "https://github.com/kingc95/XanaNode-Hugo",
      repository: "kingc95/XanaNode-Hugo",
      software_version: version,
      relationships: []
    },
    {
      id: "xananode.hugo:source/repository-xananode-hugo",
      title: "XanaNode Hugo Repository",
      type: "source",
      subtype: "git_repository",
      importance: 5,
      summary: "Public Git repository for the XanaNode Hugo theme and read-only substrate viewer.",
      source_url: "https://github.com/kingc95/XanaNode-Hugo",
      repository: "kingc95/XanaNode-Hugo",
      rights_status: "external",
      relationships: []
    },
    {
      id: "xananode.hugo:technology/xananode-hugo-renderer",
      title: "XanaNode Hugo Renderer",
      type: "technology",
      subtype: "static_site_renderer",
      importance: 4,
      summary: "The static-site rendering surface that projects XanaNode substrates into HTML, machine discovery endpoints, and a graph-driven reading experience.",
      software_version: version,
      relationships: []
    }
  ];

  const relationships = [
    {
      id: "xananode.hugo:rel/repository-documents-hugo-project",
      source: "xananode.hugo:source/repository-xananode-hugo",
      target: "xananode.hugo:project/xananode-hugo-theme",
      type: "documents",
      summary: "The repository documents and carries the Hugo theme project.",
      asserted_at: generatedAt
    },
    {
      id: "xananode.hugo:rel/hugo-project-implements-core",
      source: "xananode.hugo:project/xananode-hugo-theme",
      target: "xananode.core:project/xananode-core-sdk",
      type: "implements",
      summary: "The Hugo theme uses Core as its validation and protocol-artifact engine.",
      asserted_at: generatedAt
    },
    {
      id: "xananode.hugo:rel/hugo-renderer-supports-hugo-project",
      source: "xananode.hugo:technology/xananode-hugo-renderer",
      target: "xananode.hugo:project/xananode-hugo-theme",
      type: "supports",
      summary: "The renderer is the human-facing projection surface of the Hugo theme.",
      asserted_at: generatedAt
    }
  ];

  for (const relativePath of listRepositoryFiles()) {
    const sourcePath = path.join(hugoRoot, relativePath);
    const kind = nodeKindFor(relativePath);
    const localSlug = slug(relativePath.replace(/\.[^.]+$/, "")) || "artifact";
    const nodeId = `xananode.hugo:${kind.type}/artifact-${localSlug}`;
    const assetPath = `assets/raw/repository/${safeAssetRelativePath(relativePath)}`;
    const assetTarget = path.join(outDir, assetPath);
    fs.mkdirSync(path.dirname(assetTarget), { recursive: true });
    fs.copyFileSync(sourcePath, assetTarget);
    const content = readTextIfPossible(sourcePath);
    const contentId = sha256File(sourcePath);

    nodes.push({
      id: nodeId,
      title: titleFor(relativePath),
      type: kind.type,
      subtype: kind.subtype,
      importance:
        relativePath === "README.md" ||
        relativePath === "hugo.yaml" ||
        relativePath === "theme.toml" ||
        relativePath.startsWith("layouts/") ||
        relativePath.startsWith("tools/") ||
        relativePath.startsWith("exampleSite/")
          ? 4
          : 3,
      summary: summaryFor(relativePath, kind),
      source_url: sourceUrl(relativePath),
      artifact_path: relativePath,
      asset_path: assetPath,
      asset_role: "repository_source",
      media_type: kind.media_type,
      mime_type: kind.mime_type,
      rights_status: "Apache-2.0",
      content_id: contentId,
      ...(content ? { content } : {}),
      source_snapshot: {
        captured_at: generatedAt,
        source_url: sourceUrl(relativePath),
        method: "archive",
        content_id: contentId,
        rights_status: "Apache-2.0",
        tool: "xananode-hugo/tools/build-substrate-source.mjs"
      },
      relationships: []
    });

    relationships.push({
      id: `xananode.hugo:rel/repository-contains-${localSlug}`,
      source: "xananode.hugo:source/repository-xananode-hugo",
      target: nodeId,
      type: "contains",
      summary: `The Hugo repository contains ${relativePath}.`,
      asserted_at: generatedAt
    });

    if (relativePath.startsWith("layouts/") || relativePath.startsWith("tools/") || relativePath.startsWith("assets/") || relativePath.startsWith("static/")) {
      relationships.push({
        id: `xananode.hugo:rel/${localSlug}-supports-hugo-project`,
        source: nodeId,
        target: "xananode.hugo:project/xananode-hugo-theme",
        type: "supports",
        summary: `${titleFor(relativePath)} supports the Hugo projection layer.`,
        asserted_at: generatedAt
      });
    } else if (relativePath.startsWith("exampleSite/")) {
      relationships.push({
        id: `xananode.hugo:rel/${localSlug}-demonstrates-hugo-project`,
        source: nodeId,
        target: "xananode.hugo:project/xananode-hugo-theme",
        type: "demonstrates",
        summary: `${titleFor(relativePath)} demonstrates how the Hugo projection layer is used.`,
        asserted_at: generatedAt
      });
    }
  }

  writeJson(path.join(outDir, "substrate.json"), manifest);
  writeJson(path.join(outDir, "nodes.json"), { nodes });
  writeJson(path.join(outDir, "relationships.json"), { relationships });
  for (const node of nodes) {
    writeJson(path.join(outDir, "nodes", `${node.type}_${slug(node.title)}.json`), node);
  }
  writeText(path.join(outDir, "README.md"), `# XanaNode Hugo Theme Substrate

This folder is the explicit substrate source generated from the XanaNode Hugo repository.

It exists so higher layers can federate with Hugo as a normal substrate instead of inferring Hugo facts ad hoc.

Regenerate it from the repository root with:

\`\`\`powershell
node tools/build-substrate-source.mjs
\`\`\`

Or from \`XanaNode-Master\`:

\`\`\`powershell
npm run hugo:build-substrate-source
\`\`\`
`);

  return {
    outDir,
    manifest,
    nodeCount: nodes.length,
    relationshipCount: relationships.length
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = buildHugoSubstrateSource();
  console.log(`Hugo substrate source: ${result.outDir}`);
  console.log(`  Nodes: ${result.nodeCount}`);
  console.log(`  Relationships: ${result.relationshipCount}`);
}
