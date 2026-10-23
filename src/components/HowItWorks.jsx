import { howItWorks } from "../content.js";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="The loop"
      heading={howItWorks.heading}
      subheading={howItWorks.subheading}
    >
      <div className="relative mt-14">
        <div
          className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-line to-transparent md:block"
          aria-hidden="true"
        />

        <ol className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="h-full">
              <li className="group relative flex h-full flex-col gap-4 rounded-2xl border border-line bg-ink-soft/70 p-6 transition-colors duration-300 hover:border-accent/40">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-black/40 text-accent transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-accent/10">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-sm font-semibold tabular-nums text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-balance text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
