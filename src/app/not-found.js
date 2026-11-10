"use client";

import Link from "next/link";
import { Home, BookOpen, Calculator } from "lucide-react";
import Logo from "../components/Logo";
import { useI18n } from "../lib/providers";

// A wrong turn still lands on the stage: the whole page is the navy card.
export default function NotFound() {
  const { t } = useI18n();
  return (
    <main className="flex min-h-screen p-2 sm:p-3">
      <div className="stage stage-grid flex flex-1 flex-col items-center justify-center rounded-[2rem] px-6 py-20 text-center sm:rounded-[2.5rem]">
        <div className="glow left-[10%] top-[10%] h-[420px] w-[420px] bg-[#7c8cff] opacity-20" aria-hidden="true" />
        <div className="glow bottom-[5%] right-[8%] h-[460px] w-[460px] bg-[#0a84ff] opacity-25" aria-hidden="true" />

        <Link href="/" aria-label="LoadZeta" className="rise"><Logo /></Link>
        <div className="rise rise-1 mt-10 bg-gradient-to-r from-[#5ac8fa] to-[#7c8cff] bg-clip-text text-[7rem] font-extrabold leading-none tracking-[-0.04em] text-transparent sm:text-[10rem]">
          404
        </div>
        <h1 className="rise rise-2 mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl">{t("notFound.title")}</h1>
        <p className="rise rise-2 mt-4 max-w-md text-lg text-[var(--stage-muted)]">{t("notFound.body")}</p>
        <div className="rise rise-3 mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(10,132,255,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(10,132,255,0.65)]"
          >
            <Home size={17} /> {t("notFound.back")}
          </Link>
          <Link href="/guides" className="chip inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-colors hover:bg-white/15">
            <BookOpen size={16} /> {t("footer.guides")}
          </Link>
          <Link href="/cpm-calculator" className="chip inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-colors hover:bg-white/15">
            <Calculator size={16} /> {t("footer.calculator")}
          </Link>
        </div>
      </div>
    </main>
  );
}
