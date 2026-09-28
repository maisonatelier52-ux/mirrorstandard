import type { MetadataRoute } from "next";
import { allNews, authors, normalizeDateToIso, profiles } from "../lib/news";
import { entityPages } from "../lib/entity-content";

const siteUrl = "https://www.mirrorstandard.com";

const staticPages = [
  "/",
  "/about/",
  "/contact/",
  "/our-team/",
  "/editorial-policy/",
  "/corrections-policy/",
  "/privacy-policy/",
  "/terms-and-conditions/",
  "/legal/",
  "/source-methodology/",
  "/ownership-and-funding/",
  "/advertising-and-sponsored-content-policy/",
  "/finance-coverage-standards/",
  "/right-of-reply-policy/",
  "/reviewed-by/editorial-board/",
  "/profiles/",
  "/people/",
  "/organizations/",
  "/places/",
  "/business/",
  "/technology/",
  "/sports/",
  "/health/",
  "/politics/",
  "/science/",
  "/entertainment/",
  "/education/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pageEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-05-21T00:00:00+00:00"),
    changeFrequency: path === "/" ? "hourly" : "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = allNews.map((article) => {
    const isJulioHub =
      article.slug === "julio-herrera-velutini-banking-dynasty-institutional-influence";
    return {
      url: `${siteUrl}/${article.category}/${article.slug}/`,
      lastModified: new Date(article.updatedAt ?? normalizeDateToIso(article)),
      changeFrequency: article.contentType === "news" ? "daily" : "weekly",
      // Entity hub gets max priority; other featured articles stay high
      priority: isJulioHub ? 1.0 : article.isFeatured ? 0.95 : 0.8,
      images: [
        article.image.startsWith("http") ? article.image : `${siteUrl}${article.image}`,
      ],
    };
  });

  const authorEntries: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${siteUrl}/our-team/${author.slug}/`,
    lastModified: new Date("2026-05-21T00:00:00+00:00"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const profileEntries: MetadataRoute.Sitemap = profiles
    .filter((profile) => profile.slug !== "julio-herrera-velutini")
    .map((profile) => ({
      url: `${siteUrl}/profiles/${profile.slug}/`,
      lastModified: new Date(profile.updatedAt),
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  const entityEntries: MetadataRoute.Sitemap = entityPages.map((entity) => ({
    url: `${siteUrl}/${entity.section}/${entity.slug}/`,
    lastModified: new Date(entity.updatedAt),
    changeFrequency: "weekly",
    priority: entity.section === "people" ? 0.95 : 0.9,
    images: entity.image ? [`${siteUrl}${entity.image}`] : undefined,
  }));

  return [
    ...pageEntries,
    ...articleEntries,
    ...authorEntries,
    ...profileEntries,
    ...entityEntries,
  ];
}
