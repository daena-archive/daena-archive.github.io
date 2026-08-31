# Daena Archive Website — Product, Content, and Visual Design Specification

> **Audience:** Codex / implementation agent
> **Purpose:** Define the website product, content architecture, visual system, interaction language, and page behavior.
> **Implementation target:** Static website hosted on GitHub Pages.
> **Status:** Reference specification. The website should follow this document unless implementation constraints require a documented deviation.

> **Visual references supplied separately:** two website mockup boards (light/dark direction) and one final hero-map artwork asset. See **Section 4.5** and **Section 15.1** for precedence and usage rules.

---

## 1. Product Goal

Build a public website for **Daena Archive** that:

1. Introduces Daena clearly to new users.
2. Shows the full breadth of the application without turning the home page into a dense feature catalogue.
3. Provides maintainable documentation and guides.
4. Hosts a static plugin marketplace/registry.
5. Hosts a community showcase.
6. Publishes a readable roadmap and project status.
7. Provides a useful FAQ.
8. Is lightweight, fast, accessible, responsive, and easy to update.
9. Feels unmistakably related to the Daena application while being more expressive and experimental than the application UI.
10. Can act as a visual laboratory from which successful ideas may later be adapted back into the desktop application.

The website is not intended to imitate a conventional SaaS landing page. It should feel like **a worldbuilding archive being opened and explored**.

---

## 2. Core Design Concept

The central visual idea is:

> **The application is the working archive. The website is the world contained inside that archive escaping onto the page.**

The desktop application is deliberately calm, functional, and restrained. The website should preserve its visual DNA while being freer with:

- composition;
- scale;
- layering;
- typography;
- spatial storytelling;
- illustrated data;
- motion;
- maps;
- relationship diagrams;
- timeline structures;
- fictional document fragments.

The site should feel modern and editorial, with an archival/cartographic atmosphere.

It must **not** look like:

- a medieval parchment-themed fantasy website;
- a game launcher;
- a generic SaaS template;
- an app-store clone;
- a dashboard;
- a page made from repeated equal-sized feature cards;
- a heavily animated WebGL demo.

Daena can represent fantasy, science fiction, alternate history, realistic fiction, game settings, and other kinds of worlds. The visual identity therefore must evoke **worldbuilding in the abstract**, not a specific genre.

---

## 3. Visual Reference: Existing Daena Application

The existing application provides the base identity.

Preserve these characteristics:

- warm ivory surfaces rather than pure white;
- dark forest-green navigation and controls;
- muted brass/ochre accents;
- restrained copper/brown accent text;
- dark neutral typography;
- serif editorial headings;
- clean sans-serif utility/body text;
- thin borders;
- subtle shadows;
- small uppercase labels with generous tracking;
- compact UI badges;
- soft but not excessively rounded corners;
- muted semantic colors for entity categories;
- large areas of whitespace;
- calm visual hierarchy.

The website should **extend** this language rather than reproduce the desktop application layout.

---

# 4. Technical Architecture

## 4.1 Required Architecture

Use:

- **Astro** as the site framework.
- **Astro Starlight** for the documentation section.
- **Markdown/MDX content collections** for content that editors will routinely change.
- **GitHub Actions** for build and deployment.
- **GitHub Pages** as the hosting target.

The result must be a statically generated site.

Avoid runtime backend requirements.

## 4.2 Static-first Principle

Prefer generated HTML and CSS.

Use JavaScript only where interaction materially improves the experience, for example:

- navigation;
- filtering/searching plugins;
- filtering roadmap entries;
- small interactive relationship diagrams;
- progressive image galleries;
- optional tabbed comparisons;
- subtle motion.

Do not ship a large client application merely to render static content.

## 4.3 GitHub Pages Constraints

The site must work correctly:

- at a custom domain;
- at a GitHub Pages project path such as `/daena-site/`;
- without server-side rendering;
- without runtime API routes.

All internal links and assets must respect Astro's configured `base` path.

Do not hard-code root-relative URLs that break project-site deployment.

## 4.4 Content Must Be Separate from Presentation

Routine content changes should not require editing layout components.

Prefer content such as:

```text
src/content/
  docs/
  features/
  plugins/
  showcase/
  faq/
  roadmap/
```

Components define presentation.

Markdown/MDX and structured frontmatter define content.

---

## 4.5 Supplied Visual References and Precedence

Codex will receive three visual files alongside this specification:

1. **Light website mockup board** — reference for the expressive editorial composition, typography scale, map/archival motifs, feature presentation, and general light-theme direction.
2. **Dark website mockup board** — reference for the dark-theme palette, nighttime-archive atmosphere, dark cards, plugin catalogue treatment, graph presentation, mobile theme examples, and theme switcher direction.
3. **Hero map artwork** — the actual artwork asset intended for the home-page hero. This is not merely a visual reference; use the supplied image directly.

When references disagree, use this precedence:

```text
Product/content behavior defined in this specification
→ supplied hero artwork for the hero image
→ website mockups for visual composition and mood
→ existing Daena application screenshots for shared visual DNA
```

The mockups are **directional references**, not pixel-perfect implementation contracts. Do not reproduce accidental generated text, fake metadata, fictional ratings, unsupported product claims, or placeholder UI from the mockups.

The existing Daena application should remain recognizable as the source of the website's visual language, but the website is intentionally allowed to be more editorial, layered, spatial, and expressive.

# 5. Information Architecture

Recommended primary routes:

```text
/
 /features
 /features/[slug]

 /docs
 /docs/...

 /plugins
 /plugins/[slug]

 /showcase
 /showcase/[slug]

 /roadmap
 /faq

 /community            optional dedicated page
 /download             optional dedicated page
```

Primary desktop navigation:

```text
DAENA ARCHIVE

Features    Docs    Plugins    Showcase    Roadmap

GitHub    Download
```

FAQ does not need to consume permanent primary-navigation space. Link it from:

- footer;
- documentation;
- relevant contextual sections.

Community may initially be represented in the footer and home page rather than as a primary navigation item.

---

# 6. Brand and Copy Voice

## 6.1 Voice

Daena copy should be:

- calm;
- precise;
- literary without becoming flowery;
- confident without hype;
- concise;
- technically honest;
- human;
- focused on ownership, craft, structure, and interconnected worlds.

