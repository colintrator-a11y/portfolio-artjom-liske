import Icon from './ui/Icon'

const codeLines = [
  [
    { t: 'const', c: 'kw' },
    { t: ' engineer', c: 'var' },
    { t: ' = ', c: 'op' },
    { t: '{', c: 'pl' },
  ],
  [
    { t: '  name', c: 'key' },
    { t: ': ', c: 'op' },
    { t: "'Artjom Liske'", c: 'str' },
    { t: ',', c: 'op' },
  ],
  [
    { t: '  experience', c: 'key' },
    { t: ': ', c: 'op' },
    { t: "'10+ years'", c: 'str' },
    { t: ',', c: 'op' },
  ],
  [
    { t: '  stack', c: 'key' },
    { t: ': [', c: 'op' },
    { t: "'React'", c: 'str' },
    { t: ', ', c: 'op' },
    { t: "'Node'", c: 'str' },
    { t: ', ', c: 'op' },
    { t: "'PHP'", c: 'str' },
    { t: '],', c: 'op' },
  ],
  [
    { t: '  mobile', c: 'key' },
    { t: ': [', c: 'op' },
    { t: "'React Native'", c: 'str' },
    { t: ', ', c: 'op' },
    { t: "'Flutter'", c: 'str' },
    { t: '],', c: 'op' },
  ],
  [
    { t: '  delivers', c: 'key' },
    { t: ': ', c: 'op' },
    { t: 'async', c: 'kw' },
    { t: ' () => ', c: 'op' },
    { t: 'scalableSolutions', c: 'fn' },
    { t: '(),', c: 'op' },
  ],
  [{ t: '}', c: 'pl' }],
]

const badges = [
  { icon: 'cart', title: 'E-Commerce', detail: 'Storefronts & platforms' },
  { icon: 'api', title: 'REST APIs', detail: 'Node.js & NestJS' },
]

export default function HeroVisual() {
  return (
    <div className="hero__visual" aria-hidden="true">
      <div className="codeWindow">
        <div className="codeWindow__bar">
          <span className="codeWindow__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="codeWindow__file">engineer.profile.js</span>
        </div>

        <pre className="codeWindow__body">
          {codeLines.map((line, i) => (
            <span className="codeWindow__line" key={i} style={{ animationDelay: `${0.25 + i * 0.12}s` }}>
              <span className="codeWindow__num">{i + 1}</span>
              <span className="codeWindow__code">
                {line.map((token, j) => (
                  <span key={j} className={`tok tok--${token.c}`}>
                    {token.t}
                  </span>
                ))}
              </span>
            </span>
          ))}
          <span className="codeWindow__line" style={{ animationDelay: '1.15s' }}>
            <span className="codeWindow__num">{codeLines.length + 1}</span>
            <span className="codeWindow__code">
              <span className="codeWindow__caret" />
            </span>
          </span>
        </pre>

        <div className="codeWindow__status">
          <span className="codeWindow__pulse" />
          Build passing · Tests green · Deployed
        </div>
      </div>

      {badges.map((badge, i) => (
        <div key={badge.title} className={`heroBadge heroBadge--${i + 1}`}>
          <span className="heroBadge__icon">
            <Icon name={badge.icon} size={18} />
          </span>
          <span className="heroBadge__text">
            <strong>{badge.title}</strong>
            <small>{badge.detail}</small>
          </span>
        </div>
      ))}

      <div className="heroGlow" />
    </div>
  )
}
