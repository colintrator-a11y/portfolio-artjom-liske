import Reveal from "./Reveal";

/** Consistent page section: anchor id, max-width container, vertical rhythm. */
export function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[1100px] px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

/** Eyebrow + heading + optional lead paragraph, used at the top of each section. */
export function SectionHeading({ eyebrow, title, lead, children }) {
  return (
    <header className="mb-12 md:mb-16">
      <Reveal>
        <p className="mb-3 flex items-center gap-3 font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="max-w-2xl text-3xl leading-[1.1] font-bold sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>

      {lead && (
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {lead}
          </p>
        </Reveal>
      )}

      {children}
    </header>
  );
}
