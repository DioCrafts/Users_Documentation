# Actions & approvals

An **action** is a governed change to your data — designating an entity, freezing an
account, adding something to a watchlist, sending an effect to another system.
Because actions matter, AXIOM routes the important ones through **approval**: one
person proposes, another approves, and the whole thing is recorded. This is the home
of the four-eyes principle described in
[Core concepts](/guide/concepts#governance-propose-approve-record).

## The Approvals (Actions) screen

![The Approvals / action centre](/images/actions-center.png)
*The action centre: pending approvals, recent activity, and the action catalogue.*

Open **Approvals** for the action centre. You'll find:

- **Pending approvals** — actions waiting for a second reviewer. Each card shows the
  action, its target object, who proposed it, the parameters, and the classification.
- **Recent activity** — a log of actions that were applied, rejected, or are
  executing, filterable by status.
- **A summary sidebar** — how many were applied today, how many are pending, and how
  many response rules are active.

Other tabs let you browse the **action catalogue** (every action that exists, what it
targets, its effects, and its approval chain), jump to [Rules](/guide/rules), and see
the full **log** of every action with actor, approver, status, and time.

## Proposing an action

Click **New action** (or **Run** on an action in the catalogue):

![The "Take an action" dialog](/images/actions-new.png)
*Proposing an action: choose a target and action, fill in parameters, and write a justification.*

1. **Choose a target** object (search and select).
2. **Choose an action** (only those that apply to the target's type are offered).
3. **Fill in parameters** — toggles, fields, or options the action defines.
4. **Write a justification** — this is recorded with the action.
5. A panel summarises the **effects**, the **classification**, the **approval chain**,
   and whether it needs review.
6. **Apply action** if it needs no approval, or **Submit for approval** if it's
   governed.

## Approving or rejecting

In **Pending approvals**, click **Review** on an action to open it. You'll see the
action, target, requester, justification, and effects. If you hold the required role
and you're *not* the requester:

- **Approve & apply** (final stage) or **Approve** (to pass it to the next approver
  in a multi-step chain), or
- **Reject** to send it back.

You can't approve something you requested, and you can't approve without the required
role — the buttons reflect this. If an action sends an effect to an outside system,
its delivery status (and any retries) is shown too.

## Recipes

**Propose a designation for approval.**
**New action** → choose the target entity → choose the action → fill parameters →
write a clear justification → review the chain → **Submit for approval**. It now waits
for a colleague with the right role.

**Clear the approvals queue.**
Open Approvals → for each item in **Pending**, click **Review** → confirm you hold the
role and didn't propose it → **Approve & apply** or **Reject**. Every decision lands
in the log.

**See what actions are possible.**
Open the **catalogue** tab → browse each action's targets, effects, and approval
requirements → **Run** one to propose it on the spot.
