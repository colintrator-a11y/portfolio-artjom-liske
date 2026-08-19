/**
 * Every translatable string on the site, keyed by locale.
 *
 * Language-independent data — images, technology names, certification titles —
 * lives in `src/data/content.js` and is merged in by `buildContent()`.
 * Nothing here should contain an asset import.
 *
 * Deliberately NOT translated:
 *  - certification names, which are the official test titles;
 *  - technology and product names, which are proper nouns.
 */

export const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'pt', label: 'Português', short: 'PT' },
  { code: 'es', label: 'Español', short: 'ES' },
]

export const defaultLanguage = 'en'

/* ========================================================================== */
/*  ENGLISH                                                                    */
/* ========================================================================== */

const en = {
  htmlLang: 'en',
  ui: {
    skipToContent: 'Skip to content',
    primaryNav: 'Primary',
    mobileNav: 'Mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backToTop: 'Back to top',
    languageLabel: 'Language',
    chooseLanguage: 'Choose a language',
    filters: {
      all: 'All work',
      ecommerce: 'E-commerce',
      shopify: 'Shopify',
      wordpress: 'WordPress',
      php: 'PHP & Laravel',
      mobile: 'Mobile',
      frontend: 'Front-end',
      api: 'APIs & Integrations',
      chatbot: 'Chatbots',
      automation: 'Automation',
    },
    viewDetails: 'View details',
    loadMore: 'Load more',
    switchToLight: 'Switch to the light theme',
    switchToDark: 'Switch to the dark theme',
    closeDetails: 'Close',
    noMatches: 'Nothing in this category yet.',
    filterLabel: 'Filter projects by discipline',
    technologiesUsed: 'Technologies Used',
    keyFeatures: 'Key Features',
    businessValue: 'Business Value',
    projectWord: 'Project',
    exampleWord: 'Example',
    certifications: 'Certifications',
    languagesTitle: 'Languages',
    profileNote:
      'Freelancer profile · Bronze level · three passed certifications · one project at a time.',
    rightsReserved: 'All rights reserved.',
    builtWith: 'Designed & developed with React — engineered for performance and accessibility.',
  },
  profileTitle: 'Full Stack Developer | Web, Mobile & E‑Commerce',
  navRole: 'Full Stack Developer',
  tagline: 'Freelancer expert in IT & Programming, building reliable, scalable and modern digital solutions.',
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    skills: 'Skills',
    projects: 'Projects',
    process: 'Process',
  },
  hero: {
    badge: 'Preferred Freelancer of the Quarter · IT & Programming',
    headline: 'Building Scalable Web, Mobile & E‑Commerce Solutions for Modern Businesses',
    headlineAccent: 'E‑Commerce Solutions',
    intro:
      'I am Artjom Liske, a full stack developer based in Germany. I build websites and web and mobile applications that genuinely work well — fast, clear and easy to use on any screen. Working independently since 2014, I have delivered booking platforms, mobile applications, e-commerce stores, corporate sites and workflow automation for clients across Europe and Latin America.',
    primaryCta: 'View Projects',
    secondaryCta: 'Explore My Expertise',
    stats: [
      'Years of Experience',
      'Projects in the Portfolio',
      'Languages Spoken',
      'Certifications Passed',
    ],
    pillars: ['Full-Stack', 'Mobile', 'E‑Commerce', 'APIs'],
  },
  about: {
    eyebrow: 'About Me',
    heading: 'The technical part is rarely the hard part',
    paragraphs: [
      "Hi, I'm Artjom. I build web and mobile applications that actually work well — fast, clear, and easy to use on any screen.",
      'I work mainly with React.js, Next.js and Node.js for custom platforms, and with WordPress and WooCommerce when a client needs to manage their own content without depending on a developer. I also build mobile apps for Android and iOS with React Native and Flutter, plus REST API integrations, chatbots and process automation.',
      'Since 2014 I have worked as a self-employed UI/UX designer and full stack developer — responsible for frontend and backend architecture, database design with MySQL and PostgreSQL, API development and integration, performance optimisation and testing, for clients across Europe and Latin America.',
      'Over 10 years of building digital products taught me that the technical part is rarely the hard part. The hard part is understanding what the business needs before writing code, and speaking up early when something won’t work the way it’s expected to. That’s why I work with constant communication, visible progress throughout, and fast revisions.',
      'If you have a project in mind, tell me what you want to achieve and I’ll give you an honest view of how I’d approach it.',
    ],
    highlights: [
      ['Independent Since 2014', 'More than a decade delivering web and mobile applications as a self-employed developer.'],
      ['Preferred Freelancer of the Quarter', 'Recognised for PHP and WordPress delivery on top of a decade of freelance work.'],
      ['Multilingual Delivery', 'German, English, Spanish and Portuguese — remote collaboration without a language barrier.'],
      ['Communication First', 'Clear updates and screenshots at every stage, with fast and accurate revisions.'],
    ],
    facts: [
      ['Based in', 'Germany'],
      ['Experience', '10+ Years · Since 2014'],
      ['Rate', 'USD 30.00 / hour'],
      ['Availability', 'One project at a time'],
      ['Focus', 'Web · Mobile · E-Commerce'],
      ['Delivery', 'Remote, Worldwide'],
    ],
    languageLevels: ['Native or bilingual', 'High intermediate', 'High intermediate', 'High intermediate'],
    languageNames: ['German', 'English', 'Spanish', 'Portuguese'],
  },
  services: {
    eyebrow: 'Services',
    heading: 'What I build for clients',
    intro:
      'Six capabilities drawn from the work I actually deliver — from a responsive business site to a full e-commerce platform with its own API layer.',
    items: [
      {
        title: 'Full-Stack Web Development',
        summary: 'Building scalable and maintainable web platforms.',
        description:
          'Complete web applications with React.js or Next.js on the front end and Node.js, NestJS or PHP behind it — structured for performance and long-term maintenance.',
        points: ['React.js & Next.js front-ends', 'Node.js & NestJS services', 'TypeScript codebases'],
      },
      {
        title: 'E-Commerce Development',
        summary: 'Storefronts built to sell and easy to run.',
        description:
          'Custom storefronts and multi-brand retail platforms, plus WordPress and WooCommerce builds — catalogue, cart, checkout and an admin your team can actually operate.',
        points: ['Custom storefronts', 'WooCommerce & WordPress', 'Multi-brand catalogues'],
      },
      {
        title: 'Mobile Application Development',
        summary: 'Cross-platform apps that feel native.',
        description:
          'Mobile applications for Android and iOS built with React Native, plus Flutter and Windows Mobile work and mobile app design — delivered as one codebase across devices.',
        points: ['Android & iOS with React Native', 'Flutter & Windows Mobile', 'Mobile app design'],
      },
      {
        title: 'REST API Development & Integration',
        summary: 'Creating secure and efficient backend services.',
        description:
          'REST APIs and web services built with Node.js and NestJS, plus reliable integration of the third-party platforms and internal systems a business already depends on.',
        points: ['REST API design', 'Third-party integrations', 'Internal system connections'],
      },
      {
        title: 'Responsive Web Design & Landing Pages',
        summary: 'Fast, clear interfaces on every screen.',
        description:
          'Modern responsive sites and landing pages built in HTML, CSS and JavaScript — clean, quick to load and correct from mobile through to desktop.',
        points: ['Mobile-first layouts', 'Landing page development', 'Cross-device correctness'],
      },
      {
        title: 'Chatbots & Process Automation',
        summary: 'Removing repetitive work from the day.',
        description:
          'Chatbot development and workflow automation with Python and REST integrations — including internal process platforms that replace manual, spreadsheet-driven routines.',
        points: ['Chatbot development', 'Workflow automation', 'Python scripting & integrations'],
      },
    ],
  },
  skills: {
    eyebrow: 'Technical Skills',
    heading: 'The stack behind the solutions',
    intro:
      'Every technology listed here appears on my published freelancer profile.',
    categories: [
      ['Frontend', 'Interfaces that stay fast and clear on any screen.'],
      ['Backend', 'Server-side services and the APIs on top of them.'],
      ['Mobile', 'Cross-platform delivery from a single codebase.'],
      ['E-Commerce', 'Storefronts, catalogues and the systems behind them.'],
      ['Responsive & UI', 'The discipline behind every layout I ship.'],
      ['Automation', 'Chatbots and workflows that cut manual effort.'],
    ],
  },
  projects: {
    eyebrow: 'Selected Work',
    heading: 'Projects across web, mobile and e-commerce',
    intro:
      'Client deliveries from my freelance portfolio alongside my own reference builds, filtered by discipline. Each entry lists the technologies actually used; reference builds are marked as such.',
    items: {
      'travel-booking': {
        category: 'Mobile Platform',
        title: 'Travel Booking & Digital Aviation Platform',
        overview:
          'An end-to-end booking experience for travel and aviation, built mobile-first in React Native and shipped on an automated deployment pipeline. Search, availability, booking and confirmation all happen in the app the traveller already has open.',
        features: [
          'Search and availability across routes and dates',
          'Booking and confirmation handled inside the app',
          'One React Native codebase for iOS and Android',
          'Automated build and release pipeline',
        ],
        value:
          'Puts the whole booking journey on the traveller’s phone, and puts every release behind a pipeline rather than a manual deploy.',
      },
      aquarium: {
        category: 'WordPress & CMS',
        title: 'Premium Aquarium Management & Corporate Site',
        overview:
          'A corporate site for a premium aquarium management service, built on WordPress with a tailored editing experience so the team publishes services, galleries and updates without touching code.',
        features: [
          'Custom WordPress theme built around the service catalogue',
          'Editing structure the team can use without a developer',
          'Galleries and service pages managed from the CMS',
          'Responsive layouts from mobile to desktop',
        ],
        value:
          'The company owns its own content — a new service or gallery goes live the same day, with no developer in the loop.',
      },
      'event-checkin': {
        category: 'Mobile Platform',
        title: 'Real-Time Event Management & Check-In Platform',
        overview:
          'Live attendee check-in for events, with instant sync between the staff devices on the door and the event dashboard behind them. Built in React Native so the same build runs on whatever hardware the venue has.',
        features: [
          'Attendee check-in from any staff device',
          'Real-time sync to the event dashboard',
          'Duplicate and invalid tickets caught at the door',
          'One codebase across iOS and Android',
        ],
        value:
          'Removes the printed list and the queue behind it — organisers watch arrivals as they happen rather than counting them afterwards.',
      },
      enneagram: {
        category: 'Web Application',
        title: 'Enneagram Profile Analysis — Personality Assessment',
        overview:
          'An interactive assessment built in Vue.js: the questionnaire scores answers as they are given and renders a clear, readable personality profile at the end, rather than a page of raw numbers.',
        features: [
          'Guided questionnaire with progress and resume',
          'Scoring model applied as answers are given',
          'Readable profile output instead of raw scores',
          'Responsive layout for phone-first completion',
        ],
        value:
          'Turns a long paper questionnaire into something people finish on their phone — and get a result they can actually read.',
      },
      'ai-agent': {
        category: 'AI & Automation',
        title: 'Autonomous AI Agent for Workflow Automation',
        overview:
          'An agent that runs multi-step business workflows on its own, written in Python, with a React.js dashboard for oversight — so routine work happens unattended and a person can still see exactly what it did.',
        features: [
          'Multi-step workflows executed without supervision',
          'React.js dashboard for monitoring and intervention',
          'Integrations with the tools each workflow touches',
          'Full run history behind every automated decision',
        ],
        value:
          'Takes the repetitive part of the day off the team while keeping every step visible and reversible.',
      },
      'wordpress-design': {
        category: 'WordPress',
        title: 'WordPress Website Design',
        overview:
          'A hand-coded WordPress theme rather than a bought one — clean markup, fast loading, and an editing experience shaped around how the client actually writes their pages.',
        features: [
          'Hand-written theme with no page-builder weight',
          'Clean semantic markup and a fast first paint',
          'Editing structure shaped around the client’s content',
          'Responsive from mobile through to desktop',
        ],
        value:
          'A site that loads quickly and stays editable — the client changes their own pages without breaking the design.',
      },
      ecommerce: {
        category: 'E-Commerce',
        title: 'eCommerce Website',
        overview:
          'A custom storefront in PHP with a hand-built product and checkout flow, designed and developed end to end — catalogue, cart, checkout, and the admin the team runs it from.',
        features: [
          'Custom product catalogue and detail pages',
          'Hand-built cart and checkout flow',
          'MySQL behind catalogue, orders and stock',
          'Storefront design produced in the same engagement',
        ],
        value:
          'A storefront the business fully owns, with no platform fee and no template to fight.',
      },
      vassalli: {
        category: 'Shopify',
        title: 'Product Listing — Vassalli',
        overview:
          'A clean, organised Shopify product listing for an apparel label: detailed descriptions, size and variant options and styled visuals, structured so the catalogue reads consistently from the first product to the last.',
        features: [
          'Structured apparel listings with detailed descriptions',
          'Size and variant options on every product',
          'Consistent styling across the whole catalogue',
          'Merchandising set up for the way shoppers browse',
        ],
        value:
          'A catalogue that reads as one shop rather than a set of unrelated product pages.',
      },
    },
  },
  examples: {
    badge: 'Reference build',
    note: 'Entries marked as reference builds are my own demonstrations, not client work. Everything else was delivered for a paying client.',
    items: {
      'telegram-order-bot': {
        category: 'Messaging Chatbot',
        title: 'Telegram Order & Support Bot',
        overview:
          'A Telegram bot that tracks orders, starts returns and hands off to a person when it cannot help — driven by inline keyboards, so the customer taps instead of typing and the bot never has to guess what they meant.',
        features: [
          'Order tracking and returns started inside the chat',
          'Inline keyboards instead of free-text commands',
          'Live lookups through the shop’s REST API',
          'Handover to a person with the full thread attached',
        ],
        value:
          'Answers the routine order questions at any hour, and only involves a person when the conversation actually needs one.',
      },
      'whatsapp-booking-bot': {
        category: 'Messaging Chatbot',
        title: 'WhatsApp Appointment Booking Bot',
        overview:
          'A WhatsApp bot that offers real availability from the calendar, books the slot and sets the reminder — the whole booking completed without leaving the chat or installing anything.',
        features: [
          'Real availability read straight from the calendar',
          'Slot booked and confirmed inside the conversation',
          'Automatic reminder before the appointment',
          'Reschedule and cancel handled in the same thread',
        ],
        value:
          'Bookings happen the moment someone asks, instead of waiting for the next time the phone is answered.',
      },
      'chatbot-handover': {
        category: 'Chatbot Platform',
        title: 'Multi-Channel Bot with Live Agent Handover',
        overview:
          'One inbox for Telegram and WhatsApp with a React.js agent console on top. The bot answers what it can and escalates the rest to a person with the full transcript attached, so nobody has to ask the customer to repeat themselves.',
        features: [
          'Telegram and WhatsApp in a single inbox',
          'One conversation engine behind both channels',
          'Escalation carries the full transcript with it',
          'React.js console for the agent taking over',
        ],
        value:
          'The bot absorbs the volume and the team keeps the conversations that need a human — without losing the context.',
      },
      'shopify-headless': {
        category: 'Headless Commerce',
        title: 'Headless Shopify Storefront on Next.js',
        overview:
          'The same Shopify catalogue served through a Next.js front end using the Storefront API — pages rendered and cached at the edge, with checkout handed back to Shopify so payments, taxes and fraud stay where they belong.',
        features: [
          'Storefront API queries for catalogue, variants and cart',
          'Server-rendered product pages revalidated at the edge',
          'Checkout handed off to the Shopify-hosted flow',
          'TypeScript end to end, from query to component',
        ],
        value:
          'Front-end freedom and load speed without rebuilding payments — the catalogue stays in Shopify while the experience stops being limited by a theme.',
      },
      'shopify-subscription-app': {
        category: 'Shopify App',
        title: 'Shopify Subscription & Bundles App',
        overview:
          'An embedded Shopify app that adds recurring orders and product bundles to a store — selling plans, contract management and dunning retries, all rendered inside Shopify admin so the merchant never has to leave it.',
        features: [
          'Selling plans and subscription contracts',
          'Bundle builder priced against the live catalogue',
          'Automatic retry and dunning on failed payments',
          'Idempotent webhooks so nothing is billed twice',
        ],
        value:
          'Turns one-off buyers into recurring revenue, and stops a failed card from quietly becoming churn.',
      },
      'woocommerce-store': {
        category: 'WooCommerce',
        title: 'WooCommerce Store for an Artisan Food Producer',
        overview:
          'A WooCommerce shop for a farm selling direct — seasonal products, gift boxes, EU shipping rules and VAT handled by the store rather than by hand, on a WordPress install the owner already knows how to use.',
        features: [
          'Product, variation and gift-box configuration',
          'Zone-based EU shipping and VAT rules',
          'Stock, harvest batches and pre-orders',
          'Checkout tuned for completion on mobile',
        ],
        value:
          'Lets a small producer sell across Europe without a distributor, and edit the shop from the WordPress admin they already have.',
      },
      'wordpress-multilingual-site': {
        category: 'WordPress',
        title: 'Multilingual WordPress Corporate Site',
        overview:
          'A corporate WordPress site published in four languages from one editorial workflow — block editor pages, reusable blocks for anything that repeats, and per-language SEO so each market has its own canonical pages.',
        features: [
          'Block editor pages with reusable, centrally edited blocks',
          'Four languages with translation status visible to editors',
          'Per-language metadata, canonicals and sitemaps',
          'Core Web Vitals passing on mobile and desktop',
        ],
        value:
          'The marketing team publishes in every market without a developer, and each language ranks on its own instead of competing with the others.',
      },
      'wordpress-lead-plugin': {
        category: 'WordPress Plugin',
        title: 'Custom WordPress Lead Routing Plugin',
        overview:
          'A purpose-built WordPress plugin instead of a stack of general-purpose ones — leads captured as a custom post type, routed to the right sales team by rule, and pushed to the CRM with a retry queue behind it.',
        features: [
          'Custom post type with its own admin columns and filters',
          'Rule-based routing by source, region and product',
          'CRM sync over REST with retries and a failure log',
          'Everything managed inside wp-admin',
        ],
        value:
          'Replaces four overlapping plugins with one that does exactly the job, so leads reach the right person automatically and none are lost to a silent sync failure.',
      },
      'react-native-shop-app': {
        category: 'Mobile Application',
        title: 'React Native Shopping App for iOS & Android',
        overview:
          'A shopping app shipped to both stores from a single React Native codebase — catalogue, product detail, cart and payment, with native behaviour on each platform and one shared API layer behind them.',
        features: [
          'One codebase released to the App Store and Play Store',
          'Catalogue, search and filtering against a REST API',
          'Native payment sheets and saved cards',
          'Push notifications for orders and back-in-stock',
        ],
        value:
          'Two stores served by one team and one release cycle, instead of two native builds slowly drifting apart.',
      },
      'flutter-delivery-app': {
        category: 'Mobile Application',
        title: 'Flutter Delivery & Driver Tracking App',
        overview:
          'Two Flutter apps from one project: customers watch their order move in real time, drivers work an optimised run sheet and close each stop with a signature, a photo and a GPS stamp.',
        features: [
          'Live driver position and arrival estimate',
          'Optimised run sheet with hand-off to navigation',
          'Proof of delivery: signature, photo and location',
          'Uploads queued while the driver has no signal',
        ],
        value:
          'Cuts “where is my order?” calls to almost nothing and leaves the operator a delivery record for every single stop.',
      },
      'android-field-service': {
        category: 'Mobile Application',
        title: 'Android Field Service App with Offline Sync',
        overview:
          'A native Android app for engineers working in basements and plant rooms where there is no signal. Every screen reads and writes to a local database first, and the queue syncs with an audit trail once the phone is back online.',
        features: [
          'Full offline read and write on a local SQLite store',
          'Job checklists, parts used and time capture',
          'Signature and photo capture on site',
          'Sync queue with conflict handling and audit log',
        ],
        value:
          'Engineers stop filling in paper and retyping it later — the office sees a completed job minutes after it is finished rather than days.',
      },
      'laravel-booking-api': {
        category: 'Backend & API',
        title: 'Laravel Booking & Scheduling API',
        overview:
          'A Laravel API for booking a finite resource, where the hard part is not the endpoint but the race — two people hitting the same slot in the same second. Solved with a row lock inside a transaction, and covered by concurrency tests.',
        features: [
          'Availability and booking endpoints with a locked write path',
          'Concurrency tests proving no double-booking',
          'Calendar sync and confirmation e-mails on events',
          'Webhook delivery with automatic retries',
        ],
        value:
          'A booking system that stays correct under load — the one property a customer notices immediately when it is missing.',
      },
      'php-crm-invoicing': {
        category: 'Business Application',
        title: 'PHP Client & Invoicing CRM',
        overview:
          'A PHP back office for a professional firm: clients, quotes, time sheets and invoices in one model, with the ageing of every unpaid invoice visible on the first screen rather than buried in a report.',
        features: [
          'Clients, quotes, time sheets and invoices in one place',
          'Invoice ageing and overdue tracking',
          'Role-based access for partners and assistants',
          'PDF generation and payment reconciliation',
        ],
        value:
          'Shows who owes what and for how long without anyone rebuilding a spreadsheet — the number a firm actually runs on.',
      },
      'php-payment-gateway': {
        category: 'Integration',
        title: 'PHP Payment Gateway Integration Layer',
        overview:
          'One PHP interface in front of three payment providers. Checkout calls authorize, capture and refund; which provider runs is configuration. Webhooks are signature-checked and replay-safe, so a duplicate delivery never credits an order twice.',
        features: [
          'Single interface over card, wallet and local payment methods',
          'Signature verification on every inbound webhook',
          'Idempotent reconciliation against the order ledger',
          'A provider added or swapped without touching checkout',
        ],
        value:
          'Adding a payment method becomes a configuration change, and the ledger stays right even when a provider sends the same event twice.',
      },
      'python-automation': {
        category: 'Python Automation',
        title: 'Scheduled Python Data Pipeline',
        overview:
          'A scheduled Python job that pulls data from an API and a spreadsheet, validates and normalises it, writes the result to a single source of truth, and emails a report — replacing a manual routine somebody used to run by hand each morning.',
        features: [
          'Cron-scheduled extract, transform and load',
          'Validation and normalisation before anything is written',
          'Automated reporting once the run completes',
          'Run log and failure alerting for every execution',
        ],
        value:
          'Turns a recurring manual task into something that runs on its own and reports when it does not, so nobody has to remember it.',
      },
      'vue-crm-portal': {
        category: 'Sales Platform',
        title: 'Vue.js Sales Pipeline Portal',
        overview:
          'A shared pipeline for four regional sales teams, built as a Vue.js front end on a NestJS API. Every team sees the same deals and the same stage rules, so a deal cannot quietly mean something different in one office than in another.',
        features: [
          'One pipeline shared across four regional teams',
          'Stage rules enforced on the API, not the browser',
          'Role-based visibility per team and per region',
          'Activity trail on every deal, exportable to CSV',
        ],
        value: 'One version of the pipeline instead of four spreadsheets that disagree.',
      },
      'laravel-saas-billing': {
        category: 'Billing Platform',
        title: 'Laravel Subscription & Billing Engine',
        overview:
          'Plans, seats, proration and failed-payment recovery for a subscription business. The hard part is not charging a card once; it is what happens on an upgrade mid-cycle, and what happens when the third charge fails.',
        features: [
          'Plan changes prorated to the day',
          'Dunning with retries and a final grace period',
          'Provider webhooks reconciled against local state',
          'Invoices generated as PDFs with VAT handling',
        ],
        value: 'Revenue that keeps arriving after the first month, with failures chased automatically.',
      },
      'php-inventory-system': {
        category: 'Warehouse System',
        title: 'PHP Stock Control for Two Warehouses',
        overview:
          'Stock counted once across two warehouses, with reorder points that actually fire. Movements in and out are recorded as events rather than edits, so the current figure can always be explained by the history behind it.',
        features: [
          'Single stock figure across both warehouses',
          'Reorder points that raise purchase suggestions',
          'Movements stored as an auditable event log',
          'Supplier lead times factored into reorder timing',
        ],
        value: 'Fewer stockouts, and a number the warehouse and the office both trust.',
      },
      'wordpress-membership-site': {
        category: 'Membership Site',
        title: 'WordPress Membership & Gated Content',
        overview:
          'Three membership tiers on WordPress, with content gated by rule rather than by hand. Editors keep writing in the normal editor; the plugin decides who can read what, and renewals run without anyone remembering to chase them.',
        features: [
          'Three tiers with rule-based content gating',
          'Automatic renewals and expiry emails',
          'Members area with invoices and downloads',
          'Editors keep the standard WordPress editor',
        ],
        value: 'Recurring income from writing that was already being published for free.',
      },
      'woocommerce-multivendor': {
        category: 'Marketplace',
        title: 'WooCommerce Multi-Vendor Marketplace',
        overview:
          'One basket, many sellers. A customer checks out once; the order is split by vendor behind the scenes, commission is taken at source, and each seller sees only their own orders and payouts.',
        features: [
          'One checkout split into per-vendor orders',
          'Commission taken automatically at source',
          'Vendor dashboard with orders, stock and payouts',
          'Payout runs with a statement per vendor',
        ],
        value: 'A shop that grows by adding sellers rather than by buying more stock.',
      },
      'shopify-b2b-wholesale': {
        category: 'B2B Commerce',
        title: 'Shopify B2B Wholesale Portal',
        overview:
          'Trade pricing on the same Shopify store that serves the public, hidden behind a login. Each company gets its own price list and payment terms, so the wholesale side does not need a second platform to live on.',
        features: [
          'Company-specific price lists behind a login',
          'Payment terms per account, including net 30 and 60',
          'Minimum order quantities and case-pack rules',
          'Trade catalogue hidden from public search',
        ],
        value: 'Wholesale and retail on one platform instead of two systems to keep in step.',
      },
      'react-analytics-dashboard': {
        category: 'Analytics',
        title: 'React Checkout Funnel Dashboard',
        overview:
          'A funnel view over raw event data: where the basket is abandoned, by step and by device. Built so a marketing lead can answer a question without asking an engineer to write a query first.',
        features: [
          'Funnel, cohort and retention views over one event store',
          'Segment by device, channel and campaign',
          'Charts render from pre-aggregated queries for speed',
          'Saved views shared across the team',
        ],
        value: 'Decisions made from the funnel rather than from opinions about it.',
      },
      'booking-scheduling-app': {
        category: 'Scheduling',
        title: 'Appointment Scheduling for Six Practitioners',
        overview:
          'One calendar for six practitioners, three rooms and a public booking page. Availability is computed from staff hours, room capacity and existing bookings, so the slot a client sees is a slot that genuinely exists.',
        features: [
          'Availability computed from staff, room and service rules',
          'Public booking page with confirmation emails',
          'SMS and email reminders that cut no-shows',
          'Reschedule and cancellation windows enforced by rule',
        ],
        value: 'A diary that fills itself, without the double bookings a shared spreadsheet invites.',
      },
      'nest-microservices': {
        category: 'Backend & API',
        title: 'NestJS Service Split into Queues',
        overview:
          'A monolith broken into queued workers by concern: orders, payments, stock, mail. Each queue retries with backoff and anything that still fails lands in a dead-letter queue to be replayed rather than lost.',
        features: [
          'Work split into queues by concern',
          'Retry with exponential backoff per queue',
          'Dead-letter queue with replay from the console',
          'Throughput and lag visible per consumer',
        ],
        value: 'Traffic spikes absorbed by the queue instead of taking the checkout down with them.',
      },
      'nextjs-headless-blog': {
        category: 'Editorial Site',
        title: 'Next.js Editorial Site on a Headless CMS',
        overview:
          'An editorial site rendered by Next.js and written in a headless CMS. Pages are pre-rendered at build and revalidated at the edge, so the site stays fast without editors waiting for a deploy to publish.',
        features: [
          'Static pre-rendering with edge revalidation',
          'Editors publish without a developer or a deploy',
          'Structured data and sitemap generated automatically',
          'Image pipeline serving modern formats per device',
        ],
        value: 'Publishing speed for the editors and load speed for the reader, at the same time.',
      },
      'laravel-queue-worker': {
        category: 'Backend & API',
        title: 'Laravel Queued Catalogue Importer',
        overview:
          'A nightly catalogue import moved off the web request and onto queued jobs. Work is chunked so one bad batch retries alone instead of failing the whole import, and the run reports what it rejected rather than silently dropping it.',
        features: [
          'Import chunked into independently retried batches',
          'Exponential backoff with a capped retry count',
          'Rejected rows reported, never silently discarded',
          'Progress and failures visible while the job runs',
        ],
        value: 'An import that finishes overnight and tells you exactly what it could not accept.',
      },
      'wordpress-headless-api': {
        category: 'Headless CMS',
        title: 'Headless WordPress with a Next.js Front End',
        overview:
          'WordPress kept as the editor and turned into an API; the public site is rendered by Next.js. Editors keep the workflow they know, and the front end stops being limited by what a theme can do.',
        features: [
          'Custom REST routes returning block content as JSON',
          'Edge cache invalidated the moment a post is saved',
          'Editors keep the standard WordPress editor',
          'Front end free of theme and plugin constraints',
        ],
        value: 'A modern front end without retraining the people who write the content.',
      },
      'shopify-inventory-sync': {
        category: 'Integration',
        title: 'Shopify to ERP Stock Synchronisation',
        overview:
          'Stock kept level between Shopify and a back-office system, in both directions. The ERP stays the source of truth, Shopify is updated within the API budget, and a reconciliation pass catches any drift each hour.',
        features: [
          'Two-way sync with the ERP as source of truth',
          'Rate limiting that respects the Shopify API budget',
          'Orders reserve stock in the ERP on payment',
          'Hourly reconciliation reporting any drift',
        ],
        value: 'One stock figure across both systems, so nothing is sold that is not there.',
      },
      'node-realtime-orders': {
        category: 'Backend & API',
        title: 'Real-Time Order Board over WebSockets',
        overview:
          'Kitchen and counter screens that update the instant an order moves, without polling. State transitions are validated and locked in the database, so two screens cannot advance the same order twice.',
        features: [
          'Order state pushed to every screen in the same tick',
          'Transitions validated and row-locked in the database',
          'Silent reconnection after a network drop',
          'Tested at 400 concurrent screens',
        ],
        value: 'Screens that agree with each other, in a room where seconds matter.',
      },
      'python-data-pipeline': {
        category: 'Automation',
        title: 'Nightly Python Reporting Pipeline',
        overview:
          'Six sources pulled every night, validated, and loaded into one reporting table. If too much of the input is rejected the run fails loudly rather than quietly publishing a report nobody should trust.',
        features: [
          'Six sources extracted, validated and loaded nightly',
          'Run fails loudly when rejects pass a threshold',
          'Rejected rows kept and reported, never dropped',
          'Summary emailed to finance when the run completes',
        ],
        value: 'Numbers that arrive by breakfast, and a loud failure when they should not be trusted.',
      },
      'react-native-loyalty-app': {
        category: 'Mobile Application',
        title: 'React Native Loyalty & Rewards App',
        overview:
          'A loyalty card that lives on the phone: points, tiers and a code the till can scan. One React Native codebase ships to both stores, and the card keeps working when the shop has no signal.',
        features: [
          'Points and tiers with a scannable member code',
          'Rewards catalogue with redemption at the till',
          'Offers targeted by tier and by nearest shop',
          'Card readable offline, syncing when signal returns',
        ],
        value: 'Repeat visits from customers already carrying the card in their pocket.',
      },
      'flutter-habit-tracker': {
        category: 'Mobile Application',
        title: 'Flutter Habit Tracker with Local Reminders',
        overview:
          'A habit tracker built once in Flutter for both stores. Streaks, a month view and reminders that fire from the device itself, so the app is useful on a train with no connection.',
        features: [
          'Daily checklist with streaks and a month view',
          'Local notifications that work without a connection',
          'All data stored on device, exportable as CSV',
          'One Flutter codebase for iOS and Android',
        ],
        value: 'A habit app that still works in the places where habits actually happen.',
      },
      'android-pos-terminal': {
        category: 'Mobile Application',
        title: 'Android Point-of-Sale Terminal',
        overview:
          'A till that takes payment, prints a receipt and closes the day. Sales are written to the device first and synced afterwards, so a dropped connection never stops the queue at the counter.',
        features: [
          'Basket, payment and receipt printing on device',
          'Sales queued locally and synced when signal returns',
          'End-of-day report with card, cash and refunds',
          'Card, cash and meal-voucher payment paths',
        ],
        value: 'A counter that keeps serving whether or not the internet is having a good day.',
      },
      'ios-property-viewings': {
        category: 'Mobile Application',
        title: 'iOS Property Search & Viewing Booking',
        overview:
          'Search, shortlist and book a viewing without leaving the app. The agent gets the appointment in their calendar and the buyer gets a confirmation, so the viewing is agreed before anyone picks up a phone.',
        features: [
          'Filtered search with saved shortlists',
          'Viewing booked against the agent calendar',
          'Confirmation and calendar entry for the buyer',
          'In-app messaging with the listing agent',
        ],
        value: 'Viewings booked the moment interest is highest, rather than the next working day.',
      },
    },
  },
  process: {
    eyebrow: 'Work Process',
    heading: 'A disciplined path from idea to production',
    intro:
      'The same structured workflow on every engagement — clear communication and visible progress at each stage is what clients consistently point to in their feedback.',
    steps: [
      {
        title: 'Requirement Analysis',
        detail:
          'I start with the business goal, not the feature list — mapping users, constraints, integrations and success criteria into a clear, agreed scope.',
        output: 'Scope document & success criteria',
      },
      {
        title: 'System Planning & Architecture',
        detail:
          'Stack selection, data modelling and API contracts, documented and justified against cost, scale and how easy the result will be to maintain.',
        output: 'Architecture & data model',
      },
      {
        title: 'UI/UX Planning',
        detail:
          'User flows, screen structure and responsive layouts defined before development begins, so the interface serves the workflow rather than decorating it.',
        output: 'Flows & responsive layouts',
      },
      {
        title: 'Development & Integration',
        detail:
          'Clean, component-based implementation in reviewable increments, with screenshots shared at every stage so progress is visible rather than reported.',
        output: 'Working increments, version controlled',
      },
      {
        title: 'Testing & Revisions',
        detail:
          'Checking behaviour on real devices and screen sizes, then handling revisions quickly and accurately — the part of the job clients notice most.',
        output: 'Verified builds & fast revisions',
      },
      {
        title: 'Deployment & Maintenance',
        detail:
          'Controlled release to production with documentation and handover, followed by ongoing support, optimisation and further iteration.',
        output: 'Live release & support plan',
      },
    ],
  },
  footer: {
    blurb:
      'Full-stack engineering from Germany across web platforms, e-commerce, mobile applications, REST APIs and process automation — delivered remotely for clients worldwide.',
    columns: ['Explore', 'Work'],
    links: {
      about: 'About',
      services: 'Services',
      skills: 'Technical Skills',
      projects: 'Projects',
      process: 'Work Process',
    },
    expertise: ['Full-Stack Web', 'E-Commerce', 'Mobile Apps', 'REST APIs', 'Responsive Design', 'Automation'],
  },
}

