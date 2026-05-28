import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { profiles } from "../../lib/news";

export const metadata: Metadata = {
  title: "Profiles | Mirror Standard",
  description:
    "Entity profiles and sourced background pages from Mirror Standard.",
  alternates: {
    canonical: "https://www.mirrorstandard.com/profiles/",
  },
};

export default function ProfilesIndexPage() {
  const siteUrl = "https://www.mirrorstandard.com";

  return (
    <main className="bg-[color:var(--ms-surface)]">
      <Script
        id="structured-data-profiles"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": `${siteUrl}/profiles/#webpage`,
                url: `${siteUrl}/profiles/`,
                name: "Profiles | Mirror Standard",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
                  { "@type": "ListItem", position: 2, name: "Profiles", item: `${siteUrl}/profiles/` },
                ],
              },
            ],
          }),
        }}
      />

      <div className="mx-auto w-full max-w-[1380px] px-4 py-4 sm:px-6 md:px-8 md:py-8 lg:px-10">

        {/* Breadcrumb */}
        <nav className="mb-6 text-[13px] text-[color:var(--ms-text-faint)]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="transition-colors hover:text-[color:var(--ms-accent)]">Home</Link></li>
            <li><span>›</span></li>
            <li className="text-[color:var(--ms-text)]">Profiles</li>
          </ol>
        </nav>

        {/* Page header */}
        <div className="border-y-2 border-[color:var(--ms-text)] py-4">
          <p className="font-[oswald] text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
            Mirror Standard
          </p>
          <h1 className="ms-editorial-serif mt-2 text-[36px] leading-[1.02] tracking-[-0.03em] text-[color:var(--ms-text)] sm:text-[48px]">
            Reported Profiles
          </h1>
          <p className="mt-3 max-w-[68ch] text-[16px] italic leading-[1.7] text-[color:var(--ms-text-soft)]">
            Source-backed profiles, background pages, and analysis that place people,
            institutions, and finance stories in context.
          </p>
        </div>

        {/* Profile list */}
        <ul className="mt-0 divide-y divide-[color:var(--ms-border)]">
          {profiles.map((profile) => (
            <li key={profile.slug}>
              <Link
                href={`/profiles/${profile.slug}/`}
                className="group flex items-start gap-4 py-5 transition-colors"
              >
                {/* Bullet accent */}
                <span className="mt-[9px] h-2 w-2 flex-none rounded-full bg-[color:var(--ms-accent)]" />

                <div className="min-w-0">
                  <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-accent)]">
                    Profile
                  </p>
                  <h2 className="ms-editorial-serif mt-1 text-[22px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)] sm:text-[26px]">
                    {profile.title}
                  </h2>
                  <p className="mt-1.5 text-[14px] leading-[1.7] text-[color:var(--ms-text-soft)]">
                    {profile.description}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-[color:var(--ms-text-faint)]">
                    Updated{" "}
                    {new Date(profile.updatedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </main>
  );
}