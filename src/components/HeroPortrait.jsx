/**
 * The portrait that opens the page.
 *
 * This replaced a mocked-up code window. The window was a drawing of a file
 * that does not exist; the portrait is the person the visitor is deciding
 * whether to hire, which is the more useful thing to put at eye level.
 *
 * `alt` is empty and the figure is hidden from the accessibility tree: the
 * about panel carries the same portrait with a real description, and a screen
 * reader gaining "portrait of Artjom Liske" twice is noise.
 */
export default function HeroPortrait({ avatar }) {
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

      <div className="heroGlow" />
    </div>
  )
}
