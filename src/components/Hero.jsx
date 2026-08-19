import { useContent } from '../i18n/LanguageContext'
import scrollToSection from '../utils/scrollToSection'
import Icon from './ui/Icon'
import HeroVisual from './HeroVisual'
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

export default function Hero() {
  const { hero, profile } = useContent()

  const go = (id) => (event) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <Icon name="spark" size={15} />
            {hero.badge}
          </span>

          <h1 className="hero__title">
            <Headline headline={hero.headline} accent={hero.headlineAccent} />
          </h1>

          <p className="hero__role">{profile.title}</p>

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

          <ul className="hero__pillars">
            {hero.pillars.map((pillar) => (
              <li key={pillar.title} className="hero__pillar">
                <strong>{pillar.title}</strong>
                <span>{pillar.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>

      <div className="container">
        <ul className="hero__stats">
          {hero.stats.map((stat) => (
            <li key={stat.label} className="hero__stat">
              <strong className="grad-text">{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
