import type { Metadata } from "next";
import Journey from "@/components/Journey";

export const metadata: Metadata = {
  title: "Parcours — Cédric APETOH",
  description:
    "Formation, projets personnels et engagements de Cédric APETOH : Tech avec Cédric, Be In Tech, fata School, production live.",
};

export default function ParcoursPage() {
  return <Journey />;
}
