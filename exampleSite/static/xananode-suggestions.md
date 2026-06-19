# XanaNode Suggestions

Status: pending user approval

These suggestions are not auto-applied. Review each replacement before editing content.

Autolinks: 3
Pending transclusions: 1
Implemented transclusions: 4
Merge candidates: 527
Imported relationships touching existing nodes: 474

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

3. As We May Think
   - Existing: As We May Think (xananode.example:source/as-we-may-think)
   - Incoming: As We May Think (example.minimal:source/as-we-may-think)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

4. Start Here
   - Existing: Start Here (xananode.example:essay/start-here)
   - Incoming: Start Here (example.minimal:trail/start-here)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

5. Knowledge Substrate
   - Existing: Knowledge Substrate (xananode.example:concept/knowledge-substrate)
   - Incoming: Knowledge Substrate (xananode.canonical:concept/knowledge-substrate)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

6. Protocol Artifacts
   - Existing: Protocol Artifacts (xananode.example:concept/protocol-artifacts)
   - Incoming: Protocol Artifacts (xananode.canonical:concept/protocol-artifacts)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

7. XanaNode
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

8. What Is XanaNode?
   - Existing: What Is XanaNode? (xananode.example:essay/what-is-xananode)
   - Incoming: What Is XanaNode? (xananode.canonical:essay/what-is-xananode)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

9. XanaNode Icon
   - Existing: XanaNode Icon (xananode.example:media/xananode-icon)
   - Incoming: XanaNode Icon (xananode.canonical:media/xananode-icon)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

10. XanaNode Hugo Theme
   - Existing: XanaNode Hugo Theme (xananode.example:project/xananode-hugo-theme)
   - Incoming: XanaNode Hugo Theme (xananode.canonical:project/xananode-hugo-theme)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

11. Compatibility Report Schema
   - Existing: Compatibility Report Schema (xananode.example:schema/compatibility-report-schema)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/canonical-schema-compatibility-report)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

12. Merge Report Schema
   - Existing: Merge Report Schema (xananode.example:schema/merge-report-schema)
   - Incoming: Merge Report Schema (xananode.canonical:schema/canonical-schema-merge-report)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

13. Substrate Manifest Schema
   - Existing: Substrate Manifest Schema (xananode.example:schema/substrate-manifest-schema)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/canonical-schema-substrate-manifest)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

14. Substrate Node Schema
   - Existing: Substrate Node Schema (xananode.example:schema/substrate-node-schema)
   - Incoming: Substrate Node Schema (xananode.canonical:schema/canonical-schema-substrate-node)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

15. Substrate Relationships Schema
   - Existing: Substrate Relationships Schema (xananode.example:schema/substrate-relationships-schema)
   - Incoming: Substrate Relationships Schema (xananode.canonical:schema/canonical-schema-substrate-relationships)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

16. Compatibility Report Schema
   - Existing: Compatibility Report Schema (xananode.example:schema/compatibility-report-schema)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/compatibility-report-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

17. Known Implementations Registry
   - Existing: Known Implementations Registry (xananode.example:concept/known-implementations-registry)
   - Incoming: Known Implementations Registry (xananode.canonical:schema/known-implementations-registry)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

