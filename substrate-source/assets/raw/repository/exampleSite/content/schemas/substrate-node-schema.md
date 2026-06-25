---
title: "Substrate Node Schema"
type: "schema"
importance: 5
summary: "The JSON Schema that validates machine-readable XanaNode node records."
version: "2020-12"
status: "draft"
relationships:
  - type: "defines"
    target: "substrate-node-record"
  - type: "uses"
    target: "xananode-node-types"
  - type: "part_of"
    target: "xananode-core-schema"
---

This schema validates each exported node record.

It requires a protocol id, title, type, importance, summary, and relationship summaries. It also accepts [provenance](/node/provenance) fields and fragment metadata such as `source_node`, `fragment_id`, `tumbler`, and `selector`.
