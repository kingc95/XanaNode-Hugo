---
title: "Substrate Relationship List"
type: "concept"
importance: 5
summary: "The protocol-level relationship file containing typed edges with stable ids, source and target ids, summaries, visibility, weights, and assertion provenance."
relationships:
  - type: "uses"
    target: "xananode-relationship-types"
  - type: "preserves"
    target: "provenance"
---

`relationships.json` is the edge list for a substrate.

Each relationship has its own id, source, target, type, and summary. It can also carry weight, visibility, assertion [provenance](/node/provenance), confidence, evidence, federation metadata, and tumbler references.

A relationship list can be authored directly, imported from packs, or derived from structured content such as primary media links, trail membership, and stable [transclusion](/node/transclusion) references.
