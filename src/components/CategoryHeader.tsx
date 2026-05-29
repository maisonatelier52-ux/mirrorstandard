
import { formatCategoryName } from "../lib/category-copy";
import type { NewsArticle } from "../lib/news";
import Image from "next/image";
import Link from "next/link";

interface Props {
  category: string;
  leadArticle?: NewsArticle;
  secondaryArticles?: NewsArticle[];
}

export default function CategoryHeader({
  category,
  leadArticle,
  secondaryArticles = [],
}: Props) {
  const label = formatCategoryName(category);

  const col1 = leadArticle;
  const col2Items = secondaryArticles.slice(0, 2);
  const col3 = secondaryArticles[2] ?? null;

  return (
    <section className="mt-4 md:mt-6">
      {/* Breadcrumb */}
      <nav
        className="text-[13px] text-[color:var(--ms-text-faint)] mb-3"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-[color:var(--ms-accent)] transition-colors">
              Home
            </Link>
          </li>
          <li><span className="text-[color:var(--ms-text-faint)]">›</span></li>
          <li className="text-[color:var(--ms-text)]">{label}</li>
        </ol>
      </nav>

      {/* Title */}
      <h1 className="ms-editorial-serif text-[42px] leading-none tracking-[-0.03em] text-[color:var(--ms-text)] sm:text-[52px] font-bold">
        {label}
      </h1>
      <p className="mt-1 text-[15px] text-[color:var(--ms-text-soft)]">
        Markets, companies, finance, and the institutions shaping capital.
      </p>

      {/* Top divider */}
      <div className="mt-5 border-2 border-[color:var(--ms-text)]" />

      {/* ── Desktop: 3-column featured grid ── */}
      {col1 && (
        <div className="mt-6 hidden md:flex flex-row items-stretch">

          {/* Column 1 — large featured */}
          <div className="flex-2 pr-6 border-r border-[color:var(--ms-border)]">
            <Link
              href={`/${col1.category}/${col1.slug}`}
              title={col1.title}
              className="group block"
            >
              <div className="relative aspect-[1.6/1] w-full overflow-hidden">
                <span className="absolute left-0 top-3 z-10 bg-[#c0392b] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                  Featured
                </span>
                <Image
                  src={col1.image}
                  alt={col1.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="38vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>
              <div className="mt-3">
                <p className="text-[12px] text-[color:var(--ms-text-faint)]">
                  {col1.date}&nbsp;·&nbsp;4 min read
                </p>
                <h2 className="ms-editorial-serif mt-2 text-[24px] leading-[1.1] tracking-[-0.03em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)] sm:text-[26px]">
                  {col1.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-[14px] leading-6 text-[color:var(--ms-text-soft)]">
                  {col1.shortdescription}
                </p>
              </div>
            </Link>
          </div>

          {/* Column 2 — two stacked small items */}
          <div className="w-[27%] px-6 border-r border-[color:var(--ms-border)] flex flex-col divide-y divide-[color:var(--ms-border)]">
            {col2Items.map((story) => (
              <Link
                key={story.slug}
                href={`/${story.category}/${story.slug}`}
                title={story.title}
                className="group flex flex-col py-3 first:pt-0 last:pb-0"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="22vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>
                <div className="mt-2">
                  <p className="text-[11px] text-[color:var(--ms-text-faint)]">
                    {story.date}&nbsp;·&nbsp;5 min read
                  </p>
                  <h3 className="ms-editorial-serif mt-1 text-[15px] leading-[1.2] tracking-[-0.02em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)]">
                    {story.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[12px] leading-5 text-[color:var(--ms-text-soft)]">
                    {story.shortdescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Column 3 — large right */}
          {col3 && (
            <div className="flex-1 pl-6">
              <Link
                href={`/${col3.category}/${col3.slug}`}
                title={col3.title}
                className="group block"
              >
                <div className="relative aspect-[0.8/1] w-full overflow-hidden">
                  <Image
                    src={col3.image}
                    alt={col3.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="38vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>
                <div className="mt-3">
                  <p className="text-[12px] text-[color:var(--ms-text-faint)]">
                    {col3.date}&nbsp;·&nbsp;4 min read
                  </p>
                  <h2 className="ms-editorial-serif mt-2 text-[24px] leading-[1.1] tracking-[-0.03em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)] sm:text-[26px]">
                    {col3.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-[14px] leading-6 text-[color:var(--ms-text-soft)]">
                    {col3.shortdescription}
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}

      {/* ── Mobile fallback: stacked ── */}
      {col1 && (
        <div className="mt-6 flex flex-col gap-6 md:hidden">
          <Link href={`/${col1.category}/${col1.slug}`} className="group block">
            <div className="relative aspect-[1.6/1] w-full overflow-hidden">
              <span className="absolute left-0 top-3 z-10 bg-[#c0392b] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                Featured
              </span>
              <Image src={col1.image} alt={col1.title} fill priority className="object-cover" sizes="100vw" />
            </div>
            <div className="mt-3">
              <p className="text-[12px] text-[color:var(--ms-text-faint)]">{col1.date}&nbsp;·&nbsp;4 min read</p>
              <h2 className="ms-editorial-serif mt-2 text-[22px] leading-[1.1] tracking-[-0.03em] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)]">
                {col1.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-[14px] leading-6 text-[color:var(--ms-text-soft)]">
                {col1.shortdescription}
              </p>
            </div>
          </Link>
          {secondaryArticles.map((story) => (
            <Link key={story.slug} href={`/${story.category}/${story.slug}`} className="group flex gap-3 border-t border-[color:var(--ms-border)] pt-4">
              <div className="relative h-[72px] w-[110px] flex-shrink-0 overflow-hidden">
                <Image src={story.image} alt={story.title} fill className="object-cover" sizes="110px" />
              </div>
              <div>
                <p className="text-[11px] text-[color:var(--ms-text-faint)]">{story.date}</p>
                <h3 className="ms-editorial-serif mt-1 text-[15px] leading-[1.2] text-[color:var(--ms-text)] group-hover:text-[color:var(--ms-accent)]">
                  {story.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}