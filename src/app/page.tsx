  import Navbar from "@/components/Navbar";
  import NewsFirstLayout from "@/components/NewsFristLayout";
  import ArticleLayout from "@/components/ArticleLayout";
  import ArticlesGrid from "@/components/ArticlesGrid";
  import dynamic from "next/dynamic";

  const MoreTopHeadlines = dynamic(() => import("@/components/MoreTopHeadlines"));
  const ExclusiveClips = dynamic(() => import("@/components/ExclusiveClips"));
  const MainLayout = dynamic(() => import("@/components/MainLayout"));
  const EntertainmentSection = dynamic(() => import("@/components/Entertainment"));
  const ScrollLayout = dynamic(() => import("@/components/ScrollLayout"));
  const ScrollToTopButton = dynamic(() => import("@/components/ScrollToTopButton"));
  import Script from "next/script";
  import DynamicSection from "@/components/DynamicSection";
  import { getSortedNews } from "@/lib/news";

  export default async function Home() {
    const sortedNews = getSortedNews();

    const newsFirstData = sortedNews.slice(0, 10);
    const articleLayoutData = sortedNews.slice(10, 16);
    const articlesGridData = sortedNews.slice(16, 20);

    const displayedSlugs = new Set([
      ...newsFirstData.map(n => n.slug),
      ...articleLayoutData.map(n => n.slug),
      ...articlesGridData.map(n => n.slug)
    ]);

    const afterTop20 = sortedNews.filter(n => !displayedSlugs.has(n.slug));

    const dynamicCategories = ["all", "politics", "health", "science", "business", "education"];
    const dynamicReservedSlugs = new Set<string>();
    
    dynamicCategories.forEach(cat => {
      const catArticles = cat === "all" 
        ? afterTop20.slice(0, 6)
        : afterTop20.filter(n => n.category === cat).slice(0, 6);
      catArticles.forEach(n => dynamicReservedSlugs.add(n.slug));
    });

    const remainingForOthers = afterTop20.filter(n => !dynamicReservedSlugs.has(n.slug));

    return (
      <main itemScope itemType="https://schema.org/CollectionPage">
        <Script
          id="structured-data-homepage"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Latest News from Mirror Standard",
                "description": "The latest breaking news, politics, and business analysis.",
                "url": "https://www.mirrorstandard.com",
                "itemListElement": sortedNews.slice(0, 10).map((n, i) => ({
                  "@type": "ListItem",
                  "position": i + 1,
                  "url": `https://www.mirrorstandard.com/${n.category}/${n.slug}`
                }))
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "name": [
                  "Home", "Business", "Politics", "Technology", "Science",
                  "Sports", "Health", "Education", "Entertainment"
                ],
                "url": [
                  "https://www.mirrorstandard.com/",
                  "https://www.mirrorstandard.com/business/",
                  "https://www.mirrorstandard.com/politics/",
                  "https://www.mirrorstandard.com/technology/",
                  "https://www.mirrorstandard.com/science/",
                  "https://www.mirrorstandard.com/sports/",
                  "https://www.mirrorstandard.com/health/",
                  "https://www.mirrorstandard.com/education/",
                  "https://www.mirrorstandard.com/entertainment/"
                ]
              }
            ])
          }}
        />
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="w-full max-w-7xl md:px-8 px-4 mx-auto">
          <NewsFirstLayout data={newsFirstData} />
          <ArticleLayout data={articleLayoutData} />
          <ArticlesGrid data={articlesGridData} />
          <DynamicSection data={afterTop20} />
          <MoreTopHeadlines data={remainingForOthers.slice(0, 11)} />
          <ExclusiveClips data={remainingForOthers.slice(11, 22)} />
          <MainLayout data={remainingForOthers.slice(22, 27)} />
          <EntertainmentSection data={remainingForOthers.slice(27, 32)} />
          <ScrollLayout data={remainingForOthers.slice(32, 47)} />
          <ScrollToTopButton />
        </div>
      </main>
    );
  }