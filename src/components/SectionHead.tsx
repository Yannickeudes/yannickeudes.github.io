import Reveal from "./Reveal";

export default function SectionHead({
  index,
  code,
  title,
  description,
}: {
  index: string;
  code: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
            {index} — {code}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>
        </div>
      </div>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
