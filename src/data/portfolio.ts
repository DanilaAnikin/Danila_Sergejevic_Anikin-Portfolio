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

export type Localized = Record<Language, string>;

const l = (
  en: string,
  cs: string,
  ru: string,
  de: string,
  es: string,
  fr: string,
): Localized => ({ en, cs, ru, de, es, fr });

export type VisualMode =
  | "modern"
  | "1980s"
  | "1990s"
  | "2000s"
  | "2010s"
  | "windows1";

export const languages: Array<{ code: Language; label: Localized; native: string }> =
  [
    { code: "en", label: l("English", "Angličtina", "Английский", "Englisch", "Inglés", "Anglais"), native: "English" },
    { code: "cs", label: l("Czech", "Čeština", "Чешский", "Tschechisch", "Checo", "Tchèque"), native: "Česky" },
    { code: "ru", label: l("Russian", "Ruština", "Русский", "Russisch", "Ruso", "Russe"), native: "Русский" },
    { code: "de", label: l("German", "Němčina", "Немецкий", "Deutsch", "Alemán", "Allemand"), native: "Deutsch" },
    { code: "es", label: l("Spanish", "Španělština", "Испанский", "Spanisch", "Español", "Espagnol"), native: "Español" },
    { code: "fr", label: l("French", "Francouzština", "Французский", "Französisch", "Francés", "Français"), native: "Français" },
  ];

export const visualModes: Array<{
  id: VisualMode;
  label: Localized;
  short: Localized;
  description: Localized;
}> = [
  {
    id: "modern",
    label: l("Modern", "Moderní", "Современный", "Modern", "Moderno", "Moderne"),
    short: l("Now", "Teď", "Сейчас", "Jetzt", "Ahora", "Now"),
    description: l(
      "A precise AI-era portfolio with motion, command controls, and sharp project previews.",
      "Precizní portfolio AI éry s pohybem, příkazovým ovládáním a ostrými náhledy projektů.",
      "Точное портфолио AI-эры с движением, командным управлением и чёткими превью проектов.",
      "Ein präzises Portfolio der AI-Ära mit Motion, Kommandosteuerung und scharfen Projekt-Previews.",
      "Un portfolio preciso de la era AI con movimiento, controles de comandos y vistas nítidas de proyectos.",
      "Un portfolio précis de l'ère AI avec du mouvement, des commandes et des aperçus nets des projets.",
    ),
  },
  {
    id: "1980s",
    label: l("1980s", "80. léta", "1980-е", "1980er", "Años 80", "Années 80"),
    short: l("CRT", "CRT", "ЭЛТ", "CRT", "CRT", "CRT"),
    description: l(
      "Terminal, BBS, monochrome glow, scanlines, and keyboard-first navigation.",
      "Terminál, BBS, monochromatická záře, scanlines a ovládání primárně klávesnicí.",
      "Терминал, BBS, монохромное свечение, скан-линии и навигация с клавиатуры.",
      "Terminal, BBS, monochromes Leuchten, Scanlines und Keyboard-First-Navigation.",
      "Terminal, BBS, brillo monocromo, scanlines y navegación centrada en el teclado.",
      "Terminal, BBS, lueur monochrome, scanlines et navigation clavier d'abord.",
    ),
  },
  {
    id: "1990s",
    label: l("1990s", "90. léta", "1990-е", "1990er", "Años 90", "Années 90"),
    short: l("HTML", "HTML", "HTML", "HTML", "HTML", "HTML"),
    description: l(
      "Early web energy with table rhythm, blue links, counters, and tiled texture.",
      "Energie raného webu s tabulkovým rytmem, modrými odkazy, počítadly a dlaždicovou texturou.",
      "Энергия раннего веба: табличный ритм, синие ссылки, счётчики и плиточная текстура.",
      "Frühe Web-Energie mit Tabellenrhythmus, blauen Links, Countern und gekachelter Textur.",
      "Energía de la web temprana con ritmo de tablas, enlaces azules, contadores y textura de mosaico.",
      "L'énergie du premier web : rythme de tableaux, liens bleus, compteurs et texture en mosaïque.",
    ),
  },
  {
    id: "2000s",
    label: l("2000s", "Nultá léta", "2000-е", "2000er", "Años 2000", "Années 2000"),
    short: l("Web 2.0", "Web 2.0", "Web 2.0", "Web 2.0", "Web 2.0", "Web 2.0"),
    description: l(
      "Glossy tabs, bright badges, product blocks, and optimistic software branding.",
      "Lesklé záložky, výrazné odznaky, produktové bloky a optimistický softwarový branding.",
      "Глянцевые вкладки, яркие бейджи, продуктовые блоки и оптимистичный софтверный брендинг.",
      "Glänzende Tabs, bunte Badges, Produktblöcke und optimistisches Software-Branding.",
      "Pestañas brillantes, insignias vivas, bloques de producto y branding de software optimista.",
      "Onglets brillants, badges vifs, blocs produit et branding logiciel optimiste.",
    ),
  },
  {
    id: "2010s",
    label: l("2010s", "10. léta", "2010-е", "2010er", "Años 2010", "Années 2010"),
    short: l("Flat", "Flat", "Флэт", "Flat", "Flat", "Flat"),
    description: l(
      "Flat startup clarity, spacious grids, simple icons, and restrained animation.",
      "Plochá startupová čistota, vzdušné mřížky, jednoduché ikony a zdrženlivá animace.",
      "Плоская стартап-чистота, просторные сетки, простые иконки и сдержанная анимация.",
      "Flache Startup-Klarheit, großzügige Grids, einfache Icons und zurückhaltende Animation.",
      "Claridad plana de startup, cuadrículas amplias, iconos simples y animación contenida.",
      "Clarté plate façon startup, grilles aérées, icônes simples et animation sobre.",
    ),
  },
  {
    id: "windows1",
    label: l("Windows 1", "Windows 1", "Windows 1", "Windows 1", "Windows 1", "Windows 1"),
    short: l("Win", "Win", "Win", "Win", "Win", "Win"),
    description: l(
      "A monochrome desktop with windows, menus, panels, and file-like project views.",
      "Monochromatická plocha s okny, nabídkami, panely a souborovými pohledy na projekty.",
      "Монохромный рабочий стол с окнами, меню, панелями и файловыми видами проектов.",
      "Ein monochromer Desktop mit Fenstern, Menüs, Panels und dateiartigen Projektansichten.",
      "Un escritorio monocromo con ventanas, menús, paneles y vistas de proyectos tipo archivo.",
      "Un bureau monochrome avec fenêtres, menus, panneaux et vues de projets façon fichiers.",
    ),
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
    href: "https://www.linkedin.com/in/danila-anikin-7aa950258",
    display: "linkedin.com/in/danila-anikin",
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
    title: "Ripieno",
    href: "https://www.ripieno.xyz/",
    image: "/projects/ripieno.png",
    eyebrow: l(
      "Autonomous AI dev platform",
      "Autonomní AI dev platforma",
      "Автономная AI dev-платформа",
      "Autonome AI-Dev-Plattform",
      "Plataforma AI de desarrollo autónomo",
      "Plateforme AI de dev autonome",
    ),
    description: l(
      "Commercial multi-agent orchestration platform that turns a project brief into a production-ready GitHub repository: agent teams plan, code, test, and deploy behind real quality gates.",
      "Komerční multi-agentní orchestrační platforma, která promění zadání v produkčně připravený GitHub repozitář: týmy agentů plánují, programují, testují a nasazují za reálnými quality gates.",
      "Коммерческая мультиагентная платформа оркестрации, превращающая бриф в production-ready GitHub-репозиторий: команды агентов планируют, пишут код, тестируют и деплоят через реальные quality gates.",
      "Kommerzielle Multi-Agent-Orchestrierungsplattform, die ein Briefing in ein produktionsreifes GitHub-Repository verwandelt: Agenten-Teams planen, programmieren, testen und deployen hinter echten Quality Gates.",
      "Plataforma comercial de orquestación multiagente que convierte un brief en un repositorio de GitHub listo para producción: equipos de agentes planifican, programan, prueban y despliegan tras quality gates reales.",
      "Plateforme commerciale d'orchestration multi-agents qui transforme un brief en dépôt GitHub prêt pour la production : des équipes d'agents planifient, codent, testent et déploient derrière de vraies quality gates.",
    ),
    impact: l(
      "Evaluation harness, per-role model selection, live cost metering, tests and SQL migrations gated before delivery.",
      "Evaluation harness, výběr modelu podle role, živé měření nákladů, testy a SQL migrace jako podmínka doručení.",
      "Evaluation harness, выбор модели под роль, живой учёт затрат, тесты и SQL-миграции как условие поставки.",
      "Evaluation-Harness, Modellwahl pro Rolle, Live-Kostenmessung, Tests und SQL-Migrationen als Lieferbedingung.",
      "Evaluation harness, selección de modelo por rol, medición de costes en vivo, tests y migraciones SQL como condición de entrega.",
      "Evaluation harness, choix du modèle par rôle, mesure des coûts en direct, tests et migrations SQL comme condition de livraison.",
    ),
    stack: ["TypeScript", "Next.js", "Supabase / PostgreSQL", "LLM APIs", "Railway", "Vercel"],
    accent: "coral",
  },
  {
    title: "Freio",
    href: "https://www.freio.cz/",
    image: "/projects/freio.png",
    eyebrow: l(
      "EdTech platform",
      "EdTech platforma",
      "EdTech-платформа",
      "EdTech-Plattform",
      "Plataforma EdTech",
      "Plateforme EdTech",
    ),
    description: l(
      "Preparation for entrance exams and SCIO tests with realistic tests, immediate evaluation, progress flow, and student-first pricing.",
      "Příprava na přijímací zkoušky a SCIO testy s realistickými testy, okamžitým vyhodnocením, sledováním pokroku a férovou cenou pro studenty.",
      "Подготовка к вступительным экзаменам и SCIO-тестам: реалистичные тесты, мгновенная проверка, трекинг прогресса и честные цены для студентов.",
      "Vorbereitung auf Aufnahmeprüfungen und SCIO-Tests mit realistischen Tests, sofortiger Auswertung, Fortschrittsverlauf und fairen Preisen für Studierende.",
      "Preparación para exámenes de acceso y tests SCIO con pruebas realistas, evaluación inmediata, seguimiento del progreso y precios pensados para estudiantes.",
      "Préparation aux concours d'entrée et tests SCIO avec des tests réalistes, une évaluation immédiate, un suivi de progression et des prix pensés pour les étudiants.",
    ),
    impact: l(
      "1,400 tests, 63,600 questions, 7 subjects, first test free.",
      "1 400 testů, 63 600 otázek, 7 předmětů, první test zdarma.",
      "1 400 тестов, 63 600 вопросов, 7 предметов, первый тест бесплатно.",
      "1.400 Tests, 63.600 Fragen, 7 Fächer, erster Test gratis.",
      "1.400 tests, 63.600 preguntas, 7 asignaturas, primer test gratis.",
      "1 400 tests, 63 600 questions, 7 matières, premier test gratuit.",
    ),
    stack: ["Product", "Education", "Testing", "Analytics", "Payments"],
    accent: "cyan",
  },
  {
    title: "Lokwave",
    href: "https://www.lokwave.cz/",
    image: "/projects/lokwave.png",
    eyebrow: l(
      "Local visibility engine",
      "Motor lokální viditelnosti",
      "Движок локальной видимости",
      "Engine für lokale Sichtbarkeit",
      "Motor de visibilidad local",
      "Moteur de visibilité locale",
    ),
    description: l(
      "One platform powering the whole NicheLocal family: AI-managed Google Business profiles, review responses, posts, and daily rank tracking, deployable to a new industry in days.",
      "Jedna platforma pohánějící celou rodinu NicheLocal: AI správa Google Business profilů, odpovědi na recenze, příspěvky a denní sledování pozic, nasaditelná do nového oboru během dnů.",
      "Одна платформа для всей семьи NicheLocal: AI-управление профилями Google Business, ответы на отзывы, посты и ежедневный трекинг позиций, разворачивается в новой нише за считанные дни.",
      "Eine Plattform für die gesamte NicheLocal-Familie: AI-verwaltete Google-Business-Profile, Antworten auf Bewertungen, Posts und tägliches Ranking-Tracking, in Tagen auf neue Branchen ausrollbar.",
      "Una plataforma que impulsa toda la familia NicheLocal: perfiles de Google Business gestionados por AI, respuestas a reseñas, publicaciones y seguimiento diario de posiciones, desplegable a un nuevo sector en días.",
      "Une plateforme qui propulse toute la famille NicheLocal : profils Google Business gérés par AI, réponses aux avis, publications et suivi quotidien des positions, déployable sur un nouveau secteur en quelques jours.",
    ),
    impact: l(
      "6 products in the family, 50+ active clients, 10,000+ reviews answered, 99.9% uptime.",
      "6 produktů v rodině, 50+ aktivních klientů, 10 000+ zodpovězených recenzí, 99,9% uptime.",
      "6 продуктов в семье, 50+ активных клиентов, 10 000+ отвеченных отзывов, uptime 99,9 %.",
      "6 Produkte in der Familie, 50+ aktive Kunden, 10.000+ beantwortete Bewertungen, 99,9 % Uptime.",
      "6 productos en la familia, 50+ clientes activos, 10.000+ reseñas respondidas, 99,9 % de uptime.",
      "6 produits dans la famille, 50+ clients actifs, 10 000+ avis traités, 99,9 % d'uptime.",
    ),
    stack: ["AI automation", "Google Business API", "SaaS", "Multi-tenant", "Local SEO"],
    accent: "violet",
  },
  {
    title: "NicheLocal Suite",
    href: "https://dentallocal.cz/",
    image: "/projects/localsuite.png",
    eyebrow: l(
      "6 vertical SaaS brands",
      "6 oborových SaaS značek",
      "6 отраслевых SaaS-брендов",
      "6 vertikale SaaS-Marken",
      "6 marcas SaaS verticales",
      "6 marques SaaS verticales",
    ),
    description: l(
      "Six niche products on the Lokwave engine — DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal, and FitLocal — each an AI Google-profile manager tailored to one Czech industry.",
      "Šest oborových produktů na motoru Lokwave — DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal a FitLocal — každý je AI správce Google profilu šitý na míru jednomu českému oboru.",
      "Шесть нишевых продуктов на движке Lokwave — DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal и FitLocal — каждый — AI-менеджер Google-профиля под конкретную чешскую отрасль.",
      "Sechs Nischenprodukte auf der Lokwave-Engine — DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal und FitLocal — jedes ein AI-Google-Profil-Manager für eine tschechische Branche.",
      "Seis productos de nicho sobre el motor Lokwave — DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal y FitLocal — cada uno un gestor AI de perfiles de Google a medida de un sector checo.",
      "Six produits de niche sur le moteur Lokwave — DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal et FitLocal — chacun un gestionnaire AI de profil Google taillé pour un secteur tchèque.",
    ),
    impact: l(
      "AI review replies with human approval, 4–8 posts a month, daily rank tracking, competitor analysis, monthly PDF reports.",
      "AI odpovědi na recenze se schválením člověkem, 4–8 příspěvků měsíčně, denní sledování pozic, analýza konkurence, měsíční PDF reporty.",
      "AI-ответы на отзывы с одобрением человека, 4–8 постов в месяц, ежедневный трекинг позиций, анализ конкурентов, ежемесячные PDF-отчёты.",
      "AI-Antworten auf Bewertungen mit menschlicher Freigabe, 4–8 Posts pro Monat, tägliches Ranking-Tracking, Wettbewerbsanalyse, monatliche PDF-Reports.",
      "Respuestas AI a reseñas con aprobación humana, 4–8 publicaciones al mes, seguimiento diario de posiciones, análisis de competencia, informes PDF mensuales.",
      "Réponses AI aux avis avec validation humaine, 4–8 publications par mois, suivi quotidien des positions, analyse concurrentielle, rapports PDF mensuels.",
    ),
    stack: ["DentalLocal", "AutoLocal", "VetLocal", "BistroLocal", "SalonLocal", "FitLocal"],
    accent: "blue",
  },
  {
    title: "GorillaType",
    href: "https://gorilla-type-orpin.vercel.app/",
    image: "/projects/gorillatype.png",
    eyebrow: l(
      "Typing speed app",
      "Aplikace na rychlost psaní",
      "Приложение для скорости печати",
      "Tipp-Geschwindigkeits-App",
      "App de velocidad de escritura",
      "App de vitesse de frappe",
    ),
    description: l(
      "A focused typing-speed experience with time modes, word modes, quotes, settings, leaderboards, tournaments, clans, and account flows.",
      "Soustředěný trénink rychlosti psaní s časovými režimy, režimy slov, citáty, nastavením, žebříčky, turnaji, klany a uživatelskými účty.",
      "Сфокусированный тренажёр скорости печати: режимы времени и слов, цитаты, настройки, таблицы лидеров, турниры, кланы и аккаунты.",
      "Ein fokussiertes Tipp-Erlebnis mit Zeitmodi, Wortmodi, Zitaten, Einstellungen, Bestenlisten, Turnieren, Clans und Account-Flows.",
      "Una experiencia de mecanografía enfocada con modos de tiempo, modos de palabras, citas, ajustes, clasificaciones, torneos, clanes y cuentas.",
      "Une expérience de frappe ciblée avec modes de temps, modes de mots, citations, réglages, classements, tournois, clans et comptes utilisateurs.",
    ),
    impact: l(
      "Fast practice loop with competitive and social typing mechanics.",
      "Rychlá tréninková smyčka se soutěžními a sociálními mechanikami psaní.",
      "Быстрый цикл практики с соревновательными и социальными механиками.",
      "Schnelle Übungsschleife mit kompetitiven und sozialen Mechaniken.",
      "Ciclo de práctica rápido con mecánicas competitivas y sociales.",
      "Boucle d'entraînement rapide avec des mécaniques compétitives et sociales.",
    ),
    stack: ["Next.js", "Typing UX", "Realtime UI", "Gamification", "Auth"],
    accent: "yellow",
  },
  {
    title: "Daylink",
    href: "https://github.com/DanilaAnikin/Daylink_android_app",
    image: "/projects/daylink.png",
    eyebrow: l(
      "Android AI voice assistant",
      "Android AI hlasový asistent",
      "Android AI-голосовой ассистент",
      "Android-AI-Sprachassistent",
      "Asistente de voz AI para Android",
      "Assistant vocal AI pour Android",
    ),
    description: l(
      "Multiplatform AI voice assistant for Android with offline text-to-speech and AES-256-GCM encrypted data, built in Kotlin as a secondary-school thesis project.",
      "Multiplatformní AI hlasový asistent pro Android s offline převodem textu na řeč a daty šifrovanými AES-256-GCM, napsaný v Kotlinu jako středoškolská maturitní práce.",
      "Мультиплатформенный AI-голосовой ассистент для Android с офлайн-синтезом речи и шифрованием данных AES-256-GCM, написан на Kotlin как выпускной школьный проект.",
      "Multiplattform-AI-Sprachassistent für Android mit Offline-Text-to-Speech und AES-256-GCM-verschlüsselten Daten, in Kotlin als Abitur-Abschlussprojekt gebaut.",
      "Asistente de voz AI multiplataforma para Android con texto a voz sin conexión y datos cifrados con AES-256-GCM, escrito en Kotlin como proyecto de tesis de secundaria.",
      "Assistant vocal AI multiplateforme pour Android avec synthèse vocale hors ligne et données chiffrées en AES-256-GCM, écrit en Kotlin comme projet de fin d'études secondaires.",
    ),
    impact: l(
      "Open source on GitHub — the card opens the repository.",
      "Open source na GitHubu — karta otevře repozitář.",
      "Open source на GitHub — карточка открывает репозиторий.",
      "Open Source auf GitHub — die Karte öffnet das Repository.",
      "Código abierto en GitHub — la tarjeta abre el repositorio.",
      "Open source sur GitHub — la carte ouvre le dépôt.",
    ),
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Offline TTS", "AES-256-GCM"],
    accent: "green",
  },
];

