import ScrollToTopButton from "../components/ScrollToTopButton";
import { getCategoryDescription } from "../lib/category-copy";
import { getCategoryNews, getSortedNews } from "../lib/news";
import HomeCategoryFront from "../components/HomeCategoryFront";
import NewspaperHero from "../components/NewspaperHero";
import HomeFieldNotes from "../components/HomeFieldNotes";
import HomePulseStrip from "../components/Homepulsestrip";
import HomeInFocus from "../components/Homeinfocus";

export default async function Home() {
  const sortedNews = getSortedNews();

  const usedSlugs = new Set<string>();

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

  const [leadStory] = pickUnique(sortedNews, 1);
  const latestHeadlines = pickUnique(sortedNews, 7);
  const editorPicks = pickUnique(sortedNews, 3);
  const mostRead = pickUnique(sortedNews, 7);

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

  const pulseStories = pickUnique(
    interleave(
      getSortedNews(getCategoryNews("science")),
      getSortedNews(getCategoryNews("health")),
    ),
    4,
  );

  const inFocusStories = pickUnique(
    interleave(
      getSortedNews(getCategoryNews("entertainment")),
      getSortedNews(getCategoryNews("sports")),
    ),
    5,
  );

  const educationStories = getSortedNews(getCategoryNews("education"));
  const fieldNotesPool = [...educationStories, ...sortedNews];
  const fieldNotes = pickUnique(fieldNotesPool, 6);

  // ─── JSON-LD schemas ──────────────────────────────────────────────────────
  const homepageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.mirrorstandard.com/#webpage",
      "url": "https://www.mirrorstandard.com",
      "name": "Mirror Standard | Trusted News, Politics & Business",
      "description":
        "Mirror Standard provides trusted global news with in-depth political analysis, business insights, and technology updates.",
      "isPartOf": { "@id": "https://www.mirrorstandard.com/#website" },
      "about": [
        { "@type": "Thing", "name": "News" },
        { "@type": "Thing", "name": "Politics" },
        { "@type": "Thing", "name": "Business" },
        { "@type": "Thing", "name": "Technology" },
      ],
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.mirrorstandard.com",
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Latest News from Mirror Standard",
      "url": "https://www.mirrorstandard.com",
      "itemListElement": sortedNews.slice(0, 10).map((n, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `https://www.mirrorstandard.com/${n.category}/${n.slug}`,
        "name": n.title,
      })),
    },
    ...(leadStory
      ? [
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": leadStory.title,
            "description": leadStory.shortdescription,
            "image": leadStory.image,
            "datePublished": leadStory.date,
            "author": { "@type": "Person", "name": leadStory.author },
            "publisher": {
              "@id": "https://www.mirrorstandard.com/#organization",
            },
            "url": `https://www.mirrorstandard.com/${leadStory.category}/${leadStory.slug}`,
            "articleSection": leadStory.category,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.mirrorstandard.com",
            },
          },
        ]
      : []),
  ];

  return (
    <main className="newspaper-root bg-[#f9f7f2]">

      {/* Inline JSON-LD — most reliable for App Router server components */}
      <script
        id="structured-data-homepage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/*
       * SEO: Visible H1 styled as a thin editorial tagline strip.
       * Keeps keywords in page text (sr-only can be ignored by some auditors).
       * Visually unobtrusive — looks like a section divider / masthead subtitle.
       */}
      <h1
        aria-label="Mirror Standard – Trusted News on Politics, Business and Global Affairs"
        className="mx-auto max-w-[1280px] px-3 sm:px-8 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ms-text-faint)]"
      >
        Mirror Standard &mdash; Trusted News &middot; Politics &middot; Business &middot; Global Affairs
      </h1>

      <div className="newspaper-container px-3 sm:px-8">

        {/* Hero — lead story heading uses <h2> inside NewspaperHero */}
        <NewspaperHero
          lead={leadStory}
          latestHeadlines={latestHeadlines}
          editorPicks={editorPicks}
          mostRead={mostRead}
        />

        {/* Category Sections + Sticky Sidebar */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-6">
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

         <div className="hidden lg:block">
          <div className="newspaper-rule mt-2 mb-6 invisible" />

          <div className="sticky top-4 overflow-hidden rounded-md">
            <video
              autoPlay
              muted
              playsInline
              className="h-[520px] w-full object-cover"
            >
              <source src="/videos/mirrorstandar_ads-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        </div>

        {pulseStories.length >= 2 && <HomePulseStrip stories={pulseStories} />}
        {inFocusStories.length >= 1 && (
          <HomeInFocus
            lead={inFocusStories[0]}
            secondary={inFocusStories.slice(1, 5)}
          />
        )}
        {fieldNotes.length >= 1 && <HomeFieldNotes stories={fieldNotes} />}

      </div>

      <ScrollToTopButton />
    </main>
  );
}