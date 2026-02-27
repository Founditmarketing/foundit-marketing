"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const MotionButton = motion.button as any;

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function LiquidButton({ children, className, type = "button", ...props }: LiquidButtonProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <MotionButton
            type={type}
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative overflow-hidden group px-8 py-4 bg-transparent border-2 border-primary text-primary font-black uppercase italic tracking-tighter rounded-2xl transition-all duration-300 shadow-lg hover:shadow-primary/30 magnetic cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                isHovered && "text-primary-foreground",
                className
            )}
            {...props}
        >
            <span className="relative z-10 transition-colors duration-300">
                {children}
            </span>
            <motion.div
                className="absolute w-[300px] h-[300px] bg-primary rounded-full pointer-events-none z-0"
                initial={{ scale: 0 }}
                animate={{
                    scale: isHovered ? 1.5 : 0,
                    x: position.x - 150,
                    y: position.y - 150,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                    mass: 0.5
                }}
            />
        </MotionButton>
    );
}
