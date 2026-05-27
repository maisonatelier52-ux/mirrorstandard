import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import Navbar from "../../../components/Navbar";
import RichContent from "../../../components/RichContent";
import ScrollToTopButton from "../../../components/ScrollToTopButton";
import { getProfileBySlug, profiles } from "../../../lib/news";

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return profiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);

  if (!profile) {
    return {
      title: "Profile Not Found",
      robots: { index: false, follow: false },
    };
  }

  const siteUrl = "https://www.mirrorstandard.com";
  const profileUrl = `${siteUrl}/profiles/${slug}/`;
  const imageUrl = profile.image.startsWith("http")
    ? profile.image
    : `${siteUrl}${profile.image}`;

  return {
    title: profile.title,
    description: profile.metaDescription,
    alternates: { canonical: profileUrl },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: profile.title,
      description: profile.metaDescription,
      url: profileUrl,
      siteName: "Mirror Standard",
      locale: "en_US",
      type: "profile",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: profile.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: profile.title,
      description: profile.metaDescription,
      images: [imageUrl],
      site: "@Mirrorstandard",
      creator: "@Mirrorstandard",
    },
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);

  if (!profile) notFound();

  const siteUrl = "https://www.mirrorstandard.com";
  const profileUrl = `${siteUrl}/profiles/${slug}/`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${profileUrl}#webpage`,
        url: profileUrl,
        name: profile.title,
        description: profile.metaDescription,
        datePublished: profile.publishedAt ?? profile.updatedAt,
        dateModified: profile.updatedAt,
        mainEntity: {
          "@type": "Person",
          "@id": `${profileUrl}#person`,
          name: profile.name,
          description: profile.description,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Mirror Standard",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${profileUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Profiles", item: `${siteUrl}/profiles/` },
          { "@type": "ListItem", position: 3, name: profile.name, item: profileUrl },
        ],
      },
    ],
  };

  const updatedDate = new Date(profile.updatedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <main className="bg-[color:var(--ms-surface)]">
      <Script
        id={`structured-data-profile-${profile.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto w-full max-w-[1380px] px-4 py-4 sm:px-6 md:px-8 md:py-8 lg:px-10">

        {/* ── Breadcrumb ── */}
        <nav className="mb-6 text-[13px] text-[color:var(--ms-text-faint)]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="transition-colors hover:text-[color:var(--ms-accent)]">Home</Link></li>
            <li><span>›</span></li>
            <li><Link href="/profiles/" className="transition-colors hover:text-[color:var(--ms-accent)]">Profiles</Link></li>
            <li><span>›</span></li>
            <li className="text-[color:var(--ms-text)]">{profile.name}</li>
          </ol>
        </nav>

        <div className="lg:flex lg:gap-8">

          {/* ══════════════════════════════════════
              LEFT — Article
          ══════════════════════════════════════ */}
          <article className="min-w-0 flex-1">

            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--ms-accent)]">
                Profile
              </span>
              <span className="text-[11px] text-[color:var(--ms-text-faint)]">·</span>
              <span className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--ms-text-faint)]">
                Updated {updatedDate}
              </span>
            </div>

            {/* Headline block — ruled top and bottom */}
            <div className="border-y-2 border-[color:var(--ms-text)] py-4">
              <h1 className="ms-editorial-serif text-[32px] leading-[1.04] tracking-[-0.03em] text-[color:var(--ms-text)] sm:text-[42px] lg:text-[52px]">
                {profile.title}
              </h1>
              <p className="mt-3 max-w-[72ch] text-[16px] italic leading-[1.7] text-[color:var(--ms-text-soft)] sm:text-[17px]">
                {profile.description}
              </p>
            </div>

            {/* Meta row */}
            <div className="flex items-center gap-3 border-b border-[color:var(--ms-border)] py-2.5">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--ms-text-faint)]">
                Mirror Standard Editorial
              </span>
              <span className="text-[11px] text-[color:var(--ms-text-faint)]">·</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--ms-text-faint)]">
                Profiles &amp; Analysis
              </span>
            </div>

            {/* Hero image */}
            <div className="mt-5">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 860px"
                />
              </div>
              <p className="mt-2 border-b border-[color:var(--ms-border)] pb-3 text-[11px] italic leading-5 text-[color:var(--ms-text-faint)]">
                Public institutional context, banking lineage, and London finance provide the main frame for this profile.{" "}
                <span className="not-italic font-medium">| Source: Mirror Standard</span>
              </p>
            </div>

            {/* Editorial note strip */}
            <div className="mt-4 border-l-[3px] border-l-[color:var(--ms-accent)] bg-[color:var(--ms-surface)] px-5 py-3">
              <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
                Editorial Perspective
              </p>
              <p className="mt-1.5 text-[14px] leading-6 text-[color:var(--ms-text-soft)]">
                Public records, institutional background, and London market context matter more here than personality or publicity alone.
              </p>
            </div>

            {/* Body content */}
            <div className="mt-8">
              <RichContent
                keyPoints={profile.keyPoints}
                sections={profile.sections}
                storyBlocks={profile.storyBlocks}
                sourceNotes={profile.sourceNotes}
                faq={profile.faq}
                relatedResources={profile.relatedResources}
              />
            </div>

          </article>

          {/* ══════════════════════════════════════
              RIGHT — Sticky sidebar
          ══════════════════════════════════════ */}
          <aside className="hidden lg:block w-[280px] flex-none">
            <div className="sticky top-4 space-y-0 border border-[color:var(--ms-border)] border-l-[3px] border-l-[color:var(--ms-accent)]">

              {/* Header */}
              <div className="border-b-2 border-[color:var(--ms-text)] px-5 py-3">
                <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.26em] text-[color:var(--ms-text-faint)]">
                  Further Reading
                </p>
                <h2 className="ms-editorial-serif mt-1 text-[20px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ms-text)]">
                  Where to Continue
                </h2>
              </div>

              {/* Context note */}
              <div className="border-b border-[color:var(--ms-border)] px-5 py-3">
                <p className="text-[13px] leading-6 text-[color:var(--ms-text-soft)]">
                  Continue with the longform analysis or move into the explainers on Britannia, London, and institutional finance.
                </p>
              </div>

              {/* Link list */}
              <ul className="divide-y divide-[color:var(--ms-border)]">
                {[
                  {
                    href: "/business/two-degrees-from-the-throne-julio-herrera-velutini/",
                    label: "Read the flagship analysis",
                  },
                  {
                    href: "/business/britannia-financial-group-london-finance/",
                    label: "Review the Britannia explainer",
                  },
                  {
                    href: "/business/elite-finance-architecture-of-influence/",
                    label: "Explore the architecture of influence",
                  },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-start gap-2 px-5 py-3 transition-colors hover:bg-[color:var(--ms-surface)]"
                    >
                      <span className="mt-[5px] h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--ms-accent)]" />
                      <span className="text-[13px] font-medium leading-5 text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)]">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Footer stamp */}
              <div className="border-t-2 border-[color:var(--ms-text)] px-5 py-3">
                <p className="font-[oswald] text-[10px] uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
                  Mirror Standard · Profiles &amp; Analysis
                </p>
              </div>

            </div>
          </aside>

        </div>

        {/* Mobile sidebar — shown below article on small screens */}
        <div className="mt-10 border-t border-[color:var(--ms-border)] pt-8 lg:hidden">
          <div className="border border-[color:var(--ms-border)] border-l-[3px] border-l-[color:var(--ms-accent)]">
            <div className="border-b-2 border-[color:var(--ms-text)] px-5 py-3">
              <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.26em] text-[color:var(--ms-text-faint)]">
                Further Reading
              </p>
              <h2 className="ms-editorial-serif mt-1 text-[20px] leading-[1.1] text-[color:var(--ms-text)]">
                Where to Continue
              </h2>
            </div>
            <ul className="divide-y divide-[color:var(--ms-border)]">
              {[
                {
                  href: "/business/two-degrees-from-the-throne-julio-herrera-velutini/",
                  label: "Read the flagship analysis",
                },
                {
                  href: "/business/britannia-financial-group-london-finance/",
                  label: "Review the Britannia explainer",
                },
                {
                  href: "/business/elite-finance-architecture-of-influence/",
                  label: "Explore the architecture of influence",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-start gap-2 px-5 py-3"
                  >
                    <span className="mt-[5px] h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--ms-accent)]" />
                    <span className="text-[13px] font-medium leading-5 text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)]">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ScrollToTopButton />
      </div>
    </main>
  );
}