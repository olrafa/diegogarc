import { defineType } from "sanity";

export const photographyType = defineType({
  name: "cinematography",
  title: "Direção de fotografia",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
    },
    {
      name: "description",
      title: "Descrição",
      type: "string",
    },
    {
      name: "order",
      title: "Ordem",
      description: "Em qual ordem aparece na lista de trabalhos",
      type: "number",
    },
    { name: "header", title: "Imagem de capa", type: "image" },
    {
      name: "gallery",
      title: "Galeria",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    },
  ],
});
