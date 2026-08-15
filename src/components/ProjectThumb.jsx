/**
 * Project thumbnail, locked to 16:9 so nothing shifts while loading.
 *
 * With no `src` it renders an intentional-looking placeholder: a tinted block
 * carrying the project initial. Pass a real screenshot path through the
 * project's `image` field in `data/content.js` to replace it.
 */
export default function ProjectThumb({ src, alt, initial, tint }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={1600}
        height={900}
        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${alt} — screenshot coming soon`}
      className="relative grid aspect-video w-full place-items-center overflow-hidden"
      style={{
        // Per-project hue keeps the grid varied without adding image weight.
        backgroundColor: `hsl(${tint} 45% 50% / 0.12)`,
        backgroundImage: `linear-gradient(135deg, hsl(${tint} 60% 55% / 0.18), transparent 60%)`,
      }}
    >
      {/* Faint rule pattern so the block reads as a designed surface. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(${tint} 60% 55% / 0.08) 0 1px, transparent 1px 12px)`,
        }}
      />
      <span
        aria-hidden="true"
        className="relative font-display text-5xl font-bold tracking-tight transition-transform duration-500 group-hover:scale-110"
        style={{ color: `hsl(${tint} 65% 60% / 0.85)` }}
      >
        {initial}
      </span>
    </div>
  );
}
