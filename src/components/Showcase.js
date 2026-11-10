"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { LayoutDashboard, MapPinned, CalendarRange, HandCoins, Wallet, TrendingUp } from "lucide-react";
import { useI18n } from "../lib/providers";
import { FadeIn } from "./motion";
import { Phone } from "./Device";
import home from "../assets/screens/home.webp";
import loadDetail from "../assets/screens/load-detail.webp";
import loads from "../assets/screens/loads.webp";
import outstanding from "../assets/screens/outstanding.webp";
import expenses from "../assets/screens/expenses.webp";
import netSheet from "../assets/screens/net-sheet.webp";

// The six screens of the App Store set, in the same order and with the same
// accent each one has there (a: glow, b -> c: the headline gradient).
const SCREENS = [
  { key: "home", icon: LayoutDashboard, img: home, a: "#0a84ff", b: "#5ac8fa", c: "#7c8cff" },
  { key: "detail", icon: MapPinned, img: loadDetail, a: "#30b0c7", b: "#5ac8fa", c: "#64d2ff" },
  { key: "loads", icon: CalendarRange, img: loads, a: "#0a84ff", b: "#5ac8fa", c: "#7c8cff" },
  { key: "outstanding", icon: HandCoins, img: outstanding, a: "#ff9f0a", b: "#ffd60a", c: "#ff9f0a" },
  { key: "expenses", icon: Wallet, img: expenses, a: "#ff453a", b: "#ff6961", c: "#ff9f0a" },
  { key: "net", icon: TrendingUp, img: netSheet, a: "#30d158", b: "#7ee2a0", c: "#5ac8fa" },
];
const ROTATE_MS = 5200;
const ease = [0.16, 1, 0.3, 1];

function Title({ s, t, className = "" }) {
  return (
    <span className={className}>
      {t(`showcase.screens.${s.key}.title1`)}{" "}
      <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${s.b}, ${s.c})` }}>
        {t(`showcase.screens.${s.key}.title2`)}
      </span>
    </span>
  );
}

export default function Showcase() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.3 });
  const reduced = useReducedMotion();
  const auto = !paused && inView && !reduced;

  const go = (i, byUser) => {
    setIndex((i + SCREENS.length) % SCREENS.length);
    if (byUser) setPaused(true); // the visitor took over - stop auto-rotating
  };

  // Gentle auto-rotation while the section is on screen, until first interaction.
  useEffect(() => {
    if (!auto) return;
    const id = setTimeout(() => setIndex((cur) => (cur + 1) % SCREENS.length), ROTATE_MS);
    return () => clearTimeout(id);
  }, [auto, index]);

  const active = SCREENS[index];

  const onDragEnd = (_e, info) => {
    if (info.offset.x < -60 || info.velocity.x < -400) go(index + 1, true);
    else if (info.offset.x > 60 || info.velocity.x > 400) go(index - 1, true);
  };

  return (
    <section id="app" ref={sectionRef} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{t("showcase.heading")}</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">{t("showcase.sub")}</p>
        </FadeIn>

        <FadeIn>
          <div className="stage rounded-[2rem] sm:rounded-[2.5rem]">
            {/* The glow takes the active screen's accent. */}
            <motion.div
              aria-hidden="true"
              className="glow right-[-10%] top-[20%] h-[520px] w-[520px] opacity-30 lg:right-[2%]"
              animate={{ backgroundColor: active.a }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              aria-hidden="true"
              className="glow left-[-15%] top-[-10%] h-[380px] w-[380px] opacity-15"
              animate={{ backgroundColor: active.c }}
              transition={{ duration: 0.8 }}
            />

            <div className="grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_minmax(0,400px)] lg:gap-10 lg:p-12">
              {/* Desktop: the screens as a list */}
              <div className="hidden min-w-0 flex-col gap-2 lg:flex">
                {SCREENS.map((s, i) => {
                  const on = i === index;
                  return (
                    <button
                      key={s.key}
                      onClick={() => go(i, true)}
                      aria-pressed={on}
                      className={`group relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition-colors duration-300 ${
                        on ? "border-white/15 bg-white/[0.07]" : "border-transparent hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors duration-300"
                          style={on ? { backgroundColor: `${s.a}33`, color: s.b } : { backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(235,235,245,0.6)" }}
                        >
                          <s.icon size={18} />
                        </span>
                        {on ? (
                          <Title s={s} t={t} className="text-xl font-extrabold tracking-tight" />
                        ) : (
                          <span className="text-[15px] font-semibold text-white/60 transition-colors group-hover:text-white/85">
                            {t(`showcase.screens.${s.key}.title1`)} {t(`showcase.screens.${s.key}.title2`)}
                          </span>
                        )}
                      </div>
                      <AnimatePresence initial={false}>
                        {on && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease }}
                            className="overflow-hidden text-[15px] leading-relaxed text-[var(--stage-muted)]"
                          >
                            <span className="block pl-[54px] pt-2">{t(`showcase.screens.${s.key}.body`)}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                      {/* Time left on this screen while it rotates by itself. */}
                      {on && auto && (
                        <motion.span
                          key={`bar-${index}`}
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
                          style={{ backgroundImage: `linear-gradient(90deg, ${s.b}, ${s.c})` }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Phone + mobile controls */}
              <div className="min-w-0">
                {/* Mobile: pill tabs */}
                <div className="no-scrollbar -mx-5 mb-7 flex gap-2 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:hidden">
                  {SCREENS.map((s, i) => (
                    <button
                      key={s.key}
                      onClick={() => go(i, true)}
                      aria-pressed={i === index}
                      className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition-colors ${
                        i === index ? "bg-white text-[#0a1020]" : "chip text-white/70"
                      }`}
                    >
                      <s.icon size={13} /> {t(`showcase.screens.${s.key}.tab`)}
                    </button>
                  ))}
                </div>

                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={onDragEnd}
                  className="mx-auto w-[min(100%,250px)] cursor-grab touch-pan-y active:cursor-grabbing sm:w-[310px]"
                >
                  {/* All six captures sit stacked in one frame and cross-fade,
                      so a tap never waits on an image request. */}
                  <Phone>
                    <div className="aspect-[1206/2622]" />
                    {SCREENS.map((s, i) => (
                      <Image
                        key={s.key}
                        src={s.img}
                        alt={i === index ? `${t(`showcase.screens.${s.key}.title1`)} ${t(`showcase.screens.${s.key}.title2`)}` : ""}
                        aria-hidden={i !== index}
                        fill
                        sizes="(min-width: 640px) 310px, 250px"
                        draggable={false}
                        className={`select-none object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
                      />
                    ))}
                  </Phone>
                </motion.div>

                {/* Dots */}
                <div className="mt-4 flex justify-center lg:hidden">
                  {SCREENS.map((s, i) => (
                    /* The dot itself stays 8px tall, but the BUTTON gets a 44px
                       box around it - the dots were 8x8 hit areas on a phone. */
                    <button
                      key={s.key}
                      aria-label={t(`showcase.screens.${s.key}.tab`)}
                      onClick={() => go(i, true)}
                      className="flex h-11 w-9 items-center justify-center"
                    >
                      <span className={`block h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-white" : "w-2 bg-white/25"}`} />
                    </button>
                  ))}
                </div>

                {/* Mobile: animated caption */}
                <div className="mt-2 min-h-[120px] lg:hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active.key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="mx-auto max-w-sm text-center"
                    >
                      <Title s={active} t={t} className="text-xl font-extrabold tracking-tight" />
                      <p className="mt-2 text-sm leading-relaxed text-[var(--stage-muted)]">
                        {t(`showcase.screens.${active.key}.body`)}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
