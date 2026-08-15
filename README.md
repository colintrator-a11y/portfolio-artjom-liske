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

Seven of the eight cards use **real screenshots of the delivered work**, in
`src/assets/projects/`. They were extracted from a screenshot of the Workana
profile, so their source resolution is only ~166x100 — they read fine at card
size but are visibly soft. **Replacing them with full-size exports is the single
biggest visual upgrade available.**

`Product Listing — Vassalli` has no screenshot on the Workana profile, so it
falls back to an openly-licensed stand-in photo in `src/assets/covers/`. See
[src/assets/covers/CREDITS.md](src/assets/covers/CREDITS.md).

The portrait in the About section is `src/assets/avatar.webp`.

### Replacing a project image

Drop a file into `src/assets/projects/` named after the project's `slug`:

```
src/assets/projects/vassalli.jpg
```

It replaces whatever was there — no code change, and the dev server hot-reloads.

| Filename             | Project                                             |
| -------------------- | --------------------------------------------------- |
| `travel-booking.*`   | Travel Booking & Digital Aviation Platform          |
| `aquarium.*`         | Premium Aquarium Management & Corporate Site        |
| `event-checkin.*`    | Real-Time Event Management & Check-In Platform      |
| `enneagram.*`        | Enneagram Profile Analysis — Personality Assessment |
| `ai-agent.*`         | Autonomous AI Agent for Workflow Automation         |
| `vassalli.*`         | Product Listing — Vassalli  *(no real shot yet)*    |
| `ecommerce.*`        | eCommerce Website                                   |
| `wordpress-design.*` | WordPress Website Design                            |

Accepts `.webp` `.jpg` `.jpeg` `.png` `.avif`. Recommended **1600x900**.
Images go through Vite, so they get content-hashed filenames and long-lived
cache headers. The `<img>` is lazy-loaded inside a locked 16:9 box, so swapping
one causes **no layout shift**.

Resolution order, per project: explicit `image` field → `assets/projects/<slug>`
→ `assets/covers/<slug>` → generated initial block.

#### Getting sharp originals

Workana serves portfolio images from `workana.s3.amazonaws.com` via time-limited
signed URLs. On your own profile, right-click a portfolio image → **Copy image
address**, and that URL downloads the full-resolution original (valid ~6 hours).

## Structure

```
src/
├── assets/
│   ├── avatar.webp        Portrait used in the About section
│   ├── covers/            Licensed stand-ins for projects with no screenshot
│   └── projects/          Real screenshots — these win
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