export const experience = [
  {
    company: "Cloudinfrastack",
    role: l(
      "Software Engineer, Android Developer & Linux System Administrator",
      "Software Engineer, Android vývojář a správce Linux systémů",
      "Software Engineer, Android-разработчик и администратор Linux",
      "Software Engineer, Android-Entwickler & Linux-Systemadministrator",
      "Software Engineer, desarrollador Android y administrador de sistemas Linux",
      "Software Engineer, développeur Android et administrateur systèmes Linux",
    ),
    kind: l("Cloud / Linux / AI", "Cloud / Linux / AI", "Cloud / Linux / AI", "Cloud / Linux / AI", "Cloud / Linux / AI", "Cloud / Linux / AI"),
    points: [
      l(
        "Cloud infrastructure, Android delivery, Linux administration, and AI automation.",
        "Cloudová infrastruktura, vývoj pro Android, správa Linuxu a AI automatizace.",
        "Облачная инфраструктура, Android-разработка, администрирование Linux и AI-автоматизация.",
        "Cloud-Infrastruktur, Android-Delivery, Linux-Administration und AI-Automatisierung.",
        "Infraestructura cloud, desarrollo Android, administración de Linux y automatización con AI.",
        "Infrastructure cloud, développement Android, administration Linux et automatisation AI.",
      ),
    ],
    stack: ["Linux", "Kubernetes", "AWS", "Android", "AI automation"],
  },
  {
    company: "Outlier",
    role: l(
      "AI Training & Software Developer",
      "AI Training & Software Developer",
      "AI Training & Software Developer",
      "AI Training & Software Developer",
      "AI Training & Software Developer",
      "AI Training & Software Developer",
    ),
    kind: l("AI evaluation", "AI evaluace", "AI-оценка", "AI-Evaluation", "Evaluación de AI", "Évaluation AI"),
    points: [
      l(
        "AI model evaluation focused on correctness, reasoning, and code quality.",
        "Evaluace AI modelů zaměřená na správnost, uvažování a kvalitu kódu.",
        "Оценка AI-моделей с фокусом на корректность, рассуждения и качество кода.",
        "AI-Modell-Evaluation mit Fokus auf Korrektheit, Reasoning und Codequalität.",
        "Evaluación de modelos de AI centrada en corrección, razonamiento y calidad del código.",
        "Évaluation de modèles AI axée sur la justesse, le raisonnement et la qualité du code.",
      ),
    ],
    stack: ["AI training", "Code review", "Evaluation", "Reasoning"],
  },
  {
    company: "Freelance",
    role: l(
      "Software Developer",
      "Software Developer",
      "Software Developer",
      "Software Developer",
      "Software Developer",
      "Software Developer",
    ),
    kind: l("Client delivery", "Zakázkový vývoj", "Работа с клиентами", "Kundenprojekte", "Entrega a clientes", "Livraison client"),
    points: [
      l(
        "Full-stack client work from requirements to deployment.",
        "Full-stack zakázky od požadavků po nasazení.",
        "Full-stack проекты для клиентов: от требований до деплоя.",
        "Full-Stack-Kundenarbeit von den Anforderungen bis zum Deployment.",
        "Trabajo full-stack para clientes, de los requisitos al despliegue.",
        "Projets full-stack pour clients, des exigences au déploiement.",
      ),
    ],
    stack: ["React", "TypeScript", "Node.js", "Product UX"],
  },
  {
    company: "DENEVY / juno.one",
    role: l(
      "Frontend Developer",
      "Frontend Developer",
      "Frontend Developer",
      "Frontend Developer",
      "Frontend Developer",
      "Frontend Developer",
    ),
    kind: l("Product frontend", "Produktový frontend", "Продуктовый фронтенд", "Produkt-Frontend", "Frontend de producto", "Frontend produit"),
    points: [
      l(
        "TypeScript product UI built with maintainable component architecture.",
        "Produktové UI v TypeScriptu postavené na udržovatelné komponentové architektuře.",
        "Продуктовый UI на TypeScript с поддерживаемой компонентной архитектурой.",
        "Produkt-UI in TypeScript mit wartbarer Komponentenarchitektur.",
        "UI de producto en TypeScript con una arquitectura de componentes mantenible.",
        "UI produit en TypeScript avec une architecture de composants maintenable.",
      ),
    ],
    stack: ["TypeScript", "Frontend", "Components", "Product"],
  },
  {
    company: "Dům dětí a mládeže Stodůlky",
    role: l(
      "Robotics Lector",
      "Lektor robotiky",
      "Преподаватель робототехники",
      "Robotik-Dozent",
      "Profesor de robótica",
      "Formateur en robotique",
    ),
    kind: l("Teaching", "Výuka", "Преподавание", "Lehre", "Enseñanza", "Enseignement"),
    points: [
      l(
        "Programming and robotics taught through practical exercises.",
        "Výuka programování a robotiky skrze praktická cvičení.",
        "Обучение программированию и робототехнике через практические упражнения.",
        "Programmierung und Robotik durch praktische Übungen vermittelt.",
        "Programación y robótica enseñadas mediante ejercicios prácticos.",
        "Programmation et robotique enseignées par des exercices pratiques.",
      ),
    ],
    stack: ["Robotics", "Programming", "Teaching", "Communication"],
  },
];

