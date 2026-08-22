---
name: Timeline
package: daena.timeline
author: daena-archive
summary: Events, encounters, eras, calendars, dates, locations, and participants in one historical view.
repository: https://github.com/daena-archive/daena/tree/main/packages/modules/timeline
version: 0.2.0
daenaCompatibility: 'Daena 0.1 alpha'
categories: [timeline, calendars]
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

Timeline contributes event, encounter, era, calendar, and calendar-definition templates. It can relate those records to shared entities and provide date resolution to other authorized modules.

## Installation

Timeline is bundled with Daena and is managed through the application module settings.

## Interoperability

The module provides a versioned date-resolution service and can consume Maps navigation when Maps is enabled. Disabled capabilities disappear from the active workspace without deleting portable data.
