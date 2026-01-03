import { NavLink } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";

import { useState } from "react";

import logo from "../assets/images/logo.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const [theme, setTheme] = useState("");

    const handleToggleTheme = () => {
        const newTheme = theme === "dark" ? "" : "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <header className="w-full border-b border-(--border-color) dark:border-(--border-color)/10 bg-(--secondary-bg) dark:bg-[#0F1019] font-semibold">
            <div className="flex max-w-7xl items-center justify-between px-4 py-4 mx-auto">
                {/* Left: Logo + Name */}
                <div className="flex items-center gap-3">
                    <img className="w-7.5" src={logo} alt="Logo" />
                    <span className="text-lg font-bold text-(--text-color) dark:text-white font-[Montserrat]">
                        Yash.<span className="text-(--primary-color)">Dev</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden sm:flex items-center gap-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-(--text-color) dark:text-white hover:text-[#1337EC] duration-200 ease-in ${
                                isActive ? "activeLink" : ""
                            }`
                        }
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-(--text-color) dark:text-white hover:text-(--primary-color) duration-200 ease-in ${
                                isActive ? "activeLink" : ""
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `text-(--text-color) dark:text-white hover:text-(--primary-color) duration-200 ease-in ${
                                isActive ? "activeLink" : ""
                            }`
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-(--text-color) dark:text-white hover:text-(--primary-color) duration-200 ease-in ${
                                isActive ? "activeLink" : ""
                            }`
                        }
                    >
                        Contact
                    </NavLink>

                    {/* Theme Toggle (UI only) */}
                    <button
                        onClick={handleToggleTheme}
                        className="flex h-9 w-9 items-center justify-center border rounded-full border-gray-300/30"
                    >
                        <svg
                            className="h-5 w-5 text-gray-700 dark:text-gray-300"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            {/* Bulb */}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12c.6.6 1 1.6 1 2h6c0-.4.4-1.4 1-2a7 7 0 00-4-12z"
                            />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden flex items-center justify-center rounded-md border border-gray-300/30 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="h-5 w-5 text-gray-700 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="sm:hidden border-t border-(--border-color)/30 bg-(--secondary-bg) dark:bg-[#0F1019] flex flex-col items-center overflow-hidden"
                    >
                        <nav className="flex flex-col gap-4 px-4 py-4 items-center">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-(--text-color) dark:text-white hover:text-(--primary-color) duration-200 ease-in ${
                                        isActive ? "activeLink" : ""
                                    }`
                                }
                                end
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `text-[(--text-color)] dark:text-white hover:text-(--primary-color) duration-200 ease-in ${
                                        isActive ? "activeLink" : ""
                                    }`
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `text-(--text-color) dark:text-white hover:text-(--primary-color) duration-200 ease-in ${
                                        isActive ? "activeLink" : ""
                                    }`
                                }
                            >
                                Projects
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `text-(--text-color) dark:text-white hover:text-(--primary-color) duration-200 ease-in ${
                                        isActive ? "activeLink" : ""
                                    }`
                                }
                            >
                                Contact
                            </NavLink>

                            <button
                                onClick={handleToggleTheme}
                                className="flex h-9 w-9 items-center justify-center border rounded-full border-gray-300/30"
                            >
                                <svg
                                    className="h-5 w-5 text-gray-700 dark:text-gray-300"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    {/* Bulb */}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12c.6.6 1 1.6 1 2h6c0-.4.4-1.4 1-2a7 7 0 00-4-12z"
                                    />
                                </svg>
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
