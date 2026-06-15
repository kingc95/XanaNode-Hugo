#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import matter from "gray-matter";
import { globSync } from "glob";
import Ajv2020 from "ajv/dist/2020.js";

const siteRoot = path.resolve(process.argv[2] || ".");
const themeRootCandidates = [
  path.join(siteRoot, "themes", "xananode"),
  path.join(siteRoot, "..", "xananode"),
  path.resolve(siteRoot, ".."),
  siteRoot
];
const themeRoot = themeRootCandidates.find((candidate) => fs.existsSync(path.join(candidate, "static", "schemas"))) || themeRootCandidates[0];
const schemaCandidates = [
  path.join(siteRoot, "static", "schemas"),
  path.join(themeRoot, "static", "schemas")
];
const errors = [];
const warnings = [];

function firstExistingFile(relativePath) {
  for (const dir of schemaCandidates) {
    const candidate = path.join(dir, relativePath);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function asArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function nodeIdFor(relativeFile, data) {
  return data.node_id || path.basename(relativeFile, ".md");
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

function buildFragments(markdown) {
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

const nodeTypesPath = firstExistingFile("xananode-node-types.json");
const nodeTypesSchemaPath = firstExistingFile("xananode-node-types.schema.json");
const relationshipTypesPath = firstExistingFile("xananode-relationship-types.json");
const relationshipTypesSchemaPath = firstExistingFile("xananode-relationship-types.schema.json");

if (!nodeTypesPath) errors.push("Missing xananode-node-types.json.");
if (!nodeTypesSchemaPath) errors.push("Missing xananode-node-types.schema.json.");
if (!relationshipTypesPath) errors.push("Missing xananode-relationship-types.json.");
if (!relationshipTypesSchemaPath) errors.push("Missing xananode-relationship-types.schema.json.");

if (errors.length) finish();

const nodeTypesRegistry = readJson(nodeTypesPath);
const nodeTypesSchema = readJson(nodeTypesSchemaPath);
const relationshipTypesRegistry = readJson(relationshipTypesPath);
const relationshipTypesSchema = readJson(relationshipTypesSchemaPath);

const ajv = new Ajv2020({ allErrors: true });
const validateNodeRegistry = ajv.compile(nodeTypesSchema);
const validateRelationshipRegistry = ajv.compile(relationshipTypesSchema);

if (!validateNodeRegistry(nodeTypesRegistry)) {
  errors.push(`Node type registry does not match schema:\n${ajv.errorsText(validateNodeRegistry.errors, { separator: "\n" })}`);
}
if (!validateRelationshipRegistry(relationshipTypesRegistry)) {
  errors.push(`Relationship type registry does not match schema:\n${ajv.errorsText(validateRelationshipRegistry.errors, { separator: "\n" })}`);
}

const nodeTypeMap = new Map((nodeTypesRegistry.node_types || []).map((nodeType) => [nodeType.type, nodeType]));
const relationshipTypeMap = new Map((relationshipTypesRegistry.relationship_types || []).map((relationshipType) => [relationshipType.type, relationshipType]));
const relationshipInverseMap = new Map((relationshipTypesRegistry.relationship_types || []).map((relationshipType) => [relationshipType.type, relationshipType.inverse]));

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
const fragments = { generated_at: new Date().toISOString(), nodes: {} };

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
  if (nodes.has(id)) {
    errors.push(`${relativeFile}: duplicate node id "${id}" also used by ${nodes.get(id).file}.`);
    continue;
  }
  nodes.set(id, { id, file: relativeFile, data, body: parsed.content });
  const version = data.version || "v1";
  fragments.nodes[id] = fragments.nodes[id] || { versions: {} };
  fragments.nodes[id].title = data.title || id;
  fragments.nodes[id].type = data.type;
  fragments.nodes[id].versions[version] = { fragments: buildFragments(parsed.content) };
  if (!fragments.nodes[id].versions.latest) {
    fragments.nodes[id].versions.latest = fragments.nodes[id].versions[version];
  }
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
    if (relationship.type && !relationshipTypeMap.has(relationship.type)) {
      errors.push(`${file}: relationship "${relationship.type}" is not in xananode-relationship-types.json.`);
    }
    if (relationship.target && !nodes.has(relationship.target)) {
      errors.push(`${file}: relationship "${relationship.type}" points to missing target "${relationship.target}".`);
    }
    if (relationship.weight !== undefined && (!Number.isInteger(relationship.weight) || relationship.weight < 1 || relationship.weight > 5)) {
      errors.push(`${file}: relationship "${relationship.type}" has invalid weight "${relationship.weight}". Use integer 1-5.`);
    }
    if (relationship.visibility !== undefined && !["primary", "secondary", "background"].includes(relationship.visibility)) {
      errors.push(`${file}: relationship "${relationship.type}" has invalid visibility "${relationship.visibility}".`);
    }
    if (relationship.type && relationship.target) {
      authoredEdges.push({ source: id, target: relationship.target, type: relationship.type, file });
    }
  }
  const implicitReferenceFields = ["claims", "sources", "people", "concepts", "projects", "events", "organizations", "technologies", "observations", "media", "depicts", "nodes"];
  for (const field of implicitReferenceFields) {
    for (const target of asArray(data[field])) {
      if (typeof target !== "string") errors.push(`${file}: ${field} contains a non-string target.`);
      else if (!nodes.has(target)) errors.push(`${file}: ${field} points to missing target "${target}".`);
    }
  }
  if (data.primary_media && !nodes.has(data.primary_media)) errors.push(`${file}: primary_media points to missing target "${data.primary_media}".`);
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
    if (parsedRef.version === "latest") {
      warnings.push(`${file}: XanaNode reference "${ref}" floats with latest. Pin with @v1, @v2, etc. when stable quotation identity matters.`);
    }
  }
}

for (const relationshipType of relationshipTypesRegistry.relationship_types || []) {
  if (relationshipType.inverse && !relationshipTypeMap.has(relationshipType.inverse)) {
    errors.push(`Relationship type "${relationshipType.type}" declares missing inverse "${relationshipType.inverse}".`);
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

const dataDir = path.join(siteRoot, "data");
const staticDir = path.join(siteRoot, "static");
fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(staticDir, { recursive: true });
fs.writeFileSync(path.join(dataDir, "xananode_fragments.json"), JSON.stringify(fragments, null, 2) + "\n");
fs.writeFileSync(path.join(staticDir, "xananode-fragments.json"), JSON.stringify(fragments, null, 2) + "\n");

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
  console.log("Generated data/xananode_fragments.json and static/xananode-fragments.json.");
}
