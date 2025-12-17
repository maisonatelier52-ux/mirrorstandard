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
      title: "Business News, Finance & Market Trends – Mirror Standard",
      description:
        "Stay informed with in-depth business coverage, financial market trends, corporate updates, startup insights, and investment strategies shaping the global economy.",
    },
    technology: {
      title: "Technology News, Gadgets & Digital Innovation – Mirror Standard",
      description:
        "Explore the latest technology stories, AI breakthroughs, gadget reviews, cybersecurity updates, and innovations transforming the digital world.",
    },
    sports: {
      title: "Sports News, Live Scores & Expert Insights – Mirror Standard",
      description:
        "Catch up on live sports news, match highlights, player performance, tournament results, and expert commentary across global sporting events.",
    },
    health: {
      title: "Health News, Fitness & Wellness Tips – Mirror Standard",
      description:
        "Get trusted updates on medical research, wellness advice, nutrition, fitness, and mental health to support a healthier lifestyle.",
    },
    science: {
      title: "Science Discoveries, Space & Research News – Mirror Standard",
      description:
        "Read about groundbreaking scientific research, space exploration, environmental studies, and innovations shaping the future of science and technology.",
    },
    politics: {
      title: "Politics News, Policy & Government Affairs – Mirror Standard",
      description:
        "Follow the latest political developments, policy changes, election updates, governance insights, and international affairs with expert analysis.",
    },
    education: {
      title: "Education News, Learning & Student Insights – Mirror Standard",
      description:
        "Stay updated on education policy, schools, universities, online learning, student success stories, and the future of global education.",
    },
    entertainment: {
      title: "Entertainment News, Movies & Celebrity Updates – Mirror Standard",
      description:
        "Discover the latest in movies, music, celebrity buzz, TV shows, streaming trends, and entertainment industry highlights worldwide.",
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

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: categoryUrl },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: categoryUrl,
      siteName: "Mirror Standard",
      images: [
        {
          url: firstArticleImage,
          width: 1200,
          height: 630,
          alt: `${category} news`,
        },
      ],
      locale: "en_US",
      type: "website",
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
      <div className="container py-5">
        <p>Category not found</p>
      </div>
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