---
title: "Schema Extension"
type: "concept"
importance: 4
summary: "The ability for a substrate to add custom node or relationship types while remaining compatible with XanaNode Core."
relationships:
  - type: "enabled_by"
    target: "namespacing"
  - type: "requires"
    target: "xananode-core-schema"
  - type: "required_for"
    target: "federated-knowledge-substrates"
---

[XanaNode](/node/xananode) Core is intentionally shared, but it is not the only vocabulary a substrate can use.

The core schema provides shared interoperability. Extension schemas allow local domains to define additional meanings without breaking the whole system.

A custom type is valid when it is namespaced, described, versioned, machine-readable, and preserved even by tools that do not understand it.

The [custom extension substrate](/node/custom-extension-substrate) example shows this in practice: a local domain can define additional types while still publishing the core manifest, node, relationship, and schema files expected by [XanaNode](xananode.canonical:concept/xananode) tools.
