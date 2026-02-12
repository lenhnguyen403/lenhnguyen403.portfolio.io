import { useState } from "react";
import { motion } from "motion/react";
import { HiMenu, HiX } from "react-icons/hi";
import {
    FaUser,
    FaCode,
    FaBriefcase,
    FaEnvelope,
    FaSun,
    FaMoon,
    FaFacebook,
    FaGithub,
} from "react-icons/fa";
import { navLinks } from "../constants";
import { useTheme } from "../context/ThemeContext";
import Logo from "./common/Logo";
import LogoSvg from './common/LogoSvg'

const navIcons = {
    about: { icon: <FaUser />, color: "text-cyan-400" },
    skills: { icon: <FaCode />, color: "text-green-400" },
    work: { icon: <FaBriefcase />, color: "text-yellow-400" },
    contact: { icon: <FaEnvelope />, color: "text-pink-400" },
};

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="w-full flex justify-center items-center py-4 fixed top-0 z-20 bg-black-100/80 backdrop-blur-sm">
            <div className="w-full max-w-6xl flex justify-between items-center px-8 sm:px-12 lg:px-16">
                <a
                    href="#"
                    className="flex items-center gap-3"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <div className="relative w-10 h-10">
                        {/* <LogoSvg /> */}
                        <Logo className='max-w-10' />
                    </div>
                    <p className="text-white text-base font-bold cursor-pointer">
                        Le Lenh Nguyen
                    </p>
                </a>

                <ul className="list-none hidden md:flex flex-row gap-8 items-center">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? "text-white" : "text-secondary"
                                } hover:text-white text-sm font-medium cursor-pointer transition-colors`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`} className="flex items-center gap-2">
                                <span className={`text-xs ${navIcons[link.id].color}`}>{navIcons[link.id].icon}</span>
                                {link.title}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://www.facebook.com/nguyen.lenhnguyen.403/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20"
                            title="Facebook"
                        >
                            <FaFacebook className="text-blue-500" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/lenhnguyen403"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20"
                            title="GitHub"
                        >
                            <FaGithub className={theme === "dark" ? "text-white" : "text-gray-800"} />
                        </a>
                    </li>
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20"
                            style={{ cursor: 'pointer' }}
                            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {theme === "dark" ? (
                                <FaSun className="text-yellow-400" />
                            ) : (
                                <FaMoon className="text-violet-500" />
                            )}
                        </button>
                    </li>
                </ul>

                <div className="md:hidden flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20 cursor-pointer"
                    >
                        {theme === "dark" ? (
                            <FaSun className="text-yellow-400" />
                        ) : (
                            <FaMoon className="text-violet-500" />
                        )}
                    </button>
                    <a
                        href="https://www.facebook.com/nguyen.lenhnguyen.403/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20"
                    >
                        <FaFacebook className="text-blue-500" />
                    </a>
                    <a
                        href="https://github.com/lenhnguyen403"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center text-lg hover:bg-primary/20 transition-all border border-primary/20"
                    >
                        <FaGithub className={theme === "dark" ? "text-white" : "text-gray-800"} />
                    </a>
                    <button onClick={() => setToggle(!toggle)} className="text-white text-xl">
                        {toggle ? <HiX /> : <HiMenu />}
                    </button>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.8 }}
                        className={`${!toggle ? "hidden" : "flex"
                            } p-5 bg-black-200 absolute top-16 right-4 min-w-35 z-10 rounded-xl border border-primary/20`}
                    >
                        <ul className="list-none flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? "text-white" : "text-secondary"
                                        } text-sm font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(false);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`} className="flex items-center gap-2">
                                        <span className={`text-xs ${navIcons[link.id].color}`}>{navIcons[link.id].icon}</span>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
