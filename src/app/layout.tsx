import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import { Providers } from '@/components/ThemeProvider'
import Footer from "@/components/Footer";
import { Roboto } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mirrorstandard.com"),
  title: "Mirror Standard - News, Politics & Business Coverage",
  description: "Mirror Standard delivers breaking news and analysis on politics, business, tech, and more. Read trusted reporting and expert commentary on the stories that matter.",
  keywords: "news, breaking news, politics, business news, world events, technology, health, sports, investigative reporting, Mirror Standard",

  openGraph: {
    title: "Mirror Standard - Independent News & Analysis",
    description: "Breaking news, political coverage, and business insights. Mirror Standard brings you the stories shaping our world.",
    url: "https://www.mirrorstandard.com",
    siteName: "Mirror Standard",
    locale: "en_US",
    images: [
      {
        url: "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
        width: 1200,
        height: 630,
        alt: "Mirror Standard logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mirror Standard - Breaking News & Analysis",
    description: "Covering politics, business, tech, and world events with depth and clarity.",
    images: ["https://www.mirrorstandard.com/images/mirrorstandard-logo.webp"],
    site: "@Mirrorstandard",
    creator: "@Mirrorstandard"
  },

  alternates: {
    canonical: "https://www.mirrorstandard.com",
    languages: {
      "en-US": "https://www.mirrorstandard.com",
      "x-default": "https://www.mirrorstandard.com",
    },
  },

  authors: [{ name: "Mirror Standard Staff" }],

  publisher: "Mirror Standard",

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

  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body
        className={`
    ${geistSans?.variable ?? ''} 
    ${geistMono?.variable ?? ''} 
    ${oswald?.variable ?? ''} 
    ${roboto?.variable ?? ''} 
    font-sans
    antialiased
  `}
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>

  );
}
