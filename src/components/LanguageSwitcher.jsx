import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import './LanguageSwitcher.css'

/**
 * Language menu. Renders as a dropdown in the navigation bar and, with
 * `variant="inline"`, as a plain row of buttons inside the mobile drawer.
 */
export default function LanguageSwitcher({ variant = 'menu' }) {
  const { lang, setLang, languages, content } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  const current = languages.find((item) => item.code === lang) ?? languages[0]

  useEffect(() => {
    if (!open) return undefined

    const onPointer = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) setOpen(false)
    }
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (variant === 'inline') {
    return (
      <div className="langInline" role="group" aria-label={content.ui.chooseLanguage}>
        <span className="langInline__label">{content.ui.languageLabel}</span>
        <div className="langInline__options">
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              lang={item.code}
              className={`langInline__btn ${item.code === lang ? 'is-active' : ''}`.trim()}
              aria-pressed={item.code === lang}
              onClick={() => setLang(item.code)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="lang" ref={wrapRef}>
      <button
        type="button"
        className="lang__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${content.ui.languageLabel}: ${current.label}`}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name="globe" size={16} />
        <span className="lang__code">{current.short}</span>
        <Icon name="chevronDown" size={13} className={`lang__caret ${open ? 'is-open' : ''}`.trim()} />
      </button>

      <ul className={`lang__menu ${open ? 'is-open' : ''}`.trim()} role="listbox" aria-label={content.ui.chooseLanguage}>
        {languages.map((item) => (
          <li key={item.code} role="option" aria-selected={item.code === lang}>
            <button
              type="button"
              lang={item.code}
              className={`lang__option ${item.code === lang ? 'is-active' : ''}`.trim()}
              tabIndex={open ? 0 : -1}
              onClick={() => {
                setLang(item.code)
                setOpen(false)
              }}
            >
              <span className="lang__optionShort">{item.short}</span>
              {item.label}
              {item.code === lang ? <Icon name="check" size={13} strokeWidth={2.4} /> : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
