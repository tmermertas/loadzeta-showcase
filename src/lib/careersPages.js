// Metadata for the careers pages, shared by /careers and /tr|/es|/ru/careers.
import { CAREERS_COPY, jobLocation } from "./careersCopy";
import { getJob, isOpen } from "./jobs";
import { SITE, OG_LOCALE, localePath, languageAlternates } from "./locale";

export function careersIndexMetadata(lang) {
  const c = CAREERS_COPY[lang];
  const url = `${SITE}${localePath(lang, "/careers")}`;
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: { canonical: url, languages: languageAlternates("/careers") },
    openGraph: { title: c.metaTitle, description: c.metaDesc, url, siteName: "LoadZeta", locale: OG_LOCALE[lang], type: "website" },
  };
}

export function jobMetadata(slug, lang) {
  const job = getJob(slug);
  if (!job) return {};
  const c = CAREERS_COPY[lang];
  const path = `/careers/${slug}`;
  const url = `${SITE}${localePath(lang, path)}`;
  return {
    title: `${job.title} (${jobLocation(job, lang)}) | ${c.jobSuffix}`,
    description: job.summary,
    alternates: { canonical: url, languages: languageAlternates(path) },
    robots: isOpen(job) ? undefined : { index: false },
    openGraph: { title: `${job.title} · Load Zeta`, description: job.summary, url, siteName: "LoadZeta", locale: OG_LOCALE[lang], type: "website" },
  };
}
