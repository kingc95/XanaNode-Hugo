---
title: "Namespace Registry"
type: "concept"
importance: 4
summary: "A registry of known namespace identifiers used to avoid collisions and help tools recognize who owns a substrate, schema, or extension vocabulary."
relationships:
  - type: "implements"
    target: "namespacing"
  - type: "required_for"
    target: "schema-extension"
---

The namespace registry records known namespace ids and their owners.

It does not make every other namespace invalid. It helps tools distinguish recognized namespaces from private, experimental, or not-yet-registered ones while still preserving unknown data.
