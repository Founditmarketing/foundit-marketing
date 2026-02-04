'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

export function CustomCursor() {
    const [isMounted, setIsMounted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [magneticTarget, setMagneticTarget] = useState<DOMRect | null>(null);
    const [magneticStrength, setMagneticStrength] = useState(0);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);



    useEffect(() => {
        setIsMounted(true);

        const moveCursor = (e: MouseEvent) => {
            if (magneticTarget) {
                const centerX = magneticTarget.left + magneticTarget.width / 2;
                const centerY = magneticTarget.top + magneticTarget.height / 2;

                // Mix the actual mouse position with the target center
                // Strength determines how much it 'pulls'
                const targetX = e.clientX + (centerX - e.clientX) * magneticStrength;
                const targetY = e.clientY + (centerY - e.clientY) * magneticStrength;

                cursorX.set(targetX);
                cursorY.set(targetY);
            } else {
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest('button, a, .interactive');

            if (interactive) {
                setIsHovering(true);
                if (interactive.classList.contains('magnetic')) {
                    setMagneticTarget(interactive.getBoundingClientRect());
                    setMagneticStrength(0.35); // 35% pull strength
                } else {
                    setMagneticTarget(null);
                    setMagneticStrength(0);
                }
            } else {
                setIsHovering(false);
                setMagneticTarget(null);
                setMagneticStrength(0);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY, magneticTarget, magneticStrength]);

    if (!isMounted) return null;

    return (
        <>

            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[10000] hidden lg:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    );
}
