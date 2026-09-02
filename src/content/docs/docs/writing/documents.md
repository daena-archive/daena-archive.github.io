---
title: Documents
description: Work with manuscripts and reference pages in Writing Studio.
sidebar:
  order: 1
---

Use **Manuscripts** for stories, essays, and other long-form work. Use **Reference pages** for research, plot notes, setting material, and supporting documents. These are the two Writing Studio templates; each record is a normal entity with its own document, relationships, and revision history.

Insert archive references through the `@` selection flow. Daena persists a canonical link using the selected entity's stable ID while keeping the displayed text readable and refreshable — renaming the entity later does not break the manuscript.

## Working habits

- **New follows the tab.** New in Writing Studio defaults to Manuscript or Reference according to the active tab.
- **Nest only when it means something.** A sketch or short story is a manuscript with no parent. A series uses `part_of` links only when you connect the parts; the grouped view then reads as a containment outline (series → book → chapter), not as grouping by type.
- **New in this manuscript** creates a child of the selected manuscript. Search stays a flat hit list and shows the parent path (for example Book 1 · Chapter 4).
- **Leaving with unsaved text** flushes or explicitly resolves the draft before identity or archive actions run. Rename and Archive stay available while autosave status is visible, and returning from Archive restores the entry to its correct tab.
- **Appearances run both ways.** A Lore entry's inspector lists the manuscripts that feature it, with parent paths, so you can move between world and prose.

<!-- TODO(screenshot): Writing Studio — manuscript with one @-reference chip and the manuscripts/reference tabs visible. -->
