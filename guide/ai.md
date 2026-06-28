# AI Copilot & agents

AXIOM's AI helps you investigate faster — but always on a leash. It answers from
**your** data, **cites its sources**, and when it suggests doing something, a person
always approves before anything happens. Two surfaces matter to most users: the
**Copilot** (ask questions) and **AI agents** (investigate and propose).

## The Copilot

![The Copilot panel with starter suggestions](/images/copilot.png)
*The Copilot: ask in plain language and get answers grounded in the data you can see.*

Click **Copilot** in the top bar (or press <kbd>⌘J</kbd>) to open the assistant. Ask
a question in plain language — for example, *"Which organizations are linked to the
highest-risk accounts in the last 30 days?"* — and you get back:

- a written answer, grounded in the data you're allowed to see, and
- a **Sources** panel of clickable citations — open any to verify the claim for
  yourself.

When you're idle, the Copilot offers a few starter suggestions to get you going.

### Conversations that remember

The Copilot keeps your conversation, so you can build on it ("now focus on that
vessel") and it understands the context. Your past conversations are kept in
**History**, where you can reopen one to continue it, or start a **New conversation**.
A **Memory** view shows what the assistant would recall for a new question — and, in
keeping with AXIOM's rules, recall is always re-checked against what you can see *now*.

## Grounded answers: knowing what to trust

Every AI answer is marked for **how grounded** it is:

- Sentences backed by a source are shown with a **citation** you can click.
- Sentences the AI generated *without* a source are flagged so you don't mistake them
  for fact.
- A **groundedness** indicator summarises overall confidence.

When confidence is low, AXIOM shows a warning and asks you to **acknowledge** it
before you rely on the answer. The point is simple: the AI will tell you when it's
unsure rather than bluff.

## AI agents

Open **AI agents** to work with agents that can *investigate* a question across your
data and, when appropriate, **propose a governed action**. An agent run shows:

- a **reasoning trace** — the steps the agent took and what each one found,
- a **grounded answer** with citations and a confidence indicator (as above),
- optionally, a **proposed action** with a clear *before → after* preview of what
  would change.

Crucially, the agent **proposes — a human applies**. A proposed action never runs by
itself; **View in Actions** takes you to the [approvals queue](/guide/actions) to
approve or reject it.

### Human oversight

After a run you record your judgement — **Accept**, **Flag**, or **Override** — with
an optional note. This is part of keeping a person firmly in charge of every AI
outcome, and it's recorded. You can also **stop** a long-running agent; whatever it
found so far is kept.

### Building and testing agents (administrators)

Administrators can create agents — name them, give them instructions and a sample
question, choose which **tools** they may use (drawn from your live data model), and
say which governed action (if any) they're allowed to propose. Before publishing, an
agent can be **tested** against example questions to check it answers well and cites
the right things. Everyone else sees agents in read-only form and can run them.

## Recipes

**Ask a grounded question.**
Open the Copilot → ask *"Who owns the highest-risk vessel?"* → read the answer →
click a **source** to confirm it on the object's profile.

**Build on the conversation.**
After an answer, ask a follow-up like *"and which accounts are linked to that owner?"*
→ the Copilot uses the context to refine its answer.

**Let an agent investigate and propose.**
Open AI agents → run *"Find accounts linked to sanctioned entities"* → review the
**reasoning trace** and citations → if it proposes an action, check the *before →
after* preview → **View in Actions** to approve or reject it.

**Judge an answer's reliability.**
Read the **groundedness** indicator → if it's low and a warning appears, open the
cited sources, decide for yourself, and **acknowledge** before relying on it.
