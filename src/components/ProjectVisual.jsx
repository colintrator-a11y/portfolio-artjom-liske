/**
 * Inline-SVG scenes for entries with no published screenshot - the reference
 * builds, and the one client project whose screenshot is not on file. Every
 * other client project renders its real screenshot instead.
 *
 * The Shopify, mobile, PHP and WordPress scenes live in `ProjectScenes.jsx`
 * and are merged into the scene map below; both files share one palette so the
 * whole set reads as the same product family.
 */

import { extraScenes } from './ProjectScenes'
import { moreScenes } from './ProjectScenesMore'
import { P, Photo } from './visualPhotos'
import { C, H, W } from './visualTokens'

function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-brand`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={C.accent} />
        <stop offset="100%" stopColor={C.sky} />
      </linearGradient>
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#fbfcfe" />
      </linearGradient>
    </defs>
  )
}

function BrowserChrome({ id, label }) {
  return (
    <g>
      <rect x="0" y="0" width={W} height={H} rx="14" fill={`url(#${id}-bg)`} />
      <rect x="0.5" y="0.5" width={W - 1} height={H - 1} rx="13.5" fill="none" stroke={C.border} />
      <path d={`M14 0 H${W - 14} A14 14 0 0 1 ${W} 14 V44 H0 V14 A14 14 0 0 1 14 0 Z`} fill={C.chrome} />
      <line x1="0" y1="44" x2={W} y2="44" stroke={C.border} />
      <circle cx="22" cy="22" r="4.5" fill="#e5e8ee" />
      <circle cx="38" cy="22" r="4.5" fill="#e5e8ee" />
      <circle cx="54" cy="22" r="4.5" fill="#e5e8ee" />
      <rect x="76" y="12" width="230" height="20" rx="10" fill={C.bg} stroke={C.border} />
      <text x="90" y="26" fill={C.muted} fontFamily="monospace" fontSize="10">
        {label}
      </text>
    </g>
  )
}

