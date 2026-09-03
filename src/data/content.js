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
import aiAgent1 from '../assets/projects/autonomous-ai-agent-1.webp'
import aiAgent2 from '../assets/projects/autonomous-ai-agent-2.webp'
import aiAgent3 from '../assets/projects/autonomous-ai-agent-3.webp'
import aiAgent4 from '../assets/projects/autonomous-ai-agent-4.webp'
import aiAgent5 from '../assets/projects/autonomous-ai-agent-5.webp'
import eventCheckIn1 from '../assets/projects/event-check-in-1.webp'
import eventCheckIn2 from '../assets/projects/event-check-in-2.webp'
import eventCheckIn3 from '../assets/projects/event-check-in-3.webp'
import eventCheckIn4 from '../assets/projects/event-check-in-4.webp'
import eventCheckIn5 from '../assets/projects/event-check-in-5.webp'
import eventCheckIn6 from '../assets/projects/event-check-in-6.webp'
import enneagram1 from '../assets/projects/enneagram-assessment-1.webp'
import enneagram2 from '../assets/projects/enneagram-assessment-2.webp'
import enneagram3 from '../assets/projects/enneagram-assessment-3.webp'
import enneagram4 from '../assets/projects/enneagram-assessment-4.webp'
import enneagram5 from '../assets/projects/enneagram-assessment-5.webp'
import enneagram6 from '../assets/projects/enneagram-assessment-6.webp'
import aquarium1 from '../assets/projects/premium-aquarium-1.webp'
import aquarium2 from '../assets/projects/premium-aquarium-2.webp'
import aquarium3 from '../assets/projects/premium-aquarium-3.webp'
import aquarium4 from '../assets/projects/premium-aquarium-4.webp'
import jewellery1 from '../assets/projects/shopify-jewellery-1.webp'
import vassalli1 from '../assets/projects/vassalli-listing-1.webp'
import vassalli2 from '../assets/projects/vassalli-listing-2.webp'
import vassalli3 from '../assets/projects/vassalli-listing-3.webp'
import cowboy1 from '../assets/projects/cowboy-shooter-1.webp'
import cowboy2 from '../assets/projects/cowboy-shooter-2.webp'
import cowboy3 from '../assets/projects/cowboy-shooter-3.webp'
import cowboy4 from '../assets/projects/cowboy-shooter-4.webp'
import kungfu1 from '../assets/projects/kungfu-fighting-game-1.webp'
import kungfu2 from '../assets/projects/kungfu-fighting-game-2.webp'
import franchise1 from '../assets/projects/find-a-franchise-1.webp'
import franchise2 from '../assets/projects/find-a-franchise-2.webp'
import twilio1 from '../assets/projects/twilio-sip-1.webp'
import soFresh1 from '../assets/projects/so-fresh-1.webp'
import soFresh2 from '../assets/projects/so-fresh-2.webp'
import holdRome1 from '../assets/projects/hold-rome-hotel-1.webp'
import holdRome2 from '../assets/projects/hold-rome-hotel-2.webp'
import shopifyStore1 from '../assets/projects/shopify-store-build-1.webp'
import shopifyStore2 from '../assets/projects/shopify-store-build-2.webp'
import shopifyStore3 from '../assets/projects/shopify-store-build-3.webp'
import shopifyStore4 from '../assets/projects/shopify-store-build-4.webp'
import shopifyStore5 from '../assets/projects/shopify-store-build-5.webp'
import ecommerce1 from '../assets/projects/ecommerce-website-1.webp'
import wordpress1 from '../assets/projects/wordpress-website-design-1.webp'
import award1 from '../assets/projects/preferred-freelancer-1.webp'
import franchise1Anim from '../assets/projects/find-a-franchise-1-anim.webp'
import kungfu1Anim from '../assets/projects/kungfu-fighting-game-1-anim.webp'
import kungfu2Anim from '../assets/projects/kungfu-fighting-game-2-anim.webp'
import soFresh2Anim from '../assets/projects/so-fresh-2-anim.webp'
import franchise1Card from '../assets/projects/find-a-franchise-1-card.webp'
import kungfu1Card from '../assets/projects/kungfu-fighting-game-1-card.webp'
import soFresh2Card from '../assets/projects/so-fresh-2-card.webp'
import tutor1 from '../assets/projects/ai-tutoring-app-1.webp'
import tutor2 from '../assets/projects/ai-tutoring-app-2.webp'
import tutor3 from '../assets/projects/ai-tutoring-app-3.webp'
import tutor4 from '../assets/projects/ai-tutoring-app-4.webp'
import tutor5 from '../assets/projects/ai-tutoring-app-5.webp'
import autofit1 from '../assets/projects/autofit-fitness-1.webp'
import autofit1Anim from '../assets/projects/autofit-fitness-1-anim.webp'
import autofit1Card from '../assets/projects/autofit-fitness-1-card.webp'
import axolon1 from '../assets/projects/axolon-erp-1.webp'
import brightFit1 from '../assets/projects/bright-and-fit-1.webp'
import dates1 from '../assets/projects/piece-of-dates-1.webp'
import blublonc1 from '../assets/projects/blublonc-footwear-1.webp'
import blublonc2 from '../assets/projects/blublonc-footwear-2.webp'
import french1 from '../assets/projects/french-appeal-1.webp'
import hiketron1 from '../assets/projects/hiketron-1.webp'
import luxor1 from '../assets/projects/luxor-linens-1.webp'
import petHospital1 from '../assets/projects/pet-hospital-1.webp'
import goldfields1 from '../assets/projects/goldfields-1.webp'
import onroad1 from '../assets/projects/onroad-driving-1.webp'
import safeway1 from '../assets/projects/safeway-foundation-1.webp'
import sheepdog1 from '../assets/projects/sheepdog-ag-1.webp'

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
  'games',
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

