import React from 'react';
import businessData from '../../../public/data/business.json';
import technologyData from '../../../public/data/technology.json';
import sportsData from '../../../public/data/sports.json';
import healthData from '../../../public/data/health.json';
import politicsData from '../../../public/data/politics.json';
import scienceData from '../../../public/data/science.json';
import entertainmentData from '../../../public/data/entertainment.json';
import educationData from '../../../public/data/education.json';
import CategoryHeader from '@/components/CategoryHeader';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import CategorySection from '@/components/CategorySection';
import ScrollToTopButton from '@/components/ScrollToTopButton';

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

const allData: Record<string, NewsItem[]> = {
  business: businessData,
  technology: technologyData,
  sports: sportsData,
  health: healthData,
  politics: politicsData,
  science: scienceData,
  entertainment: entertainmentData,
  education: educationData,
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));

}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

const categoryMeta: Record<string, { title: string; description: string }> = {
  business: {
    title: "Business News & Market Trends | Mirror Standard",
    description:
      "Latest business news, market trends, corporate updates, startup growth, and investment insights shaping the global economy.",
  },

  technology: {
    title: "Technology News & AI Updates | Mirror Standard",
    description:
      "Breaking tech news covering AI, gadgets, startups, cybersecurity, apps, and digital innovations shaping the future.",
  },

  sports: {
    title: "Sports News, Scores & Match Analysis | Mirror Standard",
    description:
      "Live sports news, scores, match results, player stats, tournaments, and expert analysis from global sports events.",
  },

  health: {
    title: "Health News, Wellness & Medical Updates | Mirror Standard",
    description:
      "Trusted health news on fitness, wellness, nutrition, mental health, medical research, and healthy living tips.",
  },

  science: {
    title: "Science News, Space & Research Updates | Mirror Standard",
    description:
      "Science news covering space exploration, climate research, scientific discoveries, innovation, and future technologies.",
  },

  politics: {
    title: "Politics News, Elections & Policy Updates | Mirror Standard",
    description:
      "Breaking political news, election coverage, government policy updates, global politics, and expert political analysis.",
  },

  education: {
    title: "Education News & Learning Updates | Mirror Standard",
    description:
      "Education news on schools, universities, exams, education policy, online learning, and student success stories.",
  },

  entertainment: {
    title: "Entertainment News, Movies & Celebrities | Mirror Standard",
    description:
      "Entertainment news featuring movies, TV shows, celebrities, music, streaming platforms, and pop culture trends.",
  },
};


  const siteUrl = "https://www.mirrorstandard.com";
  const categoryUrl = `${siteUrl}/${category}`;
  const meta = categoryMeta[category] || {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} News – Mirror Standard`,
    description: `Latest updates and breaking stories in ${category}.`,
  };

  const firstArticle = allData[category]?.[0];
  const firstArticleImage =
    firstArticle?.image?.startsWith("http")
      ? firstArticle.image
      : `${siteUrl}${firstArticle?.image || "/images/mirrorstandard-logo.webp"}`;


  const todayDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());


  if (!firstArticle) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: categoryUrl },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: categoryUrl,
      siteName: "Mirror Standard",
      locale: "en_US",
      publishedTime: todayDate,
      modifiedTime: todayDate,
      images: [
        {
          url: firstArticleImage,
          width: 1200,
          height: 630,
          alt: `${category} news`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [firstArticleImage],
      site: "@Mirrorstandard",
    },
  };
}


export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = allData[category];

  if (!data) {
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
    <>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="w-full max-w-7xl px-5 md:px-8 mx-auto md:py-8 py-0">
        <CategoryHeader category={category} />
        <CategorySection data={data} />
        <ScrollToTopButton />

      </div>
    </>
  );
}