export default function Marquee() {
  const items = [
    "Software Development",
    "Live Production",
    "Digital & Content",
    "Python",
    "vMix",
    "Laravel",
    "Caméra",
    "Contenu Tech",
    "Lomé — Togo",
  ];

  const row = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line bg-ink-soft py-4" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6 font-mono text-xs tracking-[0.25em] whitespace-nowrap text-muted uppercase"
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
