"use client";

import Image from "next/image";
import homeImages from "@/constants/homeImages";
import { useEffect, useState } from "react";

const ImageMain = () => {
  const [index, setIndex] = useState(12);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
        setFade(false);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  if (index === undefined) return null;
  const image = homeImages[index];

  return (
    <div
      className={`transition-opacity duration-500 ${
        fade ? "opacity-30" : "opacity-100"
      }`}
    >
      <Image
        src={image}
        alt="transições. china, 2012."
        width={800}
        height={800}
      />
    </div>
  );
};

export default ImageMain;
