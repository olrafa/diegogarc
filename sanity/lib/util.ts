import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "@/types/sanity-types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

type ItemImage = {
  _type: "image";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
};

// Set up the URL builder
const builder = imageUrlBuilder(client);

export const getImageUrl = (image: ItemImage): string => {
  if (!image || !image.asset) return "";

  // Generate the URL using the builder
  return builder.image(image.asset).url() || "";
};
