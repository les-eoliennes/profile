# Crests

Drop a school's crest here as `<slug>.svg` (or `.png` / `.webp`) and the
education page picks it up automatically — no code change. The slugs come from
`src/data/schools.ts`:

| File | School |
| --- | --- |
| `szu.svg` | Shenzhen University |
| `mit.svg` | Massachusetts Institute of Technology |
| `stanford.svg` | Stanford University |
| `cmu.svg` | Carnegie Mellon University |

Until a file exists, `Crest.astro` renders a monogram badge in the school's
colour instead.

These are trademarked institutional marks. They are not vendored here because
using them implies a claim about affiliation — add only the crests of schools
you actually attended or took courses from, and check each school's brand or
trademark policy first. Square or circular artwork works best; the component
renders into a square box with `object-contain`.
