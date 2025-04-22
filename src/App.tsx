import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contacts/Contact";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import SignOff from "./components/SignOff/SignOff";

// Define animation variants for sliding in
const slideVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

// Component wrapper to handle scroll animation
interface AnimatedSectionProps {
  children: React.ReactNode;
  slideFrom: "left" | "right";
  index: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, slideFrom, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const duration = 0.5 + index * 0.2

  return (
    <motion.div
      ref={ref}
      initial={slideFrom === "left" ? "hiddenLeft" : "hiddenRight"}
      animate={isInView ? "visible" : slideFrom === "left" ? "hiddenLeft" : "hiddenRight"}
      variants={slideVariants}
      transition={{duration, ease: "easeOut"}}
      className="section"
    >
      {children}
    </motion.div>
  );
};

// Type for section objects
interface Section {
  component: React.ReactNode;
  slideFrom: "left" | "right";
}

function App() {
  // Define sections with their slide direction
  const sections: Section[] = [
    { component: <Contact />, slideFrom: "left" },
    { component: <Skills />, slideFrom: "right" },
    { component: <Projects />, slideFrom: "left" },
    { component: <SignOff />, slideFrom: "right" },
  ];

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/portfolio/"
            element={
              <>
              <title>Colin Lawrence - Portfolio</title>
                <Hero />
                {sections.map((section, index) => (
                  <AnimatedSection key={index} slideFrom={section.slideFrom} index={index}>
                    {section.component}
                  </AnimatedSection>
                ))}
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;