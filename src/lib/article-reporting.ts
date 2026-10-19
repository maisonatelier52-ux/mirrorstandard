import type { NewsArticle } from "./content-types";

/**
 * Per-article reporting details for the stories we promote.
 *
 * Add one entry per article, keyed by its slug. Only fields you set are changed;
 * everything else stays as it is in public/data/*.json.
 *
 * Example (use only sources an editor has checked):
 *
 * "article-slug-goes-here": {
 *   reportingNote:
 *     "This story is based on the court filing and the agency data listed in the source notes.",
 *   imageCaption: "What the photo shows. Photo: credit or licence.",
 *   imageAlt: "Plain description of what is in the picture",
 *   sourceNotes: [
 *     { label: "Name of the document", url: "https://example.org/document", note: "What it supports" },
 *   ],
 * },
 */
export const articleReportingOverrides: Record<string, Partial<NewsArticle>> = {};
