import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight, Mail } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import PageHero from "./PageHero";
import { openJobs, CAREERS_EMAIL } from "../lib/jobs";
import { CAREERS_COPY, fill, jobLocation, jobType } from "../lib/careersCopy";
import { localePath } from "../lib/locale";

const Email = () => <a className="font-semibold text-brand" href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>;

// "{email}" inside a translated sentence becomes the mailto link.
function WithEmail({ text }) {
  const [a, b] = text.split("{email}");
  return <>{a}<Email />{b}</>;
}

// The list of open roles in one language. Summaries and titles stay English.
export default function CareersIndex({ lang = "en" }) {
  const c = CAREERS_COPY[lang];
  const jobs = openJobs();
  return (
    <>
      <Nav />
      <main lang={lang}>
        <PageHero icon={Briefcase} eyebrow={c.eyebrow} title={c.heroTitle} sub={c.heroSub} />

        <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
          <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
            {fill(c.openRoles, { n: jobs.length })}
          </div>
          {jobs.length === 0 ? (
            <p className="text-[17px] leading-relaxed text-[var(--text-muted)]"><WithEmail text={c.noRoles} /></p>
          ) : (
            <div className="space-y-4">
              {jobs.map((j) => (
                <Link
                  key={j.slug}
                  href={localePath(lang, `/careers/${j.slug}`)}
                  className="card-lift group block rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="min-w-0 flex-1">
                      <h2 lang="en" className="text-lg font-extrabold leading-snug tracking-tight transition-colors group-hover:text-brand sm:text-xl">{j.title}</h2>
                      <p lang="en" className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">{j.summary}</p>
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm font-medium text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-brand" /> {jobLocation(j, lang)}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock size={14} className="text-brand" /> {jobType(lang)}</span>
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
            <p className="text-[15px] leading-relaxed text-[var(--text-muted)]"><WithEmail text={c.notListed} /></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
