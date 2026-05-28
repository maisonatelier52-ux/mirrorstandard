import ScrollToTopButton from "../components/ScrollToTopButton";
import { getCategoryDescription } from "../lib/category-copy";
import { getCategoryNews, getSortedNews } from "../lib/news";
import Script from "next/script";
import HomeCategoryFront from "../components/HomeCategoryFront";
import NewspaperHero from "../components/NewspaperHero";

import HomeFieldNotes from "../components/HomeFieldNotes";
import HomePulseStrip from "../components/Homepulsestrip";
import HomeInFocus from "../components/Homeinfocus";

export default async function Home() {
  const sortedNews = getSortedNews();

  // Track every slug we've already placed on the page
  const usedSlugs = new Set<string>();

  // ─── Helper: pick N unique stories from a candidate list ─────────────────
  function pickUnique(candidates: ReturnType<typeof getSortedNews>, n: number) {
    const result: ReturnType<typeof getSortedNews> = [];
    for (const s of candidates) {
      if (result.length >= n) break;
      if (!usedSlugs.has(s.slug)) {
        result.push(s);
        usedSlugs.add(s.slug);
      }
    }
    return result;
  }

  // ─── Helper: interleave two arrays ───────────────────────────────────────
  function interleave(
    a: ReturnType<typeof getSortedNews>,
    b: ReturnType<typeof getSortedNews>,
  ) {
    const result: ReturnType<typeof getSortedNews> = [];
    const max = Math.max(a.length, b.length);
    for (let i = 0; i < max; i++) {
      if (a[i]) result.push(a[i]);
      if (b[i]) result.push(b[i]);
    }
    return result;
  }

  // ─── Hero picks ──────────────────────────────────────────────────────────
  // All hero picks go through pickUnique so usedSlugs is always up-to-date

  const [leadStory] = pickUnique(sortedNews, 1);

  // latestHeadlines: next 7 unique stories (shown in middle column + 2 below hero)
  const latestHeadlines = pickUnique(sortedNews, 7);

  // editorPicks: next 3 unique stories (middle column)
  const editorPicks = pickUnique(sortedNews, 3);

  // mostRead: next 5 unique stories (right column)
  const mostRead = pickUnique(sortedNews, 7);

  // ─── Front-page category sections (business, politics, technology) ────────
  const frontCategories = ["business", "politics", "technology"];

  const sectionPackages = frontCategories
    .map((category) => {
      const categoryStories = getSortedNews(getCategoryNews(category));
      const selected = pickUnique(categoryStories, 4);

      return {
        category,
        lead: selected[0],
        secondary: selected.slice(1, 4),
        description: getCategoryDescription(category),
      };
    })
    .filter((item) => item.lead);

  // ─── The Pulse: science + health ─────────────────────────────────────────
  const pulseStories = pickUnique(
    interleave(
      getSortedNews(getCategoryNews("science")),
      getSortedNews(getCategoryNews("health")),
    ),
    4,
  );

  // ─── In Focus: entertainment + sports ────────────────────────────────────
  const inFocusStories = pickUnique(
    interleave(
      getSortedNews(getCategoryNews("entertainment")),
      getSortedNews(getCategoryNews("sports")),
    ),
    5,
  );

  // ─── More Stories: education + everything left ────────────────────────────
  const educationStories = getSortedNews(getCategoryNews("education"));
  const fieldNotesPool = [...educationStories, ...sortedNews];
  const fieldNotes = pickUnique(fieldNotesPool, 6);

  return (
    <main className="newspaper-root bg-[#f9f7f2]">
      <Script
        id="structured-data-homepage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Latest News from Mirror Standard",
            "url": "https://www.mirrorstandard.com",
            "itemListElement": sortedNews.slice(0, 10).map((n, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "url": `https://www.mirrorstandard.com/${n.category}/${n.slug}`,
            })),
          }),
        }}
      />

      <div className="newspaper-container px-3 sm:px-8">

        {/* ── Hero ── */}
        <NewspaperHero
          lead={leadStory}
          latestHeadlines={latestHeadlines}
          editorPicks={editorPicks}
          mostRead={mostRead}
        />

        {/* ── Category Sections + Sticky Sidebar ── */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-6">

          {/* Left: category fronts */}
          <div>
            <div className="newspaper-rule mt-2 mb-6" />
            {sectionPackages.map((section, i) => (
              <HomeCategoryFront
                key={section.category}
                category={section.category}
                description={section.description}
                lead={section.lead}
                secondary={section.secondary}
                tone={i === 1 ? "mist" : i === 2 ? "paper" : "ivory"}
              />
            ))}
          </div>

          {/* Right: sticky promo */}
          <div className="hidden lg:block">
            <div className="newspaper-rule mt-2 mb-6 invisible" />
            <div className="sticky top-4">
              <div className="flex min-h-[520px] flex-col justify-center bg-[color:var(--ms-footer-bg)] p-5 text-[color:var(--ms-footer-text)]">
                <p className="ms-editorial-serif text-[28px] leading-[1.1] tracking-[-0.03em] text-white">
                  Insight. Analysis. Impact.
                </p>
                <p className="mt-3 text-[13px] leading-6 text-[color:var(--ms-footer-muted)]">
                  Independent journalism that informs decisions.
                </p>
                <a
                  href="/about"
                  className="ms-meta mt-5 inline-block rounded-sm bg-white px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--ms-accent)] hover:bg-[color:var(--ms-accent-soft)] transition-colors text-center"
                >
                  Subscribe Now
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── The Pulse (science + health) ── */}
        {pulseStories.length >= 2 && (
          <HomePulseStrip stories={pulseStories} />
        )}

        {/* ── In Focus (entertainment + sports) ── */}
        {inFocusStories.length >= 1 && (
          <HomeInFocus
            lead={inFocusStories[0]}
            secondary={inFocusStories.slice(1, 5)}
          />
        )}

        {/* ── More Stories (education + remaining) ── */}
        {fieldNotes.length >= 1 && (
          <HomeFieldNotes stories={fieldNotes} />
        )}

      </div>

      <ScrollToTopButton />
    </main>
  );
}