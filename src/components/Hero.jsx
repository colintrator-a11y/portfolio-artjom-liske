import { useContent } from '../i18n/LanguageContext'
import scrollToSection from '../utils/scrollToSection'
import Icon from './ui/Icon'
import HeroVisual from './HeroVisual'
import Panel from './ui/Panel'
import './Hero.css'

function Headline({ headline, accent }) {
  const index = headline.indexOf(accent)
  if (index === -1) return <>{headline}</>

  return (
    <>
      {headline.slice(0, index)}
      <span className="grad-text">{accent}</span>
      {headline.slice(index + accent.length)}
    </>
  )
}

/**
 * The opening panel: the claim, the two ways in, and the stat band.
 *
 * The pillars that used to sit under the buttons have moved to the skills
 * panel, where a summary of each stack belongs. Four more list items here
 * pushed the stat band past the fold, and the first panel has to resolve
 * inside one screen or the deck it opens has already broken its own rule.
 */
export default function Hero() {
  const { hero, nav } = useContent()

  const go = (id) => (event) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <Panel id="home" label={nav.find((item) => item.id === 'home')?.label} className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <Icon name="spark" size={15} />
            {hero.badge}
          </span>

          <h1 className="hero__title">
            <Headline headline={hero.headline} accent={hero.headlineAccent} />
          </h1>

          <p className="hero__intro">{hero.intro}</p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={`#${hero.primaryCta.target}`}
              onClick={go(hero.primaryCta.target)}
            >
              {hero.primaryCta.label}
              <Icon name="arrowRight" className="btn__icon" />
            </a>
            <a
              className="btn btn--ghost"
              href={`#${hero.secondaryCta.target}`}
              onClick={go(hero.secondaryCta.target)}
            >
              {hero.secondaryCta.label}
              <Icon name="arrowRight" className="btn__icon" />
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>

      <ul className="hero__stats">
          {hero.stats.map((stat) => (
            <li key={stat.label} className="hero__stat">
              <strong className="grad-text">{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
        ))}
      </ul>

      {/* Decorative: the panel below is reachable by scrolling, by the rail and
          by the buttons above, so this needs no accessible name of its own. */}
      <span className="hero__cue" aria-hidden="true">
        <Icon name="chevronDown" size={18} strokeWidth={2} />
      </span>
    </Panel>
  )
}
