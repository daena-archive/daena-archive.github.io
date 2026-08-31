---
name: Houses
package: daena.houses
author: daena-archive
summary: Houses, kinship, and bounded family trees built on the people already in your archive.
image: ../../assets/plugins/houses.webp
imageAlt: Artistic illustration for the Houses module
repository: https://github.com/daena-archive/daena/tree/main/packages/modules/houses
version: 0.1.0
daenaCompatibility: 'Daena 0.1 alpha'
hostApi: '>=1.0.0 <2.0.0'
runtimeKind: declarative
categories: [houses, genealogy]
official: true
bundled: true
featured: true
capabilities:
  [
    entity.read,
    entity.write,
    entity.delete,
    'field.read:shared',
    relationship.read,
    relationship.write,
    schema.overlay,
  ]
license: Apache-2.0
updated: 2026-08-28
---

Houses adds lineage, household, and dynasty structure to Daena without duplicating people. It gathers houses themselves and the family links around them — parents and children, partners, and who belongs to which house — while the people you already keep in Lore remain the single source for prose, dates, and portraits.

## Installation

Houses is bundled with Daena. Enable or disable it from the application's module management surface; it appears when Lore is available and no separate download is required.

## Kinship without copies

A person stays as one shared record. Houses records how people are related — who raised whom, who partnered with whom, and who belongs to which house — and what role they hold there, such as head, heir, consort, or founder. Each link can carry a clear kind, dates, and a short note when you need it, and a person may belong to more than one house.

## The Tree

Tree shows a focused neighborhood around a chosen person or house — close ancestors and descendants, siblings, co-parents, and partners — rather than the whole archive at once. Expand one branch at a time and keep the current view readable, then open any person back in Lore for the full article, dates, and portrait.

## Data ownership

Houses keeps house records and the links between them. Turning the module off hides Houses and Tree without deleting people or relationships, and your archive stays portable alongside the rest of the project. Custom types added to the project remain collection-only and do not appear as family-tree nodes.
