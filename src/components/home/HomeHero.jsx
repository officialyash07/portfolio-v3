import { EncryptedText } from "../animations/EncryptedText";

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto text-center max-w-7xl px-4 py-14 sm:px-6 lg:text-left lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-300/30 bg-white dark:bg-[#161D2B] px-4 py-1 text-xs font-medium text-(--primary-text) dark:text-[#94A3B8] shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Open to Collaborations
                        </div>
                        <h1 className="text-4xl font-extrabold leading-tight text-(--text-color) dark:text-white sm:text-5xl lg:text-6xl">
                            Building with{" "}
                            <span className="block bg-linear-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                                <EncryptedText text="purpose & soul." />
                            </span>
                        </h1>
                        <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text-(--primary-text) dark:text-[#94A3B8] sm:text-lg">
                            I&apos;m{" "}
                            <span className="font-bold text-(--primary-text) dark:text-white relative inline-block bg-linear-to-t from-indigo-200/80 to-transparent bg-size-[100%_0.4em] bg-no-repeat bg-bottom">
                                Yash Pathik
                            </span>
                            , a frontend developer transforming complex ideas
                            into clean, intuitive web interfaces.
                        </p>
                        <div className="mt-8 flex flex-col flex-wrap items-center gap-4 font-semibold sm:flex-row sm:justify-center lg:justify-start">
                            <Link
                                to="/projects"
                                className="inline-flex w-60 items-center justify-center gap-2 lg:w-50 rounded-4xl bg-(--primary-color) px-6 py-3 text-sm text-white shadow-2xl shadow-blue-300 hover:bg-indigo-800 hover:scale-x-[1.05] duration-200 ease-in"
                            >
                                View My Work{" "}
                                <span className="text-white font-bold duration-200 ease-in">
                                    &#8599;
                                </span>
                            </Link>

                            <Link className="inline-flex  items-center justify-center gap-2 w-60 lg:w-50 rounded-4xl border border-gray-200/20 bg-white px-6 py-3 text-sm text-(--text-color) shadow hover:bg-slate-100 hover:text-black duration-200 ease-in">
                                Resume
                            </Link>
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-[#4a4559] lg:justify-start">
                            <div className="flex -space-x-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold border-2 border-(--secondary-bg)">
                                    JD
                                </span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200 text-xs font-semibold border-2 border-(--secondary-bg)">
                                    SM
                                </span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-200 text-xs font-semibold border-2 border-(--secondary-bg)">
                                    AL
                                </span>
                            </div>
                            <span className=" text-(--text-color) dark:text-white">
                                <span className="font-semibold">50+</span> Happy
                                Clients
                            </span>
                        </div>
                    </div>
                    <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-lg">
                        <motion.div
                            initial={{ opacity: 1, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            className="absolute left-4 -top-8 sm:-left-12  sm:top-4 z-10 flex items-center gap-3 rounded-xl bg-white dark:bg-[#161D2B] px-4 py-3 shadow border border-gray-300/30"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 border border-orange-300">
                                🏆
                            </span>
                            <div>
                                <p className="text-xl font-bold text-(--text-color) dark:text-white">
                                    2+
                                </p>
                                <p className="text-xs text-(--primary-text) dark:text-[#94A3B8]">
                                    Years Exp.
                                </p>
                            </div>
                        </motion.div>
                        <div className="overflow-hidden rounded-xl border border-gray-300/30 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute flex justify-between items-center bottom-4 left-4 right-4 rounded-xl bg-black/30 px-5 py-4 text-white backdrop-blur border-[0.5px] border-gray-100/30">
                            <div className="text-left">
                                <p className="text-xs uppercase tracking-wide">
                                    Current Role
                                </p>
                                <p className="mt-1 text-base font-semibold">
                                    Senior UI/UX Designer
                                </p>
                            </div>
                            <Link
                                to="/about"
                                className="font-extrabold text-black bg-gray-200 rotate-45 hover:rotate-0 hover:scale-[1.05] hover:bg-white rounded-full w-8 h-8 flex justify-center items-center duration-100 ease-in"
                            >
                                &#8599;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
