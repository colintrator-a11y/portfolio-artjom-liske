import en from "./en";
import pt from "./pt";
import es from "./es";

/** Order here is the order shown in the switcher. */
export const LOCALES = { en, pt, es };

export const LANGUAGES = [en, pt, es].map(({ code, label, short }) => ({
  code,
  label,
  short,
}));

export const DEFAULT_LANG = "en";
