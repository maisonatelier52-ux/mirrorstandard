import type { NewsArticle } from "../lib/news";
import { formatCategoryName } from "../lib/category-copy";
import Image from "next/image";
import Link from "next/link";

interface Props {
  stories: NewsArticle[];
}

export default function HomePulseStrip({ stories }: Props) {
  if (!stories.length) return null;

  const [featured, ...rest] = stories.slice(0, 4);

  return (
    <section className="mt-10">
      {/* Section header — h2 */}
      <div className="mb-5 flex items-center gap-3">
        <div className="h-5 w-1 bg-[color:var(--ms-accent)]" />
        <h2 className="ms-meta text-[13px] uppercase tracking-[0.22em] text-[color:var(--ms-text)]">
          The Pulse
        </h2>
        <div className="flex-1 border-b border-dashed border-[color:var(--ms-border)]" />
        <span className="ms-meta text-[11px] uppercase tracking-[0.16em] text-[color:var(--ms-text-faint)]">
          Science &amp; Health
        </span>
      </div>

      {/* Cards row */}
      <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border border-[color:var(--ms-border)]">
        {/* Featured card */}
        <Link
          href={`/${featured.category}/${featured.slug}`}
          title={featured.title}
          className="group relative col-span-1 flex flex-col bg-[color:var(--ms-text)] overflow-hidden"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src={featured.image} alt={featured.title} fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="ms-meta inline-block border border-white/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-white/80 mb-2">
              {formatCategoryName(featured.category)}
            </span>
            {/* h3 — under section h2 */}
            <h3 className="ms-editorial-serif text-[20px] leading-[1.1] tracking-[-0.02em] text-white group-hover:text-[color:var(--ms-accent-soft)] transition-colors">
              {featured.title}
            </h3>
            <p className="ms-meta mt-2 text-[11px] text-white/60">{featured.date}</p>
          </div>
        </Link>

        {/* Rest 3 cards */}
        {rest.slice(0, 3).map((story) => (
          <Link
            key={story.slug}
            href={`/${story.category}/${story.slug}`}
            title={story.title}
            className="group flex flex-col border-l border-[color:var(--ms-border)] overflow-hidden bg-[#f9f7f2]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={story.image} alt={story.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="ms-meta text-[10px] uppercase tracking-[0.16em] text-[color:var(--ms-accent)]">
                {formatCategoryName(story.category)}
              </p>
              <h3 className="ms-editorial-serif mt-1.5 text-[17px] leading-[1.15] tracking-[-0.02em] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors">
                {story.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[12px] leading-5 text-[color:var(--ms-text-soft)]">
                {story.shortdescription}
              </p>
              <p className="ms-meta mt-auto pt-3 text-[11px] text-[color:var(--ms-text-faint)]">
                {story.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
