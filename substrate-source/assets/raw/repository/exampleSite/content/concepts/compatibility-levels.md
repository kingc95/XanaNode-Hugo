---
title: "Compatibility Levels"
type: "concept"
importance: 5
summary: "A staged way to describe how much of a substrate another implementation can recognize, validate, extend, merge, or federate."
relationships:
  - type: "uses"
    target: "compatibility-report"
  - type: "requires"
    target: "substrate-manifest"
  - type: "required_for"
    target: "federated-knowledge-substrates"
---

Compatibility is not all-or-nothing.

The protocol describes six practical levels: opaque storage, manifest recognition, core validation, declared extensions, merge candidacy, and federation readiness.

The point is preservation. A tool can keep data it does not fully understand, report the compatibility level it reached, and avoid pretending that unknown extensions are invalid knowledge.
