import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";



const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 900, height: 270 });
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
        <motion.div
            className="hero-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            ref={containerRef}
        >
            <div className="hero-svg-wrapper">
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
                        stroke="#d11717"
                        variants={draw}
                        custom={1}
                        style={shape}
                    />
                    <motion.line
                        x1="0"
                        y1={height}
                        x2={width}
                        y2={height}
                        stroke="#d11717"
                        variants={draw}
                        custom={2}
                        style={shape}
                    />
                    <motion.line
                        x1={width}
                        y1={height}
                        x2={width}
                        y2="0"
                        stroke="#d11717"
                        variants={draw}
                        custom={3}
                        style={shape}
                    />
                    <motion.line
                        x1={width}
                        y1="0"
                        x2="0"
                        y2="0"
                        stroke="#d11717"
                        variants={draw}
                        custom={4}
                        style={shape}
                    />
                </motion.svg>
                <div
                    className="hero-name-title"
                    role="heading"
                    aria-label="Colin Lawrence, Web Developer"
                >
                    <h1>COLIN LAWRENCE</h1>
                    <h1>WEB DEV</h1>
                </div>
                <motion.div
                    className="hero-profile-pic"
                    style={{ backgroundImage: `url("/portfolio/Profile.png")` }}
                    role="img"
                    aria-label="Profile picture of Colin Lawrence"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                ></motion.div>
            </div>
        </motion.div>
    );
};

const shape: React.CSSProperties = {
    strokeWidth: 10,
    strokeLinecap: "butt",
    fill: "transparent",
};

export default Hero;
