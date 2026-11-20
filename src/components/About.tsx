import Image from "next/image";
import { about, site } from "@/data/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="apropos" className="border-t border-line bg-ink-soft/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          index="02"
          code="Profil"
          title="En pleine construction — et déjà en mouvement"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/images/profile-pro.png"
                  alt={`Photo professionnelle de ${site.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="photo-duotone object-cover"
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {about.traits.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-line px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] text-muted uppercase"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="mb-6 text-lg leading-relaxed text-cream/85">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <blockquote className="mt-8 border-l-2 border-accent pl-6">
                <p className="font-display text-xl leading-snug font-medium">
                  « Je ne suis pas un expert — je suis en train de le devenir,
                  un projet à la fois. »
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
