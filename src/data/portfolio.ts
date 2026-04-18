import {
  BrainCircuit,
  Code2,
  Container,
  Cpu,
  Globe2,
  Mail,
  Network,
  TerminalSquare,
  Workflow,
} from "lucide-react";

export type Language = "en" | "cs" | "ru" | "de" | "es" | "fr";

export type VisualMode =
  | "modern"
  | "1980s"
  | "1990s"
  | "2000s"
  | "2010s"
  | "windows1";

export const languages: Array<{ code: Language; label: string; native: string }> =
  [
    { code: "en", label: "English", native: "English" },
    { code: "cs", label: "Czech", native: "Česky" },
    { code: "ru", label: "Russian", native: "Русский" },
    { code: "de", label: "German", native: "Deutsch" },
    { code: "es", label: "Spanish", native: "Español" },
    { code: "fr", label: "French", native: "Français" },
  ];

export const visualModes: Array<{
  id: VisualMode;
  label: string;
  short: string;
  description: string;
}> = [
  {
    id: "modern",
    label: "Modern",
    short: "Now",
    description: "A precise AI-era portfolio with motion, command controls, and sharp project previews.",
  },
  {
    id: "1980s",
    label: "1980s",
    short: "CRT",
    description: "Terminal, BBS, monochrome glow, scanlines, and keyboard-first navigation.",
  },
  {
    id: "1990s",
    label: "1990s",
    short: "HTML",
    description: "Early web energy with table rhythm, blue links, counters, and tiled texture.",
  },
  {
    id: "2000s",
    label: "2000s",
    short: "Web 2.0",
    description: "Glossy tabs, bright badges, product blocks, and optimistic software branding.",
  },
  {
    id: "2010s",
    label: "2010s",
    short: "Flat",
    description: "Flat startup clarity, spacious grids, simple icons, and restrained animation.",
  },
  {
    id: "windows1",
    label: "Windows 1",
    short: "Win",
    description: "A monochrome desktop with windows, menus, panels, and file-like project views.",
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/DanilaAnikin",
    display: "github.com/DanilaAnikin",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/danila-anikin",
    display: "linkedin.com/danila-anikin",
    icon: Network,
  },
  {
    label: "Email",
    href: "mailto:danila.s.anikin@gmail.com",
    display: "danila.s.anikin@gmail.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/danila.s.anikin",
    display: "instagram.com/danila.s.anikin",
    icon: Globe2,
  },
];

export const projects = [
  {
    title: "Freio",
    href: "https://www.freio.cz/",
    image: "/projects/freio.png",
    eyebrow: "EdTech platform",
    description:
      "Preparation for entrance exams and SCIO tests with realistic tests, immediate evaluation, progress flow, and student-first pricing.",
    impact: "1,400 tests, 63,600 questions, 7 subjects, first test free.",
    stack: ["Product", "Education", "Testing", "Analytics", "Payments"],
    accent: "cyan",
  },
  {
    title: "GorillaType",
    href: "https://gorilla-type-orpin.vercel.app/",
    image: "/projects/gorillatype.png",
    eyebrow: "Typing speed app",
    description:
      "A focused typing-speed experience with time modes, word modes, quotes, settings, leaderboards, tournaments, clans, and account flows.",
    impact: "Fast practice loop with competitive and social typing mechanics.",
    stack: ["Next.js", "Typing UX", "Realtime UI", "Gamification", "Auth"],
    accent: "yellow",
  },
];

