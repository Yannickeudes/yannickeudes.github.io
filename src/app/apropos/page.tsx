import type { Metadata } from "next";
import About from "@/components/About";
import Stack from "@/components/Stack";

export const metadata: Metadata = {
  title: "À propos — Cédric APETOH",
  description:
    "Parcours, personnalité et stack technique de Cédric APETOH : développement logiciel, production live et contenu digital.",
};

export default function AProposPage() {
  return (
    <>
      <About />
      <Stack />
    </>
  );
}