Prefer words such as:

- world;
- archive;
- studio;
- lore;
- history;
- relationships;
- map;
- language;
- project;
- local;
- extension;
- record;
- structure.

Avoid generic startup language such as:

- revolutionary;
- supercharge;
- unlock your potential;
- game-changing;
- next-generation;
- ultimate;
- AI-powered worldbuilding platform.

Do not frame Daena primarily as a competitor to commercial services.

## 6.2 Product Naming

Use:

- **Daena Archive** for the product/brand where formal naming is appropriate.
- **Daena** in ordinary prose.

## 6.3 Core Brand Lines

Primary hero:

> **Build the world _behind the story._**

Hero eyebrow:

> **A private place for impossible worlds**

Hero supporting copy:

> Shape characters, places, factions, languages, maps, and history in one calm, local-first studio.

Preferred primary CTA:

> **Download Daena**

Secondary CTA:

> **Explore the studio**

Optional tertiary text link:

> View on GitHub

Alternative short brand statement:

> **Worlds are complicated. Keeping track of them shouldn't be.**

Use this further down the page rather than replacing the main hero.

---

# 7. Design Tokens

These values establish the direction. Exact values may be adjusted slightly during implementation for contrast, rendering, or component consistency, but the palette should remain recognizable.

## 7.1 Core Colors

The following colors are based on the current application screenshots and extended for the website.

```css
--paper: #f7f6f2;
--paper-raised: #fffefa;
--paper-warm: #f6f1e6;

--forest-950: #252f29;
--forest-900: #2c3931;
--forest-800: #34463b;
--forest-700: #3d5c49;

--brass: #cead75;
--brass-soft: #e5d0a6;

--copper: #ab7a49;
--copper-strong: #b86f32;

--ink: #25251f;
--ink-soft: #44443d;
--muted: #6d6d62;
--muted-light: #929087;

--line: #dcd8ce;
--line-soft: #e9e6de;
```

The site must support both **light and dark themes** in the first complete implementation.

Light remains the default visual reference for the main public-facing composition, while dark mode should be treated as a first-class designed theme rather than a mechanical inversion.

## 7.2 Semantic Entity Colors

Keep entity colors muted and secondary to the Daena palette.

Suggested starting values:

```css
--entity-artifact: #b86f43;
--entity-culture: #6f9b4b;
--entity-faction: #4a9c8b;
--entity-person: #6668c7;
--entity-place: #b95a9f;
--entity-event: #b58b3e;
--entity-concept: #70818b;
```

Use these mainly for:

- graph nodes;
- tiny category dots;
- restrained pills;
- small labels;
- diagram accents.

Do not turn large page areas into bright category colors.

## 7.3 Color Usage

**Paper** is the dominant canvas.

**Forest** anchors navigation, important controls, diagrams, and occasional full-bleed sections.

**Brass** is the primary action/accent color.

**Copper** is primarily editorial: emphasis, italic hero text, eyebrows, and special labels.

Do not make every CTA brass. Hierarchy must remain clear.

---

## 7.4 Dark Theme

Dark mode should feel like **a nighttime archive**, not an inverted light page.

Use deep green-black surfaces with warm ivory text and restrained gold/brass highlights.

Suggested starting tokens:

```css
--dark-bg: #0e1714;
--dark-surface: #131f1b;
--dark-surface-2: #182720;
--dark-surface-3: #203129;

--dark-ink: #f2eee4;
--dark-ink-soft: #d8d1c3;
--dark-muted: #a49e92;

--dark-line: #31443a;
--dark-line-soft: #26372f;

--dark-brass: #d9a552;
--dark-brass-soft: #e4c786;
--dark-copper: #c58a4a;
```

These are starting values, not immutable constants. Tune them for accessibility and visual consistency.

### Dark-theme rules

- Prefer deep green/charcoal over neutral black.
- Keep the editorial serif typography warm rather than stark white.
- Brass/gold accents may be slightly brighter than in light mode.
- Borders should remain visible but subdued.
- Cards should separate through border and tonal elevation rather than heavy shadows.
- Preserve entity-category differentiation, but tune saturation/brightness so nodes remain readable against dark green.
- Map and cartographic visuals should become darker/warmer where needed rather than being simply CSS-inverted.
- Avoid pure-white surfaces inside the dark theme except for deliberate high-contrast artifacts or imagery.
- Do not introduce neon accents.
- Documentation must also support the same theme system.

## 7.5 Theme Selection and Persistence

Provide a theme control in the global header.

Supported modes:

```text
Light
Dark
System
```

Behavior:

1. If the user has explicitly selected a theme before, restore that preference.
2. Otherwise follow `prefers-color-scheme`.
3. Persist the explicit user preference locally.
4. Apply the theme before first paint where practical to avoid a visible flash of the wrong theme.
5. The theme toggle must be keyboard accessible and have an accessible label.
6. Theme choice must not require an account or network request.

A compact sun/moon/system control is appropriate. Do not allow the theme control to dominate navigation.

# 8. Typography

## 8.1 Typeface Strategy

Use two complementary type systems:

### Display / Editorial Serif

Recommended:

- **Newsreader**

Fallback:

```css
"Newsreader", Georgia, "Times New Roman", serif
```

Use for:

- hero headings;
- major section headings;
- showcase titles;
- plugin titles when appropriate;
- pull quotes;
- fictional archive excerpts;
- world names.

The serif may use italic styles prominently.

### UI / Body Sans

Recommended:

- **Inter**

Fallback:

```css
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
"Segoe UI", sans-serif
```

Use for:

- body copy;
- navigation;
- metadata;
- buttons;
- filters;
- documentation utility UI;
- badges.

If font hosting is undesirable, use robust system fallbacks. Do not block rendering on third-party font delivery.

## 8.2 Scale

Prefer responsive `clamp()` values.

Suggested hierarchy:

```text
Hero display:        64–136 px
Major page title:    48–88 px
Section title:       38–64 px
Feature title:       32–52 px
Card title:          22–32 px
Body large:          19–22 px
Body:                16–18 px
Small:               13–15 px
Eyebrow/meta:        11–13 px
```

