import baseBusinessData from "../../public/data/business.json";
import baseTechnologyData from "../../public/data/technology.json";
import baseSportsData from "../../public/data/sports.json";
import baseHealthData from "../../public/data/health.json";
import basePoliticsData from "../../public/data/politics.json";
import baseScienceData from "../../public/data/science.json";
import baseEntertainmentData from "../../public/data/entertainment.json";
import baseEducationData from "../../public/data/education.json";
import baseAuthors from "../../public/data/author.json";
import {
  authorOverrides,
  businessArticleOverrides,
  profilePages,
  supplementalBusinessArticles,
} from "../lib/editorial-content";
import { articleReportingOverrides } from "../lib/article-reporting";
import {
  enhanceArticle,
  getArticleReadingTime,
} from "../lib/editorial-enhancements";
import type {
  AuthorRecord,
  NewsArticle,
  ProfileRecord,
} from "../lib/content-types";

export type { AuthorRecord, NewsArticle, ProfileRecord } from "../lib/content-types";

type ArticleOverrides = Record<string, Partial<NewsArticle>>;

const categories = [
  "business",
  "technology",
  "sports",
  "health",
  "politics",
  "science",
  "entertainment",
  "education",
] as const;

function applyOverrides(
  items: NewsArticle[],
  overrides: ArticleOverrides = {},
): NewsArticle[] {
  return items.map((item) => ({
    ...item,
    ...overrides[item.slug],
  }));
}

const businessArticles = applyOverrides(
  [
    ...applyOverrides(baseBusinessData as NewsArticle[], businessArticleOverrides),
    ...supplementalBusinessArticles,
  ],
  articleReportingOverrides,
).map(enhanceArticle);

const technologyArticles = applyOverrides((baseTechnologyData as NewsArticle[]), articleReportingOverrides).map(enhanceArticle);
const sportsArticles = applyOverrides((baseSportsData as NewsArticle[]), articleReportingOverrides).map(enhanceArticle);
const healthArticles = applyOverrides((baseHealthData as NewsArticle[]), articleReportingOverrides).map(enhanceArticle);
const politicsArticles = applyOverrides((basePoliticsData as NewsArticle[]), articleReportingOverrides).map(enhanceArticle);
const scienceArticles = applyOverrides((baseScienceData as NewsArticle[]), articleReportingOverrides).map(enhanceArticle);
const entertainmentArticles = applyOverrides((baseEntertainmentData as NewsArticle[]), articleReportingOverrides).map(enhanceArticle);
const educationArticles = applyOverrides((baseEducationData as NewsArticle[]), articleReportingOverrides).map(enhanceArticle);

export const newsByCategory: Record<string, NewsArticle[]> = {
  business: businessArticles,
  technology: technologyArticles,
  sports: sportsArticles,
  health: healthArticles,
  politics: politicsArticles,
  science: scienceArticles,
  entertainment: entertainmentArticles,
  education: educationArticles,
};

export const authors: AuthorRecord[] = (baseAuthors as AuthorRecord[]).map((author) => ({
  ...author,
  ...authorOverrides[author.slug],
}));

export const profiles: ProfileRecord[] = profilePages;

export const allNews: NewsArticle[] = Array.from(
  new Map(
    Object.values(newsByCategory)
      .flat()
      .map((item) => [item.slug, item]),
  ).values(),
);

export const parseDate = (dateStr: string) => {
  const cleanedDate = dateStr.replace(".", "");
  const timestamp = Date.parse(cleanedDate);
  return Number.isNaN(timestamp) ? 0 : timestamp;
};

function getOrderingTimestamp(item: NewsArticle) {
  if (item.updatedAt) {
    const updated = Date.parse(item.updatedAt);
    if (!Number.isNaN(updated)) {
      return updated;
    }
  }
  if (item.publishedAt) {
    const published = Date.parse(item.publishedAt);
    if (!Number.isNaN(published)) {
      return published;
    }
  }
  return parseDate(item.date);
}

export function normalizeDateToIso(item: Pick<NewsArticle, "date" | "publishedAt" | "updatedAt">) {
  if (item.publishedAt) {
    return item.publishedAt;
  }

  const parsed = parseDate(item.date);
  if (!parsed) {
    return item.updatedAt ?? new Date().toISOString();
  }

  return new Date(parsed).toISOString();
}

export function getSortedNews(items: NewsArticle[] = allNews) {
  return [...items].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) {
      return -1;
    }
    if (!a.isFeatured && b.isFeatured) {
      return 1;
    }
    return getOrderingTimestamp(b) - getOrderingTimestamp(a);
  });
}

