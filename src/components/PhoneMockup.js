import { Truck, DollarSign, Navigation, TrendingUp } from "lucide-react";

// A self-contained iPhone-style mockup showing a miniature LoadZeta dashboard.
// Pure placeholder UI (no data) — swap for a real screenshot later if desired.
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* soft glow */}
      <div className="absolute -inset-6 rounded-[3rem] bg-brand/20 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-[2.6rem] border border-white/15 bg-[#0b0b12] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        {/* notch */}
        <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-[#0e0e16] to-[#050507] p-4 pt-9">
          {/* header row */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-extrabold text-white">Load<span className="text-brand">Zeta</span></span>
            <span className="h-7 w-7 rounded-full bg-gradient-to-br from-brand to-[#5e5ce6]" />
          </div>

          {/* active load card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
            <div className="mb-3 flex items-center gap-2 text-[13px] font-bold text-white">
              <Truck size={15} className="text-brand" /> Active Load
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-success" />
                <span className="text-white/90 font-semibold">Carson, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ff453a]" />
                <span className="text-white/90 font-semibold">North East, MD</span>
              </div>
            </div>
          </div>

          {/* KPI grid */}
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
        </div>
      </div>
    </div>
  );
}
