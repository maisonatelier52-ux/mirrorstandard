import type { Metadata } from "next";
import TrustPage from "../../components/TrustPage";

export const metadata: Metadata = {
  title: "Source Methodology | Mirror Standard",
  description:
    "How Mirror Standard approaches sourcing, verification, attribution, anonymous sources, public records, and source notes in its reporting.",
  alternates: {
    canonical: "https://www.mirrorstandard.com/source-methodology/",
  },
};

export default function SourceMethodologyPage() {
  return (
    <TrustPage
      title="Source Methodology"
      description="Mirror Standard aims to show readers how articles are built: what is sourced directly, what comes from public records or official documents, what remains unverified, and where interpretation begins."
      url="https://www.mirrorstandard.com/source-methodology/"
      updatedLabel="May 22, 2026"
      contactLinks={[
        {
          label: "Editorial",
          href: "mailto:editorial@mirrorstandard.com",
          value: "editorial@mirrorstandard.com",
        },
        {
          label: "Corrections",
          href: "mailto:corrections@mirrorstandard.com",
          value: "corrections@mirrorstandard.com",
        },
      ]}
      sections={[
        {
          title: "How reporting begins",
          paragraphs: [
            "Mirror Standard aims to begin with verifiable material rather than recycled summary. That may include official institutional pages, court records, regulatory disclosures, company filings, direct interviews, public statements, original media, public datasets, and contemporaneous reporting that can itself be checked against the record.",
            "The newsroom's standard is to narrow wording when direct verification is incomplete. If a fact cannot be confirmed to the level the story would otherwise imply, the language should be tightened until it reflects what is actually known.",
          ],
        },
        {
          title: "Source hierarchy and verification",
          paragraphs: [
            "Whenever possible, Mirror Standard prefers primary documents and firsthand sourcing over tertiary summaries. Official records and direct statements are generally stronger than rumor, aggregation, or unattributed repetition.",
            "A source's prominence does not remove the need for verification. Claims from public officials, corporate actors, campaign representatives, or prominent commentators are still subject to checking, context, and qualification.",
          ],
          bullets: [
            "Primary records and firsthand sourcing are preferred where available.",
            "Secondary reporting may be used, but should not be repeated as certainty when the underlying claim remains unsettled.",
            "If chronology, figures, or legal context are central to the story, those details should be checked against the underlying document or source wherever feasible.",
          ],
        },
        {
          title: "Anonymous sources and background information",
          paragraphs: [
            "Mirror Standard does not treat anonymity as a shortcut. Anonymous or background sourcing may be used when the information is in the public interest and cannot be responsibly obtained on the record, but the newsroom should understand the source's identity and evaluate motive, access, and reliability.",
            "When anonymity is granted, the reporting should give readers as much truthful context as possible about why the source is being protected without needlessly exposing the source.",
          ],
        },
        {
          title: "Documents, media, and data",
          paragraphs: [
            "Documents, screenshots, audio, video, and data extracts should be reviewed with care. Mirror Standard aims to check provenance, timing, authenticity, and whether a clip or excerpt may be misleading without broader context.",
            "A document's existence is not the same as a document proving the broadest possible claim. The newsroom's standard is to describe what a record shows, what it does not show, and where interpretation begins.",
          ],
        },
        {
          title: "Source notes, attribution, and links",
          paragraphs: [
            "For trust-sensitive reporting, including finance explainers, profiles, legal-context pieces, and institution-focused reporting, Mirror Standard may include source notes or primary links so readers can inspect the public record themselves.",
            "Attribution should be specific enough for readers to understand where key information came from. Where a story relies on public record, official statements, or direct institutional descriptions, Mirror Standard aims to signal that clearly rather than burying the sourcing logic.",
          ],
        },
        {
          title: "How we treat uncertainty and change",
          bullets: [
            "We do not convert uncertainty into certainty for headline effect.",
            "We distinguish analysis from assertion.",
            "We update wording when better sourcing becomes available or when a public record materially changes.",
            "If a claim is unresolved, contested, or incomplete, the article should say so rather than imply a settled conclusion.",
          ],
        },
        {
          title: "What this policy does not mean",
          paragraphs: [
            "Source transparency does not require revealing every confidential source or every reporting step in a way that would compromise safety, privacy, or legitimate journalistic work. It does mean giving readers an honest account of what kind of evidence supports a story.",
            "A source note is not a substitute for careful writing. The article itself should still describe evidence with precision and restraint.",
          ],
        },
      ]}
    />
  );
}
