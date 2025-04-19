import React from "react";
import { motion } from "framer-motion";
import { RiJavascriptLine } from "react-icons/ri";
import { FaNodeJs, FaExternalLinkAlt, FaReact } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiExpress, SiFlask } from "react-icons/si";

import "./Projects.css";

const Projects: React.FC = () => {
    return (
        <motion.div
            className="projects-container"
            animate={{
                y: [0, -4, 0],
                rotate: [0, .5, -.5, 0],
            }}
            transition={{
                duration: 11,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        >
            <div className="projects-title">
                <h1>PROJECTS</h1>
            </div>
            <div className="projects-elements">
                <div className="projects-icon-title">
                    <RiJavascriptLine size={30} />
                    <FaNodeJs id="projects-icon-node" size={25} />
                    <h4 id="projects-name">RESUMANIA</h4>
                </div>
                <motion.a
                    href="https://colinlawrence95.github.io/Resumania/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <FaExternalLinkAlt id="projects-link" size="25" />
                </motion.a>
            </div>
            <p id="project-desc">A GAME ABOUT THE JOB MARKET</p>
            <div className="projects-elements">
                <div className="projects-icon-title">
                    <SiMongodb id="projects-icon-mongodb" size={25} />
                    <SiExpress id="projects-icon-express" size={22} />
                    <FaNodeJs id="projects-icon-node" size={25} />

                    <h4 id="projects-name">HOLD OR FOLD</h4>
                </div>
                <motion.a
                    href="https://hold-or-fold-f5c8c8cb18fe.herokuapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <FaExternalLinkAlt id="projects-link" size="25" />
                </motion.a>
            </div>
            <p id="project-desc">A PVP CRYPTO BETTING EXPERIENCE</p>
            <div className="projects-elements">
                <div className="projects-icon-title">
                    <FaReact id="projects-icon-react" size={25} />
                    <SiFlask id="projects-icon-flask" size={23} />
                    <SiPostgresql id="projects-icon-postgres" size={22} />

                    <h4 id="projects-name">BESTPRESSO</h4>
                </div>
                <motion.a
                    href="https://bestpresso.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <FaExternalLinkAlt id="projects-link" size="25" />
                </motion.a>
            </div>
            <p id="project-desc">A DIGITAL MARKETPLACE FOR COFFEE</p>
        </motion.div>
    );
};
export default Projects;
