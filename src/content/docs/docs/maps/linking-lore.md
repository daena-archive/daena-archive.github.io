---
title: Linking lore to maps
description: Connect shared records to geography without duplicating them.
sidebar:
  order: 2
---

Select an existing entity when capturing a location, or create the shared record first and return to the map. The resulting link points to the entity's stable identity rather than copying its title into provider data — so renames on either side never break the connection.

Entity map pins live in the Maps section of the inspector. Map-to-map fields apply only to map types; keep those separate from pins that point at people, places, events, and other lore.

## Module boundaries

Enabled modules can consume Maps' versioned navigation service. If Maps is disabled, its navigation contributions disappear while portable map interpretation data remains available for recovery and export.

Practical notes:

- Link the shared record where possible instead of typing a name onto the map. Typed names do not navigate, filter, or survive renames.
- If a pin is missing, check that Maps is enabled and that the map finished saving — archiving and identity edits are blocked while the editor holds unsaved or conflicting state.

<!-- TODO(screenshot): linking flow — map pin picker with entity search and one established pin showing the linked record name. -->
