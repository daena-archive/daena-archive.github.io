import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import prettier from 'prettier';

const websiteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const check = args.includes('--check');
const positional = args.filter((arg) => arg !== '--check');
const daenaRoot = resolve(
  positional[0] ?? process.env.DAENA_SOURCE_DIR ?? join(websiteRoot, '..', 'daena'),
);
const generatedPath = join(daenaRoot, 'packages', 'plugin-sdk', 'src', 'generated.ts');
const presetsPath = join(daenaRoot, 'src', 'lib', 'entity-colors', 'presets.ts');
const overridesPath = join(websiteRoot, 'scripts', 'token-overrides.json');
const outPath = join(websiteRoot, 'src', 'styles', 'tokens.css');
const hexPattern = /^#[0-9a-f]{6}$/i;
const errors = [];

function fail(message) {
  errors.push(message);
}

function readRequired(path, label) {
  if (!existsSync(path)) {
    fail(`Missing ${label}: ${path}`);
    return undefined;
  }
  return readFileSync(path, 'utf8');
}

function parseExportJson(source, name, path) {
  const match = source.match(
    new RegExp(`export const ${name} = (\\{[\\s\\S]*?\\}|\\[[\\s\\S]*?\\]) as const;`),
  );
  if (!match) {
    fail(`Could not parse ${name} in ${path}`);
    return undefined;
  }
  try {
    return JSON.parse(match[1]);
  } catch (error) {
    fail(`Could not parse ${name} in ${path}: ${error.message}`);
    return undefined;
  }
}

function normalizeHex(value, label) {
  if (typeof value !== 'string' || !hexPattern.test(value)) {
    fail(`${label} is not a 6-digit hex colour: ${JSON.stringify(value)}`);
    return undefined;
  }
  return value.toLowerCase();
}

function sameIds(left, right) {
  return left.length === right.length && left.every((id, index) => id === right[index]);
}

function extractObjectLiteral(source, name) {
  const marker = `export const ${name} = `;
  const start = source.indexOf(marker);
  if (start < 0) return undefined;
  const brace = source.indexOf('{', start + marker.length);
  if (brace < 0) return undefined;
  let depth = 0;
  for (let index = brace; index < source.length; index += 1) {
    const char = source[index];
    if (char === '{') depth += 1;
    else if (char === '}') {
      depth -= 1;
      if (depth === 0) return source.slice(brace, index + 1);
    }
  }
  return undefined;
}

