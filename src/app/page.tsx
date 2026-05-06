  import Header from "@/components/Header";
  import Navbar from "@/components/Navbar";
  import NewsFirstLayout from "@/components/NewsFristLayout";
  import ArticleLayout from "@/components/ArticleLayout";
  import ArticlesGrid from "@/components/ArticlesGrid";
  import MoreTopHeadlines from "@/components/MoreTopHeadlines";
  import ExclusiveClips from "@/components/ExclusiveClips";
  import MainLayout from "@/components/MainLayout";
  import EntertainmentSection from "@/components/Entertainment";
  import ScrollLayout from "@/components/ScrollLayout";
  import ScrollToTopButton from "@/components/ScrollToTopButton";
  import Script from "next/script";
  import businessData from '../../public/data/business.json'
  import educationData from '../../public/data/education.json'
  import entertainmentData from '../../public/data/entertainment.json'
  import healthData from '../../public/data/health.json'
  import lifestyleData from '../../public/data/lifestyle.json'
  import politicsData from '../../public/data/politics.json'
  import scienceData from '../../public/data/science.json'
  import technologyData from '../../public/data/technology.json'
  import sportsData from '../../public/data/sports.json'
  import DynamicSection from "@/components/DynamicSection";

  export default async function Home() {
    const allNews = [
    ...businessData,
    ...educationData,
    ...entertainmentData,
    ...healthData,
    ...lifestyleData,
    ...politicsData,
    ...scienceData,
    ...technologyData,
    ...sportsData,
  ];

  // Helper to parse dates like "Jan. 28 2026" or "Dec. 26, 2025"
  const parseDate = (dateStr: string) => {
    const cleanedDate = dateStr.replace('.', '');
    const timestamp = Date.parse(cleanedDate);
    return isNaN(timestamp) ? 0 : timestamp;
  };

  const sortedNews = [...allNews].sort((a, b) => parseDate(b.date) - parseDate(a.date));

  return (
    <main>
      <Script
        id="structured-data-site-navigation"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": [
              "Home",
              "Business",
              "Politics",
              "Technology",
              "Science",
              "Sports",
              "Health",
              "Education",
              "Entertainment"
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
          })
        }}
      />
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full max-w-7xl md:px-8 px-4 mx-auto">
        <NewsFirstLayout data={sortedNews.slice(0, 10)} />
        <ArticleLayout data={sortedNews.slice(10, 16)} />
        <ArticlesGrid data={sortedNews.slice(16, 20)} />
        <DynamicSection data={sortedNews.slice(20, 51)} />
        <MoreTopHeadlines data={sortedNews.slice(51, 62)} />
        <ExclusiveClips data={sortedNews.slice(62, 73)} />
        <MainLayout data={sortedNews.slice(73, 78)} />
        <EntertainmentSection data={sortedNews.slice(78, 83)} />
        <ScrollLayout data={sortedNews.slice(83, 98)} />
        <ScrollToTopButton />
      </div>
    </main>
  );
}