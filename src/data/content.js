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
import travelBookingImg from '../assets/projects/travel-booking.webp'
import aquariumImg from '../assets/projects/aquarium.webp'
import eventCheckinImg from '../assets/projects/event-checkin.webp'
import enneagramImg from '../assets/projects/enneagram.webp'
import aiAgentImg from '../assets/projects/ai-agent.webp'
import wordpressDesignImg from '../assets/projects/wordpress-design.webp'
import ecommerceImg from '../assets/projects/ecommerce.webp'
import telegramBotImg from '../assets/projects/telegram-order-bot.webp'
import whatsappBotImg from '../assets/projects/whatsapp-booking-bot.webp'
import chatbotHandoverImg from '../assets/projects/chatbot-handover.webp'

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

/* Screenshots, stacks and scene names, keyed by project id. */
const projectMedia = {
  'travel-booking': {
    tags: ['mobile', 'api'],
    image: travelBookingImg,
    imageSize: [700, 394],
    tech: ['React Native', 'iOS', 'Android', 'DevOps', 'REST API'],
  },
  aquarium: {
    tags: ['wordpress', 'php', 'frontend'],
    image: aquariumImg,
    imageSize: [700, 394],
    tech: ['WordPress', 'CMS', 'PHP', 'Responsive Web Design'],
  },
  'event-checkin': {
    tags: ['mobile', 'api'],
    image: eventCheckinImg,
    imageSize: [700, 394],
    tech: ['React Native', 'JavaScript', 'REST API', 'iOS', 'Android'],
  },
  enneagram: {
    tags: ['frontend', 'api'],
    image: enneagramImg,
    imageSize: [700, 394],
    tech: ['Vue.js', 'JavaScript', 'REST API', 'Modern UI Development'],
  },
  'ai-agent': {
    tags: ['automation', 'api'],
    image: aiAgentImg,
    imageSize: [700, 394],
    tech: ['Python', 'React.js', 'ChatGPT', 'REST API', 'Process Automation'],
  },
  'wordpress-design': {
    tags: ['wordpress', 'php', 'frontend'],
    image: wordpressDesignImg,
    imageSize: [700, 394],
    tech: ['WordPress', 'HTML', 'CSS', 'PHP', 'Responsive Web Design'],
  },
  ecommerce: {
    tags: ['ecommerce', 'php', 'frontend'],
    image: ecommerceImg,
    imageSize: [700, 394],
    tech: ['PHP', 'MySQL', 'E-commerce', 'Graphic Design'],
  },
  /*
   * The only client project with no screenshot on file, so it falls back to an
   * inline SVG of the storefront it was built in rather than a stock photo
   * standing in for one.
   */
  vassalli: {
    tags: ['ecommerce', 'shopify', 'wordpress'],
    visual: 'shopifyTheme',
    tech: ['Shopify', 'WordPress', 'E-commerce', 'Marketing'],
  },
}

/*
 * Profile order: the platform and mobile work first, then the WordPress and
 * PHP builds, then the storefronts. The row numbers in the UI are derived from
 * position, so reordering here renumbers the page.
 */
const projectOrder = [
  'travel-booking',
  'aquarium',
  'event-checkin',
  'enneagram',
  'ai-agent',
  'wordpress-design',
  'ecommerce',
  'vassalli',
]

