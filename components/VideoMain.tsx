import { VIMEO } from "@/constants/links";

const VideoMain = () => (
  <div className="w-full flex justify-center px-12">
    <iframe
      title={VIMEO.title}
      className="w-full aspect-video rounded-2xl"
      src={VIMEO.src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share: fullscreen"
      loading="lazy"
      allowFullScreen
    />
  </div>
);

export default VideoMain;
