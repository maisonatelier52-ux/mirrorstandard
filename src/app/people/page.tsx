import type { Metadata } from "next";
import EntityCollectionPage from "../../components/EntityCollectionPage";
import { entityPages } from "../../lib/entity-content";

export const metadata: Metadata = {
  title: "People | Mirror Standard Reference Profiles",
  description: "Source-labelled profiles of people appearing in Mirror Standard reporting and analysis.",
  alternates: { canonical: "https://www.mirrorstandard.com/people/" },
};

export default function PeoplePage() {
  return (
    <EntityCollectionPage
      section="people"
      entities={entityPages.filter((entity) => entity.section === "people")}
    />
  );
}