const exampleMedia = {
  /* The three chatbot builds ship with captured screenshots of the demos. */
  'telegram-order-bot': {
    tags: ['api', 'chatbot'],
    image: telegramBotImg,
    imageSize: [1400, 788],
    tech: ['Telegram Bot API', 'Node.js', 'REST API', 'Chatbots'],
  },
  'whatsapp-booking-bot': {
    tags: ['api', 'chatbot'],
    image: whatsappBotImg,
    imageSize: [1400, 788],
    tech: ['WhatsApp Cloud API', 'Node.js', 'REST API', 'Chatbots'],
  },
  'chatbot-handover': {
    tags: ['api', 'chatbot'],
    image: chatbotHandoverImg,
    imageSize: [1400, 788],
    tech: ['Chatbots', 'Node.js', 'React.js', 'WhatsApp Cloud API', 'Telegram Bot API'],
  },
  'shopify-headless': {
    tags: ['ecommerce', 'shopify', 'frontend', 'api'],
    visual: 'shopifyHeadless',
    tech: ['Shopify', 'Storefront API', 'Next.js', 'React.js', 'TypeScript'],
  },
  'shopify-subscription-app': {
    tags: ['ecommerce', 'shopify', 'api'],
    visual: 'shopifyApp',
    tech: ['Shopify', 'Shopify App', 'Node.js', 'REST API', 'Webhooks'],
  },
  'woocommerce-store': {
    tags: ['ecommerce', 'wordpress', 'php', 'frontend'],
    visual: 'wooStore',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'E-commerce', 'Responsive Web Design'],
  },
  'wordpress-multilingual-site': {
    tags: ['wordpress', 'php', 'frontend'],
    visual: 'wordpressEditor',
    tech: ['WordPress', 'PHP', 'Multilingual', 'SEO', 'Responsive Web Design'],
  },
  'wordpress-lead-plugin': {
    tags: ['wordpress', 'php', 'api', 'automation'],
    visual: 'wordpressPlugin',
    tech: ['WordPress', 'PHP', 'REST API', 'Process Automation'],
  },
  'react-native-shop-app': {
    tags: ['mobile', 'api'],
    visual: 'mobileShopping',
    tech: ['React Native', 'iOS', 'Android', 'REST API', 'Mobile App Design'],
  },
  'flutter-delivery-app': {
    tags: ['mobile', 'api'],
    visual: 'mobileDelivery',
    tech: ['Flutter', 'Android', 'iOS', 'REST API', 'Google Maps'],
  },
  'android-field-service': {
    tags: ['mobile', 'api'],
    visual: 'mobileField',
    tech: ['Android', 'Java', 'SQLite', 'REST API', 'Offline Sync'],
  },
  'laravel-booking-api': {
    tags: ['php', 'api'],
    visual: 'laravelApi',
    tech: ['PHP', 'Laravel', 'MySQL', 'REST API', 'API Integration'],
  },
  'php-crm-invoicing': {
    tags: ['php', 'frontend', 'api'],
    visual: 'phpCrm',
    tech: ['PHP', 'MySQL', 'REST API', 'Responsive Web Design'],
  },
  'php-payment-gateway': {
    tags: ['php', 'api'],
    visual: 'paymentGateway',
    tech: ['PHP', 'REST API', 'Webhooks', 'API Integration'],
  },
  'python-automation': {
    tags: ['api', 'automation'],
    visual: 'python',
    tech: ['Python', 'REST API', 'Process Automation', 'Third-Party Integrations'],
  },
  'vue-crm-portal': {
    tags: ['frontend', 'api'],
    visual: 'vueCrm',
    tech: ['Vue.js', 'NestJS', 'REST API', 'API Integration', 'Modern UI Development'],
  },
  'laravel-saas-billing': {
    tags: ['php', 'api'],
    visual: 'laravelBilling',
    tech: ['PHP', 'Laravel', 'MySQL', 'SaaS', 'Webhooks'],
  },
  'php-inventory-system': {
    tags: ['php'],
    visual: 'phpInventory',
    tech: ['PHP', 'MySQL', 'REST API', 'Responsive Web Design'],
  },
  'wordpress-membership-site': {
    tags: ['wordpress', 'php'],
    visual: 'wpMembership',
    tech: ['WordPress', 'PHP', 'MySQL', 'Responsive Web Design'],
  },
  'woocommerce-multivendor': {
    tags: ['ecommerce', 'wordpress', 'php'],
    visual: 'wooMarketplace',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'E-commerce', 'REST API'],
  },
  'shopify-b2b-wholesale': {
    tags: ['ecommerce', 'shopify'],
    visual: 'shopifyB2b',
    tech: ['Shopify', 'Shopify App', 'Liquid', 'E-commerce', 'API Integration'],
  },
  'react-analytics-dashboard': {
    tags: ['frontend', 'api'],
    visual: 'reactAnalytics',
    tech: ['React.js', 'TypeScript', 'REST API', 'Data Visualisation', 'Modern UI Development'],
  },
  'booking-scheduling-app': {
    tags: ['frontend', 'api'],
    visual: 'bookingAdmin',
    tech: ['React.js', 'Node.js', 'REST API', 'API Integration', 'Responsive Web Design'],
  },
  'nest-microservices': {
    tags: ['api'],
    visual: 'nestServices',
    tech: ['NestJS', 'Node.js', 'REST API', 'Webhooks', 'API Integration'],
  },
  'nextjs-headless-blog': {
    tags: ['frontend', 'api'],
    visual: 'nextHeadlessBlog',
    tech: ['Next.js', 'React.js', 'TypeScript', 'REST API', 'SEO'],
  },
  'laravel-queue-worker': {
    tags: ['php', 'api', 'automation'],
    visual: 'laravelQueue',
    tech: ['PHP', 'Laravel', 'MySQL', 'REST API', 'Process Automation'],
  },
  'wordpress-headless-api': {
    tags: ['wordpress', 'php', 'frontend', 'api'],
    visual: 'wpRestApi',
    tech: ['WordPress', 'PHP', 'REST API', 'Next.js', 'React.js'],
  },
  'shopify-inventory-sync': {
    tags: ['ecommerce', 'shopify', 'api', 'automation'],
    visual: 'shopifySync',
    tech: ['Shopify', 'Node.js', 'REST API', 'Webhooks', 'Process Automation'],
  },
  'node-realtime-orders': {
    tags: ['api'],
    visual: 'nodeRealtime',
    tech: ['Node.js', 'REST API', 'Webhooks', 'API Integration'],
  },
  'python-data-pipeline': {
    tags: ['api', 'automation'],
    visual: 'pythonPipeline',
    tech: ['Python', 'PostgreSQL', 'REST API', 'Process Automation'],
  },
  'react-native-loyalty-app': {
    tags: ['mobile', 'api'],
    visual: 'rnLoyalty',
    tech: ['React Native', 'iOS', 'Android', 'REST API', 'Mobile App Design'],
  },
  'flutter-habit-tracker': {
    tags: ['mobile'],
    visual: 'flutterHabit',
    tech: ['Flutter', 'Android', 'iOS', 'Mobile App Design'],
  },
  'android-pos-terminal': {
    tags: ['mobile', 'api'],
    visual: 'androidPos',
    tech: ['Android', 'Java', 'SQLite', 'REST API', 'Offline Sync'],
  },
  'ios-property-viewings': {
    tags: ['mobile', 'api'],
    visual: 'iosProperty',
    tech: ['iOS', 'React Native', 'REST API', 'Google Maps'],
  },
}

