import { useContent } from "../i18n";
import Reveal from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

/**
 * Skill pill. The experience level is rendered as a visible label rather than
 * hover-only text, so it's available to touch and screen-reader users too.
 */
function SkillPill({ name, level, t }) {
  return (
    <li className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pr-2 pl-3.5 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent-soft">
      <span className="text-ink">{name}</span>
      {level && (
        <span className="rounded-full bg-surface-2 px-2 py-0.5 font-display text-[11px] font-semibold text-muted transition-colors duration-200 group-hover:text-accent">
          <span className="sr-only">{t.ui.experience} </span>
          {level}
          <span className="sr-only">{t.ui.yearsSuffix}</span>
        </span>
      )}
    </li>
  );
}

export default function Skills() {
  const { t, skillGroups } = useContent();

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow={t.sections.skills.eyebrow}
        title={t.sections.skills.title}
        lead={t.sections.skills.lead}
      />

      <div className="space-y-10">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={i * 0.05}>
            <div className="grid gap-5 border-t border-line pt-7 md:grid-cols-[180px_1fr] md:gap-8">
              <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-muted uppercase">
                {group.name}
              </h3>

              <ul className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <SkillPill key={skill.name} {...skill} t={t} />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
