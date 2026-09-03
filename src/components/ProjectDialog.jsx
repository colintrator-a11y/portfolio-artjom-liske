import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import Icon from './ui/Icon'
import ProjectLinks from './ProjectLinks'

const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'

/**
 * The full project record, opened from a card.
 *
 * Everything the old full-width rows carried lives here - overview, stack,
 * features and business value - so shortening the page cost no content.
 *
 * The card shows one image; this shows every screenshot the project has. One
 * is displayed at a time with a strip of thumbnails under it, rather than the
 * lot stacked vertically: a project with six shots would otherwise push its
 * own description a screen and a half down the dialog.
 *
 * A shot that came from a GIF plays here, and only here. The grid stays still:
 * an animated cover is the heaviest file in the project by an order of
 * magnitude, and six of them looping at once is not a grid anyone can read.
 * The still is what a visitor who has asked for less motion gets instead -
 * `<picture>` picks it by media query, so nothing has to be scripted.
 *
 * Modal behaviour is done properly rather than approximately: the page behind
 * cannot scroll, Tab is trapped inside, Escape closes, and focus returns to
 * the card that opened it. A dialog that loses the keyboard is worse than no
 * dialog at all.
 *
 * Clicking the image opens it full-screen. That is a second layer over a
 * modal, which is the part worth being careful about: Escape closes the
 * preview before the dialog, Tab is trapped in whichever of the two is on
 * top, and focus goes back to the image that opened it.
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
  const zoomRef = useRef(null)
  const zoomOpenerRef = useRef(null)
  const zoomCloseRef = useRef(null)
  const [shot, setShot] = useState(0)
  const [zoom, setZoom] = useState(false)

  // The dialog mounts fresh for each project, so the gallery starts at the
  // cover without anything having to reset it.
  const gallery = project.gallery ?? [{ src: project.image, size: project.imageSize }]
  const current = gallery[Math.min(shot, gallery.length - 1)]

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

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPad
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [])

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        // The preview goes first: Escape over a stack closes the top of it,
        // not everything at once.
        if (zoom) setZoom(false)
        else onClose()
        return
      }
      if (event.key !== 'Tab') return

      // Whichever layer is on top owns the keyboard.
      const scope = zoom ? zoomRef.current : panelRef.current
      const items = [...(scope?.querySelectorAll(FOCUSABLE) ?? [])]
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
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose, zoom])

  // Focus follows the preview in and back out again.
  useEffect(() => {
    if (zoom) zoomCloseRef.current?.focus()
    else zoomOpenerRef.current?.focus()
  }, [zoom])

  // A different screenshot means the preview should show that one, not
  // whatever was open when the thumbnail was pressed.
  useEffect(() => setZoom(false), [shot])

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
            <button
              type="button"
              className="pdialog__zoom"
              onClick={() => setZoom(true)}
              aria-label={`${ui.enlarge} — ${ui.screenshot} ${shot + 1}`}
              ref={zoomOpenerRef}
            >
              <picture>
                {current.anim ? (
                  <source srcSet={current.src} media="(prefers-reduced-motion: reduce)" />
                ) : null}
                <img
                  className="pdialog__shot"
                  src={current.anim ?? current.src}
                  alt={`${ui.screenshot} ${shot + 1} — ${project.title}`}
                  width={(current.anim ? current.animSize : current.size)?.[0]}
                  height={(current.anim ? current.animSize : current.size)?.[1]}
                />
              </picture>
              <span className="pdialog__zoomHint" aria-hidden="true">
                <Icon name="expand" size={15} strokeWidth={2} />
              </span>
            </button>

            {/* Only worth drawing when there is more than one to choose from. */}
            {gallery.length > 1 ? (
              <div className="pdialog__thumbs" role="group" aria-label={ui.screenshot}>
                {gallery.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    className={`pdialog__thumb ${i === shot ? 'is-active' : ''}`.trim()}
                    aria-label={`${ui.screenshot} ${i + 1}`}
                    aria-current={i === shot ? 'true' : undefined}
                    onClick={() => setShot(i)}
                  >
                    <img src={item.src} alt="" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            ) : null}
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

          {project.links?.length ? (
            <div className="pdialog__block">
              <ProjectLinks links={project.links} ui={ui} className="plinks--dialog" />
            </div>
          ) : null}

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

  /*
   * A sibling of the dialog rather than a child of it, so the dialog's
   * click-the-backdrop-to-close never fires from a click inside the preview.
   */
  const preview = zoom ? (
    <div
      className="plightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${ui.screenshot} ${shot + 1} — ${project.title}`}
      ref={zoomRef}
      onMouseDown={(event) => event.target === event.currentTarget && setZoom(false)}
    >
      <button
        type="button"
        className="plightbox__close"
        onClick={() => setZoom(false)}
        aria-label={ui.closeDetails}
        ref={zoomCloseRef}
      >
        <Icon name="close" size={18} strokeWidth={2.2} />
      </button>

      <picture>
        {current.anim ? (
          <source srcSet={current.src} media="(prefers-reduced-motion: reduce)" />
        ) : null}
        <img
          className="plightbox__img"
          src={current.anim ?? current.src}
          alt={`${ui.screenshot} ${shot + 1} — ${project.title}`}
        />
      </picture>
    </div>
  ) : null

  const layers = (
    <>
      {dialog}
      {preview}
    </>
  )

  return typeof document === 'undefined' ? layers : createPortal(layers, document.body)
}
