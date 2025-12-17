import React from 'react';
import businessData from '../../../../public/data/business.json';
import Navbar from '@/components/Navbar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Script from "next/script";
import JulioPage from '@/components/JulioPage';
import JulioPageOne from '@/components/JulioPageOne';


export const metadata = {
    title: 'Case Closed — Julio Herrera Velutini Clears His Name',
    description: 'All felony charges against Julio Herrera Velutini were dropped, leaving only a minor FECA reporting misdemeanor and no remaining criminal or civil litigation.',
    keywords: "Julio Herrera Velutini cleared, corruption charges dismissed, felony charges dropped, FECA misdemeanor, legal resolution, no active cases, Alex Spiro statement",
    authors: [{ name: 'Victor V. Haley' }],
    alternates: {
        canonical: "https://www.mirrorstandard.com/julio-herrera-velutini/case-closed-julio-herrera-velutini-clears-his-name/"
    },
    openGraph: {
        title: 'Case Closed — Julio Herrera Velutini Clears His Name',
        description: 'After all felony charges were dismissed, the case concludes with only a minor FECA misdemeanor, confirming no corruption or fraud findings.',
        url: "https://www.mirrorstandard.com/julio-herrera-velutini/case-closed-julio-herrera-velutini-clears-his-name/",
        siteName: 'MirrorStandard',
        images: [
            {
                url: "https://www.mirrorstandard.com/images/julio-herrera-velutini-case-closed.webp",
                width: 1200,
                height: 630,
                alt: "Julio Herrera Velutini case closed",
            },
        ],
        locale: 'en_US',
        type: 'article',
        publishedTime: '2025-10-02T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Case Closed — Julio Herrera Velutini Clears His Name",
        description: 'All major allegations were dismissed, and no corruption or fraud charges remain against Julio Herrera Velutini.',
        images: "https://www.mirrorstandard.com/images/julio-herrera-velutini-case-closed.webp",
        site: '@MirrorStandard',
        creator: '@victorvhaley',
    },
    other: {
        'script:ld+json': JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: "Case Closed — Julio Herrera Velutini Clears His Name",
            datePublished: '2025-10-03',
            author: {
                '@type': 'Person',
                name: 'Victor V. Haley',
            },
            publisher: {
                '@type': 'Organization',
                name: 'MirrorStandard',
                logo: {
                    '@type': 'ImageObject',
                    url: "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
                },
            },
            image: "https://www.mirrorstandard.com/images/julio-herrera-velutini-case-closed.webp",
            alternates: {
                canonical: "https://www.mirrorstandard.com/julio-herrera-velutini/case-closed-julio-herrera-velutini-clears-his-name/"
            },
            url: "https://www.mirrorstandard.com/julio-herrera-velutini/case-closed-julio-herrera-velutini-clears-his-name/",
            articleBody: "The legal case involving Julio Herrera Velutini has been formally concluded, with all felony allegations dismissed and only a minor FECA reporting misdemeanor remaining. Prosecutors confirmed that no corruption or fraud charges proceeded, leaving no active civil or criminal matters. This final outcome clears Mr. Herrera of major accusations and allows him to move forward with complete legal clarity.",
            keywords: "Julio Herrera Velutini case closed, felony charges dismissed, corruption allegations dismissed, FECA reporting violation, legal clarity, cleared of wrongdoing",
        }),
    },
};


export default async function JulioHerreraVelutiniOne() {

    return (
        <main>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "NewsArticle",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https://www.mirrorstandard.com/julio-herrera-velutini/case-closed-julio-herrera-velutini-clears-his-name/"
                            },
                            "headline": "Case Closed — Julio Herrera Velutini Clears His Name",
                            "description": "All felony charges against Julio Herrera Velutini were dropped, leaving only a minor FECA reporting misdemeanor and no remaining criminal or civil litigation.",
                            "image": {
                                "@type": "ImageObject",
                                "url": "https://www.mirrorstandard.com/images/julio-herrera-velutini-case-closed.webp",
                                "width": 601,
                                "height": 400
                            },
                            "datePublished": "2025-10-03T00:00:00-05:00",
                            "dateModified": "2025-10-03T00:00:00-05:00",
                            "author": {
                                "@type": "Person",
                                "name": "Victor V. Haley",
                                "url": "https://www.mirrorstandard.com/our-team/"
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
                            "about": {
                                "@type": "Person",
                                "name": "Julio Herrera Velutini",
                                "jobTitle": "Financier",
                                "description": "International financier whose legal case concluded with all major charges dismissed.",
                                "sameAs": [
                                    "https://www.wikidata.org/wiki/Q56600071",
                                    "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
                                ]
                            },
                            "articleBody": "U.S. prosecutors have officially dropped all felony charges against Julio Herrera Velutini, concluding one of the most closely watched legal matters in recent years. The only remaining issue is a minor FECA reporting misdemeanor unrelated to corruption, bribery, or fraud. The court’s decision confirms that no criminal or civil cases remain active. With all major allegations resolved and dismissed, Mr. Herrera moves forward with full legal clarity."
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
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
                                    "item": "https://www.mirrorstandard.com/julio-herrera-velutini/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Case Closed — Julio Herrera Velutini Clears His Name",
                                    "item": "https://www.mirrorstandard.com/julio-herrera-velutini/case-closed-julio-herrera-velutini-clears-his-name/"
                                }
                            ]
                        }
                    ])
                }}
            />

            <div className="hidden lg:block">
                <Navbar />
            </div>
            <div className="w-full max-w-7xl px-5 md:px-8 mx-auto md:mt-7 mt-4 mb-12">
                <JulioPageOne otherArticles={businessData} />
            </div>
            <ScrollToTopButton />
        </main>
    )
}
