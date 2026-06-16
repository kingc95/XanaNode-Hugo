---
title: "Fragment Node"
type: "concept"
importance: 4
summary: "A node representing a stable addressable portion of another source, publication, media object, or node."
relationships:
  - type: "required_for"
    target: "transclusion"
  - type: "preserves"
    target: "provenance"
  - type: "deep_links_to"
    target: "mother-of-all-demos"
---

Fragment nodes represent stable addressable parts of larger objects.

Instead of pointing only to a whole source, a fragment carries its own id, selector metadata, tumbler address, and relationship history.

For example, this concept cites a specific fragment of the [Mother of All Demos](/node/mother-of-all-demos) source node:

{{< xana ref="mother-of-all-demos@v1/0001" label="Fragment node example" >}}

That fragment is not copied into this page. It is rendered from the source node's authored stable fragment map.
