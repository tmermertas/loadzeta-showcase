"use client";

import { Home } from "lucide-react";
import Logo from "../components/Logo";
import { useI18n } from "../lib/providers";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Logo />
      <div className="mt-10 bg-gradient-to-r from-brand to-[#5e5ce6] bg-clip-text text-8xl font-extrabold tracking-tight text-transparent sm:text-9xl">
        404
      </div>
      <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">{t("notFound.title")}</h1>
      <p className="mt-3 max-w-md text-[var(--text-muted)]">{t("notFound.body")}</p>
      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(10,132,255,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(10,132,255,0.6)]"
      >
        <Home size={17} /> {t("notFound.back")}
      </a>
    </main>
  );
}
