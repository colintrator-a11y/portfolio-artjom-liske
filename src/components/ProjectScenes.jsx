/**
 * Drawn scenes for the Shopify, mobile, PHP and WordPress capability examples.
 *
 * None of these entries has a published screenshot, so each one is illustrated
 * with an inline SVG of the interface it describes. A handful of parameterised
 * templates - storefront, admin app, phone, code console - carry most of the
 * set, which keeps the drawings consistent with each other and with the scenes
 * already in `ProjectVisual.jsx`; the three builds that would not read clearly
 * as a template are drawn individually at the bottom of the file.
 */

import { BRAND, C, MONO, SANS } from './visualTokens'
import { P, Photo } from './visualPhotos'

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

/** A single run of text. A component rather than a helper so `key` works. */
export function T({ x, y, fill, size = 9, weight = '400', anchor = 'start', mono = false, opacity, children }) {
  return (
    <text
      x={x}
      y={y}
      fill={fill}
      fontSize={size}
      fontWeight={weight}
      textAnchor={anchor}
      fontFamily={mono ? MONO : SANS}
      opacity={opacity}
      xmlSpace="preserve"
    >
      {children}
    </text>
  )
}

/**
 * Browser window chrome. The address field is deliberately anonymised - these
 * are reference builds, so a domain in the bar would only invite someone to go
 * looking for a site that is not there. `label` carries the context the URL
 * used to: which admin, which framework.
 */
export function BrowserBar({ label, height = 40, dark = false }) {
  const shell = dark ? '#111c33' : C.chrome
  const line = dark ? '#1e293b' : C.border
  const field = dark ? '#0f172a' : C.bg
  const ink = dark ? '#64748b' : C.muted
  const cy = height / 2

  return (
    <g>
      <path d={`M14 0 H626 A14 14 0 0 1 640 14 V${height} H0 V14 A14 14 0 0 1 14 0 Z`} fill={shell} />
      <line x1="0" y1={height} x2="640" y2={height} stroke={line} />
      <circle cx="20" cy={cy} r="4" fill={dark ? '#334155' : '#e5e8ee'} />
      <circle cx="34" cy={cy} r="4" fill={dark ? '#334155' : '#e5e8ee'} />
      <circle cx="48" cy={cy} r="4" fill={dark ? '#334155' : '#e5e8ee'} />
      <rect x="68" y={cy - 9} width="210" height="18" rx="9" fill={field} stroke={line} />
      <path d={`M79 ${cy - 1} v-2.2 a3.2 3.2 0 0 1 6.4 0 v2.2`} fill="none" stroke={ink} strokeWidth="1" />
      <rect x="78.6" y={cy - 1} width="7.2" height="5.6" rx="1.4" fill={ink} opacity="0.6" />
      {[46, 30, 62].reduce(
        (acc, bw) => {
          acc.nodes.push(<rect key={acc.x} x={acc.x} y={cy - 2} width={bw} height="4" rx="2" fill={ink} opacity="0.26" />)
          acc.x += bw + 7
          return acc
        },
        { x: 94, nodes: [] }
      ).nodes}
      {label ? (
        <T x={292} y={cy + 3} fill={ink} size={8.2}>
          {label}
        </T>
      ) : null}
    </g>
  )
}

/** The rounded page body every light scene sits on. */
export function Card({ fill = '#ffffff' }) {
  return (
    <>
      <rect x="0" y="0" width="640" height="400" rx="14" fill={fill} />
      <rect x="0.5" y="0.5" width="639" height="399" rx="13.5" fill="none" stroke={C.border} />
    </>
  )
}

/** Small pill used for statuses, stock states and plan names. */
export function Pill({ x, y, w, label, color, size = 7.4, height = 15, bg }) {
  const px = Number(x)
  const py = Number(y)
  const pw = Number(w ?? label.length * size * 0.68 + 14)
  return (
    <g>
      <rect x={px} y={py} width={pw} height={height} rx={height / 2} fill={bg ?? color} fillOpacity={bg ? 1 : 0.13} />
      <T x={px + pw / 2} y={py + height / 2 + size * 0.36} fill={color} size={size} weight="700" anchor="middle">
        {label}
      </T>
    </g>
  )
}

/* ------------------------------------------------------------------ */
/* Template: storefront                                                */
/* ------------------------------------------------------------------ */

/**
 * A shop front page: promo bar, header, hero, then a product row. Used for the
 * builds whose whole point is the customer-facing shop.
 */
