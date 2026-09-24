# Crests

`Crest.astro` globs this directory at build time. A file named `<slug>.svg`
(or `.png` / `.webp`) is picked up automatically — no code change. Slugs come
from `src/data/schools.ts`. If a file is missing, the component falls back to a
monogram badge in the school's colour.

All seven crests here are SVG.

## What is here, and where it came from

| File | Source | Licence as stated by the host | Vector origin |
| --- | --- | --- | --- |
| `mit.svg` | Wikimedia Commons — *MIT Logo and Wordmark.svg* | Public domain | native vector |
| `szu.svg` | zh.wikipedia — *Shenzhen University Logo.svg* | **Fair use** | native vector |
| `cmu.svg` | Wikimedia Commons — *CMU logo stack cmyk red.jpg* | Public domain | traced from official raster |
| `stanford.svg` | Stanford's own identity site + Wikimedia Commons | Stanford Trademark Licensing | composite: one native vector part, one traced part |
| `yale.svg` | yale.edu — the site header's sprite, `sites/all/themes/yale_blue/images/icons.svg` | Yale trademark, not licensed | native vector |
| `harvard.svg` | harvard.edu — the header logo, a data URI in the theme's `master.min.css` | Harvard trademark, not licensed | native vector |
| `oxford.svg` | ox.ac.uk — the header logo, `themes/custom/numiko/dist/oxford-logo-DzIWfeXH.svg` | Oxford trademark, not licensed | native vector |

Everything is transparent except `oxford.svg`, whose mark *is* a filled
Oxford Blue square.

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

**`yale.svg` is the wordmark from Yale's own home page**, not a
redrawing. yale.edu draws its header logo from a single SVG sprite
(`icons.svg`, 317×192) holding the wordmark at two sizes and in two colours;
this file is the large Yale Blue (`#00356B`) path, which the header shows at
`background-position: 0 0` in a 169×76 box. The path is copied unchanged and
its bounds already run exactly 0,0 to 168.889×76, so the viewBox is those
bounds and nothing was cropped or rescaled.

**`harvard.svg` is harvard.edu's header logo**, byte for byte. The site
inlines it as a data URI in its theme stylesheet, in two variants that differ
only in which class is white: one for the header over a photo (white
wordmark) and the default `.logo__wrap` one, with the wordmark in `#1e1e1e`
beside the Crimson (`#a51c30`) VE RI TAS shield. This is the default, dark
wordmark variant, URL-decoded and otherwise untouched; its content fills
the 280.3×70.4 viewBox.

**`oxford.svg` is ox.ac.uk's header logo**, byte for byte (25,007 bytes,
SHA-256 `51da7e95ed0a4dd7120d8494f9370a9fc6e1f321bdad4db859ed302f2d02f74a`).
ox.ac.uk answers non-browser clients with a bot challenge, so it was not
fetched with curl: the file was read from the page as the browser had loaded
it, and the saved copy checked against that hash. The mark is the belted
arms and UNIVERSITY OF OXFORD in white on an Oxford Blue (`#002147`) square;
its viewBox is 81×80 with the square inset half a unit either side.

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

**`yale.svg`, `harvard.svg` and `oxford.svg` are trademarks**, each taken
from the university's own home page, none of which publishes a licence for
the mark. Each school's identity guidelines govern its use; check them before
this goes anywhere public, same as SZU and Stanford.

Public domain as a *file* is not the same as free of trademark: these marks
still identify their institutions. Show only the crests of schools you actually
attended or took courses from, and do not arrange them so as to imply
endorsement or affiliation.

## Shapes

Ratios run 1.0:1 (Shenzhen, Oxford) to 3.98:1 (Harvard). Crests are
normalised by **height**, never fitted into a square. A shared height alone is
not enough either: Carnegie Mellon's three-line stack at MIT's height gives each
line a third the size and stops being readable, so `scale` in `schools.ts`
roughly equalises area instead.

Pass **only** a height to `<Image>`. Supplying a width as well makes the image
pipeline resize raster sources to exactly those dimensions and crop the
overflow, which silently sliced the Carnegie Mellon and Stanford marks down to
a single word each when they were still raster. SVGs pass through untouched.
