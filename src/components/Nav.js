"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { Moon, Sun, Menu, X, Globe, Check, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { useI18n } from "../lib/providers";
import { localePath, splitLangPath } from "../lib/locale";

const ease = [0.16, 1, 0.3, 1];
// Home-page sections the bar can point at while you scroll.
const SPY = ["features", "how", "pricing"];

// The bar belongs to the stage: navy glass with white type in both themes, so
// it reads the same over a hero, over a white section and over the footer.
// Every page that mounts it opens with a navy stage (the home hero, or
// PageHero on the guides and the calculator), so it starts out with no surface
// at all - just the logo and links lying on the stage - and gathers into a
// floating capsule once the page moves. A page WITHOUT a stage at the top must
// pass overStage={false}, or the white type lands on a white page.
export default function Nav({ overStage = true }) {
  const { t, theme, toggleTheme, lang, setLang, langs, mounted, appUrl } = useI18n();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const langRef = useRef(null);
  const pathname = usePathname();
  // Section anchors only exist on the home pages; elsewhere go home first.
  const isHome = ["/", "/tr", "/es", "/ru"].includes(pathname);
  const { rest } = splitLangPath(pathname);
  // Section links lead to the home page in the visitor's language.
  const anchor = (a) => (isHome ? a : `${localePath(lang, "/")}${a}`);
  const solid = !overStage || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    // A reload can land mid-page; read the position once the frame is up.
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  // Which section sits under the middle of the viewport.
  useEffect(() => {
    if (!isHome) return;
    const els = SPY.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
          else setActive((cur) => (cur === e.target.id ? null : cur));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome]);

  // The language menu closes on a click elsewhere and on Escape.
  useEffect(() => {
    if (!langOpen) return;
    const onDown = (e) => { if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setLangOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [langOpen]);

  // Five items do not fit beside the language, theme and CTA controls below
  // lg; 768-1023px uses the menu button, which renders this SAME array.
  // Guides and the calculator reuse their footer labels (all four languages).
  const links = [
    { href: anchor("#features"), label: t("nav.features"), id: "features" },
    { href: anchor("#how"), label: t("nav.how"), id: "how" },
    { href: anchor("#pricing"), label: t("nav.pricing"), id: "pricing" },
    { href: localePath(lang, "/guides"), label: t("footer.guides"), on: rest.startsWith("/guides") },
    { href: "/cpm-calculator", label: t("footer.calculator"), on: pathname === "/cpm-calculator" },
  ];
  const isOn = (l) => l.on || (isHome && l.id && l.id === active);

  const control = "border border-white/12 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.14]";

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto mt-3 max-w-6xl px-4 sm:mt-4 sm:px-6">
        <nav
          className={`flex items-center justify-between gap-2 rounded-2xl border px-3 py-2.5 transition-[background-color,border-color,box-shadow] duration-300 sm:gap-3 sm:px-4 ${
            solid
              ? "border-white/10 bg-[#0b1224]/90 shadow-[0_14px_44px_rgba(3,7,18,0.35)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href={isHome ? "#top" : localePath(lang, "/")} aria-label="LoadZeta" className="shrink-0"><Logo /></a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                aria-current={isOn(l) ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                  isOn(l) ? "bg-white/[0.12] text-white" : "text-white/70 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Language */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((v) => !v)}
                aria-label="Language"
                aria-expanded={langOpen}
                className={`flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-semibold sm:px-3 ${control}`}
              >
                <Globe size={16} />
                <span className="uppercase">{lang}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease }}
                    className="absolute right-0 mt-2 w-44 origin-top-right rounded-2xl border border-white/10 bg-[#0b1224]/95 p-1.5 shadow-[0_20px_50px_rgba(3,7,18,0.5)] backdrop-blur-xl"
                  >
                    {langs.map((L) => (
                      <button
                        key={L.code}
                        onClick={() => { setLang(L.code); setLangOpen(false); }}
                        className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-white/[0.08] ${
                          lang === L.code ? "text-white" : "text-white/65"
                        }`}
                      >
                        <span>{L.flag}</span> {L.label}
                        {lang === L.code && <Check size={15} className="ml-auto text-[#5ac8fa]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme */}
            <button onClick={toggleTheme} aria-label="Toggle theme" className={`rounded-full p-2.5 ${control}`}>
              {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href={appUrl}
              onClick={() => track("login_click", { location: "nav" })}
              className="hidden px-2 text-sm font-semibold text-white/75 transition-colors hover:text-white xl:inline-flex"
            >
              {t("nav.login")}
            </a>

            <a
              href={appUrl}
              onClick={() => track("cta_click", { location: "nav" })}
              className="hidden items-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(10,132,255,0.45)] transition-all hover:bg-brand-600 hover:shadow-[0_8px_26px_rgba(10,132,255,0.6)] sm:inline-flex"
            >
              {t("nav.cta")}
            </a>

            <button
              className={`rounded-full p-2.5 lg:hidden ${control}`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease }}
              className="mt-2 rounded-2xl border border-white/10 bg-[#0b1224]/95 p-2 shadow-[0_24px_60px_rgba(3,7,18,0.5)] backdrop-blur-xl lg:hidden"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors hover:bg-white/[0.07] ${
                    isOn(l) ? "bg-white/[0.08] text-white" : "text-white/75"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                <a
                  href={appUrl}
                  onClick={() => track("login_click", { location: "nav_mobile" })}
                  className={`rounded-xl px-3 py-3 text-center text-sm font-semibold ${control}`}
                >
                  {t("nav.login")}
                </a>
                <a
                  href={appUrl}
                  onClick={() => track("cta_click", { location: "nav_mobile" })}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-brand px-3 py-3 text-center text-sm font-semibold text-white"
                >
                  {t("nav.cta")} <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
