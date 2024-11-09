import { Cinematography } from "@/types/sanity-types";
import Image from "next/image";
import { getImageUrl } from "@/sanity/lib/util";
import { getImageDimensions } from "@sanity/asset-utils";

type ItemsListProps = {
  items: Cinematography[];
};

const ItemsList = ({ items }: ItemsListProps) => (
  <div className="flex flex-col gap-4 w-full">
    {items.map(({ title, header, _id: id }) => {
      if (!header) return null;
      const imgSrc = getImageUrl(header);
      const { width, height } = getImageDimensions(imgSrc);
      return (
        <div key={id}>
          <Image src={imgSrc} width={width} height={height} alt={title ?? ""} />
        </div>
      );
    })}
  </div>
);

export default ItemsList;
