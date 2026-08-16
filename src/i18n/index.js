/**
 * Barrel for the i18n hooks and constants.
 *
 * Deliberately exports no components — mixing components with hooks in one
 * module breaks React Fast Refresh. The provider is imported directly from
 * `./I18nProvider`.
 */
export { useI18n, useContent } from "./context";
export { LANGUAGES, LOCALES, DEFAULT_LANG } from "./locales";
