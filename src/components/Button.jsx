import Icon from "./Icon.jsx";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3";

const sizes = {
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const variants = {
  primary:
    "bg-accent text-ink shadow-[0_0_0_0_rgba(184,255,60,0)] hover:bg-white hover:shadow-[0_8px_40px_-8px_rgba(184,255,60,0.55)] active:translate-y-px",
  secondary:
    "border border-line bg-white/[0.03] text-white hover:border-accent/60 hover:bg-white/[0.07] hover:text-accent active:translate-y-px",
  ghost: "text-muted hover:text-white",
};

/**
 * Renders an <a> when `href` is given, otherwise a <button>.
 */
export default function Button({
  href,
  external,
  children,
  variant = "primary",
  size = "lg",
  icon,
  className = "",
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      {icon && <Icon name={icon} className="h-5 w-5" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
