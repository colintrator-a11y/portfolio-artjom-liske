/**
 * English copy. This file is the reference — `pt.js` and `es.js` mirror its
 * shape exactly, so a missing key is obvious in a diff.
 *
 * Keys are keyed by the stable ids in `data/content.js` (project slugs,
 * service ids, skill-group ids), never by index or by the English text.
 */
export default {
  code: "en",
  label: "English",
  short: "EN",
  /** Goes on <html lang> and into the document title. */
  htmlLang: "en",

  meta: {
    title: "Artjom Liske — Front-end Developer",
    description:
      "Front-end developer with 10+ years of experience building fast, beautiful, easy-to-use websites and apps. Available for freelance from Germany.",
  },

  nav: {
    work: "Work",
    skills: "Skills",
    about: "About",
    contact: "Contact",
  },

  hero: {
    role: "Front-end Developer",
    years: "10+ years",
    tagline:
      "I build websites and apps that are fast, beautiful, and easy to use — the kind that make your clients stay, come back, and buy.",
    location: "Germany",
    availability: "Available for freelance",
    stats: {
      years: "years experience",
      projects: "projects delivered",
      languages: "languages spoken",
    },
  },

  award: "Preferred Freelancer of the Quarter",

  sections: {
    work: {
      eyebrow: "Selected work",
      title: "Projects I've designed, built, and shipped.",
      lead: "Web platforms, mobile apps, storefronts, and automation — across a decade of freelance work.",
    },
    services: {
      eyebrow: "Services",
      title: "What I can do for you",
      lead: "One developer for the whole build — design, front end, back end, and the app store.",
    },
    skills: {
      eyebrow: "Skills",
      title: "The stack I work in every day.",
      lead: "Numbers show years of hands-on experience.",
    },
    about: {
      eyebrow: "About",
      title: "Who you'd be working with.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Have a project in mind?",
      lead: "Tell me what you're building and what it needs to do. I'll come back with honest timings and a clear plan — no surprises.",
    },
  },

  projects: {
    "travel-booking": {
      title: "Travel Booking & Digital Aviation Platform",
      description:
        "End-to-end booking experience for travel and aviation, built mobile-first and shipped on an automated pipeline.",
    },
    aquarium: {
      title: "Premium Aquarium Management & Corporate Site",
      description:
        "Corporate site with a tailored CMS so the team can manage premium aquarium services without touching code.",
    },
    "event-checkin": {
      title: "Real-Time Event Management & Check-In Platform",
      description:
        "Live attendee check-in with instant sync between staff devices and the event dashboard.",
    },
    enneagram: {
      title: "Enneagram Profile Analysis — Personality Assessment Tool",
      description:
        "Interactive assessment flow that scores answers and renders a clear, readable personality profile.",
    },
    "ai-agent": {
      title: "Autonomous AI Agent for Workflow Automation",
      description:
        "An agent that runs multi-step business workflows on its own, with a React dashboard for oversight.",
    },
    vassalli: {
      title: "Product Listing — Vassalli",
      description:
        "Clean, organized Shopify product listing showcasing apparel with detailed descriptions, size options, and stylish visuals.",
    },
    ecommerce: {
      title: "eCommerce Website",
      description:
        "Custom storefront with a hand-built product and checkout flow, designed and developed end to end.",
    },
    "wordpress-design": {
      title: "WordPress Website Design",
      description:
        "Hand-coded WordPress theme built for fast loading, clean markup, and easy editing.",
    },
    "telegram-order-bot": {
      title: "Telegram Order & Support Bot",
      description:
        "Tracks orders, starts returns, and hands off to a person — inline keyboards so customers tap instead of type.",
    },
    "whatsapp-booking-bot": {
      title: "WhatsApp Appointment Booking Bot",
      description:
        "Offers real availability, books the slot, and sets a reminder — the whole booking without leaving the chat.",
    },
    "chatbot-handover": {
      title: "Multi-Channel Bot with Live Agent Handover",
      description:
        "One inbox for Telegram and WhatsApp. The bot answers what it can and escalates the rest with the full transcript attached.",
    },
  },

  services: {
    cms: { title: "WordPress, Shopify & custom CMS", meta: "10+ years" },
    frontend: { title: "JavaScript, React.js, Node.js, HTML & CSS" },
    responsive: {
      title: "Responsive design that looks perfect on every screen",
    },
    mobile: {
      title: "Mobile apps with React Native and Flutter",
      meta: "Android & iOS",
    },
    backend: { title: "Back-end with PHP, Python, MySQL & PostgreSQL" },
    api: { title: "API integrations and chatbots" },
  },

  skillGroups: {
    frontend: "Frontend",
    mobile: "Mobile",
    backend: "Backend",
    cms: "CMS & Commerce",
    other: "Other",
  },

  about: {
    bio: "Hi, I'm Artjom — a front-end developer with over 10 years of experience. Since 2014 I've worked as a freelance UI/UX Designer & Full Stack Developer, designing and building high-quality digital solutions, specialized in React.js and Node.js.",
    howIWorkTitle: "How I work",
    howIWork:
      "Clear communication, honest deadlines, and no surprises. I ask the right questions before writing a single line of code, and I keep you updated at every step.",
    languagesTitle: "Languages",
  },

  languages: {
    german: { name: "German", level: "Native" },
    english: { name: "English", level: "High Intermediate" },
    spanish: { name: "Spanish", level: "High Intermediate" },
    portuguese: { name: "Portuguese", level: "High Intermediate" },
  },

  ui: {
    hireMe: "Hire me",
    viewWork: "View my work",
    getInTouch: "Get in touch",
    seeWorkFirst: "See the work first",
    backToTop: "Back to top",
    backToTopAria: "Artjom Liske — back to top",
    menu: "Menu",
    siteMenu: "Site menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    toLightMode: "Switch to light mode",
    toDarkMode: "Switch to dark mode",
    language: "Language",
    demo: "Demo",
    navMain: "Main",
    navMobile: "Mobile",
    navFooter: "Footer",
    portraitAlt: "Portrait of Artjom Liske",
    representativeImage: "representative image, not a screenshot",
    screenshotSoon: "screenshot coming soon",
    experience: "Experience:",
    yearsSuffix: " years",
  },
};
