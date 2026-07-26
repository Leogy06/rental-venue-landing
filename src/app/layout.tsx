import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { scriptFont, elegantSerif } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from "@/data/siteDetails";

import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Villa Christie Resort — Where Your Dream Event Comes to Life",
  description:
    "Elegant venue and full-service catering for weddings, birthdays, corporate events, and celebrations. Create unforgettable memories at Villa Christie Resort.",
  openGraph: {
    title: "Villa Christie Resort — Where Your Dream Event Comes to Life",
    description:
      "Elegant venue and full-service catering for weddings, birthdays, corporate events, and celebrations.",
    url: siteDetails.siteUrl,
    type: "website",
    images: [
      {
        url: `${siteDetails.siteLogo}`,
        width: 1200,
        height: 675,
        alt: "Villa Christie Resort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Christie Resort — Where Your Dream Event Comes to Life",
    description:
      "Elegant venue and full-service catering for weddings, birthdays, corporate events, and celebrations.",
    images: ["/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${scriptFont.variable} ${elegantSerif.variable}`}
    >
      <body
        className={`${playfair.className} ${sourceSans.className} antialiased`}
      >
        {siteDetails.googleAnalyticsId && (
          <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />
        )}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
