import { useEffect } from 'react'

/**
 * The live pointer, -1..1 on each axis. Canvas layers read this directly:
 * asking the DOM for the custom property every frame would force a style
 * recalculation sixty times a second, which is the one cost this effect
 * cannot carry.
 */
export const pointer = { x: 0, y: 0 }

/**
 * Publishes the pointer as `--px` / `--py` on the document root, each in the
 * range -1..1, so any layer can respond to it in CSS alone rather than every
 * component wiring up its own listener.
 *
 * Skipped entirely for coarse pointers - a finger already occludes what it
 * would parallax - and for anyone who has asked for reduced motion.
 */
export default function usePointerDepth() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined
    const fine = window.matchMedia('(pointer: fine)')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || still.matches) return undefined

    const root = document.documentElement
    let frame = 0
    let x = 0
    let y = 0
    let px = 0
    let py = 0

    // Writes are coalesced into one frame: pointermove fires far more often
    // than the screen refreshes, and every write invalidates style.
    const write = () => {
      frame = 0
      root.style.setProperty('--px', x.toFixed(3))
      root.style.setProperty('--py', y.toFixed(3))
      // Pixel coordinates too, so a layer can sit exactly under the pointer
      // without a script moving it frame by frame.
      root.style.setProperty('--pointer-x', `${px}px`)
      root.style.setProperty('--pointer-y', `${py}px`)
    }

    const onMove = (event) => {
      px = event.clientX
      py = event.clientY
      x = (px / window.innerWidth) * 2 - 1
      y = (py / window.innerHeight) * 2 - 1
      pointer.x = x
      pointer.y = y
      if (!frame) frame = requestAnimationFrame(write)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
      pointer.x = 0
      pointer.y = 0
      root.style.removeProperty('--px')
      root.style.removeProperty('--py')
      root.style.removeProperty('--pointer-x')
      root.style.removeProperty('--pointer-y')
    }
  }, [])
}
