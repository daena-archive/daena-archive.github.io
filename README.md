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
```

## GitHub Pages

The default Actions build derives a project-site base path from the repository name. For a custom domain or another path, set these repository variables:

- `PUBLIC_SITE_URL`, for example `https://daena.example`
- `PUBLIC_BASE_PATH`, for example `/` or `/website-daena`

See `docs/WEBSITE_DESIGN_IMPLEMENTATION_DECISIONS.md` for content, design, deployment, and product-honesty decisions.
