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
        <span className={cn("inline-flex flex-wrap leading-none", className)} style={{ columnGap: '0.2em' }}>
            <span className="sr-only">{text}</span>
            <AnimatePresence>
                {isVisible && (
                    <>
                        {text.split(" ").map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-flex whitespace-nowrap">
                                {word.split("").map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{
                                            duration: 0.8,
                                            delay: (wordIndex * 5 + charIndex) * 0.035,
                                            ease: [0.2, 0.65, 0.3, 0.9]
                                        }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </>
                )}
            </AnimatePresence>
        </span>
    );
}
