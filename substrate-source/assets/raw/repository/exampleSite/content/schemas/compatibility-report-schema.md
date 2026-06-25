---
title: "Compatibility Report Schema"
type: "schema"
importance: 4
summary: "The JSON Schema that validates compatibility reports between tools and substrates."
version: "2020-12"
status: "draft"
relationships:
  - type: "defines"
    target: "compatibility-report"
  - type: "documents"
    target: "compatibility-levels"
  - type: "required_for"
    target: "federation-example"
---

This schema validates reports about what one implementation can safely understand.

Those reports let a tool say more than pass or fail. They record the achieved compatibility level, recognized schemas, unsupported extensions, warnings, and blocking issues.