Hero headings may deliberately occupy multiple lines.

Do not compress typography merely to keep everything above the fold.

## 8.3 Eyebrows

A characteristic Daena label:

```text
LORE LIBRARY
MAPS · GENERATION
PRIVATE STUDIO
PLUGIN REGISTRY
```

Style:

- uppercase;
- sans-serif;
- semibold;
- 0.14em–0.22em letter spacing;
- copper or muted forest;
- small size.

## 8.4 Italics

Italic serif typography is an important website motif.

Example:

```text
Build the world
behind the story.
```

The second phrase may use copper italic serif.

Use italics deliberately rather than decorating every heading.

---

# 9. Layout System

## 9.1 Site Width

Use a large desktop canvas.

Suggested values:

```text
Maximum general width:         1440 px
Primary content width:         1240–1320 px
Reading/documentation width:   720–820 px
```

## 9.2 Grid

Use a 12-column grid on desktop.

The site should use asymmetry intentionally:

- 5/7;
- 4/8;
- 7/5;
- overlapping columns;
- oversized artwork extending beyond the grid.

Avoid repeated 3-column SaaS card layouts.

## 9.3 Spacing

Use generous vertical rhythm.

Suggested section spacing:

```text
Desktop:   120–200 px
Tablet:     88–140 px
Mobile:     64–96 px
```

Some narrative moments may intentionally use more whitespace.

## 9.4 Borders

Primary border:

```text
1px solid var(--line)
```

Use borders more often than drop shadows.

## 9.5 Radius

Suggested:

```text
Small controls:       8 px
Cards:               12–16 px
Large frames:        18–24 px
Pills:               999 px
```

Do not make the site excessively rounded.

## 9.6 Shadows

Use sparingly.

Shadows are mainly for:

- floating archive fragments;
- overlapping screenshots;
- active layered compositions.

They should be broad and subtle rather than dark.

---

# 10. Visual Motifs

The website needs a small set of repeated motifs to create identity.

## 10.1 Geometric World Motif

Develop the existing Daena welcome-screen motif:

- one large ochre/brass circle;
- one smaller forest circle;
- one floating ivory archive card.

Reuse and evolve these shapes.

They can become:

- planets/celestial forms;
- nodes;
- locations;
- timeline markers;
- map forms;
- abstract concepts.

Do not use arbitrary decorative blobs unrelated to the system.

## 10.2 Relationship Lines

Thin lines and nodes are a core visual device.

Use them to connect:

- people;
- places;
- artifacts;
- cultures;
- sections of the page;
- captions and archive fragments.

Relationship diagrams may gently animate into view.

## 10.3 Cartographic Language

Use subtle:

- contour lines;
- coastlines;
- coordinate marks;
- map grids;
- scale ticks;
- map labels;
- compass-like geometry.

Keep opacity low.

The page should not look like a literal topographic map everywhere.

## 10.4 Archival Fragments

Small floating cards may display:

- entity type;
- entity name;
- one lore line;
- date;
- relationship;
- language fragment;
- coordinates.

Example:

```text
ELDERMERE · PLACE

The sea remembers
what kingdoms forget.

Fragments · 12
```

## 10.5 Fine Texture

A very subtle paper/noise texture is allowed.

Requirements:

- extremely low contrast;
- no faux parchment;
- no stained edges;
- no distressed medieval effect;
- no noticeable performance cost.

---

# 11. Imagery and Product Presentation

## 11.1 Product Screenshots

Use real Daena screenshots, but do not put every screenshot into a generic browser/device frame.

Prefer:

- selective crops;
- isolated UI fragments;
- editor panels;
- relationship fields;
- graph elements;
- plugin cards;
- maps;
- timeline pieces.

Use full-window screenshots only where understanding overall workspace composition matters.

## 11.2 UI Fragment Treatment

A product fragment may:

- float over the background;
- overlap a diagram;
- break out of the grid;
- have a subtle shadow;
- be masked/cropped;
- have a small explanatory annotation.

Do not falsify the product UI.

Decorative surroundings may be stylized, but the application itself should remain recognizable.

## 11.3 No Generic Fantasy Stock Art

Avoid generic:

- castles;
- dragons;
- knights;
- fantasy landscapes;
- AI-generated character portraits used as brand filler.

Daena itself should provide the visual material.

Community showcase content is the appropriate place for user-created artwork.

---

## 11.4 Supplied Hero Artwork

The supplied hero-map image is a production asset.

Use it directly instead of recreating the map in CSS, SVG, canvas, or generative code.

Requirements:

- Treat the source image as the canonical hero artwork.
- The composition intentionally leaves substantial negative space on the left and concentrates the detailed map on the right.
- Keep the left side available for hero copy.
- Preserve the map's fine linework, subdued teal water, forest terrain, mountains, navigation arcs, and warm paper texture.
- Do not bake text, buttons, navigation, badges, or the Eldermere quote card into the image.
- Do not bake theme controls into the image.
- The quote/archive card is rendered by the website as a real HTML component over the artwork.
- Avoid applying strong color filters that destroy the original illustration.

### Desktop positioning

The artwork should fill the hero visual area while preserving the intended right-heavy composition.

Prefer `object-fit: cover` or an equivalent responsive treatment only if the crop remains faithful. Adjust `object-position` rather than scaling the map awkwardly.

The hero text should occupy the left side and must remain readable without an opaque panel behind the entire copy block.

### Quote-card overlay

Render an `ArchiveCard` over the map.

Reference content:

```text
ELDERMERE

The sea remembers
what kingdoms forget.

Fragments · 12
```

The card:

- must be HTML, not part of the image;
- should use the light raised-paper surface in light mode;
- should use a restrained dark-surface treatment in dark mode;
- may use a subtle shadow;
- must remain independently repositionable across breakpoints;
- should not obscure the map's most important focal detail.

### Mobile behavior

Do not shrink the full desktop composition until it becomes illegible.

Instead:

- crop/reposition the supplied artwork to retain a strong map detail;
- keep the headline and CTAs above or beside the crop as space allows;
- move the archive card independently;
- preserve enough negative space that the hero remains calm;
- never render tiny unreadable map annotations merely to preserve the desktop frame.

### Dark mode

The same source artwork may be used in both themes.

