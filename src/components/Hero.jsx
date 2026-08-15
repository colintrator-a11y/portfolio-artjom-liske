import { ArrowDown } from "lucide-react";

import { hero } from "../data/content";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative grid + accent wash; purely visual. */}
      <div
        aria-hidden="true"
        className="hero-backdrop pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto max-w-[1100px] px-5 pt-32 pb-20 sm:px-8 md:pt-44 md:pb-28">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-xs text-muted backdrop-blur">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span aria-hidden="true" className="text-sm leading-none">
              {hero.flag}
            </span>
            {hero.location}
            <span aria-hidden="true" className="text-line-strong">
              ·
            </span>
            {hero.availability}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-7 text-[clamp(2.75rem,9vw,5.5rem)] leading-[0.95] font-bold">
            {hero.name}
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 font-display text-lg font-medium tracking-tight text-muted sm:text-xl">
            {hero.role}
            <span aria-hidden="true" className="mx-2.5 text-accent">
              ·
            </span>
            {hero.years}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
            {hero.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#work">
              View my work
              <ArrowDown size={16} aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="ghost">
              Get in touch
            </Button>
          </div>
        </Reveal>

        {/* Stat row */}
        <Reveal delay={0.34}>
          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-20">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="bg-bg px-4 py-6 sm:px-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs text-muted sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
