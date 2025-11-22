import type { Metadata } from 'next';
import { Montserrat, Lato } from 'next/font/google';
import './globals.css';
import Footer from '@/components/global/footer';

const montserrat = Montserrat({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  variable: '--font-body',
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://axiumbusinessbuyers.com.au'),
  title: {
    default: 'Axium Business Buyers – Find & Acquire Businesses in Australia',
    template: '%s | Axium Business Buyers',
  },
  description:
    'Axium Business Buyers provides expert guidance for investors and business owners to find, evaluate, and acquire businesses across Australia. Confidential and results-driven.',
  keywords: [
    'buy a business Australia',
    'business acquisition Australia',
    'business broker Australia',
    'buying a business guide',
    'due diligence checklist',
    'business valuation Australia',
    'Axium Business Buyers',
  ],
  openGraph: {
    title: 'Axium Business Buyers – Find & Acquire Businesses in Australia',
    description:
      'Expert guidance for investors and business owners to find, evaluate, and acquire businesses across Australia.',
    url: 'https://axiumbusinessbuyers.com.au',
    siteName: 'Axium Business Buyers',
    images: [
      {
        url: '/axium-og.png',
        width: 1200,
        height: 630,
        alt: 'Axium Business Buyers',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axium Business Buyers – Find & Acquire Businesses in Australia',
    description:
      'Expert guidance for investors and business owners to find, evaluate, and acquire businesses across Australia.',
    images: ['/axium-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} ${lato.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
