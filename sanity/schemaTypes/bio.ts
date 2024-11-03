import { defineType } from "sanity";

export const bioType = defineType({
  name: "bio",
  title: "Bio",
  type: "document",
  preview: {
    select: {
      title: "name",
    },
  },
  fields: [
    { name: "name", title: "Nome", type: "string" },
    {
      name: "pt",
      title: "PT",
      type: "text",
    },
    {
      name: "es",
      title: "ES",
      type: "text",
    },
    { name: "image", title: "Imagem", type: "image" },
  ],
});
