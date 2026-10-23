/**
 * Single source of truth for every string and link on the page.
 * Edit copy here — components read from this file only.
 *
 * Before launching:
 *  1. Replace `site.url` with the real domain (drives canonical + OG image URLs).
 *  2. Replace `public/og-image.svg` with a 1200x630 PNG and update `site.ogImage`.
 */

export const site = {
  name: "doomscroller",
  version: "0.2.0",
  url: "https://doomscroller.app",
  npmPackage: "@gurugokul/doomscroller",
  hotkey: "Ctrl+Alt+D",
  github: "https://github.com/Gurugokul05/doomscroller",
  npm: "https://www.npmjs.com/package/@gurugokul/doomscroller",
  latestRelease: "https://github.com/Gurugokul05/doomscroller/releases/tag/v0.2.0",
  changelog: "https://github.com/Gurugokul05/doomscroller/blob/main/CHANGELOG.md",
  contributing: "https://github.com/Gurugokul05/doomscroller/blob/main/CONTRIBUTING.md",
  issues: "https://github.com/Gurugokul05/doomscroller/issues",
  license: "MIT",
  licenseUrl: "https://github.com/Gurugokul05/doomscroller/blob/main/LICENSE",
  tagline: "Doomscroll while your AI coding agent works.",
  description:
    "Doomscroll while your AI coding agent works, then get pulled back when it finishes. A small Windows utility that turns agent thinking time into a break.",
  ogImage: "/og-image.svg",
  themeColor: "#07080a",
};

/**
 * Head/meta values. These are injected into index.html at build time by the
 * `htmlContent` plugin in vite.config.js, so this file is the single source of
 * truth for the document head too.
 */
export const seo = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  url: `${site.url}/`,
  image: `${site.url}${site.ogImage}`,
};

export const nav = {
  links: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Agents", href: "#works-with" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
  ],
  githubLabel: "GitHub",
  installLabel: "Install",
};

export const hero = {
  version: `v${site.version}`,
  versionHref: site.latestRelease,
  // Real, live badges — rendered as images in the hero.
  badges: [
    {
      src: "https://img.shields.io/npm/v/@gurugokul/doomscroller.svg?label=npm",
      alt: "npm version",
      width: 78,
    },
    {
      src: "https://img.shields.io/github/license/Gurugokul05/doomscroller.svg",
      alt: "MIT licence",
      width: 92,
    },
    {
      src: "https://img.shields.io/badge/platform-Windows-0078D6",
      alt: "Platform: Windows",
      width: 116,
    },
  ],
  // Split so the accent colour lands on the interesting half.
  headlineLead: "Doomscroll while your",
  headlineAccent: "AI coding agent works.",
  subhead:
    "Then get pulled back the moment it finishes. A small Windows utility that turns your agent's thinking time into a deliberate break.",
  primaryCta: "Install for Windows",
  secondaryCta: "View on GitHub",
  install: {
    label: "Install",
    command: "npm i -g @gurugokul/doomscroller",
    init: "doomscroller init command-code",
    note: "doomscroller init claude-code is the equivalent for Claude Code. Either one also creates ~/.doomscroller.json.",
    copyLabel: "Copy",
    copiedLabel: "Copied",
    copyAria: "Copy install commands",
  },
  requirementsLabel: "Requirements",
  meta: ["Windows 10/11", "Node.js 20+", "Windows PowerShell 5.1"],
};

export const howItWorks = {
  heading: "How it works",
  subheading: "Two events drive everything. Nothing else moves.",
  steps: [
    {
      icon: "prompt",
      title: "Your agent starts working",
      description:
        "An adapter emits agent:started. That is the only thing that can begin a session — there is no background observation of your screen.",
    },
    {
      icon: "swap",
      title: "After a short delay, you're switched",
      description:
        "It waits delaySeconds (10 by default), so a quick task finishes and nothing moves. Then it saves the agent window handle, minimizes the agent, and opens the next site in your rotation in a new browser window.",
    },
    {
      icon: "return",
      title: "The agent finishes and pulls you back",
      description:
        "On agent:finished it minimizes the browser, restores and focuses the agent window, plays a short two-tone chime, and logs the session.",
    },
  ],
};

