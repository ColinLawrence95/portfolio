import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 900, height: 270 });
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = 0.5 + i * 0.5; // Add 1 second initial delay
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

    return (
        <motion.div
            className="hero-container"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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
                    <motion.rect
                        x="0"
                        y="0"
                        rx="40"
                        width={width}
                        height={height}
                        stroke="#d11717"
                        variants={draw}
                        custom={1}
                        style={shape}
                        transition={{ delay: 1 }}
                    />
                </motion.svg>
                <div
                    className="hero-name-title"
                    role="heading"
                    aria-label="Colin Lawrence, Web Developer"
                >
                    <h1>COLIN LAWRENCE</h1>
                    <h1>SOFTWARE ENGINEER</h1>
                </div>
                <motion.div
                    className="hero-profile-pic"
                    style={{ backgroundImage: `url("/Profile.png")` }}
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
