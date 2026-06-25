---
title: "Substrate Manifest Schema"
type: "schema"
importance: 5
summary: "The JSON Schema that validates a XanaNode substrate manifest."
version: "2020-12"
status: "draft"
relationships:
  - type: "defines"
    target: "substrate-manifest"
  - type: "part_of"
    target: "xananode-core-schema"
  - type: "required_for"
    target: "compatibility-report"
---

This schema validates `substrate.json`.

It checks the substrate identifier, name, namespace, version, optional description, schema version, maintainers, imports, and extension declarations.
