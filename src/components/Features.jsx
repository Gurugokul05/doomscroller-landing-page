import { features } from "../content.js";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

export default function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      heading={features.heading}
      subheading={features.subheading}
    >
      <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {features.items.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.07} className="h-full">
            <li className="group relative h-full overflow-hidden rounded-2xl border border-line bg-ink-soft/70 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-ink-raised/70 sm:p-7">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/10"
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-black/40 text-accent transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-accent/10">
                  <Icon name={feature.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
