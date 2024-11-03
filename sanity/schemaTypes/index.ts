import { type SchemaTypeDefinition } from "sanity";
import { reelType } from "./reel";
import { photographyType } from "./fotografia";
import { cameraType } from "./camera";
import { bioType } from "./bio";
import { contactType } from "./contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [reelType, photographyType, cameraType, bioType, contactType],
};
