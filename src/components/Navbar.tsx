import { site } from "@/data/site";

const links = [
  { label: "Univers", href: "#univers" },
  { label: "À propos", href: "#apropos" },
  { label: "Projets", href: "#projets" },
  { label: "Live", href: "#live" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#accueil"
          className="font-display text-sm font-bold tracking-widest uppercase"
        >
          {site.proName}
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs tracking-wider text-muted uppercase transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-medium tracking-wider text-white uppercase transition-colors hover:bg-accent/85"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
