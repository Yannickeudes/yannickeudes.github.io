"use client";

import { useState } from "react";
import { site } from "@/data/site";

const CEDRIC = "Cédric";

export default function FxName({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [cedricHover, setCedricHover] = useState(false);

  const name = site.name;
  const cedricStart = name.indexOf(CEDRIC);
  const cedricEnd = cedricStart + CEDRIC.length;

  return (
    <span className={className} role="text" aria-label={name}>
      {name.split("").map((ch, i) => {
        const isCedric = i >= cedricStart && i < cedricEnd;

        return (
          <span
            key={i}
            aria-hidden="true"
            className={`inline-block transition-colors duration-200 ${cedricHover ? "fx-split" : ""}`}
            style={
              !cedricHover && hovered === i ? { color: "#d9603b" } : undefined
            }
            onMouseEnter={() => {
              setHovered(i);
              if (isCedric) setCedricHover(true);
            }}
            onMouseLeave={() => {
              setHovered(null);
              setCedricHover(false);
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        );
      })}
    </span>
  );
}
