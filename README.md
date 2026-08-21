# Artjom Liske — Portfolio

Single-page portfolio for a freelance Full Stack Developer, built with React 18 + Vite.
Six full-viewport panels, a horizontal work rail, and four languages.

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
  App.jsx                panel composition + ambient background
  i18n/
    translations.js      ← ALL site copy, in English, German, Portuguese and Spanish
    LanguageContext.jsx  provider, detection and persistence
  data/content.js        shared assets + buildContent(lang)
  hooks/
    useReveal.js         IntersectionObserver scroll-reveal
    useScrollSpy.js      active-panel tracking for the rail
    useTheme.js          light/dark preference
    usePointerDepth.js   pointer-driven parallax on the ambient background
  utils/
    scrollToSection.js   nav-offset aware smooth scrolling
    notifyVisit.js       one ping per tab session to the shared notifier
  styles/global.css      design tokens, panel layer, buttons, chips
  components/
    BackdropMesh.jsx     the rippling 3D mesh behind the page, on a canvas
    Navbar.jsx           slim header: brand, theme, language, CTA, mobile drawer
    PanelRail.jsx        panel-position marks down the right edge (desktop)
    LanguageSwitcher.jsx dropdown in the header, button row in the drawer
    Hero.jsx             panel 01 — claim, CTAs, stat band
    HeroPortrait.jsx     the portrait in its gradient frame
    About.jsx            panel 02 — biography, highlights, credentials strip
    Services.jsx         panel 03 — six service tiles
    Skills.jsx           panel 04 — stack summaries + six category tiles
    Projects.jsx         panel 05 — filterable horizontal work rail
    ProjectCard.jsx      one card on that rail
    ProjectDialog.jsx    the full record for one project
    ProjectVisual.jsx    inline-SVG interface mockups (one scene per build)
    Process.jsx          panel 06 — six-step track
    Footer.jsx           tagline, quick links, expertise
    BackToTop.jsx        floating scroll-to-top control
    ClickPulse.jsx       the burst that answers a click, anywhere on the page
    ui/                  Panel, Icon, Reveal, SectionHead primitives
```

Each component keeps its styles in a sibling `.css` file, imported by the component.

## The panel deck

Every section fills the viewport and carries its own number (`01 / 06`). `ui/Panel.jsx` draws that
number from its position in `sectionIds`, so a panel can never disagree with the navigation about
where it sits, and reordering the page renumbers it.

Navigation follows from that. The header keeps only the brand and the controls; **where the reader
is** is reported by `PanelRail.jsx`, a column of marks down the right edge. Below 900px the rail is
hidden and the drawer in the header takes over, so exactly one navigation exists at any width.

### Travelling the work rail

Panel 05 holds every project in one horizontal row. Each input moves it the way that input already
works elsewhere:

| Input | How it travels |
| --- | --- |
| trackpad / horizontal wheel | native scroll |
| touch and pen | native scroll, with the platform's own momentum |
| mouse | drag the rail, or the two travel buttons |
| keyboard | Tab moves focus to the next card and the browser scrolls it into view |
| scrollbar | native |

Only the mouse drag is implemented by hand, because a mouse has none of the others. It is mouse-only
on purpose: touch and pen already scroll with momentum and rubber-banding that a hand-rolled drag
cannot reproduce, and taking those over would make the rail worse on the devices where it already
works.

Nothing happens until the pointer passes 5px of slop, so pressing a card and releasing it still
opens the card. Past the slop the gesture becomes a drag: snapping is switched off so it does not
fight the pointer, selection is switched off so dragging across the row does not sweep up every
title as highlighted text, and the click that `pointerup` would otherwise produce is swallowed so a
drag ending on a card does not also open it. On release, snapping comes back and settles the rail
onto the nearest card.

Snapping is `scroll-snap-type: y proximity`, never `mandatory` — a mandatory snap fights anyone
reading a long panel and traps keyboard scrolling between two stops. Panels use `min-height: 100svh`
rather than `height`, so a panel whose content outgrows the viewport grows instead of clipping.

**Where the panels actually fit.** Measured against real viewports:

| Window | Result |
| --- | --- |
| 1920×1080 | all six panels fit exactly |
| 1600×1000 | five fit; *about* runs ~55px over |
| 1440×900 | five fit; *about* ~115px over, *projects* ~25px over |
| under 900px wide, or under 720px tall | snapping is switched off and the panels stack as an ordinary scrolling document |

The about panel is the stubborn one: it carries five biography paragraphs, four highlights and a
full credentials strip, and that is roughly 930px of content however it is packed. It is laid out to
fit 1080p and to scroll gracefully below that rather than to drop any of the content. If you would
rather it always fit, the lever is content — fewer biography paragraphs — not more CSS.

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

Alongside the client work, the same rail carries **reference builds**: demonstrations of capabilities on
the profile that have no client project attached. Three of them (the Telegram order bot, the
WhatsApp booking bot and the multi-channel bot with agent handover) ship with captured screenshots;
the rest are drawn as inline SVG in `ProjectScenes.jsx` and `ProjectScenesMore.jsx` — the interface
each build would actually run in, at any resolution, with no network requests.

They are **not** client deliveries and the site never presents them as such: each is numbered
"Example 01/02" rather than "Project", carries a *Reference build* badge, and a closing line under
the rail states that everything else was delivered for a paying client. Remove `exampleMedia`
and `exampleOrder` from `content.js` to drop them entirely.

The portrait in `src/assets/avatar.webp` does most of the identity work. It opens the page as the
hero image, and appears as the brand mark in the navigation, in the footer, in the credentials
strip, and as the browser tab icon (`public/favicon.png`, `favicon-32.png`, `apple-touch-icon.png`,
all generated from the same file). Workana serves it at 640px; drop a higher-resolution copy in and
regenerate the favicons if the hero is ever shown larger than ~380px.

## Design system

Soft product: a lilac-white ground (`#faf8ff`), a violet-to-pink accent (`#7c3aed` → `#ec4899`),
Plus Jakarta Sans throughout with JetBrains Mono kept for counters and small labels, generous radii
(10–30px), and glass panels over the coloured light drifting behind the page.

Every colour, radius, shadow and font is a custom property in `src/styles/global.css`, so the whole
palette retunes from one place. Light is the base and `:root[data-theme='dark']` — a deep violet
rather than a grey — is the alternate.

Three accent tokens exist because they behave differently, and mixing them up is the easy way to
produce unreadable text:

| Token | What it is | Partner text colour |
| --- | --- | --- |
| `--accent` | the readable text tone — links, icons, labels | — |
| `--accent-fill` | the solid accent as a fill — markers, icon tiles | `--on-accent` |
| `--grad-brand` | the violet→pink pair — primary button, active filter, active tile | `--on-brand` |

`--accent-fill` and `--grad-brand` are not interchangeable: each has its own partner, and painting
one with the other's text colour is how a button ends up illegible in one theme only.


## Notes on the build

- **Performance** — no UI/animation/icon libraries; React + ReactDOM are the only dependencies.
  Icons are inline SVG, visuals are inline SVG, fonts load with `display=swap`.
- **SEO** — descriptive title/description/keywords, canonical, Open Graph, Twitter cards,
  JSON-LD `Person` schema, semantic landmarks, one `<h1>`, `aria-labelledby` on every section.
- **Accessibility** — skip link, visible focus rings, labelled controls, `prefers-reduced-motion`
  disables animations and smooth scrolling.
- **Responsive** — mobile-first, fluid `clamp()` type, breakpoints at 600 / 680 / 900 / 1024 / 1140px.

As requested, the site contains no contact page, no contact form, no demo links and no pricing section.
