# Daena Archive website design and implementation decisions

## Purpose

This document records the implementation decisions made for the first complete Daena Archive website. The product/content specification in `DAENA_WEBSITE_REFERENCE_SPEC.md` remains the authority; this file explains how that direction was translated into a maintainable static site.

## Source precedence and product honesty

The implementation used this order of authority:

1. the website reference specification for routes, copy, behavior, and acceptance criteria;
2. the supplied `hero.png` as the canonical hero artwork;
3. the supplied light and dark mockup boards for visual ambition and composition;
4. the current Daena repository README, architecture, storage, module manifests, and release metadata for public product claims.

The site deliberately says that Daena is alpha and not production ready. Maps is labeled Beta. The plugin platform and optional AI are labeled Experimental. Planned import/export and community-registry work is not presented as shipped. The download page links to GitHub Releases instead of duplicating a platform matrix that could become stale.

No fictional plugin packages, ratings, download counts, testimonials, or community metrics are shown. The initial plugin registry contains the five real bundled module manifests found in the Daena repository. The initial showcase entries are explicitly labeled “Daena demonstration archive,” so coherent example lore is not mistaken for a community submission.

Registry trust metadata mirrors the current first-party manifests rather than translating permissions into friendlier but inaccurate names. Each entry records the exact module version, host API range, runtime kind, and capability identifiers. The prose explains those identifiers, while the detail page keeps the manifest strings intact so security-relevant scope is not understated. When a Daena module manifest changes, its website registry entry must be updated in the same maintenance pass.

`npm run verify:registry -- <path-to-daena>` enforces that contract without coupling the static deployment to a sibling checkout. It compares package identity, publisher, version, host API range, runtime kind, optional declared stability, and the ordered capability list for all five first-party entries.

## Architecture

The website uses Astro 7 with Starlight and emits static HTML. There is no backend, runtime API route, client framework island, or hosted search dependency.

Routine content lives in validated collections:

- `src/content/features/`
- `src/content/plugins/`
- `src/content/showcase/`
- `src/content/faq/`
- `src/content/roadmap/`
- `src/content/docs/docs/`

The nested `docs/docs` path is intentional. The outer directory is the Starlight content collection; the inner `docs` segment makes Starlight generate the required `/docs/` route while the marketing site retains `/`.

Shared external URLs, alpha status, license, release links, and platform wording live in `src/config/site.ts`. Layout components use a single `withBase()` helper for internal links and public assets.

## GitHub Pages and base paths

`astro.config.mjs` distinguishes GitHub Pages repository types during Actions builds. An organization or user site whose repository is named `<owner>.github.io` is emitted at `/`; other repositories receive a project-site base path derived from `GITHUB_REPOSITORY`. A custom deployment can override both `PUBLIC_SITE_URL` and `PUBLIC_BASE_PATH` through repository variables.

The generated site was also built with `/daena-site/` as a synthetic project base. The generated HTML, stylesheet, script, image, sitemap, favicon, documentation, and internal navigation paths were checked for unprefixed root-relative URLs.

The repository's Pages source must be **GitHub Actions**, because publishing the source branch directly invokes Jekyll against Astro files. The deployment workflow configures Pages, installs from `package-lock.json`, builds and verifies the site, uploads the static `dist/` artifact, and deploys through GitHub Pages' official actions. `public/.nojekyll` is copied into the artifact as defense in depth; placing it at the repository root would only publish the unbuilt Astro source when branch publishing is selected.

## Visual system

The implementation extends Daena's application palette rather than copying the desktop layout:

- warm paper surfaces anchor the light theme;
- deep green-black surfaces create a separate “nighttime archive” dark theme;
- forest controls establish hierarchy;
- brass is reserved for primary actions and structural emphasis;
- accessible copper variants carry editorial labels and italic display text;
- semantic entity colors appear only in graph nodes and small metadata;
- borders and tonal elevation are used more often than shadows.

The mockup boards use a display serif similar to Playfair. The specification recommends Newsreader, but no third-party font request is made at runtime. The CSS uses a Newsreader-first family with robust Georgia/Times fallbacks, and a system-first sans family. This avoids render blocking and preserves the editorial/utility contrast even when no custom font is installed.

The site avoids repeated equal-sized feature-card sections. Each major home-page layer has a different composition: connected graph, horizontal/vertical timeline, full-width cartographic stage, oversized language specimen, quiet manuscript surface, dark ownership statement, stacked snapshots, catalogue modules, proposal review, and editorial showcase.

## Hero artwork

The supplied map remains the canonical source. The website renders it as an image, not as recreated CSS, SVG, canvas, or generated art. The Eldermere quote is an independent semantic `ArchiveCard` HTML component.

