# First steps

This page walks you from your first sign-in to having a working investigation. It
takes about ten minutes and touches the core of the app. Don't worry about getting
everything perfect — nothing here is hard to undo.

## Signing in

Open AXIOM in your web browser. You'll see one of two screens:

- **A sign-in screen** — enter your email and password. If you don't have an
  account, ask your administrator to create one for you; AXIOM does not let people
  sign themselves up after the workspace is set up.
- **A "create the administrator account" screen** — this only appears on a brand
  new, empty workspace. The very first person to register becomes the
  administrator. After that, the door closes and all further accounts are created
  by an admin.

Forgot your password? There's no self-service reset — your administrator can set a
new one for you from the [Administration](/guide/administration) screen.

### Change your password

Click your initials in the top-right corner and choose **Change password**. Enter
your current password and a new one (at least 8 characters). For your safety,
changing your password signs out your other sessions.

## Get your bearings

Take a moment to notice the three things you'll use constantly:

1. **The sidebar (left edge)** — your modules. Click the AXIOM mark at the top to
   return Home at any time. Click **Collapse / Expand** at the bottom to widen it
   and show descriptions.
2. **The top bar** — your project picker (far left), a breadcrumb showing where you
   are, the **search box** in the middle, and on the right: the **Copilot** button,
   language toggle, light/dark theme toggle, the notifications bell, and your
   account menu.
3. **Search (⌘K / Ctrl-K)** — press it from anywhere to find an object or jump to
   any screen.

Set the theme and language to your liking now: the **moon/sun** icon switches
between dark and light, and the **EN / ES** button switches the language between
English and Spanish.

A fuller tour is in [Finding your way around](/guide/navigation).

## Create your first project

![The "New project" dialog opened from the project picker](/images/project-new.png)
*The "New project" dialog — give your investigation a name and an optional code.*

A **project** is a container for one investigation — its members, the objects you're
focused on, and the work you produce. Creating one is the natural first move.

1. In the top-left **project picker**, click it open and choose **New project**
   (or press <kbd>⌘K</kbd> and type "New project").
2. Give it a **Name** (for example, "Operation Blackfrost"). A short **Code** is
   optional.
3. Click **Create project**.

You're now the project's owner. The picker shows your active project; everything you
do can be focused on it. To step back and see *everything* you're allowed to see,
open the picker and choose **All objects**.

::: tip Working across everything vs. one project
The project picker sets your **focus**, not your permissions. "All objects" shows
everything you're cleared for; picking a project narrows lists, search, and new
work to that investigation. You can switch any time.
:::

## Bring in some data

You can't investigate an empty workspace. The quickest way to get data in is a
spreadsheet:

1. From **Home**, click **Import data** (or open **Sources** and choose
   **Import CSV**).
2. Choose a `.csv` file.
3. Tell AXIOM what each column means — which one is the **Name**, which is the
   **Risk** score, and so on — then preview and import.

![Mapping spreadsheet columns to object fields during CSV import](/images/csv-import-mapping.png)
*CSV import: map each column to a role (Name, Subtitle, Risk, or an attribute) and preview before importing.*

Your rows become objects you can search and explore. Full details, including
importing relationships and connecting live feeds, are in
[Sources & CSV import](/guide/sources).

If your workspace already has data, skip this — just search for something.

## Find and open an object

1. Press <kbd>⌘K</kbd> and start typing a name. Matching objects appear instantly,
   each with its type and a risk indicator.
2. Click a result to open its **360° profile** — the complete picture of that
   object: its key facts, its connections, its history, and an AI summary.

From the profile you can follow a connection to the next object, add it to your
**watchlist**, leave a note, or expand it into the graph. This "open, read, follow"
loop is the heart of investigating in AXIOM. See
[Exploring objects](/guide/objects).

## See the connections

From an object's profile, click **Expand graph** to drop it onto the interactive
**Graph**. There you can:

![The graph with a node selected and its connections in the inspector](/images/graph-overview.png)
*The graph: double-click nodes to pull in neighbours, then ask for paths or common connections.*

- **Double-click** a node to pull in its neighbours.
- **Drag** to rearrange, **scroll** to zoom.
- Select two nodes and ask for the **shortest path** between them, or their
  **common connections**.

This is where a list of records becomes a network you can reason about. See
[Graph & link analysis](/guide/graph).

## Ask the Copilot

Click **Copilot** in the top bar and ask a question in plain language, such as
*"Which organizations are linked to the highest-risk accounts?"*

![The Copilot panel with starter questions](/images/copilot.png)
*The Copilot answers from your data and links every claim back to its sources.* The answer comes
back grounded in your data, with **clickable sources** you can open to verify.
The Copilot only ever uses data you're allowed to see. See
[AI Copilot & agents](/guide/ai).

## Write up what you find

Two tools capture your thinking:

- **Notepad** — a personal, free-form notebook for quick capture. Great for rough
  notes during an investigation.
- **Reports** — collaborative, project-based documents with embedded live objects,
  charts, comments, version history, and PDF export. This is what you share.

You can promote a Notepad note into a full report when it's ready. See
[Reports & Notepad](/guide/reports).

## A complete first run, end to end

Putting it together, a typical first investigation looks like this:

1. **Create a project** — "Operation Snowdrift".
2. **Import a spreadsheet** of the entities you care about.
3. **Search** for your starting entity and open its profile.
4. **Follow its connections**, adding interesting objects to your **watchlist**.
5. **Expand the network** in the graph and find the **shortest path** between two
   suspects.
6. **Ask the Copilot** to summarize the riskiest entity and check its citations.
7. **Capture notes** in the Notepad as you go.
8. **Write a report**, drop in the key objects and a chart, and **export a PDF** for
   your team.

That's the full loop. Every step is covered in depth in the rest of this guide.

## Where to go next

- New to the ideas behind it all? → [Core concepts](/guide/concepts)
- Want to master navigation and search? → [Finding your way around](/guide/navigation)
- Ready to dig into a module? Jump straight to it from the sidebar.
