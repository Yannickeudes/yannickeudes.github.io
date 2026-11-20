export const site = {
  name: "Yannick-Eudes Cédric Koffi APETOH",
  proName: "Cédric APETOH",
  role: "Développeur web & mobile",
  positioning: "Code. Image. Signal.",
  positioningDetail:
    "Je construis des logiciels, je produis des images en direct et je partage la tech avec ceux qui apprennent comme moi.",
  location: "Lomé, Togo",
  coordinates: "6.1256° N — 1.2254° E",
  email: "yannickapetoh@gmail.com",
  whatsapp: "https://wa.me/22896614714",
  links: {
    github: "https://github.com/Yannickeudes",
    linkedin:
      "https://www.linkedin.com/in/yannick-eudes-cédric-koffi-apetoh-6557962a7/",
    instagram: "https://www.instagram.com/cedric_apetoh",
    tiktok: "https://www.tiktok.com/@cedric_koffi_apetoh",
    x: "https://x.com/YApetoh43497",
    facebook: "https://www.facebook.com/cedric.apetoh",
    threads: "https://www.threads.com/@cedric_the_codefather",
    linktree: "https://linktr.ee/ye_cedricapetoh",
  },
};

export const universes = [
  {
    index: "01",
    code: "SOFTWARE.DEV",
    title: "Software Development",
    description:
      "Du besoin à l'application : web, mobile, API et bases de données. Je conçois, je code, je teste, j'itère — et j'apprends chaque jour de nouvelles technologies.",
    tags: ["Python", "JavaScript", "PHP", "Laravel", "SQL", "Git"],
    motif: "code",
  },
  {
    index: "02",
    code: "LIVE.PRODUCTION",
    title: "Live Production & Broadcasting",
    description:
      "Régie vidéo sous vMix, gestion des sources, tournage caméra et captation d'événements. Le temps réel, sans filet — chaque diffusion compte.",
    tags: ["vMix", "Régie live", "Caméra", "Production"],
    motif: "live",
  },
  {
    index: "03",
    code: "DIGITAL.CONTENT",
    title: "Digital, Content & Innovation",
    description:
      "Création de contenu tech, vulgarisation du numérique, projets communautaires et exploration de l'IA. Transmettre, rendre visible, faire grandir les communautés.",
    tags: ["Contenu tech", "Communauté", "Vulgarisation", "IA"],
    motif: "signal",
  },
] as const;

export const about = {
  paragraphs: [
    "Je suis Cédric, un jeune professionnel du numérique basé à Lomé. Passionné de technologie, je navigue entre trois univers qui se répondent : le développement logiciel, la production audiovisuelle en direct et la création de contenu digital.",
    "Mon approche ? Apprendre en faisant. Je ne me contente pas de consommer la tech — je la construis, je la filme, je la partage. Chaque projet est une occasion d'expérimenter, de comprendre et de progresser.",
    "Curieux, exigeant et convaincu que le numérique doit être accessible à tous, je m'investis dans des projets qui ont du sens : gestion scolaire, patrimoine public, entraide entre jeunes, éducation numérique.",
  ],
  traits: [
    "Curieux",
    "Polyvalent",
    "Orienté pratique",
    "Créatif",
    "En constante progression",
  ],
};

export type ProjectStatus = "En développement" | "En cours" | "En vérification";

export const projects = [
  {
    name: "EduPaie",
    tagline: "Application desktop de gestion des paiements scolaires",
    description:
      "Application de bureau pour simplifier la gestion des frais de scolarité : élèves, paiements, soldes, modes de paiement, historique des transactions, reçus et tableau de bord.",
    problem:
      "Besoin : centraliser et fiabiliser le suivi des paiements scolaires, souvent géré manuellement.",
    solution:
      "Application desktop Python avec interface PySide6 et base SQLite embarquée — simple à installer, sans serveur.",
    role: "Conception & développement — projet de formation ADN",
    tech: ["Python", "PySide6", "SQLite"],
    status: "En développement" as ProjectStatus,
    link: "https://github.com/Yannickeudes/EduPaie",
    note: "Certaines fonctionnalités sont encore en cours de développement.",
    featured: true,
  },
  {
    name: "Gestion du Patrimoine de l'État",
    tagline: "Conception d'une application de gestion patrimoniale",
    description:
      "Projet individuel de conception et de développement d'une application de gestion du patrimoine de l'État togolais.",
    problem:
      "Besoin : outiller la gestion et le suivi du patrimoine public.",
    solution:
      "Démarche complète : analyse des besoins, cahier des charges, modélisation UML, maquettes Figma, architecture microservices (Laravel, PostgreSQL, Docker).",
    role: "Analyse, conception & développement — projet personnel",
    tech: ["Laravel", "PHP", "PostgreSQL", "Docker", "UML", "Figma"],
    status: "En cours" as ProjectStatus,
    link: "https://github.com/Yannickeudes/gestion-patrimoine",
    note: "Projet en cours — les fonctionnalités envisagées ne sont pas toutes développées.",
    featured: true,
  },
  {
    name: "BIBLI-S",
    tagline: "Gestion de bibliothèque — contexte professionnel",
    description:
      "Application web de gestion de bibliothèque développée dans un contexte de travail, avec Laravel et PHP.",
    problem:
      "Besoin : gérer un catalogue de bibliothèque et ses emprunts dans un environnement professionnel.",
    solution:
      "Développement web full-stack : logique applicative, gestion des données, travail collaboratif.",
    role: "Développement web — rôle détaillé en cours de vérification",
    tech: ["Laravel", "PHP", "SQL"],
    status: "En vérification" as ProjectStatus,
    link: null,
    note: "Détails du rôle et fonctionnalités finalisées en cours de confirmation.",
    featured: true,
  },
  {
    name: "Bro Sûr",
    tagline: "Plateforme communautaire d'entraide pour les jeunes",
    description:
      "Plateforme dédiée à l'expression, l'écoute et l'entraide entre jeunes, pensée pour créer un espace sûr d'échange et de soutien.",
    problem: "Besoin : offrir aux jeunes un lieu d'expression et de entraide.",
    solution:
      "Application web JavaScript structurée pour la communication et le partage communautaire.",
    role: "Conception & développement",
    tech: ["JavaScript"],
    status: "En développement" as ProjectStatus,
    link: "https://github.com/Yannickeudes/bro-sur",
    note: null,
    featured: false,
  },
  {
    name: "Found",
    tagline: "Objets perdus & trouvés — PWA installable",
    description:
      "Application web pour signaler et retrouver les objets perdus et trouvés, avec photos et authentification.",
    problem: "Besoin : retrouver rapidement un objet perdu ou aider à identifier un objet trouvé.",
    solution:
      "Front-end statique + Supabase (base de données, authentification admin, stockage photos). PWA installable sur mobile.",
    role: "Conception & développement",
    tech: ["HTML/CSS/JS", "Supabase", "PWA"],
    status: "En développement" as ProjectStatus,
    link: "https://github.com/Yannickeudes/Found",
    note: null,
    featured: false,
  },
];

