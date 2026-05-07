import React from 'react';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import healthData from '../../../../public/data/health.json';
import politicsData from '../../../../public/data/politics.json';
import scienceData from '../../../../public/data/science.json';
import entertainmentData from '../../../../public/data/entertainment.json'
import educationData from '../../../../public/data/education.json';
import Navbar from '@/components/Navbar';
import DetailSection from '@/components/DetailSection';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Script from "next/script";
import { Metadata } from 'next';

export async function generateStaticParams() {
    const allData = [
        { category: 'politics', articles: politicsData },
        { category: 'business', articles: businessData },
        { category: 'technology', articles: technologyData },
        { category: 'sports', articles: sportsData },
        { category: 'science', articles: scienceData },
        { category: 'health', articles: healthData },
        { category: 'entertainment', articles: entertainmentData },
        { category: 'education', articles: educationData },

    ];

    const params = allData.flatMap(({ category, articles }) =>
        articles.map((article) => ({
            category,
            slug: article.slug,
        }))
    );

    return params;
}


interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    image: string;
    slug: string;
    date: string;
    author: string;
    role: string;
    authorImage: string;
    authorslug: string;
    twitter: string;
    facebook: string;
    instagram: string;
    medium: string;
    substack: string;
}

interface DetailPageProps {
    params: Promise<{ category: string, slug: string }>;
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

const allNews: NewsItem[] = [
    ...businessData,
    ...technologyData,
    ...sportsData,
    ...healthData,
    ...politicsData,
    ...scienceData,
    ...entertainmentData,
    ...educationData,
];


export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
    const { category, slug } = await params;

    const allDataMap: Record<string, NewsItem[]> = {
        politics: politicsData,
        business: businessData,
        technology: technologyData,
        sports: sportsData,
        science: scienceData,
        health: healthData,
        education: educationData,
        entertainment: entertainmentData,
    };

    const articles = allDataMap[category] || [];
    const article = articles.find((a) => a.slug === slug);

    const siteUrl = 'https://www.mirrorstandard.com';
    const currentUrl = `${siteUrl}/${category}/${slug}`;
    const imageUrl = article?.image?.startsWith('http') ? article.image : `${siteUrl}${article?.image}`;

    if (!article) {
        return {
            title: 'Article Not Found',
            description: 'The requested article could not be found.',
        };
    }

    const finalTitle = article.title;
    const finalDescription = article.shortdescription ?? article.title;

    return {
        title: finalTitle,
        description: finalDescription,
        keywords: `${article.category}, news, ${article.title}`,
        authors: [{ name: article.author }],
        alternates: { canonical: currentUrl },
        openGraph: {
            title: article.title,
            description: article.shortdescription,
            url: currentUrl,
            siteName: 'Mirror Standard',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
            locale: 'en_US',
            type: 'article',
        },
        other: {
            'script:ld+json': JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'NewsArticle',
                headline: article.title,
                datePublished: article.date,
                author: {
                    '@type': 'Person',
                    name: article.author,
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Mirror Standard',
                    logo: {
                        '@type': 'ImageObject',
                        url: `${siteUrl}/mirrorstandard-logo.webp`,
                    },
                },
                image: imageUrl,
                url: currentUrl,
                articleBody: article.description?.slice(0, 160),
                keywords: `${article.category}, news`,
            }),
        },
    };

}


export default async function DetailPage({ params }: DetailPageProps) {

    const { category, slug } = await params;
    const data = allData[category?.toLowerCase()];

    if (!data) {
        return (
            <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold">
                    404 – Page Not Found
                </h1>
                <p className="mt-4 text-gray-600">
                    The article you’re looking for doesn’t exist.
                </p>
            </main>

        );
    }


    const article = data.find(item => item.slug === slug);
    if (!article) {
        return (
            <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold">
                    404 – Page Not Found
                </h1>
                <p className="mt-4 text-gray-600">
                    The article you’re looking for doesn’t exist.
                </p>
            </main>

        );
    }

  // Helper to parse dates like "Jan. 28 2026" or "Dec. 26, 2025"
  const parseDate = (dateStr: string) => {
    const cleanedDate = dateStr.replace('.', '');
    const timestamp = Date.parse(cleanedDate);
    return isNaN(timestamp) ? 0 : timestamp;
  };

  const otherArticles = data
    .filter(item => item.slug !== slug)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const globalLatest = allNews
    .filter(item => item.slug !== slug)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));



    return (
        <main>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://www.mirrorstandard.com/${article.category}/${article.slug}/`
                        },
                        "headline": article.title,
                        "description": article.shortdescription,
                        "image": {
                            "@type": "ImageObject",
                            "url": article.image.startsWith("http")
                                ? article.image
                                : `https://www.mirrorstandard.com${article.image}`,
                            "width": 1200,
                            "height": 630
                        },
                        "author": {
                            "@type": "Organization",
                            "name": "Mirror Standard",
                            "url": "https://www.mirrorstandard.com/"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Mirror Standard",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
                                "width": 628,
                                "height": 116
                            }
                        },
                        "datePublished": article.date,
                        "dateModified": article.date
                    })
                }}
            />
            <div className="hidden lg:block">
                <Navbar />
            </div>
            <div className="w-full max-w-7xl px-5 md:px-8 mx-auto md:mt-7 mt-4 mb-12">
                <DetailSection 
                    article={article} 
                    otherArticles={otherArticles} 
                    globalLatest={globalLatest}
                />
            </div>
            <ScrollToTopButton />
        </main>
    );
}