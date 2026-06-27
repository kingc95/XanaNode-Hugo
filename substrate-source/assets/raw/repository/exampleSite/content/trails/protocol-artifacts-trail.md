---
title: "Protocol Artifacts Trail"
type: "trail"
importance: 5
summary: "A curated path through the concrete JSON files, reports, registries, and governance documents that make a XanaNode substrate interoperable."
nodes:
  - protocol-artifacts
  - substrate-manifest
  - substrate-node-record
  - substrate-relationship-list
  - compatibility-levels
  - compatibility-report
  - merge-report
  - namespace-registry
  - known-implementations-registry
  - review-suggestions
  - canonical-type-policy
  - federation-example
  - federation-rules
relationships:
  - type: "starts_with"
    target: "protocol-artifacts"
  - type: "continues_to"
    target: "substrate-manifest"
  - type: "continues_to"
    target: "substrate-node-record"
  - type: "continues_to"
    target: "substrate-relationship-list"
  - type: "continues_to"
    target: "compatibility-levels"
  - type: "arrives_at"
    target: "federation-example"
---

This trail follows the artifacts a [XanaNode](/node/xananode) implementation publishes or consumes.

It begins with the manifest, node records, and relationship list, then moves through compatibility reports, merge reports, registries, extension policy, federation examples, and governance rules.

{{< node ref="protocol-artifacts" >}}
{{< node ref="substrate-manifest" >}}
{{< node ref="substrate-node-record" >}}
{{< node ref="substrate-relationship-list" >}}
{{< node ref="compatibility-levels" >}}
{{< node ref="compatibility-report" >}}
{{< node ref="merge-report" >}}
{{< node ref="namespace-registry" >}}
{{< node ref="known-implementations-registry" >}}
{{< node ref="review-suggestions" >}}
{{< node ref="canonical-type-policy" >}}
{{< node ref="federation-example" >}}
{{< node ref="federation-rules" >}}
