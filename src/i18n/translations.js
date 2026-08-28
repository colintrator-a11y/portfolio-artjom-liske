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
    prevWork: 'Previous projects',
    nextWork: 'Next projects',
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
    items: {},
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
    },
    viewDetails: 'Ver detalhes',
    prevWork: 'Vorherige Projekte',
    nextWork: 'Nächste Projekte',
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
    items: {},
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
    },
    viewDetails: 'Ver detalles',
    prevWork: 'Projetos anteriores',
    nextWork: 'Projetos seguintes',
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
    items: {},
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
    },
    viewDetails: 'Details ansehen',
    prevWork: 'Proyectos anteriores',
    nextWork: 'Proyectos siguientes',
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
    items: {},
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
