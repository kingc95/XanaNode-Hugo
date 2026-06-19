---
title: "Start Here"
date: 2026-06-16
type: "essay"
importance: 5
summary: "The canonical starting essay for the XanaNode example substrate."
relationships:
  - type: "explains"
    target: "xananode"
  - type: "explains"
    target: "knowledge-substrate"
  - type: "explains"
    target: "federated-knowledge-substrates"
  - type: "contrasts_with"
    target: "single-source-of-truth"
  - type: "continues_to"
    target: "xananode-core-trail"
  - type: "continues_to"
    target: "protocol-artifacts-trail"
  - type: "continues_to"
    target: "using-hugo-with-protocol-json"
---

[XanaNode](/node/xananode) begins with a simple claim: civilization is good at publishing information and bad at preserving the relationships that make information understandable.

A page can say something. A graph can show where that statement came from, what supports it, what challenges it, what it depends on, and how it changed.

This example substrate explains XanaNode using XanaNode itself. The pages are human-readable nodes, and the build also imports protocol JSON packs, validates everything together, and republishes the merged substrate for machines.

Follow the core trail from the problem of isolated documents, through [typed relationships](/node/typed-relationships), [provenance](/node/provenance), [transclusion](/node/transclusion), [namespacing](/node/namespacing), [merge validation](/node/merge-validation), and federation.

Then follow the [protocol artifacts trail](/node/protocol-artifacts-trail) to see the manifest, node records, relationship list, schemas, registries, extension examples, reports, and governance rules that make federation concrete.

If you are building a Hugo site from existing protocol JSON, read [Using Hugo with Protocol JSON](/node/using-hugo-with-protocol-json). The bundled example imports the protocol base pack and the extended XanaNode lineage pack directly from JSON, then renders them in the 2D viewer without forcing you to recreate every node as Markdown.
