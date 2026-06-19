---
title: "Namespace Schema"
type: "schema"
importance: 4
summary: "The JSON Schema for namespace registry entries."
version: "2020-12"
status: "draft"
relationships:
  - type: "defines"
    target: "namespace-registry"
  - type: "supports"
    target: "namespacing"
  - type: "required_for"
    target: "schema-extension"
---

Namespace records help identify who owns a prefix and how it should be interpreted.

They [support](source-support) registry tooling, extension discovery, and federation checks while allowing unknown namespaces to remain preserved rather than rejected.
