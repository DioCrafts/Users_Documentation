# Administration

This page is for **administrators** — the people who set up accounts, assign roles and
clearances, and configure how the workspace behaves. If you're not an admin, most of
this won't be visible to you, and that's by design.

## The first administrator

A brand-new AXIOM workspace starts empty and shows a **registration** screen. The first
person to register becomes the **administrator** and owner of the workspace, with the
highest clearance. Once that account exists, **registration closes** — nobody can sign
themselves up afterwards. From then on, every account is created by an admin.

## Managing users

![The Administration users list](/images/admin-users.png)
*Administration → Users: everyone in the workspace, with their roles and clearance.*

Open **Administration → Users** for the list of everyone in the workspace, showing each
person's name, email, role(s), clearance, and when they were created.

### Adding a user

Click **Add user** and provide:

![The "Add user" dialog with roles and clearance](/images/admin-add-user.png)
*Adding a user: set their email, name, one or more roles, a clearance, and an initial password.*

- **Email** (their sign-in name, must be unique),
- **Name**,
- one or more **roles** (analyst, reviewer, lead_analyst, legal, mlro, admin — see
  [Core concepts](/guide/concepts#access-clearance-and-roles)),
- a **clearance** (UNCLASS, CONFIDENTIAL, or SECRET),
- an **initial password** (at least 8 characters).

Share the password with the person securely; they'll change it on first sign-in.

### Changing a user

For any account you can:

- **Grant or revoke roles** — click a role to toggle it. (AXIOM won't let you remove
  the last administrator, so the workspace always has one.)
- **Change clearance** — raising it widens what they can see; lowering it restricts
  them.
- **Edit** their name or email.
- **Reset password** — set a new one; they'll need to sign in again everywhere.
- **Delete** the account — this can't be undone, though the audit trail keeps the
  record that the account existed.

### Recipe: onboard a new analyst

**Add user** → enter their email and name → tick **analyst** → set clearance to
**CONFIDENTIAL** → set an initial password → **Create**. Share the password securely.
They sign in, change it, and can start work. If they need a specific project, they
request access and you grant it (see
[Governance, access & audit](/guide/governance#requesting-access)).

## Other administrative settings

The Administration area is also where admins configure how the workspace runs.
Depending on your setup you'll find tools to:

- **Define case lifecycles** — set the stages each case type moves through and which
  roles must approve which transitions (see [Alerts & Cases](/guide/alerts-cases)).
- **Manage auto-link rules** — have AXIOM automatically connect records that share a
  common identifier (for example, the same phone number), so identities link up as
  data arrives.
- **Review derived flags** — see the risk signals AXIOM computes from the graph, and
  recompute them on demand.
- **Inspect the AI activity record** — review what the AI did, for whom, and with what
  outcome.
- **Oversee the audit trail and event ledger** — verify integrity, anchor proofs, and
  manage retention and privacy erasure (see
  [Governance, access & audit](/guide/governance#the-audit-trail)).

The data-model and content tools that admins also own — extending the
[ontology](/guide/ontology), laying out [profiles](/guide/ontology#customizing-the-360-profile),
authoring [rules](/guide/rules) and [report templates](/guide/reports#templates),
configuring [connectors](/guide/sources#connectors-administrators), and monitoring
[data health](/guide/pipelines#data-health-administrators) — are documented in their own
sections.

## Administrator's checklist

A sensible order when standing up or running a workspace:

1. **Register** the first admin account.
2. **Create user accounts** and assign **roles** and **clearances** thoughtfully —
   clearance controls what people *see*, roles control what they *do*.
3. **Bring in data** via [Sources](/guide/sources), and check
   [Data health](/guide/pipelines#data-health-administrators).
4. **Shape the model** if needed — extend the [ontology](/guide/ontology) and lay out
   the profiles.
5. **Set up detection** — author [rules](/guide/rules) and case lifecycles.
6. **Keep watch** — review the [audit trail](/guide/governance#the-audit-trail) and
   handle [access requests](/guide/governance#requesting-access).

::: warning Clearance and roles are different
It's worth repeating: **clearance** is the ceiling on what someone can *see*; **roles**
decide what they can *do*. A high clearance with no roles can look but not act; a role
without the clearance to see an object can't act on it. Set both deliberately.
:::
