import type { Metadata } from "next";
import { Mail, Shield, CheckCircle2 } from "lucide-react";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.mirrorstandard.com/privacy-policy";

  return {
    title: "Privacy Policy | Mirror Standard",
    description:
      "How Mirror Standard collects, uses, and protects personal information while delivering independent journalism.",
    alternates: { canonical: url },
    openGraph: {
      title: "Privacy Policy | Mirror Standard",
      description:
        "Learn how Mirror Standard protects your privacy and handles personal information responsibly.",
      url,
      siteName: "Mirror Standard",
      images: [
        {
          url: "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
          width: 1200,
          height: 630,
          alt: "Mirror Standard Logo",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Privacy Policy | Mirror Standard",
      description:
        "How Mirror Standard safeguards privacy while delivering independent news.",
      images: ["https://www.mirrorstandard.com/images/mirrorstandard-logo.webp"],
      site: "@MirrorstandardU",
    },
  };
}

export default function PrivacyPolicy() {
  const purposes = [
    "To keep the website operating smoothly and securely.",
    "To understand which stories resonate with readers.",
    "To respond to messages, tips, or correction requests.",
    "To provide updates when readers request them.",
  ];

  return (
    <div className="min-h-screen">

      {/* ✅ PRIVACY POLICY STRUCTURED DATA */}
      <Script
        id="structured-data-privacy-policy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy | Mirror Standard",
            "url": "https://www.mirrorstandard.com/privacy-policy",
            "publisher": {
              "@type": "NewsMediaOrganization",
              "@id": "https://www.mirrorstandard.com/#organization"
            }
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-10">
          <h1 className="text-6xl font-light mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <div className="w-16 h-[2px] bg-gray-600 mx-auto mb-8"></div>
        </header>

        <section className="mb-10">
          <p className="text-lg leading-relaxed font-light">
            Mirror Standard values reader trust. We collect only limited information
            necessary to operate our newsroom, communicate with readers, and improve
            our journalism. This policy explains what we collect, why we collect it,
            and how we protect it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Information We Collect
          </h2>
          <p className="text-lg leading-relaxed mb-6 font-light">
            When you visit our website, basic technical data such as pages viewed,
            device type, and browser information may be collected automatically. This
            information helps us understand readership patterns and improve site
            performance.
          </p>
          <p className="text-lg leading-relaxed mb-6 font-light">
            If you contact us directly — for tips, corrections, or inquiries — we
            collect only the information you choose to provide, such as your name
            and email address.
          </p>
          <p className="text-lg leading-relaxed font-light">
            We do not collect unnecessary personal data, and we do not sell or trade
            user information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            How Information Is Used
          </h2>
          <div className="space-y-4 mb-6">
            {purposes.map((p, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5" />
                <span className="text-lg font-light">{p}</span>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed font-light">
            We do not use personal data for advertising sales, profiling, or
            promotional targeting.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Cookies and Analytics
          </h2>
          <p className="text-lg leading-relaxed mb-6 font-light">
            We use cookies and analytics tools to understand how readers interact
            with our content. You may disable cookies in your browser without
            affecting access to our reporting.
          </p>
          <p className="text-lg leading-relaxed font-light">
            Third-party analytics services may process anonymized data under their
            own privacy policies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Your Rights and Choices
          </h2>
          <p className="text-lg leading-relaxed mb-6 font-light">
            Depending on your jurisdiction, you may have rights to access, correct,
            or request deletion of personal data. Requests can be submitted using
            the contact below.
          </p>
          <a
            href="mailto:privacy@mirrorstandard.com"
            className="inline-flex items-center space-x-3 text-lg hover:opacity-70"
          >
            <Mail className="w-5 h-5" />
            <span>privacy@mirrorstandard.com</span>
            <Shield className="w-4 h-4" />
          </a>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Data Protection
          </h2>
          <p className="text-lg leading-relaxed font-light">
            We take reasonable technical and organizational measures to protect
            information from unauthorized access. Because we limit the data we
            collect, we also limit exposure and risk.
          </p>
        </section>

        <div className="border-t border-gray-300 pt-12 text-center">
          <p className="text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Mirror Standard collects as little information as possible, uses it only
            to support journalism, and never sells personal data.
          </p>
        </div>
      </div>
    </div>
  );
}
