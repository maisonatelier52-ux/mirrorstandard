import Link from "next/link";
import Script from "next/script";

interface TrustSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface ContactLink {
  label: string;
  href: string;
  value: string;
}

interface Props {
  title: string;
  description: string;
  url: string;
  sections: TrustSection[];
  updatedLabel: string;
  contactLinks?: ContactLink[];
}

export default function TrustPage({
  title,
  description,
  url,
  sections,
  updatedLabel,
  contactLinks = [],
}: Props) {
  return (
    <div className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
      <Script
        id={`structured-data-${url.replace(/[^a-z0-9]+/gi, "-")}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: title,
              url,
              description,
              publisher: {
                "@type": "NewsMediaOrganization",
                "@id": "https://www.mirrorstandard.com/#organization",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.mirrorstandard.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: title,
                  item: url,
                },
              ],
            },
          ]),
        }}
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-tight md:text-6xl">{title}</h1>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-gray-600" />
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            {description}
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-6 border-b border-gray-200 pb-3 text-2xl font-light">
                {section.title}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets?.length ? (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-gray-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        {contactLinks.length ? (
          <section className="mt-12 rounded-xl border border-gray-200 bg-gray-50 px-6 py-6">
            <h2 className="text-2xl font-light">Contact</h2>
            <div className="mt-4 space-y-3">
              {contactLinks.map((item) => (
                <div key={item.href}>
                  <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                    {item.label}
                  </p>
                  {item.href.startsWith("mailto:") || item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      className="text-base font-medium text-[#041f4a] hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-base font-medium text-[#041f4a] hover:underline"
                    >
                      {item.value}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-16 border-t border-gray-100 pt-8 text-center">
          <p className="text-xs italic text-gray-400">Last Updated: {updatedLabel}</p>
        </section>
      </div>
    </div>
  );
}
