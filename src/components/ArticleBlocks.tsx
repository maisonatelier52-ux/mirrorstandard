
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type {
  ArticleStoryBlock,
  StoryBlockItem,
  StoryBlockTone,
  StoryBlockWidth,
} from "../lib/content-types";

interface Props {
  blocks: ArticleStoryBlock[];
}

/* ─────────────────────────────────────────────
   SMART LINK
───────────────────────────────────────────── */
function SmartLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function renderInlineLinks(text: string) {
  const parts: ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null = null;

  while ((match = linkPattern.exec(text)) !== null) {
    const [fullMatch, label, href] = match;
    const start = match.index;
    if (start > lastIndex) parts.push(text.slice(lastIndex, start));
    parts.push(
      <SmartLink
        key={`${href}-${start}`}
        href={href}
        className="border-b border-[color:var(--ms-accent)] text-[color:var(--ms-text)] transition-colors hover:text-[color:var(--ms-accent)]"
      >
        {label}
      </SmartLink>,
    );
    lastIndex = start + fullMatch.length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length ? parts : text;
}

/* ─────────────────────────────────────────────
   TONE → background/border classes
   Newspaper tones: ivory = off-white column,
   paper = aged newsprint, mist = grey inset,
   charcoal = ink reversal panel
───────────────────────────────────────────── */
function getToneBg(tone?: StoryBlockTone) {
  switch (tone) {
    case "paper":
      return "bg-[#faf8f3] border-[rgba(188,174,150,0.7)]";
    case "mist":
      return "bg-[#f1f4f8] border-[rgba(157,176,216,0.45)]";
    case "charcoal":
      return "bg-[#1e2a36] border-[rgba(61,82,103,0.9)] text-white";
    case "ivory":
    default:
      return "bg-[#fffdf8] border-[color:var(--ms-border)]";
  }
}

/* eyebrow label */
function Eyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <p
      className={`font-[oswald] text-[10px] font-bold uppercase tracking-[0.28em] ${
        inverse ? "text-white/60" : "text-[color:var(--ms-text-faint)]"
      }`}
    >
      {children}
    </p>
  );
}

