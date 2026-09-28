import Image from "next/image";
import Link from "next/link";
import RichContent from "./RichContent";
import ScrollToTopButton from "./ScrollToTopButton";
import type { EntityPageRecord } from "../lib/entity-content";

const siteUrl = "https://www.mirrorstandard.com";

const collectionNames = {
  people: "People",
  organizations: "Organizations",
  places: "Places",
} as const;

const entityFragments = {
  Person: "person",
  Organization: "organization",
  City: "place",
} as const;

export default function EntityReferencePage({ entity }: { entity: EntityPageRecord }) {
  const collectionName = collectionNames[entity.section];
  const entityUrl = `${siteUrl}/${entity.section}/${entity.slug}/`;
  const entityId = `${entityUrl}#${entityFragments[entity.schemaType]}`;
  const imageUrl = entity.image ? `${siteUrl}${entity.image}` : undefined;
  const articleUrl =
    `${siteUrl}/business/julio-herrera-velutini-banking-dynasty-institutional-influence/`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": entity.schemaType === "Person" ? "ProfilePage" : "WebPage",
        "@id": `${entityUrl}#webpage`,
        url: entityUrl,
        name: entity.title,
        description: entity.metaDescription,
        datePublished: entity.publishedAt,
        dateModified: entity.updatedAt,
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${entityUrl}#breadcrumb` },
        mainEntity: { "@id": entityId },
        primaryImageOfPage: imageUrl ? { "@id": `${entityUrl}#primaryimage` } : undefined,
      },
      {
        "@type": entity.schemaType,
        "@id": entityId,
        url: entityUrl,
        name: entity.name,
        description: entity.description,
        subjectOf: { "@id": `${articleUrl}#article` },
        ...entity.schemaProperties,
      },
      ...(imageUrl
        ? [
            {
              "@type": "ImageObject",
              "@id": `${entityUrl}#primaryimage`,
              url: imageUrl,
              contentUrl: imageUrl,
              caption: entity.imageCaption ?? entity.imageAlt ?? entity.name,
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        "@id": `${entityUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: collectionName,
            item: `${siteUrl}/${entity.section}/`,
          },
          { "@type": "ListItem", position: 3, name: entity.name, item: entityUrl },
        ],
      },
    ],
  };

  const updatedDate = new Date(entity.updatedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <main className="bg-[color:var(--ms-surface)]">
      <script
        id={`structured-data-${entity.section}-${entity.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto w-full max-w-[1380px] px-4 py-4 sm:px-6 md:px-8 md:py-8 lg:px-10">
        <nav className="mb-6 text-[13px] text-[color:var(--ms-text-faint)]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="transition-colors hover:text-[color:var(--ms-accent)]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link
                href={`/${entity.section}/`}
                className="transition-colors hover:text-[color:var(--ms-accent)]"
              >
                {collectionName}
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-[color:var(--ms-text)]">{entity.name}</li>
          </ol>
        </nav>

        <div className="lg:flex lg:gap-8">
          <article className="min-w-0 flex-1">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--ms-accent)]">
                {entity.eyebrow}
              </span>
              <span className="text-[11px] text-[color:var(--ms-text-faint)]">·</span>
              <span className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--ms-text-faint)]">
                Reference profile
              </span>
            </div>

            <header className="border-y-2 border-[color:var(--ms-text)] py-4">
              <h1 className="ms-editorial-serif text-[32px] leading-[1.04] tracking-[-0.03em] text-[color:var(--ms-text)] sm:text-[42px] lg:text-[52px]">
                {entity.title}
              </h1>
              <p className="mt-3 max-w-[72ch] text-[16px] italic leading-[1.7] text-[color:var(--ms-text-soft)] sm:text-[17px]">
                {entity.description}
              </p>
            </header>

            <div className="flex flex-wrap items-center gap-3 border-b border-[color:var(--ms-border)] py-2.5">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--ms-text-faint)]">
                Mirror Standard Reference Desk
              </span>
              <span className="text-[11px] text-[color:var(--ms-text-faint)]">·</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--ms-text-faint)]">
                Updated {updatedDate}
              </span>
            </div>

            {entity.image ? (
              <figure className="mt-5">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[color:var(--ms-surface-muted)]">
                  <Image
                    src={entity.image}
                    alt={entity.imageAlt ?? entity.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 860px"
                  />
                </div>
                {entity.imageCaption ? (
                  <figcaption className="mt-2 border-b border-[color:var(--ms-border)] pb-3 text-[11px] italic leading-5 text-[color:var(--ms-text-faint)]">
                    {entity.imageCaption} <span className="not-italic font-medium">| Mirror Standard</span>
                  </figcaption>
                ) : null}
              </figure>
            ) : (
              <div className="mt-5 border border-[color:var(--ms-border)] bg-[color:var(--ms-surface-muted)] px-6 py-8 sm:px-8">
                <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.26em] text-[color:var(--ms-text-faint)]">
                  Entity reference
                </p>
                <p className="ms-editorial-serif mt-2 max-w-[24ch] text-[28px] leading-[1.1] text-[color:var(--ms-text)] sm:text-[34px]">
                  {entity.name}
                </p>
                <p className="mt-3 max-w-[64ch] text-[14px] leading-6 text-[color:var(--ms-text-soft)]">
                  Registry facts, attributed public descriptions, and editorial context are identified separately below.
                </p>
              </div>
            )}

            <aside className="mt-4 border-l-[3px] border-l-[color:var(--ms-accent)] bg-[color:var(--ms-surface-muted)] px-5 py-3">
              <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
                Scope and sourcing
              </p>
              <p className="mt-1.5 text-[14px] leading-6 text-[color:var(--ms-text-soft)]">
                This neutral reference page distinguishes official records, attributed company or personal descriptions,
                and Mirror Standard analysis. It does not treat promotional language as independently verified fact.
              </p>
            </aside>

            <div className="mt-8">
              <RichContent
                keyPoints={entity.keyPoints}
                sections={entity.sections}
                sourceNotes={entity.sourceNotes}
                faq={entity.faq}
                relatedResources={entity.relatedResources}
              />
            </div>
          </article>

          <aside className="mt-10 lg:mt-0 lg:block lg:w-[280px] lg:flex-none">
            <div className="border border-[color:var(--ms-border)] border-l-[3px] border-l-[color:var(--ms-accent)] lg:sticky lg:top-4">
              <div className="border-b-2 border-[color:var(--ms-text)] px-5 py-3">
                <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.26em] text-[color:var(--ms-text-faint)]">
                  Entity network
                </p>
                <h2 className="ms-editorial-serif mt-1 text-[20px] leading-[1.1] text-[color:var(--ms-text)]">
                  Related coverage
                </h2>
              </div>
              <ul className="divide-y divide-[color:var(--ms-border)]">
                {entity.relatedResources.slice(0, 4).map((resource) => (
                  <li key={resource.href}>
                    <Link href={resource.href} className="group flex items-start gap-2 px-5 py-3">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--ms-accent)]" />
                      <span className="text-[13px] font-medium leading-5 text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)]">
                        {resource.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t-2 border-[color:var(--ms-text)] px-5 py-3">
                <p className="font-[oswald] text-[10px] uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
                  Mirror Standard · {collectionName}
                </p>
              </div>
            </div>
          </aside>
        </div>

        <ScrollToTopButton />
      </div>
    </main>
  );
}

