import Nav from "./Nav";
import Hero from "./Hero";
import Features from "./Features";
import Showcase from "./Showcase";
import Native from "./Native";
import Everywhere from "./Everywhere";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Footer from "./Footer";

// Shared landing composition — rendered at "/" (EN) and "/tr|/es|/ru".
export default function HomeSections() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Showcase />
        <Native />
        <Features />
        <Everywhere />
        <HowItWorks />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
