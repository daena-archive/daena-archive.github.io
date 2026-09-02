---
title: Common issues
description: Resolve save conflicts, checkpoint states, Git blocks, and upgrade problems.
sidebar:
  order: 1
---

Most Daena problems surface as an explicit status rather than silent data loss. Match what you see below before deleting or retrying anything.

## "This record changed in another view"

Two views edited the same record and the revision check (`revision-conflict`) stopped an overwrite. Keep your draft and choose **Reload current values**, **Review draft**, or **Reapply draft onto current** when safe. Retrying with a stale revision will fail again — reload first.

## "The change could not be saved"

Retry once, then dismiss and inspect: check that the project folder is writable, that no external sync tool holds a lock, and that the record still exists (it may have been archived from another view). Autosave shows Saving… and Saved states; a stuck Saving… across restarts deserves a backup of the whole project folder before further edits.

## Pending or failed checkpoint

A pending checkpoint means the runtime holds newer committed work than the portable files; a failed one records an export error. While either state stands: do not delete `.daena/`, do not hand-edit portable files, and copy the whole project folder before attempting recovery. Git snapshots, backups, and rebuilds all wait on a clean checkpoint first.

## Git operation blocked

Unresolved conflicts, malformed project paths, invalid references, namespace violations, asset-hash failures, and pending checkpoints block commits, resets, and recovery instead of being overwritten. (Pushes confirm the remote but run no checkpoint validation of their own.) Resolve the named cause — finish the conflict, fix the path, flush the checkpoint — then retry. If the Snapshots panel reports Git as unavailable, install the system `git` binary; Daena drives the installed Git rather than embedding its own.

## Project will not open after an upgrade

Stop, keep a copy of the project folder, and read the new release notes for format changes before retrying. Alpha storage may change before `v1.0`, and the hard-cut boundary rejects incompatible runtime state with a reset-required diagnostic rather than migrating silently. If the portable checkpoint is clean and validated, Daena can reconstruct the runtime from it; if it is pending or failed, the runtime may hold the newest work.

<!-- TODO(screenshot): one conflict dialog and one blocked-Git message — exact wording, no personal paths. Caption the safe first action for each. -->
