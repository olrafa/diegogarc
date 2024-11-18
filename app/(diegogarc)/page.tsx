import { VIMEO } from "@/constants/links";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 3600 * 24 * 7;

export default async function Home() {
  const latestReel = groq`*[_type == "reel"] | order(year desc)[0]`;
  const { video } = await client.fetch(latestReel);

  const videoSrc = video.replace(
    "https://vimeo.com/",
    "https://player.vimeo.com/video/"
  );

  return (
    <main className="w-full flex-col items-center justify-between lg:p-4 lg:mt-12">
      <div className="w-full max-w-7xl flex justify-center px-2">
        <iframe
          title={VIMEO.title}
          className="w-full aspect-video rounded"
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share: fullscreen"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </main>
  );
}
