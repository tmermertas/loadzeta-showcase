import { translations } from "./translations";

// FAQPage structured data, generated from the same translations the page
// renders — one source of truth, no drift between visible copy and schema.
export function faqJsonLd(lang) {
  const items = (translations[lang] || translations.en).faq.items;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}
