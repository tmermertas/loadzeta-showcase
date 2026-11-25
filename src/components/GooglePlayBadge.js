"use client";

import { track } from "@vercel/analytics";
import { useI18n } from "../lib/providers";
import { GOOGLE_PLAY_URL } from "../lib/translations";

// Google's own badge artwork (play.google.com/intl/en_us/badges), served from
// /public like Apple's - the Google Play brand rules require the official
// badge, not a lookalike. The downloads carry transparent padding; the files
// here are cropped to the badge's edge so it lines up with the App Store badge
// at the same height.
const BADGE = {
  en: "/badges/google-play-en.png",
  tr: "/badges/google-play-tr.png",
  es: "/badges/google-play-es.png",
  ru: "/badges/google-play-ru.png",
};

// Until the app is public on Google Play, GOOGLE_PLAY_URL stays null and the
// badge is shown without a link. Setting the URL turns it into a link.
export default function GooglePlayBadge({ location, className = "" }) {
  const { lang, t } = useI18n();
  /* eslint-disable-next-line @next/next/no-img-element */
  const img = <img src={BADGE[lang] || BADGE.en} alt={t("googlePlay.alt")} className="h-12 w-auto sm:h-[52px]" />;

  if (!GOOGLE_PLAY_URL) {
    return <span className={`inline-block ${className}`}>{img}</span>;
  }
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("google_play_click", { location })}
      className={`inline-block transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {img}
    </a>
  );
}
