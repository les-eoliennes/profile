# Project notes

Astro 7 static personal site, styled as a newspaper. All content in English.

## Environment

**Node ≥ 22.12 is required**; the system default is 20. Run `nvm use` first
(there is an `.nvmrc`). The dev and preview entries in `.claude/launch.json`
pin the absolute path to v22.

## Structure

- Copy lives in `src/consts.ts` (degree, coursework, open courses, fundamentals,
  career) and `src/data/tech.ts` (the stack).
- Reports are `src/content/work/*.mdx` with covers in the same directory; the
  schema is in `src/content.config.ts`.
- Tokens and newspaper primitives are in `src/styles/global.css`. Dark mode is a
  "night edition" that swaps ink and paper, driven by a `.dark` class.
- The only client script is `src/components/Behaviors.astro` — theme toggle and
  the tech dialogs, entirely event-delegated.
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
  their edition.

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
