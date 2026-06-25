---
title: "Tumbler Addressing"
type: "concept"
importance: 5
summary: "Persistent, location-independent addressing for nodes, relationships, revisions, and fragments inside a substrate."
relationships:
  - type: "enables"
    target: "transclusion"
  - type: "enables"
    target: "deep-linking"
  - type: "preserves"
    target: "provenance"
  - type: "enables"
    target: "fragment-node"
  - type: "extended_by"
    target: "xananode"
  - type: "deep_links_to"
    target: "as-we-may-think"
---

Tumbler addressing keeps content addressable when files move, URLs change, or layouts are rebuilt.

[XanaNode](/node/xananode) uses stable node identifiers and stable fragment identifiers for [deep linking](/node/deep-linking) and [transclusion](/node/transclusion).

The protocol-level address profile uses namespaced ids such as `example.minimal:source/as-we-may-think#fragment/0004` so fragments can remain identifiable across renderers and rebuilds.

This page resolves a local stable fragment. The shortcode below points at fragment `0004` inside the `as-we-may-think` source node:

{{< xana ref="as-we-may-think@v1/0004" label="Tumbler-addressed fragment" >}}

If the source file moves or the page layout changes, the reference still names the logical node, version, and fragment id rather than a fragile screen location.
