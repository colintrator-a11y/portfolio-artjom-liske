/**
 * Project thumbnail, locked to 16:9 so nothing shifts while loading.
 *
 * `illustrated` marks the image as a stand-in stock photo rather than a real
 * screenshot — it only changes the alt text, so assistive tech isn't told a
 * photo of an aeroplane wing is the booking product itself. Drop a real
 * screenshot into `src/assets/projects/<slug>.jpg` and it takes over.
 */
export default function ProjectThumb({
  src,
  alt,
  initial,
  tint,
  illustrated,
  illustratedLabel,
  soonLabel,
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={illustrated ? `${alt} — ${illustratedLabel}` : alt}
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
      aria-label={`${alt} — ${soonLabel}`}
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
