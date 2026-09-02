---
title: Relationships
description: Connect records through explicit, bidirectional links.
sidebar:
  order: 3
---

Relationships connect two stable entities and can carry type, direction, and module-owned metadata. A relationship created from one record remains visible from the other side — there is no need to maintain the reverse link by hand.

Relationship fields are grouped by the module that defines them (Lore, Houses, Maps, Timeline, Language), not by the workspace you happen to be in. Groups with no links start collapsed.

## Modeling guidance

Prefer the entity that owns a many-valued fact when modeling relationships. For example, a person can speak zero, one, or more languages; the person's record owns that selection.

Other useful habits:

- **Link the record, not the name.** Links point at the stable ID, so renames never break them.
- **Use direction deliberately.** Parentage is directed; partnership and membership carry their own meaning. The inspector phrases these in author language rather than raw type IDs.
- **Keep metadata on the edge.** Roles, notes, and other context live on the relationship itself, so they survive renames on either side.

Houses membership, map pins, timeline participation, and manuscript appearances are all ordinary relationships under this model — different views over the same mechanism.

<!-- TODO(screenshot): inspector relationships section — grouped module headers with one expanded group showing two links and edge metadata. -->
