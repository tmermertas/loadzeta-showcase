import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Providers } from "../lib/providers";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://loadzeta.com"),
  title: "LoadZeta — Know Your Loads. Track Your Earnings.",
  description:
    "Load parsing & income tracking built for U.S. truckers. Parse loads in seconds, calculate loaded & deadhead miles, and control your income — company driver or owner-operator. 30 days free, no card.",
  keywords: ["trucking app", "load tracking", "owner operator", "company driver", "CPM calculator", "trucker income", "settlement", "deadhead miles", "rate confirmation parser", "trucker bookkeeping"],
  applicationName: "LoadZeta",
  authors: [{ name: "Load Zeta" }],
  alternates: {
    canonical: "https://loadzeta.com",
    languages: {
      en: "https://loadzeta.com",
      tr: "https://loadzeta.com/tr",
      es: "https://loadzeta.com/es",
      ru: "https://loadzeta.com/ru",
      "x-default": "https://loadzeta.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "LoadZeta — Know Your Loads. Track Your Earnings.",
    description: "Load parsing & income tracking for U.S. truckers. 30 days free, no credit card required.",
    url: "https://loadzeta.com",
    siteName: "LoadZeta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoadZeta — Know Your Loads. Track Your Earnings.",
    description: "Load parsing & income tracking for U.S. truckers. 30 days free, no credit card required.",
  },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};

// Structured data (JSON-LD) — helps Google render a rich result and understand
// the product + pricing. Pricing mirrors the live model.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LoadZeta",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS",
  description:
    "Load parsing and income tracking for U.S. truck drivers — company drivers and owner-operators.",
  url: "https://loadzeta.com",
  offers: {
    "@type": "Offer",
    price: "5.99",
    priceCurrency: "USD",
    description: "30 days free, then $5.99/mo for 3 months, then $14.99/mo. No credit card required to start.",
  },
  publisher: { "@type": "Organization", name: "Load Zeta", url: "https://loadzeta.com" },
};

// Set the theme class before paint to avoid a flash. Default: light; the
// dark class is added only if the user has explicitly chosen dark.
const themeScript = `
(function(){try{var t=localStorage.getItem('lz_theme');if(t==='dark'){document.documentElement.classList.add('dark');}var seg=location.pathname.split('/')[1];if(['tr','es','ru'].indexOf(seg)>-1){document.documentElement.lang=seg;}else{var l=localStorage.getItem('lz_lang');if(l){document.documentElement.lang=l;}}}catch(e){}})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={jakarta.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
