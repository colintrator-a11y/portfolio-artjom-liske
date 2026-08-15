import { m, useReducedMotion } from "framer-motion";

/**
 * Fade-up-on-scroll wrapper. Animates once, and collapses to a plain fade
 * (effectively nothing) when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  as = "div",
  className = "",
  ...rest
}) {
  const reduced = useReducedMotion();
  const MotionTag = m[as] ?? m.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduced ? 0 : 0.55,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1], // gentle ease-out
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
