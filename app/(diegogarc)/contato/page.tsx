import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import ContactCard from "@/components/contact/ContactCard";
import { metadata } from "../layout";
import { Metadata } from "next";
import BioText from "@/components/bio/BioText";

export async function generateMetadata(): Promise<Metadata | null> {
  return {
    ...metadata,
    title: "Contato",
    alternates: {
      canonical: "https://diegogarc.com/contato",
    },
    openGraph: { ...metadata.openGraph, title: "Contato | Diego Garc" },
  };
}

const ContactPage = async () => {
  const bio = groq`*[_type == "bio"]{
    pt, es, "image": {"url": image.asset->url}}[0]`;
  const {
    pt,
    es,
    image: { url: imgSrc },
  } = await client.fetch(bio, {}, { cache: "no-store" });

  const { width, height } = getImageDimensions(imgSrc);

  return (
    <main className="w-full flex flex-col p-4 lg:pt-12 gap-8 lg:w-2/3 2xl:w-3/5">
      <Image
        src={imgSrc}
        alt="Diego Garc"
        width={width / 2}
        height={height / 2}
      />
      <BioText regularText={pt} translationText={es} />
      <ContactCard />
    </main>
  );
};

export default ContactPage;
