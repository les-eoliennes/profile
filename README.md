# The Ace Gazette

A personal site set as a newspaper. Astro, statically rendered — every page is
plain HTML, with one small script for the edition toggle and the tech articles.

## Requirements

Astro 7 needs **Node ≥ 22.12**. There is an `.nvmrc` in the repo root:

```bash
nvm use
```

The system default of Node 20 will not run it. `.claude/launch.json` pins the
absolute path to v22 for the dev and preview servers.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npx astro check` | Type-check, including `.astro` files |

## Sections

| Path | Contents |
| --- | --- |
| `/` | Nameplate, lead story, figures, selected work, stack trailer |
| `/zh/…` | Every one of the above, Chinese edition |
| `/education` | Shenzhen University, coursework, open courseware, fundamentals |
| `/stack` | A ruled listing of every tool; open a row to zoom into a piece on it |
| `/about` | Biography, record of service, contact |
| `/work/[slug]` | Full project reports |

## Layout

```
src/
  consts.ts            Language-independent facts: name, email, degree, courses, career
  i18n/ui.ts           Both editions' wording, keyed; add a key to both maps
  i18n/utils.ts        Edition detection, translator, path helpers
  data/tech.ts         The stack: what each tool is for and what I think of it
  lib/icons.ts         Resolves a mark by slug: official logos first, simple-icons as fallback
  content.config.ts    Frontmatter schema for the work reports
  content/work/        One .mdx per report, with its cover image alongside
  layouts/BaseLayout   Head, fonts, no-flash theme script, view transitions, the sheet
  components/          Masthead · Colophon · FrontPage · ProjectCard · TechMark · TechDialog · LangToggle · RichText · Behaviors
  pages/               index · education · stack · about · work/[...slug] · 404
  styles/global.css    Tokens and newspaper primitives
```

## The Chinese edition

English is the default and stays at the root; Chinese lives under `/zh/`. **Every
page exists in both editions**, so the language toggle is always offered and
always lands on the same page in the other language.

Where the wording lives:

- **Page furniture and prose** — `src/i18n/ui.ts`, one key per string, in both
  maps. `useTranslations(lang)` returns a `t()` that falls back to English, so a
  key you forget to translate renders in English rather than blank.
- **Structured content** (degree, courses, fundamentals, career, the stack) —
  alongside the English in `src/consts.ts` and `src/data/tech.ts`, in one of two
  shapes: `{ en, zh }` for a bare string, read as `value[lang]`; or a `zh` block
  of overrides merged by `localize(item, lang)`.
- **Report bodies** — `src/content/work/zh/<slug>.mdx`, sharing the schema and
  the cover image one directory up. A report with no Chinese file falls back to
  the English one rather than vanishing.

Each page's markup lives in a single component under `src/components/`
(`FrontPage`, `EducationPage`, `StackPage`, `AboutPage`, `ReportPage`,
`NotFoundPage`) that both routes render, so the editions cannot drift apart —
only the strings differ. The files under `src/pages/` and `src/pages/zh/` are
thin wrappers.

Internal links go through `localizePath()` so a reader stays inside their
edition. The only deliberate crossover is the language toggle itself.

Typography for Chinese is handled in `global.css` under `:lang(zh)`: the display
scale is set for a didone at 0.86 line-height with negative tracking, which
collides badly with full-width CJK glyphs, so decks are loosened and tracking
zeroed. Drop caps and synthesised italics are switched off — Chinese has neither.

## Crests

Drop a school's crest into `src/assets/crests/<slug>.svg` (or `.png`/`.webp`)
and the education page picks it up automatically — `Crest.astro` globs that
directory at build time, so no code change is needed. Slugs are defined in
`src/data/schools.ts`: `szu`, `mit`, `stanford`, `cmu`.

Until a file is present the component renders a monogram badge in the school's
colour instead. That fallback is deliberately typographic: it stands in for a
crest without imitating one.

University crests are trademarked institutional marks, which is why none are
vendored here. Add only the crests of schools you actually attended or took
courses from, and check each school's trademark policy first.

## Editing

- **Text** (degree, coursework, open courses, fundamentals, career): `src/consts.ts`
- **The stack**: `src/data/tech.ts`. Adding a tool is one more record; set `slug`
  to its name in the Iconify [`logos`](https://icon-sets.iconify.design/logos/)
  set and the official artwork comes through automatically. A slug that resolves
  in neither source fails the build rather than rendering blank.
- **If a mark looks wrong**, check `ALIASES` in `src/lib/icons.ts`. Several
  entries in the `logos` set are full lockups including the wordmark, which
  reduces the symbol to a few pixels at listing size; those are aliased to their
  `-icon` variant.
- **Reports**: add `xxx.mdx` under `src/content/work/`, with the cover image in
  the same directory, referenced as `cover: ./xxx.jpg`.
- **Palette and type**: the tokens at the top of `src/styles/global.css`.

## Before publishing

1. `site` in `astro.config.mjs` is still `https://example.com`; the sitemap,
   canonical URLs and OG image all depend on it.
