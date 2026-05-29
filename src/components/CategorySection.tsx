
"use client";
import React, { useEffect, useState } from "react";
import type { NewsArticle } from "../lib/news";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: NewsArticle[];
  category: string;
}

/* ─── Pagination ──────────────────────────────────────────────── */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) => {
  const pages: (number | "…")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("…");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    )
      pages.push(i);
    if (currentPage < totalPages - 2) pages.push("…");
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center justify-center gap-1 py-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 py-1.5 text-[13px] text-[color:var(--ms-text-soft)] disabled:opacity-40 hover:text-[color:var(--ms-accent)] transition-colors cursor-pointer"
      >
        « Prev
      </button>

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className="px-2 text-[13px] text-[color:var(--ms-text-faint)]">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            className={`h-8 w-8 rounded text-[13px] font-medium transition-colors cursor-pointer ${
              currentPage === p
                ? "bg-[color:var(--ms-text)] text-white"
                : "text-[color:var(--ms-text-soft)] hover:bg-[color:var(--ms-surface-muted)]"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 py-1.5 text-[13px] text-[color:var(--ms-text-soft)] disabled:opacity-40 hover:text-[color:var(--ms-accent)] transition-colors cursor-pointer"
      >
        Next »
      </button>
    </div>
  );
};

/* ─── Horizontal article card ───────────────────────────────────── */
function HorizontalCard({ story }: { story: NewsArticle }) {
  return (
    <Link
      href={`/${story.category}/${story.slug}`}
      title={story.title}
      className="group flex items-start gap-4 py-4"
    >
      <div className="relative h-[98px] w-[180px] flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="130px"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
      </div>
      <div className="flex flex-1 flex-col">
        <p className="text-[11px] text-[color:var(--ms-text-faint)]">
          {story.date}&nbsp;·&nbsp;4 min read
        </p>
        <h3 className="ms-editorial-serif mt-1 text-[17px] leading-[1.2] tracking-[-0.02em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)] line-clamp-2">
          {story.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[12px] leading-5 text-[color:var(--ms-text-soft)]">
          {story.shortdescription}
        </p>
      </div>
    </Link>
  );
}

/* ─── Main export ───────────────────────────────────────────────── */
export default function CategorySection({ data, category }: Props) {
  // Skip first 4 articles already used in CategoryHeader (1 lead + 3 secondary)
  const listData = data.length > 4 ? data.slice(4) : data;

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.max(1, Math.ceil(listData.length / ITEMS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const pageData = listData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const leftCol = pageData.filter((_, i) => i % 2 === 0);
  const rightCol = pageData.filter((_, i) => i % 2 !== 0);

  return (
    <section className="mt-2 w-full">
      {/* Top separator */}
      <div className="border-t-2 border-[color:var(--ms-border)] mb-2" />

      {/* ── 2-column article list separated by vertical divider ── */}
      {pageData.length === 0 ? (
        <p className="py-10 text-center text-[color:var(--ms-text-soft)]">
          No more stories available.
        </p>
      ) : (
        <div className="flex flex-col md:flex-row md:items-stretch">
          {/* Left column */}
          <div className="flex-1 md:pr-6 md:border-r md:border-[color:var(--ms-border)] divide-y divide-[color:var(--ms-border)]">
            {leftCol.map((story) => (
              <HorizontalCard key={story.slug} story={story} />
            ))}
          </div>

          {/* Right column */}
          <div className="flex-1 md:pl-6 divide-y divide-[color:var(--ms-border)]">
            {rightCol.map((story) => (
              <HorizontalCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(p) => {
              setCurrentPage(p);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      )}
    </section>
  );
}