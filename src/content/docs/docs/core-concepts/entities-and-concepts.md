---
title: Entities and concepts
description: Understand the stable records shared across every Daena module.
sidebar:
  order: 1
---

An entity is a stable project record with identity, metadata, a prose document, typed fields, relationships, and assets. Each entity has one stable ID that never changes: renaming the record or changing its type does not replace that ID or break its links.

Modules add templates and views, but they do not create separate identity systems. A person shown in Lore, pinned on a map, referenced by an event, and linked from a manuscript is still one entity.

## What an entity holds

- **Identity and name.** The ID is stable; the name is metadata you can change freely.
- **Document.** A Markdown prose record for unstructured thought — the right place for description, history, and notes.
- **Fields.** Typed, searchable details contributed by enabled modules and plugins.
- **Relationships.** Explicit links to other entities, visible from both sides.
- **Assets.** Images and files owned by the entity rather than scattered path references.

## Why this matters

Because identity is shared, every module interprets the same record instead of copying it. Rename Captain Elian Rook once and the family tree, the map pin, the timeline label, and the manuscript link all follow — without merging duplicates.

Archiving hides a record from workspace views but keeps it in the project. Permanent deletion lives in Project Center → Archive only, and requires explicit confirmation.

<!-- TODO(screenshot): entity anatomy — Lore editor showing document, fields, relationships, and assets for one record. Annotate the five parts listed above. -->
