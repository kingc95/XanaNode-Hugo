---
title: "Review Suggestions"
type: "concept"
importance: 4
summary: "Generated, user-approved suggestions for autolinking node titles, aliases, and repeated fragments without rewriting content automatically."
relationships:
  - type: "uses"
    target: "typed-relationships"
  - type: "uses"
    target: "transclusion"
---

The suggestion scanner looks for existing node titles and aliases in Markdown content, plus repeated fragment text that could become a [transclusion](/node/transclusion).

It does not rewrite pages automatically. It produces a review queue so an author can approve each ordinary link or transclusion before editing the source file.

{{< review-suggestions >}}
