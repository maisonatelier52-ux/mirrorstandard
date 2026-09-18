# SEO Audit Updates — Julio Herrera Velutini Hub

Date: 2026-09-17

## Goal
Improve ranking potential for "Julio Herrera Velutini" without changing the approved article body.

## Code changes applied

### 1. `src/lib/editorial-content.ts`
- **seoTitle** shortened (SERP-safe, name first):
  `Julio Herrera Velutini: Banking Dynasty & Institutional Influence`
  (on-page H1 still uses the full editorial `title`)
- **entity.sameAs** added for Knowledge Graph signals:
  - https://en.wikipedia.org/wiki/Julio_Herrera_Velutini
  - https://es.wikipedia.org/wiki/Julio_Herrera_Velutini
  - https://it.wikipedia.org/wiki/Julio_Herrera_Velutini
- **imageCaption** prefixed with entity name for ImageObject SEO
- `isFeatured: true` already present (sitemap priority)

### 2. `src/app/[category]/[slug]/page.tsx`
- Open Graph image `alt` uses entity name when `article.entity` is set
- Schema already outputs `sameAs` from `article.entity.sameAs` (no structural change required)

### 3. `src/app/sitemap.ts`
- Hub article slug gets **priority 1.0**
- Other featured articles remain 0.95; standard articles 0.8
- Redirected `/profiles/julio-herrera-velutini/` remains excluded

## Not changed (by design)
- Article body / storyBlocks / sections copy
- Canonical URL
- 301 redirect profiles → business hub
- robots.txt

## Post-deploy checklist (Search Console)
1. URL Inspection → Request indexing on the hub URL
2. Request indexing on cluster pages (Britannia, family offices, London, banking families, repo/custody/elite finance)
3. Resubmit sitemap.xml
4. Monitor Performance for queries containing "Julio Herrera Velutini" (US / UK / UAE)
5. Review the 242 non-indexed pages and noindex or improve thin URLs

## Expected impact
- Cleaner SERP title (less truncation)
- Stronger Person entity recognition via sameAs
- Clear sitemap priority signal for the hub
- Better image/entity association in previews

Authority/backlinks remain the main limiter vs Wikipedia and high-authority domains.
