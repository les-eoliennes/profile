# Marks

Stack marks chosen deliberately over what the icon sets carry. `getIcon()` in
`src/lib/icons.ts` checks this directory first: a file named `<slug>.svg` wins
over both the Iconify `logos` set and simple-icons, with no code change. The
file needs a `viewBox` starting at `0 0`; its contents are inlined as-is.

| File | Source | Licence as stated by the host |
| --- | --- | --- |
| `c.svg` | Wikimedia Commons — *C Programming Language.svg*, by ElodinKaldwin | Public domain (below the threshold of originality) |
| `react.svg` | react.dev — the site header's logo, light theme | React trademark (Meta), not licensed |

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
