import StatCard from "./StatCard";

const Journey = () => {
    return (
        <section className="relative overflow-hidden bg-[#FBFCFC] dark:bg-[#0D101B] border-b border-(--border-color) dark:border-(--border-color)/10">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
                            <div className="bg-[#E3E8FA] p-2 w-fit rounded-lg">
                                <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        fill="#1337EC"
                                        d="M424.188 85.594c.33.05-.86.094-3.313.094-18.512 0-35.78 20.06-35.78 47.5 0 13.83 4.712 26.208 11.624 34.78l10.217 12.626-16.062 2.47c-10.56 1.617-17.663 6.432-23.625 14.342s-10.344 19.18-13.25 32.344c-5.186 23.492-5.59 52.425-5.625 78.156h30.438l.593 8.72 7.094 106.593h65.813l8.03-106.69.657-8.624h32c-.24-25.383-1.62-53.933-7.344-77.25-3.213-13.086-7.783-24.354-13.687-32.375-5.905-8.02-12.7-12.85-22.064-14.593l-15.72-2.937 10.283-12.25c7.228-8.623 12.186-21.138 12.186-35.313 0-25.74-15.5-45.406-32.28-47.562l-.188-.03zm-244.75 3.375c-45.9.006-99.844 5.373-161.625 17.905V126c268.018-37.648 341.545 38.15 226.25 79.344-117.327 41.92-210.503 252.258 159.406 270.594 4.362.438 8.85.687 13.436.687 22.28 0 42.34-5.452 56.125-13.594 13.787-8.14 20.595-18.14 20.595-27.905s-6.808-19.764-20.594-27.906c-.23-.138-.482-.272-.717-.408l-2 26.47-.657 8.656H369l-.563-8.75-3.28-49.5c-128.194 2.8-163.256-100.51-80.094-130.47 20.385-7.344 37.086-15.836 50.187-25.03.17-.822.32-1.655.5-2.47 3.262-14.774 8.256-28.498 16.594-39.562 4.946-6.563 11.24-12.07 18.72-15.97-3.124-42.547-68.335-81.236-191.627-81.217z"
                                    />
                                </svg>
                            </div>
                            <h2 className="font-[Montserrat] text-2xl font-semibold text-gray-900 dark:text-white">
                                My Journey
                            </h2>
                        </div>
                        <p className="text-[#525C6A] text-sm lg:text-base dark:text-[#A3AFC2] mb-6 text-center sm:text-left">
                            My journey into{" "}
                            <strong>frontend development</strong> hasn&apos;t
                            been linear—and that&apos;s been my strength. What
                            began as curiosity about building interfaces grew
                            into a focus on creating{" "}
                            <strong>
                                intuitive, user-centered web experiences
                            </strong>
                            . I believe the best products feel simple because
                            the complexity is thoughtfully engineered behind the
                            scenes.
                        </p>
                        <p className="text-[#525C6A] text-sm lg:text-base dark:text-[#A3AFC2] mb-6 text-center sm:text-left">
                            I&apos;ve worked across core areas of frontend
                            development, from building{" "}
                            <strong>responsive UIs</strong> to integrating{" "}
                            <strong>RESTful APIs</strong> and collaborating
                            closely with design and backend workflows. This
                            broad experience allows me to think beyond
                            individual components and focus on{" "}
                            <strong>scalable, maintainable solutions</strong>.
                        </p>
                        <p className="text-[#525C6A] text-sm lg:text-base dark:text-[#A3AFC2] mb-6 text-center sm:text-left">
                            Outside of day-to-day development, I continue
                            refining my skills by exploring modern{" "}
                            <strong>frontend patterns</strong>,{" "}
                            <strong>improving performance</strong>, and learning
                            through <strong>real-world projects</strong>.
                        </p>
                    </div>
                    <div>
                        <StatCard
                            value="2+"
                            label="Years Experience"
                            icon={
                                <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            }
                        />
                        <StatCard
                            value="20+"
                            label="Projects Shipped"
                            icon={
                                <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10 16L12 14V10L13.6569 8.34314C15.1571 6.84285 16 4.80802 16 2.68629V0H13.3137C11.192 0 9.15714 0.842855 7.65685 2.34315L6 4H2L0 6L10 16ZM10.5 7C11.3284 7 12 6.32843 12 5.5C12 4.67157 11.3284 4 10.5 4C9.67157 4 9 4.67157 9 5.5C9 6.32843 9.67157 7 10.5 7Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M4.9274 13.7558L2.24423 11.0726L0 15L1 16L4.9274 13.7558Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            }
                        />
                        <StatCard
                            value="10+"
                            label="Happy Clients"
                            icon={
                                <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0z"
                                            stroke=""
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 3.5l-1.323 2.68-2.957.43 2.14 2.085-.505 2.946L12 17.25l2.645 1.39-.505-2.945 2.14-2.086-2.957-.43L12 10.5zm1-8.501L18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.049L13 2zm-2 0v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2l5-.001z"
                                        />
                                    </g>
                                </svg>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
