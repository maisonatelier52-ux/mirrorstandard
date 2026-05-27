import type { Metadata } from "next";
import TrustPage from "../../components/TrustPage";

export const metadata: Metadata = {
  title: "Ownership and Funding | Mirror Standard",
  description:
    "Detailed information about Mirror Standard's editorial independence, commercial relationships, conflicts standards, and ownership and funding disclosures.",
  alternates: {
    canonical: "https://www.mirrorstandard.com/ownership-and-funding/",
  },
};

export default function OwnershipAndFundingPage() {
  return (
    <TrustPage
      title="Ownership and Funding"
      description="This page explains who controls editorial decisions at Mirror Standard, how commercial support is separated from reporting, and how the newsroom handles conflicts, material relationships, and future ownership or funding disclosures."
      url="https://www.mirrorstandard.com/ownership-and-funding/"
      updatedLabel="May 22, 2026"
      contactLinks={[
        {
          label: "Editorial",
          href: "mailto:editorial@mirrorstandard.com",
          value: "editorial@mirrorstandard.com",
        },
        {
          label: "Corrections and transparency",
          href: "mailto:corrections@mirrorstandard.com",
          value: "corrections@mirrorstandard.com",
        },
      ]}
      sections={[
        {
          title: "What this page covers",
          paragraphs: [
            "Mirror Standard publishes as an independent digital newsroom operated by a distributed editorial team based in the United States. This page is intended to help readers understand how editorial control, commercial support, and conflict disclosures are handled on the public site.",
            "This page is not a substitute for a corporate registry filing or a securities disclosure. It is a reader-facing explanation of how editorial independence is protected and what kinds of material relationships Mirror Standard expects to disclose.",
          ],
        },
        {
          title: "Editorial control and decision-making",
          paragraphs: [
            "Editorial judgments at Mirror Standard are made by editors and reporters. Coverage decisions, headlines, source selection, framing, and publication timing are not sold to advertisers, sponsors, political actors, governments, or commercial partners.",
            "A business relationship does not create a right to favorable coverage, prior review of a reported article, or suppression of accurate reporting. If a proposed arrangement would blur those lines, the newsroom's standard is to reject the arrangement or remove the affected journalist from the assignment.",
          ],
        },
        {
          title: "How Mirror Standard may be funded",
          paragraphs: [
            "Mirror Standard may generate revenue through advertising, sponsorships, platform distribution, licensing, partnerships, and other ordinary publishing-related commercial arrangements. Any such revenue stream is expected to remain structurally separate from editorial decision-making.",
            "If Mirror Standard enters into a material funding relationship, ownership change, or strategic arrangement that a reasonable reader would consider relevant to editorial independence, the newsroom's expectation is that the relationship is disclosed on this page, on affected coverage, or both.",
          ],
        },
        {
          title: "Conflicts of interest and recusals",
          paragraphs: [
            "Journalists and editors are expected to disclose personal, financial, political, or family relationships that could reasonably call their impartiality into question on a relevant assignment. When necessary, the assignment should be moved, edited with explicit disclosure, or declined.",
            "Mirror Standard does not treat conflicts as a private housekeeping issue when reader trust is materially affected. If a relationship could alter how a reasonable reader interprets coverage, the newsroom's standard is disclosure, recusal, or both.",
          ],
          bullets: [
            "Relevant personal or financial ties should be disclosed internally before publication.",
            "Gifts, favors, or special access that would compromise independence should not be accepted.",
            "Outside work, advocacy, or consulting that conflicts with newsroom independence should be disclosed and may require reassignment.",
          ],
        },
        {
          title: "Commercial support does not buy coverage",
          paragraphs: [
            "Mirror Standard keeps a clear boundary between revenue activity and journalism. Advertising or sponsorship does not guarantee coverage, shape a reporter's conclusions, or entitle a commercial party to veto criticism.",
            "Paid content, sponsored features, affiliate relationships, and other commercial material should be labeled clearly enough that a reader does not have to guess whether they are reading journalism or advertising.",
          ],
        },
        {
          title: "Political, governmental, and advocacy influence",
          paragraphs: [
            "Mirror Standard does not present political, governmental, or advocacy messaging as independent reporting. If an external actor seeks to influence coverage through money, access, or pressure, the newsroom's standard is to preserve editorial control rather than trade independence for convenience.",
            "When a story concerns a subject with which Mirror Standard has a material relationship, the relationship should be disclosed in language a reader can understand.",
          ],
        },
        {
          title: "Changes to ownership or material support",
          paragraphs: [
            "Ownership, control, and funding arrangements can change over time. If Mirror Standard undergoes a material ownership change, takes on a relationship that bears directly on editorial independence, or launches a funding structure that a reasonable reader should know about, this page should be updated.",
            "Readers who believe a relevant ownership or funding relationship has not been disclosed may contact the newsroom and request review of the omission.",
          ],
        },
      ]}
    />
  );
}
