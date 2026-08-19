/**
 * Smoothly scrolls a section into view, accounting for the fixed navigation bar
 * and honouring the user's reduced-motion preference.
 */
export default function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return

  const navHeight =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h').replace('px', ''),
      10
    ) || 74

  const prefersReduced =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12

  window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' })
}
