# Entity Resolution

Real data is messy: the same person or company often shows up as several records,
spelled slightly differently or imported from different sources. **Entity
Resolution** helps you decide when two records are really the *same* entity and
merge them — carefully, reversibly, and with a full record of the decision.

## How it works

AXIOM compares records and proposes **candidate pairs** it believes might be the
same. You review each pair and make the call. Nothing is merged automatically — you
are always the decider, and merges can be undone.

## The Resolve screen

![The Entity Resolution screen](/images/entity-resolution.png)
*Entity Resolution: review candidate pairs and decide whether two records are the same entity.*

Open **Entity Resolution** to see the queue of candidate pairs, your past merges, and
(for senior users) quality tools.

### Reviewing a candidate pair

Each candidate card shows the two records side by side with a match score (for
example, "candidate · 85%") and how the score was produced (a named model, or a
transparent rule-based scorer). Your options:

- **Why?** — expand the evidence: the overall match strength and a field-by-field
  comparison (name, phone, identifier…), so you can see *why* AXIOM thinks they
  match.
- **Pick the survivor** — click one of the two records to choose which one survives
  the merge. The merge button updates to show your choice.
- **Merge into [name]** — combine them: the other record's connections are
  redirected onto the survivor. This is recorded and can be undone.
- **Not the same** — reject the pair. It leaves the queue and the decision is
  remembered.
- **Group** — for senior users, mark the two as members of the same cluster
  *without* merging. Both records stay separate but are recognised as related, and a
  "golden record" (a combined canonical view) is available.

::: tip Sensitive merges may need a second approver
Depending on your workspace, a merge can require another person to approve it, the
same four-eyes rule used elsewhere. You'll see it become a pending approval rather
than applying immediately. See [Core concepts](/guide/concepts#governance-propose-approve-record).
:::

### Undoing a merge

Past merges are listed with what was merged, how many connections were redirected,
who did it, and when. Click **Undo merge** to reverse one — the records split back
apart, the connections move back, and the pair returns to the queue. You'll be asked
to confirm.

### Quality tools (senior users / admins)

- **Scorer quality** — precision, recall, and overall accuracy of the matcher,
  measured against a fixed benchmark, so you know how much to trust the suggestions.
- **Scan for duplicates** — re-run the matcher to refresh the candidate queue.
- **Re-score clusters** — re-check existing clusters; if a member no longer fits, a
  **split proposal** appears, which you can accept (open the entity) or dismiss as a
  false alarm.

## Recipes

**Merge two duplicate records.**
Open Resolve → review a pair → click **Why?** to confirm the evidence → click the
record you want to keep → **Merge into [that record]**. The other record's links move
onto the survivor.

**Reject a bad suggestion.**
A pair shows a low score and weak overlap → click **Not the same**. It leaves the
queue and won't be suggested again.

**Change your mind.**
Scroll to your past merges → find the one to reverse → **Undo merge** → confirm. The
records and their links are restored.

**Group without merging (senior users).**
Review a pair → **Group**. Both records stay, but they're now recognised as the same
underlying entity, with a combined golden record for reference.
