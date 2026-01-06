const ProjectsHero = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold font-[Montserrat] leading-tight text-(--text-color) dark:text-white sm:text-5xl lg:text-6xl">
                    Featured{" "}
                    <span className="bg-linear-to-t from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Work
                    </span>
                </h1>
                <p className="mt-4 text-sm sm:text-lg text-gray-700 dark:text-gray-400">
                    A collection of thoughtfully engineered web products that
                    balance clean user interfaces with performance-driven,
                    scalable implementation.
                </p>
            </div>
        </section>
    );
};

export default ProjectsHero;
