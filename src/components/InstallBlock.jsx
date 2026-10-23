import { useState } from "react";
import { hero } from "../content.js";

/**
 * The install commands, with a copy button. The command text is also plain
 * selectable text, so copying still works if the Clipboard API is unavailable
 * (it needs a secure context).
 */
export default function InstallBlock() {
  const [copied, setCopied] = useState(false);
  const { install } = hero;
  const both = `${install.command}\n${install.init}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(both);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-xl border border-line bg-black/40">
      <div className="flex items-center justify-between gap-3 border-b border-line px-3 py-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          {install.label}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={install.copyAria}
          className="rounded-md border border-line px-2.5 py-1 text-[11px] font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
        >
          {copied ? install.copiedLabel : install.copyLabel}
        </button>
      </div>

      <pre className="overflow-x-auto px-3.5 py-3 text-[12.5px] leading-relaxed sm:text-[13px]">
        <code className="font-mono text-white/90">
          <span className="text-muted select-none">{"$ "}</span>
          {install.command}
          {"\n"}
          <span className="text-muted select-none">{"$ "}</span>
          {install.init}
        </code>
      </pre>

      <p className="border-t border-line px-3.5 py-2.5 text-[11.5px] leading-relaxed text-muted">
        {install.note}
      </p>

      <span aria-live="polite" className="sr-only">
        {copied ? install.copiedLabel : ""}
      </span>
    </div>
  );
}
