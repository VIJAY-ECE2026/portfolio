import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import m1 from "../../assets/MiPics/m1.jpg";
import { useInView } from "react-intersection-observer";
import { DarkModeContext } from "../../common/DarkModeContext";
import "../../index.css";


function Home() {
    const { darkMode } = useContext(DarkModeContext);
    const [refHero, inViewHero] = useInView({ triggerOnce: false, threshold: 0.1 });
    const [refExperience, inViewExperience] = useInView({ triggerOnce: false, threshold: 0.1 });
    const [refSocial, inViewSocial] = useInView({ triggerOnce: false, threshold: 0.1 });

    const fadeInVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
       
  
        <div
            className={`mr-0 flex flex-col items-center justify-center min-h-screen px-6 py-12 transition-colors duration-300 ${
                darkMode
                    ? "bg-gradient-to-br from-rgb-1000 via-blue-800 to-blue-700 text-gray-100"
                    : "bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 text-gray-900"
            }`}
        >
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center" ref={refHero}>
                <motion.h1
                    className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight ${
                        darkMode ? "text-white" : "text-gray-800"
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    initial="hidden"
                    animate={inViewHero ? "visible" : "hidden"}
                    variants={fadeInVariants}
                >
                    Welcome to My Portfolio
                </motion.h1>
                <motion.h2
                    className={`text-xl md:text-3xl font-semibold ${
                        darkMode ? "text-purple-300" : "text-[#5A20CB]"
                    }`}
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                    }}
                    initial="hidden"
                    animate={inViewHero ? "visible" : "hidden"}
                    variants={fadeInVariants}
                >
                    I'm <span className={darkMode ? "text-orange-300" : "text-orange-800"}>Vijay D</span>
                </motion.h2>
                <motion.p
                    className={`mt-4 text-lg md:text-xl ${
                        darkMode ? "text-gray-300" : "text-gray-800"
                    }`}
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                    }}
                    initial="hidden"
                    animate={inViewHero ? "visible" : "hidden"}
                    variants={fadeInVariants}
                >
                    MERN Stack Developer | Building Future-Ready Applications
                </motion.p>
                <motion.div
                    className={`mt-6 w-32 h-1 rounded-full ${
                        darkMode ? "bg-gradient-to-r from-purple-600 to-orange-600" : "bg-gradient-to-r from-blue-500 to-pink-500"
                    }`}
                    initial="hidden"
                    animate={inViewHero ? "visible" : "hidden"}
                    variants={fadeInVariants}
                ></motion.div>
            </div>

            {/* Experience Section */}
            <div
                className="mt-14 flex flex-col md:flex-row items-center justify-between w-11/12 max-w-6xl gap-12"
                ref={refExperience}
            >
                {/* Left: Intro */}
                <motion.div
                    className="text-left max-w-lg"
                    initial="hidden"
                    animate={inViewExperience ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
                    }}
                >
                    <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>My Journey</h3>
                    <p
                        className={`text-lg font-medium text-justify leading-relaxed ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                        I am a dedicated MERN stack developer skilled in designing and building modern, responsive web
                        applications. My passion lies in solving problems, creating intuitive user interfaces, and
                        delivering seamless user experiences.
                    </p>
                </motion.div>

                {/* Right: Profile Image */}
                <motion.div
                    className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl group"
                    initial="hidden"
                    animate={inViewExperience ? "visible" : "hidden"}
                    variants={{
                        hidden: { scale: 0, opacity: 0 },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 1.5 },
                        },
                    }}
                >
                    <div
                        className={`absolute inset-0 rounded-full ${
                            darkMode
                                ? "bg-gradient-to-br from-purple-600 to-orange-600"
                                : "bg-gradient-to-br from-blue-500 to-pink-500"
                        } opacity-80 blur-3xl group-hover:blur-xl group-hover:opacity-100 transition-all duration-500`}
                    ></div>
                    <img
                        src={m1}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                </motion.div>
            </div>

            {/* Resume Download Button */}
            <motion.div
                className="mt-12"
                ref={refSocial}
                initial="hidden"
                animate={inViewSocial ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                }}
            >
                <a
                    href="https://drive.google.com/file/d/1A9zXZOq2u1y6t3SpvZBDKAq5HgKw7P63/view?usp=drive_link"
                    target="_blank"
                    download
                    className={`relative inline-block px-6 py-3 font-semibold rounded-full no-underline transition-all duration-300 ${
                        darkMode
                            ? "bg-gray-800 text-white border-2 border-gray-100 hover:bg-purple-500 hover:border-purple-500"
                            : "bg-white text-gray-900 border-2 border-gray-900 hover:bg-green-500 hover:border-green-500"
                    }`}
                >
                    Download My Resume
                </a>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
                className="mt-12 flex gap-8"
                ref={refSocial}
                initial="hidden"
                animate={inViewSocial ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                }}
            >
       <a
    href="https://leetcode.com/VIJAYECE_2005/"
    target="_blank"
    rel="noopener noreferrer"
    className={`relative text-3xl md:text-4xl transition-transform duration-300 ${
        darkMode ? "text-yellow-400 hover:text-yellow-500" : "text-gray-700 hover:text-yellow-500"
    }`}
>
    <SiLeetcode />
</a>
                <a
                    href="https://www.linkedin.com/in/vijay-d-803a54322/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative text-3xl md:text-4xl transition-transform duration-300 ${
                        darkMode ? "text-blue-300 hover:text-blue-500" : "text-gray-700 hover:text-blue-500"
                    }`}
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/VIJAY-ECE2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative text-3xl md:text-4xl transition-transform duration-300 ${
                        darkMode ? "text-gray-300 hover:text-gray-500" : "text-gray-700 hover:text-gray-900"
                    }`}
                >
                    <FaGithub />
                </a>
            </motion.div>
       
        </div>);
}

export default Home;    