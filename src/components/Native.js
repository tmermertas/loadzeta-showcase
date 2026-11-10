"use client";

import { FadeIn, Stagger, StaggerItem } from "./motion";
import { Phone } from "./Device";
import { useI18n } from "../lib/providers";
import widgetHome from "../assets/screens/widget-home.webp";
import quickActions from "../assets/screens/quick-actions.webp";
import contextMenu from "../assets/screens/context-menu.webp";
import homeDark from "../assets/screens/home-dark.webp";

// What the iPhone app does that a website cannot. Each card shows the part of
// a real capture that matters: `crop` says which slice of the phone stays in
// view (top: from the status bar down; bottom: up from the dock; middle: a
// band around the menu), and the mask fades whichever edge is cut.
const CARDS = [
  { key: "widget", img: widgetHome, crop: "top", a: "#7c5cff", b: "#bf5af2", c: "#5ac8fa" },
  { key: "quick", img: quickActions, crop: "bottom", a: "#0a84ff", b: "#5ac8fa", c: "#7c8cff" },
  { key: "hold", img: contextMenu, crop: "middle", a: "#30b0c7", b: "#5ac8fa", c: "#64d2ff" },
  { key: "dark", img: homeDark, crop: "top", a: "#7c5cff", b: "#bf5af2", c: "#5ac8fa" },
];

const CROP = {
  top: { pos: "top-7", mask: "linear-gradient(to bottom, #000 72%, transparent 100%)" },
  bottom: { pos: "bottom-[-34px]", mask: "linear-gradient(to bottom, transparent 0%, #000 26%)" },
  middle: { pos: "top-[-150px]", mask: "linear-gradient(to bottom, transparent 0%, #000 24%, #000 76%, transparent 100%)" },
};

export default function Native() {
  const { t } = useI18n();

  return (
    <section id="iphone" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{t("native.heading")}</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">{t("native.sub")}</p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-2">
          {CARDS.map((c) => (
            <StaggerItem key={c.key}>
              <article className="stage h-full rounded-[2rem]">
                <div className="glow bottom-[-30%] left-1/2 h-[360px] w-[360px] -translate-x-1/2 opacity-30" style={{ backgroundColor: c.a }} aria-hidden="true" />
                <div className="px-7 pt-8 text-center sm:px-9 sm:pt-9">
                  <h3 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-[1.7rem]">
                    {t(`native.items.${c.key}.title1`)}{" "}
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${c.b}, ${c.c})` }}>
                      {t(`native.items.${c.key}.title2`)}
                    </span>
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-[var(--stage-muted)]">
                    {t(`native.items.${c.key}.body`)}
                  </p>
                </div>
                <div
                  className="relative mt-6 h-[340px] overflow-hidden"
                  style={{ WebkitMaskImage: CROP[c.crop].mask, maskImage: CROP[c.crop].mask }}
                >
                  <Phone
                    src={c.img}
                    alt={`${t(`native.items.${c.key}.title1`)} ${t(`native.items.${c.key}.title2`)}`}
                    sizes="260px"
                    className={`absolute left-1/2 w-[250px] -translate-x-1/2 ${CROP[c.crop].pos}`}
                  />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
