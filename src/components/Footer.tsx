import { site, socials } from "@/data/site";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-line bg-ink-soft/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
            07 — Contact
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Un projet ? Une prod ?
            <br />
            <span className="text-muted">Parlons-en.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Collaborations, développement, production audiovisuelle, innovation
            — je suis ouvert aux échanges.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16">
            <p className="mb-5 font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
              Tous les réseaux
            </p>
            <ul className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-line px-4 py-2 text-sm text-cream/80 transition-colors hover:border-accent hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 font-mono text-xs text-muted sm:flex-row sm:items-center">
          <p>© 2026 {site.name}</p>
          <p>{site.positioning}</p>
        </div>
      </div>
    </footer>
  );
}
