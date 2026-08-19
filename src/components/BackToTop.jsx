import { useEffect, useState } from 'react'
import Icon from './ui/Icon'
import { useContent } from '../i18n/LanguageContext'

export default function BackToTop() {
  const { ui } = useContent()
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={`to-top ${shown ? 'is-shown' : ''}`.trim()}
      onClick={toTop}
      aria-label={ui.backToTop}
      tabIndex={shown ? 0 : -1}
    >
      <Icon name="arrowUp" strokeWidth={1.9} />
    </button>
  )
}
