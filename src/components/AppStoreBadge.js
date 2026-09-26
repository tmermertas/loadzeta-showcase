"use client";

import { track } from "@vercel/analytics";
import { useI18n } from "../lib/providers";
import { APP_STORE_URL } from "../lib/translations";

// Apple's own artwork, downloaded from their marketing-tools endpoint and
// served from /public - the App Store identity guidelines require their badge
// rather than a re-drawn lookalike, and self-hosting keeps the page off a
// third-party CDN on first paint.
//
// The Turkish badge is WIDER than the rest (viewBox 151.29 vs 119.66 units for
// the same height), because "İndirin" does not fit the English layout. So the
// height is fixed and the width is left to follow: pinning a width would
// squash one language and not the others.
const BADGE = {
  en: "/badges/app-store-en-us.svg",
  tr: "/badges/app-store-tr-tr.svg",
  es: "/badges/app-store-es-es.svg",
  ru: "/badges/app-store-ru-ru.svg",
};

export default function AppStoreBadge({ location, className = "" }) {
  const { lang, t } = useI18n();

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("app_store_click", { location })}
      className={`inline-block transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {/* Plain <img>, not next/image: each locale's badge has its own aspect
          ratio, and an SVG gains nothing from the optimizer. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BADGE[lang] || BADGE.en}
        alt={t("appStore.alt")}
        className="h-12 w-auto sm:h-[52px]"
      />
    </a>
  );
}
