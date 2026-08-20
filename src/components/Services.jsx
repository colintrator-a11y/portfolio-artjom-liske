import { useContent } from '../i18n/LanguageContext'
import Icon from './ui/Icon'
import Panel from './ui/Panel'
import Reveal from './ui/Reveal'
import './Services.css'

/**
 * Six capabilities as one panel.
 *
 * The long description each service carried is gone from the tile: six of them
 * could not fit a viewport alongside their summaries and point lists, and the
 * description was the part that repeated what the points already said.
 */
export default function Services() {
  const { services, nav } = useContent()

  return (
    <Panel
      id="services"
      label={nav.find((item) => item.id === 'services')?.label}
      labelledBy="services-title"
      className="panel--alt"
    >
      <Reveal className="section__head section__head--center">
        <h2 className="section__title" id="services-title">
          {services.heading}
        </h2>
        <p className="section__intro">{services.intro}</p>
      </Reveal>

      <div className="services__grid">
        {services.items.map((service, index) => (
          <Reveal key={service.title} delay={(index % 3) * 90} className="card service">
            <span className="service__icon">
              <Icon name={service.icon} size={22} />
            </span>

            <h3 className="service__title">{service.title}</h3>
            <p className="service__summary">{service.summary}</p>

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
    </Panel>
  )
}
