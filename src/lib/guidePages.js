// Metadata and structured data for the guide pages, shared by the English
// routes (/guides) and the prefixed ones (/tr/guides, ...).
import { translations } from "./translations";
import { getGuide } from "./guides";
import { SITE, OG_LOCALE, localePath, languageAlternates } from "./locale";

export function guidesIndexMetadata(lang) {
  const g = translations[lang].guides;
  const url = `${SITE}${localePath(lang, "/guides")}`;
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: { canonical: url, languages: languageAlternates("/guides") },
    openGraph: { title: g.ogTitle, description: g.ogDescription, url, siteName: "LoadZeta", locale: OG_LOCALE[lang], type: "website" },
  };
}

export function guideMetadata(slug, lang) {
  const g = getGuide(slug, lang);
  if (!g) return {};
  const path = `/guides/${slug}`;
  const url = `${SITE}${localePath(lang, path)}`;
  return {
    title: `${g.title} | ${translations[lang].guides.articleSuffix}`,
    description: g.description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: { title: g.title, description: g.description, url, siteName: "LoadZeta", locale: OG_LOCALE[lang], type: "article" },
  };
}

export function guideJsonLd(slug, lang) {
  const g = getGuide(slug, lang);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    inLanguage: lang,
    datePublished: g.date,
    author: { "@type": "Organization", name: "Load Zeta", url: SITE },
    publisher: { "@type": "Organization", name: "Load Zeta", url: SITE },
    mainEntityOfPage: `${SITE}${localePath(lang, `/guides/${slug}`)}`,
  };
}
