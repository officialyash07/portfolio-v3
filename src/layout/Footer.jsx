import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full border-t border-(--border-color) dark:border-(--border-color)/10 bg-(--secondary-bg) dark:bg-[#0F1019] mt-auto text-(--primary-text) dark:text-white text-sm">
            <div className="w-full max-w-7xl px-4 py-4 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <p>© 2024 Alex Doe. All rights reserved.</p>
                <div className="w-full sm:w-fit flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <div className="flex gap-2 items-center order-2 sm:order-1">
                        <svg
                            width="15px"
                            height="15px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark:text-white"
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
                        <span>Bengaluru, IN</span>
                    </div>
                    <div className="flex gap-2 items-center order-1 sm:order-2">
                        <svg
                            width="15px"
                            height="15px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark:text-white"
                        >
                            <path
                                d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <Link
                            to="mailto:yashpathik.official@gmail.com"
                            className="hover:text-(--primary-color)"
                        >
                            yashpathik.official@gmail.com
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
