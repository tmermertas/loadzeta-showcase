"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { translations, LANGS, APP_URL } from "./translations";

const Ctx = createContext(null);

// Language segments served as static routes (/tr, /es, /ru). English is "/".
const PATH_LANGS = ["tr", "es", "ru"];

function pathLangOf(pathname) {
  const seg = (pathname || "").split("/")[1];
  return PATH_LANGS.includes(seg) ? seg : null;
}

function detectLang() {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("lz_lang");
  if (stored && translations[stored]) return stored;
  const nav = (navigator.language || "en").slice(0, 2);
  return translations[nav] ? nav : "en";
}

export function Providers({ children }) {
  const pathname = usePathname();
  const pathLang = pathLangOf(pathname);
  // Path language wins at first render so /tr etc. prerender translated HTML.
  const [lang, setLangState] = useState(pathLang || "en");
  const [theme, setThemeState] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [refCode, setRefCode] = useState(null);

  useEffect(() => {
    if (pathLang) {
      // URL is explicit intent — persist it so navigation keeps the language.
      try { localStorage.setItem("lz_lang", pathLang); } catch {}
      setLangState(pathLang);
    } else {
      setLangState(detectLang());
    }
    // Theme is applied pre-hydration by the inline script in layout; read it back.
    const isDark = document.documentElement.classList.contains("dark");
    setThemeState(isDark ? "dark" : "light");
    // Referral passthrough: keep ?ref= so signup on loadzeta.app credits the referrer.
    try {
      const fromUrl = new URLSearchParams(window.location.search).get("ref");
      if (fromUrl) localStorage.setItem("lz_ref", fromUrl);
      setRefCode(fromUrl || localStorage.getItem("lz_ref"));
    } catch {}
    setMounted(true);
  }, [pathLang]);

  const setLang = useCallback((code) => {
    setLangState(code);
    try { localStorage.setItem("lz_lang", code); } catch {}
    try { document.documentElement.lang = code; } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      const root = document.documentElement;
      root.classList.toggle("dark", next === "dark");
      try { localStorage.setItem("lz_theme", next); } catch {}
      return next;
    });
  }, []);

  // Nested-key translator: t("hero.title1"). Falls back to English, then the key.
  const t = useCallback(
    (path) => {
      const dig = (obj) => path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
      const val = dig(translations[lang]);
      if (val !== undefined) return val;
      const en = dig(translations.en);
      return en !== undefined ? en : path;
    },
    [lang]
  );

  // All app CTAs go through this so the visitor's context survives the
  // .com → .app hop (different origins, no shared storage): referral code,
  // current language, and current theme. The app reads these at startup.
  const appUrl = (() => {
    const params = new URLSearchParams();
    if (refCode) params.set("ref", refCode);
    params.set("lang", lang);
    params.set("theme", theme);
    return `${APP_URL}/?${params.toString()}`;
  })();

  return (
    <Ctx.Provider value={{ lang, setLang, theme, toggleTheme, t, mounted, langs: LANGS, appUrl }}>
      {children}
    </Ctx.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within <Providers>");
  return ctx;
}
