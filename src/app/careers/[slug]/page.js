import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Clock, Mail, ArrowUpRight } from "lucide-react";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";
import { JOBS, getJob, isOpen, jobJsonLd, applyHref, CAREERS_EMAIL } from "../../../lib/jobs";

export const revalidate = 86400;

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  const url = `https://loadzeta.com/careers/${job.slug}`;
  return {
    title: `${job.title} (${job.location.replace("Remote · ", "Remote, ")}) | Load Zeta Careers`,
    description: job.summary,
    alternates: { canonical: url },
    robots: isOpen(job) ? undefined : { index: false },
    openGraph: { title: `${job.title} at Load Zeta`, description: job.summary, url, siteName: "LoadZeta", type: "website" },
  };
}

export default async function JobPage({ params }) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();
  const open = isOpen(job);

  return (
    <>
      {open && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobJsonLd(job)) }} />}
      <Nav />
      <main lang="en">
        <PageHero
          align="left"
          eyebrow="Careers"
          title={job.title}
          sub={job.summary}
          before={
            <Link href="/careers" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/65 transition-colors hover:text-white">
              <ArrowLeft size={15} /> All roles
            </Link>
          }
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--stage-muted)]">
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
            <span className="h-3.5 w-px bg-white/20" />
            <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {job.type}</span>
          </div>
          {open && (
            <a href={applyHref(job)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-[0_10px_34px_rgba(10,132,255,0.45)] transition-transform hover:-translate-y-0.5">
              <Mail size={16} /> Apply by email
            </a>
          )}
        </PageHero>

        <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
          {!open && (
            <p className="mb-10 rounded-2xl border border-[var(--card-border)] bg-[var(--bg-subtle)] p-5 text-[15px] text-[var(--text-muted)]">
              This role is no longer open. See <Link href="/careers" className="font-semibold text-brand">current openings</Link>.
            </p>
          )}
          <div className="space-y-10">
            {job.sections.map((s) => (
              <section key={s.h2}>
                <h2 className="mb-4 text-2xl font-extrabold leading-snug tracking-tight sm:text-[1.7rem]">{s.h2}</h2>
                {s.p?.map((para, i) => (
                  <p key={i} className="mb-4 text-[17px] leading-[1.75] text-[var(--text-muted)]">{para}</p>
                ))}
                {s.ul && (
                  <ul className="space-y-3 rounded-2xl border border-[var(--card-border)] bg-[var(--bg-subtle)] p-5 sm:p-6">
                    {s.ul.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-[var(--text-muted)]">
                        <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {open && (
              <section id="apply" className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-7">
                <h2 className="text-2xl font-extrabold tracking-tight">How to apply</h2>
                <p className="mt-3 text-[17px] leading-[1.75] text-[var(--text-muted)]">
                  {job.apply} Email{" "}
                  <a href={applyHref(job)} className="font-semibold text-brand">{CAREERS_EMAIL}</a> with the role in the subject line.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={applyHref(job)} className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
                    <Mail size={16} /> Apply by email
                  </a>
                  {job.linkedin && (
                    <a href={job.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] px-6 py-3 text-sm font-bold transition-colors hover:border-brand hover:text-brand">
                      Apply on LinkedIn <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </section>
            )}

            <section className="text-[14px] leading-relaxed text-[var(--text-muted)]">
              <h2 className="mb-2 text-base font-bold text-[var(--text)]">Your application and your data</h2>
              <p className="mb-3">
                We use what you send us only to consider you for this and similar roles at Load Zeta. We keep applications
                for up to 12 months and then delete them; you can ask us to delete yours sooner, or to see what we hold,
                at {CAREERS_EMAIL}. We do not sell or share applicant data.
              </p>
              <p className="mb-3">
                If you apply from Türkiye, this is also our information notice under the Personal Data Protection Law No.
                6698 (KVKK): your data is processed to evaluate your application, on the basis of steps taken before a
                contract at your request, and you may exercise your rights under Article 11 by writing to the address above.
              </p>
              <p>
                Load Zeta considers all applicants without regard to race, color, religion, sex, sexual orientation,
                gender identity, national origin, age, disability or veteran status.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
