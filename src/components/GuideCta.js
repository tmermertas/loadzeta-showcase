"use client";

import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";
import AppStoreBadge from "./AppStoreBadge";
import { useI18n } from "../lib/providers";

// End-of-page call to action on the guides - a small stage, so the pitch for
// the app looks like the app's own pages. Client component so it can carry
// ref/lang/theme through appUrl and report the click.
export default function GuideCta({ location = "guide", className = "mt-12", tone = "stage" }) {
  const { t, appUrl } = useI18n();
  const cta = (
    <a
      href={appUrl}
      onClick={() => track("cta_click", { location })}
      className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(10,132,255,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(10,132,255,0.65)]"
    >
      {t("calc.cta")}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </a>
  );

  // "light": a tinted card in a row. For a page whose very next block is the
  // footer's own navy call to action - two stages in a row read as one
  // repeated banner.
  if (tone === "light") {
    return (
      <div className={`relative overflow-hidden rounded-[1.75rem] border border-brand/20 bg-gradient-to-br from-brand/[0.09] via-transparent to-[#7c8cff]/[0.10] p-6 sm:p-8 ${className}`}>
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">{t("calc.ctaTitle")}</div>
            <p className="mt-2 text-[15px] text-[var(--text-muted)]">{t("calc.ctaBody")}</p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-4 sm:flex-row sm:items-center">
            {cta}
            <AppStoreBadge location={location} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`stage rounded-[2rem] px-6 py-10 text-center sm:px-10 sm:py-12 ${className}`}>
      <div className="glow -left-20 -top-24 h-64 w-64 bg-brand opacity-30" aria-hidden="true" />
      <div className="glow -bottom-28 -right-16 h-64 w-64 bg-[#7c8cff] opacity-30" aria-hidden="true" />
      <div className="mx-auto max-w-xl text-2xl font-extrabold leading-tight tracking-tight sm:text-[1.75rem]">{t("calc.ctaTitle")}</div>
      <p className="mt-3 text-[15px] text-[var(--stage-muted)]">{t("calc.ctaBody")}</p>
      <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
        {cta}
        <AppStoreBadge location={location} />
      </div>
    </div>
  );
}
