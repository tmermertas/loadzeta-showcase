"use client";

import { useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { ArrowRight, Calculator, Fuel, Wrench, Building2, TrendingUp } from "lucide-react";
import { FadeIn } from "./motion";
import { useI18n } from "../lib/providers";

function Field({ label, value, onChange, prefix, step = "any" }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-[var(--text-muted)]">{label}</span>
      <div className="flex items-center rounded-xl border border-[var(--card-border)] bg-[var(--bg)] focus-within:border-brand/50 transition-colors">
        {prefix && <span className="pl-3 text-sm text-[var(--text-muted)]">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min="0"
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent px-3 py-2.5 text-sm font-semibold outline-none"
        />
      </div>
    </label>
  );
}

const money = (n) =>
  isFinite(n) ? `$${n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` : "—";
const cpm = (n) => (isFinite(n) ? `$${n.toFixed(2)}` : "—");

export default function CpmCalculator() {
  const { t, appUrl } = useI18n();

  const [miles, setMiles] = useState("10000");
  const [truck, setTruck] = useState("2600");
  const [insurance, setInsurance] = useState("1100");
  const [otherFixed, setOtherFixed] = useState("400");
  const [fuel, setFuel] = useState("3.60");
  const [mpg, setMpg] = useState("6.5");
  const [maint, setMaint] = useState("0.18");

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

  const m = parseFloat(miles) || 0;
  const fixedTotal = (parseFloat(truck) || 0) + (parseFloat(insurance) || 0) + (parseFloat(otherFixed) || 0);
  const fixedCpm = m > 0 ? fixedTotal / m : NaN;
  const fuelCpm = (parseFloat(mpg) || 0) > 0 ? (parseFloat(fuel) || 0) / parseFloat(mpg) : NaN;
  const maintCpm = parseFloat(maint) || 0;
  const totalCpm = fixedCpm + fuelCpm + maintCpm;
  const breakEven = totalCpm * m;

  const rows = [
    { icon: Building2, label: t("calc.fixedCpm"), value: cpm(fixedCpm) },
    { icon: Fuel, label: t("calc.fuelCpm"), value: cpm(fuelCpm) },
    { icon: Wrench, label: t("calc.maintCpm"), value: cpm(maintCpm) },
  ];

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-muted)]">
            <Calculator size={13} className="text-brand" /> LoadZeta · Free tool
          </span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">{t("calc.title")}</h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">{t("calc.sub")}</p>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,380px)] lg:items-start">
          {/* Inputs */}
          <FadeIn>
            <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-8">
              <Field label={t("calc.monthlyMiles")} value={miles} onChange={withUse(setMiles)} step="100" />

              <div className="mt-6 mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                {t("calc.fixedHeading")}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label={t("calc.truckPayment")} value={truck} onChange={withUse(setTruck)} prefix="$" step="50" />
                <Field label={t("calc.insurance")} value={insurance} onChange={withUse(setInsurance)} prefix="$" step="50" />
                <Field label={t("calc.otherFixed")} value={otherFixed} onChange={withUse(setOtherFixed)} prefix="$" step="50" />
              </div>

              <div className="mt-6 mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                {t("calc.varHeading")}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label={t("calc.fuelPrice")} value={fuel} onChange={withUse(setFuel)} prefix="$" step="0.05" />
                <Field label={t("calc.mpg")} value={mpg} onChange={withUse(setMpg)} step="0.1" />
                <Field label={t("calc.maintenance")} value={maint} onChange={withUse(setMaint)} prefix="$" step="0.01" />
              </div>

              <p className="mt-6 text-xs text-[var(--text-muted)]">{t("calc.disclaimer")}</p>
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn delay={0.1}>
            <div className="animated-border rounded-3xl">
              <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  {t("calc.results")}
                </div>

                <div className="mt-4 rounded-2xl bg-brand/[0.07] p-4 text-center">
                  <div className="text-xs font-semibold text-[var(--text-muted)]">{t("calc.totalCpm")}</div>
                  <div className="mt-1 text-4xl font-extrabold tracking-tight text-brand">{cpm(totalCpm)}</div>
                </div>

                <div className="mt-4 space-y-2.5">
                  {rows.map((r) => (
                    <div key={r.label} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-[var(--text-muted)]">
                        <r.icon size={14} className="text-brand" /> {r.label}
                      </span>
                      <span className="font-bold">{r.value}</span>
                    </div>
                  ))}
                  <div className="my-2 h-px bg-[var(--card-border)]" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-[var(--text-muted)]">
                      <TrendingUp size={14} className="text-success" /> {t("calc.breakEven")}
                    </span>
                    <span className="font-extrabold text-success">{money(breakEven)}</span>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-[var(--text-muted)]">{t("calc.hint")}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/[0.1] to-[#5e5ce6]/[0.1] p-6 text-center">
              <div className="font-bold">{t("calc.ctaTitle")}</div>
              <p className="mt-1.5 text-sm text-[var(--text-muted)]">{t("calc.ctaBody")}</p>
              <a
                href={appUrl}
                onClick={() => track("cta_click", { location: "calculator" })}
                className="group mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(10,132,255,0.4)] transition-all hover:shadow-[0_8px_32px_rgba(10,132,255,0.6)]"
              >
                {t("calc.cta")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
