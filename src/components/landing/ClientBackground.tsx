'use client';

import { useEffect, useState } from 'react';

export function ClientBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Adding a slight delay to ensure React hydrates the rest of the app fully
        // before the heavy WebGL iframe starts blocking the main thread.
        const timer = setTimeout(() => {
            setMounted(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[0] bg-black pointer-events-none overflow-hidden">
            <iframe
                src="https://my.spline.design/retrofuturismbganimation-snudBxLoP8IjEgulxeP3n4WQ/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="w-[150%] max-w-none md:w-[115%] h-[calc(100%+200px)] md:h-[calc(100%+80px)] pointer-events-none absolute bottom-[-200px] md:bottom-[-80px] left-1/2 -translate-x-[63%] md:-translate-x-[8%] md:left-0 transform-gpu"
                loading="lazy"
                title="Dynamic Background"

            ></iframe>
        </div>
    );
}
