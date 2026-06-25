---
title: "Custom Extension Substrate"
type: "concept"
importance: 4
summary: "An example substrate that defines namespaced domain-specific node and relationship types while preserving compatibility with XanaNode Core."
relationships:
  - type: "demonstrates"
    target: "schema-extension"
  - type: "requires"
    target: "namespace-registry"
  - type: "uses"
    target: "substrate-manifest"
  - type: "features"
    target: "canonical-type-policy"
---

The custom extension substrate example shows local vocabulary coexisting with [XanaNode](/node/xananode) Core.

The canonical example defines a museum namespace with a custom artifact node type and custom curatorial relationship types.

Tools that do not understand those custom types still preserve them as declared, namespaced, versioned extensions instead of discarding them.
