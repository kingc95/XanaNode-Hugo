# XanaNode Suggestions

Status: pending user approval

These suggestions are not auto-applied. Review each replacement before editing content.

Autolinks: 3
Pending transclusions: 1
Implemented transclusions: 4
Merge candidates: 951
Imported relationships touching existing nodes: 1447

## Autolinks

1. xananode.review:observation/unresolved-review-fixture:1:59
   - Match: transclusion
   - Target: Transclusion (xananode.example:concept/transclusion)
   - Replacement: [transclusion](transclusion)
   - Approved: false

2. xananode.review:observation/unresolved-review-fixture:1:77
   - Match: protocol artifacts
   - Target: Protocol Artifacts (xananode.example:concept/protocol-artifacts)
   - Replacement: [protocol artifacts](protocol-artifacts)
   - Approved: false

3. xananode.review:observation/unresolved-review-fixture:1:48
   - Match: Hyperland
   - Target: Hyperland (xananode.lineage:publication/hyperland)
   - Replacement: [Hyperland](xananode.lineage:publication/hyperland)
   - Approved: false

## Implemented Transclusions

1. content\concepts\tumbler-addressing.md
   - Target: Associative Trails Fragment (xananode.example:fragment/as-we-may-think-0004@v1/0004)
   - Tumbler: xananode.example:source/as-we-may-think@sha256:5e8e3a3bbe2278db54e5ea7b8e6a2677b620f67d2095e37409bc7c42451e1705#fragment/0004@sha256:f712416ac32e6b8771dcbe4315d4d9ff61635e6407265b20301ec3e3a79afc0e
   - Text: Bush argued that the growing record of knowledge required better associative methods for navigation and recall.
   - Implemented: true

2. content\concepts\transclusion.md
   - Target: Reusable Media Fragment (xananode.example:fragment/xanadu-document-interconnection-0001@v1/0001)
   - Tumbler: xananode.example:source/xanadu-document-interconnection@sha256:551b9b3f6532555b2b61f8411b721ef8610000d1f5f13d6bb050a03ec8af7b51#fragment/0001@sha256:48d3c63d7645b547a9d41b7f6f39d2f07a885f4a479353dd3ae8742c4225cbfe
   - Text: Nelson's work provides a key source layer for transclusion, reusable media, and visible interconnection.
   - Implemented: true

3. content\concepts\fragment-node.md
   - Target: Augmenting Human Intelligence Fragment (xananode.example:fragment/mother-of-all-demos-0001@v1/0001)
   - Tumbler: xananode.example:source/mother-of-all-demos@sha256:88a43c06a3135ff5a982ca8efe948753f1d6e839561dcf664bd873719025e210#fragment/0001@sha256:217a3bcf5fb3c571fd4661497b6bdde97bba61576045ca253f21b9c0d2987ce4
   - Text: The demonstration showed computers as tools for augmenting human intelligence and navigating structured knowledge work.
   - Implemented: true

4. example.minimal:essay/relationship-navigation-intro
   - Target: example.minimal:fragment/as-we-may-think-0004 (example.minimal:fragment/as-we-may-think-0004@versioned/fragment)
   - Tumbler: example.minimal:source/as-we-may-think@git:8e47e70:examples/minimal-substrate/nodes/source-as-we-may-think.json#fragment/0004@sha256:example-as-we-may-think-fragment-0004
   - Text: The essay includes the source fragment by stable reference instead of duplicating it.
   - Implemented: true

## Pending Transclusions

1. xananode.review:observation/unresolved-review-fixture:1:1
   - Target: xananode.example:fragment/xanadu-document-interconnection-0001 (xananode.example:fragment/xanadu-document-interconnection-0001@versioned/fragment)
   - Match: This node appears to quote or closely reuse an authored fragment.
   - Replacement: {{< xana ref="xananode.example:fragment/xanadu-document-interconnection-0001" >}}
   - Approved: false

## Merge Candidates

1. As We May Think Fragment 0004
   - Existing: Associative Trails Fragment (xananode.example:fragment/as-we-may-think-0004)
   - Incoming: As We May Think Fragment 0004 (example.minimal:fragment/as-we-may-think-0004)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

2. Knowledge Substrate
   - Existing: Knowledge Substrate (xananode.example:concept/knowledge-substrate)
   - Incoming: Knowledge Substrate (example.minimal:concept/knowledge-substrate)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

3. XanaNode Icon
   - Existing: XanaNode Icon (xananode.example:media/xananode-icon)
   - Incoming: XanaNode Icon (example.minimal:media/xananode-icon)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

4. As We May Think
   - Existing: As We May Think (xananode.example:source/as-we-may-think)
   - Incoming: As We May Think (example.minimal:source/as-we-may-think)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

5. Start Here
   - Existing: Start Here (xananode.example:essay/start-here)
   - Incoming: Start Here (example.minimal:trail/start-here)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

6. Knowledge Substrate
   - Existing: Knowledge Substrate (xananode.example:concept/knowledge-substrate)
   - Incoming: Knowledge Substrate (xananode.canonical:concept/knowledge-substrate)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

7. Protocol Artifacts
   - Existing: Protocol Artifacts (xananode.example:concept/protocol-artifacts)
   - Incoming: Protocol Artifacts (xananode.canonical:concept/protocol-artifacts)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

8. XanaNode
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

9. What Is XanaNode?
   - Existing: What Is XanaNode? (xananode.example:essay/what-is-xananode)
   - Incoming: What Is XanaNode? (xananode.canonical:essay/what-is-xananode)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

10. XanaNode Icon
   - Existing: XanaNode Icon (xananode.example:media/xananode-icon)
   - Incoming: XanaNode Icon (xananode.canonical:media/xananode-icon)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

11. XanaNode Hugo Theme
   - Existing: XanaNode Hugo Theme (xananode.example:project/xananode-hugo-theme)
   - Incoming: XanaNode Hugo Theme (xananode.canonical:project/xananode-hugo-theme)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

12. Compatibility Report Schema
   - Existing: Compatibility Report Schema (xananode.example:schema/compatibility-report-schema)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/canonical-schema-compatibility-report)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

13. Merge Report Schema
   - Existing: Merge Report Schema (xananode.example:schema/merge-report-schema)
   - Incoming: Merge Report Schema (xananode.canonical:schema/canonical-schema-merge-report)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

14. Substrate Manifest Schema
   - Existing: Substrate Manifest Schema (xananode.example:schema/substrate-manifest-schema)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/canonical-schema-substrate-manifest)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

15. Substrate Node Schema
   - Existing: Substrate Node Schema (xananode.example:schema/substrate-node-schema)
   - Incoming: Substrate Node Schema (xananode.canonical:schema/canonical-schema-substrate-node)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

16. Substrate Relationships Schema
   - Existing: Substrate Relationships Schema (xananode.example:schema/substrate-relationships-schema)
   - Incoming: Substrate Relationships Schema (xananode.canonical:schema/canonical-schema-substrate-relationships)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

17. Compatibility Report Schema
   - Existing: Compatibility Report Schema (xananode.example:schema/compatibility-report-schema)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/compatibility-report-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

18. Known Implementations Registry
   - Existing: Known Implementations Registry (xananode.example:concept/known-implementations-registry)
   - Incoming: Known Implementations Registry (xananode.canonical:schema/known-implementations-registry)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

19. Merge Report Schema
   - Existing: Merge Report Schema (xananode.example:schema/merge-report-schema)
   - Incoming: Merge Report Schema (xananode.canonical:schema/merge-report-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

20. Namespace Registry
   - Existing: Namespace Registry (xananode.example:concept/namespace-registry)
   - Incoming: Namespace Registry (xananode.canonical:schema/namespace-registry)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

21. Namespace Schema
   - Existing: Namespace Schema (xananode.example:schema/namespace-schema)
   - Incoming: Namespace Schema (xananode.canonical:schema/namespace-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

22. Substrate Manifest Schema
   - Existing: Substrate Manifest Schema (xananode.example:schema/substrate-manifest-schema)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/substrate-manifest-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

23. Substrate Node Schema
   - Existing: Substrate Node Schema (xananode.example:schema/substrate-node-schema)
   - Incoming: Substrate Node Schema (xananode.canonical:schema/substrate-node-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

24. Substrate Relationships Schema
   - Existing: Substrate Relationships Schema (xananode.example:schema/substrate-relationships-schema)
   - Incoming: Substrate Relationships Schema (xananode.canonical:schema/substrate-relationships-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

25. XanaNode Protocol Repository
   - Existing: XanaNode Protocol Repository (xananode.example:source/xananode-protocol-repo)
   - Incoming: XanaNode Protocol Repository (xananode.canonical:source/repository-kingc95-xananode)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

26. XanaNode Core SDK Repository
   - Existing: XanaNode Core SDK Repository (xananode.example:source/xananode-core-sdk-repo)
   - Incoming: XanaNode Core SDK Repository (xananode.canonical:source/repository-kingc95-xananode-core-sdk)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

27. XanaNode Studio Repository
   - Existing: XanaNode Studio Repository (xananode.example:source/xananode-studio-repo)
   - Incoming: XanaNode Studio Repository (xananode.canonical:source/repository-kingc95-xananode-studio)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

28. XanaNode Workspace Repository
   - Existing: XanaNode Workspace Repository (xananode.example:source/xananode-workspace-repo)
   - Incoming: XanaNode Workspace Repository (xananode.canonical:source/repository-kingc95-xananode-workspace)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

29. XanaNode Core SDK Repository
   - Existing: XanaNode Core SDK Repository (xananode.example:source/xananode-core-sdk-repo)
   - Incoming: XanaNode Core SDK Repository (xananode.canonical:source/xananode-core-sdk-repository)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

30. XanaNode Hugo Repository
   - Existing: XanaNode Hugo Repository (xananode.example:source/xananode-hugo-repo)
   - Incoming: XanaNode Hugo Repository (xananode.canonical:source/xananode-hugo-repository)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

31. XanaNode Protocol Repository
   - Existing: XanaNode Protocol Repository (xananode.example:source/xananode-protocol-repo)
   - Incoming: XanaNode Protocol Repository (xananode.canonical:source/xananode-protocol-repository)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

32. XanaNode Studio Repository
   - Existing: XanaNode Studio Repository (xananode.example:source/xananode-studio-repo)
   - Incoming: XanaNode Studio Repository (xananode.canonical:source/xananode-studio-repository)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

33. XanaNode Workspace Repository
   - Existing: XanaNode Workspace Repository (xananode.example:source/xananode-workspace-repo)
   - Incoming: XanaNode Workspace Repository (xananode.canonical:source/xananode-workspace-repository)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

34. Cytoscape.js
   - Existing: Cytoscape.js (xananode.example:technology/cytoscape-js)
   - Incoming: Cytoscape.js (xananode.canonical:technology/cytoscape-js)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

35. Hugo
   - Existing: Hugo (xananode.example:technology/hugo)
   - Incoming: Hugo (xananode.canonical:technology/hugo)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

36. A knowledge substrate is structure, not just information
   - Existing: Knowledge Substrate (xananode.example:concept/knowledge-substrate)
   - Incoming: A knowledge substrate is structure, not just information (example.minimal:claim/substrate-is-structure)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

37. A knowledge substrate is structure, not just information
   - Existing: A knowledge substrate is structure, not information (xananode.example:claim/claim-substrate-is-structure)
   - Incoming: A knowledge substrate is structure, not just information (example.minimal:claim/substrate-is-structure)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

38. Associative Trails
   - Existing: Associative Trails Fragment (xananode.example:fragment/as-we-may-think-0004)
   - Incoming: Associative Trails (example.minimal:concept/associative-trails)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

39. As We May Think Fragment 0004
   - Existing: As We May Think (xananode.example:source/as-we-may-think)
   - Incoming: As We May Think Fragment 0004 (example.minimal:fragment/as-we-may-think-0004)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

40. Knowledge Substrate
   - Existing: Federated Knowledge Substrates (xananode.example:concept/federated-knowledge-substrates)
   - Incoming: Knowledge Substrate (example.minimal:concept/knowledge-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

41. Knowledge Substrate
   - Existing: A knowledge substrate is structure, not information (xananode.example:claim/claim-substrate-is-structure)
   - Incoming: Knowledge Substrate (example.minimal:concept/knowledge-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

42. XanaNode Icon
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Icon (example.minimal:media/xananode-icon)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

43. Relationships Preserve Context
   - Existing: Typed relationships preserve context that hyperlinks lose (xananode.example:claim/claim-relationships-preserve-context)
   - Incoming: Relationships Preserve Context (example.minimal:response/relationships-preserve-context)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

44. As We May Think
   - Existing: Associative Trails Fragment (xananode.example:fragment/as-we-may-think-0004)
   - Incoming: As We May Think (example.minimal:source/as-we-may-think)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

45. Implementations Identify XanaNode Compatibility
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Implementations Identify XanaNode Compatibility (xananode.canonical:claim/implementations-identify-compatibility)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

46. Protocol Docs Are Licensed CC-BY 4.0
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Protocol Docs Are Licensed CC-BY 4.0 (xananode.canonical:claim/protocol-docs-licensed-cc-by-4-0)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

47. Relationships Preserve Knowledge
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationships Preserve Knowledge (xananode.canonical:claim/relationships-preserve-knowledge)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

48. Schemas, Validators, And Reference Code Are Apache-2.0
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schemas, Validators, And Reference Code Are Apache-2.0 (xananode.canonical:claim/schemas-validators-reference-code-apache-2-0)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

49. XanaNode Name And Logo Are Trademarked
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Name And Logo Are Trademarked (xananode.canonical:claim/xananode-name-and-logo-are-trademarked)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

50. XanaNode Contributors
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Contributors (xananode.canonical:community/xananode-contributors)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

51. Attribution License
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Attribution License (xananode.canonical:concept/attribution-license)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

52. Compatibility Attribution
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Compatibility Attribution (xananode.canonical:concept/compatibility-attribution)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

53. Content License
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Content License (xananode.canonical:concept/content-license)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

54. Knowledge Substrate
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Knowledge Substrate (xananode.canonical:concept/knowledge-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

55. Knowledge Substrate
   - Existing: Federated Knowledge Substrates (xananode.example:concept/federated-knowledge-substrates)
   - Incoming: Knowledge Substrate (xananode.canonical:concept/knowledge-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

56. Knowledge Substrate
   - Existing: A knowledge substrate is structure, not information (xananode.example:claim/claim-substrate-is-structure)
   - Incoming: Knowledge Substrate (xananode.canonical:concept/knowledge-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

57. Licensing
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Licensing (xananode.canonical:concept/licensing)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

58. Open License
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Open License (xananode.canonical:concept/open-license)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

59. Permissive Open Source License
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Permissive Open Source License (xananode.canonical:concept/permissive-open-source-license)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

60. Protocol Artifacts
   - Existing: Protocol Artifacts Trail (xananode.example:trail/protocol-artifacts-trail)
   - Incoming: Protocol Artifacts (xananode.canonical:concept/protocol-artifacts)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

61. Protocol Artifacts
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Protocol Artifacts (xananode.canonical:concept/protocol-artifacts)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

62. Software License
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Software License (xananode.canonical:concept/software-license)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

63. Substrate Projection Layer
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Projection Layer (xananode.canonical:concept/substrate-projection-layer)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

64. Trademark
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trademark (xananode.canonical:concept/trademark)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

65. XanaNode
   - Existing: XanaNode Implementation Stack Trail (xananode.example:trail/xananode-implementation-stack-trail)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

66. XanaNode
   - Existing: XanaNode Core Trail (xananode.example:trail/xananode-core-trail)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

67. XanaNode
   - Existing: Protocol Artifacts Trail (xananode.example:trail/protocol-artifacts-trail)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

68. XanaNode
   - Existing: Historical Lineage Trail (xananode.example:trail/historical-lineage-trail)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

69. XanaNode
   - Existing: Branching Orientation Trail (xananode.example:trail/branching-orientation-trail)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

70. XanaNode
   - Existing: Static Publishing (xananode.example:technology/static-publishing)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

71. XanaNode
   - Existing: Hugo (xananode.example:technology/hugo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

72. XanaNode
   - Existing: Cytoscape.js (xananode.example:technology/cytoscape-js)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

73. XanaNode
   - Existing: XanaNode Workspace Repository (xananode.example:source/xananode-workspace-repo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

74. XanaNode
   - Existing: XanaNode Studio Repository (xananode.example:source/xananode-studio-repo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

75. XanaNode
   - Existing: XanaNode Protocol Repository (xananode.example:source/xananode-protocol-repo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

76. XanaNode
   - Existing: XanaNode Hugo Repository (xananode.example:source/xananode-hugo-repo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

77. XanaNode
   - Existing: XanaNode Core SDK Repository (xananode.example:source/xananode-core-sdk-repo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

78. XanaNode
   - Existing: Xanadu: Document Interconnection Enabling Re-use (xananode.example:source/xanadu-document-interconnection)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

79. XanaNode
   - Existing: 9.6 Million Links in Source Code Comments (xananode.example:source/source-code-link-decay-study)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

80. XanaNode
   - Existing: Mother of All Demos (xananode.example:source/mother-of-all-demos)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

81. XanaNode
   - Existing: As We May Think (xananode.example:source/as-we-may-think)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

82. XanaNode
   - Existing: XanaNode Relationship Types (xananode.example:schema/xananode-relationship-types)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

83. XanaNode
   - Existing: XanaNode Node Types (xananode.example:schema/xananode-node-types)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

84. XanaNode
   - Existing: XanaNode Core Schema (xananode.example:schema/xananode-core-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

85. XanaNode
   - Existing: Substrate Relationships Schema (xananode.example:schema/substrate-relationships-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

86. XanaNode
   - Existing: Substrate Node Schema (xananode.example:schema/substrate-node-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

87. XanaNode
   - Existing: Substrate Manifest Schema (xananode.example:schema/substrate-manifest-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

88. XanaNode
   - Existing: Namespace Schema (xananode.example:schema/namespace-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

89. XanaNode
   - Existing: Merge Report Schema (xananode.example:schema/merge-report-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

90. XanaNode
   - Existing: Compatibility Report Schema (xananode.example:schema/compatibility-report-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

91. XanaNode
   - Existing: XanaNode Hugo Theme (xananode.example:project/xananode-hugo-theme)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

92. XanaNode
   - Existing: Project Xanadu (xananode.example:project/project-xanadu)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

93. XanaNode
   - Existing: NLS (xananode.example:project/nls)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

94. XanaNode
   - Existing: Memex (xananode.example:project/memex)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

95. XanaNode
   - Existing: Vannevar Bush (xananode.example:person/vannevar-bush)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

96. XanaNode
   - Existing: Ted Nelson (xananode.example:person/ted-nelson)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

97. XanaNode
   - Existing: Douglas Engelbart (xananode.example:person/douglas-engelbart)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

98. XanaNode
   - Existing: Link Rot (xananode.example:observation/link-rot)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

99. XanaNode
   - Existing: XanaNode Icon (xananode.example:media/xananode-icon)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

100. XanaNode
   - Existing: What Is XanaNode? (xananode.example:essay/what-is-xananode)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

101. XanaNode
   - Existing: Using Hugo with Protocol JSON (xananode.example:essay/using-hugo-with-protocol-json)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

102. XanaNode
   - Existing: Start Here (xananode.example:essay/start-here)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

103. XanaNode
   - Existing: Unlabeled Hyperlink (xananode.example:concept/unlabeled-hyperlink)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

104. XanaNode
   - Existing: Typed Relationships (xananode.example:concept/typed-relationships)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

105. XanaNode
   - Existing: Tumbler Addressing (xananode.example:concept/tumbler-addressing)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

106. XanaNode
   - Existing: Transclusion (xananode.example:concept/transclusion)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

107. XanaNode
   - Existing: Substrate Relationship List (xananode.example:concept/substrate-relationship-list)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

108. XanaNode
   - Existing: Substrate Node Record (xananode.example:concept/substrate-node-record)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

109. XanaNode
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

110. XanaNode
   - Existing: Single Source of Truth (xananode.example:concept/single-source-of-truth)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

111. XanaNode
   - Existing: Schema Extension (xananode.example:concept/schema-extension)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

112. XanaNode
   - Existing: Review Suggestions (xananode.example:concept/review-suggestions)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

113. XanaNode
   - Existing: Provenance (xananode.example:concept/provenance)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

114. XanaNode
   - Existing: Protocol Artifacts (xananode.example:concept/protocol-artifacts)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

115. XanaNode
   - Existing: Namespacing (xananode.example:concept/namespacing)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

116. XanaNode
   - Existing: Namespace Registry (xananode.example:concept/namespace-registry)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

117. XanaNode
   - Existing: Moderation Model (xananode.example:concept/moderation-model)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

118. XanaNode
   - Existing: Merge Validation (xananode.example:concept/merge-validation)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

119. XanaNode
   - Existing: Merge Report (xananode.example:concept/merge-report)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

120. XanaNode
   - Existing: Known Implementations Registry (xananode.example:concept/known-implementations-registry)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

121. XanaNode
   - Existing: Knowledge Substrate (xananode.example:concept/knowledge-substrate)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

122. XanaNode
   - Existing: Independent Moderation (xananode.example:concept/independent-moderation)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

123. XanaNode
   - Existing: Fragment Node (xananode.example:concept/fragment-node)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

124. XanaNode
   - Existing: Federation Rules (xananode.example:concept/federation-rules)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

125. XanaNode
   - Existing: Federation Example (xananode.example:concept/federation-example)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

126. XanaNode
   - Existing: Federated Knowledge Substrates (xananode.example:concept/federated-knowledge-substrates)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

127. XanaNode
   - Existing: Dispute Resolution (xananode.example:concept/dispute-resolution)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

128. XanaNode
   - Existing: Deep Linking (xananode.example:concept/deep-linking)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

129. XanaNode
   - Existing: Custom Extension Substrate (xananode.example:concept/custom-extension-substrate)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

130. XanaNode
   - Existing: Compatibility Report (xananode.example:concept/compatibility-report)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

131. XanaNode
   - Existing: Compatibility Levels (xananode.example:concept/compatibility-levels)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

132. XanaNode
   - Existing: Civilizational Memory (xananode.example:concept/civilizational-memory)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

133. XanaNode
   - Existing: Canonical Type Policy (xananode.example:concept/canonical-type-policy)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

134. XanaNode
   - Existing: A knowledge substrate is structure, not information (xananode.example:claim/claim-substrate-is-structure)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

135. XanaNode
   - Existing: Typed relationships preserve context that hyperlinks lose (xananode.example:claim/claim-relationships-preserve-context)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

136. XanaNode
   - Existing: Substrates should merge without collapsing disagreement (xananode.example:claim/claim-merge-without-collapse)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

137. XanaNode
   - Existing: GitHub (xananode.example:source/source-github)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

138. XanaNode
   - Existing: Support (xananode.example:source/source-support)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

139. XanaNode
   - Existing: Reusable Media Fragment (xananode.example:fragment/xanadu-document-interconnection-0001)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

140. XanaNode
   - Existing: Augmenting Human Intelligence Fragment (xananode.example:fragment/mother-of-all-demos-0001)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

141. XanaNode
   - Existing: Associative Trails Fragment (xananode.example:fragment/as-we-may-think-0004)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

142. What Is XanaNode?
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: What Is XanaNode? (xananode.canonical:essay/what-is-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

143. XanaNode Canonical Pack Bootstrap
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Canonical Pack Bootstrap (xananode.canonical:event/xananode-canonical-pack-bootstrap)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

144. Relationships Preserve Knowledge Sentence
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationships Preserve Knowledge Sentence (xananode.canonical:fragment/relationships-preserve-knowledge-sentence)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

145. XanaNode Android Chrome Icon 192x192
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Android Chrome Icon 192x192 (xananode.canonical:media/xananode-android-chrome-192)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

146. XanaNode Android Chrome Icon 512x512
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Android Chrome Icon 512x512 (xananode.canonical:media/xananode-android-chrome-512)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

147. XanaNode Apple Touch Icon
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Apple Touch Icon (xananode.canonical:media/xananode-apple-touch-icon)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

148. XanaNode Favicon 16x16
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Favicon 16x16 (xananode.canonical:media/xananode-favicon-16)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

149. XanaNode Favicon 32x32
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Favicon 32x32 (xananode.canonical:media/xananode-favicon-32)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

150. XanaNode Favicon ICO
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Favicon ICO (xananode.canonical:media/xananode-favicon-ico)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

151. XanaNode Icon
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Icon (xananode.canonical:media/xananode-icon)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

152. Markdown Recreation Friction
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Markdown Recreation Friction (xananode.canonical:observation/markdown-recreation-friction)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

153. Built By Bots
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Built By Bots (xananode.canonical:organization/built-by-bots)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

154. Cytoscape Consortium
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Cytoscape Consortium (xananode.canonical:organization/cytoscape-consortium)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

155. Hugo Authors
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hugo Authors (xananode.canonical:organization/hugo-authors)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

156. Christian Siefen
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Christian Siefen (xananode.canonical:person/christian-siefen)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

157. World Wide Web
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: World Wide Web (xananode.canonical:place/world-wide-web)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

158. XanaNode Core SDK
   - Existing: XanaNode Core SDK Repository (xananode.example:source/xananode-core-sdk-repo)
   - Incoming: XanaNode Core SDK (xananode.canonical:project/xananode-core-sdk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

159. XanaNode Core SDK
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core SDK (xananode.canonical:project/xananode-core-sdk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

160. XanaNode Hugo Theme
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Hugo Theme (xananode.canonical:project/xananode-hugo-theme)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

161. XanaNode Protocol
   - Existing: XanaNode Protocol Repository (xananode.example:source/xananode-protocol-repo)
   - Incoming: XanaNode Protocol (xananode.canonical:project/xananode-protocol)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

162. XanaNode Protocol
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Protocol (xananode.canonical:project/xananode-protocol)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

163. XanaNode Studio
   - Existing: XanaNode Studio Repository (xananode.example:source/xananode-studio-repo)
   - Incoming: XanaNode Studio (xananode.canonical:project/xananode-studio)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

164. XanaNode Studio
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Studio (xananode.canonical:project/xananode-studio)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

165. XanaNode Workspace
   - Existing: XanaNode Workspace Repository (xananode.example:source/xananode-workspace-repo)
   - Incoming: XanaNode Workspace (xananode.canonical:project/xananode-workspace)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

166. XanaNode Workspace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Workspace (xananode.canonical:project/xananode-workspace)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

167. XNP-0004 Merge Validation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XNP-0004 Merge Validation (xananode.canonical:publication/xnp-0004-merge-validation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

168. XNP-0004 Merge Validation
   - Existing: Merge Validation (xananode.example:concept/merge-validation)
   - Incoming: XNP-0004 Merge Validation (xananode.canonical:publication/xnp-0004-merge-validation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

169. Protocol Implements Relationship Preservation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Protocol Implements Relationship Preservation (xananode.canonical:relationship/protocol-implements-claim)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

170. Canonical Pack v0.1.0
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Canonical Pack v0.1.0 (xananode.canonical:revision/canonical-pack-v0-1-0)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

171. Author Profile Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Author Profile Schema (xananode.canonical:schema/author-profile-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

172. Author Profile Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Author Profile Schema (xananode.canonical:schema/canonical-schema-author-profile)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

173. Compatibility Report Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/canonical-schema-compatibility-report)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

174. Compatibility Report Schema
   - Existing: Compatibility Report (xananode.example:concept/compatibility-report)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/canonical-schema-compatibility-report)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

175. Merge Report Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Merge Report Schema (xananode.canonical:schema/canonical-schema-merge-report)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

176. Merge Report Schema
   - Existing: Merge Report (xananode.example:concept/merge-report)
   - Incoming: Merge Report Schema (xananode.canonical:schema/canonical-schema-merge-report)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

177. Nanopublication Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Nanopublication Schema (xananode.canonical:schema/canonical-schema-nanopublication)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

178. Ro Crate Metadata Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Ro Crate Metadata Schema (xananode.canonical:schema/canonical-schema-ro-crate-metadata)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

179. Substrate Diff Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Diff Schema (xananode.canonical:schema/canonical-schema-substrate-diff)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

180. Substrate Manifest Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/canonical-schema-substrate-manifest)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

181. Substrate Manifest Schema
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/canonical-schema-substrate-manifest)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

182. Substrate Node Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Node Schema (xananode.canonical:schema/canonical-schema-substrate-node)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

183. Substrate Relationships Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Relationships Schema (xananode.canonical:schema/canonical-schema-substrate-relationships)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

184. Xananode Node Types Schema
   - Existing: XanaNode Node Types (xananode.example:schema/xananode-node-types)
   - Incoming: Xananode Node Types Schema (xananode.canonical:schema/canonical-schema-xananode-node-types)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

185. Xananode Node Types Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Xananode Node Types Schema (xananode.canonical:schema/canonical-schema-xananode-node-types)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

186. Xananode Property Registry Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Xananode Property Registry Schema (xananode.canonical:schema/canonical-schema-xananode-property-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

187. Xananode Relationship Types Schema
   - Existing: XanaNode Relationship Types (xananode.example:schema/xananode-relationship-types)
   - Incoming: Xananode Relationship Types Schema (xananode.canonical:schema/canonical-schema-xananode-relationship-types)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

188. Xananode Relationship Types Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Xananode Relationship Types Schema (xananode.canonical:schema/canonical-schema-xananode-relationship-types)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

189. Canonical Schemas Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Canonical Schemas Registry (xananode.canonical:schema/canonical-schemas-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

190. Compatibility Report Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/compatibility-report-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

191. Compatibility Report Schema
   - Existing: Compatibility Report (xananode.example:concept/compatibility-report)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/compatibility-report-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

192. Known Implementations Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Known Implementations Registry (xananode.canonical:schema/known-implementations-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

193. Merge Report Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Merge Report Schema (xananode.canonical:schema/merge-report-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

194. Merge Report Schema
   - Existing: Merge Report (xananode.example:concept/merge-report)
   - Incoming: Merge Report Schema (xananode.canonical:schema/merge-report-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

195. Federation Merge Report Example Namespace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Federation Merge Report Example Namespace (xananode.canonical:schema/namespace-example.merge)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

196. Federation Merge Report Example Namespace
   - Existing: Merge Report (xananode.example:concept/merge-report)
   - Incoming: Federation Merge Report Example Namespace (xananode.canonical:schema/namespace-example.merge)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

197. Minimal Example Namespace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Minimal Example Namespace (xananode.canonical:schema/namespace-example.minimal)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

198. Museum Extension Example Namespace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Museum Extension Example Namespace (xananode.canonical:schema/namespace-example.museum)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

199. Federation Example A Namespace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Federation Example A Namespace (xananode.canonical:schema/namespace-example.researcher_a)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

200. Federation Example A Namespace
   - Existing: Federation Example (xananode.example:concept/federation-example)
   - Incoming: Federation Example A Namespace (xananode.canonical:schema/namespace-example.researcher_a)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

201. Federation Example B Namespace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Federation Example B Namespace (xananode.canonical:schema/namespace-example.researcher_b)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

202. Federation Example B Namespace
   - Existing: Federation Example (xananode.example:concept/federation-example)
   - Incoming: Federation Example B Namespace (xananode.canonical:schema/namespace-example.researcher_b)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

203. Namespace Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Namespace Registry (xananode.canonical:schema/namespace-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

204. Namespace Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Namespace Schema (xananode.canonical:schema/namespace-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

205. XanaNode Core
   - Existing: XanaNode Core Trail (xananode.example:trail/xananode-core-trail)
   - Incoming: XanaNode Core (xananode.canonical:schema/namespace-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

206. XanaNode Core
   - Existing: XanaNode Core SDK Repository (xananode.example:source/xananode-core-sdk-repo)
   - Incoming: XanaNode Core (xananode.canonical:schema/namespace-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

207. XanaNode Core
   - Existing: XanaNode Core Schema (xananode.example:schema/xananode-core-schema)
   - Incoming: XanaNode Core (xananode.canonical:schema/namespace-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

208. XanaNode Core
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core (xananode.canonical:schema/namespace-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

209. Nanopublication Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Nanopublication Schema (xananode.canonical:schema/nanopublication-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

210. Claim subtype: causal
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim subtype: causal (xananode.canonical:schema/node-subtype-claim-causal)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

211. Claim subtype: comparative
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim subtype: comparative (xananode.canonical:schema/node-subtype-claim-comparative)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

212. Claim subtype: definition
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim subtype: definition (xananode.canonical:schema/node-subtype-claim-definition)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

213. Claim subtype: historical
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim subtype: historical (xananode.canonical:schema/node-subtype-claim-historical)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

214. Claim subtype: interpretive
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim subtype: interpretive (xananode.canonical:schema/node-subtype-claim-interpretive)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

215. Claim subtype: normative
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim subtype: normative (xananode.canonical:schema/node-subtype-claim-normative)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

216. Claim subtype: predictive
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim subtype: predictive (xananode.canonical:schema/node-subtype-claim-predictive)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

217. Communication subtype: announcement
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: announcement (xananode.canonical:schema/node-subtype-communication-announcement)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

218. Communication subtype: broadcast
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: broadcast (xananode.canonical:schema/node-subtype-communication-broadcast)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

219. Communication subtype: chat
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: chat (xananode.canonical:schema/node-subtype-communication-chat)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

220. Communication subtype: conversation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: conversation (xananode.canonical:schema/node-subtype-communication-conversation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

221. Communication subtype: debate
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: debate (xananode.canonical:schema/node-subtype-communication-debate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

222. Communication subtype: discussion
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: discussion (xananode.canonical:schema/node-subtype-communication-discussion)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

223. Communication subtype: forum
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: forum (xananode.canonical:schema/node-subtype-communication-forum)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

224. Communication subtype: interview
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: interview (xananode.canonical:schema/node-subtype-communication-interview)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

225. Communication subtype: meeting
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: meeting (xananode.canonical:schema/node-subtype-communication-meeting)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

226. Communication subtype: message
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: message (xananode.canonical:schema/node-subtype-communication-message)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

227. Communication subtype: presentation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: presentation (xananode.canonical:schema/node-subtype-communication-presentation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

228. Communication subtype: publication
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: publication (xananode.canonical:schema/node-subtype-communication-publication)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

229. Communication subtype: thread
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication subtype: thread (xananode.canonical:schema/node-subtype-communication-thread)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

230. Community subtype: fan
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Community subtype: fan (xananode.canonical:schema/node-subtype-community-fan)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

231. Community subtype: forum
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Community subtype: forum (xananode.canonical:schema/node-subtype-community-forum)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

232. Community subtype: local
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Community subtype: local (xananode.canonical:schema/node-subtype-community-local)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

233. Community subtype: online
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Community subtype: online (xananode.canonical:schema/node-subtype-community-online)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

234. Community subtype: open source
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Community subtype: open source (xananode.canonical:schema/node-subtype-community-open_source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

235. Community subtype: professional
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Community subtype: professional (xananode.canonical:schema/node-subtype-community-professional)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

236. Community subtype: research
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Community subtype: research (xananode.canonical:schema/node-subtype-community-research)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

237. Concept subtype: distinction
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Concept subtype: distinction (xananode.canonical:schema/node-subtype-concept-distinction)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

238. Concept subtype: failure mode
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Concept subtype: failure mode (xananode.canonical:schema/node-subtype-concept-failure_mode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

239. Concept subtype: frame
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Concept subtype: frame (xananode.canonical:schema/node-subtype-concept-frame)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

240. Concept subtype: method
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Concept subtype: method (xananode.canonical:schema/node-subtype-concept-method)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

241. Concept subtype: pattern
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Concept subtype: pattern (xananode.canonical:schema/node-subtype-concept-pattern)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

242. Concept subtype: principle
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Concept subtype: principle (xananode.canonical:schema/node-subtype-concept-principle)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

243. Concept subtype: theory
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Concept subtype: theory (xananode.canonical:schema/node-subtype-concept-theory)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

244. Essay subtype: analysis
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Essay subtype: analysis (xananode.canonical:schema/node-subtype-essay-analysis)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

245. Essay subtype: argument
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Essay subtype: argument (xananode.canonical:schema/node-subtype-essay-argument)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

246. Essay subtype: critique
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Essay subtype: critique (xananode.canonical:schema/node-subtype-essay-critique)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

247. Essay subtype: explainer
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Essay subtype: explainer (xananode.canonical:schema/node-subtype-essay-explainer)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

248. Essay subtype: manifesto
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Essay subtype: manifesto (xananode.canonical:schema/node-subtype-essay-manifesto)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

249. Essay subtype: reflection
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Essay subtype: reflection (xananode.canonical:schema/node-subtype-essay-reflection)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

250. Event subtype: conference
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Event subtype: conference (xananode.canonical:schema/node-subtype-event-conference)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

251. Event subtype: historical event
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Event subtype: historical event (xananode.canonical:schema/node-subtype-event-historical_event)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

252. Event subtype: incident
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Event subtype: incident (xananode.canonical:schema/node-subtype-event-incident)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

253. Event subtype: meeting
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Event subtype: meeting (xananode.canonical:schema/node-subtype-event-meeting)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

254. Event subtype: publication event
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Event subtype: publication event (xananode.canonical:schema/node-subtype-event-publication_event)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

255. Event subtype: release
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Event subtype: release (xananode.canonical:schema/node-subtype-event-release)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

256. Event subtype: talk
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Event subtype: talk (xananode.canonical:schema/node-subtype-event-talk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

257. Fragment subtype: code block
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Fragment subtype: code block (xananode.canonical:schema/node-subtype-fragment-code_block)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

258. Fragment subtype: data range
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Fragment subtype: data range (xananode.canonical:schema/node-subtype-fragment-data_range)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

259. Fragment subtype: image region
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Fragment subtype: image region (xananode.canonical:schema/node-subtype-fragment-image_region)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

260. Fragment subtype: media segment
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Fragment subtype: media segment (xananode.canonical:schema/node-subtype-fragment-media_segment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

261. Fragment subtype: paragraph
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Fragment subtype: paragraph (xananode.canonical:schema/node-subtype-fragment-paragraph)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

262. Fragment subtype: quote
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Fragment subtype: quote (xananode.canonical:schema/node-subtype-fragment-quote)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

263. Fragment subtype: section
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Fragment subtype: section (xananode.canonical:schema/node-subtype-fragment-section)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

264. Fragment subtype: sentence
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Fragment subtype: sentence (xananode.canonical:schema/node-subtype-fragment-sentence)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

265. Hypothesis subtype: design
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hypothesis subtype: design (xananode.canonical:schema/node-subtype-hypothesis-design)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

266. Hypothesis subtype: diagnostic
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hypothesis subtype: diagnostic (xananode.canonical:schema/node-subtype-hypothesis-diagnostic)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

267. Hypothesis subtype: historical
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hypothesis subtype: historical (xananode.canonical:schema/node-subtype-hypothesis-historical)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

268. Hypothesis subtype: interpretive
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hypothesis subtype: interpretive (xananode.canonical:schema/node-subtype-hypothesis-interpretive)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

269. Hypothesis subtype: prediction
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hypothesis subtype: prediction (xananode.canonical:schema/node-subtype-hypothesis-prediction)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

270. Hypothesis subtype: scientific
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hypothesis subtype: scientific (xananode.canonical:schema/node-subtype-hypothesis-scientific)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

271. Knowledge Gap subtype: historical uncertainty
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Knowledge Gap subtype: historical uncertainty (xananode.canonical:schema/node-subtype-knowledge_gap-historical_uncertainty)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

272. Knowledge Gap subtype: incomplete context
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Knowledge Gap subtype: incomplete context (xananode.canonical:schema/node-subtype-knowledge_gap-incomplete_context)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

273. Knowledge Gap subtype: lost document
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Knowledge Gap subtype: lost document (xananode.canonical:schema/node-subtype-knowledge_gap-lost_document)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

274. Knowledge Gap subtype: missing citation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Knowledge Gap subtype: missing citation (xananode.canonical:schema/node-subtype-knowledge_gap-missing_citation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

275. Knowledge Gap subtype: missing source
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Knowledge Gap subtype: missing source (xananode.canonical:schema/node-subtype-knowledge_gap-missing_source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

276. Knowledge Gap subtype: unknown author
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Knowledge Gap subtype: unknown author (xananode.canonical:schema/node-subtype-knowledge_gap-unknown_author)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

277. Media subtype: app icon
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: app icon (xananode.canonical:schema/node-subtype-media-app_icon)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

278. Media subtype: audio
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: audio (xananode.canonical:schema/node-subtype-media-audio)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

279. Media subtype: branding icon
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: branding icon (xananode.canonical:schema/node-subtype-media-branding_icon)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

280. Media subtype: clip
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: clip (xananode.canonical:schema/node-subtype-media-clip)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

281. Media subtype: diagram
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: diagram (xananode.canonical:schema/node-subtype-media-diagram)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

282. Media subtype: document
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: document (xananode.canonical:schema/node-subtype-media-document)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

283. Media subtype: favicon
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: favicon (xananode.canonical:schema/node-subtype-media-favicon)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

284. Media subtype: image
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: image (xananode.canonical:schema/node-subtype-media-image)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

285. Media subtype: logo
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: logo (xananode.canonical:schema/node-subtype-media-logo)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

286. Media subtype: scan
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: scan (xananode.canonical:schema/node-subtype-media-scan)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

287. Media subtype: screenshot
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: screenshot (xananode.canonical:schema/node-subtype-media-screenshot)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

288. Media subtype: source snapshot
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: source snapshot (xananode.canonical:schema/node-subtype-media-source_snapshot)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

289. Media subtype: thumbnail
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: thumbnail (xananode.canonical:schema/node-subtype-media-thumbnail)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

290. Media subtype: touch icon
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: touch icon (xananode.canonical:schema/node-subtype-media-touch_icon)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

291. Media subtype: video
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: video (xananode.canonical:schema/node-subtype-media-video)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

292. Media subtype: web snapshot
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media subtype: web snapshot (xananode.canonical:schema/node-subtype-media-web_snapshot)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

293. Observation subtype: anomaly
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Observation subtype: anomaly (xananode.canonical:schema/node-subtype-observation-anomaly)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

294. Observation subtype: case study
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Observation subtype: case study (xananode.canonical:schema/node-subtype-observation-case_study)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

295. Observation subtype: example
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Observation subtype: example (xananode.canonical:schema/node-subtype-observation-example)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

296. Observation subtype: failure
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Observation subtype: failure (xananode.canonical:schema/node-subtype-observation-failure)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

297. Observation subtype: news event
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Observation subtype: news event (xananode.canonical:schema/node-subtype-observation-news_event)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

298. Observation subtype: symptom
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Observation subtype: symptom (xananode.canonical:schema/node-subtype-observation-symptom)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

299. Organization subtype: agency
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Organization subtype: agency (xananode.canonical:schema/node-subtype-organization-agency)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

300. Organization subtype: company
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Organization subtype: company (xananode.canonical:schema/node-subtype-organization-company)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

301. Organization subtype: lab
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Organization subtype: lab (xananode.canonical:schema/node-subtype-organization-lab)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

302. Organization subtype: nonprofit
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Organization subtype: nonprofit (xananode.canonical:schema/node-subtype-organization-nonprofit)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

303. Organization subtype: publisher
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Organization subtype: publisher (xananode.canonical:schema/node-subtype-organization-publisher)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

304. Organization subtype: standards body
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Organization subtype: standards body (xananode.canonical:schema/node-subtype-organization-standards_body)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

305. Organization subtype: university
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Organization subtype: university (xananode.canonical:schema/node-subtype-organization-university)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

306. Person subtype: artist
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Person subtype: artist (xananode.canonical:schema/node-subtype-person-artist)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

307. Person subtype: critic
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Person subtype: critic (xananode.canonical:schema/node-subtype-person-critic)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

308. Person subtype: engineer
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Person subtype: engineer (xananode.canonical:schema/node-subtype-person-engineer)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

309. Person subtype: founder
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Person subtype: founder (xananode.canonical:schema/node-subtype-person-founder)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

310. Person subtype: programmer
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Person subtype: programmer (xananode.canonical:schema/node-subtype-person-programmer)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

311. Person subtype: researcher
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Person subtype: researcher (xananode.canonical:schema/node-subtype-person-researcher)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

312. Person subtype: scientist
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Person subtype: scientist (xananode.canonical:schema/node-subtype-person-scientist)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

313. Person subtype: writer
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Person subtype: writer (xananode.canonical:schema/node-subtype-person-writer)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

314. Place subtype: building
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Place subtype: building (xananode.canonical:schema/node-subtype-place-building)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

315. Place subtype: city
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Place subtype: city (xananode.canonical:schema/node-subtype-place-city)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

316. Place subtype: country
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Place subtype: country (xananode.canonical:schema/node-subtype-place-country)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

317. Place subtype: institution site
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Place subtype: institution site (xananode.canonical:schema/node-subtype-place-institution_site)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

318. Place subtype: lab
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Place subtype: lab (xananode.canonical:schema/node-subtype-place-lab)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

319. Place subtype: online space
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Place subtype: online space (xananode.canonical:schema/node-subtype-place-online_space)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

320. Place subtype: region
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Place subtype: region (xananode.canonical:schema/node-subtype-place-region)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

321. Problem subtype: design problem
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Problem subtype: design problem (xananode.canonical:schema/node-subtype-problem-design_problem)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

322. Problem subtype: failure mode
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Problem subtype: failure mode (xananode.canonical:schema/node-subtype-problem-failure_mode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

323. Problem subtype: governance problem
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Problem subtype: governance problem (xananode.canonical:schema/node-subtype-problem-governance_problem)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

324. Problem subtype: implementation problem
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Problem subtype: implementation problem (xananode.canonical:schema/node-subtype-problem-implementation_problem)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

325. Problem subtype: research problem
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Problem subtype: research problem (xananode.canonical:schema/node-subtype-problem-research_problem)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

326. Problem subtype: risk
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Problem subtype: risk (xananode.canonical:schema/node-subtype-problem-risk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

327. Project subtype: fictional system
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Project subtype: fictional system (xananode.canonical:schema/node-subtype-project-fictional_system)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

328. Project subtype: platform
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Project subtype: platform (xananode.canonical:schema/node-subtype-project-platform)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

329. Project subtype: prototype
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Project subtype: prototype (xananode.canonical:schema/node-subtype-project-prototype)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

330. Project subtype: research project
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Project subtype: research project (xananode.canonical:schema/node-subtype-project-research_project)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

331. Project subtype: software
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Project subtype: software (xananode.canonical:schema/node-subtype-project-software)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

332. Project subtype: standard
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Project subtype: standard (xananode.canonical:schema/node-subtype-project-standard)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

333. Publication subtype: article
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Publication subtype: article (xananode.canonical:schema/node-subtype-publication-article)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

334. Publication subtype: book
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Publication subtype: book (xananode.canonical:schema/node-subtype-publication-book)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

335. Publication subtype: episode
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Publication subtype: episode (xananode.canonical:schema/node-subtype-publication-episode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

336. Publication subtype: film
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Publication subtype: film (xananode.canonical:schema/node-subtype-publication-film)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

337. Publication subtype: paper
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Publication subtype: paper (xananode.canonical:schema/node-subtype-publication-paper)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

338. Publication subtype: podcast
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Publication subtype: podcast (xananode.canonical:schema/node-subtype-publication-podcast)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

339. Publication subtype: talk
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Publication subtype: talk (xananode.canonical:schema/node-subtype-publication-talk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

340. Publication subtype: webpage
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Publication subtype: webpage (xananode.canonical:schema/node-subtype-publication-webpage)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

341. Question subtype: design question
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Question subtype: design question (xananode.canonical:schema/node-subtype-question-design_question)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

342. Question subtype: diagnostic question
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Question subtype: diagnostic question (xananode.canonical:schema/node-subtype-question-diagnostic_question)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

343. Question subtype: historical question
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Question subtype: historical question (xananode.canonical:schema/node-subtype-question-historical_question)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

344. Question subtype: open question
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Question subtype: open question (xananode.canonical:schema/node-subtype-question-open_question)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

345. Question subtype: prediction question
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Question subtype: prediction question (xananode.canonical:schema/node-subtype-question-prediction_question)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

346. Question subtype: research question
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Question subtype: research question (xananode.canonical:schema/node-subtype-question-research_question)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

347. Relationship subtype: citation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationship subtype: citation (xananode.canonical:schema/node-subtype-relationship-citation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

348. Relationship subtype: collaboration
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationship subtype: collaboration (xananode.canonical:schema/node-subtype-relationship-collaboration)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

349. Relationship subtype: dependency
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationship subtype: dependency (xananode.canonical:schema/node-subtype-relationship-dependency)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

350. Relationship subtype: dispute
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationship subtype: dispute (xananode.canonical:schema/node-subtype-relationship-dispute)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

351. Relationship subtype: friendship
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationship subtype: friendship (xananode.canonical:schema/node-subtype-relationship-friendship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

352. Relationship subtype: influence
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationship subtype: influence (xananode.canonical:schema/node-subtype-relationship-influence)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

353. Relationship subtype: lineage
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationship subtype: lineage (xananode.canonical:schema/node-subtype-relationship-lineage)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

354. Response subtype: answer
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Response subtype: answer (xananode.canonical:schema/node-subtype-response-answer)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

355. Response subtype: clarification
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Response subtype: clarification (xananode.canonical:schema/node-subtype-response-clarification)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

356. Response subtype: comment
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Response subtype: comment (xananode.canonical:schema/node-subtype-response-comment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

357. Response subtype: follow up
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Response subtype: follow up (xananode.canonical:schema/node-subtype-response-follow_up)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

358. Response subtype: rebuttal
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Response subtype: rebuttal (xananode.canonical:schema/node-subtype-response-rebuttal)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

359. Response subtype: reply
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Response subtype: reply (xananode.canonical:schema/node-subtype-response-reply)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

360. Response subtype: review response
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Response subtype: review response (xananode.canonical:schema/node-subtype-response-review_response)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

361. Revision subtype: claim revision
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Revision subtype: claim revision (xananode.canonical:schema/node-subtype-revision-claim_revision)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

362. Revision subtype: media revision
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Revision subtype: media revision (xananode.canonical:schema/node-subtype-revision-media_revision)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

363. Revision subtype: node revision
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Revision subtype: node revision (xananode.canonical:schema/node-subtype-revision-node_revision)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

364. Revision subtype: relationship revision
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Revision subtype: relationship revision (xananode.canonical:schema/node-subtype-revision-relationship_revision)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

365. Schema subtype: canonical schema record
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: canonical schema record (xananode.canonical:schema/node-subtype-schema-canonical_schema_record)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

366. Schema subtype: governance rule
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: governance rule (xananode.canonical:schema/node-subtype-schema-governance_rule)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

367. Schema subtype: namespace record
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: namespace record (xananode.canonical:schema/node-subtype-schema-namespace_record)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

368. Schema subtype: node subtype schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: node subtype schema (xananode.canonical:schema/node-subtype-schema-node_subtype_schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

369. Schema subtype: node type schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: node type schema (xananode.canonical:schema/node-subtype-schema-node_type_schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

370. Schema subtype: projection style rule
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: projection style rule (xananode.canonical:schema/node-subtype-schema-projection_style_rule)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

371. Schema subtype: property registry entry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: property registry entry (xananode.canonical:schema/node-subtype-schema-property_registry_entry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

372. Schema subtype: protocol artifact
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: protocol artifact (xananode.canonical:schema/node-subtype-schema-protocol_artifact)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

373. Schema subtype: relationship category schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: relationship category schema (xananode.canonical:schema/node-subtype-schema-relationship_category_schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

374. Schema subtype: relationship type schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: relationship type schema (xananode.canonical:schema/node-subtype-schema-relationship_type_schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

375. Schema subtype: schema field
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: schema field (xananode.canonical:schema/node-subtype-schema-schema_field)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

376. Schema subtype: schema term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: schema term (xananode.canonical:schema/node-subtype-schema-schema_term)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

377. Schema subtype: semantic rule
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: semantic rule (xananode.canonical:schema/node-subtype-schema-semantic_rule)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

378. Schema subtype: style rule
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: style rule (xananode.canonical:schema/node-subtype-schema-style_rule)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

379. Schema subtype: term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: term (xananode.canonical:schema/node-subtype-schema-term)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

380. Schema subtype: validation rule
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema subtype: validation rule (xananode.canonical:schema/node-subtype-schema-validation_rule)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

381. Source subtype: archive
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: archive (xananode.canonical:schema/node-subtype-source-archive)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

382. Source subtype: article
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: article (xananode.canonical:schema/node-subtype-source-article)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

383. Source subtype: book
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: book (xananode.canonical:schema/node-subtype-source-book)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

384. Source subtype: dataset
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: dataset (xananode.canonical:schema/node-subtype-source-dataset)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

385. Source subtype: documentation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: documentation (xananode.canonical:schema/node-subtype-source-documentation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

386. Source subtype: git repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: git repository (xananode.canonical:schema/node-subtype-source-git_repository)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

387. Source subtype: interview
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: interview (xananode.canonical:schema/node-subtype-source-interview)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

388. Source subtype: legal policy
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: legal policy (xananode.canonical:schema/node-subtype-source-legal_policy)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

389. Source subtype: license
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: license (xananode.canonical:schema/node-subtype-source-license)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

390. Source subtype: notice
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: notice (xananode.canonical:schema/node-subtype-source-notice)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

391. Source subtype: official site
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: official site (xananode.canonical:schema/node-subtype-source-official_site)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

392. Source subtype: paper
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: paper (xananode.canonical:schema/node-subtype-source-paper)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

393. Source subtype: social profile
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: social profile (xananode.canonical:schema/node-subtype-source-social_profile)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

394. Source subtype: support page
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: support page (xananode.canonical:schema/node-subtype-source-support_page)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

395. Source subtype: support page
   - Existing: Support (xananode.example:source/source-support)
   - Incoming: Source subtype: support page (xananode.canonical:schema/node-subtype-source-support_page)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

396. Source subtype: talk
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: talk (xananode.canonical:schema/node-subtype-source-talk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

397. Source subtype: trademark policy
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: trademark policy (xananode.canonical:schema/node-subtype-source-trademark_policy)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

398. Source subtype: transcript
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: transcript (xananode.canonical:schema/node-subtype-source-transcript)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

399. Source subtype: web snapshot
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: web snapshot (xananode.canonical:schema/node-subtype-source-web_snapshot)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

400. Source subtype: website
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source subtype: website (xananode.canonical:schema/node-subtype-source-website)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

401. Technology subtype: algorithm
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Technology subtype: algorithm (xananode.canonical:schema/node-subtype-technology-algorithm)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

402. Technology subtype: architecture
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Technology subtype: architecture (xananode.canonical:schema/node-subtype-technology-architecture)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

403. Technology subtype: format
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Technology subtype: format (xananode.canonical:schema/node-subtype-technology-format)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

404. Technology subtype: language
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Technology subtype: language (xananode.canonical:schema/node-subtype-technology-language)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

405. Technology subtype: model
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Technology subtype: model (xananode.canonical:schema/node-subtype-technology-model)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

406. Technology subtype: platform
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Technology subtype: platform (xananode.canonical:schema/node-subtype-technology-platform)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

407. Technology subtype: protocol
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Technology subtype: protocol (xananode.canonical:schema/node-subtype-technology-protocol)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

408. Technology subtype: tool
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Technology subtype: tool (xananode.canonical:schema/node-subtype-technology-tool)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

409. Trail subtype: argument
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trail subtype: argument (xananode.canonical:schema/node-subtype-trail-argument)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

410. Trail subtype: dispute path
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trail subtype: dispute path (xananode.canonical:schema/node-subtype-trail-dispute_path)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

411. Trail subtype: evidence path
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trail subtype: evidence path (xananode.canonical:schema/node-subtype-trail-evidence_path)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

412. Trail subtype: historical
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trail subtype: historical (xananode.canonical:schema/node-subtype-trail-historical)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

413. Trail subtype: introductory
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trail subtype: introductory (xananode.canonical:schema/node-subtype-trail-introductory)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

414. Trail subtype: teaching path
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trail subtype: teaching path (xananode.canonical:schema/node-subtype-trail-teaching_path)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

415. Claim
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim (xananode.canonical:schema/node-type-claim)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

416. Communication
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication (xananode.canonical:schema/node-type-communication)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

417. Community
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Community (xananode.canonical:schema/node-type-community)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

418. Concept
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

419. Concept
   - Existing: Unlabeled Hyperlink (xananode.example:concept/unlabeled-hyperlink)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

420. Concept
   - Existing: Typed Relationships (xananode.example:concept/typed-relationships)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

421. Concept
   - Existing: Tumbler Addressing (xananode.example:concept/tumbler-addressing)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

422. Concept
   - Existing: Transclusion (xananode.example:concept/transclusion)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

423. Concept
   - Existing: Substrate Relationship List (xananode.example:concept/substrate-relationship-list)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

424. Concept
   - Existing: Substrate Node Record (xananode.example:concept/substrate-node-record)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

425. Concept
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

426. Concept
   - Existing: Single Source of Truth (xananode.example:concept/single-source-of-truth)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

427. Concept
   - Existing: Schema Extension (xananode.example:concept/schema-extension)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

428. Concept
   - Existing: Review Suggestions (xananode.example:concept/review-suggestions)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

429. Concept
   - Existing: Provenance (xananode.example:concept/provenance)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

430. Concept
   - Existing: Protocol Artifacts (xananode.example:concept/protocol-artifacts)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

431. Concept
   - Existing: Namespacing (xananode.example:concept/namespacing)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

432. Concept
   - Existing: Namespace Registry (xananode.example:concept/namespace-registry)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

433. Concept
   - Existing: Moderation Model (xananode.example:concept/moderation-model)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

434. Concept
   - Existing: Merge Validation (xananode.example:concept/merge-validation)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

435. Concept
   - Existing: Merge Report (xananode.example:concept/merge-report)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

436. Concept
   - Existing: Known Implementations Registry (xananode.example:concept/known-implementations-registry)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

437. Concept
   - Existing: Knowledge Substrate (xananode.example:concept/knowledge-substrate)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

438. Concept
   - Existing: Independent Moderation (xananode.example:concept/independent-moderation)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

439. Concept
   - Existing: Fragment Node (xananode.example:concept/fragment-node)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

440. Concept
   - Existing: Federation Rules (xananode.example:concept/federation-rules)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

441. Concept
   - Existing: Federation Example (xananode.example:concept/federation-example)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

442. Concept
   - Existing: Federated Knowledge Substrates (xananode.example:concept/federated-knowledge-substrates)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

443. Concept
   - Existing: Dispute Resolution (xananode.example:concept/dispute-resolution)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

444. Concept
   - Existing: Deep Linking (xananode.example:concept/deep-linking)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

445. Concept
   - Existing: Custom Extension Substrate (xananode.example:concept/custom-extension-substrate)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

446. Concept
   - Existing: Compatibility Report (xananode.example:concept/compatibility-report)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

447. Concept
   - Existing: Compatibility Levels (xananode.example:concept/compatibility-levels)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

448. Concept
   - Existing: Civilizational Memory (xananode.example:concept/civilizational-memory)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

449. Concept
   - Existing: Canonical Type Policy (xananode.example:concept/canonical-type-policy)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

450. Essay
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Essay (xananode.canonical:schema/node-type-essay)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

451. Event
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Event (xananode.canonical:schema/node-type-event)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

452. Fragment
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Fragment (xananode.canonical:schema/node-type-fragment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

453. Fragment
   - Existing: Fragment Node (xananode.example:concept/fragment-node)
   - Incoming: Fragment (xananode.canonical:schema/node-type-fragment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

454. Fragment
   - Existing: Reusable Media Fragment (xananode.example:fragment/xanadu-document-interconnection-0001)
   - Incoming: Fragment (xananode.canonical:schema/node-type-fragment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

455. Fragment
   - Existing: Augmenting Human Intelligence Fragment (xananode.example:fragment/mother-of-all-demos-0001)
   - Incoming: Fragment (xananode.canonical:schema/node-type-fragment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

456. Fragment
   - Existing: Associative Trails Fragment (xananode.example:fragment/as-we-may-think-0004)
   - Incoming: Fragment (xananode.canonical:schema/node-type-fragment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

457. Hypothesis
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hypothesis (xananode.canonical:schema/node-type-hypothesis)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

458. Knowledge Gap
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Knowledge Gap (xananode.canonical:schema/node-type-knowledge_gap)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

459. Media
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media (xananode.canonical:schema/node-type-media)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

460. Observation
   - Existing: Link Rot (xananode.example:observation/link-rot)
   - Incoming: Observation (xananode.canonical:schema/node-type-observation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

461. Observation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Observation (xananode.canonical:schema/node-type-observation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

462. Organization
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Organization (xananode.canonical:schema/node-type-organization)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

463. Person
   - Existing: Vannevar Bush (xananode.example:person/vannevar-bush)
   - Incoming: Person (xananode.canonical:schema/node-type-person)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

464. Person
   - Existing: Ted Nelson (xananode.example:person/ted-nelson)
   - Incoming: Person (xananode.canonical:schema/node-type-person)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

465. Person
   - Existing: Douglas Engelbart (xananode.example:person/douglas-engelbart)
   - Incoming: Person (xananode.canonical:schema/node-type-person)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

466. Person
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Person (xananode.canonical:schema/node-type-person)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

467. Place
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Place (xananode.canonical:schema/node-type-place)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

468. Problem
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Problem (xananode.canonical:schema/node-type-problem)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

469. Project
   - Existing: XanaNode Hugo Theme (xananode.example:project/xananode-hugo-theme)
   - Incoming: Project (xananode.canonical:schema/node-type-project)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

470. Project
   - Existing: Project Xanadu (xananode.example:project/project-xanadu)
   - Incoming: Project (xananode.canonical:schema/node-type-project)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

471. Project
   - Existing: NLS (xananode.example:project/nls)
   - Incoming: Project (xananode.canonical:schema/node-type-project)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

472. Project
   - Existing: Memex (xananode.example:project/memex)
   - Incoming: Project (xananode.canonical:schema/node-type-project)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

473. Project
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Project (xananode.canonical:schema/node-type-project)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

474. Publication
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Publication (xananode.canonical:schema/node-type-publication)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

475. Question
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Question (xananode.canonical:schema/node-type-question)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

476. Node Type Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Node Type Registry (xananode.canonical:schema/node-type-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

477. Relationship
   - Existing: XanaNode Relationship Types (xananode.example:schema/xananode-relationship-types)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

478. Relationship
   - Existing: Substrate Relationships Schema (xananode.example:schema/substrate-relationships-schema)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

479. Relationship
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

480. Relationship
   - Existing: Typed Relationships (xananode.example:concept/typed-relationships)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

481. Relationship
   - Existing: Substrate Relationship List (xananode.example:concept/substrate-relationship-list)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

482. Relationship
   - Existing: Typed relationships preserve context that hyperlinks lose (xananode.example:claim/claim-relationships-preserve-context)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

483. Response
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Response (xananode.canonical:schema/node-type-response)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

484. Revision
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Revision (xananode.canonical:schema/node-type-revision)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

485. Schema
   - Existing: XanaNode Relationship Types (xananode.example:schema/xananode-relationship-types)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

486. Schema
   - Existing: XanaNode Node Types (xananode.example:schema/xananode-node-types)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

487. Schema
   - Existing: XanaNode Core Schema (xananode.example:schema/xananode-core-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

488. Schema
   - Existing: Substrate Relationships Schema (xananode.example:schema/substrate-relationships-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

489. Schema
   - Existing: Substrate Node Schema (xananode.example:schema/substrate-node-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

490. Schema
   - Existing: Substrate Manifest Schema (xananode.example:schema/substrate-manifest-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

491. Schema
   - Existing: Namespace Schema (xananode.example:schema/namespace-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

492. Schema
   - Existing: Merge Report Schema (xananode.example:schema/merge-report-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

493. Schema
   - Existing: Compatibility Report Schema (xananode.example:schema/compatibility-report-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

494. Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

495. Schema
   - Existing: Schema Extension (xananode.example:concept/schema-extension)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

496. Source
   - Existing: XanaNode Workspace Repository (xananode.example:source/xananode-workspace-repo)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

497. Source
   - Existing: XanaNode Studio Repository (xananode.example:source/xananode-studio-repo)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

498. Source
   - Existing: XanaNode Protocol Repository (xananode.example:source/xananode-protocol-repo)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

499. Source
   - Existing: XanaNode Hugo Repository (xananode.example:source/xananode-hugo-repo)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

500. Source
   - Existing: XanaNode Core SDK Repository (xananode.example:source/xananode-core-sdk-repo)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

501. Source
   - Existing: Xanadu: Document Interconnection Enabling Re-use (xananode.example:source/xanadu-document-interconnection)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

502. Source
   - Existing: 9.6 Million Links in Source Code Comments (xananode.example:source/source-code-link-decay-study)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

503. Source
   - Existing: Mother of All Demos (xananode.example:source/mother-of-all-demos)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

504. Source
   - Existing: As We May Think (xananode.example:source/as-we-may-think)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

505. Source
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

506. Source
   - Existing: Single Source of Truth (xananode.example:concept/single-source-of-truth)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

507. Source
   - Existing: GitHub (xananode.example:source/source-github)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

508. Source
   - Existing: Support (xananode.example:source/source-support)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

509. Technology
   - Existing: Static Publishing (xananode.example:technology/static-publishing)
   - Incoming: Technology (xananode.canonical:schema/node-type-technology)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

510. Technology
   - Existing: Hugo (xananode.example:technology/hugo)
   - Incoming: Technology (xananode.canonical:schema/node-type-technology)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

511. Technology
   - Existing: Cytoscape.js (xananode.example:technology/cytoscape-js)
   - Incoming: Technology (xananode.canonical:schema/node-type-technology)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

512. Technology
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Technology (xananode.canonical:schema/node-type-technology)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

513. Trail
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trail (xananode.canonical:schema/node-type-trail)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

514. Birth date
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Birth date (xananode.canonical:schema/property-birth_date)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

515. Currency value
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Currency value (xananode.canonical:schema/property-currency_value)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

516. External identifier
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: External identifier (xananode.canonical:schema/property-external_identifier)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

517. Geographic coordinates
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Geographic coordinates (xananode.canonical:schema/property-geo_coordinates)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

518. SI measurement
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: SI measurement (xananode.canonical:schema/property-measurement_si)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

519. Property Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Property Registry (xananode.canonical:schema/property-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

520. Property Registry Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Property Registry Schema (xananode.canonical:schema/property-registry-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

521. examples/minimal-substrate/
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: examples/minimal-substrate/ (xananode.canonical:schema/protocol-artifact-examples-minimal-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

522. governance/
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: governance/ (xananode.canonical:schema/protocol-artifact-governance)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

523. media/images/xananode-icon.svg
   - Existing: XanaNode Icon (xananode.example:media/xananode-icon)
   - Incoming: media/images/xananode-icon.svg (xananode.canonical:schema/protocol-artifact-media-images-xananode-icon.svg)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

524. media/images/xananode-icon.svg
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: media/images/xananode-icon.svg (xananode.canonical:schema/protocol-artifact-media-images-xananode-icon.svg)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

525. media/web-manifests/site.webmanifest
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: media/web-manifests/site.webmanifest (xananode.canonical:schema/protocol-artifact-media-web-manifests-site.webmanifest)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

526. registry/
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: registry/ (xananode.canonical:schema/protocol-artifact-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

527. registry/
   - Existing: Namespace Registry (xananode.example:concept/namespace-registry)
   - Incoming: registry/ (xananode.canonical:schema/protocol-artifact-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

528. registry/
   - Existing: Known Implementations Registry (xananode.example:concept/known-implementations-registry)
   - Incoming: registry/ (xananode.canonical:schema/protocol-artifact-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

529. schemas/
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: schemas/ (xananode.canonical:schema/protocol-artifact-schemas)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

530. schemas/author-profile.schema.json
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: schemas/author-profile.schema.json (xananode.canonical:schema/protocol-artifact-schemas-author-profile.schema.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

531. schemas/substrate-manifest.schema.json
   - Existing: Substrate Manifest Schema (xananode.example:schema/substrate-manifest-schema)
   - Incoming: schemas/substrate-manifest.schema.json (xananode.canonical:schema/protocol-artifact-schemas-substrate-manifest.schema.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

532. schemas/substrate-manifest.schema.json
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: schemas/substrate-manifest.schema.json (xananode.canonical:schema/protocol-artifact-schemas-substrate-manifest.schema.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

533. schemas/substrate-manifest.schema.json
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: schemas/substrate-manifest.schema.json (xananode.canonical:schema/protocol-artifact-schemas-substrate-manifest.schema.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

534. schemas/substrate-node.schema.json
   - Existing: Substrate Node Schema (xananode.example:schema/substrate-node-schema)
   - Incoming: schemas/substrate-node.schema.json (xananode.canonical:schema/protocol-artifact-schemas-substrate-node.schema.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

535. schemas/substrate-node.schema.json
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: schemas/substrate-node.schema.json (xananode.canonical:schema/protocol-artifact-schemas-substrate-node.schema.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

536. schemas/substrate-relationships.schema.json
   - Existing: Substrate Relationships Schema (xananode.example:schema/substrate-relationships-schema)
   - Incoming: schemas/substrate-relationships.schema.json (xananode.canonical:schema/protocol-artifact-schemas-substrate-relationships.schema.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

537. schemas/substrate-relationships.schema.json
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: schemas/substrate-relationships.schema.json (xananode.canonical:schema/protocol-artifact-schemas-substrate-relationships.schema.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

538. schemas/xananode-node-types.v0.3.0.json
   - Existing: XanaNode Node Types (xananode.example:schema/xananode-node-types)
   - Incoming: schemas/xananode-node-types.v0.3.0.json (xananode.canonical:schema/protocol-artifact-schemas-xananode-node-types.v0.3.0.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

539. schemas/xananode-node-types.v0.3.0.json
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: schemas/xananode-node-types.v0.3.0.json (xananode.canonical:schema/protocol-artifact-schemas-xananode-node-types.v0.3.0.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

540. schemas/xananode-relationship-types.v0.5.0.json
   - Existing: XanaNode Relationship Types (xananode.example:schema/xananode-relationship-types)
   - Incoming: schemas/xananode-relationship-types.v0.5.0.json (xananode.canonical:schema/protocol-artifact-schemas-xananode-relationship-types.v0.5.0.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

541. schemas/xananode-relationship-types.v0.5.0.json
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: schemas/xananode-relationship-types.v0.5.0.json (xananode.canonical:schema/protocol-artifact-schemas-xananode-relationship-types.v0.5.0.json)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

542. specs/
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: specs/ (xananode.canonical:schema/protocol-artifact-specs)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

543. specs/implementation-compatibility.md
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: specs/implementation-compatibility.md (xananode.canonical:schema/protocol-artifact-specs-implementation-compatibility.md)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

544. Attention Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Attention Relationship Category (xananode.canonical:schema/relationship-category-attention)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

545. Causation Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Causation Relationship Category (xananode.canonical:schema/relationship-category-causation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

546. Citation Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Citation Relationship Category (xananode.canonical:schema/relationship-category-citation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

547. Claim Structure Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim Structure Relationship Category (xananode.canonical:schema/relationship-category-claim_structure)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

548. Cognition Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Cognition Relationship Category (xananode.canonical:schema/relationship-category-cognition)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

549. Communication Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication Relationship Category (xananode.canonical:schema/relationship-category-communication)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

550. Comparison Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Comparison Relationship Category (xananode.canonical:schema/relationship-category-comparison)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

551. Composition Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Composition Relationship Category (xananode.canonical:schema/relationship-category-composition)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

552. Creation Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Creation Relationship Category (xananode.canonical:schema/relationship-category-creation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

553. Definition Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Definition Relationship Category (xananode.canonical:schema/relationship-category-definition)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

554. Discovery Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Discovery Relationship Category (xananode.canonical:schema/relationship-category-discovery)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

555. Evidence Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Evidence Relationship Category (xananode.canonical:schema/relationship-category-evidence)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

556. Explanation Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Explanation Relationship Category (xananode.canonical:schema/relationship-category-explanation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

557. Generic Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Generic Relationship Category (xananode.canonical:schema/relationship-category-generic)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

558. Governance Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Governance Relationship Category (xananode.canonical:schema/relationship-category-governance)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

559. Historical Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Historical Relationship Category (xananode.canonical:schema/relationship-category-historical)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

560. Identity Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Identity Relationship Category (xananode.canonical:schema/relationship-category-identity)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

561. Influence Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Influence Relationship Category (xananode.canonical:schema/relationship-category-influence)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

562. Inquiry Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Inquiry Relationship Category (xananode.canonical:schema/relationship-category-inquiry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

563. Knowledge Workflow Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Knowledge Workflow Relationship Category (xananode.canonical:schema/relationship-category-knowledge_workflow)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

564. Lineage Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Lineage Relationship Category (xananode.canonical:schema/relationship-category-lineage)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

565. Location Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Location Relationship Category (xananode.canonical:schema/relationship-category-location)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

566. Participation Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Participation Relationship Category (xananode.canonical:schema/relationship-category-participation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

567. Reasoning Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Reasoning Relationship Category (xananode.canonical:schema/relationship-category-reasoning)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

568. Representation Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Representation Relationship Category (xananode.canonical:schema/relationship-category-representation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

569. Research Workflow Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Research Workflow Relationship Category (xananode.canonical:schema/relationship-category-research_workflow)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

570. Revision Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Revision Relationship Category (xananode.canonical:schema/relationship-category-revision)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

571. Schema Mapping Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema Mapping Relationship Category (xananode.canonical:schema/relationship-category-schema_mapping)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

572. Social Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Social Relationship Category (xananode.canonical:schema/relationship-category-social)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

573. Temporal Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Temporal Relationship Category (xananode.canonical:schema/relationship-category-temporal)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

574. Uncertainty Relationship Category
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Uncertainty Relationship Category (xananode.canonical:schema/relationship-category-uncertainty)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

575. Abstraction of
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Abstraction of (xananode.canonical:schema/relationship-type-abstraction_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

576. Alias of
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Alias of (xananode.canonical:schema/relationship-type-alias_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

577. Alternative to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Alternative to (xananode.canonical:schema/relationship-type-alternative_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

578. Analogous to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Analogous to (xananode.canonical:schema/relationship-type-analogous_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

579. Announced
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Announced (xananode.canonical:schema/relationship-type-announced)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

580. Announced By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Announced By Relationship Term (xananode.canonical:schema/relationship-type-announced_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

581. Answered By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Answered By Relationship Term (xananode.canonical:schema/relationship-type-answered_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

582. Answered in
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Answered in (xananode.canonical:schema/relationship-type-answered_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

583. Answers
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Answers (xananode.canonical:schema/relationship-type-answers)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

584. Anticipated
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Anticipated (xananode.canonical:schema/relationship-type-anticipated)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

585. Anticipated By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Anticipated By Relationship Term (xananode.canonical:schema/relationship-type-anticipated_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

586. Anticipates
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Anticipates (xananode.canonical:schema/relationship-type-anticipates)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

587. Appears in
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Appears in (xananode.canonical:schema/relationship-type-appears_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

588. Approved
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Approved (xananode.canonical:schema/relationship-type-approved)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

589. Approved By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Approved By Relationship Term (xananode.canonical:schema/relationship-type-approved_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

590. Arrived From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Arrived From Relationship Term (xananode.canonical:schema/relationship-type-arrived_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

591. Arrives at
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Arrives at (xananode.canonical:schema/relationship-type-arrives_at)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

592. Asked
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Asked (xananode.canonical:schema/relationship-type-asked)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

593. Asked By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Asked By Relationship Term (xananode.canonical:schema/relationship-type-asked_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

594. Asked in
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Asked in (xananode.canonical:schema/relationship-type-asked_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

595. Attribution Required By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Attribution Required By Relationship Term (xananode.canonical:schema/relationship-type-attribution_required_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

596. Authored
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Authored (xananode.canonical:schema/relationship-type-authored)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

597. Authored By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Authored By Relationship Term (xananode.canonical:schema/relationship-type-authored_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

598. Broadcast to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Broadcast to (xananode.canonical:schema/relationship-type-broadcast_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

599. Broader than
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Broader than (xananode.canonical:schema/relationship-type-broader_than)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

600. Cited By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Cited By Relationship Term (xananode.canonical:schema/relationship-type-cited_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

601. Cites
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Cites (xananode.canonical:schema/relationship-type-cites)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

602. Claim Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim Of Relationship Term (xananode.canonical:schema/relationship-type-claim_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

603. Clarified By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Clarified By Relationship Term (xananode.canonical:schema/relationship-type-clarified_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

604. Clarifies
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Clarifies (xananode.canonical:schema/relationship-type-clarifies)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

605. Coined
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Coined (xananode.canonical:schema/relationship-type-coined)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

606. Coined By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Coined By Relationship Term (xananode.canonical:schema/relationship-type-coined_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

607. Collaborated with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Collaborated with (xananode.canonical:schema/relationship-type-collaborated_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

608. Communicated to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communicated to (xananode.canonical:schema/relationship-type-communicated_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

609. Communication Received From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Communication Received From Relationship Term (xananode.canonical:schema/relationship-type-communication_received_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

610. Compatible with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Compatible with (xananode.canonical:schema/relationship-type-compatible_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

611. Concrete Example Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Concrete Example Of Relationship Term (xananode.canonical:schema/relationship-type-concrete_example_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

612. Contains
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Contains (xananode.canonical:schema/relationship-type-contains)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

613. Contemporary of
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Contemporary of (xananode.canonical:schema/relationship-type-contemporary_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

614. Context for
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Context for (xananode.canonical:schema/relationship-type-context_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

615. Context Required By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Context Required By Relationship Term (xananode.canonical:schema/relationship-type-context_required_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

616. Continued From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Continued From Relationship Term (xananode.canonical:schema/relationship-type-continued_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

617. Continues to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Continues to (xananode.canonical:schema/relationship-type-continues_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

618. Contradicted By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Contradicted By Relationship Term (xananode.canonical:schema/relationship-type-contradicted_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

619. Contradicts
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Contradicts (xananode.canonical:schema/relationship-type-contradicts)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

620. Contrasts with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Contrasts with (xananode.canonical:schema/relationship-type-contrasts_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

621. Created
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Created (xananode.canonical:schema/relationship-type-created)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

622. Created By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Created By Relationship Term (xananode.canonical:schema/relationship-type-created_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

623. Critical to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Critical to (xananode.canonical:schema/relationship-type-critical_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

624. Critically Depends On Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Critically Depends On Relationship Term (xananode.canonical:schema/relationship-type-critically_depends_on)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

625. Debated with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Debated with (xananode.canonical:schema/relationship-type-debated_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

626. Deep Linked From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Deep Linked From Relationship Term (xananode.canonical:schema/relationship-type-deep_linked_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

627. Deep links to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Deep links to (xananode.canonical:schema/relationship-type-deep_links_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

628. Defined By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Defined By Relationship Term (xananode.canonical:schema/relationship-type-defined_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

629. Defines
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Defines (xananode.canonical:schema/relationship-type-defines)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

630. Demonstrated By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Demonstrated By Relationship Term (xananode.canonical:schema/relationship-type-demonstrated_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

631. Demonstrates
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Demonstrates (xananode.canonical:schema/relationship-type-demonstrates)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

632. Dependency Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Dependency Of Relationship Term (xananode.canonical:schema/relationship-type-dependency_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

633. Depends on
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Depends on (xananode.canonical:schema/relationship-type-depends_on)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

634. Depicted By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Depicted By Relationship Term (xananode.canonical:schema/relationship-type-depicted_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

635. Depicts
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Depicts (xananode.canonical:schema/relationship-type-depicts)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

636. Derived from
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Derived from (xananode.canonical:schema/relationship-type-derived_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

637. Derived Into Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Derived Into Relationship Term (xananode.canonical:schema/relationship-type-derived_into)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

638. Discussed In Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Discussed In Relationship Term (xananode.canonical:schema/relationship-type-discussed_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

639. Discussed with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Discussed with (xananode.canonical:schema/relationship-type-discussed_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

640. Discusses
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Discusses (xananode.canonical:schema/relationship-type-discusses)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

641. Discussion Partner Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Discussion Partner Of Relationship Term (xananode.canonical:schema/relationship-type-discussion_partner_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

642. Disputed By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Disputed By Relationship Term (xananode.canonical:schema/relationship-type-disputed_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

643. Disputed identity
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Disputed identity (xananode.canonical:schema/relationship-type-disputed_identity)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

644. Disputes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Disputes (xananode.canonical:schema/relationship-type-disputes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

645. Documented By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Documented By Relationship Term (xananode.canonical:schema/relationship-type-documented_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

646. Documents
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Documents (xananode.canonical:schema/relationship-type-documents)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

647. Enabled By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Enabled By Relationship Term (xananode.canonical:schema/relationship-type-enabled_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

648. Enables
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Enables (xananode.canonical:schema/relationship-type-enables)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

649. Equivalent to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Equivalent to (xananode.canonical:schema/relationship-type-equivalent_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

650. Evidence for
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Evidence for (xananode.canonical:schema/relationship-type-evidence_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

651. Evidence Insufficient For Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Evidence Insufficient For Relationship Term (xananode.canonical:schema/relationship-type-evidence_insufficient_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

652. Example of
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Example of (xananode.canonical:schema/relationship-type-example_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

653. Explained By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Explained By Relationship Term (xananode.canonical:schema/relationship-type-explained_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

654. Explains
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Explains (xananode.canonical:schema/relationship-type-explains)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

655. Extended By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Extended By Relationship Term (xananode.canonical:schema/relationship-type-extended_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

656. Extends
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Extends (xananode.canonical:schema/relationship-type-extends)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

657. Extension of
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Extension of (xananode.canonical:schema/relationship-type-extension_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

658. Fails to answer
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Fails to answer (xananode.canonical:schema/relationship-type-fails_to_answer)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

659. Falsified By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Falsified By Relationship Term (xananode.canonical:schema/relationship-type-falsified_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

660. Falsifies
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Falsifies (xananode.canonical:schema/relationship-type-falsifies)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

661. Featured In Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Featured In Relationship Term (xananode.canonical:schema/relationship-type-featured_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

662. Featured Speaker Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Featured Speaker Relationship Term (xananode.canonical:schema/relationship-type-featured_speaker)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

663. Features
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Features (xananode.canonical:schema/relationship-type-features)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

664. Followed Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Followed Relationship Term (xananode.canonical:schema/relationship-type-followed)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

665. Frequently misunderstood
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Frequently misunderstood (xananode.canonical:schema/relationship-type-frequently_misunderstood)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

666. Friend of
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Friend of (xananode.canonical:schema/relationship-type-friend_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

667. Generalized By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Generalized By Relationship Term (xananode.canonical:schema/relationship-type-generalized_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

668. Generalizes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Generalizes (xananode.canonical:schema/relationship-type-generalizes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

669. Generated
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Generated (xananode.canonical:schema/relationship-type-generated)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

670. Generated By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Generated By Relationship Term (xananode.canonical:schema/relationship-type-generated_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

671. governed by
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: governed by (xananode.canonical:schema/relationship-type-governed_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

672. Governs Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Governs Relationship Term (xananode.canonical:schema/relationship-type-governs)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

673. Had Answer Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Had Answer Relationship Term (xananode.canonical:schema/relationship-type-had_answer)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

674. Had Participant Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Had Participant Relationship Term (xananode.canonical:schema/relationship-type-had_participant)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

675. Had Question Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Had Question Relationship Term (xananode.canonical:schema/relationship-type-had_question)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

676. Has Alias Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Alias Relationship Term (xananode.canonical:schema/relationship-type-has_alias)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

677. Has Appearance Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Appearance Relationship Term (xananode.canonical:schema/relationship-type-has_appearance)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

678. Has claim
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has claim (xananode.canonical:schema/relationship-type-has_claim)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

679. Has Context Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Context Relationship Term (xananode.canonical:schema/relationship-type-has_context)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

680. Has Evidence Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Evidence Relationship Term (xananode.canonical:schema/relationship-type-has_evidence)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

681. Has Example Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Example Relationship Term (xananode.canonical:schema/relationship-type-has_example)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

682. Has Extension Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Extension Relationship Term (xananode.canonical:schema/relationship-type-has_extension)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

683. Has High Risk Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has High Risk Relationship Term (xananode.canonical:schema/relationship-type-has_high_risk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

684. Has Important Context Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Important Context Relationship Term (xananode.canonical:schema/relationship-type-has_important_context)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

685. Has primary media
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has primary media (xananode.canonical:schema/relationship-type-has_primary_media)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

686. High risk for
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: High risk for (xananode.canonical:schema/relationship-type-high_risk_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

687. Identified
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Identified (xananode.canonical:schema/relationship-type-identified)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

688. Identified By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Identified By Relationship Term (xananode.canonical:schema/relationship-type-identified_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

689. Implemented By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Implemented By Relationship Term (xananode.canonical:schema/relationship-type-implemented_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

690. Implements
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Implements (xananode.canonical:schema/relationship-type-implements)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

691. Important for
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Important for (xananode.canonical:schema/relationship-type-important_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

692. Included In Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Included In Relationship Term (xananode.canonical:schema/relationship-type-included_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

693. Includes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Includes (xananode.canonical:schema/relationship-type-includes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

694. Influenced
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Influenced (xananode.canonical:schema/relationship-type-influenced)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

695. Influenced By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Influenced By Relationship Term (xananode.canonical:schema/relationship-type-influenced_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

696. Information Required By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Information Required By Relationship Term (xananode.canonical:schema/relationship-type-information_required_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

697. Inquiry Motivated By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Inquiry Motivated By Relationship Term (xananode.canonical:schema/relationship-type-inquiry_motivated_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

698. Insufficient evidence
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Insufficient evidence (xananode.canonical:schema/relationship-type-insufficient_evidence)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

699. Interviewed
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Interviewed (xananode.canonical:schema/relationship-type-interviewed)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

700. Interviewed By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Interviewed By Relationship Term (xananode.canonical:schema/relationship-type-interviewed_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

701. Introduced
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Introduced (xananode.canonical:schema/relationship-type-introduced)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

702. Introduced By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Introduced By Relationship Term (xananode.canonical:schema/relationship-type-introduced_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

703. Introduced in
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Introduced in (xananode.canonical:schema/relationship-type-introduced_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

704. Introduction Venue Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Introduction Venue Of Relationship Term (xananode.canonical:schema/relationship-type-introduction_venue_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

705. Investigated By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Investigated By Relationship Term (xananode.canonical:schema/relationship-type-investigated_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

706. Investigates
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Investigates (xananode.canonical:schema/relationship-type-investigates)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

707. Is Start Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Is Start Of Relationship Term (xananode.canonical:schema/relationship-type-is_start_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

708. License For Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: License For Relationship Term (xananode.canonical:schema/relationship-type-license_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

709. licensed under
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: licensed under (xananode.canonical:schema/relationship-type-licensed_under)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

710. Mapped From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Mapped From Relationship Term (xananode.canonical:schema/relationship-type-mapped_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

711. Maps to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Maps to (xananode.canonical:schema/relationship-type-maps_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

712. Memorialized By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Memorialized By Relationship Term (xananode.canonical:schema/relationship-type-memorialized_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

713. Memorializes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Memorializes (xananode.canonical:schema/relationship-type-memorializes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

714. Mentioned By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Mentioned By Relationship Term (xananode.canonical:schema/relationship-type-mentioned_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

715. Mentions
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Mentions (xananode.canonical:schema/relationship-type-mentions)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

716. Misunderstanding Context For Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Misunderstanding Context For Relationship Term (xananode.canonical:schema/relationship-type-misunderstanding_context_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

717. Motivated by
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Motivated by (xananode.canonical:schema/relationship-type-motivated_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

718. Motivates Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Motivates Relationship Term (xananode.canonical:schema/relationship-type-motivates)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

719. Motivates inquiry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Motivates inquiry (xananode.canonical:schema/relationship-type-motivates_inquiry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

720. Narrower Than Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Narrower Than Relationship Term (xananode.canonical:schema/relationship-type-narrower_than)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

721. Negotiated with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Negotiated with (xananode.canonical:schema/relationship-type-negotiated_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

722. Not Answered By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Not Answered By Relationship Term (xananode.canonical:schema/relationship-type-not_answered_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

723. Occurred at
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Occurred at (xananode.canonical:schema/relationship-type-occurred_at)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

724. Overlooked by
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Overlooked by (xananode.canonical:schema/relationship-type-overlooked_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

725. Overlooks Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Overlooks Relationship Term (xananode.canonical:schema/relationship-type-overlooks)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

726. Parallel to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Parallel to (xananode.canonical:schema/relationship-type-parallel_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

727. Part Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Part Of Relationship Term (xananode.canonical:schema/relationship-type-part_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

728. Partially Answered By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Partially Answered By Relationship Term (xananode.canonical:schema/relationship-type-partially_answered_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

729. Partially answers
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Partially answers (xananode.canonical:schema/relationship-type-partially_answers)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

730. Participated in
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Participated in (xananode.canonical:schema/relationship-type-participated_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

731. Popularized
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Popularized (xananode.canonical:schema/relationship-type-popularized)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

732. Popularized By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Popularized By Relationship Term (xananode.canonical:schema/relationship-type-popularized_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

733. Possible match
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Possible match (xananode.canonical:schema/relationship-type-possible_match)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

734. Possibly related to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Possibly related to (xananode.canonical:schema/relationship-type-possibly_related_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

735. Preceded
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Preceded (xananode.canonical:schema/relationship-type-preceded)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

736. Presentation Received From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Presentation Received From Relationship Term (xananode.canonical:schema/relationship-type-presentation_received_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

737. Presented
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Presented (xananode.canonical:schema/relationship-type-presented)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

738. Presented By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Presented By Relationship Term (xananode.canonical:schema/relationship-type-presented_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

739. Presented to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Presented to (xananode.canonical:schema/relationship-type-presented_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

740. Preserved By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Preserved By Relationship Term (xananode.canonical:schema/relationship-type-preserved_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

741. Preserves
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Preserves (xananode.canonical:schema/relationship-type-preserves)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

742. Produces Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Produces Relationship Term (xananode.canonical:schema/relationship-type-produces)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

743. Proposed
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Proposed (xananode.canonical:schema/relationship-type-proposed)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

744. Proposed By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Proposed By Relationship Term (xananode.canonical:schema/relationship-type-proposed_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

745. Quoted By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Quoted By Relationship Term (xananode.canonical:schema/relationship-type-quoted_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

746. Quotes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Quotes (xananode.canonical:schema/relationship-type-quotes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

747. Raised By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Raised By Relationship Term (xananode.canonical:schema/relationship-type-raised_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

748. Raises
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Raises (xananode.canonical:schema/relationship-type-raises)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

749. Received Broadcast From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Received Broadcast From Relationship Term (xananode.canonical:schema/relationship-type-received_broadcast_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

750. Received Report From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Received Report From Relationship Term (xananode.canonical:schema/relationship-type-received_report_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

751. Refined By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Refined By Relationship Term (xananode.canonical:schema/relationship-type-refined_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

752. Refines
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Refines (xananode.canonical:schema/relationship-type-refines)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

753. Relationship Type Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationship Type Registry (xananode.canonical:schema/relationship-type-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

754. Related to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Related to (xananode.canonical:schema/relationship-type-related_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

755. Replied By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Replied By Relationship Term (xananode.canonical:schema/relationship-type-replied_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

756. Replied to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Replied to (xananode.canonical:schema/relationship-type-replied_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

757. Reported to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Reported to (xananode.canonical:schema/relationship-type-reported_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

758. Represented By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Represented By Relationship Term (xananode.canonical:schema/relationship-type-represented_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

759. Represents
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Represents (xananode.canonical:schema/relationship-type-represents)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

760. Required For Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Required For Relationship Term (xananode.canonical:schema/relationship-type-required_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

761. Requires
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Requires (xananode.canonical:schema/relationship-type-requires)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

762. requires attribution
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: requires attribution (xananode.canonical:schema/relationship-type-requires_attribution)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

763. Requires context
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Requires context (xananode.canonical:schema/relationship-type-requires_context)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

764. Requires information
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Requires information (xananode.canonical:schema/relationship-type-requires_information)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

765. Requires review
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Requires review (xananode.canonical:schema/relationship-type-requires_review)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

766. Requires source
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Requires source (xananode.canonical:schema/relationship-type-requires_source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

767. Requires validation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Requires validation (xananode.canonical:schema/relationship-type-requires_validation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

768. Resonates with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Resonates with (xananode.canonical:schema/relationship-type-resonates_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

769. Results from
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Results from (xananode.canonical:schema/relationship-type-results_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

770. Review Required By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Review Required By Relationship Term (xananode.canonical:schema/relationship-type-review_required_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

771. Reviewed Under Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Reviewed Under Relationship Term (xananode.canonical:schema/relationship-type-reviewed_under)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

772. Same concept
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Same concept (xananode.canonical:schema/relationship-type-same_concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

773. Same entity
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Same entity (xananode.canonical:schema/relationship-type-same_entity)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

774. Same person
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Same person (xananode.canonical:schema/relationship-type-same_person)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

775. Same source
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Same source (xananode.canonical:schema/relationship-type-same_source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

776. Shaped By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Shaped By Relationship Term (xananode.canonical:schema/relationship-type-shaped_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

777. Shapes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Shapes (xananode.canonical:schema/relationship-type-shapes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

778. Shares pattern with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Shares pattern with (xananode.canonical:schema/relationship-type-shares_pattern_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

779. Site Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Site Of Relationship Term (xananode.canonical:schema/relationship-type-site_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

780. Source Required By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source Required By Relationship Term (xananode.canonical:schema/relationship-type-source_required_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

781. Specialized By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Specialized By Relationship Term (xananode.canonical:schema/relationship-type-specialized_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

782. Specializes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Specializes (xananode.canonical:schema/relationship-type-specializes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

783. Speculated By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Speculated By Relationship Term (xananode.canonical:schema/relationship-type-speculated_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

784. Speculative
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Speculative (xananode.canonical:schema/relationship-type-speculative)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

785. Spoke at
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Spoke at (xananode.canonical:schema/relationship-type-spoke_at)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

786. Starts with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Starts with (xananode.canonical:schema/relationship-type-starts_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

787. Superseded By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Superseded By Relationship Term (xananode.canonical:schema/relationship-type-superseded_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

788. Supersedes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Supersedes (xananode.canonical:schema/relationship-type-supersedes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

789. Supported By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Supported By Relationship Term (xananode.canonical:schema/relationship-type-supported_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

790. Supported By Relationship Term
   - Existing: Support (xananode.example:source/source-support)
   - Incoming: Supported By Relationship Term (xananode.canonical:schema/relationship-type-supported_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

791. Supports
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Supports (xananode.canonical:schema/relationship-type-supports)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

792. Supports
   - Existing: Support (xananode.example:source/source-support)
   - Incoming: Supports (xananode.canonical:schema/relationship-type-supports)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

793. Tested By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Tested By Relationship Term (xananode.canonical:schema/relationship-type-tested_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

794. Tests
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Tests (xananode.canonical:schema/relationship-type-tests)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

795. Threatened By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Threatened By Relationship Term (xananode.canonical:schema/relationship-type-threatened_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

796. Threatens
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Threatens (xananode.canonical:schema/relationship-type-threatens)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

797. Trademark Holder For Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trademark Holder For Relationship Term (xananode.canonical:schema/relationship-type-trademark_holder_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

798. trademarked by
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: trademarked by (xananode.canonical:schema/relationship-type-trademarked_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

799. Trained on
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trained on (xananode.canonical:schema/relationship-type-trained_on)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

800. Transcluded By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Transcluded By Relationship Term (xananode.canonical:schema/relationship-type-transcluded_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

801. Transcludes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Transcludes (xananode.canonical:schema/relationship-type-transcludes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

802. Under review
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Under review (xananode.canonical:schema/relationship-type-under_review)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

803. Unresolved
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Unresolved (xananode.canonical:schema/relationship-type-unresolved)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

804. Unresolved By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Unresolved By Relationship Term (xananode.canonical:schema/relationship-type-unresolved_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

805. Used As Primary Media For Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Used As Primary Media For Relationship Term (xananode.canonical:schema/relationship-type-used_as_primary_media_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

806. Used By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Used By Relationship Term (xananode.canonical:schema/relationship-type-used_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

807. Used To Train Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Used To Train Relationship Term (xananode.canonical:schema/relationship-type-used_to_train)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

808. Uses
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Uses (xananode.canonical:schema/relationship-type-uses)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

809. Validated By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Validated By Relationship Term (xananode.canonical:schema/relationship-type-validated_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

810. Validates
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Validates (xananode.canonical:schema/relationship-type-validates)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

811. Validation Required By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Validation Required By Relationship Term (xananode.canonical:schema/relationship-type-validation_required_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

812. RO-Crate Metadata Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: RO-Crate Metadata Schema (xananode.canonical:schema/ro-crate-metadata-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

813. Substrate Diff Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Diff Schema (xananode.canonical:schema/substrate-diff-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

814. Substrate Manifest Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/substrate-manifest-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

815. Substrate Manifest Schema
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/substrate-manifest-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

816. Substrate Node Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Node Schema (xananode.canonical:schema/substrate-node-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

817. Substrate Relationships Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Relationships Schema (xananode.canonical:schema/substrate-relationships-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

818. Apache License 2.0
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Apache License 2.0 (xananode.canonical:source/apache-2-0-license)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

819. Creative Commons Attribution 4.0 International
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Creative Commons Attribution 4.0 International (xananode.canonical:source/cc-by-4-0-license)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

820. CC0 1.0 Public Domain Dedication
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: CC0 1.0 Public Domain Dedication (xananode.canonical:source/cc0-1-0-public-domain-dedication)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

821. GitHub Profile
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: GitHub Profile (xananode.canonical:source/github-profile)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

822. GitHub Profile
   - Existing: GitHub (xananode.example:source/source-github)
   - Incoming: GitHub Profile (xananode.canonical:source/github-profile)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

823. GNU General Public License 3.0
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: GNU General Public License 3.0 (xananode.canonical:source/gpl-3-0-license)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

824. Hugo Official Site
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hugo Official Site (xananode.canonical:source/hugo-official-site)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

825. MIT License
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: MIT License (xananode.canonical:source/mit-license)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

826. XanaNode Protocol Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Protocol Repository (xananode.canonical:source/repository-kingc95-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

827. XanaNode Core SDK Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core SDK Repository (xananode.canonical:source/repository-kingc95-xananode-core-sdk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

828. XanaNode Hugo Theme Repository
   - Existing: XanaNode Hugo Theme (xananode.example:project/xananode-hugo-theme)
   - Incoming: XanaNode Hugo Theme Repository (xananode.canonical:source/repository-kingc95-xananode-hugo)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

829. XanaNode Hugo Theme Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Hugo Theme Repository (xananode.canonical:source/repository-kingc95-xananode-hugo)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

830. XanaNode Studio Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Studio Repository (xananode.canonical:source/repository-kingc95-xananode-studio)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

831. XanaNode Workspace Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Workspace Repository (xananode.canonical:source/repository-kingc95-xananode-workspace)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

832. Support XanaNode
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Support XanaNode (xananode.canonical:source/support-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

833. Support XanaNode
   - Existing: Support (xananode.example:source/source-support)
   - Incoming: Support XanaNode (xananode.canonical:source/support-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

834. XanaNode.com
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode.com (xananode.canonical:source/xananode-com-domain)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

835. XanaNode Core SDK Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core SDK Repository (xananode.canonical:source/xananode-core-sdk-repository)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

836. XanaNode Hugo Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Hugo Repository (xananode.canonical:source/xananode-hugo-repository)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

837. XanaNode License Policy
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode License Policy (xananode.canonical:source/xananode-license-policy)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

838. XanaNode.net
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode.net (xananode.canonical:source/xananode-net-domain)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

839. XanaNode NOTICE
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode NOTICE (xananode.canonical:source/xananode-notice)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

840. XanaNode.org
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode.org (xananode.canonical:source/xananode-org-domain)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

841. XanaNode Protocol Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Protocol Repository (xananode.canonical:source/xananode-protocol-repository)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

842. XanaNode Studio Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Studio Repository (xananode.canonical:source/xananode-studio-repository)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

843. XanaNode Trademark Policy
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Trademark Policy (xananode.canonical:source/xananode-trademark-policy)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

844. XanaNode Workspace Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Workspace Repository (xananode.canonical:source/xananode-workspace-repository)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

845. Cytoscape.js
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Cytoscape.js (xananode.canonical:technology/cytoscape-js)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

846. Git
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Git (xananode.canonical:technology/git)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

847. Hugo
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hugo (xananode.canonical:technology/hugo)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

848. Node.js
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Node.js (xananode.canonical:technology/nodejs)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

849. Python
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Python (xananode.canonical:technology/python)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

850. XanaNode Core SDK: node files
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core SDK: node files (xananode.canonical:technology/xananode-core-sdk-component-node-files)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

851. XanaNode Core SDK: protocol schemas
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core SDK: protocol schemas (xananode.canonical:technology/xananode-core-sdk-component-protocol-schemas)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

852. XanaNode Core SDK: relationship files
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core SDK: relationship files (xananode.canonical:technology/xananode-core-sdk-component-relationship-files)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

853. XanaNode Core SDK: substrate manifests
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core SDK: substrate manifests (xananode.canonical:technology/xananode-core-sdk-component-substrate-manifests)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

854. XanaNode Core SDK: substrate manifests
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: XanaNode Core SDK: substrate manifests (xananode.canonical:technology/xananode-core-sdk-component-substrate-manifests)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

855. XanaNode Core SDK: substrate packs
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core SDK: substrate packs (xananode.canonical:technology/xananode-core-sdk-component-substrate-packs)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

856. XanaNode Hugo Theme: node files
   - Existing: XanaNode Hugo Theme (xananode.example:project/xananode-hugo-theme)
   - Incoming: XanaNode Hugo Theme: node files (xananode.canonical:technology/xananode-hugo-theme-component-node-files)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

857. XanaNode Hugo Theme: node files
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Hugo Theme: node files (xananode.canonical:technology/xananode-hugo-theme-component-node-files)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

858. XanaNode Hugo Theme: relationship files
   - Existing: XanaNode Hugo Theme (xananode.example:project/xananode-hugo-theme)
   - Incoming: XanaNode Hugo Theme: relationship files (xananode.canonical:technology/xananode-hugo-theme-component-relationship-files)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

859. XanaNode Hugo Theme: relationship files
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Hugo Theme: relationship files (xananode.canonical:technology/xananode-hugo-theme-component-relationship-files)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

860. XanaNode Hugo Theme: schema registries
   - Existing: XanaNode Hugo Theme (xananode.example:project/xananode-hugo-theme)
   - Incoming: XanaNode Hugo Theme: schema registries (xananode.canonical:technology/xananode-hugo-theme-component-schema-registries)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

861. XanaNode Hugo Theme: schema registries
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Hugo Theme: schema registries (xananode.canonical:technology/xananode-hugo-theme-component-schema-registries)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

862. XanaNode Hugo Theme: substrate manifests
   - Existing: XanaNode Hugo Theme (xananode.example:project/xananode-hugo-theme)
   - Incoming: XanaNode Hugo Theme: substrate manifests (xananode.canonical:technology/xananode-hugo-theme-component-substrate-manifests)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

863. XanaNode Hugo Theme: substrate manifests
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Hugo Theme: substrate manifests (xananode.canonical:technology/xananode-hugo-theme-component-substrate-manifests)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

864. XanaNode Hugo Theme: substrate manifests
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: XanaNode Hugo Theme: substrate manifests (xananode.canonical:technology/xananode-hugo-theme-component-substrate-manifests)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

865. XanaNode Studio: Core SDK APIs
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Studio: Core SDK APIs (xananode.canonical:technology/xananode-studio-component-core-sdk-apis)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

866. XanaNode Studio: protocol branding
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Studio: protocol branding (xananode.canonical:technology/xananode-studio-component-protocol-branding)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

867. XanaNode Studio: protocol registries
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Studio: protocol registries (xananode.canonical:technology/xananode-studio-component-protocol-registries)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

868. XanaNode Studio: Workspace APIs
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Studio: Workspace APIs (xananode.canonical:technology/xananode-studio-component-workspace-apis)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

869. XanaNode Workspace: author profiles
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Workspace: author profiles (xananode.canonical:technology/xananode-workspace-component-author-profiles)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

870. XanaNode Workspace: Core SDK APIs
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Workspace: Core SDK APIs (xananode.canonical:technology/xananode-workspace-component-core-sdk-apis)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

871. XanaNode Workspace: node files
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Workspace: node files (xananode.canonical:technology/xananode-workspace-component-node-files)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

872. XanaNode Workspace: relationship files
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Workspace: relationship files (xananode.canonical:technology/xananode-workspace-component-relationship-files)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

873. XanaNode Workspace: substrate manifests
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Workspace: substrate manifests (xananode.canonical:technology/xananode-workspace-component-substrate-manifests)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

874. XanaNode Workspace: substrate manifests
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: XanaNode Workspace: substrate manifests (xananode.canonical:technology/xananode-workspace-component-substrate-manifests)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

875. XanaNode Stack Trail
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Stack Trail (xananode.canonical:trail/xananode-stack-trail)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

876. Gottfried Wilhelm Leibniz
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Gottfried Wilhelm Leibniz (xananode.lineage:person/gottfried-wilhelm-leibniz)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

877. Wilhelm Ostwald
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Wilhelm Ostwald (xananode.lineage:person/wilhelm-ostwald)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

878. Jorge Luis Borges
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Jorge Luis Borges (xananode.lineage:person/jorge-luis-borges)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

879. The Garden of Forking Paths
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: The Garden of Forking Paths (xananode.lineage:publication/the-garden-of-forking-paths)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

880. Andries van Dam
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Andries van Dam (xananode.lineage:person/andries-van-dam)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

881. Brown University
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Brown University (xananode.lineage:place/brown-university)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

882. Hypertext Editing System
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hypertext Editing System (xananode.lineage:project/hypertext-editing-system)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

883. FRESS
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: FRESS (xananode.lineage:project/fress)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

884. Intermedia
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Intermedia (xananode.lineage:project/intermedia)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

885. Nicholas Negroponte
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Nicholas Negroponte (xananode.lineage:person/nicholas-negroponte)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

886. Seymour Papert
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Seymour Papert (xananode.lineage:person/seymour-papert)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

887. Marvin Minsky
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Marvin Minsky (xananode.lineage:person/marvin-minsky)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

888. MIT Media Lab
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: MIT Media Lab (xananode.lineage:organization/mit-media-lab)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

889. Hans Peter Brondmo
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hans Peter Brondmo (xananode.lineage:person/hans-peter-brondmo)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

890. Micons
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Micons (xananode.lineage:technology/micons)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

891. Robert Winter
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Robert Winter (xananode.lineage:person/robert-winter)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

892. Interactive Beethoven's Ninth
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Interactive Beethoven's Ninth (xananode.lineage:project/interactive-beethoven-ninth)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

893. Robert Abel
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Robert Abel (xananode.lineage:person/robert-abel)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

894. Interactive Guernica
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Interactive Guernica (xananode.lineage:project/interactive-guernica)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

895. Ivan Sutherland
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Ivan Sutherland (xananode.lineage:person/ivan-sutherland)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

896. Jaron Lanier
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Jaron Lanier (xananode.lineage:person/jaron-lanier)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

897. VPL Research
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: VPL Research (xananode.lineage:organization/vpl-research)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

898. Scott Fisher
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Scott Fisher (xananode.lineage:person/scott-fisher)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

899. NASA
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: NASA (xananode.lineage:organization/nasa)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

900. Dirk Gently's Holistic Detective Agency
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Dirk Gently's Holistic Detective Agency (xananode.lineage:publication/dirk-gentlys-holistic-detective-agency)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

901. BBC Two
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: BBC Two (xananode.lineage:organization/bbc-two)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

902. Richard Saul Wurman
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Richard Saul Wurman (xananode.lineage:person/richard-saul-wurman)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

903. Harry Marks
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Harry Marks (xananode.lineage:person/harry-marks)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

904. John Sculley
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: John Sculley (xananode.lineage:person/john-sculley)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

905. Apple Knowledge Navigator
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Apple Knowledge Navigator (xananode.lineage:technology/apple-knowledge-navigator)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

906. Bill Atkinson
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Bill Atkinson (xananode.lineage:person/bill-atkinson)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

907. Herbie Hancock
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Herbie Hancock (xananode.lineage:person/herbie-hancock)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

908. Nigel Holmes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Nigel Holmes (xananode.lineage:person/nigel-holmes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

909. Laurie Anderson
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Laurie Anderson (xananode.lineage:person/laurie-anderson)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

910. Bran Ferren
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Bran Ferren (xananode.lineage:person/bran-ferren)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

911. Robert Cailliau
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Robert Cailliau (xananode.lineage:person/robert-cailliau)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

912. CERN
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: CERN (xananode.lineage:place/cern)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

913. HTML
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: HTML (xananode.lineage:technology/html)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

914. URL/URI
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: URL/URI (xananode.lineage:technology/url-uri)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

915. HTTP
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: HTTP (xananode.lineage:technology/http)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

916. NCSA
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: NCSA (xananode.lineage:organization/ncsa)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

917. Marc Andreessen
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Marc Andreessen (xananode.lineage:person/marc-andreessen)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

918. Mosaic
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Mosaic (xananode.lineage:technology/mosaic)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

919. The Web as Incomplete Hypertext
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: The Web as Incomplete Hypertext (xananode.lineage:concept/web-as-incomplete-hypertext)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

920. Guide
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Guide (xananode.lineage:technology/guide)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

921. Storyspace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Storyspace (xananode.lineage:project/storyspace)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

922. ZOG/KMS
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: ZOG/KMS (xananode.lineage:project/zog-kms)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

923. Xanadu at Autodesk
   - Existing: Project Xanadu (xananode.example:project/project-xanadu)
   - Incoming: Xanadu at Autodesk (xananode.lineage:project/xanadu-at-autodesk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

924. Xanadu at Autodesk
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Xanadu at Autodesk (xananode.lineage:project/xanadu-at-autodesk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

925. Conflict and Disputed Identity
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Conflict and Disputed Identity (xananode.lineage:concept/conflict-disputed-identity)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

926. Git-backed Substrate
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Git-backed Substrate (xananode.lineage:technology/git-backed-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

927. Babel
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Babel (xananode.lineage:tool/babel)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

928. Hyperland VR
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hyperland VR (xananode.lineage:tool/hyperland-vr)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

929. Authored Substrate Overlap
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Authored Substrate Overlap (xananode.lineage:concept/authored-substrate-overlap)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

930. Overlap is a Federation Signal
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Overlap is a Federation Signal (xananode.lineage:claim/overlap-is-federation-signal)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

931. Merge is Authored Interpretation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Merge is Authored Interpretation (xananode.lineage:claim/merge-is-authored-interpretation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

932. Lineage Packs Can Overlap Canonical Packs
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Lineage Packs Can Overlap Canonical Packs (xananode.lineage:claim/lineage-pack-can-overlap-canonical-pack)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

933. Lost Lineage of Human Knowledge Augmentation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Lost Lineage of Human Knowledge Augmentation (xananode.lineage:concept/lost-lineage-human-knowledge-augmentation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

934. Paul Otlet
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Paul Otlet (xananode.lineage:person/paul-otlet)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

935. H. G. Wells
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: H. G. Wells (xananode.lineage:person/h-g-wells)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

936. Douglas Adams
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Douglas Adams (xananode.lineage:person/douglas-adams)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

937. Hyperland
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hyperland (xananode.lineage:publication/hyperland)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

938. Tom Baker
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Tom Baker (xananode.lineage:person/tom-baker)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

939. Max Whitby
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Max Whitby (xananode.lineage:person/max-whitby)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

940. TED2
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: TED2 (xananode.lineage:event/ted2-1990)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

941. Monterey, California
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Monterey, California (xananode.lineage:place/monterey-california)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

942. Bob Stein
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Bob Stein (xananode.lineage:person/bob-stein)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

943. Voyager Company
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Voyager Company (xananode.lineage:organization/voyager-company)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

944. Alan Kay
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Alan Kay (xananode.lineage:person/alan-kay)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

945. Xerox PARC
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Xerox PARC (xananode.lineage:organization/xerox-parc)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

946. HyperCard
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: HyperCard (xananode.lineage:technology/hypercard)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

947. Tim Berners-Lee
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Tim Berners-Lee (xananode.lineage:person/tim-berners-lee)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

948. World Wide Web
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: World Wide Web (xananode.lineage:technology/world-wide-web)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

949. Aspen Movie Map
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Aspen Movie Map (xananode.lineage:project/aspen-movie-map)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

950. Lost Lineage Intertwingled Trail
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Lost Lineage Intertwingled Trail (xananode.lineage:trail/lost-lineage-intertwingled-trail)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

951. Unresolved Review Fixture
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Unresolved Review Fixture (xananode.review:observation/unresolved-review-fixture)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

## Incoming Relationships

1. example.minimal:rel/source-supports-claim
   - Type: supports
   - Source: example.minimal:source/as-we-may-think
   - Target: example.minimal:claim/substrate-is-structure
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

2. example.minimal:rel/source-discusses-associative-trails
   - Type: discusses
   - Source: example.minimal:source/as-we-may-think
   - Target: example.minimal:concept/associative-trails
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

3. example.minimal:rel/associative-trails-context-for-substrate
   - Type: related_to
   - Source: example.minimal:concept/associative-trails
   - Target: example.minimal:concept/knowledge-substrate
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

4. example.minimal:rel/claim-defines-concept
   - Type: defines
   - Source: example.minimal:claim/substrate-is-structure
   - Target: example.minimal:concept/knowledge-substrate
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

5. example.minimal:rel/concept-has-claim
   - Type: has_claim
   - Source: example.minimal:concept/knowledge-substrate
   - Target: example.minimal:claim/substrate-is-structure
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

6. example.minimal:rel/trail-starts-with-source
   - Type: starts_with
   - Source: example.minimal:trail/start-here
   - Target: example.minimal:source/as-we-may-think
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

7. example.minimal:rel/trail-continues-to-claim
   - Type: continues_to
   - Source: example.minimal:source/as-we-may-think
   - Target: example.minimal:claim/substrate-is-structure
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

8. example.minimal:rel/trail-continues-to-concept
   - Type: continues_to
   - Source: example.minimal:claim/substrate-is-structure
   - Target: example.minimal:concept/knowledge-substrate
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

9. example.minimal:rel/trail-includes-associative-trails
   - Type: features
   - Source: example.minimal:trail/start-here
   - Target: example.minimal:concept/associative-trails
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

10. example.minimal:rel/maintainer-created-intro-essay
   - Type: created
   - Source: example.minimal:person/example-maintainer
   - Target: example.minimal:essay/relationship-navigation-intro
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

11. example.minimal:rel/fragment-derived-from-source
   - Type: derived_from
   - Source: example.minimal:fragment/as-we-may-think-0004
   - Target: example.minimal:source/as-we-may-think
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

12. example.minimal:rel/essay-transcludes-fragment
   - Type: transcludes
   - Source: example.minimal:essay/relationship-navigation-intro
   - Target: example.minimal:fragment/as-we-may-think-0004
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

13. example.minimal:rel/question-raises-gap
   - Type: raises
   - Source: example.minimal:question/why-relationships-matter
   - Target: example.minimal:knowledge_gap/missing-relationship-evidence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

14. example.minimal:rel/gap-requires-source
   - Type: requires_source
   - Source: example.minimal:knowledge_gap/missing-relationship-evidence
   - Target: example.minimal:source/as-we-may-think
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

15. example.minimal:rel/question-asked-in-communication
   - Type: asked_in
   - Source: example.minimal:question/why-relationships-matter
   - Target: example.minimal:communication/minimal-substrate-discussion
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

16. example.minimal:rel/response-answers-question
   - Type: answers
   - Source: example.minimal:response/relationships-preserve-context
   - Target: example.minimal:question/why-relationships-matter
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

17. example.minimal:rel/response-answered-in-communication
   - Type: answered_in
   - Source: example.minimal:response/relationships-preserve-context
   - Target: example.minimal:communication/minimal-substrate-discussion
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

18. example.minimal:rel/response-supports-claim
   - Type: supports
   - Source: example.minimal:response/relationships-preserve-context
   - Target: example.minimal:claim/substrate-is-structure
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

19. example.minimal:rel/substrate-has-primary-media
   - Type: has_primary_media
   - Source: example.minimal:concept/knowledge-substrate
   - Target: example.minimal:media/xananode-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

20. xananode.canonical:rel/apache-2-0-example-of-permissive-license
   - Type: example_of
   - Source: xananode.canonical:source/apache-2-0-license
   - Target: xananode.canonical:concept/permissive-open-source-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

21. xananode.canonical:rel/apache-claim-supported-by-policy
   - Type: supports
   - Source: xananode.canonical:source/xananode-license-policy
   - Target: xananode.canonical:claim/schemas-validators-reference-code-apache-2-0
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

22. xananode.canonical:rel/bootstrap-created-revision
   - Type: created
   - Source: xananode.canonical:event/xananode-canonical-pack-bootstrap
   - Target: xananode.canonical:revision/canonical-pack-v0-1-0
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

23. xananode.canonical:rel/built-by-bots-created-icon
   - Type: created
   - Source: xananode.canonical:organization/built-by-bots
   - Target: xananode.canonical:media/xananode-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

24. xananode.canonical:rel/cc-by-example-of-attribution-license
   - Type: example_of
   - Source: xananode.canonical:source/cc-by-4-0-license
   - Target: xananode.canonical:concept/attribution-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

25. xananode.canonical:rel/cc-by-requires-attribution-to-contributors
   - Type: requires_attribution
   - Source: xananode.canonical:source/cc-by-4-0-license
   - Target: xananode.canonical:community/xananode-contributors
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

26. xananode.canonical:rel/cc0-example-of-open-license
   - Type: example_of
   - Source: xananode.canonical:source/cc0-1-0-public-domain-dedication
   - Target: xananode.canonical:concept/open-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

27. xananode.canonical:rel/christian-authored-xananode
   - Type: authored
   - Source: xananode.canonical:person/christian-siefen
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

28. xananode.canonical:rel/code-schemas-licensed-under-apache
   - Type: licensed_under
   - Source: xananode.canonical:claim/schemas-validators-reference-code-apache-2-0
   - Target: xananode.canonical:source/apache-2-0-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

29. xananode.canonical:rel/compatibility-claim-supported-by-spec
   - Type: supports
   - Source: xananode.canonical:schema/protocol-artifact-specs-implementation-compatibility.md
   - Target: xananode.canonical:claim/implementations-identify-compatibility
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

30. xananode.canonical:rel/compatibility-spec-defines-compatibility-attribution
   - Type: defines
   - Source: xananode.canonical:schema/protocol-artifact-specs-implementation-compatibility.md
   - Target: xananode.canonical:concept/compatibility-attribution
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

31. xananode.canonical:rel/core-builds-protocol-artifacts
   - Type: enables
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:concept/protocol-artifacts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

32. xananode.canonical:rel/core-documented-by-repository
   - Type: documents
   - Source: xananode.canonical:source/xananode-core-sdk-repository
   - Target: xananode.canonical:project/xananode-core-sdk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

33. xananode.canonical:rel/core-implements-protocol
   - Type: implements
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:project/xananode-protocol
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

34. xananode.canonical:rel/core-uses-nodejs
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:technology/nodejs
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

35. xananode.canonical:rel/docs-claim-supported-by-policy
   - Type: supports
   - Source: xananode.canonical:source/xananode-license-policy
   - Target: xananode.canonical:claim/protocol-docs-licensed-cc-by-4-0
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

36. xananode.canonical:rel/github-profile-includes-core-repo
   - Type: includes
   - Source: xananode.canonical:source/github-profile
   - Target: xananode.canonical:source/xananode-core-sdk-repository
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

37. xananode.canonical:rel/github-profile-includes-hugo-repo
   - Type: includes
   - Source: xananode.canonical:source/github-profile
   - Target: xananode.canonical:source/xananode-hugo-repository
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

38. xananode.canonical:rel/github-profile-includes-protocol-repo
   - Type: includes
   - Source: xananode.canonical:source/github-profile
   - Target: xananode.canonical:source/xananode-protocol-repository
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

39. xananode.canonical:rel/gpl-example-of-copyleft-context
   - Type: example_of
   - Source: xananode.canonical:source/gpl-3-0-license
   - Target: xananode.canonical:concept/software-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

40. xananode.canonical:rel/hugo-documented-by-repository
   - Type: documents
   - Source: xananode.canonical:source/xananode-hugo-repository
   - Target: xananode.canonical:project/xananode-hugo-theme
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

41. xananode.canonical:rel/hugo-implements-projection-layer
   - Type: implements
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:concept/substrate-projection-layer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

42. xananode.canonical:rel/hugo-uses-core
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:project/xananode-core-sdk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

43. xananode.canonical:rel/hugo-uses-cytoscape
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:technology/cytoscape-js
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

44. xananode.canonical:rel/hugo-uses-hugo
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:technology/hugo
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

45. xananode.canonical:rel/icon-depicts-xananode
   - Type: depicts
   - Source: xananode.canonical:media/xananode-icon
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

46. xananode.canonical:rel/license-policy-defines-licensing
   - Type: defines
   - Source: xananode.canonical:source/xananode-license-policy
   - Target: xananode.canonical:concept/licensing
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

47. xananode.canonical:rel/licensing-defines-open-license
   - Type: defines
   - Source: xananode.canonical:concept/licensing
   - Target: xananode.canonical:concept/open-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

48. xananode.canonical:rel/mit-example-of-permissive-license
   - Type: example_of
   - Source: xananode.canonical:source/mit-license
   - Target: xananode.canonical:concept/permissive-open-source-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

49. xananode.canonical:rel/notice-documents-licensing
   - Type: documents
   - Source: xananode.canonical:source/xananode-notice
   - Target: xananode.canonical:concept/licensing
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

50. xananode.canonical:rel/open-license-includes-content-license
   - Type: contains
   - Source: xananode.canonical:concept/open-license
   - Target: xananode.canonical:concept/content-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

51. xananode.canonical:rel/open-license-includes-software-license
   - Type: contains
   - Source: xananode.canonical:concept/open-license
   - Target: xananode.canonical:concept/software-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

52. xananode.canonical:rel/project-xananode-core-sdk-implements-concept-substrate-projection-layer
   - Type: implements
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:concept/substrate-projection-layer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

53. xananode.canonical:rel/project-xananode-core-sdk-uses-schema-protocol-artifact-schemas-substrate-manifest.schema.json-artifact-0
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:schema/protocol-artifact-schemas-substrate-manifest.schema.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

54. xananode.canonical:rel/project-xananode-core-sdk-uses-schema-protocol-artifact-schemas-substrate-node.schema.json-artifact-1
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:schema/protocol-artifact-schemas-substrate-node.schema.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

55. xananode.canonical:rel/project-xananode-core-sdk-uses-schema-protocol-artifact-schemas-substrate-relationships.schema.json-artifact-2
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:schema/protocol-artifact-schemas-substrate-relationships.schema.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

56. xananode.canonical:rel/project-xananode-core-sdk-uses-schema-protocol-artifact-schemas-xananode-node-types.v0.3.0.json-artifact-3
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:schema/protocol-artifact-schemas-xananode-node-types.v0.3.0.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

57. xananode.canonical:rel/project-xananode-core-sdk-uses-schema-protocol-artifact-schemas-xananode-relationship-types.v0.5.0.json-artifact-4
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:schema/protocol-artifact-schemas-xananode-relationship-types.v0.5.0.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

58. xananode.canonical:rel/project-xananode-core-sdk-uses-technology-xananode-core-sdk-component-node-files-component-1
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:technology/xananode-core-sdk-component-node-files
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

59. xananode.canonical:rel/project-xananode-core-sdk-uses-technology-xananode-core-sdk-component-protocol-schemas-component-0
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:technology/xananode-core-sdk-component-protocol-schemas
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

60. xananode.canonical:rel/project-xananode-core-sdk-uses-technology-xananode-core-sdk-component-relationship-files-component-2
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:technology/xananode-core-sdk-component-relationship-files
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

61. xananode.canonical:rel/project-xananode-core-sdk-uses-technology-xananode-core-sdk-component-substrate-manifests-component-3
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:technology/xananode-core-sdk-component-substrate-manifests
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

62. xananode.canonical:rel/project-xananode-core-sdk-uses-technology-xananode-core-sdk-component-substrate-packs-component-4
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:technology/xananode-core-sdk-component-substrate-packs
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

63. xananode.canonical:rel/project-xananode-hugo-theme-implements-concept-substrate-projection-layer
   - Type: implements
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:concept/substrate-projection-layer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

64. xananode.canonical:rel/project-xananode-hugo-theme-uses-schema-protocol-artifact-examples-minimal-substrate-artifact-3
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:schema/protocol-artifact-examples-minimal-substrate
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

65. xananode.canonical:rel/project-xananode-hugo-theme-uses-schema-protocol-artifact-schemas-substrate-manifest.schema.json-artifact-0
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:schema/protocol-artifact-schemas-substrate-manifest.schema.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

66. xananode.canonical:rel/project-xananode-hugo-theme-uses-schema-protocol-artifact-schemas-substrate-node.schema.json-artifact-1
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:schema/protocol-artifact-schemas-substrate-node.schema.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

67. xananode.canonical:rel/project-xananode-hugo-theme-uses-schema-protocol-artifact-schemas-substrate-relationships.schema.json-artifact-2
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:schema/protocol-artifact-schemas-substrate-relationships.schema.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

68. xananode.canonical:rel/project-xananode-hugo-theme-uses-technology-xananode-hugo-theme-component-node-files-component-1
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:technology/xananode-hugo-theme-component-node-files
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

69. xananode.canonical:rel/project-xananode-hugo-theme-uses-technology-xananode-hugo-theme-component-relationship-files-component-2
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:technology/xananode-hugo-theme-component-relationship-files
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

70. xananode.canonical:rel/project-xananode-hugo-theme-uses-technology-xananode-hugo-theme-component-schema-registries-component-3
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:technology/xananode-hugo-theme-component-schema-registries
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

71. xananode.canonical:rel/project-xananode-hugo-theme-uses-technology-xananode-hugo-theme-component-substrate-manifests-component-0
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:technology/xananode-hugo-theme-component-substrate-manifests
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

72. xananode.canonical:rel/project-xananode-protocol-implements-concept-substrate-projection-layer
   - Type: implements
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:concept/substrate-projection-layer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

73. xananode.canonical:rel/project-xananode-protocol-uses-schema-protocol-artifact-examples-minimal-substrate-artifact-4
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/protocol-artifact-examples-minimal-substrate
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

74. xananode.canonical:rel/project-xananode-protocol-uses-schema-protocol-artifact-governance-artifact-3
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/protocol-artifact-governance
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

75. xananode.canonical:rel/project-xananode-protocol-uses-schema-protocol-artifact-registry-artifact-1
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/protocol-artifact-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

76. xananode.canonical:rel/project-xananode-protocol-uses-schema-protocol-artifact-schemas-artifact-0
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/protocol-artifact-schemas
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

77. xananode.canonical:rel/project-xananode-protocol-uses-schema-protocol-artifact-specs-artifact-2
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/protocol-artifact-specs
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

78. xananode.canonical:rel/project-xananode-studio-implements-concept-substrate-projection-layer
   - Type: implements
   - Source: xananode.canonical:project/xananode-studio
   - Target: xananode.canonical:concept/substrate-projection-layer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

79. xananode.canonical:rel/project-xananode-studio-uses-schema-protocol-artifact-media-images-xananode-icon.svg-artifact-2
   - Type: uses
   - Source: xananode.canonical:project/xananode-studio
   - Target: xananode.canonical:schema/protocol-artifact-media-images-xananode-icon.svg
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

80. xananode.canonical:rel/project-xananode-studio-uses-schema-protocol-artifact-schemas-xananode-node-types.v0.3.0.json-artifact-0
   - Type: uses
   - Source: xananode.canonical:project/xananode-studio
   - Target: xananode.canonical:schema/protocol-artifact-schemas-xananode-node-types.v0.3.0.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

81. xananode.canonical:rel/project-xananode-studio-uses-schema-protocol-artifact-schemas-xananode-relationship-types.v0.5.0.json-artifact-1
   - Type: uses
   - Source: xananode.canonical:project/xananode-studio
   - Target: xananode.canonical:schema/protocol-artifact-schemas-xananode-relationship-types.v0.5.0.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

82. xananode.canonical:rel/project-xananode-studio-uses-technology-xananode-studio-component-core-sdk-apis-component-1
   - Type: uses
   - Source: xananode.canonical:project/xananode-studio
   - Target: xananode.canonical:technology/xananode-studio-component-core-sdk-apis
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

83. xananode.canonical:rel/project-xananode-studio-uses-technology-xananode-studio-component-protocol-branding-component-3
   - Type: uses
   - Source: xananode.canonical:project/xananode-studio
   - Target: xananode.canonical:technology/xananode-studio-component-protocol-branding
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

84. xananode.canonical:rel/project-xananode-studio-uses-technology-xananode-studio-component-protocol-registries-component-2
   - Type: uses
   - Source: xananode.canonical:project/xananode-studio
   - Target: xananode.canonical:technology/xananode-studio-component-protocol-registries
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

85. xananode.canonical:rel/project-xananode-studio-uses-technology-xananode-studio-component-workspace-apis-component-0
   - Type: uses
   - Source: xananode.canonical:project/xananode-studio
   - Target: xananode.canonical:technology/xananode-studio-component-workspace-apis
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

86. xananode.canonical:rel/project-xananode-workspace-implements-concept-substrate-projection-layer
   - Type: implements
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:concept/substrate-projection-layer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

87. xananode.canonical:rel/project-xananode-workspace-uses-schema-protocol-artifact-schemas-author-profile.schema.json-artifact-0
   - Type: uses
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:schema/protocol-artifact-schemas-author-profile.schema.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

88. xananode.canonical:rel/project-xananode-workspace-uses-schema-protocol-artifact-schemas-substrate-manifest.schema.json-artifact-1
   - Type: uses
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:schema/protocol-artifact-schemas-substrate-manifest.schema.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

89. xananode.canonical:rel/project-xananode-workspace-uses-schema-protocol-artifact-schemas-substrate-node.schema.json-artifact-2
   - Type: uses
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:schema/protocol-artifact-schemas-substrate-node.schema.json
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

90. xananode.canonical:rel/project-xananode-workspace-uses-technology-xananode-workspace-component-author-profiles-component-4
   - Type: uses
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:technology/xananode-workspace-component-author-profiles
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

91. xananode.canonical:rel/project-xananode-workspace-uses-technology-xananode-workspace-component-core-sdk-apis-component-0
   - Type: uses
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:technology/xananode-workspace-component-core-sdk-apis
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

92. xananode.canonical:rel/project-xananode-workspace-uses-technology-xananode-workspace-component-node-files-component-2
   - Type: uses
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:technology/xananode-workspace-component-node-files
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

93. xananode.canonical:rel/project-xananode-workspace-uses-technology-xananode-workspace-component-relationship-files-component-3
   - Type: uses
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:technology/xananode-workspace-component-relationship-files
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

94. xananode.canonical:rel/project-xananode-workspace-uses-technology-xananode-workspace-component-substrate-manifests-component-1
   - Type: uses
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:technology/xananode-workspace-component-substrate-manifests
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

95. xananode.canonical:rel/protocol-artifacts-enable-projection-layers
   - Type: enables
   - Source: xananode.canonical:concept/protocol-artifacts
   - Target: xananode.canonical:concept/substrate-projection-layer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

96. xananode.canonical:rel/protocol-contains-author-profile-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/author-profile-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

97. xananode.canonical:rel/protocol-contains-compatibility-report-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/compatibility-report-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

98. xananode.canonical:rel/protocol-contains-manifest-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/substrate-manifest-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

99. xananode.canonical:rel/protocol-contains-merge-report-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/merge-report-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

100. xananode.canonical:rel/protocol-contains-namespace-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/namespace-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

101. xananode.canonical:rel/protocol-contains-nanopublication-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/nanopublication-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

102. xananode.canonical:rel/protocol-contains-node-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/substrate-node-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

103. xananode.canonical:rel/protocol-contains-node-type-registry
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/node-type-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

104. xananode.canonical:rel/protocol-contains-property-registry-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/property-registry-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

105. xananode.canonical:rel/protocol-contains-relationship-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/substrate-relationships-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

106. xananode.canonical:rel/protocol-contains-relationship-type-registry
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/relationship-type-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

107. xananode.canonical:rel/protocol-contains-ro-crate-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/ro-crate-metadata-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

108. xananode.canonical:rel/protocol-contains-substrate-diff-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/substrate-diff-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

109. xananode.canonical:rel/protocol-docs-licensed-under-cc-by
   - Type: licensed_under
   - Source: xananode.canonical:claim/protocol-docs-licensed-cc-by-4-0
   - Target: xananode.canonical:source/cc-by-4-0-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

110. xananode.canonical:rel/protocol-documented-by-repository
   - Type: documents
   - Source: xananode.canonical:source/xananode-protocol-repository
   - Target: xananode.canonical:project/xananode-protocol
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

111. xananode.canonical:rel/protocol-governed-by-license-policy
   - Type: governed_by
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:source/xananode-license-policy
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

112. xananode.canonical:rel/protocol-governed-by-trademark-policy
   - Type: governed_by
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:source/xananode-trademark-policy
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

113. xananode.canonical:rel/protocol-uses-python
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:technology/python
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

114. xananode.canonical:rel/protocol-uses-site-webmanifest
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/protocol-artifact-media-web-manifests-site.webmanifest
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

115. xananode.canonical:rel/protocol-uses-xananode-android-chrome-192
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:media/xananode-android-chrome-192
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

116. xananode.canonical:rel/protocol-uses-xananode-android-chrome-512
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:media/xananode-android-chrome-512
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

117. xananode.canonical:rel/protocol-uses-xananode-apple-touch-icon
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:media/xananode-apple-touch-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

118. xananode.canonical:rel/protocol-uses-xananode-favicon-16
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:media/xananode-favicon-16
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

119. xananode.canonical:rel/protocol-uses-xananode-favicon-32
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:media/xananode-favicon-32
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

120. xananode.canonical:rel/protocol-uses-xananode-favicon-ico
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:media/xananode-favicon-ico
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

121. xananode.canonical:rel/recreation-friction-motivates-pack-ingress
   - Type: motivated_by
   - Source: xananode.canonical:observation/markdown-recreation-friction
   - Target: xananode.canonical:concept/protocol-artifacts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

122. xananode.canonical:rel/registry-contains-node-type-claim
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

123. xananode.canonical:rel/registry-contains-node-type-communication
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

124. xananode.canonical:rel/registry-contains-node-type-community
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-community
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

125. xananode.canonical:rel/registry-contains-node-type-concept
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

126. xananode.canonical:rel/registry-contains-node-type-essay
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-essay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

127. xananode.canonical:rel/registry-contains-node-type-event
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

128. xananode.canonical:rel/registry-contains-node-type-fragment
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-fragment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

129. xananode.canonical:rel/registry-contains-node-type-hypothesis
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-hypothesis
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

130. xananode.canonical:rel/registry-contains-node-type-knowledge_gap
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-knowledge_gap
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

131. xananode.canonical:rel/registry-contains-node-type-media
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

132. xananode.canonical:rel/registry-contains-node-type-observation
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-observation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

133. xananode.canonical:rel/registry-contains-node-type-organization
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

134. xananode.canonical:rel/registry-contains-node-type-person
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

135. xananode.canonical:rel/registry-contains-node-type-place
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-place
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

136. xananode.canonical:rel/registry-contains-node-type-problem
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-problem
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

137. xananode.canonical:rel/registry-contains-node-type-project
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

138. xananode.canonical:rel/registry-contains-node-type-publication
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-publication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

139. xananode.canonical:rel/registry-contains-node-type-question
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

140. xananode.canonical:rel/registry-contains-node-type-relationship
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-relationship
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

141. xananode.canonical:rel/registry-contains-node-type-response
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-response
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

142. xananode.canonical:rel/registry-contains-node-type-revision
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-revision
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

143. xananode.canonical:rel/registry-contains-node-type-schema
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

144. xananode.canonical:rel/registry-contains-node-type-source
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

145. xananode.canonical:rel/registry-contains-node-type-technology
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-technology
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

146. xananode.canonical:rel/registry-contains-node-type-trail
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-trail
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

147. xananode.canonical:rel/registry-contains-relationship-type-abstraction_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-abstraction_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

148. xananode.canonical:rel/registry-contains-relationship-type-alias_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-alias_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

149. xananode.canonical:rel/registry-contains-relationship-type-alternative_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-alternative_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

150. xananode.canonical:rel/registry-contains-relationship-type-analogous_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-analogous_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

151. xananode.canonical:rel/registry-contains-relationship-type-announced
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-announced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

152. xananode.canonical:rel/registry-contains-relationship-type-announced_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-announced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

153. xananode.canonical:rel/registry-contains-relationship-type-answered_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-answered_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

154. xananode.canonical:rel/registry-contains-relationship-type-answered_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-answered_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

155. xananode.canonical:rel/registry-contains-relationship-type-answers
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-answers
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

156. xananode.canonical:rel/registry-contains-relationship-type-anticipated
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-anticipated
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

157. xananode.canonical:rel/registry-contains-relationship-type-anticipated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-anticipated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

158. xananode.canonical:rel/registry-contains-relationship-type-anticipates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-anticipates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

159. xananode.canonical:rel/registry-contains-relationship-type-appears_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-appears_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

160. xananode.canonical:rel/registry-contains-relationship-type-approved
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-approved
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

161. xananode.canonical:rel/registry-contains-relationship-type-approved_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-approved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

162. xananode.canonical:rel/registry-contains-relationship-type-arrived_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-arrived_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

163. xananode.canonical:rel/registry-contains-relationship-type-arrives_at
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-arrives_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

164. xananode.canonical:rel/registry-contains-relationship-type-asked
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-asked
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

165. xananode.canonical:rel/registry-contains-relationship-type-asked_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-asked_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

166. xananode.canonical:rel/registry-contains-relationship-type-asked_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-asked_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

167. xananode.canonical:rel/registry-contains-relationship-type-attribution_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-attribution_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

168. xananode.canonical:rel/registry-contains-relationship-type-authored
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-authored
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

169. xananode.canonical:rel/registry-contains-relationship-type-authored_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-authored_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

170. xananode.canonical:rel/registry-contains-relationship-type-broadcast_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-broadcast_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

171. xananode.canonical:rel/registry-contains-relationship-type-broader_than
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-broader_than
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

172. xananode.canonical:rel/registry-contains-relationship-type-cited_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-cited_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

173. xananode.canonical:rel/registry-contains-relationship-type-cites
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-cites
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

174. xananode.canonical:rel/registry-contains-relationship-type-claim_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-claim_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

175. xananode.canonical:rel/registry-contains-relationship-type-clarified_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-clarified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

176. xananode.canonical:rel/registry-contains-relationship-type-clarifies
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-clarifies
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

177. xananode.canonical:rel/registry-contains-relationship-type-coined
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-coined
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

178. xananode.canonical:rel/registry-contains-relationship-type-coined_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-coined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

179. xananode.canonical:rel/registry-contains-relationship-type-collaborated_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-collaborated_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

180. xananode.canonical:rel/registry-contains-relationship-type-communicated_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-communicated_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

181. xananode.canonical:rel/registry-contains-relationship-type-communication_received_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-communication_received_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

182. xananode.canonical:rel/registry-contains-relationship-type-compatible_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-compatible_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

183. xananode.canonical:rel/registry-contains-relationship-type-concrete_example_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-concrete_example_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

184. xananode.canonical:rel/registry-contains-relationship-type-contains
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-contains
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

185. xananode.canonical:rel/registry-contains-relationship-type-contemporary_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-contemporary_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

186. xananode.canonical:rel/registry-contains-relationship-type-context_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-context_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

187. xananode.canonical:rel/registry-contains-relationship-type-context_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-context_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

188. xananode.canonical:rel/registry-contains-relationship-type-continued_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-continued_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

189. xananode.canonical:rel/registry-contains-relationship-type-continues_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-continues_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

190. xananode.canonical:rel/registry-contains-relationship-type-contradicted_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-contradicted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

191. xananode.canonical:rel/registry-contains-relationship-type-contradicts
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-contradicts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

192. xananode.canonical:rel/registry-contains-relationship-type-contrasts_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-contrasts_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

193. xananode.canonical:rel/registry-contains-relationship-type-created
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-created
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

194. xananode.canonical:rel/registry-contains-relationship-type-created_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-created_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

195. xananode.canonical:rel/registry-contains-relationship-type-critical_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-critical_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

196. xananode.canonical:rel/registry-contains-relationship-type-critically_depends_on
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-critically_depends_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

197. xananode.canonical:rel/registry-contains-relationship-type-debated_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-debated_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

198. xananode.canonical:rel/registry-contains-relationship-type-deep_linked_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-deep_linked_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

199. xananode.canonical:rel/registry-contains-relationship-type-deep_links_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-deep_links_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

200. xananode.canonical:rel/registry-contains-relationship-type-defined_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-defined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

201. xananode.canonical:rel/registry-contains-relationship-type-defines
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-defines
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

202. xananode.canonical:rel/registry-contains-relationship-type-demonstrated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-demonstrated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

203. xananode.canonical:rel/registry-contains-relationship-type-demonstrates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-demonstrates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

204. xananode.canonical:rel/registry-contains-relationship-type-dependency_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-dependency_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

205. xananode.canonical:rel/registry-contains-relationship-type-depends_on
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-depends_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

206. xananode.canonical:rel/registry-contains-relationship-type-depicted_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-depicted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

207. xananode.canonical:rel/registry-contains-relationship-type-depicts
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-depicts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

208. xananode.canonical:rel/registry-contains-relationship-type-derived_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-derived_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

209. xananode.canonical:rel/registry-contains-relationship-type-derived_into
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-derived_into
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

210. xananode.canonical:rel/registry-contains-relationship-type-discussed_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-discussed_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

211. xananode.canonical:rel/registry-contains-relationship-type-discussed_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-discussed_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

212. xananode.canonical:rel/registry-contains-relationship-type-discusses
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-discusses
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

213. xananode.canonical:rel/registry-contains-relationship-type-discussion_partner_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-discussion_partner_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

214. xananode.canonical:rel/registry-contains-relationship-type-disputed_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-disputed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

215. xananode.canonical:rel/registry-contains-relationship-type-disputed_identity
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-disputed_identity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

216. xananode.canonical:rel/registry-contains-relationship-type-disputes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-disputes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

217. xananode.canonical:rel/registry-contains-relationship-type-documented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-documented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

218. xananode.canonical:rel/registry-contains-relationship-type-documents
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-documents
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

219. xananode.canonical:rel/registry-contains-relationship-type-enabled_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-enabled_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

220. xananode.canonical:rel/registry-contains-relationship-type-enables
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-enables
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

221. xananode.canonical:rel/registry-contains-relationship-type-equivalent_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-equivalent_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

222. xananode.canonical:rel/registry-contains-relationship-type-evidence_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-evidence_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

223. xananode.canonical:rel/registry-contains-relationship-type-evidence_insufficient_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-evidence_insufficient_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

224. xananode.canonical:rel/registry-contains-relationship-type-example_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-example_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

225. xananode.canonical:rel/registry-contains-relationship-type-explained_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-explained_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

226. xananode.canonical:rel/registry-contains-relationship-type-explains
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-explains
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

227. xananode.canonical:rel/registry-contains-relationship-type-extended_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-extended_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

228. xananode.canonical:rel/registry-contains-relationship-type-extends
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-extends
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

229. xananode.canonical:rel/registry-contains-relationship-type-extension_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-extension_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

230. xananode.canonical:rel/registry-contains-relationship-type-fails_to_answer
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-fails_to_answer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

231. xananode.canonical:rel/registry-contains-relationship-type-falsified_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-falsified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

232. xananode.canonical:rel/registry-contains-relationship-type-falsifies
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-falsifies
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

233. xananode.canonical:rel/registry-contains-relationship-type-featured_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-featured_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

234. xananode.canonical:rel/registry-contains-relationship-type-featured_speaker
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-featured_speaker
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

235. xananode.canonical:rel/registry-contains-relationship-type-features
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-features
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

236. xananode.canonical:rel/registry-contains-relationship-type-followed
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-followed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

237. xananode.canonical:rel/registry-contains-relationship-type-frequently_misunderstood
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-frequently_misunderstood
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

238. xananode.canonical:rel/registry-contains-relationship-type-friend_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-friend_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

239. xananode.canonical:rel/registry-contains-relationship-type-generalized_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-generalized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

240. xananode.canonical:rel/registry-contains-relationship-type-generalizes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-generalizes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

241. xananode.canonical:rel/registry-contains-relationship-type-generated
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-generated
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

242. xananode.canonical:rel/registry-contains-relationship-type-generated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-generated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

243. xananode.canonical:rel/registry-contains-relationship-type-governed_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-governed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

244. xananode.canonical:rel/registry-contains-relationship-type-governs
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-governs
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

245. xananode.canonical:rel/registry-contains-relationship-type-had_answer
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-had_answer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

246. xananode.canonical:rel/registry-contains-relationship-type-had_participant
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-had_participant
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

247. xananode.canonical:rel/registry-contains-relationship-type-had_question
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-had_question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

248. xananode.canonical:rel/registry-contains-relationship-type-has_alias
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_alias
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

249. xananode.canonical:rel/registry-contains-relationship-type-has_appearance
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_appearance
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

250. xananode.canonical:rel/registry-contains-relationship-type-has_claim
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

251. xananode.canonical:rel/registry-contains-relationship-type-has_context
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

252. xananode.canonical:rel/registry-contains-relationship-type-has_evidence
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_evidence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

253. xananode.canonical:rel/registry-contains-relationship-type-has_example
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_example
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

254. xananode.canonical:rel/registry-contains-relationship-type-has_extension
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_extension
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

255. xananode.canonical:rel/registry-contains-relationship-type-has_high_risk
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_high_risk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

256. xananode.canonical:rel/registry-contains-relationship-type-has_important_context
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_important_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

257. xananode.canonical:rel/registry-contains-relationship-type-has_primary_media
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_primary_media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

258. xananode.canonical:rel/registry-contains-relationship-type-high_risk_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-high_risk_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

259. xananode.canonical:rel/registry-contains-relationship-type-identified
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-identified
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

260. xananode.canonical:rel/registry-contains-relationship-type-identified_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-identified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

261. xananode.canonical:rel/registry-contains-relationship-type-implemented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-implemented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

262. xananode.canonical:rel/registry-contains-relationship-type-implements
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-implements
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

263. xananode.canonical:rel/registry-contains-relationship-type-important_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-important_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

264. xananode.canonical:rel/registry-contains-relationship-type-included_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-included_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

265. xananode.canonical:rel/registry-contains-relationship-type-includes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-includes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

266. xananode.canonical:rel/registry-contains-relationship-type-influenced
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-influenced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

267. xananode.canonical:rel/registry-contains-relationship-type-influenced_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-influenced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

268. xananode.canonical:rel/registry-contains-relationship-type-information_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-information_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

269. xananode.canonical:rel/registry-contains-relationship-type-inquiry_motivated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-inquiry_motivated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

270. xananode.canonical:rel/registry-contains-relationship-type-insufficient_evidence
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-insufficient_evidence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

271. xananode.canonical:rel/registry-contains-relationship-type-interviewed
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-interviewed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

272. xananode.canonical:rel/registry-contains-relationship-type-interviewed_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-interviewed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

273. xananode.canonical:rel/registry-contains-relationship-type-introduced
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-introduced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

274. xananode.canonical:rel/registry-contains-relationship-type-introduced_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-introduced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

275. xananode.canonical:rel/registry-contains-relationship-type-introduced_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-introduced_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

276. xananode.canonical:rel/registry-contains-relationship-type-introduction_venue_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-introduction_venue_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

277. xananode.canonical:rel/registry-contains-relationship-type-investigated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-investigated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

278. xananode.canonical:rel/registry-contains-relationship-type-investigates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-investigates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

279. xananode.canonical:rel/registry-contains-relationship-type-is_start_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-is_start_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

280. xananode.canonical:rel/registry-contains-relationship-type-license_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-license_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

281. xananode.canonical:rel/registry-contains-relationship-type-licensed_under
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-licensed_under
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

282. xananode.canonical:rel/registry-contains-relationship-type-mapped_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-mapped_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

283. xananode.canonical:rel/registry-contains-relationship-type-maps_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-maps_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

284. xananode.canonical:rel/registry-contains-relationship-type-memorialized_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-memorialized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

285. xananode.canonical:rel/registry-contains-relationship-type-memorializes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-memorializes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

286. xananode.canonical:rel/registry-contains-relationship-type-mentioned_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-mentioned_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

287. xananode.canonical:rel/registry-contains-relationship-type-mentions
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-mentions
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

288. xananode.canonical:rel/registry-contains-relationship-type-misunderstanding_context_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-misunderstanding_context_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

289. xananode.canonical:rel/registry-contains-relationship-type-motivated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-motivated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

290. xananode.canonical:rel/registry-contains-relationship-type-motivates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-motivates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

291. xananode.canonical:rel/registry-contains-relationship-type-motivates_inquiry
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-motivates_inquiry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

292. xananode.canonical:rel/registry-contains-relationship-type-narrower_than
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-narrower_than
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

293. xananode.canonical:rel/registry-contains-relationship-type-negotiated_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-negotiated_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

294. xananode.canonical:rel/registry-contains-relationship-type-not_answered_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-not_answered_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

295. xananode.canonical:rel/registry-contains-relationship-type-occurred_at
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-occurred_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

296. xananode.canonical:rel/registry-contains-relationship-type-overlooked_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-overlooked_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

297. xananode.canonical:rel/registry-contains-relationship-type-overlooks
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-overlooks
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

298. xananode.canonical:rel/registry-contains-relationship-type-parallel_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-parallel_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

299. xananode.canonical:rel/registry-contains-relationship-type-part_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-part_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

300. xananode.canonical:rel/registry-contains-relationship-type-partially_answered_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-partially_answered_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

301. xananode.canonical:rel/registry-contains-relationship-type-partially_answers
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-partially_answers
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

302. xananode.canonical:rel/registry-contains-relationship-type-participated_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-participated_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

303. xananode.canonical:rel/registry-contains-relationship-type-popularized
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-popularized
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

304. xananode.canonical:rel/registry-contains-relationship-type-popularized_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-popularized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

305. xananode.canonical:rel/registry-contains-relationship-type-possible_match
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-possible_match
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

306. xananode.canonical:rel/registry-contains-relationship-type-possibly_related_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-possibly_related_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

307. xananode.canonical:rel/registry-contains-relationship-type-preceded
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-preceded
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

308. xananode.canonical:rel/registry-contains-relationship-type-presentation_received_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-presentation_received_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

309. xananode.canonical:rel/registry-contains-relationship-type-presented
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-presented
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

310. xananode.canonical:rel/registry-contains-relationship-type-presented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-presented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

311. xananode.canonical:rel/registry-contains-relationship-type-presented_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-presented_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

312. xananode.canonical:rel/registry-contains-relationship-type-preserved_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-preserved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

313. xananode.canonical:rel/registry-contains-relationship-type-preserves
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-preserves
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

314. xananode.canonical:rel/registry-contains-relationship-type-produces
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-produces
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

315. xananode.canonical:rel/registry-contains-relationship-type-proposed
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-proposed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

316. xananode.canonical:rel/registry-contains-relationship-type-proposed_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-proposed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

317. xananode.canonical:rel/registry-contains-relationship-type-quoted_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-quoted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

318. xananode.canonical:rel/registry-contains-relationship-type-quotes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-quotes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

319. xananode.canonical:rel/registry-contains-relationship-type-raised_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-raised_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

320. xananode.canonical:rel/registry-contains-relationship-type-raises
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-raises
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

321. xananode.canonical:rel/registry-contains-relationship-type-received_broadcast_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-received_broadcast_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

322. xananode.canonical:rel/registry-contains-relationship-type-received_report_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-received_report_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

323. xananode.canonical:rel/registry-contains-relationship-type-refined_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-refined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

324. xananode.canonical:rel/registry-contains-relationship-type-refines
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-refines
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

325. xananode.canonical:rel/registry-contains-relationship-type-related_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-related_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

326. xananode.canonical:rel/registry-contains-relationship-type-replied_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-replied_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

327. xananode.canonical:rel/registry-contains-relationship-type-replied_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-replied_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

328. xananode.canonical:rel/registry-contains-relationship-type-reported_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-reported_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

329. xananode.canonical:rel/registry-contains-relationship-type-represented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-represented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

330. xananode.canonical:rel/registry-contains-relationship-type-represents
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-represents
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

331. xananode.canonical:rel/registry-contains-relationship-type-required_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-required_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

332. xananode.canonical:rel/registry-contains-relationship-type-requires
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-requires
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

333. xananode.canonical:rel/registry-contains-relationship-type-requires_attribution
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-requires_attribution
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

334. xananode.canonical:rel/registry-contains-relationship-type-requires_context
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-requires_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

335. xananode.canonical:rel/registry-contains-relationship-type-requires_information
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-requires_information
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

336. xananode.canonical:rel/registry-contains-relationship-type-requires_review
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-requires_review
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

337. xananode.canonical:rel/registry-contains-relationship-type-requires_source
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-requires_source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

338. xananode.canonical:rel/registry-contains-relationship-type-requires_validation
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-requires_validation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

339. xananode.canonical:rel/registry-contains-relationship-type-resonates_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-resonates_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

340. xananode.canonical:rel/registry-contains-relationship-type-results_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-results_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

341. xananode.canonical:rel/registry-contains-relationship-type-review_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-review_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

342. xananode.canonical:rel/registry-contains-relationship-type-reviewed_under
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-reviewed_under
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

343. xananode.canonical:rel/registry-contains-relationship-type-same_concept
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-same_concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

344. xananode.canonical:rel/registry-contains-relationship-type-same_entity
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-same_entity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

345. xananode.canonical:rel/registry-contains-relationship-type-same_person
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-same_person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

346. xananode.canonical:rel/registry-contains-relationship-type-same_source
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-same_source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

347. xananode.canonical:rel/registry-contains-relationship-type-shaped_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-shaped_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

348. xananode.canonical:rel/registry-contains-relationship-type-shapes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-shapes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

349. xananode.canonical:rel/registry-contains-relationship-type-shares_pattern_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-shares_pattern_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

350. xananode.canonical:rel/registry-contains-relationship-type-site_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-site_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

351. xananode.canonical:rel/registry-contains-relationship-type-source_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-source_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

352. xananode.canonical:rel/registry-contains-relationship-type-specialized_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-specialized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

353. xananode.canonical:rel/registry-contains-relationship-type-specializes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-specializes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

354. xananode.canonical:rel/registry-contains-relationship-type-speculated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-speculated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

355. xananode.canonical:rel/registry-contains-relationship-type-speculative
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-speculative
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

356. xananode.canonical:rel/registry-contains-relationship-type-spoke_at
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-spoke_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

357. xananode.canonical:rel/registry-contains-relationship-type-starts_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-starts_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

358. xananode.canonical:rel/registry-contains-relationship-type-superseded_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-superseded_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

359. xananode.canonical:rel/registry-contains-relationship-type-supersedes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-supersedes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

360. xananode.canonical:rel/registry-contains-relationship-type-supported_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-supported_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

361. xananode.canonical:rel/registry-contains-relationship-type-supports
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-supports
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

362. xananode.canonical:rel/registry-contains-relationship-type-tested_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-tested_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

363. xananode.canonical:rel/registry-contains-relationship-type-tests
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-tests
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

364. xananode.canonical:rel/registry-contains-relationship-type-threatened_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-threatened_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

365. xananode.canonical:rel/registry-contains-relationship-type-threatens
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-threatens
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

366. xananode.canonical:rel/registry-contains-relationship-type-trademark_holder_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-trademark_holder_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

367. xananode.canonical:rel/registry-contains-relationship-type-trademarked_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-trademarked_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

368. xananode.canonical:rel/registry-contains-relationship-type-trained_on
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-trained_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

369. xananode.canonical:rel/registry-contains-relationship-type-transcluded_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-transcluded_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

370. xananode.canonical:rel/registry-contains-relationship-type-transcludes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-transcludes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

371. xananode.canonical:rel/registry-contains-relationship-type-under_review
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-under_review
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

372. xananode.canonical:rel/registry-contains-relationship-type-unresolved
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-unresolved
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

373. xananode.canonical:rel/registry-contains-relationship-type-unresolved_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-unresolved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

374. xananode.canonical:rel/registry-contains-relationship-type-used_as_primary_media_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-used_as_primary_media_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

375. xananode.canonical:rel/registry-contains-relationship-type-used_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-used_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

376. xananode.canonical:rel/registry-contains-relationship-type-used_to_train
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-used_to_train
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

377. xananode.canonical:rel/registry-contains-relationship-type-uses
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-uses
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

378. xananode.canonical:rel/registry-contains-relationship-type-validated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-validated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

379. xananode.canonical:rel/registry-contains-relationship-type-validates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-validates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

380. xananode.canonical:rel/registry-contains-relationship-type-validation_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-validation_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

381. xananode.canonical:rel/schema-canonical-schema-xananode-node-types-documents-schema-node-type-registry
   - Type: documents
   - Source: xananode.canonical:schema/canonical-schema-xananode-node-types
   - Target: xananode.canonical:schema/node-type-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

382. xananode.canonical:rel/schema-canonical-schema-xananode-property-registry-documents-schema-property-registry
   - Type: documents
   - Source: xananode.canonical:schema/canonical-schema-xananode-property-registry
   - Target: xananode.canonical:schema/property-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

383. xananode.canonical:rel/schema-canonical-schema-xananode-relationship-types-documents-schema-relationship-type-registry
   - Type: documents
   - Source: xananode.canonical:schema/canonical-schema-xananode-relationship-types
   - Target: xananode.canonical:schema/relationship-type-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

384. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-author-profile
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-author-profile
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

385. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-compatibility-report
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-compatibility-report
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

386. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-merge-report
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-merge-report
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

387. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-nanopublication
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-nanopublication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

388. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-ro-crate-metadata
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-ro-crate-metadata
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

389. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-substrate-diff
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-substrate-diff
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

390. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-substrate-manifest
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-substrate-manifest
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

391. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-substrate-node
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-substrate-node
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

392. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-substrate-relationships
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-substrate-relationships
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

393. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-xananode-node-types
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-xananode-node-types
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

394. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-xananode-property-registry
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-xananode-property-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

395. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-xananode-relationship-types
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-xananode-relationship-types
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

396. xananode.canonical:rel/schema-known-implementations-registry-contains-project-xananode-core-sdk
   - Type: contains
   - Source: xananode.canonical:schema/known-implementations-registry
   - Target: xananode.canonical:project/xananode-core-sdk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

397. xananode.canonical:rel/schema-known-implementations-registry-contains-project-xananode-hugo-theme
   - Type: contains
   - Source: xananode.canonical:schema/known-implementations-registry
   - Target: xananode.canonical:project/xananode-hugo-theme
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

398. xananode.canonical:rel/schema-known-implementations-registry-contains-project-xananode-protocol
   - Type: contains
   - Source: xananode.canonical:schema/known-implementations-registry
   - Target: xananode.canonical:project/xananode-protocol
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

399. xananode.canonical:rel/schema-known-implementations-registry-contains-project-xananode-studio
   - Type: contains
   - Source: xananode.canonical:schema/known-implementations-registry
   - Target: xananode.canonical:project/xananode-studio
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

400. xananode.canonical:rel/schema-known-implementations-registry-contains-project-xananode-workspace
   - Type: contains
   - Source: xananode.canonical:schema/known-implementations-registry
   - Target: xananode.canonical:project/xananode-workspace
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

401. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-example.merge
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-example.merge
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

402. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-example.minimal
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-example.minimal
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

403. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-example.museum
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-example.museum
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

404. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-example.researcher_a
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-example.researcher_a
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

405. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-example.researcher_b
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-example.researcher_b
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

406. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-xananode
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

407. xananode.canonical:rel/schema-namespace-xananode-represents-concept-xananode
   - Type: represents
   - Source: xananode.canonical:schema/namespace-xananode
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

408. xananode.canonical:rel/schema-node-subtype-claim-causal-extension_of-schema-node-type-claim
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-claim-causal
   - Target: xananode.canonical:schema/node-type-claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

409. xananode.canonical:rel/schema-node-subtype-claim-comparative-extension_of-schema-node-type-claim
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-claim-comparative
   - Target: xananode.canonical:schema/node-type-claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

410. xananode.canonical:rel/schema-node-subtype-claim-definition-extension_of-schema-node-type-claim
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-claim-definition
   - Target: xananode.canonical:schema/node-type-claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

411. xananode.canonical:rel/schema-node-subtype-claim-historical-extension_of-schema-node-type-claim
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-claim-historical
   - Target: xananode.canonical:schema/node-type-claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

412. xananode.canonical:rel/schema-node-subtype-claim-interpretive-extension_of-schema-node-type-claim
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-claim-interpretive
   - Target: xananode.canonical:schema/node-type-claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

413. xananode.canonical:rel/schema-node-subtype-claim-normative-extension_of-schema-node-type-claim
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-claim-normative
   - Target: xananode.canonical:schema/node-type-claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

414. xananode.canonical:rel/schema-node-subtype-claim-predictive-extension_of-schema-node-type-claim
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-claim-predictive
   - Target: xananode.canonical:schema/node-type-claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

415. xananode.canonical:rel/schema-node-subtype-communication-announcement-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-announcement
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

416. xananode.canonical:rel/schema-node-subtype-communication-broadcast-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-broadcast
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

417. xananode.canonical:rel/schema-node-subtype-communication-chat-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-chat
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

418. xananode.canonical:rel/schema-node-subtype-communication-conversation-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-conversation
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

419. xananode.canonical:rel/schema-node-subtype-communication-debate-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-debate
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

420. xananode.canonical:rel/schema-node-subtype-communication-discussion-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-discussion
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

421. xananode.canonical:rel/schema-node-subtype-communication-forum-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-forum
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

422. xananode.canonical:rel/schema-node-subtype-communication-interview-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-interview
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

423. xananode.canonical:rel/schema-node-subtype-communication-meeting-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-meeting
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

424. xananode.canonical:rel/schema-node-subtype-communication-message-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-message
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

425. xananode.canonical:rel/schema-node-subtype-communication-presentation-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-presentation
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

426. xananode.canonical:rel/schema-node-subtype-communication-publication-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-publication
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

427. xananode.canonical:rel/schema-node-subtype-communication-thread-extension_of-schema-node-type-communication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-communication-thread
   - Target: xananode.canonical:schema/node-type-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

428. xananode.canonical:rel/schema-node-subtype-community-fan-extension_of-schema-node-type-community
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-community-fan
   - Target: xananode.canonical:schema/node-type-community
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

429. xananode.canonical:rel/schema-node-subtype-community-forum-extension_of-schema-node-type-community
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-community-forum
   - Target: xananode.canonical:schema/node-type-community
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

430. xananode.canonical:rel/schema-node-subtype-community-local-extension_of-schema-node-type-community
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-community-local
   - Target: xananode.canonical:schema/node-type-community
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

431. xananode.canonical:rel/schema-node-subtype-community-online-extension_of-schema-node-type-community
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-community-online
   - Target: xananode.canonical:schema/node-type-community
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

432. xananode.canonical:rel/schema-node-subtype-community-open_source-extension_of-schema-node-type-community
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-community-open_source
   - Target: xananode.canonical:schema/node-type-community
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

433. xananode.canonical:rel/schema-node-subtype-community-professional-extension_of-schema-node-type-community
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-community-professional
   - Target: xananode.canonical:schema/node-type-community
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

434. xananode.canonical:rel/schema-node-subtype-community-research-extension_of-schema-node-type-community
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-community-research
   - Target: xananode.canonical:schema/node-type-community
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

435. xananode.canonical:rel/schema-node-subtype-concept-distinction-extension_of-schema-node-type-concept
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-concept-distinction
   - Target: xananode.canonical:schema/node-type-concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

436. xananode.canonical:rel/schema-node-subtype-concept-failure_mode-extension_of-schema-node-type-concept
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-concept-failure_mode
   - Target: xananode.canonical:schema/node-type-concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

437. xananode.canonical:rel/schema-node-subtype-concept-frame-extension_of-schema-node-type-concept
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-concept-frame
   - Target: xananode.canonical:schema/node-type-concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

438. xananode.canonical:rel/schema-node-subtype-concept-method-extension_of-schema-node-type-concept
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-concept-method
   - Target: xananode.canonical:schema/node-type-concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

439. xananode.canonical:rel/schema-node-subtype-concept-pattern-extension_of-schema-node-type-concept
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-concept-pattern
   - Target: xananode.canonical:schema/node-type-concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

440. xananode.canonical:rel/schema-node-subtype-concept-principle-extension_of-schema-node-type-concept
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-concept-principle
   - Target: xananode.canonical:schema/node-type-concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

441. xananode.canonical:rel/schema-node-subtype-concept-theory-extension_of-schema-node-type-concept
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-concept-theory
   - Target: xananode.canonical:schema/node-type-concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

442. xananode.canonical:rel/schema-node-subtype-essay-analysis-extension_of-schema-node-type-essay
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-essay-analysis
   - Target: xananode.canonical:schema/node-type-essay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

443. xananode.canonical:rel/schema-node-subtype-essay-argument-extension_of-schema-node-type-essay
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-essay-argument
   - Target: xananode.canonical:schema/node-type-essay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

444. xananode.canonical:rel/schema-node-subtype-essay-critique-extension_of-schema-node-type-essay
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-essay-critique
   - Target: xananode.canonical:schema/node-type-essay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

445. xananode.canonical:rel/schema-node-subtype-essay-explainer-extension_of-schema-node-type-essay
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-essay-explainer
   - Target: xananode.canonical:schema/node-type-essay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

446. xananode.canonical:rel/schema-node-subtype-essay-manifesto-extension_of-schema-node-type-essay
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-essay-manifesto
   - Target: xananode.canonical:schema/node-type-essay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

447. xananode.canonical:rel/schema-node-subtype-essay-reflection-extension_of-schema-node-type-essay
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-essay-reflection
   - Target: xananode.canonical:schema/node-type-essay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

448. xananode.canonical:rel/schema-node-subtype-event-conference-extension_of-schema-node-type-event
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-event-conference
   - Target: xananode.canonical:schema/node-type-event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

449. xananode.canonical:rel/schema-node-subtype-event-historical_event-extension_of-schema-node-type-event
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-event-historical_event
   - Target: xananode.canonical:schema/node-type-event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

450. xananode.canonical:rel/schema-node-subtype-event-incident-extension_of-schema-node-type-event
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-event-incident
   - Target: xananode.canonical:schema/node-type-event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

451. xananode.canonical:rel/schema-node-subtype-event-meeting-extension_of-schema-node-type-event
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-event-meeting
   - Target: xananode.canonical:schema/node-type-event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

452. xananode.canonical:rel/schema-node-subtype-event-publication_event-extension_of-schema-node-type-event
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-event-publication_event
   - Target: xananode.canonical:schema/node-type-event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

453. xananode.canonical:rel/schema-node-subtype-event-release-extension_of-schema-node-type-event
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-event-release
   - Target: xananode.canonical:schema/node-type-event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

454. xananode.canonical:rel/schema-node-subtype-event-talk-extension_of-schema-node-type-event
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-event-talk
   - Target: xananode.canonical:schema/node-type-event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

455. xananode.canonical:rel/schema-node-subtype-fragment-code_block-extension_of-schema-node-type-fragment
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-fragment-code_block
   - Target: xananode.canonical:schema/node-type-fragment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

456. xananode.canonical:rel/schema-node-subtype-fragment-data_range-extension_of-schema-node-type-fragment
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-fragment-data_range
   - Target: xananode.canonical:schema/node-type-fragment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

457. xananode.canonical:rel/schema-node-subtype-fragment-image_region-extension_of-schema-node-type-fragment
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-fragment-image_region
   - Target: xananode.canonical:schema/node-type-fragment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

458. xananode.canonical:rel/schema-node-subtype-fragment-media_segment-extension_of-schema-node-type-fragment
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-fragment-media_segment
   - Target: xananode.canonical:schema/node-type-fragment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

459. xananode.canonical:rel/schema-node-subtype-fragment-paragraph-extension_of-schema-node-type-fragment
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-fragment-paragraph
   - Target: xananode.canonical:schema/node-type-fragment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

460. xananode.canonical:rel/schema-node-subtype-fragment-quote-extension_of-schema-node-type-fragment
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-fragment-quote
   - Target: xananode.canonical:schema/node-type-fragment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

461. xananode.canonical:rel/schema-node-subtype-fragment-section-extension_of-schema-node-type-fragment
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-fragment-section
   - Target: xananode.canonical:schema/node-type-fragment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

462. xananode.canonical:rel/schema-node-subtype-fragment-sentence-extension_of-schema-node-type-fragment
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-fragment-sentence
   - Target: xananode.canonical:schema/node-type-fragment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

463. xananode.canonical:rel/schema-node-subtype-hypothesis-design-extension_of-schema-node-type-hypothesis
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-hypothesis-design
   - Target: xananode.canonical:schema/node-type-hypothesis
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

464. xananode.canonical:rel/schema-node-subtype-hypothesis-diagnostic-extension_of-schema-node-type-hypothesis
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-hypothesis-diagnostic
   - Target: xananode.canonical:schema/node-type-hypothesis
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

465. xananode.canonical:rel/schema-node-subtype-hypothesis-historical-extension_of-schema-node-type-hypothesis
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-hypothesis-historical
   - Target: xananode.canonical:schema/node-type-hypothesis
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

466. xananode.canonical:rel/schema-node-subtype-hypothesis-interpretive-extension_of-schema-node-type-hypothesis
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-hypothesis-interpretive
   - Target: xananode.canonical:schema/node-type-hypothesis
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

467. xananode.canonical:rel/schema-node-subtype-hypothesis-prediction-extension_of-schema-node-type-hypothesis
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-hypothesis-prediction
   - Target: xananode.canonical:schema/node-type-hypothesis
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

468. xananode.canonical:rel/schema-node-subtype-hypothesis-scientific-extension_of-schema-node-type-hypothesis
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-hypothesis-scientific
   - Target: xananode.canonical:schema/node-type-hypothesis
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

469. xananode.canonical:rel/schema-node-subtype-knowledge_gap-historical_uncertainty-extension_of-schema-node-type-knowledge_gap
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-knowledge_gap-historical_uncertainty
   - Target: xananode.canonical:schema/node-type-knowledge_gap
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

470. xananode.canonical:rel/schema-node-subtype-knowledge_gap-incomplete_context-extension_of-schema-node-type-knowledge_gap
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-knowledge_gap-incomplete_context
   - Target: xananode.canonical:schema/node-type-knowledge_gap
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

471. xananode.canonical:rel/schema-node-subtype-knowledge_gap-lost_document-extension_of-schema-node-type-knowledge_gap
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-knowledge_gap-lost_document
   - Target: xananode.canonical:schema/node-type-knowledge_gap
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

472. xananode.canonical:rel/schema-node-subtype-knowledge_gap-missing_citation-extension_of-schema-node-type-knowledge_gap
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-knowledge_gap-missing_citation
   - Target: xananode.canonical:schema/node-type-knowledge_gap
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

473. xananode.canonical:rel/schema-node-subtype-knowledge_gap-missing_source-extension_of-schema-node-type-knowledge_gap
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-knowledge_gap-missing_source
   - Target: xananode.canonical:schema/node-type-knowledge_gap
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

474. xananode.canonical:rel/schema-node-subtype-knowledge_gap-unknown_author-extension_of-schema-node-type-knowledge_gap
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-knowledge_gap-unknown_author
   - Target: xananode.canonical:schema/node-type-knowledge_gap
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

475. xananode.canonical:rel/schema-node-subtype-media-app_icon-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-app_icon
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

476. xananode.canonical:rel/schema-node-subtype-media-audio-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-audio
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

477. xananode.canonical:rel/schema-node-subtype-media-branding_icon-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-branding_icon
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

478. xananode.canonical:rel/schema-node-subtype-media-clip-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-clip
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

479. xananode.canonical:rel/schema-node-subtype-media-diagram-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-diagram
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

480. xananode.canonical:rel/schema-node-subtype-media-document-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-document
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

481. xananode.canonical:rel/schema-node-subtype-media-favicon-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-favicon
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

482. xananode.canonical:rel/schema-node-subtype-media-image-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-image
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

483. xananode.canonical:rel/schema-node-subtype-media-logo-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-logo
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

484. xananode.canonical:rel/schema-node-subtype-media-scan-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-scan
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

485. xananode.canonical:rel/schema-node-subtype-media-screenshot-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-screenshot
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

486. xananode.canonical:rel/schema-node-subtype-media-source_snapshot-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-source_snapshot
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

487. xananode.canonical:rel/schema-node-subtype-media-thumbnail-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-thumbnail
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

488. xananode.canonical:rel/schema-node-subtype-media-touch_icon-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-touch_icon
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

489. xananode.canonical:rel/schema-node-subtype-media-video-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-video
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

490. xananode.canonical:rel/schema-node-subtype-media-web_snapshot-extension_of-schema-node-type-media
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-media-web_snapshot
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

491. xananode.canonical:rel/schema-node-subtype-observation-anomaly-extension_of-schema-node-type-observation
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-observation-anomaly
   - Target: xananode.canonical:schema/node-type-observation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

492. xananode.canonical:rel/schema-node-subtype-observation-case_study-extension_of-schema-node-type-observation
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-observation-case_study
   - Target: xananode.canonical:schema/node-type-observation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

493. xananode.canonical:rel/schema-node-subtype-observation-example-extension_of-schema-node-type-observation
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-observation-example
   - Target: xananode.canonical:schema/node-type-observation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

494. xananode.canonical:rel/schema-node-subtype-observation-failure-extension_of-schema-node-type-observation
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-observation-failure
   - Target: xananode.canonical:schema/node-type-observation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

495. xananode.canonical:rel/schema-node-subtype-observation-news_event-extension_of-schema-node-type-observation
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-observation-news_event
   - Target: xananode.canonical:schema/node-type-observation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

496. xananode.canonical:rel/schema-node-subtype-observation-symptom-extension_of-schema-node-type-observation
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-observation-symptom
   - Target: xananode.canonical:schema/node-type-observation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

497. xananode.canonical:rel/schema-node-subtype-organization-agency-extension_of-schema-node-type-organization
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-organization-agency
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

498. xananode.canonical:rel/schema-node-subtype-organization-company-extension_of-schema-node-type-organization
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-organization-company
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

499. xananode.canonical:rel/schema-node-subtype-organization-lab-extension_of-schema-node-type-organization
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-organization-lab
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

500. xananode.canonical:rel/schema-node-subtype-organization-nonprofit-extension_of-schema-node-type-organization
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-organization-nonprofit
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

501. xananode.canonical:rel/schema-node-subtype-organization-publisher-extension_of-schema-node-type-organization
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-organization-publisher
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

502. xananode.canonical:rel/schema-node-subtype-organization-standards_body-extension_of-schema-node-type-organization
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-organization-standards_body
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

503. xananode.canonical:rel/schema-node-subtype-organization-university-extension_of-schema-node-type-organization
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-organization-university
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

504. xananode.canonical:rel/schema-node-subtype-person-artist-extension_of-schema-node-type-person
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-person-artist
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

505. xananode.canonical:rel/schema-node-subtype-person-critic-extension_of-schema-node-type-person
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-person-critic
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

506. xananode.canonical:rel/schema-node-subtype-person-engineer-extension_of-schema-node-type-person
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-person-engineer
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

507. xananode.canonical:rel/schema-node-subtype-person-founder-extension_of-schema-node-type-person
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-person-founder
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

508. xananode.canonical:rel/schema-node-subtype-person-programmer-extension_of-schema-node-type-person
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-person-programmer
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

509. xananode.canonical:rel/schema-node-subtype-person-researcher-extension_of-schema-node-type-person
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-person-researcher
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

510. xananode.canonical:rel/schema-node-subtype-person-scientist-extension_of-schema-node-type-person
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-person-scientist
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

511. xananode.canonical:rel/schema-node-subtype-person-writer-extension_of-schema-node-type-person
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-person-writer
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

512. xananode.canonical:rel/schema-node-subtype-place-building-extension_of-schema-node-type-place
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-place-building
   - Target: xananode.canonical:schema/node-type-place
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

513. xananode.canonical:rel/schema-node-subtype-place-city-extension_of-schema-node-type-place
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-place-city
   - Target: xananode.canonical:schema/node-type-place
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

514. xananode.canonical:rel/schema-node-subtype-place-country-extension_of-schema-node-type-place
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-place-country
   - Target: xananode.canonical:schema/node-type-place
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

515. xananode.canonical:rel/schema-node-subtype-place-institution_site-extension_of-schema-node-type-place
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-place-institution_site
   - Target: xananode.canonical:schema/node-type-place
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

516. xananode.canonical:rel/schema-node-subtype-place-lab-extension_of-schema-node-type-place
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-place-lab
   - Target: xananode.canonical:schema/node-type-place
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

517. xananode.canonical:rel/schema-node-subtype-place-online_space-extension_of-schema-node-type-place
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-place-online_space
   - Target: xananode.canonical:schema/node-type-place
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

518. xananode.canonical:rel/schema-node-subtype-place-region-extension_of-schema-node-type-place
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-place-region
   - Target: xananode.canonical:schema/node-type-place
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

519. xananode.canonical:rel/schema-node-subtype-problem-design_problem-extension_of-schema-node-type-problem
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-problem-design_problem
   - Target: xananode.canonical:schema/node-type-problem
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

520. xananode.canonical:rel/schema-node-subtype-problem-failure_mode-extension_of-schema-node-type-problem
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-problem-failure_mode
   - Target: xananode.canonical:schema/node-type-problem
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

521. xananode.canonical:rel/schema-node-subtype-problem-governance_problem-extension_of-schema-node-type-problem
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-problem-governance_problem
   - Target: xananode.canonical:schema/node-type-problem
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

522. xananode.canonical:rel/schema-node-subtype-problem-implementation_problem-extension_of-schema-node-type-problem
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-problem-implementation_problem
   - Target: xananode.canonical:schema/node-type-problem
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

523. xananode.canonical:rel/schema-node-subtype-problem-research_problem-extension_of-schema-node-type-problem
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-problem-research_problem
   - Target: xananode.canonical:schema/node-type-problem
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

524. xananode.canonical:rel/schema-node-subtype-problem-risk-extension_of-schema-node-type-problem
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-problem-risk
   - Target: xananode.canonical:schema/node-type-problem
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

525. xananode.canonical:rel/schema-node-subtype-project-fictional_system-extension_of-schema-node-type-project
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-project-fictional_system
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

526. xananode.canonical:rel/schema-node-subtype-project-platform-extension_of-schema-node-type-project
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-project-platform
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

527. xananode.canonical:rel/schema-node-subtype-project-prototype-extension_of-schema-node-type-project
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-project-prototype
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

528. xananode.canonical:rel/schema-node-subtype-project-research_project-extension_of-schema-node-type-project
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-project-research_project
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

529. xananode.canonical:rel/schema-node-subtype-project-software-extension_of-schema-node-type-project
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-project-software
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

530. xananode.canonical:rel/schema-node-subtype-project-standard-extension_of-schema-node-type-project
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-project-standard
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

531. xananode.canonical:rel/schema-node-subtype-publication-article-extension_of-schema-node-type-publication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-publication-article
   - Target: xananode.canonical:schema/node-type-publication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

532. xananode.canonical:rel/schema-node-subtype-publication-book-extension_of-schema-node-type-publication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-publication-book
   - Target: xananode.canonical:schema/node-type-publication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

533. xananode.canonical:rel/schema-node-subtype-publication-episode-extension_of-schema-node-type-publication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-publication-episode
   - Target: xananode.canonical:schema/node-type-publication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

534. xananode.canonical:rel/schema-node-subtype-publication-film-extension_of-schema-node-type-publication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-publication-film
   - Target: xananode.canonical:schema/node-type-publication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

535. xananode.canonical:rel/schema-node-subtype-publication-paper-extension_of-schema-node-type-publication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-publication-paper
   - Target: xananode.canonical:schema/node-type-publication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

536. xananode.canonical:rel/schema-node-subtype-publication-podcast-extension_of-schema-node-type-publication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-publication-podcast
   - Target: xananode.canonical:schema/node-type-publication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

537. xananode.canonical:rel/schema-node-subtype-publication-talk-extension_of-schema-node-type-publication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-publication-talk
   - Target: xananode.canonical:schema/node-type-publication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

538. xananode.canonical:rel/schema-node-subtype-publication-webpage-extension_of-schema-node-type-publication
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-publication-webpage
   - Target: xananode.canonical:schema/node-type-publication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

539. xananode.canonical:rel/schema-node-subtype-question-design_question-extension_of-schema-node-type-question
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-question-design_question
   - Target: xananode.canonical:schema/node-type-question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

540. xananode.canonical:rel/schema-node-subtype-question-diagnostic_question-extension_of-schema-node-type-question
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-question-diagnostic_question
   - Target: xananode.canonical:schema/node-type-question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

541. xananode.canonical:rel/schema-node-subtype-question-historical_question-extension_of-schema-node-type-question
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-question-historical_question
   - Target: xananode.canonical:schema/node-type-question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

542. xananode.canonical:rel/schema-node-subtype-question-open_question-extension_of-schema-node-type-question
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-question-open_question
   - Target: xananode.canonical:schema/node-type-question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

543. xananode.canonical:rel/schema-node-subtype-question-prediction_question-extension_of-schema-node-type-question
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-question-prediction_question
   - Target: xananode.canonical:schema/node-type-question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

544. xananode.canonical:rel/schema-node-subtype-question-research_question-extension_of-schema-node-type-question
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-question-research_question
   - Target: xananode.canonical:schema/node-type-question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

545. xananode.canonical:rel/schema-node-subtype-relationship-citation-extension_of-schema-node-type-relationship
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-relationship-citation
   - Target: xananode.canonical:schema/node-type-relationship
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

546. xananode.canonical:rel/schema-node-subtype-relationship-collaboration-extension_of-schema-node-type-relationship
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-relationship-collaboration
   - Target: xananode.canonical:schema/node-type-relationship
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

547. xananode.canonical:rel/schema-node-subtype-relationship-dependency-extension_of-schema-node-type-relationship
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-relationship-dependency
   - Target: xananode.canonical:schema/node-type-relationship
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

548. xananode.canonical:rel/schema-node-subtype-relationship-dispute-extension_of-schema-node-type-relationship
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-relationship-dispute
   - Target: xananode.canonical:schema/node-type-relationship
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

549. xananode.canonical:rel/schema-node-subtype-relationship-friendship-extension_of-schema-node-type-relationship
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-relationship-friendship
   - Target: xananode.canonical:schema/node-type-relationship
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

550. xananode.canonical:rel/schema-node-subtype-relationship-influence-extension_of-schema-node-type-relationship
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-relationship-influence
   - Target: xananode.canonical:schema/node-type-relationship
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

551. xananode.canonical:rel/schema-node-subtype-relationship-lineage-extension_of-schema-node-type-relationship
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-relationship-lineage
   - Target: xananode.canonical:schema/node-type-relationship
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

552. xananode.canonical:rel/schema-node-subtype-response-answer-extension_of-schema-node-type-response
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-response-answer
   - Target: xananode.canonical:schema/node-type-response
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

553. xananode.canonical:rel/schema-node-subtype-response-clarification-extension_of-schema-node-type-response
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-response-clarification
   - Target: xananode.canonical:schema/node-type-response
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

554. xananode.canonical:rel/schema-node-subtype-response-comment-extension_of-schema-node-type-response
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-response-comment
   - Target: xananode.canonical:schema/node-type-response
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

555. xananode.canonical:rel/schema-node-subtype-response-follow_up-extension_of-schema-node-type-response
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-response-follow_up
   - Target: xananode.canonical:schema/node-type-response
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

556. xananode.canonical:rel/schema-node-subtype-response-rebuttal-extension_of-schema-node-type-response
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-response-rebuttal
   - Target: xananode.canonical:schema/node-type-response
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

557. xananode.canonical:rel/schema-node-subtype-response-reply-extension_of-schema-node-type-response
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-response-reply
   - Target: xananode.canonical:schema/node-type-response
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

558. xananode.canonical:rel/schema-node-subtype-response-review_response-extension_of-schema-node-type-response
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-response-review_response
   - Target: xananode.canonical:schema/node-type-response
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

559. xananode.canonical:rel/schema-node-subtype-revision-claim_revision-extension_of-schema-node-type-revision
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-revision-claim_revision
   - Target: xananode.canonical:schema/node-type-revision
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

560. xananode.canonical:rel/schema-node-subtype-revision-media_revision-extension_of-schema-node-type-revision
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-revision-media_revision
   - Target: xananode.canonical:schema/node-type-revision
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

561. xananode.canonical:rel/schema-node-subtype-revision-node_revision-extension_of-schema-node-type-revision
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-revision-node_revision
   - Target: xananode.canonical:schema/node-type-revision
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

562. xananode.canonical:rel/schema-node-subtype-revision-relationship_revision-extension_of-schema-node-type-revision
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-revision-relationship_revision
   - Target: xananode.canonical:schema/node-type-revision
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

563. xananode.canonical:rel/schema-node-subtype-schema-canonical_schema_record-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-canonical_schema_record
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

564. xananode.canonical:rel/schema-node-subtype-schema-governance_rule-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-governance_rule
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

565. xananode.canonical:rel/schema-node-subtype-schema-namespace_record-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-namespace_record
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

566. xananode.canonical:rel/schema-node-subtype-schema-node_subtype_schema-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-node_subtype_schema
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

567. xananode.canonical:rel/schema-node-subtype-schema-node_type_schema-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-node_type_schema
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

568. xananode.canonical:rel/schema-node-subtype-schema-projection_style_rule-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-projection_style_rule
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

569. xananode.canonical:rel/schema-node-subtype-schema-property_registry_entry-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-property_registry_entry
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

570. xananode.canonical:rel/schema-node-subtype-schema-protocol_artifact-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-protocol_artifact
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

571. xananode.canonical:rel/schema-node-subtype-schema-relationship_category_schema-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-relationship_category_schema
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

572. xananode.canonical:rel/schema-node-subtype-schema-relationship_type_schema-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-relationship_type_schema
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

573. xananode.canonical:rel/schema-node-subtype-schema-schema_field-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-schema_field
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

574. xananode.canonical:rel/schema-node-subtype-schema-schema_term-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-schema_term
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

575. xananode.canonical:rel/schema-node-subtype-schema-semantic_rule-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-semantic_rule
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

576. xananode.canonical:rel/schema-node-subtype-schema-style_rule-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-style_rule
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

577. xananode.canonical:rel/schema-node-subtype-schema-term-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-term
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

578. xananode.canonical:rel/schema-node-subtype-schema-validation_rule-extension_of-schema-node-type-schema
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-schema-validation_rule
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

579. xananode.canonical:rel/schema-node-subtype-source-archive-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-archive
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

580. xananode.canonical:rel/schema-node-subtype-source-article-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-article
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

581. xananode.canonical:rel/schema-node-subtype-source-book-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-book
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

582. xananode.canonical:rel/schema-node-subtype-source-dataset-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-dataset
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

583. xananode.canonical:rel/schema-node-subtype-source-documentation-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-documentation
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

584. xananode.canonical:rel/schema-node-subtype-source-git_repository-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-git_repository
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

585. xananode.canonical:rel/schema-node-subtype-source-interview-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-interview
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

586. xananode.canonical:rel/schema-node-subtype-source-legal_policy-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-legal_policy
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

587. xananode.canonical:rel/schema-node-subtype-source-license-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-license
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

588. xananode.canonical:rel/schema-node-subtype-source-notice-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-notice
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

589. xananode.canonical:rel/schema-node-subtype-source-official_site-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-official_site
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

590. xananode.canonical:rel/schema-node-subtype-source-paper-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-paper
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

591. xananode.canonical:rel/schema-node-subtype-source-social_profile-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-social_profile
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

592. xananode.canonical:rel/schema-node-subtype-source-support_page-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-support_page
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

593. xananode.canonical:rel/schema-node-subtype-source-talk-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-talk
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

594. xananode.canonical:rel/schema-node-subtype-source-trademark_policy-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-trademark_policy
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

595. xananode.canonical:rel/schema-node-subtype-source-transcript-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-transcript
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

596. xananode.canonical:rel/schema-node-subtype-source-web_snapshot-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-web_snapshot
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

597. xananode.canonical:rel/schema-node-subtype-source-website-extension_of-schema-node-type-source
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-source-website
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

598. xananode.canonical:rel/schema-node-subtype-technology-algorithm-extension_of-schema-node-type-technology
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-technology-algorithm
   - Target: xananode.canonical:schema/node-type-technology
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

599. xananode.canonical:rel/schema-node-subtype-technology-architecture-extension_of-schema-node-type-technology
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-technology-architecture
   - Target: xananode.canonical:schema/node-type-technology
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

600. xananode.canonical:rel/schema-node-subtype-technology-format-extension_of-schema-node-type-technology
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-technology-format
   - Target: xananode.canonical:schema/node-type-technology
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

601. xananode.canonical:rel/schema-node-subtype-technology-language-extension_of-schema-node-type-technology
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-technology-language
   - Target: xananode.canonical:schema/node-type-technology
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

602. xananode.canonical:rel/schema-node-subtype-technology-model-extension_of-schema-node-type-technology
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-technology-model
   - Target: xananode.canonical:schema/node-type-technology
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

603. xananode.canonical:rel/schema-node-subtype-technology-platform-extension_of-schema-node-type-technology
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-technology-platform
   - Target: xananode.canonical:schema/node-type-technology
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

604. xananode.canonical:rel/schema-node-subtype-technology-protocol-extension_of-schema-node-type-technology
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-technology-protocol
   - Target: xananode.canonical:schema/node-type-technology
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

605. xananode.canonical:rel/schema-node-subtype-technology-tool-extension_of-schema-node-type-technology
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-technology-tool
   - Target: xananode.canonical:schema/node-type-technology
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

606. xananode.canonical:rel/schema-node-subtype-trail-argument-extension_of-schema-node-type-trail
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-trail-argument
   - Target: xananode.canonical:schema/node-type-trail
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

607. xananode.canonical:rel/schema-node-subtype-trail-dispute_path-extension_of-schema-node-type-trail
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-trail-dispute_path
   - Target: xananode.canonical:schema/node-type-trail
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

608. xananode.canonical:rel/schema-node-subtype-trail-evidence_path-extension_of-schema-node-type-trail
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-trail-evidence_path
   - Target: xananode.canonical:schema/node-type-trail
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

609. xananode.canonical:rel/schema-node-subtype-trail-historical-extension_of-schema-node-type-trail
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-trail-historical
   - Target: xananode.canonical:schema/node-type-trail
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

610. xananode.canonical:rel/schema-node-subtype-trail-introductory-extension_of-schema-node-type-trail
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-trail-introductory
   - Target: xananode.canonical:schema/node-type-trail
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

611. xananode.canonical:rel/schema-node-subtype-trail-teaching_path-extension_of-schema-node-type-trail
   - Type: extension_of
   - Source: xananode.canonical:schema/node-subtype-trail-teaching_path
   - Target: xananode.canonical:schema/node-type-trail
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

612. xananode.canonical:rel/schema-node-type-claim-contains-schema-node-subtype-claim-causal
   - Type: contains
   - Source: xananode.canonical:schema/node-type-claim
   - Target: xananode.canonical:schema/node-subtype-claim-causal
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

613. xananode.canonical:rel/schema-node-type-claim-contains-schema-node-subtype-claim-comparative
   - Type: contains
   - Source: xananode.canonical:schema/node-type-claim
   - Target: xananode.canonical:schema/node-subtype-claim-comparative
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

614. xananode.canonical:rel/schema-node-type-claim-contains-schema-node-subtype-claim-definition
   - Type: contains
   - Source: xananode.canonical:schema/node-type-claim
   - Target: xananode.canonical:schema/node-subtype-claim-definition
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

615. xananode.canonical:rel/schema-node-type-claim-contains-schema-node-subtype-claim-historical
   - Type: contains
   - Source: xananode.canonical:schema/node-type-claim
   - Target: xananode.canonical:schema/node-subtype-claim-historical
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

616. xananode.canonical:rel/schema-node-type-claim-contains-schema-node-subtype-claim-interpretive
   - Type: contains
   - Source: xananode.canonical:schema/node-type-claim
   - Target: xananode.canonical:schema/node-subtype-claim-interpretive
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

617. xananode.canonical:rel/schema-node-type-claim-contains-schema-node-subtype-claim-normative
   - Type: contains
   - Source: xananode.canonical:schema/node-type-claim
   - Target: xananode.canonical:schema/node-subtype-claim-normative
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

618. xananode.canonical:rel/schema-node-type-claim-contains-schema-node-subtype-claim-predictive
   - Type: contains
   - Source: xananode.canonical:schema/node-type-claim
   - Target: xananode.canonical:schema/node-subtype-claim-predictive
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

619. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-announcement
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-announcement
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

620. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-broadcast
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-broadcast
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

621. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-chat
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-chat
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

622. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-conversation
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-conversation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

623. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-debate
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-debate
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

624. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-discussion
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-discussion
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

625. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-forum
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-forum
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

626. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-interview
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-interview
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

627. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-meeting
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-meeting
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

628. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-message
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-message
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

629. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-presentation
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-presentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

630. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-publication
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-publication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

631. xananode.canonical:rel/schema-node-type-communication-contains-schema-node-subtype-communication-thread
   - Type: contains
   - Source: xananode.canonical:schema/node-type-communication
   - Target: xananode.canonical:schema/node-subtype-communication-thread
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

632. xananode.canonical:rel/schema-node-type-community-contains-schema-node-subtype-community-fan
   - Type: contains
   - Source: xananode.canonical:schema/node-type-community
   - Target: xananode.canonical:schema/node-subtype-community-fan
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

633. xananode.canonical:rel/schema-node-type-community-contains-schema-node-subtype-community-forum
   - Type: contains
   - Source: xananode.canonical:schema/node-type-community
   - Target: xananode.canonical:schema/node-subtype-community-forum
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

634. xananode.canonical:rel/schema-node-type-community-contains-schema-node-subtype-community-local
   - Type: contains
   - Source: xananode.canonical:schema/node-type-community
   - Target: xananode.canonical:schema/node-subtype-community-local
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

635. xananode.canonical:rel/schema-node-type-community-contains-schema-node-subtype-community-online
   - Type: contains
   - Source: xananode.canonical:schema/node-type-community
   - Target: xananode.canonical:schema/node-subtype-community-online
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

636. xananode.canonical:rel/schema-node-type-community-contains-schema-node-subtype-community-open_source
   - Type: contains
   - Source: xananode.canonical:schema/node-type-community
   - Target: xananode.canonical:schema/node-subtype-community-open_source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

637. xananode.canonical:rel/schema-node-type-community-contains-schema-node-subtype-community-professional
   - Type: contains
   - Source: xananode.canonical:schema/node-type-community
   - Target: xananode.canonical:schema/node-subtype-community-professional
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

638. xananode.canonical:rel/schema-node-type-community-contains-schema-node-subtype-community-research
   - Type: contains
   - Source: xananode.canonical:schema/node-type-community
   - Target: xananode.canonical:schema/node-subtype-community-research
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

639. xananode.canonical:rel/schema-node-type-concept-contains-schema-node-subtype-concept-distinction
   - Type: contains
   - Source: xananode.canonical:schema/node-type-concept
   - Target: xananode.canonical:schema/node-subtype-concept-distinction
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

640. xananode.canonical:rel/schema-node-type-concept-contains-schema-node-subtype-concept-failure_mode
   - Type: contains
   - Source: xananode.canonical:schema/node-type-concept
   - Target: xananode.canonical:schema/node-subtype-concept-failure_mode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

641. xananode.canonical:rel/schema-node-type-concept-contains-schema-node-subtype-concept-frame
   - Type: contains
   - Source: xananode.canonical:schema/node-type-concept
   - Target: xananode.canonical:schema/node-subtype-concept-frame
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

642. xananode.canonical:rel/schema-node-type-concept-contains-schema-node-subtype-concept-method
   - Type: contains
   - Source: xananode.canonical:schema/node-type-concept
   - Target: xananode.canonical:schema/node-subtype-concept-method
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

643. xananode.canonical:rel/schema-node-type-concept-contains-schema-node-subtype-concept-pattern
   - Type: contains
   - Source: xananode.canonical:schema/node-type-concept
   - Target: xananode.canonical:schema/node-subtype-concept-pattern
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

644. xananode.canonical:rel/schema-node-type-concept-contains-schema-node-subtype-concept-principle
   - Type: contains
   - Source: xananode.canonical:schema/node-type-concept
   - Target: xananode.canonical:schema/node-subtype-concept-principle
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

645. xananode.canonical:rel/schema-node-type-concept-contains-schema-node-subtype-concept-theory
   - Type: contains
   - Source: xananode.canonical:schema/node-type-concept
   - Target: xananode.canonical:schema/node-subtype-concept-theory
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

646. xananode.canonical:rel/schema-node-type-essay-contains-schema-node-subtype-essay-analysis
   - Type: contains
   - Source: xananode.canonical:schema/node-type-essay
   - Target: xananode.canonical:schema/node-subtype-essay-analysis
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

647. xananode.canonical:rel/schema-node-type-essay-contains-schema-node-subtype-essay-argument
   - Type: contains
   - Source: xananode.canonical:schema/node-type-essay
   - Target: xananode.canonical:schema/node-subtype-essay-argument
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

648. xananode.canonical:rel/schema-node-type-essay-contains-schema-node-subtype-essay-critique
   - Type: contains
   - Source: xananode.canonical:schema/node-type-essay
   - Target: xananode.canonical:schema/node-subtype-essay-critique
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

649. xananode.canonical:rel/schema-node-type-essay-contains-schema-node-subtype-essay-explainer
   - Type: contains
   - Source: xananode.canonical:schema/node-type-essay
   - Target: xananode.canonical:schema/node-subtype-essay-explainer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

650. xananode.canonical:rel/schema-node-type-essay-contains-schema-node-subtype-essay-manifesto
   - Type: contains
   - Source: xananode.canonical:schema/node-type-essay
   - Target: xananode.canonical:schema/node-subtype-essay-manifesto
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

651. xananode.canonical:rel/schema-node-type-essay-contains-schema-node-subtype-essay-reflection
   - Type: contains
   - Source: xananode.canonical:schema/node-type-essay
   - Target: xananode.canonical:schema/node-subtype-essay-reflection
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

652. xananode.canonical:rel/schema-node-type-event-contains-schema-node-subtype-event-conference
   - Type: contains
   - Source: xananode.canonical:schema/node-type-event
   - Target: xananode.canonical:schema/node-subtype-event-conference
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

653. xananode.canonical:rel/schema-node-type-event-contains-schema-node-subtype-event-historical_event
   - Type: contains
   - Source: xananode.canonical:schema/node-type-event
   - Target: xananode.canonical:schema/node-subtype-event-historical_event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

654. xananode.canonical:rel/schema-node-type-event-contains-schema-node-subtype-event-incident
   - Type: contains
   - Source: xananode.canonical:schema/node-type-event
   - Target: xananode.canonical:schema/node-subtype-event-incident
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

655. xananode.canonical:rel/schema-node-type-event-contains-schema-node-subtype-event-meeting
   - Type: contains
   - Source: xananode.canonical:schema/node-type-event
   - Target: xananode.canonical:schema/node-subtype-event-meeting
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

656. xananode.canonical:rel/schema-node-type-event-contains-schema-node-subtype-event-publication_event
   - Type: contains
   - Source: xananode.canonical:schema/node-type-event
   - Target: xananode.canonical:schema/node-subtype-event-publication_event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

657. xananode.canonical:rel/schema-node-type-event-contains-schema-node-subtype-event-release
   - Type: contains
   - Source: xananode.canonical:schema/node-type-event
   - Target: xananode.canonical:schema/node-subtype-event-release
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

658. xananode.canonical:rel/schema-node-type-event-contains-schema-node-subtype-event-talk
   - Type: contains
   - Source: xananode.canonical:schema/node-type-event
   - Target: xananode.canonical:schema/node-subtype-event-talk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

659. xananode.canonical:rel/schema-node-type-fragment-contains-schema-node-subtype-fragment-code_block
   - Type: contains
   - Source: xananode.canonical:schema/node-type-fragment
   - Target: xananode.canonical:schema/node-subtype-fragment-code_block
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

660. xananode.canonical:rel/schema-node-type-fragment-contains-schema-node-subtype-fragment-data_range
   - Type: contains
   - Source: xananode.canonical:schema/node-type-fragment
   - Target: xananode.canonical:schema/node-subtype-fragment-data_range
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

661. xananode.canonical:rel/schema-node-type-fragment-contains-schema-node-subtype-fragment-image_region
   - Type: contains
   - Source: xananode.canonical:schema/node-type-fragment
   - Target: xananode.canonical:schema/node-subtype-fragment-image_region
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

662. xananode.canonical:rel/schema-node-type-fragment-contains-schema-node-subtype-fragment-media_segment
   - Type: contains
   - Source: xananode.canonical:schema/node-type-fragment
   - Target: xananode.canonical:schema/node-subtype-fragment-media_segment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

663. xananode.canonical:rel/schema-node-type-fragment-contains-schema-node-subtype-fragment-paragraph
   - Type: contains
   - Source: xananode.canonical:schema/node-type-fragment
   - Target: xananode.canonical:schema/node-subtype-fragment-paragraph
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

664. xananode.canonical:rel/schema-node-type-fragment-contains-schema-node-subtype-fragment-quote
   - Type: contains
   - Source: xananode.canonical:schema/node-type-fragment
   - Target: xananode.canonical:schema/node-subtype-fragment-quote
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

665. xananode.canonical:rel/schema-node-type-fragment-contains-schema-node-subtype-fragment-section
   - Type: contains
   - Source: xananode.canonical:schema/node-type-fragment
   - Target: xananode.canonical:schema/node-subtype-fragment-section
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

666. xananode.canonical:rel/schema-node-type-fragment-contains-schema-node-subtype-fragment-sentence
   - Type: contains
   - Source: xananode.canonical:schema/node-type-fragment
   - Target: xananode.canonical:schema/node-subtype-fragment-sentence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

667. xananode.canonical:rel/schema-node-type-hypothesis-contains-schema-node-subtype-hypothesis-design
   - Type: contains
   - Source: xananode.canonical:schema/node-type-hypothesis
   - Target: xananode.canonical:schema/node-subtype-hypothesis-design
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

668. xananode.canonical:rel/schema-node-type-hypothesis-contains-schema-node-subtype-hypothesis-diagnostic
   - Type: contains
   - Source: xananode.canonical:schema/node-type-hypothesis
   - Target: xananode.canonical:schema/node-subtype-hypothesis-diagnostic
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

669. xananode.canonical:rel/schema-node-type-hypothesis-contains-schema-node-subtype-hypothesis-historical
   - Type: contains
   - Source: xananode.canonical:schema/node-type-hypothesis
   - Target: xananode.canonical:schema/node-subtype-hypothesis-historical
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

670. xananode.canonical:rel/schema-node-type-hypothesis-contains-schema-node-subtype-hypothesis-interpretive
   - Type: contains
   - Source: xananode.canonical:schema/node-type-hypothesis
   - Target: xananode.canonical:schema/node-subtype-hypothesis-interpretive
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

671. xananode.canonical:rel/schema-node-type-hypothesis-contains-schema-node-subtype-hypothesis-prediction
   - Type: contains
   - Source: xananode.canonical:schema/node-type-hypothesis
   - Target: xananode.canonical:schema/node-subtype-hypothesis-prediction
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

672. xananode.canonical:rel/schema-node-type-hypothesis-contains-schema-node-subtype-hypothesis-scientific
   - Type: contains
   - Source: xananode.canonical:schema/node-type-hypothesis
   - Target: xananode.canonical:schema/node-subtype-hypothesis-scientific
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

673. xananode.canonical:rel/schema-node-type-knowledge_gap-contains-schema-node-subtype-knowledge_gap-historical_uncertainty
   - Type: contains
   - Source: xananode.canonical:schema/node-type-knowledge_gap
   - Target: xananode.canonical:schema/node-subtype-knowledge_gap-historical_uncertainty
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

674. xananode.canonical:rel/schema-node-type-knowledge_gap-contains-schema-node-subtype-knowledge_gap-incomplete_context
   - Type: contains
   - Source: xananode.canonical:schema/node-type-knowledge_gap
   - Target: xananode.canonical:schema/node-subtype-knowledge_gap-incomplete_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

675. xananode.canonical:rel/schema-node-type-knowledge_gap-contains-schema-node-subtype-knowledge_gap-lost_document
   - Type: contains
   - Source: xananode.canonical:schema/node-type-knowledge_gap
   - Target: xananode.canonical:schema/node-subtype-knowledge_gap-lost_document
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

676. xananode.canonical:rel/schema-node-type-knowledge_gap-contains-schema-node-subtype-knowledge_gap-missing_citation
   - Type: contains
   - Source: xananode.canonical:schema/node-type-knowledge_gap
   - Target: xananode.canonical:schema/node-subtype-knowledge_gap-missing_citation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

677. xananode.canonical:rel/schema-node-type-knowledge_gap-contains-schema-node-subtype-knowledge_gap-missing_source
   - Type: contains
   - Source: xananode.canonical:schema/node-type-knowledge_gap
   - Target: xananode.canonical:schema/node-subtype-knowledge_gap-missing_source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

678. xananode.canonical:rel/schema-node-type-knowledge_gap-contains-schema-node-subtype-knowledge_gap-unknown_author
   - Type: contains
   - Source: xananode.canonical:schema/node-type-knowledge_gap
   - Target: xananode.canonical:schema/node-subtype-knowledge_gap-unknown_author
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

679. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-app_icon
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-app_icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

680. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-audio
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-audio
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

681. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-branding_icon
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-branding_icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

682. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-clip
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-clip
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

683. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-diagram
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-diagram
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

684. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-document
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-document
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

685. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-favicon
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-favicon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

686. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-image
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-image
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

687. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-logo
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-logo
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

688. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-scan
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-scan
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

689. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-screenshot
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-screenshot
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

690. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-source_snapshot
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-source_snapshot
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

691. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-thumbnail
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-thumbnail
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

692. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-touch_icon
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-touch_icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

693. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-video
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-video
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

694. xananode.canonical:rel/schema-node-type-media-contains-schema-node-subtype-media-web_snapshot
   - Type: contains
   - Source: xananode.canonical:schema/node-type-media
   - Target: xananode.canonical:schema/node-subtype-media-web_snapshot
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

695. xananode.canonical:rel/schema-node-type-observation-contains-schema-node-subtype-observation-anomaly
   - Type: contains
   - Source: xananode.canonical:schema/node-type-observation
   - Target: xananode.canonical:schema/node-subtype-observation-anomaly
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

696. xananode.canonical:rel/schema-node-type-observation-contains-schema-node-subtype-observation-case_study
   - Type: contains
   - Source: xananode.canonical:schema/node-type-observation
   - Target: xananode.canonical:schema/node-subtype-observation-case_study
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

697. xananode.canonical:rel/schema-node-type-observation-contains-schema-node-subtype-observation-example
   - Type: contains
   - Source: xananode.canonical:schema/node-type-observation
   - Target: xananode.canonical:schema/node-subtype-observation-example
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

698. xananode.canonical:rel/schema-node-type-observation-contains-schema-node-subtype-observation-failure
   - Type: contains
   - Source: xananode.canonical:schema/node-type-observation
   - Target: xananode.canonical:schema/node-subtype-observation-failure
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

699. xananode.canonical:rel/schema-node-type-observation-contains-schema-node-subtype-observation-news_event
   - Type: contains
   - Source: xananode.canonical:schema/node-type-observation
   - Target: xananode.canonical:schema/node-subtype-observation-news_event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

700. xananode.canonical:rel/schema-node-type-observation-contains-schema-node-subtype-observation-symptom
   - Type: contains
   - Source: xananode.canonical:schema/node-type-observation
   - Target: xananode.canonical:schema/node-subtype-observation-symptom
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

701. xananode.canonical:rel/schema-node-type-organization-contains-schema-node-subtype-organization-agency
   - Type: contains
   - Source: xananode.canonical:schema/node-type-organization
   - Target: xananode.canonical:schema/node-subtype-organization-agency
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

702. xananode.canonical:rel/schema-node-type-organization-contains-schema-node-subtype-organization-company
   - Type: contains
   - Source: xananode.canonical:schema/node-type-organization
   - Target: xananode.canonical:schema/node-subtype-organization-company
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

703. xananode.canonical:rel/schema-node-type-organization-contains-schema-node-subtype-organization-lab
   - Type: contains
   - Source: xananode.canonical:schema/node-type-organization
   - Target: xananode.canonical:schema/node-subtype-organization-lab
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

704. xananode.canonical:rel/schema-node-type-organization-contains-schema-node-subtype-organization-nonprofit
   - Type: contains
   - Source: xananode.canonical:schema/node-type-organization
   - Target: xananode.canonical:schema/node-subtype-organization-nonprofit
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

705. xananode.canonical:rel/schema-node-type-organization-contains-schema-node-subtype-organization-publisher
   - Type: contains
   - Source: xananode.canonical:schema/node-type-organization
   - Target: xananode.canonical:schema/node-subtype-organization-publisher
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

706. xananode.canonical:rel/schema-node-type-organization-contains-schema-node-subtype-organization-standards_body
   - Type: contains
   - Source: xananode.canonical:schema/node-type-organization
   - Target: xananode.canonical:schema/node-subtype-organization-standards_body
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

707. xananode.canonical:rel/schema-node-type-organization-contains-schema-node-subtype-organization-university
   - Type: contains
   - Source: xananode.canonical:schema/node-type-organization
   - Target: xananode.canonical:schema/node-subtype-organization-university
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

708. xananode.canonical:rel/schema-node-type-person-contains-schema-node-subtype-person-artist
   - Type: contains
   - Source: xananode.canonical:schema/node-type-person
   - Target: xananode.canonical:schema/node-subtype-person-artist
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

709. xananode.canonical:rel/schema-node-type-person-contains-schema-node-subtype-person-critic
   - Type: contains
   - Source: xananode.canonical:schema/node-type-person
   - Target: xananode.canonical:schema/node-subtype-person-critic
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

710. xananode.canonical:rel/schema-node-type-person-contains-schema-node-subtype-person-engineer
   - Type: contains
   - Source: xananode.canonical:schema/node-type-person
   - Target: xananode.canonical:schema/node-subtype-person-engineer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

711. xananode.canonical:rel/schema-node-type-person-contains-schema-node-subtype-person-founder
   - Type: contains
   - Source: xananode.canonical:schema/node-type-person
   - Target: xananode.canonical:schema/node-subtype-person-founder
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

712. xananode.canonical:rel/schema-node-type-person-contains-schema-node-subtype-person-programmer
   - Type: contains
   - Source: xananode.canonical:schema/node-type-person
   - Target: xananode.canonical:schema/node-subtype-person-programmer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

713. xananode.canonical:rel/schema-node-type-person-contains-schema-node-subtype-person-researcher
   - Type: contains
   - Source: xananode.canonical:schema/node-type-person
   - Target: xananode.canonical:schema/node-subtype-person-researcher
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

714. xananode.canonical:rel/schema-node-type-person-contains-schema-node-subtype-person-scientist
   - Type: contains
   - Source: xananode.canonical:schema/node-type-person
   - Target: xananode.canonical:schema/node-subtype-person-scientist
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

715. xananode.canonical:rel/schema-node-type-person-contains-schema-node-subtype-person-writer
   - Type: contains
   - Source: xananode.canonical:schema/node-type-person
   - Target: xananode.canonical:schema/node-subtype-person-writer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

716. xananode.canonical:rel/schema-node-type-place-contains-schema-node-subtype-place-building
   - Type: contains
   - Source: xananode.canonical:schema/node-type-place
   - Target: xananode.canonical:schema/node-subtype-place-building
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

717. xananode.canonical:rel/schema-node-type-place-contains-schema-node-subtype-place-city
   - Type: contains
   - Source: xananode.canonical:schema/node-type-place
   - Target: xananode.canonical:schema/node-subtype-place-city
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

718. xananode.canonical:rel/schema-node-type-place-contains-schema-node-subtype-place-country
   - Type: contains
   - Source: xananode.canonical:schema/node-type-place
   - Target: xananode.canonical:schema/node-subtype-place-country
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

719. xananode.canonical:rel/schema-node-type-place-contains-schema-node-subtype-place-institution_site
   - Type: contains
   - Source: xananode.canonical:schema/node-type-place
   - Target: xananode.canonical:schema/node-subtype-place-institution_site
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

720. xananode.canonical:rel/schema-node-type-place-contains-schema-node-subtype-place-lab
   - Type: contains
   - Source: xananode.canonical:schema/node-type-place
   - Target: xananode.canonical:schema/node-subtype-place-lab
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

721. xananode.canonical:rel/schema-node-type-place-contains-schema-node-subtype-place-online_space
   - Type: contains
   - Source: xananode.canonical:schema/node-type-place
   - Target: xananode.canonical:schema/node-subtype-place-online_space
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

722. xananode.canonical:rel/schema-node-type-place-contains-schema-node-subtype-place-region
   - Type: contains
   - Source: xananode.canonical:schema/node-type-place
   - Target: xananode.canonical:schema/node-subtype-place-region
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

723. xananode.canonical:rel/schema-node-type-problem-contains-schema-node-subtype-problem-design_problem
   - Type: contains
   - Source: xananode.canonical:schema/node-type-problem
   - Target: xananode.canonical:schema/node-subtype-problem-design_problem
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

724. xananode.canonical:rel/schema-node-type-problem-contains-schema-node-subtype-problem-failure_mode
   - Type: contains
   - Source: xananode.canonical:schema/node-type-problem
   - Target: xananode.canonical:schema/node-subtype-problem-failure_mode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

725. xananode.canonical:rel/schema-node-type-problem-contains-schema-node-subtype-problem-governance_problem
   - Type: contains
   - Source: xananode.canonical:schema/node-type-problem
   - Target: xananode.canonical:schema/node-subtype-problem-governance_problem
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

726. xananode.canonical:rel/schema-node-type-problem-contains-schema-node-subtype-problem-implementation_problem
   - Type: contains
   - Source: xananode.canonical:schema/node-type-problem
   - Target: xananode.canonical:schema/node-subtype-problem-implementation_problem
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

727. xananode.canonical:rel/schema-node-type-problem-contains-schema-node-subtype-problem-research_problem
   - Type: contains
   - Source: xananode.canonical:schema/node-type-problem
   - Target: xananode.canonical:schema/node-subtype-problem-research_problem
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

728. xananode.canonical:rel/schema-node-type-problem-contains-schema-node-subtype-problem-risk
   - Type: contains
   - Source: xananode.canonical:schema/node-type-problem
   - Target: xananode.canonical:schema/node-subtype-problem-risk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

729. xananode.canonical:rel/schema-node-type-project-contains-schema-node-subtype-project-fictional_system
   - Type: contains
   - Source: xananode.canonical:schema/node-type-project
   - Target: xananode.canonical:schema/node-subtype-project-fictional_system
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

730. xananode.canonical:rel/schema-node-type-project-contains-schema-node-subtype-project-platform
   - Type: contains
   - Source: xananode.canonical:schema/node-type-project
   - Target: xananode.canonical:schema/node-subtype-project-platform
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

731. xananode.canonical:rel/schema-node-type-project-contains-schema-node-subtype-project-prototype
   - Type: contains
   - Source: xananode.canonical:schema/node-type-project
   - Target: xananode.canonical:schema/node-subtype-project-prototype
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

732. xananode.canonical:rel/schema-node-type-project-contains-schema-node-subtype-project-research_project
   - Type: contains
   - Source: xananode.canonical:schema/node-type-project
   - Target: xananode.canonical:schema/node-subtype-project-research_project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

733. xananode.canonical:rel/schema-node-type-project-contains-schema-node-subtype-project-software
   - Type: contains
   - Source: xananode.canonical:schema/node-type-project
   - Target: xananode.canonical:schema/node-subtype-project-software
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

734. xananode.canonical:rel/schema-node-type-project-contains-schema-node-subtype-project-standard
   - Type: contains
   - Source: xananode.canonical:schema/node-type-project
   - Target: xananode.canonical:schema/node-subtype-project-standard
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

735. xananode.canonical:rel/schema-node-type-publication-contains-schema-node-subtype-publication-article
   - Type: contains
   - Source: xananode.canonical:schema/node-type-publication
   - Target: xananode.canonical:schema/node-subtype-publication-article
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

736. xananode.canonical:rel/schema-node-type-publication-contains-schema-node-subtype-publication-book
   - Type: contains
   - Source: xananode.canonical:schema/node-type-publication
   - Target: xananode.canonical:schema/node-subtype-publication-book
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

737. xananode.canonical:rel/schema-node-type-publication-contains-schema-node-subtype-publication-episode
   - Type: contains
   - Source: xananode.canonical:schema/node-type-publication
   - Target: xananode.canonical:schema/node-subtype-publication-episode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

738. xananode.canonical:rel/schema-node-type-publication-contains-schema-node-subtype-publication-film
   - Type: contains
   - Source: xananode.canonical:schema/node-type-publication
   - Target: xananode.canonical:schema/node-subtype-publication-film
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

739. xananode.canonical:rel/schema-node-type-publication-contains-schema-node-subtype-publication-paper
   - Type: contains
   - Source: xananode.canonical:schema/node-type-publication
   - Target: xananode.canonical:schema/node-subtype-publication-paper
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

740. xananode.canonical:rel/schema-node-type-publication-contains-schema-node-subtype-publication-podcast
   - Type: contains
   - Source: xananode.canonical:schema/node-type-publication
   - Target: xananode.canonical:schema/node-subtype-publication-podcast
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

741. xananode.canonical:rel/schema-node-type-publication-contains-schema-node-subtype-publication-talk
   - Type: contains
   - Source: xananode.canonical:schema/node-type-publication
   - Target: xananode.canonical:schema/node-subtype-publication-talk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

742. xananode.canonical:rel/schema-node-type-publication-contains-schema-node-subtype-publication-webpage
   - Type: contains
   - Source: xananode.canonical:schema/node-type-publication
   - Target: xananode.canonical:schema/node-subtype-publication-webpage
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

743. xananode.canonical:rel/schema-node-type-question-contains-schema-node-subtype-question-design_question
   - Type: contains
   - Source: xananode.canonical:schema/node-type-question
   - Target: xananode.canonical:schema/node-subtype-question-design_question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

744. xananode.canonical:rel/schema-node-type-question-contains-schema-node-subtype-question-diagnostic_question
   - Type: contains
   - Source: xananode.canonical:schema/node-type-question
   - Target: xananode.canonical:schema/node-subtype-question-diagnostic_question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

745. xananode.canonical:rel/schema-node-type-question-contains-schema-node-subtype-question-historical_question
   - Type: contains
   - Source: xananode.canonical:schema/node-type-question
   - Target: xananode.canonical:schema/node-subtype-question-historical_question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

746. xananode.canonical:rel/schema-node-type-question-contains-schema-node-subtype-question-open_question
   - Type: contains
   - Source: xananode.canonical:schema/node-type-question
   - Target: xananode.canonical:schema/node-subtype-question-open_question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

747. xananode.canonical:rel/schema-node-type-question-contains-schema-node-subtype-question-prediction_question
   - Type: contains
   - Source: xananode.canonical:schema/node-type-question
   - Target: xananode.canonical:schema/node-subtype-question-prediction_question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

748. xananode.canonical:rel/schema-node-type-question-contains-schema-node-subtype-question-research_question
   - Type: contains
   - Source: xananode.canonical:schema/node-type-question
   - Target: xananode.canonical:schema/node-subtype-question-research_question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

749. xananode.canonical:rel/schema-node-type-relationship-contains-schema-node-subtype-relationship-citation
   - Type: contains
   - Source: xananode.canonical:schema/node-type-relationship
   - Target: xananode.canonical:schema/node-subtype-relationship-citation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

750. xananode.canonical:rel/schema-node-type-relationship-contains-schema-node-subtype-relationship-collaboration
   - Type: contains
   - Source: xananode.canonical:schema/node-type-relationship
   - Target: xananode.canonical:schema/node-subtype-relationship-collaboration
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

751. xananode.canonical:rel/schema-node-type-relationship-contains-schema-node-subtype-relationship-dependency
   - Type: contains
   - Source: xananode.canonical:schema/node-type-relationship
   - Target: xananode.canonical:schema/node-subtype-relationship-dependency
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

752. xananode.canonical:rel/schema-node-type-relationship-contains-schema-node-subtype-relationship-dispute
   - Type: contains
   - Source: xananode.canonical:schema/node-type-relationship
   - Target: xananode.canonical:schema/node-subtype-relationship-dispute
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

753. xananode.canonical:rel/schema-node-type-relationship-contains-schema-node-subtype-relationship-friendship
   - Type: contains
   - Source: xananode.canonical:schema/node-type-relationship
   - Target: xananode.canonical:schema/node-subtype-relationship-friendship
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

754. xananode.canonical:rel/schema-node-type-relationship-contains-schema-node-subtype-relationship-influence
   - Type: contains
   - Source: xananode.canonical:schema/node-type-relationship
   - Target: xananode.canonical:schema/node-subtype-relationship-influence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

755. xananode.canonical:rel/schema-node-type-relationship-contains-schema-node-subtype-relationship-lineage
   - Type: contains
   - Source: xananode.canonical:schema/node-type-relationship
   - Target: xananode.canonical:schema/node-subtype-relationship-lineage
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

756. xananode.canonical:rel/schema-node-type-response-contains-schema-node-subtype-response-answer
   - Type: contains
   - Source: xananode.canonical:schema/node-type-response
   - Target: xananode.canonical:schema/node-subtype-response-answer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

757. xananode.canonical:rel/schema-node-type-response-contains-schema-node-subtype-response-clarification
   - Type: contains
   - Source: xananode.canonical:schema/node-type-response
   - Target: xananode.canonical:schema/node-subtype-response-clarification
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

758. xananode.canonical:rel/schema-node-type-response-contains-schema-node-subtype-response-comment
   - Type: contains
   - Source: xananode.canonical:schema/node-type-response
   - Target: xananode.canonical:schema/node-subtype-response-comment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

759. xananode.canonical:rel/schema-node-type-response-contains-schema-node-subtype-response-follow_up
   - Type: contains
   - Source: xananode.canonical:schema/node-type-response
   - Target: xananode.canonical:schema/node-subtype-response-follow_up
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

760. xananode.canonical:rel/schema-node-type-response-contains-schema-node-subtype-response-rebuttal
   - Type: contains
   - Source: xananode.canonical:schema/node-type-response
   - Target: xananode.canonical:schema/node-subtype-response-rebuttal
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

761. xananode.canonical:rel/schema-node-type-response-contains-schema-node-subtype-response-reply
   - Type: contains
   - Source: xananode.canonical:schema/node-type-response
   - Target: xananode.canonical:schema/node-subtype-response-reply
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

762. xananode.canonical:rel/schema-node-type-response-contains-schema-node-subtype-response-review_response
   - Type: contains
   - Source: xananode.canonical:schema/node-type-response
   - Target: xananode.canonical:schema/node-subtype-response-review_response
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

763. xananode.canonical:rel/schema-node-type-revision-contains-schema-node-subtype-revision-claim_revision
   - Type: contains
   - Source: xananode.canonical:schema/node-type-revision
   - Target: xananode.canonical:schema/node-subtype-revision-claim_revision
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

764. xananode.canonical:rel/schema-node-type-revision-contains-schema-node-subtype-revision-media_revision
   - Type: contains
   - Source: xananode.canonical:schema/node-type-revision
   - Target: xananode.canonical:schema/node-subtype-revision-media_revision
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

765. xananode.canonical:rel/schema-node-type-revision-contains-schema-node-subtype-revision-node_revision
   - Type: contains
   - Source: xananode.canonical:schema/node-type-revision
   - Target: xananode.canonical:schema/node-subtype-revision-node_revision
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

766. xananode.canonical:rel/schema-node-type-revision-contains-schema-node-subtype-revision-relationship_revision
   - Type: contains
   - Source: xananode.canonical:schema/node-type-revision
   - Target: xananode.canonical:schema/node-subtype-revision-relationship_revision
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

767. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-canonical_schema_record
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-canonical_schema_record
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

768. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-governance_rule
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-governance_rule
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

769. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-namespace_record
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-namespace_record
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

770. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-node_subtype_schema
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-node_subtype_schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

771. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-node_type_schema
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-node_type_schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

772. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-projection_style_rule
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-projection_style_rule
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

773. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-property_registry_entry
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-property_registry_entry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

774. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-protocol_artifact
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-protocol_artifact
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

775. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-relationship_category_schema
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-relationship_category_schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

776. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-relationship_type_schema
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-relationship_type_schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

777. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-schema_field
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-schema_field
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

778. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-schema_term
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-schema_term
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

779. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-semantic_rule
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-semantic_rule
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

780. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-style_rule
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-style_rule
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

781. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-term
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-term
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

782. xananode.canonical:rel/schema-node-type-schema-contains-schema-node-subtype-schema-validation_rule
   - Type: contains
   - Source: xananode.canonical:schema/node-type-schema
   - Target: xananode.canonical:schema/node-subtype-schema-validation_rule
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

783. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-archive
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-archive
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

784. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-article
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-article
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

785. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-book
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-book
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

786. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-dataset
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-dataset
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

787. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-documentation
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-documentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

788. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-git_repository
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-git_repository
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

789. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-interview
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-interview
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

790. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-legal_policy
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-legal_policy
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

791. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-license
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

792. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-notice
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-notice
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

793. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-official_site
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-official_site
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

794. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-paper
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-paper
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

795. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-social_profile
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-social_profile
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

796. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-support_page
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-support_page
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

797. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-talk
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-talk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

798. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-trademark_policy
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-trademark_policy
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

799. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-transcript
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-transcript
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

800. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-web_snapshot
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-web_snapshot
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

801. xananode.canonical:rel/schema-node-type-source-contains-schema-node-subtype-source-website
   - Type: contains
   - Source: xananode.canonical:schema/node-type-source
   - Target: xananode.canonical:schema/node-subtype-source-website
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

802. xananode.canonical:rel/schema-node-type-technology-contains-schema-node-subtype-technology-algorithm
   - Type: contains
   - Source: xananode.canonical:schema/node-type-technology
   - Target: xananode.canonical:schema/node-subtype-technology-algorithm
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

803. xananode.canonical:rel/schema-node-type-technology-contains-schema-node-subtype-technology-architecture
   - Type: contains
   - Source: xananode.canonical:schema/node-type-technology
   - Target: xananode.canonical:schema/node-subtype-technology-architecture
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

804. xananode.canonical:rel/schema-node-type-technology-contains-schema-node-subtype-technology-format
   - Type: contains
   - Source: xananode.canonical:schema/node-type-technology
   - Target: xananode.canonical:schema/node-subtype-technology-format
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

805. xananode.canonical:rel/schema-node-type-technology-contains-schema-node-subtype-technology-language
   - Type: contains
   - Source: xananode.canonical:schema/node-type-technology
   - Target: xananode.canonical:schema/node-subtype-technology-language
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

806. xananode.canonical:rel/schema-node-type-technology-contains-schema-node-subtype-technology-model
   - Type: contains
   - Source: xananode.canonical:schema/node-type-technology
   - Target: xananode.canonical:schema/node-subtype-technology-model
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

807. xananode.canonical:rel/schema-node-type-technology-contains-schema-node-subtype-technology-platform
   - Type: contains
   - Source: xananode.canonical:schema/node-type-technology
   - Target: xananode.canonical:schema/node-subtype-technology-platform
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

808. xananode.canonical:rel/schema-node-type-technology-contains-schema-node-subtype-technology-protocol
   - Type: contains
   - Source: xananode.canonical:schema/node-type-technology
   - Target: xananode.canonical:schema/node-subtype-technology-protocol
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

809. xananode.canonical:rel/schema-node-type-technology-contains-schema-node-subtype-technology-tool
   - Type: contains
   - Source: xananode.canonical:schema/node-type-technology
   - Target: xananode.canonical:schema/node-subtype-technology-tool
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

810. xananode.canonical:rel/schema-node-type-trail-contains-schema-node-subtype-trail-argument
   - Type: contains
   - Source: xananode.canonical:schema/node-type-trail
   - Target: xananode.canonical:schema/node-subtype-trail-argument
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

811. xananode.canonical:rel/schema-node-type-trail-contains-schema-node-subtype-trail-dispute_path
   - Type: contains
   - Source: xananode.canonical:schema/node-type-trail
   - Target: xananode.canonical:schema/node-subtype-trail-dispute_path
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

812. xananode.canonical:rel/schema-node-type-trail-contains-schema-node-subtype-trail-evidence_path
   - Type: contains
   - Source: xananode.canonical:schema/node-type-trail
   - Target: xananode.canonical:schema/node-subtype-trail-evidence_path
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

813. xananode.canonical:rel/schema-node-type-trail-contains-schema-node-subtype-trail-historical
   - Type: contains
   - Source: xananode.canonical:schema/node-type-trail
   - Target: xananode.canonical:schema/node-subtype-trail-historical
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

814. xananode.canonical:rel/schema-node-type-trail-contains-schema-node-subtype-trail-introductory
   - Type: contains
   - Source: xananode.canonical:schema/node-type-trail
   - Target: xananode.canonical:schema/node-subtype-trail-introductory
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

815. xananode.canonical:rel/schema-node-type-trail-contains-schema-node-subtype-trail-teaching_path
   - Type: contains
   - Source: xananode.canonical:schema/node-type-trail
   - Target: xananode.canonical:schema/node-subtype-trail-teaching_path
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

816. xananode.canonical:rel/schema-property-birth_date-uses-schema-node-type-organization
   - Type: uses
   - Source: xananode.canonical:schema/property-birth_date
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

817. xananode.canonical:rel/schema-property-birth_date-uses-schema-node-type-person
   - Type: uses
   - Source: xananode.canonical:schema/property-birth_date
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

818. xananode.canonical:rel/schema-property-birth_date-uses-schema-node-type-project
   - Type: uses
   - Source: xananode.canonical:schema/property-birth_date
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

819. xananode.canonical:rel/schema-property-currency_value-uses-schema-node-type-claim
   - Type: uses
   - Source: xananode.canonical:schema/property-currency_value
   - Target: xananode.canonical:schema/node-type-claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

820. xananode.canonical:rel/schema-property-currency_value-uses-schema-node-type-observation
   - Type: uses
   - Source: xananode.canonical:schema/property-currency_value
   - Target: xananode.canonical:schema/node-type-observation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

821. xananode.canonical:rel/schema-property-currency_value-uses-schema-node-type-project
   - Type: uses
   - Source: xananode.canonical:schema/property-currency_value
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

822. xananode.canonical:rel/schema-property-currency_value-uses-schema-node-type-source
   - Type: uses
   - Source: xananode.canonical:schema/property-currency_value
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

823. xananode.canonical:rel/schema-property-geo_coordinates-uses-schema-node-type-event
   - Type: uses
   - Source: xananode.canonical:schema/property-geo_coordinates
   - Target: xananode.canonical:schema/node-type-event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

824. xananode.canonical:rel/schema-property-geo_coordinates-uses-schema-node-type-media
   - Type: uses
   - Source: xananode.canonical:schema/property-geo_coordinates
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

825. xananode.canonical:rel/schema-property-geo_coordinates-uses-schema-node-type-organization
   - Type: uses
   - Source: xananode.canonical:schema/property-geo_coordinates
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

826. xananode.canonical:rel/schema-property-geo_coordinates-uses-schema-node-type-place
   - Type: uses
   - Source: xananode.canonical:schema/property-geo_coordinates
   - Target: xananode.canonical:schema/node-type-place
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

827. xananode.canonical:rel/schema-property-geo_coordinates-uses-schema-node-type-source
   - Type: uses
   - Source: xananode.canonical:schema/property-geo_coordinates
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

828. xananode.canonical:rel/schema-property-registry-contains-schema-property-birth_date
   - Type: contains
   - Source: xananode.canonical:schema/property-registry
   - Target: xananode.canonical:schema/property-birth_date
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

829. xananode.canonical:rel/schema-property-registry-contains-schema-property-currency_value
   - Type: contains
   - Source: xananode.canonical:schema/property-registry
   - Target: xananode.canonical:schema/property-currency_value
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

830. xananode.canonical:rel/schema-property-registry-contains-schema-property-external_identifier
   - Type: contains
   - Source: xananode.canonical:schema/property-registry
   - Target: xananode.canonical:schema/property-external_identifier
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

831. xananode.canonical:rel/schema-property-registry-contains-schema-property-geo_coordinates
   - Type: contains
   - Source: xananode.canonical:schema/property-registry
   - Target: xananode.canonical:schema/property-geo_coordinates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

832. xananode.canonical:rel/schema-property-registry-contains-schema-property-measurement_si
   - Type: contains
   - Source: xananode.canonical:schema/property-registry
   - Target: xananode.canonical:schema/property-measurement_si
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

833. xananode.canonical:rel/schema-relationship-category-attention-contains-schema-relationship-type-critical_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-attention
   - Target: xananode.canonical:schema/relationship-type-critical_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

834. xananode.canonical:rel/schema-relationship-category-attention-contains-schema-relationship-type-critically_depends_on
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-attention
   - Target: xananode.canonical:schema/relationship-type-critically_depends_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

835. xananode.canonical:rel/schema-relationship-category-attention-contains-schema-relationship-type-frequently_misunderstood
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-attention
   - Target: xananode.canonical:schema/relationship-type-frequently_misunderstood
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

836. xananode.canonical:rel/schema-relationship-category-attention-contains-schema-relationship-type-has_high_risk
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-attention
   - Target: xananode.canonical:schema/relationship-type-has_high_risk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

837. xananode.canonical:rel/schema-relationship-category-attention-contains-schema-relationship-type-has_important_context
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-attention
   - Target: xananode.canonical:schema/relationship-type-has_important_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

838. xananode.canonical:rel/schema-relationship-category-attention-contains-schema-relationship-type-high_risk_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-attention
   - Target: xananode.canonical:schema/relationship-type-high_risk_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

839. xananode.canonical:rel/schema-relationship-category-attention-contains-schema-relationship-type-important_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-attention
   - Target: xananode.canonical:schema/relationship-type-important_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

840. xananode.canonical:rel/schema-relationship-category-attention-contains-schema-relationship-type-misunderstanding_context_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-attention
   - Target: xananode.canonical:schema/relationship-type-misunderstanding_context_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

841. xananode.canonical:rel/schema-relationship-category-attention-contains-schema-relationship-type-overlooked_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-attention
   - Target: xananode.canonical:schema/relationship-type-overlooked_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

842. xananode.canonical:rel/schema-relationship-category-attention-contains-schema-relationship-type-overlooks
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-attention
   - Target: xananode.canonical:schema/relationship-type-overlooks
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

843. xananode.canonical:rel/schema-relationship-category-causation-contains-schema-relationship-type-generated
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-causation
   - Target: xananode.canonical:schema/relationship-type-generated
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

844. xananode.canonical:rel/schema-relationship-category-causation-contains-schema-relationship-type-generated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-causation
   - Target: xananode.canonical:schema/relationship-type-generated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

845. xananode.canonical:rel/schema-relationship-category-causation-contains-schema-relationship-type-motivated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-causation
   - Target: xananode.canonical:schema/relationship-type-motivated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

846. xananode.canonical:rel/schema-relationship-category-causation-contains-schema-relationship-type-motivates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-causation
   - Target: xananode.canonical:schema/relationship-type-motivates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

847. xananode.canonical:rel/schema-relationship-category-causation-contains-schema-relationship-type-produces
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-causation
   - Target: xananode.canonical:schema/relationship-type-produces
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

848. xananode.canonical:rel/schema-relationship-category-causation-contains-schema-relationship-type-results_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-causation
   - Target: xananode.canonical:schema/relationship-type-results_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

849. xananode.canonical:rel/schema-relationship-category-citation-contains-schema-relationship-type-cited_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-citation
   - Target: xananode.canonical:schema/relationship-type-cited_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

850. xananode.canonical:rel/schema-relationship-category-citation-contains-schema-relationship-type-cites
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-citation
   - Target: xananode.canonical:schema/relationship-type-cites
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

851. xananode.canonical:rel/schema-relationship-category-citation-contains-schema-relationship-type-discussed_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-citation
   - Target: xananode.canonical:schema/relationship-type-discussed_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

852. xananode.canonical:rel/schema-relationship-category-citation-contains-schema-relationship-type-discusses
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-citation
   - Target: xananode.canonical:schema/relationship-type-discusses
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

853. xananode.canonical:rel/schema-relationship-category-citation-contains-schema-relationship-type-mentioned_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-citation
   - Target: xananode.canonical:schema/relationship-type-mentioned_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

854. xananode.canonical:rel/schema-relationship-category-citation-contains-schema-relationship-type-mentions
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-citation
   - Target: xananode.canonical:schema/relationship-type-mentions
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

855. xananode.canonical:rel/schema-relationship-category-citation-contains-schema-relationship-type-quoted_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-citation
   - Target: xananode.canonical:schema/relationship-type-quoted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

856. xananode.canonical:rel/schema-relationship-category-citation-contains-schema-relationship-type-quotes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-citation
   - Target: xananode.canonical:schema/relationship-type-quotes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

857. xananode.canonical:rel/schema-relationship-category-claim_structure-contains-schema-relationship-type-claim_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-claim_structure
   - Target: xananode.canonical:schema/relationship-type-claim_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

858. xananode.canonical:rel/schema-relationship-category-claim_structure-contains-schema-relationship-type-has_claim
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-claim_structure
   - Target: xananode.canonical:schema/relationship-type-has_claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

859. xananode.canonical:rel/schema-relationship-category-cognition-contains-schema-relationship-type-abstraction_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-cognition
   - Target: xananode.canonical:schema/relationship-type-abstraction_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

860. xananode.canonical:rel/schema-relationship-category-cognition-contains-schema-relationship-type-analogous_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-cognition
   - Target: xananode.canonical:schema/relationship-type-analogous_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

861. xananode.canonical:rel/schema-relationship-category-cognition-contains-schema-relationship-type-concrete_example_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-cognition
   - Target: xananode.canonical:schema/relationship-type-concrete_example_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

862. xananode.canonical:rel/schema-relationship-category-cognition-contains-schema-relationship-type-example_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-cognition
   - Target: xananode.canonical:schema/relationship-type-example_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

863. xananode.canonical:rel/schema-relationship-category-cognition-contains-schema-relationship-type-generalized_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-cognition
   - Target: xananode.canonical:schema/relationship-type-generalized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

864. xananode.canonical:rel/schema-relationship-category-cognition-contains-schema-relationship-type-generalizes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-cognition
   - Target: xananode.canonical:schema/relationship-type-generalizes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

865. xananode.canonical:rel/schema-relationship-category-cognition-contains-schema-relationship-type-has_example
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-cognition
   - Target: xananode.canonical:schema/relationship-type-has_example
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

866. xananode.canonical:rel/schema-relationship-category-cognition-contains-schema-relationship-type-resonates_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-cognition
   - Target: xananode.canonical:schema/relationship-type-resonates_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

867. xananode.canonical:rel/schema-relationship-category-cognition-contains-schema-relationship-type-specialized_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-cognition
   - Target: xananode.canonical:schema/relationship-type-specialized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

868. xananode.canonical:rel/schema-relationship-category-cognition-contains-schema-relationship-type-specializes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-cognition
   - Target: xananode.canonical:schema/relationship-type-specializes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

869. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-announced
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-announced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

870. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-announced_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-announced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

871. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-answered_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-answered_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

872. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-asked
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-asked
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

873. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-asked_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-asked_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

874. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-asked_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-asked_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

875. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-broadcast_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-broadcast_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

876. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-communicated_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-communicated_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

877. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-communication_received_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-communication_received_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

878. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-debated_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-debated_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

879. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-discussed_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-discussed_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

880. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-discussion_partner_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-discussion_partner_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

881. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-had_answer
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-had_answer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

882. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-had_question
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-had_question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

883. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-negotiated_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-negotiated_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

884. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-presentation_received_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-presentation_received_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

885. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-presented_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-presented_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

886. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-received_broadcast_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-received_broadcast_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

887. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-received_report_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-received_report_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

888. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-replied_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-replied_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

889. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-replied_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-replied_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

890. xananode.canonical:rel/schema-relationship-category-communication-contains-schema-relationship-type-reported_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-communication
   - Target: xananode.canonical:schema/relationship-type-reported_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

891. xananode.canonical:rel/schema-relationship-category-comparison-contains-schema-relationship-type-alternative_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-comparison
   - Target: xananode.canonical:schema/relationship-type-alternative_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

892. xananode.canonical:rel/schema-relationship-category-comparison-contains-schema-relationship-type-contrasts_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-comparison
   - Target: xananode.canonical:schema/relationship-type-contrasts_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

893. xananode.canonical:rel/schema-relationship-category-comparison-contains-schema-relationship-type-equivalent_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-comparison
   - Target: xananode.canonical:schema/relationship-type-equivalent_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

894. xananode.canonical:rel/schema-relationship-category-comparison-contains-schema-relationship-type-parallel_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-comparison
   - Target: xananode.canonical:schema/relationship-type-parallel_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

895. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-contains
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-contains
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

896. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-dependency_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-dependency_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

897. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-depends_on
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-depends_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

898. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-enabled_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-enabled_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

899. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-enables
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-enables
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

900. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-implemented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-implemented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

901. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-implements
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-implements
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

902. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-included_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-included_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

903. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-includes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-includes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

904. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-part_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-part_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

905. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-preserved_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-preserved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

906. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-preserves
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-preserves
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

907. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-required_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-required_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

908. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-requires
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-requires
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

909. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-trained_on
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-trained_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

910. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-used_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-used_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

911. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-used_to_train
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-used_to_train
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

912. xananode.canonical:rel/schema-relationship-category-composition-contains-schema-relationship-type-uses
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-composition
   - Target: xananode.canonical:schema/relationship-type-uses
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

913. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-authored
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-authored
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

914. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-authored_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-authored_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

915. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-coined
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-coined
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

916. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-coined_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-coined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

917. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-created
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-created
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

918. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-created_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-created_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

919. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-identified
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-identified
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

920. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-identified_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-identified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

921. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-introduced
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-introduced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

922. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-introduced_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-introduced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

923. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-proposed
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-proposed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

924. xananode.canonical:rel/schema-relationship-category-creation-contains-schema-relationship-type-proposed_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-creation
   - Target: xananode.canonical:schema/relationship-type-proposed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

925. xananode.canonical:rel/schema-relationship-category-definition-contains-schema-relationship-type-defined_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-definition
   - Target: xananode.canonical:schema/relationship-type-defined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

926. xananode.canonical:rel/schema-relationship-category-definition-contains-schema-relationship-type-defines
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-definition
   - Target: xananode.canonical:schema/relationship-type-defines
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

927. xananode.canonical:rel/schema-relationship-category-discovery-contains-schema-relationship-type-possibly_related_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-discovery
   - Target: xananode.canonical:schema/relationship-type-possibly_related_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

928. xananode.canonical:rel/schema-relationship-category-discovery-contains-schema-relationship-type-shares_pattern_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-discovery
   - Target: xananode.canonical:schema/relationship-type-shares_pattern_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

929. xananode.canonical:rel/schema-relationship-category-evidence-contains-schema-relationship-type-contradicted_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-evidence
   - Target: xananode.canonical:schema/relationship-type-contradicted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

930. xananode.canonical:rel/schema-relationship-category-evidence-contains-schema-relationship-type-contradicts
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-evidence
   - Target: xananode.canonical:schema/relationship-type-contradicts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

931. xananode.canonical:rel/schema-relationship-category-evidence-contains-schema-relationship-type-demonstrated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-evidence
   - Target: xananode.canonical:schema/relationship-type-demonstrated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

932. xananode.canonical:rel/schema-relationship-category-evidence-contains-schema-relationship-type-demonstrates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-evidence
   - Target: xananode.canonical:schema/relationship-type-demonstrates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

933. xananode.canonical:rel/schema-relationship-category-evidence-contains-schema-relationship-type-documented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-evidence
   - Target: xananode.canonical:schema/relationship-type-documented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

934. xananode.canonical:rel/schema-relationship-category-evidence-contains-schema-relationship-type-documents
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-evidence
   - Target: xananode.canonical:schema/relationship-type-documents
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

935. xananode.canonical:rel/schema-relationship-category-evidence-contains-schema-relationship-type-evidence_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-evidence
   - Target: xananode.canonical:schema/relationship-type-evidence_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

936. xananode.canonical:rel/schema-relationship-category-evidence-contains-schema-relationship-type-has_evidence
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-evidence
   - Target: xananode.canonical:schema/relationship-type-has_evidence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

937. xananode.canonical:rel/schema-relationship-category-evidence-contains-schema-relationship-type-supported_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-evidence
   - Target: xananode.canonical:schema/relationship-type-supported_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

938. xananode.canonical:rel/schema-relationship-category-evidence-contains-schema-relationship-type-supports
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-evidence
   - Target: xananode.canonical:schema/relationship-type-supports
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

939. xananode.canonical:rel/schema-relationship-category-explanation-contains-schema-relationship-type-clarified_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-explanation
   - Target: xananode.canonical:schema/relationship-type-clarified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

940. xananode.canonical:rel/schema-relationship-category-explanation-contains-schema-relationship-type-clarifies
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-explanation
   - Target: xananode.canonical:schema/relationship-type-clarifies
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

941. xananode.canonical:rel/schema-relationship-category-explanation-contains-schema-relationship-type-context_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-explanation
   - Target: xananode.canonical:schema/relationship-type-context_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

942. xananode.canonical:rel/schema-relationship-category-explanation-contains-schema-relationship-type-explained_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-explanation
   - Target: xananode.canonical:schema/relationship-type-explained_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

943. xananode.canonical:rel/schema-relationship-category-explanation-contains-schema-relationship-type-explains
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-explanation
   - Target: xananode.canonical:schema/relationship-type-explains
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

944. xananode.canonical:rel/schema-relationship-category-explanation-contains-schema-relationship-type-has_context
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-explanation
   - Target: xananode.canonical:schema/relationship-type-has_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

945. xananode.canonical:rel/schema-relationship-category-generic-contains-schema-relationship-type-related_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-generic
   - Target: xananode.canonical:schema/relationship-type-related_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

946. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-approved
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-approved
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

947. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-approved_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-approved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

948. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-attribution_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-attribution_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

949. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-disputed_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-disputed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

950. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-disputes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-disputes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

951. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-governed_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-governed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

952. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-governs
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-governs
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

953. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-license_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-license_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

954. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-licensed_under
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-licensed_under
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

955. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-requires_attribution
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-requires_attribution
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

956. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-threatened_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-threatened_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

957. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-threatens
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-threatens
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

958. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-trademark_holder_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-trademark_holder_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

959. xananode.canonical:rel/schema-relationship-category-governance-contains-schema-relationship-type-trademarked_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-governance
   - Target: xananode.canonical:schema/relationship-type-trademarked_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

960. xananode.canonical:rel/schema-relationship-category-historical-contains-schema-relationship-type-anticipates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-historical
   - Target: xananode.canonical:schema/relationship-type-anticipates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

961. xananode.canonical:rel/schema-relationship-category-identity-contains-schema-relationship-type-disputed_identity
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-identity
   - Target: xananode.canonical:schema/relationship-type-disputed_identity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

962. xananode.canonical:rel/schema-relationship-category-identity-contains-schema-relationship-type-possible_match
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-identity
   - Target: xananode.canonical:schema/relationship-type-possible_match
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

963. xananode.canonical:rel/schema-relationship-category-identity-contains-schema-relationship-type-same_concept
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-identity
   - Target: xananode.canonical:schema/relationship-type-same_concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

964. xananode.canonical:rel/schema-relationship-category-identity-contains-schema-relationship-type-same_entity
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-identity
   - Target: xananode.canonical:schema/relationship-type-same_entity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

965. xananode.canonical:rel/schema-relationship-category-identity-contains-schema-relationship-type-same_person
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-identity
   - Target: xananode.canonical:schema/relationship-type-same_person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

966. xananode.canonical:rel/schema-relationship-category-identity-contains-schema-relationship-type-same_source
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-identity
   - Target: xananode.canonical:schema/relationship-type-same_source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

967. xananode.canonical:rel/schema-relationship-category-influence-contains-schema-relationship-type-anticipated
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-influence
   - Target: xananode.canonical:schema/relationship-type-anticipated
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

968. xananode.canonical:rel/schema-relationship-category-influence-contains-schema-relationship-type-anticipated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-influence
   - Target: xananode.canonical:schema/relationship-type-anticipated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

969. xananode.canonical:rel/schema-relationship-category-influence-contains-schema-relationship-type-influenced
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-influence
   - Target: xananode.canonical:schema/relationship-type-influenced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

970. xananode.canonical:rel/schema-relationship-category-influence-contains-schema-relationship-type-influenced_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-influence
   - Target: xananode.canonical:schema/relationship-type-influenced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

971. xananode.canonical:rel/schema-relationship-category-influence-contains-schema-relationship-type-popularized
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-influence
   - Target: xananode.canonical:schema/relationship-type-popularized
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

972. xananode.canonical:rel/schema-relationship-category-influence-contains-schema-relationship-type-popularized_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-influence
   - Target: xananode.canonical:schema/relationship-type-popularized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

973. xananode.canonical:rel/schema-relationship-category-influence-contains-schema-relationship-type-shaped_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-influence
   - Target: xananode.canonical:schema/relationship-type-shaped_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

974. xananode.canonical:rel/schema-relationship-category-influence-contains-schema-relationship-type-shapes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-influence
   - Target: xananode.canonical:schema/relationship-type-shapes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

975. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-answered_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-answered_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

976. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-answers
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-answers
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

977. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-fails_to_answer
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-fails_to_answer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

978. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-inquiry_motivated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-inquiry_motivated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

979. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-investigated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-investigated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

980. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-investigates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-investigates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

981. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-motivates_inquiry
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-motivates_inquiry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

982. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-not_answered_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-not_answered_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

983. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-partially_answered_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-partially_answered_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

984. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-partially_answers
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-partially_answers
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

985. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-raised_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-raised_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

986. xananode.canonical:rel/schema-relationship-category-inquiry-contains-schema-relationship-type-raises
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-inquiry
   - Target: xananode.canonical:schema/relationship-type-raises
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

987. xananode.canonical:rel/schema-relationship-category-knowledge_workflow-contains-schema-relationship-type-context_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-knowledge_workflow
   - Target: xananode.canonical:schema/relationship-type-context_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

988. xananode.canonical:rel/schema-relationship-category-knowledge_workflow-contains-schema-relationship-type-information_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-knowledge_workflow
   - Target: xananode.canonical:schema/relationship-type-information_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

989. xananode.canonical:rel/schema-relationship-category-knowledge_workflow-contains-schema-relationship-type-requires_context
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-knowledge_workflow
   - Target: xananode.canonical:schema/relationship-type-requires_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

990. xananode.canonical:rel/schema-relationship-category-knowledge_workflow-contains-schema-relationship-type-requires_information
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-knowledge_workflow
   - Target: xananode.canonical:schema/relationship-type-requires_information
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

991. xananode.canonical:rel/schema-relationship-category-knowledge_workflow-contains-schema-relationship-type-requires_review
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-knowledge_workflow
   - Target: xananode.canonical:schema/relationship-type-requires_review
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

992. xananode.canonical:rel/schema-relationship-category-knowledge_workflow-contains-schema-relationship-type-requires_source
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-knowledge_workflow
   - Target: xananode.canonical:schema/relationship-type-requires_source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

993. xananode.canonical:rel/schema-relationship-category-knowledge_workflow-contains-schema-relationship-type-requires_validation
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-knowledge_workflow
   - Target: xananode.canonical:schema/relationship-type-requires_validation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

994. xananode.canonical:rel/schema-relationship-category-knowledge_workflow-contains-schema-relationship-type-review_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-knowledge_workflow
   - Target: xananode.canonical:schema/relationship-type-review_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

995. xananode.canonical:rel/schema-relationship-category-knowledge_workflow-contains-schema-relationship-type-source_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-knowledge_workflow
   - Target: xananode.canonical:schema/relationship-type-source_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

996. xananode.canonical:rel/schema-relationship-category-knowledge_workflow-contains-schema-relationship-type-validation_required_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-knowledge_workflow
   - Target: xananode.canonical:schema/relationship-type-validation_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

997. xananode.canonical:rel/schema-relationship-category-lineage-contains-schema-relationship-type-derived_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-lineage
   - Target: xananode.canonical:schema/relationship-type-derived_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

998. xananode.canonical:rel/schema-relationship-category-lineage-contains-schema-relationship-type-derived_into
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-lineage
   - Target: xananode.canonical:schema/relationship-type-derived_into
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

999. xananode.canonical:rel/schema-relationship-category-lineage-contains-schema-relationship-type-extended_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-lineage
   - Target: xananode.canonical:schema/relationship-type-extended_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1000. xananode.canonical:rel/schema-relationship-category-lineage-contains-schema-relationship-type-extends
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-lineage
   - Target: xananode.canonical:schema/relationship-type-extends
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1001. xananode.canonical:rel/schema-relationship-category-location-contains-schema-relationship-type-occurred_at
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-location
   - Target: xananode.canonical:schema/relationship-type-occurred_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1002. xananode.canonical:rel/schema-relationship-category-location-contains-schema-relationship-type-site_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-location
   - Target: xananode.canonical:schema/relationship-type-site_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1003. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-appears_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-appears_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1004. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-featured_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-featured_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1005. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-featured_speaker
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-featured_speaker
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1006. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-features
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-features
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1007. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-had_participant
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-had_participant
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1008. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-has_appearance
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-has_appearance
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1009. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-introduced_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-introduced_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1010. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-introduction_venue_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-introduction_venue_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1011. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-participated_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-participated_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1012. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-presented
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-presented
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1013. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-presented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-presented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1014. xananode.canonical:rel/schema-relationship-category-participation-contains-schema-relationship-type-spoke_at
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-participation
   - Target: xananode.canonical:schema/relationship-type-spoke_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1015. xananode.canonical:rel/schema-relationship-category-reasoning-contains-schema-relationship-type-arrived_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-reasoning
   - Target: xananode.canonical:schema/relationship-type-arrived_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1016. xananode.canonical:rel/schema-relationship-category-reasoning-contains-schema-relationship-type-arrives_at
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-reasoning
   - Target: xananode.canonical:schema/relationship-type-arrives_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1017. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-alias_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-alias_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1018. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-deep_linked_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-deep_linked_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1019. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-deep_links_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-deep_links_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1020. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-depicted_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-depicted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1021. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-depicts
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-depicts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1022. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-has_alias
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-has_alias
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1023. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-has_primary_media
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-has_primary_media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1024. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-represented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-represented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1025. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-represents
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-represents
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1026. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-transcluded_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-transcluded_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1027. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-transcludes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-transcludes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1028. xananode.canonical:rel/schema-relationship-category-representation-contains-schema-relationship-type-used_as_primary_media_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-representation
   - Target: xananode.canonical:schema/relationship-type-used_as_primary_media_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1029. xananode.canonical:rel/schema-relationship-category-research_workflow-contains-schema-relationship-type-falsified_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-research_workflow
   - Target: xananode.canonical:schema/relationship-type-falsified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1030. xananode.canonical:rel/schema-relationship-category-research_workflow-contains-schema-relationship-type-falsifies
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-research_workflow
   - Target: xananode.canonical:schema/relationship-type-falsifies
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1031. xananode.canonical:rel/schema-relationship-category-research_workflow-contains-schema-relationship-type-tested_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-research_workflow
   - Target: xananode.canonical:schema/relationship-type-tested_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1032. xananode.canonical:rel/schema-relationship-category-research_workflow-contains-schema-relationship-type-tests
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-research_workflow
   - Target: xananode.canonical:schema/relationship-type-tests
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1033. xananode.canonical:rel/schema-relationship-category-research_workflow-contains-schema-relationship-type-validated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-research_workflow
   - Target: xananode.canonical:schema/relationship-type-validated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1034. xananode.canonical:rel/schema-relationship-category-research_workflow-contains-schema-relationship-type-validates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-research_workflow
   - Target: xananode.canonical:schema/relationship-type-validates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1035. xananode.canonical:rel/schema-relationship-category-revision-contains-schema-relationship-type-refined_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-revision
   - Target: xananode.canonical:schema/relationship-type-refined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1036. xananode.canonical:rel/schema-relationship-category-revision-contains-schema-relationship-type-refines
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-revision
   - Target: xananode.canonical:schema/relationship-type-refines
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1037. xananode.canonical:rel/schema-relationship-category-revision-contains-schema-relationship-type-superseded_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-revision
   - Target: xananode.canonical:schema/relationship-type-superseded_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1038. xananode.canonical:rel/schema-relationship-category-revision-contains-schema-relationship-type-supersedes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-revision
   - Target: xananode.canonical:schema/relationship-type-supersedes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1039. xananode.canonical:rel/schema-relationship-category-schema_mapping-contains-schema-relationship-type-broader_than
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-schema_mapping
   - Target: xananode.canonical:schema/relationship-type-broader_than
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1040. xananode.canonical:rel/schema-relationship-category-schema_mapping-contains-schema-relationship-type-compatible_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-schema_mapping
   - Target: xananode.canonical:schema/relationship-type-compatible_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1041. xananode.canonical:rel/schema-relationship-category-schema_mapping-contains-schema-relationship-type-extension_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-schema_mapping
   - Target: xananode.canonical:schema/relationship-type-extension_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1042. xananode.canonical:rel/schema-relationship-category-schema_mapping-contains-schema-relationship-type-has_extension
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-schema_mapping
   - Target: xananode.canonical:schema/relationship-type-has_extension
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1043. xananode.canonical:rel/schema-relationship-category-schema_mapping-contains-schema-relationship-type-mapped_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-schema_mapping
   - Target: xananode.canonical:schema/relationship-type-mapped_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1044. xananode.canonical:rel/schema-relationship-category-schema_mapping-contains-schema-relationship-type-maps_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-schema_mapping
   - Target: xananode.canonical:schema/relationship-type-maps_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1045. xananode.canonical:rel/schema-relationship-category-schema_mapping-contains-schema-relationship-type-narrower_than
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-schema_mapping
   - Target: xananode.canonical:schema/relationship-type-narrower_than
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1046. xananode.canonical:rel/schema-relationship-category-social-contains-schema-relationship-type-collaborated_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-social
   - Target: xananode.canonical:schema/relationship-type-collaborated_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1047. xananode.canonical:rel/schema-relationship-category-social-contains-schema-relationship-type-friend_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-social
   - Target: xananode.canonical:schema/relationship-type-friend_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1048. xananode.canonical:rel/schema-relationship-category-social-contains-schema-relationship-type-interviewed
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-social
   - Target: xananode.canonical:schema/relationship-type-interviewed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1049. xananode.canonical:rel/schema-relationship-category-social-contains-schema-relationship-type-interviewed_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-social
   - Target: xananode.canonical:schema/relationship-type-interviewed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1050. xananode.canonical:rel/schema-relationship-category-social-contains-schema-relationship-type-memorialized_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-social
   - Target: xananode.canonical:schema/relationship-type-memorialized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1051. xananode.canonical:rel/schema-relationship-category-social-contains-schema-relationship-type-memorializes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-social
   - Target: xananode.canonical:schema/relationship-type-memorializes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1052. xananode.canonical:rel/schema-relationship-category-temporal-contains-schema-relationship-type-contemporary_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-temporal
   - Target: xananode.canonical:schema/relationship-type-contemporary_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1053. xananode.canonical:rel/schema-relationship-category-temporal-contains-schema-relationship-type-continued_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-temporal
   - Target: xananode.canonical:schema/relationship-type-continued_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1054. xananode.canonical:rel/schema-relationship-category-temporal-contains-schema-relationship-type-continues_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-temporal
   - Target: xananode.canonical:schema/relationship-type-continues_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1055. xananode.canonical:rel/schema-relationship-category-temporal-contains-schema-relationship-type-followed
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-temporal
   - Target: xananode.canonical:schema/relationship-type-followed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1056. xananode.canonical:rel/schema-relationship-category-temporal-contains-schema-relationship-type-is_start_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-temporal
   - Target: xananode.canonical:schema/relationship-type-is_start_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1057. xananode.canonical:rel/schema-relationship-category-temporal-contains-schema-relationship-type-preceded
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-temporal
   - Target: xananode.canonical:schema/relationship-type-preceded
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1058. xananode.canonical:rel/schema-relationship-category-temporal-contains-schema-relationship-type-starts_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-temporal
   - Target: xananode.canonical:schema/relationship-type-starts_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1059. xananode.canonical:rel/schema-relationship-category-uncertainty-contains-schema-relationship-type-evidence_insufficient_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-uncertainty
   - Target: xananode.canonical:schema/relationship-type-evidence_insufficient_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1060. xananode.canonical:rel/schema-relationship-category-uncertainty-contains-schema-relationship-type-insufficient_evidence
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-uncertainty
   - Target: xananode.canonical:schema/relationship-type-insufficient_evidence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1061. xananode.canonical:rel/schema-relationship-category-uncertainty-contains-schema-relationship-type-reviewed_under
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-uncertainty
   - Target: xananode.canonical:schema/relationship-type-reviewed_under
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1062. xananode.canonical:rel/schema-relationship-category-uncertainty-contains-schema-relationship-type-speculated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-uncertainty
   - Target: xananode.canonical:schema/relationship-type-speculated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1063. xananode.canonical:rel/schema-relationship-category-uncertainty-contains-schema-relationship-type-speculative
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-uncertainty
   - Target: xananode.canonical:schema/relationship-type-speculative
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1064. xananode.canonical:rel/schema-relationship-category-uncertainty-contains-schema-relationship-type-under_review
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-uncertainty
   - Target: xananode.canonical:schema/relationship-type-under_review
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1065. xananode.canonical:rel/schema-relationship-category-uncertainty-contains-schema-relationship-type-unresolved
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-uncertainty
   - Target: xananode.canonical:schema/relationship-type-unresolved
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1066. xananode.canonical:rel/schema-relationship-category-uncertainty-contains-schema-relationship-type-unresolved_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-category-uncertainty
   - Target: xananode.canonical:schema/relationship-type-unresolved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1067. xananode.canonical:rel/schema-relationship-type-abstraction_of-related_to-schema-relationship-type-concrete_example_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-abstraction_of
   - Target: xananode.canonical:schema/relationship-type-concrete_example_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1068. xananode.canonical:rel/schema-relationship-type-alias_of-related_to-schema-relationship-type-has_alias-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-alias_of
   - Target: xananode.canonical:schema/relationship-type-has_alias
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1069. xananode.canonical:rel/schema-relationship-type-alternative_to-related_to-schema-relationship-type-alternative_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-alternative_to
   - Target: xananode.canonical:schema/relationship-type-alternative_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1070. xananode.canonical:rel/schema-relationship-type-analogous_to-related_to-schema-relationship-type-analogous_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-analogous_to
   - Target: xananode.canonical:schema/relationship-type-analogous_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1071. xananode.canonical:rel/schema-relationship-type-announced_by-related_to-schema-relationship-type-announced-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-announced_by
   - Target: xananode.canonical:schema/relationship-type-announced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1072. xananode.canonical:rel/schema-relationship-type-announced-related_to-schema-relationship-type-announced_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-announced
   - Target: xananode.canonical:schema/relationship-type-announced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1073. xananode.canonical:rel/schema-relationship-type-answered_by-related_to-schema-relationship-type-answers-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-answered_by
   - Target: xananode.canonical:schema/relationship-type-answers
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1074. xananode.canonical:rel/schema-relationship-type-answered_in-related_to-schema-relationship-type-had_answer-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-answered_in
   - Target: xananode.canonical:schema/relationship-type-had_answer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1075. xananode.canonical:rel/schema-relationship-type-answers-related_to-schema-relationship-type-answered_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-answers
   - Target: xananode.canonical:schema/relationship-type-answered_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1076. xananode.canonical:rel/schema-relationship-type-anticipated_by-related_to-schema-relationship-type-anticipated-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-anticipated_by
   - Target: xananode.canonical:schema/relationship-type-anticipated
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1077. xananode.canonical:rel/schema-relationship-type-anticipated-related_to-schema-relationship-type-anticipated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-anticipated
   - Target: xananode.canonical:schema/relationship-type-anticipated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1078. xananode.canonical:rel/schema-relationship-type-anticipates-related_to-schema-relationship-type-anticipated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-anticipates
   - Target: xananode.canonical:schema/relationship-type-anticipated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1079. xananode.canonical:rel/schema-relationship-type-appears_in-related_to-schema-relationship-type-has_appearance-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-appears_in
   - Target: xananode.canonical:schema/relationship-type-has_appearance
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1080. xananode.canonical:rel/schema-relationship-type-approved_by-related_to-schema-relationship-type-approved-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-approved_by
   - Target: xananode.canonical:schema/relationship-type-approved
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1081. xananode.canonical:rel/schema-relationship-type-approved-related_to-schema-relationship-type-approved_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-approved
   - Target: xananode.canonical:schema/relationship-type-approved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1082. xananode.canonical:rel/schema-relationship-type-arrived_from-related_to-schema-relationship-type-arrives_at-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-arrived_from
   - Target: xananode.canonical:schema/relationship-type-arrives_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1083. xananode.canonical:rel/schema-relationship-type-arrives_at-related_to-schema-relationship-type-arrived_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-arrives_at
   - Target: xananode.canonical:schema/relationship-type-arrived_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1084. xananode.canonical:rel/schema-relationship-type-asked_by-related_to-schema-relationship-type-asked-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-asked_by
   - Target: xananode.canonical:schema/relationship-type-asked
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1085. xananode.canonical:rel/schema-relationship-type-asked_in-related_to-schema-relationship-type-had_question-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-asked_in
   - Target: xananode.canonical:schema/relationship-type-had_question
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1086. xananode.canonical:rel/schema-relationship-type-asked-related_to-schema-relationship-type-asked_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-asked
   - Target: xananode.canonical:schema/relationship-type-asked_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1087. xananode.canonical:rel/schema-relationship-type-attribution_required_by-related_to-schema-relationship-type-requires_attribution-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-attribution_required_by
   - Target: xananode.canonical:schema/relationship-type-requires_attribution
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1088. xananode.canonical:rel/schema-relationship-type-authored_by-related_to-schema-relationship-type-authored-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-authored_by
   - Target: xananode.canonical:schema/relationship-type-authored
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1089. xananode.canonical:rel/schema-relationship-type-authored-related_to-schema-relationship-type-authored_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-authored
   - Target: xananode.canonical:schema/relationship-type-authored_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1090. xananode.canonical:rel/schema-relationship-type-broadcast_to-related_to-schema-relationship-type-received_broadcast_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-broadcast_to
   - Target: xananode.canonical:schema/relationship-type-received_broadcast_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1091. xananode.canonical:rel/schema-relationship-type-broader_than-related_to-schema-relationship-type-narrower_than-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-broader_than
   - Target: xananode.canonical:schema/relationship-type-narrower_than
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1092. xananode.canonical:rel/schema-relationship-type-cited_by-related_to-schema-relationship-type-cites-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-cited_by
   - Target: xananode.canonical:schema/relationship-type-cites
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1093. xananode.canonical:rel/schema-relationship-type-cites-related_to-schema-relationship-type-cited_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-cites
   - Target: xananode.canonical:schema/relationship-type-cited_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1094. xananode.canonical:rel/schema-relationship-type-claim_of-related_to-schema-relationship-type-has_claim-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-claim_of
   - Target: xananode.canonical:schema/relationship-type-has_claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1095. xananode.canonical:rel/schema-relationship-type-clarified_by-related_to-schema-relationship-type-clarifies-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-clarified_by
   - Target: xananode.canonical:schema/relationship-type-clarifies
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1096. xananode.canonical:rel/schema-relationship-type-clarifies-related_to-schema-relationship-type-clarified_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-clarifies
   - Target: xananode.canonical:schema/relationship-type-clarified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1097. xananode.canonical:rel/schema-relationship-type-coined_by-related_to-schema-relationship-type-coined-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-coined_by
   - Target: xananode.canonical:schema/relationship-type-coined
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1098. xananode.canonical:rel/schema-relationship-type-coined-related_to-schema-relationship-type-coined_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-coined
   - Target: xananode.canonical:schema/relationship-type-coined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1099. xananode.canonical:rel/schema-relationship-type-collaborated_with-related_to-schema-relationship-type-collaborated_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-collaborated_with
   - Target: xananode.canonical:schema/relationship-type-collaborated_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1100. xananode.canonical:rel/schema-relationship-type-communicated_to-related_to-schema-relationship-type-communication_received_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-communicated_to
   - Target: xananode.canonical:schema/relationship-type-communication_received_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1101. xananode.canonical:rel/schema-relationship-type-communication_received_from-related_to-schema-relationship-type-communicated_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-communication_received_from
   - Target: xananode.canonical:schema/relationship-type-communicated_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1102. xananode.canonical:rel/schema-relationship-type-compatible_with-related_to-schema-relationship-type-compatible_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-compatible_with
   - Target: xananode.canonical:schema/relationship-type-compatible_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1103. xananode.canonical:rel/schema-relationship-type-concrete_example_of-related_to-schema-relationship-type-abstraction_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-concrete_example_of
   - Target: xananode.canonical:schema/relationship-type-abstraction_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1104. xananode.canonical:rel/schema-relationship-type-contains-related_to-schema-relationship-type-part_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-contains
   - Target: xananode.canonical:schema/relationship-type-part_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1105. xananode.canonical:rel/schema-relationship-type-contemporary_of-related_to-schema-relationship-type-contemporary_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-contemporary_of
   - Target: xananode.canonical:schema/relationship-type-contemporary_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1106. xananode.canonical:rel/schema-relationship-type-context_for-related_to-schema-relationship-type-has_context-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-context_for
   - Target: xananode.canonical:schema/relationship-type-has_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1107. xananode.canonical:rel/schema-relationship-type-context_required_by-related_to-schema-relationship-type-requires_context-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-context_required_by
   - Target: xananode.canonical:schema/relationship-type-requires_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1108. xananode.canonical:rel/schema-relationship-type-continued_from-related_to-schema-relationship-type-continues_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-continued_from
   - Target: xananode.canonical:schema/relationship-type-continues_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1109. xananode.canonical:rel/schema-relationship-type-continues_to-related_to-schema-relationship-type-continued_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-continues_to
   - Target: xananode.canonical:schema/relationship-type-continued_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1110. xananode.canonical:rel/schema-relationship-type-contradicted_by-related_to-schema-relationship-type-contradicts-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-contradicted_by
   - Target: xananode.canonical:schema/relationship-type-contradicts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1111. xananode.canonical:rel/schema-relationship-type-contradicts-related_to-schema-relationship-type-contradicted_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-contradicts
   - Target: xananode.canonical:schema/relationship-type-contradicted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1112. xananode.canonical:rel/schema-relationship-type-contrasts_with-related_to-schema-relationship-type-contrasts_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-contrasts_with
   - Target: xananode.canonical:schema/relationship-type-contrasts_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1113. xananode.canonical:rel/schema-relationship-type-created_by-related_to-schema-relationship-type-created-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-created_by
   - Target: xananode.canonical:schema/relationship-type-created
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1114. xananode.canonical:rel/schema-relationship-type-created-related_to-schema-relationship-type-created_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-created
   - Target: xananode.canonical:schema/relationship-type-created_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1115. xananode.canonical:rel/schema-relationship-type-critical_to-related_to-schema-relationship-type-critically_depends_on-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-critical_to
   - Target: xananode.canonical:schema/relationship-type-critically_depends_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1116. xananode.canonical:rel/schema-relationship-type-critically_depends_on-related_to-schema-relationship-type-critical_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-critically_depends_on
   - Target: xananode.canonical:schema/relationship-type-critical_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1117. xananode.canonical:rel/schema-relationship-type-debated_with-related_to-schema-relationship-type-debated_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-debated_with
   - Target: xananode.canonical:schema/relationship-type-debated_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1118. xananode.canonical:rel/schema-relationship-type-deep_linked_from-related_to-schema-relationship-type-deep_links_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-deep_linked_from
   - Target: xananode.canonical:schema/relationship-type-deep_links_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1119. xananode.canonical:rel/schema-relationship-type-deep_links_to-related_to-schema-relationship-type-deep_linked_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-deep_links_to
   - Target: xananode.canonical:schema/relationship-type-deep_linked_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1120. xananode.canonical:rel/schema-relationship-type-defined_by-related_to-schema-relationship-type-defines-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-defined_by
   - Target: xananode.canonical:schema/relationship-type-defines
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1121. xananode.canonical:rel/schema-relationship-type-defines-related_to-schema-relationship-type-defined_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-defines
   - Target: xananode.canonical:schema/relationship-type-defined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1122. xananode.canonical:rel/schema-relationship-type-demonstrated_by-related_to-schema-relationship-type-demonstrates-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-demonstrated_by
   - Target: xananode.canonical:schema/relationship-type-demonstrates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1123. xananode.canonical:rel/schema-relationship-type-demonstrates-related_to-schema-relationship-type-demonstrated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-demonstrates
   - Target: xananode.canonical:schema/relationship-type-demonstrated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1124. xananode.canonical:rel/schema-relationship-type-dependency_of-related_to-schema-relationship-type-depends_on-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-dependency_of
   - Target: xananode.canonical:schema/relationship-type-depends_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1125. xananode.canonical:rel/schema-relationship-type-depends_on-related_to-schema-relationship-type-dependency_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-depends_on
   - Target: xananode.canonical:schema/relationship-type-dependency_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1126. xananode.canonical:rel/schema-relationship-type-depicted_by-related_to-schema-relationship-type-depicts-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-depicted_by
   - Target: xananode.canonical:schema/relationship-type-depicts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1127. xananode.canonical:rel/schema-relationship-type-depicts-related_to-schema-relationship-type-depicted_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-depicts
   - Target: xananode.canonical:schema/relationship-type-depicted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1128. xananode.canonical:rel/schema-relationship-type-derived_from-related_to-schema-relationship-type-derived_into-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-derived_from
   - Target: xananode.canonical:schema/relationship-type-derived_into
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1129. xananode.canonical:rel/schema-relationship-type-derived_into-related_to-schema-relationship-type-derived_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-derived_into
   - Target: xananode.canonical:schema/relationship-type-derived_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1130. xananode.canonical:rel/schema-relationship-type-discussed_in-related_to-schema-relationship-type-discusses-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-discussed_in
   - Target: xananode.canonical:schema/relationship-type-discusses
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1131. xananode.canonical:rel/schema-relationship-type-discussed_with-related_to-schema-relationship-type-discussion_partner_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-discussed_with
   - Target: xananode.canonical:schema/relationship-type-discussion_partner_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1132. xananode.canonical:rel/schema-relationship-type-discusses-related_to-schema-relationship-type-discussed_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-discusses
   - Target: xananode.canonical:schema/relationship-type-discussed_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1133. xananode.canonical:rel/schema-relationship-type-discussion_partner_of-related_to-schema-relationship-type-discussed_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-discussion_partner_of
   - Target: xananode.canonical:schema/relationship-type-discussed_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1134. xananode.canonical:rel/schema-relationship-type-disputed_by-related_to-schema-relationship-type-disputes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-disputed_by
   - Target: xananode.canonical:schema/relationship-type-disputes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1135. xananode.canonical:rel/schema-relationship-type-disputed_identity-related_to-schema-relationship-type-disputed_identity-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-disputed_identity
   - Target: xananode.canonical:schema/relationship-type-disputed_identity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1136. xananode.canonical:rel/schema-relationship-type-disputes-related_to-schema-relationship-type-disputed_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-disputes
   - Target: xananode.canonical:schema/relationship-type-disputed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1137. xananode.canonical:rel/schema-relationship-type-documented_by-related_to-schema-relationship-type-documents-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-documented_by
   - Target: xananode.canonical:schema/relationship-type-documents
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1138. xananode.canonical:rel/schema-relationship-type-documents-related_to-schema-relationship-type-documented_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-documents
   - Target: xananode.canonical:schema/relationship-type-documented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1139. xananode.canonical:rel/schema-relationship-type-enabled_by-related_to-schema-relationship-type-enables-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-enabled_by
   - Target: xananode.canonical:schema/relationship-type-enables
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1140. xananode.canonical:rel/schema-relationship-type-enables-related_to-schema-relationship-type-enabled_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-enables
   - Target: xananode.canonical:schema/relationship-type-enabled_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1141. xananode.canonical:rel/schema-relationship-type-equivalent_to-related_to-schema-relationship-type-equivalent_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-equivalent_to
   - Target: xananode.canonical:schema/relationship-type-equivalent_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1142. xananode.canonical:rel/schema-relationship-type-evidence_for-related_to-schema-relationship-type-has_evidence-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-evidence_for
   - Target: xananode.canonical:schema/relationship-type-has_evidence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1143. xananode.canonical:rel/schema-relationship-type-evidence_insufficient_for-related_to-schema-relationship-type-insufficient_evidence-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-evidence_insufficient_for
   - Target: xananode.canonical:schema/relationship-type-insufficient_evidence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1144. xananode.canonical:rel/schema-relationship-type-example_of-related_to-schema-relationship-type-has_example-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-example_of
   - Target: xananode.canonical:schema/relationship-type-has_example
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1145. xananode.canonical:rel/schema-relationship-type-explained_by-related_to-schema-relationship-type-explains-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-explained_by
   - Target: xananode.canonical:schema/relationship-type-explains
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1146. xananode.canonical:rel/schema-relationship-type-explains-related_to-schema-relationship-type-explained_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-explains
   - Target: xananode.canonical:schema/relationship-type-explained_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1147. xananode.canonical:rel/schema-relationship-type-extended_by-related_to-schema-relationship-type-extends-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-extended_by
   - Target: xananode.canonical:schema/relationship-type-extends
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1148. xananode.canonical:rel/schema-relationship-type-extends-related_to-schema-relationship-type-extended_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-extends
   - Target: xananode.canonical:schema/relationship-type-extended_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1149. xananode.canonical:rel/schema-relationship-type-extension_of-related_to-schema-relationship-type-has_extension-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-extension_of
   - Target: xananode.canonical:schema/relationship-type-has_extension
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1150. xananode.canonical:rel/schema-relationship-type-fails_to_answer-related_to-schema-relationship-type-not_answered_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-fails_to_answer
   - Target: xananode.canonical:schema/relationship-type-not_answered_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1151. xananode.canonical:rel/schema-relationship-type-falsified_by-related_to-schema-relationship-type-falsifies-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-falsified_by
   - Target: xananode.canonical:schema/relationship-type-falsifies
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1152. xananode.canonical:rel/schema-relationship-type-falsifies-related_to-schema-relationship-type-falsified_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-falsifies
   - Target: xananode.canonical:schema/relationship-type-falsified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1153. xananode.canonical:rel/schema-relationship-type-featured_in-related_to-schema-relationship-type-features-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-featured_in
   - Target: xananode.canonical:schema/relationship-type-features
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1154. xananode.canonical:rel/schema-relationship-type-featured_speaker-related_to-schema-relationship-type-spoke_at-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-featured_speaker
   - Target: xananode.canonical:schema/relationship-type-spoke_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1155. xananode.canonical:rel/schema-relationship-type-features-related_to-schema-relationship-type-featured_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-features
   - Target: xananode.canonical:schema/relationship-type-featured_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1156. xananode.canonical:rel/schema-relationship-type-followed-related_to-schema-relationship-type-preceded-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-followed
   - Target: xananode.canonical:schema/relationship-type-preceded
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1157. xananode.canonical:rel/schema-relationship-type-frequently_misunderstood-related_to-schema-relationship-type-misunderstanding_context_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-frequently_misunderstood
   - Target: xananode.canonical:schema/relationship-type-misunderstanding_context_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1158. xananode.canonical:rel/schema-relationship-type-friend_of-related_to-schema-relationship-type-friend_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-friend_of
   - Target: xananode.canonical:schema/relationship-type-friend_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1159. xananode.canonical:rel/schema-relationship-type-generalized_by-related_to-schema-relationship-type-specializes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-generalized_by
   - Target: xananode.canonical:schema/relationship-type-specializes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1160. xananode.canonical:rel/schema-relationship-type-generalizes-related_to-schema-relationship-type-specialized_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-generalizes
   - Target: xananode.canonical:schema/relationship-type-specialized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1161. xananode.canonical:rel/schema-relationship-type-generated_by-related_to-schema-relationship-type-generated-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-generated_by
   - Target: xananode.canonical:schema/relationship-type-generated
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1162. xananode.canonical:rel/schema-relationship-type-generated-related_to-schema-relationship-type-generated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-generated
   - Target: xananode.canonical:schema/relationship-type-generated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1163. xananode.canonical:rel/schema-relationship-type-governed_by-related_to-schema-relationship-type-governs-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-governed_by
   - Target: xananode.canonical:schema/relationship-type-governs
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1164. xananode.canonical:rel/schema-relationship-type-governs-related_to-schema-relationship-type-governed_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-governs
   - Target: xananode.canonical:schema/relationship-type-governed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1165. xananode.canonical:rel/schema-relationship-type-had_answer-related_to-schema-relationship-type-answered_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-had_answer
   - Target: xananode.canonical:schema/relationship-type-answered_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1166. xananode.canonical:rel/schema-relationship-type-had_participant-related_to-schema-relationship-type-participated_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-had_participant
   - Target: xananode.canonical:schema/relationship-type-participated_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1167. xananode.canonical:rel/schema-relationship-type-had_question-related_to-schema-relationship-type-asked_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-had_question
   - Target: xananode.canonical:schema/relationship-type-asked_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1168. xananode.canonical:rel/schema-relationship-type-has_alias-related_to-schema-relationship-type-alias_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_alias
   - Target: xananode.canonical:schema/relationship-type-alias_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1169. xananode.canonical:rel/schema-relationship-type-has_appearance-related_to-schema-relationship-type-appears_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_appearance
   - Target: xananode.canonical:schema/relationship-type-appears_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1170. xananode.canonical:rel/schema-relationship-type-has_claim-related_to-schema-relationship-type-claim_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_claim
   - Target: xananode.canonical:schema/relationship-type-claim_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1171. xananode.canonical:rel/schema-relationship-type-has_context-related_to-schema-relationship-type-context_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_context
   - Target: xananode.canonical:schema/relationship-type-context_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1172. xananode.canonical:rel/schema-relationship-type-has_evidence-related_to-schema-relationship-type-evidence_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_evidence
   - Target: xananode.canonical:schema/relationship-type-evidence_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1173. xananode.canonical:rel/schema-relationship-type-has_example-related_to-schema-relationship-type-example_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_example
   - Target: xananode.canonical:schema/relationship-type-example_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1174. xananode.canonical:rel/schema-relationship-type-has_extension-related_to-schema-relationship-type-extension_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_extension
   - Target: xananode.canonical:schema/relationship-type-extension_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1175. xananode.canonical:rel/schema-relationship-type-has_high_risk-related_to-schema-relationship-type-high_risk_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_high_risk
   - Target: xananode.canonical:schema/relationship-type-high_risk_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1176. xananode.canonical:rel/schema-relationship-type-has_important_context-related_to-schema-relationship-type-important_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_important_context
   - Target: xananode.canonical:schema/relationship-type-important_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1177. xananode.canonical:rel/schema-relationship-type-has_primary_media-related_to-schema-relationship-type-used_as_primary_media_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_primary_media
   - Target: xananode.canonical:schema/relationship-type-used_as_primary_media_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1178. xananode.canonical:rel/schema-relationship-type-high_risk_for-related_to-schema-relationship-type-has_high_risk-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-high_risk_for
   - Target: xananode.canonical:schema/relationship-type-has_high_risk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1179. xananode.canonical:rel/schema-relationship-type-identified_by-related_to-schema-relationship-type-identified-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-identified_by
   - Target: xananode.canonical:schema/relationship-type-identified
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1180. xananode.canonical:rel/schema-relationship-type-identified-related_to-schema-relationship-type-identified_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-identified
   - Target: xananode.canonical:schema/relationship-type-identified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1181. xananode.canonical:rel/schema-relationship-type-implemented_by-related_to-schema-relationship-type-implements-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-implemented_by
   - Target: xananode.canonical:schema/relationship-type-implements
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1182. xananode.canonical:rel/schema-relationship-type-implements-related_to-schema-relationship-type-implemented_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-implements
   - Target: xananode.canonical:schema/relationship-type-implemented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1183. xananode.canonical:rel/schema-relationship-type-important_for-related_to-schema-relationship-type-has_important_context-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-important_for
   - Target: xananode.canonical:schema/relationship-type-has_important_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1184. xananode.canonical:rel/schema-relationship-type-included_in-related_to-schema-relationship-type-includes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-included_in
   - Target: xananode.canonical:schema/relationship-type-includes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1185. xananode.canonical:rel/schema-relationship-type-includes-related_to-schema-relationship-type-included_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-includes
   - Target: xananode.canonical:schema/relationship-type-included_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1186. xananode.canonical:rel/schema-relationship-type-influenced_by-related_to-schema-relationship-type-influenced-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-influenced_by
   - Target: xananode.canonical:schema/relationship-type-influenced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1187. xananode.canonical:rel/schema-relationship-type-influenced-related_to-schema-relationship-type-influenced_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-influenced
   - Target: xananode.canonical:schema/relationship-type-influenced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1188. xananode.canonical:rel/schema-relationship-type-information_required_by-related_to-schema-relationship-type-requires_information-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-information_required_by
   - Target: xananode.canonical:schema/relationship-type-requires_information
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1189. xananode.canonical:rel/schema-relationship-type-inquiry_motivated_by-related_to-schema-relationship-type-motivates_inquiry-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-inquiry_motivated_by
   - Target: xananode.canonical:schema/relationship-type-motivates_inquiry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1190. xananode.canonical:rel/schema-relationship-type-insufficient_evidence-related_to-schema-relationship-type-evidence_insufficient_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-insufficient_evidence
   - Target: xananode.canonical:schema/relationship-type-evidence_insufficient_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1191. xananode.canonical:rel/schema-relationship-type-interviewed_by-related_to-schema-relationship-type-interviewed-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-interviewed_by
   - Target: xananode.canonical:schema/relationship-type-interviewed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1192. xananode.canonical:rel/schema-relationship-type-interviewed-related_to-schema-relationship-type-interviewed_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-interviewed
   - Target: xananode.canonical:schema/relationship-type-interviewed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1193. xananode.canonical:rel/schema-relationship-type-introduced_by-related_to-schema-relationship-type-introduced-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-introduced_by
   - Target: xananode.canonical:schema/relationship-type-introduced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1194. xananode.canonical:rel/schema-relationship-type-introduced_in-related_to-schema-relationship-type-introduction_venue_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-introduced_in
   - Target: xananode.canonical:schema/relationship-type-introduction_venue_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1195. xananode.canonical:rel/schema-relationship-type-introduced-related_to-schema-relationship-type-introduced_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-introduced
   - Target: xananode.canonical:schema/relationship-type-introduced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1196. xananode.canonical:rel/schema-relationship-type-introduction_venue_of-related_to-schema-relationship-type-introduced_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-introduction_venue_of
   - Target: xananode.canonical:schema/relationship-type-introduced_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1197. xananode.canonical:rel/schema-relationship-type-investigated_by-related_to-schema-relationship-type-investigates-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-investigated_by
   - Target: xananode.canonical:schema/relationship-type-investigates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1198. xananode.canonical:rel/schema-relationship-type-investigates-related_to-schema-relationship-type-investigated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-investigates
   - Target: xananode.canonical:schema/relationship-type-investigated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1199. xananode.canonical:rel/schema-relationship-type-is_start_of-related_to-schema-relationship-type-starts_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-is_start_of
   - Target: xananode.canonical:schema/relationship-type-starts_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1200. xananode.canonical:rel/schema-relationship-type-license_for-related_to-schema-relationship-type-licensed_under-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-license_for
   - Target: xananode.canonical:schema/relationship-type-licensed_under
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1201. xananode.canonical:rel/schema-relationship-type-licensed_under-related_to-schema-relationship-type-license_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-licensed_under
   - Target: xananode.canonical:schema/relationship-type-license_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1202. xananode.canonical:rel/schema-relationship-type-mapped_from-related_to-schema-relationship-type-maps_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-mapped_from
   - Target: xananode.canonical:schema/relationship-type-maps_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1203. xananode.canonical:rel/schema-relationship-type-maps_to-related_to-schema-relationship-type-mapped_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-maps_to
   - Target: xananode.canonical:schema/relationship-type-mapped_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1204. xananode.canonical:rel/schema-relationship-type-memorialized_by-related_to-schema-relationship-type-memorializes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-memorialized_by
   - Target: xananode.canonical:schema/relationship-type-memorializes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1205. xananode.canonical:rel/schema-relationship-type-memorializes-related_to-schema-relationship-type-memorialized_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-memorializes
   - Target: xananode.canonical:schema/relationship-type-memorialized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1206. xananode.canonical:rel/schema-relationship-type-mentioned_by-related_to-schema-relationship-type-mentions-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-mentioned_by
   - Target: xananode.canonical:schema/relationship-type-mentions
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1207. xananode.canonical:rel/schema-relationship-type-mentions-related_to-schema-relationship-type-mentioned_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-mentions
   - Target: xananode.canonical:schema/relationship-type-mentioned_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1208. xananode.canonical:rel/schema-relationship-type-misunderstanding_context_for-related_to-schema-relationship-type-frequently_misunderstood-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-misunderstanding_context_for
   - Target: xananode.canonical:schema/relationship-type-frequently_misunderstood
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1209. xananode.canonical:rel/schema-relationship-type-motivated_by-related_to-schema-relationship-type-motivates-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-motivated_by
   - Target: xananode.canonical:schema/relationship-type-motivates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1210. xananode.canonical:rel/schema-relationship-type-motivates_inquiry-related_to-schema-relationship-type-inquiry_motivated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-motivates_inquiry
   - Target: xananode.canonical:schema/relationship-type-inquiry_motivated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1211. xananode.canonical:rel/schema-relationship-type-motivates-related_to-schema-relationship-type-motivated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-motivates
   - Target: xananode.canonical:schema/relationship-type-motivated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1212. xananode.canonical:rel/schema-relationship-type-narrower_than-related_to-schema-relationship-type-broader_than-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-narrower_than
   - Target: xananode.canonical:schema/relationship-type-broader_than
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1213. xananode.canonical:rel/schema-relationship-type-negotiated_with-related_to-schema-relationship-type-negotiated_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-negotiated_with
   - Target: xananode.canonical:schema/relationship-type-negotiated_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1214. xananode.canonical:rel/schema-relationship-type-not_answered_by-related_to-schema-relationship-type-fails_to_answer-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-not_answered_by
   - Target: xananode.canonical:schema/relationship-type-fails_to_answer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1215. xananode.canonical:rel/schema-relationship-type-occurred_at-related_to-schema-relationship-type-site_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-occurred_at
   - Target: xananode.canonical:schema/relationship-type-site_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1216. xananode.canonical:rel/schema-relationship-type-overlooked_by-related_to-schema-relationship-type-overlooks-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-overlooked_by
   - Target: xananode.canonical:schema/relationship-type-overlooks
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1217. xananode.canonical:rel/schema-relationship-type-overlooks-related_to-schema-relationship-type-overlooked_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-overlooks
   - Target: xananode.canonical:schema/relationship-type-overlooked_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1218. xananode.canonical:rel/schema-relationship-type-parallel_to-related_to-schema-relationship-type-parallel_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-parallel_to
   - Target: xananode.canonical:schema/relationship-type-parallel_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1219. xananode.canonical:rel/schema-relationship-type-part_of-related_to-schema-relationship-type-contains-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-part_of
   - Target: xananode.canonical:schema/relationship-type-contains
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1220. xananode.canonical:rel/schema-relationship-type-partially_answered_by-related_to-schema-relationship-type-partially_answers-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-partially_answered_by
   - Target: xananode.canonical:schema/relationship-type-partially_answers
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1221. xananode.canonical:rel/schema-relationship-type-partially_answers-related_to-schema-relationship-type-partially_answered_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-partially_answers
   - Target: xananode.canonical:schema/relationship-type-partially_answered_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1222. xananode.canonical:rel/schema-relationship-type-participated_in-related_to-schema-relationship-type-had_participant-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-participated_in
   - Target: xananode.canonical:schema/relationship-type-had_participant
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1223. xananode.canonical:rel/schema-relationship-type-popularized_by-related_to-schema-relationship-type-popularized-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-popularized_by
   - Target: xananode.canonical:schema/relationship-type-popularized
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1224. xananode.canonical:rel/schema-relationship-type-popularized-related_to-schema-relationship-type-popularized_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-popularized
   - Target: xananode.canonical:schema/relationship-type-popularized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1225. xananode.canonical:rel/schema-relationship-type-possible_match-related_to-schema-relationship-type-possible_match-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-possible_match
   - Target: xananode.canonical:schema/relationship-type-possible_match
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1226. xananode.canonical:rel/schema-relationship-type-possibly_related_to-related_to-schema-relationship-type-possibly_related_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-possibly_related_to
   - Target: xananode.canonical:schema/relationship-type-possibly_related_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1227. xananode.canonical:rel/schema-relationship-type-preceded-related_to-schema-relationship-type-followed-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-preceded
   - Target: xananode.canonical:schema/relationship-type-followed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1228. xananode.canonical:rel/schema-relationship-type-presentation_received_from-related_to-schema-relationship-type-presented_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-presentation_received_from
   - Target: xananode.canonical:schema/relationship-type-presented_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1229. xananode.canonical:rel/schema-relationship-type-presented_by-related_to-schema-relationship-type-presented-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-presented_by
   - Target: xananode.canonical:schema/relationship-type-presented
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1230. xananode.canonical:rel/schema-relationship-type-presented_to-related_to-schema-relationship-type-presentation_received_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-presented_to
   - Target: xananode.canonical:schema/relationship-type-presentation_received_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1231. xananode.canonical:rel/schema-relationship-type-presented-related_to-schema-relationship-type-presented_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-presented
   - Target: xananode.canonical:schema/relationship-type-presented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1232. xananode.canonical:rel/schema-relationship-type-preserved_by-related_to-schema-relationship-type-preserves-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-preserved_by
   - Target: xananode.canonical:schema/relationship-type-preserves
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1233. xananode.canonical:rel/schema-relationship-type-preserves-related_to-schema-relationship-type-preserved_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-preserves
   - Target: xananode.canonical:schema/relationship-type-preserved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1234. xananode.canonical:rel/schema-relationship-type-produces-related_to-schema-relationship-type-results_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-produces
   - Target: xananode.canonical:schema/relationship-type-results_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1235. xananode.canonical:rel/schema-relationship-type-proposed_by-related_to-schema-relationship-type-proposed-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-proposed_by
   - Target: xananode.canonical:schema/relationship-type-proposed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1236. xananode.canonical:rel/schema-relationship-type-proposed-related_to-schema-relationship-type-proposed_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-proposed
   - Target: xananode.canonical:schema/relationship-type-proposed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1237. xananode.canonical:rel/schema-relationship-type-quoted_by-related_to-schema-relationship-type-quotes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-quoted_by
   - Target: xananode.canonical:schema/relationship-type-quotes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1238. xananode.canonical:rel/schema-relationship-type-quotes-related_to-schema-relationship-type-quoted_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-quotes
   - Target: xananode.canonical:schema/relationship-type-quoted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1239. xananode.canonical:rel/schema-relationship-type-raised_by-related_to-schema-relationship-type-raises-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-raised_by
   - Target: xananode.canonical:schema/relationship-type-raises
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1240. xananode.canonical:rel/schema-relationship-type-raises-related_to-schema-relationship-type-raised_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-raises
   - Target: xananode.canonical:schema/relationship-type-raised_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1241. xananode.canonical:rel/schema-relationship-type-received_broadcast_from-related_to-schema-relationship-type-broadcast_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-received_broadcast_from
   - Target: xananode.canonical:schema/relationship-type-broadcast_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1242. xananode.canonical:rel/schema-relationship-type-received_report_from-related_to-schema-relationship-type-reported_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-received_report_from
   - Target: xananode.canonical:schema/relationship-type-reported_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1243. xananode.canonical:rel/schema-relationship-type-refined_by-related_to-schema-relationship-type-refines-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-refined_by
   - Target: xananode.canonical:schema/relationship-type-refines
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1244. xananode.canonical:rel/schema-relationship-type-refines-related_to-schema-relationship-type-refined_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-refines
   - Target: xananode.canonical:schema/relationship-type-refined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1245. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-attention
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-attention
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1246. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-causation
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-causation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1247. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-citation
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-citation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1248. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-claim_structure
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-claim_structure
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1249. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-cognition
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-cognition
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1250. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-communication
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-communication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1251. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-comparison
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-comparison
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1252. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-composition
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-composition
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1253. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-creation
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-creation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1254. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-definition
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-definition
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1255. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-discovery
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-discovery
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1256. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-evidence
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-evidence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1257. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-explanation
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-explanation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1258. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-generic
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-generic
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1259. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-governance
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-governance
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1260. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-historical
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-historical
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1261. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-identity
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-identity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1262. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-influence
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-influence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1263. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-inquiry
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-inquiry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1264. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-knowledge_workflow
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-knowledge_workflow
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1265. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-lineage
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-lineage
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1266. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-location
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-location
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1267. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-participation
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-participation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1268. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-reasoning
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-reasoning
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1269. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-representation
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-representation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1270. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-research_workflow
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-research_workflow
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1271. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-revision
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-revision
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1272. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-schema_mapping
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-schema_mapping
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1273. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-social
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-social
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1274. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-temporal
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-temporal
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1275. xananode.canonical:rel/schema-relationship-type-registry-contains-schema-relationship-category-uncertainty
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-category-uncertainty
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1276. xananode.canonical:rel/schema-relationship-type-related_to-related_to-schema-relationship-type-related_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-related_to
   - Target: xananode.canonical:schema/relationship-type-related_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1277. xananode.canonical:rel/schema-relationship-type-replied_by-related_to-schema-relationship-type-replied_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-replied_by
   - Target: xananode.canonical:schema/relationship-type-replied_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1278. xananode.canonical:rel/schema-relationship-type-replied_to-related_to-schema-relationship-type-replied_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-replied_to
   - Target: xananode.canonical:schema/relationship-type-replied_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1279. xananode.canonical:rel/schema-relationship-type-reported_to-related_to-schema-relationship-type-received_report_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-reported_to
   - Target: xananode.canonical:schema/relationship-type-received_report_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1280. xananode.canonical:rel/schema-relationship-type-represented_by-related_to-schema-relationship-type-represents-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-represented_by
   - Target: xananode.canonical:schema/relationship-type-represents
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1281. xananode.canonical:rel/schema-relationship-type-represents-related_to-schema-relationship-type-represented_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-represents
   - Target: xananode.canonical:schema/relationship-type-represented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1282. xananode.canonical:rel/schema-relationship-type-required_for-related_to-schema-relationship-type-requires-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-required_for
   - Target: xananode.canonical:schema/relationship-type-requires
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1283. xananode.canonical:rel/schema-relationship-type-requires_attribution-related_to-schema-relationship-type-attribution_required_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-requires_attribution
   - Target: xananode.canonical:schema/relationship-type-attribution_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1284. xananode.canonical:rel/schema-relationship-type-requires_context-related_to-schema-relationship-type-context_required_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-requires_context
   - Target: xananode.canonical:schema/relationship-type-context_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1285. xananode.canonical:rel/schema-relationship-type-requires_information-related_to-schema-relationship-type-information_required_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-requires_information
   - Target: xananode.canonical:schema/relationship-type-information_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1286. xananode.canonical:rel/schema-relationship-type-requires_review-related_to-schema-relationship-type-review_required_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-requires_review
   - Target: xananode.canonical:schema/relationship-type-review_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1287. xananode.canonical:rel/schema-relationship-type-requires_source-related_to-schema-relationship-type-source_required_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-requires_source
   - Target: xananode.canonical:schema/relationship-type-source_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1288. xananode.canonical:rel/schema-relationship-type-requires_validation-related_to-schema-relationship-type-validation_required_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-requires_validation
   - Target: xananode.canonical:schema/relationship-type-validation_required_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1289. xananode.canonical:rel/schema-relationship-type-requires-related_to-schema-relationship-type-required_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-requires
   - Target: xananode.canonical:schema/relationship-type-required_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1290. xananode.canonical:rel/schema-relationship-type-resonates_with-related_to-schema-relationship-type-resonates_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-resonates_with
   - Target: xananode.canonical:schema/relationship-type-resonates_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1291. xananode.canonical:rel/schema-relationship-type-results_from-related_to-schema-relationship-type-produces-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-results_from
   - Target: xananode.canonical:schema/relationship-type-produces
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1292. xananode.canonical:rel/schema-relationship-type-review_required_by-related_to-schema-relationship-type-requires_review-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-review_required_by
   - Target: xananode.canonical:schema/relationship-type-requires_review
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1293. xananode.canonical:rel/schema-relationship-type-reviewed_under-related_to-schema-relationship-type-under_review-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-reviewed_under
   - Target: xananode.canonical:schema/relationship-type-under_review
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1294. xananode.canonical:rel/schema-relationship-type-same_concept-related_to-schema-relationship-type-same_concept-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-same_concept
   - Target: xananode.canonical:schema/relationship-type-same_concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1295. xananode.canonical:rel/schema-relationship-type-same_entity-related_to-schema-relationship-type-same_entity-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-same_entity
   - Target: xananode.canonical:schema/relationship-type-same_entity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1296. xananode.canonical:rel/schema-relationship-type-same_person-related_to-schema-relationship-type-same_person-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-same_person
   - Target: xananode.canonical:schema/relationship-type-same_person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1297. xananode.canonical:rel/schema-relationship-type-same_source-related_to-schema-relationship-type-same_source-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-same_source
   - Target: xananode.canonical:schema/relationship-type-same_source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1298. xananode.canonical:rel/schema-relationship-type-shaped_by-related_to-schema-relationship-type-shapes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-shaped_by
   - Target: xananode.canonical:schema/relationship-type-shapes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1299. xananode.canonical:rel/schema-relationship-type-shapes-related_to-schema-relationship-type-shaped_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-shapes
   - Target: xananode.canonical:schema/relationship-type-shaped_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1300. xananode.canonical:rel/schema-relationship-type-shares_pattern_with-related_to-schema-relationship-type-shares_pattern_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-shares_pattern_with
   - Target: xananode.canonical:schema/relationship-type-shares_pattern_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1301. xananode.canonical:rel/schema-relationship-type-site_of-related_to-schema-relationship-type-occurred_at-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-site_of
   - Target: xananode.canonical:schema/relationship-type-occurred_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1302. xananode.canonical:rel/schema-relationship-type-source_required_by-related_to-schema-relationship-type-requires_source-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-source_required_by
   - Target: xananode.canonical:schema/relationship-type-requires_source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1303. xananode.canonical:rel/schema-relationship-type-specialized_by-related_to-schema-relationship-type-generalizes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-specialized_by
   - Target: xananode.canonical:schema/relationship-type-generalizes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1304. xananode.canonical:rel/schema-relationship-type-specializes-related_to-schema-relationship-type-generalized_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-specializes
   - Target: xananode.canonical:schema/relationship-type-generalized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1305. xananode.canonical:rel/schema-relationship-type-speculated_by-related_to-schema-relationship-type-speculative-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-speculated_by
   - Target: xananode.canonical:schema/relationship-type-speculative
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1306. xananode.canonical:rel/schema-relationship-type-speculative-related_to-schema-relationship-type-speculated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-speculative
   - Target: xananode.canonical:schema/relationship-type-speculated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1307. xananode.canonical:rel/schema-relationship-type-spoke_at-related_to-schema-relationship-type-featured_speaker-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-spoke_at
   - Target: xananode.canonical:schema/relationship-type-featured_speaker
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1308. xananode.canonical:rel/schema-relationship-type-starts_with-related_to-schema-relationship-type-is_start_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-starts_with
   - Target: xananode.canonical:schema/relationship-type-is_start_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1309. xananode.canonical:rel/schema-relationship-type-superseded_by-related_to-schema-relationship-type-supersedes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-superseded_by
   - Target: xananode.canonical:schema/relationship-type-supersedes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1310. xananode.canonical:rel/schema-relationship-type-supersedes-related_to-schema-relationship-type-superseded_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-supersedes
   - Target: xananode.canonical:schema/relationship-type-superseded_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1311. xananode.canonical:rel/schema-relationship-type-supported_by-related_to-schema-relationship-type-supports-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-supported_by
   - Target: xananode.canonical:schema/relationship-type-supports
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1312. xananode.canonical:rel/schema-relationship-type-supports-related_to-schema-relationship-type-supported_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-supports
   - Target: xananode.canonical:schema/relationship-type-supported_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1313. xananode.canonical:rel/schema-relationship-type-tested_by-related_to-schema-relationship-type-tests-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-tested_by
   - Target: xananode.canonical:schema/relationship-type-tests
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1314. xananode.canonical:rel/schema-relationship-type-tests-related_to-schema-relationship-type-tested_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-tests
   - Target: xananode.canonical:schema/relationship-type-tested_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1315. xananode.canonical:rel/schema-relationship-type-threatened_by-related_to-schema-relationship-type-threatens-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-threatened_by
   - Target: xananode.canonical:schema/relationship-type-threatens
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1316. xananode.canonical:rel/schema-relationship-type-threatens-related_to-schema-relationship-type-threatened_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-threatens
   - Target: xananode.canonical:schema/relationship-type-threatened_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1317. xananode.canonical:rel/schema-relationship-type-trademark_holder_for-related_to-schema-relationship-type-trademarked_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-trademark_holder_for
   - Target: xananode.canonical:schema/relationship-type-trademarked_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1318. xananode.canonical:rel/schema-relationship-type-trademarked_by-related_to-schema-relationship-type-trademark_holder_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-trademarked_by
   - Target: xananode.canonical:schema/relationship-type-trademark_holder_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1319. xananode.canonical:rel/schema-relationship-type-trained_on-related_to-schema-relationship-type-used_to_train-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-trained_on
   - Target: xananode.canonical:schema/relationship-type-used_to_train
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1320. xananode.canonical:rel/schema-relationship-type-transcluded_by-related_to-schema-relationship-type-transcludes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-transcluded_by
   - Target: xananode.canonical:schema/relationship-type-transcludes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1321. xananode.canonical:rel/schema-relationship-type-transcludes-related_to-schema-relationship-type-transcluded_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-transcludes
   - Target: xananode.canonical:schema/relationship-type-transcluded_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1322. xananode.canonical:rel/schema-relationship-type-under_review-related_to-schema-relationship-type-reviewed_under-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-under_review
   - Target: xananode.canonical:schema/relationship-type-reviewed_under
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1323. xananode.canonical:rel/schema-relationship-type-unresolved_by-related_to-schema-relationship-type-unresolved-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-unresolved_by
   - Target: xananode.canonical:schema/relationship-type-unresolved
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1324. xananode.canonical:rel/schema-relationship-type-unresolved-related_to-schema-relationship-type-unresolved_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-unresolved
   - Target: xananode.canonical:schema/relationship-type-unresolved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1325. xananode.canonical:rel/schema-relationship-type-used_as_primary_media_for-related_to-schema-relationship-type-has_primary_media-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-used_as_primary_media_for
   - Target: xananode.canonical:schema/relationship-type-has_primary_media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1326. xananode.canonical:rel/schema-relationship-type-used_by-related_to-schema-relationship-type-uses-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-used_by
   - Target: xananode.canonical:schema/relationship-type-uses
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1327. xananode.canonical:rel/schema-relationship-type-used_to_train-related_to-schema-relationship-type-trained_on-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-used_to_train
   - Target: xananode.canonical:schema/relationship-type-trained_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1328. xananode.canonical:rel/schema-relationship-type-uses-related_to-schema-relationship-type-used_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-uses
   - Target: xananode.canonical:schema/relationship-type-used_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1329. xananode.canonical:rel/schema-relationship-type-validated_by-related_to-schema-relationship-type-validates-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-validated_by
   - Target: xananode.canonical:schema/relationship-type-validates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1330. xananode.canonical:rel/schema-relationship-type-validates-related_to-schema-relationship-type-validated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-validates
   - Target: xananode.canonical:schema/relationship-type-validated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1331. xananode.canonical:rel/schema-relationship-type-validation_required_by-related_to-schema-relationship-type-requires_validation-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-validation_required_by
   - Target: xananode.canonical:schema/relationship-type-requires_validation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1332. xananode.canonical:rel/source-repository-kingc95-xananode-core-sdk-documents-project-xananode-core-sdk
   - Type: documents
   - Source: xananode.canonical:source/repository-kingc95-xananode-core-sdk
   - Target: xananode.canonical:project/xananode-core-sdk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1333. xananode.canonical:rel/source-repository-kingc95-xananode-documents-project-xananode-protocol
   - Type: documents
   - Source: xananode.canonical:source/repository-kingc95-xananode
   - Target: xananode.canonical:project/xananode-protocol
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1334. xananode.canonical:rel/source-repository-kingc95-xananode-hugo-documents-project-xananode-hugo-theme
   - Type: documents
   - Source: xananode.canonical:source/repository-kingc95-xananode-hugo
   - Target: xananode.canonical:project/xananode-hugo-theme
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1335. xananode.canonical:rel/source-repository-kingc95-xananode-studio-documents-project-xananode-studio
   - Type: documents
   - Source: xananode.canonical:source/repository-kingc95-xananode-studio
   - Target: xananode.canonical:project/xananode-studio
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1336. xananode.canonical:rel/source-repository-kingc95-xananode-workspace-documents-project-xananode-workspace
   - Type: documents
   - Source: xananode.canonical:source/repository-kingc95-xananode-workspace
   - Target: xananode.canonical:project/xananode-workspace
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1337. xananode.canonical:rel/support-supports-contributors
   - Type: supports
   - Source: xananode.canonical:source/support-xananode
   - Target: xananode.canonical:community/xananode-contributors
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1338. xananode.canonical:rel/tagline-fragment-derived-from-claim
   - Type: derived_from
   - Source: xananode.canonical:fragment/relationships-preserve-knowledge-sentence
   - Target: xananode.canonical:claim/relationships-preserve-knowledge
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1339. xananode.canonical:rel/trademark-claim-supported-by-policy
   - Type: supports
   - Source: xananode.canonical:source/xananode-trademark-policy
   - Target: xananode.canonical:claim/xananode-name-and-logo-are-trademarked
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1340. xananode.canonical:rel/trademark-policy-defines-trademark
   - Type: defines
   - Source: xananode.canonical:source/xananode-trademark-policy
   - Target: xananode.canonical:concept/trademark
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1341. xananode.canonical:rel/what-is-xananode-explains-xananode
   - Type: explains
   - Source: xananode.canonical:essay/what-is-xananode
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1342. xananode.canonical:rel/workspace-documented-by-repository
   - Type: documents
   - Source: xananode.canonical:source/xananode-workspace-repository
   - Target: xananode.canonical:project/xananode-workspace
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1343. xananode.canonical:rel/workspace-uses-core
   - Type: uses
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:project/xananode-core-sdk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1344. xananode.canonical:rel/xananode-android-chrome-192-derived-from-icon
   - Type: derived_from
   - Source: xananode.canonical:media/xananode-android-chrome-192
   - Target: xananode.canonical:media/xananode-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1345. xananode.canonical:rel/xananode-android-chrome-192-represents-xananode
   - Type: represents
   - Source: xananode.canonical:media/xananode-android-chrome-192
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1346. xananode.canonical:rel/xananode-android-chrome-512-derived-from-icon
   - Type: derived_from
   - Source: xananode.canonical:media/xananode-android-chrome-512
   - Target: xananode.canonical:media/xananode-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1347. xananode.canonical:rel/xananode-android-chrome-512-represents-xananode
   - Type: represents
   - Source: xananode.canonical:media/xananode-android-chrome-512
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1348. xananode.canonical:rel/xananode-apple-touch-icon-derived-from-icon
   - Type: derived_from
   - Source: xananode.canonical:media/xananode-apple-touch-icon
   - Target: xananode.canonical:media/xananode-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1349. xananode.canonical:rel/xananode-apple-touch-icon-represents-xananode
   - Type: represents
   - Source: xananode.canonical:media/xananode-apple-touch-icon
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1350. xananode.canonical:rel/xananode-core-sdk-identifies-compatibility
   - Type: governed_by
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:concept/compatibility-attribution
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1351. xananode.canonical:rel/xananode-core-sdk-licensed-under-apache
   - Type: licensed_under
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:source/apache-2-0-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1352. xananode.canonical:rel/xananode-defines-knowledge-substrate
   - Type: defines
   - Source: xananode.canonical:concept/xananode
   - Target: xananode.canonical:concept/knowledge-substrate
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1353. xananode.canonical:rel/xananode-favicon-16-derived-from-icon
   - Type: derived_from
   - Source: xananode.canonical:media/xananode-favicon-16
   - Target: xananode.canonical:media/xananode-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1354. xananode.canonical:rel/xananode-favicon-16-represents-xananode
   - Type: represents
   - Source: xananode.canonical:media/xananode-favicon-16
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1355. xananode.canonical:rel/xananode-favicon-32-derived-from-icon
   - Type: derived_from
   - Source: xananode.canonical:media/xananode-favicon-32
   - Target: xananode.canonical:media/xananode-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1356. xananode.canonical:rel/xananode-favicon-32-represents-xananode
   - Type: represents
   - Source: xananode.canonical:media/xananode-favicon-32
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1357. xananode.canonical:rel/xananode-favicon-ico-derived-from-icon
   - Type: derived_from
   - Source: xananode.canonical:media/xananode-favicon-ico
   - Target: xananode.canonical:media/xananode-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1358. xananode.canonical:rel/xananode-favicon-ico-represents-xananode
   - Type: represents
   - Source: xananode.canonical:media/xananode-favicon-ico
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1359. xananode.canonical:rel/xananode-has-claim-relationships-preserve-knowledge
   - Type: has_claim
   - Source: xananode.canonical:concept/xananode
   - Target: xananode.canonical:claim/relationships-preserve-knowledge
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1360. xananode.canonical:rel/xananode-has-primary-media-icon
   - Type: has_primary_media
   - Source: xananode.canonical:concept/xananode
   - Target: xananode.canonical:media/xananode-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1361. xananode.canonical:rel/xananode-hugo-theme-identifies-compatibility
   - Type: governed_by
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:concept/compatibility-attribution
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1362. xananode.canonical:rel/xananode-hugo-theme-licensed-under-apache
   - Type: licensed_under
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:source/apache-2-0-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1363. xananode.canonical:rel/xananode-logo-trademarked-by-policy
   - Type: trademarked_by
   - Source: xananode.canonical:media/xananode-icon
   - Target: xananode.canonical:source/xananode-trademark-policy
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1364. xananode.canonical:rel/xananode-name-trademarked-by-policy
   - Type: trademarked_by
   - Source: xananode.canonical:concept/xananode
   - Target: xananode.canonical:source/xananode-trademark-policy
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1365. xananode.canonical:rel/xananode-published-at-com
   - Type: documents
   - Source: xananode.canonical:concept/xananode
   - Target: xananode.canonical:source/xananode-com-domain
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1366. xananode.canonical:rel/xananode-studio-identifies-compatibility
   - Type: governed_by
   - Source: xananode.canonical:project/xananode-studio
   - Target: xananode.canonical:concept/compatibility-attribution
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1367. xananode.canonical:rel/xananode-studio-licensed-under-apache
   - Type: licensed_under
   - Source: xananode.canonical:project/xananode-studio
   - Target: xananode.canonical:source/apache-2-0-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1368. xananode.canonical:rel/xananode-workspace-identifies-compatibility
   - Type: governed_by
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:concept/compatibility-attribution
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1369. xananode.canonical:rel/xananode-workspace-licensed-under-apache
   - Type: licensed_under
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:source/apache-2-0-license
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1370. xananode.lineage:rel/leibniz-anticipated-semantic-computation
   - Type: anticipated
   - Source: xananode.lineage:person/gottfried-wilhelm-leibniz
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1371. xananode.lineage:rel/ostwald-parallel-to-otlet
   - Type: parallel_to
   - Source: xananode.lineage:person/wilhelm-ostwald
   - Target: xananode.lineage:person/paul-otlet
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1372. xananode.lineage:rel/borges-authored-forking-paths
   - Type: authored
   - Source: xananode.lineage:person/jorge-luis-borges
   - Target: xananode.lineage:publication/the-garden-of-forking-paths
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1373. xananode.lineage:rel/forking-paths-anticipated-nonlinear-text
   - Type: anticipated
   - Source: xananode.lineage:publication/the-garden-of-forking-paths
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1374. xananode.lineage:rel/van-dam-collaborated-with-nelson
   - Type: collaborated_with
   - Source: xananode.lineage:person/andries-van-dam
   - Target: xananode.example:person/ted-nelson
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1375. xananode.lineage:rel/brown-site-of-hes
   - Type: occurred_at
   - Source: xananode.lineage:place/brown-university
   - Target: xananode.lineage:project/hypertext-editing-system
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1376. xananode.lineage:rel/van-dam-implemented-fress
   - Type: implements
   - Source: xananode.lineage:person/andries-van-dam
   - Target: xananode.lineage:project/fress
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1377. xananode.lineage:rel/intermedia-implemented-scholarly-hypermedia
   - Type: implements
   - Source: xananode.lineage:project/intermedia
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1378. xananode.lineage:rel/alan-kay-extends-engelbart
   - Type: extends
   - Source: xananode.lineage:person/alan-kay
   - Target: xananode.example:person/douglas-engelbart
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1379. xananode.lineage:rel/xerox-parc-context-for-kay
   - Type: context_for
   - Source: xananode.lineage:organization/xerox-parc
   - Target: xananode.lineage:person/alan-kay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1380. xananode.lineage:rel/negroponte-shapes-media-lab
   - Type: shapes
   - Source: xananode.lineage:person/nicholas-negroponte
   - Target: xananode.lineage:organization/mit-media-lab
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1381. xananode.lineage:rel/papert-parallel-to-kay
   - Type: parallel_to
   - Source: xananode.lineage:person/seymour-papert
   - Target: xananode.lineage:person/alan-kay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1382. xananode.lineage:rel/minsky-context-for-agents
   - Type: context_for
   - Source: xananode.lineage:person/marvin-minsky
   - Target: xananode.lineage:technology/apple-knowledge-navigator
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1383. xananode.lineage:rel/brondmo-introduced-micons
   - Type: introduced
   - Source: xananode.lineage:person/hans-peter-brondmo
   - Target: xananode.lineage:technology/micons
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1384. xananode.lineage:rel/hyperland-features-micons
   - Type: features
   - Source: xananode.lineage:publication/hyperland
   - Target: xananode.lineage:technology/micons
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1385. xananode.lineage:rel/winter-demonstrated-interactive-music
   - Type: demonstrates
   - Source: xananode.lineage:person/robert-winter
   - Target: xananode.lineage:project/interactive-beethoven-ninth
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1386. xananode.lineage:rel/abel-demonstrated-guernica
   - Type: demonstrates
   - Source: xananode.lineage:person/robert-abel
   - Target: xananode.lineage:project/interactive-guernica
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1387. xananode.lineage:rel/sutherland-anticipated-spatial-computing
   - Type: anticipated
   - Source: xananode.lineage:person/ivan-sutherland
   - Target: xananode.lineage:tool/hyperland-vr
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1388. xananode.lineage:rel/lanier-popularized-vr
   - Type: popularized
   - Source: xananode.lineage:person/jaron-lanier
   - Target: xananode.lineage:organization/vpl-research
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1389. xananode.lineage:rel/fisher-demonstrated-nasa-vr
   - Type: demonstrates
   - Source: xananode.lineage:person/scott-fisher
   - Target: xananode.lineage:organization/nasa
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1390. xananode.lineage:rel/dirk-gently-anticipated-hyperland
   - Type: anticipated
   - Source: xananode.lineage:publication/dirk-gentlys-holistic-detective-agency
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1391. xananode.lineage:rel/bbc-two-created-hyperland-broadcast-context
   - Type: created
   - Source: xananode.lineage:organization/bbc-two
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1392. xananode.lineage:rel/wurman-created-ted-context
   - Type: created
   - Source: xananode.lineage:person/richard-saul-wurman
   - Target: xananode.lineage:event/ted2-1990
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1393. xananode.lineage:rel/harry-marks-participated-in-ted2
   - Type: participated_in
   - Source: xananode.lineage:person/harry-marks
   - Target: xananode.lineage:event/ted2-1990
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1394. xananode.lineage:rel/sculley-presented-knowledge-navigator
   - Type: presented
   - Source: xananode.lineage:person/john-sculley
   - Target: xananode.lineage:technology/apple-knowledge-navigator
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1395. xananode.lineage:rel/knowledge-navigator-parallel-to-hyperland-agent
   - Type: parallel_to
   - Source: xananode.lineage:technology/apple-knowledge-navigator
   - Target: xananode.lineage:person/tom-baker
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1396. xananode.lineage:rel/bill-atkinson-implemented-hypercard
   - Type: implements
   - Source: xananode.lineage:person/bill-atkinson
   - Target: xananode.lineage:technology/hypercard
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1397. xananode.lineage:rel/ted2-features-robert-abel
   - Type: features
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:person/robert-abel
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1398. xananode.lineage:rel/ted2-features-bill-atkinson
   - Type: features
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:person/bill-atkinson
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1399. xananode.lineage:rel/berners-lee-collaborated-with-cailliau
   - Type: collaborated_with
   - Source: xananode.lineage:person/tim-berners-lee
   - Target: xananode.lineage:person/robert-cailliau
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1400. xananode.lineage:rel/cern-context-for-web
   - Type: context_for
   - Source: xananode.lineage:place/cern
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1401. xananode.lineage:rel/html-implements-markup
   - Type: implements
   - Source: xananode.lineage:technology/html
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1402. xananode.lineage:rel/http-enables-web
   - Type: enables
   - Source: xananode.lineage:technology/http
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1403. xananode.lineage:rel/url-uri-enables-addressability
   - Type: enables
   - Source: xananode.lineage:technology/url-uri
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1404. xananode.lineage:rel/ncsa-popularized-mosaic
   - Type: popularized
   - Source: xananode.lineage:organization/ncsa
   - Target: xananode.lineage:technology/mosaic
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1405. xananode.lineage:rel/andreessen-popularized-web
   - Type: popularized
   - Source: xananode.lineage:person/marc-andreessen
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1406. xananode.lineage:rel/web-incomplete-contrasts-with-xananode
   - Type: contrasts_with
   - Source: xananode.lineage:concept/web-as-incomplete-hypertext
   - Target: xananode.example:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1407. xananode.lineage:rel/guide-implemented-pc-hypertext
   - Type: implements
   - Source: xananode.lineage:technology/guide
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1408. xananode.lineage:rel/storyspace-implemented-hypertext-literature
   - Type: implements
   - Source: xananode.lineage:project/storyspace
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1409. xananode.lineage:rel/zog-kms-implemented-frame-navigation
   - Type: implements
   - Source: xananode.lineage:project/zog-kms
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1410. xananode.lineage:rel/xanadu-at-autodesk-implements-xanadu
   - Type: implements
   - Source: xananode.lineage:project/xanadu-at-autodesk
   - Target: xananode.example:project/project-xanadu
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1411. xananode.lineage:rel/xananode-preserves-lost-lineage
   - Type: preserves
   - Source: xananode.example:concept/xananode
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1412. xananode.lineage:rel/xananode-extends-bush-trails
   - Type: extends
   - Source: xananode.example:concept/xananode
   - Target: xananode.example:project/memex
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1413. xananode.lineage:rel/xananode-extends-transclusion
   - Type: extends
   - Source: xananode.example:concept/xananode
   - Target: xananode.example:concept/transclusion
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1414. xananode.lineage:rel/conflict-preserves-disagreement
   - Type: preserves
   - Source: xananode.lineage:concept/conflict-disputed-identity
   - Target: xananode.example:concept/federated-knowledge-substrates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1415. xananode.lineage:rel/git-backed-substrate-enables-history
   - Type: enables
   - Source: xananode.lineage:technology/git-backed-substrate
   - Target: xananode.example:concept/provenance
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1416. xananode.lineage:rel/babel-maps-to-translation
   - Type: maps_to
   - Source: xananode.lineage:tool/babel
   - Target: xananode.example:concept/schema-extension
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1417. xananode.lineage:rel/hyperland-vr-implements-spatial-navigation
   - Type: implements
   - Source: xananode.lineage:tool/hyperland-vr
   - Target: xananode.example:concept/federated-knowledge-substrates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1418. xananode.lineage:rel/overlap-context-for-federation
   - Type: context_for
   - Source: xananode.lineage:concept/authored-substrate-overlap
   - Target: xananode.example:concept/federated-knowledge-substrates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1419. xananode.lineage:rel/overlap-has-federation-signal-claim
   - Type: has_claim
   - Source: xananode.lineage:concept/authored-substrate-overlap
   - Target: xananode.lineage:claim/overlap-is-federation-signal
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1420. xananode.lineage:rel/overlap-has-merge-claim
   - Type: has_claim
   - Source: xananode.lineage:concept/authored-substrate-overlap
   - Target: xananode.lineage:claim/merge-is-authored-interpretation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1421. xananode.lineage:rel/overlap-has-lineage-pack-claim
   - Type: has_claim
   - Source: xananode.lineage:concept/authored-substrate-overlap
   - Target: xananode.lineage:claim/lineage-pack-can-overlap-canonical-pack
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1422. xananode.lineage:rel/overlap-preserves-disputed-identity
   - Type: preserves
   - Source: xananode.lineage:concept/authored-substrate-overlap
   - Target: xananode.lineage:concept/conflict-disputed-identity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1423. xananode.lineage:rel/federation-signal-supports-xananode
   - Type: supports
   - Source: xananode.lineage:claim/overlap-is-federation-signal
   - Target: xananode.example:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1424. xananode.lineage:rel/merge-claim-refines-conflict
   - Type: refines
   - Source: xananode.lineage:claim/merge-is-authored-interpretation
   - Target: xananode.lineage:concept/conflict-disputed-identity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1425. xananode.lineage:rel/lineage-overlap-claim-explains-pack-boundary
   - Type: explains
   - Source: xananode.lineage:claim/lineage-pack-can-overlap-canonical-pack
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1426. xananode.lineage:rel/lost-lineage-context-for-xananode
   - Type: context_for
   - Source: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Target: xananode.example:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1427. xananode.lineage:rel/otlet-anticipated-knowledge-systems
   - Type: anticipated
   - Source: xananode.lineage:person/paul-otlet
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1428. xananode.lineage:rel/wells-proposed-world-brain
   - Type: proposed
   - Source: xananode.lineage:person/h-g-wells
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1429. xananode.lineage:rel/bush-influenced-adams-lineage
   - Type: influenced
   - Source: xananode.example:person/vannevar-bush
   - Target: xananode.lineage:person/douglas-adams
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1430. xananode.lineage:rel/nelson-influenced-hyperland
   - Type: influenced
   - Source: xananode.example:person/ted-nelson
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1431. xananode.lineage:rel/adams-authored-hyperland
   - Type: authored
   - Source: xananode.lineage:person/douglas-adams
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1432. xananode.lineage:rel/whitby-created-hyperland
   - Type: created
   - Source: xananode.lineage:person/max-whitby
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1433. xananode.lineage:rel/hyperland-features-tom-baker
   - Type: features
   - Source: xananode.lineage:publication/hyperland
   - Target: xananode.lineage:person/tom-baker
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1434. xananode.lineage:rel/hyperland-contemporary-of-ted2
   - Type: contemporary_of
   - Source: xananode.lineage:publication/hyperland
   - Target: xananode.lineage:event/ted2-1990
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1435. xananode.lineage:rel/ted2-occurred-at-monterey
   - Type: occurred_at
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:place/monterey-california
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1436. xananode.lineage:rel/ted2-features-adams
   - Type: features
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:person/douglas-adams
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1437. xananode.lineage:rel/ted2-features-bob-stein
   - Type: features
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:person/bob-stein
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1438. xananode.lineage:rel/bob-stein-created-voyager
   - Type: created
   - Source: xananode.lineage:person/bob-stein
   - Target: xananode.lineage:organization/voyager-company
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1439. xananode.lineage:rel/ted2-features-alan-kay
   - Type: features
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:person/alan-kay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1440. xananode.lineage:rel/alan-kay-shaped-dynamic-media
   - Type: shapes
   - Source: xananode.lineage:person/alan-kay
   - Target: xananode.lineage:organization/xerox-parc
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1441. xananode.lineage:rel/hypercard-popularized-hypermedia
   - Type: popularized
   - Source: xananode.lineage:technology/hypercard
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1442. xananode.lineage:rel/berners-lee-implemented-web
   - Type: implements
   - Source: xananode.lineage:person/tim-berners-lee
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1443. xananode.lineage:rel/web-contrasts-with-xananode
   - Type: contrasts_with
   - Source: xananode.lineage:technology/world-wide-web
   - Target: xananode.example:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1444. xananode.lineage:rel/aspen-anticipated-spatial-media
   - Type: anticipated
   - Source: xananode.lineage:project/aspen-movie-map
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1445. xananode.lineage:rel/trail-starts-with-lost-lineage
   - Type: starts_with
   - Source: xananode.lineage:trail/lost-lineage-intertwingled-trail
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1446. xananode.lineage:rel/trail-arrives-at-xananode
   - Type: arrives_at
   - Source: xananode.lineage:trail/lost-lineage-intertwingled-trail
   - Target: xananode.example:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

1447. xananode.review:rel/fixture-context-for-review
   - Type: context_for
   - Source: xananode.review:observation/unresolved-review-fixture
   - Target: xananode.example:concept/review-suggestions
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

