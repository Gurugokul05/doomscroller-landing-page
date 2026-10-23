import { site } from "../content.js";

export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-7 w-7 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="64" height="64" rx="14" fill="currentColor" className="text-ink-raised" />
        <rect
          x="9"
          y="16"
          width="27"
          height="20"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          className="text-white/50"
        />
        <rect x="28" y="30" width="27" height="20" rx="4" fill="#b8ff3c" />
        <path
          d="M24 43.5h12M31 39.5l4.5 4-4.5 4"
          fill="none"
          stroke="#07080a"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight text-white">{site.name}</span>
    </span>
  );
}
