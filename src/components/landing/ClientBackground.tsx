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
        <div className="fixed inset-0 z-[0] bg-black pointer-events-none">
            <iframe
                src="https://my.spline.design/retrofuturismbganimation-snudBxLoP8IjEgulxeP3n4WQ/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="w-[150%] max-w-none sm:w-full h-[calc(100%+60px)] pointer-events-none absolute bottom-[-60px] left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:scale-100"
                loading="lazy"
                title="Dynamic Background"

            ></iframe>
        </div>
    );
}
