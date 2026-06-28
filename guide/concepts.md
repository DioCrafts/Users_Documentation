# Core concepts

A handful of ideas show up in every corner of AXIOM. Read this once and the rest of
the app will make sense. Nothing here is technical — these are the *concepts* you
work with, not how they're built.

## Objects

An **object** is one thing you're tracking: a person, an organization, an account, a
vessel, a port, a transaction, a device, a document — whatever your workspace deals
with. Every object has:

- a **type** (Person, Vessel, Account…),
- a **name** and a short **detail/subtitle**,
- a set of **properties** (its facts — a passport number, a flag state, a balance),
- a **risk score** from 0 to 100, shown as a coloured pill,
- and **connections** to other objects.

Objects are the nouns of AXIOM. You find them, open them, link them, and act on
them.

## Links (connections)

A **link** joins two objects and is labelled with the kind of relationship — "owns",
"reports to", "travelled with", "sent money to". Links have a direction (from one
object to another). Following links from object to object is how you explore a
network. You'll see them as lines on the [graph](/guide/graph) and as cards on an
object's profile.

## The ontology (your data model)

The **ontology** is the catalogue of object *types* and the *links* allowed between
them — the shape of your world. It defines, for example, that a Vessel has a flag
state and can "report to" a Port, while a Person can "own" an Account.

Most people only ever **read** the ontology to understand what data exists.
Administrators can extend it. See [The Ontology](/guide/ontology).

## The 360° profile

Open any object and you get its **360° profile** — a single page that gathers
everything known about it: its key properties, its connections, its activity over
time, where it has been, related transactions, an AI-written summary, and a
discussion thread. It's the home base for studying one entity. See
[Exploring objects](/guide/objects).

## Projects (investigations)

A **project** is one investigation. It has **members**, a set of **objects** in
scope, and the **work products** built around it (reports, pipelines, apps, notes).
Projects keep separate investigations tidy and control who can see what.

The **project picker** in the top-left sets your current focus. Choosing a project
narrows what you see to that investigation; choosing **All objects** shows
everything you're cleared for. See [Projects](/guide/projects).

## Access, clearance, and roles {#access-clearance-and-roles}

This is the most important concept to understand, because it shapes what every
screen shows you.

### Classification and clearance

Every object carries a **classification** marking — one of:

- **UNCLASS** (unclassified),
- **CONFIDENTIAL**,
- **SECRET**.

Every person has a **clearance** at one of those levels. **You only see objects at
or below your clearance.** A CONFIDENTIAL user sees UNCLASS and CONFIDENTIAL data
but never SECRET; a SECRET user sees everything.

Crucially, **hidden means absent**. If something is above your clearance, it doesn't
show up greyed-out or marked "restricted" — it simply isn't there for you. You can't
tell it exists. This protects sensitive information by default and means two people
can run the same search and honestly get different results.

The bar at the top of the screen reminds you of your current clearance.

### Visibility through projects

On top of clearance, an object can be **restricted to projects** — only members of a
project that contains it can see it — or **public**, meaning any signed-in user
(who also meets the clearance bar) can see it. To get into a restricted project you
**request access**, and an owner or admin grants it. See
[Governance, access & audit](/guide/governance).

### Roles

Your **role(s)** decide what you can *do* (as opposed to what you can *see*, which is
clearance). A person can hold more than one role. Common roles include:

| Role | Typically can… |
|---|---|
| **analyst** | Explore, create objects, run analysis, draft reports |
| **reviewer** | Review and approve certain actions and reports |
| **lead_analyst** | Senior analysis; merge duplicates, settle resolution disputes |
| **legal** | Legal/compliance review on sensitive steps |
| **mlro** | Compliance officer for financial-crime workflows |
| **admin** | Manage users, roles, clearances, and system settings |

Some steps are **gated** to a role — for example, a particular case approval may
require a *legal* or *lead_analyst* sign-off. If you don't hold the role, you'll see
the step but won't be able to complete it.

## Governance: propose, approve, record

AXIOM is built so that important changes are deliberate and accountable. Three
patterns recur:

### AI and rules propose — people decide

Automated **rules** and the **AI agents** never change your data on their own. They
*propose* an action (raise an alert, add to a watchlist, freeze an account) and a
person reviews and approves it in the [Actions queue](/guide/actions). Nothing is
auto-executed.

### Two-person approval (four-eyes)

Sensitive actions and case transitions require **a second person** to approve. You
cannot approve your own request — the person who proposes and the person who
approves must be different, and the approver must hold the required role. This
"four-eyes" rule shows up in [Actions](/guide/actions),
[Cases](/guide/alerts-cases), [Entity Resolution](/guide/entity-resolution), and
elsewhere.

### Everything is audited

Every meaningful action — a created object, a granted role, a classification change,
an approval — is written to an **audit trail**. The trail is **tamper-evident**:
administrators can verify it hasn't been altered and produce independent proof of its
state. See [Governance, access & audit](/guide/governance).

## Risk scores and flags

Many objects carry a **risk score** (0–100). Higher is more concerning; scores of 80+
are highlighted as critical. Risk is shown as a coloured pill throughout the app and
you can filter and sort by it (for example, the "High risk 80+" watchlist).

AXIOM also derives **flags** from the shape of your data — unusual numbers of
connections, suspicious patterns, possible duplicates. These are computed inside the
platform from your own graph, not pasted in from outside.

## Looking back in time (bitemporal history)

Because AXIOM keeps history, you can **view the data as it stood at an earlier
moment**. Two kinds of time are tracked:

- **Valid time** — when something was true in the real world.
- **Knowledge time** — when AXIOM came to know it.

Wherever you see a **Time travel** control or an "Existed as of…" date picker, you
can rewind to see, for example, which connections an object had last month, or what
the network looked like on a given date. Switch back to **Live** to return to the
present. You'll meet this on the [graph](/guide/graph),
[map](/guide/geospatial), and [object profiles](/guide/objects).

## Honest about what it doesn't know

When AXIOM can't reach your data, it tells you plainly — you'll see an **"Offline"**
badge and empty results rather than made-up numbers. Likewise the AI marks how
**grounded** an answer is and warns you when confidence is low. The guiding idea is
that the app would rather show you nothing than show you something false.

## Glossary at a glance

| Term | Meaning |
|---|---|
| **Object** | A single tracked entity (person, vessel, account…) |
| **Link / connection** | A labelled, directional relationship between two objects |
| **Ontology** | The catalogue of object types and allowed links |
| **360° profile** | The all-in-one detail page for one object |
| **Project** | One investigation, with members, objects, and work products |
| **Classification** | An object's sensitivity: UNCLASS / CONFIDENTIAL / SECRET |
| **Clearance** | The highest sensitivity *you* are allowed to see |
| **Role** | What you're allowed to *do* (analyst, reviewer, admin…) |
| **Risk score** | A 0–100 indicator of concern, shown as a coloured pill |
| **Watchlist** | A personal list of objects you're keeping an eye on |
| **Alert** | Something a rule flagged that needs triage |
| **Case** | A governed investigation that moves through defined stages |
| **Action** | A governed change to data, often needing approval |
| **Audit trail** | The tamper-evident record of who did what, and when |

Now that the vocabulary is clear, head to
[Finding your way around](/guide/navigation) or jump straight into a module.
