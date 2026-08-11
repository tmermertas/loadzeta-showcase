"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { Plus } from "lucide-react";
import { FadeIn } from "./motion";
import { useI18n } from "../lib/providers";

export default function Faq() {
  const { t } = useI18n();
  const items = t("faq.items");
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t("faq.heading")}</h2>
          <p className="mt-4 text-[var(--text-muted)]">{t("faq.sub")}</p>
        </FadeIn>

        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={i} delay={i * 0.04}>
                <div
                  className={`rounded-2xl border bg-[var(--card)] transition-colors duration-300 ${
                    isOpen ? "border-brand/40 shadow-[0_0_30px_rgba(10,132,255,0.08)]" : "border-[var(--card-border)]"
                  }`}
                >
                  <button
                    onClick={() => {
                      if (!isOpen) track("faq_open", { q: i });
                      setOpen(isOpen ? -1 : i);
                    }}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
                  >
                    {it.q}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-brand"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[15px] leading-relaxed text-[var(--text-muted)]">{it.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
