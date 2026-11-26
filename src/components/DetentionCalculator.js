"use client";

import { useState } from "react";
import { Timer, Clock, DollarSign } from "lucide-react";
import { FadeIn } from "./motion";
import PageHero from "./PageHero";
import GuideCta from "./GuideCta";
import { useI18n } from "../lib/providers";
import { Field, Choice, SectionLabel, num, useFirstEdit } from "./calcUi";

const dollars = (n) => (isFinite(n) ? `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "-");
const hm = (minutes) => `${Math.floor(minutes / 60)}h ${String(Math.round(minutes % 60)).padStart(2, "0")}m`;

// Detention: time at the facility past the free time, billed the way the rate
// con says (exact, by the quarter hour or by full hours), times the hourly rate.
export default function DetentionCalculator() {
  const { t } = useI18n();
  const edit = useFirstEdit("detention");

  const [hours, setHours] = useState("4");
  const [minutes, setMinutes] = useState("30");
  const [free, setFree] = useState("2");
  const [rate, setRate] = useState("50");
  const [billing, setBilling] = useState("quarter");
  const [share, setShare] = useState("100");

  const onSite = num(hours) * 60 + Math.min(59, num(minutes));
  const over = Math.max(0, onSite - num(free) * 60);
  // Rounded DOWN: a broker paying by the hour pays for completed hours.
  const billable = billing === "hour" ? Math.floor(over / 60) * 60 : billing === "quarter" ? Math.floor(over / 15) * 15 : over;
  const owed = (billable / 60) * num(rate);
  const yours = (owed * Math.min(100, num(share))) / 100;

  return (
    <>
      <PageHero icon={Timer} eyebrow="LoadZeta · Free tool" title={t("detCalc.title")} sub={t("detCalc.sub")} overlap />
      <section className="relative z-10 -mt-24 pb-16 sm:-mt-28 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,390px)] lg:items-start lg:gap-8">
            <FadeIn>
              <div className="rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--bg)] p-6 shadow-[0_24px_70px_rgba(3,7,18,0.18)] sm:p-8">
                <SectionLabel icon={Clock}>{t("detCalc.timeHeading")}</SectionLabel>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field label={t("detCalc.hours")} value={hours} onChange={edit(setHours)} step="1" />
                  <Field label={t("detCalc.minutes")} value={minutes} onChange={edit(setMinutes)} step="5" />
                  <Field label={t("detCalc.freeTime")} value={free} onChange={edit(setFree)} step="0.5" />
                </div>
                <SectionLabel icon={DollarSign}>{t("detCalc.payHeading")}</SectionLabel>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("detCalc.rate")} value={rate} onChange={edit(setRate)} prefix="$" step="5" />
                  <Field label={t("detCalc.share")} value={share} onChange={edit(setShare)} suffix="%" step="5" />
                </div>
                <div className="mt-4">
                  <Choice
                    label={t("detCalc.billing")}
                    value={billing}
                    onChange={edit(setBilling)}
                    options={[
                      { value: "exact", label: t("detCalc.exact") },
                      { value: "quarter", label: t("detCalc.quarter") },
                      { value: "hour", label: t("detCalc.hour") },
                    ]}
                  />
                </div>
                <p className="mt-7 text-xs text-[var(--text-muted)]">{t("detCalc.disclaimer")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="stage rounded-[1.75rem] p-6 shadow-[0_24px_70px_rgba(3,7,18,0.3)] ring-1 ring-white/10 sm:p-7">
                <div className="glow -right-20 -top-24 h-64 w-64 bg-brand opacity-35" aria-hidden="true" />
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">{t("detCalc.results")}</div>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-[var(--stage-muted)]">{t("detCalc.owed")}</div>
                  <div className="mt-1 bg-gradient-to-r from-[#5ac8fa] to-[#7c8cff] bg-clip-text text-6xl font-extrabold leading-none tracking-[-0.03em] text-transparent tabular-nums">
                    {dollars(yours)}
                  </div>
                  {billable === 0 && <div className="mt-3 text-sm font-semibold text-[#7ee2a0]">{t("detCalc.none")}</div>}
                </div>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between"><span className="text-[var(--stage-muted)]">{t("detCalc.onSite")}</span><span className="font-bold tabular-nums">{hm(onSite)}</span></div>
                  <div className="flex items-center justify-between"><span className="text-[var(--stage-muted)]">{t("detCalc.billable")}</span><span className="font-bold tabular-nums">{hm(billable)}</span></div>
                  {num(share) < 100 && (
                    <div className="flex items-center justify-between"><span className="text-[var(--stage-muted)]">{t("detCalc.total")}</span><span className="font-bold tabular-nums">{dollars(owed)}</span></div>
                  )}
                </div>
                <p className="mt-5 border-t border-[var(--stage-line)] pt-4 text-xs leading-relaxed text-white/55">{t("detCalc.hint")}</p>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <GuideCta location="detention_calculator" tone="light" className="mt-8 sm:mt-10" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
