# Project notes

Astro 7 static personal site, styled as a newspaper. All content in English.

## Environment

**Node ≥ 22.12 is required**; the system default is 20. Run `nvm use` first
(there is an `.nvmrc`). The dev and preview entries in `.claude/launch.json`
pin the absolute path to v22.

## Structure

- Copy lives in `src/consts.ts` (degree, coursework, open courses, career) and
  `src/data/tech.ts` (the stack).
- Reports are `src/content/work/*.mdx` with covers in the same directory; the
  schema is in `src/content.config.ts`.
- Tokens and newspaper primitives are in `src/styles/global.css`. The site is
  light only — no theme toggle, no `.dark` class, no `prefers-color-scheme`.
  That was removed deliberately; do not reintroduce it without asking.
- The only client script is `src/components/Behaviors.astro` — the front-page
  typewriter and the tech dialogs; clicks are event-delegated.
- Marks resolve through `src/lib/icons.ts`: the Iconify `logos` set (official
  full-colour artwork) first, simple-icons as fallback. Returns `body` plus the
  per-icon `width`/`height`, since that set has no single viewBox.
- Do not redraw brand marks by hand. If one looks wrong, alias it to its
  `-icon` variant in `ALIASES`.
- The stack page is a ruled listing, not a scatter.

## Editions

English at the root, Chinese under `/zh/`. **Every page exists in both.**

- Prose and page furniture: `src/i18n/ui.ts`, keyed, both maps.
- Structured content: `{ en, zh }` string pairs read as `value[lang]`, or a `zh`
  override block merged by `localize(item, lang)`.
- Report bodies: `src/content/work/zh/<slug>.mdx`, cover image one level up.
- Each page's markup is one component both routes render; `src/pages/` and
  `src/pages/zh/` hold thin wrappers only. Never fork a page's markup.
- Internal links must go through `localizePath()` or the reader falls out of
  their edition. It also applies the deployment `base`; a path that is not a
  page (favicon, sitemap, OG image) goes through `withBase()` instead. The
  site is published to GitHub Pages under `/profile/`, so a hardcoded `/foo`
  href 404s.

## Crests

`src/assets/crests/<slug>.{svg,png,webp}` is globbed at build time by
`Crest.astro`; slugs come from `src/data/schools.ts`. Missing file falls back to
a monogram badge. Sources and licences are recorded in that directory's README —
`szu.svg` is fair-use, not freely licensed.

Size crests by HEIGHT (`height` prop), never `size-*`. Pass only a height to
`<Image>` — adding a width crops raster sources to those exact dimensions, which
silently sliced two crests down to one word each (SVGs pass through, so it hid
until the first PNG). `scale` in schools.ts equalises visual area, since a
three-line stack and a wide wordmark cannot share a height and both stay
readable. The marks are dark reds (Yale's is its blue) on transparency, which
sit directly on the paper now that there is no night edition.

All five crests are SVG. Two of them (`cmu.svg`, the wordmark half of
`stanford.svg`) have no official vector source and were produced by tracing the
official raster art with potrace, not by redrawing — see the sourcing table in
`src/assets/crests/README.md` before touching either file.

## Front-page typewriter

The name types itself in on the front page. The full string is in the markup so
no-JS and crawlers get a heading; `Behaviors.astro` splits it into spans at
runtime and reveals them.

Hiding is `.js:not(.typed) [data-typewriter]`. The `js` class is set by the
inline head script before first paint (no flash of finished text), and that
script also sets `typed` after 4s as a failsafe so a heading can never be left
invisible if the bundle fails to load. Any page without the heading sets
`typed` immediately.

Use `visibility`, not `opacity` or `display`: the character boxes must stay in
flow or the line reflows as letters land. Visibility inherits, so each span
opts itself back in.

## Things that will bite

- Tailwind v4 `@apply` only accepts classes declared with `@utility`, not ones
  inside `@layer components`. The display scale is declared with `@utility`.
- `aspect-*` combined with `max-h-*` shrinks the element's WIDTH to preserve the
  ratio — set the ratio alone.
- Size marks by height (`h-7 w-auto`), never `size-*`; the logos set mixes
  aspect ratios and a square box letterboxes the wide ones into nothing.
- Two elements must never carry the same `view-transition-name` simultaneously.
  The zoom hands the name over inside the transition callback — see `morph()`
  in `Behaviors.astro`.
- Image paths in content collections resolve relative to the mdx file, so covers
  must sit in the same directory.
- Scroll-driven animation must stay "visible by default, animation layered on",
  or Firefox renders nothing.
- `z.string().url()` is deprecated in zod 4; use `z.url()`.
- Never write a count into the copy. `t()` takes `{n}`-style placeholders —
  hardcoding "seventeen" left the front page stale the moment an entry was
  added, in both editions at once.
- Chinese needs its own typography: the deck scale (0.86 line-height, negative
  tracking) is set for a didone and mangles CJK. See `:lang(zh)` in global.css.
  Never use `<em>`/italic for Chinese — browsers synthesise a broken oblique.
- Content collection ids strip dots, so `chronos.zh.mdx` became `chronoszh` and
  published itself as a separate English report. Chinese reports therefore live
  in a `zh/` subdirectory, not behind a dotted suffix.
- CJK fonts come from the system via the `fallbacks` arrays in astro.config.
  Keep `optimizedFallbacks: false` there; the metric-adjusted fallbacks Astro
  generates distort CJK glyphs.

Full docs at https://docs.astro.build
