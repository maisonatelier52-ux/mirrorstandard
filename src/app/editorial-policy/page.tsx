import { Mail, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function EditorialPolicy() {
  const transparencyPoints = [
    "Clearly distinguish between news, opinion, and analysis",
    "Publish under an individual reporter's byline whenever possible",
    "Use a \"Mirror Standard Staff\" byline for collaborative or team-written stories"
  ];

  const ethicalStandards = [
    {
      title: "No hidden conflicts of interest",
      description: "Our reporters disclose personal or financial ties when relevant."
    },
    {
      title: "No undisclosed sponsored content",
      description: "If a piece is paid for, it will be labeled clearly."
    },
    {
      title: "Respect for privacy",
      description: "We balance the public's right to know with the rights of individuals."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-light mb-4 tracking-tight">
            Editorial Policy
          </h1>
          <div className="w-16 h-[2px] bg-gray-600 mx-auto mb-8"></div>
        </header>
        <section className="mb-10">
          <p className="text-lg leading-relaxed mb-8 font-light">
            At Mirror Standard, our job is simple but vital: report the news with honesty, clarity, and fairness. We are an independent group of journalists who collaborate online — not a corporate newsroom — and our editorial standards reflect that independence.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Independence and Integrity
          </h2>
          <p className="text-lg leading-relaxed font-light">
            We do not accept money, favors, or influence in exchange for coverage. Every story we publish is chosen because it matters, not because it benefits a sponsor or political interest. Our reporters and editors are free to pursue the truth without interference.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Accuracy First
          </h2>
          <p className="text-lg leading-relaxed font-light">
            We believe <strong className="font-medium">accuracy is more important than being first</strong>. Our journalists verify information through credible sources, fact-check data, and clearly attribute quotes or statistics. When facts are uncertain, we say so. When mistakes happen, we correct them openly (see our <Link href='/corrections-policy' title="corrections policy" className='text-blue-500'>Corrections Policy</Link>).
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Fairness and Balance
          </h2>
          <p className="text-lg leading-relaxed font-light">
            We aim to reflect multiple perspectives on complex issues. That doesn't mean giving equal weight to misinformation, but it does mean seeking out voices that help readers understand the full picture.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Transparency
          </h2>
          <p className="text-lg leading-relaxed mb-8 font-light">
            Our readers deserve to know how stories are produced. That's why we:
          </p>
          <div className="space-y-4">
            {transparencyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-lg font-light leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            Ethical Standards
          </h2>
          <p className="text-lg leading-relaxed mb-8 font-light">
            Mirror Standard follows widely accepted journalistic ethics:
          </p>

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
            Reader Involvement
          </h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed font-light">
              We believe journalism should be a conversation. If you have feedback, criticism, or a perspective we missed, please reach out. Your insights help us do better.
            </p>

            <div className="pt-4">
              <a
                href="mailto:editorial@mirrorstandard.com"
                title='mail'
                className="inline-flex items-center space-x-3 text-lg hover:opacity-70 transition-opacity group"
              >
                <Mail className="w-5 h-5" />
                <span className="border-b border-transparent transition-colors">
                  editorial@mirrorstandard.com
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </section>
        <div className="bg-gray-500 h-px mx-auto mb-4"></div>
        <section className="">
          <p className="text-lg leading-relaxed font-light max-w-2xl mx-auto italic">
            We promise to stay independent, fact-based, and transparent — because our loyalty is to the truth, and to you, our readers.
          </p>
        </section>
      </div>
    </div>
  );
}