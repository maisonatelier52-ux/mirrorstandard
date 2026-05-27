import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { FaQuora, FaReddit } from "react-icons/fa";
import { SiMedium, SiSubstack } from "react-icons/si";
import { notFound } from "next/navigation";
import {
  authors,
  getAuthorArticles,
  getAuthorBySlug,
} from "../../../lib/news";

const socialIcons = {
  reddit: FaReddit,
  substack: SiSubstack,
  medium: SiMedium,
  quora: FaQuora,
};

export async function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return {
      title: "Author Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const bioSnippet = author.bio.join(" ").slice(0, 160);
  const url = `https://www.mirrorstandard.com/our-team/${author.slug}/`;

  return {
    title: `${author.name} | Mirror Standard`,
    description: bioSnippet,
    alternates: { canonical: url },
    openGraph: {
      title: `${author.name} | Mirror Standard`,
      description: bioSnippet,
      url,
      siteName: "Mirror Standard",
      images: [
        {
          url: "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
          width: 1200,
          height: 630,
          alt: author.name,
        },
      ],
      type: "profile",
      firstName: author.name.split(" ")[0],
      lastName: author.name.split(" ").slice(1).join(" "),
      username: author.slug,
    },
    twitter: {
      card: "summary_large_image",
      title: `${author.name} | Mirror Standard`,
      description: bioSnippet,
      images: ["https://www.mirrorstandard.com/images/mirrorstandard-logo.webp"],
      site: "@Mirrorstandard",
      creator: "@Mirrorstandard",
    },
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const recentArticles = getAuthorArticles(author.slug, 4);
  const sameAs = author.verifiedSameAs ?? [];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `https://www.mirrorstandard.com/our-team/${author.slug}/#webpage`,
        url: `https://www.mirrorstandard.com/our-team/${author.slug}/`,
        name: `${author.name} | Mirror Standard`,
        description: author.bio.join(" "),
        mainEntity: {
          "@type": "Person",
          "@id": `https://www.mirrorstandard.com/our-team/${author.slug}/#person`,
          name: author.name,
          jobTitle: author.role,
          description: author.bio.join(" "),
          email: `mailto:${author.email}`,
          sameAs,
          worksFor: {
            "@type": "NewsMediaOrganization",
            "@id": "https://www.mirrorstandard.com/#organization",
          },
        },
      },
      {
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
            name: "Our Team",
            item: "https://www.mirrorstandard.com/our-team/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: author.name,
            item: `https://www.mirrorstandard.com/our-team/${author.slug}/`,
          },
        ],
      },
    ],
  };

  return (
    <div itemScope itemType="https://schema.org/ProfilePage">
      <Script
        id={`structured-data-author-${author.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-6">
          <Link
            href="/our-team/"
            title="our team"
            className="text-sm text-blue-600 hover:underline"
          >
            &larr; Back to Our Team
          </Link>
        </div>
        <div className="mb-8 border-b pb-6">
          <h1 className="text-3xl font-bold" itemProp="name">
            {author.name}
          </h1>
          <p className="mt-1 text-gray-600" itemProp="jobTitle">
            {author.role}
          </p>
          {author.beat ? (
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gray-500">
              {author.beat}
            </p>
          ) : null}
          {author.credentials ? (
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
              {author.credentials}
            </p>
          ) : null}
          {sameAs.length ? (
            <div className="mt-4 flex items-center gap-5">
              {Object.entries(author.social ?? {}).map(([network, url]) => {
                if (!url || !sameAs.includes(url)) {
                  return null;
                }

                const Icon = socialIcons[network as keyof typeof socialIcons];
                if (!Icon) {
                  return null;
                }

                return (
                  <Link
                    key={network}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={network}
                    className="text-lg text-gray-500"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>

        <section className="space-y-4 text-lg leading-relaxed text-gray-600" itemProp="description">
          {author.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="mt-10 rounded-xl border border-gray-200 bg-gray-50 px-6 py-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Editorial contact for this author and related coverage:
          </p>
          <Link
            href={`mailto:${author.email}`}
            className="mt-2 inline-block text-base font-medium text-[#041f4a] hover:underline"
          >
            {author.email}
          </Link>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Recent work</h2>
          <div className="mt-4 grid gap-4">
            {recentArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.category}/${article.slug}/`}
                className="rounded-xl border border-gray-200 px-5 py-4 hover:bg-gray-50"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                  {article.category} · {article.date}
                </p>
                <h3 className="mt-2 text-[18px] font-semibold text-[#041f4a]">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {article.shortdescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