For dark mode, prefer a subtle overlay/tonal treatment around the surrounding hero canvas rather than destructive inversion of the map itself. If a dark-specific art treatment is introduced later, it should remain compositionally identical enough that theme switching does not cause major layout shifts.

# 12. Motion and Interaction

Motion should make the archive feel alive, not turn the site into a demo reel.

## 12.1 Allowed Motion

Examples:

- graph lines draw into view;
- nodes fade/scale in slightly;
- timeline points reveal as the section enters;
- map labels fade in;
- archive cards move by a few pixels with scroll;
- hero geometric shapes drift subtly;
- section content enters with opacity + short translation;
- hover states expose metadata.

## 12.2 Timing

Suggested:

```text
UI hover/focus:        120–220 ms
Card transition:       180–280 ms
Editorial reveal:      450–800 ms
Diagram sequence:      up to ~1000 ms
```

## 12.3 Rules

Do not:

- hijack scroll;
- lock users into scroll sequences;
- make text unreadable until animation completes;
- use constant looping movement;
- use large WebGL scenes;
- depend on animation for meaning.

Respect:

```css
@media (prefers-reduced-motion: reduce);
```

All content must remain understandable without animation.

---

# 13. Header and Navigation

## 13.1 Initial State

The top navigation may begin visually spacious on the home page.

Use:

- wordmark/logo on the left;
- primary navigation centered or adjacent;
- GitHub + Download on right.

## 13.2 Scrolled State

After scrolling, the header may become more compact and adopt cues from Daena's application chrome:

- warm ivory surface;
- thin border;
- reduced height;
- compact controls;
- active item highlighted with brass/forest treatment.

Sticky navigation is acceptable.

The global header must include the theme selector defined in **Section 7.5**. In visual treatments where a single icon is shown, it should open or cycle through an accessible Light/Dark/System choice rather than silently assuming only two states.

## 13.3 Mobile

Use a straightforward menu.

Do not try to reproduce the app sidebar on mobile.

---

# 14. Footer

The footer can use a dark forest background.

Recommended groups:

```text
Daena Archive

Product
- Features
- Download
- Roadmap
- Plugins

Learn
- Documentation
- Guides
- FAQ

Community
- GitHub
- Discord
- Showcase
- Contributing

Project
- License
- Releases
- Source
```

Closing line:

> Built for worlds that deserve to be remembered.

Also display the open-source/license statement where appropriate.

---

# 15. Home Page Specification

The home page should be a narrative introduction rather than an exhaustive reference.

---

## 15.1 Hero

### Eyebrow

> A private place for impossible worlds

### Heading

> **Build the world _behind the story._**

The italic phrase should use the copper editorial accent.

### Supporting Copy

> Shape characters, places, factions, languages, maps, and history in one calm, local-first studio.

### Primary CTA

> Download Daena

### Secondary CTA

> Explore the studio

### Optional Link

> View on GitHub

### Visual

Use the **supplied hero map artwork** as the main hero visual.

The artwork is the canonical production image for this section and should be presented according to **Section 11.4**.

Overlay website-native elements on top of or around it:

- the Eldermere `ArchiveCard`;
- optional small relationship/entity markers if they remain restrained;
- very subtle cartographic/connection annotations where they add value.

Do **not** place the quote text inside the image asset.

The left side remains primarily typographic; the map occupies and visually expands through the right side. The hero should feel like an archive opening into a world, not like a screenshot placed beside marketing copy.

The geometric circle motif from the application remains part of the broader design vocabulary, but it is no longer required to dominate the hero now that final hero artwork has been supplied.

---

## 15.2 Product Introduction

### Eyebrow

> ONE WORLD · MANY THREADS

### Heading

> **Worlds are complicated. _Keeping track of them shouldn't be._**

### Copy

> Daena brings the pieces of a world into one connected archive. Lore, history, maps, languages, writing, and extensions remain close enough to inform one another without forcing your work into a single rigid workflow.

Visual direction:

- small product fragments begin appearing;
- lines connect fragments;
- the composition transitions into the Lore feature.

---

## 15.3 Lore / Relationships Feature

### Eyebrow

> LORE · RELATIONSHIPS

### Heading

> **Nothing in your world exists in isolation.**

### Copy

> Record people, places, cultures, artifacts, factions, concepts, and the details that make them distinct. Connect them through structured relationships, then move through the archive without losing the larger picture.

### Supporting Line

> From a single artifact to an entire civilization, Daena keeps context close.

### Visual

Use the real world graph as the primary inspiration.

Show a small connected network involving:

- Mira Vale;
- Amulet of Tides;
- Eldermere;
- Coastfolk Culture;
- Lord Ashford;
- Captain Elian Rook.

Allow muted category colors.

A cropped entity editor/inspector may overlap the graph.

### CTA

> Explore Lore

---

## 15.4 Timeline / Calendar Feature

### Eyebrow

> HISTORY · TIME

### Heading

> **Give history somewhere to happen.**

### Copy

> Build timelines for events, eras, characters, and places. Use calendars when your world needs them, or keep dates simple when it does not. History should add context—not bookkeeping.

### Visual

The section itself becomes a timeline.

Example fictional entries:

```text
812 — Founding of Eldermere
834 — The Crown of Salt changes hands
847 — The War of Tides
861 — The Lantern Marsh Accord
```

Dates are demo content only.

### CTA

> Explore Timelines

---

## 15.5 Maps Feature

### Eyebrow

> MAPS · PLACE

### Heading

> **Every world needs somewhere to exist.**

### Copy

> Keep maps beside the lore they describe. Link places and entities to geography, explore generated worlds, and build visual layers that turn a map into part of the archive.

### Important Product Honesty

Map capabilities may have different maturity levels.

Always display status labels where necessary:

- Stable;
- Beta;
- Experimental;
- Planned.

Do not market roadmap concepts as released features.

### Visual

Use a full-width cartographic moment.

Possible progression:

```text
physical structure → terrain → lore/political overlays
```

This progression may preview future direction only when visibly marked as roadmap/experimental.

### CTA

> Explore Maps

---

## 15.6 Language Feature

### Eyebrow

> LANGUAGE · CULTURE

### Heading

> **Let your cultures speak for themselves.**