18. Merge Report Schema
   - Existing: Merge Report Schema (xananode.example:schema/merge-report-schema)
   - Incoming: Merge Report Schema (xananode.canonical:schema/merge-report-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

19. Namespace Registry
   - Existing: Namespace Registry (xananode.example:concept/namespace-registry)
   - Incoming: Namespace Registry (xananode.canonical:schema/namespace-registry)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

20. Namespace Schema
   - Existing: Namespace Schema (xananode.example:schema/namespace-schema)
   - Incoming: Namespace Schema (xananode.canonical:schema/namespace-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

21. Substrate Manifest Schema
   - Existing: Substrate Manifest Schema (xananode.example:schema/substrate-manifest-schema)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/substrate-manifest-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

22. Substrate Node Schema
   - Existing: Substrate Node Schema (xananode.example:schema/substrate-node-schema)
   - Incoming: Substrate Node Schema (xananode.canonical:schema/substrate-node-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

23. Substrate Relationships Schema
   - Existing: Substrate Relationships Schema (xananode.example:schema/substrate-relationships-schema)
   - Incoming: Substrate Relationships Schema (xananode.canonical:schema/substrate-relationships-schema)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

24. XanaNode Core SDK Repository
   - Existing: XanaNode Core SDK Repository (xananode.example:source/xananode-core-sdk-repo)
   - Incoming: XanaNode Core SDK Repository (xananode.canonical:source/xananode-core-sdk-repository)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

25. XanaNode Hugo Repository
   - Existing: XanaNode Hugo Repository (xananode.example:source/xananode-hugo-repo)
   - Incoming: XanaNode Hugo Repository (xananode.canonical:source/xananode-hugo-repository)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

26. XanaNode Protocol Repository
   - Existing: XanaNode Protocol Repository (xananode.example:source/xananode-protocol-repo)
   - Incoming: XanaNode Protocol Repository (xananode.canonical:source/xananode-protocol-repository)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

27. XanaNode Studio Repository
   - Existing: XanaNode Studio Repository (xananode.example:source/xananode-studio-repo)
   - Incoming: XanaNode Studio Repository (xananode.canonical:source/xananode-studio-repository)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

28. XanaNode Workspace Repository
   - Existing: XanaNode Workspace Repository (xananode.example:source/xananode-workspace-repo)
   - Incoming: XanaNode Workspace Repository (xananode.canonical:source/xananode-workspace-repository)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

29. Cytoscape.js
   - Existing: Cytoscape.js (xananode.example:technology/cytoscape-js)
   - Incoming: Cytoscape.js (xananode.canonical:technology/cytoscape-js)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

30. Hugo
   - Existing: Hugo (xananode.example:technology/hugo)
   - Incoming: Hugo (xananode.canonical:technology/hugo)
   - Confidence: 1
   - Reason: Incoming node has the same protocol id as an existing node.
   - Approved: false

31. A knowledge substrate is structure, not just information
   - Existing: Knowledge Substrate (xananode.example:concept/knowledge-substrate)
   - Incoming: A knowledge substrate is structure, not just information (example.minimal:claim/substrate-is-structure)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

32. A knowledge substrate is structure, not just information
   - Existing: A knowledge substrate is structure, not information (xananode.example:claim/claim-substrate-is-structure)
   - Incoming: A knowledge substrate is structure, not just information (example.minimal:claim/substrate-is-structure)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

33. Associative Trails
   - Existing: Associative Trails Fragment (xananode.example:fragment/as-we-may-think-0004)
   - Incoming: Associative Trails (example.minimal:concept/associative-trails)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

34. As We May Think Fragment 0004
   - Existing: As We May Think (xananode.example:source/as-we-may-think)
   - Incoming: As We May Think Fragment 0004 (example.minimal:fragment/as-we-may-think-0004)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

35. Knowledge Substrate
   - Existing: Federated Knowledge Substrates (xananode.example:concept/federated-knowledge-substrates)
   - Incoming: Knowledge Substrate (example.minimal:concept/knowledge-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

36. Knowledge Substrate
   - Existing: A knowledge substrate is structure, not information (xananode.example:claim/claim-substrate-is-structure)
   - Incoming: Knowledge Substrate (example.minimal:concept/knowledge-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

37. As We May Think
   - Existing: Associative Trails Fragment (xananode.example:fragment/as-we-may-think-0004)
   - Incoming: As We May Think (example.minimal:source/as-we-may-think)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

38. Relationships Preserve Knowledge
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationships Preserve Knowledge (xananode.canonical:claim/relationships-preserve-knowledge)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

39. XanaNode Contributors
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Contributors (xananode.canonical:community/xananode-contributors)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

40. Knowledge Substrate
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Knowledge Substrate (xananode.canonical:concept/knowledge-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

41. Knowledge Substrate
   - Existing: Federated Knowledge Substrates (xananode.example:concept/federated-knowledge-substrates)
   - Incoming: Knowledge Substrate (xananode.canonical:concept/knowledge-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

42. Knowledge Substrate
   - Existing: A knowledge substrate is structure, not information (xananode.example:claim/claim-substrate-is-structure)
   - Incoming: Knowledge Substrate (xananode.canonical:concept/knowledge-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

43. Protocol Artifacts
   - Existing: Protocol Artifacts Trail (xananode.example:trail/protocol-artifacts-trail)
   - Incoming: Protocol Artifacts (xananode.canonical:concept/protocol-artifacts)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

44. Protocol Artifacts
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Protocol Artifacts (xananode.canonical:concept/protocol-artifacts)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

45. Substrate Projection Layer
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Projection Layer (xananode.canonical:concept/substrate-projection-layer)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

46. XanaNode
   - Existing: XanaNode Implementation Stack Trail (xananode.example:trail/xananode-implementation-stack-trail)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

47. XanaNode
   - Existing: XanaNode Core Trail (xananode.example:trail/xananode-core-trail)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

48. XanaNode
   - Existing: Protocol Artifacts Trail (xananode.example:trail/protocol-artifacts-trail)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

49. XanaNode
   - Existing: Historical Lineage Trail (xananode.example:trail/historical-lineage-trail)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

50. XanaNode
   - Existing: Branching Orientation Trail (xananode.example:trail/branching-orientation-trail)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

51. XanaNode
   - Existing: Static Publishing (xananode.example:technology/static-publishing)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

52. XanaNode
   - Existing: Hugo (xananode.example:technology/hugo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

53. XanaNode
   - Existing: Cytoscape.js (xananode.example:technology/cytoscape-js)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

54. XanaNode
   - Existing: XanaNode Workspace Repository (xananode.example:source/xananode-workspace-repo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

55. XanaNode
   - Existing: XanaNode Studio Repository (xananode.example:source/xananode-studio-repo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

56. XanaNode
   - Existing: XanaNode Protocol Repository (xananode.example:source/xananode-protocol-repo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

57. XanaNode
   - Existing: XanaNode Hugo Repository (xananode.example:source/xananode-hugo-repo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

58. XanaNode
   - Existing: XanaNode Core SDK Repository (xananode.example:source/xananode-core-sdk-repo)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

59. XanaNode
   - Existing: Xanadu: Document Interconnection Enabling Re-use (xananode.example:source/xanadu-document-interconnection)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

60. XanaNode
   - Existing: 9.6 Million Links in Source Code Comments (xananode.example:source/source-code-link-decay-study)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

61. XanaNode
   - Existing: Mother of All Demos (xananode.example:source/mother-of-all-demos)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

62. XanaNode
   - Existing: As We May Think (xananode.example:source/as-we-may-think)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

63. XanaNode
   - Existing: XanaNode Relationship Types (xananode.example:schema/xananode-relationship-types)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

64. XanaNode
   - Existing: XanaNode Node Types (xananode.example:schema/xananode-node-types)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

65. XanaNode
   - Existing: XanaNode Core Schema (xananode.example:schema/xananode-core-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

66. XanaNode
   - Existing: Substrate Relationships Schema (xananode.example:schema/substrate-relationships-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

67. XanaNode
   - Existing: Substrate Node Schema (xananode.example:schema/substrate-node-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

68. XanaNode
   - Existing: Substrate Manifest Schema (xananode.example:schema/substrate-manifest-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

69. XanaNode
   - Existing: Namespace Schema (xananode.example:schema/namespace-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

70. XanaNode
   - Existing: Merge Report Schema (xananode.example:schema/merge-report-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

71. XanaNode
   - Existing: Compatibility Report Schema (xananode.example:schema/compatibility-report-schema)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

72. XanaNode
   - Existing: XanaNode Hugo Theme (xananode.example:project/xananode-hugo-theme)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

73. XanaNode
   - Existing: Project Xanadu (xananode.example:project/project-xanadu)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

74. XanaNode
   - Existing: NLS (xananode.example:project/nls)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

75. XanaNode
   - Existing: Memex (xananode.example:project/memex)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

76. XanaNode
   - Existing: Vannevar Bush (xananode.example:person/vannevar-bush)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

77. XanaNode
   - Existing: Ted Nelson (xananode.example:person/ted-nelson)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

78. XanaNode
   - Existing: Douglas Engelbart (xananode.example:person/douglas-engelbart)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

79. XanaNode
   - Existing: Link Rot (xananode.example:observation/link-rot)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

80. XanaNode
   - Existing: XanaNode Icon (xananode.example:media/xananode-icon)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

81. XanaNode
   - Existing: What Is XanaNode? (xananode.example:essay/what-is-xananode)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

82. XanaNode
   - Existing: Using Hugo with Protocol JSON (xananode.example:essay/using-hugo-with-protocol-json)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

83. XanaNode
   - Existing: Start Here (xananode.example:essay/start-here)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

84. XanaNode
   - Existing: Unlabeled Hyperlink (xananode.example:concept/unlabeled-hyperlink)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

85. XanaNode
   - Existing: Typed Relationships (xananode.example:concept/typed-relationships)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

86. XanaNode
   - Existing: Tumbler Addressing (xananode.example:concept/tumbler-addressing)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

87. XanaNode
   - Existing: Transclusion (xananode.example:concept/transclusion)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

88. XanaNode
   - Existing: Substrate Relationship List (xananode.example:concept/substrate-relationship-list)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

89. XanaNode
   - Existing: Substrate Node Record (xananode.example:concept/substrate-node-record)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

90. XanaNode
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

91. XanaNode
   - Existing: Single Source of Truth (xananode.example:concept/single-source-of-truth)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

92. XanaNode
   - Existing: Schema Extension (xananode.example:concept/schema-extension)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

93. XanaNode
   - Existing: Review Suggestions (xananode.example:concept/review-suggestions)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

94. XanaNode
   - Existing: Provenance (xananode.example:concept/provenance)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

95. XanaNode
   - Existing: Protocol Artifacts (xananode.example:concept/protocol-artifacts)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

96. XanaNode
   - Existing: Namespacing (xananode.example:concept/namespacing)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

97. XanaNode
   - Existing: Namespace Registry (xananode.example:concept/namespace-registry)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

98. XanaNode
   - Existing: Moderation Model (xananode.example:concept/moderation-model)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

99. XanaNode
   - Existing: Merge Validation (xananode.example:concept/merge-validation)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

100. XanaNode
   - Existing: Merge Report (xananode.example:concept/merge-report)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

101. XanaNode
   - Existing: Known Implementations Registry (xananode.example:concept/known-implementations-registry)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

102. XanaNode
   - Existing: Knowledge Substrate (xananode.example:concept/knowledge-substrate)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

103. XanaNode
   - Existing: Independent Moderation (xananode.example:concept/independent-moderation)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

104. XanaNode
   - Existing: Fragment Node (xananode.example:concept/fragment-node)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

105. XanaNode
   - Existing: Federation Rules (xananode.example:concept/federation-rules)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

106. XanaNode
   - Existing: Federation Example (xananode.example:concept/federation-example)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

107. XanaNode
   - Existing: Federated Knowledge Substrates (xananode.example:concept/federated-knowledge-substrates)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

108. XanaNode
   - Existing: Dispute Resolution (xananode.example:concept/dispute-resolution)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

109. XanaNode
   - Existing: Deep Linking (xananode.example:concept/deep-linking)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

110. XanaNode
   - Existing: Custom Extension Substrate (xananode.example:concept/custom-extension-substrate)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

111. XanaNode
   - Existing: Compatibility Report (xananode.example:concept/compatibility-report)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

112. XanaNode
   - Existing: Compatibility Levels (xananode.example:concept/compatibility-levels)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

113. XanaNode
   - Existing: Civilizational Memory (xananode.example:concept/civilizational-memory)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

114. XanaNode
   - Existing: Canonical Type Policy (xananode.example:concept/canonical-type-policy)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

115. XanaNode
   - Existing: A knowledge substrate is structure, not information (xananode.example:claim/claim-substrate-is-structure)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

116. XanaNode
   - Existing: Typed relationships preserve context that hyperlinks lose (xananode.example:claim/claim-relationships-preserve-context)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

117. XanaNode
   - Existing: Substrates should merge without collapsing disagreement (xananode.example:claim/claim-merge-without-collapse)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

118. XanaNode
   - Existing: GitHub (xananode.example:source/source-github)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

119. XanaNode
   - Existing: Support (xananode.example:source/source-support)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

120. XanaNode
   - Existing: Reusable Media Fragment (xananode.example:fragment/xanadu-document-interconnection-0001)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

121. XanaNode
   - Existing: Augmenting Human Intelligence Fragment (xananode.example:fragment/mother-of-all-demos-0001)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

122. XanaNode
   - Existing: Associative Trails Fragment (xananode.example:fragment/as-we-may-think-0004)
   - Incoming: XanaNode (xananode.canonical:concept/xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

123. What Is XanaNode?
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: What Is XanaNode? (xananode.canonical:essay/what-is-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

124. XanaNode Canonical Pack Bootstrap
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Canonical Pack Bootstrap (xananode.canonical:event/xananode-canonical-pack-bootstrap)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

125. Relationships Preserve Knowledge Sentence
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationships Preserve Knowledge Sentence (xananode.canonical:fragment/relationships-preserve-knowledge-sentence)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

126. XanaNode Icon
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Icon (xananode.canonical:media/xananode-icon)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

127. Markdown Recreation Friction
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Markdown Recreation Friction (xananode.canonical:observation/markdown-recreation-friction)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

128. Built By Bots
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Built By Bots (xananode.canonical:organization/built-by-bots)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

129. Cytoscape Consortium
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Cytoscape Consortium (xananode.canonical:organization/cytoscape-consortium)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

130. Hugo Authors
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hugo Authors (xananode.canonical:organization/hugo-authors)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

131. Christian Siefen
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Christian Siefen (xananode.canonical:person/christian-siefen)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

132. World Wide Web
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: World Wide Web (xananode.canonical:place/world-wide-web)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

133. XanaNode Core SDK
   - Existing: XanaNode Core SDK Repository (xananode.example:source/xananode-core-sdk-repo)
   - Incoming: XanaNode Core SDK (xananode.canonical:project/xananode-core-sdk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

134. XanaNode Core SDK
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core SDK (xananode.canonical:project/xananode-core-sdk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

135. XanaNode Hugo Theme
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Hugo Theme (xananode.canonical:project/xananode-hugo-theme)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

136. XanaNode Protocol
   - Existing: XanaNode Protocol Repository (xananode.example:source/xananode-protocol-repo)
   - Incoming: XanaNode Protocol (xananode.canonical:project/xananode-protocol)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

137. XanaNode Protocol
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Protocol (xananode.canonical:project/xananode-protocol)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

138. XanaNode Workspace
   - Existing: XanaNode Workspace Repository (xananode.example:source/xananode-workspace-repo)
   - Incoming: XanaNode Workspace (xananode.canonical:project/xananode-workspace)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

139. XanaNode Workspace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Workspace (xananode.canonical:project/xananode-workspace)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

140. XNP-0004 Merge Validation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XNP-0004 Merge Validation (xananode.canonical:publication/xnp-0004-merge-validation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

141. XNP-0004 Merge Validation
   - Existing: Merge Validation (xananode.example:concept/merge-validation)
   - Incoming: XNP-0004 Merge Validation (xananode.canonical:publication/xnp-0004-merge-validation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

142. Protocol Implements Relationship Preservation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Protocol Implements Relationship Preservation (xananode.canonical:relationship/protocol-implements-claim)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

143. Canonical Pack v0.1.0
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Canonical Pack v0.1.0 (xananode.canonical:revision/canonical-pack-v0-1-0)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

144. Author Profile Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Author Profile Schema (xananode.canonical:schema/author-profile-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

145. Author Profile Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Author Profile Schema (xananode.canonical:schema/canonical-schema-author-profile)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

146. Compatibility Report Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/canonical-schema-compatibility-report)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

147. Compatibility Report Schema
   - Existing: Compatibility Report (xananode.example:concept/compatibility-report)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/canonical-schema-compatibility-report)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

148. Merge Report Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Merge Report Schema (xananode.canonical:schema/canonical-schema-merge-report)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

149. Merge Report Schema
   - Existing: Merge Report (xananode.example:concept/merge-report)
   - Incoming: Merge Report Schema (xananode.canonical:schema/canonical-schema-merge-report)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

150. Nanopublication Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Nanopublication Schema (xananode.canonical:schema/canonical-schema-nanopublication)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

151. Ro Crate Metadata Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Ro Crate Metadata Schema (xananode.canonical:schema/canonical-schema-ro-crate-metadata)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

152. Substrate Diff Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Diff Schema (xananode.canonical:schema/canonical-schema-substrate-diff)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

153. Substrate Manifest Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/canonical-schema-substrate-manifest)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

154. Substrate Manifest Schema
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/canonical-schema-substrate-manifest)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

155. Substrate Node Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Node Schema (xananode.canonical:schema/canonical-schema-substrate-node)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

156. Substrate Relationships Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Relationships Schema (xananode.canonical:schema/canonical-schema-substrate-relationships)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

157. Xananode Node Types Schema
   - Existing: XanaNode Node Types (xananode.example:schema/xananode-node-types)
   - Incoming: Xananode Node Types Schema (xananode.canonical:schema/canonical-schema-xananode-node-types)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

158. Xananode Node Types Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Xananode Node Types Schema (xananode.canonical:schema/canonical-schema-xananode-node-types)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

159. Xananode Property Registry Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Xananode Property Registry Schema (xananode.canonical:schema/canonical-schema-xananode-property-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

160. Xananode Relationship Types Schema
   - Existing: XanaNode Relationship Types (xananode.example:schema/xananode-relationship-types)
   - Incoming: Xananode Relationship Types Schema (xananode.canonical:schema/canonical-schema-xananode-relationship-types)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

161. Xananode Relationship Types Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Xananode Relationship Types Schema (xananode.canonical:schema/canonical-schema-xananode-relationship-types)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

162. Canonical Schemas Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Canonical Schemas Registry (xananode.canonical:schema/canonical-schemas-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

163. Compatibility Report Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/compatibility-report-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

164. Compatibility Report Schema
   - Existing: Compatibility Report (xananode.example:concept/compatibility-report)
   - Incoming: Compatibility Report Schema (xananode.canonical:schema/compatibility-report-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

165. Known Implementations Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Known Implementations Registry (xananode.canonical:schema/known-implementations-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

166. Merge Report Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Merge Report Schema (xananode.canonical:schema/merge-report-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

167. Merge Report Schema
   - Existing: Merge Report (xananode.example:concept/merge-report)
   - Incoming: Merge Report Schema (xananode.canonical:schema/merge-report-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

168. Federation Merge Report Example Namespace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Federation Merge Report Example Namespace (xananode.canonical:schema/namespace-example.merge)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

169. Federation Merge Report Example Namespace
   - Existing: Merge Report (xananode.example:concept/merge-report)
   - Incoming: Federation Merge Report Example Namespace (xananode.canonical:schema/namespace-example.merge)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

170. Minimal Example Namespace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Minimal Example Namespace (xananode.canonical:schema/namespace-example.minimal)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

171. Museum Extension Example Namespace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Museum Extension Example Namespace (xananode.canonical:schema/namespace-example.museum)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

172. Federation Example A Namespace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Federation Example A Namespace (xananode.canonical:schema/namespace-example.researcher_a)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

173. Federation Example A Namespace
   - Existing: Federation Example (xananode.example:concept/federation-example)
   - Incoming: Federation Example A Namespace (xananode.canonical:schema/namespace-example.researcher_a)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

174. Federation Example B Namespace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Federation Example B Namespace (xananode.canonical:schema/namespace-example.researcher_b)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

175. Federation Example B Namespace
   - Existing: Federation Example (xananode.example:concept/federation-example)
   - Incoming: Federation Example B Namespace (xananode.canonical:schema/namespace-example.researcher_b)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

176. Namespace Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Namespace Registry (xananode.canonical:schema/namespace-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

177. Namespace Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Namespace Schema (xananode.canonical:schema/namespace-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

178. XanaNode Core
   - Existing: XanaNode Core Trail (xananode.example:trail/xananode-core-trail)
   - Incoming: XanaNode Core (xananode.canonical:schema/namespace-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

179. XanaNode Core
   - Existing: XanaNode Core SDK Repository (xananode.example:source/xananode-core-sdk-repo)
   - Incoming: XanaNode Core (xananode.canonical:schema/namespace-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

180. XanaNode Core
   - Existing: XanaNode Core Schema (xananode.example:schema/xananode-core-schema)
   - Incoming: XanaNode Core (xananode.canonical:schema/namespace-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

181. XanaNode Core
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core (xananode.canonical:schema/namespace-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

182. Nanopublication Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Nanopublication Schema (xananode.canonical:schema/nanopublication-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

183. Claim
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim (xananode.canonical:schema/node-type-claim)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

184. Community
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Community (xananode.canonical:schema/node-type-community)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

185. Concept
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

186. Concept
   - Existing: Unlabeled Hyperlink (xananode.example:concept/unlabeled-hyperlink)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

187. Concept
   - Existing: Typed Relationships (xananode.example:concept/typed-relationships)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

188. Concept
   - Existing: Tumbler Addressing (xananode.example:concept/tumbler-addressing)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

189. Concept
   - Existing: Transclusion (xananode.example:concept/transclusion)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

190. Concept
   - Existing: Substrate Relationship List (xananode.example:concept/substrate-relationship-list)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

191. Concept
   - Existing: Substrate Node Record (xananode.example:concept/substrate-node-record)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

192. Concept
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

193. Concept
   - Existing: Single Source of Truth (xananode.example:concept/single-source-of-truth)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

194. Concept
   - Existing: Schema Extension (xananode.example:concept/schema-extension)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

195. Concept
   - Existing: Review Suggestions (xananode.example:concept/review-suggestions)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

196. Concept
   - Existing: Provenance (xananode.example:concept/provenance)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

197. Concept
   - Existing: Protocol Artifacts (xananode.example:concept/protocol-artifacts)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

198. Concept
   - Existing: Namespacing (xananode.example:concept/namespacing)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

199. Concept
   - Existing: Namespace Registry (xananode.example:concept/namespace-registry)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

200. Concept
   - Existing: Moderation Model (xananode.example:concept/moderation-model)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

201. Concept
   - Existing: Merge Validation (xananode.example:concept/merge-validation)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

202. Concept
   - Existing: Merge Report (xananode.example:concept/merge-report)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

203. Concept
   - Existing: Known Implementations Registry (xananode.example:concept/known-implementations-registry)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

204. Concept
   - Existing: Knowledge Substrate (xananode.example:concept/knowledge-substrate)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

205. Concept
   - Existing: Independent Moderation (xananode.example:concept/independent-moderation)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

206. Concept
   - Existing: Fragment Node (xananode.example:concept/fragment-node)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

207. Concept
   - Existing: Federation Rules (xananode.example:concept/federation-rules)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

208. Concept
   - Existing: Federation Example (xananode.example:concept/federation-example)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

209. Concept
   - Existing: Federated Knowledge Substrates (xananode.example:concept/federated-knowledge-substrates)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

210. Concept
   - Existing: Dispute Resolution (xananode.example:concept/dispute-resolution)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

211. Concept
   - Existing: Deep Linking (xananode.example:concept/deep-linking)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

212. Concept
   - Existing: Custom Extension Substrate (xananode.example:concept/custom-extension-substrate)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

213. Concept
   - Existing: Compatibility Report (xananode.example:concept/compatibility-report)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

214. Concept
   - Existing: Compatibility Levels (xananode.example:concept/compatibility-levels)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

215. Concept
   - Existing: Civilizational Memory (xananode.example:concept/civilizational-memory)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

216. Concept
   - Existing: Canonical Type Policy (xananode.example:concept/canonical-type-policy)
   - Incoming: Concept (xananode.canonical:schema/node-type-concept)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

217. Essay
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Essay (xananode.canonical:schema/node-type-essay)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

218. Event
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Event (xananode.canonical:schema/node-type-event)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

219. Fragment
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Fragment (xananode.canonical:schema/node-type-fragment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

220. Fragment
   - Existing: Fragment Node (xananode.example:concept/fragment-node)
   - Incoming: Fragment (xananode.canonical:schema/node-type-fragment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

221. Fragment
   - Existing: Reusable Media Fragment (xananode.example:fragment/xanadu-document-interconnection-0001)
   - Incoming: Fragment (xananode.canonical:schema/node-type-fragment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

222. Fragment
   - Existing: Augmenting Human Intelligence Fragment (xananode.example:fragment/mother-of-all-demos-0001)
   - Incoming: Fragment (xananode.canonical:schema/node-type-fragment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

223. Fragment
   - Existing: Associative Trails Fragment (xananode.example:fragment/as-we-may-think-0004)
   - Incoming: Fragment (xananode.canonical:schema/node-type-fragment)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

224. Media
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Media (xananode.canonical:schema/node-type-media)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

225. Observation
   - Existing: Link Rot (xananode.example:observation/link-rot)
   - Incoming: Observation (xananode.canonical:schema/node-type-observation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

226. Observation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Observation (xananode.canonical:schema/node-type-observation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

227. Organization
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Organization (xananode.canonical:schema/node-type-organization)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

228. Person
   - Existing: Vannevar Bush (xananode.example:person/vannevar-bush)
   - Incoming: Person (xananode.canonical:schema/node-type-person)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

229. Person
   - Existing: Ted Nelson (xananode.example:person/ted-nelson)
   - Incoming: Person (xananode.canonical:schema/node-type-person)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

230. Person
   - Existing: Douglas Engelbart (xananode.example:person/douglas-engelbart)
   - Incoming: Person (xananode.canonical:schema/node-type-person)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

231. Person
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Person (xananode.canonical:schema/node-type-person)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

232. Place
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Place (xananode.canonical:schema/node-type-place)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

233. Project
   - Existing: XanaNode Hugo Theme (xananode.example:project/xananode-hugo-theme)
   - Incoming: Project (xananode.canonical:schema/node-type-project)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

234. Project
   - Existing: Project Xanadu (xananode.example:project/project-xanadu)
   - Incoming: Project (xananode.canonical:schema/node-type-project)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

235. Project
   - Existing: NLS (xananode.example:project/nls)
   - Incoming: Project (xananode.canonical:schema/node-type-project)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

236. Project
   - Existing: Memex (xananode.example:project/memex)
   - Incoming: Project (xananode.canonical:schema/node-type-project)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

237. Project
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Project (xananode.canonical:schema/node-type-project)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

238. Publication
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Publication (xananode.canonical:schema/node-type-publication)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

239. Node Type Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Node Type Registry (xananode.canonical:schema/node-type-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

240. Relationship
   - Existing: XanaNode Relationship Types (xananode.example:schema/xananode-relationship-types)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

241. Relationship
   - Existing: Substrate Relationships Schema (xananode.example:schema/substrate-relationships-schema)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

242. Relationship
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

243. Relationship
   - Existing: Typed Relationships (xananode.example:concept/typed-relationships)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

244. Relationship
   - Existing: Substrate Relationship List (xananode.example:concept/substrate-relationship-list)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

245. Relationship
   - Existing: Typed relationships preserve context that hyperlinks lose (xananode.example:claim/claim-relationships-preserve-context)
   - Incoming: Relationship (xananode.canonical:schema/node-type-relationship)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

246. Revision
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Revision (xananode.canonical:schema/node-type-revision)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

247. Schema
   - Existing: XanaNode Relationship Types (xananode.example:schema/xananode-relationship-types)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

248. Schema
   - Existing: XanaNode Node Types (xananode.example:schema/xananode-node-types)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

249. Schema
   - Existing: XanaNode Core Schema (xananode.example:schema/xananode-core-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

250. Schema
   - Existing: Substrate Relationships Schema (xananode.example:schema/substrate-relationships-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

251. Schema
   - Existing: Substrate Node Schema (xananode.example:schema/substrate-node-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

252. Schema
   - Existing: Substrate Manifest Schema (xananode.example:schema/substrate-manifest-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

253. Schema
   - Existing: Namespace Schema (xananode.example:schema/namespace-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

254. Schema
   - Existing: Merge Report Schema (xananode.example:schema/merge-report-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

255. Schema
   - Existing: Compatibility Report Schema (xananode.example:schema/compatibility-report-schema)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

256. Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

257. Schema
   - Existing: Schema Extension (xananode.example:concept/schema-extension)
   - Incoming: Schema (xananode.canonical:schema/node-type-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

258. Source
   - Existing: XanaNode Workspace Repository (xananode.example:source/xananode-workspace-repo)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

259. Source
   - Existing: XanaNode Studio Repository (xananode.example:source/xananode-studio-repo)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

260. Source
   - Existing: XanaNode Protocol Repository (xananode.example:source/xananode-protocol-repo)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

261. Source
   - Existing: XanaNode Hugo Repository (xananode.example:source/xananode-hugo-repo)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

262. Source
   - Existing: XanaNode Core SDK Repository (xananode.example:source/xananode-core-sdk-repo)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

263. Source
   - Existing: Xanadu: Document Interconnection Enabling Re-use (xananode.example:source/xanadu-document-interconnection)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

264. Source
   - Existing: 9.6 Million Links in Source Code Comments (xananode.example:source/source-code-link-decay-study)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

265. Source
   - Existing: Mother of All Demos (xananode.example:source/mother-of-all-demos)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

266. Source
   - Existing: As We May Think (xananode.example:source/as-we-may-think)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

267. Source
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

268. Source
   - Existing: Single Source of Truth (xananode.example:concept/single-source-of-truth)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

269. Source
   - Existing: GitHub (xananode.example:source/source-github)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

270. Source
   - Existing: Support (xananode.example:source/source-support)
   - Incoming: Source (xananode.canonical:schema/node-type-source)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

271. Technology
   - Existing: Static Publishing (xananode.example:technology/static-publishing)
   - Incoming: Technology (xananode.canonical:schema/node-type-technology)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

272. Technology
   - Existing: Hugo (xananode.example:technology/hugo)
   - Incoming: Technology (xananode.canonical:schema/node-type-technology)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

273. Technology
   - Existing: Cytoscape.js (xananode.example:technology/cytoscape-js)
   - Incoming: Technology (xananode.canonical:schema/node-type-technology)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

274. Technology
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Technology (xananode.canonical:schema/node-type-technology)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

275. Trail
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trail (xananode.canonical:schema/node-type-trail)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

276. Birth date
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Birth date (xananode.canonical:schema/property-birth_date)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

277. Currency value
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Currency value (xananode.canonical:schema/property-currency_value)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

278. External identifier
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: External identifier (xananode.canonical:schema/property-external_identifier)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

279. Geographic coordinates
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Geographic coordinates (xananode.canonical:schema/property-geo_coordinates)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

280. SI measurement
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: SI measurement (xananode.canonical:schema/property-measurement_si)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

281. Property Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Property Registry (xananode.canonical:schema/property-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

282. Property Registry Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Property Registry Schema (xananode.canonical:schema/property-registry-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

283. Alias of
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Alias of (xananode.canonical:schema/relationship-type-alias_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

284. Alternative to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Alternative to (xananode.canonical:schema/relationship-type-alternative_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

285. Anticipated
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Anticipated (xananode.canonical:schema/relationship-type-anticipated)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

286. Anticipated By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Anticipated By Relationship Term (xananode.canonical:schema/relationship-type-anticipated_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

287. Anticipates
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Anticipates (xananode.canonical:schema/relationship-type-anticipates)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

288. Appears in
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Appears in (xananode.canonical:schema/relationship-type-appears_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

289. Approved
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Approved (xananode.canonical:schema/relationship-type-approved)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

290. Approved By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Approved By Relationship Term (xananode.canonical:schema/relationship-type-approved_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

291. Arrived From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Arrived From Relationship Term (xananode.canonical:schema/relationship-type-arrived_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

292. Arrives at
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Arrives at (xananode.canonical:schema/relationship-type-arrives_at)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

293. Authored
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Authored (xananode.canonical:schema/relationship-type-authored)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

294. Authored By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Authored By Relationship Term (xananode.canonical:schema/relationship-type-authored_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

295. Broader than
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Broader than (xananode.canonical:schema/relationship-type-broader_than)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

296. Cited By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Cited By Relationship Term (xananode.canonical:schema/relationship-type-cited_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

297. Cites
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Cites (xananode.canonical:schema/relationship-type-cites)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

298. Claim Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Claim Of Relationship Term (xananode.canonical:schema/relationship-type-claim_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

299. Clarified By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Clarified By Relationship Term (xananode.canonical:schema/relationship-type-clarified_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

300. Clarifies
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Clarifies (xananode.canonical:schema/relationship-type-clarifies)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

301. Coined
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Coined (xananode.canonical:schema/relationship-type-coined)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

302. Coined By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Coined By Relationship Term (xananode.canonical:schema/relationship-type-coined_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

303. Collaborated with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Collaborated with (xananode.canonical:schema/relationship-type-collaborated_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

304. Compatible with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Compatible with (xananode.canonical:schema/relationship-type-compatible_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

305. Contains
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Contains (xananode.canonical:schema/relationship-type-contains)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

306. Contemporary of
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Contemporary of (xananode.canonical:schema/relationship-type-contemporary_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

307. Context for
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Context for (xananode.canonical:schema/relationship-type-context_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

308. Continued From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Continued From Relationship Term (xananode.canonical:schema/relationship-type-continued_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

309. Continues to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Continues to (xananode.canonical:schema/relationship-type-continues_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

310. Contradicted By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Contradicted By Relationship Term (xananode.canonical:schema/relationship-type-contradicted_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

311. Contradicts
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Contradicts (xananode.canonical:schema/relationship-type-contradicts)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

312. Contrasts with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Contrasts with (xananode.canonical:schema/relationship-type-contrasts_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

313. Created
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Created (xananode.canonical:schema/relationship-type-created)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

314. Created By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Created By Relationship Term (xananode.canonical:schema/relationship-type-created_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

315. Deep Linked From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Deep Linked From Relationship Term (xananode.canonical:schema/relationship-type-deep_linked_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

316. Deep links to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Deep links to (xananode.canonical:schema/relationship-type-deep_links_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

317. Defined By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Defined By Relationship Term (xananode.canonical:schema/relationship-type-defined_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

318. Defines
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Defines (xananode.canonical:schema/relationship-type-defines)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

319. Demonstrated By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Demonstrated By Relationship Term (xananode.canonical:schema/relationship-type-demonstrated_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

320. Demonstrates
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Demonstrates (xananode.canonical:schema/relationship-type-demonstrates)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

321. Dependency Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Dependency Of Relationship Term (xananode.canonical:schema/relationship-type-dependency_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

322. Depends on
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Depends on (xananode.canonical:schema/relationship-type-depends_on)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

323. Depicted By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Depicted By Relationship Term (xananode.canonical:schema/relationship-type-depicted_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

324. Depicts
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Depicts (xananode.canonical:schema/relationship-type-depicts)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

325. Derived from
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Derived from (xananode.canonical:schema/relationship-type-derived_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

326. Derived Into Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Derived Into Relationship Term (xananode.canonical:schema/relationship-type-derived_into)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

327. Discussed In Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Discussed In Relationship Term (xananode.canonical:schema/relationship-type-discussed_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

328. Discusses
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Discusses (xananode.canonical:schema/relationship-type-discusses)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

329. Disputed By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Disputed By Relationship Term (xananode.canonical:schema/relationship-type-disputed_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

330. Disputed identity
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Disputed identity (xananode.canonical:schema/relationship-type-disputed_identity)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

331. Disputes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Disputes (xananode.canonical:schema/relationship-type-disputes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

332. Documented By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Documented By Relationship Term (xananode.canonical:schema/relationship-type-documented_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

333. Documents
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Documents (xananode.canonical:schema/relationship-type-documents)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

334. Enabled By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Enabled By Relationship Term (xananode.canonical:schema/relationship-type-enabled_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

335. Enables
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Enables (xananode.canonical:schema/relationship-type-enables)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

336. Equivalent to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Equivalent to (xananode.canonical:schema/relationship-type-equivalent_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

337. Evidence for
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Evidence for (xananode.canonical:schema/relationship-type-evidence_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

338. Explained By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Explained By Relationship Term (xananode.canonical:schema/relationship-type-explained_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

339. Explains
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Explains (xananode.canonical:schema/relationship-type-explains)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

340. Extended By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Extended By Relationship Term (xananode.canonical:schema/relationship-type-extended_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

341. Extends
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Extends (xananode.canonical:schema/relationship-type-extends)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

342. Extension of
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Extension of (xananode.canonical:schema/relationship-type-extension_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

343. Featured In Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Featured In Relationship Term (xananode.canonical:schema/relationship-type-featured_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

344. Featured Speaker Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Featured Speaker Relationship Term (xananode.canonical:schema/relationship-type-featured_speaker)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

345. Features
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Features (xananode.canonical:schema/relationship-type-features)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

346. Followed Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Followed Relationship Term (xananode.canonical:schema/relationship-type-followed)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

347. Friend of
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Friend of (xananode.canonical:schema/relationship-type-friend_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

348. Had Participant Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Had Participant Relationship Term (xananode.canonical:schema/relationship-type-had_participant)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

349. Has Alias Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Alias Relationship Term (xananode.canonical:schema/relationship-type-has_alias)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

350. Has Appearance Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Appearance Relationship Term (xananode.canonical:schema/relationship-type-has_appearance)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

351. Has claim
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has claim (xananode.canonical:schema/relationship-type-has_claim)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

352. Has Context Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Context Relationship Term (xananode.canonical:schema/relationship-type-has_context)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

353. Has Evidence Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Evidence Relationship Term (xananode.canonical:schema/relationship-type-has_evidence)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

354. Has Extension Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has Extension Relationship Term (xananode.canonical:schema/relationship-type-has_extension)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

355. Has primary media
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Has primary media (xananode.canonical:schema/relationship-type-has_primary_media)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

356. Identified
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Identified (xananode.canonical:schema/relationship-type-identified)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

357. Identified By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Identified By Relationship Term (xananode.canonical:schema/relationship-type-identified_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

358. Implemented By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Implemented By Relationship Term (xananode.canonical:schema/relationship-type-implemented_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

359. Implements
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Implements (xananode.canonical:schema/relationship-type-implements)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

360. Included In Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Included In Relationship Term (xananode.canonical:schema/relationship-type-included_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

361. Includes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Includes (xananode.canonical:schema/relationship-type-includes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

362. Influenced
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Influenced (xananode.canonical:schema/relationship-type-influenced)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

363. Influenced By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Influenced By Relationship Term (xananode.canonical:schema/relationship-type-influenced_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

364. Interviewed
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Interviewed (xananode.canonical:schema/relationship-type-interviewed)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

365. Interviewed By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Interviewed By Relationship Term (xananode.canonical:schema/relationship-type-interviewed_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

366. Introduced
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Introduced (xananode.canonical:schema/relationship-type-introduced)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

367. Introduced By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Introduced By Relationship Term (xananode.canonical:schema/relationship-type-introduced_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

368. Introduced in
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Introduced in (xananode.canonical:schema/relationship-type-introduced_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

369. Introduction Venue Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Introduction Venue Of Relationship Term (xananode.canonical:schema/relationship-type-introduction_venue_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

370. Is Start Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Is Start Of Relationship Term (xananode.canonical:schema/relationship-type-is_start_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

371. Mapped From Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Mapped From Relationship Term (xananode.canonical:schema/relationship-type-mapped_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

372. Maps to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Maps to (xananode.canonical:schema/relationship-type-maps_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

373. Memorialized By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Memorialized By Relationship Term (xananode.canonical:schema/relationship-type-memorialized_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

374. Memorializes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Memorializes (xananode.canonical:schema/relationship-type-memorializes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

375. Mentioned By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Mentioned By Relationship Term (xananode.canonical:schema/relationship-type-mentioned_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

376. Mentions
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Mentions (xananode.canonical:schema/relationship-type-mentions)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

377. Motivated by
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Motivated by (xananode.canonical:schema/relationship-type-motivated_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

378. Motivates Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Motivates Relationship Term (xananode.canonical:schema/relationship-type-motivates)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

379. Narrower Than Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Narrower Than Relationship Term (xananode.canonical:schema/relationship-type-narrower_than)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

380. Occurred at
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Occurred at (xananode.canonical:schema/relationship-type-occurred_at)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

381. Parallel to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Parallel to (xananode.canonical:schema/relationship-type-parallel_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

382. Part Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Part Of Relationship Term (xananode.canonical:schema/relationship-type-part_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

383. Participated in
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Participated in (xananode.canonical:schema/relationship-type-participated_in)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

384. Popularized
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Popularized (xananode.canonical:schema/relationship-type-popularized)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

385. Popularized By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Popularized By Relationship Term (xananode.canonical:schema/relationship-type-popularized_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

386. Possible match
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Possible match (xananode.canonical:schema/relationship-type-possible_match)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

387. Preceded
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Preceded (xananode.canonical:schema/relationship-type-preceded)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

388. Presented
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Presented (xananode.canonical:schema/relationship-type-presented)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

389. Presented By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Presented By Relationship Term (xananode.canonical:schema/relationship-type-presented_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

390. Preserved By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Preserved By Relationship Term (xananode.canonical:schema/relationship-type-preserved_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

391. Preserves
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Preserves (xananode.canonical:schema/relationship-type-preserves)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

392. Produces Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Produces Relationship Term (xananode.canonical:schema/relationship-type-produces)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

393. Proposed
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Proposed (xananode.canonical:schema/relationship-type-proposed)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

394. Proposed By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Proposed By Relationship Term (xananode.canonical:schema/relationship-type-proposed_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

395. Quoted By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Quoted By Relationship Term (xananode.canonical:schema/relationship-type-quoted_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

396. Quotes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Quotes (xananode.canonical:schema/relationship-type-quotes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

397. Refined By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Refined By Relationship Term (xananode.canonical:schema/relationship-type-refined_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

398. Refines
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Refines (xananode.canonical:schema/relationship-type-refines)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

399. Relationship Type Registry
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Relationship Type Registry (xananode.canonical:schema/relationship-type-registry)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

400. Related to
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Related to (xananode.canonical:schema/relationship-type-related_to)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

401. Represented By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Represented By Relationship Term (xananode.canonical:schema/relationship-type-represented_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

402. Represents
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Represents (xananode.canonical:schema/relationship-type-represents)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

403. Required For Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Required For Relationship Term (xananode.canonical:schema/relationship-type-required_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

404. Requires
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Requires (xananode.canonical:schema/relationship-type-requires)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

405. Results from
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Results from (xananode.canonical:schema/relationship-type-results_from)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

406. Same entity
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Same entity (xananode.canonical:schema/relationship-type-same_entity)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

407. Shaped By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Shaped By Relationship Term (xananode.canonical:schema/relationship-type-shaped_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

408. Shapes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Shapes (xananode.canonical:schema/relationship-type-shapes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

409. Site Of Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Site Of Relationship Term (xananode.canonical:schema/relationship-type-site_of)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

410. Spoke at
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Spoke at (xananode.canonical:schema/relationship-type-spoke_at)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

411. Starts with
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Starts with (xananode.canonical:schema/relationship-type-starts_with)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

412. Superseded By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Superseded By Relationship Term (xananode.canonical:schema/relationship-type-superseded_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

413. Supersedes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Supersedes (xananode.canonical:schema/relationship-type-supersedes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

414. Supported By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Supported By Relationship Term (xananode.canonical:schema/relationship-type-supported_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

415. Supported By Relationship Term
   - Existing: Support (xananode.example:source/source-support)
   - Incoming: Supported By Relationship Term (xananode.canonical:schema/relationship-type-supported_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

416. Supports
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Supports (xananode.canonical:schema/relationship-type-supports)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

417. Supports
   - Existing: Support (xananode.example:source/source-support)
   - Incoming: Supports (xananode.canonical:schema/relationship-type-supports)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

418. Threatened By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Threatened By Relationship Term (xananode.canonical:schema/relationship-type-threatened_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

419. Threatens
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Threatens (xananode.canonical:schema/relationship-type-threatens)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

420. Trained on
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Trained on (xananode.canonical:schema/relationship-type-trained_on)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

421. Transcluded By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Transcluded By Relationship Term (xananode.canonical:schema/relationship-type-transcluded_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

422. Transcludes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Transcludes (xananode.canonical:schema/relationship-type-transcludes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

423. Used As Primary Media For Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Used As Primary Media For Relationship Term (xananode.canonical:schema/relationship-type-used_as_primary_media_for)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

424. Used By Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Used By Relationship Term (xananode.canonical:schema/relationship-type-used_by)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

425. Used To Train Relationship Term
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Used To Train Relationship Term (xananode.canonical:schema/relationship-type-used_to_train)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

426. Uses
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Uses (xananode.canonical:schema/relationship-type-uses)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

427. RO-Crate Metadata Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: RO-Crate Metadata Schema (xananode.canonical:schema/ro-crate-metadata-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

428. Substrate Diff Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Diff Schema (xananode.canonical:schema/substrate-diff-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

429. Substrate Manifest Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/substrate-manifest-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

430. Substrate Manifest Schema
   - Existing: Substrate Manifest (xananode.example:concept/substrate-manifest)
   - Incoming: Substrate Manifest Schema (xananode.canonical:schema/substrate-manifest-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

431. Substrate Node Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Node Schema (xananode.canonical:schema/substrate-node-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

432. Substrate Relationships Schema
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Substrate Relationships Schema (xananode.canonical:schema/substrate-relationships-schema)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

433. GitHub Profile
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: GitHub Profile (xananode.canonical:source/github-profile)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

434. GitHub Profile
   - Existing: GitHub (xananode.example:source/source-github)
   - Incoming: GitHub Profile (xananode.canonical:source/github-profile)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

435. Hugo Official Site
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hugo Official Site (xananode.canonical:source/hugo-official-site)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

436. Support XanaNode
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Support XanaNode (xananode.canonical:source/support-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

437. Support XanaNode
   - Existing: Support (xananode.example:source/source-support)
   - Incoming: Support XanaNode (xananode.canonical:source/support-xananode)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

438. XanaNode.com
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode.com (xananode.canonical:source/xananode-com-domain)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

439. XanaNode Core SDK Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Core SDK Repository (xananode.canonical:source/xananode-core-sdk-repository)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

440. XanaNode Hugo Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Hugo Repository (xananode.canonical:source/xananode-hugo-repository)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

441. XanaNode.net
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode.net (xananode.canonical:source/xananode-net-domain)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

442. XanaNode.org
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode.org (xananode.canonical:source/xananode-org-domain)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

443. XanaNode Protocol Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Protocol Repository (xananode.canonical:source/xananode-protocol-repository)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

444. XanaNode Studio Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Studio Repository (xananode.canonical:source/xananode-studio-repository)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

445. XanaNode Workspace Repository
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Workspace Repository (xananode.canonical:source/xananode-workspace-repository)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

446. Cytoscape.js
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Cytoscape.js (xananode.canonical:technology/cytoscape-js)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

447. Git
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Git (xananode.canonical:technology/git)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

448. Hugo
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hugo (xananode.canonical:technology/hugo)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

449. Node.js
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Node.js (xananode.canonical:technology/nodejs)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

450. Python
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Python (xananode.canonical:technology/python)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

451. XanaNode Stack Trail
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: XanaNode Stack Trail (xananode.canonical:trail/xananode-stack-trail)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

452. Gottfried Wilhelm Leibniz
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Gottfried Wilhelm Leibniz (xananode.lineage:person/gottfried-wilhelm-leibniz)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

453. Wilhelm Ostwald
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Wilhelm Ostwald (xananode.lineage:person/wilhelm-ostwald)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

454. Jorge Luis Borges
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Jorge Luis Borges (xananode.lineage:person/jorge-luis-borges)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

455. The Garden of Forking Paths
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: The Garden of Forking Paths (xananode.lineage:publication/the-garden-of-forking-paths)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

456. Andries van Dam
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Andries van Dam (xananode.lineage:person/andries-van-dam)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

457. Brown University
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Brown University (xananode.lineage:place/brown-university)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

458. Hypertext Editing System
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hypertext Editing System (xananode.lineage:project/hypertext-editing-system)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

459. FRESS
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: FRESS (xananode.lineage:project/fress)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

460. Intermedia
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Intermedia (xananode.lineage:project/intermedia)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

461. Nicholas Negroponte
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Nicholas Negroponte (xananode.lineage:person/nicholas-negroponte)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

462. Seymour Papert
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Seymour Papert (xananode.lineage:person/seymour-papert)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

463. Marvin Minsky
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Marvin Minsky (xananode.lineage:person/marvin-minsky)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

464. MIT Media Lab
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: MIT Media Lab (xananode.lineage:organization/mit-media-lab)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

465. Hans Peter Brondmo
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hans Peter Brondmo (xananode.lineage:person/hans-peter-brondmo)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

466. Micons
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Micons (xananode.lineage:technology/micons)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

467. Robert Winter
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Robert Winter (xananode.lineage:person/robert-winter)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

468. Interactive Beethoven's Ninth
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Interactive Beethoven's Ninth (xananode.lineage:project/interactive-beethoven-ninth)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

469. Robert Abel
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Robert Abel (xananode.lineage:person/robert-abel)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

470. Interactive Guernica
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Interactive Guernica (xananode.lineage:project/interactive-guernica)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

471. Ivan Sutherland
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Ivan Sutherland (xananode.lineage:person/ivan-sutherland)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

472. Jaron Lanier
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Jaron Lanier (xananode.lineage:person/jaron-lanier)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

473. VPL Research
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: VPL Research (xananode.lineage:organization/vpl-research)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

474. Scott Fisher
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Scott Fisher (xananode.lineage:person/scott-fisher)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

475. NASA
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: NASA (xananode.lineage:organization/nasa)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

476. Dirk Gently's Holistic Detective Agency
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Dirk Gently's Holistic Detective Agency (xananode.lineage:publication/dirk-gentlys-holistic-detective-agency)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

477. BBC Two
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: BBC Two (xananode.lineage:organization/bbc-two)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

478. Richard Saul Wurman
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Richard Saul Wurman (xananode.lineage:person/richard-saul-wurman)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

479. Harry Marks
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Harry Marks (xananode.lineage:person/harry-marks)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

480. John Sculley
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: John Sculley (xananode.lineage:person/john-sculley)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

481. Apple Knowledge Navigator
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Apple Knowledge Navigator (xananode.lineage:technology/apple-knowledge-navigator)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

482. Bill Atkinson
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Bill Atkinson (xananode.lineage:person/bill-atkinson)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

483. Herbie Hancock
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Herbie Hancock (xananode.lineage:person/herbie-hancock)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

484. Nigel Holmes
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Nigel Holmes (xananode.lineage:person/nigel-holmes)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

485. Laurie Anderson
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Laurie Anderson (xananode.lineage:person/laurie-anderson)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

486. Bran Ferren
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Bran Ferren (xananode.lineage:person/bran-ferren)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

487. Robert Cailliau
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Robert Cailliau (xananode.lineage:person/robert-cailliau)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

488. CERN
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: CERN (xananode.lineage:place/cern)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

489. HTML
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: HTML (xananode.lineage:technology/html)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

490. URL/URI
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: URL/URI (xananode.lineage:technology/url-uri)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

491. HTTP
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: HTTP (xananode.lineage:technology/http)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

492. NCSA
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: NCSA (xananode.lineage:organization/ncsa)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

493. Marc Andreessen
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Marc Andreessen (xananode.lineage:person/marc-andreessen)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

494. Mosaic
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Mosaic (xananode.lineage:technology/mosaic)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

495. The Web as Incomplete Hypertext
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: The Web as Incomplete Hypertext (xananode.lineage:concept/web-as-incomplete-hypertext)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

496. Guide
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Guide (xananode.lineage:technology/guide)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

497. Storyspace
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Storyspace (xananode.lineage:project/storyspace)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

498. ZOG/KMS
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: ZOG/KMS (xananode.lineage:project/zog-kms)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

499. Xanadu at Autodesk
   - Existing: Project Xanadu (xananode.example:project/project-xanadu)
   - Incoming: Xanadu at Autodesk (xananode.lineage:project/xanadu-at-autodesk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

500. Xanadu at Autodesk
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Xanadu at Autodesk (xananode.lineage:project/xanadu-at-autodesk)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

501. Conflict and Disputed Identity
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Conflict and Disputed Identity (xananode.lineage:concept/conflict-disputed-identity)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

502. Git-backed Substrate
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Git-backed Substrate (xananode.lineage:technology/git-backed-substrate)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

503. Babel
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Babel (xananode.lineage:tool/babel)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

504. Hyperland VR
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hyperland VR (xananode.lineage:tool/hyperland-vr)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

505. Authored Substrate Overlap
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Authored Substrate Overlap (xananode.lineage:concept/authored-substrate-overlap)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

506. Overlap is a Federation Signal
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Overlap is a Federation Signal (xananode.lineage:claim/overlap-is-federation-signal)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

507. Merge is Authored Interpretation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Merge is Authored Interpretation (xananode.lineage:claim/merge-is-authored-interpretation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

508. Lineage Packs Can Overlap Canonical Packs
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Lineage Packs Can Overlap Canonical Packs (xananode.lineage:claim/lineage-pack-can-overlap-canonical-pack)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

509. Lost Lineage of Human Knowledge Augmentation
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Lost Lineage of Human Knowledge Augmentation (xananode.lineage:concept/lost-lineage-human-knowledge-augmentation)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

510. Paul Otlet
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Paul Otlet (xananode.lineage:person/paul-otlet)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

511. H. G. Wells
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: H. G. Wells (xananode.lineage:person/h-g-wells)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

512. Douglas Adams
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Douglas Adams (xananode.lineage:person/douglas-adams)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

513. Hyperland
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Hyperland (xananode.lineage:publication/hyperland)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

514. Tom Baker
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Tom Baker (xananode.lineage:person/tom-baker)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

515. Max Whitby
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Max Whitby (xananode.lineage:person/max-whitby)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

516. TED2
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: TED2 (xananode.lineage:event/ted2-1990)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

517. Monterey, California
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Monterey, California (xananode.lineage:place/monterey-california)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

518. Bob Stein
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Bob Stein (xananode.lineage:person/bob-stein)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

519. Voyager Company
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Voyager Company (xananode.lineage:organization/voyager-company)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

520. Alan Kay
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Alan Kay (xananode.lineage:person/alan-kay)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

521. Xerox PARC
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Xerox PARC (xananode.lineage:organization/xerox-parc)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

522. HyperCard
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: HyperCard (xananode.lineage:technology/hypercard)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

523. Tim Berners-Lee
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Tim Berners-Lee (xananode.lineage:person/tim-berners-lee)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

524. World Wide Web
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: World Wide Web (xananode.lineage:technology/world-wide-web)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

525. Aspen Movie Map
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Aspen Movie Map (xananode.lineage:project/aspen-movie-map)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

526. Lost Lineage Intertwingled Trail
   - Existing: XanaNode (xananode.example:concept/xananode)
   - Incoming: Lost Lineage Intertwingled Trail (xananode.lineage:trail/lost-lineage-intertwingled-trail)
   - Confidence: 0.78
   - Reason: Incoming node title or alias closely matches an existing node.
   - Approved: false

527. Unresolved Review Fixture
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

13. xananode.canonical:rel/bootstrap-created-revision
   - Type: created
   - Source: xananode.canonical:event/xananode-canonical-pack-bootstrap
   - Target: xananode.canonical:revision/canonical-pack-v0-1-0
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

14. xananode.canonical:rel/built-by-bots-created-icon
   - Type: created
   - Source: xananode.canonical:organization/built-by-bots
   - Target: xananode.canonical:media/xananode-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

15. xananode.canonical:rel/christian-authored-xananode
   - Type: authored
   - Source: xananode.canonical:person/christian-siefen
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

16. xananode.canonical:rel/core-builds-protocol-artifacts
   - Type: enables
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:concept/protocol-artifacts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

17. xananode.canonical:rel/core-documented-by-repository
   - Type: documents
   - Source: xananode.canonical:source/xananode-core-sdk-repository
   - Target: xananode.canonical:project/xananode-core-sdk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

18. xananode.canonical:rel/core-implements-protocol
   - Type: implements
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:project/xananode-protocol
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

19. xananode.canonical:rel/core-uses-nodejs
   - Type: uses
   - Source: xananode.canonical:project/xananode-core-sdk
   - Target: xananode.canonical:technology/nodejs
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

20. xananode.canonical:rel/github-profile-includes-core-repo
   - Type: includes
   - Source: xananode.canonical:source/github-profile
   - Target: xananode.canonical:source/xananode-core-sdk-repository
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

21. xananode.canonical:rel/github-profile-includes-hugo-repo
   - Type: includes
   - Source: xananode.canonical:source/github-profile
   - Target: xananode.canonical:source/xananode-hugo-repository
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

22. xananode.canonical:rel/github-profile-includes-protocol-repo
   - Type: includes
   - Source: xananode.canonical:source/github-profile
   - Target: xananode.canonical:source/xananode-protocol-repository
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

23. xananode.canonical:rel/hugo-documented-by-repository
   - Type: documents
   - Source: xananode.canonical:source/xananode-hugo-repository
   - Target: xananode.canonical:project/xananode-hugo-theme
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

24. xananode.canonical:rel/hugo-implements-projection-layer
   - Type: implements
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:concept/substrate-projection-layer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

25. xananode.canonical:rel/hugo-uses-core
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:project/xananode-core-sdk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

26. xananode.canonical:rel/hugo-uses-cytoscape
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:technology/cytoscape-js
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

27. xananode.canonical:rel/hugo-uses-hugo
   - Type: uses
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:technology/hugo
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

28. xananode.canonical:rel/icon-depicts-xananode
   - Type: depicts
   - Source: xananode.canonical:media/xananode-icon
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

29. xananode.canonical:rel/project-xananode-hugo-theme-implements-concept-substrate-projection-layer
   - Type: implements
   - Source: xananode.canonical:project/xananode-hugo-theme
   - Target: xananode.canonical:concept/substrate-projection-layer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

30. xananode.canonical:rel/protocol-artifacts-enable-projection-layers
   - Type: enables
   - Source: xananode.canonical:concept/protocol-artifacts
   - Target: xananode.canonical:concept/substrate-projection-layer
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

31. xananode.canonical:rel/protocol-contains-author-profile-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/author-profile-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

32. xananode.canonical:rel/protocol-contains-compatibility-report-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/compatibility-report-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

33. xananode.canonical:rel/protocol-contains-manifest-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/substrate-manifest-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

34. xananode.canonical:rel/protocol-contains-merge-report-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/merge-report-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

35. xananode.canonical:rel/protocol-contains-namespace-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/namespace-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

36. xananode.canonical:rel/protocol-contains-nanopublication-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/nanopublication-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

37. xananode.canonical:rel/protocol-contains-node-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/substrate-node-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

38. xananode.canonical:rel/protocol-contains-node-type-registry
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/node-type-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

39. xananode.canonical:rel/protocol-contains-property-registry-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/property-registry-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

40. xananode.canonical:rel/protocol-contains-relationship-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/substrate-relationships-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

41. xananode.canonical:rel/protocol-contains-relationship-type-registry
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/relationship-type-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

42. xananode.canonical:rel/protocol-contains-ro-crate-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/ro-crate-metadata-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

43. xananode.canonical:rel/protocol-contains-substrate-diff-schema
   - Type: contains
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:schema/substrate-diff-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

44. xananode.canonical:rel/protocol-documented-by-repository
   - Type: documents
   - Source: xananode.canonical:source/xananode-protocol-repository
   - Target: xananode.canonical:project/xananode-protocol
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

45. xananode.canonical:rel/protocol-uses-python
   - Type: uses
   - Source: xananode.canonical:project/xananode-protocol
   - Target: xananode.canonical:technology/python
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

46. xananode.canonical:rel/recreation-friction-motivates-pack-ingress
   - Type: motivated_by
   - Source: xananode.canonical:observation/markdown-recreation-friction
   - Target: xananode.canonical:concept/protocol-artifacts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

47. xananode.canonical:rel/registry-contains-node-type-claim
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

48. xananode.canonical:rel/registry-contains-node-type-community
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-community
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

49. xananode.canonical:rel/registry-contains-node-type-concept
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-concept
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

50. xananode.canonical:rel/registry-contains-node-type-essay
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-essay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

51. xananode.canonical:rel/registry-contains-node-type-event
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

52. xananode.canonical:rel/registry-contains-node-type-fragment
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-fragment
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

53. xananode.canonical:rel/registry-contains-node-type-media
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

54. xananode.canonical:rel/registry-contains-node-type-observation
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-observation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

55. xananode.canonical:rel/registry-contains-node-type-organization
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

56. xananode.canonical:rel/registry-contains-node-type-person
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

57. xananode.canonical:rel/registry-contains-node-type-place
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-place
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

58. xananode.canonical:rel/registry-contains-node-type-project
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

59. xananode.canonical:rel/registry-contains-node-type-publication
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-publication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

60. xananode.canonical:rel/registry-contains-node-type-relationship
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-relationship
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

61. xananode.canonical:rel/registry-contains-node-type-revision
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-revision
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

62. xananode.canonical:rel/registry-contains-node-type-schema
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-schema
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

63. xananode.canonical:rel/registry-contains-node-type-source
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

64. xananode.canonical:rel/registry-contains-node-type-technology
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-technology
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

65. xananode.canonical:rel/registry-contains-node-type-trail
   - Type: contains
   - Source: xananode.canonical:schema/node-type-registry
   - Target: xananode.canonical:schema/node-type-trail
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

66. xananode.canonical:rel/registry-contains-relationship-type-alias_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-alias_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

67. xananode.canonical:rel/registry-contains-relationship-type-alternative_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-alternative_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

68. xananode.canonical:rel/registry-contains-relationship-type-anticipated
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-anticipated
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

69. xananode.canonical:rel/registry-contains-relationship-type-anticipated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-anticipated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

70. xananode.canonical:rel/registry-contains-relationship-type-anticipates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-anticipates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

71. xananode.canonical:rel/registry-contains-relationship-type-appears_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-appears_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

72. xananode.canonical:rel/registry-contains-relationship-type-approved
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-approved
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

73. xananode.canonical:rel/registry-contains-relationship-type-approved_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-approved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

74. xananode.canonical:rel/registry-contains-relationship-type-arrived_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-arrived_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

75. xananode.canonical:rel/registry-contains-relationship-type-arrives_at
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-arrives_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

76. xananode.canonical:rel/registry-contains-relationship-type-authored
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-authored
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

77. xananode.canonical:rel/registry-contains-relationship-type-authored_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-authored_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

78. xananode.canonical:rel/registry-contains-relationship-type-broader_than
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-broader_than
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

79. xananode.canonical:rel/registry-contains-relationship-type-cited_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-cited_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

80. xananode.canonical:rel/registry-contains-relationship-type-cites
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-cites
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

81. xananode.canonical:rel/registry-contains-relationship-type-claim_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-claim_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

82. xananode.canonical:rel/registry-contains-relationship-type-clarified_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-clarified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

83. xananode.canonical:rel/registry-contains-relationship-type-clarifies
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-clarifies
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

84. xananode.canonical:rel/registry-contains-relationship-type-coined
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-coined
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

85. xananode.canonical:rel/registry-contains-relationship-type-coined_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-coined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

86. xananode.canonical:rel/registry-contains-relationship-type-collaborated_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-collaborated_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

87. xananode.canonical:rel/registry-contains-relationship-type-compatible_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-compatible_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

88. xananode.canonical:rel/registry-contains-relationship-type-contains
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-contains
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

89. xananode.canonical:rel/registry-contains-relationship-type-contemporary_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-contemporary_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

90. xananode.canonical:rel/registry-contains-relationship-type-context_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-context_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

91. xananode.canonical:rel/registry-contains-relationship-type-continued_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-continued_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

92. xananode.canonical:rel/registry-contains-relationship-type-continues_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-continues_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

93. xananode.canonical:rel/registry-contains-relationship-type-contradicted_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-contradicted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

94. xananode.canonical:rel/registry-contains-relationship-type-contradicts
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-contradicts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

95. xananode.canonical:rel/registry-contains-relationship-type-contrasts_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-contrasts_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

96. xananode.canonical:rel/registry-contains-relationship-type-created
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-created
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

97. xananode.canonical:rel/registry-contains-relationship-type-created_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-created_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

98. xananode.canonical:rel/registry-contains-relationship-type-deep_linked_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-deep_linked_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

99. xananode.canonical:rel/registry-contains-relationship-type-deep_links_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-deep_links_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

100. xananode.canonical:rel/registry-contains-relationship-type-defined_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-defined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

101. xananode.canonical:rel/registry-contains-relationship-type-defines
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-defines
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

102. xananode.canonical:rel/registry-contains-relationship-type-demonstrated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-demonstrated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

103. xananode.canonical:rel/registry-contains-relationship-type-demonstrates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-demonstrates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

104. xananode.canonical:rel/registry-contains-relationship-type-dependency_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-dependency_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

105. xananode.canonical:rel/registry-contains-relationship-type-depends_on
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-depends_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

106. xananode.canonical:rel/registry-contains-relationship-type-depicted_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-depicted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

107. xananode.canonical:rel/registry-contains-relationship-type-depicts
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-depicts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

108. xananode.canonical:rel/registry-contains-relationship-type-derived_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-derived_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

109. xananode.canonical:rel/registry-contains-relationship-type-derived_into
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-derived_into
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

110. xananode.canonical:rel/registry-contains-relationship-type-discussed_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-discussed_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

111. xananode.canonical:rel/registry-contains-relationship-type-discusses
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-discusses
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

112. xananode.canonical:rel/registry-contains-relationship-type-disputed_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-disputed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

113. xananode.canonical:rel/registry-contains-relationship-type-disputed_identity
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-disputed_identity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

114. xananode.canonical:rel/registry-contains-relationship-type-disputes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-disputes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

115. xananode.canonical:rel/registry-contains-relationship-type-documented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-documented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

116. xananode.canonical:rel/registry-contains-relationship-type-documents
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-documents
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

117. xananode.canonical:rel/registry-contains-relationship-type-enabled_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-enabled_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

118. xananode.canonical:rel/registry-contains-relationship-type-enables
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-enables
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

119. xananode.canonical:rel/registry-contains-relationship-type-equivalent_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-equivalent_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

120. xananode.canonical:rel/registry-contains-relationship-type-evidence_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-evidence_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

121. xananode.canonical:rel/registry-contains-relationship-type-explained_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-explained_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

122. xananode.canonical:rel/registry-contains-relationship-type-explains
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-explains
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

123. xananode.canonical:rel/registry-contains-relationship-type-extended_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-extended_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

124. xananode.canonical:rel/registry-contains-relationship-type-extends
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-extends
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

125. xananode.canonical:rel/registry-contains-relationship-type-extension_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-extension_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

126. xananode.canonical:rel/registry-contains-relationship-type-featured_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-featured_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

127. xananode.canonical:rel/registry-contains-relationship-type-featured_speaker
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-featured_speaker
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

128. xananode.canonical:rel/registry-contains-relationship-type-features
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-features
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

129. xananode.canonical:rel/registry-contains-relationship-type-followed
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-followed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

130. xananode.canonical:rel/registry-contains-relationship-type-friend_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-friend_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

131. xananode.canonical:rel/registry-contains-relationship-type-had_participant
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-had_participant
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

132. xananode.canonical:rel/registry-contains-relationship-type-has_alias
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_alias
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

133. xananode.canonical:rel/registry-contains-relationship-type-has_appearance
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_appearance
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

134. xananode.canonical:rel/registry-contains-relationship-type-has_claim
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

135. xananode.canonical:rel/registry-contains-relationship-type-has_context
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

136. xananode.canonical:rel/registry-contains-relationship-type-has_evidence
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_evidence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

137. xananode.canonical:rel/registry-contains-relationship-type-has_extension
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_extension
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

138. xananode.canonical:rel/registry-contains-relationship-type-has_primary_media
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-has_primary_media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

139. xananode.canonical:rel/registry-contains-relationship-type-identified
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-identified
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

140. xananode.canonical:rel/registry-contains-relationship-type-identified_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-identified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

141. xananode.canonical:rel/registry-contains-relationship-type-implemented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-implemented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

142. xananode.canonical:rel/registry-contains-relationship-type-implements
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-implements
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

143. xananode.canonical:rel/registry-contains-relationship-type-included_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-included_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

144. xananode.canonical:rel/registry-contains-relationship-type-includes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-includes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

145. xananode.canonical:rel/registry-contains-relationship-type-influenced
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-influenced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

146. xananode.canonical:rel/registry-contains-relationship-type-influenced_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-influenced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

147. xananode.canonical:rel/registry-contains-relationship-type-interviewed
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-interviewed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

148. xananode.canonical:rel/registry-contains-relationship-type-interviewed_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-interviewed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

149. xananode.canonical:rel/registry-contains-relationship-type-introduced
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-introduced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

150. xananode.canonical:rel/registry-contains-relationship-type-introduced_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-introduced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

151. xananode.canonical:rel/registry-contains-relationship-type-introduced_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-introduced_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

152. xananode.canonical:rel/registry-contains-relationship-type-introduction_venue_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-introduction_venue_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

153. xananode.canonical:rel/registry-contains-relationship-type-is_start_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-is_start_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

154. xananode.canonical:rel/registry-contains-relationship-type-mapped_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-mapped_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

155. xananode.canonical:rel/registry-contains-relationship-type-maps_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-maps_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

156. xananode.canonical:rel/registry-contains-relationship-type-memorialized_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-memorialized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

157. xananode.canonical:rel/registry-contains-relationship-type-memorializes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-memorializes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

158. xananode.canonical:rel/registry-contains-relationship-type-mentioned_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-mentioned_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

159. xananode.canonical:rel/registry-contains-relationship-type-mentions
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-mentions
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

160. xananode.canonical:rel/registry-contains-relationship-type-motivated_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-motivated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

161. xananode.canonical:rel/registry-contains-relationship-type-motivates
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-motivates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

162. xananode.canonical:rel/registry-contains-relationship-type-narrower_than
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-narrower_than
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

163. xananode.canonical:rel/registry-contains-relationship-type-occurred_at
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-occurred_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

164. xananode.canonical:rel/registry-contains-relationship-type-parallel_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-parallel_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

165. xananode.canonical:rel/registry-contains-relationship-type-part_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-part_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

166. xananode.canonical:rel/registry-contains-relationship-type-participated_in
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-participated_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

167. xananode.canonical:rel/registry-contains-relationship-type-popularized
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-popularized
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

168. xananode.canonical:rel/registry-contains-relationship-type-popularized_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-popularized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

169. xananode.canonical:rel/registry-contains-relationship-type-possible_match
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-possible_match
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

170. xananode.canonical:rel/registry-contains-relationship-type-preceded
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-preceded
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

171. xananode.canonical:rel/registry-contains-relationship-type-presented
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-presented
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

172. xananode.canonical:rel/registry-contains-relationship-type-presented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-presented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

173. xananode.canonical:rel/registry-contains-relationship-type-preserved_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-preserved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

174. xananode.canonical:rel/registry-contains-relationship-type-preserves
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-preserves
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

175. xananode.canonical:rel/registry-contains-relationship-type-produces
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-produces
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

176. xananode.canonical:rel/registry-contains-relationship-type-proposed
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-proposed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

177. xananode.canonical:rel/registry-contains-relationship-type-proposed_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-proposed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

178. xananode.canonical:rel/registry-contains-relationship-type-quoted_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-quoted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

179. xananode.canonical:rel/registry-contains-relationship-type-quotes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-quotes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

180. xananode.canonical:rel/registry-contains-relationship-type-refined_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-refined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

181. xananode.canonical:rel/registry-contains-relationship-type-refines
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-refines
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

182. xananode.canonical:rel/registry-contains-relationship-type-related_to
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-related_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

183. xananode.canonical:rel/registry-contains-relationship-type-represented_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-represented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

184. xananode.canonical:rel/registry-contains-relationship-type-represents
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-represents
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

185. xananode.canonical:rel/registry-contains-relationship-type-required_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-required_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

186. xananode.canonical:rel/registry-contains-relationship-type-requires
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-requires
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

187. xananode.canonical:rel/registry-contains-relationship-type-results_from
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-results_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

188. xananode.canonical:rel/registry-contains-relationship-type-same_entity
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-same_entity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

189. xananode.canonical:rel/registry-contains-relationship-type-shaped_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-shaped_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

190. xananode.canonical:rel/registry-contains-relationship-type-shapes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-shapes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

191. xananode.canonical:rel/registry-contains-relationship-type-site_of
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-site_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

192. xananode.canonical:rel/registry-contains-relationship-type-spoke_at
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-spoke_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

193. xananode.canonical:rel/registry-contains-relationship-type-starts_with
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-starts_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

194. xananode.canonical:rel/registry-contains-relationship-type-superseded_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-superseded_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

195. xananode.canonical:rel/registry-contains-relationship-type-supersedes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-supersedes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

196. xananode.canonical:rel/registry-contains-relationship-type-supported_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-supported_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

197. xananode.canonical:rel/registry-contains-relationship-type-supports
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-supports
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

198. xananode.canonical:rel/registry-contains-relationship-type-threatened_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-threatened_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

199. xananode.canonical:rel/registry-contains-relationship-type-threatens
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-threatens
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

200. xananode.canonical:rel/registry-contains-relationship-type-trained_on
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-trained_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

201. xananode.canonical:rel/registry-contains-relationship-type-transcluded_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-transcluded_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

202. xananode.canonical:rel/registry-contains-relationship-type-transcludes
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-transcludes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

203. xananode.canonical:rel/registry-contains-relationship-type-used_as_primary_media_for
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-used_as_primary_media_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

204. xananode.canonical:rel/registry-contains-relationship-type-used_by
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-used_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

205. xananode.canonical:rel/registry-contains-relationship-type-used_to_train
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-used_to_train
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

206. xananode.canonical:rel/registry-contains-relationship-type-uses
   - Type: contains
   - Source: xananode.canonical:schema/relationship-type-registry
   - Target: xananode.canonical:schema/relationship-type-uses
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

207. xananode.canonical:rel/schema-canonical-schema-xananode-node-types-documents-schema-node-type-registry
   - Type: documents
   - Source: xananode.canonical:schema/canonical-schema-xananode-node-types
   - Target: xananode.canonical:schema/node-type-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

208. xananode.canonical:rel/schema-canonical-schema-xananode-property-registry-documents-schema-property-registry
   - Type: documents
   - Source: xananode.canonical:schema/canonical-schema-xananode-property-registry
   - Target: xananode.canonical:schema/property-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

209. xananode.canonical:rel/schema-canonical-schema-xananode-relationship-types-documents-schema-relationship-type-registry
   - Type: documents
   - Source: xananode.canonical:schema/canonical-schema-xananode-relationship-types
   - Target: xananode.canonical:schema/relationship-type-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

210. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-author-profile
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-author-profile
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

211. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-compatibility-report
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-compatibility-report
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

212. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-merge-report
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-merge-report
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

213. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-nanopublication
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-nanopublication
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

214. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-ro-crate-metadata
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-ro-crate-metadata
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

215. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-substrate-diff
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-substrate-diff
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

216. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-substrate-manifest
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-substrate-manifest
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

217. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-substrate-node
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-substrate-node
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

218. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-substrate-relationships
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-substrate-relationships
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

219. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-xananode-node-types
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-xananode-node-types
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

220. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-xananode-property-registry
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-xananode-property-registry
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

221. xananode.canonical:rel/schema-canonical-schemas-registry-contains-schema-canonical-schema-xananode-relationship-types
   - Type: contains
   - Source: xananode.canonical:schema/canonical-schemas-registry
   - Target: xananode.canonical:schema/canonical-schema-xananode-relationship-types
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

222. xananode.canonical:rel/schema-known-implementations-registry-contains-project-xananode-hugo-theme
   - Type: contains
   - Source: xananode.canonical:schema/known-implementations-registry
   - Target: xananode.canonical:project/xananode-hugo-theme
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

223. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-example.merge
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-example.merge
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

224. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-example.minimal
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-example.minimal
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

225. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-example.museum
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-example.museum
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

226. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-example.researcher_a
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-example.researcher_a
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

227. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-example.researcher_b
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-example.researcher_b
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

228. xananode.canonical:rel/schema-namespace-registry-contains-schema-namespace-xananode
   - Type: contains
   - Source: xananode.canonical:schema/namespace-registry
   - Target: xananode.canonical:schema/namespace-xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

229. xananode.canonical:rel/schema-namespace-xananode-represents-concept-xananode
   - Type: represents
   - Source: xananode.canonical:schema/namespace-xananode
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

230. xananode.canonical:rel/schema-property-birth_date-uses-schema-node-type-organization
   - Type: uses
   - Source: xananode.canonical:schema/property-birth_date
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

231. xananode.canonical:rel/schema-property-birth_date-uses-schema-node-type-person
   - Type: uses
   - Source: xananode.canonical:schema/property-birth_date
   - Target: xananode.canonical:schema/node-type-person
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

232. xananode.canonical:rel/schema-property-birth_date-uses-schema-node-type-project
   - Type: uses
   - Source: xananode.canonical:schema/property-birth_date
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

233. xananode.canonical:rel/schema-property-currency_value-uses-schema-node-type-claim
   - Type: uses
   - Source: xananode.canonical:schema/property-currency_value
   - Target: xananode.canonical:schema/node-type-claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

234. xananode.canonical:rel/schema-property-currency_value-uses-schema-node-type-observation
   - Type: uses
   - Source: xananode.canonical:schema/property-currency_value
   - Target: xananode.canonical:schema/node-type-observation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

235. xananode.canonical:rel/schema-property-currency_value-uses-schema-node-type-project
   - Type: uses
   - Source: xananode.canonical:schema/property-currency_value
   - Target: xananode.canonical:schema/node-type-project
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

236. xananode.canonical:rel/schema-property-currency_value-uses-schema-node-type-source
   - Type: uses
   - Source: xananode.canonical:schema/property-currency_value
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

237. xananode.canonical:rel/schema-property-geo_coordinates-uses-schema-node-type-event
   - Type: uses
   - Source: xananode.canonical:schema/property-geo_coordinates
   - Target: xananode.canonical:schema/node-type-event
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

238. xananode.canonical:rel/schema-property-geo_coordinates-uses-schema-node-type-media
   - Type: uses
   - Source: xananode.canonical:schema/property-geo_coordinates
   - Target: xananode.canonical:schema/node-type-media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

239. xananode.canonical:rel/schema-property-geo_coordinates-uses-schema-node-type-organization
   - Type: uses
   - Source: xananode.canonical:schema/property-geo_coordinates
   - Target: xananode.canonical:schema/node-type-organization
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

240. xananode.canonical:rel/schema-property-geo_coordinates-uses-schema-node-type-place
   - Type: uses
   - Source: xananode.canonical:schema/property-geo_coordinates
   - Target: xananode.canonical:schema/node-type-place
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

241. xananode.canonical:rel/schema-property-geo_coordinates-uses-schema-node-type-source
   - Type: uses
   - Source: xananode.canonical:schema/property-geo_coordinates
   - Target: xananode.canonical:schema/node-type-source
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

242. xananode.canonical:rel/schema-property-registry-contains-schema-property-birth_date
   - Type: contains
   - Source: xananode.canonical:schema/property-registry
   - Target: xananode.canonical:schema/property-birth_date
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

243. xananode.canonical:rel/schema-property-registry-contains-schema-property-currency_value
   - Type: contains
   - Source: xananode.canonical:schema/property-registry
   - Target: xananode.canonical:schema/property-currency_value
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

244. xananode.canonical:rel/schema-property-registry-contains-schema-property-external_identifier
   - Type: contains
   - Source: xananode.canonical:schema/property-registry
   - Target: xananode.canonical:schema/property-external_identifier
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

245. xananode.canonical:rel/schema-property-registry-contains-schema-property-geo_coordinates
   - Type: contains
   - Source: xananode.canonical:schema/property-registry
   - Target: xananode.canonical:schema/property-geo_coordinates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

246. xananode.canonical:rel/schema-property-registry-contains-schema-property-measurement_si
   - Type: contains
   - Source: xananode.canonical:schema/property-registry
   - Target: xananode.canonical:schema/property-measurement_si
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

247. xananode.canonical:rel/schema-relationship-type-alias_of-related_to-schema-relationship-type-has_alias-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-alias_of
   - Target: xananode.canonical:schema/relationship-type-has_alias
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

248. xananode.canonical:rel/schema-relationship-type-alternative_to-related_to-schema-relationship-type-alternative_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-alternative_to
   - Target: xananode.canonical:schema/relationship-type-alternative_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

249. xananode.canonical:rel/schema-relationship-type-anticipated_by-related_to-schema-relationship-type-anticipated-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-anticipated_by
   - Target: xananode.canonical:schema/relationship-type-anticipated
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

250. xananode.canonical:rel/schema-relationship-type-anticipated-related_to-schema-relationship-type-anticipated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-anticipated
   - Target: xananode.canonical:schema/relationship-type-anticipated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

251. xananode.canonical:rel/schema-relationship-type-anticipates-related_to-schema-relationship-type-anticipated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-anticipates
   - Target: xananode.canonical:schema/relationship-type-anticipated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

252. xananode.canonical:rel/schema-relationship-type-appears_in-related_to-schema-relationship-type-has_appearance-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-appears_in
   - Target: xananode.canonical:schema/relationship-type-has_appearance
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

253. xananode.canonical:rel/schema-relationship-type-approved_by-related_to-schema-relationship-type-approved-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-approved_by
   - Target: xananode.canonical:schema/relationship-type-approved
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

254. xananode.canonical:rel/schema-relationship-type-approved-related_to-schema-relationship-type-approved_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-approved
   - Target: xananode.canonical:schema/relationship-type-approved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

255. xananode.canonical:rel/schema-relationship-type-arrived_from-related_to-schema-relationship-type-arrives_at-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-arrived_from
   - Target: xananode.canonical:schema/relationship-type-arrives_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

256. xananode.canonical:rel/schema-relationship-type-arrives_at-related_to-schema-relationship-type-arrived_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-arrives_at
   - Target: xananode.canonical:schema/relationship-type-arrived_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

257. xananode.canonical:rel/schema-relationship-type-authored_by-related_to-schema-relationship-type-authored-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-authored_by
   - Target: xananode.canonical:schema/relationship-type-authored
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

258. xananode.canonical:rel/schema-relationship-type-authored-related_to-schema-relationship-type-authored_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-authored
   - Target: xananode.canonical:schema/relationship-type-authored_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

259. xananode.canonical:rel/schema-relationship-type-broader_than-related_to-schema-relationship-type-narrower_than-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-broader_than
   - Target: xananode.canonical:schema/relationship-type-narrower_than
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

260. xananode.canonical:rel/schema-relationship-type-cited_by-related_to-schema-relationship-type-cites-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-cited_by
   - Target: xananode.canonical:schema/relationship-type-cites
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

261. xananode.canonical:rel/schema-relationship-type-cites-related_to-schema-relationship-type-cited_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-cites
   - Target: xananode.canonical:schema/relationship-type-cited_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

262. xananode.canonical:rel/schema-relationship-type-claim_of-related_to-schema-relationship-type-has_claim-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-claim_of
   - Target: xananode.canonical:schema/relationship-type-has_claim
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

263. xananode.canonical:rel/schema-relationship-type-clarified_by-related_to-schema-relationship-type-clarifies-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-clarified_by
   - Target: xananode.canonical:schema/relationship-type-clarifies
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

264. xananode.canonical:rel/schema-relationship-type-clarifies-related_to-schema-relationship-type-clarified_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-clarifies
   - Target: xananode.canonical:schema/relationship-type-clarified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

265. xananode.canonical:rel/schema-relationship-type-coined_by-related_to-schema-relationship-type-coined-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-coined_by
   - Target: xananode.canonical:schema/relationship-type-coined
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

266. xananode.canonical:rel/schema-relationship-type-coined-related_to-schema-relationship-type-coined_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-coined
   - Target: xananode.canonical:schema/relationship-type-coined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

267. xananode.canonical:rel/schema-relationship-type-collaborated_with-related_to-schema-relationship-type-collaborated_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-collaborated_with
   - Target: xananode.canonical:schema/relationship-type-collaborated_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

268. xananode.canonical:rel/schema-relationship-type-compatible_with-related_to-schema-relationship-type-compatible_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-compatible_with
   - Target: xananode.canonical:schema/relationship-type-compatible_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

269. xananode.canonical:rel/schema-relationship-type-contains-related_to-schema-relationship-type-part_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-contains
   - Target: xananode.canonical:schema/relationship-type-part_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

270. xananode.canonical:rel/schema-relationship-type-contemporary_of-related_to-schema-relationship-type-contemporary_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-contemporary_of
   - Target: xananode.canonical:schema/relationship-type-contemporary_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

271. xananode.canonical:rel/schema-relationship-type-context_for-related_to-schema-relationship-type-has_context-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-context_for
   - Target: xananode.canonical:schema/relationship-type-has_context
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

272. xananode.canonical:rel/schema-relationship-type-continued_from-related_to-schema-relationship-type-continues_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-continued_from
   - Target: xananode.canonical:schema/relationship-type-continues_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

273. xananode.canonical:rel/schema-relationship-type-continues_to-related_to-schema-relationship-type-continued_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-continues_to
   - Target: xananode.canonical:schema/relationship-type-continued_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

274. xananode.canonical:rel/schema-relationship-type-contradicted_by-related_to-schema-relationship-type-contradicts-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-contradicted_by
   - Target: xananode.canonical:schema/relationship-type-contradicts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

275. xananode.canonical:rel/schema-relationship-type-contradicts-related_to-schema-relationship-type-contradicted_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-contradicts
   - Target: xananode.canonical:schema/relationship-type-contradicted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

276. xananode.canonical:rel/schema-relationship-type-contrasts_with-related_to-schema-relationship-type-contrasts_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-contrasts_with
   - Target: xananode.canonical:schema/relationship-type-contrasts_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

277. xananode.canonical:rel/schema-relationship-type-created_by-related_to-schema-relationship-type-created-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-created_by
   - Target: xananode.canonical:schema/relationship-type-created
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

278. xananode.canonical:rel/schema-relationship-type-created-related_to-schema-relationship-type-created_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-created
   - Target: xananode.canonical:schema/relationship-type-created_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

279. xananode.canonical:rel/schema-relationship-type-deep_linked_from-related_to-schema-relationship-type-deep_links_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-deep_linked_from
   - Target: xananode.canonical:schema/relationship-type-deep_links_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

280. xananode.canonical:rel/schema-relationship-type-deep_links_to-related_to-schema-relationship-type-deep_linked_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-deep_links_to
   - Target: xananode.canonical:schema/relationship-type-deep_linked_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

281. xananode.canonical:rel/schema-relationship-type-defined_by-related_to-schema-relationship-type-defines-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-defined_by
   - Target: xananode.canonical:schema/relationship-type-defines
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

282. xananode.canonical:rel/schema-relationship-type-defines-related_to-schema-relationship-type-defined_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-defines
   - Target: xananode.canonical:schema/relationship-type-defined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

283. xananode.canonical:rel/schema-relationship-type-demonstrated_by-related_to-schema-relationship-type-demonstrates-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-demonstrated_by
   - Target: xananode.canonical:schema/relationship-type-demonstrates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

284. xananode.canonical:rel/schema-relationship-type-demonstrates-related_to-schema-relationship-type-demonstrated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-demonstrates
   - Target: xananode.canonical:schema/relationship-type-demonstrated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

285. xananode.canonical:rel/schema-relationship-type-dependency_of-related_to-schema-relationship-type-depends_on-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-dependency_of
   - Target: xananode.canonical:schema/relationship-type-depends_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

286. xananode.canonical:rel/schema-relationship-type-depends_on-related_to-schema-relationship-type-dependency_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-depends_on
   - Target: xananode.canonical:schema/relationship-type-dependency_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

287. xananode.canonical:rel/schema-relationship-type-depicted_by-related_to-schema-relationship-type-depicts-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-depicted_by
   - Target: xananode.canonical:schema/relationship-type-depicts
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

288. xananode.canonical:rel/schema-relationship-type-depicts-related_to-schema-relationship-type-depicted_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-depicts
   - Target: xananode.canonical:schema/relationship-type-depicted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

289. xananode.canonical:rel/schema-relationship-type-derived_from-related_to-schema-relationship-type-derived_into-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-derived_from
   - Target: xananode.canonical:schema/relationship-type-derived_into
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

290. xananode.canonical:rel/schema-relationship-type-derived_into-related_to-schema-relationship-type-derived_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-derived_into
   - Target: xananode.canonical:schema/relationship-type-derived_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

291. xananode.canonical:rel/schema-relationship-type-discussed_in-related_to-schema-relationship-type-discusses-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-discussed_in
   - Target: xananode.canonical:schema/relationship-type-discusses
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

292. xananode.canonical:rel/schema-relationship-type-discusses-related_to-schema-relationship-type-discussed_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-discusses
   - Target: xananode.canonical:schema/relationship-type-discussed_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

293. xananode.canonical:rel/schema-relationship-type-disputed_by-related_to-schema-relationship-type-disputes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-disputed_by
   - Target: xananode.canonical:schema/relationship-type-disputes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

294. xananode.canonical:rel/schema-relationship-type-disputed_identity-related_to-schema-relationship-type-disputed_identity-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-disputed_identity
   - Target: xananode.canonical:schema/relationship-type-disputed_identity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

295. xananode.canonical:rel/schema-relationship-type-disputes-related_to-schema-relationship-type-disputed_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-disputes
   - Target: xananode.canonical:schema/relationship-type-disputed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

296. xananode.canonical:rel/schema-relationship-type-documented_by-related_to-schema-relationship-type-documents-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-documented_by
   - Target: xananode.canonical:schema/relationship-type-documents
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

297. xananode.canonical:rel/schema-relationship-type-documents-related_to-schema-relationship-type-documented_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-documents
   - Target: xananode.canonical:schema/relationship-type-documented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

298. xananode.canonical:rel/schema-relationship-type-enabled_by-related_to-schema-relationship-type-enables-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-enabled_by
   - Target: xananode.canonical:schema/relationship-type-enables
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

299. xananode.canonical:rel/schema-relationship-type-enables-related_to-schema-relationship-type-enabled_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-enables
   - Target: xananode.canonical:schema/relationship-type-enabled_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

300. xananode.canonical:rel/schema-relationship-type-equivalent_to-related_to-schema-relationship-type-equivalent_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-equivalent_to
   - Target: xananode.canonical:schema/relationship-type-equivalent_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

301. xananode.canonical:rel/schema-relationship-type-evidence_for-related_to-schema-relationship-type-has_evidence-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-evidence_for
   - Target: xananode.canonical:schema/relationship-type-has_evidence
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

302. xananode.canonical:rel/schema-relationship-type-explained_by-related_to-schema-relationship-type-explains-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-explained_by
   - Target: xananode.canonical:schema/relationship-type-explains
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

303. xananode.canonical:rel/schema-relationship-type-explains-related_to-schema-relationship-type-explained_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-explains
   - Target: xananode.canonical:schema/relationship-type-explained_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

304. xananode.canonical:rel/schema-relationship-type-extended_by-related_to-schema-relationship-type-extends-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-extended_by
   - Target: xananode.canonical:schema/relationship-type-extends
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

305. xananode.canonical:rel/schema-relationship-type-extends-related_to-schema-relationship-type-extended_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-extends
   - Target: xananode.canonical:schema/relationship-type-extended_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

306. xananode.canonical:rel/schema-relationship-type-extension_of-related_to-schema-relationship-type-has_extension-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-extension_of
   - Target: xananode.canonical:schema/relationship-type-has_extension
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

307. xananode.canonical:rel/schema-relationship-type-featured_in-related_to-schema-relationship-type-features-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-featured_in
   - Target: xananode.canonical:schema/relationship-type-features
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

308. xananode.canonical:rel/schema-relationship-type-featured_speaker-related_to-schema-relationship-type-spoke_at-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-featured_speaker
   - Target: xananode.canonical:schema/relationship-type-spoke_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

309. xananode.canonical:rel/schema-relationship-type-features-related_to-schema-relationship-type-featured_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-features
   - Target: xananode.canonical:schema/relationship-type-featured_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

310. xananode.canonical:rel/schema-relationship-type-followed-related_to-schema-relationship-type-preceded-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-followed
   - Target: xananode.canonical:schema/relationship-type-preceded
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

311. xananode.canonical:rel/schema-relationship-type-friend_of-related_to-schema-relationship-type-friend_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-friend_of
   - Target: xananode.canonical:schema/relationship-type-friend_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

312. xananode.canonical:rel/schema-relationship-type-had_participant-related_to-schema-relationship-type-participated_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-had_participant
   - Target: xananode.canonical:schema/relationship-type-participated_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

313. xananode.canonical:rel/schema-relationship-type-has_alias-related_to-schema-relationship-type-alias_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_alias
   - Target: xananode.canonical:schema/relationship-type-alias_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

314. xananode.canonical:rel/schema-relationship-type-has_appearance-related_to-schema-relationship-type-appears_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_appearance
   - Target: xananode.canonical:schema/relationship-type-appears_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

315. xananode.canonical:rel/schema-relationship-type-has_claim-related_to-schema-relationship-type-claim_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_claim
   - Target: xananode.canonical:schema/relationship-type-claim_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

316. xananode.canonical:rel/schema-relationship-type-has_context-related_to-schema-relationship-type-context_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_context
   - Target: xananode.canonical:schema/relationship-type-context_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

317. xananode.canonical:rel/schema-relationship-type-has_evidence-related_to-schema-relationship-type-evidence_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_evidence
   - Target: xananode.canonical:schema/relationship-type-evidence_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

318. xananode.canonical:rel/schema-relationship-type-has_extension-related_to-schema-relationship-type-extension_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_extension
   - Target: xananode.canonical:schema/relationship-type-extension_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

319. xananode.canonical:rel/schema-relationship-type-has_primary_media-related_to-schema-relationship-type-used_as_primary_media_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-has_primary_media
   - Target: xananode.canonical:schema/relationship-type-used_as_primary_media_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

320. xananode.canonical:rel/schema-relationship-type-identified_by-related_to-schema-relationship-type-identified-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-identified_by
   - Target: xananode.canonical:schema/relationship-type-identified
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

321. xananode.canonical:rel/schema-relationship-type-identified-related_to-schema-relationship-type-identified_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-identified
   - Target: xananode.canonical:schema/relationship-type-identified_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

322. xananode.canonical:rel/schema-relationship-type-implemented_by-related_to-schema-relationship-type-implements-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-implemented_by
   - Target: xananode.canonical:schema/relationship-type-implements
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

323. xananode.canonical:rel/schema-relationship-type-implements-related_to-schema-relationship-type-implemented_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-implements
   - Target: xananode.canonical:schema/relationship-type-implemented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

324. xananode.canonical:rel/schema-relationship-type-included_in-related_to-schema-relationship-type-includes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-included_in
   - Target: xananode.canonical:schema/relationship-type-includes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

325. xananode.canonical:rel/schema-relationship-type-includes-related_to-schema-relationship-type-included_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-includes
   - Target: xananode.canonical:schema/relationship-type-included_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

326. xananode.canonical:rel/schema-relationship-type-influenced_by-related_to-schema-relationship-type-influenced-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-influenced_by
   - Target: xananode.canonical:schema/relationship-type-influenced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

327. xananode.canonical:rel/schema-relationship-type-influenced-related_to-schema-relationship-type-influenced_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-influenced
   - Target: xananode.canonical:schema/relationship-type-influenced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

328. xananode.canonical:rel/schema-relationship-type-interviewed_by-related_to-schema-relationship-type-interviewed-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-interviewed_by
   - Target: xananode.canonical:schema/relationship-type-interviewed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

329. xananode.canonical:rel/schema-relationship-type-interviewed-related_to-schema-relationship-type-interviewed_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-interviewed
   - Target: xananode.canonical:schema/relationship-type-interviewed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

330. xananode.canonical:rel/schema-relationship-type-introduced_by-related_to-schema-relationship-type-introduced-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-introduced_by
   - Target: xananode.canonical:schema/relationship-type-introduced
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

331. xananode.canonical:rel/schema-relationship-type-introduced_in-related_to-schema-relationship-type-introduction_venue_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-introduced_in
   - Target: xananode.canonical:schema/relationship-type-introduction_venue_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

332. xananode.canonical:rel/schema-relationship-type-introduced-related_to-schema-relationship-type-introduced_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-introduced
   - Target: xananode.canonical:schema/relationship-type-introduced_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

333. xananode.canonical:rel/schema-relationship-type-introduction_venue_of-related_to-schema-relationship-type-introduced_in-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-introduction_venue_of
   - Target: xananode.canonical:schema/relationship-type-introduced_in
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

334. xananode.canonical:rel/schema-relationship-type-is_start_of-related_to-schema-relationship-type-starts_with-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-is_start_of
   - Target: xananode.canonical:schema/relationship-type-starts_with
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

335. xananode.canonical:rel/schema-relationship-type-mapped_from-related_to-schema-relationship-type-maps_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-mapped_from
   - Target: xananode.canonical:schema/relationship-type-maps_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

336. xananode.canonical:rel/schema-relationship-type-maps_to-related_to-schema-relationship-type-mapped_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-maps_to
   - Target: xananode.canonical:schema/relationship-type-mapped_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

337. xananode.canonical:rel/schema-relationship-type-memorialized_by-related_to-schema-relationship-type-memorializes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-memorialized_by
   - Target: xananode.canonical:schema/relationship-type-memorializes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

338. xananode.canonical:rel/schema-relationship-type-memorializes-related_to-schema-relationship-type-memorialized_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-memorializes
   - Target: xananode.canonical:schema/relationship-type-memorialized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

339. xananode.canonical:rel/schema-relationship-type-mentioned_by-related_to-schema-relationship-type-mentions-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-mentioned_by
   - Target: xananode.canonical:schema/relationship-type-mentions
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

340. xananode.canonical:rel/schema-relationship-type-mentions-related_to-schema-relationship-type-mentioned_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-mentions
   - Target: xananode.canonical:schema/relationship-type-mentioned_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

341. xananode.canonical:rel/schema-relationship-type-motivated_by-related_to-schema-relationship-type-motivates-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-motivated_by
   - Target: xananode.canonical:schema/relationship-type-motivates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

342. xananode.canonical:rel/schema-relationship-type-motivates-related_to-schema-relationship-type-motivated_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-motivates
   - Target: xananode.canonical:schema/relationship-type-motivated_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

343. xananode.canonical:rel/schema-relationship-type-narrower_than-related_to-schema-relationship-type-broader_than-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-narrower_than
   - Target: xananode.canonical:schema/relationship-type-broader_than
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

344. xananode.canonical:rel/schema-relationship-type-occurred_at-related_to-schema-relationship-type-site_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-occurred_at
   - Target: xananode.canonical:schema/relationship-type-site_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

345. xananode.canonical:rel/schema-relationship-type-parallel_to-related_to-schema-relationship-type-parallel_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-parallel_to
   - Target: xananode.canonical:schema/relationship-type-parallel_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

346. xananode.canonical:rel/schema-relationship-type-part_of-related_to-schema-relationship-type-contains-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-part_of
   - Target: xananode.canonical:schema/relationship-type-contains
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

347. xananode.canonical:rel/schema-relationship-type-participated_in-related_to-schema-relationship-type-had_participant-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-participated_in
   - Target: xananode.canonical:schema/relationship-type-had_participant
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

348. xananode.canonical:rel/schema-relationship-type-popularized_by-related_to-schema-relationship-type-popularized-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-popularized_by
   - Target: xananode.canonical:schema/relationship-type-popularized
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

349. xananode.canonical:rel/schema-relationship-type-popularized-related_to-schema-relationship-type-popularized_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-popularized
   - Target: xananode.canonical:schema/relationship-type-popularized_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

350. xananode.canonical:rel/schema-relationship-type-possible_match-related_to-schema-relationship-type-possible_match-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-possible_match
   - Target: xananode.canonical:schema/relationship-type-possible_match
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

351. xananode.canonical:rel/schema-relationship-type-preceded-related_to-schema-relationship-type-followed-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-preceded
   - Target: xananode.canonical:schema/relationship-type-followed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

352. xananode.canonical:rel/schema-relationship-type-presented_by-related_to-schema-relationship-type-presented-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-presented_by
   - Target: xananode.canonical:schema/relationship-type-presented
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

353. xananode.canonical:rel/schema-relationship-type-presented-related_to-schema-relationship-type-presented_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-presented
   - Target: xananode.canonical:schema/relationship-type-presented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

354. xananode.canonical:rel/schema-relationship-type-preserved_by-related_to-schema-relationship-type-preserves-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-preserved_by
   - Target: xananode.canonical:schema/relationship-type-preserves
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

355. xananode.canonical:rel/schema-relationship-type-preserves-related_to-schema-relationship-type-preserved_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-preserves
   - Target: xananode.canonical:schema/relationship-type-preserved_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

356. xananode.canonical:rel/schema-relationship-type-produces-related_to-schema-relationship-type-results_from-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-produces
   - Target: xananode.canonical:schema/relationship-type-results_from
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

357. xananode.canonical:rel/schema-relationship-type-proposed_by-related_to-schema-relationship-type-proposed-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-proposed_by
   - Target: xananode.canonical:schema/relationship-type-proposed
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

358. xananode.canonical:rel/schema-relationship-type-proposed-related_to-schema-relationship-type-proposed_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-proposed
   - Target: xananode.canonical:schema/relationship-type-proposed_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

359. xananode.canonical:rel/schema-relationship-type-quoted_by-related_to-schema-relationship-type-quotes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-quoted_by
   - Target: xananode.canonical:schema/relationship-type-quotes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

360. xananode.canonical:rel/schema-relationship-type-quotes-related_to-schema-relationship-type-quoted_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-quotes
   - Target: xananode.canonical:schema/relationship-type-quoted_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

361. xananode.canonical:rel/schema-relationship-type-refined_by-related_to-schema-relationship-type-refines-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-refined_by
   - Target: xananode.canonical:schema/relationship-type-refines
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

362. xananode.canonical:rel/schema-relationship-type-refines-related_to-schema-relationship-type-refined_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-refines
   - Target: xananode.canonical:schema/relationship-type-refined_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

363. xananode.canonical:rel/schema-relationship-type-related_to-related_to-schema-relationship-type-related_to-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-related_to
   - Target: xananode.canonical:schema/relationship-type-related_to
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

364. xananode.canonical:rel/schema-relationship-type-represented_by-related_to-schema-relationship-type-represents-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-represented_by
   - Target: xananode.canonical:schema/relationship-type-represents
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

365. xananode.canonical:rel/schema-relationship-type-represents-related_to-schema-relationship-type-represented_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-represents
   - Target: xananode.canonical:schema/relationship-type-represented_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

366. xananode.canonical:rel/schema-relationship-type-required_for-related_to-schema-relationship-type-requires-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-required_for
   - Target: xananode.canonical:schema/relationship-type-requires
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

367. xananode.canonical:rel/schema-relationship-type-requires-related_to-schema-relationship-type-required_for-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-requires
   - Target: xananode.canonical:schema/relationship-type-required_for
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

368. xananode.canonical:rel/schema-relationship-type-results_from-related_to-schema-relationship-type-produces-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-results_from
   - Target: xananode.canonical:schema/relationship-type-produces
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

369. xananode.canonical:rel/schema-relationship-type-same_entity-related_to-schema-relationship-type-same_entity-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-same_entity
   - Target: xananode.canonical:schema/relationship-type-same_entity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

370. xananode.canonical:rel/schema-relationship-type-shaped_by-related_to-schema-relationship-type-shapes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-shaped_by
   - Target: xananode.canonical:schema/relationship-type-shapes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

371. xananode.canonical:rel/schema-relationship-type-shapes-related_to-schema-relationship-type-shaped_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-shapes
   - Target: xananode.canonical:schema/relationship-type-shaped_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

372. xananode.canonical:rel/schema-relationship-type-site_of-related_to-schema-relationship-type-occurred_at-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-site_of
   - Target: xananode.canonical:schema/relationship-type-occurred_at
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

373. xananode.canonical:rel/schema-relationship-type-spoke_at-related_to-schema-relationship-type-featured_speaker-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-spoke_at
   - Target: xananode.canonical:schema/relationship-type-featured_speaker
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

374. xananode.canonical:rel/schema-relationship-type-starts_with-related_to-schema-relationship-type-is_start_of-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-starts_with
   - Target: xananode.canonical:schema/relationship-type-is_start_of
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

375. xananode.canonical:rel/schema-relationship-type-superseded_by-related_to-schema-relationship-type-supersedes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-superseded_by
   - Target: xananode.canonical:schema/relationship-type-supersedes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

376. xananode.canonical:rel/schema-relationship-type-supersedes-related_to-schema-relationship-type-superseded_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-supersedes
   - Target: xananode.canonical:schema/relationship-type-superseded_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

377. xananode.canonical:rel/schema-relationship-type-supported_by-related_to-schema-relationship-type-supports-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-supported_by
   - Target: xananode.canonical:schema/relationship-type-supports
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

378. xananode.canonical:rel/schema-relationship-type-supports-related_to-schema-relationship-type-supported_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-supports
   - Target: xananode.canonical:schema/relationship-type-supported_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

379. xananode.canonical:rel/schema-relationship-type-threatened_by-related_to-schema-relationship-type-threatens-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-threatened_by
   - Target: xananode.canonical:schema/relationship-type-threatens
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

380. xananode.canonical:rel/schema-relationship-type-threatens-related_to-schema-relationship-type-threatened_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-threatens
   - Target: xananode.canonical:schema/relationship-type-threatened_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

381. xananode.canonical:rel/schema-relationship-type-trained_on-related_to-schema-relationship-type-used_to_train-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-trained_on
   - Target: xananode.canonical:schema/relationship-type-used_to_train
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

382. xananode.canonical:rel/schema-relationship-type-transcluded_by-related_to-schema-relationship-type-transcludes-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-transcluded_by
   - Target: xananode.canonical:schema/relationship-type-transcludes
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

383. xananode.canonical:rel/schema-relationship-type-transcludes-related_to-schema-relationship-type-transcluded_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-transcludes
   - Target: xananode.canonical:schema/relationship-type-transcluded_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

384. xananode.canonical:rel/schema-relationship-type-used_as_primary_media_for-related_to-schema-relationship-type-has_primary_media-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-used_as_primary_media_for
   - Target: xananode.canonical:schema/relationship-type-has_primary_media
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

385. xananode.canonical:rel/schema-relationship-type-used_by-related_to-schema-relationship-type-uses-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-used_by
   - Target: xananode.canonical:schema/relationship-type-uses
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

386. xananode.canonical:rel/schema-relationship-type-used_to_train-related_to-schema-relationship-type-trained_on-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-used_to_train
   - Target: xananode.canonical:schema/relationship-type-trained_on
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

387. xananode.canonical:rel/schema-relationship-type-uses-related_to-schema-relationship-type-used_by-inverse
   - Type: related_to
   - Source: xananode.canonical:schema/relationship-type-uses
   - Target: xananode.canonical:schema/relationship-type-used_by
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

388. xananode.canonical:rel/support-supports-contributors
   - Type: supports
   - Source: xananode.canonical:source/support-xananode
   - Target: xananode.canonical:community/xananode-contributors
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

389. xananode.canonical:rel/tagline-fragment-derived-from-claim
   - Type: derived_from
   - Source: xananode.canonical:fragment/relationships-preserve-knowledge-sentence
   - Target: xananode.canonical:claim/relationships-preserve-knowledge
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

390. xananode.canonical:rel/what-is-xananode-explains-xananode
   - Type: explains
   - Source: xananode.canonical:essay/what-is-xananode
   - Target: xananode.canonical:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

391. xananode.canonical:rel/workspace-documented-by-repository
   - Type: documents
   - Source: xananode.canonical:source/xananode-workspace-repository
   - Target: xananode.canonical:project/xananode-workspace
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

392. xananode.canonical:rel/workspace-uses-core
   - Type: uses
   - Source: xananode.canonical:project/xananode-workspace
   - Target: xananode.canonical:project/xananode-core-sdk
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

393. xananode.canonical:rel/xananode-defines-knowledge-substrate
   - Type: defines
   - Source: xananode.canonical:concept/xananode
   - Target: xananode.canonical:concept/knowledge-substrate
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

394. xananode.canonical:rel/xananode-has-claim-relationships-preserve-knowledge
   - Type: has_claim
   - Source: xananode.canonical:concept/xananode
   - Target: xananode.canonical:claim/relationships-preserve-knowledge
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

395. xananode.canonical:rel/xananode-has-primary-media-icon
   - Type: has_primary_media
   - Source: xananode.canonical:concept/xananode
   - Target: xananode.canonical:media/xananode-icon
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

396. xananode.canonical:rel/xananode-published-at-com
   - Type: documents
   - Source: xananode.canonical:concept/xananode
   - Target: xananode.canonical:source/xananode-com-domain
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

397. xananode.lineage:rel/leibniz-anticipated-semantic-computation
   - Type: anticipated
   - Source: xananode.lineage:person/gottfried-wilhelm-leibniz
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

398. xananode.lineage:rel/ostwald-parallel-to-otlet
   - Type: parallel_to
   - Source: xananode.lineage:person/wilhelm-ostwald
   - Target: xananode.lineage:person/paul-otlet
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

399. xananode.lineage:rel/borges-authored-forking-paths
   - Type: authored
   - Source: xananode.lineage:person/jorge-luis-borges
   - Target: xananode.lineage:publication/the-garden-of-forking-paths
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

400. xananode.lineage:rel/forking-paths-anticipated-nonlinear-text
   - Type: anticipated
   - Source: xananode.lineage:publication/the-garden-of-forking-paths
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

401. xananode.lineage:rel/van-dam-collaborated-with-nelson
   - Type: collaborated_with
   - Source: xananode.lineage:person/andries-van-dam
   - Target: xananode.example:person/ted-nelson
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

402. xananode.lineage:rel/brown-site-of-hes
   - Type: occurred_at
   - Source: xananode.lineage:place/brown-university
   - Target: xananode.lineage:project/hypertext-editing-system
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

403. xananode.lineage:rel/van-dam-implemented-fress
   - Type: implements
   - Source: xananode.lineage:person/andries-van-dam
   - Target: xananode.lineage:project/fress
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

404. xananode.lineage:rel/intermedia-implemented-scholarly-hypermedia
   - Type: implements
   - Source: xananode.lineage:project/intermedia
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

405. xananode.lineage:rel/alan-kay-extends-engelbart
   - Type: extends
   - Source: xananode.lineage:person/alan-kay
   - Target: xananode.example:person/douglas-engelbart
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

406. xananode.lineage:rel/xerox-parc-context-for-kay
   - Type: context_for
   - Source: xananode.lineage:organization/xerox-parc
   - Target: xananode.lineage:person/alan-kay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

407. xananode.lineage:rel/negroponte-shapes-media-lab
   - Type: shapes
   - Source: xananode.lineage:person/nicholas-negroponte
   - Target: xananode.lineage:organization/mit-media-lab
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

408. xananode.lineage:rel/papert-parallel-to-kay
   - Type: parallel_to
   - Source: xananode.lineage:person/seymour-papert
   - Target: xananode.lineage:person/alan-kay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

409. xananode.lineage:rel/minsky-context-for-agents
   - Type: context_for
   - Source: xananode.lineage:person/marvin-minsky
   - Target: xananode.lineage:technology/apple-knowledge-navigator
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

410. xananode.lineage:rel/brondmo-introduced-micons
   - Type: introduced
   - Source: xananode.lineage:person/hans-peter-brondmo
   - Target: xananode.lineage:technology/micons
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

411. xananode.lineage:rel/hyperland-features-micons
   - Type: features
   - Source: xananode.lineage:publication/hyperland
   - Target: xananode.lineage:technology/micons
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

412. xananode.lineage:rel/winter-demonstrated-interactive-music
   - Type: demonstrates
   - Source: xananode.lineage:person/robert-winter
   - Target: xananode.lineage:project/interactive-beethoven-ninth
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

413. xananode.lineage:rel/abel-demonstrated-guernica
   - Type: demonstrates
   - Source: xananode.lineage:person/robert-abel
   - Target: xananode.lineage:project/interactive-guernica
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

414. xananode.lineage:rel/sutherland-anticipated-spatial-computing
   - Type: anticipated
   - Source: xananode.lineage:person/ivan-sutherland
   - Target: xananode.lineage:tool/hyperland-vr
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

415. xananode.lineage:rel/lanier-popularized-vr
   - Type: popularized
   - Source: xananode.lineage:person/jaron-lanier
   - Target: xananode.lineage:organization/vpl-research
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

416. xananode.lineage:rel/fisher-demonstrated-nasa-vr
   - Type: demonstrates
   - Source: xananode.lineage:person/scott-fisher
   - Target: xananode.lineage:organization/nasa
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

417. xananode.lineage:rel/dirk-gently-anticipated-hyperland
   - Type: anticipated
   - Source: xananode.lineage:publication/dirk-gentlys-holistic-detective-agency
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

418. xananode.lineage:rel/bbc-two-created-hyperland-broadcast-context
   - Type: created
   - Source: xananode.lineage:organization/bbc-two
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

419. xananode.lineage:rel/wurman-created-ted-context
   - Type: created
   - Source: xananode.lineage:person/richard-saul-wurman
   - Target: xananode.lineage:event/ted2-1990
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

420. xananode.lineage:rel/harry-marks-participated-in-ted2
   - Type: participated_in
   - Source: xananode.lineage:person/harry-marks
   - Target: xananode.lineage:event/ted2-1990
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

421. xananode.lineage:rel/sculley-presented-knowledge-navigator
   - Type: presented
   - Source: xananode.lineage:person/john-sculley
   - Target: xananode.lineage:technology/apple-knowledge-navigator
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

422. xananode.lineage:rel/knowledge-navigator-parallel-to-hyperland-agent
   - Type: parallel_to
   - Source: xananode.lineage:technology/apple-knowledge-navigator
   - Target: xananode.lineage:person/tom-baker
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

423. xananode.lineage:rel/bill-atkinson-implemented-hypercard
   - Type: implements
   - Source: xananode.lineage:person/bill-atkinson
   - Target: xananode.lineage:technology/hypercard
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

424. xananode.lineage:rel/ted2-features-robert-abel
   - Type: features
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:person/robert-abel
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

425. xananode.lineage:rel/ted2-features-bill-atkinson
   - Type: features
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:person/bill-atkinson
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

426. xananode.lineage:rel/berners-lee-collaborated-with-cailliau
   - Type: collaborated_with
   - Source: xananode.lineage:person/tim-berners-lee
   - Target: xananode.lineage:person/robert-cailliau
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

427. xananode.lineage:rel/cern-context-for-web
   - Type: context_for
   - Source: xananode.lineage:place/cern
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

428. xananode.lineage:rel/html-implements-markup
   - Type: implements
   - Source: xananode.lineage:technology/html
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

429. xananode.lineage:rel/http-enables-web
   - Type: enables
   - Source: xananode.lineage:technology/http
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

430. xananode.lineage:rel/url-uri-enables-addressability
   - Type: enables
   - Source: xananode.lineage:technology/url-uri
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

431. xananode.lineage:rel/ncsa-popularized-mosaic
   - Type: popularized
   - Source: xananode.lineage:organization/ncsa
   - Target: xananode.lineage:technology/mosaic
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

432. xananode.lineage:rel/andreessen-popularized-web
   - Type: popularized
   - Source: xananode.lineage:person/marc-andreessen
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

433. xananode.lineage:rel/web-incomplete-contrasts-with-xananode
   - Type: contrasts_with
   - Source: xananode.lineage:concept/web-as-incomplete-hypertext
   - Target: xananode.example:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

434. xananode.lineage:rel/guide-implemented-pc-hypertext
   - Type: implements
   - Source: xananode.lineage:technology/guide
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

435. xananode.lineage:rel/storyspace-implemented-hypertext-literature
   - Type: implements
   - Source: xananode.lineage:project/storyspace
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

436. xananode.lineage:rel/zog-kms-implemented-frame-navigation
   - Type: implements
   - Source: xananode.lineage:project/zog-kms
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

437. xananode.lineage:rel/xanadu-at-autodesk-implements-xanadu
   - Type: implements
   - Source: xananode.lineage:project/xanadu-at-autodesk
   - Target: xananode.example:project/project-xanadu
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

438. xananode.lineage:rel/xananode-preserves-lost-lineage
   - Type: preserves
   - Source: xananode.example:concept/xananode
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

439. xananode.lineage:rel/xananode-extends-bush-trails
   - Type: extends
   - Source: xananode.example:concept/xananode
   - Target: xananode.example:project/memex
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

440. xananode.lineage:rel/xananode-extends-transclusion
   - Type: extends
   - Source: xananode.example:concept/xananode
   - Target: xananode.example:concept/transclusion
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

441. xananode.lineage:rel/conflict-preserves-disagreement
   - Type: preserves
   - Source: xananode.lineage:concept/conflict-disputed-identity
   - Target: xananode.example:concept/federated-knowledge-substrates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

442. xananode.lineage:rel/git-backed-substrate-enables-history
   - Type: enables
   - Source: xananode.lineage:technology/git-backed-substrate
   - Target: xananode.example:concept/provenance
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

443. xananode.lineage:rel/babel-maps-to-translation
   - Type: maps_to
   - Source: xananode.lineage:tool/babel
   - Target: xananode.example:concept/schema-extension
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

444. xananode.lineage:rel/hyperland-vr-implements-spatial-navigation
   - Type: implements
   - Source: xananode.lineage:tool/hyperland-vr
   - Target: xananode.example:concept/federated-knowledge-substrates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

445. xananode.lineage:rel/overlap-context-for-federation
   - Type: context_for
   - Source: xananode.lineage:concept/authored-substrate-overlap
   - Target: xananode.example:concept/federated-knowledge-substrates
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

446. xananode.lineage:rel/overlap-has-federation-signal-claim
   - Type: has_claim
   - Source: xananode.lineage:concept/authored-substrate-overlap
   - Target: xananode.lineage:claim/overlap-is-federation-signal
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

447. xananode.lineage:rel/overlap-has-merge-claim
   - Type: has_claim
   - Source: xananode.lineage:concept/authored-substrate-overlap
   - Target: xananode.lineage:claim/merge-is-authored-interpretation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

448. xananode.lineage:rel/overlap-has-lineage-pack-claim
   - Type: has_claim
   - Source: xananode.lineage:concept/authored-substrate-overlap
   - Target: xananode.lineage:claim/lineage-pack-can-overlap-canonical-pack
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

449. xananode.lineage:rel/overlap-preserves-disputed-identity
   - Type: preserves
   - Source: xananode.lineage:concept/authored-substrate-overlap
   - Target: xananode.lineage:concept/conflict-disputed-identity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

450. xananode.lineage:rel/federation-signal-supports-xananode
   - Type: supports
   - Source: xananode.lineage:claim/overlap-is-federation-signal
   - Target: xananode.example:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

451. xananode.lineage:rel/merge-claim-refines-conflict
   - Type: refines
   - Source: xananode.lineage:claim/merge-is-authored-interpretation
   - Target: xananode.lineage:concept/conflict-disputed-identity
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

452. xananode.lineage:rel/lineage-overlap-claim-explains-pack-boundary
   - Type: explains
   - Source: xananode.lineage:claim/lineage-pack-can-overlap-canonical-pack
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

453. xananode.lineage:rel/lost-lineage-context-for-xananode
   - Type: context_for
   - Source: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Target: xananode.example:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

454. xananode.lineage:rel/otlet-anticipated-knowledge-systems
   - Type: anticipated
   - Source: xananode.lineage:person/paul-otlet
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

455. xananode.lineage:rel/wells-proposed-world-brain
   - Type: proposed
   - Source: xananode.lineage:person/h-g-wells
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

456. xananode.lineage:rel/bush-influenced-adams-lineage
   - Type: influenced
   - Source: xananode.example:person/vannevar-bush
   - Target: xananode.lineage:person/douglas-adams
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

457. xananode.lineage:rel/nelson-influenced-hyperland
   - Type: influenced
   - Source: xananode.example:person/ted-nelson
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

458. xananode.lineage:rel/adams-authored-hyperland
   - Type: authored
   - Source: xananode.lineage:person/douglas-adams
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

459. xananode.lineage:rel/whitby-created-hyperland
   - Type: created
   - Source: xananode.lineage:person/max-whitby
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

460. xananode.lineage:rel/hyperland-features-tom-baker
   - Type: features
   - Source: xananode.lineage:publication/hyperland
   - Target: xananode.lineage:person/tom-baker
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

461. xananode.lineage:rel/hyperland-contemporary-of-ted2
   - Type: contemporary_of
   - Source: xananode.lineage:publication/hyperland
   - Target: xananode.lineage:event/ted2-1990
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

462. xananode.lineage:rel/ted2-occurred-at-monterey
   - Type: occurred_at
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:place/monterey-california
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

463. xananode.lineage:rel/ted2-features-adams
   - Type: features
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:person/douglas-adams
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

464. xananode.lineage:rel/ted2-features-bob-stein
   - Type: features
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:person/bob-stein
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

465. xananode.lineage:rel/bob-stein-created-voyager
   - Type: created
   - Source: xananode.lineage:person/bob-stein
   - Target: xananode.lineage:organization/voyager-company
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

466. xananode.lineage:rel/ted2-features-alan-kay
   - Type: features
   - Source: xananode.lineage:event/ted2-1990
   - Target: xananode.lineage:person/alan-kay
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

467. xananode.lineage:rel/alan-kay-shaped-dynamic-media
   - Type: shapes
   - Source: xananode.lineage:person/alan-kay
   - Target: xananode.lineage:organization/xerox-parc
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

468. xananode.lineage:rel/hypercard-popularized-hypermedia
   - Type: popularized
   - Source: xananode.lineage:technology/hypercard
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

469. xananode.lineage:rel/berners-lee-implemented-web
   - Type: implements
   - Source: xananode.lineage:person/tim-berners-lee
   - Target: xananode.lineage:technology/world-wide-web
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

470. xananode.lineage:rel/web-contrasts-with-xananode
   - Type: contrasts_with
   - Source: xananode.lineage:technology/world-wide-web
   - Target: xananode.example:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

471. xananode.lineage:rel/aspen-anticipated-spatial-media
   - Type: anticipated
   - Source: xananode.lineage:project/aspen-movie-map
   - Target: xananode.lineage:publication/hyperland
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

472. xananode.lineage:rel/trail-starts-with-lost-lineage
   - Type: starts_with
   - Source: xananode.lineage:trail/lost-lineage-intertwingled-trail
   - Target: xananode.lineage:concept/lost-lineage-human-knowledge-augmentation
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

473. xananode.lineage:rel/trail-arrives-at-xananode
   - Type: arrives_at
   - Source: xananode.lineage:trail/lost-lineage-intertwingled-trail
   - Target: xananode.example:concept/xananode
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

474. xananode.review:rel/fixture-context-for-review
   - Type: context_for
   - Source: xananode.review:observation/unresolved-review-fixture
   - Target: xananode.example:concept/review-suggestions
   - Reason: Incoming relationship references at least one node already present in the substrate.
   - Approved: false

