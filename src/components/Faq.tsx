import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { site } from "@/data/site";

const faqs = [
  {
    q: "Que sais-tu faire ?",
    a: "Trois choses : le développement logiciel (web & mobile, APIs, bases de données), la production audiovisuelle en direct (régie vMix, caméra) et la création de contenu tech. Mon détail est sur la page À propos.",
  },
  {
    q: "Es-tu disponible pour de nouveaux projets ?",
    a: "Oui — sites, applications, outils de gestion, plateformes et productions live. Écris-moi sur WhatsApp ou par e-mail, on échange sur ton besoin.",
  },
  {
    q: "Travailles-tu à distance ?",
    a: "Oui. Je suis basé à Lomé et je collabore avec des clients au Togo comme ailleurs, par WhatsApp, e-mail et visioconférence.",
  },
  {
    q: "Quelle est ta stack technique ?",
    a: "Python, JavaScript, PHP/Laravel, SQL, SQLite, PostgreSQL, Git/GitHub et vMix côté pratique — avec React/Next.js, le mobile, l'UI/UX et la data en apprentissage actif.",
  },
  {
    q: "Comment démarrer un projet avec toi ?",
    a: "Décris ton idée en quelques lignes sur WhatsApp ou par e-mail. Je reviens vers toi avec un cadrage, puis on se lance.",
  },
];

export default function Faq() {
  return (
    <section className="border-t border-line bg-ink-soft/40">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <SectionHead
          code="FAQ"
          title="Questions fréquentes"
          description="Les réponses aux questions qu'on me pose le plus souvent."
        />

        <div className="mt-12 divide-y divide-line rounded-2xl border border-line bg-panel">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details className="group px-6 py-5 open:bg-ink-soft/60 sm:px-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold sm:text-lg">
                  {faq.q}
                  <span className="font-mono text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm text-muted">
            Une autre question ?{" "}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              Écris-moi
            </a>{" "}
            ou{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent underline-offset-4 hover:underline"
            >
              envoie un e-mail
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
