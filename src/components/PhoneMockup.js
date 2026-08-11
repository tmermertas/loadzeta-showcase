"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, animate, useReducedMotion } from "framer-motion";
import { Truck, DollarSign, Navigation, TrendingUp, Sparkles, ClipboardPaste } from "lucide-react";

// Animated hero demo: a rate con gets pasted, parsed, and turns into a live
// load with counting KPIs — the product's core loop in ~8 seconds, looping.
// Respects prefers-reduced-motion (renders the final state, static).

function CountUp({ to, format, play, duration = 0.9 }) {
  const [val, setVal] = useState(play ? 0 : to);
  useEffect(() => {
    if (!play) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, { duration, ease: "easeOut", onUpdate: (v) => setVal(v) });
    return () => controls.stop();
  }, [play, to, duration]);
  return <>{format(val)}</>;
}

const KPIS = [
  { icon: Navigation, label: "Miles", to: 2702, format: (v) => Math.round(v).toLocaleString("en-US") },
  { icon: DollarSign, label: "Gross", to: 9300, format: (v) => `$${Math.round(v).toLocaleString("en-US")}`, accent: "text-success" },
  { icon: DollarSign, label: "Driver Pay", to: 2790, format: (v) => `$${Math.round(v).toLocaleString("en-US")}`, accent: "text-brand" },
  { icon: TrendingUp, label: "Avg RPM", to: 1.03, format: (v) => `$${v.toFixed(2)}`, accent: "text-[#a78bfa]" },
];

export default function PhoneMockup() {
  const reduced = useReducedMotion();
  // paste → parse → done, looping. Reduced motion: stay on done.
  const [phase, setPhase] = useState(reduced ? "done" : "paste");

  useEffect(() => {
    if (reduced) {
      setPhase("done");
      return;
    }
    let t;
    const step = (p) => {
      setPhase(p);
      if (p === "paste") t = setTimeout(() => step("parse"), 1800);
      else if (p === "parse") t = setTimeout(() => step("done"), 1400);
      else t = setTimeout(() => step("paste"), 5200);
    };
    step("paste");
    return () => clearTimeout(t);
  }, [reduced]);

  const done = phase === "done";

  return (
    <div lang="en" className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* soft glow */}
      <div className="absolute -inset-6 rounded-[3rem] bg-brand/20 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-[2.6rem] border border-white/15 bg-[#0b0b12] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        {/* notch */}
        <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-[#0e0e16] to-[#050507] p-4 pt-9">
          {/* header row */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-white">
              <span className="font-extrabold">Load</span>
              <span className="font-light tracking-[0.12em] text-[#38bdf8]">ZETA</span>
            </span>
            <span className="h-7 w-7 rounded-full bg-gradient-to-br from-brand to-[#5e5ce6]" />
          </div>

          {/* slot: pasted rate con → parsed active load (constant height) */}
          <div className="h-[128px]">
            <AnimatePresence mode="wait" initial={false}>
              {!done ? (
                <motion.div
                  key="paste"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-3.5"
                >
                  <div className="flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-wide text-white/45">
                    <ClipboardPaste size={11} /> Pasted rate con
                  </div>
                  <p className="mt-2 font-mono text-[10px] leading-relaxed text-white/70">
                    RATE CON #4821{"\n"}Carson, CA → North East, MD{"\n"}2,702 mi · $9,300
                  </p>
                  <div className="mt-auto">
                    {phase === "parse" ? (
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-[10px] font-bold text-brand">
                          <Sparkles size={11} /> Parsing…
                        </span>
                        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-brand to-[#5e5ce6]"
                          />
                        </div>
                      </div>
                    ) : (
                      <span className="text-[10px] text-white/35">Telegram bot · auto-parse</span>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-3.5"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[13px] font-bold text-white">
                      <Truck size={15} className="text-brand" /> Active Load
                    </div>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.25, type: "spring", stiffness: 300, damping: 18 }}
                      className="rounded-full bg-success/15 px-1.5 py-px text-[8.5px] font-bold text-success"
                    >
                      PARSED
                    </motion.span>
                  </div>
                  <div className="space-y-2 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-success" />
                      <span className="font-semibold text-white/90">Carson, CA</span>
                    </div>
                    <div className="ml-[3px] h-3 w-px bg-white/15" />
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff453a]" />
                      <span className="font-semibold text-white/90">North East, MD</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* KPI grid: skeleton while parsing, counting up once parsed */}
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {KPIS.map((k) => (
              <div key={k.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                <div className="mb-1 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wide text-white/50">
                  <k.icon size={11} /> {k.label}
                </div>
                {done ? (
                  <div className={`text-[15px] font-extrabold ${k.accent || "text-white"}`}>
                    <CountUp to={k.to} format={k.format} play={!reduced} />
                  </div>
                ) : (
                  <div className="mt-1 h-4 w-14 animate-pulse rounded bg-white/10" />
                )}
              </div>
            ))}
          </div>

          <motion.div
            animate={done ? { opacity: 1 } : { opacity: 0.35 }}
            transition={{ duration: 0.4 }}
            className="mt-3 rounded-xl bg-success/90 py-2.5 text-center text-[12px] font-bold text-black"
          >
            Mark Delivered
          </motion.div>
        </div>
      </div>
    </div>
  );
}
