import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import Panel from './ui/Panel'
import Reveal from './ui/Reveal'
import './About.css'

export default function About() {
  const { about, profile, ui, nav } = useContent()

  return (
    <Panel
      id="about"
      label={nav.find((item) => item.id === 'about')?.label}
      labelledBy="about-title"
    >
      <div className="about__top">
        <div className="about__main">
          <Reveal>
            <h2 className="section__title" id="about-title">
              {about.heading}
            </h2>
          </Reveal>

          {about.paragraphs.map((text, index) => (
            <Reveal as="p" key={index} delay={index * 60} className="about__paragraph">
              {text}
            </Reveal>
          ))}

        </div>

        <div className="about__highlights">
          {about.highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} className="about__highlight">
              <span className="about__highlightIcon">
                <Icon name="check" size={14} strokeWidth={2.4} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/*
        The credentials read across rather than down: as a tall card beside the
        biography it was the single thing keeping this panel from fitting a
        screen, and four short columns say the same in a third of the height.
      */}
      <Reveal className="about__aside" delay={140}>
        <div className="card about__strip">
          <div className="about__col">
            <div className="about__identity">
              <img
                className="about__avatar"
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                width="172"
                height="172"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3 className="about__name">{profile.name}</h3>
                <p className="about__title">{profile.title}</p>
              </div>
            </div>

            {/* Inside this column rather than a row of its own: the identity
                column is shorter than the facts beside it, so the note rides
                in space the strip has already paid for. */}
            {profile.profileUrl ? (
              <a
                className="about__note"
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="globe" size={15} />
                <span>{ui.profileNote}</span>
              </a>
            ) : (
              <p className="about__note about__note--static">
                <Icon name="globe" size={15} />
                <span>{ui.profileNote}</span>
              </p>
            )}
          </div>

          <dl className="about__facts">
            {about.facts.map((fact) => (
              <div
                className={`about__fact ${fact.lead ? 'about__fact--lead' : ''}`.trim()}
                key={fact.label}
              >
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="about__block">
            <h4 className="about__blockTitle">{ui.certifications}</h4>
            <ul className="about__certs">
              {about.certifications.map((cert) => (
                <li key={cert.name}>
                  <span>{cert.name}</span>
                  <strong>{cert.score}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="about__block">
            <h4 className="about__blockTitle">{ui.languagesTitle}</h4>
            <ul className="about__langs">
              {about.languages.map((lang) => (
                <li key={lang.name}>
                  <strong>{lang.name}</strong>
                  <span>{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Panel>
  )
}
