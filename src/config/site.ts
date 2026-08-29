export const siteConfig = {
  name: 'Daena Archive',
  shortName: 'Daena',
  description:
    'A free, open-source, local-first desktop studio for building fictional worlds and writing stories in them.',
  status: 'Alpha · v0.1.0',
  license: 'Apache-2.0',
  repository: 'https://github.com/daena-archive/daena',
  releases: 'https://github.com/daena-archive/daena/releases',
  issues: 'https://github.com/daena-archive/daena/issues',
  discussions: 'https://github.com/daena-archive/daena/discussions',
  contributing: 'https://github.com/daena-archive/daena/blob/main/CONTRIBUTING.md',
  discord: '',
  platforms:
    'Daena is in active alpha development. Consult the latest release notes for currently published builds and installation requirements.',
} as const;

export const navItems = [
  { label: 'Features', href: '/features/' },
  { label: 'Docs', href: '/docs/' },
  { label: 'Plugins', href: '/plugins/' },
  { label: 'Showcase', href: '/showcase/' },
  { label: 'Roadmap', href: '/roadmap/' },
  { label: 'Community', href: '/community/' },
] as const;

export function withBase(path: string, base = import.meta.env.BASE_URL) {
  if (/^(?:https?:|mailto:|#)/.test(path)) return path;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${path.replace(/^\//, '')}`.replace(/\/+/g, '/');
}

export function entrySlug(id: string) {
  return id.replace(/\.(?:md|mdx)$/, '').replace(/\/index$/, '');
}
