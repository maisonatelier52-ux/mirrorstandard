import type { NewsArticle } from "../lib/news";
import { formatCategoryName } from "../lib/category-copy";
import Image from "next/image";
import Link from "next/link";

interface Props {
  lead?: NewsArticle;
  latestHeadlines: NewsArticle[];
  editorPicks: NewsArticle[];
  mostRead: NewsArticle[];
}

export default function NewspaperHero({ lead, latestHeadlines, editorPicks, mostRead }: Props) {
  if (!lead) return null;

  // Use the first mostRead story as the featured editorial card
  // (it's already deduplicated from the hero and headlines)
  const featuredCard = mostRead[0];

  return (
    <section className="pt-4">
      {/* 3-column newspaper grid */}
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.7fr)_250px]">

        {/* LEFT COLUMN: Hero story */}
        <div className="border-r border-[color:var(--ms-border)] pr-5">
          <Link
            href={`/${lead.category}/${lead.slug}`}
            title={lead.title}
            className="group block"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={lead.image}
                alt={lead.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="mt-3">
              <p className="ms-meta text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-accent)]">
                {formatCategoryName(lead.category)}
              </p>
              <h1 className="ms-editorial-serif mt-2 text-[32px] leading-[1.04] tracking-[-0.03em] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors sm:text-[40px]">
                {lead.title}
              </h1>
              <p className="mt-3 text-[15px] leading-7 text-[color:var(--ms-text-soft)]">
                {lead.shortdescription}
              </p>
              <p className="ms-meta mt-3 text-[11px] text-[color:var(--ms-text-faint)]">
                By {lead.author} &nbsp;·&nbsp; {lead.date} &nbsp;·&nbsp; 8 min read
              </p>
            </div>
          </Link>

          {/* Two secondary stories below hero */}
          <div className="mt-5 grid grid-cols-2 gap-4 border-t-2 border-[color:var(--ms-text)] pt-5">
            {latestHeadlines.slice(0, 2).map((story) => (
              <Link
                key={story.slug}
                href={`/${story.category}/${story.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="ms-meta mt-2 text-[10px] uppercase tracking-[0.16em] text-[color:var(--ms-accent)]">
                  {formatCategoryName(story.category)}
                </p>
                <h3 className="ms-editorial-serif mt-1.5 text-[19px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors">
                  {story.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-[color:var(--ms-text-soft)]">
                  {story.shortdescription}
                </p>
                <p className="ms-meta mt-1 text-[11px] text-[color:var(--ms-text-faint)]">
                  {story.date} · 4 min read
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* MIDDLE COLUMN: Latest Headlines + Editor's Picks */}
        <div className="border-r border-[color:var(--ms-border)] px-5">
          {/* Latest Headlines */}
          <div>
            <h2 className="ms-meta pt-2 border-b-2 border-t-2 border-[color:var(--ms-text)] pb-1.5 text-[12px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text)]">
              Latest Headlines
            </h2>
            <div className="mt-3 divide-y divide-[color:var(--ms-border)]">
              {latestHeadlines.slice(0, 7).map((story) => (
                <Link
                  key={story.slug}
                  href={`/${story.category}/${story.slug}`}
                  className="group flex items-start gap-2 py-3"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[14px] leading-[1.4] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors">
                      {story.title}
                    </h3>
                    <p className="ms-meta mt-0.5 text-[11px] text-[color:var(--ms-text-faint)]">
                      {story.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Editor's Picks */}
          <div className="mt-6">
            <h2 className="ms-meta pt-2 border-b-2 border-t-2 border-[color:var(--ms-text)] pb-1.5 text-[12px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text)]">
              Editor&apos;s Picks
            </h2>
            <div className="mt-3 space-y-4">
              {editorPicks.map((story) => (
                <Link
                  key={story.slug}
                  href={`/${story.category}/${story.slug}`}
                  className="group flex gap-3"
                >
                  <div className="relative h-[72px] w-[72px] flex-shrink-0 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="72px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="ms-meta text-[10px] uppercase tracking-[0.16em] text-[color:var(--ms-accent)]">
                      {formatCategoryName(story.category)}
                    </p>
                    <h3 className="ms-editorial-serif mt-1 text-[16px] leading-[1.2] tracking-[-0.01em] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors">
                      {story.title}
                    </h3>
                    <p className="ms-meta mt-0.5 text-[11px] text-[color:var(--ms-text-faint)]">{story.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Featured Story Card + Most Read */}
        <div className="pl-5 hidden lg:block">

          {/* ── Featured Story Card ── */}
          {featuredCard && (
            <div className="mb-6">
              <h2 className="ms-meta pt-2 border-b-2 border-t-2 border-[color:var(--ms-text)] pb-1.5 text-[12px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text)]">
                Featured
              </h2>
              <Link
                href={`/${featuredCard.category}/${featuredCard.slug}`}
                className="group mt-4 block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={featuredCard.image}
                    alt={featuredCard.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="250px"
                  />
                  {/* subtle dark vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>

                {/* Category pill */}
                <p className="ms-meta mt-3 text-[10px] uppercase tracking-[0.18em] text-[color:var(--ms-accent)]">
                  {formatCategoryName(featuredCard.category)}
                </p>

                {/* Title */}
                <h3 className="ms-editorial-serif mt-1.5 text-[18px] leading-[1.15] tracking-[-0.02em] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors">
                  {featuredCard.title}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-3 text-[12px] leading-[1.65] text-[color:var(--ms-text-soft)]">
                  {featuredCard.shortdescription}
                </p>

                {/* Meta row */}
                <div className="mt-3 flex items-center justify-between border-t border-[color:var(--ms-border)] pt-3">
                  <span className="ms-meta text-[11px] text-[color:var(--ms-text-faint)]">
                    {featuredCard.date}
                  </span>
                  <span className="ms-meta inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] text-[color:var(--ms-accent)]">
                    Read
                    <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Most Read */}
          <div>
            <h2 className="ms-meta pt-2 border-b-2 border-t-2 border-[color:var(--ms-text)] pb-1.5 text-[12px] uppercase font-bold tracking-[0.22em] text-[color:var(--ms-text)]">
              Most Read
            </h2>
            <div className="mt-5">
              {/* Skip index 0 — already used as featuredCard above */}
              {mostRead.slice(1).map((story, i) => (
                <Link
                  key={story.slug}
                  href={`/${story.category}/${story.slug}`}
                  className="group block border-b border-[color:var(--ms-border)] pb-4 mb-4 last:border-0 last:pb-0 last:mb-0"
                >
                  <div className="flex gap-3">
                    <span className="ms-editorial-serif flex-shrink-0 text-[26px] leading-none tracking-[-0.04em] text-[color:var(--ms-border-strong)]">
                      {i + 1}
                    </span>
                    <h3 className="text-[13px] leading-[1.4] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors">
                      {story.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}