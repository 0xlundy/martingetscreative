import { defineCollection, z } from 'astro:content';

/**
 * Two collections — same schema, different URLs.
 *
 * src/content/editorial/*.md → /editorial/slug  (commercial client work)
 * src/content/personal/*.md  → /personal/slug   (personal work)
 *
 * To add a project: drop a .md file in the right folder.
 * The filename becomes the URL slug automatically.
 */
const workSchema = z.object({
  // ─── Required ────────────────────────────────
  title:       z.string(),
  description: z.string(),
  cover:       z.string(),       // e.g. /images/editorial/my-project.jpg
  publishDate: z.coerce.date(),

  // ─── Optional ────────────────────────────────
  coverAlt:    z.string().optional(),
  tags:        z.array(z.string()).default([]),
  featured:    z.boolean().default(false),
  client:      z.string().optional(),
  role:        z.string().optional(),
  year:        z.number().optional(),
  orientation: z.enum(['landscape', 'portrait']).default('landscape'),
  vimeoId:     z.string().optional(),
  youtubeId:   z.string().optional(),
  url:         z.string().url().optional(),
  order:       z.number().default(99),
});

export const collections = {
  editorial: defineCollection({ type: 'content', schema: workSchema }),
  personal:  defineCollection({ type: 'content', schema: workSchema }),
};
