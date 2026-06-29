import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const hugoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const coreRoot = path.resolve(hugoRoot, "vendor", "xananode-core");
const mappings = [
  {
    from: path.join(coreRoot, "src", "projection.js"),
    to: path.join(hugoRoot, "static", "js", "projection.js")
  },
  {
    from: path.join(coreRoot, "src", "viewer-engine.js"),
    to: path.join(hugoRoot, "static", "js", "viewer-engine.js")
  }
];

let changed = false;
for (const mapping of mappings) {
  if (!fs.existsSync(mapping.from)) {
    throw new Error(`Missing Core viewer runtime source: ${mapping.from}`);
  }
  fs.mkdirSync(path.dirname(mapping.to), { recursive: true });
  const source = fs.readFileSync(mapping.from, "utf8");
  const current = fs.existsSync(mapping.to) ? fs.readFileSync(mapping.to, "utf8") : null;
  if (current !== source) {
    fs.writeFileSync(mapping.to, source, "utf8");
    changed = true;
    console.log(`synced ${path.relative(hugoRoot, mapping.to)} <- ${path.relative(hugoRoot, mapping.from)}`);
  }
}

if (!changed) {
  console.log("viewer runtime already matches Core");
}