export const experience = [
  {
    company: "Cloudinfrastack",
    role: "Software Engineer, Android Developer & Linux System Administrator",
    kind: "Cloud / Linux / AI",
    points: [
      "Cloud infrastructure, Android delivery, Linux administration, and AI automation.",
    ],
    stack: ["Linux", "Kubernetes", "AWS", "Android", "AI automation"],
  },
  {
    company: "Outlier",
    role: "AI Training & Software Developer",
    kind: "AI evaluation",
    points: [
      "AI model evaluation focused on correctness, reasoning, and code quality.",
    ],
    stack: ["AI training", "Code review", "Evaluation", "Reasoning"],
  },
  {
    company: "Freelance",
    role: "Software Developer",
    kind: "Client delivery",
    points: [
      "Full-stack client work from requirements to deployment.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Product UX"],
  },
  {
    company: "DENEWY / juno.one",
    role: "Frontend Developer",
    kind: "Product frontend",
    points: [
      "TypeScript product UI built with maintainable component architecture.",
    ],
    stack: ["TypeScript", "Frontend", "Components", "Product"],
  },
  {
    company: "Dům dětí a mládeže Stodůlky",
    role: "Robotics Lector",
    kind: "Teaching",
    points: [
      "Programming and robotics taught through practical exercises.",
    ],
    stack: ["Robotics", "Programming", "Teaching", "Communication"],
  },
];

export const skillGroups = [
  {
    title: "AI Engineering",
    icon: BrainCircuit,
    skills: ["LLM apps", "AI automation", "Prompt systems", "Agents", "Vector search", "Tool use"],
  },
  {
    title: "Software Engineering",
    icon: Code2,
    skills: ["TypeScript", "React", "Next.js", "Python", "APIs", "Architecture"],
  },
  {
    title: "Automation",
    icon: Workflow,
    skills: ["Workflows", "Scripts", "Integrations", "Data pipelines", "Bots", "Ops tooling"],
  },
  {
    title: "Linux Administration",
    icon: TerminalSquare,
    skills: ["Shell", "systemd", "Networking", "Permissions", "Servers", "Hardening"],
  },
  {
    title: "DevOps",
    icon: Container,
    skills: ["Docker", "CI/CD", "GitHub Actions", "Vercel", "Deployments", "Monitoring"],
  },
  {
    title: "Systems Thinking",
    icon: Cpu,
    skills: ["Debugging", "Performance", "Security", "Databases", "Reliability", "Documentation"],
  },
];

