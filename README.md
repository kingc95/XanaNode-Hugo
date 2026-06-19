# XanaNode Hugo Theme

This repository is a Hugo implementation of the XanaNode protocol.

The canonical protocol lives at [kingc95/xananode](https://github.com/kingc95/xananode). Use that repository as the source of truth for the core specs, schemas, governance model, registries, examples, and protocol proposals.

The renderer uses [kingc95/XanaNode-Core-SDK](https://github.com/kingc95/XanaNode-Core-SDK) as a Git submodule and validates generated protocol artifacts through the Core SDK. Core carries the canonical protocol schema submodule, so standalone Hugo users get the same protocol rules as Studio and Workspace.

This theme turns a Hugo content tree into a readable website plus machine-readable XanaNode substrate artifacts.

## Proper Build

Run these from the `XanaNode-Hugo/` theme repository.

For the example site bundled with the theme, the normal production build is:

```bash
npm run example:build
```

That runs `npm run prepare` first, which validates Markdown-authored nodes plus imported protocol JSON, regenerates the protocol artifacts, and then runs Hugo against `exampleSite`.

Use this before publishing or checking the example:

```bash
npm run validate
npm run example:build
```

Use this for local theme/example development:

```bash
npm run example:dev
```

Do not use plain `hugo` by itself unless you already ran `npm run prepare`; otherwise generated protocol files can be stale.

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
themes/xananode-hugo/
  archetypes/                 Starter node templates
  assets/                     Base CSS
  layouts/                    Hugo templates and JSON export
  static/js/xananode.js       Cytoscape-powered graph viewer
  static/schemas/             Bundled XanaNode schemas and registries
  tools/prepare-xananode.mjs  Hugo adapter that prepares Core-validated artifacts
  vendor/xananode-core/       Core SDK submodule used for protocol validation
  exampleSite/                Self-hosting example substrate
  package.json                Validation/build scripts for the example
```

## Protocol Alignment

The build tool validates generated substrate artifacts with `@xananode/core`. It also copies the latest protocol schemas from the Core SDK submodule into the example site's static output so the published Hugo site and the machine-readable artifacts stay aligned.

`tools/prepare-xananode.mjs` intentionally remains in this repository because it is Hugo-specific glue. It reads Hugo Markdown/front matter conventions, resolves Hugo shortcodes, writes files into Hugo's `data/` and `static/` folders, and prepares the viewer feed used by the theme. Protocol rules should live in Core; renderer concerns should stay here. If this script needs a protocol rule that Core does not expose, that rule belongs upstream in Core rather than being reimplemented permanently in Hugo.

Configured `params.xananode.links` are part of the site projection. Public links without an existing `node` are emitted as lightweight `source` nodes so the graph can represent project homes, social profiles, support pages, and documentation links with normal substrate identity. Set `private: true` or `generate_node: false` on a link when it should remain a UI link only.

Generated link nodes can also connect back into the substrate with flat config keys:

```yaml
params:
  xananode:
    links:
      - label: "Support"
        url: "https://github.com/sponsors/example"
        summary: "Support ongoing substrate creation."
        relationship_type: "supports"
        relationship_target: "xananode"
```

Current generated protocol files include:

- `substrate.json`: substrate manifest with namespace, version, imports, and schema version.
- `nodes-index.json`: static-host friendly index of published node record files.
- `relationships.json`: typed protocol relationship records.
- `nodes/*.json`: per-node protocol records with incoming/outgoing relationship summaries.
- `schemas/*.json`: canonical registries and substrate/report schemas.
- `xananode-viewer.json`: browser-ready read-only viewer feed derived from the protocol records.

## Import Protocol JSON

Hugo sites do not need to recreate every protocol object as Markdown.

Drop generated and validated protocol JSON into one of these source folders:

```text
imports/
data/imports/
data/xananode-imports/
```

Supported import shapes:

- A substrate node object.
- An array of substrate node objects.
- An object with a `nodes` array.
- A relationship-list object with a `relationships` array.
- An array of relationship objects.

Then run:

```bash
npm run validate
npm run build
```

The prepare step merges Markdown-authored nodes with imported protocol JSON, validates the combined substrate through Core, writes `/substrate.json`, `/nodes-index.json`, `/nodes/*.json`, `/relationships.json`, and updates `/xananode-viewer.json` for the browser.

Use Markdown for prose and authored pages. Use JSON imports for existing Core or Workspace records, generated relationship files, federation packs, schema packs, or any substrate data you do not want to hand-copy into front matter.

Core owns the review logic. The Hugo prepare step asks `@xananode/core` to analyze the current substrate plus incoming packs for possible same-entity merges, incoming relationships that touch existing nodes, possible Markdown links, and possible transclusions. Hugo only formats those Core suggestions for static review.

The example site also includes a "Protocol Artifacts Trail" that explains the concrete files, reports, registries, extension model, and federation governance described by the protocol.

The bundled example uses protocol JSON packs:

- `params.xananode.packs` in `exampleSite/hugo.yaml` mounts the protocol minimal substrate from the Core/Protocol submodule.
- `exampleSite/imports/lineage/` is the extended XanaNode lineage pack, covering the historical and conceptual branches that lead into XanaNode.

These are intentionally not recreated as Markdown pages. They demonstrate both pack modes: a mounted pack remains governed by its source repository, while a local import pack can later be absorbed after review. Generated or validated protocol JSON can be mounted or dropped into a Hugo site, merged with authored Markdown nodes, validated by Core, and rendered by the read-only viewer.

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
git submodule update --init --recursive
npm install
npm run validate
npm run example:dev
```

The example site is intentionally small enough to copy: it shows how XanaNode nodes, relationships, trails, schemas, and generated protocol artifacts render in Hugo. The fuller XanaNode doctrine, lineage, and implementation stack should be treated as a substrate pack that can be mounted when a site wants that layer.

To generate the optional canonical pack from the current example substrate:

```bash
npm run pack:canonical
```

That writes `exampleSite/packs/xananode-canonical/`. It is present as an opt-in pack in `exampleSite/hugo.yaml` with `enabled: false`; flip that to `true` when you want Hugo to mount it. In normal use, Workspace should provide the friendly pack picker and import/merge review flow, while Core enforces the protocol behavior and Hugo renders the resulting artifacts.

## Use This Theme In Another Hugo Site

```bash
hugo new site my-substrate
cd my-substrate
git init
git submodule add https://github.com/kingc95/XanaNode-Hugo.git themes/xananode-hugo
git submodule update --init --recursive themes/xananode-hugo
cp themes/xananode-hugo/exampleSite/hugo.yaml ./hugo.yaml
npm init -y
npm install --save-dev ./themes/xananode-hugo/vendor/xananode-core ajv gray-matter glob
```

Add scripts to your site's `package.json`:

```json
{
  "scripts": {
    "prepare": "node themes/xananode-hugo/tools/prepare-xananode.mjs .",
    "validate": "node themes/xananode-hugo/tools/prepare-xananode.mjs .",
    "dev": "npm run prepare && hugo server",
    "build": "npm run prepare && hugo --gc --minify"
  }
}
```

Then create content nodes under `content/`.

## White-Labeling The Example

The example site is meant to teach the model. For a real project, copy its
configuration as a starting point, then replace the XanaNode example identity in
your site's `hugo.yaml`.

The main knobs live under `params.xananode`:

```yaml
params:
  description: "Your public site description for search engines and previews."
  author: "Your team or organization"
  tagline: "Your site tagline"
  image: "your-social-card.png"
  analytics:
    gtag: "G-XXXXXXXXXX"
    plausibleDomain: "example.org"
  xananode:
    namespace: "example.org"
    homeNode: "welcome"
    brand:
      name: "Your Project"
      tagline: "Your relationship-first knowledge base"
      icon: "your-icon.svg"
      homeLabel: "Go to the project home node"
      attributionLabel: "Your Project"
      attributionText: "example.org"
      attributionUrl: "https://example.org"
    searchPrompts:
      - "explore the project archive"
      - "trace a claim to its source"
      - "follow a trail"
```

`homeNode` is the stable node id used when a visitor opens the bare site URL or
clicks the brand/home button. If it is missing or points to a node that does not
exist, the viewer falls back to `start-here`, then to the first available node.

Keep `namespace` stable once published. It becomes part of protocol ids,
fragment addresses, generated node records, and federation references.

Optional packs live under `params.xananode.packs`:

```yaml
params:
  xananode:
    packs:
      - id: "xananode.canonical"
        source: "packs/xananode-canonical"
        mode: "mounted"
        enabled: false
```

Use `mounted` when the pack should remain externally governed, `imported` when generated local artifacts should include copied pack records with provenance, and `merged` when Workspace/Core should reconcile identity and conflicts through review. `absorbed` remains a legacy alias for `imported`, but new configs should not use it.

White-label the content too:

- Replace or remove the example nodes under `content/`.
- Keep any example node only if it is genuinely part of your substrate.
- Mount optional XanaNode packs instead of copying canonical XanaNode content into your own substrate.
- Replace `xananode-icon.svg`, social images, and brand copy.
- Update `params.keywords`, analytics settings, and `baseURL`.
- Choose a default visual mode from the in-browser settings; reader choices are
  stored locally per browser.

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
- Core SDK: [kingc95/XanaNode-Core-SDK](https://github.com/kingc95/XanaNode-Core-SDK)
- This repository: a Hugo theme and example substrate implementation of that protocol

## Philosophy

HTML made documents easy to publish.

XanaNode tries to make relationships easy to publish.

The goal is not to replace prose. The goal is to let prose, claims, sources, trails, media, schemas, reports, and revisions remain connected in a form humans can read and machines can follow.
