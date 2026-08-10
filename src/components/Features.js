"use client";

import { Users, Route, PlusCircle, Lock, Smartphone, ReceiptText } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "./motion";
import { useI18n } from "../lib/providers";

export default function Features() {
  const { t } = useI18n();

  const cards = [
    { key: "profiles", icon: Users, span: "lg:col-span-4", tint: "from-brand/15 to-brand/0", color: "text-brand" },
    { key: "otp", icon: Smartphone, span: "lg:col-span-2", tint: "from-[#5e5ce6]/15 to-transparent", color: "text-[#7c7bff]" },
    { key: "smart", icon: Route, span: "lg:col-span-2", tint: "from-success/15 to-transparent", color: "text-success" },
    { key: "accessorial", icon: PlusCircle, span: "lg:col-span-2", tint: "from-[#ff9f0a]/15 to-transparent", color: "text-[#ff9f0a]" },
    { key: "docs", icon: ReceiptText, span: "lg:col-span-2", tint: "from-[#0a84ff]/12 to-transparent", color: "text-brand" },
    { key: "immutable", icon: Lock, span: "lg:col-span-6", tint: "from-[#30d158]/12 to-transparent", color: "text-success" },
  ];

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{t("features.heading")}</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">{t("features.sub")}</p>
        </FadeIn>

        <Stagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {cards.map((c) => (
            <StaggerItem key={c.key} className={c.span}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.tint} blur-2xl`} />
                <div className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 ${c.color}`}>
                  <c.icon size={22} />
                </div>
                <h3 className="relative text-lg font-bold">{t(`features.items.${c.key}.title`)}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">{t(`features.items.${c.key}.body`)}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
