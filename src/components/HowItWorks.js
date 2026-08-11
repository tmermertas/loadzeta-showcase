"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MessageSquareText, Calculator, LineChart } from "lucide-react";
import { FadeIn } from "./motion";
import { useI18n } from "../lib/providers";

const ICONS = [MessageSquareText, Calculator, LineChart];

export default function HowItWorks() {
  const { t } = useI18n();
  const steps = t("how.steps");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const height = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="how" className="bg-[var(--bg-subtle)] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn className="text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{t("how.heading")}</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">{t("how.sub")}</p>
        </FadeIn>

        <div ref={ref} className="relative mt-14 pl-16 sm:pl-20">
          {/* track */}
          <div className="absolute left-[27px] sm:left-[35px] top-2 bottom-2 w-0.5 rounded-full bg-[var(--card-border)]" />
          {/* animated fill */}
          <motion.div
            style={{ scaleY: height }}
            className="absolute left-[27px] sm:left-[35px] top-2 bottom-2 w-0.5 origin-top rounded-full bg-gradient-to-b from-brand to-[#5e5ce6]"
          />

          <div className="space-y-10 sm:space-y-14">
            {steps.map((s, i) => {
              const Icon = ICONS[i] || MessageSquareText;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* node */}
                  <div className="absolute -left-16 sm:-left-20 top-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--card-border)] bg-[var(--card)] text-brand shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                    <Icon size={22} />
                  </div>
                  <div className="pt-1">
                    <div className="mb-1 text-xs font-bold uppercase tracking-widest text-brand">Step {i + 1}</div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">{s.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
