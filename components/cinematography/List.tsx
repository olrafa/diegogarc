import { Cinematography } from "@/types/sanity-types";
import Image from "next/image";
import { getImageUrl } from "@/sanity/lib/util";
import Link from "next/link";

type ListProps = {
  items: Cinematography[];
};

const List = ({ items }: ListProps) => (
  <div className="flex flex-col gap-6 w-full items-center">
    {items.map(
      ({
        title = "",
        description,
        header,
        slug = { current: "" },
        _id: id,
      }) => {
        if (!header) return null;
        const imgSrc = getImageUrl(header);
        const link = slug.current;

        return (
          <div
            key={id}
            className="relative group w-full max-w-5xl overflow-hidden rounded"
          >
            <Image
              src={imgSrc}
              alt={title}
              width={768}
              height={432}
              className="object-cover w-full h-auto"
              priority
            />

            <Link href={`/direcao-de-fotografia/${link}`}>
              <div className="absolute inset-0 bg-black/90 p-8 text-center text-balance text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {description}
              </div>
            </Link>
          </div>
        );
      }
    )}
  </div>
);

export default List;
