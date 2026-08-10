"use client";

import { Check, Gift } from "lucide-react";
import { FadeIn } from "./motion";
import { useI18n } from "../lib/providers";
import { APP_URL } from "../lib/translations";

export default function Pricing() {
  const { t } = useI18n();
  const features = t("pricing.features");

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{t("pricing.heading")}</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">{t("pricing.sub")}</p>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-lg">
          <div className="animated-border rounded-4xl">
            <div className="relative rounded-4xl border border-[var(--card-border)] bg-[var(--card)] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              {/* free badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-success/12 px-3.5 py-1.5 text-sm font-bold text-success">
                <Gift size={15} /> {t("pricing.free")}
              </div>
              <p className="mt-1.5 text-sm text-[var(--text-muted)]">{t("pricing.freeSub")}</p>

              <div className="mt-6">
                <div className="text-sm font-semibold text-[var(--text-muted)]">{t("pricing.planName")}</div>
                <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                  <span className="text-5xl font-extrabold tracking-tight leading-none">{t("pricing.introPrice")}</span>
                  <span className="text-[var(--text-muted)] font-medium">{t("pricing.introUnit")}</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-[var(--text-muted)]">{t("pricing.thenPrice")}</div>
              </div>

              <a
                href={`${APP_URL}/`}
                className="mt-7 flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(10,132,255,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(10,132,255,0.6)]"
              >
                {t("pricing.cta")}
              </a>

              <ul className="mt-8 space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-[var(--text-muted)]">{t("pricing.secured")}</p>
        </FadeIn>
      </div>
    </section>
  );
}
