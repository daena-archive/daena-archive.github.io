---
title: Permissions and capabilities
description: Understand the scoped authority granted to an extension.
sidebar:
  order: 2
---

Capabilities can cover scoped entity, document, field, relationship, search, asset, event, and service operations. They do not grant ambient filesystem, shell, process, dialog, Tauri, or unrestricted network access — there is no capability that means "everything."

The Rust host validates session identity, project binding, origin, payload schema, capability, namespace ownership, and revision before forwarding a broker request. (The session is additionally bound to the installed package and its digest at issuance; upgrading or changing the package revokes existing sessions.) Frontend checks are advisory; the host boundary decides.

## What this means for you

- **Review the capability list** the way you would review permissions on any platform. Scoped reads and namespace-owned writes are normal; broad or unexplained requests are a reason to pause.
- **Plugin UI is isolated.** Third-party views run in an application-controlled origin with no host DOM or ambient Tauri access, and reach project data only through the versioned broker.
- **Git, raw file access, and native commands** are not part of the broker at all. A plugin cannot snapshot, push, or read outside its grant.
- **Revocation is immediate.** Disabling, upgrading, uninstalling, closing the project, or restarting the plugin ends its sessions.

<!-- TODO(screenshot): capability review dialog — scoped operations listed with the grant/deny controls. Caption that grants are per-project. -->
