import { defineType } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "Contacto",
  type: "document",
  preview: {
    select: {
      title: "name",
    },
  },
  fields: [
    { name: "name", title: "Nome", type: "string" },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Telefone",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
    },
    {
      name: "linkedin",
      title: "Linkedin",
      type: "string",
    },
    {
      name: "vimeo",
      title: "Vimeo",
      type: "string",
    },
    { name: "imdb", title: "IMDb", type: "string" },
    { name: "abcine", title: "ABCine", type: "string" },
  ],
});
