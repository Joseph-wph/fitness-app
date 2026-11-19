# Primal Training

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4.3 · shadcn/ui

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

Open the folder in VS Code (`code .`) and accept the recommended extensions.

## Single Source of Truth

Everything you would normally edit lives in one place:

| What to change            | File                       |
| ------------------------- | -------------------------- |
| All text, links, hours    | `src/config/site.ts`       |
| All image paths + alt text| `src/config/assets.ts`     |
| Fonts (Geist + Anek Tamil)| `src/config/fonts.ts`      |
| Brand colors, radius      | `src/app/globals.css` (`:root`, mapped in `@theme inline`) |
| Type sizes                | `src/app/globals.css` (`@utility` blocks) |
| Shared types              | `src/types/content.ts`     |

Components in `src/components/sections/` only render what these files provide.

## Connecting your images

Save your photos in `public/images/` using these names (or edit `src/config/assets.ts`):

- `hero-training.jpg` — box-jump photo (desktop/tablet: wide, 3:2 works well)
- `open-gym.jpg` — woman with battle ropes (portrait, 4:5)
- `community-barbell.jpg` — black & white barbell squat photo (square or wide; the grayscale filter is applied in code)
- `logo-mark.svg` — logo mark (replace with your final vector)

The files currently there are placeholders.

## Breakpoints (Figma frames)

| Frame   | Figma width | Tailwind prefix | Layout applies from |
| ------- | ----------- | --------------- | ------------------- |
| Mobile  | 375px       | (none)          | < 768px             |
| Tablet  | 800px       | `md:`           | ≥ 768px             |
| Desktop | 1280px      | `lg:`           | ≥ 1024px            |

Type sizes and section heights are tuned to the Figma widths
(see `@utility` blocks in `src/app/globals.css` and `rowHeight` in
`src/components/sections/feature-grid.tsx`).

## Structure

```
src/
  app/            layout, page, globals.css
  components/
    ui/           shadcn/ui primitives (button, sheet)
    sections/     header, hero, feature-grid, community, join-cta, footer
  config/         site.ts, assets.ts, fonts.ts   <- SSOT
  lib/utils.ts    cn() helper
  types/          content types
public/images/    image assets
```

Add more shadcn components with `npx shadcn@latest add <component>` (`components.json` is already configured).

> Tailwind v4: there is no `tailwind.config.ts`; theme tokens live in `src/app/globals.css`. Requires Node 20.9+.
