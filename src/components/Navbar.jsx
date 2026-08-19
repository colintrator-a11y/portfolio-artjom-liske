import { useEffect, useMemo, useState } from 'react'
import { useContent } from '../i18n/LanguageContext'
import useScrollSpy from '../hooks/useScrollSpy'
import scrollToSection from '../utils/scrollToSection'
import Icon from './ui/Icon'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

export default function Navbar() {
  const { nav, profile, hero, ui } = useContent()
  const ids = useMemo(() => nav.map((item) => item.id), [nav])
  const active = useScrollSpy(ids)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (id) => (event) => {
    event.preventDefault()
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`.trim()}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#home" onClick={go('home')}>
          <img
            className="nav__mark"
            src={profile.avatar}
            alt=""
            width="172"
            height="172"
            decoding="async"
          />
          <span className="nav__brandText">
            <strong>{profile.shortName}</strong>
            <small>{profile.navRole}</small>
          </span>
        </a>

        <nav className="nav__links" aria-label={ui.primaryNav}>
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${active === item.id ? 'is-active' : ''}`.trim()}
              aria-current={active === item.id ? 'page' : undefined}
              onClick={go(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <LanguageSwitcher />

          <a className="btn btn--primary nav__cta" href="#projects" onClick={go('projects')}>
            {hero.primaryCta.label}
            <Icon name="arrowRight" className="btn__icon" />
          </a>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`nav__drawer ${open ? 'is-open' : ''}`.trim()}
        aria-hidden={!open}
      >
        <nav className="nav__drawerLinks" aria-label={ui.mobileNav}>
          {nav.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__drawerLink ${active === item.id ? 'is-active' : ''}`.trim()}
              style={{ transitionDelay: open ? `${60 + index * 40}ms` : '0ms' }}
              tabIndex={open ? 0 : -1}
              onClick={go(item.id)}
            >
              <span className="nav__drawerIndex">{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}

          <ThemeToggle variant="inline" />
          <LanguageSwitcher variant="inline" />
        </nav>
      </div>

      <button
        type="button"
        className={`nav__scrim ${open ? 'is-open' : ''}`.trim()}
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
    </header>
  )
}