export function Storefront({ id, heroPhoto, promo, brand, nav, accent, accentSoft, hero, heroSub, cta, heroTag, shelf, products }) {
  return (
    <>
      <Card />
      <BrowserBar />

      {/* Announcement bar */}
      <rect x="0" y="40" width="640" height="20" fill={accent} />
      <T x={320} y={53.5} fill="#ffffff" size={7.8} weight="600" anchor="middle">
        {promo}
      </T>

      {/* Header */}
      <T x={26} y={82} fill={C.ink} size={12.5} weight="700">
        {brand}
      </T>
      {nav.map((label, i) => (
        <T key={label} x={228 + i * 62} y={81} fill={C.muted} size={8.6}>
          {label}
        </T>
      ))}
      <circle cx="592" cy="77" r="9" fill={accentSoft} />
      <path d="M588 74 h8 l-1 7 h-6 z M590 74 a2 2 0 0 1 4 0" fill="none" stroke={accent} strokeWidth="1.1" />
      <circle cx="600" cy="70" r="5.5" fill={accent} />
      <T x={600} y={72.5} fill="#ffffff" size={6.4} weight="700" anchor="middle">
        3
      </T>
      <line x1="0" y1="96" x2="640" y2="96" stroke={C.hair} />

      {/* Hero */}
      <rect x="26" y="112" width="330" height="128" rx="10" fill="none" />
      <T x={26} y={148} fill={C.ink} size={23} weight="700">
        {hero[0]}
      </T>
      <T x={26} y={176} fill={C.ink} size={23} weight="700">
        {hero[1]}
      </T>
      <T x={26} y={198} fill={C.muted} size={8.8}>
        {heroSub}
      </T>
      <rect x="26" y="210" width="112" height="28" rx="14" fill={accent} />
      <T x={82} y={228} fill="#ffffff" size={8.6} weight="700" anchor="middle">
        {cta}
      </T>
      <rect x="148" y="210" width="96" height="28" rx="14" fill="none" stroke={C.border} />
      <T x={196} y={228} fill={C.ink} size={8.6} weight="600" anchor="middle">
        Lookbook
      </T>

      <Photo id={`${id}-hero`} src={heroPhoto} x={380} y={112} w={234} h={126} r={10} />
      <rect x="392" y="206" width="120" height="22" rx="11" fill="#ffffff" />
      <circle cx="405" cy="217" r="5" fill={accent} />
      <T x={416} y={220} fill={C.ink} size={7.8} weight="600">
        {heroTag}
      </T>

      {/* Shelf */}
      <T x={26} y={266} fill={C.ink} size={11} weight="700">
        {shelf}
      </T>
      <line x1="26" y1="274" x2="614" y2="274" stroke={C.hair} />

      {products.map(([name, price, tag, tagColor, photo], i) => {
        const x = 26 + i * 149
        return (
          <g key={name}>
            <rect x={x} y="278" width="137" height="106" rx="9" fill={C.panel} stroke={C.border} />
            <Photo id={`${id}-p${i}`} src={photo} x={x + 1} y={279} w={135} h={62} r={8} />
            {tag ? <Pill x={x + 8} y={286} label={tag} color={tagColor} size={6.6} bg="#ffffff" /> : null}
            <T x={x + 10} y={356} fill={C.ink} size={8.4} weight="600">
              {name}
            </T>
            <T x={x + 10} y={371} fill={C.ink} size={8.6} weight="700">
              {price}
            </T>
            <rect x={x + 84} y="359" width="44" height="17" rx="8.5" fill={accent} />
            <T x={x + 106} y={371} fill="#ffffff" size={7} weight="700" anchor="middle">
              ADD
            </T>
          </g>
        )
      })}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Template: admin application                                         */
/* ------------------------------------------------------------------ */

/**
 * A back-office screen: branded sidebar, page header, stat tiles and a data
 * table. Used for the builds whose value lives in the admin, not the shop.
 */
export function AdminApp({
  chromeLabel,
  appName,
  monogram,
  accent,
  sidebarFill = C.panel,
  sidebarInk = C.muted,
  sidebarActiveFill,
  nav,
  active,
  title,
  subtitle,
  action,
  stats,
  columns,
  colX,
  rows,
}) {
  const SX = 146
  return (
    <>
      <Card />
      <BrowserBar label={chromeLabel} />

      {/* Sidebar */}
      <path d={`M0 40 H${SX} V400 H14 A14 14 0 0 1 0 386 Z`} fill={sidebarFill} />
      <line x1={SX} y1="40" x2={SX} y2="400" stroke={C.border} />
      <rect x="16" y="56" width="22" height="22" rx="6" fill={accent} />
      <T x={27} y={71} fill="#ffffff" size={9} weight="700" anchor="middle">
        {monogram}
      </T>
      <T x={46} y={71} fill={sidebarFill === C.panel ? C.ink : '#ffffff'} size={9.6} weight="700">
        {appName}
      </T>

      {nav.map((label, i) => {
        const y = 100 + i * 26
        const on = label === active
        return (
          <g key={label}>
            {on ? (
              <rect x="10" y={y - 12} width={SX - 20} height="22" rx="6" fill={sidebarActiveFill ?? '#ffffff'} stroke={sidebarActiveFill ? 'none' : C.border} />
            ) : null}
            <rect x="20" y={y - 6} width="9" height="9" rx="2" fill={on ? accent : sidebarInk} fillOpacity={on ? 1 : 0.5} />
            <T x={36} y={y + 2} fill={on ? (sidebarActiveFill ? '#ffffff' : C.ink) : sidebarInk} size={8.6} weight={on ? '700' : '400'}>
              {label}
            </T>
          </g>
        )
      })}

      {/* Page header */}
      <T x={166} y={68} fill={C.ink} size={13} weight="700">
        {title}
      </T>
      <T x={166} y={83} fill={C.muted} size={8.4}>
        {subtitle}
      </T>
      <rect x="522" y="54" width="98" height="26" rx="7" fill={accent} />
      <T x={571} y={70} fill="#ffffff" size={8.2} weight="700" anchor="middle">
        {action}
      </T>
      <line x1="166" y1="96" x2="620" y2="96" stroke={C.hair} />

      {/* Stat tiles */}
      {stats.map(([label, value, delta, deltaColor], i) => (
        <g key={label}>
          <rect x={166 + i * 156} y="110" width="142" height="60" rx="9" fill={C.panel} stroke={C.border} />
          <T x={180 + i * 156} y={130} fill={C.muted} size={7.6} weight="600">
            {label}
          </T>
          <T x={180 + i * 156} y={152} fill={C.ink} size={17} weight="700">
            {value}
          </T>
          <T x={294 + i * 156} y={152} fill={deltaColor} size={8} weight="700" anchor="end">
            {delta}
          </T>
        </g>
      ))}

      {/* Table */}
      <rect x="166" y="186" width="454" height="196" rx="9" fill="#ffffff" stroke={C.border} />
      <rect x="166.5" y="186.5" width="453" height="26" rx="9" fill={C.panel} />
      <line x1="166" y1="212" x2="620" y2="212" stroke={C.border} />
      {columns.map((label, i) => (
        <T key={label} x={166 + colX[i]} y={203} fill={C.muted} size={7.4} weight="700">
          {label}
        </T>
      ))}
      {rows.map((row, r) => (
        <g key={r}>
          {r ? <line x1="166" y1={212 + r * 28} x2="620" y2={212 + r * 28} stroke={C.hair} /> : null}
          {row.map((cell, i) => {
            const y = 232 + r * 28
            const x = 166 + colX[i]
            if (Array.isArray(cell)) return <Pill key={i} x={x} y={y - 11} w={cell[2] ?? 56} label={cell[0]} color={cell[1]} />
            return (
              <T key={i} x={x} y={y} fill={i === 0 ? C.ink : C.muted} size={8} weight={i === 0 ? '600' : '400'} mono={i === 0 && cell.startsWith('#')}>
                {cell}
              </T>
            )
          })}
        </g>
      ))}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Template: phone                                                     */
/* ------------------------------------------------------------------ */

export const PH = { w: 168, h: 336, y: 30 }
export const phoneX = [24, 236, 448]

/** One handset: body, status bar, and whatever the screen draws inside it. */
export function Phone({ x, caption, statusFill = '#ffffff', statusInk = C.ink, children }) {
  const { w, h, y } = PH
  return (
    <g>
      <rect x={x - 3} y={y - 3} width={w + 6} height={h + 6} rx="22" fill="#0d1b30" opacity="0.07" />
      <rect x={x} y={y} width={w} height={h} rx="19" fill="#ffffff" stroke={C.border} />
      <path d={`M${x} ${y + 19} a19 19 0 0 1 19 -19 h${w - 38} a19 19 0 0 1 19 19 v13 H${x} Z`} fill={statusFill} />
      <T x={x + 14} y={y + 21} fill={statusInk} size={7} weight="700">
        9:41
      </T>
      <rect x={x + w - 46} y={y + 15} width="9" height="6" rx="1.5" fill={statusInk} opacity="0.55" />
      <rect x={x + w - 33} y={y + 14} width="8" height="7" rx="1.5" fill={statusInk} opacity="0.55" />
      <rect x={x + w - 21} y={y + 14} width="12" height="7" rx="2" fill={statusInk} opacity="0.55" />
      <rect x={x + 58} y={y + 4} width="52" height="8" rx="4" fill="#0d1b30" opacity="0.08" />
      {children}
      <rect x={x + 58} y={y + h - 10} width="52" height="3" rx="1.5" fill="#0d1b30" opacity="0.18" />
      <T x={x + w / 2} y={385} fill={C.muted} size={8} weight="600" anchor="middle">
        {caption}
      </T>
    </g>
  )
}

/** App bar drawn at the top of a phone screen. */
export function AppBar({ x, title, fill, ink = '#ffffff', back = true }) {
  const { y, w } = PH
  return (
    <g>
      <rect x={x} y={y + 32} width={w} height="34" fill={fill} />
      {back ? (
        <path d={`M${x + 18} ${y + 49} l7 -6 m-7 6 l7 6`} stroke={ink} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      ) : (
        <g>
          <rect x={x + 14} y={y + 44} width="12" height="1.6" fill={ink} />
          <rect x={x + 14} y={y + 48} width="12" height="1.6" fill={ink} />
          <rect x={x + 14} y={y + 52} width="12" height="1.6" fill={ink} />
        </g>
      )}
      <T x={x + 34} y={y + 53} fill={ink} size={9.4} weight="700">
        {title}
      </T>
    </g>
  )
}

/* ------------------------------------------------------------------ */
/* Template: code console                                              */
/* ------------------------------------------------------------------ */

const SYNTAX = {
  kw: '#c792ea',
  fn: '#82aaff',
  str: '#c3e88d',
  num: '#f78c6c',
  op: '#89ddff',
  var: '#eeffff',
  pl: '#a6accd',
  cm: '#5f7e97',
  tag: '#f07178',
}

/**
 * Editor on top, terminal underneath - the same shape as the Python scene, so
 * the back-end examples read as one family.
 */
export function CodeConsole({ tabs, treeLabel, tree, treeActive, code, terminalMeta, prompt, log, footer, codeTop = 54, treeW = 80 }) {
  const CW = 5.32
  const X0 = treeW + 12

  return (
    <>
      <rect x="0" y="0" width="640" height="400" rx="14" fill="#0f172a" />
      <rect x="0.5" y="0.5" width="639" height="399" rx="13.5" fill="none" stroke="#1e293b" />

      <path d="M14 0 H626 A14 14 0 0 1 640 14 V34 H0 V14 A14 14 0 0 1 14 0 Z" fill="#111c33" />
      <circle cx="20" cy="17" r="4" fill="#f87171" />
      <circle cx="34" cy="17" r="4" fill="#fbbf24" />
      <circle cx="48" cy="17" r="4" fill="#34d399" />
      <rect x="68" y="4" width={tabs[0].length * 5.6 + 34} height="30" fill="#0f172a" />
      {tabs.map((tab, i) => (
        <T key={tab} x={i === 0 ? 82 : 82 + tabs[0].length * 5.6 + 46} y={23} fill={i === 0 ? '#e2e8f0' : '#475569'} size={9} mono>
          {tab}
        </T>
      ))}

      <rect x="0" y="34" width={treeW} height="366" fill="#0c1424" />
      <T x={14} y={54} fill="#475569" size={7.5} mono>
        {treeLabel}
      </T>
      {tree.map((f, i) => (
        <T key={f} x={14} y={72 + i * 15} fill={f.trim() === treeActive ? '#82aaff' : '#64748b'} size={7.6} mono>
          {f}
        </T>
      ))}

      {code.map((line, i) => (
        <g key={i}>
          <T x={treeW - 4} y={codeTop + i * 14.4} fill="#334155" size={8.4} anchor="end" mono>
            {i + 1}
          </T>
          {
            line.reduce(
              (acc, [text, kind]) => {
                acc.nodes.push(
                  <T key={acc.chars} x={X0 + acc.chars * CW} y={codeTop + i * 14.4} fill={SYNTAX[kind]} size={8.8} mono>
                    {text}
                  </T>
                )
                acc.chars += text.length
                return acc
              },
              { chars: 0, nodes: [] }
            ).nodes
          }
        </g>
      ))}

      <rect x={treeW} y="276" width={640 - treeW} height="124" fill="#0b1220" />
      <line x1={treeW} y1="276" x2="640" y2="276" stroke="#1e293b" />
      <T x={X0} y={292} fill="#475569" size={7.5} mono>
        TERMINAL
      </T>
      <T x={X0 + 84} y={292} fill="#334155" size={7.5} mono>
        {terminalMeta}
      </T>
      <T x={X0} y={310} fill="#c3e88d" size={8.4} mono>
        {prompt}
      </T>
      {log.map(([time, level, msg, color], i) => (
        <g key={i}>
          <T x={X0} y={326 + i * 12} fill="#475569" size={8} mono>
            {time}
          </T>
          <T x={X0 + 58} y={326 + i * 12} fill="#82aaff" size={8} mono>
            {level}
          </T>
          <T x={X0 + 92} y={326 + i * 12} fill={color} size={8} mono>
            {msg}
          </T>
        </g>
      ))}
      <T x={X0} y={388} fill="#94a3b8" size={8.4} mono>
        {footer}
      </T>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Shopify                                                             */
/* ------------------------------------------------------------------ */

/* A Shopify theme as the shopper sees it. */
function ShopifyTheme({ id }) {
  return (
    <Storefront
      id={id}
      heroPhoto={P.fashionBoutique}
      promo="FREE SHIPPING OVER € 120 · 30-DAY RETURNS"
      brand="ATELIER NORD"
      nav={['New in', 'Knitwear', 'Outerwear', 'Journal', 'Sale']}
      accent={BRAND.shopify}
      accentSoft={BRAND.shopifySoft}
      hero={['Autumn 24,', 'made to last']}
      heroSub="Small batches, natural fibres, shipped from Berlin within 24 hours."
      cta="Shop new in"
      heroTag="Rated 4.9 from 812 reviews"
      shelf="Best sellers this week"
      products={[
        ['Merino crew', '€ 145', 'NEW', BRAND.shopify, P.knitSweater],
        ['Wool overshirt', '€ 210', null, null, P.woolCoat],
        ['Cashmere scarf', '€ 98', 'LOW STOCK', C.amber, P.knitScarf],
        ['Quilted vest', '€ 175', null, null, P.quiltedOuterwear],
      ]}
    />
  )
}

/* The same catalogue served through the Storefront API: query on the left,
   rendered product page on the right. */
function ShopifyHeadless({ id }) {
  const CW = 5.15
  const query = [
    [['query', 'kw'], [' ', 'pl'], ['ProductByHandle', 'fn'], ['($handle: ', 'pl'], ['String!', 'var'], [') {', 'pl']],
    [['  ', 'pl'], ['product', 'tag'], ['(handle: $handle) {', 'pl']],
    [['    title', 'pl']],
    [['    ', 'pl'], ['priceRange', 'tag'], [' { minVariantPrice { ', 'pl'], ['amount', 'pl'], [' } }', 'pl']],
    [['    ', 'pl'], ['variants', 'tag'], ['(first: ', 'pl'], ['10', 'num'], [') { nodes {', 'pl']],
    [['      id  title  availableForSale', 'pl']],
    [['    } }', 'pl']],
    [['    ', 'pl'], ['images', 'tag'], ['(first: ', 'pl'], ['6', 'num'], [') { nodes { url } }', 'pl']],
    [['  }', 'pl']],
    [['}', 'pl']],
    [],
    [['// ', 'cm'], ['revalidated at the edge every 60s', 'cm']],
  ]

  return (
    <>
      <Card />
      <BrowserBar label="Storefront API · Next.js" />

      {/* Query panel */}
      <rect x="0" y="40" width="286" height="360" fill="#0f172a" />
      <path d="M0 386 V40 H286 V400 H14 A14 14 0 0 1 0 386 Z" fill="#0f172a" />
      <T x={18} y={62} fill="#64748b" size={7.4} weight="700" mono>
        SHOPIFY STOREFRONT API
      </T>
      <rect x="176" y="52" width="94" height="15" rx="7.5" fill="#1e293b" />
      <T x={223} y={62.5} fill="#c3e88d" size={7} weight="700" anchor="middle" mono>
        200 · 84 ms
      </T>
      <line x1="0" y1="76" x2="286" y2="76" stroke="#1e293b" />
      {query.map((line, i) => (
        <g key={i}>
          <T x={30} y={96 + i * 14.6} fill="#334155" size={8} anchor="end" mono>
            {i + 1}
          </T>
          {
            line.reduce(
              (acc, [text, kind]) => {
                acc.nodes.push(
                  <T key={acc.chars} x={40 + acc.chars * CW} y={96 + i * 14.6} fill={SYNTAX[kind]} size={8.5} mono>
                    {text}
                  </T>
                )
                acc.chars += text.length
                return acc
              },
              { chars: 0, nodes: [] }
            ).nodes
          }
        </g>
      ))}
      <rect x="18" y="286" width="250" height="96" rx="8" fill="#0b1220" stroke="#1e293b" />
      <T x={30} y={303} fill="#475569" size={7.2} weight="700" mono>
        CHECKOUT HANDOFF
      </T>
      {[
        ['cart.linesAdd', '#a6accd'],
        ['→ checkoutUrl (Shopify-hosted)', '#c3e88d'],
        ['payments, taxes, fraud: Shopify', '#5f7e97'],
        ['catalogue, routing, cache: Next.js', '#5f7e97'],
      ].map(([msg, fill], i) => (
        <T key={msg} x={30} y={321 + i * 15} fill={fill} size={7.8} mono>
          {msg}
        </T>
      ))}

      {/* Rendered product page */}
      <rect x="286" y="40" width="354" height="360" fill="#ffffff" />
      <path d="M286 40 H640 V386 A14 14 0 0 1 626 400 H286 Z" fill="#ffffff" />
      <line x1="286" y1="40" x2="286" y2="400" stroke={C.border} />
      <T x={306} y={64} fill={C.ink} size={10} weight="700">
        ATELIER NORD
      </T>
      <T x={620} y={64} fill={C.muted} size={8} anchor="end">
        Cart (1)
      </T>
      <line x1="286" y1="76" x2="640" y2="76" stroke={C.hair} />

      <Photo id={`${id}-gallery`} src={P.knitSweater} x={306} y={92} w={148} h={176} r={9} />
      {[P.knitSweater, P.woolCoat, P.knitScarf].map((src, i) => (
        <g key={i}>
          <Photo id={`${id}-thumb${i}`} src={src} x={306 + i * 34} y={276} w={30} h={30} r={6} />
          <rect x={306 + i * 34} y="276" width="30" height="30" rx="6" fill="none" stroke={i === 0 ? BRAND.shopify : C.border} strokeWidth={i === 0 ? 1.6 : 1} />
        </g>
      ))}

      <T x={472} y={112} fill={C.muted} size={7.6} weight="700">
        KNITWEAR
      </T>
      <T x={472} y={134} fill={C.ink} size={15} weight="700">
        Merino crew
      </T>
      <T x={472} y={158} fill={C.ink} size={14} weight="700">
        € 145,00
      </T>
      <T x={472} y={176} fill={C.muted} size={7.8}>
        Static price from the Storefront API
      </T>
      <T x={472} y={200} fill={C.ink} size={7.8} weight="700">
        SIZE
      </T>
      {['S', 'M', 'L', 'XL'].map((s, i) => (
        <g key={s}>
          <rect x={472 + i * 34} y="208" width="28" height="24" rx="6" fill={i === 1 ? BRAND.shopify : '#ffffff'} stroke={i === 3 ? C.hair : i === 1 ? BRAND.shopify : C.border} />
          <T x={486 + i * 34} y={224} fill={i === 1 ? '#ffffff' : i === 3 ? C.barMid : C.ink} size={8.2} weight="600" anchor="middle">
            {s}
          </T>
        </g>
      ))}
      <rect x="472" y="244" width="148" height="30" rx="8" fill={BRAND.shopify} />
      <T x={546} y={263} fill="#ffffff" size={9} weight="700" anchor="middle">
        Add to cart
      </T>
      <rect x="472" y="280" width="148" height="30" rx="8" fill="#ffffff" stroke={C.border} />
      <T x={546} y={299} fill={C.ink} size={9} weight="600" anchor="middle">
        Buy it now
      </T>
      <circle cx="482" cy="330" r="4" fill={BRAND.shopify} />
      <T x={492} y={333} fill={C.ink} size={7.8}>
        In stock · ships today from Berlin
      </T>
      <rect x="306" y="352" width="314" height="30" rx="8" fill={C.panel} stroke={C.border} />
      <T x={318} y={365} fill={C.muted} size={7.4} weight="700">
        LIGHTHOUSE
      </T>
      {[
        ['Performance', '98'],
        ['Accessibility', '100'],
        ['SEO', '100'],
      ].map(([label, score], i) => (
        <g key={label}>
          <T x={318 + i * 104} y={377} fill={C.muted} size={7.2}>
            {label}
          </T>
          <T x={390 + i * 104} y={377} fill={BRAND.shopify} size={7.8} weight="700">
            {score}
          </T>
        </g>
      ))}
    </>
  )
}

/* The subscription app inside Shopify admin. */
function ShopifyApp() {
  return (
    <AdminApp
      chromeLabel="Shopify admin"
      appName="Subscriptions"
      monogram="S"
      accent={BRAND.shopify}
      nav={['Overview', 'Contracts', 'Selling plans', 'Bundles', 'Dunning', 'Settings']}
      active="Contracts"
      title="Subscription contracts"
      subtitle="Recurring orders, bundles and retries — all inside Shopify admin"
      action="New selling plan"
      stats={[
        ['ACTIVE CONTRACTS', '1,248', '+6.4%', BRAND.shopify],
        ['MONTHLY RECURRING', '€ 38,410', '+9.1%', BRAND.shopify],
        ['INVOLUNTARY CHURN', '1.9%', '-2.3pt', BRAND.shopify],
      ]}
      columns={['CONTRACT', 'CUSTOMER', 'SELLING PLAN', 'NEXT BILLING', 'STATUS']}
      colX={[14, 96, 190, 300, 388]}
      rows={[
        ['#SC-4182', 'G. Marchetti', 'Coffee · every 4 weeks', '12 Sep', ['ACTIVE', BRAND.shopify]],
        ['#SC-4179', 'L. Ferrari', 'Skincare bundle · 8 wks', '14 Sep', ['ACTIVE', BRAND.shopify]],
        ['#SC-4176', 'A. Richter', 'Coffee · every 2 weeks', '15 Sep', ['RETRYING', C.amber]],
        ['#SC-4170', 'S. Keller', 'Tea sampler · 6 weeks', '19 Sep', ['ACTIVE', BRAND.shopify]],
        ['#SC-4165', 'M. Bergmann', 'Coffee · every 4 weeks', '—', ['PAUSED', C.muted]],
        ['#SC-4158', 'D. Gruber', 'Skincare bundle · 8 wks', '24 Sep', ['ACTIVE', BRAND.shopify]],
      ]}
    />
  )
}

/* ------------------------------------------------------------------ */
/* Mobile                                                              */
/* ------------------------------------------------------------------ */

/* One React Native codebase, drawn as the three screens that carry a sale. */
function MobileShopping({ id }) {
  const A = BRAND.react
  const [x1, x2, x3] = phoneX
  const { y, w } = PH

  return (
    <>
      <Card />

      {/* 1 - catalogue */}
      <Phone x={x1} caption="Catalogue">
        <AppBar x={x1} title="Discover" fill="#ffffff" ink={C.ink} back={false} />
        <line x1={x1} y1={y + 66} x2={x1 + w} y2={y + 66} stroke={C.hair} />
        <rect x={x1 + 14} y={y + 76} width={w - 28} height="24" rx="12" fill={C.panel} stroke={C.border} />
        <circle cx={x1 + 30} cy={y + 88} r="4.5" fill="none" stroke={C.muted} strokeWidth="1.2" />
        <T x={x1 + 42} y={y + 91} fill={C.muted} size={7.8}>
          Search 4,200 products
        </T>
        {['All', 'Home', 'Tech', 'Sport'].map((c, i) => (
          <g key={c}>
            <rect x={x1 + 14 + i * 36} y={y + 108} width="32" height="17" rx="8.5" fill={i === 0 ? A : '#ffffff'} stroke={i === 0 ? A : C.border} />
            <T x={x1 + 30 + i * 36} y={y + 120} fill={i === 0 ? '#ffffff' : C.muted} size={7} weight="600" anchor="middle">
              {c}
            </T>
          </g>
        ))}
        {[
          ['Desk lamp', '€ 59', P.deskLamp],
          ['Headphones', '€ 129', P.headphones],
          ['Water bottle', '€ 24', P.waterBottle],
          ['Trail shoes', '€ 145', P.trailShoes],
        ].map(([name, price, photo], i) => {
          const cx = x1 + 14 + (i % 2) * 72
          const cy = y + 132 + Math.floor(i / 2) * 78
          return (
            <g key={name}>
              <rect x={cx} y={cy} width="66" height="70" rx="8" fill={C.panel} stroke={C.border} />
              <Photo id={`${id}-cat${i}`} src={photo} x={cx + 1} y={cy + 1} w={64} h={42} r={7} />
              <T x={cx + 7} y={cy + 56} fill={C.ink} size={7.2} weight="600">
                {name}
              </T>
              <T x={cx + 7} y={cy + 66} fill={C.ink} size={7.6} weight="700">
                {price}
              </T>
            </g>
          )
        })}
        <rect x={x1} y={y + PH.h - 44} width={w} height="34" fill="#ffffff" />
        <line x1={x1} y1={y + PH.h - 44} x2={x1 + w} y2={y + PH.h - 44} stroke={C.hair} />
        {['Shop', 'Search', 'Cart', 'You'].map((label, i) => (
          <T key={label} x={x1 + 26 + i * 40} y={y + PH.h - 22} fill={i === 0 ? A : C.barMid} size={6.8} weight="600" anchor="middle">
            {label}
          </T>
        ))}
      </Phone>

      {/* 2 - product */}
      <Phone x={x2} caption="Product detail">
        <AppBar x={x2} title="Headphones" fill="#ffffff" ink={C.ink} />
        <Photo id={`${id}-pdp`} src={P.headphonesWide} x={x2 + 1} y={y + 66} w={w - 2} h={96} r={0} />
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={x2 + 62 + i * 12} cy={y + 152} r="3" fill={i === 0 ? A : C.barMid} />
        ))}
        <T x={x2 + 14} y={y + 182} fill={C.ink} size={11} weight="700">
          Studio ANC 3
        </T>
        <T x={x2 + w - 14} y={y + 182} fill={C.ink} size={11} weight="700" anchor="end">
          € 129
        </T>
        <T x={x2 + 14} y={y + 195} fill={C.muted} size={7.4}>
          ★ 4.8 · 1,204 reviews · in stock
        </T>
        <T x={x2 + 14} y={y + 216} fill={C.ink} size={7.6} weight="700">
          COLOUR
        </T>
        {['#0d1b30', '#8a95a6', '#c8a15a'].map((col, i) => (
          <circle key={col} cx={x2 + 24 + i * 26} cy={y + 231} r="9" fill={col} stroke={i === 0 ? A : C.border} strokeWidth={i === 0 ? 2 : 1} />
        ))}
        <line x1={x2 + 14} y1={y + 250} x2={x2 + w - 14} y2={y + 250} stroke={C.hair} />
        {['Free next-day delivery', '2-year warranty included'].map((line, i) => (
          <g key={line}>
            <circle cx={x2 + 20} cy={y + 264 + i * 17} r="5" fill={A} fillOpacity="0.14" />
            <path d={`M${x2 + 17.5} ${y + 264 + i * 17} l2 2 l4 -4`} stroke={A} strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <T x={x2 + 32} y={y + 267 + i * 17} fill={C.muted} size={7.4}>
              {line}
            </T>
          </g>
        ))}
        <rect x={x2 + 14} y={y + PH.h - 50} width={w - 28} height="30" rx="15" fill={A} />
        <T x={x2 + w / 2} y={y + PH.h - 30} fill="#ffffff" size={8.8} weight="700" anchor="middle">
          Add to bag · € 129
        </T>
      </Phone>

      {/* 3 - checkout */}
      <Phone x={x3} caption="Checkout">
        <AppBar x={x3} title="Checkout" fill={C.ink} />
        {[
          ['Studio ANC 3', '€ 129', 'Qty 1', P.headphones],
          ['Desk lamp', '€ 59', 'Qty 2', P.deskLamp],
        ].map(([name, price, qty, photo], i) => (
          <g key={name}>
            <Photo id={`${id}-bag${i}`} src={photo} x={x3 + 14} y={y + 78 + i * 46} w={34} h={34} r={7} />
            <T x={x3 + 56} y={y + 92 + i * 46} fill={C.ink} size={8.2} weight="600">
              {name}
            </T>
            <T x={x3 + 56} y={y + 105 + i * 46} fill={C.muted} size={7.2}>
              {qty}
            </T>
            <T x={x3 + w - 14} y={y + 92 + i * 46} fill={C.ink} size={8.4} weight="700" anchor="end">
              {price}
            </T>
          </g>
        ))}
        <line x1={x3 + 14} y1={y + 176} x2={x3 + w - 14} y2={y + 176} stroke={C.hair} />
        {[
          ['Subtotal', '€ 247,00'],
          ['Delivery', 'Free'],
          ['VAT included', '€ 44,52'],
        ].map(([label, value], i) => (
          <g key={label}>
            <T x={x3 + 14} y={y + 194 + i * 16} fill={C.muted} size={7.6}>
              {label}
            </T>
            <T x={x3 + w - 14} y={y + 194 + i * 16} fill={C.ink} size={7.6} anchor="end">
              {value}
            </T>
          </g>
        ))}
        <line x1={x3 + 14} y1={y + 250} x2={x3 + w - 14} y2={y + 250} stroke={C.hair} />
        <T x={x3 + 14} y={y + 268} fill={C.ink} size={9.4} weight="700">
          Total
        </T>
        <T x={x3 + w - 14} y={y + 268} fill={C.ink} size={9.4} weight="700" anchor="end">
          € 247,00
        </T>
        <rect x={x3 + 14} y={y + 282} width={w - 28} height="28" rx="8" fill={C.panel} stroke={C.border} />
        <rect x={x3 + 22} y={y + 290} width="18" height="12" rx="2" fill={A} fillOpacity="0.3" />
        <T x={x3 + 48} y={y + 300} fill={C.ink} size={7.6} weight="600">
          Visa •••• 4218
        </T>
        <T x={x3 + w - 22} y={y + 300} fill={A} size={7.4} weight="700" anchor="end">
          Change
        </T>
        <rect x={x3 + 14} y={y + PH.h - 50} width={w - 28} height="30" rx="15" fill={A} />
        <T x={x3 + w / 2} y={y + PH.h - 30} fill="#ffffff" size={8.8} weight="700" anchor="middle">
          Pay € 247,00
        </T>
      </Phone>

      <T x={320} y={20} fill={C.muted} size={8.4} weight="600" anchor="middle">
        One React Native codebase · iOS and Android from the same screens
      </T>
    </>
  )
}

/* Flutter delivery: customer tracking, the driver's run, and the proof of
   delivery that closes the job. */
function MobileDelivery({ id }) {
  const A = BRAND.flutter
  const [x1, x2, x3] = phoneX
  const { y, w } = PH

  return (
    <>
      <Card />

      {/* 1 - live tracking */}
      <Phone x={x1} caption="Customer tracking">
        <AppBar x={x1} title="Order #7741" fill={A} />
        <rect x={x1 + 1} y={y + 66} width={w - 2} height="140" fill="#eef2f6" />
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`h${i}`} x1={x1 + 1} y1={y + 90 + i * 30} x2={x1 + w - 1} y2={y + 90 + i * 30} stroke="#e0e6ec" />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <line key={`v${i}`} x1={x1 + 34 + i * 34} y1={y + 66} x2={x1 + 34 + i * 34} y2={y + 206} stroke="#e0e6ec" />
        ))}
        <path d={`M${x1 + 20} ${y + 192} L${x1 + 62} ${y + 172} L${x1 + 74} ${y + 130} L${x1 + 118} ${y + 110} L${x1 + 146} ${y + 88}`} stroke={A} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={x1 + 20} cy={y + 192} r="5" fill="#ffffff" stroke={A} strokeWidth="2.4" />
        <circle cx={x1 + 146} cy={y + 88} r="5" fill={C.ink} />
        <circle cx={x1 + 74} cy={y + 130} r="10" fill={A} />
        <circle cx={x1 + 74} cy={y + 130} r="16" fill={A} fillOpacity="0.18" />
        <path d={`M${x1 + 69} ${y + 130} h10 m-5 -5 v10`} stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
        <rect x={x1 + 14} y={y + 214} width={w - 28} height="44" rx="9" fill="#ffffff" stroke={C.border} />
        <T x={x1 + 26} y={y + 232} fill={C.ink} size={9.6} weight="700">
          Arriving in 12 min
        </T>
        <T x={x1 + 26} y={y + 246} fill={C.muted} size={7.4}>
          2.4 km away · updated 8 s ago
        </T>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle cx={x1 + 26 + i * 40} cy={y + 278} r="6" fill={i < 3 ? A : '#ffffff'} stroke={i < 3 ? A : C.border} />
            {i < 3 ? <path d={`M${x1 + 23 + i * 40} ${y + 278} l2 2 l4 -4`} stroke="#ffffff" strokeWidth="1.3" fill="none" strokeLinecap="round" /> : null}
            {i < 3 ? <line x1={x1 + 32 + i * 40} y1={y + 278} x2={x1 + 60 + i * 40} y2={y + 278} stroke={A} strokeWidth="1.6" /> : null}
            <T x={x1 + 26 + i * 40} y={y + 293} fill={i < 3 ? C.ink : C.muted} size={6.4} weight="600" anchor="middle">
              {['Placed', 'Packed', 'Picked', 'Home'][i]}
            </T>
          </g>
        ))}
        <rect x={x1 + 14} y={y + PH.h - 32} width="76" height="24" rx="12" fill="#ffffff" stroke={A} />
        <T x={x1 + 52} y={y + PH.h - 16} fill={A} size={7.6} weight="700" anchor="middle">
          Call driver
        </T>
        <rect x={x1 + 98} y={y + PH.h - 32} width="56" height="24" rx="12" fill={A} />
        <T x={x1 + 126} y={y + PH.h - 16} fill="#ffffff" size={7.6} weight="700" anchor="middle">
          Chat
        </T>
      </Phone>

      {/* 2 - driver run sheet */}
      <Phone x={x2} caption="Driver run sheet">
        <AppBar x={x2} title="Today · 14 stops" fill={C.ink} back={false} />
        <rect x={x2 + 1} y={y + 66} width={w - 2} height="34" fill={A} fillOpacity="0.08" />
        <T x={x2 + 14} y={y + 82} fill={C.ink} size={8} weight="700">
          Route optimised
        </T>
        <T x={x2 + 14} y={y + 94} fill={C.muted} size={7}>
          38 km · est. finish 17:40
        </T>
        <rect x={x2 + w - 62} y={y + 74} width="48" height="18" rx="9" fill={A} />
        <T x={x2 + w - 38} y={y + 86} fill="#ffffff" size={7} weight="700" anchor="middle">
          NAVIGATE
        </T>
        {[
          ['#7741', 'Mozartstraße 12', '12 min', 'NEXT', A],
          ['#7742', 'Friedrichstraße 8', '24 min', null, null],
          ['#7739', 'Alexanderplatz 3', 'Done', 'DONE', C.green],
          ['#7738', 'Schillerstraße 44', 'Done', 'DONE', C.green],
          ['#7745', 'Viale Monza 71', '48 min', null, null],
        ].map(([id, addr, eta, tag, tagColor], i) => (
          <g key={id}>
            <rect x={x2 + 12} y={y + 108 + i * 40} width={w - 24} height="36" rx="8" fill={i === 0 ? '#ffffff' : C.panel} stroke={i === 0 ? A : C.border} />
            <T x={x2 + 22} y={y + 124 + i * 40} fill={C.ink} size={7.8} weight="700">
              {id}
            </T>
            <T x={x2 + 22} y={y + 136 + i * 40} fill={C.muted} size={6.8}>
              {addr}
            </T>
            {tag ? <Pill x={x2 + w - 58} y={y + 114 + i * 40} w={46} label={tag} color={tagColor} size={6.4} /> : null}
            <T x={x2 + w - 22} y={y + 136 + i * 40} fill={C.muted} size={6.8} anchor="end">
              {eta}
            </T>
          </g>
        ))}
      </Phone>

      {/* 3 - proof of delivery */}
      <Phone x={x3} caption="Proof of delivery">
        <AppBar x={x3} title="Complete stop" fill={A} />
        <T x={x3 + 14} y={y + 88} fill={C.muted} size={7.4} weight="700">
          ORDER #7741 · VIA TORINO 12
        </T>
        <rect x={x3 + 14} y={y + 98} width={w - 28} height="86" rx="8" fill={C.panel} stroke={C.border} strokeDasharray="4 3" />
        <path d={`M${x3 + 40} ${y + 168} q18 -46 34 -14 q14 28 30 -30 q10 -18 22 12`} stroke={C.ink} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <T x={x3 + w / 2} y={y + 178} fill={C.muted} size={6.8} anchor="middle">
          Signed by G. Marchetti
        </T>
        <Photo id={`${id}-pod`} src={P.giftBox} x={x3 + 14} y={y + 194} w={72} h={58} r={8} />
        <rect x={x3 + 14} y={y + 236} width="72" height="16" rx="0" fill="#0d1b30" opacity="0.55" />
        <T x={x3 + 50} y={y + 247} fill="#ffffff" size={6.6} anchor="middle">
          Photo attached
        </T>
        <rect x={x3 + 94} y={y + 194} width="60" height="58" rx="8" fill="#ffffff" stroke={C.border} />
        <T x={x3 + 124} y={y + 214} fill={C.muted} size={6.6} anchor="middle">
          Delivered
        </T>
        <T x={x3 + 124} y={y + 230} fill={C.ink} size={10} weight="700" anchor="middle">
          16:24
        </T>
        <T x={x3 + 124} y={y + 244} fill={C.muted} size={6.4} anchor="middle">
          GPS ✓ ±4 m
        </T>
        <rect x={x3 + 14} y={y + 256} width={w - 28} height="28" rx="8" fill={C.panel} stroke={C.border} />
        <circle cx={x3 + 30} cy={y + 270} r="6" fill={C.amber} fillOpacity="0.18" />
        <T x={x3 + 44} y={y + 267} fill={C.ink} size={7.4} weight="600">
          2 stops queued offline
        </T>
        <T x={x3 + 44} y={y + 278} fill={C.muted} size={6.6}>
          Uploads when signal returns
        </T>
        <rect x={x3 + 14} y={y + PH.h - 42} width={w - 28} height="28" rx="14" fill={A} />
        <T x={x3 + w / 2} y={y + PH.h - 23} fill="#ffffff" size={8.8} weight="700" anchor="middle">
          Confirm delivery
        </T>
      </Phone>

      <T x={320} y={20} fill={C.muted} size={8.4} weight="600" anchor="middle">
        Flutter · one codebase for the customer app and the driver app
      </T>
    </>
  )
}

