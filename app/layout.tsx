import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://ozgursagiroglu.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Özgür Sağıroğlu - Software Engineer & Founder',
  description:
    'Software engineer and founder based in Dubai. Founder of Diojen Tech and Asistan. 12+ years of experience building products for SaaS, fintech, and e-commerce companies.',
  keywords: [
    'Özgür Sağıroğlu',
    'Software Engineer',
    'Full-Stack Developer',
    'Founder',
    'Dubai',
    'Diojen Tech',
    'Asistan',
    'React',
    'Next.js',
    'Node.js',
  ],
  authors: [{ name: 'Özgür Sağıroğlu', url: siteUrl }],
  creator: 'Özgür Sağıroğlu',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Özgür Sağıroğlu',
    title: 'Özgür Sağıroğlu - Software Engineer & Founder',
    description:
      'Software engineer and founder based in Dubai. Founder of Diojen Tech and Asistan. 12+ years of experience in SaaS, fintech, and e-commerce.',
  },
  twitter: {
    card: 'summary',
    title: 'Özgür Sağıroğlu - Software Engineer & Founder',
    description:
      'Software engineer and founder based in Dubai. Founder of Diojen Tech and Asistan.',
    creator: '@ozgursagiroglu',
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
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-diojen-bg text-diojen-dark">
        {children}

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TGJXHV6TB8"
        />
        <Script id="analytics">
          {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());

     gtag('config', 'G-TGJXHV6TB8');
    `}
        </Script>
      </body>
    </html>
  );
}
