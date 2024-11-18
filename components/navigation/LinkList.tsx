"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkList = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "font-bold underline" : "text-mainText";
  };

  const linkList = [
    {
      href: "/",
      text: "Reel",
    },
    {
      href: "/direcao-de-fotografia",
      text: "Direção de fotografia",
      mobile: "Dir. fotografia",
    },
    {
      href: "/operacao-de-camera",
      text: "Operação de câmera",
      mobile: "Op. câmera",
    },
    /*     {
      href: "/bio",
      text: "Bio",
    }, */
    {
      href: "/contato",
      text: "Contato",
    },
  ];

  return (
    <ul className="flex text-xs lg:text-base lg:flex-col gap-4 uppercase justify-between">
      {linkList.map(({ href, text, mobile }) => (
        <li key={href} className={isActive(href)}>
            <Link href={href} prefetch={false}>
            {/* Desktop Text */}
            <span className="hidden lg:inline">{text}</span>
            {/* Mobile Text */}
            {<span className="lg:hidden">{mobile ?? text}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
