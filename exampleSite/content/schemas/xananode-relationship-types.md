---
title: "XanaNode Relationship Types"
type: "schema"
importance: 5
summary: "The canonical relationship type registry for XanaNode substrates."
version: "0.4.0"
status: "draft"
relationships:
  - type: "defines"
    target: "typed-relationships"
  - type: "equivalent_to"
    target: "xananode.canonical:schema/relationship-type-registry"
---

Relationship types describe why nodes are connected.

The current canonical registry contains 144 [typed relationships](/node/typed-relationships), grouped by relationship categories such as evidence, authorship, lineage, identity, media, trail, governance, [transclusion](/node/transclusion), [deep-linking](deep-linking), compatibility, and extension relationships.

The full pack-backed registry is available at [Relationship Type Registry](/schema/relationship-type-registry/).

Examples include `supports`, `contradicts`, `explains`, `derived_from`, `memorializes`, `transcludes`, and `deep_links_to`.
