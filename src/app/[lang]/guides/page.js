import { notFound } from "next/navigation";
import GuidesIndex from "../../../components/GuidesIndex";
import { guidesIndexMetadata } from "../../../lib/guidePages";
import { PATH_LANGS } from "../../../lib/locale";

// /tr/guides, /es/guides, /ru/guides. English lives at /guides.
export const dynamicParams = false;

export function generateStaticParams() {
  return PATH_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return PATH_LANGS.includes(lang) ? guidesIndexMetadata(lang) : {};
}

export default async function LangGuidesPage({ params }) {
  const { lang } = await params;
  if (!PATH_LANGS.includes(lang)) notFound();
  return <GuidesIndex lang={lang} />;
}
