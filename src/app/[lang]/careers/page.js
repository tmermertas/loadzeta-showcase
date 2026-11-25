import { notFound } from "next/navigation";
import CareersIndex from "../../../components/CareersIndex";
import { careersIndexMetadata } from "../../../lib/careersPages";
import { PATH_LANGS } from "../../../lib/locale";

// /tr/careers, /es/careers, /ru/careers. English lives at /careers.
export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return PATH_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return PATH_LANGS.includes(lang) ? careersIndexMetadata(lang) : {};
}

export default async function LangCareersPage({ params }) {
  const { lang } = await params;
  if (!PATH_LANGS.includes(lang)) notFound();
  return <CareersIndex lang={lang} />;
}
