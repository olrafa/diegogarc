import { getImageUrl } from "@/sanity/lib/util";
import { Camera } from "@/types/sanity-types";
import Image from "next/image";

type CameraGalleryItemProps = {
  item: Camera;
};

const CameraGalleryItem = ({ item }: CameraGalleryItemProps) => {
  const { title, poster } = item;
  if (!poster) return null;

  const imgSrc = getImageUrl(poster);

  return (
    <div className="h-80 flex-shrink-0 my-2">
      <Image
        src={imgSrc}
        alt={title ?? ""}
        width={240}
        height={240}
        className="object-cover"
      />
    </div>
  );
};

export default CameraGalleryItem;
