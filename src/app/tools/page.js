import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ToolsHub from "../../components/ToolsHub";

export const metadata = {
  title: "Free Trucking Calculators | LoadZeta",
  description:
    "Free calculators for truck drivers: is this load worth it, cost per mile, percentage vs CPM pay and detention pay. No sign-up.",
  alternates: { canonical: "https://loadzeta.com/tools" },
  openGraph: { title: "Free Trucking Calculators", description: "Load profit, cost per mile, driver pay and detention calculators by LoadZeta.", url: "https://loadzeta.com/tools", siteName: "LoadZeta", type: "website" },
};

export default function ToolsPage() {
  return (
    <>
      <Nav />
      <main><ToolsHub /></main>
      <Footer />
    </>
  );
}
