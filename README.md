# AXIOM — User Guide

This folder is the **user-facing documentation** for AXIOM, built as a
[VitePress](https://vitepress.dev) site. It explains what AXIOM does and how to use it,
from the point of view of everyday users — analysts, reviewers, investigators, and
administrators. It is intentionally **non-technical**: there is nothing here about how
the application is built.

## Read it

The content lives in plain Markdown, so you can read it directly on disk or in your
editor:

- Start here: [`index.md`](index.md) (home) and [`guide/index.md`](guide/index.md)
  ("What is AXIOM?").
- New users: [`guide/getting-started.md`](guide/getting-started.md) and
  [`guide/concepts.md`](guide/concepts.md).
- Everything else is under [`guide/`](guide/), with an [`faq.md`](faq.md) at the root.

## Run it as a site

To browse it with navigation and search in your browser:

```bash
npm install          # first time only
npm run docs:dev     # live preview at the printed local URL
```

Other scripts:

```bash
npm run docs:build     # build the static site
npm run docs:preview   # preview the built site
```

## Structure

```
Users_Documentation/
├─ index.md              # home page
├─ faq.md                # frequently asked questions
├─ guide/                # the guide, one page per topic
│  ├─ index.md           # what is AXIOM?
│  ├─ getting-started.md
│  ├─ concepts.md
│  ├─ navigation.md
│  ├─ projects.md · library.md · watchlists.md
│  ├─ ontology.md · objects.md · catalog.md · entity-resolution.md
│  ├─ graph.md · geospatial.md · analytics.md
│  ├─ alerts-cases.md · rules.md · actions.md · ai.md · reports.md
│  ├─ sources.md · pipelines.md · code-models.md
│  ├─ governance.md · administration.md
│  └─ keyboard-shortcuts.md
└─ .vitepress/config.mts # site navigation & settings
```
