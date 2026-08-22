---
title: External edits and rebuilding
description: Handle portable-file changes without silent overwrite or data loss.
sidebar:
  order: 2
---

External changes are imported explicitly after validation. Invalid edits are diagnostic-only and do not replace the last valid runtime records. Two-sided changes and unsaved drafts use typed conflict and recovery paths.

When no usable runtime database exists, Daena validates the complete portable representation before constructing a new database and derived projections.
