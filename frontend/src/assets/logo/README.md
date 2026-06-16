# Logo assets

The brand emblem is consumed through `src/components/Logo.tsx`, which imports
the file in this folder. The header and footer both render that component, so
swapping the asset here updates the whole site.

## Current asset: official `CTCG_Logo.png`

`Logo.tsx` imports `CTCG_Logo.png` — the official emblem (243×210, white mark on
a transparent background, tuned for the dark theme). Vite fingerprints and
bundles it automatically. To swap the asset, replace this file and keep the name
(or update the import in `src/components/Logo.tsx`).

The earlier placeholder vector (`CTCG_Logo.svg`) is kept here for reference only
and is no longer imported.

## Sizing (per brand guide)

| Placement | Height |
| --------- | ------ |
| Header    | 45–50px (`size={46}`) |
| Footer    | 30–35px (`size={34}`) |
| Favicon   | 32×32px (`public/favicon.svg`) |

Maintain aspect ratio (width auto), keep ≥30px, and leave 10–15px of padding
around the mark.
