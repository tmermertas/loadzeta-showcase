// LoadZeta wordmark — a fast "Z" lightning mark + "Load" / "Zeta" split,
// matching the app's brand treatment (accent on "Zeta").
export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="lz-g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0a84ff" />
            <stop offset="1" stopColor="#5e5ce6" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#lz-g)" />
        <path d="M9 10h13l-9 8h9l-1.5 4H8l9-8H9.8L9 10z" fill="#fff" />
      </svg>
      <span className="text-[1.3rem] font-extrabold tracking-tight">
        Load<span className="text-brand">Zeta</span>
      </span>
    </span>
  );
}