### Copy

> Develop sounds, words, grammar, and writing systems without separating language from the people and places that use it. Start with a name and a few notes, or go deeper when the language demands it.

### Visual

Use large typographic language specimens.

Example fictional content:

```text
vaerith

/ˈvæː.rɪθ/

sea · deep water · the western ocean
```

This is decorative demo content, not a real Daena language.

Small grammatical or lexical annotations can sit around the main word.

### CTA

> Explore Languages

---

## 15.7 Writing Feature

### Eyebrow

> WRITING · CONTEXT

### Heading

> **Write with the world beside you.**

### Copy

> Keep prose close to the people, places, history, and terminology that shape it. Daena is a world archive first, but the archive should never be far away when it is time to write.

### Visual

This section should become visually quieter.

Use:

- one large editorial writing surface;
- a few small linked lore references;
- considerable whitespace.

### CTA

> Explore Writing

---

## 15.8 Local-first / Ownership Section

This should be a major philosophical moment.

Prefer a dark forest section.

### Eyebrow

> YOUR ARCHIVE

### Heading

> **Your world belongs to you.**

### Copy

> Daena is built around local projects, open formats, and user-controlled files. Your archive should remain useful outside the application that created it.

Additional copy:

> Keep projects on your own machine. Use Git when you want history and remotes. Work with plain-text representations where possible. Extend the studio without giving up ownership of the archive.

Do not promise technical behavior that is not currently implemented. Adjust copy as storage features evolve.

### Supporting Labels

Possible compact items:

```text
Local-first
Open source
Git-friendly
Portable projects
No subscription tier
```

Only display claims that remain true at release time.

---

## 15.9 Snapshots / Project History

### Eyebrow

> SNAPSHOTS · HISTORY

### Heading

> **Your project has a history too.**

### Copy

> Browse snapshots of the archive, inspect earlier states, and recover work when the project changes direction. World history belongs in the Timeline. Project history belongs here.

This distinction is important.

### Visual

Show snapshots/commit history as stacked archive states.

### CTA

> Learn about snapshots

---

## 15.10 Plugins

### Eyebrow

> EXTENSIONS

### Heading

> **Make the studio your own.**

### Copy

> Daena's plugin system lets modules and extensions add capabilities without turning every idea into part of the core application. Browse official and community plugins, inspect what they can access, and install only what belongs in your workflow.

### Visual

Use catalogue cards rather than an app-store layout.

Show several fictional/real plugin examples only when they exist in the registry.

### CTA

> Browse plugins

---

## 15.11 Optional AI Section

AI is a feature, not the identity of Daena.

### Eyebrow

> OPTIONAL AI

### Heading

> **Help when you ask for it.**

### Copy

> Use language models for rewriting, expansion, or context-aware assistance when they are useful. Keep the feature optional, and choose local models when you want the workflow to remain on your machine.

Do not position Daena as an "AI worldbuilder."

### CTA

> Read about AI in Daena

---

## 15.12 Showcase Teaser

### Eyebrow

> FROM THE COMMUNITY

### Heading

> **See what other worldbuilders are making.**

### Copy

> Every archive develops its own shape. Explore worlds, maps, languages, histories, and projects created with Daena.

Display 2–4 featured showcase entries.

### CTA

> Visit the showcase

---

## 15.13 Open-source CTA

Final home-page CTA.

### Heading

> **Build your archive. Keep it yours.**

### Copy

> Daena Archive is free and open source. Download the application, explore the source, or help shape what comes next.

### Actions

> Download Daena
> View on GitHub
> Read the documentation

---

# 16. Features Index

Route:

```text
/features
```

This page must demonstrate the **whole extent of Daena** without overwhelming the home page.

## 16.1 Intro Copy

### Eyebrow

> THE STUDIO

### Heading

> **A place for every layer of a world.**

### Copy

> Daena is organized around connected modules and capabilities. Use only what your project needs, then add more structure as the world grows.

## 16.2 Grouping

Prefer meaningful groups rather than one flat card grid.

### World Model

- Lore
- Concepts/entities
- Relationships
- World graph
- Custom schema/templates

### Time

- Timeline
- Events
- Eras
- Calendars

### Place

- Maps
- Locations
- Generated worlds
- Map-linked lore
- Optional map systems/integrations

### Language

- Languages
- Phonology
- Vocabulary
- Grammar
- Writing systems, when available

### Writing

- Long-form writing
- Contextual reference
- Editor tools

### Archive

- Local-first storage
- Search
- Git integration
- Snapshots
- Import/export
- Project portability

### Extensions

- Plugins
- Plugin schemas
- Community extensions
- Optional AI integration

## 16.3 Feature Status

Every capability that is not plainly stable should display a status.

Allowed statuses:

```text
Stable
Beta
Experimental
Planned
Exploring
```

Definitions:

- **Stable:** intended for normal production use.
- **Beta:** usable, but behavior/data format may still change.
- **Experimental:** available to interested users with known limitations.
- **Planned:** committed roadmap direction, not currently available.
- **Exploring:** idea under consideration; no promise of implementation.

Do not blur these categories for marketing.

---

# 17. Feature Detail Pages

Route:

```text
/features/[slug]
```

Feature pages should be editorial product explanations, not developer documentation.

Recommended structure:

1. eyebrow + title;
2. one-sentence purpose;
3. large visual;
4. "What it lets you do";
5. workflow;
6. connection to other Daena systems;
7. current status/limitations;
8. screenshots;
9. links to user guides;
10. relevant roadmap items.

Example Lore intro:

> **Build an archive that understands connections.**
> Lore gives the people, places, artifacts, cultures, factions, and ideas in a world a structured home without reducing them to isolated pages.

---

# 18. Documentation

Route:

```text
/docs
```

Use Starlight.

Documentation should deliberately be calmer than marketing pages.

It should feel closer to the Daena application:

- ivory background;
- forest navigation accents;
- serif document headings;
- restrained brass highlights;
- excellent readability;
- conventional documentation information architecture;
- full Light/Dark/System theme support using the shared website theme tokens.

## 18.1 Suggested Structure

