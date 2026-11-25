import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Mail, ArrowUpRight, Languages } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import PageHero from "./PageHero";
import { getJob, isOpen, jobJsonLd, applyHref, CAREERS_EMAIL } from "../lib/jobs";
import { CAREERS_COPY, fill, jobLocation, jobType } from "../lib/careersCopy";
import { localePath } from "../lib/locale";

// One role in one language: the frame (buttons, how to apply, the data note)
// is translated, the ad itself stays English. The JobPosting structured data
// goes on the English page only, so Google sees one posting, not four.
export default function JobArticle({ slug, lang = "en" }) {
  const job = getJob(slug);
  const c = CAREERS_COPY[lang];
  const open = isOpen(job);
  const mail = <a href={applyHref(job)} className="font-semibold text-brand">{CAREERS_EMAIL}</a>;
  const [lineA, lineB] = c.applyLine.split("{email}");

  return (
    <>
      {open && lang === "en" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobJsonLd(job)) }} />}
      <Nav />
      <main lang={lang}>
        <PageHero
          align="left"
          eyebrow={c.eyebrow}
          title={<span lang="en">{job.title}</span>}
          sub={<span lang="en">{job.summary}</span>}
          before={
            <Link href={localePath(lang, "/careers")} className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/65 transition-colors hover:text-white">
              <ArrowLeft size={15} /> {c.allRoles}
            </Link>
          }
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--stage-muted)]">
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {jobLocation(job, lang)}</span>
            <span className="h-3.5 w-px bg-white/20" />
            <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {jobType(lang)}</span>
          </div>
          {open && (
            <a href={applyHref(job)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-[0_10px_34px_rgba(10,132,255,0.45)] transition-transform hover:-translate-y-0.5">
              <Mail size={16} /> {c.applyEmail}
            </a>
          )}
        </PageHero>

        <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
          {!open && (
            <p className="mb-10 rounded-2xl border border-[var(--card-border)] bg-[var(--bg-subtle)] p-5 text-[15px] text-[var(--text-muted)]">
              {c.notOpen} <Link href={localePath(lang, "/careers")} className="font-semibold text-brand">{c.current}</Link>
            </p>
          )}
          {c.englishNote && (
            <p className="mb-10 flex items-start gap-3 rounded-2xl border border-[var(--card-border)] bg-[var(--bg-subtle)] p-5 text-[15px] text-[var(--text-muted)]">
              <Languages size={18} className="mt-0.5 shrink-0 text-brand" /> {c.englishNote}
            </p>
          )}
          <div className="space-y-10">
            <div lang="en" className="space-y-10">
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
            </div>

            {open && (
              <section id="apply" className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-7">
                <h2 className="text-2xl font-extrabold tracking-tight">{c.howToApply}</h2>
                <p lang="en" className="mt-3 text-[17px] leading-[1.75] text-[var(--text-muted)]">{job.apply}</p>
                <p className="mt-2 text-[17px] leading-[1.75] text-[var(--text-muted)]">{lineA}{mail}{lineB}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={applyHref(job)} className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
                    <Mail size={16} /> {c.applyEmail}
                  </a>
                  {job.linkedin && (
                    <a href={job.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] px-6 py-3 text-sm font-bold transition-colors hover:border-brand hover:text-brand">
                      {c.applyLinkedIn} <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </section>
            )}

            <section className="text-[14px] leading-relaxed text-[var(--text-muted)]">
              <h2 className="mb-2 text-base font-bold text-[var(--text)]">{c.dataTitle}</h2>
              {c.data.map((para, i) => (
                <p key={i} className={i < c.data.length - 1 ? "mb-3" : ""}>{fill(para, { email: CAREERS_EMAIL })}</p>
              ))}
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
