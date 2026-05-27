import type { Metadata } from "next";
import TrustPage from "../../components/TrustPage";

export const metadata: Metadata = {
  title: "Advertising and Sponsored Content Policy | Mirror Standard",
  description:
    "Mirror Standard's policy on advertising, sponsored content, affiliate disclosures, labeling, and the separation between commercial material and editorial coverage.",
  alternates: {
    canonical:
      "https://www.mirrorstandard.com/advertising-and-sponsored-content-policy/",
  },
};

export default function AdvertisingPolicyPage() {
  return (
    <TrustPage
      title="Advertising and Sponsored Content Policy"
      description="Mirror Standard separates commercial material from editorial reporting and aims to label advertising, sponsorships, affiliate links, and other paid relationships clearly and conspicuously for readers."
      url="https://www.mirrorstandard.com/advertising-and-sponsored-content-policy/"
      updatedLabel="May 22, 2026"
      contactLinks={[
        {
          label: "Advertising and partnerships",
          href: "mailto:editorial@mirrorstandard.com",
          value: "editorial@mirrorstandard.com",
        },
        {
          label: "Reader concerns",
          href: "mailto:corrections@mirrorstandard.com",
          value: "corrections@mirrorstandard.com",
        },
      ]}
      sections={[
        {
          title: "Editorial separation",
          paragraphs: [
            "Commercial relationships do not grant editorial control. Reporting decisions, headlines, editorial framing, source selection, and publication timing are not sold as part of an advertising, affiliate, sponsorship, or partnership arrangement.",
            "Mirror Standard's standard is that journalism and advertising should remain distinguishable without guesswork. A reader should not have to infer whether content is paid for, promotional, or independently reported.",
          ],
        },
        {
          title: "How paid material is labeled",
          paragraphs: [
            "When content is paid for, sponsored, or published because of a commercial arrangement, Mirror Standard's expectation is that the disclosure appears in a clear location and uses language ordinary readers can understand before they mistake the material for independent reporting.",
          ],
          bullets: [
            "Clear labels may include: Advertisement, Ad, Sponsored, Paid Content, or Sponsored Advertising Content.",
            "The disclosure should appear close enough to the content that a reader sees it before or as they engage with the material, not only after scrolling deep into the page.",
            "Visual design, bylines, and page layout should not be used to make paid material look indistinguishable from independently reported journalism.",
            "Vague labels that could confuse readers should be avoided if they do not make the commercial nature of the material obvious.",
          ],
        },
        {
          title: "Native, branded, and partner content",
          paragraphs: [
            "If Mirror Standard publishes sponsored features, branded content, partner-funded explainer material, or similarly designed promotional pages, those pages should carry a disclosure that is prominent, plain-language, and durable across desktop and mobile views.",
            "A sponsor may buy placement or a clearly labeled promotional package, but a sponsor does not buy the right to masquerade as the newsroom, to receive a deceptive byline, or to alter unrelated reporting.",
          ],
        },
        {
          title: "Affiliate links, commerce, and material connections",
          paragraphs: [
            "If Mirror Standard uses affiliate links, referral arrangements, or any other material connection that could result in compensation when a reader clicks or makes a purchase, that relationship should be disclosed clearly in or near the affected content.",
            "Commerce-related disclosures should be written for readers, not buried in legal shorthand. The point is to let readers understand when a recommendation, link, or product mention could generate revenue.",
          ],
          bullets: [
            "Affiliate or referral disclosures should be clear and conspicuous.",
            "A material connection should not be hidden only in a footer, general policy page, or terms page if it affects a specific piece of content.",
            "Editorial recommendations should not be conditioned on compensation alone.",
          ],
        },
        {
          title: "Newsletters, video, audio, and social distribution",
          paragraphs: [
            "Disclosure standards apply across formats, not only article pages. Sponsored newsletter placements, paid podcast segments, video sponsorships, and social media promotions should also be labeled in a way that travels with the content or appears clearly at the point of exposure.",
            "The format may change, but the reader-facing principle does not: paid communication should look paid, not editorially disguised.",
          ],
        },
        {
          title: "Political and issue advertising",
          paragraphs: [
            "If Mirror Standard accepts political, advocacy, or issue-based advertising, the material should be clearly labeled as advertising and should not be presented as reported journalism or independent analysis.",
            "Acceptance of an advertisement does not imply endorsement of a campaign, candidate, issue position, organization, or claim contained in the advertisement.",
          ],
        },
        {
          title: "Practices Mirror Standard should not use",
          bullets: [
            "Selling editorial conclusions or offering favorable coverage in exchange for payment or access.",
            "Using a newsroom byline, headline style, or article layout to disguise paid material where the commercial nature is not obvious.",
            "Allowing an advertiser, sponsor, or affiliate partner to control unrelated reporting.",
            "Hiding a material connection in a place a normal reader would not reasonably notice.",
          ],
        },
        {
          title: "Questions, complaints, and review requests",
          paragraphs: [
            "Readers, advertisers, partners, and subjects may contact Mirror Standard if they believe commercial material was mislabeled or the boundary between advertising and editorial work was not clear enough.",
            "When a disclosure problem is substantiated, the newsroom's expectation is that the label, placement, or page treatment is corrected promptly.",
          ],
        },
      ]}
    />
  );
}
