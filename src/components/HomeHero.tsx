// import type { NewsArticle } from "@/lib/news";
// import { formatCategoryName } from "@/lib/category-copy";
// import Image from "next/image";
// import Link from "next/link";

// interface Props {
//   lead?: NewsArticle;
//   sideStories: NewsArticle[];
//   pulseStories: NewsArticle[];
// }

// export default function HomeHero({ lead, sideStories, pulseStories }: Props) {
//   if (!lead) {
//     return null;
//   }

//   return (
//     <section className="mt-8 rounded-[38px] border border-[color:var(--ms-border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(235,226,209,0.88))] px-5 py-6 shadow-[0_26px_80px_rgba(21,22,18,0.06)] sm:px-7 sm:py-8 lg:px-10 lg:py-10">
//       <div className="grid gap-8 xl:grid-cols-[minmax(0,1.35fr)_360px]">
//         <div className="min-w-0">
//           <div className="max-w-[760px]">
//             <p className="ms-meta text-[11px] uppercase tracking-[0.24em] text-[color:var(--ms-text-faint)]">
//               Front Page
//             </p>
//             <h1 className="ms-editorial-serif mt-4 text-[44px] leading-[0.92] tracking-[-0.05em] text-[color:var(--ms-text)] sm:text-[58px] lg:text-[68px]">
//               Today&apos;s report
//             </h1>
//             <p className="mt-4 max-w-[680px] text-[17px] leading-8 text-[color:var(--ms-text-soft)] sm:text-[19px]">
//               Longform reporting, fast developments, and institutional context from
//               across the Mirror Standard newsroom.
//             </p>
//           </div>

//           <Link
//             href={`/${lead.category}/${lead.slug}`}
//             title={lead.title}
//             className="group mt-8 block overflow-hidden rounded-[34px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] shadow-[0_22px_70px_rgba(21,22,18,0.05)]"
//           >
//             <div className="grid gap-0 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
//               <div className="relative aspect-[1.08/1] min-h-[320px] overflow-hidden lg:min-h-[100%]">
//                 <Image
//                   src={lead.image}
//                   alt={lead.title}
//                   fill
//                   priority
//                   className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//                   sizes="(max-width: 1024px) 100vw, 58vw"
//                 />
//                 <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,24,37,0.08),rgba(14,24,37,0.2))]" />
//               </div>
//               <div className="flex flex-col justify-between px-5 py-6 sm:px-7 sm:py-7">
//                 <div>
//                   <div className="flex flex-wrap items-center gap-3">
//                     <span className="ms-meta rounded-full bg-[color:var(--ms-accent-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-accent)]">
//                       {formatCategoryName(lead.category)}
//                     </span>
//                     <span className="ms-meta text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-text-faint)]">
//                       {lead.date}
//                     </span>
//                   </div>
//                   <h2 className="ms-editorial-serif mt-5 text-[34px] leading-[0.98] tracking-[-0.04em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)] sm:text-[42px] lg:text-[48px]">
//                     {lead.title}
//                   </h2>
//                   <p className="mt-5 max-w-[34ch] text-[17px] leading-8 text-[color:var(--ms-text-soft)]">
//                     {lead.shortdescription}
//                   </p>
//                 </div>
//                 <div className="mt-8 border-t border-[color:var(--ms-border)] pt-5">
//                   <span className="ms-meta inline-flex text-[11px] uppercase tracking-[0.2em] text-[color:var(--ms-accent)]">
//                     Read the full report
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>

//           {sideStories.length > 0 ? (
//             <div className="mt-6 grid gap-4 md:grid-cols-2">
//               {sideStories.map((story) => (
//                 <Link
//                   key={story.slug}
//                   href={`/${story.category}/${story.slug}`}
//                   title={story.title}
//                   className="group rounded-[26px] border border-[color:var(--ms-border)] bg-[rgba(255,255,255,0.88)] px-5 py-5 shadow-[0_16px_45px_rgba(21,22,18,0.04)]"
//                 >
//                   <p className="ms-meta text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-text-faint)]">
//                     {formatCategoryName(story.category)} · {story.date}
//                   </p>
//                   <h3 className="ms-editorial-serif mt-3 text-[28px] leading-[1.02] tracking-[-0.03em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)]">
//                     {story.title}
//                   </h3>
//                   <p className="mt-3 line-clamp-3 text-[15px] leading-7 text-[color:var(--ms-text-soft)]">
//                     {story.shortdescription}
//                   </p>
//                 </Link>
//               ))}
//             </div>
//           ) : null}
//         </div>

//         <aside className="ms-ink-panel rounded-[32px] border border-[color:var(--ms-footer-border)] px-5 py-6 text-[color:var(--ms-footer-text)] shadow-[0_28px_90px_rgba(9,16,25,0.28)] sm:px-6 sm:py-7">
//           <p className="ms-meta text-[11px] uppercase tracking-[0.24em] text-[color:var(--ms-footer-muted)]">
//             Signals
//           </p>
//           <h2 className="ms-editorial-serif mt-4 text-[34px] leading-[0.98] tracking-[-0.04em] text-white">
//             What the newsroom is watching
//           </h2>
//           <p className="mt-4 text-[15px] leading-7 text-[color:var(--ms-footer-muted)]">
//             Fast-moving coverage, sharp turns, and the stories rising across the
//             wider report.
//           </p>

