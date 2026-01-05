import { Link } from "react-router-dom";

const AboutHero = () => {
    return (
        <section className="relative overflow-hidden border-b border-(--border-color) dark:border-(--border-color)/10 text-center">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1337EC]/20 bg-[#1337EC]/10 dark:bg-[#161D2B] px-4 py-1 text-xs font-medium text-(--primary-text) dark:text-[#94A3B8] shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#1337EC]" />
                    Open to Work
                </div>
                <h1 className="text-4xl font-extrabold font-[Montserrat] leading-tight text-(--text-color) dark:text-white sm:text-5xl lg:text-6xl">
                    Crafting Digital{" "}
                    <span className="block bg-linear-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Masterpieces.
                    </span>
                </h1>
                <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text-(--primary-text) dark:text-[#94A3B8] sm:text-lg">
                    I&apos;m Yash, a frontend developer translating design
                    vision into scalable, high-quality user experiences.
                </p>
                <div className="mt-8 flex flex-col flex-wrap items-center gap-4 font-semibold sm:flex-row sm:justify-center">
                    <Link
                        to="/contact"
                        className="inline-flex w-60 items-center justify-center gap-2 lg:w-50 rounded-4xl bg-[#111827] dark:bg-white px-6 py-3 text-sm text-white dark:text-[#111827] hover:bg-[#111827ef] dark:hover:bg-[#ffffffed] hover:scale-x-[1.05] duration-200 ease-in"
                    >
                        Get in Touch{" "}
                        <span className="text-white dark:text-[#111827] font-bold duration-200 ease-in">
                            &#8599;
                        </span>
                    </Link>

                    <Link
                        to="/resume"
                        className="inline-flex  items-center justify-center gap-2 w-60 lg:w-50 rounded-4xl border border-gray-200/20 bg-white dark:bg-[#111727] px-6 py-3 text-sm text-[#111827] dark:text-white shadow hover:bg-slate-100 hover:text-black duration-200 ease-in"
                    >
                        Resume
                    </Link>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#4a4559]">
                    <div className="flex -space-x-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D1D5DB] text-xs font-semibold border-2 border-(--secondary-bg) dark:border-[#111422]"></span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9CA3AF] text-xs font-semibold border-2 border-(--secondary-bg) dark:border-[#111422]"></span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6B7280] text-xs font-semibold border-2 border-(--secondary-bg) dark:border-[#111422]"></span>
                    </div>
                    <span className=" text-(--text-color) dark:text-white">
                        Trusted by <span className="font-semibold">50+</span>{" "}
                        clients worldwide.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
