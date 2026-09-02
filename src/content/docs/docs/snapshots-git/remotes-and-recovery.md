---
title: Remotes and recovery
description: Use remote Git operations and recovery safeguards deliberately.
sidebar:
  order: 2
---

Configure remotes from Project Center → Snapshots. Commits, resets, and recovery actions require explicit confirmation and validate the portable checkpoint boundary first; pushes confirm the remote and branch but perform no checkpoint flush of their own.

Unresolved conflicts, malformed project paths, invalid references, or pending checkpoints block commits, resets, and recovery instead of being overwritten.

## Recovery paths

- **Browse history** in Project Center → Snapshots, including read-only previews of files in a chosen snapshot, before deciding to restore.
- **Hard reset restores an earlier snapshot** with explicit danger warnings: later commits and uncommitted work are at risk. This is a deliberate action, never automatic.
- **After a reset that diverges from upstream,** Daena offers a clear choice: force-push-with-lease to rewrite the remote, or restore from the remote (the regret path). Plain force-push without a lease is not offered.
- **Git needs the system binary.** Daena drives the installed `git`; it does not embed its own. If Git is missing, the Snapshots panel shows availability and a path to install it.

Remote credentials, pushes, and pulls are opt-in. Local writing, maps, languages, and snapshots all work fully offline.

<!-- TODO(screenshot): Project → Snapshots remotes + history — remote list, one snapshot preview, and the hard-reset confirmation. Blur any personal remote URLs. -->
