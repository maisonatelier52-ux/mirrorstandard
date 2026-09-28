import EntityReferencePage from "../../../components/EntityReferencePage";
import { entityPages } from "../../../lib/entity-content";
import { createEntityMetadata } from "../../../lib/entity-metadata";

const entity = entityPages.find(
  (item) => item.section === "organizations" && item.slug === "britannia-financial-group",
)!;

export const metadata = createEntityMetadata(entity);

export default function BritanniaFinancialGroupPage() {
  return <EntityReferencePage entity={entity} />;
}

