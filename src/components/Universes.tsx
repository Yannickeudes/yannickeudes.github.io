import { universes } from "@/data/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function Motif({ kind }: { kind: string }) {
  if (kind === "code") {
    return (
      <div className="font-mono text-sm text-muted" aria-hidden="true">
        <p>{"{"}</p>
        <p className="pl-4 text-accent">"univers": "software",</p>
        <p className="pl-4">"status": "learning",</p>
        <p className="pl-4">"drive": "build"</p>
        <p>{"}"}</p>
      </div>
    );
  }
  if (kind === "live") {
    return (
      <div className="relative flex h-full min-h-40 items-center justify-center" aria-hidden="true">
        <div className="absolute inset-4 rounded border border-dashed border-line" />
        <div className="absolute inset-8 rounded border border-line/60" />
        <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-rec uppercase">
          <span className="rec-dot h-2 w-2 rounded-full bg-rec" />
          Live
        </div>
      </div>
    );
  }
  // signal
  return (
    <div className="flex h-full min-h-40 items-center justify-center" aria-hidden="true">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        {[18, 34, 50, 66].map((r, i) => (
          <circle
            key={r}
            cx="60"
            cy="60"
            r={r}
            style={{ stroke: i === 3 ? "var(--color-accent)" : "#26262b" }}
            strokeWidth="1"
          />
        ))}
        <circle
          cx="60"
          cy="60"
          r="5"
          style={{ fill: "var(--color-accent)" }}
        />
        <line x1="60" y1="0" x2="60" y2="24" stroke="#9b978e" strokeWidth="1" />
        <line x1="60" y1="96" x2="60" y2="120" stroke="#9b978e" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function Universes() {
  return (
    <section id="univers" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          index="01"
          code="Univers"
          title="Trois terrains. Une même curiosité."
          description="Mon parcours numérique ne tient pas dans une seule case. Je travaille à la croisée de trois univers qui se nourrissent mutuellement."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {universes.map((u, i) => (
            <Reveal key={u.index} delay={i * 120}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel p-8 transition-colors hover:border-accent/50 ${
                  u.motif === "live" ? "scanlines" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted">{u.index}</span>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
                    {u.code}
                  </span>
                </div>
                <h3 className="font-display mt-8 text-2xl font-bold tracking-tight">
                  {u.title}
                </h3>
                <div className="mt-6">
                  <Motif kind={u.motif} />
                </div>
                <p className="mt-6 flex-1 text-sm leading-relaxed text-muted">
                  {u.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
                  {u.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-wider text-cream/75 uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
