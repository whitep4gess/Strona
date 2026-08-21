import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nova-digital-studio.sowizral.chatgpt.site'),
  title: 'NOVA — Digital Experience Studio',
  description:
    'Projektujemy futurystyczne strony internetowe, które zamieniają uwagę w działanie.',
  openGraph: {
    title: 'NOVA — Digital Experience Studio',
    description: 'Tworzymy strony z innego wymiaru.',
    type: 'website',
    locale: 'pl_PL',
    images: [{ url: '/og.png', width: 800, height: 420, alt: 'NOVA — tworzymy strony z innego wymiaru' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVA — Digital Experience Studio',
    description: 'Tworzymy strony z innego wymiaru.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

