import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import ContactCard from "@/components/contact/ContactCard";

const Bio = async () => {
  const bio = groq`*[_type == "bio"]{
    pt, "image": {"url": image.asset->url}}[0]`;
  const {
    pt,
    image: { url: imgSrc },
  } = await client.fetch(bio, {}, { cache: "no-store" });

  const { width, height } = getImageDimensions(imgSrc);

  return (
    <main className="w-full flex flex-col p-4 pt-12 gap-8 lg:w-2/3 2xl:w-3/5">
      <Image
        src={imgSrc}
        alt="Diego Garc"
        width={width / 2}
        height={height / 2}
      />
      <div>{pt}</div>
      <ContactCard />
    </main>
  );
};

export default Bio;
