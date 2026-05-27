"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ArticleParagraph from "../components/ArticleParagraph";
import CommentForm from "../components/CommentForm";
import AuthorCard from "./AuthorCard";
import NewsNavigation from "./NewsNavigation";
import RichContent from "./RichContent";

import type { NewsArticle } from "../lib/news";
import ShareBar from "./Sharebar";

interface Props {
  article: NewsArticle;
  navigationNews: NewsArticle[];
  relatedNews: NewsArticle[];
  popularNews: NewsArticle[];
}

/* ─────────────────────────────────────────────
   POPULAR NEWS ITEM
───────────────────────────────────────────── */
function PopularNewsItem({ item, index }: { item: NewsArticle; index: number }) {
  return (
    <li className="group">
      <Link href={`/${item.category}/${item.slug}`} className="flex items-start gap-3 py-3">
        <div className="relative h-[64px] w-[76px] flex-none overflow-hidden rounded-[4px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="76px"
          />
          <span className="absolute left-0 top-0 flex h-[18px] w-[18px] items-center justify-center bg-[color:var(--ms-accent)] font-[oswald] text-[10px] font-bold leading-none text-white">
            {index + 1}
          </span>
        </div>
        <div className="min-w-0 flex flex-col gap-[3px]">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[color:var(--ms-accent)]">
            {item.category}
          </span>
          <p className="ms-editorial-serif text-[13px] leading-[1.35] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors line-clamp-3">
            {item.title}
          </p>
          <span className="text-[10px] text-[color:var(--ms-text-faint)]">{item.date}</span>
        </div>
      </Link>
    </li>
  );
}

