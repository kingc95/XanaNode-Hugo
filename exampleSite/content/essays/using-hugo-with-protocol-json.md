---
title: "Using Hugo with Protocol JSON"
date: 2026-06-19
type: "essay"
importance: 5
summary: "How to use the Hugo theme as a read-only XanaNode viewer for Markdown-authored nodes, the protocol base pack, and imported protocol JSON."
relationships:
  - type: "explains"
    target: "xananode-hugo-theme"
  - type: "explains"
    target: "substrate-node-record"
  - type: "explains"
    target: "substrate-relationship-list"
  - type: "context_for"
    target: "historical-lineage-trail"
---

Hugo is the static publishing layer. It is not the protocol.

Use Markdown when you want prose pages, essays, explainers, sources, or authored trails. Use protocol JSON when you already have validated substrate records from Core, Workspace, another tool, or another substrate.

The import path is intentionally simple. Drop a pack into the site, then let the prepare step merge it into the generated substrate:

```text
imports/
  lineage/
    nodes.json
    relationships.json
```

`nodes.json` can contain either a single substrate node, an array of substrate nodes, or an object with a `nodes` array. `relationships.json` can contain either an array of relationships or an object with a `relationships` array.

The example site uses two packs:

- `params.xananode.packs` in `hugo.yaml` mounts the protocol minimal substrate from the Core/Protocol submodule. It demonstrates the base model: substrate manifest, node records, typed relationships, evidence, stable fragments, and transclusion.
- `imports/lineage/` extends that model with the fuller human-computer augmentation lineage: Leibniz, Otlet, Bush, Nelson, Engelbart, Brown, HES, FRESS, Intermedia, HyperCard, Hyperland, VR, TED2, the Web, and the XanaNode bridge concepts.

Mounted packs are build-time layers. They can be enabled or removed without claiming local ownership of their records. Absorbed packs are reviewed imports that become part of the receiving substrate. The base pack is mounted here so the protocol repository remains its governed source of truth.

Then run:

```bash
npm run validate
npm run build
```

The prepare step validates the generated and imported records together, writes the protocol artifacts, and emits a browser-ready viewer feed.

The important published files are:

```text
/substrate.json
/nodes-index.json
/nodes/*.json
/relationships.json
/xananode-viewer.json
```

`/substrate.json`, `/nodes/*.json`, and `/relationships.json` are the protocol artifacts. `/nodes-index.json` makes the node files discoverable on a static host, because browsers cannot list a directory. `/xananode-viewer.json` is the read-only browser bundle derived from those protocol records.

That means you do not need to recreate imported records as Markdown just to see them. Markdown is for authored human pages. JSON imports are for existing protocol objects.

Core remains responsible for protocol intelligence. During prepare, Hugo hands Core the existing substrate and the incoming packs so Core can report possible same-entity merges, relationships that touch existing nodes, possible links from prose to known nodes, and possible transclusions. Hugo is the renderer and static-site adapter; Core is where the reusable substrate analysis belongs.

This is the pattern for a new site: mount the base pack if you want a known-good skeleton, drop in generated JSON from Core or Workspace, write Markdown only where you want human-authored pages, then publish the generated protocol artifacts with the static viewer.
