import { getImageUrl } from "@/sanity/lib/util";
import { Cinematography } from "@/types/sanity-types";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

type ItemGalleryProps = {
  gallery: Cinematography["gallery"];
};

const ItemGallery = ({ gallery = [] }: ItemGalleryProps) => (
  <div className="mt-2 flex flex-col gap-4">
    {gallery.map((item) => {
      const imgSrc = getImageUrl(item);
      const { width, height } = getImageDimensions(imgSrc);
      return (
        <Image
          alt={item._key}
          key={item._key}
          src={imgSrc}
          width={width}
          height={height}
        />
      );
    })}
  </div>
);

export default ItemGallery;
