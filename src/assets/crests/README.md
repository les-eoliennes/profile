# Crests

`Crest.astro` globs this directory at build time. A file named `<slug>.svg`
(or `.png` / `.webp`) is picked up automatically — no code change. Slugs come
from `src/data/schools.ts`. If a file is missing, the component falls back to a
monogram badge in the school's colour.

All four crests here are SVG.

## What is here, and where it came from

| File | Source | Licence as stated by the host | Vector origin |
| --- | --- | --- | --- |
| `mit.svg` | Wikimedia Commons — *MIT Logo and Wordmark.svg* | Public domain | native vector |
| `szu.svg` | zh.wikipedia — *Shenzhen University Logo.svg* | **Fair use** | native vector |
| `cmu.svg` | Wikimedia Commons — *CMU logo stack cmyk red.jpg* | Public domain | traced from official raster |
| `stanford.svg` | Wikimedia Commons — *Stanford Cardinal logo.svg* + *Stanford logo.png* | Public domain | composite: one native vector part, one traced part |

Everything is transparent.

### Two of these are not simply downloaded

**Carnegie Mellon's three-line stack has no vector source anywhere.** The only
version Wikimedia (or Carnegie Mellon's own usage) publishes is a JPEG, red type
on a white ground. `cmu.svg` was produced by keying that white ground to
transparency, then tracing the resulting clean bitmap with potrace to recover
real vector paths, then filling those paths with the brand red. It is genuine
scalable vector — the outlines came from tracing, not from hand-drawing — and
holds up sharp at any size, unlike the source JPEG would.

**Stanford publishes no combined lockup file.** Wikimedia holds the
block-S-and-tree and the two-line "Stanford University" wordmark as separate
assets. `stanford.svg` is a composite of both, set side by side to match the
standard arrangement:

- The block-S-and-tree is the official vector file (Stanford's monochrome
  cardinal version), embedded directly. Its tree is published white; it was
  recoloured to Stanford green. The tree and its thin keyline are a single
  path, so the keyline greened with it — invisible at the sizes this renders
  at, but a departure from the published mark.
- The wordmark has no vector source, so it went through the same trace as the
  Carnegie Mellon mark: the official PNG (already alpha-isolated, no JPEG
  noise to clean up) traced with potrace, then filled with Stanford's cardinal
  red (`#8C1515`, confirmed by sampling the source PNG rather than guessed).

If exact fidelity matters more than this gets you, replace either file with an
official asset from the school's own brand portal — the component will pick it
up with no code change.

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
overflow, which silently sliced the Carnegie Mellon and Stanford marks down to
a single word each when they were still raster. SVGs pass through untouched.
