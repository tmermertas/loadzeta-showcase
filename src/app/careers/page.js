import CareersIndex from "../../components/CareersIndex";
import { careersIndexMetadata } from "../../lib/careersPages";

// Re-render daily so a role whose validThrough has passed drops off the list.
export const revalidate = 86400;
export const metadata = careersIndexMetadata("en");

export default function CareersPage() {
  return <CareersIndex lang="en" />;
}
