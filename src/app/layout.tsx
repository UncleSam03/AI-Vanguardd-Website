import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "AI Vanguard | Elite Trade Business Automation & AI Agents",
  description: "Transform your trade business with AI Vanguard. We build elite landing pages and custom AI Agents for high-performing tradesmen. Serving Europe and the Middle East.",
  keywords: ["Trade Business Automation", "AI Agents for Tradesmen", "Elite Landing Pages", "Tradesmen Website Design", "AI Vanguard", "Automation for Plumbers", "Automation for Electricians"],
  authors: [{ name: "AI Vanguard Team" }],
  openGraph: {
    title: "AI Vanguard | Your Trade Business, Automated",
    description: "High-performance landing pages and AI bots for tradesmen. Scale your business with elite tech.",
    url: "https://ai-vanguard-landing-page.vercel.app",
    siteName: "AI Vanguard",
    images: [
      {
        url: "/hero-hq.png",
        width: 1200,
        height: 630,
        alt: "AI Vanguard Trade Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Vanguard | Trade Business Automation",
    description: "Elite landing pages and AI Agents for tradesmen.",
    images: ["/hero-hq.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Vanguard Trade Automation",
    "description": "Elite landing pages and AI Agents for high-performing tradesmen.",
    "provider": {
      "@type": "Organization",
      "name": "AI Vanguard",
      "url": "https://ai-vanguard-landing-page.vercel.app",
      "logo": "https://ai-vanguard-landing-page.vercel.app/logo.jpg"
    },
    "areaServed": ["Europe", "Middle East"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elite Landing Page Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Support Agents"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-mesh antialiased`}>
        {children}
      </body>
    </html>
  );
}
