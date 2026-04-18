"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Activity,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Braces,
  Check,
  ChevronDown,
  ChevronRight,
  Command,
  Database,
  Eye,
  FileDown,
  FileText,
  Filter,
  GitBranch,
  Globe2,
  LayoutDashboard,
  MapPin,
  Moon,
  MousePointer2,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  ArrowUp,
  Layers3,
  Terminal,
} from "lucide-react";
import {
  architectureViews,
  copilotPrompts,
  cvFilters,
  experience,
  languages,
  proofSignals,
  projects,
  skillGroups,
  skillGraphNodes,
  socialLinks,
  systemSignals,
  terminalCommands,
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
  const [proofMode, setProofMode] = useState(false);

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
    <main className={cn("portfolio-root", `mode-${visualMode}`, theme === "light" && "theme-light", proofMode && "proof-mode")}>
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

        <SystemDashboard reduceMotion={shouldReduceMotion ?? false} />

        <ModeDeck visualMode={visualMode} setVisualMode={updateVisualMode} copy={copy} />

        <PortfolioLab
          proofMode={proofMode}
          setProofMode={setProofMode}
          reduceMotion={shouldReduceMotion ?? false}
        />

        <ProjectSection copy={copy} reduceMotion={shouldReduceMotion ?? false} />

        <ArchitectureSection reduceMotion={shouldReduceMotion ?? false} />

        <ExperienceSection copy={copy} reduceMotion={shouldReduceMotion ?? false} />

        <InteractiveCvSection reduceMotion={shouldReduceMotion ?? false} />

        <SkillGraphSection reduceMotion={shouldReduceMotion ?? false} />

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
        initial: { x: roleDirection * 14, opacity: 0.7 },
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

function SystemDashboard({ reduceMotion }: { reduceMotion: boolean }) {
  const icons = [LayoutDashboard, Rocket, Activity, Globe2];

  return (
    <Reveal as="section" className="system-dashboard" aria-label="System status dashboard">
      <div className="section-heading compact">
        <p className="eyebrow">System status</p>
        <h2>Portfolio running as a live engineering surface.</h2>
      </div>

      <div className="status-grid">
        {systemSignals.map((signal, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.article
              className="status-card"
              key={signal.label}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.36, delay: index * 0.04, ease: "easeOut" }}
            >
              <div className="status-icon">
                <Icon size={21} />
              </div>
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
              <p>{signal.detail}</p>
            </motion.article>
          );
        })}
      </div>
    </Reveal>
  );
}

function PortfolioLab({
  proofMode,
  setProofMode,
  reduceMotion,
}: {
  proofMode: boolean;
  setProofMode: (value: boolean) => void;
  reduceMotion: boolean;
}) {
  return (
    <Reveal as="section" className="content-section portfolio-lab" id="lab" aria-label="Interactive portfolio lab">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">AI portfolio lab</p>
          <h2>Ask, inspect, verify.</h2>
        </div>
        <p>
          A portfolio should behave like software. This section adds a local copilot, terminal commands, and proof-first evidence so teams can inspect the signal faster.
        </p>
      </div>

      <div className="lab-grid">
        <CopilotPanel reduceMotion={reduceMotion} />
        <TerminalPanel reduceMotion={reduceMotion} />
        <ProofPanel proofMode={proofMode} setProofMode={setProofMode} reduceMotion={reduceMotion} />
      </div>
    </Reveal>
  );
}

