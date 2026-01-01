import { NavLink } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";

import { useState } from "react";

import logo from "../assets/images/logo.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full border-b border-(--border-color) bg-(--secondary-bg) font-semibold">
            <div className="flex max-w-7xl items-center justify-between px-4 py-4 mx-auto">
                {/* Left: Logo + Name */}
                <div className="flex items-center gap-3">
                    <img className="w-7.5" src={logo} alt="Logo" />
                    <span className="text-lg font-bold text-(--text-color) font-[Montserrat]">
                        Yash.<span className="text-(--primary-color)">Dev</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden sm:flex items-center gap-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-(--text-color) hover:text-(--primary-color) duration-200 ease-in ${
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
                            `text-(--text-color) hover:text-(--primary-color) duration-200 ease-in ${
                                isActive ? "activeLink" : ""
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `text-(--text-color) hover:text-(--primary-color) duration-200 ease-in ${
                                isActive ? "activeLink" : ""
                            }`
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-(--text-color) hover:text-(--primary-color) duration-200 ease-in ${
                                isActive ? "activeLink" : ""
                            }`
                        }
                    >
                        Contact
                    </NavLink>

                    {/* Theme Toggle (UI only) */}
                    <button className="flex h-9 w-9 items-center justify-center border rounded-full border-gray-300">
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7.5"
                        >
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                fill="var(--primary-text)"
                            />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden flex items-center justify-center rounded-md border border-gray-300 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="h-5 w-5 text-gray-700"
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
                        className="sm:hidden border-t border-(--border-color) bg-(--secondary-bg) flex flex-col items-center overflow-hidden"
                    >
                        <nav className="flex flex-col gap-4 px-4 py-4 items-center">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-(--text-color) hover:text-(--primary-color) duration-200 ease-in ${
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
                                    `text-(--text-color) hover:text-(--primary-color) duration-200 ease-in ${
                                        isActive ? "activeLink" : ""
                                    }`
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `text-(--text-color) hover:text-(--primary-color) duration-200 ease-in ${
                                        isActive ? "activeLink" : ""
                                    }`
                                }
                            >
                                Projects
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `text-(--text-color) hover:text-(--primary-color) duration-200 ease-in ${
                                        isActive ? "activeLink" : ""
                                    }`
                                }
                            >
                                Contact
                            </NavLink>

                            <button className="mt-2 flex h-9 w-9 items-center justify-center border rounded-full border-gray-300">
                                <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-7.5"
                                >
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        fill="var(--text-color)"
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
