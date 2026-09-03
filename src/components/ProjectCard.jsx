import Icon from './ui/Icon'
import ProjectLinks from './ProjectLinks'

/**
 * One tile on the projects rail.
 *
 * The whole card opens the detail dialog, but the card itself is not the
 * button: a project can carry outbound links, and an anchor inside a button is
 * invalid markup that browsers resolve inconsistently. Instead an invisible
 * button is stretched over the card and the links sit above it, so the card
 * still opens from anywhere while each link stays separately clickable.
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
  /*
   * A project with a GIF plays it here, at a size cut for a card rather than
   * the dialog's - a card renders about 390px wide, so the dialog's copy would
   * be twice the pixels and three times the weight for detail nobody sees.
   */
  const moves = Boolean(project.cardAnim)

  return (
    <div className="pcard" style={{ '--i': delayIndex }}>
      {/* First in the DOM so Tab reaches the project before its link. */}
      <button
        type="button"
        className="pcard__open"
        onClick={() => onOpen(project)}
        aria-label={`${project.title} — ${ui.viewDetails}`}
      />
      <span className="pcard__media">
        <picture>
          {/* A reader who has asked for less motion gets the frozen frame, and
              the marker below tells them the still is standing in for a clip. */}
          {moves ? (
            <source srcSet={project.image} media="(prefers-reduced-motion: reduce)" />
          ) : null}
          <img
            className="pcard__shot"
            src={moves ? project.cardAnim : project.image}
            alt=""
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            width={(moves ? project.cardAnimSize : project.imageSize)?.[0]}
            height={(moves ? project.cardAnimSize : project.imageSize)?.[1]}
          />
        </picture>
        <span className="pcard__veil" aria-hidden="true" />
        {moves ? <span className="pcard__gif">GIF</span> : null}
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

        <span className="pcard__foot">
          <span className="pcard__cta">
            {ui.viewDetails}
            <Icon name="arrowRight" size={14} strokeWidth={2.2} />
          </span>
          {/* One link on the card; the dialog lists them all. */}
          <ProjectLinks links={project.links} ui={ui} limit={1} />
        </span>
      </span>
    </div>
  )
}