const exampleOrder = [
  // Chatbots - the three builds with captured screenshots lead
  'telegram-order-bot',
  'whatsapp-booking-bot',
  'chatbot-handover',
  // PHP, then the WordPress and WooCommerce builds that run on it
  'laravel-booking-api',
  'php-crm-invoicing',
  'php-payment-gateway',
  'woocommerce-store',
  'wordpress-multilingual-site',
  'wordpress-lead-plugin',
  // Shopify
  'shopify-headless',
  'shopify-subscription-app',
  // Mobile
  'react-native-shop-app',
  'flutter-delivery-app',
  'android-field-service',
  // Automation
  'python-automation',
  // A second set of reference builds
  'vue-crm-portal',
  'laravel-saas-billing',
  'php-inventory-system',
  'wordpress-membership-site',
  'woocommerce-multivendor',
  'shopify-b2b-wholesale',
  'react-analytics-dashboard',
  'booking-scheduling-app',
  'nest-microservices',
  'nextjs-headless-blog',
  'laravel-queue-worker',
  'wordpress-headless-api',
  'shopify-inventory-sync',
  'node-realtime-orders',
  'python-data-pipeline',
  'react-native-loyalty-app',
  'flutter-habit-tracker',
  'android-pos-terminal',
  'ios-property-viewings',
]

/*
 * Numbers and symbols carry across languages unchanged.
 *
 * The project count is derived rather than typed: it is the number of entries
 * the work rail actually holds, so the stat and the rail's own "01 / 42"
 * readout cannot drift apart when a project is added or removed.
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
