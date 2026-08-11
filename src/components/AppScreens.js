import {
  Truck, DollarSign, Navigation, TrendingUp, Lock, Fuel, Wrench,
  ShieldCheck, FileDown, Plus, ChevronRight,
} from "lucide-react";

// Miniature recreations of REAL screens from loadzeta.app — dashboard, load
// history, analytics, business expenses (owner-operator P&L) and weekly
// settlements. Placeholder data, but every element mirrors a shipped feature.

export function PhoneFrame({ children }) {
  return (
    <div lang="en" className="relative mx-auto w-[280px] sm:w-[300px]">
      <div className="absolute -inset-6 rounded-[3rem] bg-brand/20 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-[2.6rem] border border-white/15 bg-[#0b0b12] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-[#0e0e16] to-[#050507]">
          {children}
        </div>
      </div>
    </div>
  );
}

function Wordmark() {
  return (
    <span className="text-sm text-white">
      <span className="font-extrabold">Load</span>
      <span className="font-light tracking-[0.12em] text-[#38bdf8]">ZETA</span>
    </span>
  );
}

function ScreenShell({ title, children }) {
  return (
    <div className="h-[470px] p-4 pt-9">
      <div className="mb-3.5 flex items-center justify-between">
        {title ? <span className="text-[13px] font-bold text-white">{title}</span> : <Wordmark />}
        <span className="h-6 w-6 rounded-full bg-gradient-to-br from-brand to-[#5e5ce6]" />
      </div>
      {children}
    </div>
  );
}

