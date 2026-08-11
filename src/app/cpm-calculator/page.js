import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CpmCalculator from "../../components/CpmCalculator";

export const metadata = {
  title: "Free Trucking Cost Per Mile (CPM) Calculator | LoadZeta",
  description:
    "Work out your real cost per mile — fixed costs, fuel and maintenance — and the break-even revenue your truck needs every month. Free, no sign-up.",
  alternates: { canonical: "https://loadzeta.com/cpm-calculator" },
  openGraph: {
    title: "Free Trucking Cost Per Mile (CPM) Calculator",
    description:
      "Know your real cost per mile and your break-even revenue. Free tool for truckers by LoadZeta.",
    url: "https://loadzeta.com/cpm-calculator",
    siteName: "LoadZeta",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Trucking Cost Per Mile Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://loadzeta.com/cpm-calculator",
  publisher: { "@type": "Organization", name: "Load Zeta", url: "https://loadzeta.com" },
};

export default function CpmCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <CpmCalculator />
      </main>
      <Footer />
    </>
  );
}
