---
name: Writing Studio
package: daena.writing
author: daena-archive
summary: Manuscripts and reference pages with direct links back to a world's shared archive.
repository: https://github.com/daena-archive/daena/tree/main/packages/modules/writing
version: 0.1.0
daenaCompatibility: 'Daena 0.1 alpha'
categories: [writing, documents]
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
  ]
license: Apache-2.0
updated: 2026-08-22
---

Writing Studio contributes manuscript and reference-page templates plus a focused editing surface for long-form work.

## Installation

Writing Studio is bundled with Daena and managed with the rest of the first-party modules.

## Connections

Documents can reference shared archive records. When Maps is enabled, Writing Studio can use its versioned navigation service without depending on provider-specific map data.
