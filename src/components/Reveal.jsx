import { m, useReducedMotion } from "framer-motion";

/**
 * Fades + lifts its children into view once, when scrolled into the viewport.
 * Collapses to a plain element when the user prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, className = "", y = 22 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