export const skillGroups = [
  {
    title: l("AI Engineering", "AI inženýrství", "AI-инжиниринг", "AI-Engineering", "Ingeniería de AI", "Ingénierie AI"),
    icon: BrainCircuit,
    skills: ["LLM apps", "AI automation", "Prompt systems", "Agents", "Vector search", "Tool use"],
  },
  {
    title: l("Software Engineering", "Softwarové inženýrství", "Разработка ПО", "Software-Engineering", "Ingeniería de software", "Génie logiciel"),
    icon: Code2,
    skills: ["TypeScript", "React", "Next.js", "Python", "APIs", "Architecture"],
  },
  {
    title: l("Automation", "Automatizace", "Автоматизация", "Automatisierung", "Automatización", "Automatisation"),
    icon: Workflow,
    skills: ["Workflows", "Scripts", "Integrations", "Data pipelines", "Bots", "Ops tooling"],
  },
  {
    title: l("Linux Administration", "Správa Linuxu", "Администрирование Linux", "Linux-Administration", "Administración de Linux", "Administration Linux"),
    icon: TerminalSquare,
    skills: ["Shell", "systemd", "Networking", "Permissions", "Servers", "Hardening"],
  },
  {
    title: l("DevOps", "DevOps", "DevOps", "DevOps", "DevOps", "DevOps"),
    icon: Container,
    skills: ["Docker", "CI/CD", "GitHub Actions", "Vercel", "Deployments", "Monitoring"],
  },
  {
    title: l("Systems Thinking", "Systémové myšlení", "Системное мышление", "Systemdenken", "Pensamiento sistémico", "Pensée systémique"),
    icon: Cpu,
    skills: ["Debugging", "Performance", "Security", "Databases", "Reliability", "Documentation"],
  },
];

export const systemSignals = [
  {
    label: l("Portfolio OS", "Portfolio OS", "Portfolio OS", "Portfolio OS", "Portfolio OS", "Portfolio OS"),
    value: l("AI / DevOps / Software", "AI / DevOps / Software", "AI / DevOps / Software", "AI / DevOps / Software", "AI / DevOps / Software", "AI / DevOps / Software"),
    detail: l(
      "A product-style portfolio with modes, command controls, proof layers, and project intelligence.",
      "Produktově pojaté portfolio s režimy, příkazovým ovládáním, vrstvami důkazů a projektovou inteligencí.",
      "Портфолио в духе продукта: режимы, командное управление, слои доказательств и проектная аналитика.",
      "Ein produktartiges Portfolio mit Modi, Kommandosteuerung, Beweisebenen und Projektintelligenz.",
      "Un portfolio con enfoque de producto: modos, controles de comandos, capas de evidencia e inteligencia de proyectos.",
      "Un portfolio façon produit : modes, commandes, couches de preuves et intelligence projet.",
    ),
  },
  {
    label: l("Delivery", "Doručování", "Доставка", "Delivery", "Entrega", "Livraison"),
    value: l("Vercel + GitHub", "Vercel + GitHub", "Vercel + GitHub", "Vercel + GitHub", "Vercel + GitHub", "Vercel + GitHub"),
    detail: l(
      "Designed for fast static delivery, clean repository workflow, and continuous iteration.",
      "Navrženo pro rychlé statické doručování, čistý workflow repozitáře a průběžnou iteraci.",
      "Спроектировано для быстрой статической доставки, чистого workflow репозитория и постоянных итераций.",
      "Ausgelegt auf schnelle statische Auslieferung, sauberen Repository-Workflow und kontinuierliche Iteration.",
      "Diseñado para una entrega estática rápida, un flujo de repositorio limpio e iteración continua.",
      "Conçu pour une livraison statique rapide, un workflow de dépôt propre et une itération continue.",
    ),
  },
  {
    label: l("Automation", "Automatizace", "Автоматизация", "Automatisierung", "Automatización", "Automatisation"),
    value: l("AI workflows", "AI workflows", "AI workflows", "AI workflows", "AI workflows", "AI workflows"),
    detail: l(
      "Focused on replacing repetitive manual work with scripts, integrations, and model-assisted systems.",
      "Zaměřeno na nahrazování opakované ruční práce skripty, integracemi a systémy s podporou modelů.",
      "Фокус на замене повторяющейся ручной работы скриптами, интеграциями и системами на основе моделей.",
      "Fokus darauf, wiederkehrende Handarbeit durch Skripte, Integrationen und modellgestützte Systeme zu ersetzen.",
      "Centrado en sustituir el trabajo manual repetitivo con scripts, integraciones y sistemas asistidos por modelos.",
      "Axé sur le remplacement du travail manuel répétitif par des scripts, des intégrations et des systèmes assistés par modèles.",
    ),
  },
  {
    label: l("Location", "Lokalita", "Локация", "Standort", "Ubicación", "Localisation"),
    value: l("Prague", "Praha", "Прага", "Prag", "Praga", "Prague"),
    detail: l(
      "Multilingual profile for English, Czech, Russian, German, Spanish, and French audiences.",
      "Vícejazyčný profil pro anglické, české, ruské, německé, španělské a francouzské publikum.",
      "Мультиязычный профиль для англо-, чешско-, русско-, немецко-, испано- и франкоязычной аудитории.",
      "Mehrsprachiges Profil für englisches, tschechisches, russisches, deutsches, spanisches und französisches Publikum.",
      "Perfil multilingüe para audiencias en inglés, checo, ruso, alemán, español y francés.",
      "Profil multilingue pour un public anglophone, tchèque, russe, allemand, hispanophone et francophone.",
    ),
  },
];

export const copilotPrompts = [
  {
    question: l(
      "What can Danila build?",
      "Co umí Danila postavit?",
      "Что умеет строить Данила?",
      "Was kann Danila bauen?",
      "¿Qué puede construir Danila?",
      "Que peut construire Danila ?",
    ),
    keywords: ["build", "software", "fullstack", "product", "web", "app", "postavit", "umí"],
    answer: l(
      "Danila builds practical software across AI automation, web products, Linux infrastructure, DevOps workflows, and product-focused frontend systems.",
      "Danila staví praktický software napříč AI automatizací, webovými produkty, Linux infrastrukturou, DevOps workflow a produktově zaměřenými frontend systémy.",
      "Данила создаёт практичный софт: AI-автоматизация, веб-продукты, Linux-инфраструктура, DevOps-процессы и продуктовые фронтенд-системы.",
      "Danila baut praktische Software: AI-Automatisierung, Webprodukte, Linux-Infrastruktur, DevOps-Workflows und produktorientierte Frontend-Systeme.",
      "Danila construye software práctico: automatización con AI, productos web, infraestructura Linux, flujos DevOps y sistemas frontend orientados a producto.",
      "Danila construit des logiciels pratiques : automatisation AI, produits web, infrastructure Linux, workflows DevOps et systèmes frontend orientés produit.",
    ),
    links: ["Ripieno", "Lokwave", "Interactive CV"],
  },
  {
    question: l(
      "Where is the strongest AI signal?",
      "Kde je nejsilnější AI signál?",
      "Где самый сильный AI-сигнал?",
      "Wo ist das stärkste AI-Signal?",
      "¿Dónde está la señal de AI más fuerte?",
      "Où est le signal AI le plus fort ?",
    ),
    keywords: ["ai", "llm", "model", "automation", "agents", "evaluation", "signál"],
    answer: l(
      "The strongest AI signal is Ripieno — a commercial multi-agent orchestration platform — combined with AI model evaluation at Outlier, AI automation at Cloudinfrastack, and the AI-managed Lokwave product family.",
      "Nejsilnější AI signál je Ripieno — komerční multi-agentní orchestrační platforma — spolu s evaluací AI modelů v Outlier, AI automatizací v Cloudinfrastack a AI řízenou produktovou rodinou Lokwave.",
      "Самый сильный AI-сигнал — Ripieno, коммерческая мультиагентная платформа оркестрации, плюс оценка AI-моделей в Outlier, AI-автоматизация в Cloudinfrastack и AI-управляемая семья продуктов Lokwave.",
      "Das stärkste AI-Signal ist Ripieno — eine kommerzielle Multi-Agent-Orchestrierungsplattform — zusammen mit AI-Modell-Evaluation bei Outlier, AI-Automatisierung bei Cloudinfrastack und der AI-verwalteten Lokwave-Produktfamilie.",
      "La señal de AI más fuerte es Ripieno — una plataforma comercial de orquestación multiagente — junto con la evaluación de modelos en Outlier, la automatización en Cloudinfrastack y la familia de productos Lokwave gestionada por AI.",
      "Le signal AI le plus fort est Ripieno — une plateforme commerciale d'orchestration multi-agents — avec l'évaluation de modèles chez Outlier, l'automatisation AI chez Cloudinfrastack et la famille de produits Lokwave gérée par AI.",
    ),
    links: ["Ripieno", "Proof mode", "AI Engineering"],
  },
  {
    question: l(
      "Why should a team trust the engineering range?",
      "Proč věřit šíři engineeringu?",
      "Почему стоит доверять инженерному диапазону?",
      "Warum dem Engineering-Spektrum vertrauen?",
      "¿Por qué confiar en el rango de ingeniería?",
      "Pourquoi faire confiance à l'étendue technique ?",
    ),
    keywords: ["trust", "experience", "range", "devops", "linux", "frontend", "věřit"],
    answer: l(
      "The range is backed by real work across Linux administration, Android delivery, frontend product development, freelance software delivery, robotics teaching, and AI evaluation.",
      "Šíře je podložená reálnou prací napříč správou Linuxu, vývojem pro Android, produktovým frontendem, freelance zakázkami, výukou robotiky a AI evaluací.",
      "Диапазон подтверждён реальной работой: администрирование Linux, Android-разработка, продуктовый фронтенд, freelance-проекты, преподавание робототехники и AI-оценка.",
      "Das Spektrum ist durch echte Arbeit belegt: Linux-Administration, Android-Delivery, Produkt-Frontend, Freelance-Projekte, Robotik-Lehre und AI-Evaluation.",
      "El rango está respaldado por trabajo real: administración de Linux, desarrollo Android, frontend de producto, proyectos freelance, enseñanza de robótica y evaluación de AI.",
      "L'étendue est étayée par un travail réel : administration Linux, développement Android, frontend produit, missions freelance, enseignement de la robotique et évaluation AI.",
    ),
    links: ["Experience", "Skill graph", "System status"],
  },
  {
    question: l(
      "Which projects should I inspect first?",
      "Které projekty si prohlédnout jako první?",
      "Какие проекты посмотреть в первую очередь?",
      "Welche Projekte zuerst ansehen?",
      "¿Qué proyectos revisar primero?",
      "Quels projets consulter en premier ?",
    ),
    keywords: ["project", "ripieno", "lokwave", "local", "freio", "gorillatype", "daylink", "preview", "portfolio", "projekt"],
    answer: l(
      "Start with Ripieno, the commercial multi-agent AI platform. Then Lokwave and the NicheLocal suite for shipped B2B SaaS with real clients, Freio for EdTech product thinking, GorillaType for typing UX, and Daylink for Android engineering.",
      "Začni Ripienem, komerční multi-agentní AI platformou. Pak Lokwave a rodinou NicheLocal jako nasazeným B2B SaaS s reálnými klienty, Freio pro EdTech produktové myšlení, GorillaType pro typing UX a Daylink pro Android engineering.",
      "Начни с Ripieno — коммерческой мультиагентной AI-платформы. Затем Lokwave и семья NicheLocal — работающий B2B SaaS с реальными клиентами, Freio — EdTech-продукт, GorillaType — typing UX, Daylink — Android-инжиниринг.",
      "Beginne mit Ripieno, der kommerziellen Multi-Agent-AI-Plattform. Dann Lokwave und die NicheLocal-Familie als ausgeliefertes B2B-SaaS mit echten Kunden, Freio für EdTech-Produktdenken, GorillaType für Typing-UX und Daylink für Android-Engineering.",
      "Empieza con Ripieno, la plataforma comercial de AI multiagente. Luego Lokwave y la familia NicheLocal como SaaS B2B con clientes reales, Freio para producto EdTech, GorillaType para typing UX y Daylink para ingeniería Android.",
      "Commence par Ripieno, la plateforme AI multi-agents commerciale. Puis Lokwave et la famille NicheLocal, un SaaS B2B livré avec de vrais clients, Freio pour le produit EdTech, GorillaType pour l'UX de frappe et Daylink pour l'ingénierie Android.",
    ),
    links: ["Ripieno", "Lokwave", "NicheLocal Suite"],
  },
];

