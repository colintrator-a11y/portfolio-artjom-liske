const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-all duration-200 active:scale-[0.98] whitespace-nowrap";

const variants = {
  // Solid accent — reserved for the primary call to action.
  // `accent-strong` (not `accent`) keeps white label text at AA contrast.
  primary:
    "bg-accent-strong text-white hover:brightness-110 " +
    "shadow-[0_10px_40px_-12px_var(--c-glow)] hover:shadow-[0_14px_50px_-10px_var(--c-glow)]",
  // Bordered, quiet — everything else.
  ghost:
    "border border-line-strong text-ink hover:border-accent hover:text-accent hover:bg-accent-soft",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
};

/**
 * Renders an <a> when `href` is given, otherwise a <button>.
 * Anchor links get smooth in-page scrolling for free via `scroll-behavior`.
 */
export default function Button({
  as,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const Tag = as ?? (href ? "a" : "button");
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  return (
    <Tag href={href} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
