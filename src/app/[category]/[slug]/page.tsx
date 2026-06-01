import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import DetailSection from "../../../components/DetailSection";
import ScrollToTopButton from "../../../components/ScrollToTopButton";
import {
  categories,
  getArticle,
  getArticleBodyPreview,
  getCategoryNews,
  getNavigationNews,
  getPopularNews,
  getRelatedNews,
  normalizeDateToIso,
} from "../../../lib/news";

export async function generateStaticParams() {
  return categories.flatMap((category) =>
    getCategoryNews(category).map((article) => ({
      category,
      slug: article.slug,
    })),
  );
}

interface DetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

/** Truncate a string to maxLen characters, cutting at the last word boundary */
function truncateDescription(text: string, maxLen = 155): string {
  if (text.length <= maxLen) return text;
  const cut = text.lastIndexOf(" ", maxLen);
  return text.slice(0, cut > 0 ? cut : maxLen) + "…";
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticle(category, slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const siteUrl = "https://www.mirrorstandard.com";
  const currentUrl = `${siteUrl}/${category}/${slug}/`;
  const imageUrl = article.image.startsWith("http")
    ? article.image
    : `${siteUrl}${article.image}`;

  // SEO FIX: title should be ≤ 66 chars; use seoTitle if provided, else truncate
  const title = article.seoTitle ?? article.title;

  // SEO FIX: meta description must be 50–160 chars
  const rawDescription = article.metaDescription ?? article.shortdescription;
  const description = truncateDescription(rawDescription, 155);

  const keywords = Array.from(
    new Set([
      article.category,
      "Mirror Standard",
      article.title,
      ...(article.keywords ?? []),
    ]),
  ).join(", ");

  return {
    title,
    description,
    keywords,
    authors: [{ name: article.author, url: `${siteUrl}/our-team/${article.authorslug}/` }],
    alternates: { canonical: currentUrl },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: "Mirror Standard",
      locale: "en_US",
      type: "article",
      publishedTime: normalizeDateToIso(article),
      modifiedTime: article.updatedAt ?? normalizeDateToIso(article),
      authors: [article.author],
      section: article.category,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      site: "@Mirrorstandard",
      creator: "@Mirrorstandard",
    },
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);

  if (!article) {
    notFound();
  }

  const relatedNews = getRelatedNews(article, 3);
  const popularNews = getPopularNews(article, 5);
  const navigationNews = getNavigationNews(
    article,
    [
      article.slug,
      ...relatedNews.map((item) => item.slug),
      ...popularNews.map((item) => item.slug),
    ],
    2,
  );

  const siteUrl = "https://www.mirrorstandard.com";
  const articleUrl = `${siteUrl}/${category}/${slug}/`;

  // SEO FIX: truncated description also used in schema
  const rawDescription = article.metaDescription ?? article.shortdescription;
  const schemaDescription =
    rawDescription.length <= 155
      ? rawDescription
      : rawDescription.slice(0, rawDescription.lastIndexOf(" ", 155)) + "…";

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        "@id": `${articleUrl}#article`,
        headline: article.title,
        description: schemaDescription,
        datePublished: normalizeDateToIso(article),
        dateModified: article.updatedAt ?? normalizeDateToIso(article),
        mainEntityOfPage: articleUrl,
        image: {
          "@type": "ImageObject",
          url: article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`,
        },
        author: {
          "@type": "Person",
          name: article.author,
          url: `${siteUrl}/our-team/${article.authorslug}/`,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Mirror Standard",
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/mirrorstandard-logo.webp`,
          },
        },
        articleSection: article.category,
        keywords: article.keywords,
        articleBody: getArticleBodyPreview(article),
        reviewedBy: article.reviewedByName
          ? {
              "@type": article.reviewedByUrl?.includes("/our-team/") ? "Person" : "Organization",
              name: article.reviewedByName,
              url: article.reviewedByUrl ? `${siteUrl}${article.reviewedByUrl}` : undefined,
            }
          : undefined,
        mainEntity: article.entity
          ? {
              "@type": article.entity.type,
              name: article.entity.name,
              alternateName: article.entity.alternateNames,
              affiliation: article.entity.affiliationName
                ? { "@type": "Organization", name: article.entity.affiliationName }
                : undefined,
              description: article.entity.description,
            }
          : undefined,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: category.charAt(0).toUpperCase() + category.slice(1),
            item: `${siteUrl}/${category}/`,
          },
          { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <main className="relative overflow-x-clip bg-[color:var(--ms-surface)]">
      {/* SEO FIX: strategy="beforeInteractive" ensures schema is in initial HTML, 
          not injected after load — critical for crawlers reading JSON-LD */}
      <Script
        id={`structured-data-article-${article.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
      <div className="relative mx-auto w-full max-w-[1380px] px-4 py-4 sm:px-6 md:px-8 md:py-8 lg:px-10">
        <DetailSection
          article={article}
          navigationNews={navigationNews}
          relatedNews={relatedNews}
          popularNews={popularNews}
        />
        <ScrollToTopButton />
      </div>
    </main>
  );
}
// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import Script from "next/script";
// import DetailSection from "../../../components/DetailSection";
// import ScrollToTopButton from "../../../components/ScrollToTopButton";
// import {
//   categories,
//   getArticle,
//   getArticleBodyPreview,
//   getCategoryNews,
//   getNavigationNews,
//   getPopularNews,
//   getRelatedNews,
//   normalizeDateToIso,
// } from "../../../lib/news";

// export async function generateStaticParams() {
//   return categories.flatMap((category) =>
//     getCategoryNews(category).map((article) => ({
//       category,
//       slug: article.slug,
//     })),
//   );
// }

// interface DetailPageProps {
//   params: Promise<{ category: string; slug: string }>;
// }

// export async function generateMetadata({
//   params,
// }: DetailPageProps): Promise<Metadata> {
//   const { category, slug } = await params;
//   const article = getArticle(category, slug);

//   if (!article) {
//     return {
//       title: "Article Not Found",
//       description: "The requested article could not be found.",
//       robots: { index: false, follow: false },
//     };
//   }

//   const siteUrl = "https://www.mirrorstandard.com";
//   const currentUrl = `${siteUrl}/${category}/${slug}/`;
//   const imageUrl = article.image.startsWith("http")
//     ? article.image
//     : `${siteUrl}${article.image}`;
//   const title = article.seoTitle ?? article.title;
//   const description = article.metaDescription ?? article.shortdescription;
//   const keywords = Array.from(
//     new Set([
//       article.category,
//       "Mirror Standard",
//       article.title,
//       ...(article.keywords ?? []),
//     ]),
//   ).join(", ");

//   return {
//     title,
//     description,
//     keywords,
//     authors: [{ name: article.author, url: `${siteUrl}/our-team/${article.authorslug}/` }],
//     alternates: { canonical: currentUrl },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//     openGraph: {
//       title,
//       description,
//       url: currentUrl,
//       siteName: "Mirror Standard",
//       locale: "en_US",
//       type: "article",
//       publishedTime: normalizeDateToIso(article),
//       modifiedTime: article.updatedAt ?? normalizeDateToIso(article),
//       authors: [article.author],
//       section: article.category,
//       images: [{ url: imageUrl, width: 1200, height: 630, alt: article.title }],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [imageUrl],
//       site: "@Mirrorstandard",
//       creator: "@Mirrorstandard",
//     },
//   };
// }

// export default async function DetailPage({ params }: DetailPageProps) {
//   const { category, slug } = await params;
//   const article = getArticle(category, slug);

//   if (!article) {
//     notFound();
//   }

//   const relatedNews = getRelatedNews(article, 3);
//   const popularNews = getPopularNews(article, 5);
//   const navigationNews = getNavigationNews(
//     article,
//     [
//       article.slug,
//       ...relatedNews.map((item) => item.slug),
//       ...popularNews.map((item) => item.slug),
//     ],
//     2,
//   );

//   const siteUrl = "https://www.mirrorstandard.com";
//   const articleUrl = `${siteUrl}/${category}/${slug}/`;
//   const articleSchema = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "NewsArticle",
//         "@id": `${articleUrl}#article`,
//         headline: article.title,
//         description: article.metaDescription ?? article.shortdescription,
//         datePublished: normalizeDateToIso(article),
//         dateModified: article.updatedAt ?? normalizeDateToIso(article),
//         mainEntityOfPage: articleUrl,
//         image: {
//           "@type": "ImageObject",
//           url: article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`,
//         },
//         author: {
//           "@type": "Person",
//           name: article.author,
//           url: `${siteUrl}/our-team/${article.authorslug}/`,
//         },
//         publisher: {
//           "@type": "Organization",
//           "@id": `${siteUrl}/#organization`,
//           name: "Mirror Standard",
//           url: siteUrl,
//           logo: {
//             "@type": "ImageObject",
//             url: `${siteUrl}/images/mirrorstandard-logo.webp`,
//           },
//         },
//         articleSection: article.category,
//         keywords: article.keywords,
//         articleBody: getArticleBodyPreview(article),
//         reviewedBy: article.reviewedByName
//           ? {
//               "@type": article.reviewedByUrl?.includes("/our-team/") ? "Person" : "Organization",
//               name: article.reviewedByName,
//               url: article.reviewedByUrl ? `${siteUrl}${article.reviewedByUrl}` : undefined,
//             }
//           : undefined,
//         mainEntity: article.entity
//           ? {
//               "@type": article.entity.type,
//               name: article.entity.name,
//               alternateName: article.entity.alternateNames,
//               affiliation: article.entity.affiliationName
//                 ? { "@type": "Organization", name: article.entity.affiliationName }
//                 : undefined,
//               description: article.entity.description,
//             }
//           : undefined,
//       },
//       {
//         "@type": "BreadcrumbList",
//         "@id": `${articleUrl}#breadcrumb`,
//         itemListElement: [
//           { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
//           {
//             "@type": "ListItem",
//             position: 2,
//             name: category.charAt(0).toUpperCase() + category.slice(1),
//             item: `${siteUrl}/${category}/`,
//           },
//           { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
//         ],
//       },
//     ],
//   };

//   return (
//     <main className="relative overflow-x-clip bg-[color:var(--ms-surface)]">
//       <Script
//         id={`structured-data-article-${article.slug}`}
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
//       />
//       <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
//       <div className="relative mx-auto w-full max-w-[1380px] px-4 py-4 sm:px-6 md:px-8 md:py-8 lg:px-10">
//         <DetailSection
//           article={article}
//           navigationNews={navigationNews}
//           relatedNews={relatedNews}
//           popularNews={popularNews}
//         />
//         <ScrollToTopButton />
//       </div>
//     </main>
//   );
// }