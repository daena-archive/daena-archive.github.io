---
title: Snapshots
description: Create and inspect explicit project-history checkpoints.
sidebar:
  order: 1
---

Before a built-in Git snapshot, Daena flushes committed runtime changes to a complete portable checkpoint, validates that checkpoint, and presents the exact staging paths.

Snapshots are explicit. Daena does not silently commit, reset, push, or discard external changes.
