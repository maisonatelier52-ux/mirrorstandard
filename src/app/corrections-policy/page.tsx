import {
  Mail,
  AlertCircle,
  Edit3,
  RefreshCcw,
  CheckCircle2,
  Clock
} from "lucide-react";
import Script from "next/script";

export default function CorrectionsPolicy() {
  const mistakeTypes = [
    {
      icon: <Edit3 className="w-5 h-5 mt-1" />,
      title: "Minor errors",
      description:
        "Spelling mistakes, grammatical errors, or typos that do not alter the meaning of the article are corrected promptly without a correction note."
    },
    {
      icon: <AlertCircle className="w-5 h-5 mt-1" />,
      title: "Factual errors",
      description:
        "Errors involving names, figures, dates, or facts are corrected within the article. A clearly labeled editor’s note is added explaining what was corrected and why."
    },
    {
      icon: <Clock className="w-5 h-5 mt-1" />,
      title: "Developing stories",
      description:
        "As news evolves, articles may be updated to reflect new verified information. Updates are time-stamped so readers understand when changes were made."
    }
  ];

  const commitments = [
    "We do not remove errors without acknowledgment.",
    "Significant changes are disclosed clearly to readers.",
    "All correction requests are reviewed respectfully and carefully."
  ];

  return (
    <div className="min-h-screen">

      {/* ✅ CORRECTIONS POLICY STRUCTURED DATA (CRITICAL) */}
      <Script
        id="structured-data-corrections-policy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Corrections Policy | Mirror Standard",
            "url": "https://www.mirrorstandard.com/corrections-policy",
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
            Corrections Policy
          </h1>
          <div className="w-16 h-[2px] bg-gray-600 mx-auto mb-16"></div>
          <p className="text-lg leading-relaxed font-light max-w-2xl text-left mx-auto">
            Accuracy is central to Mirror Standard’s journalism. While we verify
            information carefully before publication, mistakes can occur. When they do,
            we correct them transparently, promptly, and visibly.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-5 pb-3 border-b">
            How We Handle Mistakes
          </h2>
          <p className="font-light leading-relaxed mb-5 text-gray-600">
            Different types of errors require different responses:
          </p>

          <div className="space-y-10">
            {mistakeTypes.map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                {item.icon}
                <div>
                  <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                  <p className="font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Where Corrections Appear
          </h2>
          <p className="text-lg leading-relaxed font-light">
            Corrections are made directly on the affected article page. We do not hide
            corrections or relocate them elsewhere. If a reader encounters an error in
            an article, the correction will appear in that same article.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Reader Submissions
          </h2>
          <p className="text-lg leading-relaxed font-light mb-6">
            Readers play an important role in maintaining accuracy. If you notice an
            error, please contact us with the article headline, link, and a brief
            explanation. Our editorial team reviews correction requests promptly.
          </p>

          <a
            href="mailto:corrections@mirrorstandard.com"
            className="inline-flex items-center space-x-3 text-lg hover:opacity-70"
          >
            <Mail className="w-5 h-5" />
            <span>corrections@mirrorstandard.com</span>
            <RefreshCcw className="w-4 h-4" />
          </a>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Our Commitment to Transparency
          </h2>
          <div className="space-y-4">
            {commitments.map((point, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5" />
                <span className="text-lg font-light">{point}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-300 pt-12 text-center">
          <h2 className="text-2xl font-light mb-6">Why This Matters</h2>
          <p className="text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Trust is built through accountability. By acknowledging mistakes openly and
            correcting them clearly, we aim to provide journalism that readers can rely
            on—even when we fall short.
          </p>
        </div>
      </div>
    </div>
  );
}
