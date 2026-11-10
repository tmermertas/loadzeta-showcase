import Link from "next/link";
import { BookOpen, Clock, ArrowRight, Calculator } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { guideLook } from "../../components/guideLook";
import { GUIDES } from "../../lib/guides";

export const metadata = {
  title: "Trucking Guides — Cost Per Mile, Deadhead, Settlements | LoadZeta",
  description:
    "Practical, no-fluff guides for U.S. truckers: calculate your real cost per mile, cut deadhead miles, and read your weekly settlement like a pro.",
  alternates: { canonical: "https://loadzeta.com/guides" },
  openGraph: {
    title: "Trucking Guides by LoadZeta",
    description: "Cost per mile, deadhead miles, weekly settlements — practical guides for truckers.",
    url: "https://loadzeta.com/guides",
    siteName: "LoadZeta",
    type: "website",
  },
};

export default function GuidesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          icon={BookOpen}
          eyebrow="LoadZeta · Guides"
          title="Run the business side like a pro"
          sub="Short, practical guides on the numbers that decide whether your truck makes money."
        />

        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="space-y-4 sm:space-y-5">
            {GUIDES.map((g, i) => {
              const look = guideLook(g.slug);
              const Icon = look.icon;
              return (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="card-lift group relative block overflow-hidden rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-8"
                >
                  <div
                    className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full opacity-[0.14] blur-3xl transition-opacity duration-300 group-hover:opacity-25"
                    style={{ backgroundImage: `linear-gradient(135deg, ${look.a}, ${look.b})` }}
                    aria-hidden="true"
                  />
                  <div className="relative flex flex-col gap-5 sm:flex-row sm:gap-7">
                    <span
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white shadow-[0_10px_24px_rgba(0,0,0,0.15)]"
                      style={{ backgroundImage: `linear-gradient(135deg, ${look.a}, ${look.b})` }}
                    >
                      <Icon size={24} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 text-xs font-semibold text-[var(--text-muted)]">
                        <span className="tabular-nums tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                        <span className="h-3 w-px bg-[var(--card-border)]" />
                        <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {g.readMinutes} min read</span>
                      </div>
                      <h2 className="mt-2.5 text-xl font-extrabold leading-snug tracking-tight transition-colors group-hover:text-brand sm:text-2xl">
                        {g.title}
                      </h2>
                      <p className="mt-2.5 leading-relaxed text-[var(--text-muted)]">{g.description}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                        Read the guide
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* The tool the guides keep pointing at. */}
          <Link
            href="/cpm-calculator"
            className="stage group mt-10 flex flex-col items-start gap-5 rounded-[2rem] p-7 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-9"
          >
            <div className="glow -right-16 -top-24 h-64 w-64 bg-brand opacity-30" aria-hidden="true" />
            <div className="flex items-center gap-4">
              <span className="chip grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-[#5ac8fa]">
                <Calculator size={22} />
              </span>
              <div>
                <div className="text-xl font-extrabold tracking-tight">Free cost-per-mile calculator</div>
                <div className="mt-1 text-sm text-[var(--stage-muted)]">Get your own number in two minutes — no sign-up.</div>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0a1020] transition-transform group-hover:-translate-y-0.5">
              Open the calculator <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
