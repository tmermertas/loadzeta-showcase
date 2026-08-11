import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
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
      <main className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-muted)]">
              <BookOpen size={13} className="text-brand" /> LoadZeta · Guides
            </span>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Run the business side like a pro
            </h1>
            <p className="mt-4 text-lg text-[var(--text-muted)]">
              Short, practical guides on the numbers that decide whether your truck makes money.
            </p>
          </div>

          <div className="space-y-4">
            {GUIDES.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="card-lift group block rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-8"
              >
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <Clock size={12} /> {g.readMinutes} min read
                </div>
                <h2 className="mt-2 text-xl font-bold transition-colors group-hover:text-brand sm:text-2xl">
                  {g.title}
                </h2>
                <p className="mt-2 leading-relaxed text-[var(--text-muted)]">{g.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                  Read the guide
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
