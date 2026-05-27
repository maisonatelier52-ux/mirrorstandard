import type { NewsArticle } from "../lib/news";
import { formatCategoryName } from "../lib/category-copy";
import Image from "next/image";
import Link from "next/link";

type Tone = "ivory" | "mist" | "paper";

interface Props {
  category: string;
  description: string;
  lead?: NewsArticle;
  secondary: NewsArticle[];
  tone?: Tone;
}

export default function HomeCategoryFront({
  category,
  description,
  lead,
  secondary,
  tone = "ivory",
}: Props) {
  if (!lead) return null;

  return (
    <section className="mt-8">
      {/* Section header */}
      <div className="mb-4 flex items-center gap-3">
        <h2 className="ms-meta border-b-2 border-[color:var(--ms-text)] pb-1 text-[13px] uppercase tracking-[0.22em] text-[color:var(--ms-text)]">
          {formatCategoryName(category)}
        </h2>
        <div className="flex-1 border-b-2 border-[color:var(--ms-border)]" />
        <Link
          href={`/${category}`}
          className="ms-meta flex-shrink-0 text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-accent)] hover:underline"
        >
          More {formatCategoryName(category)} →
        </Link>
      </div>

      {/* 2-column grid: lead + secondary list */}
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)]">

        {/* Lead story */}
        <Link
          href={`/${lead.category}/${lead.slug}`}
          title={lead.title}
          className="group block border-r border-[color:var(--ms-border)] pr-5"
        >
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src={lead.image}
              alt={lead.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <h3 className="ms-editorial-serif mt-2 text-[28px] leading-[1.08] tracking-[-0.03em] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors sm:text-[32px]">
            {lead.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-[14px] leading-5 text-[color:var(--ms-text-soft)]">
            {lead.shortdescription}
          </p>
          <p className="ms-meta mt-2 text-[11px] text-[color:var(--ms-text-faint)]">
            {lead.author} · {lead.date}
          </p>
        </Link>

        {/* Secondary stories list */}
        <div className="divide-y divide-[color:var(--ms-border)] border-r border-[color:var(--ms-border)] pr-5">
          {secondary.map((story) => (
            <Link
              key={story.slug}
              href={`/${story.category}/${story.slug}`}
              className="group flex gap-3 py-5 first:pt-0"
            >
              <div className="relative h-[68px] w-[88px] flex-shrink-0 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="88px"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-[14px] leading-[1.35] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors">
                  {story.title}
                </h3>
                <p className="ms-meta mt-1 text-[11px] text-[color:var(--ms-text-faint)]">{story.date}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}