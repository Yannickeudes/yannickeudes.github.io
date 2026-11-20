import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Univers", href: "/#univers" },
  { label: "À propos", href: "/apropos" },
  { label: "Projets", href: "/projets" },
  { label: "Live", href: "/live" },
  { label: "Parcours", href: "/parcours" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-sm font-bold tracking-widest uppercase"
        >
          {site.proName}
        </Link>
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs tracking-wider text-muted uppercase transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#contact"
          className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-medium tracking-wider text-white uppercase transition-colors hover:bg-accent/85"
        >
          Contact
        </Link>
      </nav>
      {/* mobile nav */}
      <nav className="border-t border-line/40 lg:hidden">
        <ul className="flex gap-5 overflow-x-auto px-6 py-2.5">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="font-mono text-[11px] tracking-wider text-muted uppercase transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
