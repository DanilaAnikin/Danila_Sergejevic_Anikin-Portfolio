"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  FileDown,
  Globe2,
  MapPin,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";
import {
  capabilityIcons,
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

  const copy = translations[language];
  const activeMode = useMemo(
    () => visualModes.find((mode) => mode.id === visualMode) ?? visualModes[0],
    [visualMode],
  );
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

        <Hero copy={copy} activeMode={activeMode} reduceMotion={shouldReduceMotion ?? false} />

        <ModeDeck visualMode={visualMode} setVisualMode={updateVisualMode} copy={copy} />

        <ProjectSection copy={copy} reduceMotion={shouldReduceMotion ?? false} />

        <SkillsSection copy={copy} />

        <TimelineSection copy={copy} />

        <ContactSection copy={copy} />
      </div>
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
      <a className="brand" href="#profile" aria-label="Danila Sergejevic Anikin">
        <LogoMark />
        <span>
          <strong>Danila</strong>
          <small>AI / DevOps / Software</small>
        </span>
      </a>

      <nav className="primary-nav" aria-label="Primary navigation">
        {copy.nav.map((item, index) => {
          const targets = ["#profile", "#projects", "#skills", "#timeline", "#contact"];

          return (
            <a href={targets[index]} key={item}>
              {item}
            </a>
          );
        })}
      </nav>

      <div className="header-controls">
        <label className="control-select">
          <span>{copy.languageLabel}</span>
          <select value={language} onChange={(event) => setLanguage(event.target.value as Language)}>
            {languages.map((item) => (
              <option key={item.code} value={item.code}>
                {item.native}
              </option>
            ))}
          </select>
        </label>

        <label className="control-select mode-select">
          <span>{copy.modeLabel}</span>
          <select value={visualMode} onChange={(event) => setVisualMode(event.target.value as VisualMode)}>
            {visualModes.map((mode) => (
              <option key={mode.id} value={mode.id}>
                {mode.label}
              </option>
            ))}
          </select>
        </label>

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

function Hero({
  copy,
  activeMode,
  reduceMotion,
}: {
  copy: (typeof translations)[Language];
  activeMode: (typeof visualModes)[number];
  reduceMotion: boolean;
}) {
  return (
    <section className="hero-section" id="profile">
      <div className="hero-copy">
        <div className="status-line">
          <span className="status-dot" />
          {copy.availability}
        </div>
        <p className="eyebrow">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <p className="hero-subtitle">{copy.subtitle}</p>
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

      <motion.div
        className="identity-panel"
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <div className="window-bar">
          <span />
          <span />
          <span />
          <strong>danila.system</strong>
        </div>
        <div className="profile-card-core">
          <LogoMark large />
          <div>
            <p className="panel-kicker">Current mode</p>
            <h2>{activeMode.label}</h2>
            <p>{activeMode.description}</p>
          </div>
        </div>

        <div className="system-grid">
          {capabilityIcons.map((Icon, index) => (
            <div className="system-cell" key={index}>
              <Icon size={20} />
              <span>0{index + 1}</span>
            </div>
          ))}
        </div>

        <div className="terminal-strip" aria-label="Portfolio command line">
          <span>$</span>
          <code>run portfolio --mode={activeMode.id} --city=prague</code>
        </div>
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
    <section className="mode-deck" aria-label={copy.modeLabel}>
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
    </section>
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
    <section className="content-section" id="projects">
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
    </section>
  );
}

function SkillsSection({ copy }: { copy: (typeof translations)[Language] }) {
  return (
    <section className="content-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Stack</p>
        <h2>{copy.skillsTitle}</h2>
        <p>{copy.skillsIntro}</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article className="skill-card" key={group.title}>
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
            </article>
          );
        })}
      </div>
    </section>
  );
}

function TimelineSection({ copy }: { copy: (typeof translations)[Language] }) {
  return (
    <section className="content-section" id="timeline">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>{copy.timelineTitle}</h2>
        <p>{copy.timelineIntro}</p>
      </div>

      <div className="timeline">
        {copy.timeline.map(([title, text], index) => (
          <article className="timeline-item" key={`${title}-${index}`}>
            <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ copy }: { copy: (typeof translations)[Language] }) {
  return (
    <section className="contact-section" id="contact">
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
    </section>
  );
}

function LogoMark({ large = false }: { large?: boolean }) {
  return (
    <span className={cn("logo-mark", large && "large")} aria-hidden="true">
      <span>D</span>
      <span>A</span>
    </span>
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
