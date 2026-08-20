import Icon from './ui/Icon'

/**
 * The portrait that opens the page, with two stack captions floating beside it.
 *
 * This replaced a mocked-up code window. The window was a drawing of a file
 * that does not exist; the portrait is the person the visitor is deciding
 * whether to hire, which is the more useful thing to put at eye level.
 *
 * The captions are the last two pillars rather than hard-coded strings - the
 * window's badges were the only English left on a site that ships in four
 * languages.
 *
 * `alt` is empty and the figure is hidden from the accessibility tree: the
 * about panel carries the same portrait with a real description, and a
 * screen reader gaining "portrait of Artjom Liske" twice is noise. The
 * captions repeat pillars that the skills panel also lists.
 */
export default function HeroPortrait({ avatar, pillars }) {
  const captions = pillars.slice(2)

  return (
    <div className="hero__visual" aria-hidden="true">
      <figure className="portrait">
        <img
          className="portrait__img"
          src={avatar}
          alt=""
          width="640"
          height="640"
          decoding="async"
        />
        <span className="portrait__sheen" />
      </figure>

      {captions.map((pillar, i) => (
        <div key={pillar.title} className={`heroBadge heroBadge--${i + 1}`}>
          <span className="heroBadge__icon">
            <Icon name={pillar.icon} size={18} />
          </span>
          <span className="heroBadge__text">
            <strong>{pillar.title}</strong>
            <small>{pillar.detail}</small>
          </span>
        </div>
      ))}

      <div className="heroGlow" />
    </div>
  )
}
