---
title: "Review Suggestions"
type: "concept"
importance: 4
summary: "Generated, user-approved suggestions for autolinking node titles, aliases, repeated fragments, and imported substrate changes without rewriting content automatically."
relationships:
  - type: "uses"
    target: "typed-relationships"
  - type: "uses"
    target: "transclusion"
---

The suggestion scanner looks for existing node titles and aliases in Markdown content, plus repeated fragment text that could become a [transclusion](/node/transclusion).

It does not rewrite pages automatically. It produces a [review queue](/review/) so an author can approve each ordinary link, transclusion, merge, or imported relationship before changing the substrate. The generated review page keeps implemented examples beside pending suggestions so a new site author can see both states of the workflow.

{{< review-suggestions >}}
