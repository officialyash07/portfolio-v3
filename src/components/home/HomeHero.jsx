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
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-(--primary-bg) px-4 py-1 text-xs font-medium text-(--primary-text) shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Open to Collaborations
                        </div>
                        <h1 className="text-4xl font-extrabold leading-tight text-(--text-color) sm:text-5xl lg:text-6xl">
                            Building with{" "}
                            <span className="block bg-linear-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                                <EncryptedText text="purpose & soul." />
                            </span>
                        </h1>
                        <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text(--primary-text) sm:text-lg">
                            I&apos;m{" "}
                            <span className="font-bold text-(--primary-text) relative inline-block bg-linear-to-t from-indigo-200/80 to-transparent bg-size-[100%_0.4em] bg-no-repeat bg-bottom">
                                Yash Pathik
                            </span>
                            , a frontend developer transforming complex ideas
                            into clean, intuitive web interfaces.
                        </p>
                        <div className="mt-8 flex flex-col flex-wrap items-center gap-4 font-semibold sm:flex-row sm:justify-center lg:justify-start">
                            <Link
                                to="/projects"
                                className="inline-flex w-60 items-center justify-center gap-2 lg:w-50 rounded-4xl bg-(--primary-color) px-6 py-3 text-sm text-(--secondary-color) shadow-2xl shadow-blue-300 hover:bg-indigo-800 hover:scale-x-[1.05] duration-200 ease-in"
                            >
                                View My Work{" "}
                                <span className="text-(--secondary-color) font-bold duration-200 ease-in">
                                    &#8599;
                                </span>
                            </Link>

                            <Link className="inline-flex w-60 items-center justify-center gap-2 lg:w-50 rounded-4xl border border-gray-200 bg-(--secondary-bg) px-6 py-3 text-sm text-gray-600 shadow hover:bg-slate-100 duration-200 ease-in">
                                <svg
                                    width="15px"
                                    height="15px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                                        fill="#1C274C"
                                    />
                                    <path
                                        d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                                        fill="#1C274C"
                                    />
                                </svg>
                                Resume
                            </Link>
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-(--primary-text) lg:justify-start">
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
                            <span>
                                <span className="font-semibold text-(--text-color)">
                                    50+
                                </span>{" "}
                                Happy Clients
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
                            className="absolute left-4 -top-8 sm:-left-12  sm:top-4 z-10 flex items-center gap-3 rounded-xl bg-(--secondary-bg) px-4 py-3 shadow border border-gray-300"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 border border-orange-300">
                                🏆
                            </span>
                            <div>
                                <p className="text-xl font-bold text-(--text-color)">
                                    2+
                                </p>
                                <p className="text-xs text-(--primary-text)">
                                    Years Exp.
                                </p>
                            </div>
                        </motion.div>
                        <div className="overflow-hidden rounded-xl border border-gray-300 shadow-lg">
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