export const terminalCommands = [
  {
    command: "whoami",
    description: l("Identity summary", "Shrnutí identity", "Кто я", "Identitätsprofil", "Resumen de identidad", "Résumé d'identité"),
    output: [
      l(
        "danila@portfolio: Prague-based software developer",
        "danila@portfolio: softwarový vývojář z Prahy",
        "danila@portfolio: разработчик ПО из Праги",
        "danila@portfolio: Softwareentwickler aus Prag",
        "danila@portfolio: desarrollador de software en Praga",
        "danila@portfolio : développeur logiciel à Prague",
      ),
      l(
        "focus: AI systems, automation, infrastructure, DevOps, product software",
        "zaměření: AI systémy, automatizace, infrastruktura, DevOps, produktový software",
        "фокус: AI-системы, автоматизация, инфраструктура, DevOps, продуктовый софт",
        "Fokus: AI-Systeme, Automatisierung, Infrastruktur, DevOps, Produktsoftware",
        "enfoque: sistemas AI, automatización, infraestructura, DevOps, software de producto",
        "focus : systèmes AI, automatisation, infrastructure, DevOps, logiciel produit",
      ),
      l(
        "languages: EN, CS, RU, DE, ES, FR",
        "jazyky: EN, CS, RU, DE, ES, FR",
        "языки: EN, CS, RU, DE, ES, FR",
        "Sprachen: EN, CS, RU, DE, ES, FR",
        "idiomas: EN, CS, RU, DE, ES, FR",
        "langues : EN, CS, RU, DE, ES, FR",
      ),
    ],
  },
  {
    command: "skills --ai",
    description: l("AI engineering signal", "AI inženýrský signál", "AI-инженерный сигнал", "AI-Engineering-Signal", "Señal de ingeniería AI", "Signal d'ingénierie AI"),
    output: [
      l(
        "LLM apps, AI automation, prompt systems, agents, vector search, tool use",
        "LLM aplikace, AI automatizace, prompt systémy, agenti, vektorové vyhledávání, tool use",
        "LLM-приложения, AI-автоматизация, prompt-системы, агенты, векторный поиск, tool use",
        "LLM-Apps, AI-Automatisierung, Prompt-Systeme, Agenten, Vektorsuche, Tool Use",
        "Apps LLM, automatización AI, sistemas de prompts, agentes, búsqueda vectorial, tool use",
        "Apps LLM, automatisation AI, systèmes de prompts, agents, recherche vectorielle, tool use",
      ),
      l(
        "model evaluation: correctness, reasoning, code quality, task quality",
        "evaluace modelů: správnost, uvažování, kvalita kódu, kvalita úloh",
        "оценка моделей: корректность, рассуждения, качество кода и задач",
        "Modell-Evaluation: Korrektheit, Reasoning, Code- und Aufgabenqualität",
        "evaluación de modelos: corrección, razonamiento, calidad de código y de tareas",
        "évaluation de modèles : justesse, raisonnement, qualité du code et des tâches",
      ),
      l(
        "preferred style: practical systems that reduce manual work",
        "preferovaný styl: praktické systémy, které snižují ruční práci",
        "стиль: практичные системы, сокращающие ручную работу",
        "bevorzugter Stil: praktische Systeme, die Handarbeit reduzieren",
        "estilo preferido: sistemas prácticos que reducen el trabajo manual",
        "style préféré : des systèmes pratiques qui réduisent le travail manuel",
      ),
    ],
  },
  {
    command: "projects --best",
    description: l("Selected project index", "Index vybraných projektů", "Индекс избранных проектов", "Index ausgewählter Projekte", "Índice de proyectos seleccionados", "Index des projets sélectionnés"),
    output: [
      l(
        "Ripieno: commercial multi-agent AI platform that ships production-ready repos",
        "Ripieno: komerční multi-agentní AI platforma doručující produkčně připravené repozitáře",
        "Ripieno: коммерческая мультиагентная AI-платформа, поставляющая production-ready репозитории",
        "Ripieno: kommerzielle Multi-Agent-AI-Plattform, die produktionsreife Repos liefert",
        "Ripieno: plataforma comercial de AI multiagente que entrega repos listos para producción",
        "Ripieno : plateforme AI multi-agents commerciale qui livre des dépôts prêts pour la production",
      ),
      l(
        "Lokwave + NicheLocal: one engine, six vertical SaaS brands, 50+ active clients",
        "Lokwave + NicheLocal: jeden motor, šest oborových SaaS značek, 50+ aktivních klientů",
        "Lokwave + NicheLocal: один движок, шесть отраслевых SaaS-брендов, 50+ активных клиентов",
        "Lokwave + NicheLocal: eine Engine, sechs vertikale SaaS-Marken, 50+ aktive Kunden",
        "Lokwave + NicheLocal: un motor, seis marcas SaaS verticales, 50+ clientes activos",
        "Lokwave + NicheLocal : un moteur, six marques SaaS verticales, 50+ clients actifs",
      ),
      l(
        "also: Freio (EdTech), GorillaType (typing UX), Daylink (Android AI assistant)",
        "dále: Freio (EdTech), GorillaType (typing UX), Daylink (Android AI asistent)",
        "также: Freio (EdTech), GorillaType (typing UX), Daylink (Android AI-ассистент)",
        "außerdem: Freio (EdTech), GorillaType (Typing-UX), Daylink (Android-AI-Assistent)",
        "también: Freio (EdTech), GorillaType (typing UX), Daylink (asistente AI Android)",
        "aussi : Freio (EdTech), GorillaType (UX de frappe), Daylink (assistant AI Android)",
      ),
    ],
  },
  {
    command: "experience --devops",
    description: l("Infrastructure track", "Infrastrukturní stopa", "Инфраструктурный трек", "Infrastruktur-Track", "Trayectoria de infraestructura", "Parcours infrastructure"),
    output: [
      l(
        "Cloudinfrastack: cloud infrastructure, Linux administration, Android delivery, AI automation",
        "Cloudinfrastack: cloudová infrastruktura, správa Linuxu, vývoj pro Android, AI automatizace",
        "Cloudinfrastack: облачная инфраструктура, администрирование Linux, Android-разработка, AI-автоматизация",
        "Cloudinfrastack: Cloud-Infrastruktur, Linux-Administration, Android-Delivery, AI-Automatisierung",
        "Cloudinfrastack: infraestructura cloud, administración de Linux, desarrollo Android, automatización AI",
        "Cloudinfrastack : infrastructure cloud, administration Linux, développement Android, automatisation AI",
      ),
      l(
        "tooling: Linux, Kubernetes, AWS, Docker, CI/CD, Vercel, GitHub Actions",
        "nástroje: Linux, Kubernetes, AWS, Docker, CI/CD, Vercel, GitHub Actions",
        "инструменты: Linux, Kubernetes, AWS, Docker, CI/CD, Vercel, GitHub Actions",
        "Tooling: Linux, Kubernetes, AWS, Docker, CI/CD, Vercel, GitHub Actions",
        "herramientas: Linux, Kubernetes, AWS, Docker, CI/CD, Vercel, GitHub Actions",
        "outils : Linux, Kubernetes, AWS, Docker, CI/CD, Vercel, GitHub Actions",
      ),
      l(
        "operating model: reliable systems, repeatable deployments, clear observability",
        "provozní model: spolehlivé systémy, opakovatelná nasazení, jasná observabilita",
        "модель работы: надёжные системы, воспроизводимые деплои, ясная наблюдаемость",
        "Betriebsmodell: zuverlässige Systeme, wiederholbare Deployments, klare Observability",
        "modelo operativo: sistemas fiables, despliegues repetibles, observabilidad clara",
        "modèle opérationnel : systèmes fiables, déploiements reproductibles, observabilité claire",
      ),
    ],
  },
  {
    command: "proof --show",
    description: l("Evidence mode", "Režim důkazů", "Режим доказательств", "Beweis-Modus", "Modo de evidencia", "Mode preuves"),
    output: [
      l(
        "proof mode: project impact, work history, stack range, multilingual communication",
        "proof mode: dopad projektů, pracovní historie, šíře stacku, vícejazyčná komunikace",
        "proof mode: эффект проектов, история работы, широта стека, мультиязычная коммуникация",
        "Proof Mode: Projektwirkung, Arbeitshistorie, Stack-Breite, mehrsprachige Kommunikation",
        "proof mode: impacto de proyectos, historial laboral, rango del stack, comunicación multilingüe",
        "proof mode : impact des projets, parcours, étendue du stack, communication multilingue",
      ),
      l(
        "sources: CV data, live projects, public repository, live deployed portfolio",
        "zdroje: data z CV, živé projekty, veřejný repozitář, nasazené portfolio",
        "источники: данные CV, работающие проекты, публичный репозиторий, задеплоенное портфолио",
        "Quellen: CV-Daten, Live-Projekte, öffentliches Repository, deploytes Portfolio",
        "fuentes: datos del CV, proyectos en vivo, repositorio público, portfolio desplegado",
        "sources : données du CV, projets en ligne, dépôt public, portfolio déployé",
      ),
      l(
        "signal: implementation first, not just presentation",
        "signál: nejdřív implementace, ne jen prezentace",
        "сигнал: сначала реализация, а не только презентация",
        "Signal: Implementierung zuerst, nicht nur Präsentation",
        "señal: primero la implementación, no solo la presentación",
        "signal : l'implémentation d'abord, pas seulement la présentation",
      ),
    ],
  },
  {
    command: "cv --interactive",
    description: l("CV explorer", "Průzkumník CV", "Обзор CV", "CV-Explorer", "Explorador de CV", "Explorateur de CV"),
    output: [
      l(
        "interactive CV: filter by AI, frontend, infrastructure, product, teaching",
        "interaktivní CV: filtrování podle AI, frontendu, infrastruktury, produktu, výuky",
        "интерактивное CV: фильтры AI, фронтенд, инфраструктура, продукт, преподавание",
        "interaktives CV: Filter nach AI, Frontend, Infrastruktur, Produkt, Lehre",
        "CV interactivo: filtra por AI, frontend, infraestructura, producto, enseñanza",
        "CV interactif : filtres AI, frontend, infrastructure, produit, enseignement",
      ),
      l(
        "pdf: /cv/danila-anikin-cv.pdf remains available for recruiters and offline review",
        "pdf: /cv/danila-anikin-cv.pdf zůstává k dispozici pro recruitery a offline čtení",
        "pdf: /cv/danila-anikin-cv.pdf доступен рекрутерам и для офлайн-просмотра",
        "pdf: /cv/danila-anikin-cv.pdf bleibt für Recruiter und Offline-Review verfügbar",
        "pdf: /cv/danila-anikin-cv.pdf sigue disponible para recruiters y revisión offline",
        "pdf : /cv/danila-anikin-cv.pdf reste disponible pour les recruteurs et la lecture hors ligne",
      ),
      l(
        "best path: inspect filters, then download PDF if needed",
        "nejlepší cesta: projít filtry a případně stáhnout PDF",
        "лучший путь: пройтись по фильтрам, затем при необходимости скачать PDF",
        "bester Weg: Filter ansehen, bei Bedarf PDF herunterladen",
        "mejor ruta: revisar los filtros y descargar el PDF si hace falta",
        "meilleur chemin : parcourir les filtres, puis télécharger le PDF si besoin",
      ),
    ],
  },
];

export const proofSignals = [
  {
    label: l("Live products", "Živé produkty", "Живые продукты", "Live-Produkte", "Productos en vivo", "Produits en ligne"),
    value: l("6 selected", "6 vybraných", "6 избранных", "6 ausgewählt", "6 seleccionados", "6 sélectionnés"),
    detail: l(
      "Ripieno, Lokwave with the NicheLocal suite, Freio, GorillaType, and Daylink show commercial AI platforms, shipped B2B SaaS, product judgment, and real interaction quality.",
      "Ripieno, Lokwave s rodinou NicheLocal, Freio, GorillaType a Daylink ukazují komerční AI platformy, nasazený B2B SaaS, produktový úsudek a reálnou kvalitu interakce.",
      "Ripieno, Lokwave с семьёй NicheLocal, Freio, GorillaType и Daylink показывают коммерческие AI-платформы, работающий B2B SaaS, продуктовое мышление и реальное качество взаимодействия.",
      "Ripieno, Lokwave mit der NicheLocal-Familie, Freio, GorillaType und Daylink zeigen kommerzielle AI-Plattformen, ausgeliefertes B2B-SaaS, Produkturteil und echte Interaktionsqualität.",
      "Ripieno, Lokwave con la familia NicheLocal, Freio, GorillaType y Daylink muestran plataformas AI comerciales, SaaS B2B entregado, criterio de producto y calidad real de interacción.",
      "Ripieno, Lokwave avec la famille NicheLocal, Freio, GorillaType et Daylink montrent des plateformes AI commerciales, un SaaS B2B livré, un jugement produit et une vraie qualité d'interaction.",
    ),
    tags: ["Ripieno", "Lokwave", "NicheLocal", "Freio", "GorillaType", "Daylink"],
  },
  {
    label: l("Work range", "Pracovní rozsah", "Диапазон работы", "Arbeitsspektrum", "Rango de trabajo", "Étendue du travail"),
    value: l("5 roles", "5 rolí", "5 ролей", "5 Rollen", "5 roles", "5 rôles"),
    detail: l(
      "Cloud infrastructure, AI evaluation, freelance delivery, frontend product work, and robotics teaching.",
      "Cloudová infrastruktura, AI evaluace, freelance zakázky, produktový frontend a výuka robotiky.",
      "Облачная инфраструктура, AI-оценка, freelance-проекты, продуктовый фронтенд и преподавание робототехники.",
      "Cloud-Infrastruktur, AI-Evaluation, Freelance-Projekte, Produkt-Frontend und Robotik-Lehre.",
      "Infraestructura cloud, evaluación de AI, proyectos freelance, frontend de producto y enseñanza de robótica.",
      "Infrastructure cloud, évaluation AI, missions freelance, frontend produit et enseignement de la robotique.",
    ),
    tags: ["AI", "Linux", "Frontend", "Product", "Teaching"],
  },
  {
    label: l("Technical base", "Technický základ", "Техническая база", "Technische Basis", "Base técnica", "Base technique"),
    value: l("Math / Physics / Code", "Matematika / Fyzika / Kód", "Математика / Физика / Код", "Mathe / Physik / Code", "Mates / Física / Código", "Maths / Physique / Code"),
    detail: l(
      "Education and project work are grounded in mathematics, physics, programming, systems thinking, and practical delivery.",
      "Vzdělání i projekty stojí na matematice, fyzice, programování, systémovém myšlení a praktickém doručování.",
      "Образование и проекты опираются на математику, физику, программирование, системное мышление и практическую реализацию.",
      "Ausbildung und Projekte gründen auf Mathematik, Physik, Programmierung, Systemdenken und praktischer Umsetzung.",
      "La formación y los proyectos se basan en matemáticas, física, programación, pensamiento sistémico y entrega práctica.",
      "La formation et les projets reposent sur les mathématiques, la physique, la programmation, la pensée systémique et la livraison concrète.",
    ),
    tags: ["Systems", "Education", "Engineering"],
  },
  {
    label: l("Communication", "Komunikace", "Коммуникация", "Kommunikation", "Comunicación", "Communication"),
    value: l("6 languages", "6 jazyků", "6 языков", "6 Sprachen", "6 idiomas", "6 langues"),
    detail: l(
      "The portfolio is built for multilingual communication across English, Czech, Russian, German, Spanish, and French.",
      "Portfolio je postavené pro vícejazyčnou komunikaci v angličtině, češtině, ruštině, němčině, španělštině a francouzštině.",
      "Портфолио построено для мультиязычной коммуникации: английский, чешский, русский, немецкий, испанский и французский.",
      "Das Portfolio ist für mehrsprachige Kommunikation gebaut: Englisch, Tschechisch, Russisch, Deutsch, Spanisch und Französisch.",
      "El portfolio está hecho para comunicación multilingüe: inglés, checo, ruso, alemán, español y francés.",
      "Le portfolio est conçu pour une communication multilingue : anglais, tchèque, russe, allemand, espagnol et français.",
    ),
    tags: ["EN", "CS", "RU", "DE", "ES", "FR"],
  },
];

