import { ArrowUpRight } from "lucide-react";

import Button from "./ui/Button";
import { useI18n } from "../i18n";
import AwardBadge from "./ui/AwardBadge";
import Reveal from "./ui/Reveal";
import { Section } from "./ui/Section";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️  THE ONE THING TO FILL IN
 *
 * No contact details are hard-coded anywhere in this project. Point the CTA at
 * however you want to be reached — a mailto, a booking page, or your profile:
 *
 *   const CONTACT_URL = "mailto:you@example.com";
 *   const CONTACT_URL = "https://cal.com/your-handle";
 *   const CONTACT_URL = "https://www.workana.com/freelancer/…";
 *
 * Every "Hire me" / "Get in touch" button on the site scrolls here, so this is
 * the only place that needs changing.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const CONTACT_URL = "#";

export default function Contact() {
  const { t } = useI18n();

  return (
    <Section id="contact">
      <Reveal>
        <div className="glow relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12 md:py-24">
          {/* Accent wash behind the CTA. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(40rem 20rem at 50% 0%, var(--c-glow), transparent 70%)",
            }}
          />

          <div className="relative">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {t.sections.contact.eyebrow}
            </p>

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl leading-[1.1] font-bold sm:text-4xl md:text-5xl">
              {t.sections.contact.title}
            </h2>

            <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted sm:text-lg">
              {t.sections.contact.lead}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href={CONTACT_URL}>
                {t.ui.hireMe}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Button>
              <Button href="#work" variant="ghost">
                {t.ui.seeWorkFirst}
              </Button>
            </div>

            <div className="mt-10">
              <AwardBadge />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
