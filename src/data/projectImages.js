/**
 * Slug-based screenshot auto-discovery.
 *
 * Any image dropped into `src/assets/projects/` is picked up at build time and
 * matched to a project by filename. Drop `vassalli.jpg` in that folder and the
 * project whose `slug` is "vassalli" starts using it — no code change needed.
 *
 * Going through Vite (rather than `/public`) means these get content-hashed
 * filenames and long-lived cache headers for free.
 */
const files = import.meta.glob(
  "../assets/projects/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, query: "?url", import: "default" },
);

// "../assets/projects/vassalli.jpg" → "vassalli"
const bySlug = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split("/").pop().replace(/\.[^.]+$/, ""),
    url,
  ]),
);

/**
 * Resolves a project's thumbnail, in priority order:
 *   1. an explicit `image` override (a /public path or remote URL)
 *   2. `src/assets/projects/<slug>.<ext>`, if that file exists
 *   3. null — the caller falls back to the generated placeholder
 */
export function resolveProjectImage({ image, slug }) {
  return image ?? bySlug[slug] ?? null;
}
