import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const websiteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const daenaRoot = resolve(
  process.argv[2] ?? process.env.DAENA_SOURCE_DIR ?? join(websiteRoot, '..', 'daena'),
);
const entries = [
  ['language', 'language'],
  ['lore', 'lore'],
  ['maps', 'maps'],
  ['timeline', 'timeline'],
  ['writing-studio', 'writing'],
];
const errors = [];

function frontmatter(source, path) {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---(?:\s*\n|$)/);
  if (!match) throw new Error(`${path} does not contain YAML frontmatter`);
  return match[1];
}

function scalar(source, key) {
  const match = source.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) return undefined;
  return match[1].trim().replace(/^(['"])(.*)\1$/, '$2');
}

function list(source, key) {
  const match = source.match(new RegExp(`^${key}:\\s*\\n\\s*\\[\\s*\\n([\\s\\S]*?)^\\s*\\]`, 'm'));
  if (!match) return [];
  return match[1]
    .split('\n')
    .map((line) =>
      line
        .trim()
        .replace(/,$/, '')
        .replace(/^(['"])(.*)\1$/, '$2'),
    )
    .filter(Boolean);
}

function compare(label, websiteValue, manifestValue, websitePath) {
  if (JSON.stringify(websiteValue) !== JSON.stringify(manifestValue)) {
    errors.push(
      `${websitePath}: ${label} differs\n  website: ${JSON.stringify(websiteValue)}\n  manifest: ${JSON.stringify(manifestValue)}`,
    );
  }
}

for (const [websiteSlug, moduleDirectory] of entries) {
  const websitePath = join(websiteRoot, 'src', 'content', 'plugins', `${websiteSlug}.md`);
  const manifestPath = join(daenaRoot, 'packages', 'modules', moduleDirectory, 'manifest.json');

  if (!existsSync(websitePath)) {
    errors.push(`Missing website registry entry: ${websitePath}`);
    continue;
  }
  if (!existsSync(manifestPath)) {
    errors.push(`Missing Daena module manifest: ${manifestPath}`);
    continue;
  }

  const websiteData = frontmatter(readFileSync(websitePath, 'utf8'), websitePath);
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

  compare('package identity', scalar(websiteData, 'package'), manifest.id, websitePath);
  compare('publisher', scalar(websiteData, 'author'), manifest.publisher, websitePath);
  compare('version', scalar(websiteData, 'version'), manifest.version, websitePath);
  compare('host API range', scalar(websiteData, 'hostApi'), manifest.hostApi, websitePath);
  compare('runtime kind', scalar(websiteData, 'runtimeKind'), manifest.kind, websitePath);
  compare('capabilities', list(websiteData, 'capabilities'), manifest.capabilities, websitePath);

  if (manifest.stability) {
    compare('stability', scalar(websiteData, 'status'), manifest.stability, websitePath);
  }
}

if (errors.length > 0) {
  console.error(`Registry metadata differs from Daena (${errors.length}):\n${errors.join('\n')}`);
  process.exit(1);
}

console.log(`Verified ${entries.length} registry entries against ${daenaRoot}.`);
