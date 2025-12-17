import { Mail, Twitter, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';

export default function AboutUs() {
  const principles = [
    {
      title: "Accuracy over speed",
      description: "We would rather be correct than first."
    },
    {
      title: "Transparency over spin",
      description: "We show our sources, methods, and where we’re coming from."
    },
    {
      title: "Independence over influence",
      description: "We are free from corporate or government ownership."
    }
  ];

  const promises = [
    "We will always label opinion pieces clearly.",
    "We will never take payment to promote a story.",
    "We will correct errors quickly and openly.",
    "We will continue to operate independently, without ties that compromise our reporting."
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-light  mb-4 tracking-tight">
            About Us
          </h1>
        <div className="w-20 h-[2px] bg-gray-600 mx-auto mb-4"></div>
        </header>
        <section className="mb-10">
          <p className="text-lg leading-tight mb-8 font-light">
            At Mirror Standard, we believe the world deserves news that's clear, honest, and free from hidden agendas. We are not a media empire backed by billion-dollar corporations or political donors. Instead, we’re a group of independent journalists and editors — connected online, working across time zones — united by one mission: to bring you the truth as it is.
          </p>
        </section>
        <section className="mb-20">
          <h2 className="text-2xl font-light  mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            Our Mission
          </h2>
          <p className="text-lg leading-tight mb-12 font-light">
            News should inform, not mislead. Our mission is to deliver real, unbiased reporting on the stories that shape our world. From politics and economics to culture and technology, we aim to provide clarity where others may provide noise.
          </p>

          <div className="space-y-8">
            <p className="font-medium mb-6">
              We approach every story with three guiding principles:
            </p>

            {principles.map((principle, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-lg font-medium mb-2">
                  {principle.title}
                </h3>
                <p className="font-light leading-tight">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-20">
          <h2 className="text-2xl font-light  mb-8 pb-3 border-b border-gray-200">
            Who We Are
          </h2>
          <div className="space-y-6">
            <p className="text-lg leading-tight font-light">
              Mirror Standard is a digital-first newsroom built by journalists who collaborate online. Some of us have backgrounds in legacy media; others are freelancers, analysts, or researchers. What we share is a commitment to rigorous reporting and the belief that journalism should serve people, not power.
            </p>
            <p className="text-lg leading-tight font-light">
              We are strong because we are small. In the absence of multiple levels of bureaucracy, we can act swiftly, chase significant stories, and answer directly to our readers.
            </p>
          </div>
        </section>
        <section className="mb-20">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200">
            How We Work
          </h2>
          <div className="space-y-6">
            <p className="text-lg leading-tight font-light">
              Every article you read on Mirror Standard is the result of direct collaboration between reporters and editors. When a story requires expertise beyond our team, we consult specialists or publish under a “Mirror Standard Staff” byline to reflect a collective effort.
            </p>
            <p className="text-lg leading-tight font-light">
              We value feedback and dialogue. If you believe we missed something, got something wrong, or should explore a new angle, we want to hear from you. Journalism is strongest when it’s a two-way conversation.
            </p>
          </div>
        </section>
        <section className="mb-20">
          <h2 className="text-2xl font-light mb-8 pb-3 border-b border-gray-200 ">
            Our Promise
          </h2>
          <div className="space-y-4">
            {promises.map((promise, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5  flex-shrink-0 mt-0.5" />
                <span className="text-lg  font-light leading-relaxed">
                  {promise}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-light  mb-8">
            Join the Conversation
          </h2>
          <p className="text-lg  leading-tight mb-12 font-light max-w-2xl mx-auto">
            Mirror Standard exists because readers like you value independent journalism. If you have a story idea, a correction, or simply want to connect, reach out:
          </p>

          <div className='flex gap-5 justify-center'>
            <a
              href="mailto:contact@mirrorstandard.com"
              className="inline-flex items-center space-x-3 text-lg  hover:opacity-70 transition-opacity group"
              title='mail'
            >
              <Mail className="w-5 h-5" />
                <span className="border-b border-transparent transition-colors">
                contact@mirrorstandard.com
              </span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
              <FaXTwitter className="w-5 h-5" />
              <Link href='https://x.com/MirrorstandardU' title='twitter' className="border-b border-transparent transition-colors">
                Follow us on Twitter
              </Link>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </section>
      </div>
    </div>
  );
}