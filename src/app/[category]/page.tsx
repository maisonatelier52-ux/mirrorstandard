import React from 'react';
import { getSortedNews } from '@/lib/news';
import CategoryHeader from '@/components/CategoryHeader';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import CategorySection from '@/components/CategorySection';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Script from 'next/script';

export async function generateStaticParams() {
  const categories = ['business', 'technology', 'sports', 'health', 'politics', 'science', 'entertainment', 'education'];
  return categories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  const categoryMeta: Record<string, { title: string; description: string; keywords: string }> = {
    business: {
      title: "Business News & Market Trends | Mirror Standard",
      description:
        "Latest business news, market trends, corporate updates, startup growth, and investment insights shaping the global economy.",
      keywords: "business news, market trends, corporate updates, startup news, investment insights, global economy",
    },

    technology: {
      title: "Technology News & AI Updates | Mirror Standard",
      description:
        "Breaking tech news covering AI, gadgets, startups, cybersecurity, apps, and digital innovations shaping the future.",
      keywords: "tech news, AI updates, artificial intelligence, gadgets, cybersecurity, digital innovation, startups",
    },

    sports: {
      title: "Sports News, Scores & Match Analysis | Mirror Standard",
      description:
        "Live sports news, scores, match results, player stats, tournaments, and expert analysis from global sports events.",
      keywords: "sports news, live scores, match analysis, player stats, tournaments, sports updates",
    },

    health: {
      title: "Health News, Wellness & Medical Updates | Mirror Standard",
      description:
        "Trusted health news on fitness, wellness, nutrition, mental health, medical research, and healthy living tips.",
      keywords: "health news, wellness tips, medical updates, fitness, nutrition, mental health, medical research",
    },

    science: {
      title: "Science News, Space & Research Updates | Mirror Standard",
      description:
        "Science news covering space exploration, climate research, scientific discoveries, innovation, and future technologies.",
      keywords: "science news, space exploration, climate research, scientific discoveries, innovation, future tech",
    },

    politics: {
      title: "Politics News, Elections & Policy Updates | Mirror Standard",
      description:
        "Breaking political news, election coverage, government policy updates, global politics, and expert political analysis.",
      keywords: "politics news, election coverage, government policy, global politics, political analysis",
    },

    education: {
      title: "Education News & Learning Updates | Mirror Standard",
      description:
        "Education news on schools, universities, exams, education policy, online learning, and student success stories.",
      keywords: "education news, learning updates, school news, university updates, online learning, student success",
    },

    entertainment: {
      title: "Entertainment News, Movies & Celebrities | Mirror Standard",
      description:
        "Entertainment news featuring movies, TV shows, celebrities, music, streaming platforms, and pop culture trends.",
      keywords: "entertainment news, movie reviews, celebrity news, pop culture, TV shows, streaming news",
    },
  };


  const siteUrl = "https://www.mirrorstandard.com";
  const categoryUrl = `${siteUrl}/${category}`;
  const logoUrl = `${siteUrl}/images/mirrorstandard-logo.webp`;
  
  const meta = categoryMeta[category] || {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} News – Mirror Standard`,
    description: `Latest updates and breaking stories in ${category}.`,
    keywords: `${category} news, latest ${category} updates, breaking ${category} news`,
  };



  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: categoryUrl },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: categoryUrl,
      siteName: "Mirror Standard",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: logoUrl,
          width: 1200,
          height: 630,
          alt: "Mirror Standard Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [logoUrl],
      site: "@Mirrorstandard",
      creator: "@Mirrorstandard",
    },
  };
}


export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const sortedNews = getSortedNews();
  const data = sortedNews.filter(n => n.category === category);

  if (data.length === 0) {
    return (
      <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">
          404 – Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The category you’re looking for doesn’t exist.
        </p>
      </main>
    );
  }

  return (
    <main itemScope itemType="https://schema.org/CollectionPage">
      <Script
        id="structured-data-category"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": `${category.charAt(0).toUpperCase() + category.slice(1)} News | Mirror Standard`,
              "description": `Latest ${category} news and updates from Mirror Standard.`,
              "url": `https://www.mirrorstandard.com/${category}`,
              "itemListElement": data.slice(0, 10).map((n, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "url": `https://www.mirrorstandard.com/${n.category}/${n.slug}`
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.mirrorstandard.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": category.charAt(0).toUpperCase() + category.slice(1),
                  "item": `https://www.mirrorstandard.com/${category}`
                }
              ]
            }
          ])
        }}
      />
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full max-w-7xl px-5 md:px-8 mx-auto md:py-8 py-0">
        <CategoryHeader category={category} />
        <CategorySection data={data} />
        <ScrollToTopButton />
      </div>
    </main>
  );
}