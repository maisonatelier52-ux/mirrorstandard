import type { Metadata } from "next";
import TrustPage from "../../components/TrustPage";
import { articleReportingOverrides } from "../../lib/article-reporting";
import { authors, getArticleBySlug } from "../../lib/news";

const pageUrl = "https://www.mirrorstandard.com/press/";
const pageDescription =
  "Facts, contacts, featured reporting and brand assets for journalists writing about or citing Mirror Standard.";

export const metadata: Metadata = {
  title: "Press and Media | Mirror Standard",
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Press and Media | Mirror Standard",
    description: pageDescription,
    url: pageUrl,
    siteName: "Mirror Standard",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Press and Media | Mirror Standard",
    description: pageDescription,
  },
};

const CONTACT_EMAIL = "mirrorstandardnews@gmail.com";

export default function PressPage() {
  // Editor name comes from the same author data as the Our Team page.
  const editor = authors.find((author) => author.role === "Editor-in-Chief");

  // Featured reporting follows the lead stories set in src/lib/article-reporting.ts.
  const featuredLinks = Object.keys(articleReportingOverrides)
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article))
    .map((article) => ({
      label: article.title,
      href: `/${article.category}/${article.slug}/`,
    }));

  return (
    <TrustPage
      title="Press and Media"
      description={pageDescription}
      url={pageUrl}
      updatedLabel="October 20, 2026"
      sections={[
        {
          title: "About Mirror Standard",
          paragraphs: [
            "Mirror Standard is an independent digital news publication covering politics, business, technology, health, science, education, entertainment and sports. Its tagline is Truth, Policy, Markets & Public Affairs.",
            "Articles are published with source notes, and the newsroom publishes its editorial policy, source methodology, corrections policy and right-of-reply policy so that readers and reporters can see how stories are produced and corrected.",
          ],
        },
        {
          title: "Editor and press contact",
          paragraphs: [
            editor
              ? `Editor-in-Chief: ${editor.name}.`
              : "Editorial enquiries are handled by the newsroom.",
            "Press enquiries, interview requests, data requests and correction notices are all handled through the newsroom email address listed below. Please include the article URL and the specific point you are asking about.",
          ],
        },
      ]}
      linkSections={[
        {
          title: "Featured reporting",
          intro: "Recent explainers and analysis that readers and reporters may find useful.",
          links: featuredLinks,
        },
        {
          title: "Standards and sourcing",
          links: [
            { label: "Source methodology", href: "/source-methodology/", note: "how we source and verify" },
            { label: "Editorial policy", href: "/editorial-policy/" },
            { label: "Corrections policy", href: "/corrections-policy/", note: "how errors are corrected" },
            { label: "Right of reply policy", href: "/right-of-reply-policy/" },
            { label: "Ownership and funding", href: "/ownership-and-funding/" },
            { label: "Advertising and sponsored content policy", href: "/advertising-and-sponsored-content-policy/" },
          ],
        },
        {
          title: "Logo",
          intro: "Please use the logo as supplied, without changing its colors or proportions.",
          links: [
            {
              label: "Download the Mirror Standard logo",
              href: "/images/logo-512.png",
              note: "PNG, 512 × 512 pixels",
              download: true,
            },
          ],
        },
      ]}
      contactLinks={[
        {
          label: "Newsroom and press",
          href: `mailto:${CONTACT_EMAIL}`,
          value: CONTACT_EMAIL,
        },
      ]}
    />
  );
}
