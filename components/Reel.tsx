import { VIMEO } from "@/constants/links";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const Reel = async () => {
  const latestReel = groq`*[_type == "reel"] | order(year desc)[0]`;
  const { video } = await client.fetch(latestReel);

  const videoSrc = video.replace(
    "https://vimeo.com/",
    "https://player.vimeo.com/video/"
  );

  return (
    <div className="w-full flex justify-center px-12">
      <iframe
        title={VIMEO.title}
        className="w-full aspect-video rounded"
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share: fullscreen"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

export default Reel;
