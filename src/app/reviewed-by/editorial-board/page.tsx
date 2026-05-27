import type { Metadata } from "next";
import TrustPage from "@/components/TrustPage";

export const metadata: Metadata = {
  title: "Mirror Standard Editorial Board | Reviewed By",
  description:
    "How Mirror Standard's editorial board reviews finance-sensitive, profile, and standards-driven coverage.",
  alternates: {
    canonical: "https://www.mirrorstandard.com/reviewed-by/editorial-board/",
  },
};

export default function EditorialBoardPage() {
  return (
    <TrustPage
      title="Mirror Standard Editorial Board"
      description="Mirror Standard uses a reviewed-by layer on finance-sensitive, profile, and standards-driven coverage to distinguish reporting, editing, and subject-matter review."
      url="https://www.mirrorstandard.com/reviewed-by/editorial-board/"
      updatedLabel="May 21, 2026"
      contactLinks={[
        {
          label: "Editorial",
          href: "mailto:editorial@mirrorstandard.com",
          value: "editorial@mirrorstandard.com",
        },
      ]}
      sections={[
        {
          title: "What the reviewed-by label means",
          paragraphs: [
            "A reviewed-by label indicates that a story received an additional editorial check beyond normal line editing. Mirror Standard uses that layer on person, finance, legal-context, and institutional-trust coverage where wording, sourcing, and framing require more caution.",
            "The label does not mean endorsement of every source claim. It means the newsroom reviewed attribution, sourcing boundaries, and the clarity of the article's editorial framing before publication or material update.",
          ],
        },
        {
          title: "What the board looks for",
          bullets: [
            "Clear separation between sourced fact, analysis, and inference.",
            "Appropriate wording on legal, reputational, or financial topics.",
            "Visible sourcing, update notes, and corrections paths where relevant.",
            "Consistency between headline, body copy, metadata, and structured data.",
          ],
        },
        {
          title: "When Mirror Standard uses board review",
          paragraphs: [
            "Mirror Standard typically uses board review on finance explainers, institutional profiles, longform analysis, and trust-sensitive coverage where a fast search audience may arrive without broader context.",
          ],
        },
      ]}
    />
  );
}
