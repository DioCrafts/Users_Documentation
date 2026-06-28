# Dashboard & ad-hoc analysis

Two related tools turn your data into numbers and charts: the **Dashboard** gives you
a live overview at a glance, and **Ad-hoc analysis** lets you build your own
breakdowns and charts with no code.

## The Dashboard

![The Dashboard with headline figures, a chart, and the network risk index](/images/dashboard.png)
*The Dashboard: live figures computed over the data you're cleared to see.*

Open **Dashboard** (Home also surfaces highlights) for a real-time overview of
everything you can see:

- **Headline figures** — open alerts, transactions, flagged transactions, and how
  many objects are visible to you.
- **Transactions by month** — a bar chart of activity over the last year.
- **Network risk index** — a gauge of the average risk across your visible objects,
  plus a ranked list of the highest-risk entities.
- **Volume by currency** — totals kept separate per currency (never blended into a
  single meaningless number).

Every figure is computed over the data **you** are cleared to see, so your dashboard
is genuinely yours. From here you can **view as of** a past date, jump into **Ad-hoc
analysis** to dig deeper, or **export** a chart's data.

::: tip If a number can't be computed
When AXIOM can't reach your data, figures show a dash ("—") and an **Offline** badge
rather than a fabricated number. A blank you can trust beats a guess you can't.
:::

## Ad-hoc analysis

Open **Ad-hoc analysis** to build a chart by filling in a simple "recipe" — no
formulas, no query language. Every chart re-runs live against current data.

![The ad-hoc analysis recipe with summary cards and a bar chart](/images/analytics-recipe.png)
*Ad-hoc analysis: choose a source, grouping, and measure, and the chart builds itself — no formulas.*

### The recipe

Work left to right through five steps:

1. **Source** — what to count (for example, objects or transactions).
2. **Filter** — optional conditions to narrow the data (add as many as you like;
   they all apply together).
3. **Group by** — the dimension to break the data down by: type, classification, risk
   band, month created, or any property you choose.
4. **Aggregate** — what to measure: a simple **count of records**, or the **sum**,
   **average**, **minimum**, or **maximum** of a value such as risk or amount.
5. **Visualize** — how to show it: **bar**, **line** (over time), **donut**, a
   **pivot** table (two dimensions crossed), or a plain **table**.

Four summary cards above the chart always show the headline totals (records, total,
average, and distinct values for your chosen dimension).

### Interacting

- **Click a bar or slice** to filter the whole board to that value — a fast way to
  drill in. Active filters show as chips you can clear.
- **Add chart** to place another mini-chart beside the first, with its own dimension
  but the same filters — handy for comparing breakdowns.
- **Export** downloads the current chart's data as a spreadsheet.

### Saving and reusing

Give an analysis a name and **Save** it; it appears in your saved list to reopen any
time. Saved analyses can also be **published as boards** that show up on your Home
and Dashboard. Update or save-as-new as your thinking evolves.

## Recipes

**See where risk concentrates.**
Source **objects** → **Group by** type → **Aggregate** total risk → **Visualize** as a
donut → click the biggest slice to drill into that type → **Save** it as "Risk by
type".

**Track growth over time.**
**Group by** month created → **Visualize** as a line → read the trend of how many
objects were added each month.

**Cross two dimensions.**
**Group by** type, add a **pivot** with classification as the columns → read the
table to see which types carry which classifications.

**Hand a number to a report.**
Build the breakdown you need → **Export** the data, or rebuild the same chart inside a
[report](/guide/reports) as a live chart block.
