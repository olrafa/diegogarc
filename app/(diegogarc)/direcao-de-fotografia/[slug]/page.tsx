import Gallery from "@/components/cinematography/Gallery";
import Header from "@/components/cinematography/Header";
import { client } from "@/sanity/lib/client";
import { Cinematography } from "@/types/sanity-types";
import { Metadata } from "next";
import { groq } from "next-sanity";
import { metadata } from "../../layout";

type CinematographyItemPageProps = { params: { slug: string } };

export async function generateMetadata({
  params: { slug },
}: CinematographyItemPageProps): Promise<Metadata | null> {
  const metadataQuery = groq`*[_type == "cinematography" && slug.current == $slug][0]{ title, description }`;
  const { title, description } = (await client.fetch(
    metadataQuery,
    { slug },
    { cache: "no-store" }
  )) as { title: string; description: string };

  return {
    ...metadata,
    title,
    description,
    alternates: {
      canonical: `https://diegogarc.com/direcao-de-fotografia/${slug}`,
    },
    openGraph: {
      ...metadata.openGraph,
      title: `${title} | Diego Garc`,
    },
  };
}

const CinematographyItemPage = async ({
  params: { slug },
}: CinematographyItemPageProps) => {
  const workQuery = groq`*[_type == "cinematography" && slug.current == $slug][0]`;

  const work = (await client.fetch(
    workQuery,
    { slug },
    { cache: "no-store" }
  )) as Cinematography;

  const { title, description, gallery } = work;

  return (
    <main className="w-full flex-col items-center justify-between p-4 lg:mt-6">
      <Header title={title} description={description} />
      <Gallery gallery={gallery} />
    </main>
  );
};

export default CinematographyItemPage;