export const architectureViews = [
  {
    project: "Ripieno",
    href: "https://www.ripieno.xyz/",
    summary: l(
      "A commercial multi-agent platform shaped around brief intake, autonomous agent teams, hard quality gates, live cost metering, and full repository ownership.",
      "Komerční multi-agentní platforma postavená kolem příjmu zadání, autonomních týmů agentů, tvrdých quality gates, živého měření nákladů a plného vlastnictví repozitáře.",
      "Коммерческая мультиагентная платформа: приём брифа, автономные команды агентов, жёсткие quality gates, живой учёт затрат и полное владение репозиторием.",
      "Eine kommerzielle Multi-Agent-Plattform rund um Brief-Aufnahme, autonome Agenten-Teams, harte Quality Gates, Live-Kostenmessung und volle Repository-Ownership.",
      "Una plataforma comercial multiagente en torno a la recepción del brief, equipos autónomos de agentes, quality gates estrictos, medición de costes en vivo y propiedad total del repositorio.",
      "Une plateforme commerciale multi-agents autour de la prise de brief, d'équipes d'agents autonomes, de quality gates stricts, de la mesure des coûts en direct et de la pleine propriété du dépôt.",
    ),
    layers: [
      {
        name: l("Briefing Layer", "Vrstva zadání", "Слой брифа", "Briefing-Ebene", "Capa de briefing", "Couche de briefing"),
        detail: l(
          "Guided interview turns a rough idea into a precise build specification before agents start.",
          "Řízený rozhovor promění hrubý nápad v přesnou specifikaci ještě před startem agentů.",
          "Управляемое интервью превращает сырую идею в точную спецификацию до старта агентов.",
          "Ein geführtes Interview macht aus einer groben Idee eine präzise Spezifikation, bevor Agenten starten.",
          "Una entrevista guiada convierte una idea en bruto en una especificación precisa antes de que arranquen los agentes.",
          "Un entretien guidé transforme une idée brute en spécification précise avant le démarrage des agents.",
        ),
      },
      {
        name: l("Agent Orchestration", "Orchestrace agentů", "Оркестрация агентов", "Agenten-Orchestrierung", "Orquestación de agentes", "Orchestration d'agents"),
        detail: l(
          "Agent teams plan, code, and merge in parallel on isolated sandboxes with per-role model selection.",
          "Týmy agentů paralelně plánují, programují a mergují v izolovaných sandboxech s výběrem modelu podle role.",
          "Команды агентов параллельно планируют, пишут код и мержат в изолированных песочницах с выбором модели под роль.",
          "Agenten-Teams planen, programmieren und mergen parallel in isolierten Sandboxes mit Modellwahl pro Rolle.",
          "Los equipos de agentes planifican, programan y fusionan en paralelo en sandboxes aislados con selección de modelo por rol.",
          "Les équipes d'agents planifient, codent et fusionnent en parallèle dans des sandboxes isolés avec choix du modèle par rôle.",
        ),
      },
      {
        name: l("Quality Gates", "Quality gates", "Quality gates", "Quality Gates", "Quality gates", "Quality gates"),
        detail: l(
          "SQL migrations run against real PostgreSQL and all tests must pass before anything ships.",
          "SQL migrace běží proti reálnému PostgreSQL a všechny testy musí projít, než se cokoli doručí.",
          "SQL-миграции гоняются на реальном PostgreSQL, и все тесты должны пройти до поставки.",
          "SQL-Migrationen laufen gegen echtes PostgreSQL, und alle Tests müssen bestehen, bevor etwas ausgeliefert wird.",
          "Las migraciones SQL se ejecutan contra PostgreSQL real y todos los tests deben pasar antes de entregar nada.",
          "Les migrations SQL tournent sur un vrai PostgreSQL et tous les tests doivent passer avant toute livraison.",
        ),
      },
      {
        name: l("Delivery & Metering", "Doručení a měření", "Поставка и учёт", "Delivery & Metering", "Entrega y medición", "Livraison et mesure"),
        detail: l(
          "Source, migrations, and config land in the client's private GitHub repo with cent-level cost tracking.",
          "Zdrojáky, migrace a konfigurace přistanou v klientově privátním GitHub repozitáři s náklady sledovanými na centy.",
          "Исходники, миграции и конфиг попадают в приватный GitHub-репозиторий клиента с учётом затрат до цента.",
          "Quellcode, Migrationen und Konfiguration landen im privaten GitHub-Repo des Kunden mit centgenauem Kostentracking.",
          "El código, las migraciones y la configuración llegan al repo privado de GitHub del cliente con costes al céntimo.",
          "Le code, les migrations et la configuration arrivent dans le dépôt GitHub privé du client avec un suivi des coûts au centime.",
        ),
      },
    ],
    flow: [
      l("Describe the brief", "Popiš zadání", "Опиши бриф", "Brief beschreiben", "Describe el brief", "Décrire le brief"),
      l("Agents plan & build", "Agenti plánují a staví", "Агенты планируют и строят", "Agenten planen & bauen", "Los agentes planifican y construyen", "Les agents planifient et construisent"),
      l("Gates verify quality", "Gates ověří kvalitu", "Gates проверяют качество", "Gates prüfen Qualität", "Los gates verifican la calidad", "Les gates vérifient la qualité"),
      l("Costs stay metered", "Náklady zůstávají měřené", "Затраты под учётом", "Kosten bleiben gemessen", "Los costes quedan medidos", "Les coûts restent mesurés"),
      l("Own the repository", "Vlastni repozitář", "Владей репозиторием", "Repository besitzen", "Sé dueño del repo", "Possède le dépôt"),
    ],
    stack: ["TypeScript", "Next.js", "Supabase / PostgreSQL", "LLM APIs", "Railway"],
  },
  {
    project: "Lokwave",
    href: "https://www.lokwave.cz/",
    summary: l(
      "One multi-tenant engine powering six niche SaaS brands: AI-managed Google Business profiles, review responses, posts, rank tracking, and fast vertical rollouts.",
      "Jeden multi-tenant motor pohánějící šest oborových SaaS značek: AI správa Google Business profilů, odpovědi na recenze, příspěvky, sledování pozic a rychlá oborová nasazení.",
      "Один multi-tenant движок для шести нишевых SaaS-брендов: AI-управление профилями Google Business, ответы на отзывы, посты, трекинг позиций и быстрые запуски вертикалей.",
      "Eine Multi-Tenant-Engine für sechs Nischen-SaaS-Marken: AI-verwaltete Google-Business-Profile, Antworten auf Bewertungen, Posts, Ranking-Tracking und schnelle vertikale Rollouts.",
      "Un motor multi-tenant que impulsa seis marcas SaaS de nicho: perfiles de Google Business gestionados por AI, respuestas a reseñas, publicaciones, seguimiento de posiciones y despliegues verticales rápidos.",
      "Un moteur multi-tenant qui propulse six marques SaaS de niche : profils Google Business gérés par AI, réponses aux avis, publications, suivi des positions et déploiements verticaux rapides.",
    ),
    layers: [
      {
        name: l("Shared Engine", "Sdílený motor", "Общий движок", "Gemeinsame Engine", "Motor compartido", "Moteur partagé"),
        detail: l(
          "One platform for profile management, review AI, posting, and monitoring behind every brand.",
          "Jedna platforma pro správu profilů, recenzní AI, publikování a monitoring za každou značkou.",
          "Одна платформа для управления профилями, AI для отзывов, постинга и мониторинга за каждым брендом.",
          "Eine Plattform für Profilverwaltung, Bewertungs-AI, Posting und Monitoring hinter jeder Marke.",
          "Una plataforma para gestión de perfiles, AI de reseñas, publicaciones y monitorización detrás de cada marca.",
          "Une plateforme pour la gestion des profils, l'AI des avis, la publication et le monitoring derrière chaque marque.",
        ),
      },
      {
        name: l("AI Layer", "AI vrstva", "AI-слой", "AI-Ebene", "Capa de AI", "Couche AI"),
        detail: l(
          "Industry-tuned review replies in Czech with human approval, plus generated posts and reports.",
          "Oborově laděné odpovědi na recenze v češtině se schválením člověkem, plus generované příspěvky a reporty.",
          "Отраслевые ответы на отзывы на чешском с одобрением человека, плюс генерируемые посты и отчёты.",
          "Branchenspezifische Bewertungsantworten auf Tschechisch mit menschlicher Freigabe, plus generierte Posts und Reports.",
          "Respuestas a reseñas ajustadas al sector en checo con aprobación humana, más publicaciones e informes generados.",
          "Réponses aux avis adaptées au secteur en tchèque avec validation humaine, plus publications et rapports générés.",
        ),
      },
      {
        name: l("Vertical Brands", "Oborové značky", "Отраслевые бренды", "Vertikale Marken", "Marcas verticales", "Marques verticales"),
        detail: l(
          "DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal, and FitLocal, each tailored to one industry.",
          "DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal a FitLocal, každá šitá na jeden obor.",
          "DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal и FitLocal — каждый под свою отрасль.",
          "DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal und FitLocal, jede auf eine Branche zugeschnitten.",
          "DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal y FitLocal, cada una a medida de un sector.",
          "DentalLocal, AutoLocal, VetLocal, BistroLocal, SalonLocal et FitLocal, chacune taillée pour un secteur.",
        ),
      },
      {
        name: l("Trust & Ops", "Důvěra a provoz", "Доверие и эксплуатация", "Trust & Ops", "Confianza y operaciones", "Confiance et ops"),
        detail: l(
          "GDPR compliance with EU data storage, daily rank tracking, alerts, and 99.9% uptime.",
          "GDPR s ukládáním dat v EU, denní sledování pozic, upozornění a 99,9% uptime.",
          "GDPR с хранением данных в ЕС, ежедневный трекинг позиций, алерты и uptime 99,9 %.",
          "DSGVO-Konformität mit EU-Datenspeicherung, tägliches Ranking-Tracking, Alerts und 99,9 % Uptime.",
          "Cumplimiento del RGPD con datos en la UE, seguimiento diario de posiciones, alertas y 99,9 % de uptime.",
          "Conformité RGPD avec stockage des données dans l'UE, suivi quotidien des positions, alertes et 99,9 % d'uptime.",
        ),
      },
    ],
    flow: [
      l("Connect Google profile", "Připoj Google profil", "Подключи профиль Google", "Google-Profil verbinden", "Conecta el perfil de Google", "Connecter le profil Google"),
      l("AI drafts responses", "AI navrhne odpovědi", "AI готовит ответы", "AI entwirft Antworten", "La AI redacta respuestas", "L'AI rédige les réponses"),
      l("Owner approves", "Majitel schválí", "Владелец одобряет", "Inhaber gibt frei", "El dueño aprueba", "Le propriétaire valide"),
      l("Posts & ranks update", "Příspěvky a pozice se aktualizují", "Посты и позиции обновляются", "Posts & Rankings aktualisieren sich", "Publicaciones y posiciones se actualizan", "Publications et positions se mettent à jour"),
      l("Monthly report lands", "Přijde měsíční report", "Приходит месячный отчёт", "Monatsreport kommt an", "Llega el informe mensual", "Le rapport mensuel arrive"),
    ],
    stack: ["AI automation", "Google Business API", "Multi-tenant", "SaaS", "Local SEO"],
  },
  {
    project: "Freio",
    href: "https://www.freio.cz/",
    summary: l(
      "An EdTech product surface shaped around test discovery, realistic exam practice, immediate evaluation, user progress, and payment-ready product flow.",
      "EdTech produkt postavený kolem objevování testů, realistického procvičování zkoušek, okamžitého vyhodnocení, pokroku uživatele a platebně připraveného flow.",
      "EdTech-продукт вокруг подбора тестов, реалистичной практики экзаменов, мгновенной проверки, прогресса пользователя и готового платёжного flow.",
      "Eine EdTech-Produktoberfläche rund um Test-Discovery, realistische Prüfungspraxis, sofortige Auswertung, Nutzerfortschritt und zahlungsbereiten Produktfluss.",
      "Una superficie de producto EdTech en torno al descubrimiento de tests, práctica realista de exámenes, evaluación inmediata, progreso del usuario y flujo listo para pagos.",
      "Une surface produit EdTech autour de la découverte de tests, de la pratique réaliste d'examens, de l'évaluation immédiate, de la progression et d'un flux prêt pour le paiement.",
    ),
    layers: [
      {
        name: l("Product UX", "Produktové UX", "Продуктовый UX", "Produkt-UX", "UX de producto", "UX produit"),
        detail: l(
          "Clear paths for students, parents, exam preparation, subjects, and conversion.",
          "Jasné cesty pro studenty, rodiče, přípravu na zkoušky, předměty a konverzi.",
          "Понятные пути для студентов, родителей, подготовки к экзаменам, предметов и конверсии.",
          "Klare Pfade für Studierende, Eltern, Prüfungsvorbereitung, Fächer und Conversion.",
          "Rutas claras para estudiantes, padres, preparación de exámenes, asignaturas y conversión.",
          "Des parcours clairs pour les étudiants, les parents, la préparation aux examens, les matières et la conversion.",
        ),
      },
      {
        name: l("Testing Core", "Testovací jádro", "Ядро тестирования", "Test-Kern", "Núcleo de testing", "Cœur de test"),
        detail: l(
          "Large test catalog, answer flows, evaluation states, and progress feedback.",
          "Velký katalog testů, průchody odpověďmi, stavy vyhodnocení a zpětná vazba k pokroku.",
          "Большой каталог тестов, потоки ответов, состояния проверки и обратная связь по прогрессу.",
          "Großer Testkatalog, Antwort-Flows, Auswertungszustände und Fortschritts-Feedback.",
          "Gran catálogo de tests, flujos de respuesta, estados de evaluación y feedback de progreso.",
          "Grand catalogue de tests, flux de réponses, états d'évaluation et retour de progression.",
        ),
      },
      {
        name: l("Content Model", "Obsahový model", "Модель контента", "Content-Modell", "Modelo de contenido", "Modèle de contenu"),
        detail: l(
          "Subjects, questions, lessons, SCIO-style preparation, and repeated practice loops.",
          "Předměty, otázky, lekce, příprava ve stylu SCIO a opakované procvičovací smyčky.",
          "Предметы, вопросы, уроки, подготовка в стиле SCIO и повторяющиеся циклы практики.",
          "Fächer, Fragen, Lektionen, Vorbereitung im SCIO-Stil und wiederholte Übungsschleifen.",
          "Asignaturas, preguntas, lecciones, preparación estilo SCIO y ciclos de práctica repetidos.",
          "Matières, questions, leçons, préparation façon SCIO et boucles de pratique répétées.",
        ),
      },
      {
        name: l("Growth Layer", "Růstová vrstva", "Слой роста", "Wachstums-Ebene", "Capa de crecimiento", "Couche de croissance"),
        detail: l(
          "First-test-free entry point, pricing clarity, and measurable student value.",
          "Vstup s prvním testem zdarma, srozumitelná cena a měřitelná hodnota pro studenty.",
          "Вход с бесплатным первым тестом, ясные цены и измеримая ценность для студентов.",
          "Einstieg mit gratis Ersttest, klare Preise und messbarer Wert für Studierende.",
          "Entrada con el primer test gratis, precios claros y valor medible para estudiantes.",
          "Entrée avec premier test gratuit, tarifs clairs et valeur mesurable pour les étudiants.",
        ),
      },
    ],
    flow: [
      l("Choose preparation path", "Vyber cestu přípravy", "Выбери путь подготовки", "Vorbereitungspfad wählen", "Elige la ruta de preparación", "Choisir le parcours de préparation"),
      l("Start realistic test", "Spusť realistický test", "Начни реалистичный тест", "Realistischen Test starten", "Inicia un test realista", "Lancer un test réaliste"),
      l("Evaluate answers", "Vyhodnoť odpovědi", "Проверь ответы", "Antworten auswerten", "Evalúa las respuestas", "Évaluer les réponses"),
      l("Track progress", "Sleduj pokrok", "Отслеживай прогресс", "Fortschritt verfolgen", "Sigue el progreso", "Suivre la progression"),
      l("Continue learning", "Pokračuj v učení", "Продолжай учиться", "Weiterlernen", "Sigue aprendiendo", "Continuer à apprendre"),
    ],
    stack: ["Product", "Education", "Testing", "Analytics", "Payments"],
  },
  {
    project: "GorillaType",
    href: "https://gorilla-type-orpin.vercel.app/",
    summary: l(
      "A typing product designed around fast practice, configuration, competitive loops, profiles, rankings, tournaments, and social mechanics.",
      "Produkt pro psaní postavený na rychlém procvičování, konfiguraci, soutěžních smyčkách, profilech, žebříčcích, turnajích a sociálních mechanikách.",
      "Продукт для печати вокруг быстрой практики, настроек, соревновательных циклов, профилей, рейтингов, турниров и социальных механик.",
      "Ein Tipp-Produkt rund um schnelles Üben, Konfiguration, kompetitive Loops, Profile, Rankings, Turniere und soziale Mechaniken.",
      "Un producto de mecanografía en torno a práctica rápida, configuración, ciclos competitivos, perfiles, clasificaciones, torneos y mecánicas sociales.",
      "Un produit de frappe autour de la pratique rapide, de la configuration, des boucles compétitives, des profils, des classements, des tournois et des mécaniques sociales.",
    ),
    layers: [
      {
        name: l("Practice Engine", "Tréninkový motor", "Движок практики", "Übungs-Engine", "Motor de práctica", "Moteur d'entraînement"),
        detail: l(
          "Time modes, word modes, quote modes, restart flow, and fast typing feedback.",
          "Časové režimy, režimy slov, režimy citátů, restart flow a rychlá zpětná vazba psaní.",
          "Режимы времени, слов и цитат, быстрый рестарт и мгновенная обратная связь.",
          "Zeitmodi, Wortmodi, Zitatmodi, Restart-Flow und schnelles Tipp-Feedback.",
          "Modos de tiempo, de palabras y de citas, flujo de reinicio y feedback rápido.",
          "Modes de temps, de mots et de citations, relance rapide et retour immédiat.",
        ),
      },
      {
        name: l("Account Layer", "Vrstva účtů", "Слой аккаунтов", "Account-Ebene", "Capa de cuentas", "Couche de comptes"),
        detail: l(
          "User-facing flows for identity, history, settings, and persistent practice context.",
          "Uživatelské flow pro identitu, historii, nastavení a trvalý tréninkový kontext.",
          "Пользовательские потоки для идентичности, истории, настроек и постоянного контекста практики.",
          "Nutzer-Flows für Identität, Verlauf, Einstellungen und persistenten Übungskontext.",
          "Flujos de usuario para identidad, historial, ajustes y contexto de práctica persistente.",
          "Flux utilisateur pour l'identité, l'historique, les réglages et un contexte d'entraînement persistant.",
        ),
      },
      {
        name: l("Competition", "Soutěžení", "Соревнования", "Wettbewerb", "Competición", "Compétition"),
        detail: l(
          "Leaderboards, tournaments, clans, and motivation loops for repeated sessions.",
          "Žebříčky, turnaje, klany a motivační smyčky pro opakované session.",
          "Таблицы лидеров, турниры, кланы и мотивационные циклы для повторных сессий.",
          "Bestenlisten, Turniere, Clans und Motivationsschleifen für wiederholte Sessions.",
          "Clasificaciones, torneos, clanes y bucles de motivación para sesiones repetidas.",
          "Classements, tournois, clans et boucles de motivation pour des sessions répétées.",
        ),
      },
      {
        name: l("Interface System", "Systém rozhraní", "Система интерфейса", "Interface-System", "Sistema de interfaz", "Système d'interface"),
        detail: l(
          "Keyboard-first interaction, clean typing focus, and immediate visual state changes.",
          "Interakce primárně klávesnicí, čisté soustředění na psaní a okamžité vizuální změny stavu.",
          "Управление с клавиатуры, чистый фокус на печати и мгновенные визуальные изменения состояния.",
          "Keyboard-First-Interaktion, klarer Tipp-Fokus und sofortige visuelle Zustandswechsel.",
          "Interacción centrada en el teclado, foco limpio en la escritura y cambios visuales inmediatos.",
          "Interaction clavier d'abord, focus net sur la frappe et changements d'état visuels immédiats.",
        ),
      },
    ],
    flow: [
      l("Pick mode", "Vyber režim", "Выбери режим", "Modus wählen", "Elige el modo", "Choisir le mode"),
      l("Type session", "Odepiš session", "Пройди сессию", "Session tippen", "Escribe la sesión", "Taper la session"),
      l("Measure result", "Změř výsledek", "Измерь результат", "Ergebnis messen", "Mide el resultado", "Mesurer le résultat"),
      l("Compare ranking", "Porovnej pořadí", "Сравни рейтинг", "Ranking vergleichen", "Compara el ranking", "Comparer le classement"),
      l("Repeat with settings", "Opakuj s nastavením", "Повтори с настройками", "Mit Einstellungen wiederholen", "Repite con ajustes", "Répéter avec réglages"),
    ],
    stack: ["Next.js", "Typing UX", "Gamification", "Auth", "Realtime UI"],
  },
];

