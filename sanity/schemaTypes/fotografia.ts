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
      type: "text",
    },
    {
      name: "order",
      title: "Ordem",
      description: "Em qual ordem aparece na lista de trabalhos",
      type: "number",
    },
    {
      name: "slug",
      title: "Nome do link",
      type: "slug",
      description: "O link da página vai ser '/direcao-de-fotografia/[valor]'",
      options: { source: "title" },
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
