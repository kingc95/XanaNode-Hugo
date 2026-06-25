---
title: "What Is XanaNode?"
date: 2026-06-16
type: "essay"
importance: 5
summary: "XanaNode is a protocol for interoperable knowledge substrates, not merely a graph viewer or static site theme."
relationships:
  - type: "defines"
    target: "xananode"
  - type: "explains"
    target: "xananode-hugo-theme"
  - type: "arrives_at"
    target: "claim-merge-without-collapse"
  - type: "context_for"
    target: "federated-knowledge-substrates"
  - type: "explains"
    target: "protocol-artifacts"
---

[XanaNode](/node/xananode) is best understood in layers.

The ontology defines what kinds of things can be represented.

The relationship vocabulary defines why those things are connected.

A substrate is an independently authored graph using that vocabulary.

[Protocol artifacts](/node/protocol-artifacts) make that graph portable: `substrate.json` identifies the substrate, node records describe addressable objects, `relationships.json` preserves typed edges, schemas validate the artifacts, and reports explain compatibility or merge decisions.

A renderer, such as this [Hugo](/node/hugo) theme, is one way to publish and navigate a substrate. It is not the protocol itself.

The larger goal is federation: many independently moderated substrates that can still interoperate because they declare their schemas and relationships clearly.
