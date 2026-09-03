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
    Process.jsx          panel 06 — six-step track
    Footer.jsx           tagline, quick links, expertise
    BackToTop.jsx        floating scroll-to-top control
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

### The work grid

Panel 05 shows six projects at a time in two rows of three, with a pager underneath once there is
more than one page. 16 projects makes three pages; a filter with six or fewer shows no pager at all.

The grid is `auto-fit` rather than a fixed three columns, so it becomes two columns and then one as
the panel narrows instead of squeezing three cards onto a phone. The filter bar wraps onto as many
rows as it needs — it used to be a single row that scrolled sideways, which cut the last filter in
half at most widths, and a filter you cannot see is a filter you will not use.

Two things the pager has to get right, both covered:

- **Changing filter resets to page one**, because a new filter is a new set.
- **Shrinking the set clamps the page.** Going from all 16 to a four-project filter while reading
  page three would otherwise leave an empty grid. The clamp watches the page count rather than only
  the filter, so it also covers the list shrinking for any other reason.

**This is the one panel that does not fit a viewport.** Two rows of image cards come to about
1,295px against a 937px viewport at 1920×1080 — roughly 360px over. A card is ~420px (a 16:9
screenshot plus four lines of body), so two rows are ~860px before the heading, filters and pager
are counted. It cannot be closed by trimming; the levers are one row of three per page, or a card
without the overview line. Until then the panel grows and scrolls, which `min-height` and proximity
snapping already handle.

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

## Adding projects

The portfolio holds **16 projects**, all of them delivered client work. Each carries a real
screenshot of what was built.

Every control that would describe an empty rail — the `01 / 16` counter, the travel arrows, the
filter bar, the reference-build note — stands down when there is nothing to describe, so the panel
reads as empty rather than broken if the list is ever cleared.

A project lives in two places, and both have to move together:

1. **`src/data/content.js`** — the language-independent half: id, tags, gallery and the
   technology list. `projectMedia` is client work; `exampleMedia` is reference builds, which render
   with a *Reference build* badge so a visitor is never led to read one as paid work. It is empty:
   every current project is real client work. Add the id to `projectOrder` / `exampleOrder` to place
   it.
2. **`src/i18n/translations.js`** — the copy, under `projects.items` (or `examples.items`), keyed by
   the same id, **in every locale**. An id present in `content.js` and missing from a locale renders
   a card with no title in that language.

The full shape of an entry, with every field it can carry, is written out as a comment above
`projectMedia` in `content.js`.

Two things worth getting right:

- **`imageSize` must be the file's true pixel dimensions.** The card reserves space from it, so a
  wrong number is a layout shift on every load.
- **`tags` come from `filterKeys`** at the top of `content.js`. Several per project is normal — a
  headless Shopify storefront is Shopify, front-end and API work at once and should appear under all
  three. A filter with no projects behind it hides itself, so unused keys cost nothing.

### Screenshots

Every project carries a **gallery**: every screenshot it has, in `src/assets/projects/` as WebP,
named `<slug>-1.webp`, `<slug>-2.webp` and so on. The 16 projects hold 46 images between them.

**The first shot is the cover.** It is what the card shows and what the dialog opens on, and it is
derived rather than declared — `buildContent` reads `gallery[0]`, so the card and the dialog can
never disagree about which image leads.

- **On the card**, one image, framed at 16:9 with `object-fit: cover` anchored to the top. A hero or
  a page header survives that crop; a centred subject may not, which is worth keeping in mind when
  ordering the gallery.
- **In the dialog**, all of them: one shown at a time with a thumbnail strip beneath. Stacking six
  screenshots vertically would push a project's own description a screen and a half down the panel.
  A project with a single image shows no strip at all.

Nothing in a gallery loads until its dialog is opened — the dialog only mounts when a card is
clicked — so 2.7 MB of screenshots costs a visitor nothing until they ask for one.

Images are prepared at a 1200px maximum width and WebP quality 82. Anything taller than 1500px is
trimmed to that rather than shrunk, so what survives stays readable instead of becoming an
illegible strip.

### Animations

