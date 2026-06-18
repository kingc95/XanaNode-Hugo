#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { createHash } from "node:crypto";
import matter from "gray-matter";
import { globSync } from "glob";
import Ajv2020 from "ajv/dist/2020.js";
import { validateSubstrateArtifacts as validateCoreSubstrateArtifacts } from "@xananode/core";

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

function splitBlocks(markdown) {
  return markdown
    .split(/\n\s*\n/g)
    .map((block) => stripMarkdown(block))
    .map((block) => block.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function buildGeneratedFragments(markdown) {
  const blocks = splitBlocks(markdown);
  const fragments = {};
  fragments["1"] = blocks.join("\n\n");
  blocks.forEach((block, blockIndex) => {
    const blockAddress = `1.${blockIndex + 1}`;
    fragments[blockAddress] = block;
    const sentences = block
      .match(/[^.!?]+[.!?]+(?:["')\]]+)?|[^.!?]+$/g)
      ?.map((sentence) => sentence.trim())
      .filter(Boolean) || [];
    sentences.forEach((sentence, sentenceIndex) => {
      fragments[`${blockAddress}.${sentenceIndex + 1}`] = sentence;
    });
  });
  return fragments;
}

function fragmentProtocolIdFor(namespace, sourceId, fragmentId) {
  return `${namespace}:fragment/${slugify(sourceId, "node")}-${slugify(fragmentId, "fragment")}`;
}

function normalizeAuthoredFragments(data) {
  return asArray(data.fragments).filter(Boolean);
}

function buildFragments(markdown, data, context) {
  const fragmentMap = buildGeneratedFragments(markdown);
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
  const match = String(ref || "").match(/^(?:xana:\/\/)?([^@/]+)(?:@([^/]+))?(?:\/(.+))?$/);
  if (!match) return null;
  return {
    nodeId: match[1],
    version: match[2] || "latest",
    range: match[3] || "1"
  };
}

function rangeToText(fragmentMap, range) {
  if (fragmentMap[range]) return fragmentMap[range];
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
  return `/node/${encodeURIComponent(node.id)}`;
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
  if (!stripped.startsWith("node/")) return null;
  try {
    return decodeURIComponent(stripped.slice("node/".length));
  } catch {
    return stripped.slice("node/".length);
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
    `Transclusions: ${suggestions.transclusions.length}`,
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

  lines.push("## Transclusions", "");
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

function buildReviewSuggestions(nodes, fragments) {
  const nodeList = [...nodes.values()];
  const generatedAt = new Date().toISOString();
  const suggestions = {
    generated_at: generatedAt,
    status: "pending_user_approval",
    note: "These suggestions are not auto-applied. Review each replacement before editing content.",
    autolinks: [],
    transclusions: []
  };

  const termsByTarget = nodeList.map((target) => {
    const title = target.data.title || target.id;
    return {
      target,
      terms: uniqueStrings([title, ...nodeAliases(target.data)])
        .filter((term) => term.length >= 3)
        .sort((left, right) => right.length - left.length || left.localeCompare(right))
    };
  });

  const fragmentCandidates = [];
  for (const target of nodeList) {
    const version = target.data.version || "v1";
    const fragmentMap = fragments.nodes[target.id]?.versions?.[version]?.fragments || {};
    for (const [range, text] of Object.entries(fragmentMap)) {
      if (!/^1\.\d+$/.test(range)) continue;
      const normalized = String(text || "").replace(/\s+/g, " ").trim();
      if (normalized.length < 120) continue;
      fragmentCandidates.push({ target, version, range, text: normalized });
    }
  }

  for (const source of nodeList) {
    const markdown = source.body || "";
    const protectedRanges = markdownProtectedRanges(markdown);
    const linkedTargets = existingLinkedTargetIds(markdown, new Set(nodeList.map((node) => node.id)));

    for (const { target, terms } of termsByTarget) {
      if (target.id === source.id) continue;

      for (const term of terms) {
        const match = allPhraseMatches(markdown, term)
          .find((candidate) => !positionInRanges(candidate.index, protectedRanges));
        if (!match) continue;

        if (linkedTargets.has(target.id)) break;
        linkedTargets.add(target.id);
        const position = reportPosition(source, markdown, match.index);
        suggestions.autolinks.push({
          approved: false,
          file: source.file,
          line: position.line,
          column: position.column,
          source_node: source.id,
          target_node: target.id,
          target_title: target.data.title || target.id,
          matched_text: match[0],
          matched_term: term,
          match_kind: term === (target.data.title || target.id) ? "title" : "alias",
          replacement: `[${match[0]}](${linkTargetFor(target)})`,
          note: approvedReplacementNote()
        });
        break;
      }
    }

    const transcludedTargets = new Set();
    for (const candidate of fragmentCandidates) {
      if (candidate.target.id === source.id) continue;
      const match = markdown.toLowerCase().indexOf(candidate.text.toLowerCase());
      if (match === -1 || positionInRanges(match, protectedRanges)) continue;
      if (transcludedTargets.has(`${candidate.target.id}@${candidate.version}/${candidate.range}`)) continue;
      transcludedTargets.add(`${candidate.target.id}@${candidate.version}/${candidate.range}`);
      const actualText = markdown.slice(match, match + candidate.text.length);
      const position = reportPosition(source, markdown, match);
      suggestions.transclusions.push({
        approved: false,
        file: source.file,
        line: position.line,
        column: position.column,
        source_node: source.id,
        target_node: candidate.target.id,
        target_title: candidate.target.data.title || candidate.target.id,
        version: candidate.version,
        range: candidate.range,
        matched_text: actualText,
        replacement: `{{< xana ref="${candidate.target.id}@${candidate.version}/${candidate.range}" >}}`,
        note: approvedReplacementNote()
      });
    }
  }

  return suggestions;
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
const nodes = new Map();
const authoredEdges = [];
const authoredFragmentNodes = [];
const authoredFragmentNodeMap = new Map();
const shortcodeTransclusionEdges = [];
const fragments = { generated_at: new Date().toISOString(), nodes: {} };
let reviewSuggestions = null;
const substrateNamespace = slugify(process.env.XANANODE_NAMESPACE || "xananode.example", "xananode.example");
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
  imports: ["xananode:core"]
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

const nodeLookup = new Map();
for (const node of nodes.values()) {
  nodeLookup.set(node.id, node);
  nodeLookup.set(node.protocolId, node);
  nodeLookup.set(node.data.protocol_id, node);
}

function resolveNodeRef(ref) {
  return nodeLookup.get(String(ref || "").trim()) || null;
}

function resolveNodeId(ref) {
  return resolveNodeRef(ref)?.id || String(ref || "");
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

  const xanaRefs = [...body.matchAll(/xana:\/\/[^\s\]"'<>)}]+/g)].map((match) => match[0]);
  const shortcodeRefs = [...body.matchAll(/\{\{<\s*xana\s+[^>]*ref=["']([^"']+)["'][^>]*>\}\}/g)].map((match) => match[1]);
  for (const ref of [...xanaRefs, ...shortcodeRefs]) {
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
  const sourceNode = nodes.get(edge.source);
  const targetNode = nodes.get(edge.target);
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
      targetTitle: targetNode.data.title,
      type: edge.type
    }),
    ...(relationship.asserted_by ? { asserted_by: nodes.get(relationship.asserted_by)?.protocolId || relationship.asserted_by } : {}),
    ...(relationship.asserted_at ? { asserted_at: relationship.asserted_at } : {}),
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
  ...shortcodeProtocolEdges
];

const protocolRelationshipList = { relationships: protocolEdges };
const protocolRelationshipsByNode = new Map([
  ...[...nodes.values()].map((node) => [node.id, []]),
  ...authoredFragmentNodes.map((fragment) => [fragment.protocol_id, []])
]);
for (const edge of protocolEdges) {
  const sourceLocalId = [...nodes.values()].find((node) => node.protocolId === edge.source)?.id;
  const targetLocalId = [...nodes.values()].find((node) => node.protocolId === edge.target)?.id;
  const sourceFragmentId = authoredFragmentNodeMap.get(edge.source)?.protocol_id;
  const targetFragmentId = authoredFragmentNodeMap.get(edge.target)?.protocol_id;
  const sourceRelationshipKey = sourceLocalId || sourceFragmentId;
  const targetRelationshipKey = targetLocalId || targetFragmentId;
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
  return {
    id: node.protocolId,
    title: data.title || node.id,
    type: data.type,
    ...(data.status ? { status: data.status } : {}),
    importance: data.importance || 3,
    summary: data.summary || "",
    ...(data.created_by ? { created_by: nodes.get(data.created_by)?.protocolId || data.created_by } : {}),
    ...(data.created_at ? { created_at: data.created_at } : {}),
    ...(data.updated_at ? { updated_at: data.updated_at } : {}),
    ...(data.source_url ? { source_url: data.source_url } : {}),
    ...(data.rights_status ? { rights_status: data.rights_status } : {}),
    ...(data.confidence ? { confidence: data.confidence } : {}),
    ...(data.primary_media ? { primary_media: nodes.get(data.primary_media)?.protocolId || data.primary_media } : {}),
    ...(data.source_node ? { source_node: nodes.get(data.source_node)?.protocolId || data.source_node } : {}),
    ...(data.fragment_id ? { fragment_id: data.fragment_id } : {}),
    ...(data.tumbler ? { tumbler: data.tumbler } : {}),
    ...(data.selector ? { selector: data.selector } : {}),
    relationships: protocolRelationshipsByNode.get(node.id) || []
  };
});

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

reviewSuggestions = buildReviewSuggestions(nodes, fragments);

const dataDir = path.join(siteRoot, "data");
const staticDir = path.join(siteRoot, "static");
const staticSchemaDir = path.join(staticDir, "schemas");
const staticNodesDir = path.join(staticDir, "nodes");
fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(staticDir, { recursive: true });
fs.mkdirSync(staticNodesDir, { recursive: true });
copyProtocolSchemas(staticSchemaDir);
fs.writeFileSync(path.join(dataDir, "xananode_fragments.json"), JSON.stringify(fragments, null, 2) + "\n");
fs.writeFileSync(path.join(dataDir, "xananode_suggestions.json"), JSON.stringify(reviewSuggestions, null, 2) + "\n");
fs.writeFileSync(path.join(staticDir, "xananode-fragments.json"), JSON.stringify(fragments, null, 2) + "\n");
fs.writeFileSync(path.join(staticDir, "xananode-suggestions.json"), JSON.stringify(reviewSuggestions, null, 2) + "\n");
fs.writeFileSync(path.join(staticDir, "xananode-suggestions.md"), renderSuggestionReport(reviewSuggestions));
fs.writeFileSync(path.join(staticDir, "substrate.json"), JSON.stringify(substrateManifest, null, 2) + "\n");
fs.writeFileSync(path.join(staticDir, "relationships.json"), JSON.stringify(protocolRelationshipList, null, 2) + "\n");
for (const protocolNode of protocolNodes) {
  const nodeFileName = `${slugify(protocolNode.id.split("/").at(-1), "node")}.json`;
  fs.writeFileSync(path.join(staticNodesDir, nodeFileName), JSON.stringify(protocolNode, null, 2) + "\n");
}

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
  console.log(`Validated ${relationshipTypeMap?.size || 0} relationship types.`);
  console.log(`Validated ${nodeTypeMap?.size || 0} node types.`);
  if (reviewSuggestions) {
    console.log(`Generated ${reviewSuggestions.autolinks.length} pending autolink suggestions and ${reviewSuggestions.transclusions.length} pending transclusion suggestions.`);
  }
  console.log("Generated data/xananode_fragments.json, static/xananode-fragments.json, and protocol substrate artifacts.");
}
