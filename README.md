# doomscroller — landing page

Single-page marketing site for **doomscroller**, a small Windows CLI utility that turns your AI
coding agent's thinking time into a deliberate break: after a short delay it minimizes the agent
window and opens the next site in your rotation, then pulls the agent back when the agent finishes.

> **Doomscroll while your AI coding agent works.**

This repo is just the landing page. It is a static site — no backend, no API calls, no analytics.

The product itself ships on npm as [`@gurugokul/doomscroller`](https://www.npmjs.com/package/@gurugokul/doomscroller).
The page is synced to **v0.3.1**.

---

## Stack

| Piece      | Choice                                    |
| ---------- | ----------------------------------------- |
| Build      | Vite 8                                    |
| UI         | React 19                                  |
| Styling    | Tailwind CSS 4 (via `@tailwindcss/vite`)  |
| Motion     | Framer Motion (`LazyMotion` + `domAnimation`) |
| Type       | Space Grotesk (display), Inter (body)     |
| Deployment | Vercel (static)                           |

Production bundle as built: **~38 kB CSS (7 kB gzip)** and **~341 kB JS (109 kB gzip)**, both
content-hashed and immutable-cacheable.

---

## Getting started

Requires Node 18+ (developed on Node 22).

```bash
npm install      # install dependencies
npm run dev      # dev server with HMR  -> http://localhost:5173
npm run build    # production build     -> dist/
npm run preview  # serve the built dist/ locally
```

### Heads-up: `.npmrc`

The repo ships a `.npmrc` containing `include=dev`. That is deliberate. Some machines (including
the one this was built on) set `omit=dev` in their **global** npm config, which silently skips
Vite, Tailwind and the React plugin — `npm run build` then fails with `vite: not found`. The
project-level `include=dev` overrides that so `npm install` and `npm ci` behave the same
everywhere. Leave it in place.

---

## Editing the copy

**Every string and link on the page lives in [`src/content.js`](./src/content.js).** Components
read from it and never hard-code copy, so you can rewrite the whole site without opening a
component.

| Export        | Controls                                                          |
| ------------- | ----------------------------------------------------------------- |
| `site`        | Name, version, domain, npm/GitHub URLs, hotkey, license            |
| `seo`         | Document `<title>`, meta description, canonical/OG URL             |
| `nav`         | Navbar links and button labels                                     |
| `hero`        | Headline (split into lead + accent), subhead, CTAs, install block  |
| `howItWorks`  | The three-step section                                             |
| `worksWith`   | The supported-agent table (agent, adapter, status) and legend      |
| `features`    | The four feature cards                                             |
| `faq`         | Questions and answers                                              |
| `finalCta`    | Closing call to action                                             |
| `footer`      | Footer links, tagline, copyright line and disclaimer               |

Two details worth knowing:

- **Head metadata.** `index.html` is the one file with placeholders such as `%SITE_TITLE%`. A
  small `htmlContent` plugin in `vite.config.js` swaps them for values from `content.js` at build
  time, so the domain still lives in exactly one place. The plugin imports `content.js` directly —
  keep that file to plain data (no JSX, no imports).
- **Icons.** `features.items[].icon` and `howItWorks.steps[].icon` are keys that must match an
  entry in `src/components/Icon.jsx` (`prompt`, `swap`, `return`, `sliders`, `hotkey`, `shield`,
  `check`, `github`). An unknown key renders nothing rather than erroring.

---

## Before you launch

The repo ships with a couple of placeholders still in it. Replace these:

1. **`src/content.js` → `site.url`** — currently `https://doomscroller.app`. This feeds `seo.url`
   and therefore the canonical tag and the absolute OG image URL.
2. **`public/og-image.svg`** — a placeholder. Most social platforms will not render SVG, so export
   a **1200×630 PNG** and (a) drop it in `public/`, (b) point `site.ogImage` at it.
3. **`public/favicon.svg`** — generic mark; swap for the real logo if there is one.
4. **`site.license` / `site.licenseUrl`** — currently MIT, pointing at `blob/main/LICENSE`.
5. **Footer attribution** — the site is intentionally not affiliated with any of the agents it
   supports; the footer says so. Keep or adjust that note as appropriate.

### Keeping the page in sync with a release

Everything version- and claim-related is data, not markup. When you cut a release:

- Bump **`site.version`** — it drives the hero badge (`v0.3.1`), the FAQ copy and the JSON-LD
  `softwareVersion`.
- Update **`site.latestRelease`** to the new release tag URL (the hero badge links to it).
- Re-check **`worksWith.rows`** against the product: the `status` column must stay honest.
  `Working` means implemented and covered by tests; `Experimental` means implemented but not
  validated against that agent's current release. Do not promote a row without the tests to back
  it, and do not add agents that are not supported.
- If anything is dropped from the product, delete it here rather than leaving a stale claim.

The page deliberately makes no macOS or Linux support claim, no productivity or time-saving
claim, no telemetry or analytics claim, and carries no social proof. Keep it that way.

---

## Deploying to Vercel

The site is fully static, so it is a zero-config deploy.

**From the dashboard**

1. Push this repo to GitHub, then **Add New → Project** in Vercel and import it.
2. Vercel detects the **Vite** preset. Confirm:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
3. Deploy. Every push to the default branch republishes; every PR gets a preview URL.

**From the CLI**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

No `vercel.json` is needed — there is a single route and nothing to rewrite. If you later add
client-side routing, add a catch-all rewrite to `/index.html`.

---

## Accessibility & performance notes

- **Semantic structure** — one `<h1>`, `<section>` per block wired to its heading with
  `aria-labelledby`, real `<ol>`/`<ul>` lists, `<header>`/`<main>`/`<footer>` landmarks.
- **Keyboard** — visible focus rings everywhere, a "Skip to content" link, the mobile menu is a
  real button with `aria-expanded`/`aria-controls` and closes on `Escape`, and the FAQ is a
  button-driven accordion with `aria-expanded`/`aria-controls` and labelled `role="region"`
  panels (no `tabindex` hacks).
- **Contrast** — body text and links meet WCAG AA against the near-black background; the neon
  accent is only used on dark surfaces or with dark text on top of it.
- **Motion** — `prefers-reduced-motion` is honoured twice over: a CSS media query neutralises
  transitions, and components read `useReducedMotion()` to drop the scroll reveals entirely rather
  than just speeding them up.
- **The hero diagram** is a `<figure>` with a real `<figcaption>`; the state names and event names
  are genuine text, so it is readable by assistive tech as-is. Only the arrow glyphs are decorative.
- **The agent table** is a real `<table>` with a `<caption>`, `scope="col"` headers and
  `scope="row"` agent names. The adapter column collapses under the agent name on narrow screens
  rather than forcing a horizontal scroll.
- **The install block** is selectable text, so the commands can still be copied when the Clipboard
  API is unavailable (it requires a secure context).
- **No fake content** — no testimonials, no user counts, no logos you do not have the rights to.
  Supported agents are plain text, and adapter statuses are stated rather than implied.

---

## Project structure

```
.
├── index.html                 # shell + SEO/OG meta (uses %TOKEN% placeholders)
├── vite.config.js             # plugins + htmlContent token injection
├── .npmrc                     # keeps devDependencies installing (see above)
├── public/
│   ├── favicon.svg
│   └── og-image.svg           # placeholder — export a 1200x630 PNG before launch
└── src/
    ├── content.js             # ← all copy and links live here
    ├── index.css              # Tailwind entry, design tokens, keyframes
    ├── main.jsx
    ├── App.jsx                # LazyMotion provider + page composition
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── StateMachineDiagram.jsx # IDLE -> WORKING -> DONE, the hero visual
        ├── InstallBlock.jsx        # npm commands + copy button
        ├── HowItWorks.jsx
        ├── WorksWith.jsx           # supported-agent table
        ├── Features.jsx
        ├── FAQ.jsx
        ├── FinalCTA.jsx
        ├── Footer.jsx
        └── Button.jsx  Icon.jsx  Logo.jsx  Reveal.jsx  Section.jsx
```

---

## License

MIT — see `site.licenseUrl` in `src/content.js`.
