import type { NewsArticle } from "./content-types";

/**
 * Per-article reporting details for the stories we promote.
 *
 * Add one entry per article, keyed by its slug. Only fields you set are changed;
 * everything else stays as it is in public/data/*.json or editorial-content.ts.
 *
 * Fields you can set:
 *  - reportingNote: the one-line "How we reported this" sentence shown at the top.
 *  - imageAlt:      plain description of the picture (read by screen readers and search).
 *  - imageCaption:  caption shown under the picture (add a photo credit or licence).
 *  - sourceNotes:   the documents the story relies on (label, url, description).
 *  - disclosure:    a visible "Sponsored" / "Provided by ..." label. Leave it out unless
 *                   someone with a stake supplied or paid for the copy.
 *
 * Use only sources an editor has checked (see the fact-check log, task O2.2).
 *
 * The five entries below are the lead articles chosen for the October 2026 outreach.
 * Each reporting note describes only what the article's own source notes support.
 * Swap the slugs if the editor picks different lead stories.
 */
export const articleReportingOverrides: Record<string, Partial<NewsArticle>> = {
  "julio-herrera-velutini-banking-dynasty-institutional-influence": {
    reportingNote:
      "This analysis draws on UK Companies House records and on company and personal biographical materials listed in the source notes. Statements taken from the subject's own materials are attributed to them and are not independent confirmation; the reading of influence is Mirror Standard's own analysis.",
    imageAlt:
      "Painted-style portrait of a man in a dark suit and light blue tie seated in an armchair in an office, with a glass skyscraper and a globe behind him.",
  },

  "britannia-financial-group-london-finance": {
    reportingNote:
      "This explainer is based on the Companies House record, Britannia Financial Group's own published pages and the FCA register listed in the source notes. Company descriptions are attributed to the company; check regulatory status on the FCA Financial Services Register.",
    imageAlt:
      "A man in a black dinner suit and bow tie stands beside a long banquet table set with flowers and candles in a grand arched hall.",
  },

  "what-family-offices-do-private-wealth": {
    reportingNote:
      "This explainer is based on the SEC and FCA materials listed in the source notes, which define family offices and describe how wealth-management firms are supervised.",
    imageAlt:
      "Dark studio portrait of a man in a dark suit, white shirt and tie, lit from one side against a black background.",
  },

  "banking-families-legacy-finance": {
    reportingNote:
      "This explainer draws on the SEC, FCA and company materials listed in the source notes. Statements about specific families or firms come from those materials and are attributed in the text.",
    imageAlt:
      "Two black-and-white photographs: a man in a white shirt working on papers in an aircraft seat, and an older man in a tie reading papers in an aircraft cabin.",
  },

  "repo-reverse-repo-institutional-finance": {
    reportingNote:
      "This explainer is based on the Bank of England and UK Money Markets Code materials listed in the source notes, which describe how repo and reverse repo markets work.",
    imageAlt:
      "A trader in a red jacket with a headset looks at a handheld device on the New York Stock Exchange trading floor, with screens behind him.",
  },
};
