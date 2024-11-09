import ItemGallery from "@/components/cinematography/ItemGallery";
import ItemHeader from "@/components/cinematography/ItemHeader";
import { client } from "@/sanity/lib/client";
import { Cinematography } from "@/types/sanity-types";
import { groq } from "next-sanity";

type CinematographyItemPageProps = { params: { slug: string } };

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
    <main className="w-full flex-col items-center justify-between p-4 mt-6">
      <ItemHeader title={title} description={description} />
      <ItemGallery gallery={gallery} />
    </main>
  );
};

export default CinematographyItemPage;
