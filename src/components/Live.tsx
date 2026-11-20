import { liveProduction } from "@/data/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const cellSlots = ["CAM_01", "CAM_02", "CAM_03", "PGM", "PVW", "STANDBY"];

function EmptyCell({ label }: { label: string }) {
  return (
    <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-md border border-line bg-ink-soft">
      <span className="font-mono text-[10px] tracking-[0.3em] text-muted/70 uppercase">
        {label}
      </span>
      <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
        <span className="font-mono text-[9px] tracking-[0.3em] text-muted/40 uppercase">
          No signal
        </span>
      </span>
    </div>
  );
}

export default function Live() {
  return (
    <section id="live" className="relative border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          index="04"
          code="Production Live"
          title="Le direct ne pardonne pas"
          description={liveProduction.intro}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          {/* multiview */}
          <Reveal>
            <div className="rounded-xl border border-line bg-panel p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between px-1">
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
                  Multiview — 6 sources
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-rec uppercase">
                  <span className="rec-dot h-1.5 w-1.5 rounded-full bg-rec" />
                  Live
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {cellSlots.map((slot) => (
                  <EmptyCell key={slot} label={slot} />
                ))}
              </div>
              <p className="mt-4 px-1 font-mono text-[10px] tracking-[0.2em] text-muted/70 uppercase">
                Émulation de régie — emplacements réservés aux photos &amp;
                captures de production
              </p>
            </div>
          </Reveal>

          {/* activities */}
          <div className="flex flex-col gap-5">
            {liveProduction.activities.map((activity, i) => (
              <Reveal key={activity.code} delay={i * 120}>
                <article className="flex-1 rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-accent/40">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
                    {activity.code}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-bold">
                    {activity.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {activity.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* upcoming slots */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-xl border border-dashed border-line bg-ink-soft/60 px-6 py-5">
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
              Prochaines intégrations
            </span>
            {liveProduction.placeholders.map((p) => (
              <span
                key={p.slot}
                className="rounded-full border border-line/70 px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] text-muted/80 uppercase"
              >
                {p.slot}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
