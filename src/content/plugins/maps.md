---
name: Maps
package: daena.maps
author: daena-archive
summary: Native and provider-backed maps connected to the entities and history in a Daena project.
image: /images/plugins/maps.webp
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
updated: 2026-08-28
---

Maps contributes the first-party map workspace, location capture and reconciliation commands, and a versioned navigation service for other enabled modules.

## Installation

Maps is bundled with Daena. Map-provider assets and adapters may have their own preparation or compatibility requirements documented with each provider.

## Maturity

The workspace is beta. Physical-world generation, native-vector editing, and external-provider workflows are evolving at different rates and are documented independently.
