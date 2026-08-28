/**
 * Language-independent site data, plus `buildContent(lang)` which merges it
 * with the translated strings in `src/i18n/translations.js`.
 *
 * Content is grounded in Artjom Liske's published freelancer profile: skills,
 * project titles, technologies, certifications, languages, rate and level are
 * taken from it, and the client-project screenshots are his own images.
 * Project overviews and feature lists are written from each project's title
 * and technology stack - they deliberately contain no invented metrics,
 * because the profile publishes none.
 */

import { translations } from '../i18n/translations'

import avatarImg from '../assets/avatar.webp'

/*
 * Filter buttons, in the order they appear. Language-independent: the visible
 * label comes from `ui.filters`, so a project never has to be re-tagged when a
 * translation changes.
 *
 * Projects carry several tags rather than one discipline, because most of them
 * genuinely belong in more than one place - a headless Shopify storefront is
 * Shopify work, front-end work and API work at once, and a visitor hunting for
 * any of the three should find it.
 */
export const filterKeys = [
  'all',
  'ecommerce',
  'shopify',
  'wordpress',
  'php',
  'mobile',
  'frontend',
  'api',
  'chatbot',
  'automation',
]

/* Identity - the same in every language. */
export const profile = {
  name: 'Artjom Liske',
  shortName: 'Artjom Liske',
  monogram: 'AL',
  avatar: avatarImg,
  location: 'Germany',
  /*
   * Set this to the public freelancer profile URL to turn the note at the foot
   * of the About card into an outbound link. Left empty, the note renders as
   * plain text and the site carries no outbound link at all.
   */
  profileUrl: '',
}

export const sectionIds = [
  'home',
  'about',
  'services',
  'skills',
  'projects',
  'process',
]

const pillarDetails = [
  'React.js · Next.js · Node.js · NestJS',
  'React Native · Flutter · Android · iOS',
  'WooCommerce · WordPress · Shopify',
  'REST APIs · Integrations · Chatbots',
]

const serviceIcons = ['layers', 'cart', 'mobile', 'api', 'layout', 'ai']

const skillIcons = ['layout', 'server', 'mobile', 'cart', 'tools', 'ai']

