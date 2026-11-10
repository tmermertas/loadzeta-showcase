import Link from "next/link";
import { Clock, ArrowLeft, ArrowRight, Calculator } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import GuideCta from "./GuideCta";
import PageHero from "./PageHero";
import { guideLook } from "./guideLook";
import { getGuide, listGuides } from "../lib/guides";
import { guideJsonLd } from "../lib/guidePages";
import { translations } from "../lib/translations";
import { localePath, DATE_LOCALE } from "../lib/locale";

// One guide in one language, rendered on the server.
export default function GuideArticle({ slug, lang = "en" }) {
  const g = getGuide(slug, lang);
  const t = translations[lang].guides;
  const look = guideLook(g.slug);
  const more = listGuides(lang).filter((x) => x.slug !== g.slug);
  const date = new Date(`${g.date}T00:00:00Z`).toLocaleDateString(DATE_LOCALE[lang], { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd(slug, lang)) }} />
      <Nav />
      <main lang={lang}>
        <PageHero
          align="left"
          width="max-w-3xl"
          icon={look.icon}
          eyebrow={t.eyebrowOne}
          title={g.title}
          sub={g.description}
          before={
            <Link href={localePath(lang, "/guides")} className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/65 transition-colors hover:text-white">
              <ArrowLeft size={15} /> {t.all}
            </Link>
          }
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--stage-muted)]">
            <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {t.minRead.replace("{n}", g.readMinutes)}</span>
            <span className="h-3.5 w-px bg-white/20" />
            <time dateTime={g.date}>{date}</time>
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
              <div className="font-bold">{t.calcTitle}</div>
              <div className="mt-0.5 text-sm text-[var(--text-muted)]">{t.calcBody}</div>
            </div>
            <ArrowRight size={18} className="ml-auto shrink-0 text-brand transition-transform group-hover:translate-x-1" />
          </Link>

          <GuideCta />

          {/* The other guides */}
          <div className="mt-14">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">{t.keepReading}</div>
            <div className="grid gap-4 sm:grid-cols-2">
              {more.map((x) => {
                const xl = guideLook(x.slug);
                const XIcon = xl.icon;
                return (
                  <Link
                    key={x.slug}
                    href={localePath(lang, `/guides/${x.slug}`)}
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
                      <Clock size={12} /> {t.minRead.replace("{n}", x.readMinutes)}
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