/* ─────────────────────────────────────────────
   RELATED SIDEBAR CARD
───────────────────────────────────────────── */
function RelatedSidebarCard({ item }: { item: NewsArticle }) {
  return (
    <Link
      href={`/${item.category}/${item.slug}`}
      className="group flex gap-3 py-3 first:pt-0 last:pb-0"
    >
      <div className="relative h-[72px] w-[88px] flex-shrink-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="88px"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--ms-accent)]">
          {item.category}&nbsp;·&nbsp;{item.date}
        </p>
        <h4 className="ms-editorial-serif mt-1 text-[14px] leading-[1.2] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors line-clamp-3">
          {item.title}
        </h4>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   RELATED BOTTOM CARD
───────────────────────────────────────────── */
function RelatedBottomCard({ item }: { item: NewsArticle }) {
  return (
    <Link href={`/${item.category}/${item.slug}`} className="group flex flex-col">
      <div className="relative aspect-[1.7/1] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="mt-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--ms-accent)]">
          {item.category}&nbsp;·&nbsp;{item.date}
        </p>
        <h4 className="ms-editorial-serif mt-1.5 text-[18px] leading-[1.2] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors">
          {item.title}
        </h4>
        <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-[color:var(--ms-text-soft)]">
          {item.shortdescription}
        </p>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   TAGS
───────────────────────────────────────────── */
function Tags({ keywords, category }: { keywords?: string[]; category: string }) {
  const tags = keywords?.slice(0, 6) ?? [category];
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-sm border border-[color:var(--ms-border)] px-3 py-1 text-[12px] text-[color:var(--ms-text-soft)] hover:border-[color:var(--ms-text-soft)] hover:text-[color:var(--ms-text)] transition-colors cursor-default"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TABLE OF CONTENTS
───────────────────────────────────────────── */
function TableOfContents({ sections }: { sections: Array<{ heading: string }> }) {
  const [open, setOpen] = useState(true);
  if (!sections.length) return null;
  return (
    <div className="my-6 overflow-hidden rounded-[4px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-3 text-left"
        aria-expanded={open}
      >
        <span className="font-[oswald] text-[13px] font-bold uppercase tracking-[0.18em] text-[color:var(--ms-text)]">
          Contents
        </span>
        <span className="select-none text-[18px] leading-none text-[color:var(--ms-text-faint)]">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <ol className="space-y-1 border-t border-[color:var(--ms-border)] px-5 py-3">
          {sections.map((s, i) => (
            <li key={s.heading} className="flex gap-2.5">
              <span className="mt-[3px] w-4 flex-none text-right text-[11px] font-bold text-[color:var(--ms-text-faint)]">
                {i + 1}.
              </span>
              <a
                href={`#section-${i}`}
                className="text-[13px] leading-6 text-[color:var(--ms-accent)] underline-offset-2 hover:underline"
              >
                {s.heading}
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   READING PROGRESS BAR
───────────────────────────────────────────── */
function ReadingProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const update = () => {
      const s = document.documentElement;
      const total = s.scrollHeight - s.clientHeight;
      bar.style.width = total > 0 ? `${Math.min(100, (s.scrollTop / total) * 100)}%` : "0%";
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed left-0 right-0 top-0 z-[9999] h-[3px] bg-[color:var(--ms-border)]">
      <div
        ref={barRef}
        className="h-full bg-[color:var(--ms-accent)]"
        style={{ width: "0%", transition: "width 80ms linear" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   KEY-POINTS STRIP
───────────────────────────────────────────── */
function KeyPointsStrip({ points }: { points: Array<{ label: string; value: string }> }) {
  if (!points.length) return null;
  return (
    <div className="my-5 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-[color:var(--ms-border)] bg-[color:var(--ms-border)] sm:grid-cols-3">
      {points.slice(0, 6).map((p) => (
        <div key={p.label} className="bg-[color:var(--ms-surface)] px-4 py-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--ms-text-faint)]">{p.label}</p>
          <p className="mt-1 text-[13px] font-medium leading-5 text-[color:var(--ms-text)]">{p.value}</p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SIDEBAR CONTENT
───────────────────────────────────────────── */
function SidebarContent({
  popularNews,
  relatedNews,
}: {
  popularNews: NewsArticle[];
  relatedNews: NewsArticle[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="border border-[color:var(--ms-border)] rounded-md">
        <div className="border-b border-[color:var(--ms-border)] px-4 py-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">Most Read</p>
          <h2 className="mt-0.5 font-[oswald] text-[18px] font-bold uppercase leading-none tracking-tight text-[color:var(--ms-text)]">Popular News</h2>
        </div>
        <ol className="divide-y divide-[color:var(--ms-border)] px-4">
          {popularNews.slice(0, 5).map((item, index) => (
            <PopularNewsItem key={item.slug} item={item} index={index} />
          ))}
        </ol>
      </div>

      {/* {relatedNews.length > 0 && (
        <div className="border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)]">
          <div className="border-b border-[color:var(--ms-border)] px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">Further Reading</p>
            <h2 className="mt-0.5 font-[oswald] text-[18px] font-bold uppercase leading-none tracking-tight text-[color:var(--ms-text)]">Related Analysis</h2>
          </div>
          <div className="divide-y divide-[color:var(--ms-border)] px-4">
            {relatedNews.slice(0, 3).map((item) => (
              <RelatedSidebarCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      )} */}

       <div className="flex min-h-[450px] flex-col justify-center bg-[color:var(--ms-footer-bg)] p-5 text-[color:var(--ms-footer-text)]">
          <p className="ms-editorial-serif text-[28px] leading-[1.1] tracking-[-0.03em] text-white">Insight. Analysis. Impact.</p>
          <p className="mt-3 text-[13px] leading-6 text-[color:var(--ms-footer-muted)]">Independent journalism that informs decisions.</p>
          <a href="/about" className="ms-meta mt-5 inline-block rounded-sm bg-white px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--ms-accent)] hover:bg-[color:var(--ms-accent-soft)] transition-colors text-center">Subscribe Now</a>
          </div>
        </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   STICKY SIDEBAR — correct approach

   Uses a COLUMN WRAPPER div that is position:relative and spans
   the full height of the article. Inside it, the sidebar uses
   position:sticky. The column wrapper height = article height
   so sticky has the correct scroll container to work within.

   The entire layout uses CSS Grid with align-items:start so the
   right column does NOT stretch to match the left column height
   — instead each column is naturally sized to its own content.

   BUT — we then use a JS observer to manually set the right
   column's height equal to the left column's height so that
   sticky has the correct bounding parent to scroll within.
   This is the missing piece that makes sticky work even when
   overflow ancestors exist.
──────────────────────────────────────────────────────────────── */
function StickySidebarColumn({
  popularNews,
  relatedNews,
  articleRef,
}: {
  popularNews: NewsArticle[];
  relatedNews: NewsArticle[];
  articleRef: React.RefObject<HTMLElement | null>;
}) {
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const column = columnRef.current;
    const article = articleRef.current;
    if (!column || !article) return;

    // Set column height = article height so sticky has room to scroll
    const sync = () => {
      column.style.height = `${article.offsetHeight}px`;
    };

    sync();

    // Keep in sync if article height changes (images load, etc.)
    const ro = new ResizeObserver(sync);
    ro.observe(article);
    return () => ro.disconnect();
  }, [articleRef]);

  return (
    /*
      This column wrapper:
      - width: 300px, fixed
      - height: set by JS to match article height
      - position: relative — required so sticky child has a bounded parent
      - overflow: visible — NEVER set overflow here, it breaks sticky
    */
    <div
      ref={columnRef}
      className="hidden lg:block w-[300px] flex-none relative"
      style={{ height: 0 /* overridden by JS */ }}
    >
      {/*
        The actual sticky element:
        - position: sticky, top: 16px
        - It travels from top of column to (column height - sidebar height)
        - Because column height = article height, it sticks until article ends
      */}
      <div className="sticky top-4">
        <SidebarContent popularNews={popularNews} relatedNews={relatedNews} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN DETAIL SECTION
───────────────────────────────────────────── */
export default function DetailSection({
  article,
  navigationNews,
  relatedNews,
  popularNews,
}: Props) {
  const isLongform = Boolean(
    article.storyBlocks?.length || (article.sections && article.sections.length > 3),
  );
  const tocSections = article.sections ?? [];
  const articleRef = useRef<HTMLElement>(null);

  return (
    <>
      <ReadingProgressBar />

      <div className="mt-4 md:mt-6 ">
        {/* Breadcrumb */}
        <nav className="mb-4 text-[13px] text-[color:var(--ms-text-faint)]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-[color:var(--ms-accent)] transition-colors">Home</Link></li>
            <li><span>›</span></li>
            <li><Link href={`/${article.category}`} className="capitalize transition-colors hover:text-[color:var(--ms-accent)]">{article.category}</Link></li>
            <li><span>›</span></li>
            <li className="line-clamp-1 text-[color:var(--ms-text)]">{article.title}</li>
          </ol>
        </nav>

        {/*
          OUTER LAYOUT:
          flex row — left article grows, right column is 300px fixed.
          NO overflow on this or any ancestor.
          The right column height is controlled by JS (ResizeObserver)
          to always match the article height, giving sticky its bounds.
        */}
        <div className="lg:flex lg:gap-6">

          {/* ═══════════ LEFT — Article ═══════════ */}
          <article ref={articleRef} className="min-w-0 flex-1">

            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-2">
              <Link
                href={`/${article.category}`}
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--ms-accent)] transition-opacity hover:opacity-80"
              >
                {article.category}
              </Link>
              <span className="text-[11px] text-[color:var(--ms-text-faint)]">·</span>
              <span className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--ms-text-faint)]">{article.date}</span>
              {isLongform && (
                <>
                  <span className="text-[11px] text-[color:var(--ms-text-faint)]">·</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--ms-accent)]">Longform</span>
                </>
              )}
            </div>

            {/* Headline */}
            <div className="border-y-2 border-[color:var(--ms-text)] py-4">
              <h1 className="ms-editorial-serif text-[32px] leading-[1.04] tracking-[-0.03em] text-[color:var(--ms-text)] sm:text-[38px] lg:text-[42px] xl:text-[46px]">
                {article.title}
              </h1>
              <p className="mt-3 max-w-[72ch] text-[16px] italic leading-[1.7] text-[color:var(--ms-text-soft)] sm:text-[17px]">
                {article.metaDescription ?? article.shortdescription}
              </p>
            </div>

            {/* Byline */}
            <div className="border-b border-[color:var(--ms-border)] py-2.5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {article.authorImage && (
                    <Link href={`/our-team/${article.authorslug}/`}>
                      <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full border border-[color:var(--ms-border)]">
                        <Image src={article.authorImage} alt={article.author} fill className="object-cover" sizes="36px" />
                      </div>
                    </Link>
                  )}
                  <div>
                    <p className="text-[12px] font-semibold leading-none text-[color:var(--ms-text)]">
                      <span className="font-normal text-[color:var(--ms-text-faint)]">By </span>
                      <Link href={`/our-team/${article.authorslug}/`} className="transition-colors hover:text-[color:var(--ms-accent)]">{article.author}</Link>
                    </p>
                    <p className="mt-0.5 text-[11px] text-[color:var(--ms-text-faint)]">
                      {article.role}&nbsp;&nbsp;|&nbsp;&nbsp;{article.date}&nbsp;&nbsp;|&nbsp;&nbsp;6 min read
                    </p>
                  </div>
                </div>
                <ShareBar title={article.title} category={article.category} slug={article.slug} />
              </div>
            </div>

            {/* Key points */}
            {isLongform && article.keyPoints?.length ? <KeyPointsStrip points={article.keyPoints} /> : null}

            {/* Hero */}
            <div className={isLongform ? "mt-4" : "mt-5"}>
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image src={article.image} alt={article.title} fill priority className="object-cover" sizes="(max-width: 1280px) 100vw, 860px" />
              </div>
              {article.imageCaption && (
                <p className="mt-2 border-b border-[color:var(--ms-border)] pb-3 text-[11px] italic leading-5 text-[color:var(--ms-text-faint)]">
                  {article.imageCaption}&nbsp;<span className="not-italic font-medium">| Source: Mirror Standard</span>
                </p>
              )}
            </div>

            {/* TOC */}
            {isLongform && tocSections.length > 2 && !article.storyBlocks?.length && (
              <TableOfContents sections={tocSections} />
            )}

            {/* Reviewed-by */}
            {article.reviewedByName && (
              <div className="mb-2 mt-4 flex items-center gap-2 rounded-[4px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] px-4 py-2.5">
                <svg className="h-3.5 w-3.5 flex-none text-[color:var(--ms-accent)]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.354 5.646l-4 4a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.707L7 9.586l3.646-3.647a.5.5 0 01.708.707z" />
                </svg>
                <p className="text-[11px] text-[color:var(--ms-text-faint)]">
                  Reviewed by{" "}
                  {article.reviewedByUrl ? (
                    <Link href={article.reviewedByUrl} className="font-semibold text-[color:var(--ms-text)] transition-colors hover:text-[color:var(--ms-accent)]">{article.reviewedByName}</Link>
                  ) : (
                    <span className="font-semibold text-[color:var(--ms-text)]">{article.reviewedByName}</span>
                  )}
                </p>
              </div>
            )}

            {/* Body */}
            <div className="mt-6">
              {article.sections?.length || article.storyBlocks?.length ? (
                <RichContent
                  keyPoints={!isLongform ? article.keyPoints : undefined}
                  sections={article.sections}
                  storyBlocks={article.storyBlocks}
                  sourceNotes={article.sourceNotes}
                  faq={article.faq}
                  relatedResources={article.relatedResources}
                  correctionNote={article.correctionNote}
                />
              ) : (
                <ArticleParagraph data={article} />
              )}
            </div>

            {/* Tags */}
            {(article.keywords?.length || article.category) && (
              <div className="mt-8 border-t border-[color:var(--ms-border)] pt-6">
                <Tags keywords={article.keywords} category={article.category} />
              </div>
            )}

            {/* Author card */}
            <div className="mt-8">
              <AuthorCard
                author={article.author}
                role={article.role}
                articleTitle={article.title}
                reddit={article.reddit}
                medium={article.medium}
                quora={article.quora}
                substack={article.substack}
              />
            </div>

            {/* Prev / Next */}
            <div className="mt-8">
              <NewsNavigation data={navigationNews} />
            </div>

            {/* Related bottom */}
            {relatedNews.length > 0 && (
              <div className="mt-10 border-t border-[color:var(--ms-border)] pt-6">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
                  More From {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                </p>
                <h2 className="mb-5 font-[oswald] text-[22px] font-bold uppercase leading-none tracking-tight text-[color:var(--ms-text)]">
                  Related Analysis
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {relatedNews.slice(0, 3).map((item) => (
                    <RelatedBottomCard key={item.slug} item={item} />
                  ))}
                </div>
              </div>
            )}

            {/* Comments */}
            {article.allowComments !== false && (
              <div className="mt-8">
                <CommentForm />
              </div>
            )}
          </article>

          {/* ═══════════ RIGHT — Sticky sidebar ═══════════
              Height is set by JS ResizeObserver to match
              the article height, giving sticky its bounds.
              overflow:visible is critical — never change it.
          ═══════════════════════════════════════════════ */}
          <StickySidebarColumn
            popularNews={popularNews}
            relatedNews={relatedNews}
            articleRef={articleRef}
          />

        </div>

        {/* Mobile sidebar */}
        <div className="mt-10 border-t border-[color:var(--ms-border)] pt-8 lg:hidden">
          <SidebarContent popularNews={popularNews} relatedNews={relatedNews} />
        </div>

      </div>
    </>
  );
}