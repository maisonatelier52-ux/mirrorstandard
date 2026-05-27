import type { Metadata } from "next";
import TrustPage from "../../components/TrustPage";

export const metadata: Metadata = {
  title: "Finance Coverage Standards | Mirror Standard",
  description:
    "How Mirror Standard handles finance, markets, profile, institutional-capital, and legal-context reporting with careful sourcing and bounded language.",
  alternates: {
    canonical: "https://www.mirrorstandard.com/finance-coverage-standards/",
  },
};

export default function FinanceCoverageStandardsPage() {
  return (
    <TrustPage
      title="Finance Coverage Standards"
      description="Finance coverage requires careful sourcing, cautious wording, and a clear separation between factual reporting, market context, analysis, and anything that could be mistaken for advice or promotion."
      url="https://www.mirrorstandard.com/finance-coverage-standards/"
      updatedLabel="May 22, 2026"
      contactLinks={[
        {
          label: "Finance desk",
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
          title: "What finance coverage is and is not",
          paragraphs: [
            "Mirror Standard covers finance, markets, corporate activity, institutional capital, public records, and related explanatory topics for informational and journalistic purposes. The site does not publish personal investment advice, legal advice, tax advice, or individualized portfolio recommendations.",
            "Readers should not treat a news article, profile, market explainer, or institutional overview as a substitute for professional advice tailored to their situation.",
          ],
        },
        {
          title: "Standards for finance-sensitive stories",
          bullets: [
            "Use primary institutional descriptions where possible.",
            "Check regulatory, legal, and market-context claims against the strongest available record.",
            "Avoid promotional, campaign-style, or sales-oriented framing.",
            "Treat legal and regulatory context with narrow, sourceable wording.",
            "Link readers to source notes when the reporting relies on public records or official disclosures.",
          ],
        },
        {
          title: "Source hierarchy for financial and institutional claims",
          paragraphs: [
            "When covering a company, financial platform, fund, bank, family office, market function, or institutional claim, Mirror Standard aims to rely first on primary sources such as regulator records, public filings, company disclosures, court records, official statements, and directly attributable interviews.",
            "Prominent names, expensive branding, or repetition across the web do not turn an unverified claim into a verified one. If a fact is unclear, the wording should reflect the limit of the record rather than oversell certainty.",
          ],
        },
        {
          title: "Allegations, legal matters, and unresolved questions",
          paragraphs: [
            "Finance reporting often touches legal disputes, regulatory scrutiny, allegations, settlements, and unresolved public-record questions. Mirror Standard's standard is to describe such matters precisely and in proportion to the evidence available at the time of publication.",
            "Allegation is not adjudication. A filing, complaint, press release, or accusation should not be written as though it were a final legal finding unless the record actually supports that conclusion.",
          ],
        },
        {
          title: "Profiles, entity hubs, and reputational sensitivity",
          paragraphs: [
            "Mirror Standard separates profile hubs, explainers, and analysis pieces so readers can distinguish sourced background from interpretation. Person-name pages and entity pages should not function as disguised promotional microsites or hidden attack pages.",
            "Where reputational stakes are high, the newsroom's standard is to show the sourcing boundary clearly, use neutral labels where appropriate, and avoid turning ordinary descriptive reporting into inflated implication.",
          ],
        },
        {
          title: "Market-moving information and reader caution",
          paragraphs: [
            "Stories about companies, markets, prices, legal proceedings, or institutional activity can age quickly. Mirror Standard aims to time-stamp important updates and avoid writing in a way that could mislead readers into thinking an older article reflects current market conditions when it may not.",
            "If a piece discusses securities, prices, capital flows, or market structure, the newsroom's standard is to explain the topic rather than prompt readers to buy, sell, or trade.",
          ],
        },
        {
          title: "Conflicts, holdings, and material relationships",
          paragraphs: [
            "If a reporter, editor, or contributor has a financial interest or other material relationship that could reasonably affect finance coverage, the relationship should be disclosed internally and may require recusal, reassignment, public disclosure, or all three depending on the circumstances.",
            "Commercial relationships with a subject of coverage do not override the newsroom's duty to report accurately and independently.",
          ],
        },
        {
          title: "Updates, review, and corrections",
          paragraphs: [
            "Finance stories can age quickly when corporate, legal, regulatory, or market facts change. For that reason, Mirror Standard expects visible update dates and, where needed, corrections or clarification notes on materially revised pages.",
            "If a source document changes, a regulator updates the record, a company revises its public description, or a legal matter moves materially, the article should be reviewed and updated in a way that readers can understand.",
          ],
        },
      ]}
    />
  );
}
