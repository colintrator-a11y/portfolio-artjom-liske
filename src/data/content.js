/**
 * Single source of truth for every piece of copy on the site.
 * Edit here — components stay untouched.
 */

export const nav = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  name: "Artjom Liske",
  role: "Front-end Developer",
  years: "10+ years",
  tagline:
    "I build websites and apps that are fast, beautiful, and easy to use — the kind that make your clients stay, come back, and buy.",
  flag: "🇩🇪",
  location: "Germany",
  availability: "Available for freelance",
  stats: [
    { value: "10+", label: "years experience" },
    { value: "20+", label: "projects delivered" },
    { value: "4", label: "languages spoken" },
  ],
};

export const award = "Preferred Freelancer of the Quarter";

/**
 * Projects.
 *
 * `image`: leave as `null` to render the built-in placeholder (a tinted block
 * carrying the project initial). To use a real screenshot, drop a 16:9 file in
 * `/public/projects/` and set e.g. `image: "/projects/travel-booking.jpg"`.
 * `tint` is the hue (0–360) used by that placeholder.
 */
export const projects = [
  {
    title: "Travel Booking & Digital Aviation Platform",
    description:
      "End-to-end booking experience for travel and aviation, built mobile-first and shipped on an automated pipeline.",
    tags: ["React Native", "DevOps"],
    tint: 262,
    image: null, // ← swap in "/projects/travel-booking.jpg"
  },
  {
    title: "Premium Aquarium Management & Corporate Site",
    description:
      "Corporate site with a tailored CMS so the team can manage premium aquarium services without touching code.",
    tags: ["WordPress", "CMS"],
    tint: 196,
    image: null, // ← swap in "/projects/aquarium.jpg"
  },
  {
    title: "Real-Time Event Management & Check-In Platform",
    description:
      "Live attendee check-in with instant sync between staff devices and the event dashboard.",
    tags: ["React Native", "JavaScript"],
    tint: 152,
    image: null, // ← swap in "/projects/event-checkin.jpg"
  },
  {
    title: "Enneagram Profile Analysis — Personality Assessment Tool",
    description:
      "Interactive assessment flow that scores answers and renders a clear, readable personality profile.",
    tags: ["JavaScript", "Vue.js"],
    tint: 24,
    image: null, // ← swap in "/projects/enneagram.jpg"
  },
  {
    title: "Autonomous AI Agent for Workflow Automation",
    description:
      "An agent that runs multi-step business workflows on its own, with a React dashboard for oversight.",
    tags: ["Python", "React.js"],
    tint: 288,
    image: null, // ← swap in "/projects/ai-agent.jpg"
  },
  {
    title: "Product Listing — Vassalli",
    description:
      "Clean, organized Shopify product listing showcasing apparel with detailed descriptions, size options, and stylish visuals.",
    tags: ["Shopify", "WordPress"],
    tint: 340,
    image: null, // ← swap in "/projects/vassalli.jpg"
  },
  {
    title: "eCommerce Website",
    description:
      "Custom storefront with a hand-built product and checkout flow, designed and developed end to end.",
    tags: ["PHP", "Graphic Design"],
    tint: 218,
    image: null, // ← swap in "/projects/ecommerce.jpg"
  },
  {
    title: "WordPress Website Design",
    description:
      "Hand-coded WordPress theme built for fast loading, clean markup, and easy editing.",
    tags: ["HTML", "WordPress"],
    tint: 44,
    image: null, // ← swap in "/projects/wordpress-design.jpg"
  },
];

/** Section 4 — icon names map to the lookup in `components/Services.jsx`. */
export const services = [
  {
    icon: "layout",
    title: "WordPress, Shopify & custom CMS",
    meta: "10+ years",
  },
  {
    icon: "code",
    title: "JavaScript, React.js, Node.js, HTML & CSS",
  },
  {
    icon: "monitor",
    title: "Responsive design that looks perfect on every screen",
  },
  {
    icon: "smartphone",
    title: "Mobile apps with React Native and Flutter",
    meta: "Android & iOS",
  },
  {
    icon: "database",
    title: "Back-end with PHP, Python, MySQL & PostgreSQL",
  },
  {
    icon: "plug",
    title: "API integrations and chatbots",
  },
];

/** Skills, grouped. `level` is years of experience. */
export const skillGroups = [
  {
    name: "Frontend",
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
    name: "Mobile",
    skills: [
      { name: "React Native", level: "5–10" },
      { name: "Flutter", level: "3–5" },
      { name: "Android", level: "5–10" },
      { name: "iOS", level: "5–10" },
    ],
  },
  {
    name: "Backend",
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
    name: "CMS & Commerce",
    skills: [
      { name: "WordPress", level: "10+" },
      { name: "Shopify", level: "5–10" },
      { name: "CMS", level: "5–10" },
      { name: "E-commerce", level: "5–10" },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "Chatbots", level: "5–10" },
      { name: "Linux", level: "3–5" },
      { name: "System Analysis", level: "3–5" },
    ],
  },
];

export const about = {
  bio: "Hi, I'm Artjom — a front-end developer with over 10 years of experience. Since 2014 I've worked as a freelance UI/UX Designer & Full Stack Developer, designing and building high-quality digital solutions, specialized in React.js and Node.js.",
  howIWork:
    "Clear communication, honest deadlines, and no surprises. I ask the right questions before writing a single line of code, and I keep you updated at every step.",
  languages: [
    { name: "German", level: "Native" },
    { name: "English", level: "High Intermediate" },
    { name: "Spanish", level: "High Intermediate" },
    { name: "Portuguese", level: "High Intermediate" },
  ],
};
