---
title: Houses and Tree
description: Browse houses in a collection and explore kinship in a bounded tree view.
sidebar:
  order: 1
---

Houses and Tree are two views of the same records, not two products. **Houses** is the master-detail workspace: searchable houses with member counts and head/heir summaries, house documents and fields, and an inspector with members, leadership, relationships, assets, and backlinks. **Tree** is exploration and relationship editing around one house or person.

A person is always a `Person` from Lore. Parentage, partnership, and house membership are normal Daena relationships — Houses stores no person copies, graph caches, or layout coordinates. Disabling the module hides Houses and Tree while shared entities and relationships stay in the project.

## Moving between the views

- **Open tree** is available from each house row and house detail. Opening a house from either view lands on the same Tree session, and Back returns to the prior Houses location when you entered from a house.
- The Tree landing searches the same paged house and person sources. **New person** and **New house** stay visible on the landing even when the collections are not empty.
- The Person dock offers Open in Lore, Edit identity, Make root, adding parents, children, and partners, house memberships with roles, visible connections, and Archive Person in a destructive section.

## Reading the Tree

Two scopes control how much the Tree shows:

- **Members only** (default): house members and kinship edges with both endpoints inside the house.
- **Members + immediate family**: adds one-hop parents, partners, and children outside the house, muted and capped.

Full emphasis marks house members; muted nodes are relatives outside the house; role badges mark head, heir, founder, and similar roles. Disconnected components report as `{N} family groups` rather than rendering as a layout error, and all groups fit by default.

The toolbar groups Navigation (Back, person selector), View (scope, secondary label, Fit), Expansion (Reset branches), and More (generation limits, person cap, minimap, reduced detail, warning details). Relationship docks phrase partnerships as "A and B" and parent links as "A → B", and return focus to the originating edge or node on close.

## Custom types stay collection-only

House authoring fields, templates, and custom types are editable through the Fields & Types workbench, but the Tree only hydrates the contract types — Lore persons and Houses houses. Every other Houses type appears in the Houses collection and generic editor, never as a Tree node.

<!-- TODO(screenshot): Houses collection + one open Tree — member list with role badges and a small bounded tree showing the members-only scope. Use demo names. -->