/*
 * Which fact the card sets in bold. An index rather than a flag threaded
 * through all four locale files: the emphasis is a layout decision about the
 * card, not something a translator should have to carry, and keeping it here
 * means the locales stay plain [label, value] pairs.
 */
const leadFact = 0

/*
 * Link kinds. The URL is data; the label is not - `ui.links[kind]` names it in
 * whatever language the page is being read in, so a project never carries
 * translated link text of its own. `note` disambiguates where one project has
 * two of a kind (AutoFit ships two App Store listings) and holds a product
 * name, which does not translate either.
 */
export const linkKinds = ['live', 'appStore', 'googlePlay', 'admin', 'apk']

/*
 * Six links here were not in the project notes. They were found by searching
 * and then confirmed against the supplied screenshots before being added -
 * matching nav labels, wordmarks, currencies and page text, not merely a
 * business with the right name. Anything that could not be confirmed that way
 * was left without a link, because a wrong link on a portfolio claims work
 * that was not done. The six: premium-aquarium, enneagram-assessment,
 * vassalli-listing, event-check-in, ecommerce-website, axolon-erp.
 */

/* Official test titles - left in their original language. */
export const certifications = [
  { name: 'WordPress Intermedio', score: '96%' },
  { name: 'WordPress Avanzado', score: '93%' },
  { name: 'Test de inglés', score: '80%' },
]

