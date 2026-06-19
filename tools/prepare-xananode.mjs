#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { createHash } from "node:crypto";
import matter from "gray-matter";
import { globSync } from "glob";
import Ajv2020 from "ajv/dist/2020.js";
import {
  analyzeSubstrateIntake,
  buildFragments as buildCoreFragments,
  findXanaReferences,
  loadSubstratePack,
  packReferenceForManifest,
  parseXanaRef as parseCoreXanaRef,
  rangeToText as coreRangeToText,
  resolveSubstratePacks,
  validateSubstrateArtifacts as validateCoreSubstrateArtifacts
} from "@xananode/core";

const siteRoot = path.resolve(process.argv[2] || ".");
const themeRootCandidates = [
  path.join(siteRoot, "themes", "xananode-hugo"),
  path.join(siteRoot, "themes", "xananode"),
  path.join(siteRoot, "..", "xananode-hugo"),
  path.join(siteRoot, "..", "xananode"),
  path.resolve(siteRoot, ".."),
  siteRoot
];
const themeRoot = themeRootCandidates.find((candidate) => fs.existsSync(path.join(candidate, "static", "schemas"))) || themeRootCandidates[0];
const sdkRootCandidates = [
  process.env.XANANODE_SDK_ROOT,
  path.resolve(themeRoot, "vendor", "xananode-core"),
  path.resolve(siteRoot, "..", "..", "..", "..", "XanaNode-Core-SDK"),
  path.resolve(siteRoot, "..", "..", "..", "..", "xananode-core-sdk"),
  path.resolve(themeRoot, "..", "..", "..", "XanaNode-Core-SDK"),
  path.resolve(themeRoot, "..", "..", "..", "xananode-core-sdk")
].filter(Boolean);
const schemaCandidates = [
  ...sdkRootCandidates.map((candidate) => path.join(candidate, "schemas")),
  path.join(siteRoot, "static", "schemas"),
  path.join(themeRoot, "static", "schemas")
];
const errors = [];
const warnings = [];
const protocolSchemaNames = [
  "substrate-manifest.schema.json",
  "substrate-node.schema.json",
  "substrate-relationships.schema.json"
];
const schemaAliasPairs = [
  ["xananode-node-types.v0.3.0.json", "xananode-node-types.json"],
  ["xananode-node-types.schema.v0.3.0.json", "xananode-node-types.schema.json"],
  ["xananode-relationship-types.v0.4.0.json", "xananode-relationship-types.json"],
  ["xananode-relationship-types.schema.v0.4.0.json", "xananode-relationship-types.schema.json"],
  ["xananode-relationship-types.v0.5.0.json", "xananode-relationship-types.json"],
  ["xananode-relationship-types.schema.v0.5.0.json", "xananode-relationship-types.schema.json"]
];

