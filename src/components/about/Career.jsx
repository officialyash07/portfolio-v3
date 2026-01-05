import CareerCard from "./CareerCard";

const Career = () => {
    return (
        <section className="relative overflow-hidden bg-[#FFFFFF] dark:bg-[#111422] border-b border-(--border-color) dark:border-(--border-color)/10">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 mb-8 justify-start">
                    <div className="bg-[#E3E8FA] p-2 w-fit rounded-lg">
                        <svg
                            fill="#1337EC"
                            width="20px"
                            height="20px"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M27 29h-23c-1.105 0-2-0.896-2-2v-12c0 0 5.221 2.685 10 3.784v1.216c0 0.553 0.447 1 1 1h5c0.552 0 1-0.447 1-1v-1.216c4.778-1.099 10-3.784 10-3.784v12c0 1.104-0.896 2-2 2zM17 17c0.552 0 1 0.447 1 1v1c0 0.553-0.448 1-1 1h-3c-0.553 0-1-0.447-1-1v-1c0-0.553 0.447-1 1-1h3zM19 17c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1v0.896c-4.779-1.132-10-3.896-10-3.896v-4c0-1.104 0.895-2 2-2h6v-2c0-1.104 0.896-2 2-2h7c1.104 0 2 0.896 2 2v2h6c1.104 0 2 0.896 2 2v4c0 0-5.222 2.764-10 3.896v-0.896zM19 7c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1 0 0.552 0 1 0 1h7c0 0 0-0.448 0-1z"></path>
                        </svg>
                    </div>
                    <h2 className="font-[Montserrat] text-2xl font-semibold text-gray-900 dark:text-white">
                        Career Path
                    </h2>
                </div>

                <div className="relative border-l ms-4 border-gray-200 dark:border-gray-400/40 pl-8 space-y-12">
                    <CareerCard
                        to="https://omnexiatechnology.in/"
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
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        }
                        title="Frontend Developer"
                        institute="Omnexia Technologies"
                        description="Spearheaded the development of responsive, component-driven user interfaces and collaborated cross-functionally to deliver reliable, high-quality frontend features with a strong focus on performance and UX."
                    />
                    <CareerCard
                        to="https://rjit.ac.in/"
                        icon={
                            <svg
                                fill="currentColor"
                                height="15px"
                                width="15px"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 481.882 481.882"
                                xml:space="preserve"
                            >
                                <g>
                                    <g>
                                        <path
                                            d="M185.28,280.26l-34.641,34.642l22.281,7.019c2.502,0.792,4.455,2.745,5.247,5.247l7.019,22.281l34.641-34.641
			L185.28,280.26z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M74.501,2.305C72.963,0.769,70.446,0,67.238,0C64.14,0,60.4,0.721,56.282,2.156C45.843,5.788,34.017,13.701,23.845,23.881
			C1.798,45.927-3.66,68.608,2.269,74.537c5.93,5.921,28.61,0.471,50.656-21.576C74.971,30.916,80.429,8.235,74.501,2.305z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M91.642,19.447c-3.152,13.988-12.579,30.09-27.36,44.872c-14.803,14.803-30.909,24.173-44.914,27.31l166.717,166.717
			c32.017-23.731,48.542-40.256,72.228-72.227L91.642,19.447z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M269.801,197.606c-23.59,31.62-40.561,48.6-72.235,72.221l34.892,34.892c30.773-23.385,48.998-41.604,72.236-72.212
			L269.801,197.606z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M480.073,407.878L316.121,243.927c-23.088,30.184-41.91,49.003-72.239,72.217L407.85,480.11
			c1.976,1.976,5.545,2.314,10.626,0.941c22.124-5.921,56.609-40.406,62.538-62.53C482.379,413.447,482.057,409.863,480.073,407.878
			z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        }
                        title="Bachelor of Engineering in Computer Science"
                        institute="RJIT, Gwalior, M.P."
                        description="Graduated with a degree while building a strong foundation in programming, web technologies, and practical software development through coursework and projects."
                    />
                    <CareerCard
                        to="https://navodaya.gov.in/nvs/nvs-school/INDORE/en/about_us/About-JNV/"
                        icon={
                            <svg
                                fill="currentColor"
                                height="15px"
                                width="15px"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 481.882 481.882"
                                xml:space="preserve"
                            >
                                <g>
                                    <g>
                                        <path
                                            d="M185.28,280.26l-34.641,34.642l22.281,7.019c2.502,0.792,4.455,2.745,5.247,5.247l7.019,22.281l34.641-34.641
			L185.28,280.26z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M74.501,2.305C72.963,0.769,70.446,0,67.238,0C64.14,0,60.4,0.721,56.282,2.156C45.843,5.788,34.017,13.701,23.845,23.881
			C1.798,45.927-3.66,68.608,2.269,74.537c5.93,5.921,28.61,0.471,50.656-21.576C74.971,30.916,80.429,8.235,74.501,2.305z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M91.642,19.447c-3.152,13.988-12.579,30.09-27.36,44.872c-14.803,14.803-30.909,24.173-44.914,27.31l166.717,166.717
			c32.017-23.731,48.542-40.256,72.228-72.227L91.642,19.447z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M269.801,197.606c-23.59,31.62-40.561,48.6-72.235,72.221l34.892,34.892c30.773-23.385,48.998-41.604,72.236-72.212
			L269.801,197.606z"
                                        />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M480.073,407.878L316.121,243.927c-23.088,30.184-41.91,49.003-72.239,72.217L407.85,480.11
			c1.976,1.976,5.545,2.314,10.626,0.941c22.124-5.921,56.609-40.406,62.538-62.53C482.379,413.447,482.057,409.863,480.073,407.878
			z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        }
                        title="Higher Secondary School"
                        institute="J.N.V. Indore, M.P."
                        description="Completed higher secondary education at Jawahar Navodaya Vidyalaya, Indore, where a structured residential environment fostered academic excellence, independence, and problem-solving skills."
                    />
                </div>
            </div>
        </section>
    );
};

export default Career;