export const worksWith = {
  heading: "Supported agents",
  subheading:
    "Each agent connects through one of four adapter patterns. Adapters only emit the two events — they never move windows themselves.",
  caption: "Supported agents, their adapter, and current implementation status.",
  columns: { agent: "Agent", adapter: "Adapter", status: "Status" },
  legend:
    "Working means implemented and covered by tests. Experimental means implemented, but not yet validated against that agent's current release.",
  footnote: `doomscroller is early — ${site.version} is the second release.`,
  rows: [
    { agent: "Claude Code", adapter: "hook", status: "Working" },
    { agent: "Command Code", adapter: "hook", status: "Working" },
    { agent: "GitHub Copilot CLI", adapter: "cli-wrapper", status: "Experimental" },
    { agent: "Antigravity", adapter: "ide-activity", status: "Experimental" },
    { agent: "VS Code + Copilot", adapter: "ide-activity", status: "Experimental" },
    { agent: "Other GUI IDEs (Cursor, etc.)", adapter: "ide-activity", status: "Experimental" },
    { agent: "Any foreground app", adapter: "hotkey", status: "Working" },
  ],
};

export const features = {
  heading: "What it does",
  subheading: "A narrow job: watch for two events, and move your windows between them.",
  items: [
    {
      icon: "sliders",
      title: "Four adapters, one state machine",
      description:
        "hotkey for any foreground app, hook for Claude Code and Command Code, cli-wrapper for terminal agents, and ide-activity for GUI editors. Whichever one fires, the same state machine takes over.",
    },
    {
      icon: "shield",
      title: "Opt-in, not always-on",
      description:
        "Nothing moves until an adapter emits agent:started. There is no background observation of your screen, and no account or telemetry to go with it.",
    },
    {
      icon: "hotkey",
      title: `${site.hotkey}, always available`,
      description:
        "Press it while working to force a return, or while idle to start a session yourself. It is observed globally but never swallowed, so it stays yours.",
    },
    {
      icon: "return",
      title: "A hard cap on every session",
      description:
        "maxDoomscrollSeconds defaults to 600. If the agent never reports finished, the session still ends and your window comes back. Set it to 0 to disable the cap.",
    },
  ],
};

export const faq = {
  heading: "Questions, answered",
  subheading: "The things people ask before installing.",
  items: [
    {
      question: "Is it safe?",
      answer:
        "It is opt-in: nothing moves until an adapter emits agent:started, and there is no background observation of your screen. " +
        `${site.hotkey} works while working and starts a session while idle — it is observed globally but not swallowed. ` +
        "The browser is minimized, never closed, and the agent window handle is saved before minimizing and restored on finish, force return, cap, or doomscroller stop. " +
        "IPC binds to 127.0.0.1, there is no telemetry and no account, and a failed browser launch or a denied focus change never crashes your agent.",
    },
    {
      question: "Which agents are supported?",
      answer:
        "Claude Code, Command Code and the hotkey adapter for any foreground app are working — implemented and covered by tests. " +
        "GitHub Copilot CLI, Antigravity, VS Code + Copilot and other GUI IDEs are experimental: implemented, but not yet validated against those agents' current releases. " +
        `doomscroller is early — ${site.version} is the second release.`,
    },
    {
      question: "How does it detect when my agent is finished?",
      answer:
        "Adapters emit exactly two events, agent:started and agent:finished, and never move windows themselves. " +
        "The hook adapters read them from your agent's own lifecycle hooks; doomscroller init merges those hooks into your settings file and backs it up first. " +
        "cli-wrapper runs a terminal agent in a PTY and derives start and finish from Enter, output, silence and process exit. " +
        "ide-activity watches Enter in a registered IDE window, then uses workspace file mtimes and process-tree CPU to decide when the agent has gone idle.",
    },
    {
      question: "Does it work on macOS or Linux?",
      answer:
        "Not yet. Window control is Win32-only, so 0.2.0 is Windows 10/11 only. Support on other platforms is planned, not present.",
    },
    {
      question: "Is it free?",
      answer: `Yes — MIT licensed, © 2026 Gurugokul. Install it with npm i -g ${site.npmPackage}. There is no account, no dashboard, no telemetry and no paid tier.`,
    },
  ],
};

export const finalCta = {
  heading: "Turn the waiting into a break.",
  subheading: `Install doomscroller, point it at your agent, and let it hand you the thinking time. One global install and one init command.`,
  primaryCta: "Install for Windows",
  secondaryCta: "View on GitHub",
  meta: "MIT licensed · Windows 10/11 · Node.js 20+",
};

export const footer = {
  tagline: "Turns your agent's thinking time into a deliberate break.",
  copyright: "MIT © 2026 Gurugokul",
  links: [
    { label: "GitHub", href: site.github, external: true },
    { label: "npm", href: site.npm, external: true },
    { label: "Changelog", href: site.changelog, external: true },
    { label: "Contributing", href: site.contributing, external: true },
    { label: "Issues", href: site.issues, external: true },
  ],
  note: "Not affiliated with any of the agents it supports. Those names belong to their respective owners.",
};
