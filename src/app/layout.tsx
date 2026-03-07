import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'AI Vanguard | Your Service Business, Accelerated by AI',
  description: 'Professional landing pages and AI Agents for local service pros. Get a world-class digital presence while you stay on the job.',
  keywords: ['AI agents', 'service business website', 'plumber website', 'hvac website', 'electrician website', 'local business AI', 'automated lead capture', 'AI Vanguard'],
  metadataBase: new URL('https://aivanguardd.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://aivanguardd.com',
    title: 'AI Vanguard | Your Service Business, Accelerated by AI',
    description: 'Professional landing pages and AI Agents for local service pros. Get a world-class digital presence while you stay on the job.',
    siteName: 'AI Vanguard',
    images: [{
      url: '/Logo.jpg', // Ideally replace with a proper 1200x630 OG image later
      width: 800,
      height: 800,
      alt: 'AI Vanguard Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Vanguard | Your Service Business, Accelerated by AI',
    description: 'Professional landing pages and AI Agents for local service pros.',
    images: ['/Logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-brand-light text-brand-dark font-sans antialiased selection:bg-brand-cyan/30 selection:text-brand-dark" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
