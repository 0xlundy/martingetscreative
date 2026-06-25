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
  status:      z.string().optional(),   // e.g. "Ongoing" — renders as a badge on cards

  orientation: z.enum(['landscape', 'portrait']).default('landscape'),
  vimeoId:     z.string().optional(),
  vimeoHash:   z.string().optional(),   // privacy hash for unlisted Vimeo videos (the part after the / )
  youtubeId:   z.string().optional(),
  video:       z.string().optional(),   // self-hosted video file, e.g. /videos/crw-sizzle.mp4
  videoPoster: z.string().optional(),   // poster image for the self-hosted video
  url:         z.string().url().optional(),
  order:       z.number().default(99),
});

export const collections = {
  editorial: defineCollection({ type: 'content', schema: workSchema }),
  personal:  defineCollection({ type: 'content', schema: workSchema }),
};
