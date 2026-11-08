# Daena Archive website

Static public website and documentation for Daena Archive, built with Astro and Starlight.

## Local development

```sh
npm install
npm run dev
```

Validation:

```sh
npm run check
npm run build
npm run format:check
npm run verify:registry -- ../daena
npm run gen:tokens -- ../daena
npm run verify:tokens -- ../daena
```

The registry verifier compares the five website entries with the authoritative module manifests in a Daena checkout. Pass its path as the first argument, or set `DAENA_SOURCE_DIR`.

`npm run gen:tokens` writes `src/styles/tokens.css` from the Daena theme catalog. Pass the checkout path as the first argument, or set `DAENA_SOURCE_DIR`.

`npm run verify:tokens` fails when `src/styles/tokens.css` differs from that generated file. Pass the checkout path as the first argument, or set `DAENA_SOURCE_DIR`.

## GitHub Pages

In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. Publishing from a branch invokes Jekyll, which cannot parse Astro component fences.

The default Actions build publishes organization/user Pages repositories such as `daena-archive.github.io` at `/` and derives a project-site base path for other repository names. The generated artifact includes `.nojekyll` as an additional safeguard. For a custom domain or another path, set these repository variables:

- `PUBLIC_SITE_URL`, for example `https://daena.example`
- `PUBLIC_BASE_PATH`, for example `/` or `/website-daena`

See `docs/WEBSITE_DESIGN_IMPLEMENTATION_DECISIONS.md` for content, design, deployment, and product-honesty decisions.
