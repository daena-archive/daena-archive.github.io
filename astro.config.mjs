import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const pagesBuild = process.env.GITHUB_ACTIONS === 'true';
const configuredBase = process.env.PUBLIC_BASE_PATH?.trim();
const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const base = configuredBase || (pagesBuild && repository ? `/${repository}` : '/');
const site =
  configuredSite ||
  (pagesBuild
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : 'http://localhost:4321');

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    starlight({
      title: 'Daena Archive',
      description: 'Guides and reference documentation for Daena Archive.',
      favicon: '/branding/daena-icon.png',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/daena-archive/daena',
        },
      ],
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [{ autogenerate: { directory: 'docs/getting-started' } }],
        },
        {
          label: 'Core Concepts',
          items: [{ autogenerate: { directory: 'docs/core-concepts' } }],
        },
        {
          label: 'Lore',
          items: [{ autogenerate: { directory: 'docs/lore' } }],
        },
        {
          label: 'Timeline',
          items: [{ autogenerate: { directory: 'docs/timeline' } }],
        },
        {
          label: 'Maps',
          items: [{ autogenerate: { directory: 'docs/maps' } }],
        },
        {
          label: 'Languages',
          items: [{ autogenerate: { directory: 'docs/languages' } }],
        },
        {
          label: 'Writing',
          items: [{ autogenerate: { directory: 'docs/writing' } }],
        },
        {
          label: 'Snapshots and Git',
          items: [{ autogenerate: { directory: 'docs/snapshots-git' } }],
        },
        {
          label: 'Optional AI',
          items: [{ autogenerate: { directory: 'docs/ai' } }],
        },
        {
          label: 'Plugins',
          items: [{ autogenerate: { directory: 'docs/plugins' } }],
        },
        {
          label: 'Project Storage',
          items: [{ autogenerate: { directory: 'docs/project-storage' } }],
        },
        {
          label: 'Developer',
          items: [{ autogenerate: { directory: 'docs/developer' } }],
        },
      ],
      components: {
        Header: './src/components/StarlightHeader.astro',
        ThemeProvider: './src/components/StarlightThemeProvider.astro',
      },
      head: [
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#f7f6f2' },
        },
      ],
    }),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
