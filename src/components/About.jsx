import { Languages, MessageSquare } from "lucide-react";

import { about, hero } from "../data/content";
// Portrait lives in src/assets so Vite hashes and cache-busts it.
import avatar from "../assets/avatar.webp";
import Reveal from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="Who you'd be working with." />

      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        {/* Portrait + bio */}
        <Reveal>
          <img
            src={avatar}
            alt={`Portrait of ${hero.name}`}
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
            className="mb-7 h-24 w-24 rounded-full border border-line object-cover sm:h-28 sm:w-28"
          />

          <p className="font-display text-xl leading-relaxed font-medium tracking-tight sm:text-2xl">
            {about.bio}
          </p>
        </Reveal>

        {/* How I work */}
        <Reveal delay={0.1}>
          <div className="glow rounded-2xl border border-line bg-surface p-7 sm:p-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-accent-soft text-accent">
              <MessageSquare size={20} strokeWidth={1.75} aria-hidden="true" />
            </span>

            <h3 className="mt-5 text-lg font-semibold">How I work</h3>

            <p className="mt-3 leading-relaxed text-muted">{about.howIWork}</p>
          </div>
        </Reveal>
      </div>

      {/* Languages */}
      <Reveal delay={0.15}>
        <div className="mt-12 border-t border-line pt-8">
          <h3 className="flex items-center gap-2 font-display text-sm font-semibold tracking-[0.14em] text-muted uppercase">
            <Languages size={15} aria-hidden="true" />
            Languages
          </h3>

          <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
            {about.languages.map((lang) => (
              <div key={lang.name}>
                <dt className="font-display font-semibold tracking-tight">
                  {lang.name}
                </dt>
                <dd className="mt-0.5 text-sm text-muted">{lang.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
