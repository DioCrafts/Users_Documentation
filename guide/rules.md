# Rules

**Rules** let AXIOM watch your data for you. Every rule reads as **WHEN → THEN**: when
something matches a condition, then do something about it. There are two kinds:

- **Detection rules** raise an **alert** when objects match.
- **Response rules** *propose* a governed [action](/guide/actions) when objects match
  — which a person then approves.

Either way, rules never act on their own beyond raising an alert or proposing a
reviewable action. Nothing is auto-executed.

## The Rules screen

Open **Rules** (a lens of Alerts). You'll see all rules as cards, each showing its
name, kind (Detection or Response), its **WHEN** condition and **THEN** effect in
plain language, how many times it has fired, any required approvers, and a toggle to
turn it on or off. Filter the list by **All / Detection / Response**, and read the
"x of y active" count at a glance.

A rule can also be **display-only** — written out for documentation but with no live
condition, so it never fires. Adding a condition makes it executable.

## Creating a rule (administrators)

![The "New rule" builder with WHEN and THEN fields](/images/rules-new.png)
*Building a rule: every rule reads WHEN → THEN, and a response rule only ever proposes an action a human approves.*

Click **New rule** and choose **Detection** or **Response** (the kind is fixed once
created).

1. **Name** the rule.
2. Write the **WHEN** and **THEN** lines in plain language (these are how the rule
   reads to everyone).
3. Add **conditions** with the builder — pick a field (such as risk, type, name, or a
   property), an operator (equals, greater than, contains…), and a value. Add several;
   they all have to match. Numeric comparisons are available for numeric fields like
   risk.
4. For a **detection** rule, pick the **severity** of the alert it raises.
5. For a **response** rule, pick the **action** to propose, fill in its parameters,
   and optionally set an **approval chain** (which roles must sign off).
6. Choose whether it starts **enabled**, and **create** it.

A detection rule with conditions fires when an object matches (at most once per
object). A response rule with conditions proposes a pending action when an object
matches — and a person disposes of it in the [Actions queue](/guide/actions).

Editing a rule's conditions can let it fire again on objects it already matched.
Removing all conditions turns it back into a harmless display-only rule (its history
is kept). Use the per-rule **toggle** to disable a noisy rule without deleting it.

## Recipes

**Raise an alert on high risk.**
**New rule** → **Detection** → name "High-risk entity" → WHEN "risk is 80 or more",
THEN "raise a high alert" → add condition *risk ≥ 80* → severity **High** → create.
Now any object reaching risk 80 raises an alert.

**Propose an action automatically (for approval).**
**New rule** → **Response** → name it → add conditions → choose the action to propose
(for example, add to a watchlist) → set who must approve → create. Matches now queue
a pending action for a person to approve.

**Quiet a noisy rule.**
Find the rule card → flip the **toggle** off. It stops firing immediately; turn it
back on whenever you like.
