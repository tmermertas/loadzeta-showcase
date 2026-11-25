import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight, Mail } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { openJobs, CAREERS_EMAIL } from "../../lib/jobs";

// Re-render daily so a role whose validThrough has passed drops off the list.
export const revalidate = 86400;

export const metadata = {
  title: "Careers at Load Zeta | Remote roles",
  description:
    "Join Load Zeta, the back office for U.S. truck drivers. Small remote team, real ownership, working directly with the founder.",
  alternates: { canonical: "https://loadzeta.com/careers" },
  openGraph: {
    title: "Careers at Load Zeta",
    description: "Remote roles at Load Zeta, the back office for U.S. truck drivers.",
    url: "https://loadzeta.com/careers",
    siteName: "LoadZeta",
    type: "website",
  },
};

export default function CareersPage() {
  const jobs = openJobs();
  return (
    <>
      <Nav />
      <main lang="en">
        <PageHero
          icon={Briefcase}
          eyebrow="Careers"
          title="Help truck drivers run the business side"
          sub="Load Zeta is a small, remote team. You work directly with the founder, own your area end to end, and see the effect of your work on real drivers every week."
        />

        <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
          <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
            Open roles ({jobs.length})
          </div>
          {jobs.length === 0 ? (
            <p className="text-[17px] leading-relaxed text-[var(--text-muted)]">
              No open roles right now. You can still write to{" "}
              <a className="font-semibold text-brand" href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>.
            </p>
          ) : (
            <div className="space-y-4">
              {jobs.map((j) => (
                <Link
                  key={j.slug}
                  href={`/careers/${j.slug}`}
                  className="card-lift group block rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-extrabold leading-snug tracking-tight transition-colors group-hover:text-brand sm:text-xl">{j.title}</h2>
                      <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">{j.summary}</p>
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm font-medium text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-brand" /> {j.location}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock size={14} className="text-brand" /> {j.type}</span>
                      </div>
                    </div>
                    <ArrowRight size={18} className="mt-1 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--bg-subtle)] p-5 sm:p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand"><Mail size={19} /></span>
            <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
              Don&apos;t see your role? If you know trucking or know how to reach drivers, write to{" "}
              <a className="font-semibold text-brand" href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