2. The `SOCIAL` links in `src/consts.ts` point at bare GitHub and X.
3. Degree dates, the `TIMELINE` entries and the `STATS` figures are placeholders.
4. The open course numbers are the well-known public ones — MIT renumbered
   several of them in 2022, so check them against the current catalogue.
5. All Chinese copy — `src/i18n/ui.ts`, the `zh` blocks in `src/consts.ts` and
   `src/data/tech.ts`, and the reports under `src/content/work/zh/` — is a
   translation of my English draft. Read it as your own voice, not merely as
   accurate Chinese.
6. `site.city` currently reads `Kaohsiung, TW` / `高雄` while the degree entry
   says Shenzhen University. Reconcile the two.
7. **`src/data/tech.ts` is a draft written from general engineering experience.**
   It is presented as your personal opinion, so go through it and make it yours.
8. The three reports under `src/content/work/` are examples.
9. The email is an unobfuscated `mailto:` and will be scraped.

## Deploying

The output is static files. On Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Environment: `NODE_VERSION = 22.14.0`

## Notes on the build

- **Three faces, all self-hosted.** UnifrakturMaguntia is reserved for the
  nameplate, the way a paper reserves its gothic type for the banner. Bodoni
  Moda is the display face — a true didone, the closest free equivalent to the
  commercial faces the reference design uses. Source Serif 4 sets the body,
  because it holds up in narrow columns.
- **Marks are the official brand artwork**, from the Iconify `logos` set, drawn
  at build time and inlined. They are deliberately not redrawn or recoloured.
- **Marks are normalised by height, not fitted into a square.** The set mixes
  aspect ratios from 0.62 to 2.67; sizing them into a square box letterboxes the
  wide ones down to nothing. A fixed height with `w-auto` gives every mark the
  same optical weight.
- **The listing row tints on hover and on focus** rather than reversing to solid
  ink. Full inversion looked stronger but buried the marks, which are artwork
  rather than glyphs.
- **The zoom on the stack page is the View Transitions API.** The mark in the
  listing row and the large one inside the dialog briefly share a
  `view-transition-name`, so the browser morphs one into the other. Only one
  element may carry a given name at a time, so the name is handed over *inside*
  the transition callback: the old snapshot is taken before the callback runs,
  the new one after. Browsers without the API just open the dialog.
- **The articles are native `<dialog>` opened with `showModal()`.** Focus
  trapping, Escape, inerting the page behind and the backdrop all come from the
  browser. Escape is routed through the same zoom-out path so keyboard and mouse
  behave identically. All 17 dialogs are rendered at build time, so opening one
  costs no request.
- **Marks are inlined at build time** — no external requests, nothing shipped to
  the client. Rust and Kafka have near-black brand colours that disappear in the
  night edition, so those follow the ink colour even in the article.
- **Scroll animation is native CSS** (`animation-timeline: view()`), written as
  progressive enhancement: unsupported browsers (Firefox still needs a flag) get
  no entrance animation rather than content that never appears.
- **Everything respects `prefers-reduced-motion`**, including the zoom and drift.
- **In Tailwind v4, `@apply` only works with classes declared via `@utility`,**
  not ones in `@layer components`. The display scale (`deck-*`, `kicker`,
  `standfirst`) is declared with `@utility` for that reason.
