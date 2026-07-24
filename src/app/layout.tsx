import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from "@/data/siteDetails";

import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yolach's Venue — Where Your Dream Event Comes to Life",
  description:
    "Elegant venue and full-service catering for weddings, birthdays, corporate events, and celebrations. Create unforgettable memories at Yolach's Venue.",
  openGraph: {
    title: "Yolach's Venue — Where Your Dream Event Comes to Life",
    description:
      "Elegant venue and full-service catering for weddings, birthdays, corporate events, and celebrations.",
    url: siteDetails.siteUrl,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 675,
        alt: "Yolach's Venue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yolach's Venue — Where Your Dream Event Comes to Life",
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
    <html lang="en">
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