```text
Getting Started
  Installing Daena
  Creating a Project
  Your First World
  Understanding the Workspace

Core Concepts
  Entities and Concepts
  Fields and Schemas
  Relationships
  Search and Navigation

Lore
  Creating Entries
  Custom Types
  Relationships
  World Graph
  Article View

Timeline
  Events
  Eras
  Dates
  Calendars

Maps
  Overview
  Supported Map Systems
  Linking Lore to Maps
  Experimental Features

Languages
  Creating a Language
  Sounds
  Vocabulary
  Grammar
  Writing Systems

Writing
  Documents
  Referencing the Archive

Snapshots and Git
  Snapshots
  Browsing Previous States
  Git Integration
  Remotes
  Recovery

AI
  Enabling AI
  Local Models
  Remote Providers
  Rewrite Tools
  Context
  Privacy Considerations

Plugins
  Installing Plugins
  Permissions/Capabilities
  Managing Plugin Data

Import and Export
  Markdown
  Documents
  Obsidian
  Other Formats

Project Storage
  How Projects Are Stored
  Database and Plain Text
  Conflicts
  Rebuilding Project Data
  Backups

Developer
  Plugin Development
  Schemas
  APIs
  Packaging
  Contributing

Troubleshooting
```

Only include sections corresponding to actual released functionality.

---

# 19. Plugin Marketplace

Route:

```text
/plugins
```

This is a **static registry/catalogue**, not a commercial marketplace.

## 19.1 Visual Direction

Think:

> archival catalogue / extension registry

Not:

> mobile app store

Cards should be clean and information-rich.

Example:

```text
MAPS · GENERATION

Atlas

Detailed terrain generation
for Daena worlds.

daena.atlas
v0.4.1

View plugin →
```

## 19.2 Filters

Support client-side filters such as:

- category;
- official/community;
- bundled/optional;
- compatibility;
- status.

Include text search when the catalogue becomes large enough to justify it.

## 19.3 Plugin Detail Page

Show:

- name;
- icon;
- author;
- repository;
- current version;
- supported Daena versions;
- categories;
- description;
- screenshots;
- capabilities/permissions;
- installation instructions;
- update date;
- links to documentation;
- source/license.

## 19.4 Registry Workflow

First iteration:

```text
Plugin author submits registry contribution
→ review
→ merge
→ site rebuild
→ plugin appears
```

The registry should be designed so Daena itself could later consume the same metadata.

No runtime database is required.

## 19.5 Suggested Content Schema

Example frontmatter:

```yaml
name: Atlas
slug: atlas
package: daena.atlas
author: daena-archive
summary: Detailed terrain generation for Daena worlds.
repository: https://github.com/...
homepage:
version: 0.4.1
daenaCompatibility: '>=0.7 <0.9'
categories:
  - maps
  - generation
status: beta
official: true
bundled: false
featured: true
icon: /plugins/atlas/icon.svg
screenshots:
  - /plugins/atlas/01.webp
capabilities:
  - maps
license: Apache-2.0
```

Do not hard-code registry entries into page components.

---

# 20. Community Showcase

Route:

```text
/showcase
```

The showcase is intentionally more expressive than documentation or the marketplace.

It should resemble an editorial collection/exhibition.

## 20.1 Index

Use large visuals and varied layouts.

Show:

- cover/map/screenshot;
- project title;
- creator;
- short description;
- useful tags;
- a few world statistics only if provided by the creator.

Avoid turning it into a social feed.

## 20.2 Showcase Detail

Possible structure:

1. full-width hero image/map;
2. title and creator;
3. project statement;
4. selected screenshots;
5. world/lore excerpts;
6. maps;
7. languages/timeline excerpts;
8. external creator links;
9. "Built with Daena" footer.

## 20.3 Submission Model

A showcase entry should be content-driven.

Suggested schema:

```yaml
title: The Glass Coast
slug: the-glass-coast
creator: Example Creator
summary: A maritime setting shaped by drowned kingdoms and competing coastal cultures.
cover: /showcase/glass-coast/cover.webp
featured: true
tags:
  - fantasy
  - conlang
  - maps
links:
  website:
  repository:
  social:
screenshots:
  - /showcase/glass-coast/01.webp
```

Body content lives in Markdown/MDX.

Community submissions can later be handled through pull requests or another moderated workflow.

---

# 21. Roadmap

Route:

```text
/roadmap
```

The roadmap is a product-direction page, not an issue tracker.

## 21.1 Intro

### Eyebrow

> WHERE DAENA IS GOING

### Heading

> **Built in public, one layer at a time.**

### Copy

> Daena grows through practical iterations. This roadmap shows what is stable, what is being tested, and what is still only an idea.

## 21.2 Status Lanes

Use:

```text
Stable
Beta
Experimental
Planned
Exploring
```

Do not present dates unless there is a real commitment.

Prefer product milestones and outcomes over implementation tasks.

Bad:

> Rewrite parser service.

Good:

> Richer document import with Markdown and Obsidian support.

## 21.3 Roadmap Item Schema

```yaml
title: Atlas terrain detail
slug: atlas-terrain-detail
status: planned
area: maps
summary: Generate detailed terrain above the physical-world model for high-resolution viewing and export.
issue:
spec:
order: 30
```

Roadmap items may link to:

- GitHub issues;
- design/spec documents;
- discussions.

---

# 22. FAQ

Route:

```text
/faq
```

Use a simple readable layout. Accordions are acceptable, but content must remain keyboard accessible and indexable.

Suggested initial copy:

## What is Daena Archive?

Daena is a local-first, open-source studio for building and organizing fictional worlds. It brings lore, relationships, history, maps, languages, writing, and extensions into one connected project.

## Is Daena free?

Yes. Daena is free and open source. There is no subscription or premium feature tier.

## Where is my project stored?

Daena is designed around local projects and user-controlled data. The exact storage format may evolve, but portability and access to your own archive are core design goals.

## Does Daena require an internet connection?

The core application is designed for local use. Some optional features may require network access—for example remote AI providers, Git remotes, downloads, or external integrations.

## Does Daena use AI?

Only if you choose to use it. AI features are optional and are intended to assist tasks such as rewriting or context-aware generation. Local model support can keep model interaction on your machine.

## Can I use Git with a Daena project?

