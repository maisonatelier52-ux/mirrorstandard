import { ArrowRight, Edit3, CheckSquare, Layers, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { authors } from "../../lib/news";

export const metadata: Metadata = {
  title: "Meet Our Team | Mirror Standard Editorial Newsroom",
  description:
    "Meet the journalists, editors, and researchers behind Mirror Standard. Our newsroom is committed to independent journalism, factual reporting, and accountability.",
  keywords:
    "mirror standard team, editorial staff, Michael Y. Gentry, Victor V. Haley, investigative journalists, newsroom staff, independent media",
  alternates: {
    canonical: "https://www.mirrorstandard.com/our-team",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Meet Our Team | Mirror Standard Editorial Newsroom",
    description:
      "Meet the journalists and editors behind Mirror Standard. Committed to independent, factual journalism.",
    url: "https://www.mirrorstandard.com/our-team",
    siteName: "Mirror Standard",
    images: [
      {
        url: "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
        width: 1200,
        height: 630,
        alt: "Mirror Standard Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team | Mirror Standard Editorial Newsroom",
    description:
      "Meet the journalists and editors behind Mirror Standard. Committed to independent, factual journalism.",
    images: ["https://www.mirrorstandard.com/images/mirrorstandard-logo.webp"],
    site: "@Mirrorstandard",
    creator: "@Mirrorstandard",
  },
};

/* ─────────────────────────────────────────────
   Data - Dynamically generated from authors.json
───────────────────────────────────────────── */

// Get leadership team (Editor-in-Chief and Managing Editor)
const leadershipAuthors = authors.filter(
  (author) => author.role === "Editor-in-Chief" || author.role === "Managing Editor"
);

const leadership = leadershipAuthors.map((author) => ({
  name: author.name,
  title: author.role.toUpperCase(),
  desc: author.bio[0]?.substring(0, 150) + "...",
  slug: author.slug,
  image: author.image,
}));

// Get reporting team (all other roles)
const reportingAuthors = authors.filter(
  (author) => author.role !== "Editor-in-Chief" && author.role !== "Managing Editor"
);

const reporters = reportingAuthors.map((author) => ({
  name: author.name,
  title: author.role.toUpperCase(),
  desc: author.bio[0]?.substring(0, 120) + "...",
  slug: author.slug,
  image: author.image,
}));

// All authors for the All Authors section
const allAuthors = authors.map((author) => ({
  name: author.name,
  slug: author.slug,
}));

const staffDepts = [
  {
    icon: <Edit3 className="w-5 h-5" />,
    title: "Editorial",
    desc: "Our editors shape stories with accuracy, fairness, and a commitment to the truth.",
  },
  {
    icon: <CheckSquare className="w-5 h-5" />,
    title: "Fact-Checking",
    desc: "Our fact-checkers verify every detail to ensure our reporting is trustworthy.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Production",
    desc: "From design to publishing, our production team brings stories to life across digital platforms.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Audience & Community",
    desc: "We engage with readers, listen to feedback, and build an informed community.",
  },
];

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function OurTeam() {
  return (
    <div
      className="min-h-screen bg-white text-black"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <Script
        id="structured-data-our-team"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Mirror Standard Editorial Team",
              description:
                "Meet the professional journalists and editors at Mirror Standard.",
              url: "https://www.mirrorstandard.com/our-team",
              itemListElement: authors.map((author, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Person",
                  name: author.name,
                  jobTitle: author.role,
                  url: `https://www.mirrorstandard.com/our-team/${author.slug}`,
                  sameAs: author.verifiedSameAs ?? [],
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.mirrorstandard.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Our Team",
                  item: "https://www.mirrorstandard.com/our-team",
                },
              ],
            },
          ]),
        }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8 sm:py-12">

        {/* ── Breadcrumb ── */}
        <nav className="flex items-center gap-2 text-[12px] text-black mb-8 tracking-wide">
          <Link href="/" className="hover:opacity-70 transition-colors">Home</Link>
          <span>›</span>
          <span className="text-black">Our Team</span>
        </nav>

        {/* ── Hero header: title left, mission right ── */}
        <header className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 mb-10">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-none mb-4 text-black" itemProp="name">
              Our Team
            </h1>
            <p className="text-[15px] leading-relaxed text-black max-w-md">
              At Mirror Standard, our journalists, editors, and analysts work together
              across the globe to deliver fact-based, fearless, and independent journalism.
            </p>
          </div>

          <div className="md:w-[280px] shrink-0">
            <p className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-black mb-2">
              Our Mission
            </p>
            <div className="w-full h-px bg-gray-200 mb-4" />
            <p className="text-[13.5px] leading-relaxed text-black">
              We are an independent newsroom committed to truth, transparency, and
              accountability. We hold power to account and give voice to the people
              through journalism that matters.
            </p>
          </div>
        </header>

        <hr className="border-gray-200 mb-10" />

        {/* ── Leadership ── */}
        {leadership.length > 0 && (
          <section className="mb-12" itemProp="description">
            <SectionHeading>Leadership</SectionHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {leadership.map((person) => (
                <LeaderCard key={person.slug} {...person} />
              ))}
            </div>
          </section>
        )}

        <hr className="border-gray-200 mb-10" />

        {/* ── Reporting Team ── */}
        {reporters.length > 0 && (
          <section className="mb-12">
            <SectionHeading>Reporting Team</SectionHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {reporters.map((person) => (
                <ReporterCard key={person.slug} {...person} />
              ))}
            </div>
          </section>
        )}

        <hr className="border-gray-200 mb-10" />

        {/* ── Mirror Standard Staff ── */}
        <section className="mb-12">
          <SectionHeading>Mirror Standard Staff</SectionHeading>
          <p className="text-[14px] text-black leading-relaxed mb-8 max-w-2xl">
            Behind every story is a team of dedicated professionals working across
            departments to keep our newsroom running independently and ethically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffDepts.map((dept) => (
              <div key={dept.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-black shrink-0">
                  {dept.icon}
                </div>
                <p className="text-[14px] font-semibold text-black">{dept.title}</p>
                <p className="text-[13px] text-black leading-relaxed">{dept.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-200 mb-10" />

        {/* ── All Authors ── */}
        <section className="mb-12">
          <SectionHeading>All Authors</SectionHeading>

          <div className="flex flex-wrap gap-3">
            {allAuthors.map((author) => (
              <Link
                key={author.slug}
                href={`/our-team/${author.slug}`}
                title={author.name}
                className="px-5 py-2.5 border border-gray-300 rounded-full text-[13px] text-black hover:border-black transition-colors"
              >
                {author.name}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Last updated ── */}
        <section className="mt-14 pt-6 border-t border-gray-100 text-center">
          <p className="text-[11px] text-black italic">
            Last Updated: May 21, 2026
          </p>
        </section>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-black">
        {children}
      </p>
      <div className="mt-2 w-full h-px bg-gray-200" />
    </div>
  );
}

function LeaderCard({
  name,
  title,
  desc,
  slug,
  image,
}: {
  name: string;
  title: string;
  desc: string;
  slug: string;
  image: string;
}) {
  return (
    <div
      className="flex gap-5"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Photo */}
      <div className="relative w-[100px] h-[120px] shrink-0 bg-gray-100 overflow-hidden rounded-sm">
        <Image
          src={image}
          alt={name}
          fill
          sizes="100px"
          className="object-cover object-top"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <Link href={`/our-team/${slug}`} title={name}>
          <h2
            className="text-[17px] font-bold leading-snug hover:underline underline-offset-2 transition-all text-black"
            itemProp="name"
          >
            {name}
          </h2>
        </Link>
        <p
          className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-black mt-1 mb-3"
          itemProp="jobTitle"
        >
          {title}
        </p>
        <p
          className="text-[13px] leading-relaxed text-black mb-4"
          itemProp="description"
        >
          {desc}
        </p>
        <Link
          href={`/our-team/${slug}`}
          title={name}
          className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-black hover:gap-3 transition-all duration-200"
        >
          View full bio <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

function ReporterCard({
  name,
  title,
  desc,
  slug,
  image,
}: {
  name: string;
  title: string;
  desc: string;
  slug: string;
  image: string;
}) {
  return (
    <div
      className="flex flex-col"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Photo */}
      <div className="relative w-[72px] h-[88px] bg-gray-100 overflow-hidden rounded-sm mb-4 shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          sizes="72px"
          className="object-cover object-top"
        />
      </div>

      {/* Text */}
      <Link href={`/our-team/${slug}`} title={name}>
        <h3
          className="text-[15px] font-bold leading-snug hover:underline underline-offset-2 transition-all text-black"
          itemProp="name"
        >
          {name}
        </h3>
      </Link>
      <p
        className="text-[10px] font-semibold tracking-[0.13em] uppercase text-black mt-1 mb-2"
        itemProp="jobTitle"
      >
        {title}
      </p>
      <p
        className="text-[13px] leading-relaxed text-black mb-3 flex-1"
        itemProp="description"
      >
        {desc}
      </p>
      <Link
        href={`/our-team/${slug}`}
        title={name}
        className="inline-flex items-center gap-1.5 text-[12px] font-medium text-black hover:gap-3 transition-all duration-200"
      >
        View full bio <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}