import { VIMEO } from "@/constants/links";

const VideoMain = () => (
  <div className="w-full flex justify-center">
    <iframe
      title={VIMEO.title}
      className="w-10/12 aspect-video"
      src={VIMEO.src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share: fullscreen"
      loading="lazy"
      allowFullScreen
    />
  </div>
);

export default VideoMain;
