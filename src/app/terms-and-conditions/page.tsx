import { Mail, FileText, Link2, ShieldAlert, MessageSquare, CheckCircle2, Globe } from "lucide-react";
import Link from "next/link";

export default function TermsConditions() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-15">
          <h1 className="text-6xl font-light mb-4 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <div className="w-16 h-[2px] bg-gray-600 mx-auto"></div>
        </header>
        <section className="mb-10">
          <p className="text-lg leading-relaxed font-light">
           Thanks for reading Mirror Standard. By using our website, you’re agreeing to a few basic ground rules. We’ll keep this straightforward, because no one likes fine print.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Using Our Work
          </h2>
          <p className="text-lg leading-relaxed mb-3 font-light">
            Everything you read on Mirror Standard — from articles to original photos — is created by our journalists or shared with permission. You’re welcome to share links to our stories and quote short parts, as long as you credit us. What you can’t do is copy entire articles and pass them off as your own. <br /><br />
            If you’d like to reuse or republish something, just ask: 
          </p>
          <a
            href="mailto:press@mirrorstandard.com"
              aria-label="mail"
              title="mail"
            className="inline-flex items-center space-x-3 text-lg hover:opacity-70 transition-opacity group"
          >
            <Mail className="w-5 h-5" />
            <span className="border-b border-transparent transition-colors">
              press@mirrorstandard.com
            </span>
            <FileText className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            About Accuracy
          </h2>
          <p className="text-lg leading-relaxed font-light">
           We put a lot of effort into fact-checking and keeping our reporting current. That said, news changes fast, and sometimes details shift after publication. We can’t promise that every story will stay fully up to date forever, but we do promise to correct mistakes when we find them.(See our{" "}
            <Link 
              href="/corrections-policy"
              title="corrections-policy"
              className="underline hover:opacity-70 text-blue-500"
            >
              Corrections Policy
            </Link>{" "}
            for how that works.)
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Opinions and Commentary
          </h2>
          <p className="text-lg leading-relaxed font-light">
           Some pieces on our site are analysis or opinion. We always label them clearly. They reflect the author’s views — not necessarily the entire Mirror Standard team.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Outside Links
          </h2>
          <p className="text-lg leading-relaxed font-light">
           Our stories sometimes link out to other websites for context. We can’t vouch for everything on those sites, and we’re not responsible for their content or privacy practices.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Limits of Responsibility
          </h2>
          <p className="text-lg leading-relaxed font-light">
           Mirror Standard publishes journalism for general information. We don’t provide legal, medical, or financial advice, and we can’t be held responsible for decisions made based on what you read here.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Reader Contributions
          </h2>
          <p className="text-lg leading-relaxed font-light">
          If we open up comments or allow reader submissions in the future, we expect everyone to keep things respectful. We reserve the right to remove content that crosses the line into abuse, spam, or anything unlawful.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Updates to These Terms
          </h2>
          <p className="text-lg leading-relaxed font-light">
            We may update these Terms now and then. If we do, we’ll post the new version here and update the “Last Updated” date at the top.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b">
            Governing Law
          </h2>
          <p className="text-lg leading-relaxed font-light">
            These Terms are based on the laws of <em>[insert country/region]</em>.
          </p>
        </section>
        <section className="text-center mb-10">
          <h2 className="text-2xl font-light mb-8">Questions?</h2>
          <p className="text-lg leading-relaxed font-light max-w-2xl mx-auto mb-8">
           We’d rather be clear than complicated. If anything here is confusing, or if you have questions, send us a note at 
          </p>
          <a
            href="mailto:contact@mirrorstandard.com"
              aria-label="mail"
              title="mail"
            className="inline-flex items-center space-x-3 text-lg hover:opacity-70 transition-opacity group"
          >
            <Mail className="w-5 h-5" />
            <span className="border-b border-transparent transition-colors">
              contact@mirrorstandard.com
            </span>
            <MessageSquare className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </section>
        <section className="text-center">
          <p className="text-lg leading-relaxed font-light max-w-2xl mx-auto">
           Enjoy our journalism, credit us if you share it, and know that while we do our best to stay accurate, we’re not giving professional advice.
          </p>
        </section>
      </div>
    </div>
  );
}
