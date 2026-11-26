import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import LoadProfitCalculator from "../../components/LoadProfitCalculator";

export const metadata = {
  title: "Is This Load Worth It? Free Load Profit Calculator | LoadZeta",
  description: "Check a load's real profit before you book it: rate per total mile with deadhead, trip cost from your cost per mile, and the break-even rate. Free, no sign-up.",
  alternates: { canonical: "https://loadzeta.com/load-profit-calculator" },
  openGraph: { title: "Is This Load Worth It? Free Load Profit Calculator", description: "Check a load's real profit before you book it: rate per total mile with deadhead, trip cost from your cost per mile, and the break-even rate. Free, no sign-up.", url: "https://loadzeta.com/load-profit-calculator", siteName: "LoadZeta", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Load Profit Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://loadzeta.com/load-profit-calculator",
  publisher: { "@type": "Organization", name: "Load Zeta", url: "https://loadzeta.com" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main><LoadProfitCalculator /></main>
      <Footer />
    </>
  );
}
