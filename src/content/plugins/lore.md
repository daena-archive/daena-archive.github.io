---
name: Lore
package: daena.lore
author: daena-archive
summary: The connected world bible for people, places, artifacts, factions, cultures, and concepts.
repository: https://github.com/daena-archive/daena/tree/main/packages/modules/lore
version: 0.1.1
daenaCompatibility: 'Daena 0.1 alpha'
categories: [lore, relationships]
status: beta
official: true
bundled: true
featured: true
capabilities:
  [
    entity.read,
    entity.write,
    document.read,
    document.write,
    fields.read,
    fields.write,
    relationships.read,
    relationships.write,
    search.read,
    assets.read,
    assets.write,
  ]
license: Apache-2.0
updated: 2026-08-22
---

Lore contributes Daena's first-party people, places, artifacts, factions, cultures, and concepts. Its article and structured field surfaces operate on shared project records rather than a module-specific database.

## Installation

Lore is bundled with Daena. Enable or disable it from the application's module management surface; no separate package download is required.

## Access

Lore requests scoped access to shared records, documents, its declared field namespace, relationships, search, and entity-owned assets. The host remains the authority for every operation.
