# Pipelines & data health

Once data is in, you often need to **shape** it — filter, combine, derive new values —
and to **keep an eye on its quality**. **Pipelines** let you build those
transformations visually, the **run history** shows what happened, and **Data health**
watches freshness and quality over time.

## The pipeline builder

![The visual pipeline builder](/images/pipelines-builder.png)
*The pipeline builder: arrange steps on a canvas and run them to shape your data.*

Open **Pipelines** to build a transformation as a diagram of connected steps.

- A **list of your pipelines** sits on the left (search and filter by *Recent* or
  *Mine*), each with a version number.
- A **canvas** in the middle holds the pipeline's **nodes** (steps such as a source, a
  transform, or an output) joined by arrows showing how data flows. Add nodes from
  the palette, drag them to arrange (or nudge with the arrow keys), and link them
  together.
- An **inspector** on the right edits the selected node, or the pipeline's name and
  classification when nothing is selected.

When you select a transform step, you can describe what it should do and **Save &
run** it to see a live **preview** of the result (the first rows and the columns
produced), along with any warnings.

### Saving, running, and versions

- **Save** stores the pipeline and bumps its version.
- **Run** executes the whole pipeline; you can watch it progress or check the run
  history for the result.
- **Versions** lists every saved version. You can **compare** two versions to see what
  changed and **roll back** to an earlier one — atomically and on the record.

### Drafting with AI

Describe the pipeline you want in plain language and **Draft with AI** to get a
starting diagram built from your real transforms. The draft is just a proposal for you
to review and edit — it's never saved or run automatically.

## Run history

Open the **runs** view to see every real ingest and transformation: when it ran, what
kind it was (CSV, webhook, pipeline, transform), how many rows succeeded, and how many
were skipped. Click a run to expand its details, including **column lineage** for
transforms — which output columns came from which inputs, and whether any were masked.
This is how you confirm an import worked and trace where each piece of data came from.

## Data health (administrators)

Open **Data health** for a live picture of data quality across the workspace.

- **Headline counts** — how many checks are passing, warning, or failing.
- **A checks table** — each check names the dataset, what it tested, its status, and a
  plain-language detail (for example, "last ingest 2 hours ago, target is 1 hour").
  Where a check isn't passing, you can **Acknowledge** it so the team knows it's been
  seen.
- **Re-run checks** to refresh the picture after an import.
- **Freshness and volume** per source — whether each feed is up to date and bringing
  in the expected amount, with a **Drift** view that flags when a feed's shape or
  values have changed unexpectedly.

Every check is a real measurement over your live data, so what you see is the genuine
state of things.

## Recipes

**Build and run a simple transform.**
**New pipeline** → add a source node and a transform node → describe the transform
(for example, keep only high-risk rows) → **Save & run** → check the preview → **Run**
the whole pipeline → confirm it in the run history.

**Trace where a column came from.**
Open the **runs** view → click a transform run → read its **column lineage** to see
which inputs each output column depends on.

**Monitor a feed's freshness (admin).**
Open **Data health** → find the source in the freshness table → if it shows a breach,
**Acknowledge** it and open **Drift** to see what changed.
