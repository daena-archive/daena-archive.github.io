import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const status = z.enum(['stable', 'beta', 'experimental', 'planned', 'exploring']);

const docs = defineCollection({ loader: docsLoader(), schema: docsSchema() });

const features = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/features' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    description: z.string(),
    status,
    area: z.enum(['world-model', 'time', 'place', 'language', 'writing', 'archive', 'extensions']),
    order: z.number(),
    featured: z.boolean().default(false),
    icon: z.string(),
    capabilities: z.array(z.string()),
    connections: z.array(z.string()).default([]),
    limitation: z.string().optional(),
    docs: z.string().optional(),
  }),
});

const plugins = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/plugins' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      package: z.string(),
      author: z.string(),
      summary: z.string(),
      image: image(),
      imageAlt: z.string().optional(),
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
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      creator: z.string(),
      summary: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
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

export const collections = { docs, features, plugins, showcase, faq, roadmap };
