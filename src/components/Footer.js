"use client";

import { ShieldCheck, Trash2, Mail, ArrowRight, ArrowUp, Truck, Lock, ChevronRight } from "lucide-react";
import Logo from "./Logo";
import { FadeIn } from "./motion";
import { useI18n } from "../lib/providers";
import { APP_URL } from "../lib/translations";

const SUPPORT_EMAIL = "support@loadzeta.com";

function FooterLink({ href, label, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-1 text-[var(--text-muted)] transition-colors hover:text-brand"
    >
      <span>{label}</span>
      <ChevronRight
        size={13}
        className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </a>
  );
}

export default function Footer() {
  const { t, lang, setLang, langs } = useI18n();
  const year = new Date().getFullYear();

  const product = [
    { href: "#features", label: t("nav.features") },
    { href: "#app", label: t("showcase.heading") },
    { href: "#how", label: t("nav.how") },
    { href: "#pricing", label: t("footer.pricing") },
    { href: `${APP_URL}/`, label: t("nav.login"), external: true },
  ];
  const legal = [
    { href: `${APP_URL}/terms.html`, label: t("footer.terms"), external: true },
    { href: `${APP_URL}/privacy.html`, label: t("footer.privacy"), external: true },
    { href: `${APP_URL}/refund-policy.html`, label: t("footer.refund"), external: true },
  ];
  const badges = [
    { icon: ShieldCheck, label: t("footer.compliance"), color: "text-success" },
    { icon: Lock, label: t("footer.paddle"), color: "text-brand" },
    { icon: Trash2, label: t("footer.ownData"), color: "text-[#a78bfa]" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[var(--bg-subtle)]">
      {/* gradient hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/60 to-transparent" aria-hidden="true" />

      {/* CTA band */}
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/[0.12] via-transparent to-[#5e5ce6]/[0.12] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#5e5ce6]/20 blur-3xl" aria-hidden="true" />
            <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t("footer.ctaTitle")}
            </h2>
            <p className="relative mt-3 text-[var(--text-muted)]">{t("footer.ctaSub")}</p>
            <div className="relative mt-8 flex flex-col items-center gap-3">
              <a
                href={`${APP_URL}/`}
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-[0_8px_30px_rgba(10,132,255,0.4)] transition-all hover:shadow-[0_8px_40px_rgba(10,132,255,0.6)]"
              >
                {t("hero.cta")}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-xs text-[var(--text-muted)]">{t("hero.note")}</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">{t("footer.tagline")}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3 py-1.5 text-[11px] font-semibold text-[var(--text-muted)]"
                >
                  <b.icon size={12} className={b.color} /> {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="lg:col-span-2">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{t("footer.product")}</div>
            <ul className="space-y-2.5 text-sm">
              {product.map((l) => (
                <li key={l.label}><FooterLink {...l} /></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{t("footer.legal")}</div>
            <ul className="space-y-2.5 text-sm">
              {legal.map((l) => (
                <li key={l.label}><FooterLink {...l} /></li>
              ))}
            </ul>
          </div>

          {/* Support card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Mail size={18} />
                </span>
                <div>
                  <div className="text-sm font-bold">{t("footer.support")}</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-[var(--text-muted)]">{t("footer.supportBody")}</div>
                </div>
              </div>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-bold text-white transition-all hover:shadow-[0_6px_24px_rgba(10,132,255,0.4)]"
              >
                <Mail size={15} /> {SUPPORT_EMAIL}
              </a>
            </div>

            {/* Language switcher */}
            <div className="mt-5">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{t("footer.language")}</div>
              <div className="flex flex-wrap gap-2">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-bold transition-colors ${
                      lang === l.code
                        ? "border-brand bg-brand/10 text-brand"
                        : "border-[var(--card-border)] bg-[var(--card)] text-[var(--text-muted)] hover:border-brand/40"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--card-border)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row">
          <span>© {year} Load Zeta · {t("footer.rights")}</span>
          <span className="inline-flex items-center gap-1.5">
            <Truck size={13} className="text-brand" /> {t("footer.made")}
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t("footer.backToTop")}
            className="group grid h-10 w-10 place-items-center rounded-full border border-[var(--card-border)] bg-[var(--card)] transition-all hover:border-brand/50 hover:shadow-[0_0_20px_rgba(10,132,255,0.25)]"
          >
            <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Giant fading watermark */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-0.22em] select-none overflow-hidden bg-gradient-to-b from-[var(--text)] to-transparent bg-clip-text text-center text-[21vw] font-extrabold leading-none tracking-tight text-transparent opacity-[0.045]"
        aria-hidden="true"
      >
        LoadZeta
      </div>
    </footer>
  );
}
