import { useContent } from '../i18n/LanguageContext'
import useScrollSpy from '../hooks/useScrollSpy'
import scrollToSection from '../utils/scrollToSection'
import './PanelRail.css'

/**
 * The page position, as a column of marks down the right edge.
 *
 * With every section filling the viewport, the old row of links no longer
 * describes where the reader is - a panel deck wants a position indicator, so
 * that is what this is. Each mark is a real button carrying the section name,
 * so it works as navigation for a pointer, a keyboard and a screen reader
 * alike; the name is revealed on hover and focus rather than always drawn,
 * because the rail has to stay out of the way of the panel behind it.
 *
 * Hidden below the tablet breakpoint, where the panels stop snapping and the
 * page reads as an ordinary document with the drawer for navigation.
 */
export default function PanelRail() {
  const { nav, ui } = useContent()
  const active = useScrollSpy(nav.map((item) => item.id))

  return (
    <nav className="rail" aria-label={ui.primaryNav}>
      <ul>
        {nav.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              className={`rail__mark ${active === item.id ? 'is-active' : ''}`.trim()}
              aria-current={active === item.id ? 'true' : undefined}
              onClick={() => scrollToSection(item.id)}
            >
              <span className="rail__name">{item.label}</span>
              <span className="rail__num">{String(index + 1).padStart(2, '0')}</span>
              <span className="rail__dot" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
