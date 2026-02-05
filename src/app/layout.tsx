import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import { Providers } from '@/components/ThemeProvider'
import Footer from "@/components/Footer";
import { Roboto } from 'next/font/google';
import Script from "next/script";

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
  title: "Mirror Standard | Trusted News, Politics & Business",
  description: "Mirror Standard provides trusted global news with in-depth political analysis, business insights, and technology updates.",  keywords: "breaking news, latest news, political news, business news, world news, global news, technology news, investigative journalism, current events, trusted news source, Mirror Standard",
  openGraph: {
    title: "Mirror Standard | Breaking News, Politics & Global Analysis",
    description: "Trusted, independent journalism from Mirror Standard covering breaking news, politics, business, and global analysis.",
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
    title: "Mirror Standard – Breaking News, Politics & Business",
    description: "Breaking news and in-depth analysis on politics, business, tech, and world events from Mirror Standard—trusted, clear, and timely.",
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
        <Script
          id="structured-data-newsmediaorganization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              "@id": "https://www.mirrorstandard.com/#organization",
              "name": "Mirror Standard",
              "url": "https://www.mirrorstandard.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
                "width": 1024,
                "height": 1024
              },
              "sameAs": [
                "https://x.com/MirrorstandardU",
                "https://www.instagram.com/mirrorstandardusnews/",
                "https://www.youtube.com/@mirrorstandardUS"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "editorial",
                "email": "contact@mirrorstandard.com",
                "availableLanguage": ["English"]
              }
            })
          }}
        />
        <meta name="google-site-verification" content="yJBvvr61HsIIbHKVTR5dNmkkHrx6puybsWaSI42qoq8" />
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
