import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve('dist');
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const organizationSite =
  repository &&
  repositoryOwner &&
  repository.toLowerCase() === `${repositoryOwner}.github.io`.toLowerCase();
const inferredPagesBase = repository && !organizationSite ? `/${repository}` : '/';
const configuredBase = process.env.STATIC_BASE || process.env.PUBLIC_BASE_PATH || inferredPagesBase;
const base = configuredBase === '/' ? '/' : `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`;
const errors = [];
let htmlCount = 0;
let referenceCount = 0;
let structuralCheckCount = 0;

if (!existsSync(join(root, '.nojekyll'))) {
  errors.push('dist/.nojekyll -> missing GitHub Pages Jekyll bypass marker');
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function targetFor(pathname) {
  let localPath = decodeURIComponent(pathname);
  if (base !== '/' && localPath.startsWith(base)) localPath = `/${localPath.slice(base.length)}`;
  localPath = localPath.replace(/^\/+/, '');
  if (!localPath || localPath.endsWith('/')) return join(root, localPath, 'index.html');
  if (extname(localPath)) return join(root, localPath);
  return join(root, localPath, 'index.html');
}

for (const file of walk(root).filter((path) => path.endsWith('.html'))) {
  htmlCount += 1;
  const pagePath = `/${relative(root, file)
    .replace(/index\.html$/, '')
    .replaceAll('\\', '/')}`;
  const documentUrl = new URL(pagePath, 'https://verify.invalid');
  const html = readFileSync(file, 'utf8');

  const h1Count = (html.match(/<h1\b/g) || []).length;
  if (h1Count !== 1) errors.push(`${relative(root, file)} -> expected one h1, found ${h1Count}`);
  if (!/<html\b[^>]*\blang=/.test(html))
    errors.push(`${relative(root, file)} -> missing html language`);
  if (!/<main\b/.test(html)) errors.push(`${relative(root, file)} -> missing main landmark`);
  if (!/<meta\b[^>]*\bname=["']description["']/.test(html)) {
    errors.push(`${relative(root, file)} -> missing meta description`);
  }
  if (!/<link\b[^>]*\brel=["']canonical["']/.test(html)) {
    errors.push(`${relative(root, file)} -> missing canonical link`);
  }
  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt=["'][^"']*["']/.test(image[0])) {
      errors.push(`${relative(root, file)} -> image missing alt attribute`);
    }
  }
  structuralCheckCount += 5;

  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|#|javascript:)/.test(value)) continue;
    const resolved = new URL(value, documentUrl);
    if (resolved.origin !== documentUrl.origin) continue;
    referenceCount += 1;
    const target = targetFor(resolved.pathname);
    if (!existsSync(target)) errors.push(`${relative(root, file)} -> ${value}`);
  }
}

if (errors.length > 0) {
  console.error(`Broken internal references (${errors.length}):\n${errors.join('\n')}`);
  process.exit(1);
}

console.log(
  `Verified ${referenceCount} internal references and ${structuralCheckCount} page-structure checks across ${htmlCount} generated pages (base ${base}).`,
);
