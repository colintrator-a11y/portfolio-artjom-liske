import { useContent } from '../i18n/LanguageContext'
import Panel from './ui/Panel'
import Reveal from './ui/Reveal'
import './Process.css'

/**
 * The six steps as one track rather than a stacked matrix.
 *
 * Laid out along a single rule so the panel reads left to right as a sequence,
 * which is what a process is. Below the tablet breakpoint the track turns
 * vertical and the rule runs down the left of the steps instead.
 */
export default function Process() {
  const { process, nav } = useContent()

  return (
    <Panel
      id="process"
      label={nav.find((item) => item.id === 'process')?.label}
      labelledBy="process-title"
    >
      <Reveal className="section__head section__head--center">
        <h2 className="section__title" id="process-title">
          {process.heading}
        </h2>
        <p className="section__intro">{process.intro}</p>
      </Reveal>

      <ol className="track">
        {process.steps.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 70} className="track__step">
            <span className="track__node" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="track__title">{step.title}</h3>
            <p className="track__detail">{step.detail}</p>
            <p className="track__output">{step.output}</p>
          </Reveal>
        ))}
      </ol>
    </Panel>
  )
}
