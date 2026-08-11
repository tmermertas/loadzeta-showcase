import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, Calculator } from "lucide-react";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import GuideCta from "../../../components/GuideCta";
import { GUIDES, getGuide } from "../../../lib/guides";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  const url = `https://loadzeta.com/guides/${g.slug}`;
  return {
    title: `${g.title} | LoadZeta Guides`,
    description: g.description,
    alternates: { canonical: url },
    openGraph: { title: g.title, description: g.description, url, siteName: "LoadZeta", type: "article" },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    datePublished: g.date,
    author: { "@type": "Organization", name: "Load Zeta", url: "https://loadzeta.com" },
    publisher: { "@type": "Organization", name: "Load Zeta", url: "https://loadzeta.com" },
    mainEntityOfPage: `https://loadzeta.com/guides/${g.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <article className="mx-auto max-w-2xl px-4 sm:px-6">
          <Link href="/guides" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-brand">
            <ArrowLeft size={15} /> All guides
          </Link>

          <header className="mt-6">
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <Clock size={12} /> {g.readMinutes} min read · {g.date}
            </div>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{g.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">{g.description}</p>
          </header>

          <div className="mt-10 space-y-8">
            {g.sections.map((s, i) => (
              <section key={i}>
                {s.h2 && <h2 className="mb-3 text-xl font-bold sm:text-2xl">{s.h2}</h2>}
                {s.p?.map((para, j) => (
                  <p key={j} className="mb-4 leading-relaxed text-[var(--text-muted)]">{para}</p>
                ))}
                {s.ul && (
                  <ul className="space-y-2.5">
                    {s.ul.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 leading-relaxed text-[var(--text-muted)]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* calculator cross-link */}
          <Link
            href="/cpm-calculator"
            className="card-lift mt-10 flex items-center gap-3 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
              <Calculator size={18} />
            </span>
            <div>
              <div className="text-sm font-bold">Free cost-per-mile calculator</div>
              <div className="text-xs text-[var(--text-muted)]">Get your own number in two minutes — no sign-up.</div>
            </div>
          </Link>

          <GuideCta />
        </article>
      </main>
      <Footer />
    </>
  );
}
