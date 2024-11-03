import { type SchemaTypeDefinition } from "sanity";
import { reelType } from "./reel";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [reelType],
};
