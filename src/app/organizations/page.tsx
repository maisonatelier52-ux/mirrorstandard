import type { Metadata } from "next";
import EntityCollectionPage from "../../components/EntityCollectionPage";
import { entityPages } from "../../lib/entity-content";

export const metadata: Metadata = {
  title: "Organizations | Mirror Standard Reference Profiles",
  description: "Source-labelled organization profiles connecting company records with Mirror Standard reporting.",
  alternates: { canonical: "https://www.mirrorstandard.com/organizations/" },
};

export default function OrganizationsPage() {
  return (
    <EntityCollectionPage
      section="organizations"
      entities={entityPages.filter((entity) => entity.section === "organizations")}
    />
  );
}

