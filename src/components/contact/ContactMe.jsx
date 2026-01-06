import { Link } from "react-router-dom";

const ContactSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#f7f8fc]">
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
                                className="group flex items-center justify-between rounded-xl border border-gray-300 hover:border-(--primary-color) transition duration-200 bg-white px-6 py-4 shadow-sm"
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
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Mail me at
                                        </p>
                                        <p className="font-semibold text-slate-900">
                                            yashpathik.official@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <div className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white px-6 py-4 shadow-sm">
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
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">
                                        Current Location
                                    </p>
                                    <p className="font-semibold text-slate-900">
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
                            <div className="mt-4 flex gap-3">
                                {["in", "dr", "tw"].map((s) => (
                                    <div
                                        key={s}
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border bg-white shadow-sm text-slate-600"
                                    >
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="relative">
                        <div className="rounded-2xl bg-white/70 backdrop-blur-xl border shadow-xl p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs font-semibold text-slate-600">
                                            YOUR NAME
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="mt-2 w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs font-semibold text-slate-600">
                                            EMAIL ADDRESS
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="mt-2 w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-slate-600">
                                        ESTIMATED BUDGET
                                    </label>
                                    <select className="mt-2 w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm outline-none">
                                        <option>Select a range</option>
                                        <option>$1k – $5k</option>
                                        <option>$5k – $10k</option>
                                        <option>$10k+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-slate-600">
                                        TELL ME ABOUT YOUR PROJECT
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="I need a redesign for my..."
                                        className="mt-2 w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-indigo-600 py-4 text-sm font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
                                >
                                    Send Message →
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
