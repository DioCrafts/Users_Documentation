# FAQ

Short answers to common questions. For depth, follow the links into the guide.

## Getting started

### What is AXIOM, in one sentence?

A workspace that turns scattered data into a single connected picture you can explore,
question with AI, and act on — with a full record of every decision. See
[What is AXIOM?](/guide/).

### How do I get an account?

An administrator creates it for you. AXIOM doesn't allow self-registration once a
workspace is set up (the very first account, which becomes the admin, is the only
exception). See [Administration](/guide/administration).

### I forgot my password. How do I reset it?

There's no self-service reset — ask your administrator to set a new one for you. You can
change your own password any time from the account menu (your initials, top-right).

### Can I use AXIOM in Spanish?

Yes. Click the **EN / ES** toggle in the top bar to switch the whole interface between
English and Spanish.

## Seeing (and not seeing) data

### Why does my colleague see things I don't (or vice-versa)?

Because AXIOM shows each person only what they're **cleared** for, and only the
**projects** they're in. Hidden data isn't greyed out — it's simply absent. This is
intentional. See [Core concepts](/guide/concepts#access-clearance-and-roles).

### I know something exists but I can't find it. Why?

Most likely it's above your **clearance**, or it's in a **project** you're not a member
of. Ask your administrator, or [request access](/guide/governance#requesting-access) to
the project.

### What's the difference between clearance and roles?

**Clearance** controls what you can *see* (UNCLASS / CONFIDENTIAL / SECRET). **Roles**
control what you can *do* (analyst, reviewer, admin…). You need both: clearance to see
an object and the right role to act on it.

### A screen says "Offline" or shows dashes. Is something broken?

AXIOM couldn't reach your data at that moment, so it shows an honest **Offline** badge
and no numbers rather than making them up. Try again shortly; if it persists, tell your
administrator.

## Working day to day

### How do I start an investigation?

Create a **project**, bring in some data, and start searching. The full walkthrough is
in [First steps](/guide/getting-started).

### What's the difference between the Notepad and Reports?

The **Notepad** is your personal, free-form scratchpad. **Reports** are collaborative,
project-based documents with live objects, charts, comments, versions, and PDF export.
You can promote a note into a report. See [Reports & Notepad](/guide/reports).

### What's the difference between an alert and a case?

An **alert** is a single thing flagged for attention that you triage on a board. A
**case** is a full, governed investigation that moves through defined stages with
approvals. See [Alerts & Cases](/guide/alerts-cases).

### How do I bring in a spreadsheet?

Use **Import CSV**: choose the file, map each column to a role (Name, Risk, an
attribute…), preview, and import. Up to 5,000 rows per file. See
[Sources & CSV import](/guide/sources).

## The AI

### Can I trust the AI's answers?

The AI answers only from data you can see, and **cites its sources** so you can verify
each claim. It marks how **grounded** an answer is and warns you when confidence is low.
See [AI Copilot & agents](/guide/ai).

### Will the AI change my data on its own?

No. The AI (and automated rules) only ever **propose** actions. A person reviews and
approves every change in the [Actions queue](/guide/actions). Nothing is auto-executed.

## Trust and accountability

### Why do some actions need a second person to approve?

Sensitive actions and case steps use **four-eyes** approval: the person who proposes and
the person who approves must be different, and the approver must hold the required role.
It prevents unilateral high-impact changes. See
[Actions & approvals](/guide/actions).

### Is everything I do recorded?

Yes — meaningful actions are written to a **tamper-evident audit trail**. Administrators
can verify it hasn't been altered and produce independent proof of its state. See
[Governance, access & audit](/guide/governance#the-audit-trail).

### Can I see how the data looked in the past?

Yes. Wherever there's a **Time travel** control or an "Existed as of…" date picker, you
can rewind to view the data as it stood earlier. See
[Core concepts](/guide/concepts#looking-back-in-time-bitemporal-history).

## Tips

### The sidebar has too many (or too few) modules.

Click **More** at the bottom of the sidebar and **pin** the modules you use; unpin the
rest. Nothing is ever hidden — unpinned modules stay reachable through More and search.
See [Finding your way around](/guide/navigation).

### What's the fastest way to get anywhere?

Press <kbd>⌘K</kbd> (or <kbd>Ctrl-K</kbd>) and type — it finds objects, runs quick
actions, and jumps to any screen. See [Keyboard shortcuts](/guide/keyboard-shortcuts).
