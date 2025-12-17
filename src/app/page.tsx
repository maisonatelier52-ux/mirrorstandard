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


  return (
    <main>
      <Script
        id="structured-data-newsmediaorganization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              "@id": "https://www.mirrorstandard.com/#organization",
              name: "Mirror Standard",
              url: "https://www.mirrorstandard.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
                width: 1024,
                height: 1024,
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                areaServed: "US",
                availableLanguage: ["English"],
              },

              sameAs: ["https://www.mirrorstandard.com"],
            },
            null,
            2
          ),
        }}
      />

      <Script
        id="structured-data-site-navigation"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: [
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
              url: [
                "https://www.mirrorstandard.com",
                "https://www.mirrorstandard.com/business/",
                "https://www.mirrorstandard.com/politics/",
                "https://www.mirrorstandard.com/science/",
                "https://www.mirrorstandard.com/technology/",
                "https://www.mirrorstandard.com/sports",
                "https://www.mirrorstandard.com/health/",
                "https://www.mirrorstandard.com/education/",
                "https://www.mirrorstandard.com/entertainment/",

              ],
            },
            null,
            2
          ),
        }}
      />
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full max-w-7xl md:px-8 px-4 mx-auto">
        <NewsFirstLayout data={[businessData[0], healthData[13], scienceData[9], politicsData[16], educationData[26], technologyData[0], sportsData[0], businessData[3], educationData[14], businessData[23]]} />
        <ArticleLayout data={[politicsData[0], politicsData[1], politicsData[2], politicsData[10], politicsData[4], politicsData[5]]} />
        <ArticlesGrid data={[educationData[1], scienceData[1], technologyData[4], educationData[3]]} />
        <DynamicSection data={[politicsData[17],politicsData[7],politicsData[15],politicsData[11],politicsData[9],politicsData[6], healthData[8],healthData[3],healthData[0],healthData[1],healthData[2],healthData[5],healthData[6], scienceData[4], scienceData[2],scienceData[0],scienceData[8],scienceData[3],scienceData[5],educationData[4], educationData[11],educationData[0],educationData[9],educationData[2],educationData[6],businessData[0],businessData[1],businessData[2],businessData[20],businessData[6],businessData[5]]} />
        <MoreTopHeadlines data={[sportsData[12], educationData[8], politicsData[3], sportsData[3], technologyData[3], educationData[5], businessData[8], healthData[7], educationData[10], sportsData[9], sportsData[11]]} />
        <ExclusiveClips data={[entertainmentData[9], healthData[9], sportsData[4], technologyData[8], politicsData[8], educationData[17], businessData[21], entertainmentData[2], businessData[4], entertainmentData[1], entertainmentData[0]]} />
        <MainLayout data={[politicsData[12], educationData[19], healthData[11], sportsData[10], educationData[16]]} />
        <EntertainmentSection data={[healthData[28], healthData[21], healthData[12], healthData[10], healthData[4]]} />
        <ScrollLayout data={[politicsData[14], sportsData[22], businessData[22], technologyData[20], educationData[7], healthData[24], scienceData[7], politicsData[27], scienceData[15], scienceData[16], scienceData[18], entertainmentData[19], entertainmentData[18], entertainmentData[20], technologyData[28]]} />
        <ScrollToTopButton />
      </div>
    </main>
  );
}