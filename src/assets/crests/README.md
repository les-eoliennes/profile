# Crests

`Crest.astro` globs this directory at build time. A file named `<slug>.svg`
(or `.png` / `.webp`) is picked up automatically — no code change. Slugs come
from `src/data/schools.ts`. If a file is missing, the component falls back to a
monogram badge in the school's colour.

## What is here, and where it came from

| File | Source | Licence as stated by the host | Processing |
| --- | --- | --- | --- |
| `mit.svg` | Wikimedia Commons — *MIT Logo and Wordmark.svg* | Public domain | none |
| `szu.svg` | zh.wikipedia — *Shenzhen University Logo.svg* | **Fair use** | none |
| `cmu.png` | Wikimedia Commons — *CMU logo stack cmyk red.jpg* | Public domain | white ground keyed to transparency |
| `stanford.png` | Wikimedia Commons — *Stanford Cardinal logo.svg* + *Stanford logo.png* | Public domain | **composed lockup**, tree recoloured |

Everything is transparent; corner alpha is 0 on both rasters.

### Two of these were not simply downloaded

**`cmu.png`** started as the official three-line stack, which is published as red
type on a *white* ground rather than white on red. Alpha was derived from each
pixel's distance from white — the green channel carries almost the whole swing —
so the antialiased edges survive instead of being hard-keyed. The type is the
brand red as published; nothing was recoloured.

**`stanford.png` is a composite, not an official single file.** Wikimedia holds
the block-S-and-tree and the two-line "Stanford University" wordmark as separate
assets and no combined lockup, so the two were set side by side to match the
standard arrangement. The available block is Stanford's *monochrome cardinal*
version, whose tree is white; it was recoloured to Stanford green. The tree and
the thin keyline are a single path, so the keyline greened with it — invisible at
the sizes this renders at, but it is a departure from the published mark.

If exact fidelity matters, replace this file with an official lockup from
Stanford's own brand portal.

## Licensing

**`szu.svg` is the one to settle.** It is hosted under a fair-use claim rather
than a free licence, which is normal for Chinese university crests. Fair use is
a claim about a specific context, not a licence that travels with the file — so
check Shenzhen University's own trademark policy before this site goes public.

Public domain as a *file* is not the same as free of trademark: these marks
still identify their institutions. Show only the crests of schools you actually
attended or took courses from, and do not arrange them so as to imply
endorsement or affiliation.

## Shapes

Ratios run 1.0:1 (Shenzhen) to 3.5:1 (MIT). Crests are normalised by **height**,
never fitted into a square. A shared height alone is not enough either: Carnegie
Mellon's three-line stack at MIT's height gives each line a third the size and
stops being readable, so `scale` in `schools.ts` roughly equalises area instead.

Pass **only** a height to `<Image>`. Supplying a width as well makes the image
pipeline resize raster sources to exactly those dimensions and crop the
overflow, which silently sliced the Carnegie Mellon and Stanford marks down to a
single word each. SVGs pass through untouched, so the bug hid until the first
PNG crest arrived.
