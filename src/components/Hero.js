"use client";

import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { ArrowRight, ShieldCheck } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import { useI18n } from "../lib/providers";

export default function Hero() {
  const { t, appUrl } = useI18n();
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section id="top" className="relative overflow-hidden bg-hero-glow pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-muted)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> {t("hero.badge")}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease }}
              className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]"
            >
              {t("hero.title1")}<br />
              <span className="bg-gradient-to-r from-brand to-[#5e5ce6] bg-clip-text text-transparent">{t("hero.title2")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mx-auto lg:mx-0 mt-5 max-w-xl text-lg text-[var(--text-muted)] leading-relaxed"
            >
              {t("hero.sub")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <a
                href={appUrl}
                onClick={() => track("cta_click", { location: "hero" })}
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(10,132,255,0.45)] transition-all hover:shadow-[0_14px_40px_rgba(10,132,255,0.6)] hover:-translate-y-0.5"
              >
                {t("hero.cta")}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href={appUrl} onClick={() => track("login_click", { location: "hero" })} className="inline-flex items-center rounded-full border border-[var(--card-border)] px-7 py-3.5 text-base font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                {t("hero.login")}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 flex items-center justify-center lg:justify-start gap-1.5 text-sm text-[var(--text-muted)]"
            >
              <ShieldCheck size={15} className="text-success" /> {t("hero.note")}
            </motion.p>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
