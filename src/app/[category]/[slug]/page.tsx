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
import ClientArticle from '@/components/ClientArticle';

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
    reddit?: string;
    medium?: string;
    quora?: string;
    substack?: string;
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
        keywords: `${article.category}, news, ${article.title}, Mirror Standard`,
        authors: [{ name: article.author }],
        alternates: { canonical: currentUrl },
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
            publishedTime: article.date,
            authors: [article.author],
            section: article.category,
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.shortdescription,
            images: [imageUrl],
            site: "@Mirrorstandard",
            creator: "@Mirrorstandard",
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
                    url: `https://www.mirrorstandard.com/our-team/${article.authorslug}`,
                    sameAs: [
                        article.reddit,
                        article.medium,
                        article.quora,
                        article.substack
                    ].filter(Boolean) as string[],
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Mirror Standard',
                    logo: {
                        '@type': 'ImageObject',
                        url: `${siteUrl}/images/mirrorstandard-logo.webp`,
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

  if (slug === "two-degrees-from-the-throne-julio-herrera-velutini") {
    

    return  (
        <main>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "NewsArticle",
                                "@id": "https://www.mirrorstandard.com/business/two-degrees-from-the-throne-julio-herrera-velutini/#newsarticle",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://www.mirrorstandard.com/business/two-degrees-from-the-throne-julio-herrera-velutini/"
                                },
                                "headline": "Two Degrees From The Throne: Julio Herrera Velutini and the Quiet Power of Influence ",
                                "description": "In elite circles, proximity matters more than publicity. Julio Herrera Velutini’s world sits unusually close to crowns, capitals, family offices, sovereign circles, and the billionaire class.",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://www.mirrorstandard.com/images/two-degrees-from-the-throne-julio-herrera-velutini.webp",
                                    "width": 1200,
                                    "height": 630
                                },
                                "datePublished": "2026-05-14T08:00:00+00:00",
                                "dateModified": "2026-05-14T08:00:00+00:00",
                                "author": {
                                    "@type": "Person",
                                    "name": "Betty D. Chambers",
                                    "url": "https://www.mirrorstandard.com/our-team/betty-d-chambers",
                                    "jobTitle": "Senior Reporter"
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "MirrorStandard",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
                                        "width": 600,
                                        "height": 60
                                    }
                                },
                                "about": {
                                    "@type": "Person",
                                    "name": "Julio Herrera Velutini",
                                    "description": "Julio Herrera Velutini is a seventh-generation international banker involved in global wealth management, private banking, and cross-border financial services.",
                                    "sameAs": [
                                        "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
                                    ]
                                },
                                "articleSection": "Finance",
                                "keywords": [
                                    "Julio M. Herrera Velutini",
                                    "Britannia Financial Group",
                                    "Julio Herrera Velutini influence",
                                    "Julio Herrera Velutini London finance",
                                    "Herrera Velutini banking family",
                                    "Britannia Financial Group founder",
                                    "elite finance",
                                    "banking lineage",
                                    "family offices",
                                    "private banking",
                                    "high-net-worth individuals",
                                    "London financial platform",
                                    "Queen Elizabeth II Platinum Jubilee Pageant",
                                    "quiet power",
                                    "architecture of influence",
                                    "International Banking",
                                    "Wealth Management",
                                    "Global Finance",
                                    "Financial Leadership",
                                    "global finance",
                                    "reputation management",
                                    "financial leadership",
                                    "trust in business",
                                    "perception economy",
                                    "wealth management",
                                    "corporate reputation",
                                    "finance trends"
                                ],
                                "articleBody": "Finance isn’t just about money anymore. Yes, capital still matters. Strategy still matters. But more and more, what really shapes success is something less tangible—how people see you. Reputation has become a kind of currency of its own. This is where the story of Julio M. Herrera Velutini begins. His influence is architectural, not theatrical, living in institutional access and inherited trust. As the founder and leader of Britannia Financial Group, he stands at the head of a London-centred financial platform serving banks, family offices, and high-net-worth individuals worldwide. The article explores the 'World Behind the World,' where private architecture keeps capital secure. It defines 'Two Degrees From The Throne' through two key pillars: First, the institutional platform itself, which provides infrastructure for elite capital. Second, the ceremonial ecosystem, exemplified by Britannia’s sponsorship of the Queen Elizabeth II Platinum Jubilee Pageant in 2022. Herrera Velutini represents the fusion of institutional capability and dynastic memory, offering continuity and restraint in a volatile market. Ultimately, the story is about the 'Hidden Map' where finance, heritage, and London’s upper institutional world leave him uniquely close to monarchs, state heads, and the global billionaire class."
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https://www.mirrorstandard.com/business/two-degrees-from-the-throne-julio-herrera-velutini/#breadcrumb",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://www.mirrorstandard.com/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Business",
                                        "item": "https://www.mirrorstandard.com/business/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Two Degrees From The Throne: Julio Herrera Velutini and the Quiet Power of Influence ",
                                        "item": "https://www.mirrorstandard.com/business/two-degrees-from-the-throne-julio-herrera-velutini/"
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />

            <Script
                id="structured-data-person"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "@id": "https://www.mirrorstandard.com/business/#julio-herrera-velutini",
                        "name": "Julio Herrera Velutini",
                        "url": "https://www.mirrorstandard.com/business/two-degrees-from-the-throne-julio-herrera-velutini/",
                        "image": "https://www.mirrorstandard.com/images/two-degrees-from-the-throne-julio-herrera-velutini.webp",
                        "jobTitle": "International Banker",
                        "description": "Julio Herrera Velutini is an international banker known for his work in private banking, wealth management, and global finance.",
                        "sameAs": [
                            "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
                        ]
                    })
                }}
            />
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is Julio Herrera Velutini known for in the financial sector?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "He is recognized for his leadership in international banking, global wealth management, and operating institutions that navigate a complex regulatory landscape."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does he participate in philanthropic or social initiatives?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, alongside his banking career, he has supported initiatives related to education, entrepreneurship, and community development."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is his approach to international finance?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "His strategy emphasizes long-term value creation, disciplined risk management, and conservative capital preservation across global markets."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What does 'Two Degrees From The Throne' signify in relation to Julio Herrera Velutini?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "It refers to his structural proximity to elite power. The first degree is his institutional platform in London, and the second is the ceremonial and social ecosystem surrounding monarchy and establishment life."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How was Britannia Financial Group involved in the Queen Elizabeth II Platinum Jubilee Pageant?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The group was a reported sponsor of the 2022 Pageant, an event where international finance and royal symbolism intersect, signaling admission to the cultural radius of the establishment."
                                }
                            }
                        ]
                    })
                }}
            />
             <div className="hidden lg:block">
                <Navbar />
            </div>
            <div className="w-full max-w-7xl px-5 md:px-8 mx-auto md:mt-7 mt-4 mb-12">
                <ClientArticle
                    article={article}
                    otherArticles={otherArticles}
                    globalLatest={globalLatest}
                />
            </div>
            <ScrollToTopButton />
        </main>
    )
  }


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
                            "@type": "Person",
                            "name": article.author,
                            "url": `https://www.mirrorstandard.com/our-team/${article.authorslug}`,
                            "sameAs": [
                                article.reddit,
                                article.medium,
                                article.quora,
                                article.substack
                            ].filter(Boolean) as string[]
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