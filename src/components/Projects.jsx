import { useCallback, useEffect, useMemo, useState } from 'react'

import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import Panel from './ui/Panel'
import ProjectCard from './ProjectCard'
import ProjectDialog from './ProjectDialog'
import Reveal from './ui/Reveal'
import './Projects.css'

/**
 * The work as a paged grid, with the full record in a dialog.
 *
 * Six to a page in two rows, and a pager underneath once there are more than
 * six to show. This replaced a horizontal rail: a rail holds everything in one
 * row, but it puts most of the work off the side of the screen where a visitor
 * has to go looking for it. Two rows show six at once and say plainly how many
 * more there are.
 *
 * Paging rather than scrolling also means the panel has a fixed number of
 * cards in it, so its height stops depending on how much work there is.
 *
 * Projects carry several tags rather than one discipline: a headless Shopify
 * storefront is Shopify work, front-end work and API work at once, and it
 * should appear under all three.
 *
 * Client deliveries and reference builds sit in the same grid but reference
 * builds carry a marker, so a visitor is never led to read one as paid work.
 */

/* Two rows of three. The pager only appears once there is a second page. */
const PER_PAGE = 6

export default function Projects() {
  const { projects, ui, nav } = useContent()
  const [active, setActive] = useState('all')
  const [open, setOpen] = useState(null)
  const [page, setPage] = useState(0)

  const shown = useMemo(
    () => (active === 'all' ? projects.items : projects.items.filter((i) => i.tags?.includes(active))),
    [active, projects.items]
  )

  const pages = Math.max(1, Math.ceil(shown.length / PER_PAGE))

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

  // A new filter is a new set, so it starts at the first page again.
  useEffect(() => setPage(0), [active])

  /*
   * A filter can leave fewer pages than the one being read - going from every
   * project to a filter with four of them while on page three. Clamping here
   * rather than only on the filter change also covers the list shrinking for
   * any other reason.
   */
  useEffect(() => {
    setPage((p) => Math.min(p, pages - 1))
  }, [pages])

  const visible = shown.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)
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

        {shown.length ? (
          <Reveal className="work__nav" delay={80}>
            <span className="work__count" aria-live="polite">
              <b>{String(Math.min(page * PER_PAGE + 1, shown.length)).padStart(2, '0')}</b>
              <i>–</i>
              <b>{String(Math.min((page + 1) * PER_PAGE, shown.length)).padStart(2, '0')}</b>
              <i>/</i>
              {String(shown.length).padStart(2, '0')}
            </span>
          </Reveal>
        ) : null}
      </div>

      {filters.length ? (
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
      ) : null}

      {/* Keyed on filter and page so the grid replays its entrance on each. */}
      <div className="work__grid" key={`${active}-${page}`}>
        {visible.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={page * PER_PAGE + index}
            delayIndex={index}
            label={project.reference ? ui.exampleWord : ui.projectWord}
            badge={project.badge}
            ui={ui}
            onOpen={(item) => setOpen({ item, index: page * PER_PAGE + index })}
            eager={page === 0 && index < 3}
          />
        ))}
      </div>

      {!shown.length ? <p className="projects__empty">{ui.noMatches}</p> : null}

      {pages > 1 ? (
        <Reveal className="pager" role="group" aria-label={ui.page}>
          <button
            type="button"
            className="pager__arrow pager__arrow--back"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label={ui.prevWork}
          >
            <Icon name="arrowRight" size={16} strokeWidth={2} />
          </button>

          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`pager__page ${i === page ? 'is-active' : ''}`.trim()}
              onClick={() => setPage(i)}
              aria-label={`${ui.page} ${i + 1}`}
              aria-current={i === page ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}

          <button
            type="button"
            className="pager__arrow"
            onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
            disabled={page === pages - 1}
            aria-label={ui.nextWork}
          >
            <Icon name="arrowRight" size={16} strokeWidth={2} />
          </button>
        </Reveal>
      ) : null}

      {/* The note disclaims reference builds, so it only belongs on a grid
          that actually carries one. */}
      {projects.items.some((item) => item.reference) ? (
        <Reveal className="examples__note">
          <Icon name="shield" size={16} />
          <span>{projects.note}</span>
        </Reveal>
      ) : null}

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
