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
      <Link
        href={`/${item.category}/${item.slug}`}
        title={item.title}
        className="flex items-start gap-3 py-3"
      >
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
      title={item.title}
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
        <h3 className="ms-editorial-serif mt-1 text-[14px] leading-[1.2] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors line-clamp-3">
          {item.title}
        </h3>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   RELATED BOTTOM CARD
───────────────────────────────────────────── */
function RelatedBottomCard({ item }: { item: NewsArticle }) {
  return (
    <Link href={`/${item.category}/${item.slug}`} title={item.title} className="group flex flex-col">
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
        <h3 className="ms-editorial-serif mt-1.5 text-[18px] leading-[1.2] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors">
          {item.title}
        </h3>
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
                title={s.heading}
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
  variant = "desktop",
}: {
  popularNews: NewsArticle[];
  relatedNews: NewsArticle[];
  variant?: "desktop" | "mobile";
}) {
  const heading = variant === "mobile" ? "Popular Stories" : "Popular News";

  return (
    <div className="flex flex-col gap-4">
      <div className="border border-[color:var(--ms-border)] rounded-md">
        <div className="border-b border-[color:var(--ms-border)] px-4 py-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">Most Read</p>
          <h2 className="mt-0.5 font-[oswald] text-[18px] font-bold uppercase leading-none tracking-tight text-[color:var(--ms-text)]">
            {heading}
          </h2>
        </div>
        <ol className="divide-y divide-[color:var(--ms-border)] px-4">
          {popularNews.slice(0, 5).map((item, index) => (
            <PopularNewsItem key={item.slug} item={item} index={index} />
          ))}
        </ol>
      </div>

      <div className="flex min-h-[450px] flex-col justify-center bg-[color:var(--ms-footer-bg)] p-5 text-[color:var(--ms-footer-text)]">
        <p className="ms-editorial-serif text-[28px] leading-[1.1] tracking-[-0.03em] text-white">Insight. Analysis. Impact.</p>
        <p className="mt-3 text-[13px] leading-6 text-[color:var(--ms-footer-muted)]">Independent journalism that informs decisions.</p>
        <a
          href="/about"
          title="Subscribe to Mirror Standard"
          className="ms-meta mt-5 inline-block rounded-sm bg-white px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--ms-accent)] hover:bg-[color:var(--ms-accent-soft)] transition-colors text-center"
        >
          Subscribe Now
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STICKY SIDEBAR COLUMN
───────────────────────────────────────────── */
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

    const sync = () => {
      column.style.height = `${article.offsetHeight}px`;
    };

    sync();

    const ro = new ResizeObserver(sync);
    ro.observe(article);
    return () => ro.disconnect();
  }, [articleRef]);

  return (
    <div
      ref={columnRef}
      className="hidden lg:block w-[300px] flex-none relative"
      style={{ height: 0 }}
    >
      <div className="sticky top-4">
        <SidebarContent popularNews={popularNews} relatedNews={relatedNews} variant="desktop" />
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

  const categoryLabel = article.category.charAt(0).toUpperCase() + article.category.slice(1);

  const siteUrl = "https://www.mirrorstandard.com";
  const articleUrl = `${siteUrl}/${article.category}/${article.slug}/`;
  const imageUrl = article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`;

  return (
    <>
      <ReadingProgressBar />

      <div className="mt-4 md:mt-6">

        {/* ── Breadcrumb with BreadcrumbList microdata ── */}
        <nav
          aria-label="Breadcrumb"
          className="mb-4 text-[13px] text-[color:var(--ms-text-faint)]"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <Link
                href="/"
                title="Mirror Standard Home"
                itemProp="item"
                className="hover:text-[color:var(--ms-accent)] transition-colors"
              >
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true"><span>›</span></li>
            <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <Link
                href={`/${article.category}`}
                title={`${categoryLabel} news`}
                itemProp="item"
                className="capitalize transition-colors hover:text-[color:var(--ms-accent)]"
              >
                <span itemProp="name">{article.category}</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden="true"><span>›</span></li>
            <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <span itemProp="name" className="line-clamp-1 text-[color:var(--ms-text)]">
                {article.title}
              </span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        <div className="lg:flex lg:gap-6">

          {/* ═══════════ LEFT — Article with NewsArticle microdata ═══════════ */}
          <article
            ref={articleRef}
            className="min-w-0 flex-1"
            itemScope
            itemType="https://schema.org/NewsArticle"
          >
            {/*
              Hidden meta tags supplying microdata properties that have
              no visible element to attach to. Crawlers read these even
              though they are invisible to users.
            */}
            <meta itemProp="url" content={articleUrl} />
            <meta itemProp="mainEntityOfPage" content={articleUrl} />
            <meta itemProp="datePublished" content={article.date} />
            {article.updatedAt && <meta itemProp="dateModified" content={article.updatedAt} />}
            <meta itemProp="articleSection" content={article.category} />
            {article.keywords?.map((kw) => (
              <meta key={kw} itemProp="keywords" content={kw} />
            ))}

            {/* Publisher — hidden span with Organization microdata */}
            <span
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
              className="hidden"
              aria-hidden="true"
            >
              <meta itemProp="name" content="Mirror Standard" />
              <meta itemProp="url" content={siteUrl} />
              <span itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                <meta itemProp="url" content={`${siteUrl}/images/mirrorstandard-logo.webp`} />
              </span>
            </span>

            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-2">
              <Link
                href={`/${article.category}`}
                title={`${categoryLabel} news`}
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

            {/* Headline — itemProp="headline" on H1 */}
            <div className="border-y-2 border-[color:var(--ms-text)] py-4">
              <h1
                className="ms-editorial-serif text-[32px] leading-[1.04] tracking-[-0.03em] text-[color:var(--ms-text)] sm:text-[38px] lg:text-[42px] xl:text-[46px]"
                itemProp="headline"
              >
                {article.title}
              </h1>
              <p
                className="mt-3 max-w-[72ch] text-[16px] italic leading-[1.7] text-[color:var(--ms-text-soft)] sm:text-[17px]"
                itemProp="description"
              >
                {article.metaDescription ?? article.shortdescription}
              </p>
            </div>

            {/* Byline — itemProp="author" with Person microdata */}
            <div className="border-b border-[color:var(--ms-border)] py-2.5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                  className="flex items-center gap-2.5"
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  {article.authorImage && (
                    <Link
                      href={`/our-team/${article.authorslug}/`}
                      title={`About ${article.author}`}
                      itemProp="url"
                    >
                      <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full border border-[color:var(--ms-border)]">
                        <Image
                          src={article.authorImage}
                          alt={article.author}
                          fill
                          className="object-cover"
                          sizes="36px"
                        />
                      </div>
                    </Link>
                  )}
                  <div>
                    <p className="text-[12px] font-semibold leading-none text-[color:var(--ms-text)]">
                      <span className="font-normal text-[color:var(--ms-text-faint)]">By </span>
                      <Link
                        href={`/our-team/${article.authorslug}/`}
                        title={`About ${article.author}`}
                        className="transition-colors hover:text-[color:var(--ms-accent)]"
                        itemProp="url"
                      >
                        <span itemProp="name">{article.author}</span>
                      </Link>
                    </p>
                    <p className="mt-0.5 text-[11px] text-[color:var(--ms-text-faint)]">
                      <span itemProp="jobTitle">{article.role}</span>
                      &nbsp;&nbsp;|&nbsp;&nbsp;{article.date}&nbsp;&nbsp;|&nbsp;&nbsp;6 min read
                    </p>
                  </div>
                </div>
                <ShareBar title={article.title} category={article.category} slug={article.slug} />
              </div>
            </div>

            {/* Key points */}
            {isLongform && article.keyPoints?.length ? <KeyPointsStrip points={article.keyPoints} /> : null}

            {/* Hero image — itemProp="image" with ImageObject microdata */}
            <div className={isLongform ? "mt-4" : "mt-5"}>
              <div
                className="relative aspect-[16/9] w-full overflow-hidden"
                itemProp="image"
                itemScope
                itemType="https://schema.org/ImageObject"
              >
                <meta itemProp="url" content={imageUrl} />
                <meta itemProp="width" content="1200" />
                <meta itemProp="height" content="675" />
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 860px"
                />
              </div>
              {article.imageCaption && (
                <p
                  className="mt-2 border-b border-[color:var(--ms-border)] pb-3 text-[11px] italic leading-5 text-[color:var(--ms-text-faint)]"
                  itemProp="caption"
                >
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
                    <Link
                      href={article.reviewedByUrl}
                      title={`Reviewed by ${article.reviewedByName}`}
                      className="font-semibold text-[color:var(--ms-text)] transition-colors hover:text-[color:var(--ms-accent)]"
                    >
                      {article.reviewedByName}
                    </Link>
                  ) : (
                    <span className="font-semibold text-[color:var(--ms-text)]">{article.reviewedByName}</span>
                  )}
                </p>
              </div>
            )}

            {/* Body — itemProp="articleBody" */}
            <div className="mt-6" itemProp="articleBody">
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
                  More From {categoryLabel}
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

          {/* ═══════════ RIGHT — Sticky sidebar ═══════════ */}
          <StickySidebarColumn
            popularNews={popularNews}
            relatedNews={relatedNews}
            articleRef={articleRef}
          />
        </div>

        {/* Mobile sidebar — "Popular Stories" to avoid duplicate H2 */}
        <div className="mt-10 border-t border-[color:var(--ms-border)] pt-8 lg:hidden">
          <SidebarContent popularNews={popularNews} relatedNews={relatedNews} variant="mobile" />
        </div>

      </div>
    </>
  );
}
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import ArticleParagraph from "../components/ArticleParagraph";
// import CommentForm from "../components/CommentForm";
// import AuthorCard from "./AuthorCard";
// import NewsNavigation from "./NewsNavigation";
// import RichContent from "./RichContent";

// import type { NewsArticle } from "../lib/news";
// import ShareBar from "./Sharebar";

// interface Props {
//   article: NewsArticle;
//   navigationNews: NewsArticle[];
//   relatedNews: NewsArticle[];
//   popularNews: NewsArticle[];
// }

// /* ─────────────────────────────────────────────
//    POPULAR NEWS ITEM
// ───────────────────────────────────────────── */
// function PopularNewsItem({ item, index }: { item: NewsArticle; index: number }) {
//   return (
//     <li className="group">
//       {/* SEO FIX: added title attribute */}
//       <Link
//         href={`/${item.category}/${item.slug}`}
//         title={item.title}
//         className="flex items-start gap-3 py-3"
//       >
//         <div className="relative h-[64px] w-[76px] flex-none overflow-hidden rounded-[4px]">
//           <Image
//             src={item.image}
//             alt={item.title}
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-105"
//             sizes="76px"
//           />
//           <span className="absolute left-0 top-0 flex h-[18px] w-[18px] items-center justify-center bg-[color:var(--ms-accent)] font-[oswald] text-[10px] font-bold leading-none text-white">
//             {index + 1}
//           </span>
//         </div>
//         <div className="min-w-0 flex flex-col gap-[3px]">
//           <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[color:var(--ms-accent)]">
//             {item.category}
//           </span>
//           <p className="ms-editorial-serif text-[13px] leading-[1.35] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors line-clamp-3">
//             {item.title}
//           </p>
//           <span className="text-[10px] text-[color:var(--ms-text-faint)]">{item.date}</span>
//         </div>
//       </Link>
//     </li>
//   );
// }

// /* ─────────────────────────────────────────────
//    RELATED SIDEBAR CARD
// ───────────────────────────────────────────── */
// function RelatedSidebarCard({ item }: { item: NewsArticle }) {
//   return (
//     // SEO FIX: added title attribute
//     <Link
//       href={`/${item.category}/${item.slug}`}
//       title={item.title}
//       className="group flex gap-3 py-3 first:pt-0 last:pb-0"
//     >
//       <div className="relative h-[72px] w-[88px] flex-shrink-0 overflow-hidden">
//         <Image
//           src={item.image}
//           alt={item.title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//           sizes="88px"
//         />
//       </div>
//       <div className="flex flex-col justify-center">
//         <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--ms-accent)]">
//           {item.category}&nbsp;·&nbsp;{item.date}
//         </p>
//         {/* SEO FIX: h4 → h3 to avoid skipping heading levels */}
//         <h3 className="ms-editorial-serif mt-1 text-[14px] leading-[1.2] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors line-clamp-3">
//           {item.title}
//         </h3>
//       </div>
//     </Link>
//   );
// }

// /* ─────────────────────────────────────────────
//    RELATED BOTTOM CARD
//    SEO FIX: changed h4 → h3 (was skipping h2→h4, violating heading order)
// ───────────────────────────────────────────── */
// function RelatedBottomCard({ item }: { item: NewsArticle }) {
//   return (
//     // SEO FIX: added title attribute
//     <Link href={`/${item.category}/${item.slug}`} title={item.title} className="group flex flex-col">
//       <div className="relative aspect-[1.7/1] w-full overflow-hidden">
//         <Image
//           src={item.image}
//           alt={item.title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//           sizes="(max-width: 768px) 100vw, 33vw"
//         />
//       </div>
//       <div className="mt-3">
//         <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--ms-accent)]">
//           {item.category}&nbsp;·&nbsp;{item.date}
//         </p>
//         {/* SEO FIX: h4 → h3 */}
//         <h3 className="ms-editorial-serif mt-1.5 text-[18px] leading-[1.2] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)] transition-colors">
//           {item.title}
//         </h3>
//         <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-[color:var(--ms-text-soft)]">
//           {item.shortdescription}
//         </p>
//       </div>
//     </Link>
//   );
// }

// /* ─────────────────────────────────────────────
//    TAGS
// ───────────────────────────────────────────── */
// function Tags({ keywords, category }: { keywords?: string[]; category: string }) {
//   const tags = keywords?.slice(0, 6) ?? [category];
//   return (
//     <div className="flex flex-wrap gap-2">
//       {tags.map((tag) => (
//         <span
//           key={tag}
//           className="rounded-sm border border-[color:var(--ms-border)] px-3 py-1 text-[12px] text-[color:var(--ms-text-soft)] hover:border-[color:var(--ms-text-soft)] hover:text-[color:var(--ms-text)] transition-colors cursor-default"
//         >
//           {tag}
//         </span>
//       ))}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    TABLE OF CONTENTS
// ───────────────────────────────────────────── */
// function TableOfContents({ sections }: { sections: Array<{ heading: string }> }) {
//   const [open, setOpen] = useState(true);
//   if (!sections.length) return null;
//   return (
//     <div className="my-6 overflow-hidden rounded-[4px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)]">
//       <button
//         onClick={() => setOpen((v) => !v)}
//         className="flex w-full items-center justify-between px-5 py-3 text-left"
//         aria-expanded={open}
//       >
//         <span className="font-[oswald] text-[13px] font-bold uppercase tracking-[0.18em] text-[color:var(--ms-text)]">
//           Contents
//         </span>
//         <span className="select-none text-[18px] leading-none text-[color:var(--ms-text-faint)]">
//           {open ? "−" : "+"}
//         </span>
//       </button>
//       {open && (
//         <ol className="space-y-1 border-t border-[color:var(--ms-border)] px-5 py-3">
//           {sections.map((s, i) => (
//             <li key={s.heading} className="flex gap-2.5">
//               <span className="mt-[3px] w-4 flex-none text-right text-[11px] font-bold text-[color:var(--ms-text-faint)]">
//                 {i + 1}.
//               </span>
//               <a
//                 href={`#section-${i}`}
//                 title={s.heading}
//                 className="text-[13px] leading-6 text-[color:var(--ms-accent)] underline-offset-2 hover:underline"
//               >
//                 {s.heading}
//               </a>
//             </li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    READING PROGRESS BAR
// ───────────────────────────────────────────── */
// function ReadingProgressBar() {
//   const barRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const bar = barRef.current;
//     if (!bar) return;
//     const update = () => {
//       const s = document.documentElement;
//       const total = s.scrollHeight - s.clientHeight;
//       bar.style.width = total > 0 ? `${Math.min(100, (s.scrollTop / total) * 100)}%` : "0%";
//     };
//     window.addEventListener("scroll", update, { passive: true });
//     return () => window.removeEventListener("scroll", update);
//   }, []);
//   return (
//     <div className="fixed left-0 right-0 top-0 z-[9999] h-[3px] bg-[color:var(--ms-border)]">
//       <div
//         ref={barRef}
//         className="h-full bg-[color:var(--ms-accent)]"
//         style={{ width: "0%", transition: "width 80ms linear" }}
//       />
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    KEY-POINTS STRIP
// ───────────────────────────────────────────── */
// function KeyPointsStrip({ points }: { points: Array<{ label: string; value: string }> }) {
//   if (!points.length) return null;
//   return (
//     <div className="my-5 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-[color:var(--ms-border)] bg-[color:var(--ms-border)] sm:grid-cols-3">
//       {points.slice(0, 6).map((p) => (
//         <div key={p.label} className="bg-[color:var(--ms-surface)] px-4 py-3">
//           <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--ms-text-faint)]">{p.label}</p>
//           <p className="mt-1 text-[13px] font-medium leading-5 text-[color:var(--ms-text)]">{p.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    SIDEBAR CONTENT
//    SEO FIX: accepts an "id" prop so desktop and mobile render
//    unique H2 text — prevents duplicate <h2> warnings.
//    Desktop: "Popular News" | Mobile: "Popular Stories"
// ───────────────────────────────────────────── */
// function SidebarContent({
//   popularNews,
//   relatedNews,
//   variant = "desktop",
// }: {
//   popularNews: NewsArticle[];
//   relatedNews: NewsArticle[];
//   /** "desktop" renders "Popular News"; "mobile" renders "Popular Stories"
//    *  so Google never sees two identical H2s on the same page. */
//   variant?: "desktop" | "mobile";
// }) {
//   const heading = variant === "mobile" ? "Popular Stories" : "Popular News";

//   return (
//     <div className="flex flex-col gap-4">
//       <div className="border border-[color:var(--ms-border)] rounded-md">
//         <div className="border-b border-[color:var(--ms-border)] px-4 py-3">
//           <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">Most Read</p>
//           {/* SEO FIX: unique H2 per variant — no more duplicate H2s */}
//           <h2 className="mt-0.5 font-[oswald] text-[18px] font-bold uppercase leading-none tracking-tight text-[color:var(--ms-text)]">
//             {heading}
//           </h2>
//         </div>
//         <ol className="divide-y divide-[color:var(--ms-border)] px-4">
//           {popularNews.slice(0, 5).map((item, index) => (
//             <PopularNewsItem key={item.slug} item={item} index={index} />
//           ))}
//         </ol>
//       </div>

//       <div className="flex min-h-[450px] flex-col justify-center bg-[color:var(--ms-footer-bg)] p-5 text-[color:var(--ms-footer-text)]">
//         <p className="ms-editorial-serif text-[28px] leading-[1.1] tracking-[-0.03em] text-white">Insight. Analysis. Impact.</p>
//         <p className="mt-3 text-[13px] leading-6 text-[color:var(--ms-footer-muted)]">Independent journalism that informs decisions.</p>
//         {/* SEO FIX: added title attribute */}
//         <a
//           href="/about"
//           title="Subscribe to Mirror Standard"
//           className="ms-meta mt-5 inline-block rounded-sm bg-white px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--ms-accent)] hover:bg-[color:var(--ms-accent-soft)] transition-colors text-center"
//         >
//           Subscribe Now
//         </a>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    STICKY SIDEBAR COLUMN
// ───────────────────────────────────────────── */
// function StickySidebarColumn({
//   popularNews,
//   relatedNews,
//   articleRef,
// }: {
//   popularNews: NewsArticle[];
//   relatedNews: NewsArticle[];
//   articleRef: React.RefObject<HTMLElement | null>;
// }) {
//   const columnRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const column = columnRef.current;
//     const article = articleRef.current;
//     if (!column || !article) return;

//     const sync = () => {
//       column.style.height = `${article.offsetHeight}px`;
//     };

//     sync();

//     const ro = new ResizeObserver(sync);
//     ro.observe(article);
//     return () => ro.disconnect();
//   }, [articleRef]);

//   return (
//     <div
//       ref={columnRef}
//       className="hidden lg:block w-[300px] flex-none relative"
//       style={{ height: 0 }}
//     >
//       <div className="sticky top-4">
//         {/* variant="desktop" → H2 = "Popular News" */}
//         <SidebarContent popularNews={popularNews} relatedNews={relatedNews} variant="desktop" />
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    MAIN DETAIL SECTION
// ───────────────────────────────────────────── */
// export default function DetailSection({
//   article,
//   navigationNews,
//   relatedNews,
//   popularNews,
// }: Props) {
//   const isLongform = Boolean(
//     article.storyBlocks?.length || (article.sections && article.sections.length > 3),
//   );
//   const tocSections = article.sections ?? [];
//   const articleRef = useRef<HTMLElement>(null);

//   const categoryLabel = article.category.charAt(0).toUpperCase() + article.category.slice(1);

//   return (
//     <>
//       <ReadingProgressBar />

//       <div className="mt-4 md:mt-6">
//         {/* Breadcrumb */}
//         <nav className="mb-4 text-[13px] text-[color:var(--ms-text-faint)]" aria-label="Breadcrumb">
//           <ol className="flex flex-wrap items-center gap-1.5">
//             <li>
//               {/* SEO FIX: title on all nav links */}
//               <Link href="/" title="Mirror Standard Home" className="hover:text-[color:var(--ms-accent)] transition-colors">Home</Link>
//             </li>
//             <li><span>›</span></li>
//             <li>
//               <Link
//                 href={`/${article.category}`}
//                 title={`${categoryLabel} news`}
//                 className="capitalize transition-colors hover:text-[color:var(--ms-accent)]"
//               >
//                 {article.category}
//               </Link>
//             </li>
//             <li><span>›</span></li>
//             <li className="line-clamp-1 text-[color:var(--ms-text)]">{article.title}</li>
//           </ol>
//         </nav>

//         <div className="lg:flex lg:gap-6">

//           {/* ═══════════ LEFT — Article ═══════════ */}
//           <article ref={articleRef} className="min-w-0 flex-1">

//             {/* Eyebrow */}
//             <div className="mb-3 flex items-center gap-2">
//               {/* SEO FIX: title attribute */}
//               <Link
//                 href={`/${article.category}`}
//                 title={`${categoryLabel} news`}
//                 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--ms-accent)] transition-opacity hover:opacity-80"
//               >
//                 {article.category}
//               </Link>
//               <span className="text-[11px] text-[color:var(--ms-text-faint)]">·</span>
//               <span className="text-[11px] uppercase tracking-[0.1em] text-[color:var(--ms-text-faint)]">{article.date}</span>
//               {isLongform && (
//                 <>
//                   <span className="text-[11px] text-[color:var(--ms-text-faint)]">·</span>
//                   <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--ms-accent)]">Longform</span>
//                 </>
//               )}
//             </div>

//             {/* Headline — H1 */}
//             <div className="border-y-2 border-[color:var(--ms-text)] py-4">
//               <h1 className="ms-editorial-serif text-[32px] leading-[1.04] tracking-[-0.03em] text-[color:var(--ms-text)] sm:text-[38px] lg:text-[42px] xl:text-[46px]">
//                 {article.title}
//               </h1>
//               <p className="mt-3 max-w-[72ch] text-[16px] italic leading-[1.7] text-[color:var(--ms-text-soft)] sm:text-[17px]">
//                 {article.metaDescription ?? article.shortdescription}
//               </p>
//             </div>

//             {/* Byline */}
//             <div className="border-b border-[color:var(--ms-border)] py-2.5">
//               <div className="flex flex-wrap items-center justify-between gap-3">
//                 <div className="flex items-center gap-2.5">
//                   {article.authorImage && (
//                     // SEO FIX: title attribute on author image link
//                     <Link href={`/our-team/${article.authorslug}/`} title={`About ${article.author}`}>
//                       <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full border border-[color:var(--ms-border)]">
//                         <Image src={article.authorImage} alt={article.author} fill className="object-cover" sizes="36px" />
//                       </div>
//                     </Link>
//                   )}
//                   <div>
//                     <p className="text-[12px] font-semibold leading-none text-[color:var(--ms-text)]">
//                       <span className="font-normal text-[color:var(--ms-text-faint)]">By </span>
//                       {/* SEO FIX: title attribute */}
//                       <Link
//                         href={`/our-team/${article.authorslug}/`}
//                         title={`About ${article.author}`}
//                         className="transition-colors hover:text-[color:var(--ms-accent)]"
//                       >
//                         {article.author}
//                       </Link>
//                     </p>
//                     <p className="mt-0.5 text-[11px] text-[color:var(--ms-text-faint)]">
//                       {article.role}&nbsp;&nbsp;|&nbsp;&nbsp;{article.date}&nbsp;&nbsp;|&nbsp;&nbsp;6 min read
//                     </p>
//                   </div>
//                 </div>
//                 <ShareBar title={article.title} category={article.category} slug={article.slug} />
//               </div>
//             </div>

//             {/* Key points */}
//             {isLongform && article.keyPoints?.length ? <KeyPointsStrip points={article.keyPoints} /> : null}

//             {/* Hero */}
//             <div className={isLongform ? "mt-4" : "mt-5"}>
//               <div className="relative aspect-[16/9] w-full overflow-hidden">
//                 <Image src={article.image} alt={article.title} fill priority className="object-cover" sizes="(max-width: 1280px) 100vw, 860px" />
//               </div>
//               {article.imageCaption && (
//                 <p className="mt-2 border-b border-[color:var(--ms-border)] pb-3 text-[11px] italic leading-5 text-[color:var(--ms-text-faint)]">
//                   {article.imageCaption}&nbsp;<span className="not-italic font-medium">| Source: Mirror Standard</span>
//                 </p>
//               )}
//             </div>

//             {/* TOC */}
//             {isLongform && tocSections.length > 2 && !article.storyBlocks?.length && (
//               <TableOfContents sections={tocSections} />
//             )}

//             {/* Reviewed-by */}
//             {article.reviewedByName && (
//               <div className="mb-2 mt-4 flex items-center gap-2 rounded-[4px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] px-4 py-2.5">
//                 <svg className="h-3.5 w-3.5 flex-none text-[color:var(--ms-accent)]" viewBox="0 0 16 16" fill="currentColor">
//                   <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.354 5.646l-4 4a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.707L7 9.586l3.646-3.647a.5.5 0 01.708.707z" />
//                 </svg>
//                 <p className="text-[11px] text-[color:var(--ms-text-faint)]">
//                   Reviewed by{" "}
//                   {article.reviewedByUrl ? (
//                     // SEO FIX: title attribute
//                     <Link
//                       href={article.reviewedByUrl}
//                       title={`Reviewed by ${article.reviewedByName}`}
//                       className="font-semibold text-[color:var(--ms-text)] transition-colors hover:text-[color:var(--ms-accent)]"
//                     >
//                       {article.reviewedByName}
//                     </Link>
//                   ) : (
//                     <span className="font-semibold text-[color:var(--ms-text)]">{article.reviewedByName}</span>
//                   )}
//                 </p>
//               </div>
//             )}

//             {/* Body */}
//             <div className="mt-6">
//               {article.sections?.length || article.storyBlocks?.length ? (
//                 <RichContent
//                   keyPoints={!isLongform ? article.keyPoints : undefined}
//                   sections={article.sections}
//                   storyBlocks={article.storyBlocks}
//                   sourceNotes={article.sourceNotes}
//                   faq={article.faq}
//                   relatedResources={article.relatedResources}
//                   correctionNote={article.correctionNote}
//                 />
//               ) : (
//                 <ArticleParagraph data={article} />
//               )}
//             </div>

//             {/* Tags */}
//             {(article.keywords?.length || article.category) && (
//               <div className="mt-8 border-t border-[color:var(--ms-border)] pt-6">
//                 <Tags keywords={article.keywords} category={article.category} />
//               </div>
//             )}

//             {/* Author card */}
//             <div className="mt-8">
//               <AuthorCard
//                 author={article.author}
//                 role={article.role}
//                 articleTitle={article.title}
//                 reddit={article.reddit}
//                 medium={article.medium}
//                 quora={article.quora}
//                 substack={article.substack}
//               />
//             </div>

//             {/* Prev / Next */}
//             <div className="mt-8">
//               <NewsNavigation data={navigationNews} />
//             </div>

//             {/* Related bottom */}
//             {relatedNews.length > 0 && (
//               <div className="mt-10 border-t border-[color:var(--ms-border)] pt-6">
//                 <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
//                   More From {categoryLabel}
//                 </p>
//                 {/* SEO FIX: this H2 is unique — "Related Analysis" — no duplicate */}
//                 <h2 className="mb-5 font-[oswald] text-[22px] font-bold uppercase leading-none tracking-tight text-[color:var(--ms-text)]">
//                   Related Analysis
//                 </h2>
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
//                   {relatedNews.slice(0, 3).map((item) => (
//                     // RelatedBottomCard now uses H3, correctly under this H2
//                     <RelatedBottomCard key={item.slug} item={item} />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Comments */}
//             {article.allowComments !== false && (
//               <div className="mt-8">
//                 <CommentForm />
//               </div>
//             )}
//           </article>

//           {/* ═══════════ RIGHT — Sticky sidebar ═══════════ */}
//           <StickySidebarColumn
//             popularNews={popularNews}
//             relatedNews={relatedNews}
//             articleRef={articleRef}
//           />

//         </div>

//         {/* Mobile sidebar — variant="mobile" uses H2 "Popular Stories" (not "Popular News")
//             so Google never sees two identical H2s on the page */}
//         <div className="mt-10 border-t border-[color:var(--ms-border)] pt-8 lg:hidden">
//           <SidebarContent popularNews={popularNews} relatedNews={relatedNews} variant="mobile" />
//         </div>

//       </div>
//     </>
//   );
// }
