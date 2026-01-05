const ToolCard = ({ children }) => {
    return (
        <div className="border border-gray-400/20 text-xs font-semibold text-[#525C6A] w-fit px-2.5 py-0.5 rounded-md bg-white dark:bg-[#111422] dark:text-[#8794a7] z-10">
            {children}
        </div>
    );
};

export default ToolCard;
