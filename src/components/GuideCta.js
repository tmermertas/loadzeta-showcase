"use client";

import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";
import { useI18n } from "../lib/providers";

// End-of-article CTA — client component so it can carry ref/lang/theme
// through appUrl and report the click.
export default function GuideCta() {
  const { t, appUrl } = useI18n();
  return (
    <div className="mt-10 rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/[0.1] to-[#5e5ce6]/[0.1] p-6 text-center sm:p-8">
      <div className="text-lg font-bold">{t("calc.ctaTitle")}</div>
      <p className="mt-1.5 text-sm text-[var(--text-muted)]">{t("calc.ctaBody")}</p>
      <a
        href={appUrl}
        onClick={() => track("cta_click", { location: "guide" })}
        className="group mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(10,132,255,0.4)] transition-all hover:shadow-[0_8px_32px_rgba(10,132,255,0.6)]"
      >
        {t("calc.cta")}
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}
