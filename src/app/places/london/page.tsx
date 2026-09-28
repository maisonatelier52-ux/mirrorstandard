import EntityReferencePage from "../../../components/EntityReferencePage";
import { entityPages } from "../../../lib/entity-content";
import { createEntityMetadata } from "../../../lib/entity-metadata";

const entity = entityPages.find(
  (item) => item.section === "places" && item.slug === "london",
)!;

export const metadata = createEntityMetadata(entity);

export default function LondonPage() {
  return <EntityReferencePage entity={entity} />;
}

