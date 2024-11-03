import { type SchemaTypeDefinition } from "sanity";
import { reelType } from "./reel";
import { photographyType } from "./fotografia";
import { cameraType } from "./camera";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [reelType, photographyType, cameraType],
};
