---
title: Creating a project
description: Create a local Daena project and understand the folder you choose.
sidebar:
  order: 2
---

Open a folder from the project switcher — **Open project folder**, or **Open another folder** once a project is already open — and choose a folder you control. Daena initializes a project there; a fresh, empty folder is the cleanest start, but an existing folder with a valid `project.json` simply opens. The project folder is the boundary for authored records, portable checkpoints, assets, and machine-local runtime state.

To move a project later, move or copy the whole folder.

## Choose a useful location

Prefer a normal user document folder with enough space for images, maps, and backups. Pick a path you can find again without searching.

If you plan to use Git, choose a location where Git repositories are supported. Avoid automatically synchronized folders until you understand how that service handles concurrent changes — a sync conflict inside a project folder is harder to reason about than an ordinary file conflict.

## What Daena creates

A new project contains a manifest (`project.json`) at the root, content directories for entities, plugins, and assets, a `.gitignore`, and a machine-local `.daena/` directory.

- `project.json`, `entities/`, `plugins/`, and `assets/` are the portable project: the part you back up, inspect, move, and snapshot with Git.
- `.daena/` holds the live runtime database, authoritative asset bytes, checkpoint staging, locks, indexes, and recovery material. It is machine-local and excluded from built-in Git snapshots.

Do not delete `.daena/` while a checkpoint is pending or failed; it can contain newer committed work than the portable files. If you are unsure about the checkpoint state, back up the entire project folder first.

## Good habits while Daena is beta

- Create one folder per project, and keep unrelated files out of it.
- Keep a separate backup of important projects outside the project folder.
- Read [How projects are stored](/docs/project-storage/how-projects-are-stored/) before editing portable files by hand or deleting anything inside `.daena/`.

Next, build [your first connected world](/docs/getting-started/your-first-world/) from one place, one person, and one event.

<!-- TODO(screenshot): project switcher — empty/welcome state with the Open project folder action visible, plus the folder picker. Keep the captured path generic (no personal username). -->
