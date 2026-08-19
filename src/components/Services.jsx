import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './Services.css'

export default function Services() {
  const { services } = useContent()

  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionHead
          id="services-title"
          center
          eyebrow={services.eyebrow}
          title={services.heading}
          intro={services.intro}
        />

        <div className="services__grid">
          {services.items.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 100} className="card service">
              <span className="service__index">{String(index + 1).padStart(2, '0')}</span>

              <span className="service__icon">
                <Icon name={service.icon} size={24} />
              </span>

              <h3 className="service__title">{service.title}</h3>
              <p className="service__summary">{service.summary}</p>
              <p className="service__description">{service.description}</p>

              <ul className="service__points">
                {service.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={13} strokeWidth={2.4} />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
