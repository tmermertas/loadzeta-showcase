// Language routing shared by every localized page. English lives at the bare
// path ("/", "/guides"); the other three under a prefix ("/tr", "/tr/guides").
export const PATH_LANGS = ["tr", "es", "ru"];
export const ALL_LANGS = ["en", ...PATH_LANGS];
export const SITE = "https://loadzeta.com";

// Dates and Open Graph locales per language. es-US: the audience is Spanish
// speakers in the United States.
export const DATE_LOCALE = { en: "en-US", tr: "tr-TR", es: "es-US", ru: "ru-RU" };
export const OG_LOCALE = { en: "en_US", tr: "tr_TR", es: "es_US", ru: "ru_RU" };

// "/guides" -> "/tr/guides"; "/" -> "/tr". English keeps the bare path.
export function localePath(lang, path = "/") {
  if (!PATH_LANGS.includes(lang)) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

// "/tr/guides/x" -> { lang: "tr", rest: "/guides/x" }; "/guides" -> { lang: null, rest: "/guides" }.
export function splitLangPath(pathname = "/") {
  const seg = pathname.split("/")[1];
  if (PATH_LANGS.includes(seg)) return { lang: seg, rest: pathname.slice(seg.length + 1) || "/" };
  return { lang: null, rest: pathname || "/" };
}

// Routes whose CONTENT is rendered per language on the server (one URL per
// language). On these the URL decides the language - an English URL means
// English, whatever the visitor picked before - and switching language means
// going to the other URL. The home page is not listed: its copy is translated
// on the client, so it follows the stored choice as it always has.
export function isLocalizedRoute(rest) {
  return rest === "/guides" || rest.startsWith("/guides/");
}

// hreflang map for one path across the four languages, plus x-default.
export function languageAlternates(path) {
  const m = Object.fromEntries(ALL_LANGS.map((l) => [l, `${SITE}${localePath(l, path)}`]));
  return { ...m, "x-default": m.en };
}
