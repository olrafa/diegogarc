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

export const cleanDescription = (title: string, description: string) => {
  const [firstPart, ...rest] = description
    .split("|")
    .map((part) => part.trim());

  // Check if the first part of the description matches the title (case-insensitive)
  if (firstPart.trim().toLowerCase() === title.trim().toLowerCase()) {
    return ` | ${rest.join(" | ").trim()}`; // Return the description starting with the first pipe
  }

  return description; // Return original description if no match
};