/*
 * Projects.
 *
 * Two collections, identical in shape. `projectMedia` is client work.
 * `exampleMedia` is reference builds: own demonstrations rather than paid
 * work, marked as such on the card so a visitor is never led to read one as a
 * delivery. Everything currently listed is client work, so `exampleMedia` is
 * empty.
 *
 * Each entry needs a matching block under `projects.items` (or
 * `examples.items`) in EVERY locale of `src/i18n/translations.js`, keyed by
 * the same id. An id present here and missing there renders a card with no
 * title, so the two have to move together.
 *
 * The shape, with everything an entry can carry:
 *
 *   import shot1 from '../assets/projects/my-project-1.webp'
 *   import shot2 from '../assets/projects/my-project-2.webp'
 *
 *   'my-project': {
 *     // Any subset of `filterKeys` above. Several is normal - a headless
 *     // Shopify storefront is Shopify, front-end and API work at once, and
 *     // should appear under all three. A filter with no projects behind it
 *     // hides itself, so unused keys cost nothing.
 *     tags: ['shopify', 'ecommerce'],
 *
 *     // Every screenshot the project has. The first is the cover: it is what
 *     // the card shows, and the dialog opens on it. `size` must be the file's
 *     // true pixel dimensions - the space is reserved from it, so a wrong
 *     // number is a layout shift every time the image loads.
 *     gallery: [
 *       { src: shot1, size: [1200, 675] },
 *       { src: shot2, size: [1200, 800] },
 *     ],
 *
 *     // Shown on the card, first three then a "+n". Proper nouns, so these
 *     // stay out of the translation files.
 *     tech: ['Shopify', 'Liquid', 'CSS'],
 *   },
 *
 * And in each locale, under `projects.items`:
 *
 *   'my-project': {
 *     category: 'Shopify',
 *     title: 'The project',
 *     overview: 'One paragraph. The card clamps it to two lines; the dialog
 *                shows all of it.',
 *     features: ['Four short lines', 'is the usual count', '...', '...'],
 *     value: 'What it was worth to the client, in one sentence.',
 *   }
 */