/* ---------- 1. Dashboard — active load + live KPIs ---------- */
export function DashboardScreen() {
  return (
    <ScreenShell>
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
        <div className="mb-3 flex items-center gap-2 text-[13px] font-bold text-white">
          <Truck size={15} className="text-brand" /> Active Load
        </div>
        <div className="space-y-2 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success" />
            <span className="font-semibold text-white/90">Carson, CA</span>
          </div>
          <div className="ml-[3px] h-3 w-px bg-white/15" />
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ff453a]" />
            <span className="font-semibold text-white/90">North East, MD</span>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {[
          { icon: Navigation, label: "Miles", value: "2,702" },
          { icon: DollarSign, label: "Gross", value: "$9,300", accent: "text-success" },
          { icon: DollarSign, label: "Driver Pay", value: "$2,790", accent: "text-brand" },
          { icon: TrendingUp, label: "Avg RPM", value: "$1.03", accent: "text-[#a78bfa]" },
        ].map((k) => (
          <div key={k.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
            <div className="mb-1 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wide text-white/50">
              <k.icon size={11} /> {k.label}
            </div>
            <div className={`text-[15px] font-extrabold ${k.accent || "text-white"}`}>{k.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl bg-success/90 py-2.5 text-center text-[12px] font-bold text-black">
        Mark Delivered
      </div>
    </ScreenShell>
  );
}

/* ---------- 2. Load history — per-load earnings, locked ---------- */
const LOADS = [
  { route: "Carson, CA → North East, MD", meta: "Aug 8 · 2,702 mi", pay: "$9,300", status: "In Transit", live: true },
  { route: "Dallas, TX → Atlanta, GA", meta: "Aug 4 · 781 mi", pay: "$2,340", status: "Delivered" },
  { route: "Laredo, TX → Chicago, IL", meta: "Jul 30 · 1,394 mi", pay: "$3,890", status: "Delivered" },
  { route: "Savannah, GA → Nashville, TN", meta: "Jul 26 · 507 mi", pay: "$1,610", status: "Delivered" },
];

export function HistoryScreen() {
  return (
    <ScreenShell title="Load History">
      <div className="space-y-2">
        {LOADS.map((l) => (
          <div key={l.route} className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="truncate text-[11px] font-bold text-white">{l.route}</div>
                <div className="mt-0.5 text-[9.5px] text-white/45">{l.meta}</div>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-[12px] font-extrabold text-success">{l.pay}</div>
                <span className={`mt-0.5 inline-block rounded-full px-1.5 py-px text-[8px] font-bold ${l.live ? "bg-brand/20 text-brand" : "bg-success/15 text-success"}`}>
                  {l.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5 text-[9.5px] text-white/40">
        <Lock size={10} /> Earnings locked at delivery — history never rewrites
      </div>
    </ScreenShell>
  );
}

/* ---------- 3. Analytics — weekly earnings chart ---------- */
const WEEKS = [
  { label: "W1", value: "$4.2k", pct: 68 },
  { label: "W2", value: "$3.1k", pct: 50 },
  { label: "W3", value: "$6.2k", pct: 100 },
  { label: "W4", value: "$5.0k", pct: 80 },
];

export function AnalyticsScreen() {
  return (
    <ScreenShell title="Analytics">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
        <div className="text-[9px] font-semibold uppercase tracking-wide text-white/50">Gross · August</div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-[22px] font-extrabold text-white">$18,420</span>
          <span className="rounded-full bg-success/15 px-1.5 py-px text-[9px] font-bold text-success">+12%</span>
        </div>
        <div className="mt-4 flex h-[120px] items-end gap-3">
          {WEEKS.map((w) => (
            <div key={w.label} className="flex flex-1 flex-col items-center gap-1.5">
              <span className="text-[8.5px] font-bold text-white/60">{w.value}</span>
              <div className="w-full rounded-t-lg bg-gradient-to-t from-brand/40 to-brand" style={{ height: `${w.pct}%` }} />
              <span className="text-[8.5px] text-white/40">{w.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
          <div className="mb-1 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wide text-white/50">
            <Navigation size={11} /> Miles
          </div>
          <div className="text-[15px] font-extrabold text-white">8,040</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
          <div className="mb-1 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wide text-white/50">
            <TrendingUp size={11} /> Avg RPM
          </div>
          <div className="text-[15px] font-extrabold text-[#a78bfa]">$2.29</div>
        </div>
      </div>
    </ScreenShell>
  );
}

/* ---------- 4. Business expenses — owner-operator P&L ---------- */
const EXPENSES = [
  { icon: Fuel, label: "Fuel", value: "−$3,150" },
  { icon: Wrench, label: "Maintenance", value: "−$680" },
  { icon: ShieldCheck, label: "Insurance", value: "−$1,240", chip: "recurring" },
];

export function ExpensesScreen() {
  return (
    <ScreenShell title="Business Expenses">
      <div className="mb-2.5 inline-flex rounded-full bg-[#a78bfa]/15 px-2 py-0.5 text-[9px] font-bold text-[#a78bfa]">
        Owner-Operator
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-white/60">Gross</span>
          <span className="font-extrabold text-white">$18,420</span>
        </div>
        <div className="my-2.5 h-px bg-white/10" />
        <div className="space-y-2">
          {EXPENSES.map((e) => (
            <div key={e.label} className="flex items-center justify-between text-[11px]">
              <span className="flex items-center gap-2 text-white/75">
                <e.icon size={12} className="text-white/40" /> {e.label}
                {e.chip && <span className="rounded-full bg-brand/15 px-1.5 py-px text-[8px] font-bold text-brand">{e.chip}</span>}
              </span>
              <span className="font-bold text-[#ff9f0a]">{e.value}</span>
            </div>
          ))}
        </div>
        <div className="my-2.5 h-px bg-white/10" />
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-white">Net earnings</span>
          <span className="text-[17px] font-extrabold text-success">$13,350</span>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-white/15 py-2.5 text-[11px] font-semibold text-white/50">
        <Plus size={13} /> Add expense
      </div>
    </ScreenShell>
  );
}

/* ---------- 5. Weekly settlements — PDF + paid/unpaid ---------- */
export function SettlementScreen() {
  return (
    <ScreenShell title="Settlements">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-white">Aug 4 – Aug 10</span>
          <span className="rounded-full bg-success/15 px-2 py-0.5 text-[9px] font-bold text-success">PAID</span>
        </div>
        <div className="mt-3 space-y-1.5 text-[11px]">
          <div className="flex justify-between"><span className="text-white/55">Loads</span><span className="font-bold text-white">3</span></div>
          <div className="flex justify-between"><span className="text-white/55">Miles</span><span className="font-bold text-white">2,880</span></div>
          <div className="flex justify-between"><span className="text-white/55">Gross</span><span className="font-bold text-white">$6,180</span></div>
          <div className="flex justify-between"><span className="text-white/55">Deductions</span><span className="font-bold text-[#ff9f0a]">−$1,010</span></div>
        </div>
        <div className="my-2.5 h-px bg-white/10" />
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-white">Net pay</span>
          <span className="text-[17px] font-extrabold text-success">$5,170</span>
        </div>
        <div className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-brand py-2 text-[11px] font-bold text-white">
          <FileDown size={13} /> Download PDF
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <div>
          <div className="text-[11px] font-bold text-white">Jul 28 – Aug 3</div>
          <div className="text-[9.5px] text-white/45">2 loads · $4,940</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-[#ff9f0a]/15 px-2 py-0.5 text-[9px] font-bold text-[#ff9f0a]">UNPAID</span>
          <ChevronRight size={13} className="text-white/30" />
        </div>
      </div>
    </ScreenShell>
  );
}
