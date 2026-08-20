import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import Panel from './ui/Panel'
import ProjectCard from './ProjectCard'
import ProjectDialog from './ProjectDialog'
import Reveal from './ui/Reveal'
import './Projects.css'

/**
 * Every project on one horizontal rail, with the full record in a dialog.
 *
 * This replaced a wrapping grid that paged six at a time. A grid cannot fill a
 * single panel without either spilling past it or hiding most of the work
 * behind a "load more" the reader has to keep pressing; a rail holds all of it
 * in one row and lets the reader travel along it.
 *
 * Scrolling is the browser's own - `overflow-x` with scroll snapping - so a
 * trackpad, a touch screen, a scrollbar and Tab all move the rail without any
 * of it being reimplemented. A mouse has none of those, so it gets two things
 * of its own: the travel buttons, and dragging the rail directly.
 *
 * Projects carry several tags rather than one discipline: a headless Shopify
 * storefront is Shopify work, front-end work and API work at once, and it
 * should appear under all three.
 *
 * Client deliveries and reference builds sit on the same rail but reference
 * builds carry a marker, so a visitor is never led to read one as paid work.
 */
/* Far enough that a click with an unsteady hand is still a click. */
const DRAG_SLOP = 5

export default function Projects() {
  const { projects, ui, nav } = useContent()
  const [active, setActive] = useState('all')
  const [open, setOpen] = useState(null)
  const [at, setAt] = useState(0)
  const [ends, setEnds] = useState({ start: true, end: false })
  const rail = useRef(null)
  const drag = useRef({ active: false, moved: false, startX: 0, startLeft: 0, id: -1 })
  const swallowClick = useRef(false)

  const shown = useMemo(
    () => (active === 'all' ? projects.items : projects.items.filter((i) => i.tags?.includes(active))),
    [active, projects.items]
  )

  /*
   * Counting here rather than in the data keeps the buttons honest: a filter
   * shows exactly what it will yield, and one that yields nothing is dropped.
   * Ordered by that count, so the deepest bodies of work are read first. "All
   * work" is pinned to the front, being the way back rather than a category.
   */
  const filters = useMemo(
    () =>
      projects.filters
        .map(({ key, label }) => ({
          key,
          label,
          count: key === 'all' ? projects.items.length
                               : projects.items.filter((i) => i.tags?.includes(key)).length,
        }))
        .filter(({ count }) => count > 0)
        .sort((a, b) => {
          if (a.key === 'all') return -1
          if (b.key === 'all') return 1
          return b.count - a.count || a.label.localeCompare(b.label)
        }),
    [projects.filters, projects.items]
  )

  /*
   * Reads the rail's position back out of the DOM rather than tracking it in
   * state. The rail can be moved by the buttons, a trackpad, a touch drag, the
   * scrollbar or Tab moving focus to an offscreen card - only the element
   * itself knows where all of those left it.
   */
  const sync = useCallback(() => {
    const el = rail.current
    if (!el) return
    const card = el.firstElementChild
    const step = card ? card.getBoundingClientRect().width + 20 : 1
    setAt(Math.round(el.scrollLeft / step))
    // A fractional scrollWidth can leave a pixel or two unreachable, so the
    // end test needs slack or the forward button never disables.
    setEnds({
      start: el.scrollLeft < 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    })
  }, [])

  useEffect(() => {
    const el = rail.current
    if (!el) return undefined
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync, shown])

  // A new filter is a new rail, so it starts from the left again.
  useEffect(() => {
    rail.current?.scrollTo({ left: 0, behavior: 'auto' })
  }, [active])

  const step = useCallback((dir) => {
    const el = rail.current
    if (!el) return
    const card = el.firstElementChild
    const by = card ? card.getBoundingClientRect().width + 20 : el.clientWidth
    el.scrollBy({ left: dir * by, behavior: 'smooth' })
  }, [])

  /*
   * Drag to travel the rail.
   *
   * Mouse only: touch and pen already scroll it natively, with momentum and
   * rubber-banding this cannot reproduce, and taking those over would make
   * the rail worse on the devices it already works on.
   *
   * Nothing happens until the pointer has moved past the slop. Below that the
   * gesture is still a click, so pressing a card and releasing it opens the
   * card as it always did.
   */
  const onPointerDown = useCallback((event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return
    const el = rail.current
    if (!el) return
    drag.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      startLeft: el.scrollLeft,
      id: event.pointerId,
    }
  }, [])

  const onPointerMove = useCallback((event) => {
    const d = drag.current
    const el = rail.current
    if (!d.active || !el) return

    const dx = event.clientX - d.startX
    if (!d.moved) {
      if (Math.abs(dx) < DRAG_SLOP) return
      d.moved = true
      // Captured only once the gesture is definitely a drag, so a plain click
      // is never retargeted away from the card underneath it. Capture is what
      // lets the drag continue past the edge of the rail.
      el.setPointerCapture(d.id)
      // Snapping fights a drag in progress; it comes back on release and
      // settles the rail onto the nearest card.
      el.classList.add('is-dragging')
    }
    el.scrollLeft = d.startLeft - dx
  }, [])

  const endDrag = useCallback(() => {
    const d = drag.current
    const el = rail.current
    if (!d.active) return
    d.active = false
    if (!d.moved) return

    el?.classList.remove('is-dragging')
    if (el?.hasPointerCapture?.(d.id)) el.releasePointerCapture(d.id)

    /*
     * A drag that happens to end on top of a card must not also open it.
     * `click` is dispatched right after `pointerup`, before any macrotask, so
     * a flag cleared on a zero timeout is up for exactly the one click this
     * gesture produces and down again for the next real one.
     */
    swallowClick.current = true
    setTimeout(() => {
      swallowClick.current = false
    }, 0)
  }, [])

  const onClickCapture = useCallback((event) => {
    if (!swallowClick.current) return
    event.preventDefault()
    event.stopPropagation()
  }, [])

  const close = useCallback(() => setOpen(null), [])

  return (
    <Panel
      id="projects"
      label={nav.find((item) => item.id === 'projects')?.label}
      labelledBy="projects-title"
      className="panel--work"
    >
      <div className="work__head">
        <Reveal className="work__intro">
          <h2 className="section__title" id="projects-title">
            {projects.heading}
          </h2>
          <p className="section__intro">{projects.intro}</p>
        </Reveal>

        <Reveal className="work__nav" delay={80}>
          <span className="work__count" aria-live="polite">
            <b>{String(Math.min(at + 1, shown.length)).padStart(2, '0')}</b>
            <i>/</i>
            {String(shown.length).padStart(2, '0')}
          </span>

          <span className="work__arrows">
            <button
              type="button"
              className="work__arrow work__arrow--back"
              onClick={() => step(-1)}
              disabled={ends.start}
              aria-label={ui.prevWork}
            >
              <Icon name="arrowRight" size={17} strokeWidth={2} />
            </button>
            <button
              type="button"
              className="work__arrow"
              onClick={() => step(1)}
              disabled={ends.end}
              aria-label={ui.nextWork}
            >
              <Icon name="arrowRight" size={17} strokeWidth={2} />
            </button>
          </span>
        </Reveal>
      </div>

      <Reveal className="work__filters" role="group" aria-label={ui.filterLabel} delay={120}>
        {filters.map(({ key, label, count }) => (
          <button
            key={key}
            type="button"
            className={`filter ${active === key ? 'is-active' : ''}`.trim()}
            onClick={() => setActive(key)}
            aria-pressed={active === key}
          >
            {label}
            <span className="filter__count">{count}</span>
          </button>
        ))}
      </Reveal>

      {/* Keyed on the filter so the rail replays its entrance on every change. */}
      <div
        className="work__rail"
        ref={rail}
        key={active}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        /* The cards carry images, and an image is natively draggable: without
           this the browser starts its own drag and the rail never moves. */
        onDragStart={(event) => event.preventDefault()}
      >
        {shown.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            delayIndex={Math.min(index, 5)}
            label={project.reference ? ui.exampleWord : ui.projectWord}
            badge={project.badge}
            ui={ui}
            onOpen={(item) => setOpen({ item, index })}
            eager={index < 3}
          />
        ))}
      </div>

      {!shown.length ? <p className="projects__empty">{ui.noMatches}</p> : null}

      <Reveal className="examples__note">
        <Icon name="shield" size={16} />
        <span>{projects.note}</span>
      </Reveal>

      {open ? (
        <ProjectDialog
          project={open.item}
          label={open.item.reference ? ui.exampleWord : ui.projectWord}
          index={open.index}
          badge={open.item.badge}
          ui={ui}
          onClose={close}
        />
      ) : null}
    </Panel>
  )
}
