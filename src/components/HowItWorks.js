"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MessageSquareText, Calculator, LineChart, Send, CheckCheck } from "lucide-react";
import { FadeIn } from "./motion";
import { useI18n } from "../lib/providers";

const ICONS = [MessageSquareText, Calculator, LineChart];

// Telegram-style chat mockup — the product's "magic moment": paste a rate
// con, the bot answers with the parsed load. Product UI copy stays English.
function TelegramMockup() {
  const bubble = {
    initial: { opacity: 0, y: 16, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-80px" },
  };
  return (
    <div lang="en" className="relative mx-auto mt-16 max-w-md">
      <div className="absolute -inset-4 rounded-[2rem] bg-brand/10 blur-2xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e1621] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
        {/* chat header */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-[#17212b] px-4 py-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-[#5e5ce6] text-[13px] font-extrabold text-white">
            LZ
          </span>
          <div>
            <div className="text-[13px] font-bold text-white">LoadZeta Bot</div>
            <div className="text-[10.5px] text-[#5eb5f7]">online</div>
          </div>
          <Send size={15} className="ml-auto text-white/30" />
        </div>

        <div className="space-y-3 p-4">
          {/* user pastes the rate con */}
          <motion.div {...bubble} transition={{ duration: 0.45 }} className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[#2b5278] px-3.5 py-2.5">
              <p className="font-mono text-[10.5px] leading-relaxed text-white/90">
                RATE CON #4821{"\n"}
                Carson, CA → North East, MD{"\n"}
                2,702 mi · $9,300
              </p>
              <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-[#7da8c9]">
                10:42 <CheckCheck size={11} />
              </div>
            </div>
          </motion.div>

          {/* bot replies with the parsed load */}
          <motion.div {...bubble} transition={{ duration: 0.45, delay: 0.35 }} className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-[#182533] px-3.5 py-2.5">
              <div className="text-[11px] font-bold text-success">✅ Load added</div>
              <div className="mt-2 space-y-1 text-[10.5px] text-white/80">
                <div><span className="text-white/45">Pickup:</span> Carson, CA</div>
                <div><span className="text-white/45">Delivery:</span> North East, MD</div>
                <div><span className="text-white/45">Miles:</span> 2,702</div>
                <div><span className="text-white/45">Gross:</span> <span className="font-bold text-success">$9,300</span></div>
                <div><span className="text-white/45">Your pay:</span> <span className="font-bold text-[#5eb5f7]">$2,790</span></div>
              </div>
              <div className="mt-1.5 text-[9px] text-white/30">10:42</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

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

        <TelegramMockup />
        <FadeIn>
          <p className="mt-6 text-center text-sm text-[var(--text-muted)]">{t("how.demoNote")}</p>
        </FadeIn>
      </div>
    </section>
  );
}
