import Icon from './ui/Icon'

/**
 * The outbound links a project carries — a live site, a store listing, an
 * admin panel.
 *
 * The label comes from `ui.links[kind]` rather than from the project, so a
 * link never carries translated text of its own. `note` disambiguates where a
 * project has two of a kind, and holds a product name, which does not
 * translate either.
 *
 * Every link leaves the site, so every one says so twice: an arrow for sighted
 * readers and a visually hidden phrase for anyone listening. `rel` is set
 * because `target="_blank"` without it hands the opened page a reference back.
 */
export default function ProjectLinks({ links, ui, className = '', limit }) {
  if (!links?.length) return null
  const shown = limit ? links.slice(0, limit) : links

  return (
    <span className={`plinks ${className}`.trim()}>
      {shown.map((link) => {
        const label = ui.links[link.kind] ?? link.kind
        return (
          <a
            key={link.url}
            className="plink"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            /* Stops a click on the link from also opening the dialog behind it. */
            onClick={(event) => event.stopPropagation()}
          >
            {label}
            {/* A real space, not only the flex gap: without it the two run
                together in the text stream a screen reader reads. */}
            {link.note ? <> <i className="plink__note">{link.note}</i></> : null}
            <Icon name="external" size={12} strokeWidth={2} />
            <span className="sr-only"> ({ui.newTab})</span>
          </a>
        )
      })}
    </span>
  )
}
