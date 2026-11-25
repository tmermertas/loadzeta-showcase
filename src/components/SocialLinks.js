"use client";

import { track } from "@vercel/analytics";
import { SOCIAL } from "../lib/social";

// Round glass buttons with the brand marks in white, the same chip look as the
// rest of the footer. Each link opens the account in a new tab.
export default function SocialLinks({ label }) {
  return (
    <ul className="flex flex-wrap gap-2.5" aria-label={label}>
      {SOCIAL.map((s) => (
        <li key={s.key}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            onClick={() => track("social_click", { network: s.key })}
            className="chip grid h-10 w-10 place-items-center rounded-full text-white/80 transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
              <path d={s.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
