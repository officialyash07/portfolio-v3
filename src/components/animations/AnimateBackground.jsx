// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export function AnimatedDotsBackground({ className }) {
    return (
        <motion.div
            aria-hidden
            initial={{ backgroundPosition: "0px 0px" }}
            animate={{ backgroundPosition: "160px 160px" }}
            transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
            }}
            className={cn(
                "fixed inset-0 -z-10 bg-(--primary-bg) dark:bg-[#111422]",
                "bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)]",
                "bg-size-[28px_28px]",
                "dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)]",
                className
            )}
        />
    );
}
