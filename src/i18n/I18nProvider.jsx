import { useEffect, useMemo, useState } from "react";

import { I18nContext } from "./context";
import { DEFAULT_LANG, LOCALES } from "./locales";

/**
 * Holds the active language in React state only — no localStorage or
 * sessionStorage, matching how the theme toggle works.
 */
export default function I18nProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);
  const t = LOCALES[lang] ?? LOCALES[DEFAULT_LANG];

  useEffect(() => {
    // Keep the document in sync so assistive tech announces the right language
    // and shared links carry the right title and description.
    document.documentElement.lang = t.htmlLang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
