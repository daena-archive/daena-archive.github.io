---
title: Snapshots
description: Create and inspect explicit project-history checkpoints.
sidebar:
  order: 1
---

Before a built-in Git snapshot, Daena flushes committed runtime changes to a complete portable checkpoint, validates that checkpoint, and presents the exact staging paths. You review precisely which canonical files will enter the commit and may stage a subset.

Snapshots are explicit. Daena does not silently commit, reset, push, or discard external changes. There is no auto-commit on save and no background sync.

## Good snapshot habits

- **Write a real message.** Custom messages are supported; deterministic generated messages are available without AI. Say what changed in the world, not just "update."
- **Snapshot before risky work.** Upgrades, bulk reorganization, hand-edited portable files, and schema overlay changes all deserve a snapshot first — especially in alpha.
- **Expect preflight.** Unresolved conflicts, malformed paths, invalid references, and pending checkpoints block the affected operations instead of being overwritten. Resolve, then retry.

Git operates on portable files only. `.daena/`, SQLite files, runtime indexes, plugin grants, and sessions are never staged by built-in helpers.

<!-- TODO(screenshot): Project → Snapshots flow — staging list with exact paths and the commit message field. -->
