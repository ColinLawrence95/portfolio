import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero: React.FC = () => {
    return (
        <motion.div className="hero-container">
            <div className="hero-name-title">
                <h1>COLIN LAWRENCE</h1>
                <h1>WEB DEV</h1>
            </div>
            <div
                className="hero-profile-pic"
                style={{ backgroundImage: `url("/Profile.png")` }}
            ></div>
        </motion.div>
    );
};
export default Hero;
