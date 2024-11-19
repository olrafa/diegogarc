import { client } from "@/sanity/lib/client";
import {
  faImdb,
  faInstagram,
  faLinkedin,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import abcineImg from "../../assets/images/abcine.png";

const ContactCard = async () => {
  const contacto = groq`*[_type == "contact"][0]`;
  const data = await client.fetch(contacto, {}, { cache: "no-store" });

  const { email, phone, instagram, linkedin, vimeo, imdb, abcine } = data;

  const iconSize = "3x";

  return (
    <div className="w-full flex-col items-center justify-between">
      <div>
        <Link href={`mailto:${email}`}>
          <p>{email}</p>
        </Link>
        <p>{phone}</p>
      </div>

      <div className="flex flex-row gap-4 mt-2 items-center">
        <Link target="_blank" href={imdb} className="mt-3">
          <FontAwesomeIcon icon={faImdb} size={iconSize} />
        </Link>
        <Link target="_blank" href={linkedin} className="mt-3">
          <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
        </Link>
        <Link target="_blank" href={vimeo} className="mt-3">
          <FontAwesomeIcon icon={faVimeo} size={iconSize} />
        </Link>
        <Link target="_blank" href={abcine}>
          <Image src={abcineImg} alt="abcine" height={50} width={200} />
        </Link>
        <Link target="_blank" href={instagram} className="mt-3">
          <FontAwesomeIcon icon={faInstagram} size={iconSize} />
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
