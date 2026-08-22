---
title: Creating a project
description: Create a local Daena project and understand the folder you choose.
sidebar:
  order: 2
---

Create a project from Daena's welcome screen and choose a folder you control. The project folder is the boundary for authored records, portable checkpoints, assets, and machine-local runtime state.

## Choose a useful location

Prefer a normal user document folder with enough space for images, maps, and backups. If you plan to use Git, choose a location where Git repositories are supported and avoid automatically synchronized folders until you understand how that service handles concurrent changes.

## What Daena creates

Daena initializes a project manifest, portable content directories, and a machine-local `.daena/` directory. Do not delete `.daena/` while a checkpoint is pending or failed; it can contain newer committed work than the portable files.
