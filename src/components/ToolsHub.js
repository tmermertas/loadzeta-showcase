"use client";

import Link from "next/link";
import { Calculator, Scale, Percent, Timer, ArrowRight, Wrench } from "lucide-react";
import PageHero from "./PageHero";
import GuideCta from "./GuideCta";
import { useI18n } from "../lib/providers";

// /tools: every free calculator on one page.
export const TOOLS = [
  { href: "/load-profit-calculator", icon: Scale, title: "tools.loadTitle", body: "tools.loadBody", a: "#7ee2a0", b: "#5ac8fa" },
  { href: "/cpm-calculator", icon: Calculator, title: "calc.title", body: "calc.sub", a: "#ff6961", b: "#ff9f0a" },
  { href: "/driver-pay-calculator", icon: Percent, title: "tools.payTitle", body: "tools.payBody", a: "#5ac8fa", b: "#7c8cff" },
  { href: "/detention-pay-calculator", icon: Timer, title: "tools.detTitle", body: "tools.detBody", a: "#bf9bff", b: "#7c8cff" },
];

export default function ToolsHub() {
  const { t } = useI18n();
  return (
    <>
      <PageHero icon={Wrench} eyebrow={t("tools.hubEyebrow")} title={t("tools.hubTitle")} sub={t("tools.hubSub")} />
      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {TOOLS.map((x) => (
            <Link
              key={x.href}
              href={x.href}
              className="card-lift group flex flex-col rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ backgroundImage: `linear-gradient(135deg, ${x.a}, ${x.b})` }}>
                <x.icon size={20} />
              </span>
              <h2 className="mt-4 text-lg font-extrabold leading-snug tracking-tight transition-colors group-hover:text-brand">{t(x.title)}</h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[var(--text-muted)]">{t(x.body)}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                {t("tools.open")} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <GuideCta location="tools" tone="light" className="mt-10" />
      </section>
    </>
  );
}