export const exercises = [
  {
    name: "TogoSante",
    description: "Projet complet en 7 fichiers HTML + README.",
    link: "https://github.com/Yannickeudes/TogoSante-",
  },
  {
    name: "Ecommerce",
    description: "Exercice HTML & CSS — site e-commerce.",
    link: "https://github.com/Yannickeudes/Ecommerce",
  },
  {
    name: "AKIMMAKAKO",
    description: "Projet HTML & CSS.",
    link: "https://github.com/Yannickeudes/AKIMMAKAKO-Html-CSS",
  },
];

export const liveProduction = {
  intro:
    "Entre le code et l'image, il y a le direct. J'interviens en régie et à la caméra sur des événements réels — là où chaque seconde compte et où rien ne peut être refait.",
  activities: [
    {
      code: "RÉGIE",
      title: "Production vidéo en direct",
      description:
        "Travail en régie lors de productions en direct : gestion et suivi des sources vidéo sous vMix, participation au déroulement technique des diffusions.",
    },
    {
      code: "CAMÉRA",
      title: "Prise de vue & captation",
      description:
        "Opération caméra sur événements : cadrage, suivi des scènes, captation d'images destinées à la diffusion ou au montage.",
    },
    {
      code: "POST",
      title: "Montage & compilation",
      description:
        "Assemblage de séquences filmées : compilations d'événements, sélections de plans et préparation de contenus diffusables.",
    },
  ],
  placeholders: [
    { slot: "CAM_01 — photo à venir" },
    { slot: "RÉGIE — photo à venir" },
    { slot: "MULTIVIEW — capture à venir" },
  ],
};

export const stack = {
  practiced: {
    title: "Technologies pratiquées",
    subtitle: "Utilisées dans mes projets et contextes réels",
    items: [
      "Python",
      "JavaScript",
      "PHP",
      "Laravel",
      "HTML / CSS",
      "SQL",
      "SQLite",
      "PostgreSQL",
      "Git & GitHub",
      "vMix",
    ],
  },
  learning: {
    title: "En cours d'apprentissage",
    subtitle: "Technologies que j'explore activement",
    items: [
      "React / Next.js",
      "Développement mobile",
      "Conception logicielle",
      "UML & Merise",
      "Data & analyse",
      "Intelligence artificielle",
    ],
  },
  tools: {
    title: "Outils",
    subtitle: "Mon environnement de travail quotidien",
    items: ["Figma", "VS Code", "Docker", "Supabase", "GitHub", "Caméras & régie"],
  },
};

export const journey = [
  {
    title: "Tech avec Cédric",
    subtitle: "Créateur de contenu technologique",
    status: "En cours",
    description:
      "Projet personnel de création et de partage de contenu tech — « On apprend ensemble, on progresse ensemble. »",
  },
  {
    title: "Be In Tech",
    subtitle: "Cofondateur",
    status: "En cours",
    description:
      "Projet collaboratif de communication et de partage autour de la technologie : innovation, contenu numérique, communauté.",
  },
  {
    title: "fata School",
    subtitle: "Ambassadeur — Togo",
    status: "En cours",
    description:
      "Ambassadeur fata School au Togo : promotion d'une approche accessible de l'apprentissage du numérique.",
  },
  {
    title: "Production live",
    subtitle: "Régie vidéo & caméra",
    status: "En cours",
    description:
      "Interventions en régie (vMix) et à la caméra sur des productions et événements en direct.",
  },
];

export const socials = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Instagram", href: site.links.instagram },
  { label: "TikTok", href: site.links.tiktok },
  { label: "X", href: site.links.x },
  { label: "Facebook", href: site.links.facebook },
  { label: "Threads", href: site.links.threads },
  { label: "Linktree", href: site.links.linktree },
];
