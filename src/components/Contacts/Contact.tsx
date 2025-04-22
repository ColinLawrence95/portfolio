import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 900, height: 140 });


  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { width, height } = dimensions;

  return (
    <div>
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={containerRef}
      >
        <div className="contact-svg-wrapper">
          <motion.svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid meet"
            initial="hidden"
            animate="visible"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
          >
            <motion.line
              x1="0"
              y1="0"
              x2="0"
              y2={height}
              stroke="#34a4fa"
              variants={draw}
              custom={1}
              style={shape}
            />
            <motion.line
              x1="0"
              y1={height}
              x2={width}
              y2={height}
              stroke="#34a4fa"
              variants={draw}
              custom={2}
              style={shape}
            />
            <motion.line
              x1={width}
              y1={height}
              x2={width}
              y2="0"
              stroke="#34a4fa"
              variants={draw}
              custom={3}
              style={shape}
            />
            <motion.line
              x1={width}
              y1="0"
              x2="0"
              y2="0"
              stroke="#34a4fa"
              variants={draw}
              custom={4}
              style={shape}
            />
          </motion.svg>
          <div
            className="contact-title"
            role="heading"
            aria-label="I make full stack web apps"
          >
            <h1>I MAKE FULL STACK WEB APPS</h1>
          </div>
          <div className="contact-icons">
            <motion.a
              href="https://github.com/colinlawrence95"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", bounce: 0.7,  delay: 1, duration: 0.8 }}
              aria-label="GitHub profile"
            >
              <FaGithub size={window.innerWidth <= 768 ? 32 : 52} />
            </motion.a>
            <motion.a
              href="mailto:colin.lawrence95@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", bounce: 0.7,  delay: 1.2, duration: 0.8 }}
              aria-label="Email contact"
            >
              <HiOutlineMail size={window.innerWidth <= 768 ? 32 : 52} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/colin-lawrence-3a098a1b7/"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", bounce: 0.7,  delay: 1.4, duration: 0.8 }}
              aria-label="LinkedIn profile"
            >
              <AiOutlineLinkedin size={window.innerWidth <= 768 ? 32 : 52} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const shape: React.CSSProperties = {
  strokeWidth: 10,
  strokeLinecap: "butt",
  fill: "transparent",
};

export default Contact;