/* thin rule ornament */
function ColumnRule({ inverse = false }: { inverse?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`my-4 flex items-center gap-3 ${inverse ? "opacity-30" : ""}`}
    >
      <div className="h-px flex-1 bg-[color:var(--ms-border)]" />
      <span className="font-[oswald] text-[9px] uppercase tracking-[0.3em] text-[color:var(--ms-text-faint)]">
        ✦
      </span>
      <div className="h-px flex-1 bg-[color:var(--ms-border)]" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   FACTBOX — newspaper "At a Glance" table
───────────────────────────────────────────── */
function FactboxBlock({ block }: { block: ArticleStoryBlock }) {
  const inverse = block.tone === "charcoal";
  return (
    <section
      className={`border border-l-[3px] border-l-[color:var(--ms-accent)] ${getToneBg(block.tone)}`}
    >
      {/* Header rule */}
      <div
        className={`border-b-2 px-5 py-3 ${
          inverse ? "border-white/20" : "border-[color:var(--ms-text)]"
        }`}
      >
        {block.eyebrow ? <Eyebrow inverse={inverse}>{block.eyebrow}</Eyebrow> : null}
        {block.heading ? (
          <h2
            className={`mt-1 font-[oswald] text-[18px] font-bold uppercase leading-none tracking-tight ${
              inverse ? "text-white" : "text-[color:var(--ms-text)]"
            }`}
          >
            {block.heading}
          </h2>
        ) : null}
        {block.subtitle ? (
          <p
            className={`mt-1.5 text-[13px] leading-5 ${
              inverse ? "text-white/70" : "text-[color:var(--ms-text-soft)]"
            }`}
          >
            {block.subtitle}
          </p>
        ) : null}
      </div>

      {/* Items as ruled rows */}
      {block.items?.length ? (
        <dl className={`divide-y ${inverse ? "divide-white/10" : "divide-[color:var(--ms-border)]"}`}>
          {block.items.map((item) => (
            <div
              key={`${item.label}-${item.value}`}
              className="grid gap-1 px-5 py-3 sm:grid-cols-[160px_1fr] sm:gap-4"
            >
              <dt
                className={`text-[11px] font-bold uppercase tracking-[0.16em] ${
                  inverse ? "text-white/50" : "text-[color:var(--ms-text-faint)]"
                }`}
              >
                {item.label}
              </dt>
              <dd
                className={`text-[14px] leading-[1.65] ${
                  inverse ? "text-white/90" : "text-[color:var(--ms-text)]"
                }`}
              >
                {item.value}
                {item.description ? (
                  <span
                    className={`mt-0.5 block text-[12px] leading-5 ${
                      inverse ? "text-white/55" : "text-[color:var(--ms-text-faint)]"
                    }`}
                  >
                    {item.description}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </section>
  );
}

/* ─────────────────────────────────────────────
   CINEMATIC — full-column literary prose block
   Drop cap on first paragraph
───────────────────────────────────────────── */
function CinematicBlock({ block }: { block: ArticleStoryBlock }) {
  const inverse = block.tone === "charcoal";
  const paragraphs = block.paragraphs ?? [];
  return (
    <section className={`border px-6 py-8 sm:px-10 sm:py-10 ${getToneBg(block.tone)}`}>
      <div className="mx-auto max-w-[72ch]">
        {block.eyebrow ? <Eyebrow inverse={inverse}>{block.eyebrow}</Eyebrow> : null}
        {block.heading ? (
          <h2
            className={`ms-editorial-serif mt-3 text-[28px] leading-[1.05] tracking-[-0.02em] sm:text-[34px] ${
              inverse ? "text-white" : "text-[color:var(--ms-text)]"
            }`}
          >
            {block.heading}
          </h2>
        ) : null}
        <div className={`mt-5 space-y-5 ${block.heading ? "" : ""}`}>
          {paragraphs.map((paragraph, pIdx) => (
            <p
              key={`cin-${pIdx}-${paragraph.slice(0, 20)}`}
              className={[
                "ms-editorial-serif text-[1.18rem] leading-[1.95] text-[color:var(--ms-text)] sm:text-[1.26rem]",
                inverse ? "text-white/90" : "text-[color:var(--ms-text)]",
                /* drop cap on first para */
                pIdx === 0
                  ? "first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-[oswald] first-letter:text-[4rem] first-letter:font-bold first-letter:leading-[0.85] first-letter:text-[color:var(--ms-accent)]"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {renderInlineLinks(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PULL QUOTE — broadsheet quote rule style
───────────────────────────────────────────── */
function PullQuoteBlock({ block }: { block: ArticleStoryBlock }) {
  const inverse = block.tone === "charcoal";
  return (
    <section
      className={`border px-6 py-8 sm:px-10 ${getToneBg(block.tone)}`}
      aria-label="Pull quote"
    >
      <div className="mx-auto max-w-[68ch]">
        {/* Top rule */}
        <div
          className={`mb-5 border-t-2 ${inverse ? "border-white/40" : "border-[color:var(--ms-text)]"}`}
        />
        <blockquote>
          <p
            className={`ms-editorial-serif text-[1.65rem] italic leading-[1.25] tracking-[-0.025em] sm:text-[2rem] ${
              inverse ? "text-white/95" : "text-[color:var(--ms-text)]"
            }`}
          >
            &#8220;{block.quote}&#8221;
          </p>
          {block.citation ? (
            <footer className="mt-4">
              <cite
                className={`not-italic font-[oswald] text-[10px] uppercase tracking-[0.26em] ${
                  inverse ? "text-white/55" : "text-[color:var(--ms-text-faint)]"
                }`}
              >
                — {block.citation}
              </cite>
            </footer>
          ) : null}
        </blockquote>
        {/* Bottom rule */}
        <div
          className={`mt-5 border-b ${inverse ? "border-white/20" : "border-[color:var(--ms-border)]"}`}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION BREAK — two-column white layout
   Left: eyebrow + title + subtitle
   Right: image (when provided)
   Falls back to single-column centered when no image
───────────────────────────────────────────── */
function SectionBreakBlock({ block }: { block: ArticleStoryBlock }) {
  const hasImage = Boolean(block.image);

  /* ── Two-column layout when an image is provided ── */
  if (hasImage) {
    return (
      <section className="border border-[color:var(--ms-border)] bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Left column — text */}
          <div className="flex flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 border-b border-[color:var(--ms-border)] sm:border-b-0 sm:border-r sm:border-[color:var(--ms-border)]">
            {/* Top decorative rule */}
            <div aria-hidden="true" className="mb-6 flex flex-col gap-1 w-12">
              <div className="h-[2px] w-full bg-[color:var(--ms-text)]" />
              <div className="h-px w-full bg-[color:var(--ms-border)]" />
              <div className="h-[2px] w-full bg-[color:var(--ms-text)]" />
            </div>

            {block.eyebrow ? (
              <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.32em] text-[color:var(--ms-accent)]">
                {block.eyebrow}
              </p>
            ) : null}

            {block.title ? (
              <h2 className="ms-editorial-serif mt-3 text-[2rem] leading-[1.0] tracking-[-0.01em] text-[color:var(--ms-text)] sm:text-[2.4rem]">
                {block.title}
              </h2>
            ) : null}

            {block.subtitle ? (
              <p className="mt-4 text-[15px] leading-[1.8] text-[color:var(--ms-text-soft)] sm:text-[16px]">
                {renderInlineLinks(block.subtitle)}
              </p>
            ) : null}

            {/* Bottom decorative rule */}
            <div aria-hidden="true" className="mt-6 flex flex-col gap-1 w-12">
              <div className="h-[2px] w-full bg-[color:var(--ms-text)]" />
              <div className="h-px w-full bg-[color:var(--ms-border)]" />
              <div className="h-[2px] w-full bg-[color:var(--ms-text)]" />
            </div>
          </div>

          {/* Right column — image */}
          <div className="relative min-h-[260px] sm:min-h-[320px] overflow-hidden">
            <Image
              src={block.image!}
              alt={block.title ?? block.eyebrow ?? "Section image"}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    );
  }

  /* ── Fallback: single-column centered (no image, original charcoal look removed) ── */
  return (
    <section className="border border-[color:var(--ms-border)] bg-white px-6 py-10 text-center sm:px-10 sm:py-14">
      <div className="mx-auto max-w-[720px]">
        {/* decorative triple rule */}
        <div aria-hidden="true" className="mx-auto mb-6 flex w-16 flex-col gap-1">
          <div className="h-[2px] w-full bg-[color:var(--ms-text)]" />
          <div className="h-px w-full bg-[color:var(--ms-border)]" />
          <div className="h-[2px] w-full bg-[color:var(--ms-text)]" />
        </div>

        {block.eyebrow ? (
          <p className="font-[oswald] text-[10px] font-bold uppercase tracking-[0.32em] text-[color:var(--ms-text-faint)]">
            {block.eyebrow}
          </p>
        ) : null}
        {block.title ? (
          <h2 className="ms-editorial-serif mt-3 text-[2rem] leading-[1.0] tracking-[-0.01em] text-[color:var(--ms-text)] sm:text-[2.8rem]">
            {block.title}
          </h2>
        ) : null}
        {block.subtitle ? (
          <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-[1.8] text-[color:var(--ms-text-soft)] sm:text-[16px]">
            {renderInlineLinks(block.subtitle)}
          </p>
        ) : null}

        {/* bottom ornament */}
        <div aria-hidden="true" className="mx-auto mt-6 flex w-16 flex-col gap-1">
          <div className="h-[2px] w-full bg-[color:var(--ms-text)]" />
          <div className="h-px w-full bg-[color:var(--ms-border)]" />
          <div className="h-[2px] w-full bg-[color:var(--ms-text)]" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TIMELINE — newspaper dateline grid
───────────────────────────────────────────── */
function TimelineBlock({ block }: { block: ArticleStoryBlock }) {
  const items = block.timeline ?? [];
  const inverse = block.tone === "charcoal";
  return (
    <section className={`border px-6 py-7 sm:px-8 ${getToneBg(block.tone)}`}>
      {/* Header */}
      <div
        className={`mb-6 border-b-2 pb-4 ${
          inverse ? "border-white/20" : "border-[color:var(--ms-text)]"
        }`}
      >
        {block.eyebrow ? <Eyebrow inverse={inverse}>{block.eyebrow}</Eyebrow> : null}
        {block.heading ? (
          <h2
            className={`ms-editorial-serif mt-2 text-[26px] leading-[1.05] tracking-[-0.02em] sm:text-[32px] ${
              inverse ? "text-white" : "text-[color:var(--ms-text)]"
            }`}
          >
            {block.heading}
          </h2>
        ) : null}
        {block.subtitle ? (
          <p
            className={`mt-2 max-w-[700px] text-[14px] leading-6 ${
              inverse ? "text-white/70" : "text-[color:var(--ms-text-soft)]"
            }`}
          >
            {block.subtitle}
          </p>
        ) : null}
      </div>

      {/* Items — bordered column grid with dateline labels */}
      <div className="grid gap-0 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-4 xl:divide-y-0">
        {items.map((item, idx) => (
          <div
            key={`${item.label}-${idx}`}
            className={`px-4 py-4 first:pl-0 last:pr-0 sm:px-5 ${
              inverse ? "divide-white/10" : "divide-[color:var(--ms-border)]"
            }`}
          >
            <p
              className={`font-[oswald] text-[10px] font-bold uppercase tracking-[0.26em] ${
                inverse ? "text-white/50" : "text-[color:var(--ms-accent)]"
              }`}
            >
              {item.label}
            </p>
            {item.title ? (
              <h3
                className={`ms-editorial-serif mt-2 text-[18px] leading-[1.1] tracking-[-0.01em] ${
                  inverse ? "text-white" : "text-[color:var(--ms-text)]"
                }`}
              >
                {item.title}
              </h3>
            ) : null}
            <p
              className={`mt-2 text-[13px] leading-[1.75] ${
                inverse ? "text-white/72" : "text-[color:var(--ms-text-soft)]"
              }`}
            >
              {renderInlineLinks(item.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SIDEBAR — main column + inset note column
───────────────────────────────────────────── */
function SidebarBlock({ block }: { block: ArticleStoryBlock }) {
  const inverse = block.tone === "charcoal";
  return (
    <section className={`border px-6 py-7 sm:px-8 ${getToneBg(block.tone)}`}>
      {/* Main copy */}
      {block.eyebrow ? <Eyebrow inverse={inverse}>{block.eyebrow}</Eyebrow> : null}
      {block.heading ? (
        <h2
          className={`ms-editorial-serif mt-2 text-[26px] leading-[1.05] tracking-[-0.02em] sm:text-[32px] ${
            inverse ? "text-white" : "text-[color:var(--ms-text)]"
          }`}
        >
          {block.heading}
        </h2>
      ) : null}
      <div className="mt-4 space-y-4">
        {(block.paragraphs ?? []).map((p, i) => (
          <p
            key={`sb-p-${i}`}
            className={`text-[16px] leading-[1.9] md:text-[17px] ${
              inverse ? "text-white/84" : "text-[color:var(--ms-text)]"
            }`}
          >
            {renderInlineLinks(p)}
          </p>
        ))}
      </div>

      {/* Inset note — stacked below, left-rule accent */}
      {(block.noteTitle || block.noteBody) ? (
        <aside
          className={`mt-6 border-l-[2px] pl-5 ${
            inverse ? "border-white/20" : "border-[color:var(--ms-accent)]"
          }`}
        >
          {block.noteTitle ? (
            <p
              className={`font-[oswald] text-[10px] font-bold uppercase tracking-[0.24em] ${
                inverse ? "text-white/50" : "text-[color:var(--ms-text-faint)]"
              }`}
            >
              {block.noteTitle}
            </p>
          ) : null}
          {block.noteBody ? (
            <p
              className={`mt-2 text-[13px] leading-[1.8] ${
                inverse ? "text-white/72" : "text-[color:var(--ms-text-soft)]"
              }`}
            >
              {renderInlineLinks(block.noteBody)}
            </p>
          ) : null}
        </aside>
      ) : null}
    </section>
  );
}

/* ─────────────────────────────────────────────
   ANALYSIS (default) — standard editorial block
   with optional split layout
───────────────────────────────────────────── */
function AnalysisBlock({ block }: { block: ArticleStoryBlock }) {
  const inverse = block.tone === "charcoal";
  const hasNote = block.noteTitle || block.noteBody;

  return (
    <section className={`border px-6 py-7 sm:px-8 ${getToneBg(block.tone)}`}>
      <div
        className={
          block.width === "narrow"
            ? "mx-auto max-w-[68ch]"
            : "w-full"
        }
      >
        {block.eyebrow ? <Eyebrow inverse={inverse}>{block.eyebrow}</Eyebrow> : null}
        {block.heading ? (
          <>
            <div
              className={`mb-3 mt-2 border-b ${
                inverse ? "border-white/15" : "border-[color:var(--ms-border)]"
              }`}
            />
            <h2
              className={`ms-editorial-serif text-[26px] leading-[1.05] tracking-[-0.02em] sm:text-[32px] ${
                inverse ? "text-white" : "text-[color:var(--ms-text)]"
              }`}
            >
              {block.heading}
            </h2>
            <div
              className={`mb-4 mt-3 border-b ${
                inverse ? "border-white/15" : "border-[color:var(--ms-border)]"
              }`}
            />
          </>
        ) : null}
        {block.subtitle ? (
          <p
            className={`mb-4 text-[15px] italic leading-[1.7] ${
              inverse ? "text-white/70" : "text-[color:var(--ms-text-soft)]"
            }`}
          >
            {renderInlineLinks(block.subtitle)}
          </p>
        ) : null}
        <div className="space-y-4">
          {(block.paragraphs ?? []).map((p, i) => (
            <p
              key={`an-p-${i}`}
              className={`text-[16px] leading-[1.9] md:text-[17px] ${
                inverse ? "text-white/84" : "text-[color:var(--ms-text)]"
              }`}
            >
              {renderInlineLinks(p)}
            </p>
          ))}
        </div>

        {/* Note stacked below paragraphs */}
        {hasNote ? (
          <aside
            className={`mt-6 border-l-[2px] pl-5 ${
              inverse ? "border-white/20" : "border-[color:var(--ms-accent)]"
            }`}
          >
            {block.noteTitle ? (
              <p
                className={`font-[oswald] text-[10px] font-bold uppercase tracking-[0.24em] ${
                  inverse ? "text-white/50" : "text-[color:var(--ms-text-faint)]"
                }`}
              >
                {block.noteTitle}
              </p>
            ) : null}
            {block.noteBody ? (
              <p
                className={`mt-2 text-[13px] leading-[1.8] ${
                  inverse ? "text-white/72" : "text-[color:var(--ms-text-soft)]"
                }`}
              >
                {renderInlineLinks(block.noteBody)}
              </p>
            ) : null}
          </aside>
        ) : null}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BLOCK ROUTER + INTER-BLOCK SPACING
───────────────────────────────────────────── */
function renderBlock(block: ArticleStoryBlock, index: number) {
  switch (block.type) {
    case "factbox":
      return <FactboxBlock key={`block-${index}`} block={block} />;
    case "cinematic":
      return <CinematicBlock key={`block-${index}`} block={block} />;
    case "pullQuote":
      return <PullQuoteBlock key={`block-${index}`} block={block} />;
    case "sectionBreak":
      return <SectionBreakBlock key={`block-${index}`} block={block} />;
    case "timeline":
      return <TimelineBlock key={`block-${index}`} block={block} />;
    case "sidebar":
      return <SidebarBlock key={`block-${index}`} block={block} />;
    default:
      return <AnalysisBlock key={`block-${index}`} block={block} />;
  }
}

export default function ArticleBlocks({ blocks }: Props) {
  return (
    <div className="divide-y divide-[color:var(--ms-border)]">
      {blocks.map(renderBlock)}
    </div>
  );
}