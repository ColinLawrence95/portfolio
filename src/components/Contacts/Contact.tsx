import React from "react";
import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
    return (
        <div>
            <motion.div 
            className="contact-container"
            animate={{
                y: [0, -1, 0], 
                rotate: [0, .3, -.3, 0], 
              }}
              transition={{
                duration: 10, 
                ease: "easeInOut", 
                repeat: Infinity, 
              }}
            >
                <div className="contact-title">
                    <h1>I MAKE FULL STACK WEB APPS</h1>
                </div>
                <div className="contact-icons">
                    <motion.a
                        href="https://github.com/colinlawrence95"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="contact-icon"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", bounce: 0.7 }}
                    >
                        <FaGithub size="52" />
                    </motion.a>

                    <motion.a
                        href="mailto:colin.lawrence95@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="contact-icon"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", bounce: 0.7 }}
                    >
                        <HiOutlineMail size="52" />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/colin-lawrence-3a098a1b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="contact-icon"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", bounce: 0.7 }}
                    >
                        <AiOutlineLinkedin size="52" />
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
};
export default Contact;
