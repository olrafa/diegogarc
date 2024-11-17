import { getImageUrl } from "@/sanity/lib/util";
import { CameraWithPage } from "@/types/additionalTypes";
import Image from "next/image";
import Link from "next/link";

type PosterProps = {
  item: CameraWithPage;
};

const Poster = ({ item }: PosterProps) => {
  const { title, description, page, poster } = item;
  if (!poster) return null;

  const imgSrc = getImageUrl(poster);

  return (
    <div className="relative group h-60 lg:h-80 lg:w-60 flex-shrink-0 overflow-hidden border-2 border-transparent transition-all duration-300">
      {/* Image */}
      <Image
        src={imgSrc}
        alt={title ?? ""}
        width={240}
        height={240}
        className="object-cover h-full w-full transition-transform duration-300 group-hover:grayscale group-hover:scale-90"
      />

      {/* Overlay */}
      <div className="absolute p-6 text-center inset-0 flex flex-col items-center justify-center bg-black/80 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2">{description}</p>
        {page && (
          <Link
            href={`/direcao-de-fotografia/${page.slug}`}
            className="mt-4 text-xs uppercase bg-white text-black px-2 py-1 rounded"
          >
            Página
          </Link>
        )}
      </div>
    </div>
  );
};

export default Poster;