function parsePresets(source, path) {
  const literal = extractObjectLiteral(source, 'TYPE_COLOR_PRESETS');
  if (!literal) {
    fail(`Could not parse TYPE_COLOR_PRESETS in ${path}`);
    return [];
  }
  const pattern =
    /([A-Za-z0-9-]+):\s*\{[\s\S]*?light:\s*\{\s*fg:\s*"(#[0-9A-Fa-f]{6})"\s*,\s*bg:\s*"(#[0-9A-Fa-f]{6})"\s*\}\s*,\s*dark:\s*\{\s*fg:\s*"(#[0-9A-Fa-f]{6})"\s*,\s*bg:\s*"(#[0-9A-Fa-f]{6})"\s*\}/g;
  const presets = [];
  for (const match of literal.matchAll(pattern)) {
    const [, id, lightFg, lightBg, darkFg, darkBg] = match;
    presets.push({
      id,
      light: {
        fg: normalizeHex(lightFg, `${path} ${id} light.fg`),
        bg: normalizeHex(lightBg, `${path} ${id} light.bg`),
      },
      dark: {
        fg: normalizeHex(darkFg, `${path} ${id} dark.fg`),
        bg: normalizeHex(darkBg, `${path} ${id} dark.bg`),
      },
    });
  }
  if (presets.length === 0) fail(`Could not parse TYPE_COLOR_PRESETS in ${path}`);
  return presets;
}

function loadOverrides() {
  const source = readRequired(overridesPath, 'token overrides');
  if (!source) return [];
  let parsed;
  try {
    parsed = JSON.parse(source);
  } catch (error) {
    fail(`Could not parse token overrides in ${overridesPath}: ${error.message}`);
    return [];
  }
  if (!parsed || !Array.isArray(parsed.overrides)) {
    fail(`${overridesPath}: expected an "overrides" array`);
    return [];
  }
  return parsed.overrides;
}

function applyOverrides(themes, themeIds, overrides) {
  const seen = new Set();
  const additions = [];
  for (const override of overrides) {
    if (!override || typeof override.id !== 'string' || !/^[a-z0-9-]+$/.test(override.id)) {
      fail(`${overridesPath}: override id is missing or invalid: ${JSON.stringify(override?.id)}`);
      continue;
    }
    if (seen.has(override.id)) {
      fail(`${overridesPath}: duplicate override id ${override.id}`);
      continue;
    }
    seen.add(override.id);
    const hasLight = Object.hasOwn(override, 'light');
    const hasDark = Object.hasOwn(override, 'dark');
    if (!hasLight && !hasDark) {
      fail(`${overridesPath}: override ${override.id} sets neither light nor dark`);
      continue;
    }
    const inCatalog = themeIds.includes(override.id);
    if (!inCatalog) {
      console.warn(`note: ${override.id} is not in the app catalog yet`);
      if (!hasLight || !hasDark) {
        fail(`${overridesPath}: override ${override.id} is new and must set both light and dark`);
        continue;
      }
      additions.push(override.id);
    }
    for (const theme of ['light', 'dark']) {
      if (!Object.hasOwn(override, theme)) continue;
      const value = normalizeHex(override[theme], `${overridesPath} ${override.id}.${theme}`);
      if (!value) continue;
      if (inCatalog && themes[theme][override.id] === value) {
        console.warn(`override ${override.id}.${theme} now matches the catalog; remove it`);
      }
      themes[theme][override.id] = value;
    }
  }
  return additions;
}

function cssBlock(selector, ids, themes, themeName, presets) {
  const lines = [`  ${selector} {`];
  for (const id of ids) lines.push(`    --${id}: ${themes[themeName][id]};`);
  for (const preset of presets) {
    lines.push(`    --type-${preset.id}: ${preset[themeName].fg};`);
    lines.push(`    --type-${preset.id}-bg: ${preset[themeName].bg};`);
  }
  lines.push(`    color-scheme: ${themeName};`);
  lines.push('  }');
  return lines.join('\n');
}

function renderCss(ids, themes, presets) {
  return [
    '/* Generated by scripts/gen-tokens.mjs from ../daena theme catalog. Do not edit; run npm run gen:tokens. */',
    '',
    '@layer tokens {',
    cssBlock(':root', ids, themes, 'light', presets),
    '',
    cssBlock(":root[data-theme='dark']", ids, themes, 'dark', presets),
    '}',
    '',
  ].join('\n');
}

const generatedSource = readRequired(generatedPath, 'Daena theme catalog');
const presetsSource = readRequired(presetsPath, 'Daena type colour presets');
const overrides = loadOverrides();

let themes = { light: {}, dark: {} };
let themeIds = [];
let presets = [];
if (generatedSource) {
  themeIds = parseExportJson(generatedSource, 'THEME_TOKEN_IDS', generatedPath) ?? [];
  const presetIds = parseExportJson(generatedSource, 'TYPE_COLOR_PRESET_IDS', generatedPath) ?? [];
  const builtin = parseExportJson(generatedSource, 'BUILTIN_THEME_TOKENS', generatedPath);
  if (!Array.isArray(themeIds) || themeIds.length === 0) {
    fail(`Could not parse THEME_TOKEN_IDS in ${generatedPath}`);
  }
  if (!Array.isArray(presetIds) || presetIds.length === 0) {
    fail(`Could not parse TYPE_COLOR_PRESET_IDS in ${generatedPath}`);
  }
  if (!builtin || typeof builtin !== 'object') {
    fail(`Could not parse BUILTIN_THEME_TOKENS in ${generatedPath}`);
  } else {
    for (const theme of ['light', 'dark']) {
      const values = builtin[theme];
      if (!values || typeof values !== 'object') {
        fail(`BUILTIN_THEME_TOKENS.${theme} is missing in ${generatedPath}`);
        continue;
      }
      const ids = Object.keys(values);
      if (!sameIds(ids, themeIds)) {
        fail(
          `BUILTIN_THEME_TOKENS.${theme} ids differ from THEME_TOKEN_IDS in ${generatedPath}\n  tokens: ${JSON.stringify(ids)}\n  catalog: ${JSON.stringify(themeIds)}`,
        );
      }
      for (const id of themeIds) {
        const value = normalizeHex(values[id], `${generatedPath} ${theme}.${id}`);
        if (value) themes[theme][id] = value;
      }
    }
  }
  if (presetsSource) {
    presets = parsePresets(presetsSource, presetsPath);
    const parsedIds = presets.map((preset) => preset.id);
    if (presets.length > 0 && !sameIds(parsedIds, presetIds)) {
      fail(
        `TYPE_COLOR_PRESETS ids differ from TYPE_COLOR_PRESET_IDS in ${generatedPath}\n  presets: ${JSON.stringify(parsedIds)}\n  catalog: ${JSON.stringify(presetIds)}`,
      );
    }
  }
}

const additions = errors.length === 0 ? applyOverrides(themes, themeIds, overrides) : [];
if (errors.length > 0) {
  console.error(`Theme catalog could not be read (${errors.length}):\n${errors.join('\n')}`);
  process.exit(1);
}

const css = renderCss([...themeIds, ...additions], themes, presets);
const config = (await prettier.resolveConfig(outPath)) ?? {};
const formatted = await prettier.format(css, { ...config, filepath: outPath, parser: 'css' });
if (!formatted.startsWith('/* Generated by scripts/gen-tokens.mjs ')) {
  console.error('prettier changed the generated tokens.css header');
  process.exit(1);
}

if (check) {
  const current = existsSync(outPath) ? readFileSync(outPath, 'utf8') : '';
  if (current !== formatted) {
    console.error('src/styles/tokens.css is out of date; run npm run gen:tokens');
    process.exit(1);
  }
  console.log('tokens.css matches the daena catalog');
} else {
  writeFileSync(outPath, formatted);
  console.log(`Wrote src/styles/tokens.css from ${daenaRoot}.`);
}
