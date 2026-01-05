import { Link } from "react-router-dom";

const CTASection = () => {
    return (
        <section className="bg-[#F8F9FA] dark:bg-[#0D0F1A] py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="text-3xl font-semibold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                    Let&apos;s build something{" "}
                    <br className="hidden sm:block" />
                    extraordinary.
                </h2>
                {/* Subtext */}
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
                    Whether you have a specific project or just want to talk
                    shop, my inbox is always open.
                </p>
                {/* Actions */}
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Link
                        to="/contact"
                        className="max-w-2xs w-full rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 sm:w-auto duration-200"
                    >
                        Start a Project
                    </Link>

                    <Link
                        to="/contact"
                        className="max-w-2xs w-full rounded-full border border-gray-300 dark:border-gray-400/40 px-8 py-3 text-base font-medium text-gray-900 dark:text-white transition hover:bg-gray-100 hover:text-gray-800 sm:w-auto duration-200"
                    >
                        Say Hello
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