/* ========================================================================== */
/*  PORTUGUÊS                                                                  */
/* ========================================================================== */

const pt = {
  htmlLang: 'pt',
  ui: {
    skipToContent: 'Ir para o conteúdo',
    primaryNav: 'Principal',
    mobileNav: 'Menu',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    backToTop: 'Voltar ao topo',
    languageLabel: 'Idioma',
    chooseLanguage: 'Escolher idioma',
    filters: {
      all: 'Todos',
      ecommerce: 'E-commerce',
      shopify: 'Shopify',
      wordpress: 'WordPress',
      php: 'PHP e Laravel',
      mobile: 'Mobile',
      frontend: 'Front-end',
      api: 'APIs e Integrações',
      chatbot: 'Chatbots',
      automation: 'Automação',
    },
    viewDetails: 'Ver detalhes',
    loadMore: 'Carregar mais',
    switchToLight: 'Mudar para o tema claro',
    switchToDark: 'Mudar para o tema escuro',
    closeDetails: 'Fechar',
    noMatches: 'Ainda não há nada nesta categoria.',
    filterLabel: 'Filtrar projetos por disciplina',
    technologiesUsed: 'Tecnologias Utilizadas',
    keyFeatures: 'Principais Funcionalidades',
    businessValue: 'Valor para o Negócio',
    projectWord: 'Projeto',
    exampleWord: 'Exemplo',
    certifications: 'Certificações',
    languagesTitle: 'Idiomas',
    profileNote:
      'Perfil de freelancer · nível Bronze · três certificações concluídas · um projeto de cada vez.',
    rightsReserved: 'Todos os direitos reservados.',
    builtWith: 'Desenhado e desenvolvido com React — otimizado para desempenho e acessibilidade.',
  },
  profileTitle: 'Desenvolvedor Full Stack | Web, Mobile e E‑Commerce',
  navRole: 'Desenvolvedor Full Stack',
  tagline:
    'Freelancer especialista em TI e Programação, a criar soluções digitais fiáveis, escaláveis e modernas.',
  nav: {
    home: 'Início',
    about: 'Sobre',
    services: 'Serviços',
    skills: 'Competências',
    projects: 'Projetos',
    process: 'Processo',
  },
  hero: {
    badge: 'Freelancer Preferido do Trimestre · TI e Programação',
    headline:
      'Criando Soluções Web, Mobile e de E‑Commerce Escaláveis para Empresas Modernas',
    headlineAccent: 'E‑Commerce Escaláveis',
    intro:
      'Sou Artjom Liske, desenvolvedor full stack baseado na Alemanha. Construo sites e aplicações web e mobile que funcionam mesmo bem — rápidos, claros e fáceis de usar em qualquer ecrã. A trabalhar de forma independente desde 2014, entreguei plataformas de reservas, aplicações móveis, lojas de e-commerce, sites empresariais e automação de processos para clientes na Europa e na América Latina.',
    primaryCta: 'Ver Projetos',
    secondaryCta: 'Conhecer a Minha Experiência',
    stats: [
      'Anos de Experiência',
      'Projetos no Portfólio',
      'Idiomas Falados',
      'Certificações Concluídas',
    ],
    pillars: ['Full-Stack', 'Mobile', 'E‑Commerce', 'APIs'],
  },
  about: {
    eyebrow: 'Sobre Mim',
    heading: 'A parte técnica raramente é a parte difícil',
    paragraphs: [
      'Olá, sou o Artjom. Construo aplicações web e mobile que funcionam mesmo bem — rápidas, claras e fáceis de usar em qualquer ecrã.',
      'Trabalho sobretudo com React.js, Next.js e Node.js em plataformas à medida, e com WordPress e WooCommerce quando o cliente precisa de gerir o próprio conteúdo sem depender de um programador. Também desenvolvo aplicações móveis para Android e iOS com React Native e Flutter, além de integrações de API REST, chatbots e automação de processos.',
      'Desde 2014 trabalho como designer de UI/UX e desenvolvedor full stack independente — responsável pela arquitetura de frontend e backend, modelação de bases de dados com MySQL e PostgreSQL, desenvolvimento e integração de APIs, otimização de desempenho e testes, para clientes na Europa e na América Latina.',
      'Mais de 10 anos a construir produtos digitais ensinaram-me que a parte técnica raramente é a parte difícil. O difícil é perceber o que o negócio precisa antes de escrever código, e dizer cedo quando algo não vai funcionar como se espera. Por isso trabalho com comunicação constante, progresso visível do início ao fim e revisões rápidas.',
      'Se tem um projeto em mente, diga-me o que quer alcançar e dou-lhe uma visão honesta de como o abordaria.',
    ],
    highlights: [
      ['Independente desde 2014', 'Mais de uma década a entregar aplicações web e mobile como profissional independente.'],
      ['Freelancer Preferido do Trimestre', 'Reconhecimento pelo trabalho em PHP e WordPress, sobre uma década de atividade como freelancer.'],
      ['Entrega multilingue', 'Alemão, inglês, espanhol e português — colaboração remota sem barreira linguística.'],
      ['Comunicação em primeiro lugar', 'Atualizações claras e capturas de ecrã em cada fase, com revisões rápidas e precisas.'],
    ],
    facts: [
      ['Localização', 'Alemanha'],
      ['Experiência', '10+ Anos · Desde 2014'],
      ['Valor/hora', 'USD 30,00 / hora'],
      ['Disponibilidade', 'Um projeto de cada vez'],
      ['Foco', 'Web · Mobile · E-Commerce'],
      ['Entrega', 'Remota, em todo o mundo'],
    ],
    languageLevels: ['Nativo ou bilingue', 'Intermédio alto', 'Intermédio alto', 'Intermédio alto'],
    languageNames: ['Alemão', 'Inglês', 'Espanhol', 'Português'],
  },
  services: {
    eyebrow: 'Serviços',
    heading: 'O que construo para os meus clientes',
    intro:
      'Seis competências que refletem o trabalho que realmente entrego — de um site empresarial responsivo a uma plataforma de e-commerce completa com a sua própria camada de API.',
    items: [
      {
        title: 'Desenvolvimento Web Full-Stack',
        summary: 'Plataformas web escaláveis e fáceis de manter.',
        description:
          'Aplicações web completas com React.js ou Next.js no front-end e Node.js, NestJS ou PHP por trás — estruturadas para desempenho e manutenção a longo prazo.',
        points: ['Front-ends em React.js e Next.js', 'Serviços em Node.js e NestJS', 'Bases de código em TypeScript'],
      },
      {
        title: 'Desenvolvimento de E-Commerce',
        summary: 'Lojas feitas para vender e simples de gerir.',
        description:
          'Lojas à medida e plataformas de retalho multimarca, além de projetos em WordPress e WooCommerce — catálogo, carrinho, checkout e uma administração que a sua equipa consegue mesmo usar.',
        points: ['Lojas à medida', 'WooCommerce e WordPress', 'Catálogos multimarca'],
      },
      {
        title: 'Desenvolvimento de Aplicações Móveis',
        summary: 'Apps multiplataforma com aspeto nativo.',
        description:
          'Aplicações móveis para Android e iOS com React Native, além de trabalho em Flutter e Windows Mobile e design de aplicações — entregues numa só base de código.',
        points: ['Android e iOS com React Native', 'Flutter e Windows Mobile', 'Design de aplicações móveis'],
      },
      {
        title: 'Desenvolvimento e Integração de APIs REST',
        summary: 'Serviços de backend seguros e eficientes.',
        description:
          'APIs REST e web services em Node.js e NestJS, além da integração fiável das plataformas externas e dos sistemas internos de que o negócio já depende.',
        points: ['Desenho de APIs REST', 'Integrações com terceiros', 'Ligação a sistemas internos'],
      },
      {
        title: 'Design Web Responsivo e Landing Pages',
        summary: 'Interfaces rápidas e claras em qualquer ecrã.',
        description:
          'Sites responsivos modernos e landing pages em HTML, CSS e JavaScript — limpos, rápidos a carregar e corretos do telemóvel ao computador.',
        points: ['Layouts mobile-first', 'Desenvolvimento de landing pages', 'Correção em todos os dispositivos'],
      },
      {
        title: 'Chatbots e Automação de Processos',
        summary: 'Menos trabalho repetitivo no dia a dia.',
        description:
          'Desenvolvimento de chatbots e automação de fluxos com Python e integrações REST — incluindo plataformas de processos internos que substituem rotinas manuais em folhas de cálculo.',
        points: ['Desenvolvimento de chatbots', 'Automação de fluxos de trabalho', 'Scripts e integrações em Python'],
      },
    ],
  },
  skills: {
    eyebrow: 'Competências Técnicas',
    heading: 'A tecnologia por trás das soluções',
    intro:
      'Todas as tecnologias aqui listadas constam do meu perfil público de freelancer.',
    categories: [
      ['Frontend', 'Interfaces que se mantêm rápidas e claras em qualquer ecrã.'],
      ['Backend', 'Serviços do lado do servidor e as APIs por cima deles.'],
      ['Mobile', 'Entrega multiplataforma a partir de uma só base de código.'],
      ['E-Commerce', 'Lojas, catálogos e os sistemas que os sustentam.'],
      ['Responsivo e UI', 'A disciplina por trás de cada layout que entrego.'],
      ['Automação', 'Chatbots e fluxos que reduzem o esforço manual.'],
    ],
  },
  projects: {
    eyebrow: 'Trabalhos Selecionados',
    heading: 'Projetos em web, mobile e e-commerce',
    intro:
      'Entregas a clientes do meu portfólio de freelancer, a par das minhas próprias construções de referência, filtradas por disciplina. Cada entrada indica as tecnologias realmente usadas; as construções de referência estão assinaladas como tal.',
    items: {
      'travel-booking': {
        category: 'Plataforma Mobile',
        title: 'Plataforma de Reservas de Viagens e Aviação Digital',
        overview:
          'Uma experiência de reserva completa para viagens e aviação, construída mobile-first em React Native e lançada com um pipeline de deploy automatizado. Pesquisa, disponibilidade, reserva e confirmação acontecem na aplicação que o viajante já tem aberta.',
        features: [
          'Pesquisa e disponibilidade por rotas e datas',
          'Reserva e confirmação tratadas dentro da aplicação',
          'Uma única base de código React Native para iOS e Android',
          'Pipeline automatizado de build e lançamento',
        ],
        value:
          'Coloca toda a jornada de reserva no telemóvel do viajante, e cada lançamento atrás de um pipeline em vez de um deploy manual.',
      },
      aquarium: {
        category: 'WordPress e CMS',
        title: 'Gestão de Aquários Premium e Site Corporativo',
        overview:
          'Um site corporativo para um serviço de gestão de aquários premium, construído em WordPress com uma experiência de edição à medida, para a equipa publicar serviços, galerias e novidades sem tocar em código.',
        features: [
          'Tema WordPress à medida, desenhado em torno do catálogo de serviços',
          'Estrutura de edição que a equipa usa sem programador',
          'Galerias e páginas de serviço geridas a partir do CMS',
          'Layouts responsivos do telemóvel ao computador',
        ],
        value:
          'A empresa passa a ser dona do próprio conteúdo — um novo serviço ou galeria fica online no mesmo dia, sem programador pelo meio.',
      },
      'event-checkin': {
        category: 'Plataforma Mobile',
        title: 'Plataforma de Gestão de Eventos e Check-In em Tempo Real',
        overview:
          'Check-in de participantes ao vivo, com sincronização instantânea entre os dispositivos da equipa à porta e o painel do evento por trás deles. Feito em React Native, para a mesma build correr no equipamento que o espaço tiver.',
        features: [
          'Check-in de participantes a partir de qualquer dispositivo',
          'Sincronização em tempo real com o painel do evento',
          'Bilhetes duplicados e inválidos detetados à porta',
          'Uma base de código para iOS e Android',
        ],
        value:
          'Elimina a lista impressa e a fila que a acompanha — a organização vê as chegadas a acontecer em vez de as contar depois.',
      },
      enneagram: {
        category: 'Aplicação Web',
        title: 'Análise de Perfil Eneagrama — Avaliação de Personalidade',
        overview:
          'Uma avaliação interativa feita em Vue.js: o questionário pontua as respostas à medida que são dadas e apresenta no fim um perfil de personalidade claro e legível, em vez de uma página de números.',
        features: [
          'Questionário guiado com progresso e retoma',
          'Modelo de pontuação aplicado à medida das respostas',
          'Perfil legível em vez de pontuações em bruto',
          'Layout responsivo pensado para ser concluído no telemóvel',
        ],
        value:
          'Transforma um questionário longo em papel em algo que as pessoas terminam no telemóvel — e com um resultado que conseguem mesmo ler.',
      },
      'ai-agent': {
        category: 'IA e Automação',
        title: 'Agente de IA Autónomo para Automação de Processos',
        overview:
          'Um agente que executa sozinho processos de negócio de vários passos, escrito em Python, com um painel em React.js para supervisão — o trabalho de rotina acontece sem assistência e continua a ser possível ver exatamente o que foi feito.',
        features: [
          'Processos de vários passos executados sem supervisão',
          'Painel em React.js para monitorizar e intervir',
          'Integrações com as ferramentas que cada processo toca',
          'Histórico completo por trás de cada decisão automatizada',
        ],
        value:
          'Retira à equipa a parte repetitiva do dia, mantendo cada passo visível e reversível.',
      },
      'wordpress-design': {
        category: 'WordPress',
        title: 'Design de Site WordPress',
        overview:
          'Um tema WordPress feito à mão em vez de comprado — marcação limpa, carregamento rápido e uma experiência de edição moldada à forma como o cliente escreve mesmo as suas páginas.',
        features: [
          'Tema escrito à mão, sem o peso de um page builder',
          'Marcação semântica limpa e primeiro render rápido',
          'Estrutura de edição moldada ao conteúdo do cliente',
          'Responsivo do telemóvel ao computador',
        ],
        value:
          'Um site que carrega depressa e continua editável — o cliente altera as próprias páginas sem partir o design.',
      },
      ecommerce: {
        category: 'E-Commerce',
        title: 'Site de eCommerce',
        overview:
          'Uma loja à medida em PHP, com fluxo de produto e checkout feitos de raiz, desenhada e desenvolvida de ponta a ponta — catálogo, carrinho, checkout e a administração a partir da qual a equipa a gere.',
        features: [
          'Catálogo de produtos e páginas de detalhe à medida',
          'Carrinho e checkout construídos de raiz',
          'MySQL por trás de catálogo, encomendas e stock',
          'Design da loja produzido no mesmo trabalho',
        ],
        value:
          'Uma loja que o negócio possui por completo, sem comissão de plataforma e sem um template a limitar.',
      },
      vassalli: {
        category: 'Shopify',
        title: 'Listagem de Produtos — Vassalli',
        overview:
          'Uma listagem de produtos Shopify limpa e organizada para uma marca de vestuário: descrições detalhadas, opções de tamanho e variante e visuais cuidados, estruturados para o catálogo se ler de forma consistente do primeiro ao último produto.',
        features: [
          'Listagens de vestuário estruturadas, com descrições detalhadas',
          'Opções de tamanho e variante em cada produto',
          'Estilo consistente em todo o catálogo',
          'Merchandising montado para a forma como se navega numa loja',
        ],
        value:
          'Um catálogo que se lê como uma loja só, e não como um conjunto de páginas de produto sem relação.',
      },
    },
  },
  examples: {
    badge: 'Projeto de referência',
    note: 'As entradas assinaladas como projetos de referência são demonstrações próprias, não trabalhos de clientes. Todas as restantes foram entregues a clientes reais.',
    items: {
      'telegram-order-bot': {
        category: 'Chatbot de Mensagens',
        title: 'Bot de Encomendas e Apoio no Telegram',
        overview:
          'Um bot de Telegram que segue encomendas, inicia devoluções e passa para uma pessoa quando não consegue ajudar — guiado por teclados inline, para o cliente tocar em vez de escrever e o bot nunca ter de adivinhar o que queria dizer.',
        features: [
          'Seguimento de encomendas e devoluções iniciadas na conversa',
          'Teclados inline em vez de comandos escritos',
          'Consultas em tempo real através da API REST da loja',
          'Passagem para uma pessoa com a conversa completa em anexo',
        ],
        value:
          'Responde às perguntas de rotina sobre encomendas a qualquer hora, e só envolve uma pessoa quando a conversa precisa mesmo.',
      },
      'whatsapp-booking-bot': {
        category: 'Chatbot de Mensagens',
        title: 'Bot de Marcações no WhatsApp',
        overview:
          'Um bot de WhatsApp que mostra disponibilidade real a partir do calendário, marca o horário e cria o lembrete — toda a marcação concluída sem sair da conversa nem instalar nada.',
        features: [
          'Disponibilidade real lida diretamente do calendário',
          'Horário marcado e confirmado dentro da conversa',
          'Lembrete automático antes do atendimento',
          'Remarcação e cancelamento tratados na mesma conversa',
        ],
        value:
          'As marcações acontecem no momento em que alguém pergunta, em vez de esperar pela próxima vez que o telefone é atendido.',
      },
      'chatbot-handover': {
        category: 'Plataforma de Chatbot',
        title: 'Bot Multicanal com Transferência para Agente',
        overview:
          'Uma só caixa de entrada para Telegram e WhatsApp, com uma consola de agente em React.js por cima. O bot responde ao que consegue e encaminha o resto para uma pessoa com a conversa completa em anexo, para ninguém ter de pedir ao cliente que repita.',
        features: [
          'Telegram e WhatsApp numa única caixa de entrada',
          'Um só motor de conversa por trás dos dois canais',
          'O encaminhamento leva a conversa completa consigo',
          'Consola em React.js para o agente que assume',
        ],
        value:
          'O bot absorve o volume e a equipa fica com as conversas que precisam de uma pessoa — sem perder o contexto.',
      },
      'shopify-headless': {
        category: 'Comércio Headless',
        title: 'Loja Shopify Headless em Next.js',
        overview:
          'O mesmo catálogo Shopify servido por um front-end Next.js através da Storefront API — páginas renderizadas e cacheadas na borda, com o checkout devolvido ao Shopify para que pagamentos, impostos e antifraude continuem onde devem estar.',
        features: [
          'Consultas à Storefront API para catálogo, variantes e carrinho',
          'Páginas de produto renderizadas no servidor e revalidadas na borda',
          'Checkout entregue ao fluxo hospedado do Shopify',
          'TypeScript de ponta a ponta, da consulta ao componente',
        ],
        value:
          'Liberdade de front-end e velocidade de carregamento sem reconstruir pagamentos — o catálogo continua no Shopify e a experiência deixa de ser limitada pelo tema.',
      },
      'shopify-subscription-app': {
        category: 'App Shopify',
        title: 'App Shopify de Assinaturas e Kits',
        overview:
          'Um app Shopify embutido que acrescenta pedidos recorrentes e kits de produtos à loja — planos de venda, gestão de contratos e novas tentativas de cobrança, tudo renderizado dentro do admin do Shopify para o lojista nunca precisar sair de lá.',
        features: [
          'Planos de venda e contratos de assinatura',
          'Montador de kits precificado sobre o catálogo ao vivo',
          'Nova tentativa automática em pagamentos recusados',
          'Webhooks idempotentes para nada ser cobrado duas vezes',
        ],
        value:
          'Transforma compras avulsas em receita recorrente e impede que um cartão recusado vire cancelamento silencioso.',
      },
      'woocommerce-store': {
        category: 'WooCommerce',
        title: 'Loja WooCommerce para Produtor Artesanal',
        overview:
          'Uma loja WooCommerce para uma fazenda que vende direto ao consumidor — produtos sazonais, caixas-presente, regras de frete na UE e impostos tratados pela loja em vez de na mão, sobre uma instalação WordPress que o dono já sabe usar.',
        features: [
          'Configuração de produtos, variações e caixas-presente',
          'Regras de frete e impostos por zona na UE',
          'Estoque, lotes de safra e pré-venda',
          'Checkout ajustado para conversão no celular',
        ],
        value:
          'Permite a um pequeno produtor vender em toda a Europa sem distribuidor e editar a loja pelo próprio admin WordPress que já tem.',
      },
      'wordpress-multilingual-site': {
        category: 'WordPress',
        title: 'Site Corporativo WordPress Multilíngue',
        overview:
          'Um site corporativo WordPress publicado em quatro idiomas a partir de um único fluxo editorial — páginas no editor de blocos, blocos reutilizáveis para tudo que se repete e SEO por idioma, para que cada mercado tenha as próprias páginas canônicas.',
        features: [
          'Páginas no editor de blocos com blocos reutilizáveis e centralizados',
          'Quatro idiomas com status de tradução visível ao editor',
          'Metadados, canônicas e sitemaps por idioma',
          'Core Web Vitals aprovados no celular e no desktop',
        ],
        value:
          'O time de marketing publica em todos os mercados sem depender de um desenvolvedor, e cada idioma se posiciona sozinho em vez de competir com os outros.',
      },
      'wordpress-lead-plugin': {
        category: 'Plugin WordPress',
        title: 'Plugin WordPress de Roteamento de Leads',
        overview:
          'Um plugin WordPress feito sob medida no lugar de uma pilha de plugins genéricos — leads capturados como post type próprio, roteados por regra para a equipe comercial certa e enviados ao CRM com uma fila de retentativa por trás.',
        features: [
          'Post type próprio com colunas e filtros no admin',
          'Roteamento por regra de origem, região e produto',
          'Sincronização com o CRM via REST, com retentativas e log de falhas',
          'Tudo gerenciado dentro do wp-admin',
        ],
        value:
          'Substitui quatro plugins sobrepostos por um que faz exatamente o trabalho: o lead chega sozinho à pessoa certa e nenhum se perde numa sincronização que falhou em silêncio.',
      },
      'react-native-shop-app': {
        category: 'Aplicativo Mobile',
        title: 'App de Compras em React Native para iOS e Android',
        overview:
          'Um aplicativo de compras publicado nas duas lojas a partir de uma única base React Native — catálogo, detalhe do produto, carrinho e pagamento, com comportamento nativo em cada plataforma e uma camada de API compartilhada por trás.',
        features: [
          'Uma base de código publicada na App Store e na Play Store',
          'Catálogo, busca e filtros sobre uma REST API',
          'Folhas de pagamento nativas e cartões salvos',
          'Notificações push de pedidos e reposição de estoque',
        ],
        value:
          'Duas lojas atendidas por um time e um ciclo de release, em vez de dois apps nativos se afastando aos poucos.',
      },
      'flutter-delivery-app': {
        category: 'Aplicativo Mobile',
        title: 'App Flutter de Entregas e Rastreamento de Motoristas',
        overview:
          'Dois aplicativos Flutter em um só projeto: o cliente acompanha o pedido em tempo real e o motorista trabalha uma rota otimizada, encerrando cada parada com assinatura, foto e marcação de GPS.',
        features: [
          'Posição do motorista e previsão de chegada ao vivo',
          'Rota otimizada com passagem para a navegação',
          'Comprovante de entrega: assinatura, foto e localização',
          'Envios enfileirados enquanto o motorista está sem sinal',
        ],
        value:
          'Reduz a quase nada as ligações de “cadê meu pedido?” e deixa para o operador um registro de entrega de cada parada.',
      },
      'android-field-service': {
        category: 'Aplicativo Mobile',
        title: 'App Android de Serviço em Campo com Sincronização Offline',
        overview:
          'Um app Android nativo para técnicos que trabalham em subsolos e casas de máquinas, onde não há sinal. Toda tela lê e grava primeiro num banco local, e a fila sincroniza com trilha de auditoria assim que o aparelho volta a ter rede.',
        features: [
          'Leitura e escrita totalmente offline num banco SQLite local',
          'Checklists de ordem de serviço, peças usadas e apontamento de horas',
          'Captura de assinatura e fotos no local',
          'Fila de sincronização com tratamento de conflito e log de auditoria',
        ],
        value:
          'O técnico deixa de preencher papel para redigitar depois — o escritório vê a ordem concluída minutos depois do fim do serviço, não dias.',
      },
      'laravel-booking-api': {
        category: 'Back-end e API',
        title: 'API Laravel de Reservas e Agendamento',
        overview:
          'Uma API Laravel para reservar um recurso finito, onde a parte difícil não é o endpoint e sim a corrida — duas pessoas pegando o mesmo horário no mesmo segundo. Resolvido com bloqueio de linha dentro de uma transação e coberto por testes de concorrência.',
        features: [
          'Endpoints de disponibilidade e reserva com escrita sob bloqueio',
          'Testes de concorrência que provam a ausência de reserva dupla',
          'Sincronização de agenda e e-mails de confirmação por evento',
          'Entrega de webhooks com retentativa automática',
        ],
        value:
          'Um sistema de reservas que continua correto sob carga — a única propriedade que o cliente percebe na hora quando falta.',
      },
      'php-crm-invoicing': {
        category: 'Aplicação de Negócio',
        title: 'CRM de Clientes e Faturamento em PHP',
        overview:
          'Um back-office em PHP para um escritório profissional: clientes, propostas, apontamento de horas e faturas num modelo só, com o vencimento de cada fatura em aberto visível já na primeira tela, e não escondido num relatório.',
        features: [
          'Clientes, propostas, horas e faturas em um único lugar',
          'Aging de faturas e acompanhamento de inadimplência',
          'Acesso por perfil para sócios e assistentes',
          'Geração de PDF e conciliação de pagamentos',
        ],
        value:
          'Mostra quem deve o quê e há quanto tempo sem ninguém refazer uma planilha — o número do qual o escritório realmente depende.',
      },
      'php-payment-gateway': {
        category: 'Integração',
        title: 'Camada PHP de Integração com Gateways de Pagamento',
        overview:
          'Uma única interface PHP na frente de três provedores de pagamento. O checkout chama autorizar, capturar e estornar; qual provedor executa é configuração. Os webhooks têm assinatura verificada e são à prova de reenvio, então uma entrega duplicada nunca credita o pedido duas vezes.',
        features: [
          'Interface única sobre cartão, carteira digital e meio de pagamento local',
          'Verificação de assinatura em todo webhook recebido',
          'Conciliação idempotente contra o razão de pedidos',
          'Provedor adicionado ou trocado sem tocar no checkout',
        ],
        value:
          'Adicionar um meio de pagamento vira uma mudança de configuração, e o razão continua certo mesmo quando o provedor manda o mesmo evento duas vezes.',
      },
      'python-automation': {
        category: 'Automação em Python',
        title: 'Pipeline de Dados Agendado em Python',
        overview:
          'Uma tarefa Python agendada que recolhe dados de uma API e de uma folha de cálculo, valida e normaliza, escreve o resultado numa fonte única de verdade e envia um relatório por email — substituindo uma rotina manual que alguém fazia à mão todas as manhãs.',
        features: [
          'Extração, transformação e carregamento agendados por cron',
          'Validação e normalização antes de qualquer escrita',
          'Relatório automático assim que a execução termina',
          'Registo de execução e alertas de falha em cada corrida',
        ],
        value:
          'Transforma uma tarefa manual recorrente em algo que corre sozinho e avisa quando não corre, sem depender da memória de ninguém.',
      },
      'vue-crm-portal': {
        category: 'Plataforma de Vendas',
        title: 'Portal de Pipeline de Vendas em Vue.js',
        overview:
          'Um pipeline partilhado por quatro equipas comerciais regionais, com front end em Vue.js sobre uma API NestJS. Todas as equipas veem os mesmos negocios e as mesmas regras de fase, para que um negocio nao signifique coisas diferentes em escritorios diferentes.',
        features: [
          'Um pipeline partilhado por quatro equipas regionais',
          'Regras de fase aplicadas na API, nao no browser',
          'Visibilidade por funcao, equipa e regiao',
          'Historico de atividade em cada negocio, exportavel para CSV',
        ],
        value: 'Uma so versao do pipeline em vez de quatro folhas de calculo que se contradizem.',
      },
      'laravel-saas-billing': {
        category: 'Plataforma de Faturacao',
        title: 'Motor de Subscricoes e Faturacao em Laravel',
        overview:
          'Planos, lugares, proporcionalidade e recuperacao de pagamentos falhados para um negocio por subscricao. O dificil nao e cobrar um cartao uma vez; e o que acontece numa mudanca de plano a meio do ciclo e quando a terceira cobranca falha.',
        features: [
          'Mudancas de plano calculadas ao dia',
          'Cobranca insistente com tentativas e periodo de tolerancia',
          'Webhooks do fornecedor reconciliados com o estado local',
          'Faturas geradas em PDF com tratamento de IVA',
        ],
        value: 'Receita que continua a entrar depois do primeiro mes, com falhas perseguidas automaticamente.',
      },
      'php-inventory-system': {
        category: 'Sistema de Armazem',
        title: 'Controlo de Stock em PHP para Dois Armazens',
        overview:
          'Stock contado uma unica vez em dois armazens, com pontos de reposicao que disparam mesmo. As entradas e saidas sao registadas como eventos e nao como edicoes, para que o numero atual seja sempre explicavel pelo historico.',
        features: [
          'Um unico numero de stock para os dois armazens',
          'Pontos de reposicao que geram sugestoes de compra',
          'Movimentos guardados como registo auditavel',
          'Prazos de entrega dos fornecedores no calculo da reposicao',
        ],
        value: 'Menos ruturas e um numero em que o armazem e o escritorio confiam.',
      },
      'wordpress-membership-site': {
        category: 'Site de Membros',
        title: 'Membros e Conteudo Restrito em WordPress',
        overview:
          'Tres niveis de adesao em WordPress, com conteudo restrito por regra e nao a mao. Os editores continuam a escrever no editor normal; o plugin decide quem pode ler o que, e as renovacoes correm sem ninguem se lembrar de as perseguir.',
        features: [
          'Tres niveis com restricao de conteudo por regra',
          'Renovacoes automaticas e emails de expiracao',
          'Area de membros com faturas e downloads',
          'Os editores mantem o editor normal do WordPress',
        ],
        value: 'Receita recorrente a partir de textos que ja eram publicados de graca.',
      },
      'woocommerce-multivendor': {
        category: 'Marketplace',
        title: 'Marketplace Multi-Vendedor em WooCommerce',
        overview:
          'Um carrinho, varios vendedores. O cliente finaliza a compra uma vez; a encomenda e dividida por vendedor nos bastidores, a comissao e retida na origem e cada vendedor ve apenas as suas encomendas e pagamentos.',
        features: [
          'Um checkout dividido em encomendas por vendedor',
          'Comissao retida automaticamente na origem',
          'Painel do vendedor com encomendas, stock e pagamentos',
          'Ciclos de pagamento com extrato por vendedor',
        ],
        value: 'Uma loja que cresce somando vendedores em vez de comprando mais stock.',
      },
      'shopify-b2b-wholesale': {
        category: 'Comercio B2B',
        title: 'Portal Grossista B2B em Shopify',
        overview:
          'Precos de revenda na mesma loja Shopify que serve o publico, escondidos atras de um login. Cada empresa tem a sua lista de precos e condicoes de pagamento, para que o grossista nao precise de uma segunda plataforma.',
        features: [
          'Listas de precos por empresa atras de login',
          'Condicoes de pagamento por conta, incluindo 30 e 60 dias',
          'Quantidades minimas e regras de caixa fechada',
          'Catalogo de revenda escondido da pesquisa publica',
        ],
        value: 'Grossista e retalho numa so plataforma em vez de dois sistemas a manter alinhados.',
      },
      'react-analytics-dashboard': {
        category: 'Analitica',
        title: 'Painel de Funil de Checkout em React',
        overview:
          'Uma vista de funil sobre dados de eventos: onde o carrinho e abandonado, por passo e por dispositivo. Feito para que um responsavel de marketing responda a uma pergunta sem pedir a um programador que escreva uma consulta.',
        features: [
          'Vistas de funil, coorte e retencao sobre um so armazem de eventos',
          'Segmentacao por dispositivo, canal e campanha',
          'Graficos servidos a partir de consultas pre-agregadas',
          'Vistas guardadas e partilhadas pela equipa',
        ],
        value: 'Decisoes tomadas a partir do funil e nao de opinioes sobre ele.',
      },
      'booking-scheduling-app': {
        category: 'Agendamento',
        title: 'Marcacoes para Seis Profissionais',
        overview:
          'Um calendario para seis profissionais, tres salas e uma pagina publica de marcacoes. A disponibilidade e calculada a partir dos horarios, da capacidade das salas e das marcacoes existentes, por isso o horario que o cliente ve existe mesmo.',
        features: [
          'Disponibilidade calculada por profissional, sala e servico',
          'Pagina publica de marcacao com emails de confirmacao',
          'Lembretes por SMS e email que reduzem faltas',
          'Janelas de remarcacao e cancelamento aplicadas por regra',
        ],
        value: 'Uma agenda que se preenche sozinha, sem as marcacoes duplicadas de uma folha partilhada.',
      },
      'nest-microservices': {
        category: 'Backend e API',
        title: 'Servico NestJS Dividido em Filas',
        overview:
          'Um monolito dividido em trabalhadores em fila por area: encomendas, pagamentos, stock, email. Cada fila repete com espera crescente e o que continua a falhar vai para uma fila morta, para ser reprocessado e nao perdido.',
        features: [
          'Trabalho dividido em filas por area',
          'Repeticao com espera exponencial por fila',
          'Fila morta com reprocessamento a partir da consola',
          'Debito e atraso visiveis por consumidor',
        ],
        value: 'Picos de trafego absorvidos pela fila em vez de derrubarem o checkout.',
      },
      'nextjs-headless-blog': {
        category: 'Site Editorial',
        title: 'Site Editorial em Next.js com CMS Headless',
        overview:
          'Um site editorial servido por Next.js e escrito num CMS headless. As paginas sao pre-geradas na compilacao e revalidadas na periferia, por isso o site mantem-se rapido sem os editores esperarem por um deploy.',
        features: [
          'Pre-geracao estatica com revalidacao na periferia',
          'Editores publicam sem programador e sem deploy',
          'Dados estruturados e sitemap gerados automaticamente',
          'Imagens servidas em formatos modernos por dispositivo',
        ],
        value: 'Velocidade de publicacao para os editores e de carregamento para o leitor, ao mesmo tempo.',
      },
      'laravel-queue-worker': {
        category: 'Backend e API',
        title: 'Importador de Catalogo em Filas com Laravel',
        overview:
          'Uma importacao noturna de catalogo retirada do pedido web e passada para tarefas em fila. O trabalho e dividido em blocos, para que um bloco mau repita sozinho em vez de derrubar a importacao toda, e a execucao reporta o que rejeitou.',
        features: [
          'Importacao dividida em blocos repetidos de forma independente',
          'Espera exponencial com limite de tentativas',
          'Linhas rejeitadas reportadas e nunca descartadas em silencio',
          'Progresso e falhas visiveis durante a execucao',
        ],
        value: 'Uma importacao que termina de noite e diz exatamente o que nao conseguiu aceitar.',
      },
      'wordpress-headless-api': {
        category: 'CMS Headless',
        title: 'WordPress Headless com Front End em Next.js',
        overview:
          'O WordPress mantido como editor e transformado em API; o site publico e servido por Next.js. Os editores mantem o fluxo que conhecem e o front end deixa de estar limitado ao que um tema consegue fazer.',
        features: [
          'Rotas REST proprias que devolvem blocos em JSON',
          'Cache invalidada no momento em que um artigo e guardado',
          'Editores mantem o editor normal do WordPress',
          'Front end livre das limitacoes de temas e plugins',
        ],
        value: 'Um front end moderno sem ter de reensinar quem escreve o conteudo.',
      },
      'shopify-inventory-sync': {
        category: 'Integracao',
        title: 'Sincronizacao de Stock entre Shopify e ERP',
        overview:
          'Stock mantido alinhado entre o Shopify e um sistema de retaguarda, nos dois sentidos. O ERP continua a ser a fonte de verdade, o Shopify e atualizado dentro do orcamento da API e uma reconciliacao horaria apanha desvios.',
        features: [
          'Sincronizacao bidirecional com o ERP como fonte de verdade',
          'Limitacao de ritmo que respeita o orcamento da API Shopify',
          'Encomendas reservam stock no ERP no momento do pagamento',
          'Reconciliacao horaria que reporta qualquer desvio',
        ],
        value: 'Um so numero de stock nos dois sistemas, para nao se vender o que nao existe.',
      },
      'node-realtime-orders': {
        category: 'Backend e API',
        title: 'Quadro de Encomendas em Tempo Real por WebSockets',
        overview:
          'Ecras de cozinha e balcao que atualizam no instante em que uma encomenda muda, sem sondagem. As transicoes de estado sao validadas e bloqueadas na base de dados, para que dois ecras nao avancem a mesma encomenda duas vezes.',
        features: [
          'Estado enviado a todos os ecras no mesmo instante',
          'Transicoes validadas e com bloqueio de linha na base de dados',
          'Reconexao silenciosa apos queda de rede',
          'Testado com 400 ecras em simultaneo',
        ],
        value: 'Ecras que concordam entre si, numa sala onde os segundos contam.',
      },
      'python-data-pipeline': {
        category: 'Automacao',
        title: 'Pipeline Noturno de Relatorios em Python',
        overview:
          'Seis fontes recolhidas todas as noites, validadas e carregadas numa unica tabela de relatorio. Se demasiada informacao for rejeitada, a execucao falha de forma ruidosa em vez de publicar um relatorio em que ninguem deve confiar.',
        features: [
          'Seis fontes extraidas, validadas e carregadas todas as noites',
          'A execucao falha de forma ruidosa acima do limite de rejeicoes',
          'Linhas rejeitadas guardadas e reportadas, nunca descartadas',
          'Resumo enviado por email a area financeira no fim',
        ],
        value: 'Numeros que chegam ao pequeno-almoco e uma falha ruidosa quando nao sao de confianca.',
      },
      'react-native-loyalty-app': {
        category: 'Aplicacao Movel',
        title: 'App de Fidelizacao e Recompensas em React Native',
        overview:
          'Um cartao de fidelizacao que vive no telemovel: pontos, niveis e um codigo que a caixa consegue ler. Uma so base de codigo React Native chega as duas lojas e o cartao continua a funcionar sem rede.',
        features: [
          'Pontos e niveis com codigo de membro legivel',
          'Catalogo de recompensas com resgate na caixa',
          'Ofertas dirigidas por nivel e por loja mais proxima',
          'Cartao legivel offline, sincronizado quando ha rede',
        ],
        value: 'Visitas repetidas de clientes que ja levam o cartao no bolso.',
      },
      'flutter-habit-tracker': {
        category: 'Aplicacao Movel',
        title: 'Rastreador de Habitos em Flutter com Lembretes Locais',
        overview:
          'Um rastreador de habitos feito uma so vez em Flutter para as duas lojas. Sequencias, vista mensal e lembretes disparados pelo proprio dispositivo, para que a app seja util num comboio sem rede.',
        features: [
          'Lista diaria com sequencias e vista mensal',
          'Notificacoes locais que funcionam sem ligacao',
          'Dados guardados no dispositivo e exportaveis em CSV',
          'Uma so base de codigo Flutter para iOS e Android',
        ],
        value: 'Uma app de habitos que funciona nos sitios onde os habitos acontecem.',
      },
      'android-pos-terminal': {
        category: 'Aplicacao Movel',
        title: 'Terminal de Ponto de Venda em Android',
        overview:
          'Uma caixa que recebe o pagamento, imprime o talao e fecha o dia. As vendas sao escritas primeiro no dispositivo e sincronizadas depois, para que uma quebra de ligacao nunca pare a fila ao balcao.',
        features: [
          'Carrinho, pagamento e impressao de talao no dispositivo',
          'Vendas em fila local, sincronizadas quando ha rede',
          'Relatorio de fecho com cartao, numerario e devolucoes',
          'Pagamento por cartao, numerario e vale de refeicao',
        ],
        value: 'Um balcao que continua a servir, esteja a internet boa ou nao.',
      },
      'ios-property-viewings': {
        category: 'Aplicacao Movel',
        title: 'Procura de Imoveis e Marcacao de Visitas em iOS',
        overview:
          'Procurar, guardar e marcar uma visita sem sair da app. O agente recebe a marcacao no calendario e o comprador recebe a confirmacao, por isso a visita fica combinada antes de alguem pegar no telefone.',
        features: [
          'Procura com filtros e listas guardadas',
          'Visita marcada contra o calendario do agente',
          'Confirmacao e entrada de calendario para o comprador',
          'Mensagens na app com o agente do anuncio',
        ],
        value: 'Visitas marcadas no momento de maior interesse e nao no dia util seguinte.',
      },
    },
  },
  process: {
    eyebrow: 'Processo de Trabalho',
    heading: 'Um caminho disciplinado da ideia à produção',
    intro:
      'O mesmo fluxo estruturado em cada trabalho — comunicação clara e progresso visível em cada etapa é o que os clientes referem sempre nos seus comentários.',
    steps: [
      {
        title: 'Análise de Requisitos',
        detail:
          'Começo pelo objetivo de negócio e não pela lista de funcionalidades — mapeando utilizadores, restrições, integrações e critérios de sucesso num âmbito claro e acordado.',
        output: 'Documento de âmbito e critérios de sucesso',
      },
      {
        title: 'Planeamento e Arquitetura',
        detail:
          'Escolha de tecnologias, modelação de dados e contratos de API, documentados e justificados face a custo, escala e facilidade de manutenção.',
        output: 'Arquitetura e modelo de dados',
      },
      {
        title: 'Planeamento de UI/UX',
        detail:
          'Fluxos de utilizador, estrutura de ecrãs e layouts responsivos definidos antes de começar o desenvolvimento, para que a interface sirva o fluxo de trabalho em vez de o decorar.',
        output: 'Fluxos e layouts responsivos',
      },
      {
        title: 'Desenvolvimento e Integração',
        detail:
          'Implementação limpa e baseada em componentes, em incrementos revisíveis, com capturas de ecrã partilhadas em cada fase para que o progresso seja visível e não apenas relatado.',
        output: 'Incrementos funcionais, sob controlo de versões',
      },
      {
        title: 'Testes e Revisões',
        detail:
          'Verificação do comportamento em dispositivos e tamanhos de ecrã reais, seguida de revisões rápidas e precisas — a parte do trabalho que os clientes mais notam.',
        output: 'Versões verificadas e revisões rápidas',
      },
      {
        title: 'Publicação e Manutenção',
        detail:
          'Colocação controlada em produção com documentação e transferência de conhecimento, seguida de suporte contínuo, otimização e novas iterações.',
        output: 'Publicação e plano de suporte',
      },
    ],
  },
  footer: {
    blurb:
      'Engenharia full-stack a partir da Alemanha em plataformas web, e-commerce, aplicações móveis, APIs REST e automação de processos — entregue remotamente a clientes de todo o mundo.',
    columns: ['Explorar', 'Trabalho'],
    links: {
      about: 'Sobre',
      services: 'Serviços',
      skills: 'Competências Técnicas',
      projects: 'Projetos',
      process: 'Processo de Trabalho',
    },
    expertise: ['Web Full-Stack', 'E-Commerce', 'Apps Móveis', 'APIs REST', 'Design Responsivo', 'Automação'],
  },
}

