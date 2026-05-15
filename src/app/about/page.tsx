import { Mail, Check } from 'lucide-react';
import Link from 'next/link';
import Script from "next/script";
import { FaXTwitter } from 'react-icons/fa6';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Mirror Standard | Independent News & Journalism Excellence",
  description: "Learn about Mirror Standard's commitment to independent, factual, and transparent journalism. Meet our team and discover our core editorial principles.",
  keywords: "about mirror standard, independent journalism, newsroom transparency, editorial standards, factual reporting, trusted news source",
  alternates: { canonical: "https://www.mirrorstandard.com/about" },
  openGraph: {
    title: "About Mirror Standard | Independent News & Journalism Excellence",
    description: "Learn about Mirror Standard's commitment to independent, factual, and transparent journalism.",
    url: "https://www.mirrorstandard.com/about",
    siteName: "Mirror Standard",
    images: [
      {
        url: "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
        width: 1200,
        height: 630,
        alt: "About Mirror Standard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mirror Standard | Independent News & Journalism Excellence",
    description: "Learn about Mirror Standard's commitment to independent, factual, and transparent journalism.",
    images: ["https://www.mirrorstandard.com/images/mirrorstandard-logo.webp"],
    site: "@Mirrorstandard",
    creator: "@Mirrorstandard",
  },
};

export default function AboutUs() {
  const principles = [
    {
      title: "Accuracy over speed",
      description: "We prioritize factual accuracy over being first to publish."
    },
    {
      title: "Transparency over spin",
      description: "We clearly disclose sources, context, and corrections when needed."
    },
    {
      title: "Independence over influence",
      description: "Our reporting is free from corporate, political, or government control."
    }
  ];

  const promises = [
    "Opinion content is clearly labeled and separated from news reporting.",
    "We do not accept payment to promote or suppress coverage.",
    "Errors are corrected promptly and transparently.",
    "Our newsroom operates independently, without conflicts of interest."
  ];

  return (
    <div className="min-h-screen" itemScope itemType="https://schema.org/AboutPage">
      <Script
        id="structured-data-about-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@id": "https://www.mirrorstandard.com/#organization"
              },
              "description": "Mirror Standard is an independent news organization committed to factual, transparent, and accountable journalism.",
              "publisher": {
                "@id": "https://www.mirrorstandard.com/#organization"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              "@id": "https://www.mirrorstandard.com/#organization",
              "name": "Mirror Standard",
              "url": "https://www.mirrorstandard.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp"
              },
              "sameAs": [
                "https://x.com/Mirrorstan68694",
                "https://www.instagram.com/mirrorstandardnews2026/",
                "https://www.youtube.com/@mirrorstandardUS",
                "https://substack.com/@mirrorstandardnews"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "editorial",
                "email": "contact@mirrorstandard.com",
                "availableLanguage": ["English"]
              },
              "ethicsPolicy": "https://www.mirrorstandard.com/about",
              "masthead": "https://www.mirrorstandard.com/about",
              "mission": "To inform readers with clear, verifiable reporting on global political and economic forces."
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
                  "name": "About",
                  "item": "https://www.mirrorstandard.com/about"
                }
              ]
            }
          ])
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-light mb-4 tracking-tight" itemProp="name">About Mirror Standard</h1>
          <div className="w-20 h-[2px] bg-gray-600 mx-auto mb-4"></div>
        </header>

        <section className="mb-10">
          <p className="text-lg leading-tight mb-8 font-light">
            Mirror Standard is an independent digital newsroom dedicated to factual,
            transparent, and accountable journalism. We are not owned by corporations,
            political organizations, or government entities. Our editorial decisions are
            made solely by journalists and editors committed to public-interest reporting.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Our Mission
          </h2>
          <p className="text-lg leading-tight mb-12 font-light">
            Our mission is to inform readers with clear, verifiable reporting on the
            political, economic, cultural, and technological forces shaping the world.
            We focus on clarity, context, and accountability.
          </p>

          <div className="space-y-8">
            <p className="font-medium mb-6">
              Our editorial work is guided by these principles:
            </p>

            {principles.map((principle, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-lg font-medium mb-2">{principle.title}</h3>
                <p className="font-light leading-tight">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10" itemProp="description">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Who We Are
          </h2>
          <p className="text-lg leading-tight font-light mb-6">
            Mirror Standard is produced by a <Link href="/our-team" className="underline hover:text-gray-600" title='our-team'>distributed editorial team</Link> of journalists,
            editors, analysts, and researchers with experience in both digital and
            traditional media.
          </p>
          <p className="text-lg leading-tight font-light">
            Our newsroom operates remotely while maintaining centralized editorial
            standards and oversight, ensuring that our reporting remains objective and
            unbiased.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Editorial Accountability
          </h2>
          <p className="text-lg leading-tight font-light mb-6">
            All reporting is reviewed by editors prior to publication. Corrections,
            clarifications, and updates are issued transparently when errors are identified.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Our Promise
          </h2>
          <div className="space-y-4">
            {promises.map((promise, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span className="text-lg font-light">{promise}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ LEGAL + LOCATION SIGNAL (CRITICAL FOR GOOGLE NEWS) */}
        <section className="text-center mt-20">
          <p className="text-sm font-light text-gray-600 max-w-xl mx-auto">
            Mirror Standard is an independent digital publication operated by a
            distributed editorial team based in the United States.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="mailto:mirrorstandardnews@gmail.com"
              title='MirrorStandard - contact'
              className="inline-flex items-center gap-2 hover:opacity-70"
            >
              <Mail className="w-5 h-5" />
              mirrorstandardnews@gmail.com
            </a>
          </div>
        </section>
        <section className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 font-light italic">
            Last Updated: May 8, 2026
          </p>
        </section>
      </div>
    </div>

  );
}
