import { useContent } from '../i18n/LanguageContext'
import Reveal from './ui/Reveal'
import SectionHead from './ui/SectionHead'
import './Process.css'

export default function Process() {
  const { process } = useContent()

  return (
    <section className="section section--alt" id="process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead
          id="process-title"
          center
          eyebrow={process.eyebrow}
          title={process.heading}
          intro={process.intro}
        />

        <ol className="process__list">
          {process.steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={(index % 3) * 100} className="process__item">
              <div className="card process__card">
                <div className="process__head">
                  <span className="process__number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="process__line" aria-hidden="true" />
                </div>
                <h3 className="process__title">{step.title}</h3>
                <p className="process__detail">{step.detail}</p>
                <span className="process__output">{step.output}</span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
