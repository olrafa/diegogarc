"use client";

import Image from "next/image";
import homeImages from "@/constants/homeImages";
import { useEffect, useState } from "react";

const ImageMain = () => {
  const [index, setIndex] = useState<number | undefined>(undefined);

  useEffect(() => setIndex(Math.floor(Math.random() * homeImages.length)), []);

  if (index === undefined) return null;
  const image = homeImages[index];
  return (
    <Image src={image} alt="Site em construção" width={400} height={400} />
  );
};

export default ImageMain;
