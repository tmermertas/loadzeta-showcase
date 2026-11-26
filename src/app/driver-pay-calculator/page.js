import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import DriverPayCalculator from "../../components/DriverPayCalculator";

export const metadata = {
  title: "Percentage vs CPM Pay Calculator for Truck Drivers | LoadZeta",
  description: "Compare company driver pay on percentage and cents per mile for the same week of driving, weekly and yearly, and see where they cross. Free, no sign-up.",
  alternates: { canonical: "https://loadzeta.com/driver-pay-calculator" },
  openGraph: { title: "Percentage vs CPM Pay Calculator for Truck Drivers", description: "Compare company driver pay on percentage and cents per mile for the same week of driving, weekly and yearly, and see where they cross. Free, no sign-up.", url: "https://loadzeta.com/driver-pay-calculator", siteName: "LoadZeta", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Percentage vs CPM Pay Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://loadzeta.com/driver-pay-calculator",
  publisher: { "@type": "Organization", name: "Load Zeta", url: "https://loadzeta.com" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main><DriverPayCalculator /></main>
      <Footer />
    </>
  );
}
