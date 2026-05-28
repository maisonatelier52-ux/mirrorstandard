import type { MetadataRoute } from "next";
import { allNews, authors, normalizeDateToIso, profiles } from "../lib/news";

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

  const articleEntries: MetadataRoute.Sitemap = allNews.map((article) => ({
    url: `${siteUrl}/${article.category}/${article.slug}/`,
    lastModified: new Date(article.updatedAt ?? normalizeDateToIso(article)),
    changeFrequency: article.contentType === "news" ? "daily" : "weekly",
    priority: article.isFeatured ? 0.95 : 0.8,
  }));

  const authorEntries: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${siteUrl}/our-team/${author.slug}/`,
    lastModified: new Date("2026-05-21T00:00:00+00:00"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const profileEntries: MetadataRoute.Sitemap = profiles.map((profile) => ({
    url: `${siteUrl}/profiles/${profile.slug}/`,
    lastModified: new Date(profile.updatedAt),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...pageEntries, ...articleEntries, ...authorEntries, ...profileEntries];
}