//           <div className="mt-7 space-y-4">
//             {pulseStories.map((story) => (
//               <Link
//                 key={story.slug}
//                 href={`/${story.category}/${story.slug}`}
//                 title={story.title}
//                 className="block rounded-[22px] border border-[color:var(--ms-footer-border)] bg-white/5 px-4 py-4 hover:bg-white/10"
//               >
//                 <p className="ms-meta text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-footer-muted)]">
//                   {formatCategoryName(story.category)} · {story.date}
//                 </p>
//                 <h3 className="ms-editorial-serif mt-3 text-[24px] leading-[1.03] tracking-[-0.03em] text-white">
//                   {story.title}
//                 </h3>
//               </Link>
//             ))}
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// }


import type { NewsArticle } from "../lib/news";
import { formatCategoryName } from "../lib/category-copy";
import Image from "next/image";
import Link from "next/link";

interface Props {
  lead?: NewsArticle;
  sideStories: NewsArticle[];
  pulseStories: NewsArticle[];
}

export default function HomeHero({ lead, sideStories, pulseStories }: Props) {
  if (!lead) {
    return null;
  }

  return (
    <section className="mt-8 rounded-[38px] border border-[color:var(--ms-border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(235,226,209,0.88))] px-5 py-6 shadow-[0_26px_80px_rgba(21,22,18,0.06)] sm:px-7 sm:py-8 lg:px-10 lg:py-10">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.35fr)_360px] xl:items-stretch">
        <div className="min-w-0">
          <div className="max-w-[760px]">
            <p className="ms-meta text-[11px] uppercase tracking-[0.24em] text-[color:var(--ms-text-faint)]">
              Front Page
            </p>
            <h1 className="ms-editorial-serif mt-4 text-[44px] leading-[0.92] tracking-[-0.05em] text-[color:var(--ms-text)] sm:text-[58px] lg:text-[68px]">
              Today&apos;s report
            </h1>
            <p className="mt-4 max-w-[680px] text-[17px] leading-8 text-[color:var(--ms-text-soft)] sm:text-[19px]">
              Longform reporting, fast developments, and institutional context from
              across the Mirror Standard newsroom.
            </p>
          </div>

          <Link
            href={`/${lead.category}/${lead.slug}`}
            title={lead.title}
            className="group mt-8 block overflow-hidden rounded-[34px] border border-[color:var(--ms-border)] bg-[color:var(--ms-surface)] shadow-[0_22px_70px_rgba(21,22,18,0.05)]"
          >
            <div className="grid gap-0 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
              <div className="relative aspect-[16/10] min-h-[240px] overflow-hidden lg:aspect-auto lg:min-h-[100%]">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,24,37,0.08),rgba(14,24,37,0.2))]" />
              </div>
              <div className="flex flex-col justify-between px-5 py-6 sm:px-7 sm:py-7">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="ms-meta rounded-full bg-[color:var(--ms-accent-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-accent)]">
                      {formatCategoryName(lead.category)}
                    </span>
                    <span className="ms-meta text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-text-faint)]">
                      {lead.date}
                    </span>
                  </div>
                  <h2 className="ms-editorial-serif mt-5 text-[34px] leading-[0.98] tracking-[-0.04em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)] sm:text-[27px] lg:text-[36px]">
                    {lead.title}
                  </h2>
                  <p className="mt-5 max-w-[34ch] text-[15px] leading-6 text-[color:var(--ms-text-soft)]">
                    {lead.shortdescription}
                  </p>
                </div>
                <div className="mt-8 border-t border-[color:var(--ms-border)] pt-5">
                  <span className="ms-meta inline-flex text-[11px] uppercase tracking-[0.2em] text-[color:var(--ms-accent)]">
                    Read the full report
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {sideStories.length > 0 ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {sideStories.map((story) => (
                <Link
                  key={story.slug}
                  href={`/${story.category}/${story.slug}`}
                  title={story.title}
                  className="group rounded-[26px] border border-[color:var(--ms-border)] bg-[rgba(255,255,255,0.88)] px-5 py-5 shadow-[0_16px_45px_rgba(21,22,18,0.04)]"
                >
                  <p className="ms-meta text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-text-faint)]">
                    {formatCategoryName(story.category)} · {story.date}
                  </p>
                  <h3 className="ms-editorial-serif mt-3 text-[28px] leading-[1.02] tracking-[-0.03em] text-[color:var(--ms-text)] transition-colors group-hover:text-[color:var(--ms-accent)]">
                    {story.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[15px] leading-6 text-[color:var(--ms-text-soft)]">
                    {story.shortdescription}
                  </p>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="ms-ink-panel rounded-[32px] border border-[color:var(--ms-footer-border)] px-5 py-6 text-[color:var(--ms-footer-text)] shadow-[0_28px_90px_rgba(9,16,25,0.28)] sm:px-6 sm:py-7 xl:flex xl:flex-col">
          <p className="ms-meta text-[11px] uppercase tracking-[0.24em] text-[color:var(--ms-footer-muted)]">
            Signals
          </p>
          <h2 className="ms-editorial-serif mt-4 text-[34px] leading-[0.98] tracking-[-0.04em] text-white">
            What the newsroom is watching
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[color:var(--ms-footer-muted)]">
            Fast-moving coverage, sharp turns, and the stories rising across the
            wider report.
          </p>

          <div className="mt-7 space-y-4 xl:flex-1">
            {pulseStories.map((story) => (
              <Link
                key={story.slug}
                href={`/${story.category}/${story.slug}`}
                title={story.title}
                className="block rounded-[22px] border border-[color:var(--ms-footer-border)] bg-white/5 px-4 py-4 hover:bg-white/10"
              >
                <p className="ms-meta text-[11px] uppercase tracking-[0.18em] text-[color:var(--ms-footer-muted)]">
                  {formatCategoryName(story.category)} · {story.date}
                </p>
                <h3 className="ms-editorial-serif mt-3 text-[24px] leading-[1.03] tracking-[-0.03em] text-white">
                  {story.title}
                </h3>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}