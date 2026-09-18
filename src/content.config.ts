import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const status = z.enum(['stable', 'beta', 'experimental', 'planned', 'exploring']);

const docs = defineCollection({ loader: docsLoader(), schema: docsSchema() });

const plugins = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/plugins' }),
  schema: z.object({
    name: z.string(),
    package: z.string(),
    author: z.string(),
    summary: z.string(),
    repository: z.url().optional(),
    homepage: z.url().optional(),
    version: z.string(),
    daenaCompatibility: z.string(),
    hostApi: z.string(),
    runtimeKind: z.enum(['sandboxed', 'declarative']),
    categories: z.array(z.string()),
    status: status.optional(),
    official: z.boolean(),
    bundled: z.boolean(),
    featured: z.boolean(),
    capabilities: z.array(z.string()),
    license: z.string(),
    updated: z.coerce.date(),
  }),
});

const showcase = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/showcase' }),
  schema: z.object({
    title: z.string(),
    creator: z.string(),
    summary: z.string(),
    featured: z.boolean(),
    tags: z.array(z.string()),
    accent: z.enum(['sea', 'marsh', 'ember']).default('sea'),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    links: z
      .object({
        website: z.url().optional(),
        repository: z.url().optional(),
        social: z.url().optional(),
      })
      .default({}),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    order: z.number(),
    category: z.enum(['product', 'privacy', 'workflow', 'technical']),
  }),
});

const roadmap = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/roadmap' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status,
    area: z.string(),
    order: z.number(),
    issue: z.url().optional(),
    spec: z.string().optional(),
  }),
});

export const collections = { docs, plugins, showcase, faq, roadmap };
