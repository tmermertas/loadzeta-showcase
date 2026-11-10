"use client";

import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { ArrowRight, ShieldCheck, TrendingUp, Clock3 } from "lucide-react";
import { Phone } from "./Device";
import AppStoreBadge from "./AppStoreBadge";
import { useI18n } from "../lib/providers";
import home from "../assets/screens/home.webp";
import loadDetail from "../assets/screens/load-detail.webp";

const ease = [0.16, 1, 0.3, 1];

// Two small glass cards beside the phones. The figures are the demo account's
// own - the same ones the captures show - so nothing here is invented, and
// like every other piece of product UI on the site they stay in English.
function FloatCard({ icon: Icon, label, value, note, tone, className, delay }) {
  return (
    <motion.div
      lang="en"
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease }}
      className={`chip absolute z-20 hidden rounded-2xl px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:block ${className}`}
    >
      <div className="flex items-center gap-2 text-[11px] font-semibold text-white/65">
        <Icon size={13} className={tone} /> {label}
      </div>
      <div className="mt-1 text-xl font-extrabold tracking-tight">{value}</div>
      <div className={`text-[11px] font-semibold ${tone}`}>{note}</div>
    </motion.div>
  );
}

export default function Hero() {
  const { t, appUrl } = useI18n();
  const stats = t("hero.stats");

  return (
    <section id="top" className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="stage stage-grid rounded-[2rem] sm:rounded-[2.5rem]">
        <div className="glow -left-40 top-40 h-[420px] w-[420px] bg-[#7c8cff] opacity-20" aria-hidden="true" />
        <div className="glow right-[-120px] top-[260px] h-[560px] w-[560px] bg-[#0a84ff] opacity-30" aria-hidden="true" />
        <div className="glow right-[18%] top-[-80px] h-[320px] w-[320px] bg-[#5ac8fa] opacity-15" aria-hidden="true" />

        <div className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36 lg:pt-40">
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4">
            {/* Copy */}
            <div className="text-center lg:pb-24 lg:text-left">
              <motion.span
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
                className="chip inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_10px_#30d158]" /> {t("hero.badge")}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease }}
                className="mt-6 text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-[3.6rem] xl:text-[3.75rem]"
              >
                {t("hero.title1")}<br />
                <span className="bg-gradient-to-r from-[#5ac8fa] to-[#7c8cff] bg-clip-text text-transparent">{t("hero.title2")}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease }}
                className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--stage-muted)] lg:mx-0"
              >
                {t("hero.sub")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }}
                className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <a
                  href={appUrl}
                  onClick={() => track("cta_click", { location: "hero" })}
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(10,132,255,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(10,132,255,0.65)]"
                >
                  {t("hero.cta")}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={appUrl}
                  onClick={() => track("login_click", { location: "hero" })}
                  className="chip inline-flex items-center rounded-full px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15"
                >
                  {t("hero.login")}
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 flex items-center justify-center gap-1.5 text-sm text-[var(--stage-muted)] lg:justify-start"
              >
                <ShieldCheck size={15} className="text-success" /> {t("hero.note")}
              </motion.p>

              {/* Its own row rather than a third button: Apple's badge carries
                  its own shape and shrinks into noise beside two pills. */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5, ease }}
                className="mt-7 flex justify-center lg:justify-start"
              >
                <AppStoreBadge location="hero" />
              </motion.div>
            </div>

            {/* Phones: real captures, cut off by the bottom edge the way the
                App Store header crops them. clip-path instead of overflow so
                only the bottom is cut - the tilted corners and shadows keep
                their room at the sides. */}
            <div
              className="relative mx-auto h-[430px] w-full max-w-[520px] sm:h-[540px] lg:h-[680px] lg:max-w-none"
              style={{ clipPath: "inset(-300px -300px 0 -300px)" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 90, rotate: 10 }}
                animate={{ opacity: 1, y: 0, rotate: 6 }}
                transition={{ duration: 1.1, delay: 0.35, ease }}
                className="absolute left-[calc(50%-5px)] top-[70px] z-0 w-[230px] sm:left-[calc(50%+30px)] sm:top-[90px] sm:w-[270px] lg:left-[46%] lg:top-[120px] lg:w-[300px]"
              >
                <div className="drift-slow">
                  <Phone src={loadDetail} alt="" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 70, rotate: -8 }}
                animate={{ opacity: 1, y: 0, rotate: -4 }}
                transition={{ duration: 1.1, delay: 0.2, ease }}
                className="absolute left-[calc(50%-178px)] top-0 z-10 w-[250px] sm:left-[calc(50%-250px)] sm:w-[290px] lg:left-[2%] lg:w-[320px]"
              >
                <div className="drift">
                  <Phone src={home} alt={t("hero.shotAlt")} eager />
                </div>
              </motion.div>

              <FloatCard
                icon={TrendingUp} tone="text-[#7ee2a0]" label="Driver pay · this week" value="$2,508.00" note="$3.22 per mile"
                delay={0.9} className="right-0 top-[36px] lg:right-[-14px] lg:top-[44px]"
              />
              <FloatCard
                icon={Clock3} tone="text-[#ffd60a]" label="Total outstanding" value="$6,228.80" note="3 unpaid weeks"
                delay={1.05} className="bottom-[60px] left-0 lg:bottom-[92px] lg:left-[-72px]"
              />
            </div>
          </div>
        </div>

        {/* Facts strip */}
        <div className="relative z-20 border-t border-[var(--stage-line)] bg-[#0a1020]/70 backdrop-blur-md">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`px-3 py-5 text-center sm:py-6 lg:px-6 lg:text-left ${i % 2 ? "border-l border-[var(--stage-line)]" : ""} ${i > 1 ? "border-t border-[var(--stage-line)] lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
              >
                <dt className="text-lg font-extrabold tracking-tight sm:text-xl">{s.v}</dt>
                <dd className="mt-0.5 text-[13px] text-[var(--stage-muted)]">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
