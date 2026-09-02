---
name: Writing Studio
package: daena.writing
author: daena-archive
summary: Manuscripts and reference pages with direct links back to a world's shared archive.
image: ../../assets/plugins/writing-studio.webp
imageAlt: Artistic illustration for the Writing Studio module
repository: https://github.com/daena-archive/daena/tree/main/packages/modules/writing
version: 0.1.0
daenaCompatibility: 'Daena 0.1 alpha'
hostApi: '>=1.0.0 <2.0.0'
runtimeKind: declarative
categories: [writing, documents]
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
    asset.register,
    search.query,
    schema.overlay,
    'service.call:daena.maps/navigation',
  ]
license: Apache-2.0
updated: 2026-09-02
---

Writing Studio is a quiet space for long-form work. It holds manuscripts and reference pages that can point directly to the people, places, events, and language in your archive, without pretending Daena is only a word processor.

## Installation

Writing Studio is bundled with Daena. Enable or disable it from the application's module management surface; no separate package download is required.

## How it connects

Documents can reference any shared record, so a scene can point to a character or place it mentions. When Maps is available, writing can open those places on their maps without taking on provider-specific map data.
