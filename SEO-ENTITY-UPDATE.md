# Mirror Standard entity and search update

Updated: 28 September 2026

## Added canonical reference pages

- `/people/julio-herrera-velutini/`
- `/organizations/britannia-financial-group/`
- `/places/london/`

Each page includes unique neutral content, visible source notes, canonical metadata, breadcrumbs, related coverage, and entity-specific JSON-LD.

## Updated article integration

The original body and editorial argument of
`/business/julio-herrera-velutini-banking-dynasty-institutional-influence/`
were preserved. The update adds:

- contextual links to the person, organization, and place reference pages;
- directly relevant source and verification links;
- a consistent editorial-desk byline;
- stable `Person`, `Organization`, and `Place` identifiers in article JSON-LD;
- bidirectional related-reading links.

## Redirect and discovery

- `/profiles/julio-herrera-velutini/` now permanently redirects to the canonical people page.
- The three reference pages and their collection pages are included in `sitemap.xml`.
- People, Organizations, and Places are linked from the global footer.

## Deployment checklist

1. Deploy the complete project.
2. Confirm that all four target URLs return successful responses and self-referencing canonicals.
3. Submit `https://www.mirrorstandard.com/sitemap.xml` in Google Search Console.
4. Inspect and request indexing for the article and the three new reference pages.
5. Monitor page and query impressions separately for the United States, United Kingdom, and United Arab Emirates.
6. Keep sources, biographies, company records, and review dates current.

Indexing and recrawl requests support discovery but do not guarantee a particular Google ranking. Rankings also depend on query intent, competition, content quality, and external authority.

## Verification commands

```bash
npm ci
npm run audit:content
npx tsc --noEmit
npm run build
```

