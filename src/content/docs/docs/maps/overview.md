---
title: Maps overview
description: Understand the current beta Maps workspace and its provider boundaries.
sidebar:
  order: 1
---

Maps is a beta workspace. It supports creating physical worlds and editing OpenLayers vector maps, including image import — and it is being actively improved, so expect details to evolve.

Map records use the same stable identity as other entities. Provider files remain opaque assets; Daena-owned locations, roles, dates, and relationships remain in the shared project model. Renaming a map or changing its identity metadata never replaces provider IDs, asset bytes, or derived projections.

## What a map holds

- A provider-neutral descriptor and default view.
- An ordered set of vector, raster, physical, and semantic layers.
- One canonical authored GeoJSON source where geometry you create lives.
- Provider-specific source assets when the map represents an imported image or a generated physical world.
- Stable links between map features and Daena entities.

Creating a map stays provider-specific — there is no generic map template. Existing map rows still offer Edit identity and Archive, except while the map is in a blocking save or conflict state. Archiving requires any pending editor work to be flushed or recovered first.

> Maps is beta. If a capability described on the marketing pages is marked Planned or Experimental, treat the status label as the authority.

<!-- TODO(screenshot): Maps collection + editor — one vector map with two entity pins and the layer list visible. Caption the beta status. -->
