import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Header from "../components/Header";

let title = "AI Angel Investors";
let description = "Find your next AI angel";
let url = "https://www.aiangels.fund";
let ogimage = "https://www.aiangels.fund/og-image.png";
let sitename = "aiangels.fund";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
        <div className="min-h-screen dark:bg-zinc-800 bg-gray-50 px-6 lg:px-8">
          <div className="mx-auto max-w-6xl pt-4">
            <Header />
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
