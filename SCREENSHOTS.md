# Adding screenshots (maintainer guide)

This page is for whoever **maintains** the user guide — not for end users. It explains
how to add screenshots safely and keep them consistent.

> ## ⚠️ The golden rule: never capture confidential client data
>
> Screenshots must **only** ever show **synthetic demo data** (the app's built-in
> fictional seed — e.g. "Operation Blackfrost", demo vessels and accounts) or
> **data-free configuration screens** (wizards, forms, empty states). **Never**
> capture against a live client / PoC workspace, and never against a database that
> holds real client data.
>
> When in doubt, prefer the **configuration screens** below — most of them (the
> source wizard, CSV column mapping, "New project", "Add user", the rules builder)
> contain no data at all, only the controls a user fills in.

## Where images live

All images go in [`public/images/`](public/images/). VitePress serves that folder at
the site root, so a file `public/images/sources-wizard.png` is referenced as
`/images/sources-wizard.png` from any page.

Use lowercase, hyphenated names prefixed by the area: `sources-wizard.png`,
`admin-add-user.png`, `rules-new.png`, `graph-overview.png`.

## How to embed one (the figure convention)

Use a Markdown image followed by an italic one-line caption:

```md
![The Source wizard — choosing the source kind](/images/sources-wizard.png)
*Adding a source: pick CSV, Webhook, or API pull, then name it and set a classification.*
```

Keep alt text descriptive (it's read by screen readers and shown if the image is
missing). Put the image right after the step it illustrates, not in a lump at the
top.

::: tip Keep the build green
Only reference an image **after** the file exists in `public/images/`. A reference to
a missing image renders as a broken picture. Add the picture and the Markdown in the
same change.
:::

## The recommended way to capture (safe, repeatable)

The repo has a dedicated, **fully isolated** capture setup
(`playwright.docs.config.js` + `e2e/docs.shots.app.spec.js`) that runs against its own
stack on **non-default ports** and its own **demo database** — so it can never reuse,
or even reach, a running client/PoC stack (which sits on the default
`:5173`/`:8787`/`axiom`).

### 1. Create a dedicated, synthetic-only database

Use a **separate database name** — `axiom_docs` — so you can never accidentally hit a
real one. (Postgres must be up: `npm run db:up`.)

```bash
docker exec axiom-postgres psql -U axiom -d axiom -c "CREATE DATABASE axiom_docs OWNER axiom;"
```

### 2. Start the isolated stack (own ports, demo data)

```bash
# Backend on :8799, pointed at the docs database, seeded with fictional demo content
AXIOM_ADDR=:8799 \
DATABASE_URL='postgres://axiom:axiom@localhost:5433/axiom_docs?sslmode=disable' \
AXIOM_SEED=true go run ./cmd/axiom

# Frontend on :5199, proxying to the :8799 backend (in another terminal)
E2E=1 AXIOM_DEV_PORT=5199 AXIOM_API_PROXY=http://localhost:8799 npm run dev
```

The seed is fictional demo content (e.g. "Operation Blackfrost", demo vessels and
accounts) — exactly what you want in documentation.

### 3. Capture the shots

The capture spec drives the app to each screen and writes PNGs straight into
`public/images/`. It logs in as a demo admin on the dedicated database (and uses the
shared harness helpers `loginAdmin`, `gotoView`, `gotoMore`):

```bash
DOCS_BASE_URL=http://localhost:5199 npx playwright test -c playwright.docs.config.js
```

To refresh a single screen, add `--grep`, e.g. `--grep "graph: network canvas"`.
(One-time browser setup, if needed: `npx playwright install chromium`.)

### 4. Review before committing

Open each new PNG and confirm it shows **only** demo or empty content. Then embed it
in the relevant page using the figure convention above.

## Capturing by hand (the simplest option)

You don't need the harness for one-off shots. Run the app against a **dedicated demo
database** (step 1 above), sign in, navigate to the screen, and use your operating
system's screenshot tool. Crop out the top classification banner if it names a real
user, and double-check there's no client data in view. Save into `public/images/`
with the naming convention and embed it.

## Prioritized shot list

These are the highest-value screenshots for "how do I set this up?", roughly in
guide order. The ones marked **data-free** are safest — they show only controls.

| Suggested file | Page | What to show | Notes |
|---|---|---|---|
| `nav-rail-more.png` | [navigation](guide/navigation.md) | The "All modules" sheet with pin toggles | data-free |
| `command-palette.png` | [navigation](guide/navigation.md) | ⌘K palette (type a module name, not data) | data-free |
| `project-new.png` | [projects](guide/projects.md) · [getting-started](guide/getting-started.md) | The "New project" dialog | data-free |
| `sources-wizard.png` | [sources](guide/sources.md) | The Add-source wizard (three kinds) | data-free |
| `sources-webhook-token.png` | [sources](guide/sources.md) | The one-time webhook setup screen | redact the token value |
| `csv-import-mapping.png` | [sources](guide/sources.md) | Column-to-role mapping on a sample CSV | use a fake CSV |
| `admin-add-user.png` | [administration](guide/administration.md) | The "Add user" form (roles + clearance) | data-free |
| `rules-new.png` | [rules](guide/rules.md) | The WHEN → THEN rule builder | data-free |
| `ontology-author.png` | [ontology](guide/ontology.md) | The schema authoring view | demo types |
| `actions-new.png` | [actions](guide/actions.md) | The "Take an action" dialog | demo target |
| `objects-explore.png` | [objects](guide/objects.md) | The object explorer (chips + table) | demo data |
| `entity-360.png` | [objects](guide/objects.md) | A demo object's 360° profile | demo data |
| `graph-overview.png` | [graph](guide/graph.md) | A small network on the canvas | demo data |
| `map-overview.png` | [geospatial](guide/geospatial.md) | The map with layers panel | demo data |
| `analytics-recipe.png` | [analytics](guide/analytics.md) | The ad-hoc analysis recipe + chart | demo data |
| `alerts-board.png` | [alerts-cases](guide/alerts-cases.md) | The alerts triage board | demo data |
| `copilot.png` | [ai](guide/ai.md) | The Copilot with a grounded answer + sources | demo data |
| `report-editor.png` | [reports](guide/reports.md) | A report with blocks (text, chart, objects) | demo data |
| `governance-access.png` | [governance](guide/governance.md) | The access-review inspector | demo data |

Start with the **data-free** rows — they deliver the most "how to configure" value
for the least risk.
