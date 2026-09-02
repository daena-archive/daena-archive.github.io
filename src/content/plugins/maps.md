---
name: Maps
package: daena.maps
author: daena-archive
summary: Native and provider-backed maps connected to the entities and history in a Daena project.
image: ../../assets/plugins/maps.webp
imageAlt: Artistic illustration for the Maps module
repository: https://github.com/daena-archive/daena/tree/main/packages/modules/maps
version: 0.1.0
daenaCompatibility: 'Daena 0.1 alpha'
hostApi: '>=1.0.0 <2.0.0'
runtimeKind: sandboxed
categories: [maps, generation]
status: beta
official: true
bundled: true
featured: true
capabilities:
  [
    entity.read,
    entity.write,
    entity.delete,
    'field.read:self',
    'field.write:self',
    relationship.read,
    relationship.write,
    'asset.read:self',
    'asset.write:self',
    search.query,
    'host.surface:daena.maps/editor@1',
    'service.provide:daena.maps/navigation@1',
    'event.subscribe:daena.core/entity-changed@1',
    'event.publish:daena.maps/state@1',
    'event.publish:daena.maps/selection@1',
  ]
license: Apache-2.0
updated: 2026-09-02
---

Maps keeps geography beside the lore, events, and characters that give it meaning. Physical terrain, native vector maps, and optional external map sources all point back to the same shared places, without making a separate copy of your archive.

## Installation

Maps is bundled with Daena. Enable or disable it from the application's module management surface. Provider files and adapters, when used, keep their own requirements as noted with each provider.

## How it connects

Places and events that appear on a map are the same records used elsewhere. Other parts of the archive can open a location on its map without carrying provider-specific map data with them.

## Maturity

Maps is in beta and is actively evolving. Native terrain, editing, and provider workflows are at different stages; the roadmap marks what is ready, what is being refined, and what is still ahead.
