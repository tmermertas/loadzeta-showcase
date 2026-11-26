"use client";

import { useRef } from "react";
import { track } from "@vercel/analytics";

// Building blocks shared by the free calculators (the CPM calculator keeps
// its own copy of Field; these follow the same look).

export function Field({ label, value, onChange, prefix, suffix, step = "any" }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-[var(--text-muted)]">{label}</span>
      <div className="flex items-center rounded-xl border border-[var(--card-border)] bg-[var(--bg-subtle)] transition-all focus-within:border-brand/60 focus-within:shadow-[0_0_0_4px_rgba(10,132,255,0.12)]">
        {prefix && <span className="pl-3.5 text-sm font-semibold text-[var(--text-muted)]">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min="0"
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 bg-transparent px-3.5 py-3 text-[15px] font-bold tabular-nums outline-none"
        />
        {suffix && <span className="pr-3.5 text-sm font-semibold text-[var(--text-muted)]">{suffix}</span>}
      </div>
    </label>
  );
}

// A small segmented choice (two or three options).
export function Choice({ label, value, onChange, options }) {
  return (
    <div>
      <span className="mb-1.5 block text-xs font-semibold text-[var(--text-muted)]">{label}</span>
      <div className="grid gap-1 rounded-xl border border-[var(--card-border)] bg-[var(--bg-subtle)] p-1" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={value === o.value}
            className={`rounded-lg px-2 py-2 text-sm font-bold transition-colors ${value === o.value ? "bg-brand text-white shadow-sm" : "text-[var(--text-muted)] hover:text-[var(--text)]"}`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function SectionLabel({ icon: Icon, children }) {
  return (
    <div className="mb-3 mt-7 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)] first:mt-0">
      {Icon && <Icon size={14} className="text-brand" />} {children}
    </div>
  );
}

// Negatives are clamped away rather than trusted (a stray minus sign should
// read as zero, not as a cost turning into income).
export const num = (v) => Math.max(0, parseFloat(v) || 0);
export const money = (n) =>
  isFinite(n) ? `${n < 0 ? "-" : ""}$${Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` : "-";
export const perMile = (n) => (isFinite(n) ? `${n < 0 ? "-" : ""}$${Math.abs(n).toFixed(2)}` : "-");

// One analytics event per visit, on the first edit, named per tool.
export function useFirstEdit(name) {
  const used = useRef(false);
  return (setter) => (v) => {
    if (!used.current) {
      used.current = true;
      track("calc_used", { tool: name });
    }
    setter(v);
  };
}
