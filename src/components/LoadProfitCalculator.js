"use client";

import { useState } from "react";
import Link from "next/link";
import { Scale, Route, Receipt, ArrowRight } from "lucide-react";
import { FadeIn } from "./motion";
import PageHero from "./PageHero";
import GuideCta from "./GuideCta";
import { useI18n } from "../lib/providers";
import { Field, SectionLabel, num, money, perMile, useFirstEdit } from "./calcUi";

// "Is this load worth it?": the trip's revenue against what every mile of it
// costs, deadhead to the pickup included.
export default function LoadProfitCalculator() {
  const { t } = useI18n();
  const edit = useFirstEdit("load_profit");

  const [rate, setRate] = useState("2500");
  const [extra, setExtra] = useState("0");
  const [loaded, setLoaded] = useState("900");
  const [deadhead, setDeadhead] = useState("120");
  // $1.14: the worked example in the site's own cost-per-mile guide.
  const [cpm, setCpm] = useState("1.14");
  const [tolls, setTolls] = useState("0");

  const revenue = num(rate) + num(extra);
  const loadedMi = num(loaded);
  const totalMi = loadedMi + num(deadhead);
  const tripCost = num(cpm) * totalMi + num(tolls);
  const profit = revenue - tripCost;
  const rpmLoaded = loadedMi > 0 ? revenue / loadedMi : NaN;
  const rpmTotal = totalMi > 0 ? revenue / totalMi : NaN;
  const profitPerMile = totalMi > 0 ? profit / totalMi : NaN;
  const margin = revenue > 0 ? profit / revenue : NaN;

  // Within 5% of revenue either way reads as break-even: small enough that a
  // fuel stop or an hour of detention decides it.
  const verdict = !(revenue > 0) || !(totalMi > 0) ? null : Math.abs(margin) < 0.05 ? "thin" : profit > 0 ? "good" : "bad";
  const tone = { good: "text-[#7ee2a0]", thin: "text-[#ffd60a]", bad: "text-[#ff6961]" };
  const badge = { good: "bg-[#30d158]/15 text-[#7ee2a0] ring-[#30d158]/40", thin: "bg-[#ffd60a]/15 text-[#ffd60a] ring-[#ffd60a]/40", bad: "bg-[#ff453a]/15 text-[#ff6961] ring-[#ff453a]/40" };
  const label = { good: t("loadCalc.verdictGood"), thin: t("loadCalc.verdictThin"), bad: t("loadCalc.verdictBad") };

  const rows = [
    { label: t("loadCalc.ratePerLoaded"), value: perMile(rpmLoaded) },
    { label: t("loadCalc.ratePerTotal"), value: perMile(rpmTotal) },
    { label: t("loadCalc.profitPerMile"), value: perMile(profitPerMile) },
    { label: t("loadCalc.totalMiles"), value: totalMi ? totalMi.toLocaleString("en-US") : "-" },
    { label: t("loadCalc.tripCost"), value: money(tripCost) },
  ];

  return (
    <>
      <PageHero icon={Scale} eyebrow="LoadZeta · Free tool" title={t("loadCalc.title")} sub={t("loadCalc.sub")} overlap />
      <section className="relative z-10 -mt-24 pb-16 sm:-mt-28 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,390px)] lg:items-start lg:gap-8">
            <FadeIn>
              <div className="rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--bg)] p-6 shadow-[0_24px_70px_rgba(3,7,18,0.18)] sm:p-8">
                <SectionLabel icon={Receipt}>{t("loadCalc.payHeading")}</SectionLabel>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("loadCalc.rate")} value={rate} onChange={edit(setRate)} prefix="$" step="50" />
                  <Field label={t("loadCalc.accessorials")} value={extra} onChange={edit(setExtra)} prefix="$" step="25" />
                </div>
                <SectionLabel icon={Route}>{t("loadCalc.milesHeading")}</SectionLabel>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("loadCalc.loadedMiles")} value={loaded} onChange={edit(setLoaded)} step="10" />
                  <Field label={t("loadCalc.deadheadMiles")} value={deadhead} onChange={edit(setDeadhead)} step="10" />
                </div>
                <SectionLabel icon={Scale}>{t("loadCalc.costHeading")}</SectionLabel>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("loadCalc.costPerMile")} value={cpm} onChange={edit(setCpm)} prefix="$" step="0.01" />
                  <Field label={t("loadCalc.tolls")} value={tolls} onChange={edit(setTolls)} prefix="$" step="5" />
                </div>
                <Link href="/cpm-calculator" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {t("loadCalc.cpmLink")} <ArrowRight size={14} />
                </Link>
                <p className="mt-7 text-xs text-[var(--text-muted)]">{t("loadCalc.disclaimer")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="stage rounded-[1.75rem] p-6 shadow-[0_24px_70px_rgba(3,7,18,0.3)] ring-1 ring-white/10 sm:p-7">
                <div className="glow -right-20 -top-24 h-64 w-64 bg-brand opacity-35" aria-hidden="true" />
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">{t("loadCalc.results")}</div>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-[var(--stage-muted)]">{t("loadCalc.profit")}</div>
                  <div className={`mt-1 text-6xl font-extrabold leading-none tracking-[-0.03em] tabular-nums ${verdict ? tone[verdict] : ""}`}>{money(profit)}</div>
                  {verdict && (
                    <span className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ${badge[verdict]}`}>{label[verdict]}</span>
                  )}
                </div>
                <div className="chip mt-5 rounded-2xl p-4">
                  <div className="flex items-end justify-between gap-3">
                    <div className="text-sm font-semibold text-[var(--stage-muted)]">{t("loadCalc.breakEvenRate")}</div>
                    <div className="text-3xl font-extrabold leading-none tracking-tight text-white tabular-nums">{money(tripCost)}</div>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {rows.map((r) => (
                    <div key={r.label} className="flex items-center justify-between text-sm">
                      <span className="text-[var(--stage-muted)]">{r.label}</span>
                      <span className="font-bold tabular-nums">{r.value}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 border-t border-[var(--stage-line)] pt-4 text-xs leading-relaxed text-white/55">{t("loadCalc.hint")}</p>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <GuideCta location="load_profit_calculator" tone="light" className="mt-8 sm:mt-10" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