export const translations = {
  en: {
    nav: ["Profile", "Projects", "Experience", "Skills", "Path", "Contact"],
    availability: "Open to internships, junior roles, freelance work, AI automation, DevOps, and collaboration.",
    kicker: "Prague-based software developer",
    title: "Danila Sergejevič Anikin",
    subtitle: "I build software across",
    roleWords: ["AI systems", "automation", "web products", "Linux infrastructure", "DevOps pipelines"],
    intro:
      "I build practical software around AI, automation, infrastructure, and modern web systems. My work combines product thinking, Linux systems, DevOps delivery, and a technical education shaped by mathematics, physics, and programming.",
    primaryCta: "Open projects",
    secondaryCta: "Download CV",
    cvNote: "Professional CV PDF is available at public/cv/danila-anikin-cv.pdf.",
    modeLabel: "Design mode",
    languageLabel: "Language",
    themeLabel: "Theme",
    light: "Light",
    dark: "Dark",
    projectsTitle: "Selected projects",
    projectsIntro:
      "Only the projects worth showing are here. Each preview opens the live product in a new tab.",
    experienceTitle: "Experience",
    experienceIntro:
      "Practical work across cloud infrastructure, AI evaluation, freelance product delivery, frontend engineering, and technical teaching.",
    openProject: "Open live site",
    inspect: "Inspect case",
    skillsTitle: "Engineering range",
    skillsIntro:
      "The focus is broad on purpose: AI systems, automation, production web software, Linux administration, and delivery pipelines.",
    timelineTitle: "Path",
    timelineIntro:
      "A stable technical foundation shaped by mathematics, physics, programming, product work, and hands-on engineering.",
    contactTitle: "Contact",
    contactIntro:
      "Available for internships, junior software roles, AI engineering, DevOps, freelance automation, open-source collaboration, and product work.",
    location: "Prague, Czech Republic",
    status: "Based in Prague, focused on AI software, automation, Linux systems, and product engineering." ,
    repo: "Repository",
    command: "Press mode keys or use the controls.",
    timeline: [
      ["Russia", "Born in Russia and later moved to Prague."],
      ["Prague", "Living in Prague since early childhood."],
      ["Brdičkova", "Primary school with a strong technical foundation."],
      ["Červený Vrch", "Continued mathematics-, physics-, and programming-based study."],
      ["GCHD", "Mathematics, physics, computer science, and programming-oriented high-school foundation."],
      ["Informatics", "A continued direction around software, statistics, systems, and product engineering."],
    ],
  },
  cs: {
    nav: ["Profil", "Projekty", "Praxe", "Dovednosti", "Cesta", "Kontakt"],
    availability: "Otevřený stážím, junior rolím, freelance práci, AI automatizaci, DevOps a spolupráci.",
    kicker: "Softwarový vývojář z Prahy",
    title: "Danila Sergejevič Anikin",
    subtitle: "Stavím software pro",
    roleWords: ["AI systémy", "automatizaci", "webové produkty", "Linux infrastrukturu", "DevOps pipelines"],
    intro:
      "Stavím praktický software kolem AI, automatizace, infrastruktury a moderních webových systémů. Spojuji produktové přemýšlení, Linux, DevOps delivery a technický základ z matematiky, fyziky a programování.",
    primaryCta: "Otevřít projekty",
    secondaryCta: "Stáhnout CV",
    cvNote: "Profesionální CV PDF je dostupné v public/cv/danila-anikin-cv.pdf.",
    modeLabel: "Vizuální režim",
    languageLabel: "Jazyk",
    themeLabel: "Motiv",
    light: "Světlý",
    dark: "Tmavý",
    projectsTitle: "Vybrané projekty",
    projectsIntro: "Jsou tu jen projekty, které stojí za ukázku. Každý náhled otevře živý produkt v novém panelu.",
    experienceTitle: "Praxe",
    experienceIntro:
      "Praktická práce napříč cloudovou infrastrukturou, AI evaluací, freelance product delivery, frontend engineeringem a technickou výukou.",
    openProject: "Otevřít web",
    inspect: "Prohlédnout",
    skillsTitle: "Technický rozsah",
    skillsIntro:
      "Záměrně široké zaměření: AI systémy, automatizace, produkční webový software, správa Linuxu a delivery pipelines.",
    timelineTitle: "Cesta",
    timelineIntro:
      "Stabilní technický základ postavený na matematice, fyzice, programování, produktové práci a praktickém engineeringu.",
    contactTitle: "Kontakt",
    contactIntro:
      "Otevřený stážím, junior software rolím, AI engineeringu, DevOps, freelance automatizaci, open source a produktové práci.",
    location: "Praha, Česká republika",
    status: "Působím v Praze a soustředím se na AI software, automatizaci, Linux systémy a produktový engineering.",
    repo: "Repozitář",
    command: "Použij klávesy režimů nebo ovládací prvky.",
    timeline: [
      ["Rusko", "Narodil jsem se v Rusku a později se přestěhoval do Prahy."],
      ["Praha", "V Praze žiji od raného dětství."],
      ["Brdičkova", "Základní škola se silným technickým základem."],
      ["Červený Vrch", "Pokračování ve studiu zaměřeném na matematiku, fyziku a programování."],
      ["GCHD", "Matematika, fyzika, informatika a programování jako silný technický základ."],
      ["Informatika", "Dlouhodobý směr kolem softwaru, statistiky, systémů a produktového engineeringu."],
    ],
  },
  ru: {
    nav: ["Профиль", "Проекты", "Опыт", "Навыки", "Путь", "Контакты"],
    availability: "Открыт к стажировкам, junior-ролям, freelance, AI-автоматизации, DevOps и сотрудничеству.",
    kicker: "Software developer в Праге",
    title: "Данила Сергеевич Аникин",
    subtitle: "Я создаю software для",
    roleWords: ["AI-систем", "автоматизации", "web-продуктов", "Linux-инфраструктуры", "DevOps pipelines"],
    intro:
      "Я создаю практичный софт на стыке AI, автоматизации, инфраструктуры и современных веб-систем. В работе соединяю product thinking, Linux, DevOps delivery и сильную техническую базу из математики, физики и программирования.",
    primaryCta: "Открыть проекты",
    secondaryCta: "Скачать CV",
    cvNote: "Профессиональное CV PDF доступно в public/cv/danila-anikin-cv.pdf.",
    modeLabel: "Режим дизайна",
    languageLabel: "Язык",
    themeLabel: "Тема",
    light: "Светлая",
    dark: "Тёмная",
    projectsTitle: "Избранные проекты",
    projectsIntro: "Здесь только проекты, которые стоит показывать. Каждый превью открывает живой продукт в новой вкладке.",
    experienceTitle: "Опыт",
    experienceIntro:
      "Практический опыт в cloud infrastructure, AI evaluation, freelance product delivery, frontend engineering и техническом обучении.",
    openProject: "Открыть сайт",
    inspect: "Открыть кейс",
    skillsTitle: "Инженерный диапазон",
    skillsIntro:
      "Фокус широкий намеренно: AI-системы, автоматизация, production web, Linux administration и delivery pipelines.",
    timelineTitle: "Путь",
    timelineIntro:
      "Стабильная техническая база: математика, физика, программирование, product work и практический engineering.",
    contactTitle: "Контакты",
    contactIntro:
      "Открыт к стажировкам, junior software ролям, AI engineering, DevOps, freelance automation, open source и продуктовой работе.",
    location: "Прага, Чехия",
    status: "Живу в Праге и фокусируюсь на AI software, автоматизации, Linux-системах и product engineering.",
    repo: "Репозиторий",
    command: "Используй клавиши режимов или панель управления.",
    timeline: [
      ["Россия", "Родился в России и позже переехал в Прагу."],
      ["Прага", "Живу в Праге с раннего детства."],
      ["Brdičkova", "Начальная школа с сильной технической базой."],
      ["Červený Vrch", "Продолжил обучение с фокусом на математику, физику и программирование."],
      ["GCHD", "Математика, физика, computer science и программирование как сильная техническая база."],
      ["Informatics", "Долгосрочное направление вокруг software, statistics, systems и product engineering."],
    ],
  },
  de: {
    nav: ["Profil", "Projekte", "Erfahrung", "Skills", "Weg", "Kontakt"],
    availability: "Offen für Praktika, Junior-Rollen, Freelance-Arbeit, AI-Automation, DevOps und Zusammenarbeit.",
    kicker: "Softwareentwickler in Prag",
    title: "Danila Sergejevič Anikin",
    subtitle: "Ich baue Software für",
    roleWords: ["AI-Systeme", "Automatisierung", "Webprodukte", "Linux-Infrastruktur", "DevOps Pipelines"],
    intro:
      "Ich baue praktische Software rund um AI, Automatisierung, Infrastruktur und moderne Websysteme. Meine Arbeit verbindet Produktdenken, Linux, DevOps Delivery und eine technische Basis aus Mathematik, Physik und Programmierung.",
    primaryCta: "Projekte öffnen",
    secondaryCta: "CV herunterladen",
    cvNote: "Das professionelle CV PDF liegt unter public/cv/danila-anikin-cv.pdf.",
    modeLabel: "Designmodus",
    languageLabel: "Sprache",
    themeLabel: "Theme",
    light: "Hell",
    dark: "Dunkel",
    projectsTitle: "Ausgewählte Projekte",
    projectsIntro: "Hier stehen nur Projekte, die eine starke Vorschau verdienen. Jede Vorschau öffnet das Live-Produkt in einem neuen Tab.",
    experienceTitle: "Erfahrung",
    experienceIntro:
      "Praktische Arbeit in Cloud-Infrastruktur, AI Evaluation, Freelance Product Delivery, Frontend Engineering und technischer Lehre.",
    openProject: "Live-Seite öffnen",
    inspect: "Case öffnen",
    skillsTitle: "Engineering-Spektrum",
    skillsIntro:
      "Der Fokus ist bewusst breit: AI-Systeme, Automatisierung, produktive Websoftware, Linux-Administration und Delivery Pipelines.",
    timelineTitle: "Weg",
    timelineIntro:
      "Eine stabile technische Basis aus Mathematik, Physik, Programmierung, Produktarbeit und praktischer Softwareentwicklung.",
    contactTitle: "Kontakt",
    contactIntro:
      "Offen für Praktika, Junior-Software-Rollen, AI Engineering, DevOps, Freelance Automation, Open Source und Produktarbeit.",
    location: "Prag, Tschechien",
    status: "In Prag basiert, mit Fokus auf AI Software, Automatisierung, Linux-Systeme und Product Engineering.",
    repo: "Repository",
    command: "Nutze Modustasten oder die Controls.",
    timeline: [
      ["Russland", "In Russland geboren und später nach Prag gezogen."],
      ["Prag", "Seit früher Kindheit in Prag."],
      ["Brdičkova", "Grundschule mit starkem technischem Fundament."],
      ["Červený Vrch", "Weiterer Fokus auf Mathematik, Physik und Programmierung."],
      ["GCHD", "Mathematik, Physik, Informatik und Programmierung als starke technische Basis."],
      ["Informatik", "Langfristige Richtung rund um Software, Statistik, Systeme und Product Engineering."],
    ],
  },
  es: {
    nav: ["Perfil", "Proyectos", "Experiencia", "Skills", "Ruta", "Contacto"],
    availability: "Abierto a prácticas, roles junior, freelance, automatización con AI, DevOps y colaboración.",
    kicker: "Desarrollador de software en Praga",
    title: "Danila Sergejevič Anikin",
    subtitle: "Construyo software para",
    roleWords: ["sistemas AI", "automatización", "productos web", "infraestructura Linux", "pipelines DevOps"],
    intro:
      "Construyo software práctico alrededor de AI, automatización, infraestructura y sistemas web modernos. Combino pensamiento de producto, Linux, DevOps delivery y una base técnica de matemáticas, física y programación.",
    primaryCta: "Abrir proyectos",
    secondaryCta: "Descargar CV",
    cvNote: "El CV profesional en PDF está disponible en public/cv/danila-anikin-cv.pdf.",
    modeLabel: "Modo de diseño",
    languageLabel: "Idioma",
    themeLabel: "Tema",
    light: "Claro",
    dark: "Oscuro",
    projectsTitle: "Proyectos seleccionados",
    projectsIntro: "Solo están los proyectos que vale la pena mostrar. Cada vista previa abre el producto real en una nueva pestaña.",
    experienceTitle: "Experiencia",
    experienceIntro:
      "Trabajo práctico en cloud infrastructure, AI evaluation, freelance product delivery, frontend engineering y enseñanza técnica.",
    openProject: "Abrir sitio",
    inspect: "Ver caso",
    skillsTitle: "Rango técnico",
    skillsIntro:
      "El enfoque es amplio a propósito: sistemas AI, automatización, web de producción, administración Linux y pipelines de entrega.",
    timelineTitle: "Ruta",
    timelineIntro:
      "Una base técnica estable: matemáticas, física, programación, trabajo de producto e ingeniería práctica.",
    contactTitle: "Contacto",
    contactIntro:
      "Abierto a prácticas, roles junior de software, AI engineering, DevOps, automatización freelance, open source y producto.",
    location: "Praga, República Checa",
    status: "Basado en Praga, enfocado en AI software, automatización, sistemas Linux y product engineering.",
    repo: "Repositorio",
    command: "Usa teclas de modo o los controles.",
    timeline: [
      ["Rusia", "Nací en Rusia y después me mudé a Praga."],
      ["Praga", "Vivo en Praga desde la infancia."],
      ["Brdičkova", "Escuela primaria con una base técnica fuerte."],
      ["Červený Vrch", "Continuación con matemáticas, física y programación."],
      ["GCHD", "Matemáticas, física, computer science y programación como base técnica fuerte."],
      ["Informatics", "Dirección a largo plazo alrededor de software, estadística, sistemas y product engineering."],
    ],
  },
  fr: {
    nav: ["Profil", "Projets", "Expérience", "Skills", "Parcours", "Contact"],
    availability: "Ouvert aux stages, postes junior, freelance, automatisation AI, DevOps et collaboration.",
    kicker: "Développeur logiciel à Prague",
    title: "Danila Sergejevič Anikin",
    subtitle: "Je construis du logiciel pour",
    roleWords: ["systèmes AI", "automatisation", "produits web", "infrastructure Linux", "pipelines DevOps"],
    intro:
      "Je construis des logiciels pratiques autour de l'AI, de l'automatisation, de l'infrastructure et des systèmes web modernes. Mon travail combine pensée produit, Linux, DevOps delivery et une base technique en mathématiques, physique et programmation.",
    primaryCta: "Ouvrir les projets",
    secondaryCta: "Télécharger le CV",
    cvNote: "Le CV professionnel en PDF est disponible dans public/cv/danila-anikin-cv.pdf.",
    modeLabel: "Mode design",
    languageLabel: "Langue",
    themeLabel: "Thème",
    light: "Clair",
    dark: "Sombre",
    projectsTitle: "Projets sélectionnés",
    projectsIntro: "Seulement les projets qui méritent d'être montrés. Chaque aperçu ouvre le produit en ligne dans un nouvel onglet.",
    experienceTitle: "Expérience",
    experienceIntro:
      "Travail pratique en cloud infrastructure, AI evaluation, freelance product delivery, frontend engineering et enseignement technique.",
    openProject: "Ouvrir le site",
    inspect: "Voir le cas",
    skillsTitle: "Amplitude technique",
    skillsIntro:
      "Le focus est volontairement large: systèmes AI, automatisation, web de production, administration Linux et pipelines de livraison.",
    timelineTitle: "Parcours",
    timelineIntro:
      "Une base technique stable: mathématiques, physique, programmation, travail produit et engineering pratique.",
    contactTitle: "Contact",
    contactIntro:
      "Ouvert aux stages, rôles junior software, AI engineering, DevOps, automatisation freelance, open source et travail produit.",
    location: "Prague, République tchèque",
    status: "Basé à Prague, avec un focus sur AI software, automatisation, systèmes Linux et product engineering.",
    repo: "Dépôt",
    command: "Utilise les touches de mode ou les contrôles.",
    timeline: [
      ["Russie", "Né en Russie, puis installé à Prague."],
      ["Prague", "Je vis à Prague depuis la petite enfance."],
      ["Brdičkova", "École primaire avec une base technique solide."],
      ["Červený Vrch", "Suite du parcours en mathématiques, physique et programmation."],
      ["GCHD", "Mathématiques, physique, computer science et programmation comme base technique solide."],
      ["Informatics", "Direction durable autour du software, des statistiques, des systèmes et du product engineering."],
    ],
  },
} satisfies Record<Language, {
  nav: string[];
  availability: string;
  kicker: string;
  title: string;
  subtitle: string;
  roleWords: string[];
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  cvNote: string;
  modeLabel: string;
  languageLabel: string;
  themeLabel: string;
  light: string;
  dark: string;
  projectsTitle: string;
  projectsIntro: string;
  experienceTitle: string;
  experienceIntro: string;
  openProject: string;
  inspect: string;
  skillsTitle: string;
  skillsIntro: string;
  timelineTitle: string;
  timelineIntro: string;
  contactTitle: string;
  contactIntro: string;
  location: string;
  status: string;
  repo: string;
  command: string;
  timeline: Array<[string, string]>;
}>;
