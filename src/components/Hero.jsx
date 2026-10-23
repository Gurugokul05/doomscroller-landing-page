import { m, useReducedMotion } from "framer-motion";
import { hero, site } from "../content.js";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import InstallBlock from "./InstallBlock.jsx";
import Reveal from "./Reveal.jsx";
import StateMachineDiagram from "./StateMachineDiagram.jsx";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
  };
  const item = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 grain opacity-80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.02fr_1fr] lg:gap-12 lg:pb-32 lg:pt-24">
        <m.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <m.a
            variants={item}
            href={hero.versionHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 text-xs font-medium text-accent transition-colors hover:border-accent/50 hover:bg-accent/[0.12]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" />
            {hero.version}
          </m.a>

          <m.h1
            variants={item}
            className="text-balance text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {hero.headlineLead} <span className="text-accent">{hero.headlineAccent}</span>
          </m.h1>

          <m.p
            variants={item}
            className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.subhead}
          </m.p>

          <m.div variants={item} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={site.npm} external icon="prompt">
              {hero.primaryCta}
            </Button>
            <Button href={site.github} external variant="secondary" icon="github">
              {hero.secondaryCta}
            </Button>
          </m.div>

          <m.div variants={item} className="w-full">
            <InstallBlock />
          </m.div>

          <m.div variants={item} className="flex flex-col gap-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              {hero.requirementsLabel}
            </span>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              {hero.meta.map((entry) => (
                <li key={entry} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-accent" />
                  {entry}
                </li>
              ))}
            </ul>
          </m.div>

          <m.ul variants={item} className="flex flex-wrap items-center gap-2">
            {hero.badges.map((badge) => (
              <li key={badge.src}>
                <img
                  src={badge.src}
                  alt={badge.alt}
                  width={badge.width}
                  height={20}
                  className="h-5 w-auto"
                />
              </li>
            ))}
          </m.ul>
        </m.div>

        <Reveal className="w-full" delay={0.15} y={28}>
          <StateMachineDiagram />
        </Reveal>
      </div>
    </section>
  );
}
