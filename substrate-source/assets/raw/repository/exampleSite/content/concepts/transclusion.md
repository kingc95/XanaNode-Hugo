---
title: "Transclusion"
type: "concept"
importance: 5
summary: "Including a specific versioned fragment by reference rather than copying it, preserving identity, attribution, and revision lineage."
relationships:
  - type: "preserves"
    target: "provenance"
  - type: "uses"
    target: "fragment-node"
---

Transclusion includes a source fragment by reference instead of turning it into an anonymous copy.

In this [XanaNode](/node/xananode) substrate, a transclusion points to a stable fragment id inside a versioned source node.

The rendered passage keeps its source identity, selector metadata, attribution path, and protocol tumbler address.

This page includes fragment `0001` from the Xanadu source node:

{{< xana ref="xanadu-document-interconnection@v1/0001" label="Transcluded source fragment" >}}

The block above is backed by `xanadu-document-interconnection@v1/0001`, which resolves to the protocol address `xananode.example:source/xanadu-document-interconnection#fragment/0001`.
