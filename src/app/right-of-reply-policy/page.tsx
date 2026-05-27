import type { Metadata } from "next";
import TrustPage from "../../components/TrustPage";

export const metadata: Metadata = {
  title: "Right of Reply Policy | Mirror Standard",
  description:
    "How Mirror Standard handles outreach, response opportunities, disputed claims, and post-publication reply requests.",
  alternates: {
    canonical: "https://www.mirrorstandard.com/right-of-reply-policy/",
  },
};

export default function RightOfReplyPolicyPage() {
  return (
    <TrustPage
      title="Right of Reply Policy"
      description="Mirror Standard aims to give relevant people and institutions a fair opportunity to respond when criticism, allegations, or materially disputed factual context are central to a story."
      url="https://www.mirrorstandard.com/right-of-reply-policy/"
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
          title: "When we seek a response",
          paragraphs: [
            "If a story includes criticism, allegations, serious factual dispute, or materially adverse claims about a person or institution, Mirror Standard aims to seek a response before publication when feasible and when doing so does not compromise necessary reporting, safety, or legitimate public-interest work.",
            "The goal is not to offer editorial control to the subject of reporting. The goal is to test the story against relevant rebuttal, correction, or context before publication where the circumstances warrant it.",
          ],
        },
        {
          title: "How outreach is usually handled",
          paragraphs: [
            "The method and timing of outreach may vary with the story. Mirror Standard may contact a subject or representative by email, phone, public contact channel, counsel, or other reasonable means depending on the nature of the allegation and the urgency of publication.",
            "A reasonable opportunity to respond does not always mean an unlimited one. Fast-moving stories, breaking developments, public-safety issues, and time-sensitive reporting may require shorter response windows than feature or investigative work.",
          ],
        },
        {
          title: "What to send if you are seeking a reply or correction",
          paragraphs: [
            "If you are contacting Mirror Standard in response to published or pending coverage, include the article URL or headline, the specific claim you dispute, the factual basis for your objection, any supporting documents you want reviewed, and the best contact information for follow-up.",
            "General denials without specifics are less useful than direct identification of what is said to be wrong, incomplete, misleading, or outdated.",
          ],
        },
        {
          title: "Post-publication responses",
          paragraphs: [
            "After publication, a person or institution that believes context is missing or materially wrong may contact the newsroom. Relevant responses may lead to a clarification, correction, update note, follow-up coverage, or no change if the reporting remains supported.",
            "Mirror Standard may publish or summarize a substantive response when it materially helps readers understand the dispute or the evidentiary record.",
          ],
        },
        {
          title: "What this policy does not guarantee",
          paragraphs: [
            "A right-of-reply request does not guarantee publication of a full statement, removal of accurate reporting, or advance approval of an article by the subject of that article.",
            "It does mean the newsroom should review the request seriously, compare it against the evidence, and respond according to its editorial standards and corrections process.",
          ],
        },
        {
          title: "Urgent matters and legal sensitivity",
          paragraphs: [
            "Where a story concerns active legal proceedings, regulatory matters, allegations of misconduct, or reputationally sensitive claims, Mirror Standard's standard is to handle outreach carefully and document the response process in the newsroom's working record.",
            "A reply request should improve factual accuracy, not become a back door to pressure the newsroom into weakening supported reporting.",
          ],
        },
      ]}
    />
  );
}