/* ========================================================================== */
/*  ESPAÑOL                                                                    */
/* ========================================================================== */

const es = {
  htmlLang: 'es',
  ui: {
    skipToContent: 'Ir al contenido',
    primaryNav: 'Principal',
    mobileNav: 'Menú',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    backToTop: 'Volver arriba',
    languageLabel: 'Idioma',
    chooseLanguage: 'Elegir idioma',
    filters: {
      all: 'Todos',
      ecommerce: 'E-commerce',
      shopify: 'Shopify',
      wordpress: 'WordPress',
      php: 'PHP y Laravel',
      mobile: 'Móvil',
      frontend: 'Front-end',
      api: 'APIs e Integraciones',
      chatbot: 'Chatbots',
      automation: 'Automatización',
    },
    viewDetails: 'Ver detalles',
    loadMore: 'Cargar más',
    switchToLight: 'Cambiar al tema claro',
    switchToDark: 'Cambiar al tema oscuro',
    closeDetails: 'Cerrar',
    noMatches: 'Todavía no hay nada en esta categoría.',
    filterLabel: 'Filtrar proyectos por disciplina',
    technologiesUsed: 'Tecnologías Utilizadas',
    keyFeatures: 'Funcionalidades Clave',
    businessValue: 'Valor para el Negocio',
    projectWord: 'Proyecto',
    exampleWord: 'Ejemplo',
    certifications: 'Certificaciones',
    languagesTitle: 'Idiomas',
    profileNote:
      'Perfil de freelancer · nivel Bronce · tres certificaciones superadas · un proyecto a la vez.',
    rightsReserved: 'Todos los derechos reservados.',
    builtWith: 'Diseñado y desarrollado con React — optimizado para rendimiento y accesibilidad.',
  },
  profileTitle: 'Desarrollador Full Stack | Web, Móvil y E‑Commerce',
  navRole: 'Desarrollador Full Stack',
  tagline:
    'Freelancer experto en TI y Programación, creando soluciones digitales fiables, escalables y modernas.',
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    services: 'Servicios',
    skills: 'Habilidades',
    projects: 'Proyectos',
    process: 'Proceso',
  },
  hero: {
    badge: 'Freelancer Preferido del Trimestre · TI y Programación',
    headline:
      'Creando Soluciones Web, Móviles y de E‑Commerce Escalables para Empresas Modernas',
    headlineAccent: 'E‑Commerce Escalables',
    intro:
      'Soy Artjom Liske, desarrollador full stack radicado en Alemania. Construyo sitios y aplicaciones web y móviles que funcionan realmente bien: rápidas, claras y fáciles de usar en cualquier pantalla. Trabajando de forma independiente desde 2014, he entregado plataformas de reservas, aplicaciones móviles, tiendas de e-commerce, sitios corporativos y automatización de procesos para clientes de Europa y América Latina.',
    primaryCta: 'Ver Proyectos',
    secondaryCta: 'Conocer Mi Experiencia',
    stats: [
      'Años de Experiencia',
      'Proyectos en el Portafolio',
      'Idiomas Hablados',
      'Certificaciones Superadas',
    ],
    pillars: ['Full-Stack', 'Móvil', 'E‑Commerce', 'APIs'],
  },
  about: {
    eyebrow: 'Sobre Mí',
    heading: 'La parte técnica rara vez es la parte difícil',
    paragraphs: [
      'Hola, soy Artjom. Construyo aplicaciones web y móviles que funcionan realmente bien: rápidas, claras y fáciles de usar en cualquier pantalla.',
      'Trabajo principalmente con React.js, Next.js y Node.js en plataformas a medida, y con WordPress y WooCommerce cuando el cliente necesita gestionar su propio contenido sin depender de un desarrollador. También desarrollo aplicaciones móviles para Android e iOS con React Native y Flutter, además de integraciones de API REST, chatbots y automatización de procesos.',
      'Desde 2014 trabajo como diseñador UI/UX y desarrollador full stack independiente: responsable de la arquitectura de frontend y backend, el modelado de bases de datos con MySQL y PostgreSQL, el desarrollo e integración de APIs, la optimización del rendimiento y las pruebas, para clientes de Europa y América Latina.',
      'Más de 10 años construyendo productos digitales me enseñaron que la parte técnica rara vez es la parte difícil. Lo difícil es entender qué necesita el negocio antes de escribir código, y decirlo a tiempo cuando algo no va a funcionar como se espera. Por eso trabajo con comunicación constante, avance visible en todo momento y revisiones rápidas.',
      'Si tienes un proyecto en mente, cuéntame qué quieres lograr y te daré una visión honesta de cómo lo abordaría.',
    ],
    highlights: [
      ['Independiente desde 2014', 'Más de una década entregando aplicaciones web y móviles como profesional independiente.'],
      ['Freelancer Preferido del Trimestre', 'Reconocimiento por el trabajo en PHP y WordPress, sobre una década de actividad como freelancer.'],
      ['Entrega multilingüe', 'Alemán, inglés, español y portugués: colaboración remota sin barrera idiomática.'],
      ['La comunicación primero', 'Actualizaciones claras y capturas de pantalla en cada etapa, con revisiones rápidas y precisas.'],
    ],
    facts: [
      ['Ubicación', 'Alemania'],
      ['Experiencia', '10+ Años · Desde 2014'],
      ['Tarifa', 'USD 30,00 / hora'],
      ['Disponibilidad', 'Un proyecto a la vez'],
      ['Enfoque', 'Web · Móvil · E-Commerce'],
      ['Entrega', 'Remota, en todo el mundo'],
    ],
    languageLevels: ['Nativo o bilingüe', 'Intermedio alto', 'Intermedio alto', 'Intermedio alto'],
    languageNames: ['Alemán', 'Inglés', 'Español', 'Portugués'],
  },
  services: {
    eyebrow: 'Servicios',
    heading: 'Lo que construyo para mis clientes',
    intro:
      'Seis capacidades que reflejan el trabajo que realmente entrego: desde un sitio corporativo responsivo hasta una plataforma de e-commerce completa con su propia capa de API.',
    items: [
      {
        title: 'Desarrollo Web Full-Stack',
        summary: 'Plataformas web escalables y fáciles de mantener.',
        description:
          'Aplicaciones web completas con React.js o Next.js en el front-end y Node.js, NestJS o PHP por detrás, estructuradas para el rendimiento y el mantenimiento a largo plazo.',
        points: ['Front-ends en React.js y Next.js', 'Servicios en Node.js y NestJS', 'Bases de código en TypeScript'],
      },
      {
        title: 'Desarrollo de E-Commerce',
        summary: 'Tiendas hechas para vender y fáciles de gestionar.',
        description:
          'Tiendas a medida y plataformas de retail multimarca, además de proyectos en WordPress y WooCommerce: catálogo, carrito, checkout y una administración que tu equipo puede usar de verdad.',
        points: ['Tiendas a medida', 'WooCommerce y WordPress', 'Catálogos multimarca'],
      },
      {
        title: 'Desarrollo de Aplicaciones Móviles',
        summary: 'Apps multiplataforma con aspecto nativo.',
        description:
          'Aplicaciones móviles para Android e iOS con React Native, además de trabajo en Flutter y Windows Mobile y diseño de aplicaciones, entregadas en una sola base de código.',
        points: ['Android e iOS con React Native', 'Flutter y Windows Mobile', 'Diseño de aplicaciones móviles'],
      },
      {
        title: 'Desarrollo e Integración de APIs REST',
        summary: 'Servicios de backend seguros y eficientes.',
        description:
          'APIs REST y servicios web en Node.js y NestJS, además de la integración fiable de las plataformas externas y los sistemas internos de los que ya depende el negocio.',
        points: ['Diseño de APIs REST', 'Integraciones con terceros', 'Conexión con sistemas internos'],
      },
      {
        title: 'Diseño Web Responsivo y Landing Pages',
        summary: 'Interfaces rápidas y claras en cualquier pantalla.',
        description:
          'Sitios responsivos modernos y landing pages en HTML, CSS y JavaScript: limpios, rápidos de cargar y correctos desde el móvil hasta el escritorio.',
        points: ['Diseño mobile-first', 'Desarrollo de landing pages', 'Correcto en todos los dispositivos'],
      },
      {
        title: 'Chatbots y Automatización de Procesos',
        summary: 'Menos trabajo repetitivo cada día.',
        description:
          'Desarrollo de chatbots y automatización de flujos con Python e integraciones REST, incluidas plataformas de procesos internos que sustituyen rutinas manuales basadas en hojas de cálculo.',
        points: ['Desarrollo de chatbots', 'Automatización de flujos de trabajo', 'Scripts e integraciones en Python'],
      },
    ],
  },
  skills: {
    eyebrow: 'Habilidades Técnicas',
    heading: 'La tecnología detrás de las soluciones',
    intro:
      'Todas las tecnologías aquí listadas figuran en mi perfil público de freelancer.',
    categories: [
      ['Frontend', 'Interfaces que siguen siendo rápidas y claras en cualquier pantalla.'],
      ['Backend', 'Servicios de servidor y las APIs que se apoyan en ellos.'],
      ['Móvil', 'Entrega multiplataforma desde una sola base de código.'],
      ['E-Commerce', 'Tiendas, catálogos y los sistemas que los sostienen.'],
      ['Responsivo y UI', 'La disciplina detrás de cada maquetación que entrego.'],
      ['Automatización', 'Chatbots y flujos que reducen el esfuerzo manual.'],
    ],
  },
  projects: {
    eyebrow: 'Trabajos Seleccionados',
    heading: 'Proyectos en web, móvil y e-commerce',
    intro:
      'Entregas a clientes de mi portafolio freelance, junto a mis propias construcciones de referencia, filtradas por disciplina. Cada entrada indica las tecnologías realmente utilizadas; las construcciones de referencia están marcadas como tales.',
    items: {
      'travel-booking': {
        category: 'Plataforma Móvil',
        title: 'Plataforma de Reservas de Viajes y Aviación Digital',
        overview:
          'Una experiencia de reserva completa para viajes y aviación, construida mobile-first en React Native y desplegada con un pipeline automatizado. Búsqueda, disponibilidad, reserva y confirmación ocurren en la aplicación que el viajero ya tiene abierta.',
        features: [
          'Búsqueda y disponibilidad por rutas y fechas',
          'Reserva y confirmación gestionadas dentro de la app',
          'Una sola base de código React Native para iOS y Android',
          'Pipeline automatizado de build y despliegue',
        ],
        value:
          'Pone todo el recorrido de reserva en el móvil del viajero, y cada despliegue detrás de un pipeline en vez de un proceso manual.',
      },
      aquarium: {
        category: 'WordPress y CMS',
        title: 'Gestión de Acuarios Premium y Sitio Corporativo',
        overview:
          'Un sitio corporativo para un servicio de gestión de acuarios premium, construido en WordPress con una experiencia de edición a medida, para que el equipo publique servicios, galerías y novedades sin tocar código.',
        features: [
          'Tema WordPress a medida, diseñado sobre el catálogo de servicios',
          'Estructura de edición que el equipo usa sin desarrollador',
          'Galerías y páginas de servicio gestionadas desde el CMS',
          'Diseño responsivo del móvil al escritorio',
        ],
        value:
          'La empresa pasa a ser dueña de su contenido: un nuevo servicio o galería se publica el mismo día, sin desarrollador de por medio.',
      },
      'event-checkin': {
        category: 'Plataforma Móvil',
        title: 'Plataforma de Gestión de Eventos y Check-In en Tiempo Real',
        overview:
          'Check-in de asistentes en vivo, con sincronización instantánea entre los dispositivos del equipo en la puerta y el panel del evento detrás. Hecho en React Native, para que la misma build funcione con el equipamiento que tenga el recinto.',
        features: [
          'Check-in de asistentes desde cualquier dispositivo del equipo',
          'Sincronización en tiempo real con el panel del evento',
          'Entradas duplicadas o inválidas detectadas en la puerta',
          'Una sola base de código para iOS y Android',
        ],
        value:
          'Elimina la lista impresa y la cola que la acompaña: la organización ve las llegadas mientras ocurren en lugar de contarlas después.',
      },
      enneagram: {
        category: 'Aplicación Web',
        title: 'Análisis de Perfil Eneagrama — Evaluación de Personalidad',
        overview:
          'Una evaluación interactiva hecha en Vue.js: el cuestionario puntúa las respuestas según se van dando y presenta al final un perfil de personalidad claro y legible, en vez de una página de números.',
        features: [
          'Cuestionario guiado con progreso y reanudación',
          'Modelo de puntuación aplicado sobre la marcha',
          'Perfil legible en lugar de puntuaciones en bruto',
          'Diseño responsivo pensado para completarse en el móvil',
        ],
        value:
          'Convierte un cuestionario largo en papel en algo que la gente termina en el móvil, con un resultado que de verdad puede leer.',
      },
      'ai-agent': {
        category: 'IA y Automatización',
        title: 'Agente de IA Autónomo para Automatización de Procesos',
        overview:
          'Un agente que ejecuta por sí solo procesos de negocio de varios pasos, escrito en Python, con un panel en React.js para supervisión: el trabajo rutinario ocurre sin asistencia y sigue siendo posible ver exactamente qué hizo.',
        features: [
          'Procesos de varios pasos ejecutados sin supervisión',
          'Panel en React.js para monitorizar e intervenir',
          'Integraciones con las herramientas que toca cada proceso',
          'Historial completo detrás de cada decisión automatizada',
        ],
        value:
          'Quita al equipo la parte repetitiva del día manteniendo cada paso visible y reversible.',
      },
      'wordpress-design': {
        category: 'WordPress',
        title: 'Diseño de Sitio WordPress',
        overview:
          'Un tema WordPress hecho a mano en lugar de comprado: marcado limpio, carga rápida y una experiencia de edición moldeada según cómo escribe realmente sus páginas el cliente.',
        features: [
          'Tema escrito a mano, sin el peso de un page builder',
          'Marcado semántico limpio y primer render rápido',
          'Estructura de edición moldeada al contenido del cliente',
          'Responsivo del móvil al escritorio',
        ],
        value:
          'Un sitio que carga rápido y sigue siendo editable: el cliente cambia sus páginas sin romper el diseño.',
      },
      ecommerce: {
        category: 'E-Commerce',
        title: 'Sitio de eCommerce',
        overview:
          'Una tienda a medida en PHP, con flujo de producto y checkout hechos desde cero, diseñada y desarrollada de principio a fin: catálogo, carrito, checkout y la administración desde la que el equipo la gestiona.',
        features: [
          'Catálogo de productos y páginas de detalle a medida',
          'Carrito y checkout construidos desde cero',
          'MySQL detrás de catálogo, pedidos y stock',
          'Diseño de la tienda producido en el mismo trabajo',
        ],
        value:
          'Una tienda que el negocio posee por completo, sin comisión de plataforma y sin una plantilla que limite.',
      },
      vassalli: {
        category: 'Shopify',
        title: 'Listado de Productos — Vassalli',
        overview:
          'Un listado de productos Shopify limpio y organizado para una marca de ropa: descripciones detalladas, opciones de talla y variante y visuales cuidados, estructurados para que el catálogo se lea igual del primer producto al último.',
        features: [
          'Listados de ropa estructurados, con descripciones detalladas',
          'Opciones de talla y variante en cada producto',
          'Estilo consistente en todo el catálogo',
          'Merchandising montado según cómo navega quien compra',
        ],
        value:
          'Un catálogo que se lee como una sola tienda, y no como un conjunto de páginas de producto sin relación.',
      },
    },
  },
  examples: {
    badge: 'Proyecto de referencia',
    note: 'Las entradas señaladas como proyectos de referencia son demostraciones propias, no trabajos de clientes. Todas las demás se entregaron a clientes reales.',
    items: {
      'telegram-order-bot': {
        category: 'Chatbot de Mensajería',
        title: 'Bot de Pedidos y Soporte en Telegram',
        overview:
          'Un bot de Telegram que sigue pedidos, inicia devoluciones y transfiere a una persona cuando no puede ayudar, guiado por teclados inline: el cliente toca en vez de escribir y el bot nunca tiene que adivinar qué quiso decir.',
        features: [
          'Seguimiento de pedidos y devoluciones iniciadas en el chat',
          'Teclados inline en lugar de comandos escritos',
          'Consultas en vivo a través de la API REST de la tienda',
          'Transferencia a una persona con la conversación completa adjunta',
        ],
        value:
          'Responde las preguntas rutinarias sobre pedidos a cualquier hora, e involucra a una persona solo cuando la conversación lo necesita.',
      },
      'whatsapp-booking-bot': {
        category: 'Chatbot de Mensajería',
        title: 'Bot de Reserva de Citas en WhatsApp',
        overview:
          'Un bot de WhatsApp que ofrece disponibilidad real desde el calendario, reserva la cita y crea el recordatorio: toda la reserva completada sin salir del chat ni instalar nada.',
        features: [
          'Disponibilidad real leída directamente del calendario',
          'Cita reservada y confirmada dentro de la conversación',
          'Recordatorio automático antes de la cita',
          'Cambios y cancelaciones gestionados en el mismo hilo',
        ],
        value:
          'Las reservas ocurren en el momento en que alguien pregunta, en lugar de esperar a que se conteste el teléfono.',
      },
      'chatbot-handover': {
        category: 'Plataforma de Chatbot',
        title: 'Bot Multicanal con Transferencia a Agente',
        overview:
          'Una sola bandeja de entrada para Telegram y WhatsApp, con una consola de agente en React.js encima. El bot responde lo que puede y deriva el resto a una persona con la conversación completa adjunta, para que nadie tenga que pedirle al cliente que repita.',
        features: [
          'Telegram y WhatsApp en una única bandeja de entrada',
          'Un solo motor de conversación detrás de ambos canales',
          'La derivación lleva consigo la conversación completa',
          'Consola en React.js para el agente que toma el relevo',
        ],
        value:
          'El bot absorbe el volumen y el equipo se queda con las conversaciones que necesitan a una persona, sin perder el contexto.',
      },
      'shopify-headless': {
        category: 'Comercio Headless',
        title: 'Tienda Shopify Headless sobre Next.js',
        overview:
          'El mismo catálogo de Shopify servido por un front-end Next.js a través de la Storefront API — páginas renderizadas y cacheadas en el edge, con el checkout devuelto a Shopify para que pagos, impuestos y antifraude sigan donde corresponde.',
        features: [
          'Consultas a la Storefront API para catálogo, variantes y carrito',
          'Páginas de producto renderizadas en servidor y revalidadas en el edge',
          'Checkout entregado al flujo alojado por Shopify',
          'TypeScript de punta a punta, de la consulta al componente',
        ],
        value:
          'Libertad de front-end y velocidad de carga sin rehacer los pagos — el catálogo se queda en Shopify y la experiencia deja de estar limitada por el tema.',
      },
      'shopify-subscription-app': {
        category: 'App de Shopify',
        title: 'App de Suscripciones y Packs para Shopify',
        overview:
          'Una app integrada en Shopify que añade pedidos recurrentes y packs de producto a la tienda — planes de venta, gestión de contratos y reintentos de cobro, todo renderizado dentro del admin de Shopify para que el comerciante no tenga que salir de allí.',
        features: [
          'Planes de venta y contratos de suscripción',
          'Constructor de packs con precio sobre el catálogo en vivo',
          'Reintento automático ante pagos rechazados',
          'Webhooks idempotentes para no cobrar dos veces',
        ],
        value:
          'Convierte compras puntuales en ingresos recurrentes y evita que una tarjeta rechazada acabe siendo una baja silenciosa.',
      },
      'woocommerce-store': {
        category: 'WooCommerce',
        title: 'Tienda WooCommerce para un Productor Artesanal',
        overview:
          'Una tienda WooCommerce para una finca que vende directo — productos de temporada, cajas regalo, reglas de envío en la UE e IVA resueltos por la tienda y no a mano, sobre una instalación WordPress que el dueño ya sabe usar.',
        features: [
          'Configuración de productos, variaciones y cajas regalo',
          'Reglas de envío e IVA por zona en la UE',
          'Stock, lotes de cosecha y prepedidos',
          'Checkout ajustado para completarse en móvil',
        ],
        value:
          'Permite a un productor pequeño vender en toda Europa sin distribuidor y editar la tienda desde el admin de WordPress que ya tiene.',
      },
      'wordpress-multilingual-site': {
        category: 'WordPress',
        title: 'Sitio Corporativo WordPress Multilingüe',
        overview:
          'Un sitio corporativo WordPress publicado en cuatro idiomas desde un único flujo editorial — páginas en el editor de bloques, bloques reutilizables para todo lo que se repite y SEO por idioma, de modo que cada mercado tenga sus propias páginas canónicas.',
        features: [
          'Páginas en el editor de bloques con bloques reutilizables y centralizados',
          'Cuatro idiomas con el estado de traducción visible para el editor',
          'Metadatos, canónicas y sitemaps por idioma',
          'Core Web Vitals aprobados en móvil y escritorio',
        ],
        value:
          'El equipo de marketing publica en cada mercado sin depender de un desarrollador, y cada idioma posiciona por sí mismo en lugar de competir con los demás.',
      },
      'wordpress-lead-plugin': {
        category: 'Plugin de WordPress',
        title: 'Plugin WordPress de Enrutamiento de Leads',
        overview:
          'Un plugin de WordPress hecho a medida en lugar de una pila de plugins genéricos — leads capturados como custom post type, enrutados por regla al equipo comercial correcto y enviados al CRM con una cola de reintentos detrás.',
        features: [
          'Custom post type con sus propias columnas y filtros en el admin',
          'Enrutamiento por regla según origen, región y producto',
          'Sincronización con el CRM vía REST, con reintentos y registro de fallos',
          'Todo gestionado dentro de wp-admin',
        ],
        value:
          'Sustituye cuatro plugins solapados por uno que hace exactamente el trabajo: el lead llega solo a la persona correcta y ninguno se pierde en una sincronización fallida.',
      },
      'react-native-shop-app': {
        category: 'Aplicación Móvil',
        title: 'App de Compras en React Native para iOS y Android',
        overview:
          'Una app de compras publicada en ambas tiendas desde una sola base de código React Native — catálogo, ficha de producto, carrito y pago, con comportamiento nativo en cada plataforma y una capa de API compartida por detrás.',
        features: [
          'Una base de código publicada en App Store y Play Store',
          'Catálogo, búsqueda y filtros sobre una REST API',
          'Hojas de pago nativas y tarjetas guardadas',
          'Notificaciones push de pedidos y reposición de stock',
        ],
        value:
          'Dos tiendas atendidas por un equipo y un ciclo de publicación, en vez de dos apps nativas que se van separando poco a poco.',
      },
      'flutter-delivery-app': {
        category: 'Aplicación Móvil',
        title: 'App Flutter de Reparto y Seguimiento de Repartidores',
        overview:
          'Dos apps Flutter salidas de un mismo proyecto: el cliente ve avanzar su pedido en tiempo real y el repartidor trabaja una ruta optimizada, cerrando cada parada con firma, foto y sello de GPS.',
        features: [
          'Posición del repartidor y hora estimada de llegada en vivo',
          'Ruta optimizada con paso a la navegación',
          'Prueba de entrega: firma, foto y ubicación',
          'Envíos en cola mientras el repartidor no tiene cobertura',
        ],
        value:
          'Reduce casi a cero las llamadas de “¿dónde está mi pedido?” y deja al operador un registro de entrega de cada parada.',
      },
      'android-field-service': {
        category: 'Aplicación Móvil',
        title: 'App Android de Servicio en Campo con Sincronización Offline',
        overview:
          'Una app Android nativa para técnicos que trabajan en sótanos y salas de máquinas, donde no hay cobertura. Cada pantalla lee y escribe primero en una base local, y la cola se sincroniza con traza de auditoría en cuanto el teléfono vuelve a tener red.',
        features: [
          'Lectura y escritura totalmente offline sobre una base SQLite local',
          'Checklists de orden de trabajo, piezas usadas y registro de horas',
          'Captura de firma y fotos en el sitio',
          'Cola de sincronización con gestión de conflictos y registro de auditoría',
        ],
        value:
          'El técnico deja de rellenar papel para teclearlo después — la oficina ve el trabajo cerrado minutos después de terminarlo, no días.',
      },
      'laravel-booking-api': {
        category: 'Back-end y API',
        title: 'API Laravel de Reservas y Agenda',
        overview:
          'Una API Laravel para reservar un recurso finito, donde lo difícil no es el endpoint sino la carrera — dos personas pidiendo la misma franja en el mismo segundo. Resuelto con bloqueo de fila dentro de una transacción y cubierto por pruebas de concurrencia.',
        features: [
          'Endpoints de disponibilidad y reserva con escritura bajo bloqueo',
          'Pruebas de concurrencia que demuestran que no hay doble reserva',
          'Sincronización de calendario y correos de confirmación por evento',
          'Entrega de webhooks con reintentos automáticos',
        ],
        value:
          'Un sistema de reservas que sigue siendo correcto bajo carga — la única propiedad que el cliente nota de inmediato cuando falta.',
      },
      'php-crm-invoicing': {
        category: 'Aplicación de Negocio',
        title: 'CRM de Clientes y Facturación en PHP',
        overview:
          'Un back-office en PHP para un despacho profesional: clientes, presupuestos, partes de horas y facturas en un solo modelo, con la antigüedad de cada factura pendiente visible en la primera pantalla y no enterrada en un informe.',
        features: [
          'Clientes, presupuestos, horas y facturas en un mismo sitio',
          'Antigüedad de facturas y seguimiento de impagos',
          'Acceso por rol para socios y asistentes',
          'Generación de PDF y conciliación de cobros',
        ],
        value:
          'Muestra quién debe qué y desde cuándo sin que nadie rehaga una hoja de cálculo — la cifra de la que realmente vive un despacho.',
      },
      'php-payment-gateway': {
        category: 'Integración',
        title: 'Capa PHP de Integración con Pasarelas de Pago',
        overview:
          'Una única interfaz PHP delante de tres proveedores de pago. El checkout llama a autorizar, capturar y reembolsar; qué proveedor se ejecuta es configuración. Los webhooks llevan firma verificada y son a prueba de reenvíos, así que una entrega duplicada nunca abona el pedido dos veces.',
        features: [
          'Interfaz única sobre tarjeta, monedero y método de pago local',
          'Verificación de firma en cada webhook entrante',
          'Conciliación idempotente contra el libro de pedidos',
          'Un proveedor añadido o cambiado sin tocar el checkout',
        ],
        value:
          'Añadir un método de pago pasa a ser un cambio de configuración, y el libro sigue cuadrando aunque el proveedor mande el mismo evento dos veces.',
      },
      'python-automation': {
        category: 'Automatización en Python',
        title: 'Pipeline de Datos Programado en Python',
        overview:
          'Una tarea Python programada que extrae datos de una API y de una hoja de cálculo, los valida y normaliza, escribe el resultado en una única fuente de verdad y envía un informe por correo, sustituyendo una rutina manual que alguien hacía a mano cada mañana.',
        features: [
          'Extracción, transformación y carga programadas por cron',
          'Validación y normalización antes de escribir nada',
          'Informe automático en cuanto termina la ejecución',
          'Registro de ejecución y alertas de fallo en cada corrida',
        ],
        value:
          'Convierte una tarea manual recurrente en algo que se ejecuta solo y avisa cuando no lo hace, sin depender de que nadie lo recuerde.',
      },
      'vue-crm-portal': {
        category: 'Plataforma de Ventas',
        title: 'Portal de Pipeline de Ventas en Vue.js',
        overview:
          'Un pipeline compartido por cuatro equipos comerciales regionales, con front end en Vue.js sobre una API NestJS. Todos los equipos ven los mismos negocios y las mismas reglas de etapa, para que un negocio no signifique cosas distintas en cada oficina.',
        features: [
          'Un pipeline compartido por cuatro equipos regionales',
          'Reglas de etapa aplicadas en la API, no en el navegador',
          'Visibilidad por rol, equipo y region',
          'Historial de actividad en cada negocio, exportable a CSV',
        ],
        value: 'Una sola version del pipeline en lugar de cuatro hojas de calculo que se contradicen.',
      },
      'laravel-saas-billing': {
        category: 'Plataforma de Facturacion',
        title: 'Motor de Suscripciones y Facturacion en Laravel',
        overview:
          'Planes, asientos, prorrateo y recuperacion de pagos fallidos para un negocio por suscripcion. Lo dificil no es cobrar una tarjeta una vez; es lo que ocurre en un cambio de plan a mitad de ciclo y cuando falla el tercer cobro.',
        features: [
          'Cambios de plan prorrateados al dia',
          'Reclamacion con reintentos y periodo de gracia',
          'Webhooks del proveedor reconciliados con el estado local',
          'Facturas generadas en PDF con tratamiento de IVA',
        ],
        value: 'Ingresos que siguen llegando despues del primer mes, con los fallos perseguidos automaticamente.',
      },
      'php-inventory-system': {
        category: 'Sistema de Almacen',
        title: 'Control de Stock en PHP para Dos Almacenes',
        overview:
          'Stock contado una sola vez en dos almacenes, con puntos de pedido que realmente saltan. Las entradas y salidas se registran como eventos y no como ediciones, de modo que la cifra actual siempre se explica por su historial.',
        features: [
          'Una unica cifra de stock para ambos almacenes',
          'Puntos de pedido que generan sugerencias de compra',
          'Movimientos guardados como registro auditable',
          'Plazos de proveedor incluidos en el calculo de reposicion',
        ],
        value: 'Menos roturas de stock y una cifra en la que confian almacen y oficina.',
      },
      'wordpress-membership-site': {
        category: 'Sitio de Membresias',
        title: 'Membresias y Contenido Restringido en WordPress',
        overview:
          'Tres niveles de membresia en WordPress, con contenido restringido por regla y no a mano. Los editores siguen escribiendo en el editor de siempre; el plugin decide quien puede leer que, y las renovaciones se ejecutan sin que nadie tenga que acordarse.',
        features: [
          'Tres niveles con restriccion de contenido por regla',
          'Renovaciones automaticas y correos de vencimiento',
          'Area de socios con facturas y descargas',
          'Los editores conservan el editor estandar de WordPress',
        ],
        value: 'Ingresos recurrentes a partir de textos que ya se publicaban gratis.',
      },
      'woocommerce-multivendor': {
        category: 'Marketplace',
        title: 'Marketplace Multivendedor en WooCommerce',
        overview:
          'Un carrito, varios vendedores. El cliente paga una vez; el pedido se divide por vendedor de forma interna, la comision se retiene en origen y cada vendedor ve solo sus pedidos y liquidaciones.',
        features: [
          'Un checkout dividido en pedidos por vendedor',
          'Comision retenida automaticamente en origen',
          'Panel del vendedor con pedidos, stock y liquidaciones',
          'Ciclos de pago con extracto por vendedor',
        ],
        value: 'Una tienda que crece sumando vendedores en vez de comprando mas stock.',
      },
      'shopify-b2b-wholesale': {
        category: 'Comercio B2B',
        title: 'Portal Mayorista B2B en Shopify',
        overview:
          'Precios de mayorista en la misma tienda Shopify que atiende al publico, ocultos tras un login. Cada empresa tiene su lista de precios y sus condiciones de pago, de modo que el canal mayorista no necesita una segunda plataforma.',
        features: [
          'Listas de precios por empresa tras un login',
          'Condiciones de pago por cuenta, incluidos 30 y 60 dias',
          'Cantidades minimas y reglas de caja completa',
          'Catalogo mayorista oculto de la busqueda publica',
        ],
        value: 'Mayorista y minorista en una sola plataforma en lugar de dos sistemas que sincronizar.',
      },
      'react-analytics-dashboard': {
        category: 'Analitica',
        title: 'Panel de Embudo de Checkout en React',
        overview:
          'Una vista de embudo sobre datos de eventos: donde se abandona el carrito, por paso y por dispositivo. Hecho para que una responsable de marketing conteste una pregunta sin pedir a un desarrollador que escriba una consulta.',
        features: [
          'Vistas de embudo, cohorte y retencion sobre un solo almacen de eventos',
          'Segmentacion por dispositivo, canal y campana',
          'Graficos servidos desde consultas preagregadas',
          'Vistas guardadas y compartidas por el equipo',
        ],
        value: 'Decisiones tomadas desde el embudo y no desde opiniones sobre el.',
      },
      'booking-scheduling-app': {
        category: 'Agendamiento',
        title: 'Gestion de Citas para Seis Profesionales',
        overview:
          'Un calendario para seis profesionales, tres salas y una pagina publica de reservas. La disponibilidad se calcula a partir de horarios, capacidad de salas y citas existentes, de modo que el hueco que ve el cliente existe de verdad.',
        features: [
          'Disponibilidad calculada por profesional, sala y servicio',
          'Pagina publica de reserva con correos de confirmacion',
          'Recordatorios por SMS y correo que reducen ausencias',
          'Ventanas de cambio y cancelacion aplicadas por regla',
        ],
        value: 'Una agenda que se llena sola, sin las citas duplicadas que invita una hoja compartida.',
      },
      'nest-microservices': {
        category: 'Backend y API',
        title: 'Servicio NestJS Dividido en Colas',
        overview:
          'Un monolito dividido en trabajadores en cola por area: pedidos, pagos, stock, correo. Cada cola reintenta con espera creciente y lo que sigue fallando acaba en una cola muerta, para reprocesarlo en vez de perderlo.',
        features: [
          'Trabajo dividido en colas por area',
          'Reintento con espera exponencial por cola',
          'Cola muerta con reproceso desde la consola',
          'Rendimiento y retraso visibles por consumidor',
        ],
        value: 'Picos de trafico absorbidos por la cola en lugar de tumbar el checkout.',
      },
      'nextjs-headless-blog': {
        category: 'Sitio Editorial',
        title: 'Sitio Editorial en Next.js con CMS Headless',
        overview:
          'Un sitio editorial servido por Next.js y redactado en un CMS headless. Las paginas se pregeneran en el build y se revalidan en el edge, de modo que el sitio sigue siendo rapido sin que los editores esperen a un despliegue.',
        features: [
          'Pregeneracion estatica con revalidacion en el edge',
          'Los editores publican sin desarrollador ni despliegue',
          'Datos estructurados y sitemap generados automaticamente',
          'Imagenes servidas en formatos modernos segun el dispositivo',
        ],
        value: 'Velocidad de publicacion para los editores y de carga para el lector, a la vez.',
      },
      'laravel-queue-worker': {
        category: 'Backend y API',
        title: 'Importador de Catalogo en Colas con Laravel',
        overview:
          'Una importacion nocturna de catalogo sacada de la peticion web y llevada a trabajos en cola. El trabajo se divide en bloques, de modo que un bloque defectuoso reintenta solo en vez de tumbar toda la importacion, y la ejecucion informa de lo que rechazo.',
        features: [
          'Importacion dividida en bloques que reintentan por separado',
          'Espera exponencial con limite de reintentos',
          'Filas rechazadas informadas y nunca descartadas en silencio',
          'Progreso y fallos visibles mientras corre el trabajo',
        ],
        value: 'Una importacion que termina de noche y dice exactamente que no pudo aceptar.',
      },
      'wordpress-headless-api': {
        category: 'CMS Headless',
        title: 'WordPress Headless con Front End en Next.js',
        overview:
          'WordPress se mantiene como editor y se convierte en API; el sitio publico lo renderiza Next.js. Los editores conservan el flujo que conocen y el front end deja de estar limitado a lo que puede hacer una plantilla.',
        features: [
          'Rutas REST propias que devuelven bloques en JSON',
          'Cache invalidada en cuanto se guarda una entrada',
          'Los editores conservan el editor estandar de WordPress',
          'Front end libre de las limitaciones de temas y plugins',
        ],
        value: 'Un front end moderno sin reeducar a quien escribe el contenido.',
      },
      'shopify-inventory-sync': {
        category: 'Integracion',
        title: 'Sincronizacion de Stock entre Shopify y ERP',
        overview:
          'Stock mantenido a la par entre Shopify y un sistema de retaguardia, en ambos sentidos. El ERP sigue siendo la fuente de verdad, Shopify se actualiza dentro del presupuesto de la API y una reconciliacion horaria detecta desviaciones.',
        features: [
          'Sincronizacion bidireccional con el ERP como fuente de verdad',
          'Limitacion de ritmo que respeta el presupuesto de la API de Shopify',
          'Los pedidos reservan stock en el ERP al pagar',
          'Reconciliacion horaria que informa de cualquier desviacion',
        ],
        value: 'Una sola cifra de stock en ambos sistemas, para no vender lo que no hay.',
      },
      'node-realtime-orders': {
        category: 'Backend y API',
        title: 'Tablero de Pedidos en Tiempo Real por WebSockets',
        overview:
          'Pantallas de cocina y mostrador que se actualizan en cuanto un pedido cambia, sin sondeo. Las transiciones de estado se validan y bloquean en la base de datos, de modo que dos pantallas no avanzan el mismo pedido dos veces.',
        features: [
          'Estado enviado a todas las pantallas en el mismo instante',
          'Transiciones validadas y con bloqueo de fila en la base de datos',
          'Reconexion silenciosa tras una caida de red',
          'Probado con 400 pantallas simultaneas',
        ],
        value: 'Pantallas que coinciden entre si, en una sala donde los segundos importan.',
      },
      'python-data-pipeline': {
        category: 'Automatizacion',
        title: 'Pipeline Nocturno de Informes en Python',
        overview:
          'Seis fuentes recogidas cada noche, validadas y cargadas en una unica tabla de informes. Si se rechaza demasiada entrada, la ejecucion falla de forma ruidosa en lugar de publicar un informe en el que nadie deberia confiar.',
        features: [
          'Seis fuentes extraidas, validadas y cargadas cada noche',
          'La ejecucion falla de forma ruidosa al superar el umbral de rechazos',
          'Filas rechazadas conservadas e informadas, nunca descartadas',
          'Resumen enviado por correo a finanzas al terminar',
        ],
        value: 'Numeros que llegan al desayuno y un fallo ruidoso cuando no son de fiar.',
      },
      'react-native-loyalty-app': {
        category: 'Aplicacion Movil',
        title: 'App de Fidelizacion y Recompensas en React Native',
        overview:
          'Una tarjeta de fidelizacion que vive en el movil: puntos, niveles y un codigo que la caja puede escanear. Una sola base de codigo React Native llega a ambas tiendas y la tarjeta sigue funcionando sin cobertura.',
        features: [
          'Puntos y niveles con codigo de socio escaneable',
          'Catalogo de recompensas con canje en caja',
          'Ofertas dirigidas por nivel y por tienda mas cercana',
          'Tarjeta legible sin conexion, sincronizada al volver la senal',
        ],
        value: 'Visitas repetidas de clientes que ya llevan la tarjeta en el bolsillo.',
      },
      'flutter-habit-tracker': {
        category: 'Aplicacion Movil',
        title: 'Rastreador de Habitos en Flutter con Recordatorios Locales',
        overview:
          'Un rastreador de habitos hecho una sola vez en Flutter para ambas tiendas. Rachas, vista mensual y recordatorios que dispara el propio dispositivo, para que la app sirva en un tren sin cobertura.',
        features: [
          'Lista diaria con rachas y vista mensual',
          'Notificaciones locales que funcionan sin conexion',
          'Datos guardados en el dispositivo y exportables a CSV',
          'Una sola base de codigo Flutter para iOS y Android',
        ],
        value: 'Una app de habitos que sigue funcionando donde los habitos ocurren.',
      },
      'android-pos-terminal': {
        category: 'Aplicacion Movil',
        title: 'Terminal de Punto de Venta en Android',
        overview:
          'Una caja que cobra, imprime el ticket y cierra el dia. Las ventas se escriben primero en el dispositivo y se sincronizan despues, de modo que una caida de conexion nunca detiene la cola del mostrador.',
        features: [
          'Cesta, cobro e impresion de ticket en el dispositivo',
          'Ventas en cola local, sincronizadas al volver la senal',
          'Informe de cierre con tarjeta, efectivo y devoluciones',
          'Cobro con tarjeta, efectivo y vale de comida',
        ],
        value: 'Un mostrador que sigue atendiendo tenga o no buen dia internet.',
      },
      'ios-property-viewings': {
        category: 'Aplicacion Movil',
        title: 'Busqueda de Inmuebles y Reserva de Visitas en iOS',
        overview:
          'Buscar, guardar y reservar una visita sin salir de la app. El agente recibe la cita en su calendario y el comprador la confirmacion, de modo que la visita queda cerrada antes de que nadie coja el telefono.',
        features: [
          'Busqueda con filtros y listas guardadas',
          'Visita reservada contra el calendario del agente',
          'Confirmacion y entrada de calendario para el comprador',
          'Mensajeria en la app con el agente del anuncio',
        ],
        value: 'Visitas reservadas en el momento de mayor interes y no al siguiente dia habil.',
      },
    },
  },
  process: {
    eyebrow: 'Proceso de Trabajo',
    heading: 'Un camino disciplinado de la idea a producción',
    intro:
      'El mismo flujo estructurado en cada proyecto: la comunicación clara y el avance visible en cada etapa es lo que los clientes señalan siempre en sus comentarios.',
    steps: [
      {
        title: 'Análisis de Requisitos',
        detail:
          'Empiezo por el objetivo de negocio y no por la lista de funcionalidades, trazando usuarios, restricciones, integraciones y criterios de éxito en un alcance claro y acordado.',
        output: 'Documento de alcance y criterios de éxito',
      },
      {
        title: 'Planificación y Arquitectura',
        detail:
          'Elección de tecnologías, modelado de datos y contratos de API, documentados y justificados frente a coste, escala y facilidad de mantenimiento.',
        output: 'Arquitectura y modelo de datos',
      },
      {
        title: 'Planificación de UI/UX',
        detail:
          'Flujos de usuario, estructura de pantallas y maquetación responsiva definidos antes de empezar a desarrollar, para que la interfaz sirva al flujo de trabajo en lugar de decorarlo.',
        output: 'Flujos y maquetación responsiva',
      },
      {
        title: 'Desarrollo e Integración',
        detail:
          'Implementación limpia y basada en componentes, en incrementos revisables, con capturas compartidas en cada etapa para que el avance sea visible y no solo reportado.',
        output: 'Incrementos funcionales, bajo control de versiones',
      },
      {
        title: 'Pruebas y Revisiones',
        detail:
          'Comprobación del comportamiento en dispositivos y tamaños de pantalla reales, y después revisiones rápidas y precisas: la parte del trabajo que más notan los clientes.',
        output: 'Versiones verificadas y revisiones rápidas',
      },
      {
        title: 'Despliegue y Mantenimiento',
        detail:
          'Puesta en producción controlada con documentación y traspaso, seguida de soporte continuo, optimización y nuevas iteraciones.',
        output: 'Publicación y plan de soporte',
      },
    ],
  },
  footer: {
    blurb:
      'Ingeniería full-stack desde Alemania en plataformas web, e-commerce, aplicaciones móviles, APIs REST y automatización de procesos, entregada en remoto a clientes de todo el mundo.',
    columns: ['Explorar', 'Trabajo'],
    links: {
      about: 'Sobre mí',
      services: 'Servicios',
      skills: 'Habilidades Técnicas',
      projects: 'Proyectos',
      process: 'Proceso de Trabajo',
    },
    expertise: ['Web Full-Stack', 'E-Commerce', 'Apps Móviles', 'APIs REST', 'Diseño Responsivo', 'Automatización'],
  },
}


