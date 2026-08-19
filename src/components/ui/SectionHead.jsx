import Reveal from './Reveal'

export default function SectionHead({ eyebrow, title, intro, center = false, id }) {
  return (
    <Reveal className={`section__head ${center ? 'section__head--center' : ''}`.trim()}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="section__title" id={id}>
        {title}
      </h2>
      {intro ? <p className="section__intro">{intro}</p> : null}
    </Reveal>
  )
}
