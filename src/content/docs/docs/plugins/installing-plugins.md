---
title: Installing and managing plugins
description: Review package identity, compatibility, and requested capabilities.
sidebar:
  order: 1
---

Daena itself is beta software, so treat the third-party plugin platform as evolving too. Bundled modules (Lore, Timeline, Writing Studio, Maps, Houses, Language) and runtime plugins use the same manifest, lifecycle, and broker-backed contract — the difference is who authored the package, not a separate technology.

Before installing a package, verify its publisher and signature, version, supported Daena API range, and requested capabilities. A manifest declares identity, versions, kind, capabilities, namespaces, schemas, templates, views, commands, dependencies, services, and migrations.

## Managing modules

- **Enable or disable from the host-managed Extensions surface.** Disabling revokes the plugin's sessions and removes its navigation and commands without silently deleting portable project data.
- **Upgrades, uninstalls, project close, and restarts** likewise revoke sessions. Stored data versions advance only through declared, transactional migrations.
- **Compatibility is threefold.** Package version, host API version, and stored data version are separate: a matching package number does not guarantee the host API range fits your Daena build. Check the manifest's compatibility before installing.

If a capability request looks broader than the feature justifies, do not install. Capabilities are granted by you, never self-granted by plugin code.

<!-- TODO(screenshot): Project → Extensions — one installed package showing version, host API range, capabilities, and Enable/Disable. -->
