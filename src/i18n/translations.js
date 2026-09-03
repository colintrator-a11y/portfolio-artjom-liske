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
      games: 'Games',
    },
    viewDetails: 'View details',
    prevWork: 'Previous projects',
    nextWork: 'Next projects',
    page: 'Page',
    switchToLight: 'Switch to the light theme',
    switchToDark: 'Switch to the dark theme',
    closeDetails: 'Close',
    screenshot: 'Screenshot',
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
      'Freelancer profile · Bronze level · three passed certifications.',
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
      ['Main skills', 'Python · WordPress · Shopify'],
      ['Based in', 'Germany'],
      ['Experience', '10+ Years · Since 2014'],
      ['Rate', 'USD 30.00 / hour'],
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
      'autonomous-ai-agent': {
        category: 'AI & Automation',
        title: 'Autonomous AI Agent for Workflow Automation',
        overview:
          'An agent platform that takes repetitive operational work off a team. Someone describes a goal in plain language; the system breaks it into steps, picks the tools each step needs, carries the actions out and records what happened.',
        features: [
          'Goals described in natural language, planned into steps',
          'Tool and function calling with conversational memory',
          'Third-party API integrations behind each action',
          'Safety controls and a full activity log',
        ],
        value:
          'Routine operational work runs unattended, and every action the agent took stays on the record.',
      },
      'event-check-in': {
        category: 'Mobile Platform',
        title: 'Real-Time Event Management & Check-In Platform',
        overview:
          'An event platform for organisers running events of any size: registration, attendee management, and a check-in fast enough to keep a queue moving. Built around QR and barcode scanning, with every device on the door seeing the same state.',
        features: [
          'QR and barcode scanning at the door',
          'Real-time sync across every staff device',
          'Registration and attendee management',
          'Secure handling of attendee data',
        ],
        value:
          'Shorter queues at the door, and organisers watching arrivals as they happen rather than counting them afterwards.',
      },
      'enneagram-assessment': {
        category: 'Web Application',
        title: 'Enneagram Profile Analysis — Personality Assessment',
        overview:
          'A personality assessment platform built on the Enneagram. Answers to an interactive questionnaire are scored as they are given and turned into a structured profile report, generated and delivered without anyone assembling it by hand.',
        features: [
          'Multilingual questionnaire with saved progress',
          'Dynamic scoring into a personalised result',
          'Downloadable PDF reports and email delivery',
          'Admin dashboard for users, groups and results',
        ],
        value:
          'A data-driven read on personality patterns and team dynamics, with no report written by hand.',
      },
      'premium-aquarium': {
        category: 'WordPress & CMS',
        title: 'Premium Aquarium Management & Corporate Website',
        overview:
          'A corporate site for a premium aquarium management company, presenting custom aquarium services to residential, commercial and institutional clients. Service-focused layouts, project showcases and enquiry handling, all editable from the CMS.',
        features: [
          'Service-focused layouts and project showcases',
          'Customer enquiry handling built into the site',
          'Content managed from the CMS, without a developer',
          'A consistent experience from desktop to mobile',
        ],
        value:
          'Credibility for specialised expertise, and a clear route into the services on offer.',
      },
      'shopify-jewellery': {
        category: 'Shopify',
        title: 'Shopify Jewellery Store — UI & UX',
        overview:
          'A jewellery storefront built for luxury: a custom Shopify theme in the brand’s own colours and typography, a product gallery with zoom on every piece, and a checkout tuned to stay out of the way.',
        features: [
          'Custom theme in the brand’s colours and typography',
          'Product gallery with zoom on every piece',
          'Homepage banner, collection grid and trending row',
          'WhatsApp chat for instant customer support',
        ],
        value:
          'A premium layout that carries the brand’s price point and earns the trust a jewellery purchase needs.',
      },
      'vassalli-listing': {
        category: 'Shopify',
        title: 'Product Listing — Vassalli',
        overview:
          'A clean, organised Shopify product listing for an apparel label: detailed descriptions, size options and styled visuals, structured so the catalogue reads consistently from the first product to the last.',
        features: [
          'Structured apparel listings with detailed descriptions',
          'Size and variant options on every product',
          'Consistent styling across the whole catalogue',
          'Merchandising set up for the way shoppers browse',
        ],
        value:
          'A catalogue that reads as one shop rather than a set of unrelated product pages.',
      },
      'cowboy-shooter': {
        category: 'Game Development',
        title: 'West Cowboy Fighter — Unity 3D Shooter',
        overview:
          'A third-person shooter set on a Wild West frontier, built in Unity 3D and published to Google Play. Missions run across a 3D desert landscape, and the gunfighter is upgraded from what each fight pays out.',
        features: [
          'A 3D desert frontier built in Unity',
          'Missions that pay out upgrades and rewards',
          'Tap-to-move controls, no combinations to memorise',
          'Shipped to Android and iOS',
        ],
        value:
          'A complete published game, from the 3D environment and combat loop through to store release.',
      },
      'kungfu-fighting-game': {
        category: 'Game Development',
        title: 'Multiplayer Fighting Game — Kungfu',
        overview:
          'A multiplayer fighting game with a physics-based combat system: strikes, grapples and takedowns driven by real animation and momentum rather than by memorised button combinations.',
        features: [
          'Physics-based strikes, grapples and takedowns',
          'Fighter creation, from appearance to fighting style',
          'Career mode through the ranks to a title',
          'Multiplayer battles against friends or strangers',
        ],
        value:
          'Combat that feels physical rather than scripted, which is what keeps a fighting game being played.',
      },
      'find-a-franchise': {
        category: 'Mobile Application',
        title: 'Find A Franchise',
        overview:
          'A mobile app carrying a current directory of franchise systems worldwide, with industry guidance alongside it. An account keeps a user’s purchases safe from a lost device and available wherever they sign in.',
        features: [
          'Searchable directory of franchise systems worldwide',
          'Filtering by category, sub-category and country',
          'Accounts that carry purchases across devices',
          'Purchases restored on sign-in',
        ],
        value:
          'Research that used to need a desk and a browser now fits in a pocket.',
      },
      'twilio-sip': {
        category: 'Voice & Integration',
        title: 'Twilio SIP Integration',
        overview:
          'SIP-based systems connected to Twilio’s cloud platform, so inbound and outbound voice runs over SIP trunking. The work bridges traditional PBX hardware and modern VoIP without either side needing to know about the other.',
        features: [
          'SIP trunking for inbound and outbound voice',
          'Call routing and SIP authentication',
          'Number provisioning across regions',
          'Voice workflows that scale for enterprise use',
        ],
        value:
          'Existing PBX hardware keeps working while the platform underneath it becomes cloud-scale and global.',
      },
      'so-fresh': {
        category: 'E-Commerce',
        title: 'So Fresh — Online Grocery Store',
        overview:
          'An online store for fresh fruit and vegetables with delivery, built on WordPress. Customised plugins, a full product catalogue and a working cart, on a secured install the owner runs themselves.',
        features: [
          'Fresh produce catalogue with delivery',
          'Cart and checkout across the product range',
          'Plugins customised to the shop’s own workflow',
          'SSL secured and configured for production',
        ],
        value:
          'A grocer selling direct online, editing the shop from the admin they already know.',
      },
      'hold-rome-hotel': {
        category: 'WordPress',
        title: 'Hold Rome Hotel Website',
        overview:
          'A website for a hotel in the centre of Rome, built to show what a stay actually looks like and to take the booking without sending the guest anywhere else. Availability, prices and reservations run through an integrated booking system.',
        features: [
          'Octorate booking system integrated into the site',
          'Real-time availability and pricing',
          'Rich photography of the rooms and amenities',
          'Responsive from desktop through to phone',
        ],
        value:
          'Guests book on the hotel’s own site instead of leaving for a platform that charges for the privilege.',
      },
      'shopify-store-build': {
        category: 'Shopify',
        title: 'Shopify E-Commerce Website Creation',
        overview:
          'A complete Shopify store for a modern online business: store setup, custom design, domain connection and the payment gateways behind it — handed over as a working shop rather than as a theme.',
        features: [
          'Custom store design with organised categories',
          'Stripe and PayPal payment gateways',
          'Domain setup and connection',
          'SEO-friendly structure and optimised loading',
        ],
        value:
          'A business selling online end to end, with nothing left for the owner to wire up.',
      },
      'ecommerce-website': {
        category: 'E-Commerce',
        title: 'eCommerce Website',
        overview:
          'An online store built on WordPress and PHP, with the storefront design produced in the same engagement — catalogue, product pages, and the brand work that carries them.',
        features: [
          'Product catalogue and detail pages',
          'WooCommerce running the storefront',
          'Storefront graphics produced alongside the build',
          'Responsive from mobile to desktop',
        ],
        value:
          'Design and build from one place, so the shop looks like the brand rather than like its theme.',
      },
      'wordpress-website-design': {
        category: 'WordPress',
        title: 'WordPress Website Design',
        overview:
          'A WordPress site built to a client’s requirements: a custom theme rather than a bought one, plugins chosen for what the site actually needed, and a layout that holds together across devices and browsers.',
        features: [
          'Custom theme built to the client’s branding',
          'Contact forms, galleries and a blog section',
          'SEO optimisation and cross-browser testing',
          'Responsive layout with straightforward navigation',
        ],
        value:
          'A site the client keeps writing in, that still looks the way it was designed a year later.',
      },
      'preferred-freelancer': {
        category: 'Recognition',
        title: 'Preferred Freelancer of the Quarter',
        overview:
          'Awarded by Freelancer.com and certified by their team, for outstanding performance as a Corporate Preferred Freelancer during the quarter — on the back of PHP, WordPress and WooCommerce delivery.',
        features: [
          'Awarded by Freelancer.com',
          'Certified by the Freelancer.com team',
          'For outstanding performance as a Corporate Preferred Freelancer',
          'On PHP, WordPress and WooCommerce work',
        ],
        value:
          'Independent confirmation of delivery standards, from the platform the work was delivered through.',
      },
    },
  },
  examples: {
    badge: 'Reference build',
    note: 'Entries marked as reference builds are my own demonstrations, not client work. Everything else was delivered for a paying client.',
    items: {},
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
      games: 'Jogos',
    },
    viewDetails: 'Ver detalhes',
    prevWork: 'Vorherige Projekte',
    nextWork: 'Nächste Projekte',
    page: 'Página',
    switchToLight: 'Mudar para o tema claro',
    switchToDark: 'Mudar para o tema escuro',
    closeDetails: 'Fechar',
    screenshot: 'Captura de ecrã',
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
      'Perfil de freelancer · nível Bronze · três certificações concluídas.',
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
      ['Principais competências', 'Python · WordPress · Shopify'],
      ['Localização', 'Alemanha'],
      ['Experiência', '10+ Anos · Desde 2014'],
      ['Valor/hora', 'USD 30,00 / hora'],
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
      'autonomous-ai-agent': {
        category: 'IA e Automação',
        title: 'Agente de IA Autónomo para Automação de Processos',
        overview:
          'Uma plataforma de agentes que tira à equipa o trabalho operacional repetitivo. Alguém descreve um objetivo em linguagem normal; o sistema divide-o em passos, escolhe as ferramentas de cada passo, executa as ações e regista o que aconteceu.',
        features: [
          'Objetivos em linguagem natural, planeados em passos',
          'Chamada de ferramentas e funções com memória de conversa',
          'Integrações com APIs externas por trás de cada ação',
          'Controlos de segurança e registo completo de atividade',
        ],
        value:
          'O trabalho de rotina corre sem supervisão, e cada ação do agente fica registada.',
      },
      'event-check-in': {
        category: 'Plataforma Mobile',
        title: 'Plataforma de Gestão de Eventos e Check-In em Tempo Real',
        overview:
          'Uma plataforma para eventos de qualquer dimensão: inscrição, gestão de participantes e um check-in rápido o suficiente para a fila não parar. Assente em leitura de QR e códigos de barras, com todos os dispositivos à porta a ver o mesmo estado.',
        features: [
          'Leitura de QR e códigos de barras à porta',
          'Sincronização em tempo real entre todos os dispositivos',
          'Inscrição e gestão de participantes',
          'Tratamento seguro dos dados dos participantes',
        ],
        value:
          'Filas mais curtas à porta e uma organização que vê as chegadas a acontecer em vez de as contar depois.',
      },
      'enneagram-assessment': {
        category: 'Aplicação Web',
        title: 'Análise de Perfil Eneagrama — Avaliação de Personalidade',
        overview:
          'Uma plataforma de avaliação de personalidade baseada no Eneagrama. As respostas a um questionário interativo são pontuadas à medida que são dadas e transformadas num relatório de perfil estruturado, gerado e entregue sem ninguém o montar à mão.',
        features: [
          'Questionário multilingue com progresso guardado',
          'Pontuação dinâmica para um resultado personalizado',
          'Relatórios em PDF para descarregar e envio por email',
          'Painel de administração de utilizadores, grupos e resultados',
        ],
        value:
          'Uma leitura baseada em dados dos padrões de personalidade e da dinâmica de equipa, sem relatórios escritos à mão.',
      },
      'premium-aquarium': {
        category: 'WordPress e CMS',
        title: 'Gestão de Aquários Premium e Site Corporativo',
        overview:
          'Um site corporativo para uma empresa de gestão de aquários premium, que apresenta serviços à medida a clientes residenciais, empresariais e institucionais. Layouts centrados nos serviços, mostruário de projetos e pedidos de contacto, tudo editável a partir do CMS.',
        features: [
          'Layouts centrados nos serviços e mostruário de projetos',
          'Pedidos de contacto integrados no site',
          'Conteúdos geridos a partir do CMS, sem programador',
          'Uma experiência consistente do computador ao telemóvel',
        ],
        value:
          'Credibilidade para uma especialidade técnica e um caminho claro até aos serviços oferecidos.',
      },
      'shopify-jewellery': {
        category: 'Shopify',
        title: 'Loja de Joalharia em Shopify — UI e UX',
        overview:
          'Uma loja de joalharia pensada para o luxo: um tema Shopify à medida nas cores e na tipografia da marca, uma galeria com zoom em cada peça e um checkout que não se põe no caminho.',
        features: [
          'Tema à medida nas cores e tipografia da marca',
          'Galeria de produto com zoom em cada peça',
          'Banner de entrada, grelha de coleções e linha de destaques',
          'Chat de WhatsApp para apoio imediato ao cliente',
        ],
        value:
          'Um layout premium à altura do preço da marca, que constrói a confiança que a compra de joalharia exige.',
      },
      'vassalli-listing': {
        category: 'Shopify',
        title: 'Listagem de Produtos — Vassalli',
        overview:
          'Uma listagem de produtos Shopify limpa e organizada para uma marca de vestuário: descrições detalhadas, opções de tamanho e visuais cuidados, estruturados para o catálogo se ler de forma consistente do primeiro ao último produto.',
        features: [
          'Listagens de vestuário estruturadas, com descrições detalhadas',
          'Opções de tamanho e variante em cada produto',
          'Estilo consistente em todo o catálogo',
          'Merchandising montado para a forma como se navega numa loja',
        ],
        value:
          'Um catálogo que se lê como uma loja só, e não como páginas de produto sem relação.',
      },
      'cowboy-shooter': {
        category: 'Desenvolvimento de Jogos',
        title: 'West Cowboy Fighter — Shooter em Unity 3D',
        overview:
          'Um shooter na terceira pessoa numa fronteira do Faroeste, feito em Unity 3D e publicado no Google Play. As missões atravessam uma paisagem desértica em 3D, e o pistoleiro é melhorado com o que cada combate rende.',
        features: [
          'Uma fronteira desértica em 3D construída em Unity',
          'Missões que rendem melhorias e recompensas',
          'Controlo tap-to-move, sem combinações para decorar',
          'Publicado para Android e iOS',
        ],
        value:
          'Um jogo completo e publicado — do ambiente 3D e do sistema de combate até ao lançamento na loja.',
      },
      'kungfu-fighting-game': {
        category: 'Desenvolvimento de Jogos',
        title: 'Jogo de Luta Multijogador — Kungfu',
        overview:
          'Um jogo de luta multijogador com sistema de combate assente em física: golpes, agarres e projeções conduzidos por animação e inércia reais em vez de combinações de botões decoradas.',
        features: [
          'Golpes, agarres e projeções assentes em física',
          'Criação de lutador, do aspeto ao estilo de combate',
          'Modo carreira a subir na hierarquia até ao título',
          'Combates multijogador contra amigos ou desconhecidos',
        ],
        value:
          'Combate que se sente físico em vez de programado — é isso que mantém um jogo de luta a ser jogado.',
      },
      'find-a-franchise': {
        category: 'Aplicação Móvel',
        title: 'Find A Franchise',
        overview:
          'Uma aplicação móvel com um diretório atualizado de sistemas de franchising em todo o mundo, e orientação do setor a acompanhar. Uma conta protege as compras de um dispositivo perdido e mantém-nas disponíveis em qualquer sítio onde se entre.',
        features: [
          'Diretório pesquisável de franchising em todo o mundo',
          'Filtros por categoria, subcategoria e país',
          'Contas que levam as compras entre dispositivos',
          'Compras restauradas ao iniciar sessão',
        ],
        value:
          'Uma pesquisa que antes exigia secretária e navegador passa a caber no bolso.',
      },
      'twilio-sip': {
        category: 'Voz e Integração',
        title: 'Integração SIP com Twilio',
        overview:
          'Sistemas baseados em SIP ligados à plataforma cloud da Twilio, para que a voz de entrada e de saída corra sobre SIP trunking. O trabalho liga centrais telefónicas tradicionais a VoIP moderno sem que nenhum dos lados precise de saber do outro.',
        features: [
          'SIP trunking para voz de entrada e de saída',
          'Encaminhamento de chamadas e autenticação SIP',
          'Aprovisionamento de números em várias regiões',
          'Fluxos de voz que escalam para uso empresarial',
        ],
        value:
          'O equipamento telefónico existente continua a funcionar enquanto a plataforma por baixo passa a ser global e à escala da cloud.',
      },
      'so-fresh': {
        category: 'E-Commerce',
        title: 'So Fresh — Loja Online de Produtos Frescos',
        overview:
          'Uma loja online de fruta e legumes frescos com entrega, feita em WordPress. Plugins personalizados, um catálogo completo e um carrinho a funcionar, numa instalação protegida que o próprio dono gere.',
        features: [
          'Catálogo de produtos frescos com entrega',
          'Carrinho e checkout em toda a gama',
          'Plugins personalizados para o fluxo da própria loja',
          'Protegida com SSL e configurada para produção',
        ],
        value:
          'Um comerciante a vender direto online, a editar a loja a partir da administração que já conhece.',
      },
      'hold-rome-hotel': {
        category: 'WordPress',
        title: 'Site do Hotel Hold Rome',
        overview:
          'Um site para um hotel no centro de Roma, feito para mostrar como é mesmo uma estadia e para receber a reserva sem mandar o hóspede para outro lado. Disponibilidade, preços e reservas passam por um sistema de reservas integrado.',
        features: [
          'Sistema de reservas Octorate integrado no site',
          'Disponibilidade e preços em tempo real',
          'Fotografia cuidada dos quartos e das comodidades',
          'Responsivo do computador ao telemóvel',
        ],
        value:
          'Os hóspedes reservam no site do próprio hotel em vez de saírem para uma plataforma que cobra por isso.',
      },
      'shopify-store-build': {
        category: 'Shopify',
        title: 'Criação de Loja Online em Shopify',
        overview:
          'Uma loja Shopify completa para um negócio online moderno: configuração, design à medida, ligação do domínio e os meios de pagamento por trás — entregue como loja a funcionar e não como um tema.',
        features: [
          'Design de loja à medida com categorias organizadas',
          'Meios de pagamento Stripe e PayPal',
          'Domínio configurado e ligado',
          'Estrutura preparada para SEO e carregamento otimizado',
        ],
        value:
          'Um negócio a vender online de ponta a ponta, sem nada por ligar do lado do dono.',
      },
      'ecommerce-website': {
        category: 'E-Commerce',
        title: 'Site de eCommerce',
        overview:
          'Uma loja online feita em WordPress e PHP, com o design da loja produzido no mesmo trabalho — catálogo, páginas de produto e o trabalho de marca que os sustenta.',
        features: [
          'Catálogo de produtos e páginas de detalhe',
          'WooCommerce a sustentar a loja',
          'Grafismo produzido a par da construção',
          'Responsivo do telemóvel ao computador',
        ],
        value:
          'Design e construção no mesmo sítio, para a loja parecer a marca e não o seu tema.',
      },
      'wordpress-website-design': {
        category: 'WordPress',
        title: 'Design de Site WordPress',
        overview:
          'Um site WordPress feito aos requisitos do cliente: um tema à medida em vez de comprado, plugins escolhidos pelo que o site precisava mesmo, e um layout que se aguenta entre dispositivos e navegadores.',
        features: [
          'Tema à medida, construído sobre a marca do cliente',
          'Formulários de contacto, galerias e uma secção de blogue',
          'Otimização para SEO e testes em vários navegadores',
          'Layout responsivo com navegação simples',
        ],
        value:
          'Um site onde o cliente continua a escrever e que um ano depois ainda está como foi desenhado.',
      },
      'preferred-freelancer': {
        category: 'Reconhecimento',
        title: 'Freelancer Preferido do Trimestre',
        overview:
          'Atribuído pela Freelancer.com e certificado pela sua equipa, pelo desempenho como Corporate Preferred Freelancer durante o trimestre — com base no trabalho em PHP, WordPress e WooCommerce.',
        features: [
          'Atribuído pela Freelancer.com',
          'Certificado pela equipa da Freelancer.com',
          'Pelo desempenho como Corporate Preferred Freelancer',
          'Sobre trabalho em PHP, WordPress e WooCommerce',
        ],
        value:
          'Uma confirmação independente do nível de entrega, vinda da plataforma onde o trabalho foi feito.',
      },
    },
  },
  examples: {
    badge: 'Projeto de referência',
    note: 'As entradas assinaladas como projetos de referência são demonstrações próprias, não trabalhos de clientes. Todas as restantes foram entregues a clientes reais.',
    items: {},
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
      games: 'Juegos',
    },
    viewDetails: 'Ver detalles',
    prevWork: 'Projetos anteriores',
    nextWork: 'Projetos seguintes',
    page: 'Página',
    switchToLight: 'Cambiar al tema claro',
    switchToDark: 'Cambiar al tema oscuro',
    closeDetails: 'Cerrar',
    screenshot: 'Captura de pantalla',
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
      'Perfil de freelancer · nivel Bronce · tres certificaciones superadas.',
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
      ['Habilidades principales', 'Python · WordPress · Shopify'],
      ['Ubicación', 'Alemania'],
      ['Experiencia', '10+ Años · Desde 2014'],
      ['Tarifa', 'USD 30,00 / hora'],
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
      'autonomous-ai-agent': {
        category: 'IA y Automatización',
        title: 'Agente de IA Autónomo para Automatización de Procesos',
        overview:
          'Una plataforma de agentes que le quita al equipo el trabajo operativo repetitivo. Alguien describe un objetivo en lenguaje normal; el sistema lo divide en pasos, elige las herramientas de cada paso, ejecuta las acciones y registra lo que ocurrió.',
        features: [
          'Objetivos en lenguaje natural, planificados en pasos',
          'Llamada a herramientas y funciones con memoria de conversación',
          'Integraciones con APIs externas detrás de cada acción',
          'Controles de seguridad y registro completo de actividad',
        ],
        value:
          'El trabajo rutinario corre sin supervisión, y cada acción del agente queda registrada.',
      },
      'event-check-in': {
        category: 'Plataforma Móvil',
        title: 'Plataforma de Gestión de Eventos y Check-In en Tiempo Real',
        overview:
          'Una plataforma para eventos de cualquier tamaño: inscripción, gestión de asistentes y un check-in lo bastante rápido para que la fila no se detenga. Construida sobre lectura de QR y códigos de barras, con todos los dispositivos de la puerta viendo el mismo estado.',
        features: [
          'Lectura de QR y códigos de barras en la puerta',
          'Sincronización en tiempo real entre todos los dispositivos',
          'Inscripción y gestión de asistentes',
          'Tratamiento seguro de los datos de los asistentes',
        ],
        value:
          'Filas más cortas en la puerta y una organización que ve las llegadas mientras ocurren.',
      },
      'enneagram-assessment': {
        category: 'Aplicación Web',
        title: 'Análisis de Perfil Eneagrama — Evaluación de Personalidad',
        overview:
          'Una plataforma de evaluación de personalidad basada en el Eneagrama. Las respuestas de un cuestionario interactivo se puntúan sobre la marcha y se convierten en un informe de perfil estructurado, generado y entregado sin que nadie lo monte a mano.',
        features: [
          'Cuestionario multilingüe con progreso guardado',
          'Puntuación dinámica hacia un resultado personalizado',
          'Informes en PDF descargables y envío por correo',
          'Panel de administración de usuarios, grupos y resultados',
        ],
        value:
          'Una lectura basada en datos de los patrones de personalidad y la dinámica de equipo, sin informes escritos a mano.',
      },
      'premium-aquarium': {
        category: 'WordPress y CMS',
        title: 'Gestión de Acuarios Premium y Sitio Corporativo',
        overview:
          'Un sitio corporativo para una empresa de gestión de acuarios premium, que presenta servicios a medida a clientes residenciales, comerciales e institucionales. Diseños centrados en los servicios, muestrario de proyectos y solicitudes de contacto, todo editable desde el CMS.',
        features: [
          'Diseños centrados en los servicios y muestrario de proyectos',
          'Solicitudes de contacto integradas en el sitio',
          'Contenido gestionado desde el CMS, sin desarrollador',
          'Una experiencia consistente del escritorio al móvil',
        ],
        value:
          'Credibilidad para una especialidad técnica y un camino claro hacia los servicios ofrecidos.',
      },
      'shopify-jewellery': {
        category: 'Shopify',
        title: 'Tienda de Joyería en Shopify — UI y UX',
        overview:
          'Una tienda de joyería pensada para el lujo: un tema de Shopify a medida en los colores y la tipografía de la marca, una galería con zoom en cada pieza y un checkout que no se interpone.',
        features: [
          'Tema a medida en los colores y la tipografía de la marca',
          'Galería de producto con zoom en cada pieza',
          'Banner de portada, cuadrícula de colecciones y fila de tendencias',
          'Chat de WhatsApp para atención inmediata al cliente',
        ],
        value:
          'Un diseño premium a la altura del precio de la marca, que genera la confianza que exige comprar joyería.',
      },
      'vassalli-listing': {
        category: 'Shopify',
        title: 'Listado de Productos — Vassalli',
        overview:
          'Un listado de productos Shopify limpio y organizado para una marca de ropa: descripciones detalladas, opciones de talla y visuales cuidados, estructurados para que el catálogo se lea igual del primer producto al último.',
        features: [
          'Listados de ropa estructurados, con descripciones detalladas',
          'Opciones de talla y variante en cada producto',
          'Estilo consistente en todo el catálogo',
          'Merchandising montado según cómo navega quien compra',
        ],
        value:
          'Un catálogo que se lee como una sola tienda, y no como páginas de producto sin relación.',
      },
      'cowboy-shooter': {
        category: 'Desarrollo de Videojuegos',
        title: 'West Cowboy Fighter — Shooter en Unity 3D',
        overview:
          'Un shooter en tercera persona en una frontera del Lejano Oeste, hecho en Unity 3D y publicado en Google Play. Las misiones recorren un paisaje desértico en 3D, y el pistolero se mejora con lo que rinde cada combate.',
        features: [
          'Una frontera desértica en 3D construida en Unity',
          'Misiones que rinden mejoras y recompensas',
          'Control tap-to-move, sin combinaciones que memorizar',
          'Publicado para Android e iOS',
        ],
        value:
          'Un juego completo y publicado: del entorno 3D y el sistema de combate hasta el lanzamiento en la tienda.',
      },
      'kungfu-fighting-game': {
        category: 'Desarrollo de Videojuegos',
        title: 'Juego de Lucha Multijugador — Kungfu',
        overview:
          'Un juego de lucha multijugador con un sistema de combate basado en física: golpes, agarres y derribos movidos por animación e inercia reales en lugar de por combinaciones de botones memorizadas.',
        features: [
          'Golpes, agarres y derribos basados en física',
          'Creación de luchador, del aspecto al estilo de combate',
          'Modo carrera subiendo escalafones hasta el título',
          'Combates multijugador contra amigos o desconocidos',
        ],
        value:
          'Un combate que se siente físico en vez de programado, que es lo que mantiene vivo a un juego de lucha.',
      },
      'find-a-franchise': {
        category: 'Aplicación Móvil',
        title: 'Find A Franchise',
        overview:
          'Una aplicación móvil con un directorio actualizado de sistemas de franquicia de todo el mundo, y orientación del sector junto a él. Una cuenta protege las compras frente a un dispositivo perdido y las mantiene disponibles allí donde se inicie sesión.',
        features: [
          'Directorio consultable de franquicias de todo el mundo',
          'Filtros por categoría, subcategoría y país',
          'Cuentas que llevan las compras entre dispositivos',
          'Compras restauradas al iniciar sesión',
        ],
        value:
          'Una búsqueda que antes pedía escritorio y navegador ahora cabe en el bolsillo.',
      },
      'twilio-sip': {
        category: 'Voz e Integración',
        title: 'Integración SIP con Twilio',
        overview:
          'Sistemas basados en SIP conectados a la plataforma cloud de Twilio, de modo que la voz entrante y saliente corre sobre SIP trunking. El trabajo une centralitas tradicionales con VoIP moderno sin que ninguna de las dos partes tenga que saber de la otra.',
        features: [
          'SIP trunking para voz entrante y saliente',
          'Enrutamiento de llamadas y autenticación SIP',
          'Aprovisionamiento de números en varias regiones',
          'Flujos de voz que escalan para uso empresarial',
        ],
        value:
          'El equipamiento telefónico existente sigue funcionando mientras la plataforma que hay debajo pasa a ser global y a escala cloud.',
      },
      'so-fresh': {
        category: 'E-Commerce',
        title: 'So Fresh — Tienda Online de Producto Fresco',
        overview:
          'Una tienda online de fruta y verdura fresca con entrega, hecha en WordPress. Plugins personalizados, un catálogo completo y un carrito funcionando, sobre una instalación asegurada que gestiona el propio dueño.',
        features: [
          'Catálogo de producto fresco con entrega',
          'Carrito y checkout en toda la gama',
          'Plugins personalizados para el flujo de la propia tienda',
          'Asegurada con SSL y configurada para producción',
        ],
        value:
          'Un comerciante vendiendo directo online, editando la tienda desde la administración que ya conoce.',
      },
      'hold-rome-hotel': {
        category: 'WordPress',
        title: 'Sitio Web del Hotel Hold Rome',
        overview:
          'Un sitio para un hotel en el centro de Roma, hecho para enseñar cómo es de verdad una estancia y para recibir la reserva sin mandar al huésped a otro sitio. Disponibilidad, precios y reservas pasan por un sistema de reservas integrado.',
        features: [
          'Sistema de reservas Octorate integrado en el sitio',
          'Disponibilidad y precios en tiempo real',
          'Fotografía cuidada de las habitaciones y servicios',
          'Responsivo del escritorio al móvil',
        ],
        value:
          'Los huéspedes reservan en el sitio del propio hotel en vez de irse a una plataforma que cobra por ello.',
      },
      'shopify-store-build': {
        category: 'Shopify',
        title: 'Creación de Tienda Online en Shopify',
        overview:
          'Una tienda Shopify completa para un negocio online moderno: configuración, diseño a medida, conexión del dominio y las pasarelas de pago detrás — entregada como tienda en funcionamiento y no como una plantilla.',
        features: [
          'Diseño de tienda a medida con categorías organizadas',
          'Pasarelas de pago Stripe y PayPal',
          'Dominio configurado y conectado',
          'Estructura preparada para SEO y carga optimizada',
        ],
        value:
          'Un negocio vendiendo online de principio a fin, sin nada que el dueño tenga que conectar.',
      },
      'ecommerce-website': {
        category: 'E-Commerce',
        title: 'Sitio de eCommerce',
        overview:
          'Una tienda online hecha en WordPress y PHP, con el diseño de la tienda producido en el mismo trabajo: catálogo, páginas de producto y el trabajo de marca que los sostiene.',
        features: [
          'Catálogo de productos y páginas de detalle',
          'WooCommerce sosteniendo la tienda',
          'Gráficos producidos junto a la construcción',
          'Responsivo del móvil al escritorio',
        ],
        value:
          'Diseño y construcción desde el mismo sitio, para que la tienda se parezca a la marca y no a su plantilla.',
      },
      'wordpress-website-design': {
        category: 'WordPress',
        title: 'Diseño de Sitio WordPress',
        overview:
          'Un sitio WordPress hecho a los requisitos del cliente: un tema a medida en vez de comprado, plugins elegidos por lo que el sitio necesitaba de verdad, y un diseño que aguanta entre dispositivos y navegadores.',
        features: [
          'Tema a medida, construido sobre la marca del cliente',
          'Formularios de contacto, galerías y una sección de blog',
          'Optimización para SEO y pruebas en varios navegadores',
          'Diseño responsivo con navegación sencilla',
        ],
        value:
          'Un sitio en el que el cliente sigue escribiendo y que un año después sigue como se diseñó.',
      },
      'preferred-freelancer': {
        category: 'Reconocimiento',
        title: 'Freelancer Preferido del Trimestre',
        overview:
          'Otorgado por Freelancer.com y certificado por su equipo, por el desempeño como Corporate Preferred Freelancer durante el trimestre — sobre la base del trabajo en PHP, WordPress y WooCommerce.',
        features: [
          'Otorgado por Freelancer.com',
          'Certificado por el equipo de Freelancer.com',
          'Por el desempeño como Corporate Preferred Freelancer',
          'Sobre trabajo en PHP, WordPress y WooCommerce',
        ],
        value:
          'Una confirmación independiente del nivel de entrega, desde la plataforma donde se hizo el trabajo.',
      },
    },
  },
  examples: {
    badge: 'Proyecto de referencia',
    note: 'Las entradas señaladas como proyectos de referencia son demostraciones propias, no trabajos de clientes. Todas las demás se entregaron a clientes reales.',
    items: {},
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
      games: 'Spiele',
    },
    viewDetails: 'Details ansehen',
    prevWork: 'Proyectos anteriores',
    nextWork: 'Proyectos siguientes',
    page: 'Seite',
    switchToLight: 'Zum hellen Design wechseln',
    switchToDark: 'Zum dunklen Design wechseln',
    closeDetails: 'Schließen',
    screenshot: 'Bildschirmfoto',
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
      'Freelancer-Profil · Bronze-Level · drei bestandene Zertifizierungen.',
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
      ['Kernkompetenzen', 'Python · WordPress · Shopify'],
      ['Standort', 'Deutschland'],
      ['Erfahrung', '10+ Jahre · seit 2014'],
      ['Stundensatz', 'USD 30,00 / Stunde'],
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
      'autonomous-ai-agent': {
        category: 'KI & Automatisierung',
        title: 'Autonomer KI-Agent für Prozessautomatisierung',
        overview:
          'Eine Agentenplattform, die einem Team wiederkehrende operative Arbeit abnimmt. Jemand beschreibt ein Ziel in normaler Sprache; das System zerlegt es in Schritte, wählt die nötigen Werkzeuge, führt die Aktionen aus und hält fest, was passiert ist.',
        features: [
          'Ziele in natürlicher Sprache, in Schritte geplant',
          'Tool- und Function-Calling mit Gesprächsgedächtnis',
          'Anbindung von Drittanbieter-APIs hinter jeder Aktion',
          'Sicherheitskontrollen und vollständiges Aktivitätsprotokoll',
        ],
        value:
          'Routinearbeit läuft unbeaufsichtigt, und jede Aktion des Agenten bleibt nachvollziehbar.',
      },
      'event-check-in': {
        category: 'Mobile Plattform',
        title: 'Echtzeit-Eventmanagement und Check-in-Plattform',
        overview:
          'Eine Eventplattform für Veranstaltungen jeder Größe: Registrierung, Gästeverwaltung und ein Check-in, der schnell genug ist, damit die Schlange nicht stehen bleibt. Aufgebaut auf QR- und Barcode-Scan, wobei jedes Gerät am Einlass denselben Stand sieht.',
        features: [
          'QR- und Barcode-Scan direkt am Einlass',
          'Synchronisation in Echtzeit über alle Geräte des Teams',
          'Registrierung und Gästeverwaltung',
          'Sichere Verarbeitung der Teilnehmerdaten',
        ],
        value:
          'Kürzere Schlangen am Einlass, und eine Organisation, die Ankünfte sieht, während sie passieren.',
      },
      'enneagram-assessment': {
        category: 'Webanwendung',
        title: 'Enneagramm-Profilanalyse — Persönlichkeitstest',
        overview:
          'Eine Plattform für Persönlichkeitsanalysen auf Basis des Enneagramms. Die Antworten eines interaktiven Fragebogens werden laufend ausgewertet und zu einem strukturierten Profilbericht verarbeitet, der ohne Handarbeit entsteht und zugestellt wird.',
        features: [
          'Mehrsprachiger Fragebogen mit gespeichertem Fortschritt',
          'Dynamische Auswertung zu einem persönlichen Ergebnis',
          'PDF-Berichte zum Download und Versand per E-Mail',
          'Administrationsbereich für Nutzer, Gruppen und Ergebnisse',
        ],
        value:
          'Ein datengestützter Blick auf Persönlichkeitsmuster und Teamdynamik, ganz ohne handgeschriebene Berichte.',
      },
      'premium-aquarium': {
        category: 'WordPress & CMS',
        title: 'Premium-Aquarienbetreuung und Unternehmenswebsite',
        overview:
          'Eine Unternehmenswebsite für einen Premium-Aquarienservice, die maßgeschneiderte Leistungen für private, gewerbliche und institutionelle Kunden präsentiert. Leistungsorientierte Layouts, Projektgalerien und Anfragen, alles aus dem CMS pflegbar.',
        features: [
          'Leistungsorientierte Layouts und Projektgalerien',
          'Kundenanfragen direkt auf der Website',
          'Inhalte aus dem CMS gepflegt, ohne Entwickler',
          'Ein durchgängiges Erlebnis vom Desktop bis zum Smartphone',
        ],
        value:
          'Glaubwürdigkeit für ein spezialisiertes Fachgebiet und ein klarer Weg zu den angebotenen Leistungen.',
      },
      'shopify-jewellery': {
        category: 'Shopify',
        title: 'Shopify-Schmuckshop — UI & UX',
        overview:
          'Ein Schmuck-Onlineshop für den Luxusbereich: ein eigenes Shopify-Theme in den Farben und der Typografie der Marke, eine Produktgalerie mit Zoom auf jedem Stück und ein Checkout, der sich nicht in den Weg stellt.',
        features: [
          'Eigenes Theme in Farben und Typografie der Marke',
          'Produktgalerie mit Zoom auf jedem Stück',
          'Startseiten-Banner, Kollektionsraster und Trend-Reihe',
          'WhatsApp-Chat für sofortigen Kundensupport',
        ],
        value:
          'Ein hochwertiges Layout, das dem Preisniveau der Marke entspricht und das Vertrauen schafft, das ein Schmuckkauf braucht.',
      },
      'vassalli-listing': {
        category: 'Shopify',
        title: 'Produktlisting — Vassalli',
        overview:
          'Ein sauberes, geordnetes Shopify-Produktlisting für ein Bekleidungslabel: ausführliche Beschreibungen, Größenauswahl und abgestimmte Bildsprache, so strukturiert, dass sich der Katalog vom ersten bis zum letzten Produkt gleich liest.',
        features: [
          'Strukturierte Bekleidungslistings mit ausführlichen Beschreibungen',
          'Größen- und Variantenauswahl bei jedem Produkt',
          'Durchgängige Gestaltung über den gesamten Katalog',
          'Merchandising passend zur Art, wie Kunden stöbern',
        ],
        value:
          'Ein Katalog, der sich wie ein einziger Shop liest und nicht wie unverbundene Produktseiten.',
      },
      'cowboy-shooter': {
        category: 'Spieleentwicklung',
        title: 'West Cowboy Fighter — Unity-3D-Shooter',
        overview:
          'Ein Third-Person-Shooter an der Grenze des Wilden Westens, gebaut in Unity 3D und bei Google Play veröffentlicht. Missionen führen durch eine 3D-Wüstenlandschaft, und der Revolvermann wird aus dem aufgerüstet, was jeder Kampf einbringt.',
        features: [
          'Eine 3D-Wüstenlandschaft, gebaut in Unity',
          'Missionen, die Upgrades und Belohnungen einbringen',
          'Tap-to-Move-Steuerung, ohne Kombinationen auswendig zu lernen',
          'Veröffentlicht für Android und iOS',
        ],
        value:
          'Ein fertig veröffentlichtes Spiel — von der 3D-Welt und Kampfmechanik bis zum Store-Release.',
      },
      'kungfu-fighting-game': {
        category: 'Spieleentwicklung',
        title: 'Multiplayer-Kampfspiel — Kungfu',
        overview:
          'Ein Multiplayer-Kampfspiel mit physikbasiertem Kampfsystem: Schläge, Griffe und Würfe, getragen von echter Animation und echtem Impuls statt von auswendig gelernten Tastenkombinationen.',
        features: [
          'Physikbasierte Schläge, Griffe und Würfe',
          'Eigener Kämpfer, vom Aussehen bis zum Kampfstil',
          'Karrieremodus durch die Ränge bis zum Titel',
          'Multiplayer-Kämpfe gegen Freunde oder Fremde',
        ],
        value:
          'Ein Kampfsystem, das sich körperlich anfühlt statt vorgeschrieben — genau das hält ein Kampfspiel am Leben.',
      },
      'find-a-franchise': {
        category: 'Mobile Anwendung',
        title: 'Find A Franchise',
        overview:
          'Eine mobile App mit einem aktuellen Verzeichnis von Franchisesystemen weltweit, dazu Einordnung aus der Branche. Ein Konto schützt die Käufe vor einem verlorenen Gerät und macht sie überall verfügbar, wo man sich anmeldet.',
        features: [
          'Durchsuchbares Verzeichnis weltweiter Franchisesysteme',
          'Filter nach Kategorie, Unterkategorie und Land',
          'Konten, die Käufe über Geräte hinweg mitnehmen',
          'Käufe werden bei der Anmeldung wiederhergestellt',
        ],
        value:
          'Recherche, die früher Schreibtisch und Browser brauchte, passt jetzt in die Hosentasche.',
      },
      'twilio-sip': {
        category: 'Sprache & Integration',
        title: 'Twilio-SIP-Integration',
        overview:
          'SIP-basierte Systeme an die Cloud-Plattform von Twilio angebunden, sodass ein- und ausgehende Sprache über SIP-Trunking läuft. Die Arbeit verbindet klassische TK-Anlagen mit moderner VoIP, ohne dass eine Seite von der anderen wissen muss.',
        features: [
          'SIP-Trunking für ein- und ausgehende Sprache',
          'Anrufrouting und SIP-Authentifizierung',
          'Rufnummernbereitstellung über Regionen hinweg',
          'Sprach-Workflows, die für den Unternehmenseinsatz skalieren',
        ],
        value:
          'Vorhandene TK-Hardware läuft weiter, während die Plattform darunter cloudweit und global wird.',
      },
      'so-fresh': {
        category: 'E-Commerce',
        title: 'So Fresh — Onlineshop für frische Lebensmittel',
        overview:
          'Ein Onlineshop für frisches Obst und Gemüse mit Lieferung, gebaut auf WordPress. Angepasste Plugins, ein vollständiger Produktkatalog und ein funktionierender Warenkorb, auf einer abgesicherten Installation, die der Inhaber selbst betreibt.',
        features: [
          'Katalog für frische Ware mit Lieferung',
          'Warenkorb und Checkout über das gesamte Sortiment',
          'Plugins an den Ablauf des Shops angepasst',
          'Mit SSL abgesichert und für den Betrieb konfiguriert',
        ],
        value:
          'Ein Händler, der direkt online verkauft und den Shop aus der Verwaltung pflegt, die er ohnehin kennt.',
      },
      'hold-rome-hotel': {
        category: 'WordPress',
        title: 'Website für das Hold Rome Hotel',
        overview:
          'Eine Website für ein Hotel im Zentrum Roms, gebaut um zu zeigen, wie ein Aufenthalt wirklich aussieht — und um die Buchung entgegenzunehmen, ohne den Gast woandershin zu schicken. Verfügbarkeit, Preise und Reservierungen laufen über ein integriertes Buchungssystem.',
        features: [
          'Buchungssystem Octorate in die Website integriert',
          'Verfügbarkeit und Preise in Echtzeit',
          'Hochwertige Bilder der Zimmer und Ausstattung',
          'Responsiv vom Desktop bis zum Smartphone',
        ],
        value:
          'Gäste buchen auf der Website des Hotels, statt zu einer Plattform zu wechseln, die dafür Provision nimmt.',
      },
      'shopify-store-build': {
        category: 'Shopify',
        title: 'Erstellung eines Shopify-Onlineshops',
        overview:
          'Ein vollständiger Shopify-Shop für ein modernes Onlinegeschäft: Einrichtung, eigenes Design, Domainanbindung und die Zahlungsanbieter dahinter — übergeben als laufender Shop, nicht als Theme.',
        features: [
          'Eigenes Shop-Design mit geordneten Kategorien',
          'Zahlungsanbieter Stripe und PayPal',
          'Domain eingerichtet und verbunden',
          'SEO-freundliche Struktur und optimierte Ladezeit',
        ],
        value:
          'Ein Geschäft, das durchgängig online verkauft, ohne dass der Inhaber noch etwas verkabeln muss.',
      },
      'ecommerce-website': {
        category: 'E-Commerce',
        title: 'eCommerce-Website',
        overview:
          'Ein Onlineshop auf WordPress und PHP, dessen Gestaltung im selben Auftrag entstanden ist — Katalog, Produktseiten und die Markenarbeit, die sie trägt.',
        features: [
          'Produktkatalog und Detailseiten',
          'WooCommerce als Basis des Shops',
          'Grafiken parallel zur Umsetzung erstellt',
          'Responsiv vom Smartphone bis zum Desktop',
        ],
        value:
          'Gestaltung und Umsetzung aus einer Hand, damit der Shop nach der Marke aussieht und nicht nach seinem Theme.',
      },
      'wordpress-website-design': {
        category: 'WordPress',
        title: 'WordPress-Website-Design',
        overview:
          'Eine WordPress-Website nach den Anforderungen des Kunden: ein eigenes Theme statt eines gekauften, Plugins nach dem tatsächlichen Bedarf gewählt, und ein Layout, das über Geräte und Browser hinweg zusammenhält.',
        features: [
          'Eigenes Theme, gebaut auf das Branding des Kunden',
          'Kontaktformulare, Galerien und ein Blogbereich',
          'SEO-Optimierung und Tests über alle Browser',
          'Responsives Layout mit klarer Navigation',
        ],
        value:
          'Eine Website, in der der Kunde weiterschreibt und die auch ein Jahr später noch so aussieht wie geplant.',
      },
      'preferred-freelancer': {
        category: 'Auszeichnung',
        title: 'Bevorzugter Freelancer des Quartals',
        overview:
          'Verliehen von Freelancer.com und vom dortigen Team bestätigt, für herausragende Leistung als Corporate Preferred Freelancer im Quartal — auf Grundlage der Arbeit mit PHP, WordPress und WooCommerce.',
        features: [
          'Verliehen von Freelancer.com',
          'Bestätigt vom Team von Freelancer.com',
          'Für herausragende Leistung als Corporate Preferred Freelancer',
          'Für Arbeit mit PHP, WordPress und WooCommerce',
        ],
        value:
          'Eine unabhängige Bestätigung der Liefertreue, von der Plattform, über die die Arbeit lief.',
      },
    },
  },
  examples: {
    badge: 'Referenzbeispiel',
    note: 'Als Referenzbeispiel gekennzeichnete Einträge sind eigene Demonstrationen, keine Kundenarbeit. Alles Übrige wurde für einen zahlenden Kunden umgesetzt.',
    items: {},
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
