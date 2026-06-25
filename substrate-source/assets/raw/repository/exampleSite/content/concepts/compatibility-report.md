---
title: "Compatibility Report"
type: "concept"
importance: 5
summary: "A report that records how one substrate or tool understands another substrate, including compatibility level, supported schemas, warnings, and blocking issues."
relationships:
  - type: "documents"
    target: "compatibility-levels"
  - type: "required_for"
    target: "merge-validation"
---

A compatibility report records how one implementation understands a substrate.

It names the compatibility level reached, the schema versions recognized, unsupported extensions, warnings, and any blocking issues.

The canonical protocol example publishes a compatibility report for its [federation example](/node/federation-example), and this [Hugo](/node/hugo) implementation publishes the schema needed to validate that report shape.
