---
title: "XanaNode Workspace Repository"
type: "source"
importance: 4
author: "XanaNode Contributors"
year: "2026"
summary: "The workspace orchestration repository for managing multiple local XanaNode substrates, imports, Git state, and build workflows."
source_url: "https://github.com/kingc95/XanaNode-Workspace"
rights_status: "open-source"
relationships:
  - type: "uses"
    target: "xananode-core-schema"
  - type: "required_for"
    target: "federated-knowledge-substrates"
---

The Workspace repository manages multiple substrates and their operational lifecycle: folder layout, imports, Git state, builds, and health checks.
