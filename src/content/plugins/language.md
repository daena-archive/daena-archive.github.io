---
name: Language
package: daena.language
author: daena-archive
summary: Vocabulary, phonology, orthographies, grammar, paradigms, and samples for fictional languages.
image: ../../assets/plugins/language.webp
imageAlt: Artistic illustration for the Language module
repository: https://github.com/daena-archive/daena/tree/main/packages/modules/language
version: 0.1.0
daenaCompatibility: 'Daena 0.1 alpha'
hostApi: '>=1.0.0 <2.0.0'
runtimeKind: sandboxed
categories: [language, culture]
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
    'record.read:self',
    'record.write:self',
  ]
license: Apache-2.0
updated: 2026-08-28
---

Language gives each invented language a steady home — from a name and a few words to sounds, scripts, grammar, and examples — without pulling it away from the cultures and places that use it.

## Installation

Language is bundled with Daena. Enable or disable it from the application's module management surface; no separate package download is required.

## What it adds

A language starts as one shared record with an article and a few optional details. Vocabulary, sounds, writing, grammar, and samples grow around it as you need them, with each word kept as its own entry that can hold meanings, pronunciations, forms, and notes.

## Where it lives

Language keeps its vocabulary and language-specific work in its own space, while people, places, and other lore stay in the shared archive. A speaker is still a Lore person who can be linked to the languages they use. Turning Language off hides its views without deleting people or other archive records.
