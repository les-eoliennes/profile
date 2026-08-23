import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// The `z` re-export from astro:content is deprecated as of Astro 7; use zod directly.
import { z } from 'zod';

/**
 * Work reports. The schema validates every frontmatter block at build time, so
 * a mistyped field fails the build instead of rendering as undefined.
 */
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number(),
      role: z.string(),
      client: z.string().optional(),
      stack: z.array(z.string()),
      // image() puts the cover through Astro's image pipeline: AVIF/WebP, srcset, intrinsic size
      cover: image(),
      coverAlt: z.string(),
      link: z.url().optional(),
      repo: z.url().optional(),
      order: z.number().default(99),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
