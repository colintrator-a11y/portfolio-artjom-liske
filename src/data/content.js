/**
 * Language-independent structure.
 *
 * Everything here is the same in every language — ids, slugs, tech tags,
 * placeholder hues, icon names, years of experience. All translatable copy
 * lives in `src/i18n/{en,pt,es}.js`, keyed by the ids below, and the two are
 * merged by `useContent()`.
 *
 * Adding a project = add an entry here + one block in each locale file.
 */

/** Nav order. Each id is both the section anchor and the key in `t.nav`. */
export const navIds = ["work", "skills", "about", "contact"];

/** Not translated — a name, a flag, and three numbers. */
export const hero = {
  name: "Artjom Liske",
  flag: "🇩🇪",
  stats: [
    { id: "years", value: "10+" },
    { id: "projects", value: "20+" },
    { id: "languages", value: "4" },
  ],
};

/**
 * Projects.
 *
 * Screenshots are picked up automatically — drop a 16:9 image into
 * `src/assets/projects/` named after the project's `slug` and it replaces
 * whatever was there. See `data/projectImages.js`.
 *
 * `image`: optional explicit override, for a `/public` path or a remote URL.
 * `tint`:  hue (0–360) for the generated placeholder, if no image exists.
 * `demo`:  true for capability demos built to show what's possible, rather
 *          than work delivered for a client. Renders a "Demo" badge on the
 *          card so the two are never confused. Delete the flag to drop it.
 */
export const projects = [
  {
    slug: "travel-booking",
    tags: ["React Native", "DevOps"],
    tint: 262,
    image: null,
  },
  { slug: "aquarium", tags: ["WordPress", "CMS"], tint: 196, image: null },
  {
    slug: "event-checkin",
    tags: ["React Native", "JavaScript"],
    tint: 152,
    image: null,
  },
  { slug: "enneagram", tags: ["JavaScript", "Vue.js"], tint: 24, image: null },
  { slug: "ai-agent", tags: ["Python", "React.js"], tint: 288, image: null },
  { slug: "vassalli", tags: ["Shopify", "WordPress"], tint: 340, image: null },
  {
    slug: "ecommerce",
    tags: ["PHP", "Graphic Design"],
    tint: 218,
    image: null,
  },
  {
    slug: "wordpress-design",
    tags: ["HTML", "WordPress"],
    tint: 44,
    image: null,
  },

  /* ── Chatbot demos ─────────────────────────────────────────────────────── */
  {
    slug: "telegram-order-bot",
    tags: ["Telegram Bot API", "Node.js"],
    tint: 205,
    image: null,
    demo: true,
  },
  {
    slug: "whatsapp-booking-bot",
    tags: ["WhatsApp Cloud API", "Node.js"],
    tint: 145,
    image: null,
    demo: true,
  },
  {
    slug: "chatbot-handover",
    tags: ["Telegram", "WhatsApp", "React.js"],
    tint: 262,
    image: null,
    demo: true,
  },
];

/** `icon` maps to the lookup in `components/Services.jsx`. */
export const services = [
  { id: "cms", icon: "layout" },
  { id: "frontend", icon: "code" },
  { id: "responsive", icon: "monitor" },
  { id: "mobile", icon: "smartphone" },
  { id: "backend", icon: "database" },
  { id: "api", icon: "plug" },
];

/** Skill names are product names, so they read the same in every language. */
export const skillGroups = [
  {
    id: "frontend",
    skills: [
      { name: "JavaScript", level: "10+" },
      { name: "HTML", level: "10+" },
      { name: "CSS", level: "10+" },
      { name: "React.js", level: "5–10" },
      { name: "Vue.js", level: null },
      { name: "Responsive Web Design", level: "10+" },
    ],
  },
  {
    id: "mobile",
    skills: [
      { name: "React Native", level: "5–10" },
      { name: "Flutter", level: "3–5" },
      { name: "Android", level: "5–10" },
      { name: "iOS", level: "5–10" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: "Node.js", level: "5–10" },
      { name: "PHP", level: "10+" },
      { name: "Python", level: "5–10" },
      { name: "Java", level: "3–5" },
      { name: "MySQL", level: "5–10" },
      { name: "PostgreSQL", level: "5–10" },
      { name: "Web Services", level: "5–10" },
      { name: "API", level: "5–10" },
    ],
  },
  {
    id: "cms",
    skills: [
      { name: "WordPress", level: "10+" },
      { name: "Shopify", level: "5–10" },
      { name: "CMS", level: "5–10" },
      { name: "E-commerce", level: "5–10" },
    ],
  },
  {
    id: "other",
    skills: [
      { name: "Chatbots", level: "5–10" },
      { name: "Linux", level: "3–5" },
      { name: "System Analysis", level: "3–5" },
    ],
  },
];

/** Display order for the languages-spoken row; names come from the locale. */
export const spokenLanguages = ["german", "english", "spanish", "portuguese"];
