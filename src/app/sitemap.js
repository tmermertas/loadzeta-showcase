import { GUIDES } from "../lib/guides";
import { openJobs } from "../lib/jobs";
import { ALL_LANGS, SITE, localePath } from "../lib/locale";

export default function sitemap() {
  const now = new Date();
  const langAlternates = {
    languages: {
      en: "https://loadzeta.com",
      tr: "https://loadzeta.com/tr",
      es: "https://loadzeta.com/es",
      ru: "https://loadzeta.com/ru",
    },
  };
  return [
    { url: "https://loadzeta.com", lastModified: now, changeFrequency: "weekly", priority: 1, alternates: langAlternates },
    { url: "https://loadzeta.com/tr", lastModified: now, changeFrequency: "weekly", priority: 0.9, alternates: langAlternates },
    { url: "https://loadzeta.com/es", lastModified: now, changeFrequency: "weekly", priority: 0.9, alternates: langAlternates },
    { url: "https://loadzeta.com/ru", lastModified: now, changeFrequency: "weekly", priority: 0.9, alternates: langAlternates },
    { url: "https://loadzeta.com/cpm-calculator", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://loadzeta.com/tools", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...["/load-profit-calculator", "/driver-pay-calculator", "/detention-pay-calculator"].map((p) => ({ url: `https://loadzeta.com${p}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })),
    // Careers in every language; open roles only (an expired one leaves the
    // sitemap with its structured data).
    ...["/careers", ...openJobs(now).map((j) => `/careers/${j.slug}`)].flatMap((path) =>
      ALL_LANGS.map((lang) => ({
        url: `${SITE}${localePath(lang, path)}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: lang === "en" ? 0.6 : 0.5,
        alternates: { languages: Object.fromEntries(ALL_LANGS.map((l) => [l, `${SITE}${localePath(l, path)}`])) },
      })),
    ),
    // Every guide page in every language, each listing its siblings.
    ...["/guides", ...GUIDES.map((g) => `/guides/${g.slug}`)].flatMap((path) =>
      ALL_LANGS.map((lang) => ({
        url: `${SITE}${localePath(lang, path)}`,
        lastModified: now,
        changeFrequency: path === "/guides" ? "weekly" : "monthly",
        priority: (path === "/guides" ? 0.8 : 0.7) - (lang === "en" ? 0 : 0.1),
        alternates: { languages: Object.fromEntries(ALL_LANGS.map((l) => [l, `${SITE}${localePath(l, path)}`])) },
      })),
    ),
    // No "/#features"-style entries here. A fragment is not a separate URL:
    // crawlers strip it and see the home page four more times, so the only
    // effect is a sitemap that reports more URLs than it has and duplicate
    // rows in Search Console.
  ];
}

// Re-generated daily so an expired role leaves it.
export const revalidate = 86400;
