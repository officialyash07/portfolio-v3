import { Link } from "react-router-dom";

import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT CONTENT */}
                    <div>
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 dark:bg-[#161D2B] px-4 py-1 text-xs font-medium text-(--primary-text) dark:text-[#94A3B8] shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Available for Projects
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-extrabold font-[Montserrat] leading-tight text-(--text-color) dark:text-white sm:text-5xl lg:text-6xl">
                            Let&apos;s start a{" "}
                            <span className="block bg-linear-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                                conversation.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-slate-500 text-sm sm:text-base">
                            Interested in working together? Fill out the form or
                            reach out through my social channels. I&apos;m
                            always open to discussing product design, UX/UI
                            work, or partnership opportunities.
                        </p>

                        {/* Info Cards */}
                        <div className="mt-10 space-y-4 max-w-md">
                            <Link
                                to="mailto:yashpathik.official@gmail.com"
                                className="group flex items-center justify-between rounded-xl border border-gray-300 hover:border-(--primary-color) transition duration-200 bg-white dark:bg-[#1C2136] dark:border-gray-300/30 px-6 py-4 shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 bg-indigo-100 group-hover:text-(--primary-color)">
                                        <svg
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Mail me at
                                        </p>
                                        <p className="font-semibold text-slate-900 dark:text-white">
                                            yashpathik.official@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <div className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white dark:bg-[#1C2136] dark:border-gray-300/30 px-6 py-4 shadow-sm">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-gray-600"
                                    >
                                        <path
                                            d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">
                                        Current Location
                                    </p>
                                    <p className="font-semibold text-slate-900 dark:text-white">
                                        San Francisco, CA
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="mt-12">
                            <p className="text-xs font-semibold uppercase text-slate-500">
                                Follow me
                            </p>
                            <div className="mt-4 flex gap-4">
                                <Link to="https://github.com/officialyash07">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 20 20"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <g
                                            id="Page-1"
                                            stroke="none"
                                            strokeWidth="1"
                                            fill="none"
                                            fillRule="evenodd"
                                        >
                                            <g
                                                id="Dribbble-Light-Preview"
                                                transform="translate(-140.000000, -7559.000000)"
                                                fill="#2E91F9"
                                            >
                                                <g
                                                    id="icons"
                                                    transform="translate(56.000000, 160.000000)"
                                                >
                                                    <path
                                                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                                        id="github-[#142]"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </Link>
                                <Link to="https://www.linkedin.com/in/yash-pathik/">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 20 20"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <g
                                            id="Page-1"
                                            stroke="none"
                                            strokeWidth="1"
                                            fill="none"
                                            fillRule="evenodd"
                                        >
                                            <g
                                                id="Dribbble-Light-Preview"
                                                transform="translate(-180.000000, -7479.000000)"
                                                fill="#2E91F9"
                                            >
                                                <g
                                                    id="icons"
                                                    transform="translate(56.000000, 160.000000)"
                                                >
                                                    <path
                                                        d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                                                        id="linkedin-[#161]"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="relative">
                        <div className="rounded-2xl bg-white/50 dark:bg-[#0F1019]/50 backdrop-blur-xl border border-gray-300/70 dark:border-gray-300/20 shadow-2xl p-8">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
