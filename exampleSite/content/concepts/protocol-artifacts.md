---
title: "Protocol Artifacts"
type: "concept"
importance: 5
summary: "The machine-readable files and reports that let a XanaNode substrate be validated, compared, merged, and federated."
relationships:
  - type: "defined_by"
    target: "xananode-core-schema"
  - type: "contains"
    target: "substrate-manifest"
  - type: "contains"
    target: "substrate-node-record"
  - type: "contains"
    target: "substrate-relationship-list"
  - type: "contains"
    target: "review-suggestions"
  - type: "required_for"
    target: "federated-knowledge-substrates"
---

The protocol is not only a set of ideas. It is a set of publishable artifacts.

A published substrate can expose those artifacts as static JSON: `substrate.json`, `relationships.json`, one JSON record per node, schema files, fragment data, and pending [review suggestions](/node/review-suggestions).

Human pages make the substrate readable. Protocol artifacts make it inspectable, validatable, comparable, and federatable by other tools.
