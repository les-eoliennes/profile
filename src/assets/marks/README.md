# Marks

Stack marks chosen deliberately over what the icon sets carry. `getIcon()` in
`src/lib/icons.ts` checks this directory first: a file named `<slug>.svg` wins
over both the Iconify `logos` set and simple-icons, with no code change. The
file needs a `viewBox` starting at `0 0`; its contents are inlined as-is.

| File | Source | Licence as stated by the host |
| --- | --- | --- |
| `c.svg` | Wikimedia Commons — *C Programming Language.svg*, by ElodinKaldwin | Public domain (below the threshold of originality) |
| `react.svg` | react.dev — the site header's logo, light theme | React trademark (Meta), not licensed |
| `rust.svg` | rustacean.net — *rustacean-flat-happy.svg* (Ferris), by Karen Rustad Tölva | CC0 / public domain, as stated on rustacean.net |
| `googlegemini.svg` | Wikimedia Commons — *Google Gemini icon 2025.svg*, extracted from gemini.google/about | Public domain per Commons; Gemini trademark (Google) |

## `c.svg`

C has never had an official logo. The `logos` set's mark is the familiar
hexagon in greys, which reads as washed out beside Go, TypeScript and Python.
This is the same hexagon in blue, the version Wikipedia uses; Commons
describes it as a C logo imitating the C++ one.

Cleaned, not redrawn: the Inkscape metadata, namedview and ids were dropped,
and each path's effective fill (its `style` overrode its `fill` attribute) was
written back as a plain `fill`. The path data and the viewBox are unchanged.

## `react.svg`

The `logos` set's React mark is the bright cyan (`#00D8FF`) of the original
branding. react.dev itself now draws the atom in `#087EA4` on its light
theme (its `text-brand`; `#58C4DC` is the dark-theme variant), which sits
better on the paper.

Copied from react.dev's header, not redrawn: one circle and three stroked
ellipses with `currentColor`, which is resolved here to `#087EA4`. The
original viewBox is `-10.5 -9.45 21 18.9`; since `getIcon()` needs one that
starts at `0 0`, the shapes are wrapped in `translate(10.5 9.45)` and the
viewBox becomes `0 0 21 18.9` — the same drawing, moved into positive space.

## `googlegemini.svg`

The `logos` set carries only Gemini's 2023 lockup: the blue sparkle plus the
wordmark, which at listing size shrinks the symbol to a few pixels.
simple-icons has the sparkle on its own, but monochrome. This is the 2025
sparkle in the four Google colours, as gemini.google draws it.

Commons' copy was extracted from the inline SVG on gemini.google/about (via
the Wayback Machine, 3 July 2025). Cleaned, not redrawn: every `id` and its
`url(#…)` references were prefixed with `gemini-`, because the mark is inlined
several times per page and generic ids like `maskme` would collide. Path data,
gradients, filters and the viewBox are unchanged.

## `rust.svg`

Ferris the crab, the unofficial Rust mascot, in place of the gear-and-R logo:
the community is known by the crab far more than by the mark. Neither icon
set carries Ferris. rustacean.net publishes it under CC0.

Cleaned, not redrawn: the XML declaration, doctype, Serif namespace and layer
ids were dropped. The root `<svg>` carried `fill-rule:evenodd` and the other
rendering hints in its `style`; since `getIcon()` keeps only the children,
that style was moved onto the top-level group so the shapes still fill the
same way. Path data and the viewBox are unchanged.

The Go mark is the Gopher from the `logos` set (aliased in `icons.ts`), so it
needs no file here. The Gopher was designed by Renée French and is licensed
CC BY 4.0.
