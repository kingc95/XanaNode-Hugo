---
title: "Substrate Node Record"
type: "concept"
importance: 5
summary: "A JSON representation of a node with a protocol identifier, type, summary, importance, provenance fields, and incoming or outgoing relationship summaries."
relationships:
  - type: "uses"
    target: "xananode-node-types"
  - type: "contains"
    target: "fragment-node"
---

A node record is the machine-readable counterpart to a human-readable page.

It preserves the protocol id, title, type, importance, summary, [provenance](/node/provenance) fields, and incoming or outgoing relationship summaries needed for tools to traverse the substrate without scraping HTML.

For authored fragments, this implementation also emits protocol `fragment` node records with `source_node`, `fragment_id`, `tumbler`, and `selector` metadata.
