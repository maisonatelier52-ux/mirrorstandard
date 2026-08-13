import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { getLatestNewsByCategory } from "../lib/news";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* =========================================================
   FONTS
========================================================= */

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
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mirrorstandard.com"),

  title: "Mirror Standard | Trusted News, Politics & Business",

  description:
    "Mirror Standard provides trusted global news with in-depth political analysis, business insights, and technology updates.",

  keywords:
    "breaking news, latest news, political news, business news, world news, global news, technology news, investigative journalism, current events, trusted news source, Mirror Standard",

  openGraph: {
    title: "Mirror Standard | Breaking News, Politics & Global Analysis",

    description:
      "Trusted, independent journalism from Mirror Standard covering breaking news, politics, business, and global analysis.",

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

    description:
      "Breaking news and in-depth analysis on politics, business, tech, and world events from Mirror Standard—trusted, clear, and timely.",

    images: [
      "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
    ],

    site: "@Mirrorstandard",
    creator: "@Mirrorstandard",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "yJBvvr61HsIIbHKVTR5dNmkkHrx6puybsWaSI42qoq8",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const latestNews = getLatestNewsByCategory();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* =====================================================
            COMMON STRUCTURED DATA
        ===================================================== */}

        <Script
          id="structured-data-common"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "NewsMediaOrganization",
                "@id": "https://www.mirrorstandard.com/#organization",

                name: "Mirror Standard",

                url: "https://www.mirrorstandard.com",

                logo: {
                  "@type": "ImageObject",
                  url: "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
                  width: 1024,
                  height: 1024,
                },

                sameAs: [
                  "https://x.com/Mirrorstan68694",
                  "https://www.instagram.com/mirrorstandardnews2026/",
                  "https://www.youtube.com/@mirrorstandardUS",
                  "https://substack.com/@mirrorstandardnews",
                ],

                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "editorial",
                  email: "editorial@mirrorstandard.com",
                  availableLanguage: ["English"],
                },
              },

              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.mirrorstandard.com/#website",

                url: "https://www.mirrorstandard.com",

                name: "Mirror Standard",

                description:
                  "Trusted News, Politics & Business Analysis",

                publisher: {
                  "@id": "https://www.mirrorstandard.com/#organization",
                },

                potentialAction: {
                  "@type": "SearchAction",

                  target: {
                    "@type": "EntryPoint",

                    urlTemplate:
                      "https://www.mirrorstandard.com/search?query={search_term_string}",
                  },

                  "query-input":
                    "required name=search_term_string",
                },
              },
            ]),
          }}
        />

        {/* =====================================================
            GOOGLE TAG MANAGER

            GTM Container:
            GTM-5FZKVGJ6

            IMPORTANT:
            Do NOT add the old AW-18148083881 gtag.js here.
            Do NOT add the GA4 G-52LNG4TY7R gtag.js here.

            GA4 / Google Ads will be managed through GTM.
        ===================================================== */}

        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });

                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';

                j.async=true;

                j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;

                f.parentNode.insertBefore(j,f);

              })(window,document,'script','dataLayer','GTM-5FZKVGJ6');
            `,
          }}
        />

        {/* =====================================================
            BROWSER META
        ===================================================== */}

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
        />

        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>

      <body
        className={`
          ${geistSans?.variable ?? ""}
          ${geistMono?.variable ?? ""}
          ${oswald?.variable ?? ""}
          ${roboto?.variable ?? ""}
          font-sans
          antialiased
        `}
        suppressHydrationWarning
      >
        {/* =====================================================
            GOOGLE TAG MANAGER NOSCRIPT

            GTM recommends this immediately after <body>.
        ===================================================== */}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FZKVGJ6"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {/* =====================================================
            HEADER
        ===================================================== */}

        <Header latestNews={latestNews} />

        {/* =====================================================
            PAGE CONTENT
        ===================================================== */}

        {children}

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <Footer />
      </body>
    </html>
  );
}