// The opening stage of an inner page (guides, a guide, the calculator): the
// same inset navy card the home page opens with, sized for a title instead of
// a product shot. No client code - it renders in server components too, and
// its entrance is CSS so the heading is never held back by hydration.
//
// `overlap` leaves room at the bottom for the next block to ride up onto the
// stage (the calculator does this); `before` sits above the eyebrow (a back
// link); children follow the subtitle (meta, actions).
export default function PageHero({ icon: Icon, eyebrow, title, sub, before, children, align = "center", width = "max-w-3xl", overlap = false }) {
  const centered = align === "center";
  return (
    <section className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="stage stage-grid rounded-[2rem] sm:rounded-[2.5rem]">
        <div className="glow -left-32 top-10 h-[380px] w-[380px] bg-[#7c8cff] opacity-20" aria-hidden="true" />
        <div className="glow right-[-10%] top-[30%] h-[460px] w-[460px] bg-[#0a84ff] opacity-25" aria-hidden="true" />

        <div className={`mx-auto ${width} px-5 pt-32 sm:px-6 sm:pt-40 ${overlap ? "pb-36 sm:pb-44" : "pb-14 sm:pb-20"} ${centered ? "text-center" : ""}`}>
          {before && <div className="rise mb-6">{before}</div>}
          {eyebrow && (
            <span className="chip rise inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white/80">
              {Icon && <Icon size={13} className="text-[#5ac8fa]" />} {eyebrow}
            </span>
          )}
          <h1 className="rise rise-1 mt-5 text-[2.1rem] font-extrabold leading-[1.07] tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {sub && (
            <p className={`rise rise-2 mt-5 max-w-2xl text-lg leading-relaxed text-[var(--stage-muted)] ${centered ? "mx-auto" : ""}`}>
              {sub}
            </p>
          )}
          {children && <div className="rise rise-3 mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
}
