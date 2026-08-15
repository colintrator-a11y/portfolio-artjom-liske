import {
  Code2,
  Database,
  LayoutGrid,
  MonitorSmartphone,
  Plug,
  Smartphone,
} from "lucide-react";

import { services } from "../data/content";
import Reveal from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

/** Maps the icon names in `data/content.js` to lucide components. */
const icons = {
  layout: LayoutGrid,
  code: Code2,
  monitor: MonitorSmartphone,
  smartphone: Smartphone,
  database: Database,
  plug: Plug,
};

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="What I can do for you"
        lead="One developer for the whole build — design, front end, back end, and the app store."
      />

      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <Reveal
              as="li"
              key={service.title}
              delay={(i % 3) * 0.06}
              className="group bg-surface p-7 transition-colors duration-300 hover:bg-surface-2"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-accent-soft text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>

              <h3 className="mt-5 text-base leading-snug font-semibold">
                {service.title}
              </h3>

              {service.meta && (
                <p className="mt-2 text-sm text-muted">{service.meta}</p>
              )}
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