function firstExistingFile(relativePath) {
  for (const dir of schemaCandidates) {
    const candidate = path.join(dir, relativePath);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function parseSemver(version) {
  const match = String(version || "").trim().replace(/^v/, "").match(/^(\d+)\.(\d+)\.(\d+)(?:[-+].*)?$/);
  if (!match) return null;
  return match.slice(1).map(Number);
}

function compareSemver(left, right) {
  if (!left && !right) return 0;
  if (!left) return -1;
  if (!right) return 1;
  for (let index = 0; index < 3; index += 1) {
    const diff = left[index] - right[index];
    if (diff) return diff;
  }
  return 0;
}

function resolveMostRecentJson(baseName) {
  const candidates = [];
  const pattern = new RegExp(`^${baseName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:\\.v(\\d+\\.\\d+\\.\\d+))?\\.json$`);

  for (const dir of schemaCandidates) {
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isFile()) continue;
      const match = entry.name.match(pattern);
      if (!match) continue;
      candidates.push({
        filePath: path.join(dir, entry.name),
        version: parseSemver(match[1])
      });
    }
  }

  candidates.sort((left, right) => {
    const versionDiff = compareSemver(left.version, right.version);
    if (versionDiff !== 0) return versionDiff;
    return left.filePath.localeCompare(right.filePath);
  });

  return candidates.at(-1)?.filePath || null;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function withoutGeneratedAt(value) {
  return JSON.stringify(value, (key, innerValue) => key === "generated_at" ? undefined : innerValue);
}

function withStableGeneratedAt(nextValue, existingPath) {
  if (!fs.existsSync(existingPath)) return nextValue;
  try {
    const existingValue = readJson(existingPath);
    if (withoutGeneratedAt(existingValue) === withoutGeneratedAt(nextValue) && existingValue.generated_at) {
      return { ...nextValue, generated_at: existingValue.generated_at };
    }
  } catch {
    // Keep the fresh timestamp if the previous artifact cannot be read.
  }
  return nextValue;
}

function asArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function slugify(value, fallback = "item") {
  const slug = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || fallback;
}

function protocolTypePath(type) {
  const normalizedType = slugify(type, "node");
  if (normalizedType === "person") return "person";
  if (normalizedType === "media") return "media";
  return normalizedType;
}

const PUBLIC_ROUTE_TYPES = new Set([
  "claim",
  "concept",
  "essay",
  "media",
  "observation",
  "person",
  "project",
  "schema",
  "source",
  "technology",
  "trail",
  "node"
]);

function nodeIdFor(relativeFile, data) {
  return data.node_id || path.basename(relativeFile, ".md");
}

function protocolIdFor(localId, data, namespace) {
  if (data.protocol_id) return data.protocol_id;
  if (String(localId).includes(":")) return String(localId);
  return `${namespace}:${protocolTypePath(data.type)}/${slugify(localId, "node")}`;
}

function contentIdFor(value) {
  return `sha256:${createHash("sha256").update(String(value || "")).digest("hex")}`;
}

function relationshipIdFor(namespace, sourceId, relationshipType, targetId, index) {
  const sourceSlug = slugify(sourceId.split("/").at(-1), "source");
  const targetSlug = slugify(targetId.split("/").at(-1), "target");
  return `${namespace}:rel/${sourceSlug}-${slugify(relationshipType, "related-to")}-${targetSlug}-${index + 1}`;
}

function generatedSummary(edge) {
  return `${edge.sourceTitle || edge.source} ${String(edge.type || "related_to").replaceAll("_", " ")} ${edge.targetTitle || edge.target}.`;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function protocolRelationshipRecord(relationship) {
  const {
    imported_from,
    pack_id,
    pack_mode,
    ...record
  } = relationship;
  return record;
}

function readSiteConfigText() {
  for (const fileName of ["hugo.yaml", "hugo.yml", "config.yaml", "config.yml"]) {
    const filePath = path.join(siteRoot, fileName);
    if (fs.existsSync(filePath)) return fs.readFileSync(filePath, "utf8");
  }
  return "";
}

function configuredPackReferences() {
  const text = readSiteConfigText();
  const lines = text.split(/\r?\n/);
  const packsLine = lines.findIndex((line) => /^\s{4}packs:\s*$/.test(line));
  if (packsLine < 0) return [];
  const packs = [];
  let current = null;
  let currentNamespaceMapping = null;
  for (let index = packsLine + 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^\S/.test(line)) break;
    const itemMatch = line.match(/^\s{6}-\s*(?:(\w+):\s*(.*))?$/);
    if (itemMatch) {
      if (current) packs.push(current);
      current = {};
      currentNamespaceMapping = null;
      if (itemMatch[1]) current[itemMatch[1]] = parseYamlScalar(itemMatch[2]);
      continue;
    }
    const mappingItemMatch = line.match(/^\s{10}-\s*(?:(\w+):\s*(.*))?$/);
    if (current && Array.isArray(current.namespace_mappings) && mappingItemMatch) {
      currentNamespaceMapping = {};
      current.namespace_mappings.push(currentNamespaceMapping);
      if (mappingItemMatch[1]) currentNamespaceMapping[mappingItemMatch[1]] = parseYamlScalar(mappingItemMatch[2]);
      continue;
    }
    const mappingPropertyMatch = line.match(/^\s{12}(\w+):\s*(.*)$/);
    if (currentNamespaceMapping && mappingPropertyMatch) {
      currentNamespaceMapping[mappingPropertyMatch[1]] = parseYamlScalar(mappingPropertyMatch[2]);
      continue;
    }
    const propertyMatch = line.match(/^\s{8}(\w+):\s*(.*)$/);
    if (current && propertyMatch) {
      currentNamespaceMapping = null;
      current[propertyMatch[1]] = propertyMatch[1] === "namespace_mappings" ? [] : parseYamlScalar(propertyMatch[2]);
    } else if (/^\s{0,5}\S/.test(line)) {
      break;
    }
  }
  if (current) packs.push(current);
  return packs.filter((pack) => pack.source && pack.enabled !== false);
}

function parseYamlScalar(value) {
  const text = String(value || "").trim().replace(/^["']|["']$/g, "");
  if (text === "true") return true;
  if (text === "false") return false;
  return text;
}

function configuredThemeLinks() {
  const text = readSiteConfigText();
  const lines = text.split(/\r?\n/);
  const linksLine = lines.findIndex((line) => /^\s{4}links:\s*$/.test(line));
  if (linksLine < 0) return [];

  const links = [];
  let current = null;
  for (let index = linksLine + 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^\S/.test(line)) break;
    const itemMatch = line.match(/^\s{6}-\s*(?:(\w+):\s*(.*))?$/);
    if (itemMatch) {
      if (current) links.push(current);
      current = {};
      if (itemMatch[1]) current[itemMatch[1]] = parseYamlScalar(itemMatch[2]);
      continue;
    }
    const propertyMatch = line.match(/^\s{8}(\w+):\s*(.*)$/);
    if (current && propertyMatch) {
      current[propertyMatch[1]] = parseYamlScalar(propertyMatch[2]);
    } else if (/^\s{0,5}\S/.test(line)) {
      break;
    }
  }
  if (current) links.push(current);
  return links.filter((link) => link && link.label && link.url);
}

function localImportPackReferences() {
  const roots = ["imports", "data/imports", "data/xananode-imports"];
  const packs = [];
  for (const root of roots) {
    const fullRoot = path.join(siteRoot, root);
    if (!fs.existsSync(fullRoot)) continue;
    const entries = fs.readdirSync(fullRoot, { withFileTypes: true });
    if (entries.some((entry) => entry.isFile() && entry.name.endsWith(".json"))) {
      packs.push({ id: root.replace(/\//g, ":"), source: root, mode: "mounted" });
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const source = path.join(root, entry.name).replace(/\\/g, "/");
        packs.push({ id: source.replace(/\//g, ":"), source, mode: "mounted" });
      }
    }
  }
  return packs;
}

function collectImportedProtocolArtifacts() {
  const configured = resolveSubstratePacks(configuredPackReferences(), {
    baseDir: siteRoot,
    extraBaseDirs: [themeRoot],
    receivingNamespace: substrateNamespace
  });
  const localPacks = localImportPackReferences().map((pack) => loadSubstratePack(path.resolve(siteRoot, pack.source), {
    pack,
    receivingNamespace: substrateNamespace
  }));
  const allPacks = [...configured.packs, ...localPacks];
  const importedNodes = [];
  const importedRelationships = [];

  for (const pack of allPacks) {
    importedNodes.push(...pack.nodes);
    importedRelationships.push(...pack.relationships);
    for (const warning of pack.warnings || []) warnings.push(`Pack ${pack.pack?.id || pack.root}: ${JSON.stringify(warning)}`);
    for (const error of pack.errors || []) errors.push(`Pack ${pack.pack?.id || pack.root}: ${JSON.stringify(error)}`);
  }
  for (const warning of configured.warnings || []) warnings.push(`Pack import: ${JSON.stringify(warning)}`);
  for (const error of configured.errors || []) errors.push(`Pack import: ${JSON.stringify(error)}`);

  return {
    importedNodes,
    importedRelationships,
    importedPacks: allPacks.map((pack) => packReferenceForManifest(pack.pack)).filter(Boolean)
  };
}

function copyProtocolSchemas(staticSchemaDir) {
  fs.mkdirSync(staticSchemaDir, { recursive: true });
  for (const schemaName of protocolSchemaNames) {
    const source = firstExistingFile(schemaName);
    if (source) {
      fs.copyFileSync(source, path.join(staticSchemaDir, schemaName));
    }
  }
  for (const [versionedName, aliasName] of schemaAliasPairs) {
    const source = firstExistingFile(versionedName);
    if (source) {
      fs.copyFileSync(source, path.join(staticSchemaDir, versionedName));
      fs.copyFileSync(source, path.join(staticSchemaDir, aliasName));
    }
  }
}

function stripMarkdown(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .trim();
}

function fragmentProtocolIdFor(namespace, sourceId, fragmentId) {
  return `${namespace}:fragment/${slugify(sourceId, "node")}-${slugify(fragmentId, "fragment")}`;
}

function normalizeAuthoredFragments(data) {
  return asArray(data.fragments).filter(Boolean);
}

function buildFragments(markdown, data, context) {
  const coreFragments = buildCoreFragments(markdown, data, {
    namespace: context.namespace,
    sourceId: context.localId,
    sourceProtocolId: context.protocolId,
    sourceContentId: context.sourceContentId,
    sourceVersionId: context.sourceVersionId
  });
  const fragmentMap = {};
  for (const fragment of coreFragments.generated) {
    fragmentMap[fragment.id] = fragment.text;
  }
  if (coreFragments.generated.length) {
    fragmentMap["1"] = coreFragments.generated.map((fragment) => fragment.text).filter(Boolean).join("\n\n");
  }
  const metadata = {};
  const seenAuthoredIds = new Set();

  for (const [index, fragment] of normalizeAuthoredFragments(data).entries()) {
    if (!fragment || typeof fragment !== "object") {
      errors.push(`${context.file}: fragments[${index}] must be an object.`);
      continue;
    }

    const fragmentId = String(fragment.id || fragment.fragment_id || "").trim();
    if (!fragmentId) {
      errors.push(`${context.file}: fragments[${index}] is missing "id".`);
      continue;
    }
    if (!/^[A-Za-z0-9._-]+$/.test(fragmentId)) {
      errors.push(`${context.file}: fragment id "${fragmentId}" must use only letters, numbers, dots, underscores, or hyphens.`);
      continue;
    }
    if (seenAuthoredIds.has(fragmentId)) {
      errors.push(`${context.file}: duplicate authored fragment id "${fragmentId}".`);
      continue;
    }
    seenAuthoredIds.add(fragmentId);

    const text = String(fragment.text || fragment.content || "").replace(/\s+/g, " ").trim();
    if (!text) {
      errors.push(`${context.file}: fragment "${fragmentId}" is missing "text".`);
      continue;
    }

    const protocolId = fragment.protocol_id || fragmentProtocolIdFor(context.namespace, context.localId, fragmentId);
    const sourceContentId = context.sourceContentId;
    const sourceVersionId = context.sourceVersionId;
    const fragmentContentId = fragment.content_id || contentIdFor(fragment.raw || text || fragmentId);
    const fragmentVersionId = fragment.version_id || fragmentContentId;
    const tumbler = fragment.tumbler || `${context.protocolId}@${sourceVersionId}#fragment/${fragmentId}@${fragmentVersionId}`;
    fragmentMap[fragmentId] = text;
    metadata[fragmentId] = {
      authored: true,
      id: fragmentId,
      text,
      content_id: fragmentContentId,
      version_id: fragmentVersionId,
      source_content_id: sourceContentId,
      source_version_id: sourceVersionId,
      title: fragment.title || `${data.title || context.localId} Fragment ${fragmentId}`,
      summary: fragment.summary || `A stable addressable fragment of ${data.title || context.localId}.`,
      source_node: context.protocolId,
      protocol_id: protocolId,
      tumbler,
      selector: fragment.selector || { type: "semantic-anchor", value: fragmentId },
      ...(fragment.rights_status || data.rights_status ? { rights_status: fragment.rights_status || data.rights_status } : {})
    };
  }

  return { fragments: fragmentMap, metadata };
}

function parseXanaRef(ref) {
  const parsed = parseCoreXanaRef(ref);
  if (!parsed) return null;
  return {
    nodeId: parsed.node,
    version: parsed.version || "latest",
    range: parsed.range || parsed.start || "1"
  };
}

function rangeToText(fragmentMap, range) {
  const direct = coreRangeToText(fragmentMap, range);
  if (direct) return direct;
  const [start, end] = String(range).split("-");
  if (!start || !end) return null;
  const startParts = start.split(".").map(Number);
  const endParts = end.split(".").map(Number);
  if (startParts.length !== endParts.length) return null;
  const addresses = Object.keys(fragmentMap)
    .filter((address) => address.split(".").length === startParts.length)
    .sort((a, b) => {
      const ap = a.split(".").map(Number);
      const bp = b.split(".").map(Number);
      for (let i = 0; i < Math.max(ap.length, bp.length); i++) {
        const diff = (ap[i] || 0) - (bp[i] || 0);
        if (diff !== 0) return diff;
      }
      return 0;
    });
  const startIndex = addresses.indexOf(start);
  const endIndex = addresses.indexOf(end);
  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) return null;
  return addresses.slice(startIndex, endIndex + 1).map((address) => fragmentMap[address]).join(" ");
}

function uniqueStrings(values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
}

function nodeAliases(data) {
  return uniqueStrings([
    ...asArray(data.aliases),
    ...asArray(data.alias),
    ...asArray(data.alternate_titles),
    ...asArray(data.alternate_title)
  ]);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function phrasePattern(phrase) {
  return new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegExp(phrase)}(?![\\p{L}\\p{N}_])`, "iu");
}

function allPhraseMatches(text, phrase) {
  const pattern = new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegExp(phrase)}(?![\\p{L}\\p{N}_])`, "giu");
  return [...String(text || "").matchAll(pattern)];
}

function rangesFor(pattern, text) {
  return [...String(text || "").matchAll(pattern)].map((match) => [match.index, match.index + match[0].length]);
}

function positionInRanges(index, ranges) {
  return ranges.some(([start, end]) => index >= start && index < end);
}

function markdownProtectedRanges(markdown) {
  const ranges = [
    ...rangesFor(/```[\s\S]*?```/g, markdown),
    ...rangesFor(/`[^`\n]+`/g, markdown),
    ...rangesFor(/!\[[^\]]*]\([^)]*\)/g, markdown),
    ...rangesFor(/\[[^\]]+]\([^)]*\)/g, markdown),
    ...rangesFor(/\{\{[<%][\s\S]*?[>%]\}\}/g, markdown),
    ...rangesFor(/<a\b[\s\S]*?<\/a>/gi, markdown)
  ];
  return ranges.sort((left, right) => left[0] - right[0]);
}

function lineColumnFor(text, index) {
  const before = String(text || "").slice(0, index);
  const lines = before.split(/\r?\n/);
  return {
    line: lines.length,
    column: lines.at(-1).length + 1
  };
}

function linkTargetFor(node) {
  return `/${protocolTypePath(node.data?.type || "node")}/${encodeURIComponent(node.id)}/`;
}

function nodeIdFromLinkHref(href) {
  const value = String(href || "").trim();
  let pathValue = value;
  try {
    pathValue = new URL(value, "https://xananode.local").pathname;
  } catch {
    pathValue = value;
  }
  const stripped = pathValue.replace(/^\//, "").replace(/\/$/, "");
  const [routeType, ...rest] = stripped.split("/");
  if (!PUBLIC_ROUTE_TYPES.has(routeType) || !rest.length) return null;
  try {
    return decodeURIComponent(rest.at(-1));
  } catch {
    return rest.at(-1);
  }
}

function existingLinkedTargetIds(markdown, nodeIds) {
  const linked = new Set();
  for (const match of String(markdown || "").matchAll(/\[[^\]]+]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g)) {
    const nodeId = nodeIdFromLinkHref(match[1]);
    if (nodeId && nodeIds.has(nodeId)) linked.add(nodeId);
  }
  return linked;
}

function approvedReplacementNote() {
  return "Suggestion only. Review and apply manually if approved.";
}

function bodyStartLine(raw, body) {
  const index = String(raw || "").indexOf(body || "");
  if (index < 0) return 1;
  return String(raw).slice(0, index).split(/\r?\n/).length;
}

function reportPosition(source, markdown, index) {
  const position = lineColumnFor(markdown, index);
  return {
    line: position.line + (source.body_start_line || 1) - 1,
    column: position.column
  };
}

function shortPreview(value, maxLength = 160) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3)}...`;
}

function renderSuggestionReport(suggestions) {
  const lines = [
    "# XanaNode Suggestions",
    "",
    "Status: pending user approval",
    "",
    "These suggestions are not auto-applied. Review each replacement before editing content.",
    "",
    `Autolinks: ${suggestions.autolinks.length}`,
    `Pending transclusions: ${suggestions.transclusions.length}`,
    `Implemented transclusions: ${suggestions.implemented_transclusions?.length || 0}`,
    `Merge candidates: ${suggestions.merge_candidates?.length || 0}`,
    `Imported relationships touching existing nodes: ${suggestions.relationship_imports?.length || 0}`,
    "",
    "## Autolinks",
    ""
  ];

  if (!suggestions.autolinks.length) {
    lines.push("No autolink suggestions.", "");
  } else {
    suggestions.autolinks.forEach((suggestion, index) => {
      lines.push(
        `${index + 1}. ${suggestion.file}:${suggestion.line}:${suggestion.column}`,
        `   - Match: ${suggestion.matched_text}`,
        `   - Target: ${suggestion.target_title} (${suggestion.target_node})`,
        `   - Replacement: ${suggestion.replacement}`,
        "   - Approved: false",
        ""
      );
    });
  }

  lines.push("## Implemented Transclusions", "");
  if (!suggestions.implemented_transclusions?.length) {
    lines.push("No implemented transclusions detected.", "");
  } else {
    suggestions.implemented_transclusions.forEach((suggestion, index) => {
      lines.push(
        `${index + 1}. ${suggestion.file}`,
        `   - Target: ${suggestion.target_title} (${suggestion.target_node}@${suggestion.version}/${suggestion.range})`,
        `   - Tumbler: ${suggestion.tumbler}`,
        `   - Text: ${shortPreview(suggestion.matched_text)}`,
        "   - Implemented: true",
        ""
      );
    });
  }

  lines.push("## Pending Transclusions", "");
  if (!suggestions.transclusions.length) {
    lines.push("No transclusion suggestions.", "");
  } else {
    suggestions.transclusions.forEach((suggestion, index) => {
      lines.push(
        `${index + 1}. ${suggestion.file}:${suggestion.line}:${suggestion.column}`,
        `   - Target: ${suggestion.target_title} (${suggestion.target_node}@${suggestion.version}/${suggestion.range})`,
        `   - Match: ${shortPreview(suggestion.matched_text)}`,
        `   - Replacement: ${suggestion.replacement}`,
        "   - Approved: false",
        ""
      );
    });
  }

  lines.push("## Merge Candidates", "");
  if (!suggestions.merge_candidates?.length) {
    lines.push("No merge candidates.", "");
  } else {
    suggestions.merge_candidates.forEach((suggestion, index) => {
      lines.push(
        `${index + 1}. ${suggestion.incoming_title || suggestion.incoming}`,
        `   - Existing: ${suggestion.existing_title || suggestion.existing} (${suggestion.existing})`,
        `   - Incoming: ${suggestion.incoming_title || suggestion.incoming} (${suggestion.incoming})`,
        `   - Confidence: ${suggestion.confidence}`,
        `   - Reason: ${suggestion.reason}`,
        "   - Approved: false",
        ""
      );
    });
  }

  lines.push("## Incoming Relationships", "");
  if (!suggestions.relationship_imports?.length) {
    lines.push("No imported relationships touch existing nodes.", "");
  } else {
    suggestions.relationship_imports.forEach((suggestion, index) => {
      lines.push(
        `${index + 1}. ${suggestion.relationship}`,
        `   - Type: ${suggestion.type}`,
        `   - Source: ${suggestion.source}`,
        `   - Target: ${suggestion.target}`,
        `   - Reason: ${suggestion.reason}`,
        "   - Approved: false",
        ""
      );
    });
  }

  return `${lines.join("\n")}\n`;
}

function formatCoreValidationIssue(issue) {
  const label = issue?.label || issue?.kind || "artifact";
  const schema = issue?.schema ? ` (${issue.schema})` : "";
  const details = Array.isArray(issue?.errors)
    ? issue.errors.map((error) => {
        const instancePath = error.instancePath || "/";
        return `${instancePath} ${error.message || "failed validation"}`.trim();
      }).join("; ")
    : issue?.message || JSON.stringify(issue);
  return `${label}${schema}: ${details}`;
}

function buildCoreReviewSuggestions(nodes, protocolNodes, protocolEdges, authoredFragmentNodes, importedNodes, importedRelationships) {
  const nodeList = [...nodes.values()];
  const generatedAt = new Date().toISOString();
  const coreNodes = nodeList.map((node) => ({
    id: node.id,
    protocolId: node.protocolId,
    protocol_id: node.protocolId,
    title: node.data.title || node.id,
    type: node.data.type,
    body: node.body || "",
    data: {
      ...node.data,
      aliases: nodeAliases(node.data)
    },
    file: node.file,
    body_start_line: node.body_start_line
  }));
  const coreFragments = authoredFragmentNodes.map((fragment) => ({
    protocol_id: fragment.protocol_id,
    source_node: fragment.sourceProtocolId,
    text: fragment.text,
    generated: false
  }));
  const analysis = analyzeSubstrateIntake({
    nodes: coreNodes,
    protocolNodes,
    relationships: protocolEdges,
    fragments: coreFragments
  }, {
    nodes: importedNodes,
    relationships: importedRelationships
  });
  const localByProtocol = new Map(coreNodes.map((node) => [node.protocolId, node]));
  const targetByProtocol = new Map([
    ...protocolNodes.map((node) => [node.id, node]),
    ...importedNodes.map((node) => [node.id, node])
  ]);
  const fragmentByProtocol = new Map(authoredFragmentNodes.map((fragment) => [fragment.protocol_id, fragment]));
  const implementedTransclusions = protocolEdges
    .filter((edge) => edge.type === "transcludes")
    .map((edge) => {
      const source = localByProtocol.get(edge.source);
      const fragment = fragmentByProtocol.get(edge.target);
      return {
        implemented: true,
        file: source?.file || edge.source,
        source_node: source?.id || edge.source,
        target_node: edge.target,
        target_title: fragment?.title || edge.target,
        version: fragment?.version || "versioned",
        range: fragment?.id || "fragment",
        tumbler: edge.tumbler || fragment?.tumbler || "",
        matched_text: fragment?.text || fragment?.summary || edge.summary || "",
        replacement: edge.tumbler || edge.target,
        note: "Already implemented as a stable XanaNode transclusion relationship."
      };
    });

  return {
    generated_at: generatedAt,
    status: "pending_user_approval",
    note: "These suggestions are not auto-applied. Review each replacement before editing content.",
    implemented_transclusions: implementedTransclusions,
    autolinks: analysis.autolinks.map((suggestion) => {
      const source = localByProtocol.get(suggestion.source);
      const target = targetByProtocol.get(suggestion.target);
      const line = suggestion.position?.line || 1;
      const column = suggestion.position?.column || 1;
      return {
        approved: false,
        file: source?.file || suggestion.source,
        line: line + (source?.body_start_line || 1) - 1,
        column,
        source_node: source?.id || suggestion.source_local_id || suggestion.source,
        target_node: target?.id || suggestion.target_local_id || suggestion.target,
        target_title: target?.title || suggestion.target,
        matched_text: suggestion.phrase,
        matched_term: suggestion.phrase,
        match_kind: "core",
        replacement: `[${suggestion.phrase}](${target?.local_id || suggestion.target_local_id || suggestion.target})`,
        note: approvedReplacementNote()
      };
    }),
    transclusions: analysis.transclusions.map((suggestion) => {
      const source = localByProtocol.get(suggestion.source);
      return {
        approved: false,
        file: source?.file || suggestion.source,
        line: 1,
        column: 1,
        source_node: source?.id || suggestion.source,
        target_node: suggestion.target_fragment,
        target_title: suggestion.target_fragment,
        version: "versioned",
        range: "fragment",
        matched_text: suggestion.reason,
        replacement: suggestion.action?.replacement || `{{< xana ref="${suggestion.target_fragment}" >}}`,
        note: approvedReplacementNote()
      };
    }),
    merge_candidates: analysis.merge_candidates,
    relationship_imports: analysis.relationship_imports,
    new_nodes: analysis.new_nodes,
    dangling_relationships: analysis.dangling_relationships
  };
}

const nodeTypesPath = resolveMostRecentJson("xananode-node-types");
const nodeTypesSchemaPath = resolveMostRecentJson("xananode-node-types.schema");
const relationshipTypesPath = resolveMostRecentJson("xananode-relationship-types");
const relationshipTypesSchemaPath = resolveMostRecentJson("xananode-relationship-types.schema");
const substrateManifestSchemaPath = firstExistingFile("substrate-manifest.schema.json");
const substrateNodeSchemaPath = firstExistingFile("substrate-node.schema.json");
const substrateRelationshipsSchemaPath = firstExistingFile("substrate-relationships.schema.json");

if (!nodeTypesPath) errors.push("Missing xananode-node-types.json.");
if (!nodeTypesSchemaPath) errors.push("Missing xananode-node-types.schema.json.");
if (!relationshipTypesPath) errors.push("Missing xananode-relationship-types.json.");
if (!relationshipTypesSchemaPath) errors.push("Missing xananode-relationship-types.schema.json.");
if (!substrateManifestSchemaPath) errors.push("Missing substrate-manifest.schema.json.");
if (!substrateNodeSchemaPath) errors.push("Missing substrate-node.schema.json.");
if (!substrateRelationshipsSchemaPath) errors.push("Missing substrate-relationships.schema.json.");

if (errors.length) finish();

const nodeTypesRegistry = readJson(nodeTypesPath);
const nodeTypesSchema = readJson(nodeTypesSchemaPath);
const relationshipTypesRegistry = readJson(relationshipTypesPath);
const relationshipTypesSchema = readJson(relationshipTypesSchemaPath);
const substrateManifestSchema = readJson(substrateManifestSchemaPath);
const substrateNodeSchema = readJson(substrateNodeSchemaPath);
const substrateRelationshipsSchema = readJson(substrateRelationshipsSchemaPath);

const ajv = new Ajv2020({ allErrors: true, strict: false, validateFormats: false });
const validateNodeRegistry = ajv.compile(nodeTypesSchema);
const validateRelationshipRegistry = ajv.compile(relationshipTypesSchema);
const validateSubstrateManifest = ajv.compile(substrateManifestSchema);
const validateSubstrateNode = ajv.compile(substrateNodeSchema);
const validateSubstrateRelationships = ajv.compile(substrateRelationshipsSchema);

if (!validateNodeRegistry(nodeTypesRegistry)) {
  errors.push(`Node type registry does not match schema:\n${ajv.errorsText(validateNodeRegistry.errors, { separator: "\n" })}`);
}
if (!validateRelationshipRegistry(relationshipTypesRegistry)) {
  errors.push(`Relationship type registry does not match schema:\n${ajv.errorsText(validateRelationshipRegistry.errors, { separator: "\n" })}`);
}

const nodeTypeMap = new Map((nodeTypesRegistry.node_types || []).map((nodeType) => [nodeType.type, nodeType]));
const relationshipTypeMap = new Map((relationshipTypesRegistry.relationship_types || []).map((relationshipType) => [relationshipType.type, relationshipType]));
const relationshipInverseMap = new Map((relationshipTypesRegistry.relationship_types || []).map((relationshipType) => [relationshipType.type, relationshipType.inverse]));
const relationshipInverseToTypeMap = new Map(
  (relationshipTypesRegistry.relationship_types || [])
    .filter((relationshipType) => relationshipType.inverse)
    .map((relationshipType) => [relationshipType.inverse, relationshipType.type])
);

function relationshipDefinitionFor(type) {
  return relationshipTypeMap.get(type) || relationshipTypeMap.get(relationshipInverseToTypeMap.get(type));
}

function normalizeAuthoredEdge(edge) {
  const canonicalType = relationshipInverseToTypeMap.get(edge.type);
  if (!relationshipTypeMap.has(edge.type) && canonicalType) {
    return {
      ...edge,
      source: edge.target,
      target: edge.source,
      type: canonicalType,
      authoredType: edge.type,
      inverted: true
    };
  }
  return { ...edge, authoredType: edge.type, inverted: false };
}

const contentDir = path.join(siteRoot, "content");
if (!fs.existsSync(contentDir)) errors.push("Missing content directory.");
if (errors.length) finish();

const contentFiles = globSync("content/**/*.md", {
  cwd: siteRoot,
  nodir: true,
  ignore: ["content/**/_index.md"]
});
const substrateNamespace = slugify(process.env.XANANODE_NAMESPACE || "xananode.example", "xananode.example");
const { importedNodes, importedRelationships, importedPacks } = collectImportedProtocolArtifacts();
const nodes = new Map();
const authoredEdges = [];
const authoredFragmentNodes = [];
const authoredFragmentNodeMap = new Map();
const shortcodeTransclusionEdges = [];
const fragments = { generated_at: new Date().toISOString(), nodes: {} };
let reviewSuggestions = null;
const substrateManifest = {
  id: substrateNamespace,
  name: process.env.XANANODE_NAME || "XanaNode Hugo Substrate",
  description: process.env.XANANODE_DESCRIPTION || "A Hugo-published XanaNode-compatible knowledge substrate.",
  version: process.env.XANANODE_VERSION || "0.1.0",
  namespace: substrateNamespace,
  repository: {
    type: "git",
    url: process.env.XANANODE_REPOSITORY_URL || "https://github.com/kingc95/xananode-hugo",
    default_branch: process.env.XANANODE_REPOSITORY_BRANCH || "main",
    ...(process.env.XANANODE_REPOSITORY_PATH ? { path: process.env.XANANODE_REPOSITORY_PATH } : {}),
    ...(process.env.XANANODE_REPOSITORY_COMMIT ? { commit: process.env.XANANODE_REPOSITORY_COMMIT } : {})
  },
  schema_version: `xananode-core@${relationshipTypesRegistry.version || "0.4.0"}`,
  imports: ["xananode:core", ...importedPacks]
};

for (const relativeFile of contentFiles) {
  const absoluteFile = path.join(siteRoot, relativeFile);
  const raw = fs.readFileSync(absoluteFile, "utf8");
  const parsed = matter(raw);
  const data = parsed.data || {};
  if (!data.type) {
    errors.push(`${relativeFile}: missing required front matter field "type".`);
    continue;
  }
  const id = nodeIdFor(relativeFile, data);
  const protocolId = protocolIdFor(id, data, substrateNamespace);
  if (nodes.has(id)) {
    errors.push(`${relativeFile}: duplicate node id "${id}" also used by ${nodes.get(id).file}.`);
    continue;
  }
  nodes.set(id, { id, protocolId, file: relativeFile, data, body: parsed.content, body_start_line: bodyStartLine(raw, parsed.content) });
  const version = data.version || "v1";
  const sourceContentId = data.content_id || contentIdFor(parsed.content);
  const sourceVersionId = data.version_id || sourceContentId;
  fragments.nodes[id] = fragments.nodes[id] || { versions: {} };
  fragments.nodes[id].title = data.title || id;
  fragments.nodes[id].type = data.type;
  fragments.nodes[id].versions[version] = buildFragments(parsed.content, data, {
    namespace: substrateNamespace,
    localId: id,
    protocolId,
    file: relativeFile,
    version,
    sourceContentId,
    sourceVersionId
  });
  if (!fragments.nodes[id].versions.latest) {
    fragments.nodes[id].versions.latest = fragments.nodes[id].versions[version];
  }
  for (const fragment of Object.values(fragments.nodes[id].versions[version].metadata || {})) {
    const authoredFragment = {
      ...fragment,
      sourceLocalId: id,
      sourceProtocolId: protocolId,
      version
    };
    authoredFragmentNodes.push(authoredFragment);
    authoredFragmentNodeMap.set(fragment.protocol_id, authoredFragment);
    authoredFragmentNodeMap.set(`${id}@${version}/${fragment.id}`, authoredFragment);
    authoredFragmentNodeMap.set(`${id}@latest/${fragment.id}`, authoredFragment);
    authoredFragmentNodeMap.set(fragment.tumbler, authoredFragment);
  }
}

for (const [index, link] of configuredThemeLinks().entries()) {
  if (link.private === true || link.generate_node === false || link.node === false) continue;
  const explicitNodeId = String(link.node || link.nodeId || "").trim();
  const generatedId = String(link.id || explicitNodeId || `source-${slugify(link.label, "link")}`).trim();
  const url = String(link.url || link.href || "").trim();
  const label = String(link.label || link.title || generatedId).trim();
  if (!generatedId || !url || nodes.has(generatedId)) continue;
  const relationshipTarget = String(link.relationship_target || link.target || "").trim();
  const relationshipType = String(link.relationship_type || link.relationship || (relationshipTarget ? "documents" : "")).trim();
  const relationships = relationshipTarget && relationshipType
    ? [{
        type: relationshipType,
        target: relationshipTarget,
        summary: String(link.relationship_summary || `${label} ${relationshipType.replaceAll("_", " ")} ${relationshipTarget}.`)
      }]
    : [];

  const data = {
    id: generatedId,
    title: label,
    type: "source",
    ...(link.subtype ? { subtype: String(link.subtype) } : {}),
    ...(link.subtypes ? { subtypes: String(link.subtypes).split(",").map((item) => item.trim()).filter(Boolean) } : {}),
    summary: String(link.summary || `${label} external reference.`),
    source_url: url,
    importance: Number(link.importance || 2),
    source_name: label,
    rights_status: String(link.rights_status || "external"),
    relationships
  };
  const protocolId = protocolIdFor(generatedId, data, substrateNamespace);
  const file = `config:xananode.links[${index}]`;
  nodes.set(generatedId, {
    id: generatedId,
    protocolId,
    file,
    data,
    body: "",
    body_start_line: 1,
    generated: true
  });
}

const nodeLookup = new Map();
for (const node of nodes.values()) {
  nodeLookup.set(node.id, node);
  nodeLookup.set(node.protocolId, node);
  nodeLookup.set(node.data.protocol_id, node);
}
const importedNodeLookup = new Map(importedNodes.map((node) => [node.id, node]));

function resolveNodeRef(ref) {
  const normalized = String(ref || "").trim();
  return nodeLookup.get(normalized) || importedNodeLookup.get(normalized) || null;
}

function resolveNodeId(ref) {
  const node = resolveNodeRef(ref);
  if (!node) return String(ref || "");
  return node.protocolId || node.id;
}

function authoredEdgeNode(id) {
  const localNode = nodes.get(id) || nodeLookup.get(id);
  if (localNode) {
    return {
      id: localNode.id,
      protocolId: localNode.protocolId,
      title: localNode.data.title,
      data: localNode.data,
      local: true
    };
  }
  const importedNode = importedNodeLookup.get(id);
  if (importedNode) {
    return {
      id: importedNode.id,
      protocolId: importedNode.id,
      title: importedNode.title,
      data: importedNode,
      local: false
    };
  }
  return null;
}

for (const node of nodes.values()) {
  const { id, file, data, body } = node;
  const nodeType = nodeTypeMap.get(data.type);
  if (!nodeType) {
    errors.push(`${file}: unknown node type "${data.type}".`);
    continue;
  }
  for (const requiredField of nodeType.required_frontmatter || []) {
    if (data[requiredField] === undefined || data[requiredField] === null || data[requiredField] === "") {
      errors.push(`${file}: node type "${data.type}" requires front matter field "${requiredField}".`);
    }
  }
  if (data.subtype && Array.isArray(nodeType.allowed_subtypes) && nodeType.allowed_subtypes.length && !nodeType.allowed_subtypes.includes(data.subtype)) {
    errors.push(`${file}: subtype "${data.subtype}" is not allowed for node type "${data.type}".`);
  }
  for (const [index, relationship] of asArray(data.relationships).entries()) {
    if (!relationship || typeof relationship !== "object") {
      errors.push(`${file}: relationships[${index}] must be an object.`);
      continue;
    }
    if (!relationship.type) errors.push(`${file}: relationships[${index}] is missing "type".`);
    if (!relationship.target) errors.push(`${file}: relationships[${index}] is missing "target".`);
    if (relationship.type && !relationshipDefinitionFor(relationship.type)) {
      errors.push(`${file}: relationship "${relationship.type}" is not in xananode-relationship-types.json.`);
    }
    const targetNode = resolveNodeRef(relationship.target);
    if (relationship.target && !targetNode) {
      errors.push(`${file}: relationship "${relationship.type}" points to missing target "${relationship.target}".`);
    }
    if (relationship.weight !== undefined && (!Number.isInteger(relationship.weight) || relationship.weight < 1 || relationship.weight > 5)) {
      errors.push(`${file}: relationship "${relationship.type}" has invalid weight "${relationship.weight}". Use integer 1-5.`);
    }
    if (relationship.visibility !== undefined && !["primary", "secondary", "background"].includes(relationship.visibility)) {
      errors.push(`${file}: relationship "${relationship.type}" has invalid visibility "${relationship.visibility}".`);
    }
    if (relationship.type && relationship.target) {
      authoredEdges.push(normalizeAuthoredEdge({ source: id, target: resolveNodeId(relationship.target), type: relationship.type, file, relationship, index }));
    }
  }
  const implicitReferenceFields = ["claims", "sources", "people", "concepts", "projects", "events", "organizations", "technologies", "observations", "media", "depicts", "nodes"];
  for (const field of implicitReferenceFields) {
    for (const target of asArray(data[field])) {
      if (typeof target !== "string") errors.push(`${file}: ${field} contains a non-string target.`);
      else if (!resolveNodeRef(target)) errors.push(`${file}: ${field} points to missing target "${target}".`);
    }
  }
  if (data.primary_media && !resolveNodeRef(data.primary_media)) errors.push(`${file}: primary_media points to missing target "${data.primary_media}".`);
  if (data.type === "claim" && !data.status) errors.push(`${file}: claim nodes require "status".`);
  if (data.type === "source" && !data.source_url && !data.file) warnings.push(`${file}: source node has neither source_url nor file.`);

  for (const { ref } of findXanaReferences(body)) {
    const parsedRef = parseXanaRef(ref);
    if (!parsedRef) {
      errors.push(`${file}: invalid XanaNode reference "${ref}".`);
      continue;
    }
    const targetNode = fragments.nodes[parsedRef.nodeId];
    if (!targetNode) {
      errors.push(`${file}: XanaNode reference points to missing node "${parsedRef.nodeId}".`);
      continue;
    }
    const version = targetNode.versions[parsedRef.version] || (parsedRef.version === "latest" ? targetNode.versions.latest : null);
    if (!version) {
      errors.push(`${file}: XanaNode reference "${ref}" points to missing version "${parsedRef.version}".`);
      continue;
    }
    const text = rangeToText(version.fragments, parsedRef.range);
    if (!text) {
      errors.push(`${file}: XanaNode reference "${ref}" points to missing tumbler range "${parsedRef.range}".`);
    }
    const authoredFragment = authoredFragmentNodeMap.get(`${parsedRef.nodeId}@${parsedRef.version}/${parsedRef.range}`)
      || authoredFragmentNodeMap.get(`${parsedRef.nodeId}@latest/${parsedRef.range}`);
    if (authoredFragment) {
      shortcodeTransclusionEdges.push({
        source: id,
        target: authoredFragment.protocol_id,
        ref,
        tumbler: authoredFragment.tumbler
      });
    }
    if (parsedRef.version === "latest") {
      warnings.push(`${file}: XanaNode reference "${ref}" floats with latest. Pin with @v1, @v2, etc. when stable quotation identity matters.`);
    }
  }
}

const edgeSet = new Set(authoredEdges.map((edge) => `${edge.source}\u0000${edge.type}\u0000${edge.target}`));
for (const edge of authoredEdges) {
  const inverseType = relationshipInverseMap.get(edge.type);
  if (!inverseType) continue;
  const inverseKey = `${edge.target}\u0000${inverseType}\u0000${edge.source}`;
  if (edgeSet.has(inverseKey)) {
    warnings.push(`${edge.file}: authored edge ${edge.source} --${edge.type}--> ${edge.target} has a manually authored inverse. Prefer one authored edge; let XanaNode derive the inverse.`);
  }
}

const authoredProtocolEdges = authoredEdges.map((edge, index) => {
  const sourceNode = authoredEdgeNode(edge.source);
  const targetNode = authoredEdgeNode(edge.target);
  const relationship = edge.relationship || {};
  return {
    id: relationship.id || relationship.protocol_id || relationshipIdFor(substrateNamespace, sourceNode.protocolId, edge.type, targetNode.protocolId, index),
    source: sourceNode.protocolId,
    target: targetNode.protocolId,
    type: edge.type,
    weight: relationship.weight || relationshipDefinitionFor(edge.type)?.default_weight || 3,
    visibility: relationship.visibility || relationshipDefinitionFor(edge.type)?.default_visibility || "secondary",
    summary: relationship.summary || generatedSummary({
      source: sourceNode.protocolId,
      sourceTitle: sourceNode.data.title,
      target: targetNode.protocolId,
      targetTitle: targetNode.data.title || targetNode.title,
      type: edge.type
    }),
    ...(relationship.asserted_by ? { asserted_by: nodes.get(relationship.asserted_by)?.protocolId || relationship.asserted_by } : {}),
    ...(relationship.asserted_at ? { asserted_at: relationship.asserted_at } : {}),
    ...(relationship.valid_from ? { valid_from: relationship.valid_from } : {}),
    ...(relationship.valid_to ? { valid_to: relationship.valid_to } : {}),
    ...(relationship.confidence ? { confidence: relationship.confidence } : {}),
    ...(relationship.tumbler ? { tumbler: relationship.tumbler } : {}),
    ...(relationship.evidence ? { evidence: asArray(relationship.evidence).map((item) => nodes.get(item)?.protocolId || item) } : {}),
    ...(relationship.external ? { external: true } : {}),
    ...(relationship.target_substrate ? { target_substrate: relationship.target_substrate } : {})
  };
});

const fragmentDerivedEdges = authoredFragmentNodes.map((fragment, index) => ({
  id: `${substrateNamespace}:rel/${slugify(fragment.sourceLocalId, "source")}-fragment-${slugify(fragment.id, "fragment")}-derived-from-source`,
  source: fragment.protocol_id,
  target: fragment.sourceProtocolId,
  type: "derived_from",
  weight: relationshipTypeMap.get("derived_from")?.default_weight || 3,
  visibility: relationshipTypeMap.get("derived_from")?.default_visibility || "secondary",
  tumbler: fragment.tumbler,
  summary: `${fragment.title} is derived from a stable addressable portion of its source node.`
}));

const primaryMediaEdges = [...nodes.values()]
  .filter((node) => node.data.primary_media)
  .map((node, index) => {
    const mediaNode = nodes.get(node.data.primary_media);
    return {
      id: `${substrateNamespace}:rel/${slugify(node.id, "source")}-represented-by-${slugify(node.data.primary_media, "media")}`,
      source: node.protocolId,
      target: mediaNode.protocolId,
      type: "has_primary_media",
      weight: relationshipTypeMap.get("has_primary_media")?.default_weight || 5,
      visibility: relationshipTypeMap.get("has_primary_media")?.default_visibility || "primary",
      summary: `${node.data.title || node.id} uses ${mediaNode.data.title || mediaNode.id} as its primary media.`
    };
  });

const shortcodeProtocolEdges = shortcodeTransclusionEdges.map((edge, index) => {
  const sourceNode = nodes.get(edge.source);
  const targetFragment = authoredFragmentNodeMap.get(edge.target);
  return {
    id: `${substrateNamespace}:rel/${slugify(edge.source, "source")}-transcludes-${slugify(targetFragment?.id || index + 1, "fragment")}`,
    source: sourceNode.protocolId,
    target: edge.target,
    type: "transcludes",
    weight: relationshipTypeMap.get("transcludes")?.default_weight || 3,
    visibility: relationshipTypeMap.get("transcludes")?.default_visibility || "secondary",
    tumbler: edge.tumbler,
    summary: `${sourceNode.data.title || edge.source} transcludes ${targetFragment?.title || edge.target} by stable reference.`
  };
});

const protocolEdges = [
  ...authoredProtocolEdges,
  ...fragmentDerivedEdges,
  ...primaryMediaEdges,
  ...shortcodeProtocolEdges,
  ...importedRelationships.map(protocolRelationshipRecord)
];

const protocolRelationshipList = { relationships: protocolEdges };
const localNodeByProtocolId = new Map([...nodes.values()].map((node) => [node.protocolId, node]));
const importedNodeIdsForRelationships = new Set(importedNodes.map((node) => node.id));
function relationshipKeyForProtocolId(protocolId) {
  const localNode = localNodeByProtocolId.get(protocolId);
  if (localNode) return localNode.id;
  if (importedNodeIdsForRelationships.has(protocolId)) return protocolId;
  return authoredFragmentNodeMap.get(protocolId)?.protocol_id || null;
}
const protocolRelationshipsByNode = new Map([
  ...[...nodes.values()].map((node) => [node.id, []]),
  ...authoredFragmentNodes.map((fragment) => [fragment.protocol_id, []]),
  ...importedNodes.map((node) => [node.id, []])
]);
for (const edge of protocolEdges) {
  const sourceRelationshipKey = relationshipKeyForProtocolId(edge.source);
  const targetRelationshipKey = relationshipKeyForProtocolId(edge.target);
  if (sourceRelationshipKey) {
    protocolRelationshipsByNode.get(sourceRelationshipKey).push({
      id: edge.id,
      type: edge.type,
      target: edge.target,
      direction: "outgoing",
      ...(edge.external ? { external: true } : {}),
      ...(edge.target_substrate ? { target_substrate: edge.target_substrate } : {})
    });
  }
  if (targetRelationshipKey) {
    protocolRelationshipsByNode.get(targetRelationshipKey).push({
      id: edge.id,
      type: edge.type,
      source: edge.source,
      direction: "incoming",
      ...(edge.external ? { external: true } : {}),
      ...(edge.target_substrate ? { target_substrate: edge.target_substrate } : {})
    });
  }
}

const protocolNodes = [...nodes.values()].map((node) => {
  const { data } = node;
  const protocolTrailNodes = asArray(data.nodes).map((id) => nodes.get(id)?.protocolId || id);
  const protocolTrailBranches = asArray(data.branches).map((branch) => ({
    ...branch,
    choices: asArray(branch?.choices).map((choice) => ({
      ...choice,
      nodes: asArray(choice?.nodes).map((id) => nodes.get(id)?.protocolId || id)
    }))
  }));
  return {
    id: node.protocolId,
    title: data.title || node.id,
    type: data.type,
    ...(data.subtype ? { subtype: data.subtype } : {}),
    ...(asArray(data.subtypes).length ? { subtypes: asArray(data.subtypes) } : {}),
    ...(asArray(data.facets).length ? { facets: asArray(data.facets) } : {}),
    ...(data.status ? { status: data.status } : {}),
    importance: data.importance || 3,
    summary: data.summary || "",
    ...(data.created_by ? { created_by: nodes.get(data.created_by)?.protocolId || data.created_by } : {}),
    ...(data.created_at ? { created_at: data.created_at } : {}),
    ...(data.updated_at ? { updated_at: data.updated_at } : {}),
    ...(data.source_url ? { source_url: data.source_url } : {}),
    ...(data.rights_status ? { rights_status: data.rights_status } : {}),
    ...(data.asset_path ? { asset_path: data.asset_path } : {}),
    ...(data.asset_role ? { asset_role: data.asset_role } : {}),
    ...(data.media_type ? { media_type: data.media_type } : {}),
    ...(data.mime_type ? { mime_type: data.mime_type } : {}),
    ...(data.alt ? { alt: data.alt } : {}),
    ...(data.caption ? { caption: data.caption } : {}),
    ...(data.source_snapshot ? { source_snapshot: data.source_snapshot } : {}),
    ...(data.confidence ? { confidence: data.confidence } : {}),
    ...(data.primary_media ? { primary_media: nodes.get(data.primary_media)?.protocolId || data.primary_media } : {}),
    ...(data.source_node ? { source_node: nodes.get(data.source_node)?.protocolId || data.source_node } : {}),
    ...(protocolTrailNodes.length ? { trail_nodes: protocolTrailNodes } : {}),
    ...(protocolTrailBranches.length ? { trail_branches: protocolTrailBranches } : {}),
    ...(data.fragment_id ? { fragment_id: data.fragment_id } : {}),
    ...(data.tumbler ? { tumbler: data.tumbler } : {}),
    ...(data.selector ? { selector: data.selector } : {}),
    relationships: protocolRelationshipsByNode.get(node.id) || []
  };
});

const importedNodeIds = new Set(protocolNodes.map((node) => node.id));
for (const importedNode of importedNodes) {
  if (importedNodeIds.has(importedNode.id)) {
    warnings.push(`Imported node "${importedNode.id}" duplicates a generated node and was ignored.`);
    continue;
  }
  protocolNodes.push({
    ...importedNode,
    relationships: protocolRelationshipsByNode.get(importedNode.id) || importedNode.relationships || []
  });
  importedNodeIds.add(importedNode.id);
}

for (const fragment of authoredFragmentNodes) {
  protocolNodes.push({
    id: fragment.protocol_id,
    title: fragment.title,
    type: "fragment",
    importance: 4,
    summary: fragment.summary,
    source_node: fragment.sourceProtocolId,
    source_content_id: fragment.source_content_id,
    source_version_id: fragment.source_version_id,
    content_id: fragment.content_id,
    version_id: fragment.version_id,
    fragment_id: fragment.id,
    tumbler: fragment.tumbler,
    selector: fragment.selector,
    ...(fragment.rights_status ? { rights_status: fragment.rights_status } : {}),
    relationships: protocolRelationshipsByNode.get(fragment.protocol_id) || []
  });
}

if (!validateSubstrateManifest(substrateManifest)) {
  errors.push(`Generated substrate manifest does not match schema:\n${ajv.errorsText(validateSubstrateManifest.errors, { separator: "\n" })}`);
}
if (!validateSubstrateRelationships(protocolRelationshipList)) {
  errors.push(`Generated relationship list does not match schema:\n${ajv.errorsText(validateSubstrateRelationships.errors, { separator: "\n" })}`);
}
for (const protocolNode of protocolNodes) {
  if (!validateSubstrateNode(protocolNode)) {
    errors.push(`Generated node "${protocolNode.id}" does not match schema:\n${ajv.errorsText(validateSubstrateNode.errors, { separator: "\n" })}`);
  }
}

const coreValidation = validateCoreSubstrateArtifacts({
  manifest: substrateManifest,
  protocolNodes,
  relationships: protocolEdges
});
for (const coreError of coreValidation.errors || []) {
  errors.push(`Core SDK protocol validation failed: ${formatCoreValidationIssue(coreError)}`);
}
for (const coreWarning of coreValidation.warnings || []) {
  warnings.push(`Core SDK protocol warning: ${formatCoreValidationIssue(coreWarning)}`);
}

reviewSuggestions = buildCoreReviewSuggestions(nodes, protocolNodes, protocolEdges, authoredFragmentNodes, importedNodes, importedRelationships);

const localProtocolToViewerId = new Map([
  ...[...nodes.values()].map((node) => [node.protocolId, node.id]),
  ...authoredFragmentNodes.map((fragment) => [fragment.protocol_id, fragment.protocol_id]),
  ...importedNodes.map((node) => [node.id, node.id])
]);
const localProtocolNodeLookup = new Map([...nodes.values()].map((node) => [node.protocolId, node]));

function viewerIdForProtocolId(id) {
  return localProtocolToViewerId.get(id) || id;
}

function viewerNodeFromProtocolNode(node) {
  const localNode = localProtocolNodeLookup.get(node.id);
  const localId = localNode?.id || viewerIdForProtocolId(node.id);
  const localType = localNode?.data?.type || node.type;
  return {
    id: localId,
    protocol_id: node.id,
    title: localNode?.data?.title || node.title,
    type: localType,
    facets: asArray(localNode?.data?.facets || node.facets),
    section: `${protocolTypePath(localType)}s`,
    importance: localNode?.data?.importance || node.importance || 3,
    summary: localNode?.data?.summary || node.summary || "",
    content: localNode ? stripMarkdown(localNode.body).slice(0, 1200) : node.content || node.summary || "",
    url: localNode
      ? `/${protocolTypePath(localType)}/${slugify(localNode.id, "node")}/`
      : `/${protocolTypePath(localType)}/${slugify(String(localId).split("/").at(-1), "node")}/`,
    primary_media: localNode?.data?.primary_media
      ? nodes.get(localNode.data.primary_media)?.protocolId || localNode.data.primary_media
      : node.primary_media || "",
    media_type: localNode?.data?.media_type || node.media_type || "",
    file: localNode?.data?.file || node.file || "",
    alt: localNode?.data?.alt || node.alt || "",
    caption: localNode?.data?.caption || node.caption || "",
    creator: localNode?.data?.creator || node.creator || "",
    created_date: localNode?.data?.created_date || node.created_date || "",
    source_name: localNode?.data?.source_name || node.source_name || "",
    source_url: node.source_url || "",
    license: localNode?.data?.license || node.license || "",
    license_url: localNode?.data?.license_url || node.license_url || "",
    rights_status: node.rights_status || "",
    tumbler: node.tumbler || "",
    trail_nodes: asArray(node.trail_nodes).map(viewerIdForProtocolId),
    generated: Boolean(localNode?.generated),
    imported: Boolean(node.imported_from),
    imported_from: node.imported_from || ""
  };
}

function protocolOnlyNodeRoutes(node) {
  const protocolId = String(node?.protocol_id || "");
  if (!node || (!String(node.id || "").includes(":") && !node.imported && !node.generated)) return [];
  const typeSegment = protocolTypePath(node.type || "node");
  const id = String(node.id || "");
  const addressId = protocolId || id;
  const tail = slugify(id.split("/").at(-1), "node");
  const routes = [
    `${typeSegment}/${encodeURIComponent(addressId)}/index.html`,
    `${typeSegment}/${tail}/index.html`
  ];
  const parts = addressId.split("/");
  if (parts.length >= 2) {
    routes.push(`${typeSegment}/${encodeURIComponent(parts[0])}/${encodeURIComponent(parts.slice(1).join("/"))}/index.html`);
  }
  return [...new Set(routes)];
}

function renderProtocolNodeResolverPage(node) {
  const title = `${node.title || node.id} | ${substrateManifest.name}`;
  const description = node.summary || substrateManifest.description || "";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="/${protocolTypePath(node.type || "node")}/${slugify(String(node.id || "").split("/").at(-1), "node")}/">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#55d6be">
  <link rel="stylesheet" href="/css/style.min.css">
  <link rel="icon" type="image/svg+xml" href="/xananode-icon.svg">
</head>
<body>
  <main class="site-main">
    <section class="xana-app" data-xana-protocol-resolver="true">
      <div id="xana-graph"></div>
      <aside id="xana-panel" class="xana-panel">
        <p class="panel-placeholder">Resolving ${escapeHtml(node.title || node.id)}...</p>
      </aside>
    </section>
    <script src="/js/xananode.js"></script>
  </main>
</body>
</html>
`;
}

function renderSuggestionReviewPage(suggestions) {
  const autolinks = asArray(suggestions.autolinks);
  const transclusions = asArray(suggestions.transclusions);
  const implementedTransclusions = asArray(suggestions.implemented_transclusions);
  const merges = asArray(suggestions.merge_candidates);
  const relationships = asArray(suggestions.relationship_imports);
  const rows = [
    ...autolinks.map((item) => ({
      kind: "Autolink",
      title: item.target_title || item.target_node || "",
      detail: `${item.file || ""}:${item.line || 1} ${item.matched_text || ""}`,
      action: item.replacement || ""
    })),
    ...transclusions.map((item) => ({
      kind: "Transclusion",
      title: item.target_title || item.target_node || "",
      detail: `${item.file || ""}:${item.line || 1} ${item.matched_text || ""}`,
      action: item.replacement || ""
    })),
    ...merges.map((item) => ({
      kind: "Merge candidate",
      title: item.incoming_title || item.incoming || "",
      detail: `Existing: ${item.existing_title || item.existing || ""}. Confidence: ${item.confidence || ""}`,
      action: item.reason || ""
    })),
    ...relationships.map((item) => ({
      kind: "Relationship import",
      title: item.relationship || "",
      detail: `${item.source || ""} --${item.type || ""}--> ${item.target || ""}`,
      action: item.summary || ""
    }))
  ];
  const implementedExamples = implementedTransclusions.length ? implementedTransclusions.map((item) => ({
    kind: "Transclusion",
    title: item.target_title || item.target_node || "",
    detail: `${item.file || ""} transcludes ${shortPreview(item.matched_text || item.tumbler || "")}`,
    action: item.tumbler || item.replacement || ""
  })) : [
    {
      kind: "Implemented",
      title: "Review Suggestions node",
      detail: "The example substrate includes a normal concept node that points authors to this generated review page.",
      action: "/node/review-suggestions"
    },
    {
      kind: "Implemented",
      title: "Protocol fragment route",
      detail: "Imported protocol fragments are generated as static resolver pages during the Hugo build.",
      action: "/fragment/xanadu-document-interconnection-0001/"
    }
  ];
  const renderRow = (row, status) => `<article class="xana-list-card xana-review-card" data-review-status="${escapeHtml(status)}">
        <div class="xana-review-card-head">
          <p class="xana-node-type">${escapeHtml(row.kind)}</p>
          <span class="xana-review-status">${escapeHtml(status === "implemented" ? "Implemented" : "Pending")}</span>
        </div>
        <h2>${escapeHtml(row.title || "Untitled suggestion")}</h2>
        <p>${escapeHtml(row.detail)}</p>
        <code>${escapeHtml(row.action)}</code>
      </article>`;
  const implementedList = implementedExamples.map((row) => renderRow(row, "implemented")).join("\n");
  const pendingList = rows.length
    ? rows.map((row) => renderRow(row, "pending")).join("\n")
    : `<p class="xana-empty">No pending Core suggestions.</p>`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>XanaNode Review Suggestions | ${escapeHtml(substrateManifest.name)}</title>
  <meta name="robots" content="noindex, follow">
  <link rel="stylesheet" href="/css/style.min.css">
  <script>
    (function () {
      try {
        var theme = JSON.parse(localStorage.getItem("xananode.colorTheme") || "\\"dark\\"");
        var density = JSON.parse(localStorage.getItem("xananode.uiDensity") || "\\"comfortable\\"");
        var readerFontScale = JSON.parse(localStorage.getItem("xananode.readerFontScale") || "100");
        document.documentElement.dataset.xanaTheme = theme;
        document.documentElement.dataset.xanaDensity = density;
        document.documentElement.style.setProperty("--xana-reader-scale", String(Math.min(150, Math.max(85, Number(readerFontScale) || 100)) / 100));
      } catch (_) {}
    })();
  </script>
</head>
<body>
  <main class="xana-list-page xana-review-page">
    <nav class="xana-review-nav" aria-label="Review navigation">
      <a href="/">Back to graph</a>
      <a href="/node/review-suggestions/">How this works</a>
    </nav>
    <header class="xana-list-hero">
      <p class="xana-node-type">Core review queue</p>
      <h1>XanaNode Review Suggestions</h1>
      <p>These suggestions are generated by Core and are not applied automatically. Implemented examples show what the workflow looks like after an author accepts a change; pending items stay visible for review.</p>
      <div class="xana-list-metrics">
        <div class="xana-list-metric"><span class="xana-list-metric-value">${implementedExamples.length}</span><span class="xana-list-metric-label">Implemented transclusions</span></div>
        <div class="xana-list-metric"><span class="xana-list-metric-value">${rows.length}</span><span class="xana-list-metric-label">Pending suggestions</span></div>
        <div class="xana-list-metric"><span class="xana-list-metric-value">${autolinks.length + transclusions.length}</span><span class="xana-list-metric-label">Link opportunities</span></div>
      </div>
    </header>
    <section class="xana-review-section" aria-labelledby="implemented-review-heading">
      <h2 id="implemented-review-heading">Implemented examples</h2>
      <div class="xana-list-grid">
        ${implementedList}
      </div>
    </section>
    <section class="xana-review-section" aria-labelledby="pending-review-heading">
      <h2 id="pending-review-heading">Pending Core suggestions</h2>
      <div class="xana-list-grid">
      ${pendingList}
      </div>
    </section>
  </main>
</body>
</html>
`;
}

const viewerFeed = {
  namespace: substrateNamespace,
  nodes: protocolNodes.map(viewerNodeFromProtocolNode),
  edges: protocolEdges.map((edge) => ({
    source: viewerIdForProtocolId(edge.source),
    target: viewerIdForProtocolId(edge.target),
    type: edge.type,
    weight: edge.weight || 3,
    visibility: edge.visibility || "secondary",
    origin: edge.imported_from ? "imported_relationship" : "protocol_relationship",
    protocol_id: edge.id,
    summary: edge.summary || "",
    asserted_by: edge.asserted_by || "",
    asserted_at: edge.asserted_at || "",
    valid_from: edge.valid_from || "",
    valid_to: edge.valid_to || "",
    confidence: edge.confidence || "",
    external: Boolean(edge.external),
    target_substrate: edge.target_substrate || ""
  }))
};
const nodesIndex = {
  namespace: substrateNamespace,
  nodes: protocolNodes.map((node) => ({
    id: node.id,
    path: `nodes/${slugify(node.id.split("/").at(-1), "node")}.json`,
    title: node.title,
    type: node.type,
    imported: Boolean(node.imported_from)
  }))
};

const dataDir = path.join(siteRoot, "data");
const staticDir = path.join(siteRoot, "static");
const staticSchemaDir = path.join(staticDir, "schemas");
const staticNodesDir = path.join(staticDir, "nodes");
fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(staticDir, { recursive: true });
fs.mkdirSync(staticNodesDir, { recursive: true });
copyProtocolSchemas(staticSchemaDir);
const fragmentsOutput = withStableGeneratedAt(fragments, path.join(dataDir, "xananode_fragments.json"));
reviewSuggestions = withStableGeneratedAt(reviewSuggestions, path.join(dataDir, "xananode_suggestions.json"));
fs.writeFileSync(path.join(dataDir, "xananode_fragments.json"), JSON.stringify(fragmentsOutput, null, 2) + "\n");
fs.writeFileSync(path.join(dataDir, "xananode_suggestions.json"), JSON.stringify(reviewSuggestions, null, 2) + "\n");
fs.writeFileSync(path.join(staticDir, "xananode-fragments.json"), JSON.stringify(fragmentsOutput, null, 2) + "\n");
fs.writeFileSync(path.join(staticDir, "xananode-suggestions.json"), JSON.stringify(reviewSuggestions, null, 2) + "\n");
fs.writeFileSync(path.join(staticDir, "xananode-suggestions.md"), renderSuggestionReport(reviewSuggestions));
fs.writeFileSync(path.join(staticDir, "xananode-viewer.json"), JSON.stringify(viewerFeed, null, 2) + "\n");
fs.writeFileSync(path.join(staticDir, "nodes-index.json"), JSON.stringify(nodesIndex, null, 2) + "\n");
fs.writeFileSync(path.join(staticDir, "substrate.json"), JSON.stringify(substrateManifest, null, 2) + "\n");
fs.writeFileSync(path.join(staticDir, "relationships.json"), JSON.stringify(protocolRelationshipList, null, 2) + "\n");
for (const protocolNode of protocolNodes) {
  const nodeFileName = `${slugify(protocolNode.id.split("/").at(-1), "node")}.json`;
  fs.writeFileSync(path.join(staticNodesDir, nodeFileName), JSON.stringify(protocolNode, null, 2) + "\n");
}
for (const viewerNode of viewerFeed.nodes) {
  for (const route of protocolOnlyNodeRoutes(viewerNode)) {
    const routeFile = path.join(staticDir, route);
    fs.mkdirSync(path.dirname(routeFile), { recursive: true });
    fs.writeFileSync(routeFile, renderProtocolNodeResolverPage(viewerNode));
  }
}
const reviewFile = path.join(staticDir, "review", "index.html");
fs.mkdirSync(path.dirname(reviewFile), { recursive: true });
fs.writeFileSync(reviewFile, renderSuggestionReviewPage(reviewSuggestions));

finish();

function finish() {
  if (warnings.length) {
    for (const warning of warnings) console.warn(`XanaNode warning: ${warning}`);
  }
  if (errors.length) {
    console.error("\nXanaNode validation failed:");
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }
  console.log("XanaNode validation passed.");
  console.log(`Validated ${nodes?.size || 0} nodes.`);
  if (importedNodes.length || importedRelationships.length) {
    console.log(`Imported ${importedNodes.length} protocol nodes and ${importedRelationships.length} protocol relationships.`);
  }
  console.log(`Validated ${relationshipTypeMap?.size || 0} relationship types.`);
  console.log(`Validated ${nodeTypeMap?.size || 0} node types.`);
  if (reviewSuggestions) {
    console.log(`Generated ${reviewSuggestions.autolinks.length} pending autolink suggestions, ${reviewSuggestions.transclusions.length} pending transclusion suggestions, and ${reviewSuggestions.implemented_transclusions?.length || 0} implemented transclusions.`);
  }
  console.log("Generated data/xananode_fragments.json, static/xananode-fragments.json, and protocol substrate artifacts.");
}
