import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * A ring that expands from wherever the page was clicked.
 *
 * Feedback for the click itself rather than for any particular control: it
 * fires anywhere, including over the dialog, so a press always registers even
 * where nothing visibly reacts to it.
 *
 * Each ring removes itself when its animation ends, so nothing accumulates -
 * no timers to clear, and no list that grows for the life of the page.
 */
export default function ClickPulse() {
  const [pulses, setPulses] = useState([])
  const nextId = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const onDown = (event) => {
      // Primary button only: a right-click opens a menu, and a ring under it
      // would be noise rather than feedback.
      if (event.button !== 0) return
      const id = (nextId.current += 1)
      setPulses((list) => [...list, { id, x: event.clientX, y: event.clientY }])
    }

    window.addEventListener('pointerdown', onDown, { passive: true })
    return () => window.removeEventListener('pointerdown', onDown)
  }, [])

  const drop = useCallback((id) => {
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
          onAnimationEnd={() => drop(id)}
        />
      ))}
    </div>
  )
}
