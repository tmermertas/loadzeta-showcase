import { Plus_Jakarta_Sans } from "next/font/google";
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
  keywords: ["trucking app", "load tracking", "owner operator", "company driver", "CPM calculator", "trucker income", "settlement", "deadhead miles"],
  openGraph: {
    title: "LoadZeta — Know Your Loads. Track Your Earnings.",
    description: "Load parsing & income tracking for U.S. truckers. 30 days free, no credit card required.",
    url: "https://loadzeta.com",
    siteName: "LoadZeta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoadZeta — Know Your Loads. Track Your Earnings.",
    description: "Load parsing & income tracking for U.S. truckers. 30 days free, no credit card required.",
  },
  icons: { icon: "/favicon.svg" },
};

// Set the theme class before paint to avoid a flash. Default: dark (premium
// look); honored only if the user hasn't explicitly chosen light.
const themeScript = `
(function(){try{var t=localStorage.getItem('lz_theme');if(t!=='light'){document.documentElement.classList.add('dark');}var l=localStorage.getItem('lz_lang');if(l){document.documentElement.lang=l;}}catch(e){document.documentElement.classList.add('dark');}})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={jakarta.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
