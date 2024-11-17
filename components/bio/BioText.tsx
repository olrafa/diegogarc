"use client";

import { useState } from "react";
import { text } from "stream/consumers";

interface BioTextProps {
  regularText: string;
  translationText: string;
}

const BioText = ({ regularText, translationText }: BioTextProps) => {
  const [bioText, setBioText] = useState(regularText);

  const btns = [
    { lang: "PT", text: regularText },
    { lang: "ES", text: translationText },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div>
        {btns.map(({ lang, text }, index) => (
          <span key={lang}>
            <button
              onClick={() => setBioText(text)}
              className={bioText === text ? "text-gray-900" : "text-gray-400"}
            >
              {lang}
            </button>
            {index < btns.length - 1 && <span className="mx-2">|</span>}
          </span>
        ))}
      </div>
      <p>{bioText}</p>
    </div>
  );
};

export default BioText;
