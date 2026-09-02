---
title: Creating a language
description: Begin with an overview, then add vocabulary and linguistic structure as needed.
sidebar:
  order: 1
---

Create a Language entry and give it a clear name. Only the name is required — the template never inserts starter content to make the form look complete. Begin with prose and a small vocabulary, then add structure as the language demands it.

The module is intended to support both casual naming work and serious conlang development without requiring every project to fill every schema.

## Growing a language

- **Overview first.** Native name, aliases, status, family, and writing system are all optional fields on the Language entity; description lives in the normal entity document. Treat pronunciation and fictional notation as author text.
- **Lexicon next.** Words (lexemes) belong to exactly one Language — they are Language-owned records, not global entities — and form a searchable lexicon with translations and notes.
- **Structure when needed.** Add phonemes, phonology, orthographies, grammar, morphology, paradigms, and example sentences with translations. Each layer is available when the language needs it, never as a required checklist.

New Language uses the shared template dialog, and collection rows use the same Open, Edit identity, and Archive labels as other workspaces. Lexicon and grammar record deletion is record management, not entity archive. Custom Fields & Types overlays stay off for Language until the specialized Overview renders custom fields consistently.

<!-- TODO(screenshot): Language overview + lexicon — one language with overview fields and 3–4 lexemes with translations. -->
