"use client";

import type { NewsArticle } from "../lib/news";
import Link from "next/link";
import { useState } from "react";

interface Props {
  stories: NewsArticle[];
}

export default function BreakingNewsTicker({ stories }: Props) {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + stories.length) % stories.length);
  const next = () => setIdx((i) => (i + 1) % stories.length);

  if (!stories.length) return null;
  const story = stories[idx];

  return (
    <div className="border-b border-[color:var(--ms-border)] bg-white">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-5 lg:px-8">
        <div className="flex items-center gap-3 py-2">
          <span className="flex-shrink-0 rounded-sm bg-red-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
            Breaking News
          </span>
          <Link
            href={`/${story.category}/${story.slug}`}
            className="min-w-0 flex-1 truncate text-[13px] text-[color:var(--ms-text)] hover:text-[color:var(--ms-accent)]"
          >
            {story.title}
          </Link>
          <div className="flex items-center gap-1 flex-shrink-0">
            <span className="text-[11px] text-[color:var(--ms-text-faint)]">{story.date}</span>
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-6 w-6 items-center justify-center rounded border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:text-[color:var(--ms-accent)]"
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-6 w-6 items-center justify-center rounded border border-[color:var(--ms-border)] text-[color:var(--ms-text-faint)] hover:text-[color:var(--ms-accent)]"
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}