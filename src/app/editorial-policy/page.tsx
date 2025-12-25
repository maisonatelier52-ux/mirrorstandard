import { Mail, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Script from "next/script";

export default function EditorialPolicy() {
  const transparencyPoints = [
    "Clearly distinguish between news reporting, opinion, and analysis",
    "Publish articles under an individual journalist’s byline whenever possible",
    "Use a “Mirror Standard Staff” byline for collaborative reporting"
  ];

  const ethicalStandards = [
    {
      title: "No undisclosed conflicts of interest",
      description: "Journalists disclose relevant personal or financial relationships when applicable."
    },
    {
      title: "No hidden sponsored content",
      description: "Paid or sponsored material is clearly labeled and separated from news coverage."
    },
    {
      title: "Respect for privacy",
      description: "We balance the public’s right to know with individual rights and personal dignity."
    }
  ];

  return (
    <div className="min-h-screen">

      {/* ✅ EDITORIAL POLICY STRUCTURED DATA (CRITICAL FOR GOOGLE NEWS) */}
      <Script
        id="structured-data-editorial-policy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Editorial Policy | Mirror Standard",
            "url": "https://www.mirrorstandard.com/editorial-policy",
            "publisher": {
              "@type": "NewsMediaOrganization",
              "@id": "https://www.mirrorstandard.com/#organization"
            }
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-light mb-4 tracking-tight">
            Editorial Policy
          </h1>
          <div className="w-16 h-[2px] bg-gray-600 mx-auto mb-8"></div>
        </header>

        <section className="mb-10">
          <p className="text-lg leading-relaxed mb-8 font-light">
            Mirror Standard is an independent digital newsroom committed to factual,
            transparent, and accountable journalism. Our editorial standards exist to
            ensure that readers can trust our reporting and understand how our stories
            are produced.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Editorial Independence
          </h2>
          <p className="text-lg leading-relaxed font-light">
            We do not accept payment, favors, or influence in exchange for coverage.
            Editorial decisions are made solely by journalists and editors, free from
            corporate, political, or government interference.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Accuracy and Verification
          </h2>
          <p className="text-lg leading-relaxed font-light">
            Accuracy is more important than speed. Our journalists verify information
            using reliable sources, document-based reporting, and direct attribution.
            When information cannot be independently confirmed, that uncertainty is
            clearly stated. Errors are corrected transparently in accordance with our{" "}
            <Link href="/corrections-policy" className="text-blue-500">
              Corrections Policy
            </Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Fairness and Balance
          </h2>
          <p className="text-lg leading-relaxed font-light">
            We seek diverse perspectives on complex issues while avoiding false balance.
            Claims are evaluated on evidence and credibility, not ideology.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Transparency
          </h2>
          <p className="text-lg leading-relaxed mb-8 font-light">
            Readers deserve to know how reporting decisions are made. We commit to the
            following practices:
          </p>

          <div className="space-y-4">
            {transparencyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 mt-0.5" />
                <span className="text-lg font-light">{point}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Ethical Standards
          </h2>

          <div className="space-y-8">
            {ethicalStandards.map((standard, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-lg font-medium mb-2">
                  {standard.title}
                </h3>
                <p className="font-light leading-relaxed">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Reader Feedback and Accountability
          </h2>
          <p className="text-lg leading-relaxed font-light mb-6">
            Journalism improves through dialogue. Readers are encouraged to contact our
            editorial team with feedback, corrections, or concerns.
          </p>

          <a
            href="mailto:editorial@mirrorstandard.com"
            className="inline-flex items-center space-x-3 text-lg hover:opacity-70"
          >
            <Mail className="w-5 h-5" />
            <span>editorial@mirrorstandard.com</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        <div className="border-t border-gray-200 pt-10 mt-16 text-center">
          <p className="text-lg font-light italic max-w-2xl mx-auto">
            Our commitment is to independent, fact-based journalism — accountable to
            readers and guided by evidence.
          </p>
        </div>
      </div>
    </div>
  );
}
