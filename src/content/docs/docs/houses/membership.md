---
title: Membership and roles
description: Add people to houses with roles, and remove membership without deleting anyone.
sidebar:
  order: 2
---

Membership is a relationship (`family_member_of`) with a role from the Houses schema — `member`, `head`, `consort`, `heir`, `founder`, or `custom` — plus optional notes. The default role may be `member`; change it to reflect the person's standing.

Removing membership deletes only that relationship. The person remains in Lore, unarchived and intact.

## Managing members

The House dock provides member search and role filters, Add existing Person, Create Person and add, Edit membership, Remove from House, Open Person, and Archive House. Member counts and leadership summaries update after each membership change, and renaming a house updates the landing, cards, Tree title, and person membership badges.

Confirmations use plain language: removing names the person and the house, and states that the person stays in Lore. Archiving a house does not archive its people.

## Kinship edges

Parent links are directed and acyclic; partnerships are undirected. Every durable change passes through revision-aware services, so a conflict in another view offers Reload current values, Review draft, and Reapply draft onto current — never a silent overwrite. Tree keyboard habits: Tab enters the canvas, arrows move selection, Enter opens the Person dock, Shift+Enter makes the focused person the root, R cycles relationships, and Escape closes the dock and returns focus.

<!-- TODO(screenshot): House dock — member list with role filter, one membership showing role + notes, and the remove-from-house confirmation. -->
