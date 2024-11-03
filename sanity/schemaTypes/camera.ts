import { defineType } from "sanity";

export const cameraType = defineType({
  name: "camera",
  title: "Operação de câmera",
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
    { name: "poster", title: "Pôster", type: "image" },
    {
      name: "page",
      title: "Página",
      type: "reference",
      to: [{ type: "cinematography" }],
    },
  ],
});
