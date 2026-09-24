# Marks

Stack marks chosen deliberately over what the icon sets carry. `getIcon()` in
`src/lib/icons.ts` checks this directory first: a file named `<slug>.svg` wins
over both the Iconify `logos` set and simple-icons, with no code change. The
file needs a `viewBox` starting at `0 0`; its contents are inlined as-is.

| File | Source | Licence as stated by the host |
| --- | --- | --- |
| `c.svg` | Wikimedia Commons — *C Programming Language.svg*, by ElodinKaldwin | Public domain (below the threshold of originality) |

## `c.svg`

C has never had an official logo. The `logos` set's mark is the familiar
hexagon in greys, which reads as washed out beside Go, TypeScript and Python.
This is the same hexagon in blue, the version Wikipedia uses; Commons
describes it as a C logo imitating the C++ one.

Cleaned, not redrawn: the Inkscape metadata, namedview and ids were dropped,
and each path's effective fill (its `style` overrode its `fill` attribute) was
written back as a plain `fill`. The path data and the viewBox are unchanged.
