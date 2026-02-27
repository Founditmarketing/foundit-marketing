'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    duration?: number;
    distance?: number;
}

export function ScrollReveal({
    children,
    width = '100%',
    delay = 0.2,
    direction = 'up',
    duration = 0.8,
    distance = 50,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    const getDirectionOffset = () => {
        switch (direction) {
            case 'up': return { y: distance };
            case 'down': return { y: -distance };
            case 'left': return { x: distance };
            case 'right': return { x: -distance };
            default: return { y: distance };
        }
    };

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0.1, ...getDirectionOffset() },
                    visible: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration,
                    delay,
                    ease: [0.33, 1, 0.68, 1], // Custom premium bezier
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
