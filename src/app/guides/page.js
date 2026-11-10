import GuidesIndex from "../../components/GuidesIndex";
import { guidesIndexMetadata } from "../../lib/guidePages";

// English guides list. The other languages: app/[lang]/guides.
export const metadata = guidesIndexMetadata("en");

export default function GuidesPage() {
  return <GuidesIndex lang="en" />;
}
