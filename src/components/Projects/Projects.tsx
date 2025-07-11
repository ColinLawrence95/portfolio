import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiJavascriptLine } from "react-icons/ri";
import { FaNodeJs, FaExternalLinkAlt, FaReact } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiExpress, SiFlask } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import "./Projects.css";

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

const Projects: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 900, height: 425 });

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
    let iconSize = 25;
    if (dimensions.width <= 768) {
        iconSize = 28;
    }
    return (
        <div className="projects-container" ref={containerRef}>
            <div className="projects-svg-wrapper">
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
                        stroke="#b247f5"
                        variants={draw}
                        custom={1}
                        style={shape}
                    />
                    <motion.line
                        x1="0"
                        y1={height}
                        x2={width}
                        y2={height}
                        stroke="#b247f5"
                        variants={draw}
                        custom={2}
                        style={shape}
                    />
                    <motion.line
                        x1={width}
                        y1={height}
                        x2={width}
                        y2="0"
                        stroke="#b247f5"
                        variants={draw}
                        custom={3}
                        style={shape}
                    />
                    <motion.line
                        x1={width}
                        y1="0"
                        x2="0"
                        y2="0"
                        stroke="#b247f5"
                        variants={draw}
                        custom={4}
                        style={shape}
                    />
                </motion.svg>
                <div className="projects-content">
                    <div className="projects-title" role="heading" aria-label="Projects">
                        <h1>PROJECTS</h1>
                    </div>
                    <motion.div
                        className="projects-elements"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.1, duration: 0.8 }}
                    >
                        <div className="projects-icon-title">
                            <FaReact id="projects-icon-react" size={25} aria-label="React" />
                            <TbBrandTypescript
                                id="projects-icon-typescript"
                                size={25}
                                aria-label="TypeScript"
                            />
                            <SiExpress id="projects-icon-flask" size={23} aria-label="Flask" />
                            <FaNodeJs
                                id="projects-icon-postgres"
                                size={22}
                                aria-label="PostgreSQL"
                            />
                            <h4 id="projects-name-jk">THE JIM KELLY TEAM</h4>
                        </div>
                        <motion.a
                            href="https:www.thejimkellyteam.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", bounce: 0.7 }}
                            aria-label="Visit thejimkellyteam.com"
                        >
                            <FaExternalLinkAlt id="projects-link" size={iconSize} />
                        </motion.a>
                    </motion.div>
                    <motion.p
                        id="project-desc-jk"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.1, duration: 0.8 }}
                    >
                       A REALTOR SITE WITH LIVE LISTINGS & REVIEWS
                    </motion.p>

                    <motion.div
                        className="projects-elements"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.2, duration: 0.8 }}
                    >
                        <div className="projects-icon-title">
                            <FaReact id="projects-icon-react" size={25} aria-label="React" />
                            <SiFlask id="projects-icon-flask" size={23} aria-label="Flask" />
                            <SiPostgresql
                                id="projects-icon-postgres"
                                size={22}
                                aria-label="PostgreSQL"
                            />
                            <h4 id="projects-name">BESTPRESSO</h4>
                        </div>
                        <motion.a
                            href="https://bestpresso.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", bounce: 0.7 }}
                            aria-label="Visit Bestpresso"
                        >
                            <FaExternalLinkAlt id="projects-link" size={iconSize} />
                        </motion.a>
                    </motion.div>
                    <motion.p
                        id="project-desc"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.2, duration: 0.8 }}
                    >
                        A DIGITAL MARKETPLACE FOR COFFEE
                    </motion.p>
                    <motion.div
                        className="projects-elements"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.3, duration: 0.8 }}
                    >
                        <div className="projects-icon-title">
                            <SiMongodb id="projects-icon-mongodb" size={25} aria-label="MongoDB" />
                            <SiExpress id="projects-icon-express" size={22} aria-label="Express" />
                            <FaNodeJs id="projects-icon-node" size={25} aria-label="Node.js" />
                            <h4 id="projects-name">HOLD OR FOLD</h4>
                        </div>
                        <motion.a
                            href="https://hold-or-fold-f5c8c8cb18fe.herokuapp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", bounce: 0.7 }}
                            aria-label="Visit Hold or Fold"
                        >
                            <FaExternalLinkAlt id="projects-link" size={iconSize} />
                        </motion.a>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.3, duration: 0.8 }}
                        id="project-desc"
                    >
                        A PVP CRYPTO BETTING EXPERIENCE
                    </motion.p>
                    <motion.div
                        className="projects-elements"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.4, duration: 0.8 }}
                    >
                        <div className="projects-icon-title">
                            <RiJavascriptLine size={30} aria-label="JavaScript" />
                            <FaNodeJs id="projects-icon-node" size={25} aria-label="Node.js" />
                            <h4 id="projects-name">RESUMANIA</h4>
                        </div>
                        <motion.a
                            href="https://colinlawrence95.github.io/Resumania/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", bounce: 0.7 }}
                            aria-label="Visit Resumania"
                        >
                            <FaExternalLinkAlt id="projects-link" size={iconSize} />
                        </motion.a>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.4, duration: 0.8 }}
                        id="project-desc"
                    >
                        A GAME ABOUT THE JOB MARKET
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

const shape: React.CSSProperties = {
    strokeWidth: 10,
    strokeLinecap: "butt",
    fill: "transparent",
};

export default Projects;
