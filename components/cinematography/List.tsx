import { Cinematography } from "@/types/sanity-types";
import Image from "next/image";
import { getImageUrl } from "@/sanity/lib/util";
import Link from "next/link";

type ListProps = {
  items: Cinematography[];
};

const List = ({ items }: ListProps) => (
  <div className="flex flex-col gap-6 w-full">
    {items.map(({ title = "", header, slug = { current: "" }, _id: id }) => {
      if (!header) return null;
      const imgSrc = getImageUrl(header);
      const link = slug.current;
      return (
        <div
          key={id}
          className="w-full max-w-4xl overflow-hidden rounded shadow-lg"
        >
          <Link href={`/direcao-de-fotografia/${link}`}>
            <Image
              src={imgSrc}
              alt={title}
              width={768}
              height={432}
              className="object-cover w-full h-auto"
              priority
            />
          </Link>
        </div>
      );
    })}
  </div>
);

export default List;