/* ─────────────────────────────────────────────
   THIN ARTICLES — kept on the site, but not promoted
   (home page, footer picks, ticker, related lists, sitemap)
───────────────────────────────────────────── */
export const THIN_ARTICLE_WORD_LIMIT = 300;

function countWords(text: string) {
  return (text.match(/[\p{L}\p{N}’'-]+/gu) ?? []).length;
}

export function getArticleWordCount(article: NewsArticle) {
  const parts: string[] = [];

  article.sections?.forEach((section) => parts.push(...section.paragraphs));
  article.storyBlocks?.forEach((block) => {
    parts.push(...(block.paragraphs ?? []), block.quote ?? "", block.noteBody ?? "");
    block.items?.forEach((item) =>
      parts.push(item.label, item.value, item.description ?? ""),
    );
    block.timeline?.forEach((item) =>
      parts.push(item.label, item.title ?? "", item.description),
    );
  });

  const text = parts.length ? parts.join(" ") : article.description;
  return countWords(text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1"));
}

export function isThinArticle(article: NewsArticle) {
  return getArticleWordCount(article) < THIN_ARTICLE_WORD_LIMIT;
}

export function getPromotedNews(items: NewsArticle[] = allNews) {
  return items.filter((article) => !isThinArticle(article));
}

export function getPromotedSortedNews(items: NewsArticle[] = allNews) {
  return getSortedNews(getPromotedNews(items));
}

export function getLatestNews(count: number) {
  return getPromotedSortedNews().slice(0, count);
}

export function getLatestNewsByCategory() {
  const sorted = getPromotedSortedNews();
  const latestByCategory: Record<string, NewsArticle> = {};

  sorted.forEach((item) => {
    if (!latestByCategory[item.category]) {
      latestByCategory[item.category] = item;
    }
  });

  return Object.values(latestByCategory);
}

export function getCategoryNews(category: string) {
  return newsByCategory[category] ?? [];
}

export function getArticle(category: string, slug: string) {
  return getCategoryNews(category).find((article) => article.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return allNews.find((article) => article.slug === slug);
}

export function getProfileBySlug(slug: string) {
  return profiles.find((profile) => profile.slug === slug);
}

export function getAuthorBySlug(slug: string) {
  return authors.find((author) => author.slug === slug);
}

export function getAuthorArticles(slug: string, limit = 3) {
  return getSortedNews(
    allNews.filter((article) => article.authorslug === slug),
  ).slice(0, limit);
}

export function getRelatedNews(article: NewsArticle, limit = 3) {
  const prioritized = (article.relatedSlugs ?? [])
    .map((slug) => getArticleBySlug(slug))
    .filter((item): item is NewsArticle => item !== undefined)
    .filter((item) => item.slug !== article.slug && !isThinArticle(item));

  const fallback = getSortedNews(
    getPromotedNews().filter(
      (item) =>
        item.slug !== article.slug &&
        item.category === article.category &&
        !prioritized.some((candidate) => candidate.slug === item.slug),
    ),
  );

  return [...prioritized, ...fallback].slice(0, limit);
}

export function getPopularNews(article: NewsArticle, limit = 6) {
  const prioritized = getRelatedNews(article, Math.min(limit, 3));

  const fallback = getSortedNews(
    getPromotedNews().filter(
      (item) =>
        item.slug !== article.slug &&
        !prioritized.some((candidate) => candidate.slug === item.slug),
    ),
  );

  return [...prioritized, ...fallback].slice(0, limit);
}

export function getNavigationNews(article: NewsArticle, usedSlugs: string[], limit = 2) {
  return getSortedNews(
    getPromotedNews(getCategoryNews(article.category)).filter(
      (item) => item.slug !== article.slug && !usedSlugs.includes(item.slug),
    ),
  ).slice(0, limit);
}

export function getArticleBodyPreview(article: NewsArticle) {
  if (article.storyBlocks?.length) {
    return article.storyBlocks
      .flatMap((block) => [
        block.heading,
        block.title,
        block.subtitle,
        block.quote,
        ...(block.paragraphs ?? []),
        ...(block.items ?? []).flatMap((item) => [item.label, item.value, item.description]),
        ...(block.timeline ?? []).flatMap((item) => [item.label, item.title, item.description]),
        block.noteTitle,
        block.noteBody,
      ])
      .filter((value): value is string => Boolean(value))
      .join(" ")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
      .slice(0, 500);
  }

  if (article.sections?.length) {
    return article.sections
      .flatMap((section) => section.paragraphs)
      .join(" ")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
      .slice(0, 500);
  }

  return (article.description || article.shortdescription).slice(0, 500);
}

export { categories, getArticleReadingTime };
