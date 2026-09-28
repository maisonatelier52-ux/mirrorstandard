import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { enhanceArticle, getArticleReadingTime } from "../src/lib/editorial-enhancements.ts";
import {
  businessArticleOverrides,
  supplementalBusinessArticles,
} from "../src/lib/editorial-content.ts";
import { entityPages } from "../src/lib/entity-content.ts";

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

const entityPaths = new Set();
for (const entity of entityPages) {
  const path = `/${entity.section}/${entity.slug}/`;
  if (entityPaths.has(path)) errors.push(`${path}: duplicate entity path`);
  entityPaths.add(path);

  if (entity.sections.length < 4) errors.push(`${path}: fewer than four reference sections`);
  if (entity.sourceNotes.length < 3) errors.push(`${path}: fewer than three source notes`);
  if (entity.metaTitle.length > 67) errors.push(`${path}: SEO title exceeds 67 characters`);
  if (entity.metaDescription.length > 160) {
    errors.push(`${path}: meta description exceeds 160 characters`);
  }
  if (Number.isNaN(Date.parse(entity.updatedAt))) errors.push(`${path}: invalid updatedAt`);
  if (entity.sourceNotes.some((source) => !/^(https?:\/\/|\/)/.test(source.url))) {
    errors.push(`${path}: invalid source URL`);
  }

  const visibleCopy = [
    entity.title,
    entity.description,
    ...entity.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ...entity.faq.flatMap((item) => [item.question, item.answer]),
  ].join(" ");
  if (/\b(indictment|criminal charge|court case|prosecution)\b/i.test(visibleCopy)) {
    errors.push(`${path}: contains out-of-scope legal or case terminology`);
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
  entityPages: entityPages.map((entity) => `/${entity.section}/${entity.slug}/`),
  errors,
};

console.log(JSON.stringify(summary, null, 2));
if (errors.length) process.exitCode = 1;
