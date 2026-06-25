---
title: "Moderation Model"
type: "concept"
importance: 4
summary: "The governance model that lets each substrate decide its own trust, inclusion, review, and publication rules."
relationships:
  - type: "defines"
    target: "independent-moderation"
  - type: "required_for"
    target: "federation-rules"
  - type: "context_for"
    target: "dispute-resolution"
---

[XanaNode](/node/xananode) does not require one global moderation authority.

Each substrate can decide what it publishes, imports, hides, rejects, or marks as disputed. Federation works because those decisions are visible rather than silently normalized away.
