import { journey } from "@/data/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Journey() {
  return (
    <section id="parcours" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          index="06"
          code="Parcours"
          title="Apprendre. Construire. Partager."
          description="Pas de dates inventées, pas de fausses expériences — juste les engagements réels qui me construisent."
        />

        <div className="mt-14">
          {journey.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group grid gap-3 border-l border-line py-8 pl-8 transition-colors hover:border-accent sm:grid-cols-[240px_1fr_auto] sm:items-baseline sm:gap-8">
                <div>
                  <h3 className="font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs tracking-wider text-accent uppercase">
                    {item.subtitle}
                  </p>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <span className="w-fit rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                  {item.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
