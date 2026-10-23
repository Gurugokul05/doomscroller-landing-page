import Reveal from "./Reveal.jsx";

/**
 * Section shell: consistent vertical rhythm, an accessible heading anchor,
 * and an optional eyebrow + subheading.
 */
export default function Section({
  id,
  eyebrow,
  heading,
  subheading,
  children,
  className = "",
  headingAlign = "center",
}) {
  const headingId = `${id}-heading`;
  const align = headingAlign === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      {(heading || subheading) && (
        <Reveal className={`flex flex-col gap-4 ${align}`}>
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </span>
          )}
          {heading && (
            <h2
              id={headingId}
              className="max-w-3xl text-balance text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl"
            >
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              {subheading}
            </p>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
