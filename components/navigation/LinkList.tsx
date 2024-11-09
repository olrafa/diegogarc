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
    },
    /*     {
      href: "/operacao-de-camera",
      text: "Operação de câmera",
    }, */
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
    <ul className="flex flex-col gap-4 uppercase">
      {linkList.map(({ href, text }) => (
        <li key={href} className={isActive(href)}>
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
