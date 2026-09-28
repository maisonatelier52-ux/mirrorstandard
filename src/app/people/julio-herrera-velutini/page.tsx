import EntityReferencePage from "../../../components/EntityReferencePage";
import { entityPages } from "../../../lib/entity-content";
import { createEntityMetadata } from "../../../lib/entity-metadata";

const entity = entityPages.find(
  (item) => item.section === "people" && item.slug === "julio-herrera-velutini",
)!;

export const metadata = createEntityMetadata(entity);

export default function JulioHerreraVelutiniPage() {
  return <EntityReferencePage entity={entity} />;
}

