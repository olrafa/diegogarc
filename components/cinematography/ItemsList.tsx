import { Cinematography } from "@/types/sanity-types";
import Image from "next/image";
import { getImageUrl } from "@/sanity/lib/util";
import { getImageDimensions } from "@sanity/asset-utils";
import Link from "next/link";

type ItemsListProps = {
  items: Cinematography[];
};

const ItemsList = ({ items }: ItemsListProps) => (
  <div className="flex flex-col gap-4 w-full">
    {items.map(({ title = "", header, slug, _id: id }) => {
      if (!header) return null;
      const imgSrc = getImageUrl(header);
      const { width, height } = getImageDimensions(imgSrc);
      console.log(slug)
      return (
        <div key={id}>
          <Link href={`/direcao-de-fotografia/${slug}`}>
            <Image src={imgSrc} width={width} height={height} alt={title} />
          </Link>
        </div>
      );
    })}
  </div>
);

export default ItemsList;
