# XanaNode Hugo Theme

This repository is a Hugo implementation of the XanaNode protocol.

The canonical protocol lives at [kingc95/xananode](https://github.com/kingc95/xananode). Use that repository as the source of truth for the core specs, schemas, governance model, registries, examples, and protocol proposals.

This theme turns a Hugo content tree into a readable website plus machine-readable XanaNode substrate artifacts.

## What It Publishes

A Hugo site using this theme can publish:

1. Human-readable HTML pages.
2. A Cytoscape-powered relationship graph.
3. The legacy Hugo viewer feed at `/index.json`.
4. Protocol artifacts:
   - `/substrate.json`
   - `/relationships.json`
   - `/nodes/*.json`
   - `/schemas/*.json`
5. Tumbler fragment data:
   - `/xananode-fragments.json`
6. Human-review suggestions for links and transclusions:
   - `/xananode-suggestions.json`
   - `/xananode-suggestions.md`

The theme does not replace the protocol. It is one static-site renderer and validator for authoring a XanaNode-compatible substrate with Markdown, front matter, schemas, relationships, trails, sources, claims, media, and revisions.

## Repository Layout

```text
themes/xananode/
  archetypes/                 Starter node templates
  assets/                     Base CSS
  layouts/                    Hugo templates and JSON export
  static/js/xananode.js       Cytoscape-powered graph viewer
  static/schemas/             Bundled XanaNode schemas and registries
  tools/prepare-xananode.mjs  Validator, protocol artifact generator, fragment generator, suggestion scanner
  exampleSite/                Self-hosting example substrate
  package.json                Validation/build scripts for the example
```

## Protocol Alignment

The build tool validates the bundled core registries and generated substrate artifacts against the XanaNode schemas from the protocol repo.

Current generated protocol files include:

- `substrate.json`: substrate manifest with namespace, version, imports, and schema version.
- `relationships.json`: typed protocol relationship records.
- `nodes/*.json`: per-node protocol records with incoming/outgoing relationship summaries.
- `schemas/*.json`: canonical registries and substrate/report schemas.

The example site also includes a "Protocol Artifacts Trail" that explains the concrete files, reports, registries, extension model, and federation governance described by the protocol.

## Core Authoring Model

### Nodes

A node is a typed knowledge object. Core node types come from the protocol registry and include objects such as:

- `person`
- `concept`
- `claim`
- `source`
- `essay`
- `observation`
- `media`
- `project`
- `technology`
- `trail`
- `schema`
- `fragment`

### Relationships

Relationships are typed edges with meanings, inverses, categories, default weights, and default visibility.

Authors should normally define one direction:

```yaml
relationships:
  - type: explains
    target: knowledge-substrate
```

The validator warns when an inverse is manually duplicated elsewhere.

### Trails

A trail is a curated route through the graph:

```yaml
type: trail
nodes:
  - start-here
  - xananode
  - knowledge-substrate
```

### Tumbler-Addressed Transclusion

XanaNode supports stable authored fragments plus generated fallback fragments.

Prefer declaring important fragments in the source node front matter:

```yaml
fragments:
  - id: "0004"
    title: "Associative Trails Fragment"
    summary: "Bush's argument that knowledge systems need associative navigation and recall."
    text: "Bush argued that the growing record of knowledge required better associative methods for navigation and recall."
    selector:
      type: "semantic-anchor"
      value: "associative-trails-discussion"
```

Then transclude that stable fragment from Markdown:

```go-html-template
{{</* xana ref="as-we-may-think@v1/0004" */>}}
```

The build tool publishes that fragment with protocol metadata:

```text
xananode.example:source/as-we-may-think#fragment/0004
```

It also emits a protocol `fragment` node and a `transcludes` relationship for shortcode usage.

For convenience, the generator still creates position-based fallback fragments:

```text
xana://node-id@v1/1.2-1.4
```

That means:

```text
node-id   = stable node identifier
@v1       = version
/1.2-1.4  = generated block range inside that version
```

Generated ranges are useful for drafts and review suggestions, but authored fragment ids are safer for stable quotation identity because paragraph numbering can drift after edits.

## Automatic Review Suggestions

The build tool scans Markdown for possible links and transclusions, but it does not rewrite content.

It suggests:

- The first mention of another node title or alias on a page.
- Case-insensitive matches, such as `xananode` matching `XanaNode`.
- No self-links.
- No duplicate suggestions for the same target node on the same page.
- No matches inside existing Markdown links, images, inline code, fenced code, HTML anchors, or Hugo shortcodes.
- Potential transclusions when duplicated fragment text appears in another node.

Suggestions are written for human approval:

```text
data/xananode_suggestions.json
static/xananode-suggestions.json
static/xananode-suggestions.md
```

Every suggestion is marked `approved: false`. Apply approved changes manually or with a future review tool.

## Quick Start

```bash
npm install
npm run validate
npm run example:dev
```

The example site is intentionally self-hosting: it explains XanaNode using XanaNode nodes, relationships, trails, schemas, and generated protocol artifacts.

## Use This Theme In Another Hugo Site

```bash
hugo new site my-substrate
cd my-substrate
git init
git submodule add https://github.com/kingc95/xananode-hugo.git themes/xananode
cp themes/xananode/exampleSite/hugo.yaml ./hugo.yaml
npm init -y
npm install --save-dev ajv gray-matter glob
```

Add scripts to your site's `package.json`:

```json
{
  "scripts": {
    "prepare": "node themes/xananode/tools/prepare-xananode.mjs .",
    "validate": "node themes/xananode/tools/prepare-xananode.mjs .",
    "dev": "npm run prepare && hugo server",
    "build": "npm run prepare && hugo --gc --minify"
  }
}
```

Then create content nodes under `content/`.

## Static-Site Rule

XanaNode does not require an API, database, or user account system.

The static build does the enforcement:

- Schema registries validate.
- Node types validate.
- Relationship types validate.
- Targets validate.
- Duplicate authored inverses warn.
- Tumbler references validate.
- Fragment data generates.
- Link/transclusion suggestions generate for review.
- Hugo publishes HTML, `/index.json`, and protocol artifacts.

## Related Repositories

- Protocol source of truth: [kingc95/xananode](https://github.com/kingc95/xananode)
- This repository: a Hugo theme and example substrate implementation of that protocol

## Philosophy

HTML made documents easy to publish.

XanaNode tries to make relationships easy to publish.

The goal is not to replace prose. The goal is to let prose, claims, sources, trails, media, schemas, reports, and revisions remain connected in a form humans can read and machines can follow.
