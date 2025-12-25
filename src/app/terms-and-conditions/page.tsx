import type { Metadata } from "next";
import {
  Mail,
  FileText,
  MessageSquare
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mirror Standard",
  description:
    "The terms and conditions governing use of Mirror Standard, including content usage, accuracy standards, and reader responsibilities.",
  alternates: {
    canonical: "https://www.mirrorstandard.com/terms-conditions",
  },
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen">

      <Script
        id="structured-data-terms"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms & Conditions | Mirror Standard",
            "url": "https://www.mirrorstandard.com/terms-conditions",
            "publisher": {
              "@type": "NewsMediaOrganization",
              "@id": "https://www.mirrorstandard.com/#organization"
            }
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-light mb-4 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <div className="w-16 h-[2px] bg-gray-600 mx-auto"></div>
        </header>

        <section className="mb-10">
          <p className="text-lg leading-relaxed font-light">
            By accessing Mirror Standard, you agree to the following terms. We aim to
            keep these straightforward and transparent so readers understand how our
            journalism may be used.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Using Our Content
          </h2>
          <p className="text-lg leading-relaxed mb-4 font-light">
            All original content published by Mirror Standard is protected by
            copyright. Readers may share links and quote brief excerpts with proper
            attribution. Republishing full articles without permission is not
            permitted.
          </p>
          <p className="text-lg leading-relaxed font-light">
            For permissions or republication inquiries, contact:
          </p>
          <a
            href="mailto:press@mirrorstandard.com"
            className="inline-flex items-center space-x-3 text-lg hover:opacity-70 mt-4"
          >
            <Mail className="w-5 h-5" />
            <span>press@mirrorstandard.com</span>
            <FileText className="w-4 h-4" />
          </a>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Accuracy and Updates
          </h2>
          <p className="text-lg leading-relaxed font-light">
            We strive for accuracy and timely updates, but news evolves. Information
            may change after publication. Errors are corrected transparently in
            accordance with our{" "}
            <Link
              href="/corrections-policy"
              className="text-blue-500 underline hover:opacity-70"
            >
              Corrections Policy
            </Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Opinion and Analysis
          </h2>
          <p className="text-lg leading-relaxed font-light">
            Opinion and analysis articles are clearly labeled and reflect the views
            of the author, not necessarily those of Mirror Standard as a whole.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            External Links
          </h2>
          <p className="text-lg leading-relaxed font-light">
            Our reporting may include links to external websites for reference. We
            are not responsible for the content or privacy practices of third-party
            sites.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Limitation of Responsibility
          </h2>
          <p className="text-lg leading-relaxed font-light">
            Mirror Standard provides journalism for general informational purposes.
            Content should not be considered legal, medical, or financial advice.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Reader Contributions
          </h2>
          <p className="text-lg leading-relaxed font-light">
            If reader comments or submissions are enabled, participants are expected
            to engage respectfully. Content that violates laws or community standards
            may be removed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Updates to These Terms
          </h2>
          <p className="text-lg leading-relaxed font-light">
            These Terms may be updated periodically. Changes will be posted on this
            page with a revised effective date.
          </p>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-2xl font-light mb-8">Questions?</h2>
          <p className="text-lg leading-relaxed font-light max-w-2xl mx-auto mb-6">
            If you have questions about these Terms, contact us:
          </p>
          <a
            href="mailto:contact@mirrorstandard.com"
            className="inline-flex items-center space-x-3 text-lg hover:opacity-70"
          >
            <Mail className="w-5 h-5" />
            <span>contact@mirrorstandard.com</span>
            <MessageSquare className="w-4 h-4" />
          </a>
        </section>

        <div className="border-t border-gray-300 pt-10 text-center">
          <p className="text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Mirror Standard encourages responsible sharing, proper attribution,
            and informed readership.
          </p>
        </div>
      </div>
    </div>
  );
}
