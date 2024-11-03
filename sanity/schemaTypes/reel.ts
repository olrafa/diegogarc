import { defineType } from "sanity";

export const reelType = defineType({
  name: "reel",
  title: "Reel",
  type: "document",
  description: "Reels de vídeo do Vimeo",
  fields: [
    {
      name: "video",
      title: "Vimeo Link",
      type: "string",
    },
    { name: "year", title: "Ano", type: "number" },
  ],
  preview: {
    select: {
      title: "year",
    },
  },
});
