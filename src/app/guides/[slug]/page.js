import { notFound } from "next/navigation";
import GuideArticle from "../../../components/GuideArticle";
import { GUIDES } from "../../../lib/guides";
import { guideMetadata } from "../../../lib/guidePages";

// English guide. The other languages: app/[lang]/guides/[slug].
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return guideMetadata(slug, "en");
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  if (!GUIDES.some((g) => g.slug === slug)) notFound();
  return <GuideArticle slug={slug} lang="en" />;
}
