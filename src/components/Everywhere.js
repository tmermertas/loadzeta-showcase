"use client";

import { track } from "@vercel/analytics";
import { Smartphone, MonitorSmartphone, Send, ArrowUpRight } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "./motion";
import { Phone, Tablet } from "./Device";
import AppStoreBadge from "./AppStoreBadge";
import { useI18n } from "../lib/providers";
import ipadHome from "../assets/screens/ipad-home.webp";
import loads from "../assets/screens/loads.webp";

const ICONS = [Smartphone, MonitorSmartphone, Send];

// One account on every screen: the iPad capture with the phone in front of it,
// then the three ways in.
export default function Everywhere() {
  const { t, appUrl } = useI18n();
  const items = t("everywhere.items");

  return (
    <section id="devices" className="overflow-x-clip bg-[var(--bg-subtle)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{t("everywhere.heading")}</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">{t("everywhere.sub")}</p>
        </FadeIn>

        <FadeIn delay={0.1} className="relative mx-auto mt-12 max-w-[900px] sm:mt-16">
          <div className="pointer-events-none absolute inset-x-[8%] bottom-[-6%] top-[20%] rounded-full bg-brand/25 blur-[90px]" aria-hidden="true" />
          <Tablet src={ipadHome} alt={t("everywhere.shotAlt")} className="relative w-full" />
          <Phone src={loads} alt="" sizes="220px" className="absolute bottom-[-9%] right-[-2%] w-[26%] min-w-[104px] sm:right-[-5%]" />
        </FadeIn>

        <Stagger className="mt-20 grid gap-4 sm:mt-24 sm:gap-5 md:grid-cols-3">
          {items.map((it, i) => {
            const Icon = ICONS[i] || Smartphone;
            return (
              <StaggerItem key={i}>
                <div className="h-full rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand/10 text-brand">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{it.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">{it.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <AppStoreBadge location="devices" />
          <a
            href={appUrl}
            onClick={() => track("cta_click", { location: "devices" })}
            className="group inline-flex items-center gap-1.5 text-base font-semibold text-brand"
          >
            {t("everywhere.webCta")}
            <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
