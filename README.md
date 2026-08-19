# Artjom Liske — Portfolio

Single-page portfolio for a freelance Full Stack Developer, built with React 18 + Vite.

## Running it

Node.js 18+ is required. Verified against Node 24.19.0 LTS.

```bash
npm install
npm run dev      # local dev server on http://localhost:5173
npm run build    # production bundle in ./dist
npm run preview  # serve the production build locally
```

## Structure

```
index.html               SEO meta, Open Graph, JSON-LD Person schema, fonts
public/                  robots.txt, sitemap.xml, favicons
src/
  main.jsx               entry point
  App.jsx                page composition + ambient background
  i18n/
    translations.js      ← ALL site copy, in English, German, Portuguese and Spanish
    LanguageContext.jsx  provider, detection and persistence
  data/content.js        shared assets + buildContent(lang)
  hooks/
    useReveal.js         IntersectionObserver scroll-reveal
    useScrollSpy.js      active-section tracking for the nav
    useTheme.js          light/dark preference
    usePointerDepth.js   pointer-driven parallax on the ambient background
  utils/
    scrollToSection.js   nav-offset aware smooth scrolling
    notifyVisit.js       one ping per tab session to the shared notifier
  styles/global.css      design tokens, layout primitives, buttons, chips
  components/
    Navbar.jsx           sticky nav, scroll spy, mobile drawer
    LanguageSwitcher.jsx dropdown in the nav, button row in the drawer
    Hero.jsx             headline, CTAs, pillars, stat band
    HeroVisual.jsx       animated code-window mockup
    About.jsx            biography, highlights, profile card
    Services.jsx         six service cards
    Skills.jsx           six skill categories as a depth-stacked deck
    Projects.jsx         filterable grid of client work and reference builds
    ProjectCard.jsx      one tile in that grid
    ProjectDialog.jsx    the full record for one project
    ProjectVisual.jsx    inline-SVG interface mockups (one scene per build)
    Process.jsx          six-step workflow
    Footer.jsx           tagline, quick links, expertise
    BackToTop.jsx        floating scroll-to-top control
    ui/                  Icon, Reveal, SectionHead primitives
```

Each component keeps its styles in a sibling `.css` file, imported by the component.

## Languages

The site ships in **English, German, Portuguese and Spanish** — the four languages on the profile.
The switcher sits in the navigation (a dropdown) and in the mobile drawer (a row of buttons). The
chosen language is stored in `localStorage`; a first-time visitor gets their browser's language if
it is one of the four, and English otherwise. English rather than German is the fallback because the
site is aimed at clients in several countries; a German visitor is picked up by detection. Switching
updates `<html lang>` so screen readers and search engines follow.

To add a language: append it to `languages` in `src/i18n/translations.js`, add a locale object with
the same shape as `en`, and the switcher picks it up automatically.

## Editing content

Everything readable on the page — headline, biography, services, skills, projects, process steps,
footer, and every UI label — comes from `src/i18n/translations.js`, one block per language.
Language-independent data (images, technology names, certifications) lives in `src/data/content.js`,
which merges the two with `buildContent(lang)`.

### Content provenance

All content is grounded in Artjom's published freelancer profile. Taken directly from it: the skill
list, project titles and technology stacks, certifications and scores, languages and levels, the
hourly rate, the Bronze level and the "Preferred Freelancer of the Quarter" recognition.

Project overviews and feature lists are written from each project's title and stack — they contain
**no invented metrics or outcome figures**, because the profile publishes none. In particular the
site claims no client rating, no completed-project count and no marketplace ranking, since the
profile currently records none of those.

### Before publishing

1. **Canonical URL** — `index.html`, `public/robots.txt` and `public/sitemap.xml` use
   `https://artjom-liske.vercel.app/`. Swap in the real domain.
2. **Profile link** — `profile.profileUrl` in `src/data/content.js` is empty, so the note at the
   foot of the About card renders as plain text and the site carries no outbound link. Set it to the
   public profile URL to turn that note into a link.

## Project imagery

The eight client projects come from the profile portfolio. Seven use **real screenshots of the
delivered work**, stored in `src/assets/projects/` as WebP. Each renders at its own aspect ratio
with `width`/`height` set from `imageSize` in `content.js`, so no layout shift occurs and nothing
is cropped.

The eighth — Product Listing, Vassalli — has no screenshot on file, so it falls back to an inline
SVG of the storefront it was built in rather than to a stock photo standing in for a screenshot.

### Reference builds

Below the client work, the same grid carries **reference builds**: demonstrations of capabilities on
the profile that have no client project attached. Three of them (the Telegram order bot, the
WhatsApp booking bot and the multi-channel bot with agent handover) ship with captured screenshots;
the rest are drawn as inline SVG in `ProjectScenes.jsx` and `ProjectScenesMore.jsx` — the interface
each build would actually run in, at any resolution, with no network requests.

They are **not** client deliveries and the site never presents them as such: each is numbered
"Example 01/02" rather than "Project", carries a dashed *Reference build* badge, and a closing line
under the grid states that everything else was delivered for a paying client. Remove `exampleMedia`
and `exampleOrder` from `content.js` to drop them entirely.

The portrait in `src/assets/avatar.webp` is the site's logo. It appears as the brand mark in the
navigation, in the footer, in the About card, and as the browser tab icon (`public/favicon.png`,
`favicon-32.png`, `apple-touch-icon.png`, all generated from the same file).

## Design system

Dark technical: graphite ground (`#0c0d10`), an acid-lime accent (`#b6f24a`), Space Grotesk for
display headings, Inter for body text and JetBrains Mono for labels, eyebrows and technology chips.
Corners are nearly square (2–8px), structure is drawn with hairline rules, and the wireframe solids
drifting behind the page are stroked in the accent.

Every colour, radius, shadow and font is a custom property in `src/styles/global.css`, so the whole
palette retunes from one place.

**Dark is the base, not an override.** `:root` carries the dark palette and `:root[data-theme='light']`
is the alternate, so a browser that never runs the boot script still paints the intended ground.

Three accent tokens exist because they behave differently between the two themes, and mixing them up
is the easy way to produce unreadable text:

| Token | What it is | Light | Dark |
| --- | --- | --- | --- |
| `--accent` | the readable *text* tone — links, icons, eyebrows | deep olive | lime |
| `--accent-fill` | the brand colour as a *fill* — primary button, markers | lime | lime |
| `--grad-brand` | the accent→cyan gradient — active filter, active skill tab | deep | bright |

`--accent-fill` never flips, so anything painted with it takes `--on-accent`. `--grad-brand` does
flip, so anything painted with it takes `--on-brand`. The two are not interchangeable.

## Notes on the build

- **Performance** — no UI/animation/icon libraries; React + ReactDOM are the only dependencies.
  Icons are inline SVG, visuals are inline SVG, fonts load with `display=swap`.
- **SEO** — descriptive title/description/keywords, canonical, Open Graph, Twitter cards,
  JSON-LD `Person` schema, semantic landmarks, one `<h1>`, `aria-labelledby` on every section.
- **Accessibility** — skip link, visible focus rings, labelled controls, `prefers-reduced-motion`
  disables animations and smooth scrolling.
- **Responsive** — mobile-first, fluid `clamp()` type, breakpoints at 600 / 680 / 900 / 1024 / 1140px.

As requested, the site contains no contact page, no contact form, no demo links and no pricing section.
