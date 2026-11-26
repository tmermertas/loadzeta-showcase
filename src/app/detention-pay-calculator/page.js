import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import DetentionCalculator from "../../components/DetentionCalculator";

export const metadata = {
  title: "Detention Pay Calculator for Truck Drivers | LoadZeta",
  description: "Work out detention pay after free time: hours at the dock, billing by the hour or quarter hour, hourly rate and your share. Free, no sign-up.",
  alternates: { canonical: "https://loadzeta.com/detention-pay-calculator" },
  openGraph: { title: "Detention Pay Calculator for Truck Drivers", description: "Work out detention pay after free time: hours at the dock, billing by the hour or quarter hour, hourly rate and your share. Free, no sign-up.", url: "https://loadzeta.com/detention-pay-calculator", siteName: "LoadZeta", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Detention Pay Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://loadzeta.com/detention-pay-calculator",
  publisher: { "@type": "Organization", name: "Load Zeta", url: "https://loadzeta.com" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main><DetentionCalculator /></main>
      <Footer />
    </>
  );
}
