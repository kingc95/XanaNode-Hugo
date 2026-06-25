---
title: "XanaNode Core Schema"
type: "schema"
importance: 5
summary: "The canonical core node and relationship vocabulary used to make independent substrates interoperable."
version: "0.4"
status: "draft"
relationships:
  - type: "defines"
    target: "xananode-node-types"
  - type: "defines"
    target: "xananode-relationship-types"
  - type: "defines"
    target: "substrate-manifest-schema"
  - type: "defines"
    target: "substrate-node-schema"
  - type: "defines"
    target: "substrate-relationships-schema"
  - type: "required_for"
    target: "federated-knowledge-substrates"
  - type: "enables"
    target: "schema-extension"
---

[XanaNode](/node/xananode) Core is the shared compatibility layer.

A substrate may extend it, but the core gives other tools a stable set of meanings to validate, display, map, and merge.

In the current protocol, Core includes the `xananode-node-types.v0.3.0.json` registry, the `xananode-relationship-types.v0.4.0.json` registry, and JSON Schemas for substrate manifests, node records, relationship lists, namespace records, merge reports, and compatibility reports.
