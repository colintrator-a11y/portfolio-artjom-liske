import { sectionIds } from '../../data/content'

/**
 * One full-viewport section, carrying its own position in the deck.
 *
 * The number comes from `sectionIds` rather than from a prop, so a panel can
 * never disagree with the navigation about where it sits, and reordering the
 * page renumbers it. It is decorative for a screen reader - the heading each
 * panel already carries is what announces the section.
 */
export default function Panel({ id, label, className = '', labelledBy, children }) {
  const index = sectionIds.indexOf(id)
  const of = String(sectionIds.length).padStart(2, '0')
  const at = String(index + 1).padStart(2, '0')

  return (
    <section className={`panel ${className}`.trim()} id={id} aria-labelledby={labelledBy}>
      <div className="container">
        <p className="panel__meta" aria-hidden="true">
          <span className="panel__count">
            <b>{at}</b> <span>/ {of}</span>
          </span>
          <span className="panel__rule" />
          <span className="panel__label">{label}</span>
        </p>

        {children}
      </div>
    </section>
  )
}
