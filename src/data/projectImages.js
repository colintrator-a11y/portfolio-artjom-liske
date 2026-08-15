/**
 * Thumbnail resolution for project cards.
 *
 * Two folders, in priority order:
 *
 *   src/assets/projects/  — real screenshots. Drop `<slug>.jpg` here and it
 *                           wins over everything below. This is where your
 *                           actual product shots go.
 *   src/assets/covers/    — openly-licensed stock photography shipped with the
 *                           site, one per project, chosen to suit each
 *                           project's subject. These are NOT pictures of the
 *                           real products — they are thematic imagery that
 *                           holds the grid together until real screenshots
 *                           replace them. Attribution: assets/covers/CREDITS.md
 *
 * Both go through Vite, so everything gets content-hashed filenames and
 * long-lived cache headers.
 */
const screenshots = import.meta.glob(
  "../assets/projects/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, query: "?url", import: "default" },
);

const covers = import.meta.glob(
  "../assets/covers/*.{webp,jpg,jpeg,png,avif,svg}",
  { eager: true, query: "?url", import: "default" },
);

// "../assets/projects/vassalli.jpg" → { vassalli: "/assets/vassalli-abc123.jpg" }
function index(modules) {
  return Object.fromEntries(
    Object.entries(modules)
      // Sort so a slug matched by two extensions resolves deterministically.
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([path, url]) => [
        path.split("/").pop().replace(/\.[^.]+$/, ""),
        url,
      ]),
  );
}

const bySlug = index(screenshots);
const coverBySlug = index(covers);

/**
 * Resolves a project's thumbnail, in priority order:
 *   1. an explicit `image` override (a /public path or a remote URL)
 *   2. a real screenshot at `src/assets/projects/<slug>.<ext>`
 *   3. the stock cover at `src/assets/covers/<slug>.<ext>`
 *   4. null — the caller falls back to the generated initial placeholder
 */
export function resolveProjectImage({ image, slug }) {
  return image ?? bySlug[slug] ?? coverBySlug[slug] ?? null;
}

/**
 * True when the thumbnail is a stand-in stock photo rather than a real
 * screenshot. Used to keep the alt text honest about what's being shown, so
 * assistive tech isn't told a photo of an aeroplane is the booking product.
 */
export function isPlaceholderCover({ image, slug }) {
  return !image && !bySlug[slug] && Boolean(coverBySlug[slug]);
}