/* ========================================================================== */
/*  DEUTSCH                                                                    */
/* ========================================================================== */

const de = {
  htmlLang: 'de',
  ui: {
    skipToContent: 'Zum Inhalt springen',
    primaryNav: 'Hauptnavigation',
    mobileNav: 'Menü',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    backToTop: 'Nach oben',
    languageLabel: 'Sprache',
    chooseLanguage: 'Sprache wählen',
    filters: {
      all: 'Alle Arbeiten',
      ecommerce: 'E-Commerce',
      shopify: 'Shopify',
      wordpress: 'WordPress',
      php: 'PHP & Laravel',
      mobile: 'Mobile',
      frontend: 'Frontend',
      api: 'APIs & Integrationen',
      chatbot: 'Chatbots',
      automation: 'Automatisierung',
    },
    viewDetails: 'Details ansehen',
    loadMore: 'Mehr laden',
    switchToLight: 'Zum hellen Design wechseln',
    switchToDark: 'Zum dunklen Design wechseln',
    closeDetails: 'Schließen',
    noMatches: 'In dieser Kategorie ist noch nichts vorhanden.',
    filterLabel: 'Projekte nach Fachgebiet filtern',
    technologiesUsed: 'Eingesetzte Technologien',
    keyFeatures: 'Kernfunktionen',
    businessValue: 'Nutzen für das Unternehmen',
    projectWord: 'Projekt',
    exampleWord: 'Beispiel',
    certifications: 'Zertifizierungen',
    languagesTitle: 'Sprachen',
    profileNote:
      'Freelancer-Profil · Bronze-Level · drei bestandene Zertifizierungen · ein Projekt zur Zeit.',
    rightsReserved: 'Alle Rechte vorbehalten.',
    builtWith: 'Gestaltet und entwickelt mit React — auf Performance und Barrierefreiheit ausgelegt.',
  },
  profileTitle: 'Full Stack Developer | Web, Mobile & E‑Commerce',
  navRole: 'Full Stack Developer',
  tagline:
    'Freelancer und Experte für IT & Programmierung — für verlässliche, skalierbare und moderne digitale Lösungen.',
  nav: {
    home: 'Start',
    about: 'Über mich',
    services: 'Leistungen',
    skills: 'Kenntnisse',
    projects: 'Projekte',
    process: 'Ablauf',
  },
  hero: {
    badge: 'Bevorzugter Freelancer des Quartals · IT & Programmierung',
    headline:
      'Skalierbare Web-, Mobile- und E‑Commerce-Lösungen für moderne Unternehmen',
    headlineAccent: 'E‑Commerce-Lösungen',
    intro:
      'Ich bin Artjom Liske, Full Stack Developer aus Deutschland. Ich baue Websites sowie Web- und Mobile-Anwendungen, die wirklich gut funktionieren — schnell, klar und auf jedem Bildschirm einfach zu bedienen. Seit 2014 arbeite ich selbstständig und habe Buchungsplattformen, mobile Anwendungen, Onlineshops, Unternehmenswebsites und Prozessautomatisierung für Kunden in Europa und Lateinamerika umgesetzt.',
    primaryCta: 'Projekte ansehen',
    secondaryCta: 'Kenntnisse entdecken',
    stats: [
      'Jahre Erfahrung',
      'Projekte im Portfolio',
      'Gesprochene Sprachen',
      'Bestandene Zertifizierungen',
    ],
    pillars: ['Full-Stack', 'Mobile', 'E‑Commerce', 'APIs'],
  },
  about: {
    eyebrow: 'Über mich',
    heading: 'Der technische Teil ist selten der schwierige',
    paragraphs: [
      'Hallo, ich bin Artjom. Ich baue Web- und Mobile-Anwendungen, die wirklich gut funktionieren — schnell, klar und auf jedem Bildschirm einfach zu bedienen.',
      'Ich arbeite vor allem mit React.js, Next.js und Node.js für maßgeschneiderte Plattformen, und mit WordPress und WooCommerce, wenn ein Kunde seine Inhalte selbst pflegen möchte, ohne von einem Entwickler abhängig zu sein. Dazu kommen mobile Apps für Android und iOS mit React Native und Flutter sowie REST-API-Integrationen, Chatbots und Prozessautomatisierung.',
      'Seit 2014 arbeite ich selbstständig als UI/UX-Designer und Full Stack Developer — verantwortlich für Frontend- und Backend-Architektur, Datenmodellierung mit MySQL und PostgreSQL, API-Entwicklung und -Integration, Performance-Optimierung und Tests, für Kunden in Europa und Lateinamerika.',
      'Über zehn Jahre digitale Produkte haben mich gelehrt, dass der technische Teil selten der schwierige ist. Schwierig ist es, vor der ersten Zeile Code zu verstehen, was das Geschäft wirklich braucht — und früh zu sagen, wenn etwas nicht so funktionieren wird wie erwartet. Deshalb arbeite ich mit ständiger Kommunikation, sichtbarem Fortschritt und schnellen Korrekturen.',
      'Wenn Sie ein Projekt im Kopf haben: Sagen Sie mir, was Sie erreichen wollen, und Sie bekommen eine ehrliche Einschätzung, wie ich es angehen würde.',
    ],
    highlights: [
      ['Selbstständig seit 2014', 'Über ein Jahrzehnt Web- und Mobile-Anwendungen als selbstständiger Entwickler.'],
      ['Bevorzugter Freelancer des Quartals', 'Auszeichnung für die Arbeit mit PHP und WordPress, auf über zehn Jahren Freelance-Tätigkeit.'],
      ['Mehrsprachige Zusammenarbeit', 'Deutsch, Englisch, Spanisch und Portugiesisch — Remote-Arbeit ohne Sprachbarriere.'],
      ['Kommunikation zuerst', 'Klare Updates und Screenshots in jeder Phase, mit schnellen und präzisen Korrekturen.'],
    ],
    facts: [
      ['Standort', 'Deutschland'],
      ['Erfahrung', '10+ Jahre · seit 2014'],
      ['Stundensatz', 'USD 30,00 / Stunde'],
      ['Verfügbarkeit', 'Ein Projekt zur Zeit'],
      ['Schwerpunkt', 'Web · Mobile · E-Commerce'],
      ['Zusammenarbeit', 'Remote, weltweit'],
    ],
    languageLevels: ['Muttersprache', 'Gutes Mittelstufenniveau', 'Gutes Mittelstufenniveau', 'Gutes Mittelstufenniveau'],
    languageNames: ['Deutsch', 'Englisch', 'Spanisch', 'Portugiesisch'],
  },
  services: {
    eyebrow: 'Leistungen',
    heading: 'Was ich für Kunden baue',
    intro:
      'Sechs Kompetenzen aus der Arbeit, die ich tatsächlich liefere — von der responsiven Unternehmenswebsite bis zur vollständigen E-Commerce-Plattform mit eigener API-Schicht.',
    items: [
      {
        title: 'Full-Stack-Webentwicklung',
        summary: 'Skalierbare und wartbare Webplattformen.',
        description:
          'Vollständige Webanwendungen mit React.js oder Next.js im Frontend und Node.js, NestJS oder PHP dahinter — strukturiert für Performance und langfristige Wartbarkeit.',
        points: ['Frontends mit React.js & Next.js', 'Dienste mit Node.js & NestJS', 'Codebasen in TypeScript'],
      },
      {
        title: 'E-Commerce-Entwicklung',
        summary: 'Shops, die verkaufen und sich leicht betreiben lassen.',
        description:
          'Maßgeschneiderte Onlineshops und Multi-Marken-Plattformen sowie Projekte mit WordPress und WooCommerce — Katalog, Warenkorb, Checkout und eine Verwaltung, die Ihr Team wirklich bedienen kann.',
        points: ['Individuelle Onlineshops', 'WooCommerce & WordPress', 'Multi-Marken-Kataloge'],
      },
      {
        title: 'Entwicklung mobiler Anwendungen',
        summary: 'Plattformübergreifende Apps, die sich nativ anfühlen.',
        description:
          'Mobile Anwendungen für Android und iOS mit React Native, dazu Flutter und Windows Mobile sowie App-Design — aus einer gemeinsamen Codebasis für alle Geräte.',
        points: ['Android & iOS mit React Native', 'Flutter & Windows Mobile', 'Design mobiler Anwendungen'],
      },
      {
        title: 'REST-API-Entwicklung & Integration',
        summary: 'Sichere und effiziente Backend-Dienste.',
        description:
          'REST-APIs und Webservices mit Node.js und NestJS, dazu die verlässliche Anbindung der Drittplattformen und internen Systeme, auf die ein Unternehmen bereits angewiesen ist.',
        points: ['Entwurf von REST-APIs', 'Integration von Drittanbietern', 'Anbindung interner Systeme'],
      },
      {
        title: 'Responsives Webdesign & Landingpages',
        summary: 'Schnelle, klare Oberflächen auf jedem Bildschirm.',
        description:
          'Moderne responsive Websites und Landingpages in HTML, CSS und JavaScript — aufgeräumt, schnell geladen und vom Smartphone bis zum Desktop korrekt.',
        points: ['Mobile-First-Layouts', 'Entwicklung von Landingpages', 'Korrekt auf allen Geräten'],
      },
      {
        title: 'Chatbots & Prozessautomatisierung',
        summary: 'Weniger wiederkehrende Arbeit im Alltag.',
        description:
          'Chatbot-Entwicklung und Workflow-Automatisierung mit Python und REST-Integrationen — bis hin zu internen Prozessplattformen, die manuelle Tabellenroutinen ersetzen.',
        points: ['Chatbot-Entwicklung', 'Automatisierung von Abläufen', 'Python-Skripte & Integrationen'],
      },
    ],
  },
  skills: {
    eyebrow: 'Technische Kenntnisse',
    heading: 'Der Stack hinter den Lösungen',
    intro:
      'Jede hier gelistete Technologie steht auch in meinem öffentlichen Freelancer-Profil.',
    categories: [
      ['Frontend', 'Oberflächen, die auf jedem Bildschirm schnell und klar bleiben.'],
      ['Backend', 'Serverseitige Dienste und die APIs darüber.'],
      ['Mobile', 'Plattformübergreifend aus einer einzigen Codebasis.'],
      ['E-Commerce', 'Shops, Kataloge und die Systeme dahinter.'],
      ['Responsiv & UI', 'Die Disziplin hinter jedem Layout, das ich ausliefere.'],
      ['Automatisierung', 'Chatbots und Abläufe, die Handarbeit reduzieren.'],
    ],
  },
  projects: {
    eyebrow: 'Ausgewählte Arbeiten',
    heading: 'Projekte in Web, Mobile und E-Commerce',
    intro:
      'Kundenprojekte aus meinem Freelance-Portfolio, daneben meine eigenen Referenzbeispiele, nach Fachgebiet filterbar. Jeder Eintrag nennt die tatsächlich eingesetzten Technologien; Referenzbeispiele sind als solche gekennzeichnet.',
    items: {
      'travel-booking': {
        category: 'Mobile Plattform',
        title: 'Buchungs- und Luftfahrtplattform für Reisen',
        overview:
          'Eine durchgängige Buchungsstrecke für Reise und Luftfahrt, mobile-first in React Native gebaut und über eine automatisierte Deployment-Pipeline ausgeliefert. Suche, Verfügbarkeit, Buchung und Bestätigung passieren in der App, die der Reisende ohnehin offen hat.',
        features: [
          'Suche und Verfügbarkeit über Strecken und Termine',
          'Buchung und Bestätigung vollständig in der App',
          'Eine React-Native-Codebasis für iOS und Android',
          'Automatisierte Build- und Release-Pipeline',
        ],
        value:
          'Bringt die gesamte Buchungsstrecke auf das Telefon des Reisenden — und jedes Release hinter eine Pipeline statt hinter ein manuelles Deployment.',
      },
      aquarium: {
        category: 'WordPress & CMS',
        title: 'Premium-Aquarienbetreuung und Unternehmenswebsite',
        overview:
          'Eine Unternehmenswebsite für einen Premium-Aquarienservice, gebaut auf WordPress mit einer maßgeschneiderten Redaktionsoberfläche — das Team veröffentlicht Leistungen, Galerien und Neuigkeiten, ohne Code anzufassen.',
        features: [
          'Individuelles WordPress-Theme rund um den Leistungskatalog',
          'Redaktionsstruktur, die das Team ohne Entwickler bedient',
          'Galerien und Leistungsseiten aus dem CMS gepflegt',
          'Responsive Layouts vom Smartphone bis zum Desktop',
        ],
        value:
          'Das Unternehmen besitzt seine Inhalte selbst — eine neue Leistung oder Galerie ist am selben Tag online, ohne Entwickler dazwischen.',
      },
      'event-checkin': {
        category: 'Mobile Plattform',
        title: 'Echtzeit-Eventmanagement und Check-in-Plattform',
        overview:
          'Live-Check-in von Gästen, mit sofortiger Synchronisation zwischen den Geräten des Personals am Einlass und dem Event-Dashboard dahinter. In React Native gebaut, damit derselbe Build auf der Hardware läuft, die die Location gerade hat.',
        features: [
          'Gäste-Check-in von jedem Gerät des Teams',
          'Synchronisation mit dem Event-Dashboard in Echtzeit',
          'Doppelte und ungültige Tickets werden am Einlass erkannt',
          'Eine Codebasis für iOS und Android',
        ],
        value:
          'Ersetzt die gedruckte Liste und die Schlange davor — die Organisation sieht Ankünfte, während sie passieren, statt sie hinterher zu zählen.',
      },
      enneagram: {
        category: 'Webanwendung',
        title: 'Enneagramm-Profilanalyse — Persönlichkeitstest',
        overview:
          'Ein interaktiver Test in Vue.js: Der Fragebogen wertet Antworten aus, während sie gegeben werden, und zeigt am Ende ein klares, lesbares Persönlichkeitsprofil statt einer Seite voller Zahlen.',
        features: [
          'Geführter Fragebogen mit Fortschritt und Wiederaufnahme',
          'Auswertung wird laufend auf die Antworten angewendet',
          'Lesbares Profil statt roher Punktwerte',
          'Responsives Layout für den Abschluss auf dem Smartphone',
        ],
        value:
          'Macht aus einem langen Papierfragebogen etwas, das Menschen auf dem Handy zu Ende bringen — mit einem Ergebnis, das sie auch lesen können.',
      },
      'ai-agent': {
        category: 'KI & Automatisierung',
        title: 'Autonomer KI-Agent für Prozessautomatisierung',
        overview:
          'Ein Agent, der mehrstufige Geschäftsprozesse selbstständig ausführt, geschrieben in Python, mit einem React.js-Dashboard zur Kontrolle — Routinearbeit läuft unbeaufsichtigt, und trotzdem ist genau nachvollziehbar, was passiert ist.',
        features: [
          'Mehrstufige Abläufe ohne Beaufsichtigung ausgeführt',
          'React.js-Dashboard zur Überwachung und zum Eingreifen',
          'Integrationen mit den Werkzeugen des jeweiligen Ablaufs',
          'Vollständige Historie hinter jeder automatischen Entscheidung',
        ],
        value:
          'Nimmt dem Team den wiederkehrenden Teil des Tages ab und hält dabei jeden Schritt sichtbar und umkehrbar.',
      },
      'wordpress-design': {
        category: 'WordPress',
        title: 'WordPress-Website-Design',
        overview:
          'Ein von Hand geschriebenes WordPress-Theme statt eines gekauften — sauberes Markup, schnelles Laden und eine Redaktionsoberfläche, die dazu passt, wie der Kunde seine Seiten tatsächlich schreibt.',
        features: [
          'Handgeschriebenes Theme ohne Page-Builder-Ballast',
          'Sauberes semantisches Markup und schneller erster Aufbau',
          'Redaktionsstruktur nach den Inhalten des Kunden geformt',
          'Responsiv vom Smartphone bis zum Desktop',
        ],
        value:
          'Eine Website, die schnell lädt und pflegbar bleibt — der Kunde ändert seine Seiten selbst, ohne das Design zu zerlegen.',
      },
      ecommerce: {
        category: 'E-Commerce',
        title: 'eCommerce-Website',
        overview:
          'Ein individueller Onlineshop in PHP mit selbst gebauter Produkt- und Checkout-Strecke, von Anfang bis Ende gestaltet und entwickelt — Katalog, Warenkorb, Checkout und die Verwaltung, aus der das Team ihn betreibt.',
        features: [
          'Individueller Produktkatalog und Detailseiten',
          'Von Hand gebauter Warenkorb und Checkout',
          'MySQL hinter Katalog, Bestellungen und Beständen',
          'Shop-Design im selben Auftrag entstanden',
        ],
        value:
          'Ein Shop, der dem Unternehmen vollständig gehört — ohne Plattformgebühr und ohne Template, gegen das man arbeiten muss.',
      },
      vassalli: {
        category: 'Shopify',
        title: 'Produktlisting — Vassalli',
        overview:
          'Ein sauberes, geordnetes Shopify-Produktlisting für ein Bekleidungslabel: ausführliche Beschreibungen, Größen- und Variantenauswahl und abgestimmte Bildsprache, so strukturiert, dass sich der Katalog vom ersten bis zum letzten Produkt gleich liest.',
        features: [
          'Strukturierte Bekleidungslistings mit ausführlichen Beschreibungen',
          'Größen- und Variantenauswahl bei jedem Produkt',
          'Durchgängige Gestaltung über den gesamten Katalog',
          'Merchandising passend zur Art, wie Kunden stöbern',
        ],
        value:
          'Ein Katalog, der sich wie ein einziger Shop liest — und nicht wie eine Sammlung unverbundener Produktseiten.',
      },
    },
  },
  examples: {
    badge: 'Referenzbeispiel',
    note: 'Als Referenzbeispiel gekennzeichnete Einträge sind eigene Demonstrationen, keine Kundenarbeit. Alles Übrige wurde für einen zahlenden Kunden umgesetzt.',
    items: {
      'telegram-order-bot': {
        category: 'Messaging-Chatbot',
        title: 'Telegram-Bot für Bestellungen und Support',
        overview:
          'Ein Telegram-Bot, der Bestellungen verfolgt, Retouren anstößt und an einen Menschen übergibt, wenn er nicht weiterhelfen kann — gesteuert über Inline-Tastaturen, sodass Kunden tippen statt schreiben und der Bot nie raten muss, was gemeint war.',
        features: [
          'Sendungsverfolgung und Retouren direkt im Chat',
          'Inline-Tastaturen statt frei geschriebener Befehle',
          'Live-Abfragen über die REST-API des Shops',
          'Übergabe an einen Menschen samt vollständigem Verlauf',
        ],
        value:
          'Beantwortet die Routinefragen zu Bestellungen rund um die Uhr und zieht nur dann einen Menschen hinzu, wenn das Gespräch es wirklich braucht.',
      },
      'whatsapp-booking-bot': {
        category: 'Messaging-Chatbot',
        title: 'WhatsApp-Bot für Terminbuchungen',
        overview:
          'Ein WhatsApp-Bot, der echte Verfügbarkeiten aus dem Kalender anbietet, den Termin bucht und die Erinnerung setzt — die ganze Buchung, ohne den Chat zu verlassen oder etwas zu installieren.',
        features: [
          'Echte Verfügbarkeiten direkt aus dem Kalender gelesen',
          'Termin im Gespräch gebucht und bestätigt',
          'Automatische Erinnerung vor dem Termin',
          'Verschieben und Absagen im selben Verlauf',
        ],
        value:
          'Termine entstehen in dem Moment, in dem jemand fragt — statt beim nächsten Mal, wenn jemand ans Telefon geht.',
      },
      'chatbot-handover': {
        category: 'Chatbot-Plattform',
        title: 'Multi-Channel-Bot mit Übergabe an Mitarbeitende',
        overview:
          'Ein Posteingang für Telegram und WhatsApp, mit einer React.js-Konsole für die Mitarbeitenden darüber. Der Bot beantwortet, was er kann, und übergibt den Rest samt vollständigem Verlauf, damit niemand den Kunden bitten muss, sich zu wiederholen.',
        features: [
          'Telegram und WhatsApp in einem Posteingang',
          'Eine Dialoglogik hinter beiden Kanälen',
          'Die Übergabe nimmt den gesamten Verlauf mit',
          'React.js-Konsole für die übernehmende Person',
        ],
        value:
          'Der Bot fängt das Volumen ab, das Team behält die Gespräche, die einen Menschen brauchen — ohne den Kontext zu verlieren.',
      },
      'shopify-headless': {
        category: 'Headless Commerce',
        title: 'Headless-Shopify-Storefront auf Next.js',
        overview:
          'Derselbe Shopify-Katalog, ausgeliefert über ein Next.js-Frontend mit der Storefront-API — Seiten am Edge gerendert und zwischengespeichert, der Checkout bleibt bei Shopify, damit Zahlungen, Steuern und Betrugsprüfung dort bleiben, wo sie hingehören.',
        features: [
          'Storefront-API für Katalog, Varianten und Warenkorb',
          'Serverseitig gerenderte Produktseiten, am Edge revalidiert',
          'Checkout an die von Shopify gehostete Strecke übergeben',
          'TypeScript durchgängig, von der Query bis zur Komponente',
        ],
        value:
          'Freiheit im Frontend und Ladegeschwindigkeit, ohne die Zahlungen neu zu bauen — der Katalog bleibt in Shopify, das Erlebnis nicht länger an ein Theme gebunden.',
      },
      'shopify-subscription-app': {
        category: 'Shopify-App',
        title: 'Shopify-App für Abos und Bundles',
        overview:
          'Eine eingebettete Shopify-App, die einem Shop wiederkehrende Bestellungen und Produktbundles hinzufügt — Verkaufspläne, Vertragsverwaltung und Mahnläufe, alles im Shopify-Admin dargestellt, sodass der Händler ihn nie verlassen muss.',
        features: [
          'Verkaufspläne und Abo-Verträge',
          'Bundle-Konfigurator, gegen den Live-Katalog bepreist',
          'Automatische Wiederholung und Mahnlauf bei Zahlungsausfall',
          'Idempotente Webhooks, damit nichts doppelt berechnet wird',
        ],
        value:
          'Macht aus Einmalkäufern wiederkehrenden Umsatz und verhindert, dass eine abgelehnte Karte still zur Kündigung wird.',
      },
      'woocommerce-store': {
        category: 'WooCommerce',
        title: 'WooCommerce-Shop für einen Lebensmittelhandwerker',
        overview:
          'Ein WooCommerce-Shop für einen Hof, der direkt verkauft — Saisonprodukte, Geschenkboxen, EU-Versandregeln und Umsatzsteuer werden vom Shop erledigt statt von Hand, auf einer WordPress-Installation, die der Inhaber bereits bedienen kann.',
        features: [
          'Produkte, Varianten und Geschenkboxen konfigurierbar',
          'Zonenbasierte EU-Versand- und Steuerregeln',
          'Bestände, Erntechargen und Vorbestellungen',
          'Checkout auf Abschluss am Smartphone abgestimmt',
        ],
        value:
          'Ein kleiner Produzent verkauft europaweit ohne Zwischenhändler und pflegt den Shop im WordPress-Admin, das er ohnehin hat.',
      },
      'wordpress-multilingual-site': {
        category: 'WordPress',
        title: 'Mehrsprachige WordPress-Unternehmenswebsite',
        overview:
          'Eine Unternehmenswebsite auf WordPress, in vier Sprachen aus einem redaktionellen Ablauf veröffentlicht — Seiten im Block-Editor, wiederverwendbare Blöcke für alles Wiederkehrende und sprachspezifisches SEO, damit jeder Markt seine eigenen kanonischen Seiten hat.',
        features: [
          'Block-Editor-Seiten mit zentral gepflegten Blöcken',
          'Vier Sprachen mit sichtbarem Übersetzungsstatus',
          'Metadaten, Canonicals und Sitemaps je Sprache',
          'Core Web Vitals bestanden, mobil wie am Desktop',
        ],
        value:
          'Das Marketing veröffentlicht in jedem Markt ohne Entwickler, und jede Sprache rankt für sich, statt mit den anderen zu konkurrieren.',
      },
      'wordpress-lead-plugin': {
        category: 'WordPress-Plugin',
        title: 'Eigenes WordPress-Plugin für Lead-Verteilung',
        overview:
          'Ein eigens gebautes WordPress-Plugin statt eines Stapels allgemeiner Plugins — Leads werden als eigener Inhaltstyp erfasst, per Regel an das richtige Vertriebsteam verteilt und mit einer Wiederholungs-Warteschlange ans CRM übergeben.',
        features: [
          'Eigener Inhaltstyp mit passenden Spalten und Filtern',
          'Regelbasierte Verteilung nach Quelle, Region und Produkt',
          'CRM-Abgleich über REST, mit Wiederholungen und Fehlerprotokoll',
          'Alles vollständig im wp-admin verwaltet',
        ],
        value:
          'Ersetzt vier sich überschneidende Plugins durch eines, das genau diese Aufgabe erfüllt — Leads erreichen automatisch die richtige Person, und keiner geht in einem stillen Sync-Fehler verloren.',
      },
      'react-native-shop-app': {
        category: 'Mobile Anwendung',
        title: 'React-Native-Shopping-App für iOS & Android',
        overview:
          'Eine Shopping-App, aus einer einzigen React-Native-Codebasis in beide Stores ausgeliefert — Katalog, Produktdetail, Warenkorb und Bezahlung, mit plattformtypischem Verhalten und einer gemeinsamen API-Schicht dahinter.',
        features: [
          'Eine Codebasis für App Store und Play Store',
          'Katalog, Suche und Filter gegen eine REST-API',
          'Native Bezahldialoge und gespeicherte Karten',
          'Push-Benachrichtigungen zu Bestellungen und Verfügbarkeit',
        ],
        value:
          'Zwei Stores von einem Team und einem Release-Zyklus bedient, statt zweier nativer Builds, die langsam auseinanderlaufen.',
      },
      'flutter-delivery-app': {
        category: 'Mobile Anwendung',
        title: 'Flutter-App für Lieferung und Fahrer-Tracking',
        overview:
          'Zwei Flutter-Apps aus einem Projekt: Kunden verfolgen ihre Bestellung in Echtzeit, Fahrer arbeiten eine optimierte Tour ab und schließen jeden Stopp mit Unterschrift, Foto und GPS-Stempel ab.',
        features: [
          'Live-Position des Fahrers und Ankunftsprognose',
          'Optimierte Tourenliste mit Übergabe an die Navigation',
          'Liefernachweis: Unterschrift, Foto und Standort',
          'Uploads werden bei fehlendem Empfang zwischengespeichert',
        ],
        value:
          'Reduziert „Wo bleibt meine Bestellung?“-Anrufe auf fast null und hinterlässt einen Liefernachweis für jeden einzelnen Stopp.',
      },
      'android-field-service': {
        category: 'Mobile Anwendung',
        title: 'Android-App für den Außendienst mit Offline-Sync',
        overview:
          'Eine native Android-App für Techniker in Kellern und Technikräumen ohne Empfang. Jeder Bildschirm liest und schreibt zuerst in eine lokale Datenbank; die Warteschlange synchronisiert mit Prüfprotokoll, sobald das Gerät wieder online ist.',
        features: [
          'Vollständig offline lesen und schreiben über lokales SQLite',
          'Checklisten, verbrautes Material und Zeiterfassung',
          'Unterschrift und Fotos direkt vor Ort',
          'Sync-Warteschlange mit Konfliktbehandlung und Protokoll',
        ],
        value:
          'Techniker füllen keine Zettel mehr aus, die später abgetippt werden — das Büro sieht einen abgeschlossenen Auftrag Minuten später statt Tage.',
      },
      'laravel-booking-api': {
        category: 'Backend & API',
        title: 'Laravel-API für Buchung und Terminplanung',
        overview:
          'Eine Laravel-API zur Buchung einer begrenzten Ressource. Das Schwierige ist nicht der Endpunkt, sondern der Wettlauf — zwei Personen auf demselben Termin in derselben Sekunde. Gelöst mit einer Zeilensperre in der Transaktion und durch Nebenläufigkeitstests abgesichert.',
        features: [
          'Verfügbarkeits- und Buchungsendpunkte mit gesperrtem Schreibpfad',
          'Nebenläufigkeitstests, die Doppelbuchungen ausschließen',
          'Kalenderabgleich und Bestätigungsmails bei Ereignissen',
          'Webhook-Zustellung mit automatischen Wiederholungen',
        ],
        value:
          'Ein Buchungssystem, das unter Last korrekt bleibt — die eine Eigenschaft, deren Fehlen ein Kunde sofort bemerkt.',
      },
      'php-crm-invoicing': {
        category: 'Geschäftsanwendung',
        title: 'PHP-CRM für Kunden und Rechnungen',
        overview:
          'Ein PHP-Backoffice für eine Kanzlei: Mandanten, Angebote, Stundenzettel und Rechnungen in einem Modell, mit der Fälligkeit jeder offenen Rechnung auf dem ersten Bildschirm statt vergraben in einem Bericht.',
        features: [
          'Mandanten, Angebote, Stundenzettel und Rechnungen an einem Ort',
          'Fälligkeiten und Überfälligkeit im Blick',
          'Rollenbasierter Zugriff für Partner und Assistenz',
          'PDF-Erstellung und Zahlungsabgleich',
        ],
        value:
          'Zeigt, wer wie lange was schuldet, ohne dass jemand eine Tabelle nachbaut — die Zahl, von der eine Kanzlei tatsächlich lebt.',
      },
      'php-payment-gateway': {
        category: 'Integration',
        title: 'PHP-Integrationsschicht für Zahlungsanbieter',
        overview:
          'Eine PHP-Schnittstelle vor drei Zahlungsanbietern. Der Checkout ruft autorisieren, einziehen und erstatten auf; welcher Anbieter läuft, ist Konfiguration. Webhooks werden signaturgeprüft und wiederholungssicher verarbeitet, sodass eine doppelte Zustellung nie doppelt gutschreibt.',
        features: [
          'Eine Schnittstelle über Karte, Wallet und lokale Zahlarten',
          'Signaturprüfung bei jedem eingehenden Webhook',
          'Idempotenter Abgleich gegen das Bestellbuch',
          'Anbieter ergänzt oder getauscht, ohne den Checkout anzufassen',
        ],
        value:
          'Eine neue Zahlart wird zur Konfigurationsänderung, und das Buch bleibt korrekt, selbst wenn ein Anbieter dasselbe Ereignis zweimal schickt.',
      },
      'python-automation': {
        category: 'Python-Automatisierung',
        title: 'Geplante Python-Datenpipeline',
        overview:
          'Ein geplanter Python-Job, der Daten aus einer API und einer Tabelle zieht, prüft und normalisiert, das Ergebnis in eine einzige verlässliche Quelle schreibt und einen Bericht versendet — er ersetzt eine Routine, die jemand jeden Morgen von Hand ausführte.',
        features: [
          'Per Cron geplantes Extrahieren, Transformieren und Laden',
          'Prüfung und Normalisierung, bevor irgendetwas geschrieben wird',
          'Automatischer Bericht nach jedem Durchlauf',
          'Laufprotokoll und Alarmierung bei Fehlern',
        ],
        value:
          'Macht aus einer wiederkehrenden Handarbeit etwas, das von selbst läuft und sich meldet, wenn es das nicht tut — niemand muss mehr daran denken.',
      },
      'vue-crm-portal': {
        category: 'Vertriebsplattform',
        title: 'Vue.js-Portal für die Vertriebspipeline',
        overview:
          'Eine gemeinsame Pipeline für vier regionale Vertriebsteams, gebaut als Vue.js-Frontend auf einer NestJS-API. Alle Teams sehen dieselben Geschäfte und dieselben Phasenregeln, sodass ein Geschäft nicht in einem Büro still etwas anderes bedeuten kann als im nächsten.',
        features: [
          'Eine Pipeline, geteilt von vier regionalen Teams',
          'Phasenregeln in der API durchgesetzt, nicht im Browser',
          'Rollenbasierte Sichtbarkeit je Team und Region',
          'Aktivitätsverlauf zu jedem Geschäft, als CSV exportierbar',
        ],
        value: 'Eine Version der Pipeline statt vier Tabellen, die sich widersprechen.',
      },
      'laravel-saas-billing': {
        category: 'Abrechnungsplattform',
        title: 'Laravel-Engine für Abos und Abrechnung',
        overview:
          'Tarife, Plätze, anteilige Abrechnung und Zahlungswiederholung für ein Abo-Geschäft. Schwierig ist nicht, eine Karte einmal zu belasten, sondern was bei einem Upgrade mitten im Zyklus passiert — und was, wenn die dritte Belastung scheitert.',
        features: [
          'Tarifwechsel taggenau anteilig abgerechnet',
          'Mahnlauf mit Wiederholungen und letzter Kulanzfrist',
          'Anbieter-Webhooks gegen den lokalen Stand abgeglichen',
          'Rechnungen als PDF, inklusive Umsatzsteuerlogik',
        ],
        value: 'Umsatz, der auch nach dem ersten Monat weiter eingeht, mit automatisch nachverfolgten Ausfällen.',
      },
      'php-inventory-system': {
        category: 'Lagersystem',
        title: 'PHP-Bestandsführung für zwei Lager',
        overview:
          'Bestände einmal über zwei Lager gezählt, mit Meldebeständen, die tatsächlich auslösen. Zu- und Abgänge werden als Ereignisse festgehalten statt als Änderungen, sodass sich der aktuelle Stand immer aus seiner Historie erklären lässt.',
        features: [
          'Ein Bestandswert über beide Lager hinweg',
          'Meldebestände, die Bestellvorschläge auslösen',
          'Bewegungen als prüfbares Ereignisprotokoll gespeichert',
          'Lieferzeiten der Lieferanten in der Nachbestellung berücksichtigt',
        ],
        value: 'Weniger Fehlbestände und eine Zahl, der Lager und Büro gleichermaßen trauen.',
      },
      'wordpress-membership-site': {
        category: 'Mitgliederbereich',
        title: 'WordPress-Mitgliedschaft mit geschützten Inhalten',
        overview:
          'Drei Mitgliedsstufen auf WordPress, mit regelbasiertem statt händischem Zugriffsschutz. Die Redaktion schreibt weiter im gewohnten Editor; das Plugin entscheidet, wer was lesen darf, und Verlängerungen laufen, ohne dass jemand daran erinnert werden muss.',
        features: [
          'Drei Stufen mit regelbasiertem Zugriffsschutz',
          'Automatische Verlängerungen und Ablaufbenachrichtigungen',
          'Mitgliederbereich mit Rechnungen und Downloads',
          'Die Redaktion behält den gewohnten WordPress-Editor',
        ],
        value: 'Wiederkehrende Einnahmen aus Texten, die ohnehin schon kostenlos veröffentlicht wurden.',
      },
      'woocommerce-multivendor': {
        category: 'Marktplatz',
        title: 'WooCommerce-Marktplatz mit mehreren Händlern',
        overview:
          'Ein Warenkorb, viele Verkäufer. Der Kunde bezahlt einmal; die Bestellung wird im Hintergrund nach Händler aufgeteilt, die Provision direkt einbehalten, und jeder Verkäufer sieht nur seine eigenen Bestellungen und Auszahlungen.',
        features: [
          'Ein Checkout, aufgeteilt in Bestellungen je Händler',
          'Provision automatisch an der Quelle einbehalten',
          'Händler-Dashboard mit Bestellungen, Beständen und Auszahlungen',
          'Auszahlungsläufe mit Abrechnung je Händler',
        ],
        value: 'Ein Shop, der durch neue Verkäufer wächst statt durch mehr eigenen Wareneinsatz.',
      },
      'shopify-b2b-wholesale': {
        category: 'B2B-Commerce',
        title: 'Shopify-B2B-Portal für den Großhandel',
        overview:
          'Händlerpreise im selben Shopify-Shop, der auch Endkunden bedient, verborgen hinter einem Login. Jedes Unternehmen bekommt eigene Preislisten und Zahlungsziele, sodass der Großhandel keine zweite Plattform braucht.',
        features: [
          'Firmenspezifische Preislisten hinter dem Login',
          'Zahlungsziele je Konto, inklusive 30 und 60 Tage netto',
          'Mindestbestellmengen und Gebindegrößen',
          'Händlerkatalog aus der öffentlichen Suche ausgenommen',
        ],
        value: 'Großhandel und Einzelhandel auf einer Plattform statt zweier Systeme, die man synchron halten muss.',
      },
      'react-analytics-dashboard': {
        category: 'Analytics',
        title: 'React-Dashboard für den Checkout-Funnel',
        overview:
          'Eine Funnel-Ansicht über Rohdaten: wo der Warenkorb abgebrochen wird, nach Schritt und nach Gerät. So gebaut, dass die Marketingleitung eine Frage beantworten kann, ohne vorher eine Abfrage bei der Entwicklung zu bestellen.',
        features: [
          'Funnel-, Kohorten- und Retentionsansichten über einen Ereignisspeicher',
          'Segmentierung nach Gerät, Kanal und Kampagne',
          'Diagramme aus vorberechneten Abfragen, für Tempo',
          'Gespeicherte Ansichten im Team geteilt',
        ],
        value: 'Entscheidungen aus dem Funnel statt aus Meinungen darüber.',
      },
      'booking-scheduling-app': {
        category: 'Terminplanung',
        title: 'Terminplanung für sechs Behandelnde',
        overview:
          'Ein Kalender für sechs Behandelnde, drei Räume und eine öffentliche Buchungsseite. Verfügbarkeit wird aus Arbeitszeiten, Raumkapazität und bestehenden Terminen berechnet, sodass ein angezeigter Termin auch wirklich existiert.',
        features: [
          'Verfügbarkeit aus Personal-, Raum- und Leistungsregeln berechnet',
          'Öffentliche Buchungsseite mit Bestätigungsmails',
          'SMS- und E-Mail-Erinnerungen gegen Nichterscheinen',
          'Fristen für Verschiebung und Absage per Regel durchgesetzt',
        ],
        value: 'Ein Terminbuch, das sich selbst füllt, ohne die Doppelbuchungen einer geteilten Tabelle.',
      },
      'nest-microservices': {
        category: 'Backend & API',
        title: 'NestJS-Dienst in Warteschlangen aufgeteilt',
        overview:
          'Ein Monolith, nach Zuständigkeit in Warteschlangen zerlegt: Bestellungen, Zahlungen, Bestände, E-Mail. Jede Warteschlange wiederholt mit Backoff, und was dann noch scheitert, landet in einer Dead-Letter-Queue — zum Wiedereinspielen statt zum Verlieren.',
        features: [
          'Arbeit nach Zuständigkeit in Warteschlangen aufgeteilt',
          'Wiederholung mit exponentiellem Backoff je Warteschlange',
          'Dead-Letter-Queue mit Wiedereinspielen aus der Konsole',
          'Durchsatz und Rückstand je Verarbeiter sichtbar',
        ],
        value: 'Lastspitzen werden von der Warteschlange abgefangen, statt den Checkout mitzureißen.',
      },
      'nextjs-headless-blog': {
        category: 'Redaktionelle Website',
        title: 'Next.js-Redaktionswebsite auf einem Headless-CMS',
        overview:
          'Eine redaktionelle Website, gerendert von Next.js und geschrieben in einem Headless-CMS. Seiten werden beim Build vorgerendert und am Edge revalidiert, sodass die Website schnell bleibt, ohne dass die Redaktion auf ein Deployment wartet.',
        features: [
          'Statisches Vorrendern mit Revalidierung am Edge',
          'Die Redaktion veröffentlicht ohne Entwickler und Deployment',
          'Strukturierte Daten und Sitemap automatisch erzeugt',
          'Bildpipeline liefert moderne Formate je Gerät',
        ],
        value: 'Tempo beim Veröffentlichen für die Redaktion und beim Laden für die Lesenden, gleichzeitig.',
      },
      'laravel-queue-worker': {
        category: 'Backend & API',
        title: 'Laravel-Katalogimport über Warteschlangen',
        overview:
          'Ein nächtlicher Katalogimport, aus dem Web-Request in Warteschlangen-Jobs verlegt. Die Arbeit wird gestückelt, sodass ein fehlerhafter Stapel allein wiederholt wird, statt den ganzen Import scheitern zu lassen — und der Lauf meldet, was er abgewiesen hat, statt es still zu verwerfen.',
        features: [
          'Import in unabhängig wiederholte Stapel zerlegt',
          'Exponentielles Backoff mit begrenzter Wiederholungszahl',
          'Abgewiesene Zeilen gemeldet, nie stillschweigend verworfen',
          'Fortschritt und Fehler während des Laufs sichtbar',
        ],
        value: 'Ein Import, der über Nacht fertig wird und genau sagt, was er nicht annehmen konnte.',
      },
      'wordpress-headless-api': {
        category: 'Headless-CMS',
        title: 'Headless WordPress mit Next.js-Frontend',
        overview:
          'WordPress bleibt die Redaktion und wird zur API; die öffentliche Website rendert Next.js. Die Redaktion behält den gewohnten Ablauf, und das Frontend ist nicht länger davon begrenzt, was ein Theme kann.',
        features: [
          'Eigene REST-Routen liefern Blockinhalte als JSON',
          'Edge-Cache verfällt in dem Moment, in dem ein Beitrag gespeichert wird',
          'Die Redaktion behält den gewohnten WordPress-Editor',
          'Frontend frei von Theme- und Plugin-Zwängen',
        ],
        value: 'Ein modernes Frontend, ohne die Menschen umzuschulen, die die Inhalte schreiben.',
      },
      'shopify-inventory-sync': {
        category: 'Integration',
        title: 'Bestandsabgleich zwischen Shopify und ERP',
        overview:
          'Bestände zwischen Shopify und einem Backoffice-System in beide Richtungen gleichgehalten. Das ERP bleibt die führende Quelle, Shopify wird innerhalb des API-Budgets aktualisiert, und ein stündlicher Abgleich fängt jede Abweichung ab.',
        features: [
          'Abgleich in beide Richtungen, das ERP als führende Quelle',
          'Ratenbegrenzung im Rahmen des Shopify-API-Budgets',
          'Bestellungen reservieren den Bestand bei Zahlung im ERP',
          'Stündlicher Abgleich meldet jede Abweichung',
        ],
        value: 'Ein Bestandswert über beide Systeme, damit nichts verkauft wird, was nicht da ist.',
      },
      'node-realtime-orders': {
        category: 'Backend & API',
        title: 'Echtzeit-Bestelltafel über WebSockets',
        overview:
          'Bildschirme in Küche und Ausgabe, die sich in dem Moment aktualisieren, in dem eine Bestellung weitergeht — ohne Polling. Zustandswechsel werden geprüft und in der Datenbank gesperrt, sodass zwei Bildschirme dieselbe Bestellung nicht doppelt weiterschieben.',
        features: [
          'Bestellzustand im selben Takt an jeden Bildschirm gesendet',
          'Übergänge geprüft und in der Datenbank zeilengesperrt',
          'Stille Wiederverbindung nach einem Netzabbruch',
          'Getestet mit 400 gleichzeitigen Bildschirmen',
        ],
        value: 'Bildschirme, die sich einig sind — in einem Raum, in dem Sekunden zählen.',
      },
      'python-data-pipeline': {
        category: 'Automatisierung',
        title: 'Nächtliche Python-Reporting-Pipeline',
        overview:
          'Sechs Quellen werden jede Nacht gezogen, geprüft und in eine Reporting-Tabelle geladen. Wird zu viel der Eingangsdaten abgewiesen, scheitert der Lauf hörbar, statt still einen Bericht zu veröffentlichen, dem niemand trauen sollte.',
        features: [
          'Sechs Quellen nächtlich extrahiert, geprüft und geladen',
          'Der Lauf scheitert hörbar, wenn Abweisungen einen Schwellwert überschreiten',
          'Abgewiesene Zeilen aufbewahrt und gemeldet, nie verworfen',
          'Zusammenfassung nach jedem Lauf an die Buchhaltung',
        ],
        value: 'Zahlen, die zum Frühstück da sind — und ein deutliches Scheitern, wenn ihnen nicht zu trauen ist.',
      },
      'react-native-loyalty-app': {
        category: 'Mobile Anwendung',
        title: 'React-Native-App für Kundenbindung und Prämien',
        overview:
          'Eine Kundenkarte auf dem Telefon: Punkte, Stufen und ein Code, den die Kasse scannen kann. Eine React-Native-Codebasis für beide Stores, und die Karte funktioniert auch, wenn der Laden keinen Empfang hat.',
        features: [
          'Punkte und Stufen mit scannbarem Mitgliedscode',
          'Prämienkatalog mit Einlösung an der Kasse',
          'Angebote nach Stufe und nächstgelegener Filiale',
          'Karte offline lesbar, Abgleich sobald wieder Empfang besteht',
        ],
        value: 'Wiederkehrende Besuche von Kunden, die die Karte ohnehin schon in der Tasche haben.',
      },
      'flutter-habit-tracker': {
        category: 'Mobile Anwendung',
        title: 'Flutter-Habit-Tracker mit lokalen Erinnerungen',
        overview:
          'Ein Gewohnheits-Tracker, einmal in Flutter für beide Stores gebaut. Serien, eine Monatsansicht und Erinnerungen, die das Gerät selbst auslöst — damit die App auch im Zug ohne Verbindung nützlich ist.',
        features: [
          'Tagesliste mit Serien und Monatsansicht',
          'Lokale Benachrichtigungen ohne Verbindung',
          'Alle Daten auf dem Gerät, als CSV exportierbar',
          'Eine Flutter-Codebasis für iOS und Android',
        ],
        value: 'Eine Gewohnheits-App, die auch dort funktioniert, wo Gewohnheiten tatsächlich stattfinden.',
      },
      'android-pos-terminal': {
        category: 'Mobile Anwendung',
        title: 'Android-Kassenterminal',
        overview:
          'Eine Kasse, die kassiert, einen Bon druckt und den Tag abschließt. Verkäufe werden zuerst auf das Gerät geschrieben und danach abgeglichen, sodass eine abgebrochene Verbindung die Schlange an der Theke nie aufhält.',
        features: [
          'Warenkorb, Zahlung und Bondruck auf dem Gerät',
          'Verkäufe lokal gepuffert und bei Empfang abgeglichen',
          'Tagesabschluss über Karte, Bar und Erstattungen',
          'Zahlwege für Karte, Bargeld und Essensgutscheine',
        ],
        value: 'Eine Theke, die weiter bedient — egal, ob das Internet gerade einen guten Tag hat.',
      },
      'ios-property-viewings': {
        category: 'Mobile Anwendung',
        title: 'iOS-App für Immobiliensuche und Besichtigungen',
        overview:
          'Suchen, merken und eine Besichtigung buchen, ohne die App zu verlassen. Der Makler bekommt den Termin in den Kalender, der Interessent eine Bestätigung — die Besichtigung steht, bevor irgendjemand zum Telefon greift.',
        features: [
          'Gefilterte Suche mit gespeicherten Merklisten',
          'Besichtigung gegen den Maklerkalender gebucht',
          'Bestätigung und Kalendereintrag für den Interessenten',
          'Nachrichten an den zuständigen Makler in der App',
        ],
        value: 'Besichtigungen werden gebucht, wenn das Interesse am größten ist — nicht am nächsten Werktag.',
      },
    },
  },
  process: {
    eyebrow: 'Arbeitsweise',
    heading: 'Ein geordneter Weg von der Idee in den Betrieb',
    intro:
      'In jedem Auftrag derselbe strukturierte Ablauf — klare Kommunikation und sichtbarer Fortschritt in jeder Phase sind genau das, was Kunden in ihrem Feedback immer wieder hervorheben.',
    steps: [
      {
        title: 'Anforderungsanalyse',
        detail:
          'Ich beginne beim Geschäftsziel, nicht bei der Funktionsliste — Nutzer, Rahmenbedingungen, Schnittstellen und Erfolgskriterien werden zu einem klaren, abgestimmten Umfang.',
        output: 'Leistungsumfang & Erfolgskriterien',
      },
      {
        title: 'Systemplanung & Architektur',
        detail:
          'Auswahl des Stacks, Datenmodellierung und API-Verträge, dokumentiert und begründet gegen Kosten, Skalierung und spätere Wartbarkeit.',
        output: 'Architektur & Datenmodell',
      },
      {
        title: 'UI/UX-Planung',
        detail:
          'Nutzerflüsse, Bildschirmaufbau und responsive Layouts stehen vor der Entwicklung fest, damit die Oberfläche dem Arbeitsablauf dient statt ihn zu dekorieren.',
        output: 'Abläufe & responsive Layouts',
      },
      {
        title: 'Entwicklung & Integration',
        detail:
          'Saubere, komponentenbasierte Umsetzung in prüfbaren Schritten, mit Screenshots in jeder Phase — Fortschritt wird sichtbar statt nur berichtet.',
        output: 'Lauffähige Stände unter Versionskontrolle',
      },
      {
        title: 'Tests & Korrekturen',
        detail:
          'Prüfung des Verhaltens auf echten Geräten und Bildschirmgrößen, danach schnelle und präzise Korrekturen — der Teil der Arbeit, den Kunden am deutlichsten wahrnehmen.',
        output: 'Geprüfte Stände & schnelle Korrekturen',
      },
      {
        title: 'Deployment & Wartung',
        detail:
          'Kontrollierte Veröffentlichung mit Dokumentation und Übergabe, danach laufender Support, Optimierung und weitere Ausbaustufen.',
        output: 'Livegang & Supportplan',
      },
    ],
  },
  footer: {
    blurb:
      'Full-Stack-Entwicklung aus Deutschland für Webplattformen, E-Commerce, mobile Anwendungen, REST-APIs und Prozessautomatisierung — remote geliefert für Kunden weltweit.',
    columns: ['Entdecken', 'Arbeiten'],
    links: {
      about: 'Über mich',
      services: 'Leistungen',
      skills: 'Technische Kenntnisse',
      projects: 'Projekte',
      process: 'Arbeitsweise',
    },
    expertise: ['Full-Stack Web', 'E-Commerce', 'Mobile Apps', 'REST-APIs', 'Responsives Design', 'Automatisierung'],
  },
}

export const translations = { en, de, pt, es }
