import { Languages as LanguagesIcon } from "lucide-react";

import { LANGUAGES, useI18n } from "../i18n";

/**
 * Segmented EN / PT / ES control.
 *
 * A segmented group rather than a dropdown: with three options everything
 * stays visible and reachable in one tab stop each, with no popover to trap
 * focus or close on outside clicks.
 *
 * Rendered as a radiogroup so screen readers announce it as one control with
 * a current selection, instead of three unrelated buttons.
 */
export default function LanguageSwitcher({ className = "", showIcon = true }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="radiogroup"
      aria-label={t.ui.language}
      className={`inline-flex items-center gap-1 rounded-lg border border-line p-0.5 ${className}`}
    >
      {showIcon && (
        <LanguagesIcon
          size={14}
          aria-hidden="true"
          className="mx-1.5 shrink-0 text-muted"
        />
      )}

      {LANGUAGES.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            role="radio"
            aria-checked={active}
            // The short code alone would read as "EN" letter-by-letter, so the
            // accessible name carries the full language name.
            aria-label={l.label}
            onClick={() => setLang(l.code)}
            className={`rounded-md px-2 py-1 font-display text-xs font-semibold tracking-wide transition-colors duration-200 ${
              active
                ? "bg-accent-soft text-accent"
                : "text-muted hover:text-ink"
            }`}
          >
            <span aria-hidden="true">{l.short}</span>
          </button>
        );
      })}
    </div>
  );
}
