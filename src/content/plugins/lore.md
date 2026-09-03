---
name: Lore
package: daena.lore
author: daena-archive
summary: The connected world bible for people, places, artifacts, factions, cultures, and concepts.
image: ../../assets/plugins/lore.webp
imageAlt: Artistic illustration for the Lore module
repository: https://github.com/daena-archive/daena/tree/main/packages/modules/lore
version: 0.1.0
daenaCompatibility: 'Daena 0.1 beta'
hostApi: '>=1.0.0 <2.0.0'
runtimeKind: sandboxed
categories: [lore, relationships]
official: true
bundled: true
featured: true
capabilities:
  [
    entity.read,
    entity.write,
    entity.delete,
    document.read,
    document.write,
    'field.read:self',
    'field.write:self',
    relationship.read,
    relationship.write,
    'asset.read:self',
    'asset.write:self',
    asset.register,
    search.query,
    schema.overlay,
    ai.text.generate-structured,
    'service.call:daena.maps/navigation',
  ]
license: Apache-2.0
updated: 2026-09-04
---

Lore contributes Daena's first-party people, places, artifacts, factions, cultures, and concepts. Each entry holds a readable article and structured details, and links to others through relationships that work in both directions.

## Installation

Lore is bundled with Daena. Enable or disable it from the application's module management surface; no separate package download is required.

## How it connects

People and places created here are the shared records the rest of the archive builds around. Houses draws the same Lore people into parents, partners, and house membership; Timeline brings them into events and calendars; Maps places them; Writing references them. No copy is made — there is still only one Captain Elian Rook.

## Working with the archive

Lore keeps articles, fields, images, and files close to the records they describe, while the host remains the authority for storage, revisions, and access.
