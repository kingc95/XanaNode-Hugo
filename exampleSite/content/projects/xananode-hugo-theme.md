---
title: "XanaNode Hugo Theme"
type: "project"
importance: 4
summary: "A static-site reference implementation that reads XanaNode content files and renders them as a navigable graph."
status: "prototype"
primary_media: "xananode-icon"
relationships:
  - type: "implements"
    target: "xananode"
  - type: "uses"
    target: "hugo"
  - type: "uses"
    target: "cytoscape-js"
  - type: "demonstrates"
    target: "knowledge-substrate"
---

The [Hugo](/node/hugo) theme is not [XanaNode](/node/xananode) itself.

It is one reference implementation: a static site generator, content folder, front matter conventions, JSON index, and graph viewer that demonstrate the XanaNode model.
