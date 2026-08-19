import { useEffect, useRef } from 'react'

import { pointer } from '../hooks/usePointerDepth'

/**
 * Wireframe solids turning as they drift past the camera.
 *
 * Properly three-dimensional: each solid holds its own rotation about all
 * three axes, every vertex is rotated by that before being projected through
 * `scale = focal / (focal + z)`, and edges are drawn between the projected
 * points. Near solids are therefore larger, brighter and sweep past faster
 * than distant ones, and the whole field leans with the pointer.
 *
 * Written against a 2D canvas rather than pulled from a 3D library, which for
 * fourteen wireframes would cost more than everything else on the site.
 */
const COUNT = 18
const FOCAL = 640
const DEPTH = 2400
const SPEED = 0.42

/* Two solids, as unit vertices plus the edges between them. */
const CUBE = {
  points: [
    [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
    [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
  ],
  edges: [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ],
}

const OCTA = {
  points: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
  edges: [
    [0, 2], [2, 1], [1, 3], [3, 0],
    [0, 4], [2, 4], [1, 4], [3, 4],
    [0, 5], [2, 5], [1, 5], [3, 5],
  ],
}

export default function BackdropSolids() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || typeof window === 'undefined') return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return undefined

    let line = '29, 78, 216'
    const readTheme = () => {
      line = document.documentElement.dataset.theme === 'dark' ? '125, 180, 252' : '29, 78, 216'
    }
    readTheme()
    const themeWatch = new MutationObserver(readTheme)
    themeWatch.observe(document.documentElement, { attributeFilter: ['data-theme'] })

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let raf = 0
    let camX = 0
    let camY = 0

    const spawn = (z) => ({
      shape: Math.random() < 0.55 ? CUBE : OCTA,
      x: (Math.random() - 0.5) * 2000,
      y: (Math.random() - 0.5) * 1300,
      z,
      size: 52 + Math.random() * 96,
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      rz: Math.random() * Math.PI,
      // Slow enough that a shape never looks like it is spinning at you.
      vx: (Math.random() - 0.5) * 0.0055,
      vy: (Math.random() - 0.5) * 0.0055,
      vz: (Math.random() - 0.5) * 0.003,
    })

    const solids = Array.from({ length: COUNT }, () => spawn(Math.random() * DEPTH))

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function frame() {
      camX += (pointer.x * 120 - camX) * 0.035
      camY += (pointer.y * 80 - camY) * 0.035
      ctx.clearRect(0, 0, width, height)

      // Far first, so nearer wireframes lie over the ones behind them.
      solids.sort((a, b) => b.z - a.z)

      for (const solid of solids) {
        solid.z -= SPEED
        solid.rx += solid.vx
        solid.ry += solid.vy
        solid.rz += solid.vz
        if (solid.z < 60) Object.assign(solid, spawn(DEPTH))

        const sinX = Math.sin(solid.rx)
        const cosX = Math.cos(solid.rx)
        const sinY = Math.sin(solid.ry)
        const cosY = Math.cos(solid.ry)
        const sinZ = Math.sin(solid.rz)
        const cosZ = Math.cos(solid.rz)

        const screen = solid.shape.points.map(([px, py, pz]) => {
          // Rotate about X, then Y, then Z, then place and project.
          let x = px * solid.size
          let y = py * solid.size
          let z = pz * solid.size

          let ty = y * cosX - z * sinX
          let tz = y * sinX + z * cosX
          y = ty
          z = tz

          let tx = x * cosY + z * sinY
          tz = -x * sinY + z * cosY
          x = tx
          z = tz

          tx = x * cosZ - y * sinZ
          ty = x * sinZ + y * cosZ
          x = tx
          y = ty

          const wz = z + solid.z
          const scale = FOCAL / (FOCAL + wz)
          return {
            x: width / 2 + (x + solid.x - camX) * scale,
            y: height / 2 + (y + solid.y - camY) * scale,
          }
        })

        const near = FOCAL / (FOCAL + solid.z)
        ctx.strokeStyle = `rgba(${line}, ${Math.min(0.46, near * 0.7).toFixed(3)})`
        ctx.lineWidth = Math.max(0.7, near * 2)
        ctx.beginPath()
        for (const [a, b] of solid.shape.edges) {
          ctx.moveTo(screen[a].x, screen[a].y)
          ctx.lineTo(screen[b].x, screen[b].y)
        }
        ctx.stroke()
      }

      raf = requestAnimationFrame(frame)
    }

    resize()
    raf = requestAnimationFrame(frame)

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
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
