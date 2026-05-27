import Image from "next/image";
import type { NewsArticle } from "@/lib/news";

interface Props {
  data: NewsArticle;
}

const ArticleDetail = ({ data }: Props) => {
  const isFeature = Boolean(data.storyBlocks?.length);

  return (
    <div className={isFeature ? "space-y-8" : "space-y-6"}>
      <div
        className={
          isFeature
            ? "ms-archival-paper rounded-[36px] border border-[color:var(--ms-border)] px-6 py-7 shadow-[0_20px_60px_rgba(21,22,18,0.06)] sm:px-8 sm:py-9 lg:px-10"
            : "space-y-4 border-b border-[color:var(--ms-border)] pb-7"
        }
      >
        <p className="ms-meta flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]">
          <span className="font-semibold text-[color:var(--ms-accent)]">
            {data.category}
          </span>
          <span className="h-1 w-1 rounded-full bg-[color:var(--ms-border-strong)]" />
          <span className="tracking-[0.16em]">{data.date}</span>
        </p>
        <h1
          className={
            isFeature
              ? "ms-editorial-serif max-w-[980px] pt-3 text-[40px] leading-[0.94] tracking-[-0.04em] text-[color:var(--ms-text)] sm:text-[56px] md:text-[74px] lg:text-[86px]"
              : "font-[oswald] font-bold text-[34px] leading-[1.02] tracking-tight text-[color:var(--ms-text)] sm:text-[48px] md:text-[64px]"
          }
        >
          {data.title}
        </h1>
        <p
          className={
            isFeature
              ? "ms-editorial-serif max-w-[720px] text-[1.14rem] leading-[1.9] tracking-[0.01em] text-[color:var(--ms-text-soft)] sm:text-[1.24rem]"
              : "max-w-4xl text-[17px] leading-8 text-[color:var(--ms-text-soft)] italic sm:text-[19px] md:text-[21px] md:leading-9"
          }
        >
          {data.shortdescription}
        </p>
      </div>
      <div
        className={
          isFeature
            ? "overflow-hidden rounded-[34px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] shadow-[0_24px_70px_rgba(21,22,18,0.08)]"
            : "overflow-hidden rounded-[28px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] shadow-[0_24px_70px_rgba(21,22,18,0.08)]"
        }
      >
        <div className="w-full relative aspect-[16/9]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA="
            className="object-cover"
            priority
          />
        </div>
        {data.imageCaption ? (
          <div className="border-t border-[color:var(--ms-border)] bg-[color:var(--ms-surface-muted)] px-5 py-4 sm:px-7">
            <p className={`${isFeature ? "ms-editorial-serif text-[14px] leading-7" : "text-[13px] leading-6 italic sm:text-[14px]"} text-[color:var(--ms-text-faint)]`}>
              {data.imageCaption}
            </p>
          </div>
        ) : null}
      </div>
      {isFeature ? null : (
        <div className="rounded-[20px] border border-[color:var(--ms-border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(243,237,226,0.96))] px-5 py-4 sm:px-6">
          <p className="max-w-3xl text-[15px] leading-7 text-[color:var(--ms-text-soft)] sm:text-[16px]">
            Mirror Standard presents longform reporting with an emphasis on sourced context, editorial review, and readable structure. The sections below separate factual baseline, interpretive analysis, and supporting references.
          </p>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
