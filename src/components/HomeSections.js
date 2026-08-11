import Nav from "./Nav";
import Hero from "./Hero";
import Features from "./Features";
import Showcase from "./Showcase";
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
        <Features />
        <Showcase />
        <HowItWorks />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
