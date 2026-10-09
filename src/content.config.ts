import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Artículos del hub educativo /manchas-en-la-piel/. */
const manchas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/manchas' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(170),
    /** Respuesta directa (40–60 palabras) para snippets y LLMs. */
    answer: z.string(),
    order: z.number().default(99),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** true mientras el texto sea de relleno y no esté revisado por Tania. */
    provisional: z.boolean().default(true),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { manchas };
