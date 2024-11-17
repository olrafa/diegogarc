import CameraGalleryItem from "@/components/camera/GalleryItem";
import { client } from "@/sanity/lib/client";
import { CameraWithPage } from "@/types/additionalTypes";

import { groq } from "next-sanity";

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
          <CameraGalleryItem item={item} key={item._id} />
        ))}
      </div>
    </main>
  );
};

export default CameraPage;
