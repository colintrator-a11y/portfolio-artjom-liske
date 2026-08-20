import { useEffect, useRef } from 'react'

import { pointer } from '../hooks/usePointerDepth'

/**
 * A sheet of mesh rippling in depth behind the page.
 *
 * Properly three-dimensional rather than a scrolling texture: the grid is a
 * lattice of points in world space, each pushed along z by a sum of three
 * sine waves, and every point is projected through `scale = focal / (focal +
 * z)` before anything is drawn. A crest therefore comes towards the reader and
 * grows, a trough recedes and shrinks, and the whole sheet leans with the
 * pointer.
 *
 * The sheet faces the camera rather than lying under it. A plane at a fixed
 * height would converge on a horizon, which is a floor grid - a different and
 * much louder idea than a surface breathing behind glass.
 *
 * Written against a 2D canvas rather than pulled from a 3D library, which for
 * one rippling lattice would cost more than everything else on the site.
 */
/*
 * The focal length is long and the amplitude modest on purpose. A short lens
 * with deep waves funnels the lattice into the corners - the far rows shrink
 * so much that they leave the frame and pile up - and the sheet stops reading
 * as a surface. These numbers keep the projected scale inside roughly
 * 0.44..0.73, which is enough perspective to see depth and flat enough to
 * cover the frame evenly.
 */
const COLS = 46
const ROWS = 26
const HALF_W = 1560
const HALF_H = 1040
const FOCAL = 1100
const BASE_Z = 1000
const AMP = 205

export default function BackdropMesh() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || typeof window === 'undefined') return undefined

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return undefined

    const still = window.matchMedia?.('(prefers-reduced-motion: reduce)')

    /* Two stops rather than one flat colour, so the sheet carries the same
       violet-to-pink the buttons and headline do. */
    const THEMES = {
      light: ['124, 58, 237', '236, 72, 153'],
      dark: ['167, 139, 250', '244, 114, 182'],
    }
    let stops = THEMES.light
    let gradient = null

    const readTheme = () => {
      stops = document.documentElement.dataset.theme === 'dark' ? THEMES.dark : THEMES.light
      gradient = null
    }
    readTheme()
    const themeWatch = new MutationObserver(() => {
      readTheme()
      if (still?.matches) draw(0)
    })
    themeWatch.observe(document.documentElement, { attributeFilter: ['data-theme'] })

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let raf = 0
    let t = 0
    let camX = 0
    let camY = 0

    // One flat buffer rather than an array of objects: it is rewritten every
    // frame, and 836 short-lived objects per frame is work the collector then
    // has to undo.
    const sx = new Float32Array(COLS * ROWS)
    const sy = new Float32Array(COLS * ROWS)
    const depth = new Float32Array(COLS * ROWS)

    const stepX = (HALF_W * 2) / (COLS - 1)
    const stepY = (HALF_H * 2) / (ROWS - 1)

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      gradient = null
      if (still?.matches) draw(0)
    }

    function project(time) {
      for (let r = 0; r < ROWS; r += 1) {
        const wy = -HALF_H + r * stepY
        for (let c = 0; c < COLS; c += 1) {
          const wx = -HALF_W + c * stepX
          const wz =
            BASE_Z +
            AMP *
              (Math.sin(wx * 0.0031 + time) +
                Math.sin(wy * 0.0042 - time * 0.85) +
                Math.sin((wx + wy) * 0.0023 + time * 0.6))

          const scale = FOCAL / (FOCAL + wz)
          const i = r * COLS + c
          sx[i] = width / 2 + (wx - camX) * scale
          sy[i] = height / 2 + (wy - camY) * scale
          depth[i] = scale
        }
      }
    }

    /* One stroke per line rather than per segment: a gradient across the whole
       canvas gives every segment its colour, and the line's own depth sets how
       strongly it is drawn. */
    function strokeLine(points, midScale) {
      ctx.globalAlpha = Math.min(0.46, Math.max(0.05, (midScale - 0.4) * 1.5))
      ctx.lineWidth = Math.max(0.65, midScale * 1.5)
      ctx.beginPath()
      for (let n = 0; n < points.length; n += 2) {
        if (n === 0) ctx.moveTo(points[0], points[1])
        else ctx.lineTo(points[n], points[n + 1])
      }
      ctx.stroke()
    }

    const buf = new Float32Array(Math.max(COLS, ROWS) * 2)

    function draw(time) {
      project(time)

      if (!gradient) {
        gradient = ctx.createLinearGradient(0, 0, width, height)
        gradient.addColorStop(0, `rgb(${stops[0]})`)
        gradient.addColorStop(1, `rgb(${stops[1]})`)
      }

      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = gradient
      ctx.lineJoin = 'round'

      for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
          const i = r * COLS + c
          buf[c * 2] = sx[i]
          buf[c * 2 + 1] = sy[i]
        }
        strokeLine(buf.subarray(0, COLS * 2), depth[r * COLS + (COLS >> 1)])
      }

      for (let c = 0; c < COLS; c += 1) {
        for (let r = 0; r < ROWS; r += 1) {
          const i = r * COLS + c
          buf[r * 2] = sx[i]
          buf[r * 2 + 1] = sy[i]
        }
        strokeLine(buf.subarray(0, ROWS * 2), depth[(ROWS >> 1) * COLS + c])
      }

      ctx.globalAlpha = 1
    }

    function frame() {
      camX += (pointer.x * 90 - camX) * 0.04
      camY += (pointer.y * 60 - camY) * 0.04
      t += 0.0062
      draw(t)
      raf = requestAnimationFrame(frame)
    }

    resize()

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)

    // Someone who has asked for less motion still gets the sheet, held still,
    // rather than an empty rectangle where the texture should be.
    if (still?.matches) {
      draw(0)
      return () => {
        observer.disconnect()
        themeWatch.disconnect()
      }
    }

    raf = requestAnimationFrame(frame)
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) raf = requestAnimationFrame(frame)
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      themeWatch.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas className="backdrop__field" ref={ref} aria-hidden="true" />
}
