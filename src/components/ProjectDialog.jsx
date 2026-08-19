import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import Icon from './ui/Icon'
import ProjectVisual from './ProjectVisual'

const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'

/**
 * The full project record, opened from a card.
 *
 * Everything the old full-width rows carried lives here - overview, stack,
 * features and business value - so shortening the page cost no content.
 *
 * Modal behaviour is done properly rather than approximately: the page behind
 * cannot scroll, Tab is trapped inside, Escape closes, and focus returns to
 * the card that opened it. A dialog that loses the keyboard is worse than no
 * dialog at all.
 *
 * Rendered into the body rather than where it sits in the tree. `position:
 * fixed` means "relative to the viewport" only while no ancestor establishes a
 * containing block, and backdrop-filter on the section around it does exactly
 * that - as would a transform, a filter, or will-change. Portalling puts the
 * dialog out of reach of whatever the page does to that section later.
 */
export default function ProjectDialog({ project, label, index, badge, ui, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const opener = document.activeElement
    const { body } = document
    const previousOverflow = body.style.overflow
    const previousPad = body.style.paddingRight

    // Replacing the scrollbar's width keeps the page behind from shifting
    // sideways the moment it stops scrolling.
    const gap = window.innerWidth - document.documentElement.clientWidth
    body.style.overflow = 'hidden'
    if (gap > 0) body.style.paddingRight = `${gap}px`
    closeRef.current?.focus()

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const items = [...(panelRef.current?.querySelectorAll(FOCUSABLE) ?? [])]
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPad
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [onClose])

  const dialog = (
    <div className="pdialog" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div
        className="pdialog__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdialog-title"
        ref={panelRef}
      >
        <button
          type="button"
          className="pdialog__close"
          onClick={onClose}
          ref={closeRef}
          aria-label={ui.closeDetails}
        >
          <Icon name="close" size={16} strokeWidth={2.2} />
        </button>

        <div className="pdialog__scroll">
        <div className="pdialog__media">
          <div className="pdialog__mediaInner">
          {project.image ? (
            <img
              className="pdialog__shot"
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              width={project.imageSize?.[0]}
              height={project.imageSize?.[1]}
            />
          ) : (
            <ProjectVisual variant={project.visual} title={project.title} />
          )}
          </div>
        </div>

        <div className="pdialog__body">
          {/* Kept clear of the close button, which floats over this corner. */}
          <div className="pdialog__meta">
            <span className="pdialog__number">
              {label} {String(index + 1).padStart(2, '0')}
              <span className="pdialog__category">{project.category}</span>
            </span>
            {badge ? <span className="pdialog__badge">{badge}</span> : null}
          </div>

          <h3 className="pdialog__title" id="pdialog-title">
            {project.title}
          </h3>
          <p className="pdialog__overview">{project.overview}</p>

          <div className="pdialog__block">
            <h4 className="pdialog__label">{ui.technologiesUsed}</h4>
            <ul className="pdialog__tech">
              {project.tech.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="pdialog__block">
            <h4 className="pdialog__label">{ui.keyFeatures}</h4>
            <ul className="pdialog__features">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" size={13} strokeWidth={2.4} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="pdialog__value">
            <span className="pdialog__valueIcon">
              <Icon name="spark" size={16} />
            </span>
            <div>
              <h4 className="pdialog__label pdialog__label--inline">{ui.businessValue}</h4>
              <p>{project.value}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )

  return typeof document === 'undefined' ? dialog : createPortal(dialog, document.body)
}
