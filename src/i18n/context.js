import { createContext, useContext, useMemo } from "react";

import {
  navIds,
  projects,
  services,
  skillGroups,
  spokenLanguages,
} from "../data/content";

/** Consumed by `<I18nProvider>`; components should use the hooks below. */
export const I18nContext = createContext(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}

/**
 * Merges the language-independent structure in `data/content.js` (slugs, tags,
 * tints, icons, skill levels) with the active language's strings.
 *
 * Structure lives in one place and copy lives in three, so adding a project
 * means editing the structure once — and a missing translation surfaces as an
 * undefined title rather than a silently stale English string.
 */
export function useContent() {
  const { t, lang, setLang } = useI18n();

  return useMemo(
    () => ({
      t,
      lang,
      setLang,
      nav: navIds.map((id) => ({ id, label: t.nav[id] })),
      projects: projects.map((p) => ({ ...p, ...t.projects[p.slug] })),
      services: services.map((s) => ({ ...s, ...t.services[s.id] })),
      skillGroups: skillGroups.map((g) => ({ ...g, name: t.skillGroups[g.id] })),
      spokenLanguages: spokenLanguages.map((id) => t.languages[id]),
    }),
    [t, lang, setLang],
  );
}
