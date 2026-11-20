import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projets — Cédric APETOH",
  description:
    "Projets de Cédric APETOH : EduPaie, Gestion du Patrimoine de l'État, BIBLI-S, Bro Sûr, Found.",
};

export default function ProjetsPage() {
  return <Projects />;
}
