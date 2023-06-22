import { type SchemaTypeDefinition } from "sanity";
import corporate from "./schemas/corporate";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [corporate],
};
