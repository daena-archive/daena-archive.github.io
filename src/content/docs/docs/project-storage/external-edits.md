---
title: External edits and rebuilding
description: Handle portable-file changes without silent overwrite or data loss.
sidebar:
  order: 2
---

External changes are imported explicitly after validation — never by silent background sync. Daena validates the complete portable checkpoint (project ID, paths, hashes, references, plugin ownership, schemas, assets) as one unit: either the whole checkpoint imports, or nothing does.

Invalid edits are diagnostic-only and do not replace the last valid runtime records. Two-sided changes and unsaved drafts use typed conflict and recovery paths rather than silent overwrites.

## Rules to follow

- **Import is a deliberate action.** If the runtime holds unsaved or newer committed work, Daena asks you to flush a checkpoint or accept a destructive replacement first.
- **No partial imports.** There is no per-file winner; an incomplete or inconsistent checkpoint is rejected whole.
- **Rebuilds need a valid tree.** When no usable runtime database exists, Daena validates the complete portable representation before constructing a new database and derived projections. Unmerged Git files, malformed paths, invalid references, namespace violations, and asset-hash failures block the affected operations.
- **Back up first.** Copy the whole project folder before hand-editing portable files or resolving conflicts, especially while a checkpoint is pending or failed.

Search indexes, map projections, and relationship views are derived and rebuildable; deleting a projection never deletes authored content. Deleting the runtime database is only safe on a clean, validated checkpoint.

<!-- TODO(screenshot): external-change import dialog — validation result with conflict/recovery options. Caption that imports are explicit. -->
