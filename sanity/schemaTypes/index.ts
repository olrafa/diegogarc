import { type SchemaTypeDefinition } from "sanity";
import { reelType } from "./reel";
import { photographyType } from "./fotografia";
import { cameraType } from "./camera";
import { bioType } from "./bio";
import { contactType } from "./contact";

const schemaTypes = [
  reelType,
  photographyType,
  cameraType,
  bioType,
  contactType,
];

export default schemaTypes;
