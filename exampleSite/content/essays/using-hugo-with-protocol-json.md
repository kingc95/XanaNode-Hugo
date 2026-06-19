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

[Hugo](hugo) is the [static publishing](static-publishing) layer. It is not the protocol.

Use Markdown when you want prose pages, essays, explainers, sources, or authored trails. Use protocol JSON when you already have validated substrate records from Core, Workspace, another tool, or another substrate.

The import path is intentionally simple. Drop a pack into the site, then let the build compose it with the local substrate:

```text
imports/
  lineage/
    nodes.json
    relationships.json
```

`nodes.json` can contain either a single substrate node, an array of substrate nodes, or an object with a `nodes` array. `relationships.json` can contain either an array of relationships or an object with a `relationships` array.

The example site uses two packs:

- `params.xananode.packs` in `hugo.yaml` mounts the protocol minimal substrate from the Core/Protocol submodule. It demonstrates the base model: [substrate manifest](substrate-manifest), node records, [typed relationships](typed-relationships), evidence, stable fragments, and [transclusion](transclusion).
- `imports/lineage/` extends that model with the fuller human-computer augmentation lineage: Leibniz, Otlet, Bush, Nelson, Engelbart, Brown, HES, [FRESS](xananode.lineage:project/fress), [Intermedia](xananode.lineage:project/intermedia), [HyperCard](xananode.lineage:technology/hypercard), [Hyperland](xananode.lineage:publication/hyperland), VR, [TED2](xananode.lineage:event/ted2-1990), the Web, and the [XanaNode](xananode) bridge concepts.

Mounted packs are build-time layers. They can be enabled or removed without claiming local ownership of their records. Absorbed packs are reviewed imports that become part of the receiving substrate. The base pack is mounted here so the protocol repository remains its governed source of truth.

Then run:

```bash
npm run validate
npm run build
```

The build validates local and imported records together, writes the [protocol artifacts](protocol-artifacts), and emits the viewer feed.

The important published files are:

```text
/substrate.json
/nodes-index.json
/nodes/*.json
/relationships.json
/xananode-viewer.json
```

`/substrate.json`, `/nodes/*.json`, and `/relationships.json` are the [protocol artifacts](xananode.canonical:concept/protocol-artifacts). `/nodes-index.json` makes the node files discoverable on a static host, because browsers cannot list a directory. `/xananode-viewer.json` is the read-only browser bundle derived from those protocol records.

Imported records do not need duplicate Markdown pages just to appear in the graph. Markdown is for authored prose; JSON imports are for existing protocol objects.

Core remains responsible for protocol intelligence: same-entity merge candidates, imported relationships touching existing nodes, possible prose links, and possible transclusions. [Hugo](xananode.canonical:technology/hugo) publishes the result.

For a new site: mount the base pack if you want a known-good skeleton, add JSON from Core or Workspace, write Markdown where you want authored pages, then publish the [protocol artifacts](xananode.canonical:concept/protocol-artifacts) with the static viewer.
