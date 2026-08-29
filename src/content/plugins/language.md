---
name: Language
package: daena.language
author: daena-archive
summary: Vocabulary, phonology, orthographies, grammar, paradigms, and samples for fictional languages.
image: ../../assets/plugins/language.webp
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

Language contributes schemas and editing surfaces for lexemes, phonemes, phonology, orthographies, grammar, paradigms, and example samples.

## Installation

Language is bundled with Daena and can be enabled for projects that need structured conlang tools.

## Data ownership

Language-specific data remains in its declared portable namespace. Shared entities and relationships remain owned by Daena core.
