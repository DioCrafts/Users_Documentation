# Projects

A **project** is one investigation. It brings together the people working on it, the
objects in scope, and everything you produce — reports, pipelines, apps, models, and
notes. Projects keep separate pieces of work tidy and help control who sees what.

## The project picker

![Creating a project from the project picker](/images/project-new.png)
*Starting a new investigation from the project picker.*

The control in the **top-left corner** is your project picker. It shows your current
focus and is the single source of truth for "which investigation am I in right now?"

Open it to:

- **Switch to a project** — narrows lists, search, and new work to that project.
- **Choose "All objects"** — steps back to everything you're allowed to see, with no
  project filter.
- **Create a New project** — name it and start immediately.
- **Open "All projects…"** — go to the full Projects screen.

Your focus changes only what you *see and create by default* — it never changes your
permissions.

## The Projects screen

Open **Projects** (from the picker's "All projects…", or via search) to manage every
investigation you can access.

### Browsing

You'll see a grid of **project cards**, each showing its name, code, status, member
count, alert count, and creation date. Tools at the top:

- **Search** by name.
- **Recent / Mine** toggle — all projects newest-first, or just the ones you created.
- **Pin** (the bookmark/heart icon on a card) — pinned projects surface on your Home
  screen for quick access.
- **Load more** — if there are many projects, fetch the next batch.

### Project status

A project is either **active** or **archived**. Archiving hides a finished
investigation without deleting anything — its objects and history remain. You can
filter to active or archived projects.

## Inside a project

Click a project card to open its detail page.

### Header

The header shows the name, code, status, and creation date. Click **Edit** to rename
it, change its code, or mark it archived.

### Members

The **Members** card lists everyone on the project, with the owner marked. To add
someone, click **Add member** and pick them from the directory (they must already
have an AXIOM account). You can remove members here too.

### Objects in scope

The **Objects** card lists the objects linked to this project. Click **Add object**
to search and attach objects to the investigation. Linking an object to a project is
an *organizational* act — it groups the object under this investigation; it doesn't
change the object itself or who is otherwise allowed to see it.

### Work products (artifacts)

The project's **workspace** gathers the things built around it — pipelines, apps,
code, reports, models, and notes. Use **Add / remove** to choose which of your
pipelines and models belong to this project. This is the same content you can browse
across all projects in [the Library](/guide/library); here it's scoped to one
investigation.

### Ownership and deletion

If you own the project (or are an admin), you also get advanced actions:

- **Transfer ownership** — hand the project to another current member; you remain a
  member.
- **Delete project** — removes the project and its membership and links. The objects
  themselves are **kept** (they simply lose this project tag). Deletion can't be
  undone, so you're asked to confirm.

## Getting access to a project you can't see

Projects can be **restricted** — only members see them, and AXIOM won't even reveal
that a restricted project exists. If you need into one, you **request access** by its
identifier and an owner or admin grants it. See
[Governance, access & audit](/guide/governance#requesting-access).

## Recipes

**Set up a new investigation with a team.**
Open the project picker → **New project** → name it "Case Blackfrost", code
"BF-2026" → **Create**. Open its detail → **Add member** → add your analyst, your
reviewer, and your legal advisor.

**Organize objects by case.**
Open the project → **Objects** → **Add object** → search and select the entities
you're investigating. Now switching your focus to this project filters the whole app
to that set.

**Pull your tools into one place.**
After building a pipeline and a model, open the project → **Add / remove** in the
workspace → toggle them on. Everyone on the project now finds them in one card.

**Wrap up an investigation.**
When the work is done, open the project → **Edit** → set status to **archived**. It
disappears from your active list but stays fully intact for the record.
