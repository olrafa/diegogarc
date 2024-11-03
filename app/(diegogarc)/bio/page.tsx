import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const Bio = async () => {
  const bio = groq`*[_type == "bio"][0]`;
  const aa = await client.fetch(bio);
  console.log(aa);
  const { pt, image } = aa;

  console.log(image);

  return (
    <main className="w-full flex-col items-center justify-between p-4 mt-12">
      <div className="w-full md:w-4/5">{pt}</div>
    </main>
  );
};

export default Bio;
