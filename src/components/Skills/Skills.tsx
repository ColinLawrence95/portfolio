import React, { useRef, useState, useEffect } from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { SiPostgresql, SiMongodb, SiExpress, SiFlask, SiDjango } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

const Skills: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 900, height: 140 });
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = 0.5 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
                    opacity: { delay, duration: 0.01 },
                },
            };
        },
    };

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
    let iconSize = 44;
    if (dimensions.width <= 768) {
        iconSize = 28;
    }

    return (
        <motion.div
            className="skills-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            ref={containerRef}
        >
            <div className="skills-svg-wrapper">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox={`0 0 ${width} ${height}`}
                    preserveAspectRatio="xMidYMid meet"
                    initial="hidden"
                    animate="visible"
                    style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
                >
                    <motion.rect
                        x="0"
                        y="0"
                        width={width}
                        height={height}
                        rx="40"
                        stroke="#30cf1b"
                        variants={draw}
                        custom={1}
                        style={shape}
                    />
                </motion.svg>
                <div className="skills-title" role="heading" aria-label="Technical skills">
                    <h1>SKILLS</h1>
                </div>
                <div className="skills-icons">
                    <motion.div
                        className="tooltip"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        aria-label="JavaScript"
                    >
                        <TbBrandTypescript size={iconSize} />
                        <span className="tooltip-text">TypeScript</span>
                    </motion.div>
                    <motion.div
                        className="tooltip"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.1, duration: 0.8 }}
                        aria-label="Node.js"
                    >
                        <FaNodeJs size={iconSize} />
                        <span className="tooltip-text">Node.js</span>
                    </motion.div>
                    <motion.div
                        className="tooltip"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.2, duration: 0.8 }}
                        aria-label="React"
                    >
                        <FaReact size={iconSize} />
                        <span className="tooltip-text">React</span>
                    </motion.div>
                    <motion.div
                        className="tooltip"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.3, duration: 0.8 }}
                        aria-label="Python"
                    >
                        <AiOutlinePython size={iconSize} />
                        <span className="tooltip-text">Python</span>
                    </motion.div>
                    <motion.div
                        className="tooltip"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.4, duration: 0.8 }}
                        aria-label="PostgreSQL"
                    >
                        <SiPostgresql size={iconSize} />
                        <span className="tooltip-text">PostgreSQL</span>
                    </motion.div>
                    <motion.div
                        className="tooltip"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.5, duration: 0.8 }}
                        aria-label="MongoDB"
                    >
                        <SiMongodb size={iconSize} />
                        <span className="tooltip-text">MongoDB</span>
                    </motion.div>
                    <motion.div
                        className="tooltip"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.6, duration: 0.8 }}
                        aria-label="Express"
                    >
                        <SiExpress size={iconSize} />
                        <span className="tooltip-text">Express</span>
                    </motion.div>
                    <motion.div
                        className="tooltip"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.7, dynamic: 0.8 }}
                        aria-label="Flask"
                    >
                        <SiFlask size={iconSize} />
                        <span className="tooltip-text">Flask</span>
                    </motion.div>
                    <motion.div
                        className="tooltip"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.8, duration: 0.8 }}
                        aria-label="Django"
                    >
                        <SiDjango size={iconSize} />
                        <span className="tooltip-text">Django</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const shape: React.CSSProperties = {
    strokeWidth: 10,
    strokeLinecap: "butt",
    fill: "transparent",
};

export default Skills;
