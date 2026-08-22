---
title: Permissions and capabilities
description: Understand the scoped authority granted to an extension.
sidebar:
  order: 2
---

Capabilities can cover scoped entity, document, field, relationship, search, asset, event, and service operations. They do not grant ambient filesystem, shell, process, dialog, Tauri, or unrestricted network access.

The Rust host validates session identity, package digest, project binding, origin, payload schema, capability, namespace ownership, and revision before forwarding a broker request.
