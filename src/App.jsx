import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import WorksWith from "./components/WorksWith.jsx";
import Features from "./components/Features.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

/**
 * LazyMotion + domAnimation loads only the animation features this page uses
 * (transforms, opacity, exit) instead of framer-motion's full feature bundle.
 * Components therefore use `m.*` rather than `motion.*`.
 */
export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Navbar />
      <main id="main">
        <Hero />
        <HowItWorks />
        <WorksWith />
        <Features />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </LazyMotion>
  );
}
