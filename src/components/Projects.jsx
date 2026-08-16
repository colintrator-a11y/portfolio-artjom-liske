import { isPlaceholderCover, resolveProjectImage } from "../data/projectImages";
import { useContent } from "../i18n";
import ProjectThumb from "./ProjectThumb";
import AwardBadge from "./ui/AwardBadge";
import Reveal from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

function ProjectCard({ project, t }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_24px_70px_-40px_var(--c-glow)]">
      {/* Capability demo, not client work — labelled so the two can't be
          confused by someone scanning the grid. */}
      {project.demo && (
        <span className="absolute top-3 right-3 z-10 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 font-display text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
          {t.ui.demo}
        </span>
      )}

      <ProjectThumb
        src={resolveProjectImage(project)}
        alt={project.title}
        illustrated={isPlaceholderCover(project)}
        illustratedLabel={t.ui.representativeImage}
        soonLabel={t.ui.screenshotSoon}
        initial={project.title.charAt(0)}
        tint={project.tint}
      />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg leading-snug font-semibold transition-colors duration-200 group-hover:text-accent">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t, projects } = useContent();

  return (
    <Section id="work">
      <SectionHeading
        eyebrow={t.sections.work.eyebrow}
        title={t.sections.work.title}
        lead={t.sections.work.lead}
      >
        <Reveal delay={0.15}>
          <div className="mt-7">
            <AwardBadge />
          </div>
        </Reveal>
      </SectionHeading>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            as="li"
            key={project.slug}
            /* Stagger by column so each row animates in as a wave. */
            delay={(i % 3) * 0.08}
            className="h-full"
          >
            <ProjectCard project={project} t={t} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
