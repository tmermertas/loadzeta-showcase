import { notFound } from "next/navigation";
import GuideArticle from "../../../../components/GuideArticle";
import { GUIDES } from "../../../../lib/guides";
import { guideMetadata } from "../../../../lib/guidePages";
import { PATH_LANGS } from "../../../../lib/locale";

// /tr/guides/<slug> etc. Slugs stay English in every language: one slug per
// article keeps the hreflang pairs obvious, and the readers search the
// industry terms in English anyway.
export const dynamicParams = false;

export function generateStaticParams() {
  return PATH_LANGS.flatMap((lang) => GUIDES.map((g) => ({ lang, slug: g.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  return PATH_LANGS.includes(lang) ? guideMetadata(slug, lang) : {};
}

export default async function LangGuidePage({ params }) {
  const { lang, slug } = await params;
  if (!PATH_LANGS.includes(lang) || !GUIDES.some((g) => g.slug === slug)) notFound();
  return <GuideArticle slug={slug} lang={lang} />;
}
