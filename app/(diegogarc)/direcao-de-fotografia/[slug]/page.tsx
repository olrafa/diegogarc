import { groq } from "next-sanity";

type CinematographyItemPageProps = { params: { slug: string } };

const CinematographyItemPage = async ({
  params: { slug },
}: CinematographyItemPageProps) => {
  const work = groq`[_type == "cinematography && slug == "${slug}"]`;

  console.log(work);

  return <div>ooiioi</div>;
};

export default CinematographyItemPage;
