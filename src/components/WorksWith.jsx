import { worksWith } from "../content.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

/**
 * Working = accent. Experimental = neutral, but always spelled out — the label
 * is the point, so it stays visible rather than being reduced to a colour.
 */
function StatusBadge({ status }) {
  const working = status === "Working";
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
        working
          ? "border-accent/40 bg-accent/10 text-accent"
          : "border-line bg-white/[0.04] text-muted"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${working ? "bg-accent" : "bg-muted/60"}`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}

export default function WorksWith() {
  return (
    <Section
      id="works-with"
      eyebrow="Compatibility"
      heading={worksWith.heading}
      subheading={worksWith.subheading}
    >
      <Reveal delay={0.1}>
        <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-ink-soft/70">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">{worksWith.caption}</caption>
            <thead>
              <tr className="border-b border-line">
                <th
                  scope="col"
                  className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted sm:px-6"
                >
                  {worksWith.columns.agent}
                </th>
                <th
                  scope="col"
                  className="hidden px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted sm:table-cell"
                >
                  {worksWith.columns.adapter}
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted sm:px-6"
                >
                  {worksWith.columns.status}
                </th>
              </tr>
            </thead>
            <tbody>
              {worksWith.rows.map((row) => (
                <tr key={row.agent} className="border-b border-line/60 last:border-0">
                  <th scope="row" className="px-4 py-3.5 font-medium text-white sm:px-6">
                    {row.agent}
                    <span className="mt-1 block font-mono text-[11px] font-normal text-muted sm:hidden">
                      {row.adapter}
                    </span>
                  </th>
                  <td className="hidden px-4 py-3.5 font-mono text-[11.5px] text-muted sm:table-cell">
                    {row.adapter}
                  </td>
                  <td className="px-4 py-3.5 sm:px-6">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-6 text-pretty text-sm leading-relaxed text-muted">{worksWith.legend}</p>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted/80">
          {worksWith.footnote}
        </p>
      </Reveal>
    </Section>
  );
}
