# Julio Herrera Velutini search visibility plan

Updated September 16, 2026.

## What this release changes

- Keeps the existing indexed article URL and preserves the supplied original headline, descriptions, body, FAQ, dates, byline, and editorial fields without rewriting them.
- Adds a clearer `NewsArticle`/`WebPage`/`Person` JSON-LD graph, a self-referencing canonical, and image URLs in the XML sitemap.
- Permanently redirects the overlapping `/profiles/julio-herrera-velutini/` page to the article so Google has one primary Mirror Standard URL for the entity.
- Avoids artificial US, UK, and UAE copies. One English page is appropriate until genuinely different regional reporting exists.

## Deploy-day checklist

1. Deploy the complete build without changing the article URL.
2. Confirm the article returns HTTP 200 and the old profile URL returns a permanent 308 redirect to the article.
3. Confirm the rendered HTML contains the article canonical, index/follow directives, title, description, visible published/updated dates, and JSON-LD.
4. Open `https://www.mirrorstandard.com/sitemap.xml` and confirm the article has the original May 29, 2026 `lastmod` plus its image URL.
5. Run the live article through Google's Rich Results Test and Schema.org validator. Fix any critical syntax errors before requesting a crawl.

## Google Search Console actions

1. Inspect the full article URL with URL Inspection.
2. Run **Test live URL**. Confirm page fetch succeeds, indexing is allowed, and the user-declared canonical is the article itself.
3. Click **Request indexing** once after deployment. Repeated requests do not speed up crawling.
4. Resubmit `https://www.mirrorstandard.com/sitemap.xml` in the Sitemaps report and check that Google processes it without errors.
5. After Google recrawls, inspect the URL again and confirm the Google-selected canonical matches the article.

## Measurement for the US, UK, and UAE

Use the Search Console Performance report with the page filter set to the exact article URL. Review each country separately: United States, United Kingdom, and United Arab Emirates.

Track weekly:

- impressions;
- clicks;
- click-through rate;
- average position;
- queries containing `Julio Herrera Velutini`;
- which URL Google shows for those queries.

Keep a dated baseline before deployment, then compare 28-day periods. A position change based on a handful of impressions is not yet reliable.

## What is still required to compete for page one

Technical SEO cannot create authority by itself. The exact-name results are crowded with Wikipedia, government records, company pages, and many self-published profile sites. Mirror Standard needs signals that do not come from its own domain.

Priorities:

1. Earn editorial links from relevant, reputable publications and institutions in the US, UK, and UAE. Do not buy links, exchange links at scale, or create more keyword sites; those practices can be treated as link spam.
2. Seek legitimate citations from sources that already cover the person or the relevant companies. Outreach should explain why the existing article is useful, not demand keyword-rich anchor text.
3. Strengthen the site's publication-level reputation through original reporting elsewhere on Mirror Standard, clear author information, corrections, and transparent sourcing—without changing this article's supplied copy.
4. Do not create artificial regional or keyword variants of this article. If genuinely different regional reporting is published in the future, it should be a separate editorial decision with unique evidence and correct reciprocal `hreflang` annotations.
5. Keep the article's supplied date unchanged unless its editorial content is substantively revised in the future.

## Realistic target

No developer or SEO provider can guarantee Google position 1. The first milestone is consistent impressions for the exact-name query, followed by page-two/page-one movement in each target country. The durable path is one technically clean canonical article plus evidence strong enough for independent sites to cite it.
