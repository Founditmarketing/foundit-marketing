'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    duration?: number;
    distance?: number;
    /** 'spring' for organic feel, 'tween' for cinematic glide */
    type?: 'spring' | 'tween';
    /** If true, uses a wipe/mask reveal instead of fade */
    mask?: boolean;
    className?: string;
}

/* Premium spring config — feels like liquid settling */
const liquidSpring = {
    type: 'spring' as const,
    stiffness: 60,
    damping: 18,
    mass: 1,
};

/* Cinematic smooth easing — Apple-style glide */
const cinematicEase = [0.22, 1, 0.36, 1];

export function ScrollReveal({
    children,
    width = '100%',
    delay = 0.1,
    direction = 'up',
    duration = 1,
    distance = 60,
    type = 'tween',
    mask = false,
    className,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-12% 0px' });

    const directionMap: Record<string, Record<string, number>> = {
        up:    { y: distance },
        down:  { y: -distance },
        left:  { x: distance },
        right: { x: -distance },
    };

    const offset = directionMap[direction] || { y: distance };

    const transition =
        type === 'spring'
            ? { ...liquidSpring, delay }
            : { duration, delay, ease: cinematicEase as any };

    if (mask) {
        return (
            <div ref={ref} className={className} style={{ position: 'relative', width, overflow: 'hidden' }}>
                <motion.div
                    initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                    animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : undefined}
                    transition={{ duration: duration * 1.1, delay, ease: cinematicEase as any }}
                >
                    <motion.div
                        initial={{ scale: 1.15, ...offset }}
                        animate={isInView ? { scale: 1, x: 0, y: 0 } : undefined}
                        transition={{ duration: duration * 1.4, delay, ease: cinematicEase as any }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    return (
        <div ref={ref} className={className} style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(6px)', ...offset }}
                animate={
                    isInView
                        ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }
                        : undefined
                }
                transition={transition}
            >
                {children}
            </motion.div>
        </div>
    );
}
