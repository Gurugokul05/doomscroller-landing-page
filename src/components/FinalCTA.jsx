import { finalCta, site } from "../content.js";
import Button from "./Button.jsx";
import Reveal from "./Reveal.jsx";

export default function FinalCTA() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[360px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]"
        aria-hidden="true"
      />

      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2
          id="cta-heading"
          className="text-balance text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl"
        >
          {finalCta.heading}
        </h2>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {finalCta.subheading}
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={site.npm} external icon="prompt">
            {finalCta.primaryCta}
          </Button>
          <Button href={site.github} external variant="secondary" icon="github">
            {finalCta.secondaryCta}
          </Button>
        </div>

        <p className="text-sm text-muted/80">{finalCta.meta}</p>
      </Reveal>
    </section>
  );
}
