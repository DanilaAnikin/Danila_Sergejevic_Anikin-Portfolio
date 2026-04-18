import {
  Bot,
  BrainCircuit,
  Code2,
  Container,
  Cpu,
  Database,
  Globe2,
  Languages,
  Mail,
  Network,
  Server,
  Settings2,
  ShieldCheck,
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
    { code: "cs", label: "Czech", native: "Cesky" },
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

export const capabilityIcons = [
  Bot,
  Server,
  Database,
  Network,
  ShieldCheck,
  Settings2,
  Languages,
];

export const translations = {
  en: {
    nav: ["Profile", "Projects", "Skills", "Timeline", "Contact"],
    availability: "Open to internships, junior roles, freelance work, AI automation, DevOps, and collaboration.",
    kicker: "Prague-based software developer",
    title: "Danila Sergejevic Anikin",
    subtitle:
      "Software Developer, AI Software Engineer, Linux Admin, AI Specialist, and DevOps Engineer.",
    intro:
      "I build practical software around AI, automation, infrastructure, and modern web systems. My background comes from mathematics-, physics-, and programming-oriented schools in Prague, and I am preparing to continue at VSE, Faculty of Informatics and Statistics.",
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
    openProject: "Open live site",
    inspect: "Inspect case",
    skillsTitle: "Engineering range",
    skillsIntro:
      "The focus is broad on purpose: AI systems, automation, production web software, Linux administration, and delivery pipelines.",
    timelineTitle: "Path",
    timelineIntro:
      "A mathematics, physics, and programming path through Prague schools, now moving toward university study at VSE FIS.",
    contactTitle: "Contact",
    contactIntro:
      "Available for internships, junior software roles, AI engineering, DevOps, freelance automation, open-source collaboration, and product work.",
    location: "Prague, Czech Republic",
    status: "Finishing Gymnazium Christiana Dopplera and preparing for VSE FIS.",
    repo: "Repository",
    command: "Press mode keys or use the controls.",
    timeline: [
      ["Russia", "Born in Russia and later moved to Prague."],
      ["Prague", "Living in Prague since early childhood."],
      ["Brdickova", "Primary school with a strong technical foundation."],
      ["Cerveny Vrch", "Continued mathematics-, physics-, and programming-based study."],
      ["GCHD", "Finishing the fourth year and taking Maturita exams."],
      ["VSE FIS", "Next step: Faculty of Informatics and Statistics."],
    ],
  },
  cs: {
    nav: ["Profil", "Projekty", "Dovednosti", "Cesta", "Kontakt"],
    availability: "Otevřený stážím, junior rolím, freelance práci, AI automatizaci, DevOps a spolupráci.",
    kicker: "Softwarový vývojář z Prahy",
    title: "Danila Sergejevič Anikin",
    subtitle: "Software Developer, AI Software Engineer, Linux Admin, AI Specialist a DevOps Engineer.",
    intro:
      "Stavím praktický software kolem AI, automatizace, infrastruktury a moderních webových systémů. V Praze jsem prošel školami zaměřenými na matematiku, fyziku a programování a chystám se pokračovat na VŠE, Fakultě informatiky a statistiky.",
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
    openProject: "Otevřít web",
    inspect: "Prohlédnout",
    skillsTitle: "Technický rozsah",
    skillsIntro:
      "Záměrně široké zaměření: AI systémy, automatizace, produkční webový software, správa Linuxu a delivery pipelines.",
    timelineTitle: "Cesta",
    timelineIntro:
      "Matematicko-fyzikální a programátorská cesta pražskými školami, teď směrem k VŠE FIS.",
    contactTitle: "Kontakt",
    contactIntro:
      "Otevřený stážím, junior software rolím, AI engineeringu, DevOps, freelance automatizaci, open source a produktové práci.",
    location: "Praha, Česká republika",
    status: "Dokončuji Gymnázium Christiana Dopplera a připravuji se na VŠE FIS.",
    repo: "Repozitář",
    command: "Použij klávesy režimů nebo ovládací prvky.",
    timeline: [
      ["Rusko", "Narodil jsem se v Rusku a později se přestěhoval do Prahy."],
      ["Praha", "V Praze žiji od raného dětství."],
      ["Brdičkova", "Základní škola se silným technickým základem."],
      ["Červený Vrch", "Pokračování ve studiu zaměřeném na matematiku, fyziku a programování."],
      ["GCHD", "Dokončuji čtvrtý ročník a skládám maturitní zkoušky."],
      ["VŠE FIS", "Další krok: Fakulta informatiky a statistiky."],
    ],
  },
  ru: {
    nav: ["Профиль", "Проекты", "Навыки", "Путь", "Контакты"],
    availability: "Открыт к стажировкам, junior-ролям, freelance, AI-автоматизации, DevOps и сотрудничеству.",
    kicker: "Software developer в Праге",
    title: "Данила Сергеевич Аникин",
    subtitle: "Software Developer, AI Software Engineer, Linux Admin, AI Specialist и DevOps Engineer.",
    intro:
      "Я создаю практичный софт на стыке AI, автоматизации, инфраструктуры и современных веб-систем. Мой путь в Праге связан со школами с сильным фокусом на математику, физику и программирование; следующий шаг - VSE, Faculty of Informatics and Statistics.",
    primaryCta: "Открыть проекты",
    secondaryCta: "Скачать CV",
    cvNote: "Профессиональное CV PDF доступно в public/cv/danila-anikin-cv.pdf.",
    modeLabel: "Режим дизайна",
    languageLabel: "Язык",
    themeLabel: "Тема",
    light: "Светлая",
    dark: "Темная",
    projectsTitle: "Избранные проекты",
    projectsIntro: "Здесь только проекты, которые стоит показывать. Каждый превью открывает живой продукт в новой вкладке.",
    openProject: "Открыть сайт",
    inspect: "Открыть кейс",
    skillsTitle: "Инженерный диапазон",
    skillsIntro:
      "Фокус широкий намеренно: AI-системы, автоматизация, production web, Linux administration и delivery pipelines.",
    timelineTitle: "Путь",
    timelineIntro:
      "Математика, физика и программирование в пражских школах, дальше - университет VSE FIS.",
    contactTitle: "Контакты",
    contactIntro:
      "Открыт к стажировкам, junior software ролям, AI engineering, DevOps, freelance automation, open source и продуктовой работе.",
    location: "Прага, Чехия",
    status: "Заканчиваю Gymnazium Christiana Dopplera и готовлюсь к VSE FIS.",
    repo: "Репозиторий",
    command: "Используй клавиши режимов или панель управления.",
    timeline: [
      ["Россия", "Родился в России и позже переехал в Прагу."],
      ["Прага", "Живу в Праге с раннего детства."],
      ["Brdičkova", "Начальная школа с сильной технической базой."],
      ["Červený Vrch", "Продолжил обучение с фокусом на математику, физику и программирование."],
      ["GCHD", "Заканчиваю четвертый год и сдаю Maturita exams."],
      ["VSE FIS", "Следующий шаг: Faculty of Informatics and Statistics."],
    ],
  },
  de: {
    nav: ["Profil", "Projekte", "Skills", "Weg", "Kontakt"],
    availability: "Offen fur Praktika, Junior-Rollen, Freelance-Arbeit, AI-Automation, DevOps und Zusammenarbeit.",
    kicker: "Softwareentwickler in Prag",
    title: "Danila Sergejevic Anikin",
    subtitle: "Software Developer, AI Software Engineer, Linux Admin, AI Specialist und DevOps Engineer.",
    intro:
      "Ich baue praktische Software rund um AI, Automatisierung, Infrastruktur und moderne Websysteme. Mein Hintergrund kommt aus Prager Schulen mit Fokus auf Mathematik, Physik und Programmierung; als Nächstes folgt VSE, Faculty of Informatics and Statistics.",
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
    openProject: "Live-Seite öffnen",
    inspect: "Case öffnen",
    skillsTitle: "Engineering-Spektrum",
    skillsIntro:
      "Der Fokus ist bewusst breit: AI-Systeme, Automatisierung, produktive Websoftware, Linux-Administration und Delivery Pipelines.",
    timelineTitle: "Weg",
    timelineIntro:
      "Ein Mathematik-, Physik- und Programmierweg durch Prager Schulen, jetzt Richtung VSE FIS.",
    contactTitle: "Kontakt",
    contactIntro:
      "Offen fur Praktika, Junior Software Rollen, AI Engineering, DevOps, Freelance Automation, Open Source und Produktarbeit.",
    location: "Prag, Tschechien",
    status: "Ich beende Gymnazium Christiana Dopplera und bereite mich auf VSE FIS vor.",
    repo: "Repository",
    command: "Nutze Modustasten oder die Controls.",
    timeline: [
      ["Russland", "In Russland geboren und später nach Prag gezogen."],
      ["Prag", "Seit fruher Kindheit in Prag."],
      ["Brdickova", "Grundschule mit starkem technischem Fundament."],
      ["Cerveny Vrch", "Weiterer Fokus auf Mathematik, Physik und Programmierung."],
      ["GCHD", "Viertes Jahr, Abschlussphase und Maturita."],
      ["VSE FIS", "Nächster Schritt: Faculty of Informatics and Statistics."],
    ],
  },
  es: {
    nav: ["Perfil", "Proyectos", "Skills", "Ruta", "Contacto"],
    availability: "Abierto a practicas, roles junior, freelance, automatizacion con AI, DevOps y colaboracion.",
    kicker: "Desarrollador de software en Praga",
    title: "Danila Sergejevic Anikin",
    subtitle: "Software Developer, AI Software Engineer, Linux Admin, AI Specialist y DevOps Engineer.",
    intro:
      "Construyo software practico alrededor de AI, automatizacion, infraestructura y sistemas web modernos. Mi base viene de escuelas de Praga orientadas a matematicas, fisica y programacion; el siguiente paso es VSE, Faculty of Informatics and Statistics.",
    primaryCta: "Abrir proyectos",
    secondaryCta: "Descargar CV",
    cvNote: "El CV profesional en PDF esta disponible en public/cv/danila-anikin-cv.pdf.",
    modeLabel: "Modo de diseño",
    languageLabel: "Idioma",
    themeLabel: "Tema",
    light: "Claro",
    dark: "Oscuro",
    projectsTitle: "Proyectos seleccionados",
    projectsIntro: "Solo estan los proyectos que vale la pena mostrar. Cada vista previa abre el producto real en una nueva pestaña.",
    openProject: "Abrir sitio",
    inspect: "Ver caso",
    skillsTitle: "Rango tecnico",
    skillsIntro:
      "El enfoque es amplio a proposito: sistemas AI, automatizacion, web de produccion, administracion Linux y pipelines de entrega.",
    timelineTitle: "Ruta",
    timelineIntro:
      "Una ruta de matematicas, fisica y programacion por escuelas de Praga, ahora hacia VSE FIS.",
    contactTitle: "Contacto",
    contactIntro:
      "Abierto a practicas, roles junior de software, AI engineering, DevOps, automatizacion freelance, open source y producto.",
    location: "Praga, Republica Checa",
    status: "Terminando Gymnazium Christiana Dopplera y preparandome para VSE FIS.",
    repo: "Repositorio",
    command: "Usa teclas de modo o los controles.",
    timeline: [
      ["Rusia", "Naci en Rusia y despues me mude a Praga."],
      ["Praga", "Vivo en Praga desde la infancia."],
      ["Brdickova", "Escuela primaria con una base tecnica fuerte."],
      ["Cerveny Vrch", "Continuacion con matematicas, fisica y programacion."],
      ["GCHD", "Terminando el cuarto ano y los examenes Maturita."],
      ["VSE FIS", "Siguiente paso: Faculty of Informatics and Statistics."],
    ],
  },
  fr: {
    nav: ["Profil", "Projets", "Skills", "Parcours", "Contact"],
    availability: "Ouvert aux stages, postes junior, freelance, automatisation AI, DevOps et collaboration.",
    kicker: "Developpeur logiciel a Prague",
    title: "Danila Sergejevic Anikin",
    subtitle: "Software Developer, AI Software Engineer, Linux Admin, AI Specialist et DevOps Engineer.",
    intro:
      "Je construis des logiciels pratiques autour de l'AI, de l'automatisation, de l'infrastructure et des systemes web modernes. Mon parcours vient d'ecoles de Prague orientees mathematiques, physique et programmation; la prochaine etape est VSE, Faculty of Informatics and Statistics.",
    primaryCta: "Ouvrir les projets",
    secondaryCta: "Telecharger le CV",
    cvNote: "Le CV professionnel en PDF est disponible dans public/cv/danila-anikin-cv.pdf.",
    modeLabel: "Mode design",
    languageLabel: "Langue",
    themeLabel: "Theme",
    light: "Clair",
    dark: "Sombre",
    projectsTitle: "Projets selectionnes",
    projectsIntro: "Seulement les projets qui meritent d'etre montres. Chaque apercu ouvre le produit en ligne dans un nouvel onglet.",
    openProject: "Ouvrir le site",
    inspect: "Voir le cas",
    skillsTitle: "Amplitude technique",
    skillsIntro:
      "Le focus est volontairement large: systemes AI, automatisation, web de production, administration Linux et pipelines de livraison.",
    timelineTitle: "Parcours",
    timelineIntro:
      "Un parcours mathematiques, physique et programmation dans les ecoles de Prague, maintenant vers VSE FIS.",
    contactTitle: "Contact",
    contactIntro:
      "Ouvert aux stages, roles junior software, AI engineering, DevOps, automatisation freelance, open source et travail produit.",
    location: "Prague, Republique tcheque",
    status: "Je termine Gymnazium Christiana Dopplera et je me prepare pour VSE FIS.",
    repo: "Depot",
    command: "Utilise les touches de mode ou les controles.",
    timeline: [
      ["Russie", "Ne en Russie, puis installe a Prague."],
      ["Prague", "Je vis a Prague depuis la petite enfance."],
      ["Brdickova", "Ecole primaire avec une base technique solide."],
      ["Cerveny Vrch", "Suite du parcours en mathematiques, physique et programmation."],
      ["GCHD", "Fin de quatrieme annee et examens Maturita."],
      ["VSE FIS", "Prochaine etape: Faculty of Informatics and Statistics."],
    ],
  },
} satisfies Record<Language, {
  nav: string[];
  availability: string;
  kicker: string;
  title: string;
  subtitle: string;
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
