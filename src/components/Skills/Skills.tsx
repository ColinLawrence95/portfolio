import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { RiJavascriptLine } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { SiPostgresql, SiMongodb, SiExpress, SiFlask, SiDjango } from "react-icons/si";

const Skills: React.FC = () => {
    return (
        <motion.div
            className="skills-container"
            animate={{
                y: [0, -5, 0],
                rotate: [0, -0.5, 0.5, 0],
            }}
            transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        >
            <div className="skills-title">
                <h1>SKILLS</h1>
            </div>
            <div className="skills-icons">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <RiJavascriptLine size={60} />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <FaNodeJs size={50} />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <FaReact size={50} />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <AiOutlinePython size={50} />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <SiPostgresql size={45} />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <SiMongodb size={45} />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <SiExpress size={45} />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <SiFlask size={45} />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                >
                    <SiDjango size={40} />
                </motion.div>
            </div>
        </motion.div>
    );
};
export default Skills;
