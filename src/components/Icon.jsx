const paths = {
  prompt: (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="M7 10.5 9.5 12 7 13.5" />
      <path d="M12 13.5h4" />
    </>
  ),
  swap: (
    <>
      <rect x="3" y="4" width="10" height="8" rx="2" />
      <rect x="11" y="12" width="10" height="8" rx="2" />
      <path d="M13 8h5.5M16 5.5 18.5 8 16 10.5" />
    </>
  ),
  return: (
    <>
      <path d="M20 11a8 8 0 1 0-2.3 5.7" />
      <path d="M20 5v6h-6" />
    </>
  ),
  sliders: (
    <>
      <path d="M5 20v-6M5 10V4M12 20v-9M12 7V4M19 20v-3M19 13V4" />
      <path d="M3 14h4M10 9h4M17 15h4" />
    </>
  ),
  hotkey: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <path d="M6.5 10h.01M10 10h.01M13.5 10h.01M17 10h.01M8 14h8" />
    </>
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.7-4.58 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  check: <path d="M4.5 12.5 9 17l10.5-10.5" />,
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.2 2.9 7.7 7 9 4.1-1.3 7-4.8 7-9V6l-7-3Z" />
      <path d="M9 12.2 11.2 14.5 15.2 10" />
    </>
  ),
};

const filled = new Set(["github"]);

export default function Icon({ name, className = "h-6 w-6" }) {
  const shape = paths[name];
  if (!shape) return null;

  const isFilled = filled.has(name);
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={isFilled ? 0 : 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {shape}
    </svg>
  );
}
