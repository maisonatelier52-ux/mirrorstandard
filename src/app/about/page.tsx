import { Mail, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Script from "next/script";
import { FaXTwitter } from 'react-icons/fa6';

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
    <div className="min-h-screen">

      {/* ✅ ABOUT-PAGE ORGANIZATION CONFIRMATION (IMPORTANT) */}
      <Script
        id="structured-data-about-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsMediaOrganization",
            "@id": "https://www.mirrorstandard.com/#organization",
            "name": "Mirror Standard",
            "url": "https://www.mirrorstandard.com",
            "sameAs": [
              "https://x.com/MirrorstandardU",
              "https://www.instagram.com/mirrorstandardusnews/",
              "https://www.youtube.com/@mirrorstandardUS"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "editorial",
              "email": "contact@mirrorstandard.com"
            }
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-light mb-4 tracking-tight">About Us</h1>
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

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Who We Are
          </h2>
          <p className="text-lg leading-tight font-light mb-6">
            Mirror Standard is produced by a distributed editorial team of journalists,
            editors, analysts, and researchers with experience in both digital and
            traditional media.
          </p>
          <p className="text-lg leading-tight font-light">
            Our newsroom operates remotely while maintaining centralized editorial
            standards and oversight.
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
              href="mailto:contact@mirrorstandard.com"
              className="inline-flex items-center gap-2 hover:opacity-70"
            >
              <Mail className="w-5 h-5" />
              contact@mirrorstandard.com
            </a>

            <Link href="https://x.com/MirrorstandardU" className="inline-flex items-center gap-2 hover:opacity-70">
              <FaXTwitter className="w-5 h-5" />
              Follow us on X
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
