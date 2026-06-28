# Governance, access & audit

Governance is what makes AXIOM trustworthy: clear rules about who can see what, a way
to request and grant access, control over how sensitive each object is, and a complete,
tamper-evident record of everything that happens. This page is for everyday users *and*
the people who oversee access. The basics are in
[Core concepts](/guide/concepts#access-clearance-and-roles); here's how to actually use
them.

## Who can see an object

![The Governance & Audit access review](/images/governance-access.png)
*Governance & Audit: inspect who can see an object, and why.*

Open **Governance & Audit** and use the **Access review** to inspect any object you
can see. Search for it and AXIOM tells you, in plain language:

- **Why you can see it** — because you're an administrator, a project owner, a project
  member, or because the object is public.
- **Whether you're cleared** — your clearance versus the object's classification.
- **How it's shared** — restricted to certain projects, or public to all signed-in
  users.

This answers questions like "can my colleague see this?" and "why can I see this?"
without guesswork.

## Requesting access {#requesting-access}

You can't browse projects you're not in — AXIOM won't even reveal they exist. To get
into one you **request access**:

1. Open **Governance & Audit → My requests**.
2. Enter the **project's identifier** and, helpfully, a **reason**.
3. **Submit**.

Your request shows as **pending** until an owner or administrator decides it. If
granted, you immediately gain access; if denied, you can ask again. Approvers handle
incoming requests in the **Access review** tab, where each request shows the
requester, the project, and their reason, with **Grant** and **Deny** buttons.

## Classification markings

Every object carries a sensitivity marking — **UNCLASS**, **CONFIDENTIAL**, or
**SECRET**. The **Markings** view groups objects by level so you can see the lay of
the land.

A key rule: **markings can only be raised, never lowered** in the interface. If
something turns out to be more sensitive than first thought, an administrator can raise
it (for example, from CONFIDENTIAL to SECRET); bringing it back down is deliberately
not a casual click. Raising a marking is recorded in the audit trail.

## The audit trail

Open the **Audit log** (administrators) for the record of everything that matters:
every created object, role change, access grant, classification change, approval, and
more. Each entry shows **when**, **who**, **what action**, the **object** involved, and
any **detail**.

You can filter by **category** (objects, users & roles, governance & access, projects,
alerts, actions, rules, and so on), by **who** did it, and by **date range** — so you
can answer precise questions quickly.

### Proving the record is intact

The audit trail is **tamper-evident**. Two tools let administrators prove it hasn't
been altered:

- **Verify chain** walks the record and confirms it's intact, reporting how many
  entries were checked (and pinpointing the first break if there is one).
- **Anchor now** produces an independent, verifiable proof of the record's state at
  that moment, kept outside the main system — so even wholesale tampering would be
  detectable.

A badge shows the latest anchor's status. There's also a separate, signed **event
ledger** of how objects changed over time, with the ability to seal records for
retention and to permanently erase an individual's data on request (for privacy
compliance) while keeping the ledger verifiable.

## Recipes

**Check whether a colleague can see something.**
Governance & Audit → **Access review** → search the object → read whether it's cleared
and which projects it's shared through → if they need access, have them request it and
**Grant** it.

**Get into a project you're not in.**
Governance & Audit → **My requests** → enter the project identifier and a reason →
**Submit** → wait for the owner to grant it.

**Raise an object's sensitivity (admin).**
Governance & Audit → **Markings** → find the object → raise it to the higher level. The
change is recorded automatically.

**Audit a sensitive change (admin).**
**Audit log** → filter to **Governance & access** → optionally filter by person and
date → find the entry → click **Verify chain** to confirm the log is intact.