Yes. Git integration is part of Daena's project-history workflow and can be used for snapshots and remotes. Git history represents the history of the project itself, while in-world history belongs in Daena's Timeline.

## Can I extend Daena?

Yes. Daena has a plugin system for adding modules, schemas, integrations, and other capabilities without requiring every feature to become part of the core application.

## Can I import an existing world?

Import support is being developed incrementally. Documentation and the roadmap should list the formats currently supported. Never list an importer here until it is actually available.

## Is Daena collaborative?

Daena is primarily designed as a local-first studio rather than a real-time collaborative service. Advanced users can use Git-based workflows where appropriate. Collaboration capabilities may evolve separately.

## Which operating systems are supported?

Do not hard-code an answer. Pull this text from current release/platform metadata or maintain it as one central content value so the FAQ cannot become stale.

---

# 23. Community

A dedicated `/community` page is optional for the first iteration.

If present:

### Heading

> **Build worlds together, even when the archives are your own.**

Include:

- GitHub;
- Discord;
- contribution guide;
- plugin submissions;
- showcase submissions;
- bug reports;
- feature discussions.

Do not add meaningless community metrics.

---

# 24. Download Experience

The home-page Download CTA should lead either to:

- a dedicated `/download` page; or
- GitHub Releases.

A dedicated page is preferable once platform-specific builds need explanation.

The site must not invent a supported platform or package format.

Release information should be easy to update from one source.

---

# 25. Consistent Demonstration World

Use one coherent fictional demonstration world across the site rather than unrelated placeholder text.

Existing screenshot-derived names provide a useful seed:

- Eldermere;
- Amulet of Tides;
- Mira Vale;
- Lord Ashford;
- Captain Elian Rook;
- Coastfolk Culture;
- Highland Culture;
- Frostgate Pass;
- Lantern Marsh;
- Crown of Salt;
- The Glass Coast;
- The Sunken Archive;
- The Tidewatch;
- The Ember Court.

This gives feature sections narrative continuity.

Example recurring archive line:

> **Eldermere**
> The sea remembers what kingdoms forget.

Example artifact copy:

> **Amulet of Tides**
> The Amulet of Tides grants its bearer the ability to breathe beneath the waves.

Keep demo lore deliberately brief. The purpose is to make the product feel coherent, not to build a complete fictional canon.

---

# 26. Reusable Components

Implement a small, deliberate component system.

Recommended components:

```text
SiteHeader
SiteFooter
Wordmark

Eyebrow
DisplayHeading
SectionIntro
EditorialQuote

PrimaryButton
SecondaryButton
TextLink

StatusBadge
EntityBadge
MetadataRow

ArchiveCard
EntityCard
PluginCard
ShowcaseCard
RoadmapCard

ProductFragment
ScreenshotFrame
AnnotatedScreenshot

RelationshipGraph
RelationshipNode
RelationshipEdge

TimelineStrip
TimelineEvent

MapStage
MapLabel
CoordinateLabel

LanguageSpecimen

FeatureStage
FeatureNavigation
FeatureStatus

FilterBar
SearchField
TagFilter

Callout
Prose
Figure
Caption

FinalCTA
```

Do not create one-off components when a composition can use the shared primitives.

Conversely, do not force every page into identical cards.

---

# 27. Content Models

Use Astro content collections and validate frontmatter.

## 27.1 Feature

Suggested fields:

```yaml
title:
slug:
eyebrow:
summary:
description:
status:
area:
order:
featured:
icon:
hero:
screenshots:
docs:
roadmap:
```

## 27.2 FAQ

```yaml
question:
order:
category:
```

Body contains answer.

## 27.3 Roadmap

```yaml
title:
slug:
summary:
status:
area:
order:
issue:
spec:
```

## 27.4 Showcase

See Section 20.

## 27.5 Plugin

See Section 19.

---

# 28. Documentation vs Marketing Content

Keep these concerns separate.

**Feature pages answer:**

> Why would I use this? What can it do?

**Documentation answers:**

> How do I use it?

**Roadmap answers:**

> What exists now and what may come next?

**Plugin pages answer:**

> What does this extension add and can I trust/install it?

Do not duplicate long instructions across product pages and docs.

---

# 29. Responsive Design

Mobile must preserve the editorial identity rather than collapsing into generic stacked cards.

## 29.1 Hero

Desktop:

- large split/asymmetric composition.

Mobile:

- typography first;
- geometric motif below/behind;
- archive card remains visible;
- no unreadably tiny UI screenshot.

## 29.2 Feature Sections

When wide compositions collapse:

- preserve one dominant visual;
- move metadata below;
- reduce overlapping;
- remove non-essential decorative lines.

## 29.3 Timeline

Desktop may be horizontal.

Mobile should become vertical rather than forcing horizontal scrolling.

## 29.4 Graphs

Show a simplified graph on small screens.

Do not render an unreadable desktop graph shrunk to 320 px.

## 29.5 Navigation

Use a conventional accessible mobile menu.

---

# 30. Accessibility

Meet WCAG AA as a baseline.

Requirements:

- semantic landmarks;
- correct heading hierarchy;
- keyboard-accessible navigation;
- visible focus states;
- sufficient text contrast;
- no information conveyed only by color;
- meaningful alt text for screenshots where appropriate;
- decorative visuals marked as decorative;
- accessible accordions;
- reduced-motion support;
- no hover-only content;
- links distinguishable from surrounding prose;
- adequate touch targets.

The copper and brass tones may need darker variants for small text. Do not preserve a token at the cost of contrast.

---

# 31. Performance

The site should feel as lightweight as the product philosophy.

Targets/guidelines:

- static HTML by default;
- minimal JavaScript;
- responsive images;
- AVIF/WebP where suitable;
- lazy-load below-fold imagery;
- explicit image dimensions;
- avoid large autoplay video;
- avoid heavy animation libraries unless justified;
- no WebGL dependency for decorative effects;
- no huge client-side framework bundle.

Aim for good Core Web Vitals:

```text
LCP < 2.5 s on a reasonable mobile connection
CLS < 0.1
INP comfortably within "good" range
```

Treat these as engineering targets, not guarantees.

---

# 32. SEO and Sharing

Implement:

