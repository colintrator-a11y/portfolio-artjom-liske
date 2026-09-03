import Icon from './ui/Icon'

/**
 * One tile on the projects rail.
 *
 * A button rather than a div: the whole card opens the detail dialog, and
 * making that a real button gives keyboard and screen-reader users the same
 * affordance a mouse user gets for free.
 *
 * Only the first few technologies are shown - the rest are a count, since the
 * tile is a lure into the dialog rather than the full record.
 */
const SHOWN_TECH = 3

export default function ProjectCard({
  project,
  index,
  delayIndex = index,
  label,
  badge,
  ui,
  onOpen,
  eager = false,
}) {
  const shown = project.tech.slice(0, SHOWN_TECH)
  const extra = project.tech.length - shown.length

  return (
    <button
      type="button"
      className="pcard"
      style={{ '--i': delayIndex }}
      onClick={() => onOpen(project)}
      aria-label={`${project.title} — ${ui.viewDetails}`}
    >
      <span className="pcard__media">
        <img
          className="pcard__shot"
          src={project.image}
          alt=""
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          width={project.imageSize?.[0]}
          height={project.imageSize?.[1]}
        />
        <span className="pcard__veil" aria-hidden="true" />
        <span className="pcard__index" aria-hidden="true">
          {label} {String(index + 1).padStart(2, '0')}
        </span>
        {badge ? <span className="pcard__badge">{badge}</span> : null}
      </span>

      <span className="pcard__glow" aria-hidden="true" />

      <span className="pcard__body">
        <span className="pcard__category">{project.category}</span>
        <span className="pcard__title">{project.title}</span>
        <span className="pcard__overview">{project.overview}</span>

        <span className="pcard__tech">
          {shown.map((tech) => (
            <span key={tech} className="chip chip--sm">
              {tech}
            </span>
          ))}
          {extra > 0 ? <span className="pcard__more">+{extra}</span> : null}
        </span>

        <span className="pcard__cta">
          {ui.viewDetails}
          <Icon name="arrowRight" size={14} strokeWidth={2.2} />
        </span>
      </span>
    </button>
  )
}