export const skillGraphNodes = [
  {
    id: "ai",
    label: l("AI Engineering", "AI inženýrství", "AI-инжиниринг", "AI-Engineering", "Ingeniería de AI", "Ingénierie AI"),
    detail: l(
      "LLM apps, AI automation, agents, prompt systems, model evaluation, and tool-based workflows.",
      "LLM aplikace, AI automatizace, agenti, prompt systémy, evaluace modelů a workflow s nástroji.",
      "LLM-приложения, AI-автоматизация, агенты, prompt-системы, оценка моделей и workflow с инструментами.",
      "LLM-Apps, AI-Automatisierung, Agenten, Prompt-Systeme, Modell-Evaluation und Tool-Workflows.",
      "Apps LLM, automatización AI, agentes, sistemas de prompts, evaluación de modelos y flujos con herramientas.",
      "Apps LLM, automatisation AI, agents, systèmes de prompts, évaluation de modèles et workflows outillés.",
    ),
    links: ["Automation", "Software", "Proof"],
  },
  {
    id: "automation",
    label: l("Automation", "Automatizace", "Автоматизация", "Automatisierung", "Automatización", "Automatisation"),
    detail: l(
      "Scripts, integrations, bots, workflow design, and practical systems that remove repeated manual work.",
      "Skripty, integrace, boti, návrh workflow a praktické systémy odstraňující opakovanou ruční práci.",
      "Скрипты, интеграции, боты, дизайн workflow и практичные системы, убирающие повторяющуюся ручную работу.",
      "Skripte, Integrationen, Bots, Workflow-Design und praktische Systeme gegen wiederkehrende Handarbeit.",
      "Scripts, integraciones, bots, diseño de flujos y sistemas prácticos que eliminan trabajo manual repetido.",
      "Scripts, intégrations, bots, conception de workflows et systèmes pratiques qui suppriment le travail manuel répété.",
    ),
    links: ["AI Engineering", "DevOps", "Linux"],
  },
  {
    id: "software",
    label: l("Software", "Software", "Софт", "Software", "Software", "Logiciel"),
    detail: l(
      "TypeScript, React, Next.js, APIs, architecture, interfaces, and production web delivery.",
      "TypeScript, React, Next.js, API, architektura, rozhraní a produkční webové doručování.",
      "TypeScript, React, Next.js, API, архитектура, интерфейсы и продакшен-веб.",
      "TypeScript, React, Next.js, APIs, Architektur, Interfaces und Produktions-Web-Delivery.",
      "TypeScript, React, Next.js, APIs, arquitectura, interfaces y entrega web en producción.",
      "TypeScript, React, Next.js, APIs, architecture, interfaces et livraison web en production.",
    ),
    links: ["Projects", "Frontend", "Product"],
  },
  {
    id: "linux",
    label: l("Linux", "Linux", "Linux", "Linux", "Linux", "Linux"),
    detail: l(
      "Shell, systemd, networking, permissions, servers, hardening, and administrator-level problem solving.",
      "Shell, systemd, sítě, oprávnění, servery, hardening a řešení problémů na úrovni administrátora.",
      "Shell, systemd, сети, права, серверы, hardening и решение проблем на уровне администратора.",
      "Shell, systemd, Netzwerke, Berechtigungen, Server, Hardening und Problemlösung auf Admin-Niveau.",
      "Shell, systemd, redes, permisos, servidores, hardening y resolución de problemas a nivel de administrador.",
      "Shell, systemd, réseau, permissions, serveurs, durcissement et résolution de problèmes niveau administrateur.",
    ),
    links: ["DevOps", "Automation", "Infrastructure"],
  },
  {
    id: "devops",
    label: l("DevOps", "DevOps", "DevOps", "DevOps", "DevOps", "DevOps"),
    detail: l(
      "Docker, CI/CD, Vercel, GitHub Actions, deployments, monitoring, and repeatable release workflows.",
      "Docker, CI/CD, Vercel, GitHub Actions, nasazení, monitoring a opakovatelné release workflow.",
      "Docker, CI/CD, Vercel, GitHub Actions, деплои, мониторинг и воспроизводимые релизные процессы.",
      "Docker, CI/CD, Vercel, GitHub Actions, Deployments, Monitoring und wiederholbare Release-Workflows.",
      "Docker, CI/CD, Vercel, GitHub Actions, despliegues, monitorización y flujos de release repetibles.",
      "Docker, CI/CD, Vercel, GitHub Actions, déploiements, monitoring et workflows de release reproductibles.",
    ),
    links: ["Linux", "Software", "Reliability"],
  },
  {
    id: "product",
    label: l("Product", "Produkt", "Продукт", "Produkt", "Producto", "Produit"),
    detail: l(
      "Product thinking, user journeys, pricing clarity, learning loops, interface quality, and maintainable delivery.",
      "Produktové myšlení, uživatelské cesty, srozumitelné ceny, učicí smyčky, kvalita rozhraní a udržovatelné doručování.",
      "Продуктовое мышление, пользовательские пути, ясные цены, циклы обучения, качество интерфейса и поддерживаемая поставка.",
      "Produktdenken, User Journeys, Preisklarheit, Lernschleifen, Interface-Qualität und wartbare Delivery.",
      "Pensamiento de producto, recorridos de usuario, precios claros, ciclos de aprendizaje, calidad de interfaz y entrega mantenible.",
      "Pensée produit, parcours utilisateur, clarté des prix, boucles d'apprentissage, qualité d'interface et livraison maintenable.",
    ),
    links: ["Ripieno", "Lokwave", "Freio"],
  },
  {
    id: "teaching",
    label: l("Teaching", "Výuka", "Преподавание", "Lehre", "Enseñanza", "Enseignement"),
    detail: l(
      "Robotics, programming fundamentals, communication, structured explanation, and practical exercises.",
      "Robotika, základy programování, komunikace, strukturované vysvětlování a praktická cvičení.",
      "Робототехника, основы программирования, коммуникация, структурное объяснение и практические упражнения.",
      "Robotik, Programmiergrundlagen, Kommunikation, strukturiertes Erklären und praktische Übungen.",
      "Robótica, fundamentos de programación, comunicación, explicación estructurada y ejercicios prácticos.",
      "Robotique, bases de la programmation, communication, explication structurée et exercices pratiques.",
    ),
    links: ["Communication", "Programming", "Mentoring"],
  },
];

