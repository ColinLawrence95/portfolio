import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "./SignOff.css";

import { IoDocumentTextOutline } from "react-icons/io5";

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

const SignOff: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 900, height: 200 });

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
    const isInView = useInView(containerRef, {
        amount: 0.6, // Only trigger when 80% is visible
        once: true, // Only animate once
    });

    return (
        <motion.div
            className="sign-container"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            ref={containerRef}
        >
            <div className="sign-svg-wrapper">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox={`0 0 ${width} ${height}`}
                    preserveAspectRatio="xMidYMid meet"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
                >
                    <motion.rect
                        x="0"
                        y="0"
                        width={width}
                        height={height}
                        rx="40"
                        stroke="#ff3da1"
                        variants={draw}
                        custom={1}
                        style={shape}
                    />
                </motion.svg>
                <div className="sign-title" role="heading" aria-label="Thanks for stopping by">
                    <h1>THANKS FOR STOPPING BY</h1>
                </div>
                <div className="sign-resume">
                    <motion.h4
                        id="resume"
                        aria-label="Resume link"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.6, duration: 0.8 }}
                    >
                        RESUME
                    </motion.h4>
                    <motion.a
                        id="resume-icon"
                        href="/Colin-Lawrence-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0.8, opacity: 0, y: -20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            default: { delay: 1, type: "spring", bounce: 0.7, duration: 0.8 },
                            scale: { type: "spring", bounce: 0.7, duration: 0.5 },
                            opacity: { delay: 3.8, duration: 0.8 },
                        }}
                        aria-label="View resume"
                    >
                        <IoDocumentTextOutline size={60} />
                    </motion.a>
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

export default SignOff;
