import type { Metadata } from "next";
import Live from "@/components/Live";

export const metadata: Metadata = {
  title: "Production Live — Cédric APETOH",
  description:
    "Régie vidéo vMix, prise de vue caméra et captation d'événements : l'univers production en direct de Cédric APETOH.",
};

export default function LivePage() {
  return <Live />;
}
