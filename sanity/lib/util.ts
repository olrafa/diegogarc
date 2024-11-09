import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "@/types/sanity-types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

type Header = {
  _type: "image";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
};

// Set up the URL builder
const builder = imageUrlBuilder(client);

export const getImageUrl = (header: Header): string => {
  if (!header || !header.asset) return "";

  // Generate the URL using the builder
  return builder.image(header.asset).url() || "";
};
