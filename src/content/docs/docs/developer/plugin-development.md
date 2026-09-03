---
title: Plugin development
description: Start from Daena's versioned manifest, SDK, and broker contracts.
sidebar:
  order: 1
---

Daena's Rust plugin API is the source for generated JSON Schema, TypeScript declarations, and contract fixtures. A manifest declares identity, versions, kind, capabilities, namespaces, schemas, templates, views, commands, dependencies, services, and migrations.

Do not call private Tauri commands or assume access to the main webview. Plugin UI runs in an isolated application-controlled origin and reaches project data through the versioned broker.

## Where to start

1. Read the repository's `docs/PLUGIN_SDK.md` and `docs/PLUGIN_PLATFORM_PLAN.md` for the current beta contract before publishing a package. Those two documents are the authority; website guides summarize them.
2. Generate from the source: JSON Schema, TypeScript declarations, and fixtures derive from the Rust API. Do not hand-write parallel contracts.
3. Declare the narrowest capabilities and namespaces your feature needs. Overbroad requests fail user trust before they fail review.
4. Version the three axes separately — package, host API range, and stored data — and ship declared, transactional migrations for your own stored data. Destructive operations need an explicit recovery policy.
5. Test isolation: no database handle, filesystem handle, shell, process, or ambient Tauri invoke in plugin code. Mutations use opaque revisions and idempotent request IDs, with conflict paths instead of silent overwrites.

Public API major versions are incompatible by definition; compatible minor changes validate against the host-supported range. The manifest, RPC, and capability registries are versioned, and compatible evolution is validated rather than assumed.

<!-- TODO(screenshot): none required — code-first page. Optional: manifest snippet with identity, host API range, and capabilities highlighted. Verify the snippet against the current SDK before capturing. -->
