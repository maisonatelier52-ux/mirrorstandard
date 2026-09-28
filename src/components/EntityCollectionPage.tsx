import Link from "next/link";
import type { EntityPageRecord, EntitySection } from "../lib/entity-content";

const collectionCopy: Record<
  EntitySection,
  { title: string; description: string; singular: string }
> = {
  people: {
    title: "People",
    description:
      "Source-labelled profiles of people appearing in Mirror Standard reporting and analysis.",
    singular: "Person",
  },
  organizations: {
    title: "Organizations",
    description:
      "Reference profiles separating public company records, attributed descriptions, and editorial context.",
    singular: "Organization",
  },
  places: {
    title: "Places",
    description:
      "Geographic reference pages explaining the institutional settings used in Mirror Standard coverage.",
    singular: "Place",
  },
};

export default function EntityCollectionPage({
  section,
  entities,
}: {
  section: EntitySection;
  entities: EntityPageRecord[];
}) {
  const copy = collectionCopy[section];

  return (
    <main className="min-h-[60vh] bg-[color:var(--ms-surface)]">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-6 md:py-12 lg:px-10">
        <nav className="mb-6 text-[13px] text-[color:var(--ms-text-faint)]" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-[color:var(--ms-accent)]">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">›</span>
          <span className="text-[color:var(--ms-text)]">{copy.title}</span>
        </nav>

        <header className="border-y-2 border-[color:var(--ms-text)] py-5">
          <p className="font-[oswald] text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--ms-accent)]">
            Reference desk
          </p>
          <h1 className="ms-editorial-serif mt-2 text-[38px] leading-none tracking-[-0.03em] text-[color:var(--ms-text)] sm:text-[52px]">
            {copy.title}
          </h1>
          <p className="mt-3 max-w-[70ch] text-[16px] leading-7 text-[color:var(--ms-text-soft)]">
            {copy.description}
          </p>
        </header>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {entities.map((entity) => (
            <article
              key={`${entity.section}-${entity.slug}`}
              className="border border-[color:var(--ms-border)] border-l-[3px] border-l-[color:var(--ms-accent)] p-5"
            >
              <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
                {copy.singular}
              </p>
              <h2 className="ms-editorial-serif mt-2 text-[26px] leading-[1.1] text-[color:var(--ms-text)]">
                <Link
                  href={`/${entity.section}/${entity.slug}/`}
                  className="transition-colors hover:text-[color:var(--ms-accent)]"
                >
                  {entity.name}
                </Link>
              </h2>
              <p className="mt-3 text-[14px] leading-6 text-[color:var(--ms-text-soft)]">
                {entity.metaDescription}
              </p>
              <Link
                href={`/${entity.section}/${entity.slug}/`}
                className="mt-4 inline-block font-[oswald] text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--ms-accent)]"
              >
                View reference page →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