function CopilotPanel({ reduceMotion }: { reduceMotion: boolean }) {
  const [query, setQuery] = useState(copilotPrompts[0].question);
  const normalizedQuery = query.trim().toLowerCase();
  const selectedPrompt =
    copilotPrompts.find((prompt) => {
      const questionMatches = prompt.question.toLowerCase().includes(normalizedQuery);
      const keywordMatches = prompt.keywords.some((keyword) => normalizedQuery.includes(keyword));

      return normalizedQuery.length > 1 && (questionMatches || keywordMatches);
    }) ?? copilotPrompts[0];

  return (
    <motion.article
      className="lab-panel copilot-panel"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div className="lab-panel-header">
        <Bot size={22} />
        <div>
          <p className="panel-kicker">Local copilot</p>
          <h3>Portfolio intelligence</h3>
        </div>
      </div>

      <label className="copilot-search">
        <Search size={17} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ask about AI, DevOps, projects, or experience"
        />
      </label>

      <div className="prompt-row">
        {copilotPrompts.map((prompt) => (
          <button type="button" key={prompt.question} onClick={() => setQuery(prompt.question)}>
            {prompt.question}
          </button>
        ))}
      </div>

      <motion.div
        className="copilot-answer"
        key={selectedPrompt.question}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <span>Matched answer</span>
        <p>{selectedPrompt.answer}</p>
        <div className="tag-row">
          {selectedPrompt.links.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
      </motion.div>
    </motion.article>
  );
}

function TerminalPanel({ reduceMotion }: { reduceMotion: boolean }) {
  const [activeCommand, setActiveCommand] = useState(0);
  const command = terminalCommands[activeCommand];

  return (
    <motion.article
      className="lab-panel terminal-panel"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div className="lab-window-bar">
        <span />
        <span />
        <span />
        <code>portfolio.shell</code>
      </div>

      <div className="terminal-body">
        <div className="terminal-command-list">
          {terminalCommands.map((item, index) => (
            <button
              className={cn(index === activeCommand && "is-active")}
              type="button"
              key={item.command}
              onClick={() => setActiveCommand(index)}
            >
              <Command size={14} />
              <span>{item.command}</span>
            </button>
          ))}
        </div>

        <motion.div
          className="terminal-output"
          key={command.command}
          initial={reduceMotion ? false : { opacity: 0, x: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <span className="terminal-prompt">$ {command.command}</span>
          <small>{command.description}</small>
          {command.output.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}

function ProofPanel({
  proofMode,
  setProofMode,
  reduceMotion,
}: {
  proofMode: boolean;
  setProofMode: (value: boolean) => void;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      className="lab-panel proof-panel"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div className="lab-panel-header">
        <ShieldCheck size={22} />
        <div>
          <p className="panel-kicker">Proof mode</p>
          <h3>Evidence overlay</h3>
        </div>
      </div>

      <button
        className={cn("proof-toggle", proofMode && "is-active")}
        type="button"
        aria-pressed={proofMode}
        onClick={() => setProofMode(!proofMode)}
      >
        <span>
          <Eye size={17} />
          {proofMode ? "Proof mode active" : "Activate proof mode"}
        </span>
        <strong>{proofMode ? "ON" : "OFF"}</strong>
      </button>

      <div className="proof-stack">
        {proofSignals.map((signal, index) => (
          <motion.div
            className="proof-signal"
            key={signal.label}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.28, delay: index * 0.03, ease: "easeOut" }}
          >
            <span>{signal.label}</span>
            <strong>{signal.value}</strong>
            {proofMode ? <p>{signal.detail}</p> : null}
            <div className="tag-row">
              {signal.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.article>
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

function ArchitectureSection({ reduceMotion }: { reduceMotion: boolean }) {
  const [activeProject, setActiveProject] = useState(0);
  const active = architectureViews[activeProject];
  const layerIcons = [MousePointer2, Database, Server, GitBranch];

  return (
    <Reveal as="section" className="content-section architecture-section" id="architecture" aria-label="Project architecture">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Architecture view</p>
          <h2>Project thinking, not only screenshots.</h2>
        </div>
        <p>
          The strongest portfolio projects are mapped as systems: user path, core engine, content model, growth layer, and delivery flow.
        </p>
      </div>

      <div className="architecture-shell">
        <div className="architecture-tabs" role="tablist" aria-label="Select project architecture">
          {architectureViews.map((view, index) => (
            <button
              className={cn(index === activeProject && "is-active")}
              type="button"
              role="tab"
              aria-selected={index === activeProject}
              key={view.project}
              onClick={() => setActiveProject(index)}
            >
              <Braces size={16} />
              {view.project}
            </button>
          ))}
        </div>

        <motion.div
          className="architecture-map"
          key={active.project}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <div className="architecture-intro">
            <div>
              <span>Selected system</span>
              <h3>{active.project}</h3>
            </div>
            <a href={active.href} target="_blank" rel="noreferrer">
              Open live
              <ArrowUpRight size={15} />
            </a>
          </div>
          <p>{active.summary}</p>

          <div className="architecture-layers">
            {active.layers.map((layer, index) => {
              const Icon = layerIcons[index % layerIcons.length];

              return (
                <motion.article
                  className="architecture-layer"
                  key={layer.name}
                  initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.26, delay: index * 0.04, ease: "easeOut" }}
                >
                  <Icon size={20} />
                  <h4>{layer.name}</h4>
                  <p>{layer.detail}</p>
                </motion.article>
              );
            })}
          </div>

          <div className="architecture-flow">
            {active.flow.map((step, index) => (
              <span key={step}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {step}
              </span>
            ))}
          </div>

          <div className="tag-row">
            {active.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

function InteractiveCvSection({ reduceMotion }: { reduceMotion: boolean }) {
  const [activeFilter, setActiveFilter] = useState(cvFilters[0].id);
  const selectedFilter = cvFilters.find((filter) => filter.id === activeFilter) ?? cvFilters[0];
  const filteredExperience = experience.filter((item) => selectedFilter.experience.includes(item.company));

  return (
    <Reveal as="section" className="content-section cv-section" id="cv" aria-label="Interactive CV">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Interactive CV</p>
          <h2>Filter the strongest signal.</h2>
        </div>
        <p>
          Recruiters can keep the PDF, while technical readers can filter the experience by AI, frontend, infrastructure, product, or teaching.
        </p>
      </div>

      <div className="cv-explorer">
        <div className="cv-sidebar">
          <div className="cv-sidebar-title">
            <Filter size={18} />
            <span>Choose track</span>
          </div>
          {cvFilters.map((filter) => (
            <button
              className={cn(filter.id === activeFilter && "is-active")}
              type="button"
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
          <a className="button-secondary" href="/cv/danila-anikin-cv.pdf">
            Download PDF
            <FileDown size={16} />
          </a>
        </div>

        <motion.div
          className="cv-results"
          key={selectedFilter.id}
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.26, ease: "easeOut" }}
        >
          <div className="cv-results-head">
            <FileText size={22} />
            <div>
              <span>{selectedFilter.label} track</span>
              <h3>{selectedFilter.summary}</h3>
            </div>
          </div>

          <div className="cv-role-grid">
            {filteredExperience.map((item) => (
              <article className="cv-role" key={item.company}>
                <span>{item.kind}</span>
                <h4>{item.company}</h4>
                <p>{item.role}</p>
              </article>
            ))}
          </div>

          <div className="tag-row">
            {selectedFilter.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

function SkillGraphSection({ reduceMotion }: { reduceMotion: boolean }) {
  const [activeNode, setActiveNode] = useState(skillGraphNodes[0].id);
  const selectedNode = skillGraphNodes.find((node) => node.id === activeNode) ?? skillGraphNodes[0];

  return (
    <Reveal as="section" className="content-section skill-graph-section" id="skill-graph" aria-label="Interactive skill graph">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Skill graph</p>
          <h2>Connected engineering range.</h2>
        </div>
        <p>
          The graph connects AI, automation, Linux, DevOps, software, product thinking, and teaching into one coherent engineering profile.
        </p>
      </div>

      <div className="skill-graph-layout">
        <div className="skill-graph" aria-label="Skill graph nodes">
          <div className="skill-hub">
            <Terminal size={23} />
            <strong>Danila</strong>
          </div>
          {skillGraphNodes.map((node, index) => (
            <motion.button
              className={cn("skill-node", node.id === activeNode && "is-active")}
              type="button"
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.32 }}
              transition={{ duration: 0.28, delay: index * 0.03, ease: "easeOut" }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {node.label}
            </motion.button>
          ))}
        </div>

        <motion.article
          className="skill-node-detail"
          key={selectedNode.id}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <p className="panel-kicker">Selected node</p>
          <h3>{selectedNode.label}</h3>
          <p>{selectedNode.detail}</p>
          <div className="connection-list">
            {selectedNode.links.map((link) => (
              <span key={link}>
                <GitBranch size={14} />
                {link}
              </span>
            ))}
          </div>
        </motion.article>
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
