---
title: "Merge Validation"
type: "concept"
importance: 5
summary: "The process of safely combining or comparing substrates without destroying authorship, provenance, disagreement, or local moderation."
relationships:
  - type: "requires"
    target: "namespacing"
  - type: "requires"
    target: "provenance"
  - type: "requires"
    target: "schema-extension"
  - type: "uses"
    target: "merge-report"
  - type: "uses"
    target: "compatibility-report"
  - type: "arrives_at"
    target: "claim-merge-without-collapse"
---

Merge validation is not deduplication.

A merge-safe system does not automatically collapse two nodes with similar titles into one truth. It compares identity, [provenance](/node/provenance), source lineage, schema compatibility, and relationship meaning.

The goal is to preserve both substrates while making their overlaps and differences navigable.

Compatibility reports explain whether two substrates can be compared safely. Merge reports preserve the proposed mappings, conflicts, unresolved issues, and identity decisions produced by that comparison.
