import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { enhanceArticle, getArticleReadingTime } from "../src/lib/editorial-enhancements.ts";
import {
  businessArticleOverrides,
  supplementalBusinessArticles,
} from "../src/lib/editorial-content.ts";

const root = fileURLToPath(new URL("../", import.meta.url));
const categories = [
  "business",
  "technology",
  "sports",
  "health",
  "politics",
  "science",
  "entertainment",
  "education",
];

async function readJson(relativePath) {
  return JSON.parse(await readFile(new URL(relativePath, `file:///${root.replaceAll("\\", "/")}/`), "utf8"));
}

const authors = await readJson("public/data/author.json");
const authorSlugs = new Set(authors.map((author) => author.slug));
const rawByCategory = Object.fromEntries(
  await Promise.all(
    categories.map(async (category) => [
      category,
      await readJson(`public/data/${category}.json`),
    ]),
  ),
);

rawByCategory.business = [
  ...rawByCategory.business.map((article) => ({
    ...article,
    ...businessArticleOverrides[article.slug],
  })),
  ...supplementalBusinessArticles,
];

const articles = Object.values(rawByCategory).flat().map(enhanceArticle);
const errors = [];

for (const article of articles) {
  const id = `${article.category}/${article.slug}`;
  if (!article.storyBlocks?.length && !article.sections?.length) {
    errors.push(`${id}: no structured body`);
  }
  if (!article.sourceNotes?.length) errors.push(`${id}: no source or verification notes`);
  if (!article.editorialContext) errors.push(`${id}: no editorial context`);
  if (!article.publishedAt || Number.isNaN(Date.parse(article.publishedAt))) {
    errors.push(`${id}: invalid publishedAt`);
  }
  if ((article.metaDescription ?? "").length > 155) {
    errors.push(`${id}: meta description exceeds 155 characters`);
  }
  if ((article.seoTitle ?? "").length > 67) {
    errors.push(`${id}: SEO title exceeds 67 characters`);
  }
  if (!authorSlugs.has(article.authorslug) && article.authorslug !== "mirror-standard-staff") {
    errors.push(`${id}: unknown author slug ${article.authorslug}`);
  }
  if (article.sourceNotes?.some((source) => !/^(https?:\/\/|\/)/.test(source.url))) {
    errors.push(`${id}: invalid source URL`);
  }
}

const statusCounts = articles.reduce((counts, article) => {
  const status = article.editorialContext?.status ?? "missing";
  counts[status] = (counts[status] ?? 0) + 1;
  return counts;
}, {});

const readingTimes = articles.map(getArticleReadingTime);
const summary = {
  articles: articles.length,
  categories: Object.fromEntries(
    Object.entries(rawByCategory).map(([category, items]) => [category, items.length]),
  ),
  statuses: statusCounts,
  readingTimeMinutes: {
    minimum: Math.min(...readingTimes),
    average: Number((readingTimes.reduce((sum, value) => sum + value, 0) / readingTimes.length).toFixed(1)),
    maximum: Math.max(...readingTimes),
  },
  structuredBodies: articles.filter((article) => article.sections?.length || article.storyBlocks?.length).length,
  sourceTrails: articles.filter((article) => article.sourceNotes?.length).length,
  commentsDisabled: articles.filter((article) => article.allowComments === false).length,
  errors,
};

console.log(JSON.stringify(summary, null, 2));
if (errors.length) process.exitCode = 1;
