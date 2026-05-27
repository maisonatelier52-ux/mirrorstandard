import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  image: string;
  date: string;
}

interface Props {
  data: NewsData[];
}

const NewsNavigation: FC<Props> = ({ data }) => {
  const prevPost = data[0];
  const nextPost = data[1];

  if (!prevPost && !nextPost) return null;

  return (
    <div className="border-t border-[color:var(--ms-border)] pt-8">
      {/* Section label */}
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-[color:var(--ms-border)]" />
        <p className="font-[oswald] text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--ms-text-faint)]">
          Continue Reading
        </p>
        <span className="h-px flex-1 bg-[color:var(--ms-border)]" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

        {/* ── PREVIOUS POST ── */}
        {prevPost ? (
           <Link
            href={`/${prevPost.category}/${prevPost.slug}`}
            className="group flex flex-col gap-1.5 border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] px-4 py-4 transition-all hover:border-[color:var(--ms-accent)] rounded-md"
          >
            <div className="flex items-center gap-1.5">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="flex-none text-[color:var(--ms-accent)]">
                <path d="M5 1L1 5m0 0l4 4M1 5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--ms-text-faint)]">Previous</span>
            </div>
            <p className="ms-editorial-serif text-[15px] font-bold leading-[1.25] tracking-[-0.01em] text-[color:var(--ms-text)] line-clamp-2 group-hover:text-[color:var(--ms-accent)] transition-colors">
              {prevPost.title}
            </p>
            <span className="text-[10px] uppercase tracking-[0.12em] text-[color:var(--ms-text-faint)]">
              {prevPost.category}&nbsp;·&nbsp;{prevPost.date}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* ── NEXT POST ── */}
        {nextPost ? (
           <Link
            href={`/${nextPost.category}/${nextPost.slug}`}
            className="group flex flex-col gap-1.5 border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] px-4 py-4 text-right transition-all hover:border-[color:var(--ms-accent)] rounded-md"
          >
            <div className="flex items-center justify-end gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--ms-text-faint)]">Next</span>
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="flex-none text-[color:var(--ms-accent)]">
                <path d="M7 1l4 4m0 0l-4 4M11 5H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="ms-editorial-serif text-[15px] font-bold leading-[1.25] tracking-[-0.01em] text-[color:var(--ms-text)] line-clamp-2 group-hover:text-[color:var(--ms-accent)] transition-colors">
              {nextPost.title}
            </p>
            <span className="text-[10px] uppercase tracking-[0.12em] text-[color:var(--ms-text-faint)]">
              {nextPost.category}&nbsp;·&nbsp;{nextPost.date}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

      </div>
    </div>
  );
};

export default NewsNavigation;