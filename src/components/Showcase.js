"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { LayoutDashboard, History, BarChart3, Wallet, FileCheck2 } from "lucide-react";
import { useI18n } from "../lib/providers";
import { FadeIn } from "./motion";
import {
  PhoneFrame, DashboardScreen, HistoryScreen, AnalyticsScreen,
  ExpensesScreen, SettlementScreen,
} from "./AppScreens";

const SCREENS = [
  { key: "dashboard", icon: LayoutDashboard, Screen: DashboardScreen },
  { key: "history", icon: History, Screen: HistoryScreen },
  { key: "analytics", icon: BarChart3, Screen: AnalyticsScreen },
  { key: "expenses", icon: Wallet, Screen: ExpensesScreen },
  { key: "settlement", icon: FileCheck2, Screen: SettlementScreen },
];

// Slide + fade between screens; direction-aware for a natural swipe feel.
const variants = {
  enter: (dir) => ({ x: dir >= 0 ? 70 : -70, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir >= 0 ? -70 : 70, opacity: 0, scale: 0.97 }),
};

export default function Showcase() {
  const { t } = useI18n();
  const [[index, dir], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.3 });
  const reduced = useReducedMotion();

  const go = (i, d, byUser) => {
    setState([(i + SCREENS.length) % SCREENS.length, d]);
    if (byUser) setPaused(true); // user took over — stop auto-rotating
  };

  // Gentle auto-rotation while the section is on screen, until first interaction.
  useEffect(() => {
    if (paused || !inView || reduced) return;
    const id = setInterval(() => setState(([cur]) => [(cur + 1) % SCREENS.length, 1]), 4500);
    return () => clearInterval(id);
  }, [paused, inView, reduced]);

  const active = SCREENS[index];
  const Screen = active.Screen;

  const onDragEnd = (_e, info) => {
    if (info.offset.x < -60 || info.velocity.x < -400) go(index + 1, 1, true);
    else if (info.offset.x > 60 || info.velocity.x > 400) go(index - 1, -1, true);
  };

  return (
    <section id="app" ref={sectionRef} className="relative overflow-x-clip py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t("showcase.heading")}</h2>
          <p className="mt-4 text-[var(--text-muted)]">{t("showcase.sub")}</p>
        </FadeIn>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
          {/* Desktop: clickable vertical feature list */}
          <div className="hidden min-w-0 flex-col gap-3 lg:flex">
            {SCREENS.map((s, i) => (
              <button
                key={s.key}
                onClick={() => go(i, i > index ? 1 : -1, true)}
                className={`group rounded-2xl border p-5 text-left transition-all duration-300 ${
                  i === index
                    ? "border-brand/40 bg-brand/[0.06] shadow-[0_0_30px_rgba(10,132,255,0.10)]"
                    : "border-[var(--card-border)] bg-[var(--card)] hover:border-brand/25"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors ${
                    i === index ? "bg-brand text-white" : "bg-brand/10 text-brand"
                  }`}>
                    <s.icon size={17} />
                  </span>
                  <span className="font-bold">{t(`showcase.screens.${s.key}.title`)}</span>
                </div>
                <AnimatePresence initial={false}>
                  {i === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden text-sm leading-relaxed text-[var(--text-muted)]"
                    >
                      <span className="mt-2 block">{t(`showcase.screens.${s.key}.body`)}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          {/* Phone + mobile controls */}
          <div className="min-w-0">
            {/* Mobile: pill tabs */}
            <div className="no-scrollbar -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 lg:hidden">
              {SCREENS.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => go(i, i > index ? 1 : -1, true)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-bold transition-colors ${
                    i === index
                      ? "border-brand bg-brand text-white"
                      : "border-[var(--card-border)] bg-[var(--card)] text-[var(--text-muted)]"
                  }`}
                >
                  <s.icon size={13} /> {t(`showcase.screens.${s.key}.tab`)}
                </button>
              ))}
            </div>

            <PhoneFrame>
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={onDragEnd}
                className="touch-pan-y cursor-grab active:cursor-grabbing"
              >
                <AnimatePresence custom={dir} mode="wait" initial={false}>
                  <motion.div
                    key={active.key}
                    custom={dir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Screen />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </PhoneFrame>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {SCREENS.map((s, i) => (
                <button
                  key={s.key}
                  aria-label={t(`showcase.screens.${s.key}.tab`)}
                  onClick={() => go(i, i > index ? 1 : -1, true)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-brand" : "w-2 bg-[var(--card-border)]"
                  }`}
                />
              ))}
            </div>
            <div className="mt-3 text-center text-xs text-[var(--text-muted)] lg:hidden">
              {t("showcase.swipeHint")}
            </div>

            {/* Mobile: animated caption */}
            <div className="mt-5 lg:hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="mx-auto max-w-sm text-center"
                >
                  <div className="font-bold">{t(`showcase.screens.${active.key}.title`)}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                    {t(`showcase.screens.${active.key}.body`)}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
