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
| `stanford.svg` | Stanford's own identity site + Wikimedia Commons | Stanford Trademark Licensing | composite: one native vector part, one traced part |

Everything is transparent.

### Two of these are not simply downloaded

**Carnegie Mellon's three-line stack has no vector source anywhere.** The only
version published — by Carnegie Mellon or anyone mirroring it — is a JPEG, red
type on a white ground. `cmu.svg` was produced by keying that white ground to
transparency, then tracing the resulting clean bitmap with potrace to recover
real vector paths, then filling those paths with the brand red. It is genuine
scalable vector — the outlines came from tracing, not from hand-drawing.

**`stanford.svg` is a composite**, built from two assets on Stanford's own
identity site (`identity.stanford.edu/visual-identity/stanford-logos/`) rather
than from Wikimedia:

- The block-S-and-tree is Wikimedia's vector file (`Stanford Cardinal
  logo.svg`), embedded directly and recoloured. Its tree is published white;
  the green fill (`#007662`) was sampled from Stanford's own official raster
  of the same mark (`block-s-right.png`), not guessed. The tree and its thin
  keyline are a single path, so the keyline greened with it — invisible at the
  sizes this renders at, but a departure from the published mark.
- The wordmark has no vector source anywhere, official or otherwise, so it was
  traced with potrace from Stanford's own official PNG
  (`stanford-university-stacked.png`, 600×400 — noticeably higher fidelity
  than the 187×86 Wikimedia copy used in an earlier pass, and the reason the
  first version of this file did not quite match Stanford's actual wordmark
  font). Filled with `#8C1515`, sampled from the same source and confirmed
  against the histogram of its most common ink pixel rather than a single
  sample point.

If exact fidelity matters more than this gets you, replace either file with an
official asset from the school's own brand portal — the component will pick it
up with no code change.

## Licensing

**`szu.svg` is fair-use, not freely licensed** — normal for a Chinese
university crest, but a claim about a specific context rather than a licence
that travels with the file. Check Shenzhen University's own trademark policy
before this site goes public.

**`stanford.svg` now derives partly from Stanford's own identity site**, which
publishes these assets for identifiable, approved uses and asks that requests
outside those be routed through `trademark_licensing@stanford.edu`. The block
and wordmark here are unmodified in intent (same colours, same relative
arrangement) but assembled into a file Stanford did not publish as such — check
their trademark policy before this goes anywhere public, same as SZU.

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
