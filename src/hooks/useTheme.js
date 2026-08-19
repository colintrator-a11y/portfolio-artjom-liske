import { useCallback, useEffect, useState } from 'react'

const KEY = 'theme'
const DARK = 'dark'
const LIGHT = 'light'

/** What the boot script in index.html already stamped on the document. */
function current() {
  if (typeof document === 'undefined') return LIGHT
  return document.documentElement.dataset.theme === DARK ? DARK : LIGHT
}

/**
 * Reads and writes the theme the inline boot script has already applied.
 *
 * The document is the single source of truth rather than this state: the boot
 * script sets it before React exists, precisely so the page never paints the
 * wrong theme first, and duplicating the decision here would let the two drift.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(current)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    // Keep the browser's own chrome - address bar, task switcher - in step.
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === DARK ? '#0b1120' : '#faf9f6')

    try {
      localStorage.setItem(KEY, theme)
    } catch {
      // Private browsing refuses storage; the choice still holds for this visit.
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === DARK ? LIGHT : DARK)), [])
  return [theme, toggle]
}