- unique page titles;
- descriptions;
- canonical URLs;
- Open Graph metadata;
- social preview images;
- sitemap;
- robots metadata;
- structured headings;
- descriptive link text.

Feature, plugin, showcase, and roadmap detail pages should generate metadata from content frontmatter.

Docs should remain indexable.

---

# 33. Search

Documentation search is required.

Marketplace/showcase search can be added as datasets grow.

Global site search is optional initially.

If implementing global search, prefer a static index rather than a hosted search backend.

---

# 34. Content Editing Workflow

A contributor should be able to update routine site content by editing Markdown/MDX and assets.

Examples:

```text
Add FAQ:
  create src/content/faq/<slug>.md

Add feature:
  create src/content/features/<slug>.mdx

Add plugin:
  create registry/content entry + screenshots

Add showcase:
  create content entry + images

Update roadmap:
  edit/create roadmap content item
```

Do not require editing a TypeScript component merely to change a paragraph.

---

# 35. Implementation Quality Rules

Codex should:

1. Build reusable primitives before duplicating styles.
2. Keep content data out of layout components.
3. Use CSS variables for design tokens.
4. Keep the site deployable to GitHub Pages from the beginning.
5. Test project-site `base` path behavior.
6. Preserve semantic HTML.
7. Avoid excessive dependencies.
8. Avoid client-side rendering for static sections.
9. Implement reduced-motion behavior while adding animation.
10. Keep product claims status-aware.
11. Keep visual experimentation coherent with the design system.
12. Avoid placeholder lorem ipsum when copy is supplied by this specification.
13. Use the demo world consistently where fictional data is required.
14. Keep screenshots replaceable through content/configuration.
15. Keep external links such as GitHub, Discord, releases, and downloads in central site configuration.

---

# 36. Anti-patterns

Do not implement:

- a full-screen video hero;
- giant gradient blobs unrelated to Daena;
- neon colors;
- glassmorphism as the main visual style;
- excessive backdrop blur;
- generic "three features in cards" sections repeated down the page;
- fantasy parchment;
- medieval ornamental borders;
- fake handwritten notes everywhere;
- generic AI-generated fantasy art;
- autoplay audio;
- scroll-jacking;
- custom cursor effects;
- a massive JavaScript animation runtime;
- fake testimonials;
- fake download counts;
- fake plugin ratings;
- fake community metrics;
- unimplemented roadmap features presented as available.
- hero quote text, buttons, or navigation baked into the supplied hero image.
- CSS inversion of the hero artwork as the dark-mode strategy.

---

# 37. Recommended Initial Build Order

## Phase 1 — Foundation

- Astro project;
- global layout;
- design tokens;
- Light/Dark/System theme architecture and persistence;
- typography;
- header/footer;
- content collections;
- GitHub Pages deployment;
- responsive primitives.

## Phase 2 — Core Public Site

- home;
- features index;
- feature detail pages;
- FAQ;
- roadmap.

## Phase 3 — Documentation

- Starlight integration;
- theming;
- documentation structure;
- search.

## Phase 4 — Community Content

- plugin registry;
- plugin pages;
- filters/search;
- showcase;
- showcase detail pages.

## Phase 5 — Polish

- integrate supplied hero artwork and reference mockup direction;
- screenshot crops;
- relationship animations;
- timeline animation;
- map-stage treatment;
- page transitions where appropriate;
- performance pass;
- accessibility pass;
- Open Graph imagery.

Do not begin with elaborate animation before the static content and responsive structure are correct.

---

# 38. Acceptance Criteria

The first complete implementation is successful when:

- [ ] The site deploys correctly to GitHub Pages.
- [ ] All primary pages are statically generated.
- [ ] Content is editable primarily through Markdown/MDX.
- [ ] The website visually belongs to the same family as the Daena application.
- [ ] The home page is more editorial and expressive than the desktop UI.
- [ ] The site does not resemble a generic SaaS template.
- [ ] Features are shown through distinct compositions rather than repetitive cards.
- [ ] Product screenshots are used selectively and remain recognizable.
- [ ] The main hero uses the "Build the world behind the story." direction.
- [ ] Lore, Timeline, Maps, Languages, Writing, Archive/ownership, Snapshots, Plugins, and optional AI are represented.
- [ ] Feature maturity is clearly communicated.
- [ ] Documentation is integrated and visually calmer.
- [ ] The plugin marketplace works without a backend.
- [ ] Showcase entries are content-driven.
- [ ] Roadmap entries are content-driven.
- [ ] FAQ content is maintainable independently of components.
- [ ] Mobile layouts preserve the design rather than simply shrinking desktop compositions.
- [ ] Keyboard navigation works.
- [ ] Reduced motion is supported.
- [ ] Contrast is accessible.
- [ ] Performance remains lightweight.
- [ ] No page depends on server-side runtime functionality.
- [ ] External URLs and release metadata are centrally configurable.
- [ ] Light, Dark, and System themes are implemented.
- [ ] Explicit theme preference persists locally.
- [ ] The initial theme respects `prefers-color-scheme` when no explicit preference exists.
- [ ] Dark mode follows the nighttime-archive palette rather than simply inverting light mode.
- [ ] The supplied hero-map artwork is used directly as the home-page hero art.
- [ ] Hero artwork is presented at a correct composition without destructive stretching.
- [ ] The Eldermere quote/archive card is rendered as HTML and is not baked into the hero image.
- [ ] The two supplied mockups are treated as visual references, while this specification remains authoritative for product behavior and copy.

---

# 39. Final Design Principle

When making an ambiguous visual decision, use this priority:

1. **Does it communicate Daena clearly?**
2. **Does it feel like an archive for a living world?**
3. **Does it remain calm and usable?**
4. **Does it derive from Daena's existing visual identity?**
5. **Is it more expressive than the application without becoming decorative noise?**
6. **Can the content remain easy to maintain?**
7. **Does it remain lightweight?**

The intended result is a site that feels less like a product brochure and more like opening a carefully constructed archive and seeing its maps, histories, languages, relationships, and stories begin to spread across the page.

The supplied mockups establish the desired visual ambition; the supplied hero artwork establishes the hero's primary illustrative asset. Codex should implement that direction as a maintainable responsive website rather than attempting to reproduce the mockup board itself.
