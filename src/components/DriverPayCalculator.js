"use client";

import { useState } from "react";
import { Percent, Gauge, CalendarDays } from "lucide-react";
import { FadeIn } from "./motion";
import PageHero from "./PageHero";
import GuideCta from "./GuideCta";
import { useI18n } from "../lib/providers";
import { Field, Choice, SectionLabel, num, money, perMile, useFirstEdit } from "./calcUi";

// Company driver: percentage of the truck's gross vs cents per mile, on the
// same week of driving.
export default function DriverPayCalculator() {
  const { t } = useI18n();
  const edit = useFirstEdit("driver_pay");

  const [gross, setGross] = useState("6000");
  const [loaded, setLoaded] = useState("2500");
  const [empty, setEmpty] = useState("300");
  const [pct, setPct] = useState("28");
  const [rate, setRate] = useState("0.62");
  const [emptyPaid, setEmptyPaid] = useState("yes");
  const [weeks, setWeeks] = useState("48");

  const loadedMi = num(loaded);
  const paidMi = loadedMi + (emptyPaid === "yes" ? num(empty) : 0);
  const pctPay = (num(gross) * Math.min(100, num(pct))) / 100;
  const cpmPay = num(rate) * paidMi;
  const diff = pctPay - cpmPay;
  const yearWeeks = Math.min(53, num(weeks));
  // The truck revenue per loaded mile at which both offers pay the same.
  const crossover = loadedMi > 0 && num(pct) > 0 ? cpmPay / ((Math.min(100, num(pct)) / 100) * loadedMi) : NaN;

  const verdict = Math.abs(diff) < 1 ? t("payCalc.equal") : diff > 0 ? t("payCalc.morePct").replace("{amount}", money(diff)) : t("payCalc.moreCpm").replace("{amount}", money(-diff));
  const cards = [
    { key: "pct", label: t("payCalc.pctLabel"), week: pctPay, win: diff > 0.5 },
    { key: "cpm", label: t("payCalc.cpmLabel"), week: cpmPay, win: diff < -0.5 },
  ];

  return (
    <>
      <PageHero icon={Percent} eyebrow="LoadZeta · Free tool" title={t("payCalc.title")} sub={t("payCalc.sub")} overlap />
      <section className="relative z-10 -mt-24 pb-16 sm:-mt-28 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,390px)] lg:items-start lg:gap-8">
            <FadeIn>
              <div className="rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--bg)] p-6 shadow-[0_24px_70px_rgba(3,7,18,0.18)] sm:p-8">
                <SectionLabel icon={CalendarDays}>{t("payCalc.weekHeading")}</SectionLabel>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field label={t("payCalc.gross")} value={gross} onChange={edit(setGross)} prefix="$" step="100" />
                  <Field label={t("payCalc.loadedMiles")} value={loaded} onChange={edit(setLoaded)} step="50" />
                  <Field label={t("payCalc.emptyMiles")} value={empty} onChange={edit(setEmpty)} step="10" />
                </div>
                <SectionLabel icon={Gauge}>{t("payCalc.offersHeading")}</SectionLabel>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("payCalc.percent")} value={pct} onChange={edit(setPct)} suffix="%" step="1" />
                  <Field label={t("payCalc.cpmRate")} value={rate} onChange={edit(setRate)} prefix="$" step="0.01" />
                  <Choice
                    label={t("payCalc.emptyPaid")}
                    value={emptyPaid}
                    onChange={edit(setEmptyPaid)}
                    options={[{ value: "yes", label: t("payCalc.yes") }, { value: "no", label: t("payCalc.no") }]}
                  />
                  <Field label={t("payCalc.weeks")} value={weeks} onChange={edit(setWeeks)} step="1" />
                </div>
                <p className="mt-7 text-xs text-[var(--text-muted)]">{t("payCalc.disclaimer")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="stage rounded-[1.75rem] p-6 shadow-[0_24px_70px_rgba(3,7,18,0.3)] ring-1 ring-white/10 sm:p-7">
                <div className="glow -right-20 -top-24 h-64 w-64 bg-brand opacity-35" aria-hidden="true" />
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">{t("payCalc.results")}</div>
                <div className="mt-4 space-y-3">
                  {cards.map((c) => (
                    <div key={c.key} className={`rounded-2xl p-4 ${c.win ? "bg-[#30d158]/12 ring-1 ring-[#30d158]/40" : "chip"}`}>
                      <div className="text-sm font-semibold text-[var(--stage-muted)]">{c.label}</div>
                      <div className="mt-1 flex items-baseline justify-between gap-3">
                        <span className={`text-4xl font-extrabold leading-none tracking-tight tabular-nums ${c.win ? "text-[#7ee2a0]" : "text-white"}`}>{money(c.week)}</span>
                        <span className="text-xs font-semibold text-white/55">{t("payCalc.perWeek")}</span>
                      </div>
                      <div className="mt-1.5 text-xs text-white/55 tabular-nums">{money(c.week * yearWeeks)} {t("payCalc.perYear")}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm font-bold">{verdict}</p>
                {isFinite(crossover) && (
                  <p className="mt-2 text-xs text-white/60">{t("payCalc.crossover").replace("{rate}", perMile(crossover))}</p>
                )}
                <p className="mt-5 border-t border-[var(--stage-line)] pt-4 text-xs leading-relaxed text-white/55">{t("payCalc.hint")}</p>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <GuideCta location="driver_pay_calculator" tone="light" className="mt-8 sm:mt-10" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
