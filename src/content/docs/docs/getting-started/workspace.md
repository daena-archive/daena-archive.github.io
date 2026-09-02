---
title: Understanding the workspace
description: Navigate modules, entities, search, and project-level settings.
sidebar:
  order: 4
---

The workspace is assembled from enabled modules. Navigation, entity types, views, and actions appear from those active contributions rather than a fixed list of hard-coded feature names. Disabling a module removes its navigation and commands, while its portable data stays in the project.

## The main areas

- **Lore** for connected reference: people, places, factions, cultures, artifacts, and concepts.
- **Timeline** for history: events, eras, dates, and calendars.
- **Maps** for place: physical worlds and linked locations. Maps is currently beta.
- **Language** for conlang structure: overview, vocabulary, sounds, and grammar.
- **Writing Studio** for documents: manuscripts for long-form work and reference pages for notes.
- **Houses** for families and membership, where enabled.
- **Project Center** for project-level concerns: Data & recovery, Snapshots (Git history and remotes), Extensions, Fields & Types, and Archive.

Names and availability follow the active modules. If an area is missing, check which modules are enabled before assuming the feature is gone.

## Finding things

Use Quick Open (`⌘K` / `Ctrl+K`) to find shared records across the whole project. A person shown in Lore, pinned on a map, referenced by an event, and linked from a manuscript is still one entity, so search for the record rather than the view that showed it.

Use module views to focus on a particular layer. Open any record to edit its document in the editor pane and see its Details, relationships grouped by defining module, assets, and backlinks in the inspector beside it.

The global New action opens the full template gallery. Each workspace header also offers a contextual New that defaults to that workspace — for example, the current Timeline tab or the current Writing Studio tab.

## Project-level concerns

Project Center holds Data & recovery (storage and backups), Snapshots (Git history, remotes, restore), Extensions (plugins), Fields & Types (schema), and Archive. Archiving is reversible and keeps the record in the project; permanent deletion lives in Project Center → Archive only.

When you are comfortable moving around, continue with [Entities and concepts](../core-concepts/entities-and-concepts/).

<!-- TODO(screenshot): workspace overview — app shell with navigation rail, one module view, search, and inspector visible. Annotate: navigation, collection, inspector. Avoid capturing personal project names. -->