export const cvFilters = [
  {
    id: "ai",
    label: l("AI", "AI", "AI", "AI", "AI", "AI"),
    summary: l(
      "AI training, evaluation, prompt systems, automation, and model-assisted engineering.",
      "AI trénink, evaluace, prompt systémy, automatizace a inženýrství s podporou modelů.",
      "AI-обучение, оценка, prompt-системы, автоматизация и инжиниринг с поддержкой моделей.",
      "AI-Training, Evaluation, Prompt-Systeme, Automatisierung und modellgestütztes Engineering.",
      "Entrenamiento de AI, evaluación, sistemas de prompts, automatización e ingeniería asistida por modelos.",
      "Entraînement AI, évaluation, systèmes de prompts, automatisation et ingénierie assistée par modèles.",
    ),
    experience: ["Cloudinfrastack", "Outlier"],
    skills: ["LLM apps", "AI automation", "Prompt systems", "Agents", "Model evaluation", "Code review"],
  },
  {
    id: "frontend",
    label: l("Frontend", "Frontend", "Фронтенд", "Frontend", "Frontend", "Frontend"),
    summary: l(
      "Modern UI engineering, TypeScript components, product surfaces, and interactive app flows.",
      "Moderní UI inženýrství, TypeScript komponenty, produktové plochy a interaktivní aplikační flow.",
      "Современный UI-инжиниринг, TypeScript-компоненты, продуктовые поверхности и интерактивные потоки приложений.",
      "Modernes UI-Engineering, TypeScript-Komponenten, Produktoberflächen und interaktive App-Flows.",
      "Ingeniería de UI moderna, componentes TypeScript, superficies de producto y flujos interactivos.",
      "Ingénierie UI moderne, composants TypeScript, surfaces produit et flux applicatifs interactifs.",
    ),
    experience: ["Freelance", "DENEVY / juno.one"],
    skills: ["TypeScript", "React", "Next.js", "Components", "Product UX", "Interface quality"],
  },
  {
    id: "infra",
    label: l("Infrastructure", "Infrastruktura", "Инфраструктура", "Infrastruktur", "Infraestructura", "Infrastructure"),
    summary: l(
      "Linux systems, cloud infrastructure, deployment workflows, and operational engineering.",
      "Linux systémy, cloudová infrastruktura, nasazovací workflow a provozní inženýrství.",
      "Linux-системы, облачная инфраструктура, процессы деплоя и эксплуатационный инжиниринг.",
      "Linux-Systeme, Cloud-Infrastruktur, Deployment-Workflows und Betriebs-Engineering.",
      "Sistemas Linux, infraestructura cloud, flujos de despliegue e ingeniería operativa.",
      "Systèmes Linux, infrastructure cloud, workflows de déploiement et ingénierie opérationnelle.",
    ),
    experience: ["Cloudinfrastack", "Freelance"],
    skills: ["Linux", "Kubernetes", "AWS", "Docker", "CI/CD", "Monitoring"],
  },
  {
    id: "product",
    label: l("Product", "Produkt", "Продукт", "Produkt", "Producto", "Produit"),
    summary: l(
      "Selected projects, client delivery, product decisions, UX clarity, and shipping discipline.",
      "Vybrané projekty, zakázky pro klienty, produktová rozhodnutí, srozumitelné UX a disciplína v doručování.",
      "Избранные проекты, работа с клиентами, продуктовые решения, ясный UX и дисциплина поставки.",
      "Ausgewählte Projekte, Kundenprojekte, Produktentscheidungen, UX-Klarheit und Shipping-Disziplin.",
      "Proyectos seleccionados, entregas a clientes, decisiones de producto, claridad de UX y disciplina de entrega.",
      "Projets sélectionnés, livraison client, décisions produit, clarté UX et discipline de livraison.",
    ),
    experience: ["Freelance", "DENEVY / juno.one"],
    skills: ["Ripieno", "Lokwave", "Freio", "GorillaType", "Product UX", "Delivery"],
  },
  {
    id: "teaching",
    label: l("Teaching", "Výuka", "Преподавание", "Lehre", "Enseñanza", "Enseignement"),
    summary: l(
      "Robotics teaching, communication, technical explanation, and hands-on learning.",
      "Výuka robotiky, komunikace, technické vysvětlování a praktické učení.",
      "Преподавание робототехники, коммуникация, технические объяснения и практическое обучение.",
      "Robotik-Unterricht, Kommunikation, technisches Erklären und praxisnahes Lernen.",
      "Enseñanza de robótica, comunicación, explicación técnica y aprendizaje práctico.",
      "Enseignement de la robotique, communication, explication technique et apprentissage pratique.",
    ),
    experience: ["Dům dětí a mládeže Stodůlky"],
    skills: ["Robotics", "Programming", "Communication", "Exercises", "Mentoring", "Clarity"],
  },
];

