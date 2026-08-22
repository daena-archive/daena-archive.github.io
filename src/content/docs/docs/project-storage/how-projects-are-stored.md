---
title: How projects are stored
description: Learn the database-first runtime and deterministic portable checkpoint model.
sidebar:
  order: 1
---

SQLite is authoritative for active runtime mutations. Deterministic Markdown, strict JSON, and native assets form a portable checkpoint for Git, inspection, movement, and reconstruction.

The `.daena/` directory contains the runtime database, authoritative content-addressed asset bytes, checkpoint staging, locks, indexes, and recovery material. It is machine-local and excluded from built-in Git snapshots.

> A clean portable checkpoint can rebuild the project. A pending or failed checkpoint means the runtime may contain newer committed work and must not be discarded.