/* Android field service, drawn around the thing that actually matters on site:
   working with no signal. */
function MobileField() {
  const A = BRAND.php
  const [x1, x2, x3] = phoneX
  const { y, w } = PH

  return (
    <>
      <Card />

      {/* 1 - job list */}
      <Phone x={x1} caption="Today's jobs">
        <AppBar x={x1} title="Field Service" fill={A} back={false} />
        <rect x={x1 + 1} y={y + 66} width={w - 2} height="22" fill={C.amber} fillOpacity="0.14" />
        <circle cx={x1 + 18} cy={y + 77} r="4" fill={C.amber} />
        <T x={x1 + 28} y={y + 80} fill="#8a5a06" size={7} weight="700">
          Offline · 3 changes queued
        </T>
        {[
          ['08:30', 'Boiler service', 'Wagnerstraße 8', 'DONE', C.green],
          ['10:00', 'Leak inspection', 'Hauptstraße 21', 'DONE', C.green],
          ['11:45', 'Pump replacement', 'Bahnhofstraße 5', 'ACTIVE', A],
          ['14:15', 'Annual check', 'Goethestraße 17', 'TODO', C.muted],
          ['16:00', 'Emergency call-out', 'Lindenstraße 3', 'TODO', C.muted],
        ].map(([time, job, addr, tag, tagColor], i) => (
          <g key={job}>
            <rect x={x1 + 12} y={y + 96 + i * 46} width={w - 24} height="40" rx="8" fill={tag === 'ACTIVE' ? '#ffffff' : C.panel} stroke={tag === 'ACTIVE' ? A : C.border} />
            <T x={x1 + 22} y={y + 112 + i * 46} fill={C.muted} size={6.8} weight="700">
              {time}
            </T>
            <T x={x1 + 22} y={y + 126 + i * 46} fill={C.ink} size={8} weight="600">
              {job}
            </T>
            <T x={x1 + w - 22} y={y + 126 + i * 46} fill={C.muted} size={6.6} anchor="end">
              {addr}
            </T>
            <Pill x={x1 + w - 68} y={y + 102 + i * 46} w={56} label={tag} color={tagColor} size={6.2} />
          </g>
        ))}
      </Phone>

      {/* 2 - job detail */}
      <Phone x={x2} caption="Checklist & parts">
        <AppBar x={x2} title="Pump replacement" fill={A} />
        <T x={x2 + 14} y={y + 84} fill={C.muted} size={7} weight="700">
          JOB #FS-2291 · BAHNHOFSTRASSE 5
        </T>
        <line x1={x2 + 14} y1={y + 92} x2={x2 + w - 14} y2={y + 92} stroke={C.hair} />
        <T x={x2 + 14} y={y + 110} fill={C.ink} size={8} weight="700">
          CHECKLIST
        </T>
        {[
          ['Isolate water supply', true],
          ['Drain circuit', true],
          ['Fit replacement pump', true],
          ['Pressure test 2 bar', false],
          ['Customer walkthrough', false],
        ].map(([label, done], i) => (
          <g key={label}>
            <rect x={x2 + 14} y={y + 118 + i * 20} width="14" height="14" rx="4" fill={done ? A : '#ffffff'} stroke={done ? A : C.border} />
            {done ? <path d={`M${x2 + 18} ${y + 125 + i * 20} l3 3 l6 -6`} stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" /> : null}
            <T x={x2 + 36} y={y + 129 + i * 20} fill={done ? C.muted : C.ink} size={7.8}>
              {label}
            </T>
          </g>
        ))}
        <line x1={x2 + 14} y1={y + 226} x2={x2 + w - 14} y2={y + 226} stroke={C.hair} />
        <T x={x2 + 14} y={y + 242} fill={C.ink} size={8} weight="700">
          PARTS USED
        </T>
        {[
          ['Circulator pump 25/6', '1'],
          ['Gasket set', '2'],
          ['Isolation valve', '1'],
        ].map(([part, qty], i) => (
          <g key={part}>
            <T x={x2 + 14} y={y + 258 + i * 15} fill={C.muted} size={7.4}>
              {part}
            </T>
            <T x={x2 + w - 14} y={y + 258 + i * 15} fill={C.ink} size={7.4} weight="700" anchor="end">
              ×{qty}
            </T>
          </g>
        ))}
        <rect x={x2 + 14} y={y + PH.h - 42} width={w - 28} height="28" rx="8" fill={A} />
        <T x={x2 + w / 2} y={y + PH.h - 23} fill="#ffffff" size={8.8} weight="700" anchor="middle">
          Save offline
        </T>
      </Phone>

      {/* 3 - sync */}
      <Phone x={x3} caption="Sync queue">
        <AppBar x={x3} title="Sync" fill={C.ink} back={false} />
        <rect x={x3 + 1} y={y + 66} width={w - 2} height="46" fill={C.green} fillOpacity="0.1" />
        <circle cx={x3 + 30} cy={y + 89} r="12" fill={C.green} fillOpacity="0.2" />
        <path d={`M${x3 + 25} ${y + 89} l3.5 3.5 l7 -7`} stroke={C.green} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <T x={x3 + 50} y={y + 86} fill={C.ink} size={8.6} weight="700">
          Back online
        </T>
        <T x={x3 + 50} y={y + 98} fill={C.muted} size={7}>
          Uploading 3 queued records
        </T>
        {[
          ['FS-2289 · report + photos', 'SENT', C.green, 100],
          ['FS-2290 · signature', 'SENT', C.green, 100],
          ['FS-2291 · parts + checklist', 'SENDING', A, 62],
          ['FS-2292 · time sheet', 'QUEUED', C.muted, 0],
        ].map(([label, tag, tagColor, pct], i) => (
          <g key={label}>
            <T x={x3 + 14} y={y + 130 + i * 38} fill={C.ink} size={7.6} weight="600">
              {label}
            </T>
            <rect x={x3 + 14} y={y + 137 + i * 38} width={w - 28} height="5" rx="2.5" fill={C.hair} />
            <rect x={x3 + 14} y={y + 137 + i * 38} width={((w - 28) * pct) / 100} height="5" rx="2.5" fill={tagColor} />
            <T x={x3 + 14} y={y + 154 + i * 38} fill={tagColor} size={6.6} weight="700">
              {tag}
            </T>
          </g>
        ))}
        <line x1={x3 + 14} y1={y + 286} x2={x3 + w - 14} y2={y + 286} stroke={C.hair} />
        <T x={x3 + 14} y={y + 302} fill={C.muted} size={7}>
          Local database
        </T>
        <T x={x3 + w - 14} y={y + 302} fill={C.ink} size={7} weight="700" anchor="end">
          SQLite · 41 jobs cached
        </T>
        <T x={x3 + 14} y={y + 316} fill={C.muted} size={7}>
          Conflict strategy
        </T>
        <T x={x3 + w - 14} y={y + 316} fill={C.ink} size={7} weight="700" anchor="end">
          Last write + audit log
        </T>
      </Phone>

      <T x={320} y={20} fill={C.muted} size={8.4} weight="600" anchor="middle">
        Native Android · every screen works with no signal, then syncs
      </T>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* PHP                                                                 */
/* ------------------------------------------------------------------ */

/* The Laravel booking API: the rule that prevents double-booking, and the
   test run that proves it. */
function LaravelApi() {
  return (
    <CodeConsole
      tabs={['BookingController.php', 'routes/api.php']}
      treeLabel="BOOKING-API"
      treeActive="BookingController.php"
      tree={[
        'app/Http/',
        '  BookingController.php',
        '  AvailabilityRule.php',
        'app/Models/',
        '  Booking.php',
        '  Resource.php',
        'routes/api.php',
      ]}
      code={[
        [['<?php', 'cm']],
        [],
        [['class', 'kw'], [' ', 'pl'], ['BookingController', 'fn'], [' ', 'pl'], ['extends', 'kw'], [' Controller', 'pl']],
        [['{', 'pl']],
        [['    ', 'pl'], ['public function', 'kw'], [' ', 'pl'], ['store', 'fn'], ['(StoreBookingRequest ', 'pl'], ['$request', 'var'], [')', 'pl']],
        [['    {', 'pl']],
        [['        ', 'pl'], ['return', 'kw'], [' DB::', 'pl'], ['transaction', 'fn'], ['(', 'pl'], ['fn', 'kw'], [' =>', 'op'], [' {', 'pl']],
        [['            ', 'pl'], ['$slot', 'var'], [' = Slot::', 'pl'], ['lockForUpdate', 'fn'], ['()', 'pl']],
        [['                ->', 'pl'], ['available', 'fn'], ['(', 'pl'], ['$request', 'var'], ['->from, ', 'pl'], ['$request', 'var'], ['->to)', 'pl']],
        [['                ->', 'pl'], ['firstOr', 'fn'], ['(', 'pl'], ['fn', 'kw'], [' =>', 'op'], [' ', 'pl'], ['throw new', 'kw'], [' SlotTaken);', 'pl']],
        [],
        [['            ', 'pl'], ['$booking', 'var'], [' = ', 'pl'], ['$slot', 'var'], ['->', 'pl'], ['book', 'fn'], ['(', 'pl'], ['$request', 'var'], ['->', 'pl'], ['user', 'fn'], ['());', 'pl']],
        [['            BookingConfirmed::', 'pl'], ['dispatch', 'fn'], ['(', 'pl'], ['$booking', 'var'], [');', 'pl']],
        [],
        [['            ', 'pl'], ['return new', 'kw'], [' ', 'pl'], ['BookingResource', 'fn'], ['(', 'pl'], ['$booking', 'var'], [');', 'pl']],
        [['        });', 'pl'], ['  ', 'pl'], ['// row lock ends double-booking', 'cm']],
      ]}
      terminalMeta="php 8.3 · laravel 11 · mysql 8"
      prompt="$ php artisan test --filter=Booking"
      log={[
        ['PASS', 'Feature', 'BookingTest › books an available slot', '#c3e88d'],
        ['PASS', 'Feature', 'BookingTest › rejects an overlapping slot', '#c3e88d'],
        ['PASS', 'Feature', 'BookingTest › holds under 40 concurrent writes', '#c3e88d'],
        ['PASS', 'Feature', 'WebhookTest › retries a failed callback 3x', '#c3e88d'],
        ['PASS', 'Feature', 'CalendarTest › pushes to Google Calendar', '#c3e88d'],
      ]}
      footer="Tests: 68 passed (214 assertions) · Duration 4.12s · Coverage 91%"
      treeW={126}
    />
  )
}

/* The PHP back office: who owes what, and how old it is. */
function PhpCrm() {
  return (
    <AdminApp
      chromeLabel="Back office"
      appName="Studio CRM"
      monogram="SC"
      accent={BRAND.php}
      nav={['Dashboard', 'Clients', 'Invoices', 'Quotes', 'Time sheets', 'Reports']}
      active="Invoices"
      title="Invoices"
      subtitle="Issued, chased and reconciled from one place"
      action="New invoice"
      stats={[
        ['OUTSTANDING', '€ 74,320', '18 open', C.amber],
        ['OVERDUE > 30 DAYS', '€ 12,880', '4 clients', C.red],
        ['COLLECTED THIS MONTH', '€ 96,110', '+11.2%', C.green],
      ]}
      columns={['INVOICE', 'CLIENT', 'ISSUED', 'DUE', 'AMOUNT', 'STATUS']}
      colX={[14, 82, 190, 250, 310, 380]}
      rows={[
        ['#2024-318', 'Hoffmann GmbH', '02 Aug', '01 Sep', '€ 8,400', ['OVERDUE', C.red]],
        ['#2024-317', 'Nordlicht Group', '05 Aug', '04 Sep', '€ 12,150', ['SENT', BRAND.php]],
        ['#2024-315', 'Bergmann & Co', '09 Aug', '08 Sep', '€ 3,900', ['PAID', C.green]],
        ['#2024-312', 'Rheinwerk AG', '14 Aug', '13 Sep', '€ 21,600', ['SENT', BRAND.php]],
        ['#2024-309', 'Falkenberg Immobilien', '18 Aug', '17 Sep', '€ 5,270', ['DRAFT', C.muted]],
        ['#2024-304', 'Meissner Logistik', '21 Aug', '20 Sep', '€ 9,850', ['PAID', C.green]],
      ]}
    />
  )
}

/* One checkout, three providers, and the webhook log that reconciles them. */
function PaymentGateway() {
  const A = BRAND.php
  const providers = [
    ['Stripe', 'cards · SCA · 3DS', '#635bff'],
    ['PayPal', 'wallet · express', '#003087'],
    ['Satispay', 'local · QR', '#f94b4b'],
  ]

  return (
    <>
      <Card />
      <BrowserBar label="Gateway adapter" />

      <T x={26} y={70} fill={C.ink} size={11.5} weight="700">
        Payment adapter layer
      </T>
      <T x={26} y={85} fill={C.muted} size={8.2}>
        One interface for the shop, three providers behind it — swapped without touching checkout code.
      </T>
      <line x1="26" y1="98" x2="614" y2="98" stroke={C.hair} />

      {/* Checkout */}
      <rect x="26" y="116" width="124" height="120" rx="10" fill={C.panel} stroke={C.border} />
      <T x={88} y={138} fill={C.ink} size={9} weight="700" anchor="middle">
        Checkout
      </T>
      <T x={88} y={151} fill={C.muted} size={7.2} anchor="middle">
        web + mobile
      </T>
      {['Order total', 'Currency', 'Customer', 'Idempotency key'].map((label, i) => (
        <g key={label}>
          <rect x="38" y={162 + i * 17} width="100" height="13" rx="4" fill="#ffffff" stroke={C.border} />
          <T x={44} y={171 + i * 17} fill={C.muted} size={6.6}>
            {label}
          </T>
        </g>
      ))}

      {/* Adapter */}
      <path d="M150 176 h44" stroke={A} strokeWidth="1.6" strokeDasharray="4 3" />
      <path d="M194 176 l-7 -4 v8 z" fill={A} />
      <rect x="200" y="116" width="150" height="120" rx="10" fill={A} fillOpacity="0.07" stroke={A} strokeOpacity="0.35" />
      <T x={275} y={138} fill={A} size={9} weight="700" anchor="middle">
        PaymentGateway
      </T>
      <T x={275} y={151} fill={C.muted} size={7.2} anchor="middle">
        PHP interface
      </T>
      {['authorize()', 'capture()', 'refund()', 'handleWebhook()'].map((method, i) => (
        <g key={method}>
          <rect x="212" y={162 + i * 17} width="126" height="13" rx="4" fill="#ffffff" stroke={C.border} />
          <T x={218} y={171 + i * 17} fill={C.ink} size={6.8} mono>
            {method}
          </T>
        </g>
      ))}

      {/* Providers */}
      {providers.map(([name, detail, color], i) => (
        <g key={name}>
          <path d={`M350 176 C 372 176, 372 ${140 + i * 40}, 396 ${140 + i * 40}`} stroke={color} strokeWidth="1.4" fill="none" opacity="0.6" />
          <path d={`M396 ${140 + i * 40} l-7 -4 v8 z`} fill={color} opacity="0.6" />
          <rect x="400" y={124 + i * 40} width="214" height="32" rx="8" fill="#ffffff" stroke={C.border} />
          <rect x="400" y={124 + i * 40} width="3.5" height="32" rx="1.75" fill={color} />
          <T x={414} y={139 + i * 40} fill={C.ink} size={8.4} weight="700">
            {name}
          </T>
          <T x={414} y={150 + i * 40} fill={C.muted} size={6.8}>
            {detail}
          </T>
          <Pill x={556} y={132 + i * 40} w={48} label="LIVE" color={C.green} size={6.4} />
        </g>
      ))}

      {/* Webhook log */}
      <rect x="26" y="252" width="588" height="130" rx="10" fill="#0f172a" />
      <T x={40} y={272} fill="#475569" size={7.4} weight="700" mono>
        WEBHOOK RECONCILIATION · signature verified · replay-safe
      </T>
      <line x1="26" y1="280" x2="614" y2="280" stroke="#1e293b" />
      {[
        ['12:04:11', 'stripe', 'payment_intent.succeeded  #pi_3Q7…  € 247,00', '#c3e88d'],
        ['12:04:11', 'ledger', 'order 88214 → PAID  (idempotent, 1st delivery)', '#a6accd'],
        ['12:07:36', 'paypal', 'PAYMENT.CAPTURE.COMPLETED  € 89,00', '#c3e88d'],
        ['12:07:36', 'ledger', 'order 88215 → PAID', '#a6accd'],
        ['12:09:02', 'stripe', 'payment_intent.succeeded  #pi_3Q7…  duplicate', '#fbbf24'],
        ['12:09:02', 'ledger', 'ignored — already reconciled, no double credit', '#5f7e97'],
      ].map(([time, src, msg, color], i) => (
        <g key={i}>
          <T x={40} y={298 + i * 14} fill="#475569" size={7.6} mono>
            {time}
          </T>
          <T x={96} y={298 + i * 14} fill="#82aaff" size={7.6} mono>
            {src}
          </T>
          <T x={146} y={298 + i * 14} fill={color} size={7.6} mono>
            {msg}
          </T>
        </g>
      ))}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* WordPress                                                           */
/* ------------------------------------------------------------------ */

/* WooCommerce from the shopper's side. */
function WooStore({ id }) {
  return (
    <Storefront
      id={id}
      heroPhoto={P.oliveGrove}
      promo="HARVEST 2024 IS IN · SHIPPING ACROSS THE EU"
      brand="PODERE SANT’ELENA"
      nav={['Shop', 'Olive oil', 'Preserves', 'Gift boxes', 'Our farm']}
      accent={BRAND.woo}
      accentSoft={BRAND.wooSoft}
      hero={['From the grove,', 'straight to you']}
      heroSub="Cold-pressed within four hours of picking. Family-run since 1954."
      cta="Shop the harvest"
      heroTag="DOP certified · Puglia"
      shelf="Shop by product"
      products={[
        ['Extra virgin 500ml', '€ 18,00', 'NEW HARVEST', BRAND.woo, P.oliveOilBottle],
        ['Tasting trio', '€ 46,00', null, null, P.oilTastingSet],
        ['Sun-dried tomatoes', '€ 9,50', null, null, P.preservesJars],
        ['Gift box · large', '€ 72,00', 'ONLY 6 LEFT', C.amber, P.giftBox],
      ]}
    />
  )
}

/* The multilingual corporate site as the client edits it: WordPress block
   editor, with the translation state visible in the sidebar. */
function WordPressEditor({ id }) {
  const WPBAR = BRAND.wpSidebar
  const BLUE = BRAND.wp

  return (
    <>
      <Card fill="#f0f0f1" />

      {/* Admin bar */}
      <path d="M14 0 H626 A14 14 0 0 1 640 14 V32 H0 V14 A14 14 0 0 1 14 0 Z" fill={WPBAR} />
      <circle cx="22" cy="16" r="7" fill="none" stroke={BRAND.wpSidebarInk} strokeWidth="1.4" />
      <path d="M22 9 v14 M15.4 13 h13.2 M15.4 19 h13.2" stroke={BRAND.wpSidebarInk} strokeWidth="0.9" />
      <T x={38} y={19} fill="#ffffff" size={8.4} weight="600">
        Nordovest Engineering
      </T>
      <T x={168} y={19} fill={BRAND.wpSidebarInk} size={8}>
        Comments 2
      </T>
      <T x={620} y={19} fill={BRAND.wpSidebarInk} size={8} anchor="end">
        Howdy, Chiara
      </T>

      {/* Editor toolbar */}
      <rect x="0" y="32" width="640" height="34" fill="#ffffff" />
      <line x1="0" y1="66" x2="640" y2="66" stroke="#dcdcde" />
      <rect x="12" y="40" width="18" height="18" rx="4" fill={BLUE} />
      <path d="M21 45 v8 M17 49 h8" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      {[0, 1].map((i) => (
        <path key={i} d={`M${44 + i * 22} 49 h9 m0 0 l-3 -3 m3 3 l-3 3`} stroke="#3c434a" strokeWidth="1.3" fill="none" strokeLinecap="round" transform={i === 0 ? 'scale(-1,1) translate(-104,0)' : undefined} />
      ))}
      <T x={104} y={53} fill="#3c434a" size={8.2}>
        Page · Chi siamo
      </T>
      <rect x="424" y="40" width="66" height="18" rx="4" fill="#ffffff" stroke={BLUE} />
      <T x={457} y={53} fill={BLUE} size={7.8} weight="600" anchor="middle">
        Preview
      </T>
      <rect x="498" y="40" width="58" height="18" rx="4" fill={BLUE} />
      <T x={527} y={53} fill="#ffffff" size={7.8} weight="600" anchor="middle">
        Update
      </T>
      <circle cx="580" cy="49" r="9" fill="#f0f0f1" />
      <path d="M576 46 h8 M576 49 h8 M576 52 h8" stroke="#3c434a" strokeWidth="1.2" />
      <circle cx="606" cy="49" r="9" fill="#f0f0f1" />
      <circle cx="606" cy="49" r="3" fill="#3c434a" />

      {/* Canvas */}
      <rect x="0" y="66" width="452" height="334" fill="#f0f0f1" />
      <rect x="34" y="82" width="384" height="300" fill="#ffffff" stroke="#e3e3e4" />
      <Photo id={`${id}-cover`} src={P.industrialPlant} x={34} y={82} w={384} h={86} r={0} />
      <rect x="34" y="82" width="384" height="86" fill="#0d1b30" opacity="0.58" />
      <rect x="33" y="81" width="386" height="88" fill="none" stroke={BLUE} strokeWidth="1.4" />
      <rect x="33" y="72" width="72" height="12" rx="2" fill={BLUE} />
      <T x={69} y={81} fill="#ffffff" size={6.6} weight="700" anchor="middle">
        COVER BLOCK
      </T>
      <T x={54} y={118} fill="#ffffff" size={16} weight="700">
        Ingegneria dal 1978
      </T>
      <T x={54} y={136} fill="#dbe3ec" size={8.4}>
        Progettazione industriale, impianti e collaudo in tutta Europa.
      </T>
      <rect x="54" y="144" width="76" height="18" rx="9" fill={BLUE} />
      <T x={92} y={156} fill="#ffffff" size={7.4} weight="600" anchor="middle">
        Contattaci
      </T>

      <T x={54} y={192} fill={C.ink} size={10.5} weight="700">
        I nostri servizi
      </T>
      {['Progettazione', 'Impianti', 'Collaudo'].map((title, i) => (
        <g key={title}>
          <rect x={54 + i * 122} y="202" width="110" height="76" rx="6" fill={C.panel} stroke="#e3e3e4" />
          <rect x={66 + i * 122} y="214" width="18" height="18" rx="5" fill={BLUE} fillOpacity="0.18" />
          <T x={66 + i * 122} y={248} fill={C.ink} size={8} weight="700">
            {title}
          </T>
          <rect x={66 + i * 122} y="256" width="80" height="4" rx="2" fill={C.hair} />
          <rect x={66 + i * 122} y="264" width="62" height="4" rx="2" fill={C.hair} />
        </g>
      ))}
      <rect x="54" y="296" width="344" height="66" rx="6" fill="#ffffff" stroke="#dcdcde" strokeDasharray="4 3" />
      <T x={226} y={326} fill={C.muted} size={8} anchor="middle">
        Reusable block · Case studies
      </T>
      <T x={226} y={340} fill={C.barMid} size={7} anchor="middle">
        Edited once, updated on every page that uses it
      </T>

      {/* Settings sidebar */}
      <rect x="452" y="66" width="188" height="334" fill="#ffffff" />
      <path d="M452 66 H640 V386 A14 14 0 0 1 626 400 H452 Z" fill="#ffffff" />
      <line x1="452" y1="66" x2="452" y2="400" stroke="#dcdcde" />
      {['Page', 'Block'].map((tab, i) => (
        <g key={tab}>
          <T x={476 + i * 52} y={88} fill={i === 0 ? C.ink : C.muted} size={8.4} weight={i === 0 ? '700' : '400'}>
            {tab}
          </T>
          {i === 0 ? <rect x="470" y="94" width="34" height="2" fill={BLUE} /> : null}
        </g>
      ))}
      <line x1="452" y1="96" x2="640" y2="96" stroke="#dcdcde" />

      <T x={468} y={116} fill={C.ink} size={8} weight="700">
        LANGUAGES
      </T>
      {[
        ['Deutsch', 'Original', C.muted],
        ['English', 'Translated', C.green],
        ['Español', 'Translated', C.green],
        ['Français', 'Needs update', C.amber],
      ].map(([lang, state, color], i) => (
        <g key={lang}>
          <rect x="468" y={126 + i * 26} width="156" height="21" rx="5" fill={C.panel} stroke="#e3e3e4" />
          <T x={478} y={140 + i * 26} fill={C.ink} size={7.6} weight="600">
            {lang}
          </T>
          <T x={614} y={140 + i * 26} fill={color} size={6.8} weight="700" anchor="end">
            {state}
          </T>
        </g>
      ))}

      <line x1="468" y1="240" x2="624" y2="240" stroke="#dcdcde" />
      <T x={468} y={258} fill={C.ink} size={8} weight="700">
        SEO
      </T>
      {[
        ['Meta title', '58 / 60'],
        ['Meta description', '148 / 160'],
        ['Schema', 'Organization'],
        ['Canonical', 'Set per language'],
      ].map(([label, value], i) => (
        <g key={label}>
          <T x={468} y={274 + i * 17} fill={C.muted} size={7.2}>
            {label}
          </T>
          <T x={624} y={274 + i * 17} fill={C.ink} size={7.2} weight="600" anchor="end">
            {value}
          </T>
        </g>
      ))}
      <rect x="468" y="350" width="156" height="30" rx="6" fill={C.green} fillOpacity="0.1" />
      <circle cx="484" cy="365" r="6" fill={C.green} fillOpacity="0.25" />
      <path d="M481.5 365 l2 2 l4.5 -4.5" stroke={C.green} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <T x={496} y={362} fill={C.ink} size={7.2} weight="600">
        Core Web Vitals
      </T>
      <T x={496} y={373} fill={C.muted} size={6.6}>
        Passing on mobile and desktop
      </T>
    </>
  )
}

/* The custom plugin: a proper WordPress admin screen, not a settings page
   bolted onto the theme. */
function WordPressPlugin() {
  return (
    <AdminApp
      chromeLabel="wp-admin"
      appName="Lead Routing"
      monogram="W"
      accent={BRAND.wp}
      sidebarFill={BRAND.wpSidebar}
      sidebarInk={BRAND.wpSidebarInk}
      sidebarActiveFill={BRAND.wp}
      nav={['Dashboard', 'Leads', 'Routing rules', 'Integrations', 'Logs', 'Settings']}
      active="Leads"
      title="Leads"
      subtitle="Custom post type, custom columns, routed by rule — inside wp-admin"
      action="Add rule"
      stats={[
        ['LEADS THIS MONTH', '412', '+18%', C.green],
        ['AUTO-ROUTED', '97.3%', '11 manual', BRAND.wp],
        ['CRM SYNC FAILURES', '0', '7 days', C.green],
      ]}
      columns={['LEAD', 'SOURCE', 'ROUTED TO', 'CRM', 'STATUS']}
      colX={[14, 110, 200, 300, 372]}
      rows={[
        ['#L-2841', 'Contact form', 'Sales · North', 'Synced', ['NEW', BRAND.wp]],
        ['#L-2840', 'Quote request', 'Sales · Export', 'Synced', ['CONTACTED', C.green]],
        ['#L-2838', 'Newsletter', 'Marketing', 'Synced', ['NURTURE', C.muted]],
        ['#L-2835', 'Contact form', 'Sales · South', 'Synced', ['CONTACTED', C.green]],
        ['#L-2833', 'Landing page', 'Sales · North', 'Retrying', ['NEW', BRAND.wp]],
        ['#L-2829', 'Quote request', 'Sales · Export', 'Synced', ['WON', C.green]],
      ]}
    />
  )
}


/* ------------------------------------------------------------------ */
/* Delivered projects without a usable screenshot                      */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */

export const extraScenes = {
  shopifyTheme: ShopifyTheme,
  shopifyHeadless: ShopifyHeadless,
  shopifyApp: ShopifyApp,
  mobileShopping: MobileShopping,
  mobileDelivery: MobileDelivery,
  mobileField: MobileField,
  laravelApi: LaravelApi,
  phpCrm: PhpCrm,
  paymentGateway: PaymentGateway,
  wooStore: WooStore,
  wordpressEditor: WordPressEditor,
  wordpressPlugin: WordPressPlugin,
}
