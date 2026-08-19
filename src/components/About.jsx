import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './About.css'

export default function About() {
  const { about, profile, ui } = useContent()

  return (
    <section className="section section--alt" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHead id="about-title" eyebrow={about.eyebrow} title={about.heading} />

        <div className="about__grid">
          <div className="about__main">
            {about.paragraphs.map((text, index) => (
              <Reveal as="p" key={index} delay={index * 80} className="about__paragraph">
                {text}
              </Reveal>
            ))}

            <div className="about__highlights">
              {about.highlights.map((item, index) => (
                <Reveal key={item.title} delay={index * 90} className="about__highlight">
                  <span className="about__highlightIcon">
                    <Icon name="check" size={15} strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="about__aside" delay={120}>
            <div className="card about__card">
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

              <dl className="about__facts">
                {about.facts.map((fact) => (
                  <div className="about__fact" key={fact.label}>
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

              {/* A link only when a profile URL is configured; otherwise the
                  same note as plain text, so the site can carry no outbound
                  link at all. */}
              {profile.profileUrl ? (
                <a
                  className="about__note"
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="globe" size={17} />
                  <span>{ui.profileNote}</span>
                </a>
              ) : (
                <p className="about__note about__note--static">
                  <Icon name="globe" size={17} />
                  <span>{ui.profileNote}</span>
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
