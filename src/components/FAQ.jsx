import { useId, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { faq } from "../content.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

function FaqItem({ item, index, open, onToggle }) {
  const reduceMotion = useReducedMotion();
  const uid = useId();
  const buttonId = `faq-${index}-button`;
  const panelId = `faq-${index}-panel`;

  return (
    <li className="overflow-hidden rounded-2xl border border-line bg-ink-soft/70 transition-colors duration-300 has-[button[aria-expanded=true]]:border-accent/40">
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.03] sm:px-6"
        >
          <span className="text-pretty text-base font-semibold text-white sm:text-lg">
            {item.question}
          </span>
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              open ? "rotate-45 border-accent/60 bg-accent/10 text-accent" : "border-line text-muted"
            }`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
            key={uid}
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-pretty text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-base">
              {item.answer}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      heading={faq.heading}
      subheading={faq.subheading}
    >
      <Reveal delay={0.1}>
        <ul className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {faq.items.map((item, i) => (
            <FaqItem
              key={item.question}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
