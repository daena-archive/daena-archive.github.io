---
title: Importing an existing world
description: Bring outside material into Daena through an explicit, reviewable migration.
sidebar:
  order: 1
---

Import is an explicit, user-reviewed migration of outside material into an open project. It is not live file mirroring, synchronization, checkpoint recovery, or a reader for older Daena project formats.

Every source follows one pipeline: source selection → importer detection (you choose explicitly when ambiguous) → neutral staging → analysis and validation → preview with user mapping → immutable validated plan → one project commit → import report. Selection and analysis never mutate the project.

## Review before anything commits

The preview shows every staged item with its source data, and importer suggestions are defaults only — entity types, fields, and relationship types come from your enabled modules, and you can override any ambiguous mapping. Blocking errors prevent commit; warnings require explicit acknowledgement. Unknown information is preserved as raw metadata where practical, otherwise named in the preview and final report — no conversion path silently discards it.

Duplicate and conflict decisions (`create`, `skip`, `map to existing`) offer only the options with lossless, validated semantics; automatic merging stays off unless identity is unambiguous and the decision remains visible in preview.

## Before you import

- Snapshot the project or back up the folder — the commit is one logical project change, and beta storage may still evolve.
- Prefer the smallest source that proves the mapping, then repeat at full size.
- Only currently available importers are shown — generic documents (Markdown, HTML, DOCX, plain text, ZIP, folders), Obsidian vaults, and MediaWiki XML. Plugin-provided importers are still planned.

<!-- TODO(screenshot): import preview — staged item list with mapping overrides and one acknowledged warning. Caption that nothing commits before confirmation. -->
