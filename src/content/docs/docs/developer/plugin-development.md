---
title: Plugin development
description: Start from Daena's versioned manifest, SDK, and broker contracts.
sidebar:
  order: 1
---

Daena's Rust plugin API is the source for generated JSON Schema, TypeScript declarations, and contract fixtures. A manifest declares identity, versions, kind, capabilities, namespaces, schemas, templates, views, commands, dependencies, services, and migrations.

Do not call private Tauri commands or assume access to the main webview. Plugin UI runs in an isolated application-controlled origin and reaches project data through the versioned broker.

Read the repository's `docs/PLUGIN_SDK.md` and `docs/PLUGIN_PLATFORM_PLAN.md` for the current alpha contract before publishing a package.
