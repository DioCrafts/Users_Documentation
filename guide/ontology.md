# The Ontology

The **Ontology** is the catalogue of everything AXIOM can hold: the **types** of
objects (Person, Vessel, Account, Port…), the **properties** each type has, and the
**links** allowed between types. Think of it as the blueprint of your world.

Most people **read** the ontology to understand what data exists and how it fits
together. Administrators can **extend** it — add a new type, a new property, or a new
kind of relationship. Both are covered below.

## Reading the ontology

![The Ontology explorer showing a type's properties and links](/images/ontology-explorer.png)
*The Ontology: each type's properties on the left, the relationships it can have on the right.*

Open **Ontology** and you'll see:

- **A list of all object types** on the left, each with how many objects exist of
  that type.
- **A detail panel** on the right for the selected type, with:
  - a short description and headline counts (objects, link types, properties),
  - a **Properties** table — each property's name, its data kind (text, number, date,
    yes/no, list, location, link…), and any flags (such as *primary key*,
    *indexed*, or *derived*),
  - a **Link types** section — the relationships this type can have, and in which
    direction (for example, *Vessel → reports to → Port*),
  - a grid of **sample objects** so you can see real instances.

From here you can:

- **Click a sample object** to open its [360° profile](/guide/objects).
- **Explore** to browse all objects of a type.
- **Export** the model in a standard, portable format for sharing or archiving.
- **Edit schema** (administrators) to change the type.

::: tip Why the ontology matters to you
Knowing the ontology tells you what questions you can ask. If "Vessel" links to
"Port" via *reports to*, you know you can trace a vessel's port calls. The
[graph](/guide/graph) and [ad-hoc analysis](/guide/analytics) only let you do what
the ontology allows.
:::

## Extending the ontology (administrators)

Administrators get an authoring view with three areas.

![The ontology schema authoring view](/images/ontology-author.png)
*Authoring the model: define types, properties, links, and actions, then publish a versioned snapshot.*

### Schema

Define and edit types:

- **New object type** — give it an identifier, a display name, a colour and icon, a
  description, and an initial set of properties.
- **Edit properties** — add rows to the properties table; set each property's name,
  kind, and flags. Mark a property as the **primary key** when it uniquely
  identifies the object (this also helps de-duplication match records — see
  [Entity Resolution](/guide/entity-resolution)).
- **Add link types** — define a new relationship: its label, the type it goes
  *from*, and the type it goes *to*.
- **Add actions** — define the governed [actions](/guide/actions) that can be taken
  on this type, including any approval chain.

Changes are staged until you **Publish**, which saves them and records a versioned
snapshot. A warning bar reminds you when you have unsaved edits; **Revert** discards
them.

### Versions

Every publish creates a snapshot. The Versions area lets you pick two snapshots and
see exactly what changed between them — types, links, actions, and views added,
removed, or changed. You can **roll back** to a past snapshot; the rollback is
itself saved as a new snapshot, so history is never lost.

### Tuning what's enforced

The ontology can run in an **advisory** mode (where data that doesn't fit the model
is recorded but allowed) or an **enforced** mode (where it's rejected). A
**violations** view shows recent writes that wouldn't fit, helping administrators
decide when to tighten the rules.

## Customizing the 360° profile

A companion authoring tool lets administrators decide **how each type's
[360° profile](/guide/objects) is laid out** — which cards appear (Summary, Risk &
flags, Connections, Geospatial, Transactions, Activity, Lineage…), in what order,
and which properties are **highlighted** at the top. A live preview shows the result.
Click **Publish view** to apply it for everyone.

## Recipes

**Understand a new dataset.**
Open Ontology → click through each type → read its properties and links → click a
sample object to see real data. In a few minutes you'll know the shape of the
workspace.

**Add a new kind of object (admin).**
Open the authoring view → **New object type** → fill in the name and starter
properties → add the links it needs → **Publish**. The new type is immediately
available everywhere.

**Surface the right facts first (admin).**
Open the profile-layout tool → pick a type → toggle on the key properties (for a
vessel, perhaps its identifier, name, and flag state) → reorder the cards →
**Publish view**. Everyone now sees those facts up front.
