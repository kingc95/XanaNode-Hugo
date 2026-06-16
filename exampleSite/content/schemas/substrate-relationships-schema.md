---
title: "Substrate Relationships Schema"
type: "schema"
importance: 5
summary: "The JSON Schema that validates the protocol relationship list for a substrate."
version: "2020-12"
status: "draft"
relationships:
  - type: "defines"
    target: "substrate-relationship-list"
  - type: "uses"
    target: "xananode-relationship-types"
  - type: "part_of"
    target: "xananode-core-schema"
---

This schema validates `relationships.json`.

It requires each relationship to have an id, source, target, type, and summary. Optional fields preserve weight, visibility, assertion [provenance](/node/provenance), confidence, evidence, tumbler address, external-target metadata, and federation metadata.
