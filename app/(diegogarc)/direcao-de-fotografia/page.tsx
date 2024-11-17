import List from "@/components/cinematography/List";
import { client } from "@/sanity/lib/client";
import { Cinematography } from "@/types/sanity-types";
import { Metadata } from "next";
import { groq } from "next-sanity";
import { metadata } from "../layout";

export async function generateMetadata(): Promise<Metadata | null> {
  return {
    ...metadata,
    title: "Direção de fotografia",
    alternates: {
      canonical: "https://diegogarc.com/direcao-de-fotografia",
    },
    openGraph: {
      ...metadata.openGraph,
      title: "Direção de fotografia | Diego Garc",
    },
  };
}

const CinematographyPage = async () => {
  const cinematography = groq`
  *[_type == "cinematography" && defined(header) && defined(description) && defined(gallery)]
   | order(order asc) {
    title, 
    header,
    description,
    slug,
    _id,
    }
  `;

  const resultList = (await client.fetch(
    cinematography,
    {},
    { cache: "no-store" }
  )) as Cinematography[];

  return (
    <main className="w-full flex-col items-center justify-between p-4">
      <List items={resultList} />
    </main>
  );
};

export default CinematographyPage;
