import { site } from "../content.js";

const FLOW = [
  { state: "IDLE" },
  { event: "agent:started" },
  { state: "WORKING", active: true },
  { event: "agent:finished" },
  { state: "DONE" },
];

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 rotate-90 text-white/30 sm:rotate-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 12h14m0 0-5.5-5.5M18 12l-5.5 5.5" />
    </svg>
  );
}

/**
 * The hero visual: doomscroller's three states and the two events that move
 * between them. Rendered as real text (no media file), so it is readable by
 * assistive tech as-is — only the arrow glyphs are decorative.
 */
export default function StateMachineDiagram() {
  return (
    <figure className="relative m-0 w-full">
      <div
        className="pointer-events-none absolute -inset-x-6 -top-10 bottom-0 -z-10 rounded-[3rem] opacity-70 grain"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-ink-raised/80 to-ink p-4 shadow-[0_40px_120px_-50px_rgba(184,255,60,0.35)] sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" />
            state machine
          </span>
          <span className="font-mono text-[11px] font-medium text-muted">delaySeconds · 10</span>
        </div>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-1.5">
          {FLOW.map((step) =>
            step.state ? (
              <span
                key={step.state}
                className={`flex-1 rounded-xl border px-3 py-3 text-center font-display text-sm font-semibold tracking-wide sm:py-4 ${
                  step.active
                    ? "border-accent/45 bg-accent/10 text-accent"
                    : "border-line bg-black/40 text-white/80"
                }`}
              >
                {step.state}
              </span>
            ) : (
              <span
                key={step.event}
                className="flex shrink-0 flex-row items-center justify-center gap-2 py-1 sm:flex-col sm:gap-1.5 sm:px-2"
              >
                <span className="font-mono text-[10.5px] font-medium text-accent/90">
                  {step.event}
                </span>
                <Arrow />
              </span>
            )
          )}
        </div>

        <figcaption className="mt-5 border-t border-line pt-4 text-[11.5px] leading-relaxed text-muted">
          Nothing moves until an adapter emits agent:started, and it then waits delaySeconds so a
          short task finishes untouched. {site.hotkey} force-returns at any time while working, and
          starts a session while idle.
        </figcaption>
      </div>
    </figure>
  );
}
