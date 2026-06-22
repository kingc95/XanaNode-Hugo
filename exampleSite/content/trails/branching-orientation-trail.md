---
title: "Branching Orientation Trail"
type: "trail"
importance: 5
summary: "A choose-your-path trail used to test mobile-friendly branch choices in guided tours."
nodes:
  - start-here
  - xananode
branches:
  - after: xananode
    prompt: "Which path do you want to follow next?"
    choices:
      - label: "Historical lineage"
        summary: "Bush, Engelbart, Nelson, Xanadu, and the ideas XanaNode extends."
        nodes:
          - vannevar-bush
          - as-we-may-think
          - douglas-engelbart
          - nls
          - ted-nelson
          - project-xanadu
          - transclusion
      - label: "Protocol implementation"
        summary: "The active XanaNode repositories in dependency order."
        nodes:
          - xananode-protocol-repo
          - xananode-core-sdk-repo
          - xananode-hugo-repo
          - xananode-workspace-repo
          - xananode-studio-repo
relationships:
  - type: "starts_with"
    target: "start-here"
  - type: "continues_to"
    target: "xananode"
  - type: "continues_to"
    target: "vannevar-bush"
  - type: "continues_to"
    target: "xananode-protocol-repo"
---

This trail deliberately branches after [XanaNode](/concept/xananode/) so the viewer can test a guided choose-your-path experience.

{{< node ref="start-here" >}}
{{< node ref="xananode" >}}
