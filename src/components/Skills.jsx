import { useCallback, useEffect, useRef, useState } from 'react'

import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './Skills.css'

/* Long enough to read a panel before the next one arrives. */
const DWELL_MS = 6500

/**
 * The stack as a deck of panels standing in depth.
 *
 * One discipline is face-on and fully readable; the rest stand behind it,
 * receding and dimming, so the whole stack is visible as depth without six
 * panels competing for the same attention. Choosing a discipline deals it to
 * the front and the others fall in behind.
 *
 * It advances on its own until someone takes an interest - hovering or
 * focusing pauses it, and choosing a discipline outright stops it, because
 * after that the reader is driving and moving the deck under them would be
 * rude.
 */
export default function Skills() {
  const { skills } = useContent()
  const count = skills.categories.length
  const [active, setActive] = useState(0)
  const [held, setHeld] = useState(false)
  const [taken, setTaken] = useState(false)
  const tabs = useRef([])

  useEffect(() => {
    if (held || taken) return undefined
    const timer = setInterval(() => setActive((i) => (i + 1) % count), DWELL_MS)
    return () => clearInterval(timer)
  }, [held, taken, count])

  const choose = useCallback((index) => {
    setActive(index)
    setTaken(true)
  }, [])

  // Left and right walk the rail; the deck follows, as a tab strip should.
  const onKeyDown = useCallback(
    (event) => {
      const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
      if (!step) return
      event.preventDefault()
      const next = (active + step + count) % count
      choose(next)
      tabs.current[next]?.focus()
    },
    [active, count, choose]
  )

  return (
    <section className="section section--alt" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead
          id="skills-title"
          center
          eyebrow={skills.eyebrow}
          title={skills.heading}
          intro={skills.intro}
        />

        <Reveal
          className="deck"
          onMouseEnter={() => setHeld(true)}
          onMouseLeave={() => setHeld(false)}
          onFocusCapture={() => setHeld(true)}
          onBlurCapture={() => setHeld(false)}
        >
          <div className="deck__rail" role="tablist" aria-labelledby="skills-title" onKeyDown={onKeyDown}>
            {skills.categories.map((category, index) => (
              <button
                key={category.name}
                type="button"
                role="tab"
                id={`stack-tab-${index}`}
                aria-selected={index === active}
                aria-controls={`stack-panel-${index}`}
                tabIndex={index === active ? 0 : -1}
                ref={(node) => {
                  tabs.current[index] = node
                }}
                className={`deck__pick ${index === active ? 'is-active' : ''}`.trim()}
                onClick={() => choose(index)}
              >
                <span className="deck__pickIcon">
                  <Icon name={category.icon} size={17} />
                </span>
                <span className="deck__pickText">
                  <span className="deck__pickName">{category.name}</span>
                  <span className="deck__pickCount">{category.items.length}</span>
                </span>
                {index === active && !taken && !held ? (
                  <span className="deck__timer" style={{ '--dwell': `${DWELL_MS}ms` }} aria-hidden="true" />
                ) : null}
              </button>
            ))}
          </div>

          <div className="deck__stage">
            {skills.categories.map((category, index) => {
              // Distance from the front of the deck, wrapping round the back.
              const depth = (index - active + count) % count
              return (
                <article
                  key={category.name}
                  id={`stack-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`stack-tab-${index}`}
                  aria-hidden={depth !== 0}
                  className={`deckCard ${depth === 0 ? 'is-front' : ''}`.trim()}
                  style={{ '--depth': depth, '--of': count }}
                >
                  <span className="deckCard__icon">
                    <Icon name={category.icon} size={22} />
                  </span>
                  <h3 className="deckCard__name">{category.name}</h3>
                  <p className="deckCard__caption">{category.caption}</p>

                  <ul className="deckCard__items">
                    {category.items.map((item, i) => (
                      <li key={item} className="deckCard__chip" style={{ '--i': i }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
