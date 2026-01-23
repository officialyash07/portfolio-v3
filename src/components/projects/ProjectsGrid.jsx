import { projects } from "../../../projects";

import FeaturedProject from "./FeaturedProject";

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import { Link } from "react-router-dom";

// import img from "../../assets/images/project-images/portfolio.png";

const ProjectsGrid = () => {
    return (
        <section className="relative overflow-hidden border-b border-(--border-color) dark:border-(--border-color)/10">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <FeaturedProject />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="mb-16"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-65 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <motion.div
                                    variants={{
                                        rest: { opacity: 0, y: 40 },
                                        hover: { opacity: 1, y: 0 },
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        ease: "easeOut",
                                    }}
                                    className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-4 bg-black/60"
                                >
                                    <Link
                                        to={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-40 items-center justify-center gap-2 sm:w-50 rounded-4xl bg-(--primary-color) px-6 py-3 text-sm text-white shadow-2xl hover:bg-indigo-800 hover:scale-x-[1.05] duration-200 ease-in"
                                    >
                                        Live Demo
                                    </Link>

                                    <Link
                                        to={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-40 sm:w-50 rounded-4xl border border-gray-200/20 bg-white px-6 py-3 text-sm text-(--text-color) shadow hover:bg-slate-100 hover:text-black duration-200 ease-in"
                                    >
                                        Source Code
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="mt-5 flex items-start justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-neutral-500 max-w-md">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs text-neutral-500"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
