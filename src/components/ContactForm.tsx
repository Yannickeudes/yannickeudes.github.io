"use client";

import { useState } from "react";
import { site } from "@/data/site";

const projectTypes = [
  "Site vitrine",
  "Application web / SaaS",
  "Application mobile",
  "Production live / événement",
  "Design UI/UX",
  "Contenu / autre",
];

const inputClass =
  "w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-cream placeholder:text-muted/60 focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const summary = [
    `Nom : ${form.name || "—"}`,
    `E-mail : ${form.email || "—"}`,
    `Type de projet : ${form.type || "—"}`,
    `Message : ${form.message || "—"}`,
  ].join("\n");

  const waHref = `https://wa.me/22896614714?text=${encodeURIComponent(summary)}`;
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Projet : ${form.type || "demande de contact"}`,
  )}&body=${encodeURIComponent(summary)}`;

  return (
    <form
      className="rounded-2xl border border-line bg-panel p-6 sm:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={inputClass}
          placeholder="Ton nom *"
          value={form.name}
          onChange={set("name")}
          required
        />
        <input
          className={inputClass}
          type="email"
          placeholder="Ton e-mail"
          value={form.email}
          onChange={set("email")}
        />
      </div>
      <div className="mt-4">
        <select
          className={`${inputClass} appearance-none`}
          value={form.type}
          onChange={set("type")}
        >
          <option value="" disabled>
            Type de projet
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t} className="bg-ink">
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <textarea
          className={`${inputClass} min-h-32 resize-y`}
          placeholder="Décris ton projet ou ta demande *"
          value={form.message}
          onChange={set("message")}
          required
        />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-accent/85 sm:flex-none"
        >
          Envoyer via WhatsApp
        </a>
        <a
          href={mailHref}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-line px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-accent hover:text-accent sm:flex-none"
        >
          Envoyer par e-mail
        </a>
      </div>
      <p className="mt-4 text-center font-mono text-[10px] tracking-wider text-muted/70 uppercase">
        Le formulaire pré-remplit WhatsApp ou ton application e-mail — rien
        n'est envoyé depuis ce site.
      </p>
    </form>
  );
}
