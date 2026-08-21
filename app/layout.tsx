import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}

