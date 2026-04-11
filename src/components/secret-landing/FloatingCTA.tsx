'use client';

import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 100px
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToApply = () => {
        const applySection = document.getElementById('apply');
        if (applySection) {
            applySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 left-6 md:left-auto md:bottom-8 md:right-8 z-50 text-center md:text-right"
                >
                    <Button
                        onClick={scrollToApply}
                        className="w-full md:w-auto px-8 py-6 rounded-full bg-primary text-primary-foreground font-black text-lg md:text-xl uppercase italic tracking-tighter shadow-xl shadow-primary/20 hover:scale-105 transition-transform duration-300 border-2 border-white/10"
                    >
                        Let's Get Started
                        <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
