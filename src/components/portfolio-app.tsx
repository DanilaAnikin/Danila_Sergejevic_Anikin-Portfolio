"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronRight,
  FileDown,
  Globe2,
  MapPin,
  Moon,
  Sparkles,
  Sun,
  ArrowUp,
  Layers3,
} from "lucide-react";
import {
  experience,
  languages,
  projects,
  skillGroups,
  socialLinks,
  translations,
  visualModes,
  type Language,
  type VisualMode,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

const STORAGE_KEYS = {
  language: "danila-portfolio-language",
  visualMode: "danila-portfolio-visual-mode",
};

const modeShortcuts: Record<string, VisualMode> = {
  "1": "modern",
  "2": "1980s",
  "3": "1990s",
  "4": "2000s",
  "5": "2010s",
  "6": "windows1",
};

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onStoreChange);

      return () => media.removeEventListener("change", onStoreChange);
    },
    [query],
  );
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function PortfolioApp() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLanguage = window.localStorage.getItem(STORAGE_KEYS.language) as Language | null;
    return savedLanguage && languages.some((item) => item.code === savedLanguage) ? savedLanguage : "en";
  });
  const [visualMode, setVisualMode] = useState<VisualMode>(() => {
    if (typeof window === "undefined") {
      return "modern";
    }

    const savedMode = window.localStorage.getItem(STORAGE_KEYS.visualMode) as VisualMode | null;
    return savedMode && visualModes.some((item) => item.id === savedMode) ? savedMode : "modern";
  });
  const { resolvedTheme, setTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const updateLanguage = useCallback((nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem(STORAGE_KEYS.language, nextLanguage);
  }, []);

  const updateVisualMode = useCallback((nextMode: VisualMode) => {
    setVisualMode(nextMode);
    window.localStorage.setItem(STORAGE_KEYS.visualMode, nextMode);
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      const nextMode = modeShortcuts[event.key];
      if (nextMode) {
        updateVisualMode(nextMode);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [updateVisualMode]);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 560);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copy = translations[language];
  const theme = resolvedTheme ?? "dark";

  return (
    <main className={cn("portfolio-root", `mode-${visualMode}`, theme === "light" && "theme-light")}>
      <BackgroundSystem visualMode={visualMode} reduceMotion={shouldReduceMotion ?? false} />

      <div className="site-frame">
        <Header
          language={language}
          setLanguage={updateLanguage}
          visualMode={visualMode}
          setVisualMode={updateVisualMode}
          theme={theme}
          setTheme={setTheme}
          copy={copy}
        />

        <Hero copy={copy} reduceMotion={shouldReduceMotion ?? false} />

        <CapabilityMarquee reduceMotion={shouldReduceMotion ?? false} />

        <ModeDeck visualMode={visualMode} setVisualMode={updateVisualMode} copy={copy} />

        <ProjectSection copy={copy} reduceMotion={shouldReduceMotion ?? false} />

        <ExperienceSection copy={copy} reduceMotion={shouldReduceMotion ?? false} />

        <SkillsSection copy={copy} />

        <TimelineSection copy={copy} />

        <ContactSection copy={copy} />
      </div>

      {showScrollTop ? (
        <motion.button
          className="scroll-top-button"
          type="button"
          aria-label="Scroll to top"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={18} />
          <span>Top</span>
        </motion.button>
      ) : null}
    </main>
  );
}

function Header({
  language,
  setLanguage,
  visualMode,
  setVisualMode,
  theme,
  setTheme,
  copy,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  visualMode: VisualMode;
  setVisualMode: (mode: VisualMode) => void;
  theme: string | undefined;
  setTheme: (theme: string) => void;
  copy: (typeof translations)[Language];
}) {
  return (
    <header className="site-header">
      <a className="brand" href="#profile" aria-label="Danila Sergejevič Anikin">
        <LogoMark />
        <span>
          <strong>Danila</strong>
          <small>AI / DevOps / Software</small>
        </span>
      </a>

      <nav className="primary-nav" aria-label="Primary navigation">
        {copy.nav.map((item, index) => {
          const targets = ["#profile", "#projects", "#experience", "#skills", "#timeline", "#contact"];

          return (
            <a href={targets[index]} key={item}>
              {item}
            </a>
          );
        })}
      </nav>

      <div className="header-controls">
        <CustomSelect
          label={copy.languageLabel}
          value={language}
          options={languages.map((item) => ({
            value: item.code,
            label: item.native,
            meta: item.label,
          }))}
          onChange={(value) => setLanguage(value as Language)}
        />

        <CustomSelect
          label={copy.modeLabel}
          value={visualMode}
          options={visualModes.map((mode) => ({
            value: mode.id,
            label: mode.label,
            meta: mode.short,
          }))}
          onChange={(value) => setVisualMode(value as VisualMode)}
          wide
        />

        <button
          className="icon-button"
          type="button"
          aria-label={`${copy.themeLabel}: ${theme === "dark" ? copy.dark : copy.light}`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Moon size={17} /> : <Sun size={17} />}
        </button>
      </div>
    </header>
  );
}

function CustomSelect({
  label,
  value,
  options,
  onChange,
  wide = false,
}: {
  label: string;
  value: string;
  options: Array<{ value: string; label: string; meta: string }>;
  onChange: (value: string) => void;
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.value === value) ?? options[0];

  return (
    <div className={cn("custom-select", wide && "wide")} onBlur={() => setOpen(false)}>
      <span>{label}</span>
      <button
        className="custom-select-trigger"
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span>
          <strong>{selected.label}</strong>
          <small>{selected.meta}</small>
        </span>
        <ChevronDown size={16} />
      </button>

      {open ? (
        <motion.div
          className="custom-select-menu"
          role="listbox"
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
        >
          {options.map((option) => (
            <button
              type="button"
              role="option"
              aria-selected={option.value === value}
              className={cn(option.value === value && "is-selected")}
              key={option.value}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              <span>{option.label}</span>
              <small>{option.meta}</small>
            </button>
          ))}
        </motion.div>
      ) : null}
    </div>
  );
}

function Hero({
  copy,
  reduceMotion,
}: {
  copy: (typeof translations)[Language];
  reduceMotion: boolean;
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const activeRole = copy.roleWords[roleIndex % copy.roleWords.length];
  const roleDirection = roleIndex % 2 === 0 ? 1 : -1;
  const roleMotion = isMobile
    ? {
        initial: { x: roleDirection * 14, opacity: 0.34 },
        animate: { x: 0, opacity: 1 },
      }
    : {
        initial: { y: 24, opacity: 0.24, filter: "blur(7px)" },
        animate: { y: 0, opacity: 1, filter: "blur(0px)" },
      };

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % copy.roleWords.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [copy.roleWords.length, reduceMotion]);

  return (
    <section className="hero-section" id="profile">
      <div className="hero-copy">
        <p className="eyebrow">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <div className="role-rotator" aria-live="polite">
          <span>{copy.subtitle}</span>
          <span className="role-window">
            <motion.strong
              key={activeRole}
              initial={reduceMotion ? false : roleMotion.initial}
              animate={reduceMotion ? undefined : roleMotion.animate}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {activeRole}
            </motion.strong>
          </span>
        </div>
        <p className="hero-intro">{copy.intro}</p>

        <div className="hero-actions">
          <a className="button-primary" href="#projects">
            {copy.primaryCta}
            <ArrowUpRight size={17} />
          </a>
          <a className="button-secondary" href="/cv/danila-anikin-cv.pdf">
            {copy.secondaryCta}
            <FileDown size={17} />
          </a>
        </div>

        <p className="cv-note">{copy.cvNote}</p>
      </div>
    </section>
  );
}

function ExperienceSection({
  copy,
  reduceMotion,
}: {
  copy: (typeof translations)[Language];
  reduceMotion: boolean;
}) {
  return (
    <Reveal as="section" className="content-section experience-section" id="experience">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">CV signal</p>
          <h2>{copy.experienceTitle}</h2>
        </div>
        <p>{copy.experienceIntro}</p>
      </div>

      <div className="experience-grid">
        {experience.map((item, index) => (
          <motion.article
            className="experience-card"
            key={item.company}
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.24 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
          >
            <div className="experience-topline">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{item.kind}</small>
            </div>
            <div className="experience-title">
              <Layers3 size={22} />
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="tag-row">
              {item.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Reveal>
  );
}

function CapabilityMarquee({ reduceMotion }: { reduceMotion: boolean }) {
  const items = [
    "AI engineering",
    "Automation systems",
    "Linux administration",
    "DevOps delivery",
    "Full-stack software",
    "Applied product work",
    "Infrastructure",
    "Clean interfaces",
  ];

  return (
    <section className="capability-marquee" aria-label="Capabilities">
      <motion.div
        className="marquee-track"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>
            <Sparkles size={15} />
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function ModeDeck({
  visualMode,
  setVisualMode,
  copy,
}: {
  visualMode: VisualMode;
  setVisualMode: (mode: VisualMode) => void;
  copy: (typeof translations)[Language];
}) {
  return (
    <Reveal as="section" className="mode-deck" aria-label={copy.modeLabel}>
      <div className="section-heading compact">
        <p className="eyebrow">{copy.modeLabel}</p>
        <h2>{copy.command}</h2>
      </div>

      <div className="mode-grid">
        {visualModes.map((mode, index) => (
          <button
            className={cn("mode-tile", visualMode === mode.id && "is-active")}
            key={mode.id}
            type="button"
            onClick={() => setVisualMode(mode.id)}
            aria-pressed={visualMode === mode.id}
          >
            <span className="shortcut">{index + 1}</span>
            <strong>{mode.label}</strong>
            <small>{mode.short}</small>
          </button>
        ))}
      </div>
    </Reveal>
  );
}

function ProjectSection({
  copy,
  reduceMotion,
}: {
  copy: (typeof translations)[Language];
  reduceMotion: boolean;
}) {
  return (
    <Reveal as="section" className="content-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Portfolio</p>
        <h2>{copy.projectsTitle}</h2>
        <p>{copy.projectsIntro}</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.a
            className={cn("project-card", `accent-${project.accent}`)}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            key={project.title}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            transition={{ duration: 0.2, delay: index * 0.03, ease: "easeOut" }}
          >
            <div className="project-preview">
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <code>{project.href.replace("https://", "")}</code>
              </div>
              <Image
                src={project.image}
                alt={`${project.title} website preview`}
                width={1440}
                height={1000}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority={index === 0}
              />
              <span className="preview-shine" />
              <div className="preview-badge">
                <span>{copy.openProject}</span>
                <ArrowUpRight size={14} />
              </div>
            </div>

            <div className="project-body">
              <p className="project-eyebrow">{project.eyebrow}</p>
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <ArrowUpRight size={20} />
              </div>
              <p>{project.description}</p>
              <strong>{project.impact}</strong>
              <div className="tag-row">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Reveal>
  );
}

function SkillsSection({ copy }: { copy: (typeof translations)[Language] }) {
  return (
    <Reveal as="section" className="content-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Stack</p>
        <h2>{copy.skillsTitle}</h2>
        <p>{copy.skillsIntro}</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <motion.article
              className="skill-card"
              key={group.title}
              whileHover={{ y: -4, borderColor: "var(--accent)" }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="skill-title">
                <Icon size={22} />
                <h3>{group.title}</h3>
              </div>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    <Check size={14} />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Reveal>
  );
}

function TimelineSection({ copy }: { copy: (typeof translations)[Language] }) {
  return (
    <Reveal as="section" className="content-section" id="timeline">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>{copy.timelineTitle}</h2>
        <p>{copy.timelineIntro}</p>
      </div>

      <div className="timeline">
        {copy.timeline.map(([title, text], index) => (
          <motion.article
            className="timeline-item"
            key={`${title}-${index}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
          >
            <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Reveal>
  );
}

function ContactSection({ copy }: { copy: (typeof translations)[Language] }) {
  return (
    <Reveal as="section" className="contact-section" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>{copy.contactTitle}</h2>
        <p>{copy.contactIntro}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <MapPin size={21} />
          <span>{copy.location}</span>
        </div>
        <div className="contact-card">
          <BriefcaseBusiness size={21} />
          <span>{copy.status}</span>
        </div>
        {socialLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a className="contact-card" href={link.href} target="_blank" rel="noreferrer" key={link.label}>
              <Icon size={21} />
              <span>{link.display}</span>
              <ChevronRight size={18} />
            </a>
          );
        })}
      </div>
    </Reveal>
  );
}

function LogoMark({ large = false }: { large?: boolean }) {
  return (
    <span className={cn("logo-mark", large && "large")} aria-hidden="true">
      <svg viewBox="0 0 96 96" focusable="false">
        <path className="logo-track" d="M24 73V23h23c17 0 28 10 28 25S64 73 47 73H24Z" />
        <path className="logo-core" d="M35 62V34h12c10 0 16 5 16 14s-6 14-16 14H35Z" />
        <path className="logo-signal" d="M54 74 72 22l18 52" />
        <path className="logo-signal thin" d="M62 58h20" />
      </svg>
    </span>
  );
}

function Reveal({
  as = "div",
  className,
  children,
  ...props
}: {
  as?: "div" | "section";
  className?: string;
  children: React.ReactNode;
  id?: string;
  "aria-label"?: string;
}) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.16 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </Component>
  );
}

function BackgroundSystem({
  visualMode,
  reduceMotion,
}: {
  visualMode: VisualMode;
  reduceMotion: boolean;
}) {
  return (
    <div className="background-system" aria-hidden="true">
      <div className="grid-layer" />
      <div className="scanline-layer" />
      <div className="noise-layer" />
      {visualMode === "modern" && !reduceMotion ? (
        <motion.div
          className="signal-layer"
          animate={{ backgroundPosition: ["0px 0px", "120px 80px"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      ) : null}
      <Sparkles className="corner-spark" size={22} />
      <Globe2 className="corner-globe" size={24} />
    </div>
  );
}
