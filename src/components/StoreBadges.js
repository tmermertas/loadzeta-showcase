import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";

// The two store badges side by side, wherever the site offers the apps.
export default function StoreBadges({ location, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      <AppStoreBadge location={location} />
      <GooglePlayBadge location={location} />
    </div>
  );
}
