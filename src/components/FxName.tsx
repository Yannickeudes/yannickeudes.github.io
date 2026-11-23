"use client";

import { useState } from "react";
import { site } from "@/data/site";

const CEDRIC = "Cédric";
const BIG_WORDS = [CEDRIC, "APETOH"];

export default function FxName({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [cedricHover, setCedricHover] = useState(false);

  const name = site.name;
  const words = name.split(" ");
  const cedricStart = name.indexOf(CEDRIC);
  const cedricEnd = cedricStart + CEDRIC.length;

  let letterIndex = 0;

  return (
    <span className={className} role="text" aria-label={name}>
      {words.map((word, wi) => {
        const isBigWord = BIG_WORDS.includes(word);
        return (
          <span key={wi}>
            {wi > 0 ? " " : null}
            <span
              className={`inline-block align-baseline ${
                isBigWord
                  ? "text-5xl sm:text-7xl lg:text-8xl"
                  : "text-xl text-muted sm:text-3xl lg:text-4xl"
              }`}
            >
              {word.split("").map((ch) => {
                const i = letterIndex++;
                const isCedricLetter = i >= cedricStart && i < cedricEnd;

                return (
                  <span
                    key={i}
                    aria-hidden="true"
                    className={`inline-block transition-colors duration-200 ${
                      cedricHover ? "fx-split" : ""
                    }`}
                    style={
                      !cedricHover && hovered === i
                        ? { color: "#d9603b" }
                        : undefined
                    }
                    onMouseEnter={() => {
                      setHovered(i);
                      if (isCedricLetter) setCedricHover(true);
                    }}
                    onMouseLeave={() => {
                      setHovered(null);
                      setCedricHover(false);
                    }}
                  >
                    {ch}
                  </span>
                );
              })}
            </span>
          </span>
        );
      })}
    </span>
  );
}
