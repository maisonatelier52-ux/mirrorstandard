import type { NewsArticle } from "../lib/news";
import { formatCategoryName } from "../lib/category-copy";
import Image from "next/image";
import Link from "next/link";

interface Props {
  stories: NewsArticle[];
}

export default function HomeFieldNotes({ stories }: Props) {
  if (!stories.length) return null;

  const top = stories.slice(0, 6);

  return (
    <section className="mt-10 mb-12">
      {/* Section header */}
      <div className="mb-5 flex items-center gap-3">
        <h2 className="ms-meta text-[13px] uppercase tracking-[0.22em] text-[color:var(--ms-text)] border-b-2 border-[color:var(--ms-text)] pb-1">
          More Stories
        </h2>
        <div className="flex-1 border-b-2 border-[color:var(--ms-border)]" />
      </div>

      {/* 3-col grid of compact story cards */}
      <div className="grid gap-px bg-[color:var(--ms-border)] border border-[color:var(--ms-border)] sm:grid-cols-2 lg:grid-cols-3">
        {top.map((story) => (
          <Link
            key={story.slug}
            href={`/${story.category}/${story.slug}`}
            className="group flex gap-4 bg-[#f9f7f2] p-4 hover:bg-white transition-colors"
          >
            {/* Thumbnail */}
            <div className="relative h-[80px] w-[100px] flex-shrink-0 overflow-hidden">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="100px"
              />
            </div>

            {/* Text */}
            <div className="min-w-0 flex flex-col">
              <p className="ms-meta text-[10px] uppercase tracking-[0.14em] text-[color:var(--ms-accent)]">
                {formatCategoryName(story.category)}
              </p>
              <h3 className="ms-editorial-serif mt-1 text-[15px] leading-[1.2] tracking-[-0.01em] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors line-clamp-3">
                {story.title}
              </h3>
              <p className="ms-meta mt-auto pt-2 text-[10px] text-[color:var(--ms-text-faint)]">
                {story.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}