Four of the supplied screenshots were GIFs. They are converted to **animated WebP** — same `<img>`
tag, a fraction of the weight: 8.4 MB of GIF becomes 3.0 MB. Short slideshows keep every frame; a
30fps game clip keeps every second one, which halves the file for motion nobody can tell apart at
this size.

An animated shot keeps its still as well, and a gallery entry carries both:

```js
{ src: kungfu1, size: [1200, 675], anim: kungfu1Anim, animSize: [900, 506] }
```

**The card plays it too**, from a third copy cut for the size a card actually renders at — about
390px, so the dialog's 900px copy would be twice the pixels and three times the weight for detail
nobody sees. A busy clip also gives up more frames here (18fps rather than 30), because a small
looping tile does not need them: the Kungfu clip is 1.34 MB in the dialog and 451 kB on the card.

A gallery entry can therefore carry three versions of one shot:

```js
{ src: kungfu1,          size: [1200, 675],   // the still — poster, and reduced motion
  anim: kungfu1Anim,     animSize: [900, 506],   // the dialog
  card: kungfu1Card,     cardSize: [560, 315] }  // the grid
```

**A project leads its card with its animation wherever that sits in the gallery.** For most of them
the animated shot is already the cover; So Fresh keeps its GIF in the second shot, and its card
follows it there rather than showing a still and hiding the motion a click away.

Under `prefers-reduced-motion` the card shows the still and **no animated file is requested at
all**, and the small `GIF` marker appears — hidden the rest of the time, because a label saying
"GIF" over something visibly moving is noise, but a frozen still needs to say what it stands for.

**The dialog plays it**, and honours `prefers-reduced-motion` through `<picture>`: the still is
offered as a `<source>` behind that media query, so a reader who has asked for less motion gets the
frozen frame with nothing scripted.

### The preview

The dialog's media column is only ~380px wide, so clicking the image opens it full-screen. It shows
at its natural size at most — a 1200px screenshot fills the window, and a 600px one is not upscaled
into blur to pretend it can.

That is a second modal over the first, which is the part worth being careful about, and all of it is
driven in a browser rather than assumed:

- **Escape closes the preview, not the dialog.** A second Escape then closes the dialog.
- **Tab is trapped in whichever layer is on top** — the trap switches scope rather than fighting
  itself.
- **Focus returns to the image** that opened the preview, and moves to the preview's close button
  when it opens.
- **A backdrop click closes only the preview.** It is a sibling of the dialog rather than a child,
  so the click never reaches the dialog's own close-on-backdrop.
- **Switching screenshot closes the preview**, since it would otherwise be showing the wrong one.

Note that headless Chrome does not sustain image animation, so playback cannot be verified from a
script — only that the files are valid animated WebP and that the right source is chosen. A capture
does come back showing a frame other than the first, so it starts; it just does not keep running.
Worth a look in a real browser.

`size` must be the file's true pixel dimensions: the space is reserved from it, so a wrong number is
a layout shift every time the image loads.

The drawn-scene fallback that used to cover a project without a screenshot is gone, along with the
32 inline-SVG scenes behind it. It is recoverable from git history if a project ever needs it.

The stat in the hero counts the rail: it is `projectOrder.length + exampleOrder.length`, so it
corrects itself as projects are added and can never disagree with the `01 / n` readout.

The portrait in `src/assets/avatar.webp` does most of the identity work. It opens the page as the
hero image, and appears as the brand mark in the navigation, in the footer, in the credentials
strip, and as the browser tab icon (`public/favicon.png`, `favicon-32.png`, `apple-touch-icon.png`,
all generated from the same file).

## Pointer

The page carries no decorative mouse effects. There is no cursor glow, no click mark, no parallax on
the background or the portrait, and no spotlight tracking across the project cards — nothing on the
page moves because the pointer moved.

What remains is either an affordance or a control:

- **hover states** — buttons, cards, chips, filters and links respond to hover, because that is how a
  visitor knows they are interactive;
- **the work rail drag** — click and drag the rail sideways to travel it, since a mouse has no
  horizontal scroll of its own (see *Travelling the work rail* above).

Everything still moving does so on its own schedule rather than the pointer's: the backdrop mesh
ripples on a clock, the orbs drift on long CSS animations, and sections reveal on scroll. All of it
is switched off under `prefers-reduced-motion`.

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