const projectMedia = {
  'autonomous-ai-agent': {
    tags: ['automation', 'api', 'frontend'],
    gallery: [
      { src: aiAgent1, size: [884, 613] },
      { src: aiAgent2, size: [768, 512] },
      { src: aiAgent3, size: [792, 1037] },
      { src: aiAgent4, size: [792, 1037] },
      { src: aiAgent5, size: [884, 613] },
    ],
    tech: ['Python', 'React.js', 'Artificial Intelligence', 'LLM Integration', 'REST API'],
  },
  'event-check-in': {
    tags: ['mobile', 'frontend'],
    gallery: [
      { src: eventCheckIn1, size: [1200, 803] },
      { src: eventCheckIn2, size: [1200, 832] },
      { src: eventCheckIn3, size: [1200, 1500] },
      { src: eventCheckIn4, size: [768, 512] },
      { src: eventCheckIn5, size: [1200, 829] },
      { src: eventCheckIn6, size: [1200, 1500] },
    ],
    links: [{ kind: 'live', url: 'https://doity.com.br/en/' }],
    tech: ['React Native', 'JavaScript', 'Mobile App Design', 'User Experience Design'],
  },
  'enneagram-assessment': {
    tags: ['php', 'frontend'],
    gallery: [
      { src: enneagram1, size: [768, 512] },
      { src: enneagram2, size: [1200, 832] },
      { src: enneagram3, size: [1200, 1500] },
      { src: enneagram4, size: [1200, 946] },
      { src: enneagram5, size: [1200, 1500] },
      { src: enneagram6, size: [1200, 832] },
    ],
    links: [{ kind: 'live', url: 'https://michaelgroser.dk/' }],
    tech: ['PHP', 'Laravel', 'Vue.js', 'JavaScript', 'MySQL'],
  },
  'premium-aquarium': {
    tags: ['wordpress', 'frontend'],
    gallery: [
      { src: aquarium1, size: [1200, 560] },
      { src: aquarium2, size: [1200, 585] },
      { src: aquarium3, size: [1200, 542] },
      { src: aquarium4, size: [1200, 574] },
    ],
    links: [{ kind: 'live', url: 'https://aquamoon.com/' }],
    tech: ['WordPress', 'CMS', 'Responsive Web Design', 'User Experience Design'],
  },
  'shopify-jewellery': {
    tags: ['shopify', 'ecommerce', 'frontend'],
    gallery: [
      { src: jewellery1, size: [1200, 534] },
    ],
    tech: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
  },
  'vassalli-listing': {
    tags: ['shopify', 'ecommerce', 'frontend'],
    gallery: [
      { src: vassalli1, size: [1200, 675] },
      { src: vassalli2, size: [1200, 675] },
      { src: vassalli3, size: [1200, 675] },
    ],
    links: [{ kind: 'live', url: 'https://vassalli.co.nz/' }],
    tech: ['Shopify', 'JavaScript', 'HTML'],
  },
  'cowboy-shooter': {
    tags: ['games', 'mobile'],
    gallery: [
      { src: cowboy1, size: [1200, 675] },
      { src: cowboy2, size: [1200, 676] },
      { src: cowboy3, size: [1200, 635] },
      { src: cowboy4, size: [1200, 675] },
    ],
    links: [
      { kind: 'googlePlay', url: 'https://play.google.com/store/apps/details?id=com.gr.western.cowboy.survival.shooter.simualtor.gunfighter.game' },
    ],
    tech: ['Unity 3D', 'C#', 'Android', 'iOS', 'Game Design'],
  },
  'kungfu-fighting-game': {
    tags: ['games'],
    gallery: [
      { src: kungfu1, size: [1200, 675], anim: kungfu1Anim, card: kungfu1Card, cardSize: [560, 315], animSize: [900, 506] },
      { src: kungfu2, size: [1200, 675], anim: kungfu2Anim, animSize: [900, 506] },
    ],
    tech: ['Game Development', 'Game Design', 'Multiplayer'],
  },
  'find-a-franchise': {
    tags: ['mobile'],
    gallery: [
      { src: franchise1, size: [600, 433], anim: franchise1Anim, card: franchise1Card, cardSize: [560, 404], animSize: [600, 433] },
      { src: franchise2, size: [1200, 1500] },
    ],
    tech: ['React Native', 'iOS', 'Mobile App Design'],
  },
  'twilio-sip': {
    tags: ['api', 'chatbot'],
    gallery: [
      { src: twilio1, size: [1000, 750] },
    ],
    tech: ['Twilio', 'SIP Trunking', 'VoIP', 'REST API'],
  },
  'so-fresh': {
    tags: ['wordpress', 'ecommerce', 'api'],
    gallery: [
      { src: soFresh1, size: [1200, 1500] },
      { src: soFresh2, size: [600, 433], anim: soFresh2Anim, card: soFresh2Card, cardSize: [560, 404], animSize: [600, 433] },
    ],
    links: [
      { kind: 'live', url: 'https://sofresh.ae/' },
    ],
    tech: ['WordPress', 'WooCommerce', 'API Integration', 'E-commerce'],
  },
  'hold-rome-hotel': {
    tags: ['wordpress', 'frontend'],
    gallery: [
      { src: holdRome1, size: [1200, 900] },
      { src: holdRome2, size: [1200, 900] },
    ],
    tech: ['WordPress', 'HTML', 'CSS', 'Responsive Web Design'],
  },
  'shopify-store-build': {
    tags: ['shopify', 'ecommerce'],
    gallery: [
      { src: shopifyStore1, size: [1200, 800] },
      { src: shopifyStore2, size: [1200, 800] },
      { src: shopifyStore3, size: [1200, 800] },
      { src: shopifyStore4, size: [1200, 800] },
      { src: shopifyStore5, size: [1200, 800] },
    ],
    tech: ['Shopify', 'E-commerce', 'Payment Integration', 'SEO'],
  },
  'ecommerce-website': {
    tags: ['ecommerce', 'php', 'wordpress'],
    gallery: [
      { src: ecommerce1, size: [1200, 1500] },
    ],
    links: [{ kind: 'live', url: 'https://kushycbd.com/' }],
    tech: ['PHP', 'WordPress', 'WooCommerce', 'Graphic Design'],
  },
  'wordpress-website-design': {
    tags: ['wordpress', 'frontend'],
    gallery: [
      { src: wordpress1, size: [1200, 1500] },
    ],
    tech: ['WordPress', 'HTML', 'CSS', 'SEO'],
  },
  'preferred-freelancer': {
    tags: ['wordpress', 'php', 'ecommerce'],
    gallery: [
      { src: award1, size: [1200, 857] },
    ],
    tech: ['PHP', 'WordPress', 'WooCommerce', 'Sales Solutions'],
  },
  'ai-tutoring-app': {
    tags: ['mobile', 'api'],
    gallery: [
      { src: tutor1, size: [1200, 675] },
      { src: tutor2, size: [1200, 675] },
      { src: tutor3, size: [1200, 675] },
      { src: tutor4, size: [1200, 675] },
      { src: tutor5, size: [640, 480] },
    ],
    links: [
      { kind: 'apk', url: 'https://drive.google.com/file/d/13vtph-49KztxuqBcVfhSBNBEHOPsdGEH/view?usp=sharing' },
    ],
    tech: ['Flutter', 'Dart', 'Google Gemini API', 'Android', 'Figma'],
  },
  'autofit-fitness': {
    tags: ['mobile'],
    gallery: [
      { src: autofit1, size: [768, 576], anim: autofit1Anim, animSize: [768, 576], card: autofit1Card, cardSize: [560, 420] },
    ],
    links: [
      { kind: 'googlePlay', url: 'https://play.google.com/store/apps/details?id=com.cw.kobiifrach' },
      { kind: 'appStore', url: 'https://apps.apple.com/us/app/autofit/id6511219528', note: 'AutoFit' },
      { kind: 'appStore', url: 'https://apps.apple.com/us/app/zipori/id6502283864', note: 'Zipori' },
      { kind: 'admin', url: 'https://panel.auto-fit.co.il/' },
    ],
    tech: ['Flutter', 'Android', 'iOS'],
  },
  'axolon-erp': {
    tags: ['mobile', 'api'],
    gallery: [
      { src: axolon1, size: [1200, 918] },
    ],
    links: [{ kind: 'live', url: 'https://axolon.com/' }],
    tech: ['Objective-C', 'Swift', 'iOS', 'Android', 'Xamarin'],
  },
  'bright-and-fit': {
    tags: ['mobile'],
    gallery: [
      { src: brightFit1, size: [768, 1344] },
    ],
    links: [
      { kind: 'appStore', url: 'https://apps.apple.com/us/app/bright-fit-fitness-app/id1593898914' },
    ],
    tech: ['iOS', 'Android', 'Mobile App Development'],
  },
  'piece-of-dates': {
    tags: ['mobile', 'ecommerce'],
    gallery: [
      { src: dates1, size: [1200, 960] },
    ],
    links: [
      { kind: 'appStore', url: 'https://apps.apple.com/us/app/%D8%A8%D8%B4%D9%82-%D8%AA%D9%85%D8%B1%D8%A9/id1500373688' },
      { kind: 'googlePlay', url: 'https://play.google.com/store/apps/details?id=com.nextdaysoft.datesapp' },
    ],
    tech: ['Swift', 'iOS', 'Android', 'React Native', 'Flutter'],
  },
  'blublonc-footwear': {
    tags: ['shopify', 'ecommerce', 'frontend'],
    gallery: [
      { src: blublonc1, size: [1200, 993] },
      { src: blublonc2, size: [1200, 1500] },
    ],
    links: [
      { kind: 'live', url: 'https://blublonc.com/' },
    ],
    tech: ['Shopify', 'E-commerce', 'Web Design'],
  },
  'french-appeal': {
    tags: ['shopify', 'ecommerce', 'api'],
    gallery: [
      { src: french1, size: [1200, 1500] },
    ],
    links: [
      { kind: 'live', url: 'https://frenchappeal.com/' },
    ],
    tech: ['Shopify', 'Liquid', 'SEO', 'API Integration'],
  },
  'hiketron': {
    tags: ['shopify', 'ecommerce'],
    gallery: [
      { src: hiketron1, size: [1200, 1500] },
    ],
    links: [
      { kind: 'live', url: 'https://www.hiketron.com/' },
    ],
    tech: ['Shopify', 'Empire Theme', 'Shopify Templates'],
  },
  'luxor-linens': {
    tags: ['shopify', 'ecommerce', 'api'],
    gallery: [
      { src: luxor1, size: [1200, 1500] },
    ],
    links: [
      { kind: 'live', url: 'https://luxorlinens.com/' },
    ],
    tech: ['Shopify', 'PayPal API', 'Klaviyo', 'Shogun'],
  },
  'pet-hospital': {
    tags: ['wordpress', 'frontend'],
    gallery: [
      { src: petHospital1, size: [1200, 1500] },
    ],
    links: [
      { kind: 'live', url: 'https://www.4thstreetpethospital.com' },
    ],
    tech: ['WordPress', 'CMS', 'Web Design', 'Responsive Web Design'],
  },
  'goldfields': {
    tags: ['frontend'],
    gallery: [
      { src: goldfields1, size: [1200, 1500] },
    ],
    links: [
      { kind: 'live', url: 'http://www.grekalgoorlie.com.au/' },
    ],
    tech: ['Web Design', 'Web Development'],
  },
  'onroad-driving': {
    tags: ['frontend', 'php', 'api'],
    gallery: [
      { src: onroad1, size: [1200, 1500] },
    ],
    links: [
      { kind: 'live', url: 'https://www.onroad.to/' },
    ],
    tech: ['React.js', 'Node.js', 'PHP', 'MongoDB'],
  },
  'safeway-foundation': {
    tags: ['php', 'frontend'],
    gallery: [
      { src: safeway1, size: [1200, 1500] },
    ],
    links: [
      { kind: 'live', url: 'http://safewayfoundation.org/' },
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Web Design'],
  },
  'sheepdog-ag': {
    tags: ['wordpress', 'frontend'],
    gallery: [
      { src: sheepdog1, size: [1200, 602] },
    ],
    links: [
      { kind: 'live', url: 'https://sheepdog.ag' },
    ],
    tech: ['WordPress', 'Figma', 'Web Design'],
  },
}

/* Display order. An id here with no entry above renders nothing. */
const projectOrder = [
  'autonomous-ai-agent',
  'ai-tutoring-app',
  'event-check-in',
  'axolon-erp',
  'enneagram-assessment',
  'onroad-driving',
  'luxor-linens',
  'hiketron',
  'french-appeal',
  'blublonc-footwear',
  'shopify-jewellery',
  'vassalli-listing',
  'premium-aquarium',
  'pet-hospital',
  'sheepdog-ag',
  'hold-rome-hotel',
  'so-fresh',
  'goldfields',
  'safeway-foundation',
  'ecommerce-website',
  'wordpress-website-design',
  'shopify-store-build',
  'piece-of-dates',
  'bright-and-fit',
  'autofit-fitness',
  'find-a-franchise',
  'cowboy-shooter',
  'kungfu-fighting-game',
  'twilio-sip',
  'preferred-freelancer',
]

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
      facts: t.about.facts.map(([label, value], i) => ({ label, value, lead: i === leadFact })),
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
        ...projectOrder.map((id) => {
          const shots = projectMedia[id].gallery
          /*
           * The card shows one image; the dialog shows the whole gallery.
           *
           * A project with an animation leads its card with that shot rather
           * than with the cover, so motion is never hidden a click away. For
           * most of them the animation IS the cover; So Fresh keeps its in the
           * second shot, and its card follows it there.
           */
          const lead = shots.find((shot) => shot.card) ?? shots[0]
          return {
            id,
            ...projectMedia[id],
            image: lead.src,
            imageSize: lead.size,
            cardAnim: lead.card,
            cardAnimSize: lead.cardSize,
            ...t.projects.items[id],
          }
        }),
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
