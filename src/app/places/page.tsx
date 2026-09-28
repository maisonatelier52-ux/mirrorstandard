import type { Metadata } from "next";
import EntityCollectionPage from "../../components/EntityCollectionPage";
import { entityPages } from "../../lib/entity-content";

export const metadata: Metadata = {
  title: "Places | Mirror Standard Reference Guides",
  description: "Geographic reference pages explaining the institutional settings used in Mirror Standard coverage.",
  alternates: { canonical: "https://www.mirrorstandard.com/places/" },
};

export default function PlacesPage() {
  return (
    <EntityCollectionPage
      section="places"
      entities={entityPages.filter((entity) => entity.section === "places")}
    />
  );
}

