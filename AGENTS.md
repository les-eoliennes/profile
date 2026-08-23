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
- Logos come from `simple-icons` via `src/lib/icons.ts`, resolved at build time.

## Things that will bite

- Tailwind v4 `@apply` only accepts classes declared with `@utility`, not ones
  inside `@layer components`. The display scale is declared with `@utility`.
- `aspect-*` combined with `max-h-*` shrinks the element's WIDTH to preserve the
  ratio. This silently narrowed the logo scatter field; set the ratio alone.
- Two elements must never carry the same `view-transition-name` simultaneously.
  The zoom hands the name over inside the transition callback — see `morph()`
  in `Behaviors.astro`.
- Image paths in content collections resolve relative to the mdx file, so covers
  must sit in the same directory.
- Scroll-driven animation must stay "visible by default, animation layered on",
  or Firefox renders nothing.
- `z.string().url()` is deprecated in zod 4; use `z.url()`.

Full docs at https://docs.astro.build
