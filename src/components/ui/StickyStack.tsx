'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StickyStackItemProps {
    children: React.ReactNode;
    index: number;
}

export function StickyStackItem({ children, index }: StickyStackItemProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

    return (
        <div ref={container} className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                style={{ scale, opacity }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    );
}

interface StickyStackProps {
    children: React.ReactNode[];
}

export function StickyStack({ children }: StickyStackProps) {
    return (
        <div className="relative">
            {children.map((child, i) => (
                <StickyStackItem key={i} index={i}>
                    {child}
                </StickyStackItem>
            ))}
        </div>
    );
}
