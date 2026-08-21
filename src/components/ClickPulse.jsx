import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * A bloom of light and two rings, spreading from wherever the page was clicked.
 *
 * Feedback for the click itself rather than for any particular control: it
 * fires anywhere, including over the dialog, so a press always registers even
 * where nothing visibly reacts to it.
 *
 * The two rings travel at different speeds and carry the two ends of the brand
 * gradient - violet close in, pink further out - so the click answers in the
 * same colours as the buttons it usually lands on.
 *
 * Each burst removes itself when its outermost ring finishes, so nothing
 * accumulates: no timers to clear, and no list that grows for the life of the
 * page. The guard on `animationName` matters - four animations end inside each
 * burst, and without it the first would tear the rest off mid-flight.
 */
const LAST_ANIMATION = 'pulse-far'

export default function ClickPulse() {
  const [pulses, setPulses] = useState([])
  const nextId = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const onDown = (event) => {
      // Primary button only: a right-click opens a menu, and a burst under it
      // would be noise rather than feedback.
      if (event.button !== 0) return
      const id = (nextId.current += 1)
      setPulses((list) => [...list, { id, x: event.clientX, y: event.clientY }])
    }

    window.addEventListener('pointerdown', onDown, { passive: true })
    return () => window.removeEventListener('pointerdown', onDown)
  }, [])

  const onEnd = useCallback((id) => (event) => {
    if (event.animationName !== LAST_ANIMATION) return
    setPulses((list) => list.filter((pulse) => pulse.id !== id))
  }, [])

  if (!pulses.length) return null

  return (
    <div className="pulses" aria-hidden="true">
      {pulses.map(({ id, x, y }) => (
        <span
          key={id}
          className="pulse"
          style={{ left: `${x}px`, top: `${y}px` }}
          onAnimationEnd={onEnd(id)}
        >
          <i className="pulse__bloom" />
          <i className="pulse__ring pulse__ring--near" />
          <i className="pulse__ring pulse__ring--far" />
        </span>
      ))}
    </div>
  )
}
