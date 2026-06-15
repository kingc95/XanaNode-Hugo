# XanaNode

XanaNode is a modular, customizable, relationship-first knowledge substrate for Hugo.

It lets a normal Hugo site publish two things at once:

1. human-readable HTML pages
2. machine-readable graph data

The theme is not the substrate. The substrate is your content stack: Markdown files, front matter, schemas, relationships, trails, sources, claims, media, and revisions.

## What this repo contains

```text
themes/xananode repo root
├── archetypes/                 Starter node templates
├── assets/                     Base CSS
├── layouts/                    Hugo templates and graph JSON export
├── static/js/xananode.js       Cytoscape-powered graph viewer
├── static/schemas/             Canonical node and relationship registries
├── tools/prepare-xananode.mjs  Validator + tumbler fragment generator
├── exampleSite/                Self-hosting example substrate
└── package.json                Validation/build scripts for the example
```

## Core pieces

### Nodes

A node is a typed knowledge object. The canonical node type registry currently includes:

- `person`
- `concept`
- `claim`
- `source`
- `essay`
- `observation`
- `media`
- `event`
- `place`
- `organization`
- `project`
- `technology`
- `publication`
- `community`
- `relationship`
- `revision`
- `trail`
- `schema`

### Relationships

Relationships are typed edges with meanings, inverses, categories, default weights, and default visibility.

Authors should normally define only one direction:

```yaml
relationships:
  - type: explains
    target: knowledge-substrate
```

The validator warns when the inverse is manually duplicated elsewhere.

### Trails

A trail is a curated route through the graph. It is how a substrate can say: “start here, then follow this path.”

### Tumbler-addressed transclusion

XanaNode supports a lightweight, Xanadu-inspired address syntax:

```text
xana://node-id@v1/1.2-1.4
```

That means:

```text
node-id   = stable node identifier
@v1       = version
/1.2-1.4  = tumbler range inside that version
```

Use it in Markdown with:

```go-html-template
{{</* xana ref="claim-relationship-first-publishing@v1/1.1" */>}}
```

The build tool generates fragment data and validates that the referenced node, version, and tumbler range exist.

## Quick start

```bash
npm install
npm run validate
npm run example:dev
```

The example site is intentionally self-hosting: it explains XanaNode using XanaNode nodes and relationships.

## Use this theme in another Hugo site

```bash
hugo new site my-substrate
cd my-substrate
git init
git submodule add <xananode-theme-repo-url> themes/xananode
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

## Static-site rule

XanaNode does not require an API, database, or user account system.

The static build does the enforcement:

- schema registries validate
- node types validate
- relationship types validate
- targets validate
- duplicate authored inverses warn
- tumbler references validate
- fragment data generates
- Hugo publishes HTML and `/index.json`

Community governance can be added later as a profile or workflow, but it is not required for XanaNode core.

## Philosophy

HTML made documents easy to publish.

XanaNode tries to make relationships easy to publish.

The goal is not to replace prose. The goal is to let prose, claims, sources, trails, media, and revisions remain connected in a form humans can read and machines can follow.
