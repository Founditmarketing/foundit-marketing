'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface TextScrambleProps {
    text: string;
    autostart?: boolean;
    className?: string;
    delay?: number;
    duration?: number;
}

export function TextScramble({
    text,
    autostart = true,
    className,
    delay = 0,
    duration = 1.2
}: TextScrambleProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (autostart) {
            const timer = setTimeout(() => setIsVisible(true), delay);
            return () => clearTimeout(timer);
        }
    }, [autostart, delay]);

    return (
        <span className={cn("inline-flex flex-nowrap whitespace-nowrap gap-[0.05em] leading-none", className)}>
            <span className="sr-only">{text}</span>
            <AnimatePresence>
                {isVisible && (
                    <>
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.035,
                                    ease: [0.2, 0.65, 0.3, 0.9]
                                }}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </>
                )}
            </AnimatePresence>
        </span>
    );
}