/* The job itself: source on top, run output below. */
function PythonAutomation() {
  const CW = 5.32
  const X0 = 92
  const code = [
    [['import', 'kw'], [' os, requests, schedule', 'pl']],
    [['import', 'kw'], [' pandas ', 'pl'], ['as', 'kw'], [' pd', 'pl']],
    [['from', 'kw'], [' datetime ', 'pl'], ['import', 'kw'], [' date', 'pl']],
    [],
    [['API ', 'var'], ['= ', 'op'], ['os', 'var'], ['.environ[', 'pl'], ['"ORDERS_API_URL"', 'str'], [']', 'pl']],
    [],
    [['def', 'kw'], [' ', 'pl'], ['fetch_orders', 'fn'], ['(day: date) -> pd.DataFrame:', 'pl']],
    [['    r ', 'pl'], ['= ', 'op'], ['requests', 'var'], ['.get(API, params={', 'pl'], ['"date"', 'str'], [': day}, timeout=', 'pl'], ['30', 'num'], [')', 'pl']],
    [['    r.raise_for_status()', 'pl']],
    [['    ', 'pl'], ['return', 'kw'], [' pd.DataFrame(r.json()[', 'pl'], ['"data"', 'str'], ['])', 'pl']],
    [],
    [['def', 'kw'], [' ', 'pl'], ['run', 'fn'], ['() -> ', 'pl'], ['None', 'kw'], [':', 'pl']],
    [['    orders ', 'pl'], ['= ', 'op'], ['fetch_orders', 'fn'], ['(date.today())', 'pl']],
    [['    clean ', 'pl'], ['= ', 'op'], ['orders.dropna(subset=[', 'pl'], ['"sku"', 'str'], [', ', 'pl'], ['"total"', 'str'], ['])', 'pl']],
    [['    warehouse.upsert(clean)', 'pl'], ['  ', 'pl'], ['# single source of truth', 'cm']],
    [['    notify.email(', 'pl'], ['"daily-report"', 'str'], [', clean.describe())', 'pl']],
  ]
  const colors = {
    kw: '#c792ea',
    fn: '#82aaff',
    str: '#c3e88d',
    num: '#f78c6c',
    op: '#89ddff',
    var: '#eeffff',
    pl: '#a6accd',
    cm: '#5f7e97',
  }

  const log = [
    ['09:00:01', 'INFO', 'job.start sync_daily', '#82aaff'],
    ['09:00:04', 'INFO', 'fetched 1,284 orders from the orders API', '#a6accd'],
    ['09:00:15', 'INFO', 'validated + normalised → 1,596 rows', '#a6accd'],
    ['09:00:21', 'INFO', 'warehouse.upsert ok', '#c3e88d'],
    ['09:00:23', 'INFO', 'daily report emailed to the operations team', '#c3e88d'],
  ]

  return (
    <>
      <rect x="0" y="0" width="640" height="400" rx="14" fill="#0f172a" />
      <rect x="0.5" y="0.5" width="639" height="399" rx="13.5" fill="none" stroke="#1e293b" />

      {/* Title bar */}
      <path d="M14 0 H626 A14 14 0 0 1 640 14 V34 H0 V14 A14 14 0 0 1 14 0 Z" fill="#111c33" />
      <circle cx="20" cy="17" r="4" fill="#f87171" />
      <circle cx="34" cy="17" r="4" fill="#fbbf24" />
      <circle cx="48" cy="17" r="4" fill="#34d399" />
      <rect x="68" y="4" width="108" height="30" fill="#0f172a" />
      <text x="82" y="23" fill="#e2e8f0" fontSize="9" fontFamily="monospace">
        sync_daily.py
      </text>
      <text x="192" y="23" fill="#475569" fontSize="9" fontFamily="monospace">
        config.yml
      </text>

      {/* File tree */}
      <rect x="0" y="34" width="80" height="366" fill="#0c1424" />
      <text x="14" y="54" fill="#475569" fontSize="7.5" fontFamily="monospace" letterSpacing="0.08em">
        AUTOMATION
      </text>
      {['jobs/', '  sync_daily.py', '  invoices.py', 'lib/', '  warehouse.py', '  notify.py', 'config.yml'].map((f, i) => (
        <text
          key={f}
          x="14"
          y={72 + i * 15}
          fill={f.includes('sync_daily') ? '#82aaff' : '#64748b'}
          fontSize="7.6"
          fontFamily="monospace"
        >
          {f}
        </text>
      ))}

      {/* Code */}
      {code.map((line, i) => (
        <g key={i}>
          <text x="76" y={54 + i * 14.4} fill="#334155" fontSize="8.4" fontFamily="monospace" textAnchor="end">
            {i + 1}
          </text>
          {line.reduce(
            (acc, [text, kind]) => {
              acc.nodes.push(
                <text
                  key={acc.chars}
                  x={X0 + acc.chars * CW}
                  y={54 + i * 14.4}
                  fill={colors[kind]}
                  fontSize="8.8"
                  fontFamily="monospace"
                  xmlSpace="preserve"
                >
                  {text}
                </text>
              )
              acc.chars += text.length
              return acc
            },
            { chars: 0, nodes: [] }
          ).nodes}
        </g>
      ))}

      {/* Terminal */}
      <rect x="80" y="276" width="560" height="124" fill="#0b1220" />
      <line x1="80" y1="276" x2="640" y2="276" stroke="#1e293b" />
      <text x="92" y="292" fill="#475569" fontSize="7.5" fontFamily="monospace" letterSpacing="0.08em">
        TERMINAL
      </text>
      <text x="176" y="292" fill="#334155" fontSize="7.5" fontFamily="monospace">
        cron: 0 9 * * * · next run in 22h 14m
      </text>
      <text x="92" y="310" fill="#c3e88d" fontSize="8.4" fontFamily="monospace">
        $ python -m jobs.sync_daily
      </text>
      {log.map(([time, level, msg, color], i) => (
        <g key={i}>
          <text x="92" y={326 + i * 12} fill="#475569" fontSize="8" fontFamily="monospace">
            {time}
          </text>
          <text x="150" y={326 + i * 12} fill="#82aaff" fontSize="8" fontFamily="monospace">
            {level}
          </text>
          <text x="184" y={326 + i * 12} fill={color} fontSize="8" fontFamily="monospace">
            {msg}
          </text>
        </g>
      ))}
      <text x="92" y="388" fill="#94a3b8" fontSize="8.4" fontFamily="monospace">
        Done in 23.4s · 0 failures · 30/30 successful runs this month
      </text>
    </>
  )
}

const scenes = {
  python: PythonAutomation,
  ...extraScenes,
  ...moreScenes,
}

/**
 * Falls back to a drawn scene for projects that have no published screenshot.
 * Projects carrying a real screenshot render an <img> instead.
 *
 * `fit` is "meet" wherever the whole scene matters, and "slice" on card tiles,
 * which have a fixed aspect ratio the scene has to fill rather than letterbox.
 */
export default function ProjectVisual({ variant, title, fit = 'meet' }) {
  const Scene = scenes[variant]
  if (!Scene) return null

  const id = `pv-${variant}`

  return (
    <svg
      className="projectVisual"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Interface diagram for ${title}`}
      preserveAspectRatio={`xMidYMid ${fit}`}
    >
      <title>{`${title} — process diagram`}</title>
      <Defs id={id} />
      <Scene id={id} />
    </svg>
  )
}