export const uiText = {
  top: l("Top", "Nahoru", "Наверх", "Nach oben", "Arriba", "Haut"),
  systemEyebrow: l("System status", "Stav systému", "Статус системы", "Systemstatus", "Estado del sistema", "État du système"),
  systemTitle: l(
    "Portfolio running as a live engineering surface.",
    "Portfolio běžící jako živá inženýrská plocha.",
    "Портфолио как живая инженерная поверхность.",
    "Ein Portfolio als lebendige Engineering-Oberfläche.",
    "Un portfolio funcionando como superficie de ingeniería en vivo.",
    "Un portfolio qui fonctionne comme une surface d'ingénierie vivante.",
  ),
  labEyebrow: l("AI portfolio lab", "AI portfolio lab", "AI-лаборатория портфолио", "AI-Portfolio-Lab", "Laboratorio AI del portfolio", "Labo AI du portfolio"),
  labTitle: l("Ask, inspect, verify.", "Ptej se, zkoumej, ověřuj.", "Спрашивай, изучай, проверяй.", "Fragen, prüfen, verifizieren.", "Pregunta, inspecciona, verifica.", "Demander, inspecter, vérifier."),
  labIntro: l(
    "A portfolio should behave like software. This section adds a local copilot, terminal commands, and proof-first evidence so teams can inspect the signal faster.",
    "Portfolio se má chovat jako software. Tato sekce přidává lokálního copilota, terminálové příkazy a důkazy na prvním místě, aby týmy prověřily signál rychleji.",
    "Портфолио должно вести себя как софт. Этот раздел добавляет локального copilot, команды терминала и доказательства, чтобы команды быстрее проверяли сигнал.",
    "Ein Portfolio sollte sich wie Software verhalten. Dieser Abschnitt ergänzt einen lokalen Copilot, Terminal-Befehle und Proof-First-Belege, damit Teams das Signal schneller prüfen.",
    "Un portfolio debería comportarse como software. Esta sección añade un copiloto local, comandos de terminal y evidencia para que los equipos inspeccionen la señal más rápido.",
    "Un portfolio doit se comporter comme un logiciel. Cette section ajoute un copilote local, des commandes de terminal et des preuves pour inspecter le signal plus vite.",
  ),
  copilotKicker: l("Local copilot", "Lokální copilot", "Локальный copilot", "Lokaler Copilot", "Copiloto local", "Copilote local"),
  copilotTitle: l("Portfolio intelligence", "Inteligence portfolia", "Интеллект портфолио", "Portfolio-Intelligenz", "Inteligencia del portfolio", "Intelligence du portfolio"),
  copilotPlaceholder: l(
    "Ask about AI, DevOps, projects, or experience",
    "Zeptej se na AI, DevOps, projekty nebo praxi",
    "Спроси про AI, DevOps, проекты или опыт",
    "Frag nach AI, DevOps, Projekten oder Erfahrung",
    "Pregunta por AI, DevOps, proyectos o experiencia",
    "Pose une question sur l'AI, le DevOps, les projets ou l'expérience",
  ),
  matchedAnswer: l("Matched answer", "Nalezená odpověď", "Найденный ответ", "Passende Antwort", "Respuesta encontrada", "Réponse trouvée"),
  proofKicker: l("Proof mode", "Režim důkazů", "Режим доказательств", "Proof-Modus", "Modo evidencia", "Mode preuves"),
  proofTitle: l("Evidence overlay", "Vrstva důkazů", "Слой доказательств", "Beweis-Overlay", "Capa de evidencia", "Surcouche de preuves"),
  proofActive: l("Proof mode active", "Režim důkazů zapnutý", "Режим доказательств включён", "Proof-Modus aktiv", "Modo evidencia activo", "Mode preuves actif"),
  proofActivate: l("Activate proof mode", "Zapnout režim důkazů", "Включить режим доказательств", "Proof-Modus aktivieren", "Activar modo evidencia", "Activer le mode preuves"),
  portfolioEyebrow: l("Portfolio", "Portfolio", "Портфолио", "Portfolio", "Portfolio", "Portfolio"),
  architectureEyebrow: l("Architecture view", "Pohled na architekturu", "Взгляд на архитектуру", "Architektur-Ansicht", "Vista de arquitectura", "Vue d'architecture"),
  architectureTitle: l(
    "Project thinking, not only screenshots.",
    "Projektové myšlení, ne jen screenshoty.",
    "Проектное мышление, а не только скриншоты.",
    "Projektdenken, nicht nur Screenshots.",
    "Pensamiento de proyecto, no solo capturas.",
    "Une pensée projet, pas seulement des captures.",
  ),
  architectureIntro: l(
    "The strongest portfolio projects are mapped as systems: user path, core engine, content model, growth layer, and delivery flow.",
    "Nejsilnější projekty portfolia jsou zmapované jako systémy: cesta uživatele, jádro, obsahový model, růstová vrstva a doručovací flow.",
    "Сильнейшие проекты портфолио разобраны как системы: путь пользователя, ядро, модель контента, слой роста и поток поставки.",
    "Die stärksten Projekte sind als Systeme kartiert: Nutzerpfad, Kern-Engine, Content-Modell, Wachstums-Ebene und Delivery-Flow.",
    "Los proyectos más fuertes están mapeados como sistemas: ruta del usuario, motor central, modelo de contenido, capa de crecimiento y flujo de entrega.",
    "Les projets les plus forts sont cartographiés comme des systèmes : parcours utilisateur, moteur central, modèle de contenu, couche de croissance et flux de livraison.",
  ),
  selectedSystem: l("Selected system", "Vybraný systém", "Выбранная система", "Ausgewähltes System", "Sistema seleccionado", "Système sélectionné"),
  openLive: l("Open live", "Otevřít živě", "Открыть живьём", "Live öffnen", "Abrir en vivo", "Ouvrir en ligne"),
  experienceEyebrow: l("CV signal", "Signál CV", "Сигнал CV", "CV-Signal", "Señal del CV", "Signal du CV"),
  cvEyebrow: l("Interactive CV", "Interaktivní CV", "Интерактивное CV", "Interaktives CV", "CV interactivo", "CV interactif"),
  cvTitle: l("Filter the strongest signal.", "Vyfiltruj nejsilnější signál.", "Отфильтруй самый сильный сигнал.", "Filtere das stärkste Signal.", "Filtra la señal más fuerte.", "Filtrer le signal le plus fort."),
  cvIntro: l(
    "Recruiters can keep the PDF, while technical readers can filter the experience by AI, frontend, infrastructure, product, or teaching.",
    "Recruiteři mohou zůstat u PDF, techničtí čtenáři si praxi vyfiltrují podle AI, frontendu, infrastruktury, produktu nebo výuky.",
    "Рекрутёры могут остаться с PDF, а технические читатели отфильтруют опыт по AI, фронтенду, инфраструктуре, продукту или преподаванию.",
    "Recruiter können beim PDF bleiben, technische Leser filtern die Erfahrung nach AI, Frontend, Infrastruktur, Produkt oder Lehre.",
    "Los recruiters pueden quedarse con el PDF; los lectores técnicos filtran la experiencia por AI, frontend, infraestructura, producto o enseñanza.",
    "Les recruteurs peuvent garder le PDF, les lecteurs techniques filtrent l'expérience par AI, frontend, infrastructure, produit ou enseignement.",
  ),
  chooseTrack: l("Choose track", "Vyber stopu", "Выбери трек", "Track wählen", "Elige la vía", "Choisir la piste"),
  downloadPdf: l("Download PDF", "Stáhnout PDF", "Скачать PDF", "PDF herunterladen", "Descargar PDF", "Télécharger le PDF"),
  trackSuffix: l("track", "stopa", "трек", "Track", "vía", "piste"),
  graphEyebrow: l("Skill graph", "Graf dovedností", "Граф навыков", "Skill-Graph", "Grafo de habilidades", "Graphe de compétences"),
  graphTitle: l("Connected engineering range.", "Propojený inženýrský rozsah.", "Связанный инженерный диапазон.", "Vernetztes Engineering-Spektrum.", "Rango de ingeniería conectado.", "Une étendue technique connectée."),
  graphIntro: l(
    "The graph connects AI, automation, Linux, DevOps, software, product thinking, and teaching into one coherent engineering profile.",
    "Graf propojuje AI, automatizaci, Linux, DevOps, software, produktové myšlení a výuku do jednoho soudržného inženýrského profilu.",
    "Граф связывает AI, автоматизацию, Linux, DevOps, софт, продуктовое мышление и преподавание в один цельный инженерный профиль.",
    "Der Graph verbindet AI, Automatisierung, Linux, DevOps, Software, Produktdenken und Lehre zu einem kohärenten Engineering-Profil.",
    "El grafo conecta AI, automatización, Linux, DevOps, software, pensamiento de producto y enseñanza en un perfil de ingeniería coherente.",
    "Le graphe relie AI, automatisation, Linux, DevOps, logiciel, pensée produit et enseignement en un profil d'ingénierie cohérent.",
  ),
  selectedNode: l("Selected node", "Vybraný uzel", "Выбранный узел", "Ausgewählter Knoten", "Nodo seleccionado", "Nœud sélectionné"),
  skillsEyebrow: l("Stack", "Stack", "Стек", "Stack", "Stack", "Stack"),
  educationEyebrow: l("Education", "Vzdělání", "Образование", "Ausbildung", "Formación", "Formation"),
  contactEyebrow: l("Contact", "Kontakt", "Контакты", "Kontakt", "Contacto", "Contact"),
  marquee: [
    l("AI engineering", "AI inženýrství", "AI-инжиниринг", "AI-Engineering", "Ingeniería de AI", "Ingénierie AI"),
    l("Automation systems", "Automatizační systémy", "Системы автоматизации", "Automatisierungssysteme", "Sistemas de automatización", "Systèmes d'automatisation"),
    l("Linux administration", "Správa Linuxu", "Администрирование Linux", "Linux-Administration", "Administración de Linux", "Administration Linux"),
    l("DevOps delivery", "DevOps delivery", "DevOps-поставка", "DevOps-Delivery", "Entrega DevOps", "Livraison DevOps"),
    l("Full-stack software", "Full-stack software", "Full-stack софт", "Full-Stack-Software", "Software full-stack", "Logiciel full-stack"),
    l("Applied product work", "Aplikovaná produktová práce", "Прикладная продуктовая работа", "Angewandte Produktarbeit", "Trabajo de producto aplicado", "Travail produit appliqué"),
    l("Infrastructure", "Infrastruktura", "Инфраструктура", "Infrastruktur", "Infraestructura", "Infrastructure"),
    l("Clean interfaces", "Čistá rozhraní", "Чистые интерфейсы", "Saubere Interfaces", "Interfaces limpias", "Interfaces propres"),
  ],
  consoleKicker: l("Live engineering console", "Živá inženýrská konzole", "Живая инженерная консоль", "Live-Engineering-Konsole", "Consola de ingeniería en vivo", "Console d'ingénierie en direct"),
  consoleItems: [
    l("AI workflows", "AI workflow", "AI-процессы", "AI-Workflows", "Flujos AI", "Workflows AI"),
    l("Linux systems", "Linux systémy", "Linux-системы", "Linux-Systeme", "Sistemas Linux", "Systèmes Linux"),
    l("Deployments", "Nasazení", "Деплои", "Deployments", "Despliegues", "Déploiements"),
    l("Product UI", "Produktové UI", "Продуктовый UI", "Produkt-UI", "UI de producto", "UI produit"),
  ],
  openLab: l("Open lab", "Otevřít lab", "Открыть лабораторию", "Lab öffnen", "Abrir laboratorio", "Ouvrir le labo"),
  ninetiesTitle: l(
    "Danila's Web Engineering Index",
    "Danilův index webového inženýrství",
    "Индекс веб-инжиниринга Данилы",
    "Danilas Web-Engineering-Index",
    "Índice de ingeniería web de Danila",
    "Index d'ingénierie web de Danila",
  ),
  ninetiesTagline: l("Best viewed with ambition", "Nejlépe zobrazíte s ambicí", "Лучше всего смотреть с амбициями", "Am besten mit Ambition betrachten", "Se ve mejor con ambición", "À regarder avec ambition"),
  launchKicker: l("Product launch panel", "Panel spouštění produktů", "Панель запуска продуктов", "Produkt-Launch-Panel", "Panel de lanzamiento de producto", "Panneau de lancement produit"),
  launchBadgeFast: l("Fast", "Rychlé", "Быстро", "Schnell", "Rápido", "Rapide"),
  launchBadgeShipped: l("Shipped", "Doručeno", "Доставлено", "Ausgeliefert", "Entregado", "Livré"),
  flatDelivery: l("Delivery", "Doručování", "Поставка", "Delivery", "Entrega", "Livraison"),
  flatReady: l("Production-ready", "Připraveno pro produkci", "Готово к продакшену", "Produktionsbereit", "Listo para producción", "Prêt pour la production"),
  flatProjects: l("projects", "projektů", "проектов", "Projekte", "proyectos", "projets"),
  flatRoles: l("5 roles", "5 rolí", "5 ролей", "5 Rollen", "5 roles", "5 rôles"),
  flatLanguages: l("6 languages", "6 jazyků", "6 языков", "6 Sprachen", "6 idiomas", "6 langues"),
  launchTabHome: l("Home", "Domů", "Главная", "Start", "Inicio", "Accueil"),
  launchTabProjects: l("Projects", "Projekty", "Проекты", "Projekte", "Proyectos", "Projets"),
  winFile: l("File", "Soubor", "Файл", "Datei", "Archivo", "Fichier"),
  winView: l("View", "Zobrazit", "Вид", "Ansicht", "Ver", "Affichage"),
  winRun: l("Run", "Spustit", "Запуск", "Ausführen", "Ejecutar", "Exécuter"),
  toggleOn: l("ON", "ZAP", "ВКЛ", "EIN", "ON", "ON"),
  toggleOff: l("OFF", "VYP", "ВЫКЛ", "AUS", "OFF", "OFF"),
  ariaScrollTop: l("Scroll to top", "Posunout nahoru", "Прокрутить наверх", "Nach oben scrollen", "Volver arriba", "Revenir en haut"),
  ariaPrimaryNav: l("Primary navigation", "Hlavní navigace", "Основная навигация", "Hauptnavigation", "Navegación principal", "Navigation principale"),
  ariaCapabilities: l("Capabilities", "Dovednosti", "Возможности", "Fähigkeiten", "Capacidades", "Capacités"),
  ariaSystemDashboard: l("System status dashboard", "Přehled stavu systému", "Панель статуса системы", "Systemstatus-Dashboard", "Panel de estado del sistema", "Tableau d'état du système"),
  ariaLab: l("Interactive portfolio lab", "Interaktivní portfolio lab", "Интерактивная лаборатория портфолио", "Interaktives Portfolio-Lab", "Laboratorio interactivo del portfolio", "Labo interactif du portfolio"),
  ariaArchitecture: l("Project architecture", "Architektura projektů", "Архитектура проектов", "Projektarchitektur", "Arquitectura de proyectos", "Architecture des projets"),
  ariaSelectArchitecture: l("Select project architecture", "Vybrat architekturu projektu", "Выбрать архитектуру проекта", "Projektarchitektur wählen", "Seleccionar arquitectura del proyecto", "Choisir l'architecture du projet"),
  ariaCv: l("Interactive CV", "Interaktivní CV", "Интерактивное CV", "Interaktives CV", "CV interactivo", "CV interactif"),
  ariaSkillGraph: l("Interactive skill graph", "Interaktivní graf dovedností", "Интерактивный граф навыков", "Interaktiver Skill-Graph", "Grafo interactivo de habilidades", "Graphe de compétences interactif"),
  ariaSkillNodes: l("Skill graph nodes", "Uzly grafu dovedností", "Узлы графа навыков", "Knoten des Skill-Graphen", "Nodos del grafo de habilidades", "Nœuds du graphe de compétences"),
  ariaCounter: l("Portfolio counter", "Počítadlo portfolia", "Счётчик портфолио", "Portfolio-Zähler", "Contador del portfolio", "Compteur du portfolio"),
} as const;

export const translations = {
  en: {
    nav: ["Profile", "Status", "Modes", "Lab", "Projects", "Architecture", "Experience", "CV", "Graph", "Skills", "Path", "Contact"],
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
    nav: ["Profil", "Stav", "Režimy", "Lab", "Projekty", "Architektura", "Praxe", "CV", "Graf", "Dovednosti", "Cesta", "Kontakt"],
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
    nav: ["Профиль", "Статус", "Режимы", "Лаб", "Проекты", "Архитектура", "Опыт", "CV", "Граф", "Навыки", "Путь", "Контакты"],
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
    nav: ["Profil", "Status", "Modi", "Lab", "Projekte", "Architektur", "Erfahrung", "CV", "Graph", "Skills", "Weg", "Kontakt"],
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
    nav: ["Perfil", "Estado", "Modos", "Lab", "Proyectos", "Arquitectura", "Experiencia", "CV", "Grafo", "Skills", "Ruta", "Contacto"],
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
    nav: ["Profil", "Statut", "Modes", "Lab", "Projets", "Architecture", "Expérience", "CV", "Graphe", "Skills", "Parcours", "Contact"],
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
