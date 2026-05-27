import type { ReactNode } from "react";
import Link from "next/link";
import type {
  FAQItem,
  KeyPoint,
  RelatedResource,
  SourceNote,
  ArticleSection,
  ArticleStoryBlock,
} from "../lib/content-types";
import ArticleBlocks from "./ArticleBlocks";

interface Props {
  keyPoints?: KeyPoint[];
  sections?: ArticleSection[];
  storyBlocks?: ArticleStoryBlock[];
  sourceNotes?: SourceNote[];
  faq?: FAQItem[];
  relatedResources?: RelatedResource[];
  correctionNote?: string;
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
   TYPOGRAPHIC ORNAMENT between sections
───────────────────────────────────────────── */
function ColumnRule() {
  return (
    <div aria-hidden="true" className="flex items-center gap-3 py-1">
      <div className="h-px flex-1 bg-[color:var(--ms-border)]" />
      <span className="font-[oswald] text-[9px] uppercase tracking-[0.3em] text-[color:var(--ms-text-faint)]">
        ✦
      </span>
      <div className="h-px flex-1 bg-[color:var(--ms-border)]" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   AT A GLANCE — newspaper definition list
   Matches the PDF spec exactly:
   bordered left accent, double rule header, dl rows
───────────────────────────────────────────── */
function KeyPointsBox({ points }: { points: KeyPoint[] }) {
  return (
    <aside
      aria-labelledby="at-a-glance-title"
      className="my-8 border border-[color:var(--ms-border)] border-l-[3px] border-l-[color:var(--ms-accent)]"
    >
      <div className="border-b-2 border-[color:var(--ms-text)] px-5 py-3">
        <p
          id="at-a-glance-title"
          className="font-[oswald] text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]"
        >
          At a Glance
        </p>
      </div>
      <dl className="divide-y divide-[color:var(--ms-border)]">
        {points.map((point) => (
          <div
            key={`${point.label}-${point.value}`}
            className="grid gap-1 px-5 py-3 sm:grid-cols-[160px_1fr] sm:gap-4"
          >
            <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--ms-text-faint)]">
              {point.label}
            </dt>
            <dd className="text-[15px] leading-[1.7] text-[color:var(--ms-text)]">
              {point.value}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

/* ─────────────────────────────────────────────
   ARTICLE SECTION — broadsheet column block
   Drop cap on first paragraph of first section
───────────────────────────────────────────── */
function ArticleSectionBlock({
  section,
  index,
}: {
  section: ArticleSection;
  index: number;
}) {
  return (
    <section id={`section-${index}`} className="scroll-mt-20">
      {/* Section heading with column rule above and below */}
      <div className="mb-5 border-b border-t border-[color:var(--ms-text)] py-2">
        <h2 className="ms-editorial-serif text-[22px] font-bold leading-[1.1] tracking-[-0.015em] text-[color:var(--ms-text)] sm:text-[26px]">
          {section.heading}
        </h2>
      </div>

      <div className="space-y-5">
        {section.paragraphs.map((paragraph, pIdx) => (
          <p
            key={`${section.heading}-p-${pIdx}`}
            className={[
              "text-[17px] leading-[1.9] text-[color:var(--ms-text)] md:text-[18px]",
              index === 0 && pIdx === 0
                ? "first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-[oswald] first-letter:text-[4.5rem] first-letter:font-bold first-letter:leading-[0.8] first-letter:text-[color:var(--ms-text)]"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {renderInlineLinks(paragraph)}
          </p>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   INLINE PULL QUOTE — auto-extracted between sections
───────────────────────────────────────────── */
function InlinePullQuote({ text }: { text: string }) {
  return (
    <div className="px-2 sm:px-6">
      <blockquote className="border-l-[3px] border-[color:var(--ms-accent)] pl-5">
        <p className="ms-editorial-serif text-[1.35rem] italic leading-[1.4] tracking-[-0.02em] text-[color:var(--ms-text)] sm:text-[1.5rem]">
          {text}
        </p>
      </blockquote>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SOURCE NOTES — numbered footnote list
───────────────────────────────────────────── */
function SourceNotesBlock({ notes }: { notes: SourceNote[] }) {
  return (
    <aside aria-labelledby="source-notes-title" className="border-t-2 border-[color:var(--ms-text)] pt-5">
      <h2
        id="source-notes-title"
        className="mb-4 font-[oswald] text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]"
      >
        Source Notes
      </h2>
      <ol className="space-y-3">
        {notes.map((source, idx) => (
          <li
            key={`${source.label}-${source.url}`}
            className="flex gap-3 text-[13px] leading-6 text-[color:var(--ms-text-soft)]"
          >
            <span className="mt-0.5 w-6 flex-none font-[oswald] text-[11px] font-bold tabular-nums text-[color:var(--ms-text-faint)]">
              {String(idx + 1).padStart(2, "0")}.
            </span>
            <span>
              <SmartLink
                href={source.url}
                className="font-semibold text-[color:var(--ms-text)] underline decoration-[color:var(--ms-border)] underline-offset-2 transition-colors hover:text-[color:var(--ms-accent)]"
              >
                {source.label}
              </SmartLink>
              {source.description ? (
                <span className="ml-1 text-[color:var(--ms-text-faint)]">
                  — {source.description}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ol>
    </aside>
  );
}

/* ─────────────────────────────────────────────
   FAQ — clean ruled list with schema markup
───────────────────────────────────────────── */
function FAQBlock({ items }: { items: FAQItem[] }) {
  return (
    <section aria-labelledby="faq-title">
      <div className="mb-5 border-b border-t border-[color:var(--ms-text)] py-2">
        <h2
          id="faq-title"
          className="ms-editorial-serif text-[22px] font-bold leading-[1.1] text-[color:var(--ms-text)] sm:text-[26px]"
        >
          Frequently Asked Questions
        </h2>
      </div>
      <dl
        className="divide-y divide-[color:var(--ms-border)]"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {items.map((item) => (
          <div
            key={item.question}
            className="py-4"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <dt
              className="mb-2 text-[15px] font-semibold leading-6 text-[color:var(--ms-text)]"
              itemProp="name"
            >
              {item.question}
            </dt>
            <dd
              className="text-[15px] leading-[1.8] text-[color:var(--ms-text-soft)]"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <span itemProp="text">{item.answer}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ─────────────────────────────────────────────
   RELATED READING — editorial link list
───────────────────────────────────────────── */
function RelatedReadingBlock({ resources }: { resources: RelatedResource[] }) {
  return (
    <aside
      aria-labelledby="related-reading-title"
      className="border border-[color:var(--ms-border)] border-l-[3px] border-l-[color:var(--ms-accent)]"
    >
      <div className="border-b border-[color:var(--ms-border)] px-5 py-3">
        <p
          id="related-reading-title"
          className="font-[oswald] text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]"
        >
          Related Reading
        </p>
      </div>
      <ul className="divide-y divide-[color:var(--ms-border)]">
        {resources.map((item) => (
          <li key={`${item.href}-${item.title}`}>
            <SmartLink href={item.href} className="group block px-5 py-3">
              <span className="block text-[14px] font-semibold leading-5 text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)]">
                {item.title}
              </span>
              {item.description ? (
                <span className="mt-0.5 block text-[12px] leading-5 text-[color:var(--ms-text-faint)]">
                  {item.description}
                </span>
              ) : null}
            </SmartLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* ─────────────────────────────────────────────
   CORRECTION NOTE
───────────────────────────────────────────── */
function CorrectionNoteBlock({ note }: { note: string }) {
  return (
    <aside
      aria-label="Correction and updates"
      className="border-l-[3px] border-l-[color:var(--ms-text-faint)] bg-[color:var(--ms-surface)] px-5 py-4"
    >
      <p className="mb-1 font-[oswald] text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
        Updates &amp; Corrections
      </p>
      <p className="text-[13px] leading-6 text-[color:var(--ms-text-soft)]">{note}</p>
    </aside>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function RichContent({
  keyPoints,
  sections,
  storyBlocks,
  sourceNotes,
  faq,
  relatedResources,
  correctionNote,
}: Props) {
  const hasStoryBlocks = Boolean(storyBlocks?.length);

  /* ── StoryBlocks path ── */
  if (hasStoryBlocks) {
    return (
      <div className="space-y-0">
        <ArticleBlocks blocks={storyBlocks ?? []} />

        {relatedResources?.length ? (
          <div className="mt-8">
            <RelatedReadingBlock resources={relatedResources} />
          </div>
        ) : null}

        {sourceNotes?.length ? (
          <div className="mt-8">
            <SourceNotesBlock notes={sourceNotes} />
          </div>
        ) : null}

        {faq?.length ? (
          <div className="mt-8">
            <FAQBlock items={faq} />
          </div>
        ) : null}

        {correctionNote ? (
          <div className="mt-8">
            <CorrectionNoteBlock note={correctionNote} />
          </div>
        ) : null}
      </div>
    );
  }

  /* ── Sections path — full newspaper column layout ── */
  const sectionList = sections ?? [];

  return (
    <div>
      {/* At a Glance */}
      {keyPoints?.length ? <KeyPointsBox points={keyPoints} /> : null}

      {/* Article sections with ornaments and auto pull quotes */}
      <div className="space-y-0">
        {sectionList.map((section, index) => {
          /* Extract a pull-quote candidate from section end */
          const lastPara = section.paragraphs[section.paragraphs.length - 1] ?? "";
          const sentences = lastPara
            .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
            .split(/(?<=[.?!])\s+/)
            .filter(Boolean);
          const pullQuoteText = sentences[sentences.length - 1] ?? "";
          const showPullQuote =
            index % 2 === 1 &&
            index < sectionList.length - 1 &&
            pullQuoteText.length > 40;

          return (
            <div key={section.heading}>
              <ArticleSectionBlock section={section} index={index} />

              <div className="my-8">
                {showPullQuote ? (
                  <>
                    <ColumnRule />
                    <div className="my-6">
                      <InlinePullQuote text={pullQuoteText} />
                    </div>
                    <ColumnRule />
                  </>
                ) : (
                  <ColumnRule />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tail blocks */}
      {relatedResources?.length ? (
        <div className="mt-2">
          <RelatedReadingBlock resources={relatedResources} />
        </div>
      ) : null}

      {sourceNotes?.length ? (
        <div className="mt-8">
          <SourceNotesBlock notes={sourceNotes} />
        </div>
      ) : null}

      {faq?.length ? (
        <div className="mt-8">
          <FAQBlock items={faq} />
        </div>
      ) : null}

      {correctionNote ? (
        <div className="mt-8">
          <CorrectionNoteBlock note={correctionNote} />
        </div>
      ) : null}
    </div>
  );
}