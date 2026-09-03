---
name: Timeline
package: daena.timeline
author: daena-archive
summary: Events, encounters, eras, calendars, dates, locations, and participants in one historical view.
image: ../../assets/plugins/timeline.webp
imageAlt: Artistic illustration for the Timeline module
repository: https://github.com/daena-archive/daena/tree/main/packages/modules/timeline
version: 0.1.0
daenaCompatibility: 'Daena 0.1 beta'
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
updated: 2026-09-04
---

Timeline gives in-world history a home — events, encounters, eras, and calendars — while keeping every moment linked to the people, places, and records that took part in it.

## Installation

Timeline is bundled with Daena. Enable or disable it from the application's module management surface; no separate package download is required.

## How it connects

History is written against the same shared people and places found elsewhere in the archive, with dates that can be familiar or follow a calendar you define. Other parts of the archive can read those dates without taking on extra time-keeping on their own. Turning Timeline off hides its views without deleting events or the archive they describe.
