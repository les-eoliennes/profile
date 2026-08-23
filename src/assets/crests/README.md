# Crests

`Crest.astro` globs this directory at build time. A file named `<slug>.svg`
(or `.png` / `.webp`) is picked up automatically — no code change. Slugs come
from `src/data/schools.ts`. If a file is missing, the component falls back to a
monogram badge in the school's colour.

## What is here, and where it came from

| File | Source | Licence as stated by the host |
| --- | --- | --- |
| `mit.svg` | Wikimedia Commons — *MIT Logo and Wordmark.svg* | Public domain |
| `stanford.svg` | Wikimedia Commons — *Stanford Cardinal logo.svg* | Public domain |
| `cmu.svg` | Wikimedia Commons — *Carnegie Mellon wordmark.svg* | Public domain |
| `szu.svg` | zh.wikipedia — *Shenzhen University Logo.svg* | **Fair use** |

All four are transparent (no background rect; Carnegie Mellon's single `<rect>`
is `fill="none"`).

**`szu.svg` is the exception worth knowing about.** It is hosted under a fair-use
claim rather than a free licence, which is normal for Chinese university crests
but means it is not freely redistributable the way the other three are. Fair use
is a claim about a specific context, not a licence that travels with the file —
so if this site goes anywhere public, check Shenzhen University's own trademark
policy rather than relying on the Wikipedia tag.

Being in the public domain as a *file* is also not the same as being free of
trademark: these marks still identify their institutions. Show only the crests
of schools you actually attended or took courses from, and do not arrange them
so as to imply endorsement or affiliation.

## Shapes

Aspect ratios run from 0.65:1 (Stanford) to 5.71:1 (Carnegie Mellon), so crests
are normalised by **height**, never fitted into a square — a square box shrinks
the wide wordmarks to nothing. `scale` in `schools.ts` corrects tall marks that
would otherwise read too light beside a wordmark.
