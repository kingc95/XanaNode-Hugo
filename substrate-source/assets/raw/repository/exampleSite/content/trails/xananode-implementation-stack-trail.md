---
title: "XanaNode Implementation Stack Trail"
type: "trail"
importance: 5
summary: "A curated path through the XanaNode repositories in dependency order: Protocol, Core SDK, Hugo, Workspace, and Studio."
nodes:
  - xananode-protocol-repo
  - xananode-core-sdk-repo
  - xananode-hugo-repo
  - xananode-workspace-repo
  - xananode-studio-repo
relationships:
  - type: "starts_with"
    target: "xananode-protocol-repo"
  - type: "continues_to"
    target: "xananode-core-sdk-repo"
  - type: "continues_to"
    target: "xananode-hugo-repo"
  - type: "continues_to"
    target: "xananode-workspace-repo"
  - type: "arrives_at"
    target: "xananode-studio-repo"
---

This trail orders the active [XanaNode](xananode) implementation repositories by dependency and responsibility.

The [protocol repository](/source/xananode-protocol-repository/) defines the canonical rules.

The [Core SDK repository](/source/xananode-core-sdk-repository/) consumes those rules and exposes reusable validation, fragment, graph, and artifact APIs.

The [Hugo repository](/source/xananode-hugo-repository/) adapts [Hugo](hugo) content and [static publishing](static-publishing) to Core-validated [protocol artifacts](protocol-artifacts).

The [Workspace repository](/source/xananode-workspace-repository/) manages multiple local substrates and their operational workflows.

The [Studio repository](/source/xananode-studio-repository/) provides the desktop workbench for editing, previewing, validating, and navigating those substrates.

{{< node ref="xananode-protocol-repo" >}}
{{< node ref="xananode-core-sdk-repo" >}}
{{< node ref="xananode-hugo-repo" >}}
{{< node ref="xananode-workspace-repo" >}}
{{< node ref="xananode-studio-repo" >}}
