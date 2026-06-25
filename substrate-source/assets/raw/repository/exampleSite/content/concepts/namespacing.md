---
title: "Namespacing"
type: "concept"
importance: 5
summary: "A way to identify which substrate or schema owns a node type, relationship type, node, or fragment."
relationships:
  - type: "clarifies"
    target: "schema-extension"
---

Namespacing prevents independent substrates and extension vocabularies from colliding.

The core namespace is `xananode`. A substrate can use its own namespace for local nodes and extension types, such as `example.museum:artifact` or `example.researcher_a:concept/knowledge-substrate`.

Unknown namespaced types are not invalid knowledge. They are declared extensions that can be displayed, preserved, mapped, or quarantined until another system understands them.
