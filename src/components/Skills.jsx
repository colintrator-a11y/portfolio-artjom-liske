import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import Panel from './ui/Panel'
import Reveal from './ui/Reveal'
import './Skills.css'

/**
 * The stack, all of it visible at once.
 *
 * This replaced a deck that stood the six disciplines in depth and rotated one
 * to the front every few seconds. That reads well in a scrolling document,
 * where a section can afford to unfold over time - but a panel is meant to be
 * taken in at a glance, and a panel that hides five of its six parts behind a
 * timer asks the reader to wait half a minute to see what it contains.
 *
 * The four stack summaries above the grid used to sit under the hero buttons.
 * They belong here, where they caption the categories underneath them.
 */
export default function Skills() {
  const { skills, hero, nav } = useContent()

  return (
    <Panel
      id="skills"
      label={nav.find((item) => item.id === 'skills')?.label}
      labelledBy="skills-title"
      className="panel--alt"
    >
      <Reveal className="section__head section__head--center">
        <h2 className="section__title" id="skills-title">
          {skills.heading}
        </h2>
        <p className="section__intro">{skills.intro}</p>
      </Reveal>

      <ul className="skills__pillars">
        {hero.pillars.map((pillar, index) => (
          <Reveal as="li" key={pillar.title} delay={index * 60} className="skills__pillar">
            <strong>{pillar.title}</strong>
            <span>{pillar.detail}</span>
          </Reveal>
        ))}
      </ul>

      <div className="skills__grid">
        {skills.categories.map((category, index) => (
          <Reveal key={category.name} delay={(index % 3) * 80} className="card skillCard">
            <div className="skillCard__head">
              <span className="skillCard__icon">
                <Icon name={category.icon} size={19} />
              </span>
              <h3 className="skillCard__name">{category.name}</h3>
              <span className="skillCard__count">{category.items.length}</span>
            </div>

            <p className="skillCard__caption">{category.caption}</p>

            <ul className="skillCard__items">
              {category.items.map((item) => (
                <li key={item} className="chip chip--sm">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Panel>
  )
}
