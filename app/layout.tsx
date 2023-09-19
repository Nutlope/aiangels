import { Metadata } from 'next';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

let title = 'AI Angel Investors';
let description = 'Find your next AI angel';
let url = 'https://www.aiangels.fund';
let ogimage = 'https://www.aiangels.fund/og-image.png';
let sitename = 'aiangels.fund';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
