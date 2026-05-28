import type { NewsArticle } from "../lib/news";
import { formatCategoryName } from "../lib/category-copy";
import Image from "next/image";
import Link from "next/link";

interface Props {
  lead: NewsArticle;
  secondary: NewsArticle[];
}

export default function HomeInFocus({ lead, secondary }: Props) {
  if (!lead) return null;

  const col1 = secondary.slice(0, 2);
  const col2 = secondary.slice(2, 4);

  return (
    <section className="mt-10">
      <div className="bg-[color:var(--ms-footer-bg)] px-6 py-8 sm:px-8">

        {/* Header — h2 */}
        <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
          <h2 className="ms-meta text-[13px] uppercase tracking-[0.22em] text-white/90">In Focus</h2>
          <div className="flex-1 border-b border-white/10" />
          <span className="ms-meta text-[11px] uppercase tracking-[0.16em] text-white/40">Sports &amp; Entertainment</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">

          {/* Lead story */}
          <Link href={`/${lead.category}/${lead.slug}`} title={lead.title} className="group lg:border-r lg:border-white/10 lg:pr-6">
            <div className="relative aspect-[12/10] overflow-hidden">
              <Image src={lead.image} alt={lead.title} fill className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.02]" sizes="(max-width: 1024px) 100vw, 45vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <span className="ms-meta mt-3 inline-block text-[10px] uppercase tracking-[0.18em] text-[color:var(--ms-accent-soft,#c9a96e)]">
              {formatCategoryName(lead.category)}
            </span>
            {/* h3 under section h2 */}
            <h3 className="ms-editorial-serif mt-1 text-[26px] leading-[1.05] tracking-[-0.03em] text-white group-hover:text-[color:var(--ms-accent-soft,#c9a96e)] transition-colors sm:text-[30px]">
              {lead.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-white/60">{lead.shortdescription}</p>
            <p className="ms-meta mt-2 text-[11px] text-white/40">{lead.author} · {lead.date}</p>
          </Link>

          {/* Secondary col 1 */}
          <div className="flex flex-col gap-6 lg:border-r lg:border-white/10 lg:pr-6">
            {col1.map((story, i) => (
              <Link key={story.slug} href={`/${story.category}/${story.slug}`} title={story.title} className={`group flex flex-col ${i === 0 ? "border-b border-white/10 pb-6" : ""}`}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={story.image} alt={story.title} fill className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 28vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <span className="ms-meta mt-2 inline-block text-[10px] uppercase tracking-[0.16em] text-[color:var(--ms-accent-soft,#c9a96e)]">
                  {formatCategoryName(story.category)}
                </span>
                <h3 className="ms-editorial-serif mt-1 text-[16px] leading-[1.15] tracking-[-0.02em] text-white group-hover:text-[color:var(--ms-accent-soft,#c9a96e)] transition-colors">
                  {story.title}
                </h3>
                <p className="ms-meta mt-1 text-[11px] text-white/30">{story.date}</p>
              </Link>
            ))}
          </div>

          {/* Secondary col 2 */}
          <div className="flex flex-col gap-6">
            {col2.map((story, i) => (
              <Link key={story.slug} href={`/${story.category}/${story.slug}`} title={story.title} className={`group flex flex-col ${i === 0 ? "border-b border-white/10 pb-6" : ""}`}>
                <div className="relative aspect-[17/9] overflow-hidden">
                  <Image src={story.image} alt={story.title} fill className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 28vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <span className="ms-meta mt-2 inline-block text-[10px] uppercase tracking-[0.16em] text-[color:var(--ms-accent-soft,#c9a96e)]">
                  {formatCategoryName(story.category)}
                </span>
                <h3 className="ms-editorial-serif mt-1 text-[16px] leading-[1.15] tracking-[-0.02em] text-white group-hover:text-[color:var(--ms-accent-soft,#c9a96e)] transition-colors">
                  {story.title}
                </h3>
                <p className="ms-meta mt-1 text-[11px] text-white/30">{story.date}</p>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
