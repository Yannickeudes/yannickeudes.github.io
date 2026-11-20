import { stack } from "@/data/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const columns = [
  {
    key: "practiced",
    index: "A",
    accent: false,
  },
  {
    key: "learning",
    index: "B",
    accent: true,
  },
  {
    key: "tools",
    index: "C",
    accent: false,
  },
] as const;

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line bg-ink-soft/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          index="05"
          code="Stack"
          title="Ce que j'utilise — et ce que j'apprends"
          description="Pas de barres de progression ni de pourcentages — juste ce que je pratique déjà, et ce que j'explore."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {columns.map((col, i) => {
            const data = stack[col.key];
            return (
              <Reveal key={col.key} delay={i * 100}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-7 ${
                    col.accent
                      ? "border-accent/40 bg-panel"
                      : "border-line bg-panel"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-muted">
                      {col.index}
                    </span>
                    <h3 className="font-display text-lg font-bold">
                      {data.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-muted">{data.subtitle}</p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {data.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-cream/85"
                      >
                        <span
                          className={`h-1 w-1 rounded-full ${
                            col.accent ? "bg-accent" : "bg-muted"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
