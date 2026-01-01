import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";

import { cn } from "../../lib/utils";

const DEFAULT_CHARSET =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

const randomChar = (charset) =>
    charset[Math.floor(Math.random() * charset.length)];

const scramble = (text, charset) =>
    text.split("").map((ch) => (ch === " " ? " " : randomChar(charset)));

export function EncryptedText({
    text,
    className,
    revealDelayMs = 110,
    flipDelayMs = 90,
    charset = DEFAULT_CHARSET,
    encryptedClassName,
    revealedClassName,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    /* ✅ State initialized from props (allowed) */
    const [revealedCount, setRevealedCount] = useState(0);
    const [scrambled, setScrambled] = useState(() =>
        text ? scramble(text, charset) : []
    );

    const rafRef = useRef(null);
    const startTimeRef = useRef(0);
    const lastFlipRef = useRef(0);

    /* ✅ Effect ONLY talks to external system (RAF) */
    useEffect(() => {
        if (!isInView || !text) return;

        startTimeRef.current = performance.now();
        lastFlipRef.current = startTimeRef.current;

        let cancelled = false;

        const animate = (now) => {
            if (cancelled) return;

            const elapsed = now - startTimeRef.current;
            const nextReveal = Math.min(
                text.length,
                Math.floor(elapsed / Math.max(1, revealDelayMs))
            );

            setRevealedCount((prev) =>
                prev !== nextReveal ? nextReveal : prev
            );

            if (
                nextReveal < text.length &&
                now - lastFlipRef.current >= flipDelayMs
            ) {
                setScrambled((prev) =>
                    prev.map((_, i) =>
                        i < nextReveal
                            ? text[i]
                            : text[i] === " "
                            ? " "
                            : randomChar(charset)
                    )
                );
                lastFlipRef.current = now;
            }

            if (nextReveal < text.length) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            cancelled = true;
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [isInView, text, charset, revealDelayMs, flipDelayMs]);

    if (!text) return null;

    return (
        <motion.span
            ref={ref}
            className={cn("inline-block whitespace-pre", className)}
            aria-label={text}
        >
            {text.split("").map((char, i) => {
                const revealed = i < revealedCount;
                return (
                    <span
                        key={i}
                        className={cn(
                            revealed ? revealedClassName : encryptedClassName
                        )}
                    >
                        {revealed ? char : scrambled[i] ?? char}
                    </span>
                );
            })}
        </motion.span>
    );
}
