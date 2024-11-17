import { getImageUrl } from "@/sanity/lib/util";
import { Cinematography } from "@/types/sanity-types";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

type GalleryProps = {
  gallery: Cinematography["gallery"];
};

const Gallery = ({ gallery = [] }: GalleryProps) => (
  <div className="mt-2 flex flex-row flex-wrap gap-4">
    {gallery.map((item) => {
      const imgSrc = getImageUrl(item);
      const { width, height } = getImageDimensions(item);
      return (
        <div key={item._key} className="w-full max-w-5xl">
          <Image
            alt={item._key}
            src={imgSrc}
            width={width}
            height={height}
            className="object-cover w-full h-auto"
            priority
          />
        </div>
      );
    })}
  </div>
);

export default Gallery;
