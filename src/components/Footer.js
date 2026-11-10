"use client";

import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { ShieldCheck, Trash2, Mail, ArrowRight, ArrowUp, Truck, Lock, ArrowUpRight, Check } from "lucide-react";
import Logo from "./Logo";
import AppStoreBadge from "./AppStoreBadge";
import { FadeIn } from "./motion";
import { useI18n } from "../lib/providers";
import { APP_URL } from "../lib/translations";
import { localePath } from "../lib/locale";

const SUPPORT_EMAIL = "support@loadzeta.com";

function FooterLink({ href, label, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-1 text-[var(--stage-muted)] transition-colors hover:text-white"
    >
      <span>{label}</span>
      {external && (
        <ArrowUpRight size={13} className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-70" />
      )}
    </a>
  );
}

function Column({ title, children }) {
  return (
    <div>
      <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">{title}</div>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

// The page ends the way it begins: one inset navy stage. The closing call to
// action, the site map and the legal line share it, so the footer reads as the
// hero's counterpart rather than a grey strip under the page.
export default function Footer() {
  const { t, lang, setLang, langs, appUrl } = useI18n();
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = ["/", "/tr", "/es", "/ru"].includes(pathname);
  const anchor = (a) => (isHome ? a : `${localePath(lang, "/")}${a}`);

  const product = [
    { href: anchor("#app"), label: t("showcase.heading") },
    { href: anchor("#features"), label: t("nav.features") },
    { href: anchor("#how"), label: t("nav.how") },
    { href: anchor("#pricing"), label: t("footer.pricing") },
    { href: appUrl, label: t("nav.login"), external: true },
  ];
  const resources = [
    { href: localePath(lang, "/guides"), label: t("footer.guides") },
    { href: "/cpm-calculator", label: t("footer.calculator") },
    { href: anchor("#faq"), label: t("faq.heading") },
  ];
  const legal = [
    { href: `${APP_URL}/terms.html`, label: t("footer.terms"), external: true },
    { href: `${APP_URL}/privacy.html`, label: t("footer.privacy"), external: true },
    { href: `${APP_URL}/refund-policy.html`, label: t("footer.refund"), external: true },
  ];
  const badges = [
    { icon: ShieldCheck, label: t("footer.compliance"), color: "text-[#7ee2a0]" },
    { icon: Lock, label: t("footer.paddle"), color: "text-[#5ac8fa]" },
    { icon: Trash2, label: t("footer.ownData"), color: "text-[#bf9bff]" },
  ];

  return (
    <footer className="px-2 pb-2 pt-4 sm:px-3 sm:pb-3 sm:pt-8">
      <div className="stage stage-grid rounded-[2rem] sm:rounded-[2.5rem]">
        <div className="glow left-[-10%] top-[-12%] h-[440px] w-[440px] bg-brand opacity-30" aria-hidden="true" />
        <div className="glow right-[-8%] top-[6%] h-[420px] w-[420px] bg-[#7c8cff] opacity-25" aria-hidden="true" />
        <div className="glow bottom-[-20%] left-[30%] h-[420px] w-[620px] bg-[#0a84ff] opacity-15" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          {/* Closing call to action */}
          <FadeIn className="py-16 text-center sm:py-24">
            <h2 className="mx-auto max-w-3xl text-[2rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {t("footer.ctaTitle")}
            </h2>
            <p className="mt-5 text-lg text-[var(--stage-muted)]">{t("footer.ctaSub")}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href={appUrl}
                onClick={() => track("cta_click", { location: "footer" })}
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-[0_10px_34px_rgba(10,132,255,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_44px_rgba(10,132,255,0.65)]"
              >
                {t("hero.cta")}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <AppStoreBadge location="footer_cta" />
            </div>
            <p className="mt-5 flex items-center justify-center gap-1.5 text-sm text-[var(--stage-muted)]">
              <ShieldCheck size={15} className="text-success" /> {t("hero.note")}
            </p>
          </FadeIn>

          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />

          {/* Site map */}
          <div className="grid gap-x-8 gap-y-12 py-14 sm:py-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <a href={isHome ? "#top" : localePath(lang, "/")} aria-label="LoadZeta" className="inline-block"><Logo /></a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--stage-muted)]">{t("footer.tagline")}</p>
              <ul className="mt-6 space-y-2.5">
                {badges.map((b) => (
                  <li key={b.label} className="flex items-start gap-2.5 text-[13px] font-medium text-white/70">
                    <b.icon size={15} className={`mt-0.5 shrink-0 ${b.color}`} /> {b.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8">
              <Column title={t("footer.product")}>
                {product.map((l) => <li key={l.label}><FooterLink {...l} /></li>)}
              </Column>
              <Column title={t("footer.resources")}>
                {resources.map((l) => <li key={l.label}><FooterLink {...l} /></li>)}
              </Column>
              <Column title={t("footer.legal")}>
                {legal.map((l) => <li key={l.label}><FooterLink {...l} /></li>)}
              </Column>
              <Column title={t("footer.language")}>
                {langs.map((l) => (
                  <li key={l.code}>
                    <button
                      onClick={() => setLang(l.code)}
                      aria-pressed={lang === l.code}
                      className={`inline-flex items-center gap-2 transition-colors hover:text-white ${
                        lang === l.code ? "font-semibold text-white" : "text-[var(--stage-muted)]"
                      }`}
                    >
                      <span aria-hidden="true">{l.flag}</span> {l.label}
                      {lang === l.code && <Check size={14} className="text-[#5ac8fa]" />}
                    </button>
                  </li>
                ))}
              </Column>
            </div>
          </div>

          {/* Support */}
          <div className="chip flex flex-col items-start gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/20 text-[#5ac8fa]">
                <Mail size={19} />
              </span>
              <div>
                <div className="font-bold">{t("footer.support")}</div>
                <div className="mt-0.5 text-sm text-[var(--stage-muted)]">{t("footer.supportBody")}</div>
              </div>
            </div>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              onClick={() => track("support_email_click")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0a1020] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Mail size={15} /> {SUPPORT_EMAIL}
            </a>
          </div>

          {/* Bottom bar */}
          <div className="relative z-10 flex flex-col items-center justify-between gap-4 py-8 text-xs text-white/50 sm:flex-row">
            <span>© {year} Load Zeta · {t("footer.rights")}</span>
            <span className="inline-flex items-center gap-1.5">
              <Truck size={13} className="text-[#5ac8fa]" /> {t("footer.made")}
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label={t("footer.backToTop")}
              className="chip group grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/15"
            >
              <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Giant fading wordmark, cut off by the stage's bottom edge */}
        <div
          className="pointer-events-none -mt-6 mb-[-5vw] select-none bg-gradient-to-b from-white/[0.11] to-transparent bg-clip-text text-center text-[21vw] font-extrabold leading-[0.78] tracking-tight text-transparent"
          aria-hidden="true"
        >
          LoadZeta
        </div>
      </div>
    </footer>
  );
}
