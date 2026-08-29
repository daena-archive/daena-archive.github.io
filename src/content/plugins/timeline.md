---
name: Timeline
package: daena.timeline
author: daena-archive
summary: Events, encounters, eras, calendars, dates, locations, and participants in one historical view.
image: ../../assets/plugins/timeline.webp
imageAlt: Artistic illustration for the Timeline module
repository: https://github.com/daena-archive/daena/tree/main/packages/modules/timeline
version: 0.1.0
daenaCompatibility: 'Daena 0.1 alpha'
hostApi: '>=1.0.0 <2.0.0'
runtimeKind: sandboxed
categories: [timeline, calendars]
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
    'field.read:shared',
    'field.write:self',
    'record.read:self',
    'record.write:self',
    relationship.read,
    relationship.write,
    'asset.read:self',
    asset.register,
    search.query,
    schema.overlay,
    'service.provide:daena.timeline.resolve-date@1',
    'service.call:daena.maps/navigation',
  ]
license: Apache-2.0
updated: 2026-08-28
---

Timeline contributes event, encounter, era, calendar, and calendar-definition templates. It can relate those records to shared entities and provide date resolution to other authorized modules.

## Installation

Timeline is bundled with Daena and is managed through the application module settings.

## Interoperability

The module provides a versioned date-resolution service and can consume Maps navigation when Maps is enabled. Disabled capabilities disappear from the active workspace without deleting portable data.
