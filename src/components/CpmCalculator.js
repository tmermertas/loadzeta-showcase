"use client";

import { useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { Calculator, Fuel, Wrench, Building2, TrendingUp } from "lucide-react";
import { FadeIn } from "./motion";
import PageHero from "./PageHero";
import GuideCta from "./GuideCta";
import { useI18n } from "../lib/providers";

function Field({ label, value, onChange, prefix, suffix, step = "any" }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-[var(--text-muted)]">{label}</span>
      <div className="flex items-center rounded-xl border border-[var(--card-border)] bg-[var(--bg-subtle)] transition-all focus-within:border-brand/60 focus-within:shadow-[0_0_0_4px_rgba(10,132,255,0.12)]">
        {prefix && <span className="pl-3.5 text-sm font-semibold text-[var(--text-muted)]">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min="0"
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 bg-transparent px-3.5 py-3 text-[15px] font-bold tabular-nums outline-none"
        />
        {suffix && <span className="pr-3.5 text-sm font-semibold text-[var(--text-muted)]">{suffix}</span>}
      </div>
    </label>
  );
}

const money = (n) =>
  isFinite(n) ? `$${n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` : "—";
const cpm = (n) => (isFinite(n) ? `$${n.toFixed(2)}` : "—");

export default function CpmCalculator() {
  const { t } = useI18n();

  const [miles, setMiles] = useState("10000");
  const [truck, setTruck] = useState("2600");
  const [insurance, setInsurance] = useState("1100");
  const [otherFixed, setOtherFixed] = useState("400");
  const [fuel, setFuel] = useState("3.60");
  const [mpg, setMpg] = useState("6.5");
  const [maint, setMaint] = useState("0.18");
  // 15% because the site's own deadhead guide calls that the common case
  // ("under 10% is strong; 15% is common; above 20% is your biggest leak").
  const [deadhead, setDeadhead] = useState("15");

  // One "calc_used" event per visit, fired on the first edit — measures
  // whether the tool actually gets used, not just viewed.
  const usedRef = useRef(false);
  const withUse = (setter) => (v) => {
    if (!usedRef.current) {
      usedRef.current = true;
      track("calc_used");
    }
    setter(v);
  };

  // Negatives are clamped away rather than trusted: a stray minus on the fuel
  // price used to turn $3.60 into a total CPM of $0.04 - a number that looks
  // like a great cost base instead of an obvious mistake.
  const num = (v) => Math.max(0, parseFloat(v) || 0);

  const m = num(miles);
  const fixedTotal = num(truck) + num(insurance) + num(otherFixed);
  const fixedCpm = m > 0 ? fixedTotal / m : NaN;
  const fuelCpm = num(mpg) > 0 ? num(fuel) / num(mpg) : NaN;
  const maintCpm = num(maint);
  const totalCpm = fixedCpm + fuelCpm + maintCpm;
  const breakEven = totalCpm * m;

  // The number a driver actually quotes a broker. Cost accrues on EVERY mile
  // but revenue only on loaded ones, so comparing a rate against total CPM
  // understates what you need: at 15% deadhead you drive 1.18 total miles per
  // loaded mile. Capped at 95% so the division stays sane.
  const deadheadPct = Math.min(95, num(deadhead));
  const loadedShare = 1 - deadheadPct / 100;
  const loadedCpm = loadedShare > 0 ? totalCpm / loadedShare : NaN;

  const rows = [
    { icon: Building2, label: t("calc.fixedCpm"), value: cpm(fixedCpm) },
    { icon: Fuel, label: t("calc.fuelCpm"), value: cpm(fuelCpm) },
    { icon: Wrench, label: t("calc.maintCpm"), value: cpm(maintCpm) },
  ];

  return (
    <>
      <PageHero icon={Calculator} eyebrow="LoadZeta · Free tool" title={t("calc.title")} sub={t("calc.sub")} overlap />

      {/* The calculator rides up onto the stage. */}
      <section className="relative z-10 -mt-24 pb-16 sm:-mt-28 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,390px)] lg:items-start lg:gap-8">
            {/* Inputs */}
            <FadeIn>
              <div className="rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--bg)] p-6 shadow-[0_24px_70px_rgba(3,7,18,0.18)] sm:p-8">
                <Field label={t("calc.monthlyMiles")} value={miles} onChange={withUse(setMiles)} step="100" />

                <div className="mb-3 mt-7 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  <Building2 size={14} className="text-brand" /> {t("calc.fixedHeading")}
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field label={t("calc.truckPayment")} value={truck} onChange={withUse(setTruck)} prefix="$" step="50" />
                  <Field label={t("calc.insurance")} value={insurance} onChange={withUse(setInsurance)} prefix="$" step="50" />
                  <Field label={t("calc.otherFixed")} value={otherFixed} onChange={withUse(setOtherFixed)} prefix="$" step="50" />
                </div>

                <div className="mb-3 mt-7 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  <Fuel size={14} className="text-brand" /> {t("calc.varHeading")}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("calc.fuelPrice")} value={fuel} onChange={withUse(setFuel)} prefix="$" step="0.05" />
                  <Field label={t("calc.mpg")} value={mpg} onChange={withUse(setMpg)} step="0.1" />
                  <Field label={t("calc.maintenance")} value={maint} onChange={withUse(setMaint)} prefix="$" step="0.01" />
                  <Field label={t("calc.deadheadPct")} value={deadhead} onChange={withUse(setDeadhead)} suffix="%" step="1" />
                </div>

                <p className="mt-7 text-xs text-[var(--text-muted)]">{t("calc.disclaimer")}</p>
              </div>
            </FadeIn>

            {/* Results: a stage of their own, so the answer is the loudest thing on the page. */}
            <FadeIn delay={0.1}>
              <div className="stage rounded-[1.75rem] p-6 shadow-[0_24px_70px_rgba(3,7,18,0.3)] ring-1 ring-white/10 sm:p-7">
                <div className="glow -right-20 -top-24 h-64 w-64 bg-brand opacity-35" aria-hidden="true" />
                <div className="glow -bottom-28 -left-20 h-64 w-64 bg-[#30d158] opacity-15" aria-hidden="true" />

                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">{t("calc.results")}</div>

                <div className="mt-4">
                  <div className="text-sm font-semibold text-[var(--stage-muted)]">{t("calc.totalCpm")}</div>
                  <div className="mt-1 bg-gradient-to-r from-[#5ac8fa] to-[#7c8cff] bg-clip-text text-6xl font-extrabold leading-none tracking-[-0.03em] text-transparent tabular-nums">
                    {cpm(totalCpm)}
                  </div>
                </div>

                {/* The figure that actually decides whether to take a load. */}
                <div className="chip mt-5 rounded-2xl p-4">
                  <div className="flex items-end justify-between gap-3">
                    <div className="text-sm font-semibold text-[var(--stage-muted)]">{t("calc.loadedCpm")}</div>
                    <div className="text-3xl font-extrabold leading-none tracking-tight text-[#7ee2a0] tabular-nums">{cpm(loadedCpm)}</div>
                  </div>
                  <div className="mt-2 text-xs text-white/55">
                    {/* t() takes a path only - no interpolation in this repo -
                        so the one placeholder is substituted here. */}
                    {t("calc.loadedCpmNote").replace("{pct}", deadheadPct)}
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {rows.map((r) => (
                    <div key={r.label} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2.5 text-[var(--stage-muted)]">
                        <r.icon size={15} className="text-[#5ac8fa]" /> {r.label}
                      </span>
                      <span className="font-bold tabular-nums">{r.value}</span>
                    </div>
                  ))}
                  <div className="h-px bg-[var(--stage-line)]" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2.5 text-[var(--stage-muted)]">
                      <TrendingUp size={15} className="text-[#7ee2a0]" /> {t("calc.breakEven")}
                    </span>
                    <span className="text-base font-extrabold text-[#7ee2a0] tabular-nums">{money(breakEven)}</span>
                  </div>
                </div>

                <p className="mt-5 border-t border-[var(--stage-line)] pt-4 text-xs leading-relaxed text-white/55">{t("calc.hint")}</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <GuideCta location="calculator" tone="light" className="mt-8 sm:mt-10" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
