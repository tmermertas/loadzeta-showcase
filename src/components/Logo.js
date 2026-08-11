// LoadZeta wordmark — matches the real app logo: a geometric Z "zeta" glyph
// (gradient, with the load/speed lines) + "Load" (bold) + "ZETA" (light,
// letter-spaced, brand blue). Theme-aware: "Load" follows the text color.
export default function Logo({ className = "", showText = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="lz-zeta" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <g transform="translate(8, 5)">
          <path d="M2,2 L18,2 L6,26 L26,26" fill="none" stroke="url(#lz-zeta)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="26" cy="2" r="4.5" fill="#38bdf8" />
          <circle cx="26" cy="2" r="2" fill="#ffffff" />
          <path d="M-6,14 L8,14" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          <path d="M-2,20 L10,20" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        </g>
      </svg>
      {showText && (
        <span className="text-[1.35rem] leading-none tracking-tight">
          <span className="font-extrabold">Load</span>
          <span className="font-light tracking-[0.12em] text-[#38bdf8]">ZETA</span>
        </span>
      )}
    </span>
  );
}
