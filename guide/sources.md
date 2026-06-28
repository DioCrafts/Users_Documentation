# Sources & CSV import

Before you can investigate, data has to get in. **Sources** are the feeds that bring
data into AXIOM, **CSV import** maps a spreadsheet into objects, and **Connectors**
package up reusable integrations. This page covers getting data in; shaping it
afterwards is in [Pipelines & data health](/guide/pipelines).

## Sources

![The Sources list](/images/sources-list.png)
*Sources: every data feed with its kind, status, rows ingested, and last run.*

Open **Sources** to see and manage your data feeds. Each source card shows its name,
its kind, its classification, how many rows it has brought in, when it last ran, and
whether it's **active** or **paused**. Summary cards at the top total it all up.

There are three kinds of source:

| Kind | What it does |
|---|---|
| **CSV upload** | A one-off (or repeated) spreadsheet import you do by hand |
| **Webhook push** | An outside system sends rows to AXIOM as they happen |
| **API pull** | AXIOM fetches from an outside system on a schedule |

You can **pause/resume** a source (a paused pull stops fetching), **edit** its name,
type, or classification, and **delete** it.

### Adding a source

Click **Add source** to open the wizard:

![The "Connect a data source" wizard](/images/sources-wizard.png)
*The source wizard: choose CSV upload, Webhook push, or API pull, then name it and set a classification.*

1. **Pick the kind** — CSV, Webhook, or API pull.
2. **Name** it (for example, "Sanctions list").
3. Choose the **object type** the rows become, and a **classification**.
4. Optionally link it to a **project**.
5. **Create** — for CSV, the import screen opens straight away; for a webhook, you're
   shown a one-time setup screen.

::: tip Webhook setup is shown once
When you create a webhook source, AXIOM shows you the address to send to and a secret
token — **once**. Copy them then; the token isn't shown again. Hand them to whoever
runs the upstream system.
:::

## Importing a CSV

The **CSV import** screen turns a spreadsheet into objects (or relationships). You can
import up to **5,000 rows** per file — split larger files into chunks.

![Mapping CSV columns to object fields, with a preview](/images/csv-import-mapping.png)
*CSV import: map each column to a role and check the preview before importing.*

### Mapping objects

1. **Choose a file**.
2. Pick the **object type** the rows become and a **classification**. If you launched
   from a project, the new objects link to it automatically.
3. **Map each column** to a role: **Name**, **Subtitle**, **Risk**, an **Attribute**
   (a property), or **Ignore**. AXIOM guesses sensible roles for you (a "full_name"
   column → Name, a "risk_score" column → Risk). You must map exactly one **Name**
   column.
4. **Preview** the first rows to check the mapping.
5. **Import**.

### Mapping relationships

Switch to **Relationships** mode to create links instead of objects: choose the source
and target object types, which columns identify each end, the fields to match on, and
the **relationship label** (for example, "CALLED"). Preview the pairs and import.
Rows only create a link when both ends match an existing object.

### When some rows fail

AXIOM imports the good rows and **quarantines** the bad ones rather than silently
dropping them. A quarantine table lists each failed row, why it failed (a bad value,
a wrong type, or a rule rejection), and the line number — so you can fix your file and
re-import just those.

## Connectors (administrators)

**Connectors** are packaged, reusable integrations (for example, a sanctions feed or
an object store). Administrators configure a connector, **Check** that the
configuration is valid, **Discover** what data streams it offers, and **Run** it to
ingest. After a run you can inspect any **quarantined** rows and the connector's
**resume position** so repeated runs pick up where they left off. Secret fields (like
credentials) are write-only and never shown back.

## Recipes

**Connect a spreadsheet.**
**Add source** → **CSV upload** → name it, set the object type and classification →
**Create & import** → map the columns → preview → **Import**.

**Receive real-time data.**
**Add source** → **Webhook push** → name it, set the object type → **Create** → copy
the address and token from the one-time screen → give them to the upstream system.

**Fix and re-import rejected rows.**
Import a file → note the **quarantine** reasons → correct those rows in your
spreadsheet → **Import another** → re-upload the fixed file.
