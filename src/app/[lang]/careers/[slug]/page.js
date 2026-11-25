import { notFound } from "next/navigation";
import JobArticle from "../../../../components/JobArticle";
import { jobMetadata } from "../../../../lib/careersPages";
import { JOBS, getJob } from "../../../../lib/jobs";
import { PATH_LANGS } from "../../../../lib/locale";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return PATH_LANGS.flatMap((lang) => JOBS.map((j) => ({ lang, slug: j.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  return PATH_LANGS.includes(lang) ? jobMetadata(slug, lang) : {};
}

export default async function LangJobPage({ params }) {
  const { lang, slug } = await params;
  if (!PATH_LANGS.includes(lang) || !getJob(slug)) notFound();
  return <JobArticle slug={slug} lang={lang} />;
}
