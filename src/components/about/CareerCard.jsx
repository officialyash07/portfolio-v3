import { Link } from "react-router-dom";

const CareerCard = ({ icon, title, institute, description, to }) => {
    return (
        <div className="relative group">
            {/* Icon */}
            <div className="absolute text-gray-500 dark:text-gray-300 group-hover:text-[#1337EC] -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F9FA] dark:bg-[#1C2136] group-hover:bg-[#E3E8FA] transition-colors duration-300">
                {icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                </h3>
                {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1337EC]/20 bg-[#1337EC]/10 dark:bg-[#161D2B] px-4 py-0.5 text-xs font-medium text-(--primary-text) dark:text-[#94A3B8] shadow-sm">
                        Open to Work
                    </div> */}
                <Link
                    to={to}
                    className="font-semibold text-[#1337EC] underline"
                >
                    {institute}
                </Link>
            </div>

            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                {description}
            </p>
        </div>
    );
};

export default CareerCard;
