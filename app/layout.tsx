import './globals.css';
import type { Metadata } from 'next';
import { Fraunces, IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';

const sans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

const serif = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Forma Praxis | Independent design-engineering practice',
  description:
    'Forma Praxis helps businesses understand how systems work, define better next steps, and turn analysis into practical design and delivery.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
