# Mirror Standard quality upgrade

This project now applies one editorial-quality layer to all 148 articles at build time. The original JSON remains available as the source corpus, while `src/lib/editorial-enhancements.ts` turns each item into a more useful, transparent article page.

## What changed

- Long, dense bodies are divided into readable sections and paragraphs.
- Story-status labels distinguish reported news, analysis, reviews, developing reports, and allegations.
- Each article includes an editorial-context panel, a concise at-a-glance summary, a calculated reading time, and a source/verification trail.
- Sensational or overly certain headlines receive targeted, more defensible overrides.
- Dates are normalized without timezone drift, and SEO titles, descriptions, and keywords are generated consistently.
- Author information now uses restrained, role-based bios and a shared newsroom contact instead of unverifiable personal claims or social profiles.
- Comments are disabled until a real moderation workflow exists.
- The source panel explicitly distinguishes a cited source from a general verification starting point.

## Verification

Run the project checks from the repository root:

```bash
npm run audit:content
npx tsc --noEmit
npm run build
```

The audit covers all 148 articles and checks for structured bodies, valid dates, known authors, source trails, editorial context, metadata limits, and valid source URLs.

## Editorial note

This upgrade improves structure, attribution cues, uncertainty labels, and access to authoritative records. It does not turn directory links into claim-level citations or independently re-report every statement in the inherited corpus. Editors should verify consequential claims against the linked primary material, add direct citations where available, and record substantive corrections before publication.
