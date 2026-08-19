import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { buildContent } from '../data/content'
import { defaultLanguage, languages, translations } from './translations'

const STORAGE_KEY = 'al-portfolio-lang'

const LanguageContext = createContext(null)

function isSupported(code) {
  return Object.prototype.hasOwnProperty.call(translations, code)
}

/**
 * Resolves the initial language: a previous choice wins, otherwise the
 * browser's preferred language if we translate it, otherwise English.
 *
 * English rather than German is the fallback because the site is aimed at
 * clients in several countries; a German visitor is picked up by detection.
 */
function detectLanguage() {
  if (typeof window === 'undefined') return defaultLanguage

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && isSupported(stored)) return stored
  } catch {
    // Private browsing can throw on storage access; fall through to detection.
  }

  const preferred = window.navigator?.languages ?? [window.navigator?.language]
  for (const tag of preferred) {
    const base = String(tag || '').toLowerCase().split('-')[0]
    if (isSupported(base)) return base
  }

  return defaultLanguage
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(defaultLanguage)

  // Detection runs after mount so the first render matches on every client.
  useEffect(() => {
    setLangState(detectLanguage())
  }, [])

  const setLang = useCallback((code) => {
    if (!isSupported(code)) return
    setLangState(code)
    try {
      window.localStorage.setItem(STORAGE_KEY, code)
    } catch {
      // Storing the preference is a convenience, not a requirement.
    }
  }, [])

  const content = useMemo(() => buildContent(lang), [lang])

  useEffect(() => {
    document.documentElement.lang = content.htmlLang
  }, [content.htmlLang])

  const value = useMemo(
    () => ({ lang, setLang, languages, content }),
    [lang, setLang, content]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside a LanguageProvider')
  return ctx
}

/** Convenience accessor for the translated content tree. */
export function useContent() {
  return useLanguage().content
}
