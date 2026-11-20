import { exercises, projects } from "@/data/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "En développement": "border-line text-muted",
    "En cours": "border-line text-muted",
    "En vérification": "border-accent/60 text-accent",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase ${styles[status] ?? "border-line text-muted"}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function TechTags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-wider text-cream/75 uppercase"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectDetail({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="rounded-2xl border border-line bg-panel p-7 transition-colors hover:border-accent/40 sm:p-9">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1 font-mono text-xs tracking-[0.2em] text-accent uppercase">
            {project.tagline}
          </p>
        </div>
        <StatusPill status={project.status} />
      </div>

      <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-cream/80">
        {project.description}
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-ink p-5">
          <p className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase">
            Besoin
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cream/80">
            {project.problem}
          </p>
        </div>
        <div className="rounded-xl border border-line bg-ink p-5">
          <p className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase">
            Solution
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cream/80">
            {project.solution}
          </p>
        </div>
      </div>

      <p className="mt-6 font-mono text-xs text-muted">
        <span className="text-cream/70">Rôle — </span>
        {project.role}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <TechTags tags={project.tech} />
        <div className="flex items-center gap-5">
          {project.note && (
            <p className="max-w-xs text-xs text-muted">{project.note}</p>
          )}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-cream uppercase transition-colors hover:text-accent"
            >
              GitHub <ArrowIcon />
            </a>
          ) : (
            <span className="font-mono text-xs tracking-widest text-muted uppercase">
              Non publié
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projets" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          index="03"
          code="Projets"
          title="Des idées devenues des applications"
          description="Chaque projet part d'un besoin réel. Je montre ce qui existe — pas ce qui pourrait impressionner."
        />

        <div className="mt-14 space-y-6">
          {featured.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <ProjectDetail project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((project, i) => (
            <Reveal key={project.name} delay={i * 100}>
              <a
                href={project.link ?? "#"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-line bg-panel p-7 transition-colors hover:border-accent/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold">
                    {project.name}
                  </h3>
                  <StatusPill status={project.status} />
                </div>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
                  {project.tagline}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <TechTags tags={project.tech} />
                  {project.link && (
                    <span className="text-muted transition-colors group-hover:text-accent">
                      <ArrowIcon />
                    </span>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-14">
            <h3 className="font-mono text-xs tracking-[0.3em] text-muted uppercase">
              Exercices & apprentissage
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {exercises.map((exercise) => (
                <a
                  key={exercise.name}
                  href={exercise.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-full border border-line px-5 py-2.5 text-sm text-cream/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <span className="font-medium">{exercise.name}</span>
                  <span className="ml-2 text-xs text-muted">
                    {exercise.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
