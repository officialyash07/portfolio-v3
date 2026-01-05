import ToolCard from "./ToolCard";

const SkillCard = ({ title, icon, tools }) => {
    return (
        <div className="border border-gray-400/20 bg-[#F8F9FA] dark:bg-[#1C2136] my-4 p-6 rounded-lg max-w-90 w-full relative overflow-hidden hover:shadow-lg dark:hover:shadow-[#1C2136] transition-shadow duration-300">
            <div className="absolute w-50 h-50 rounded-full -top-25 -right-25 z-1 bg-[#ECEFF9] dark:bg-[#1B223F]"></div>
            <div className="flex items-center gap-2 mb-4">
                <div>{icon}</div>
                <p className="text-gray-800 dark:text-white font-semibold">
                    {title}
                </p>
            </div>
            <div className="flex gap-2 flex-wrap">
                {tools.map((tool) => (
                    <ToolCard key={tool}>{tool}</ToolCard>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
