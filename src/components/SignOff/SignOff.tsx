import React from "react";
import { motion } from "framer-motion";
import "./SignOff.css";
import { IoDocumentTextOutline } from "react-icons/io5";

const SignOff: React.FC = () => {
    return (
        <motion.div
            className="sign-container"
            animate={{
                y: [0, -2, 0],
                rotate: [0, 0.7, -0.7, 0],
            }}
            transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        >
            <div className="sign-title">
                <h1>THANKS FOR STOPPING BY</h1>
            </div>
            <h4 id="resume">RESUME</h4>
            <motion.a
                id="resume-icon"
                href="/portfolio/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", bounce: 0.7 }}
                style={{ display: "inline-block", color: "inherit", textDecoration: "none" }}
            >
                <IoDocumentTextOutline size={60} />
            </motion.a>
        </motion.div>
    );
};
export default SignOff;
