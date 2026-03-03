'use client';

import { useEffect, useState } from 'react';

export function ClientBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Adding a slight delay to ensure React hydrates the rest of the app fully
        // before the heavy WebGL iframe starts blocking the main thread.
        const timer = setTimeout(() => {
            setMounted(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <iframe
                src="https://my.spline.design/retrofuturismbganimation-snudBxLoP8IjEgulxeP3n4WQ/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="w-full h-[calc(100%+60px)] pointer-events-none absolute bottom-[-60px]"
                loading="lazy"
                title="Dynamic Background"
            ></iframe>
        </div>
    );
}
