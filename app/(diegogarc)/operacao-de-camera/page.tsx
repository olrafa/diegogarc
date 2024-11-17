import Poster from "@/components/camera/Poster";
import { client } from "@/sanity/lib/client";
import { CameraWithPage } from "@/types/additionalTypes";
import { Metadata } from "next";

import { groq } from "next-sanity";
import { metadata } from "../layout";

export async function generateMetadata(): Promise<Metadata | null> {
  return {
    ...metadata,
    title: "Operação de câmera",
    alternates: {
      canonical: "https://diegogarc.com/operacao-de-camera",
    },
    openGraph: {
      ...metadata.openGraph,
      title: "Operação de câmera | Diego Garc",
    },
  };
}

const CameraPage = async () => {
  const camera = groq`
  *[_type == "camera"] | order(order asc) {
    _id,
    title,
    description,
    poster,
    page->{
      "slug": slug.current
    }
  }`;

  const resultList = (await client.fetch(
    camera,
    {},
    { cache: "no-store" }
  )) as CameraWithPage[];

  return (
    <main className="mb-4">
      <div className="flex flex-row gap-2 m-2 flex-wrap">
        {resultList.map((item) => (
          <Poster item={item} key={item._id} />
        ))}
      </div>
    </main>
  );
};

export default CameraPage;
