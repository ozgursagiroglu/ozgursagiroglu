import { Inconsolata, Inter } from 'next/font/google';
import '@/styles/globals.css';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  display: 'swap',
});

export const metadata = {
  title: 'Özgür Sağıroğlu - Senior Full-Stack Developer',
  description:
    "I'm a full-stack developer and I consult companies for their projects to develop and optimization.",
  icons: {
    icon: '/favicon.ico',
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
    <html
      lang="en"
      className={`${inter.variable} ${inconsolata.variable} antialiased`}>
      <body className="bg-cetacean-blue text-alice-blue">
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
