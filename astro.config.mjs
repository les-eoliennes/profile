// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  /*
    Published to GitHub Pages as a project site, so the pages live under
    /<repo>/ rather than at a root. `site` feeds the sitemap, canonical URLs
    and OG images; `base` is prefixed onto every emitted asset URL, and onto
    every internal link via `withBase()` in src/i18n/utils.ts. Point both at
    the real domain (and drop `base`) if this ever moves to one.
  */
  site: 'https://les-eoliennes.github.io',
  base: '/profile',

  integrations: [mdx(), sitemap()],

  /*
    English is the default and stays at the root; the Chinese edition lives
    under /zh/. Only the front page is translated so far — see README.
  */
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },

  /*
    A three-font newspaper stack, all self-hosted at build time:

    - UnifrakturMaguntia — blackletter, used ONLY for the masthead nameplate,
      the way a real paper reserves its gothic type for the front-page banner.
    - Bodoni Moda — a true didone with very high stroke contrast. This is the
      closest free equivalent to the Domaine Display / Canopee faces the
      reference site uses for its giant headlines.
    - Source Serif 4 — the body face. Holds up at small sizes in narrow
      columns, which is exactly what newspaper body copy demands.
  */
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'UnifrakturMaguntia',
      cssVariable: '--font-gothic',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Bodoni Moda',
      cssVariable: '--font-display',
      weights: ['400 900'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      optimizedFallbacks: false,
      fallbacks: ['Songti SC', 'STSong', 'Noto Serif CJK SC', 'Source Han Serif SC', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Source Serif 4',
      cssVariable: '--font-body',
      weights: ['400 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      optimizedFallbacks: false,
      fallbacks: ['Songti SC', 'STSong', 'Noto Serif CJK SC', 'Source Han Serif SC', 'serif'],
    },
  ],
});
