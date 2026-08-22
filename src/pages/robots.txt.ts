import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://daena-archive.github.io');
  const base = import.meta.env.BASE_URL.replace(/^\//, '');
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${new URL(`${base}sitemap-index.xml`, origin)}\n`,
    {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    },
  );
};
