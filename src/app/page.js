import HomeSections from "../components/HomeSections";
import { faqJsonLd } from "../lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd("en")) }}
      />
      <HomeSections />
    </>
  );
}
