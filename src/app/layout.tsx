import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'AI Vanguard | Your Service Business, Accelerated by AI',
  description: 'Professional landing pages and AI Agents for local service pros. Get a world-class digital presence while you stay on the job.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-brand-light text-brand-dark font-sans antialiased selection:bg-brand-cyan/30 selection:text-brand-dark" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
