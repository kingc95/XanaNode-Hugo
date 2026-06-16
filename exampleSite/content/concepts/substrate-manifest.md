---
title: "Substrate Manifest"
type: "concept"
importance: 5
summary: "The root metadata file that identifies a substrate, its namespace, version, schema version, imports, maintainers, and extension declarations."
relationships:
  - type: "requires"
    target: "namespacing"
---

`substrate.json` is the first file another tool should read.

It identifies the substrate, namespace, substrate version, targeted core schema version, imports, maintainers, and extension declarations.

This theme generates `substrate.json` during preparation so the human site and machine-readable substrate stay aligned.
