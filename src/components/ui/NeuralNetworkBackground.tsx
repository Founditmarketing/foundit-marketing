'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const DynamicLightBackground = dynamic(
    () => import('@/components/landing/LightModeArtwork').then((mod) => mod.DynamicBackground),
    { ssr: false }
);

function DarkModeCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 45; // Reduced for performance
        const connectionDistance = 180;
        const mouseRadius = 180;

        let mouse = { x: -1000, y: -1000 };
        let smoothedMouse = { x: -1000, y: -1000 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.3; // Slower for grace
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 1.5 + 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

                // Smoothed Mouse interaction
                const dx = smoothedMouse.x - this.x;
                const dy = smoothedMouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouseRadius) {
                    const force = (mouseRadius - distance) / mouseRadius;
                    this.vx -= dx * force * 0.005;
                    this.vy -= dy * force * 0.005;
                }

                // High-Grace Friction
                this.vx *= 0.98;
                this.vy *= 0.98;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = theme === 'dark' ? 'rgba(255, 165, 0, 0.9)' : 'rgba(255, 165, 0, 0.5)';
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        let lastMouseMove = 0;
        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastMouseMove < 16) return; // Throttle to ~60fps
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            lastMouseMove = now;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Lerp mouse for grace
            smoothedMouse.x += (mouse.x - smoothedMouse.x) * 0.05;
            smoothedMouse.y += (mouse.y - smoothedMouse.y) * 0.05;

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = theme === 'dark'
                            ? `rgba(255, 165, 0, ${0.6 * (1 - distance / connectionDistance)})`
                            : `rgba(255, 165, 0, ${0.3 * (1 - distance / connectionDistance)})`;
                        ctx.lineWidth = 0.5; // Thinner for grace
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="!hidden lg:!block fixed inset-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.8 }} // Increased overall visibility
        />
    );
}

export function NeuralNetworkBackground() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (resolvedTheme === 'light') {
        return (
            <div className="!hidden lg:!block fixed inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 bg-white/90" /> {/* Wash mechanism - AGGRESSIVE */}
                <DynamicLightBackground />
            </div>
        );
    }

    return <DarkModeCanvas />;
}
