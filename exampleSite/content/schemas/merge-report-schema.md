---
title: "Merge Report Schema"
type: "schema"
importance: 4
summary: "The JSON Schema that validates merge reports for substrate comparison and federation workflows."
version: "2020-12"
status: "draft"
relationships:
  - type: "defines"
    target: "merge-report"
  - type: "documents"
    target: "merge-validation"
  - type: "required_for"
    target: "federation-example"
---

This schema validates the record of a proposed merge or comparison.

It preserves mappings, conflicts, identity decisions, unresolved questions, and warnings so downstream tools can inspect what happened without treating a comparison as a destructive merge.
