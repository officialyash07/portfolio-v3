import SkillCard from "./SkillCard";

const Toolkit = () => {
    return (
        <section className="relative overflow-hidden bg-[#FFFFFF] dark:bg-[#111422]">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <h2 className="font-[Montserrat] text-2xl font-semibold text-gray-900 dark:text-white text-center mb-10">
                    The Toolkit
                </h2>
                <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-6">
                    <SkillCard
                        icon={
                            <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                                    stroke="#155DFC"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        }
                        title="Frontend"
                        tools={[
                            "HTML5",
                            "CSS3",
                            "JavaScript",
                            "React",
                            "Tailwind CSS",
                            "Next.js",
                            "Bootstrap",
                        ]}
                    />
                    <SkillCard
                        icon={
                            <svg
                                fill="#155DFC"
                                width="20px"
                                height="20px"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M4 26.016q0 1.632 1.6 3.008t4.384 2.176 6.016 0.8 6.016-0.8 4.384-2.176 1.6-3.008v-3.392q0 1.632-1.632 2.88t-4.32 1.856-6.048 0.64-6.048-0.64-4.32-1.856-1.632-2.88v3.392zM4 20q0 1.632 1.6 3.008t4.384 2.208 6.016 0.8 6.016-0.8 4.384-2.208 1.6-3.008v-3.36q0 1.6-1.632 2.848t-4.32 1.888-6.048 0.64-6.048-0.64-4.32-1.888-1.632-2.848v3.36zM4 14.016q0 1.632 1.6 3.008t4.384 2.176 6.016 0.8 6.016-0.8 4.384-2.176 1.6-3.008v-3.392q0 1.632-1.632 2.88t-4.32 1.856-6.048 0.64-6.048-0.64-4.32-1.856-1.632-2.88v3.392zM4 8q0 1.632 1.6 3.008t4.384 2.208 6.016 0.8 6.016-0.8 4.384-2.208 1.6-3.008v-1.984q0-1.632-1.6-3.008t-4.384-2.176-6.016-0.832-6.016 0.832-4.384 2.176-1.6 3.008v1.984z"></path>
                            </svg>
                        }
                        title="Backend"
                        tools={[
                            "Node.js",
                            "MongoDB",
                            "Rest API",
                            "GraphQL",
                            "Express.js",
                            "Firebase",
                            "SQL",
                        ]}
                    />
                    <SkillCard
                        icon={
                            <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 16C11 15.0681 11 14.6022 11.1522 14.2346C11.3552 13.7446 11.7446 13.3552 12.2346 13.1522C12.6022 13 13.0681 13 14 13H16.8C17.9201 13 18.4802 13 18.908 12.782C19.2843 12.5903 19.5903 12.2843 19.782 11.908C20 11.4802 20 10.9201 20 9.8V9.2C20 8.07989 20 7.51984 19.782 7.09202C19.5903 6.71569 19.2843 6.40973 18.908 6.21799C18.4802 6 17.9201 6 16.8 6H16M16 6C16 6.93188 16 7.39782 15.8478 7.76537C15.6448 8.25542 15.2554 8.64477 14.7654 8.84776C14.3978 9 13.9319 9 13 9H7C6.06812 9 5.60218 9 5.23463 8.84776C4.74458 8.64477 4.35523 8.25542 4.15224 7.76537C4 7.39782 4 6.93188 4 6C4 5.06812 4 4.60218 4.15224 4.23463C4.35523 3.74458 4.74458 3.35523 5.23463 3.15224C5.60218 3 6.06812 3 7 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6448 3.74458 15.8478 4.23463C16 4.60218 16 5.06812 16 6ZM10.6 21H11.4C11.9601 21 12.2401 21 12.454 20.891C12.6422 20.7951 12.7951 20.6422 12.891 20.454C13 20.2401 13 19.9601 13 19.4V17.6C13 17.0399 13 16.7599 12.891 16.546C12.7951 16.3578 12.6422 16.2049 12.454 16.109C12.2401 16 11.9601 16 11.4 16H10.6C10.0399 16 9.75992 16 9.54601 16.109C9.35785 16.2049 9.20487 16.3578 9.10899 16.546C9 16.7599 9 17.0399 9 17.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21Z"
                                    stroke="#155DFC"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        }
                        title="UI/UX Design"
                        tools={[
                            "Figma",
                            "Responsive Design",
                            "Wireframing",
                            "Prototyping",
                        ]}
                    />
                    <SkillCard
                        icon={
                            <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#155DFC"
                                    d="M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
                                />
                            </svg>
                        }
                        title="Tools & Platforms"
                        tools={[
                            "VS Code",
                            "Vercel",
                            "Redux",
                            "Vite",
                            "Git",
                            "Chrome DevTools",
                            "Postman",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Toolkit;
