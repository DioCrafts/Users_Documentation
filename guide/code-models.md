# Drive & Models

Two supporting libraries round out the data side of AXIOM: the **Drive**, a governed
store for files and reusable logic, and the **Model registry**, a catalogue of the
analytical models your workspace uses and how they're governed.

## Drive

Open **Code** (the **Drive**) for a versioned, access-controlled place to keep files —
transform definitions, datasets, model artifacts, and other documents. It's a library
of files with proper governance, not a coding or build environment.

- **Browse** files on the left, grouped by folder, with search and *Recent* / *Mine*
  filters. Each file shows its type and a lock if it's SECRET.
- **Preview** the selected file in the middle — text files are shown with syntax
  colouring; binary files show their size and type instead.
- The **inspector** on the right shows the file's classification, path, size, current
  version, and full version history.

What you can do:

- **Upload** a file — choose it, set its path, classification, and whether it's shared
  or scoped to a project. Re-using an existing path adds a **new version** rather than
  overwriting (history is append-only).
- **Edit** a text file in place and **Save new version**.
- **Download** a file, or **delete a version** (earlier versions remain).
- Step through the **version history** to see who changed what, and when.

Classification is enforced here too: you only see and download files you're cleared
for.

### Recipe: keep a transform under version control

**Upload** → choose your file → set the path (for example, "transforms/risk.sql") →
set the classification → upload. Later, open it → **Edit** → make changes → **Save new
version**. The history records every revision.

## Model registry

Open **Models** for the registry of analytical models. This is a **catalogue and
governance** tool — it tracks models, their versions, their measured quality, and
which version is live. (It records and governs models; it isn't where models run.)

- **Browse** models on the left, each showing whether it has a **live** version and
  how many versions exist.
- The **detail panel** shows the selected model's objective, its key **metrics** (and
  small trend charts where a metric is a series), and a table of all its **versions**.

For each version you can see its status — **draft**, **staged**, **live**, or
**retired** — its metrics, who created it, and when. With the right permissions you
can:

- **Register a model** (name and objective) and **add versions** (a label, a status,
  metrics, and a reference to the artifact).
- **Stage** a draft, then **Promote** a staged version to **live**. Only one version
  is live at a time — promoting a new one steps the previous one down.
- **Retire** a version permanently.
- **Compare** two versions side by side to see how the metrics changed.

### Recipe: promote a model version

Open the model → **New version** → label it, set it **staged**, paste its metrics and
artifact reference → add it → in the versions table, click **Promote** on the staged
version → it becomes live and the previous live version steps down. Use **Compare** to
confirm the metrics improved.
