import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const steps = [
  {
    n: "01",
    title: "Découverte",
    text: "On échange sur ton besoin, tes utilisateurs et tes contraintes. Je pose les bonnes questions avant de toucher au moindre pixel.",
  },
  {
    n: "02",
    title: "Conception",
    text: "Cadrage, modélisation et maquettes : on valide la direction ensemble avant d'écrire la première ligne de code.",
  },
  {
    n: "03",
    title: "Développement",
    text: "Code propre, interface simple, démonstrations régulières — tu vois le projet avancer et tu peux ajuster en cours de route.",
  },
  {
    n: "04",
    title: "Livraison",
    text: "Tests, mise en ligne et accompagnement. Une fois le projet livré, tu n'es pas livré à toi-même.",
  },
];

export default function Method() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          code="Méthode"
          title="Comment je travaille"
          description="Un processus simple en quatre temps — du premier échange à la mise en ligne."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-accent/40">
                <span className="font-mono text-xs text-accent">{step.n}</span>
                <h3 className="font-display mt-4 text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
