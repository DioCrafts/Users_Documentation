# Exploring objects & the 360° profile

This is where most investigation happens: finding objects, browsing them, and
reading the full picture of any one of them. Two screens work together — the
**object explorer** (lists and filters) and the **360° profile** (the deep dive).

## The object explorer

![The object explorer with type chips, presets, and a results table](/images/objects-explore.png)
*The object explorer: filter by type or preset, search, and click any row to open its profile.*

Open **Explore** (under Ontology) to browse, search, filter, and create objects.

### Searching and filtering

- **Search box** — type a name or detail; results narrow as you type.
- **Type chips** — "All", plus one chip per object type (Vessel, Person, Account…),
  each showing an exact count. Click to filter to that type.
- **Saved views / presets** — ready-made filters such as **All objects**,
  **On watch**, **Maritime watch**, **Financial watch**, and **High risk 80+**. Pick
  one to apply it.
- **Save view** — build a filter you like (a search term + a type + a preset) and
  save it with a name to reuse later. Double-click a saved view to rename it; remove
  it with the ✕.
- **Table / List toggle** — switch between a compact table and richer cards (cards
  show connection counts).

Each row shows the object's name, type, a detail line, and a risk pill, plus a
**watch** toggle. Click a row to open its 360° profile.

### Creating an object

Click **New object**, choose a type, give it a name and an optional detail, and
**Create**. The new object opens in its profile, ready to flesh out.

## The 360° profile

Open any object to get its **360° profile** — a single page gathering everything
known about it.

![An object's 360° profile with properties, timeline, and connections](/images/entity-360.png)
*A 360° profile gathers an object's key facts, connections, history, and provenance on one page.* The layout per type is set by your administrator (see
[The Ontology](/guide/ontology#customizing-the-360-profile)), but you'll generally
find:

### The header

Always visible at the top: the object's icon, type, name, and detail, its **risk
score**, and quick actions:

- **Back** — returns you to wherever you came from (the explorer, a search, the
  graph…).
- **Watch** — add/remove it from your personal [watchlist](/guide/watchlists).
- **Edit** — change its name, detail, type, risk, or properties.
- **Add note** — jump to the discussion to leave a comment.
- **Dossier** — export a profile document.
- **Expand graph** — drop the object into the [graph](/guide/graph), centred on it.

### Overview tab

A grid of cards, which may include:

- **Highlighted properties** — the key facts first, then the rest.
- **Risk & flags** — the risk score, count of flagged connections, and watch status.
- **Key connections** — the most important linked objects, each clickable.
- **Geospatial** — a small map and last-known position, if the object moves.
- **Transactions** — recent related transactions.
- **Activity timeline** — a running log of what's happened to the object.
- **Lineage & access** — where the object's data came from and who can see it.

Below the cards you'll also find:

- **Analyst summary** — an AI-written summary of the object's role, notable
  connections, and risk drivers. Click **Generate / Refresh** to (re)produce it. As
  always, it's grounded in data you can see. See [AI Copilot & agents](/guide/ai).
- **Discussion** — a comment thread. Type a comment, **@mention** a teammate, and
  post. Comments persist and are searchable.

### Other tabs

- **Connections** — every linked object, labelled and directional. An
  **"Existed as of…"** date picker lets you see which connections were present at a
  past date. **Add connection** creates a new link to another object.
- **Timeline** — a chronological activity log (created, updated, linked, commented…).
- **History** — property-level change history: what changed, from what to what, when,
  and by whom.
- **Transactions** — the financial transactions involving this object.
- **Lineage & access** — which data feeds contributed to this object, when, and who
  is allowed to see it.

Long lists load more on demand.

## Looking back in time

The **"Existed as of…"** picker on the Connections tab is bitemporal time travel in
miniature: set a past date and AXIOM shows the network as it stood then. This is
invaluable for reconstructing what was known at a point in the past, or for spotting
when a relationship appeared or vanished. See
[Core concepts](/guide/concepts#looking-back-in-time-bitemporal-history).

## Recipes

**Assess an entity's risk.**
Open the profile → read the **Analyst summary** → check **Risk & flags** → scan
**Key connections** for high-risk neighbours → decide whether to escalate.

**Trace a network by hand.**
Open the profile → **Connections** tab → click a linked object to hop to *its*
profile → repeat to walk outward. Switch to the [graph](/guide/graph) when you want
to see the whole shape at once.

**Document a finding.**
Open the profile → **Discussion** → write your analysis and **@mention** a colleague
(for example, "@lead: this matches the layering pattern"). It's saved with your name.

**Reconstruct the past.**
Open the profile → **Connections** → set **Existed as of** to a date last quarter →
see exactly which links were in place then.
