# GreenHarvest — Agricultural Advertisement Website

A modern, animated marketing site for a fictional regenerative-agriculture
cooperative. Built as a production-ready landing page showcasing organic
produce, farming practices, subscription boxes, and the people behind the farm.

> Cultivating tomorrow's harvest, today.

---

## Tech Stack

| Layer        | Tool                                                         |
| ------------ | ------------------------------------------------------------ |
| Build tool   | [Vite 6](https://vitejs.dev)                                 |
| Framework    | [React 18](https://react.dev) + [TypeScript 5](https://typescriptlang.org) |
| Styling      | [Tailwind CSS 3.4](https://tailwindcss.com) + CSS variables  |
| UI primitives| [shadcn/ui](https://ui.shadcn.com) (New York style)          |
| Animations   | [Framer Motion 11](https://www.framer.com/motion/)           |
| Icons        | [Lucide](https://lucide.dev)                                 |
| Imagery      | [Unsplash](https://unsplash.com) (free, hot-linked)          |
| Fonts        | Inter + DM Serif Display (Google Fonts)                      |

All dependencies are pinned to their latest stable versions at the time of
scaffolding.

---

## Features

- **Responsive layout** — looks great from a 360 px phone up to ultrawide.
- **Scroll-triggered animations** — every section fades, lifts, and reveals
  using Framer Motion's `whileInView`.
- **Interactive components** — filterable product grid, animated pricing
  toggle, accordion FAQ, scroll-shrinking navbar, mobile drawer.
- **Animated stat counters** that count up the first time they enter the
  viewport.
- **Infinite logo marquee** of partner farms and restaurants.
- **Dark-ready** colour tokens via shadcn-style CSS variables (light theme
  ships by default).
- **Accessible** — semantic HTML, focus rings, keyboard-navigable accordions
  and tabs.
- **Zero runtime config** — drop in and run.

---

## Page Structure

The page composes the following sections (see [`src/App.tsx`](src/App.tsx)):

1. **Navbar** — sticky pill nav with scroll-state, mobile drawer
2. **Hero** — headline, dual CTAs, image collage with floating info cards
3. **Logo Marquee** — partner farms, restaurants, grocers
4. **Features** — six-card grid covering core capabilities
5. **Products** — category-filtered produce showcase
6. **About** — story, image collage, value props
7. **Process** — Sow → Grow → Harvest → Deliver
8. **Stats** — animated impact counters on a dark gradient band
9. **Testimonials** — quotes from chefs, farmers, and home cooks
10. **Pricing** — three subscription tiers with weekly/bi-weekly toggle
11. **FAQ** — accordion of common questions
12. **CTA Banner** — email capture with this-week's-box preview
13. **Footer** — newsletter, contact, social links

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) **18 or newer**
- npm (ships with Node)

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

The site will be available at <http://localhost:5173>.

### Build for production

```bash
npm run build
```

Outputs an optimised static bundle to `dist/`.

### Preview the production build

```bash
npm run preview
```

### Type-check / lint

```bash
npm run build     # runs tsc -b before bundling
```

---

## Project Structure

```
.
├── index.html                  # Vite entry, font preload, meta
├── public/
│   └── leaf.svg                # Favicon
├── src/
│   ├── main.tsx                # React mount point
│   ├── App.tsx                 # Page composition (section order)
│   ├── index.css               # Tailwind layers + CSS vars + utilities
│   ├── vite-env.d.ts
│   ├── lib/
│   │   ├── utils.ts            # cn() class merger
│   │   └── site-config.ts      # Brand, nav, contact, social config
│   └── components/
│       ├── ui/                 # shadcn primitives (button, card, ...)
│       └── site/               # Page sections (hero, footer, ...)
├── tailwind.config.js          # Theme tokens, custom colours, animations
├── postcss.config.js
├── components.json             # shadcn/ui config
├── tsconfig.*.json
└── vite.config.ts
```

---

## Customising

### Brand, nav, and contact info

Open [`src/lib/site-config.ts`](src/lib/site-config.ts) — name, tagline,
navigation items, social URLs, and contact details all live there.

### Colour palette

Theme tokens are defined as CSS variables in
[`src/index.css`](src/index.css) and mapped to Tailwind colours in
[`tailwind.config.js`](tailwind.config.js). Two custom palettes are
included:

- `leaf-{50..900}` — primary green
- `soil-{50..900}` — earthy accent

### Imagery

All images are hot-linked from Unsplash with `?auto=format&fit=crop` query
strings for responsive delivery. To swap an image, find the constant or
inline URL in the relevant section file under `src/components/site/`.

### Adding a shadcn component

```bash
npx shadcn@latest add <component-name>
```

The CLI is pre-configured via [`components.json`](components.json) to write
into `src/components/ui/`.

---

## Scripts

| Script            | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR                |
| `npm run build`   | Type-check then build to `dist/`              |
| `npm run preview` | Serve the production build locally            |
| `npm run lint`    | Lint with ESLint (when configured)            |

---

## Browser Support

Targets evergreen browsers (last 2 versions of Chrome, Firefox, Safari,
Edge). No polyfills shipped.

---

## License

MIT — feel free to use this as a starting point for your own agricultural,
food, or sustainability brand.

Photography © their respective Unsplash contributors and used under the
[Unsplash License](https://unsplash.com/license).
