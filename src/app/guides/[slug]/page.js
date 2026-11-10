import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, ArrowRight, Calculator } from "lucide-react";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import GuideCta from "../../../components/GuideCta";
import PageHero from "../../../components/PageHero";
import { guideLook } from "../../../components/guideLook";
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

  const look = guideLook(g.slug);
  const more = GUIDES.filter((x) => x.slug !== g.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <PageHero
          align="left"
          width="max-w-3xl"
          icon={look.icon}
          eyebrow="LoadZeta · Guide"
          title={g.title}
          sub={g.description}
          before={
            <Link href="/guides" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/65 transition-colors hover:text-white">
              <ArrowLeft size={15} /> All guides
            </Link>
          }
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--stage-muted)]">
            <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {g.readMinutes} min read</span>
            <span className="h-3.5 w-px bg-white/20" />
            <time dateTime={g.date}>{new Date(`${g.date}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time>
          </div>
        </PageHero>

        <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
          <div className="space-y-10">
            {g.sections.map((s, i) => (
              <section key={i}>
                {s.h2 && (
                  <h2 className="mb-4 flex items-start gap-3 text-2xl font-extrabold leading-snug tracking-tight sm:text-[1.7rem]">
                    <span
                      className="mt-[0.35em] h-[0.9em] w-1 shrink-0 rounded-full"
                      style={{ backgroundImage: `linear-gradient(180deg, ${look.a}, ${look.b})` }}
                      aria-hidden="true"
                    />
                    {s.h2}
                  </h2>
                )}
                {s.p?.map((para, j) => (
                  <p
                    key={j}
                    className={`mb-4 text-[17px] leading-[1.75] ${i === 0 && j === 0 ? "text-[1.15rem] font-medium text-[var(--text)]" : "text-[var(--text-muted)]"}`}
                  >
                    {para}
                  </p>
                ))}
                {s.ul && (
                  <ul className="space-y-3 rounded-2xl border border-[var(--card-border)] bg-[var(--bg-subtle)] p-5 sm:p-6">
                    {s.ul.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[16px] leading-relaxed text-[var(--text-muted)]">
                        <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
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
            className="card-lift group mt-12 flex items-center gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-6"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
              <Calculator size={21} />
            </span>
            <div className="min-w-0">
              <div className="font-bold">Free cost-per-mile calculator</div>
              <div className="mt-0.5 text-sm text-[var(--text-muted)]">Get your own number in two minutes — no sign-up.</div>
            </div>
            <ArrowRight size={18} className="ml-auto shrink-0 text-brand transition-transform group-hover:translate-x-1" />
          </Link>

          <GuideCta />

          {/* The other guides */}
          <div className="mt-14">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">Keep reading</div>
            <div className="grid gap-4 sm:grid-cols-2">
              {more.map((x) => {
                const xl = guideLook(x.slug);
                const XIcon = xl.icon;
                return (
                  <Link
                    key={x.slug}
                    href={`/guides/${x.slug}`}
                    className="card-lift group rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
                  >
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl text-white"
                      style={{ backgroundImage: `linear-gradient(135deg, ${xl.a}, ${xl.b})` }}
                    >
                      <XIcon size={18} />
                    </span>
                    <div className="mt-3 font-bold leading-snug transition-colors group-hover:text-brand">{x.title}</div>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)]">
                      <Clock size={12} /> {x.readMinutes} min read
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
