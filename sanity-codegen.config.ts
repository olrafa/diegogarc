import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./sanity/schemaTypes/index.ts",
  outputPath: "./types/sanity-types.d.ts",
};

export default config;
