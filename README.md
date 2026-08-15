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
| **Project screenshots**  | drop files in `src/assets/projects/` — see below    |

### Project images

Each project ships with an **illustrated cover** in `src/assets/covers/` — an
abstract drawing of the *kind* of interface that project is (a booking flow, a
CMS, a check-in app, a product listing). They are deliberately graphic rather
than photoreal.

> **These are illustrations, not screenshots.** They are not pictures of the
> real shipped products. They exist so the grid looks finished until real
> screenshots replace them, and the alt text says "illustrated cover" so
> assistive tech isn't told otherwise. Replace them with real screenshots
> before the site goes in front of clients.

Regenerate or restyle them with:

```bash
python3 scripts/generate-covers.py
```

### Adding a real screenshot

A real screenshot always beats the illustrated cover — **just drop the file in**:

```
src/assets/projects/vassalli.jpg
```

Name it after the project's `slug` in `src/data/content.js` and it replaces the
placeholder automatically — no code change. The dev server hot-reloads it.

| Filename             | Project                                             |
| -------------------- | --------------------------------------------------- |
| `travel-booking.*`   | Travel Booking & Digital Aviation Platform          |
| `aquarium.*`         | Premium Aquarium Management & Corporate Site        |
| `event-checkin.*`    | Real-Time Event Management & Check-In Platform      |
| `enneagram.*`        | Enneagram Profile Analysis — Personality Assessment |
| `ai-agent.*`         | Autonomous AI Agent for Workflow Automation         |
| `vassalli.*`         | Product Listing — Vassalli                          |
| `ecommerce.*`        | eCommerce Website                                   |
| `wordpress-design.*` | WordPress Website Design                            |

Accepts `.jpg` `.jpeg` `.png` `.webp` `.avif`. Recommended **1600×900**, under
~300 KB (`.webp` compresses best). Images go through Vite, so they get
content-hashed filenames and long-lived cache headers for free.

Only add the ones you have. Projects without a screenshot keep their illustrated
cover, so the grid looks deliberate either way. The `<img>` is lazy-loaded inside
a locked 16:9 box, so adding one causes **no layout shift**.

Resolution order, per project: explicit `image` field → `assets/projects/<slug>`
→ `assets/covers/<slug>.svg` → generated initial block.

For an image you'd rather host elsewhere, set an explicit `image` field on the
project (a `/public` path or a remote URL) — it takes priority over the
filename lookup.

### The one thing to fill in

No contact details are hard-coded anywhere. Point `CONTACT_URL` in
`src/components/Contact.jsx` at a mailto, booking page, or profile — every
"Hire me" / "Get in touch" button on the site routes there.

## Structure

```
scripts/
└── generate-covers.py     Regenerates the illustrated project covers
src/
├── assets/
│   ├── covers/            Illustrated cover art (shipped, not screenshots)
│   └── projects/          Drop real screenshots here — these win
├── data/
│   ├── content.js         Single source of truth for all copy
│   └── projectImages.js   Slug-based screenshot auto-discovery
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
