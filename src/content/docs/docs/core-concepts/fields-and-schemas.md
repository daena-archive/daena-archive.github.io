---
title: Fields and schemas
description: Add structured meaning without turning every note into a form.
sidebar:
  order: 2
---

Schemas describe typed fields contributed by enabled modules and plugins. They make important details searchable and validatable while the prose document remains available for unstructured thought.

Start with prose; add a field when a detail needs to be compared, filtered, or reused elsewhere. A record can stay almost entirely freeform, or grow structured over time.

## How fields work

- Fields belong to a module or plugin namespace. Lore, Timeline, Writing, and Houses offer a Fields & Types workbench for project-level customization; Language and Maps stay extension-managed for now.
- Built-in types and fields change only in limited ways (enabled state, appearance). Project custom types, fields, and templates are stored as a project-owned overlay — package defaults stay immutable.
- Disabling a field hides its values; it does not purge them.

Plugin-owned field data uses declared namespaces. The core validates ownership and revisions before accepting a mutation, so a plugin cannot silently write into another module's fields.

## Practical guidance

- Prefer a relationship over a free-text field when the value is another record in your world (a person, a place, a language). Links stay navigable; text does not.
- Keep the number of required fields low. Required fields shape every future create dialog for that type.
- Risky schema changes — removing a type with live entities, reassigning fields — show an impact preview before saving. Read it; the preview does not mutate data.

<!-- TODO(screenshot): Fields & Types workbench — module card list and one field detail panel. Caption the overlay/project-owned distinction. -->
