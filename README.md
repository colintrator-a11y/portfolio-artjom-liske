# Artjom Liske — Portfolio

Single-page personal portfolio for a freelance front-end developer.
React + Vite, Tailwind CSS v4, Framer Motion, lucide-react.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle → dist/
npm run preview  # serve the production bundle
npm run lint
```

## Where to change things

| What                     | Where                                              |
| ------------------------ | -------------------------------------------------- |
| **All copy**             | `src/data/content.js` — every string on the page    |
| **Contact link**         | `src/components/Contact.jsx` → `CONTACT_URL`        |
| **Colours / typography** | `src/index.css` — the token block at the top        |
| **Project screenshots**  | `public/projects/` + the `image` field per project  |

### Adding a project screenshot

Projects ship with a generated placeholder — a tinted 16:9 block carrying the
project initial. To use a real screenshot:

1. Drop a 16:9 image into `public/projects/`.
2. Set that project's `image` field in `src/data/content.js`:
   ```js
   image: "/projects/vassalli.jpg",
   ```

The `<img>` is lazy-loaded with explicit `width`/`height`, so swapping a
placeholder for a real image causes no layout shift.

### The one thing to fill in

No contact details are hard-coded anywhere. Point `CONTACT_URL` in
`src/components/Contact.jsx` at a mailto, booking page, or profile — every
"Hire me" / "Get in touch" button on the site routes there.

## Structure

```
src/
├── data/content.js        Single source of truth for all copy
├── hooks/
│   ├── useTheme.js        Dark/light in React state (no localStorage)
│   ├── useScrolled.js     Drives the condensing sticky header
│   └── useActiveSection.js  IntersectionObserver nav highlighting
├── components/
│   ├── Header.jsx         Sticky nav, theme toggle, mobile drawer
│   ├── Hero.jsx           Name, tagline, availability badge, stats
│   ├── Projects.jsx       Project grid + award badge
│   ├── ProjectThumb.jsx   Real screenshot or generated placeholder
│   ├── Services.jsx       "What I can do for you"
│   ├── Skills.jsx         Grouped skill pills with experience levels
│   ├── About.jsx          Bio, how I work, languages
│   ├── Contact.jsx        Closing CTA  ← CONTACT_URL lives here
│   ├── Footer.jsx
│   └── ui/                Button, Section, Reveal, AwardBadge
└── index.css              Design tokens + base styles
```

## Notes on the build

- **Theme** — dark by default, toggled in React state and written to a `.dark`
  class on `<html>`. No `localStorage`/`sessionStorage` anywhere.
- **Accessibility** — skip link, keyboard-reachable nav, visible focus rings,
  `aria-current` on the active section, Escape/scroll-lock on the mobile drawer.
  Skill levels are visible labels rather than hover-only text. All text pairs
  meet WCAG AA in both themes.
- **Motion** — `prefers-reduced-motion` is honoured globally and inside every
  scroll reveal. `LazyMotion` ships only the Framer Motion features in use.
- **No layout shift** — thumbnails are locked to a 16:9 box; fonts load with
  `display=swap`.