The original PNG remains the fallback and social preview source. Lossy WebP delivery derivatives are generated for performance, including a 960-pixel mobile variant. Cropping changes at the mobile breakpoint so the right-hand map detail remains legible while copy stays first. Dark mode uses reduced opacity and surrounding tonal overlays; it never inverts the artwork.

## Product visuals

No current full-window application screenshots were supplied in the website directory or present in the Daena documentation assets. Instead of fabricating screenshot imagery, the implementation uses clearly stylized, semantic product diagrams and fragments based on verified product concepts: relationship graph nodes, timeline entries, a manuscript surface, map maturity layers, snapshot records, module metadata, and an AI proposal card. These are explanatory compositions, not claims that a pixel-identical screen exists in the desktop application.

Real screenshots can later replace these stages through assets/content without changing the surrounding page structure.

## Themes

Public pages implement Light, Dark, and System preferences. The selected preference is stored locally under `daena-theme`; no account or request is required. A small inline head script resolves the preference before first paint, reducing wrong-theme flashes. Explicit System remains distinct from Light and Dark, and changes with `prefers-color-scheme`.

Starlight retains its accessible Light/Dark/Auto control and is themed with the same Daena palette. Its provider synchronizes Auto with the shared System preference and mirrors Starlight's compatibility key, so moving between the website and documentation preserves the user's explicit choice without a wrong-theme handoff.

## Responsive behavior

Desktop layouts use asymmetric grids and controlled overlap. Tablet layouts reduce overlap before collapsing. Mobile layouts select one dominant visual rather than shrinking every desktop element:

- hero copy remains first and the map becomes a focused lower crop;
- the archive card overlaps the map on wide screens and returns to document flow below the hero actions on mobile;
- the relationship graph drops nonessential outer nodes;
- the timeline becomes vertical;
- map maturity stages stack;
- catalogue and showcase compositions become single-column;
- the conventional mobile menu replaces desktop navigation.

## Accessibility

The implementation provides semantic landmarks, one page-level heading, a skip link, visible focus treatment, keyboard-operable native menus/details controls, accessible theme labels, live filter result counts, text labels alongside status colors, and reduced-motion behavior.

Illustrative UI fragments are not exposed as fake controls. For example, the AI proposal study presents its two possible actions as a labeled visual group rather than focusable buttons that do nothing. Dark editorial panels also use explicit warm-muted text colors in both themes; they do not inherit light-canvas muted tokens that would lose contrast against forest surfaces.

FAQ accordions use native `details`/`summary`, so their content remains in generated HTML and usable without JavaScript. Plugin and roadmap filtering is progressive enhancement: every item is visible and indexable before the small filter script runs. Filtered roadmap lanes use the native `hidden` attribute with a scoped CSS rule that cannot be overridden by the lane grid layout.

The hero map has descriptive alternative text. Repeated decorative map treatments, orbits, nodes, and illustrative catalogue art are hidden from assistive technology.

## Performance

The public site ships static HTML and shared CSS. JavaScript is limited to theme persistence, the mobile/native disclosure controls, plugin filtering, roadmap filtering, and Starlight's documentation search/navigation behavior.

The hero has explicit dimensions and high fetch priority. Below-fold artwork is lazy loaded. WebP delivery reduces the 2.6 MB canonical hero PNG to a much smaller production transfer while retaining the original fallback. No animation library, WebGL, video, hosted font, analytics, or client-rendered page framework is included.

## Search and metadata

Starlight builds a local Pagefind index for documentation. Plugin search and filters run entirely in the browser against static metadata. Global marketing-site search is intentionally deferred because the initial public dataset does not justify another index or navigation surface.

Every custom page receives a unique title, description, canonical URL, Open Graph fields, and Twitter card fields from `BaseLayout`. Dynamic feature, plugin, and showcase routes use their content metadata. Astro's sitemap integration generates the complete static route index, and `robots.txt` follows the configured deployment base.

## Content maintenance

Adding a routine item does not require changing a page component:

- a feature is a validated MD/MDX entry;
- a plugin is a validated registry entry with body documentation;
- a showcase item is a validated exhibition entry;
- a roadmap direction is a validated status item;
- an FAQ answer is its own Markdown document;
- a guide is a Starlight Markdown/MDX page.

Presentation components read these collections at build time. Status values are constrained to Stable, Beta, Experimental, Planned, and Exploring.

## Known first-release boundaries

- Community showcase submission is described but not automated; moderation remains a repository workflow.
- The plugin registry is static and begins with bundled official modules.
- Download artifacts and OS support remain delegated to GitHub Releases.
- Global site search is not included; documentation search is included.
- Product diagrams are illustrative until current screenshot assets are supplied.
- No Discord URL is exposed because none was verified in current project metadata.

These boundaries preserve the requested first complete website without inventing external services, release facts, or community activity.
