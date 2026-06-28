# Alerts & Cases

This is where investigation becomes action. **Alerts** are the things that need your
attention — flagged by rules or raised by hand. **Cases** are the governed
investigations you open to work through them, each moving along defined stages with
approvals and a full record. Closely related is **Evidence**: the documents you bring
in and tie to a case.

## Alerts

Open **Alerts** for a board that helps you triage everything that has fired.

### The board

![The Alerts board](/images/alerts-board.png)
*The Alerts board, where detections land for triage (shown here with none yet raised).*

Alerts are arranged in columns by status (for example, *New*, *In progress*,
*Escalated*, *Closed*), each column showing a count. An alert card shows its
severity (a coloured dot — critical, high, medium, low), its title and type, the
subject entity, a confidence note, any **SLA** time remaining (red if breached), and
who it's assigned to.

### Triaging

- **Drag a card** to another column to move it through the workflow.
- **Click a card** to open its details, where you can change the **status** and
  **severity**, **assign** it to a teammate, set or clear an **SLA**, edit the
  **confidence** note, and add **triage notes**.
- **Escalate** flags it for senior review; **Resolve** closes it.
- **Filter by severity** with the chips at the top to focus on the urgent ones.
- **New alert** lets you raise one by hand — give it a title, type, severity, subject,
  and optionally attach it to a project and an assignee.

### Recipe: triage an incoming alert

Open Alerts → click a card in **New** → review the subject → adjust severity if
needed → **assign** it to yourself → investigate, or **Resolve** if it's clear. Use
the severity filter to clear the high-priority queue first.

## Cases

A **case** is a structured investigation. Unlike a quick alert, a case moves through a
defined **lifecycle** with governed steps, can require **approvals**, and can run a
**playbook** of investigative steps. Open a case to see its header (name, type,
status, severity, classification, assignee), its SLA standing, and several panels.

### The lifecycle

The **lifecycle** panel shows the case's current stage and the moves available to you
from here (only the legal next steps appear). To advance the case:

1. Click a transition (for example, *Escalate* or *Close*).
2. Optionally type a **reason** for the record.
3. **Confirm**.

If that move is governed, it doesn't apply at once — it becomes a **pending approval**
for someone else to sign off. If it's not, it applies immediately.

### Approvals (four-eyes)

When a transition needs a second person, it appears in **Pending approvals** showing
who proposed it, the change requested, and which role is required. If you're *not* the
proposer and you hold the required role, you'll see **Approve** and **Reject**. You
can never approve your own proposal — that's the four-eyes rule in action. See
[Core concepts](/guide/concepts#governance-propose-approve-record).

### Playbooks

Some cases run a **playbook** — a predefined sequence of steps (gather, enrich,
analyse, human review, propose action). The playbook panel shows each step and its
state (done, in progress, awaiting review, awaiting approval, failed…). Where a step
needs you:

- A **Human review** step parked for your attention has a **Mark reviewed** button
  (if you hold the role) that lets the playbook continue.
- A **Propose action** step that's waiting shows **View proposal**, which takes you to
  the [Actions queue](/guide/actions) to approve or reject it.

The playbook is read-only and everything it proposes stays governed — it never acts
on its own.

### Recipe: drive a case to closure

Open the case → in **Pending approvals**, sign off any waiting transitions you're
entitled to → work the **playbook** steps, marking reviews done as you go → when the
investigation is complete, use the **lifecycle** panel to **Close** the case (a
governed close may queue for a second approver).

## Evidence

**Evidence** is where you bring documents into an investigation and pull structured
facts out of them. Open **Evidence** (with a project in focus) to upload and review
files.

### Uploading and reviewing

Click **+** to upload a PDF, image, spreadsheet, or text file (it attaches to your
active project). AXIOM reads the document and **extracts entities and
relationships** from it. You then review what it found:

- The document is shown with extracted mentions **highlighted** in place; for images,
  detected regions are boxed.
- A side panel lists the extracted **entities**, each with a type, a confidence score,
  and a status: **Matched** (lines up with an existing object), **New** (not seen
  before), or **Review** (needs a human look).

### Confirming or rejecting

For each candidate you decide:

- **Matched** — **Open 360°** to view the existing object, or **Add to graph** to
  confirm the link and attach it to the case.
- **New** — **Create object** to add it to your data (at or below your clearance) and
  attach it.
- **Reject** — mark a false positive. If AXIOM was confident, it asks you to confirm
  the override (which is recorded).
- **Relationships** between entities can be **connected** (confirming both ends and
  creating the link) or rejected.

You can **Confirm all matches** at once for efficiency (this is held back at the
highest classification, where each must be reviewed individually). **Re-run
extraction** if you want another pass, **Download** the original, or **Add to case**
to attach the file without confirming anything.

### Recipe: turn a document into linked data

Pick your project → Evidence → **+** upload a PDF → AXIOM extracts the entities →
filter to **Matched** → review each in context → **Confirm matches** → switch to
**New** and **Create object** for the genuinely new ones → **Connect** the
relationships. The document's facts are now part of your investigation.
