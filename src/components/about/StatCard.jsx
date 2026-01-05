const StatCard = ({ value, label, icon }) => {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-gray-400/20 bg-white dark:bg-[#1C2136] p-6 mb-4 hover:shadow-lg dark:hover:shadow-[#1C2136] transition-shadow">
            <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {value}
                </h3>
                <p className="mt-1 text-xs font-semibold font-[Montserrat] uppercase tracking-wide text-[#525C6A] dark:text-[#7c8ba0]">
                    {label}
                </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {icon}
            </div>
        </div>
    );
};

export default StatCard;
