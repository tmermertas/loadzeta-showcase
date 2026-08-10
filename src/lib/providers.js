"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations, LANGS } from "./translations";

const Ctx = createContext(null);

function detectLang() {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("lz_lang");
  if (stored && translations[stored]) return stored;
  const nav = (navigator.language || "en").slice(0, 2);
  return translations[nav] ? nav : "en";
}

export function Providers({ children }) {
  const [lang, setLangState] = useState("en");
  const [theme, setThemeState] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLangState(detectLang());
    // Theme is applied pre-hydration by the inline script in layout; read it back.
    const isDark = document.documentElement.classList.contains("dark");
    setThemeState(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

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

  return (
    <Ctx.Provider value={{ lang, setLang, theme, toggleTheme, t, mounted, langs: LANGS }}>
      {children}
    </Ctx.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within <Providers>");
  return ctx;
}
