import React from "react";
import { motion } from "framer-motion";
import { RiJavascriptLine } from "react-icons/ri";
import { FaNodeJs, FaExternalLinkAlt } from "react-icons/fa";

import "./Projects.css";

const Projects: React.FC = () => {
    return (
        <motion.div
            className="projects-container"
            animate={{
                y: [0, -6, 0],
                rotate: [0, 1, -1, 0],
            }}
            transition={{
                duration: 11,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        >
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            <div className="projects-resumania">
                <div className="projects-resumania-icon-title">
                    <RiJavascriptLine size={30} />
                    <FaNodeJs size={25} />
                    <h4 id="projects-resumania-title">RESUMANIA</h4>
                </div>
                <FaExternalLinkAlt id="projects-link" size={20}/>
            </div>
            <p id="project-resumania-desc">A GAME ABOUT THE JOB MARKET</p>
        </motion.div>
    );
};
export default Projects;
