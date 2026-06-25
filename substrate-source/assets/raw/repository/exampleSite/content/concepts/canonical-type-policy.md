---
title: "Canonical Type Policy"
type: "concept"
importance: 4
summary: "The governance rule that separates shared core node and relationship types from namespaced extension types."
relationships:
  - type: "context_for"
    target: "schema-extension"
  - type: "requires"
    target: "namespacing"
---

Canonical types are the shared vocabulary that let independent substrates understand one another.

The core stays small, stable, and broadly useful. Domain-specific meanings belong in namespaced extension schemas unless they become common enough to justify canonical status.

This keeps the core interoperable while still letting local substrates model museums, legal records, biology, archives, or other specialized domains precisely.
