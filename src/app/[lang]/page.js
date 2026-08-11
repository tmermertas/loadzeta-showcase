import { notFound } from "next/navigation";
import HomeSections from "../../components/HomeSections";
import { translations } from "../../lib/translations";
import { faqJsonLd } from "../../lib/seo";

// Statically generated localized homes: /tr, /es, /ru (English lives at "/").
const PATH_LANGS = ["tr", "es", "ru"];

export const dynamicParams = false;

export function generateStaticParams() {
  return PATH_LANGS.map((lang) => ({ lang }));
}

const LANG_URLS = {
  en: "https://loadzeta.com",
  tr: "https://loadzeta.com/tr",
  es: "https://loadzeta.com/es",
  ru: "https://loadzeta.com/ru",
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const m = translations[lang]?.meta;
  if (!m) return {};
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: LANG_URLS[lang],
      languages: { ...LANG_URLS, "x-default": LANG_URLS.en },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: LANG_URLS[lang],
      siteName: "LoadZeta",
      locale: { tr: "tr_TR", es: "es_US", ru: "ru_RU" }[lang],
      type: "website",
    },
  };
}

export default async function LangHome({ params }) {
  const { lang } = await params;
  if (!PATH_LANGS.includes(lang)) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(lang)) }}
      />
      <HomeSections />
    </>
  );
}
