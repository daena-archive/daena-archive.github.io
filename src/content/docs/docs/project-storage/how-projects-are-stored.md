---
title: How projects are stored
description: Learn the database-first runtime and deterministic portable checkpoint model.
sidebar:
  order: 1
---

SQLite is authoritative for active runtime mutations. Deterministic Markdown, strict JSON, and native assets form a portable checkpoint for Git, inspection, movement, and reconstruction.

A successful edit is durable as soon as its SQLite transaction commits — it does not wait for file export. A background worker then renders the complete portable snapshot and advances the checkpoint only after the whole snapshot succeeds.

## The two halves

- **Portable project** — `project.json`, `entities/<uuid>/` records with `document.md` and strict JSON, `assets/` with native bytes, and a generated `checkpoint.json` recording every portable file's path, size, and SHA-256 digest. The portable files are what you back up, move, and rebuild from. (`checkpoint.json` itself is excluded from Git snapshots; built-in Git stages the content files it inventories.)
- **Machine-local `.daena/`** — the runtime database (`index.sqlite`), authoritative content-addressed asset bytes, checkpoint staging, locks, indexes, and recovery material. Excluded from built-in Git snapshots; never hand-edit.

Sync state is derived: `failed` when an export error is present, `pending` when content is newer than the last checkpoint, `clean` when they match.

> A clean portable checkpoint can rebuild the project. A pending or failed checkpoint means the runtime may contain newer committed work and must not be discarded.

Read [External edits and rebuilding](/docs/project-storage/external-edits/) before touching portable files by hand.

<!-- TODO(screenshot): Project Center storage/status — checkpoint state (clean/pending/failed) with the portable vs machine-local distinction captioned. -->