/* Technology names are proper nouns and stay untranslated. */
const skillItems = [
  ['React.js', 'Next.js', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  ['Node.js', 'NestJS', 'PHP', 'Laravel', 'Python', 'MySQL', 'PostgreSQL', 'SaaS'],
  ['React Native', 'Flutter', 'Android', 'iOS', 'Windows Mobile', 'Mobile App Design'],
  ['E-commerce', 'WooCommerce', 'WordPress', 'Shopify', 'Marketing'],
  ['Responsive Web Design', 'Modern UI Development', 'Cross-Device Layouts'],
  ['REST API', 'API Integration', 'Chatbots', 'ChatGPT', 'Process Automation', 'Third-Party Integrations', 'Google Maps', 'DevOps'],
]

/* Official test titles - left in their original language. */
export const certifications = [
  { name: 'WordPress Intermedio', score: '96%' },
  { name: 'WordPress Avanzado', score: '93%' },
  { name: 'Test de inglés', score: '80%' },
]

/*
 * Projects — empty, waiting for real entries.
 *
 * Two collections, identical in shape. `projectMedia` is client work.
 * `exampleMedia` is reference builds: own demonstrations rather than paid
 * work, marked as such on the card so a visitor is never led to read one as a
 * delivery. Everything in `exampleMedia` renders with that badge; everything
 * in `projectMedia` does not.
 *
 * Each entry needs a matching block under `projects.items` (or
 * `examples.items`) in EVERY locale of `src/i18n/translations.js`, keyed by
 * the same id. An id present here and missing there renders a card with no
 * title, so the two have to move together.
 *
 * The shape, with everything an entry can carry:
 *
 *   import travelBookingImg from '../assets/projects/travel-booking.webp'
 *
 *   const projectMedia = {
 *     'travel-booking': {
 *       // Any subset of `filterKeys` above. Several is normal - a headless
 *       // Shopify storefront is Shopify, front-end and API work at once, and
 *       // should appear under all three. A filter with no projects behind it
 *       // hides itself, so unused keys cost nothing.
 *       tags: ['mobile', 'api'],
 *
 *       // Either a real screenshot...
 *       image: travelBookingImg,
 *       imageSize: [700, 394],   // required with `image`, and it must be the
 *                                // file's true pixel size: the card reserves
 *                                // the space from it, so a wrong number is a
 *                                // layout shift on every load.
 *
 *       // ...or a drawn scene, for a project with no screenshot on file.
 *       // The key must name a scene in `ProjectVisual.jsx`.
 *       // visual: 'shopifyTheme',
 *
 *       // Shown on the card, first three then a "+n". Proper nouns, so these
 *       // stay out of the translation files.
 *       tech: ['React Native', 'iOS', 'Android', 'DevOps', 'REST API'],
 *     },
 *   }
 *
 * And in each locale, under `projects.items`:
 *
 *   'travel-booking': {
 *     category: 'Mobile Platform',
 *     title: 'Travel Booking & Digital Aviation Platform',
 *     overview: 'One paragraph. The card clamps it to two lines; the dialog
 *                shows all of it.',
 *     features: ['Four short lines', 'is the usual count', '...', '...'],
 *     value: 'What it was worth to the client, in one sentence.',
 *   }
 */
const projectMedia = {}

/* Display order. An id here with no entry above renders nothing. */
const projectOrder = []

const exampleMedia = {}

const exampleOrder = []

/*
 * Numbers and symbols carry across languages unchanged.
 *
 * The project count is derived rather than typed: it is the number of entries
 * the work rail actually holds, so the stat and the rail's own "01 / n"
 * readout cannot drift apart as projects are added or removed. With an empty
 * portfolio it reads zero, and corrects itself on the first entry.
 */
const statValues = ['10+', String(projectOrder.length + exampleOrder.length), '4', '3']

/**
 * Merges the translated strings for `lang` with the shared data above and
 * returns the complete content tree the components render from.
 */
export function buildContent(lang) {
  const t = translations[lang] ?? translations.en

  return {
    lang,
    htmlLang: t.htmlLang,
    ui: t.ui,

    profile: { ...profile, title: t.profileTitle, navRole: t.navRole, tagline: t.tagline },

    nav: sectionIds.map((id) => ({ id, label: t.nav[id] })),

    hero: {
      badge: t.hero.badge,
      headline: t.hero.headline,
      headlineAccent: t.hero.headlineAccent,
      intro: t.hero.intro,
      primaryCta: { label: t.hero.primaryCta, target: 'projects' },
      secondaryCta: { label: t.hero.secondaryCta, target: 'skills' },
      stats: t.hero.stats.map((label, i) => ({ value: statValues[i], label })),
      pillars: t.hero.pillars.map((title, i) => ({ title, detail: pillarDetails[i] })),
    },

    about: {
      eyebrow: t.about.eyebrow,
      heading: t.about.heading,
      paragraphs: t.about.paragraphs,
      highlights: t.about.highlights.map(([title, detail]) => ({ title, detail })),
      facts: t.about.facts.map(([label, value]) => ({ label, value })),
      languages: t.about.languageNames.map((name, i) => ({
        name,
        level: t.about.languageLevels[i],
      })),
      certifications,
    },

    services: {
      eyebrow: t.services.eyebrow,
      heading: t.services.heading,
      intro: t.services.intro,
      items: t.services.items.map((item, i) => ({ ...item, icon: serviceIcons[i] })),
    },

    skills: {
      eyebrow: t.skills.eyebrow,
      heading: t.skills.heading,
      intro: t.skills.intro,
      categories: t.skills.categories.map(([name, caption], i) => ({
        name,
        caption,
        icon: skillIcons[i],
        items: skillItems[i],
      })),
    },

    projects: {
      eyebrow: t.projects.eyebrow,
      heading: t.projects.heading,
      intro: t.projects.intro,
      note: t.examples.note,
      items: [
        ...projectOrder.map((id) => ({ id, ...projectMedia[id], ...t.projects.items[id] })),
        ...exampleOrder.map((id) => ({
          id,
          reference: true,
          badge: t.examples.badge,
          ...exampleMedia[id],
          ...t.examples.items[id],
        })),
      ],
      filters: filterKeys.map((key) => ({ key, label: t.ui.filters[key] })),
    },

    process: t.process,

    footer: {
      tagline: t.tagline,
      blurb: t.footer.blurb,
      expertise: t.footer.expertise,
      columns: [
        {
          title: t.footer.columns[0],
          links: [
            { label: t.footer.links.about, target: 'about' },
            { label: t.footer.links.services, target: 'services' },
            { label: t.footer.links.skills, target: 'skills' },
          ],
        },
        {
          title: t.footer.columns[1],
          links: [
            { label: t.footer.links.projects, target: 'projects' },
            { label: t.footer.links.process, target: 'process' },
          ],
        },
      ],
    },
  }
}
