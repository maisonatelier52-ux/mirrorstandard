import { Mail, Send, AlertCircle, Users } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Mirror Standard | Reach Our Editorial Team & Newsroom",
  description: "Get in touch with Mirror Standard. Send us news tips, feedback, or media inquiries. Our editorial team is dedicated to transparent and accountable reporting.",
  keywords: "contact mirror standard, news tips, media inquiries, press contact, editorial team, newsroom contact",
  alternates: { canonical: "https://www.mirrorstandard.com/contact" },
  openGraph: {
    title: "Contact Mirror Standard | Reach Our Editorial Team & Newsroom",
    description: "Get in touch with Mirror Standard. Send us news tips, feedback, or media inquiries.",
    url: "https://www.mirrorstandard.com/contact",
    siteName: "Mirror Standard",
    images: [
      {
        url: "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
        width: 1200,
        height: 630,
        alt: "Contact Mirror Standard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mirror Standard | Reach Our Editorial Team & Newsroom",
    description: "Get in touch with Mirror Standard. Send us news tips, feedback, or media inquiries.",
    images: ["https://www.mirrorstandard.com/images/mirrorstandard-logo.webp"],
    site: "@Mirrorstandard",
    creator: "@Mirrorstandard",
  },
};

export default function Contact() {
  const contacts = [
    {
      title: "Editorial & General Contact",
      description: "Questions about our reporting, coverage ideas, or editorial matters.",
      icon: Mail,
    },
    {
      title: "Confidential News Tips",
      description: "Share information that you believe should be investigated or reported.",
      icon: Send,
    },
    {
      title: "Corrections",
      description: "If you believe we made an error, please notify us so we can correct it promptly.",
      icon: AlertCircle,
    },
    {
      title: "Media & Press Inquiries",
      description: "Journalists, researchers, or organizations seeking collaboration.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen" itemScope itemType="https://schema.org/ContactPage">

      {/* ✅ CONTACT PAGE STRUCTURED DATA (CRITICAL) */}
      <Script
        id="structured-data-contactpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Mirror Standard",
              "description": "Contact page for Mirror Standard newsroom. Reach out for tips, corrections, or media inquiries.",
              "url": "https://www.mirrorstandard.com/contact",
              "mainEntity": {
                "@id": "https://www.mirrorstandard.com/#organization"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.mirrorstandard.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": "https://www.mirrorstandard.com/contact"
                }
              ]
            }
          ])
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-light mb-4 tracking-tight" itemProp="name">
            Get in Touch with Mirror Standard
          </h1>
          <div className="w-20 h-[2px] bg-gray-600 mx-auto mb-8"></div>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto font-light" itemProp="description">
            Mirror Standard is an independent newsroom. We welcome tips, corrections,
            and communication from readers, journalists, and organizations.
          </p>
        </header>

        <section className="grid gap-12 mb-12">
          {contacts.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              itemProp="contactPoint"
              itemScope
              itemType="https://schema.org/ContactPoint"
            >
              <div className="flex items-center space-x-3 mb-4">
                <item.icon className="w-6 h-6" />
                <h2 className="text-xl font-medium" itemProp="contactType">
                  {item.title}
                </h2>
              </div>
              <p className="font-light leading-relaxed mb-1">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        <section className="text-center mb-20">
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-lg font-light text-gray-700 mb-2">
              For all the above inquiries, please reach out to our team directly.
            </p>
            <p className="text-xl font-medium">
              Contact: <a href="mailto:mirrorstandardnews@gmail.com" className="text-black border-b-2 border-black hover:opacity-70 transition" itemProp="email">mirrorstandardnews@gmail.com</a>
            </p>
          </div>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-2xl font-light mb-8">
            Stay Connected
          </h2>
          <div className="flex justify-center gap-10">
            <Link href="https://x.com/Mirrorstan68694" className="flex items-center gap-2 hover:opacity-70" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="w-5 h-5" />
              <span>X (Twitter)</span>
            </Link>
            <Link href="https://www.instagram.com/mirrorstandardnews2026/" className="flex items-center gap-2 hover:opacity-70" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5" />
              <span>Instagram</span>
            </Link>
            <Link href="https://www.youtube.com/@mirrorstandardUS" className="flex items-center gap-2 hover:opacity-70" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="w-5 h-5" />
              <span>YouTube</span>
            </Link>
            <Link href="https://substack.com/@mirrorstandardnews" className="flex items-center gap-2 hover:opacity-70" target="_blank" rel="noopener noreferrer">
              <SiSubstack className="w-5 h-5" />
              <span>Substack</span>
            </Link>
          </div>
        </section>

        {/* ✅ LOCATION + LEGAL SIGNAL (IMPORTANT FOR GOOGLE NEWS) */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm font-light text-gray-600 max-w-xl mx-auto">
            Mirror Standard is an independent digital publication operated by a
            distributed editorial team based in the United States.
          </p>
        </div>
        {/* ✅ AUTHORITY SIGNAL: LAST UPDATED */}
        <section className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 font-light italic">
            Last Updated: May 8, 2026
          </p>
        </section>
      </div>
    </div>

  );
}
