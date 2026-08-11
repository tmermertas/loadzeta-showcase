"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import Logo from "./Logo";
import { useI18n } from "../lib/providers";

export default function Nav() {
  const { t, theme, toggleTheme, lang, setLang, langs, mounted, appUrl } = useI18n();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  // Section anchors only exist on the home pages; elsewhere go home first.
  const isHome = ["/", "/tr", "/es", "/ru"].includes(pathname);
  const anchor = (a) => (isHome ? a : `/${a}`);

  const links = [
    { href: anchor("#features"), label: t("nav.features") },
    { href: anchor("#how"), label: t("nav.how") },
    { href: anchor("#pricing"), label: t("nav.pricing") },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-3">
        <nav className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--card-border)] bg-[var(--bg)]/70 px-4 py-2.5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <a href="#top" aria-label="LoadZeta"><Logo /></a>

          <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-[var(--text-muted)]">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[var(--text)] transition-colors">{l.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-full border border-[var(--card-border)] px-3 py-2 text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Language"
              >
                <Globe size={16} />
                <span className="uppercase">{lang}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-1 shadow-xl backdrop-blur-xl">
                  {langs.map((L) => (
                    <button
                      key={L.code}
                      onClick={() => { setLang(L.code); setLangOpen(false); }}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm ${lang === L.code ? "text-brand font-semibold" : "text-[var(--text-muted)]"} hover:bg-black/5 dark:hover:bg-white/5`}
                    >
                      <span>{L.flag}</span> {L.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="rounded-full border border-[var(--card-border)] p-2.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href={appUrl}
              onClick={() => track("cta_click", { location: "nav" })}
              className="hidden sm:inline-flex items-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(10,132,255,0.4)] hover:bg-brand-600 transition-colors"
            >
              {t("nav.cta")}
            </a>

            <button className="md:hidden rounded-full border border-[var(--card-border)] p-2.5" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-3 backdrop-blur-xl shadow-xl">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-semibold text-[var(--text-muted)] hover:bg-black/5 dark:hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a href={appUrl} onClick={() => track("cta_click", { location: "nav_mobile" })} className="mt-1 block rounded-lg bg-brand px-3 py-3 text-center text-sm font-semibold text-white">
              {t("nav.cta")}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
