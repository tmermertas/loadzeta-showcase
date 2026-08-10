"use client";

import { ShieldCheck, Trash2, Mail, ArrowRight, Truck } from "lucide-react";
import Logo from "./Logo";
import { FadeIn } from "./motion";
import { useI18n } from "../lib/providers";
import { APP_URL } from "../lib/translations";

const SUPPORT_EMAIL = "support@loadzeta.com";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const product = [
    { href: "#features", label: t("nav.features") },
    { href: "#app", label: t("showcase.heading") },
    { href: "#how", label: t("nav.how") },
    { href: "#pricing", label: t("footer.pricing") },
    { href: `${APP_URL}/`, label: t("nav.login") },
  ];
  const legal = [
    { href: `${APP_URL}/terms.html`, label: t("footer.terms") },
    { href: `${APP_URL}/privacy.html`, label: t("footer.privacy") },
    { href: `${APP_URL}/refund-policy.html`, label: t("footer.refund") },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[var(--card-border)] bg-[var(--bg-subtle)]">
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
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">{t("footer.tagline")}</p>
            <div className="mt-5 flex flex-col gap-2 text-xs text-[var(--text-muted)]">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={14} className="text-success" /> {t("footer.compliance")}
              </span>
              <span className="inline-flex items-center gap-2">
                <Trash2 size={14} className="text-brand" /> {t("footer.ownData")}
              </span>
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{t("footer.product")}</div>
            <ul className="space-y-2.5 text-sm">
              {product.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[var(--text-muted)] transition-colors hover:text-brand">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{t("footer.legal")}</div>
            <ul className="space-y-2.5 text-sm">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] transition-colors hover:text-brand">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{t("footer.support")}</div>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{t("footer.supportBody")}</p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:border-brand/40"
            >
              <Mail size={15} /> {SUPPORT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--card-border)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row">
          <span>© {year} Load Zeta · {t("footer.rights")}</span>
          <span className="inline-flex items-center gap-1.5">
            <Truck size={13} className="text-brand" /> {t("footer.made")}
          </span>
        </div>
      </div>

      {/* Giant watermark wordmark */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-0.18em] select-none overflow-hidden text-center text-[22vw] font-extrabold leading-none tracking-tight text-[var(--text)] opacity-[0.03]"
        aria-hidden="true"
      >
        LoadZeta
      </div>
    </footer>
  );
}
