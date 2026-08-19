import { useContent } from '../i18n/LanguageContext'
import useTheme from '../hooks/useTheme'
import Icon from './ui/Icon'

/**
 * Switches the page between the dark default and the light palette.
 *
 * A button rather than a checkbox: it performs an action immediately rather
 * than holding a setting to be submitted, and `aria-pressed` is what tells a
 * screen reader which state it is currently in.
 */
export default function ThemeToggle({ variant = 'default' }) {
  const { ui } = useContent()
  const [theme, toggle] = useTheme()
  const dark = theme === 'dark'
  const label = dark ? ui.switchToLight : ui.switchToDark

  return (
    <button
      type="button"
      className={`themeToggle ${variant === 'inline' ? 'themeToggle--inline' : ''}`.trim()}
      onClick={toggle}
      title={label}
      aria-label={label}
      aria-pressed={dark}
    >
      {/* The icon shows what pressing it gives you, which is what the label
          says too - showing the current theme instead reads as a contradiction. */}
      <span className="themeToggle__icons" aria-hidden="true">
        <Icon name={dark ? 'sun' : 'moon'} size={16} strokeWidth={1.9} />
      </span>
      {variant === 'inline' ? <span className="themeToggle__text">{label}</span> : null}
    </button>
  )
}
