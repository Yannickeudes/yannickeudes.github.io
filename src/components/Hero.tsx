import Image from "next/image";
import { site, universes } from "@/data/site";
import FxName from "./FxName";
import Reveal from "./Reveal";

function FrameCorners() {
  const base = "absolute h-5 w-5 border-cream/50";
  return (
    <>
      <span className={`${base} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${base} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${base} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${base} right-0 bottom-0 border-r-2 border-b-2`} />
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="accueil"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden"
    >
      {/* watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-0 font-display text-[22vw] leading-none font-bold tracking-tighter whitespace-nowrap opacity-60 select-none"
      >
        <span className="text-outline">CÉDRIC</span>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <p className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-[0.3em] text-muted uppercase">
              <span>{site.location}</span>
              <span className="text-accent">/</span>
              <span>{site.coordinates}</span>
            </p>
            <h1 className="font-display font-bold tracking-tight">
              <FxName />
            </h1>
            <p className="font-display mt-5 text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
              {site.positioning}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {site.positioningDetail}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/projets"
                className="rounded-full bg-cream px-7 py-3.5 font-mono text-xs font-semibold tracking-widest text-ink uppercase transition-transform hover:-translate-y-0.5"
              >
                Voir les projets
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-7 py-3.5 font-mono text-xs font-medium tracking-widest text-cream uppercase transition-colors hover:border-accent hover:text-accent"
              >
                Me contacter
              </a>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <ul className="mt-14 space-y-3 border-t border-line pt-8">
              {universes.map((u) => (
                <li key={u.index}>
                  <a
                    href="#univers"
                    className="group flex items-baseline gap-4"
                  >
                    <span className="font-mono text-xs text-accent">
                      {u.index}
                    </span>
                    <span className="font-mono text-xs tracking-widest text-muted uppercase transition-colors group-hover:text-cream">
                      {u.code}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* monitor frame */}
        <Reveal delay={200}>
          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-line bg-panel">
              {/* monitor top bar */}
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="rec-dot h-2 w-2 rounded-full bg-rec" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-rec uppercase">
                    Rec
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase">
                  Cam_01 — Portrait
                </span>
              </div>

              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/portrait.png"
                  alt={`Portrait de ${site.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="photo-duotone object-cover"
                />
                <FrameCorners />
                {/* bottom info bar */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/90 to-transparent px-4 pt-10 pb-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-cream/80 uppercase">
                    {site.role}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                    25fps
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -top-px -left-px h-6 w-6 border-t-2 border-l-2 border-accent" />
            <div className="absolute -right-px -bottom-px h-6 w-6 border-r-2 border-b-2 border-accent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
