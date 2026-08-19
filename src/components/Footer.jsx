import { useContent } from '../i18n/LanguageContext'
import scrollToSection from '../utils/scrollToSection'
import Icon from './ui/Icon'
import './Footer.css'

export default function Footer() {
  const { footer, profile, ui } = useContent()
  const year = new Date().getFullYear()

  const go = (id) => (event) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brandBlock">
            <a className="footer__brand" href="#home" onClick={go('home')}>
              <img
                className="footer__mark"
                src={profile.avatar}
                alt=""
                width="172"
                height="172"
                loading="lazy"
                decoding="async"
              />
              <span>
                <strong>{profile.name}</strong>
                <small>{profile.title}</small>
              </span>
            </a>

            <p className="footer__tagline">{footer.tagline}</p>
            <p className="footer__blurb">{footer.blurb}</p>

            <ul className="footer__expertise">
              {footer.expertise.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__nav">
            {footer.columns.map((column) => (
              <div className="footer__column" key={column.title}>
                <h3 className="footer__columnTitle">{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={`#${link.target}`} onClick={go(link.target)}>
                        <Icon name="arrowRight" size={13} strokeWidth={2} />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {profile.name}. {ui.rightsReserved}
          </p>
          <p className="footer__built">{ui.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}
