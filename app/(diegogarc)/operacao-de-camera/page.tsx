import CameraGalleryItem from "@/components/camera/GalleryItem";
import { client } from "@/sanity/lib/client";
import { Camera } from "@/types/sanity-types";
import { groq } from "next-sanity";

const CameraPage = async () => {
  const camera = groq`*[_type == "camera"]
   | order(order asc)`;

  const resultList = (await client.fetch(
    camera,
    {},
    { cache: "no-store" }
  )) as Camera[];

  return (
    <main className="mb-4">
      <div className="flex flex-row gap-2 m-2 flex-wrap">
        {resultList.map((item) => (
          <CameraGalleryItem item={item} key={item._id} />
        ))}
      </div>
    </main>
  );
};

export default CameraPage;
