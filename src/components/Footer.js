"use client";

import { ShieldCheck, Trash2 } from "lucide-react";
import Logo from "./Logo";
import { useI18n } from "../lib/providers";
import { APP_URL } from "../lib/translations";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const product = [
    { href: "#features", label: t("nav.features") },
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
    <footer className="border-t border-[var(--card-border)] bg-[var(--bg-subtle)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">{t("footer.tagline")}</p>
            <div className="mt-5 flex flex-col gap-2 text-xs text-[var(--text-muted)]">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={14} className="text-success" /> {t("footer.compliance")}</span>
              <span className="inline-flex items-center gap-2"><Trash2 size={14} className="text-brand" /> {t("footer.ownData")}</span>
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{t("footer.product")}</div>
            <ul className="space-y-2.5 text-sm">
              {product.map((l) => (
                <li key={l.label}><a href={l.href} className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{t("footer.legal")}</div>
            <ul className="space-y-2.5 text-sm">
              {legal.map((l) => (
                <li key={l.label}><a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--card-border)] pt-6 text-center text-xs text-[var(--text-muted)]">
          © {year} Load Zeta · {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
