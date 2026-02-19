'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export function DynamicBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) return;
    const ctx = context;

    let animationFrameId: number;
    let particles: WaveParticle[] = [];
    // Optimized for performance: 50 is the sweet spot for smoothness
    const particleCount = 50;
    // Tighter connections to reduce O(n^2) overhead
    const connectionDistance = 150;

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles();
    };

    class WaveParticle {
      x: number;
      y: number;
      baseY: number;
      speed: number;
      offset: number;
      color: string;
      radius: number;
      time: number;

      constructor(width: number, height: number, theme: string) {
        this.x = Math.random() * width;
        this.baseY = Math.random() * height;
        this.y = this.baseY;
        // Faster, more energetic
        this.speed = 0.2 + Math.random() * 0.4;
        this.offset = Math.random() * 100;
        this.time = 0;
        // Variance for depth (1px to 4px)
        this.radius = Math.random() * 3 + 1;

        // Theme-aware colors with robust fallback to prevent black-screen crashes
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '35 95% 58%';
        const parts = primaryColor.split(' ');
        const h = parseFloat(parts[0]) || 35;
        const s = parseFloat(parts[1]?.replace('%', '')) || 95;
        const l = parseFloat(parts[2]?.replace('%', '')) || 58;

        // Keep opacity variation for depth, but clearer (0.1 - 0.4) - SUBTLED DOWN
        const a = 0.1 + Math.random() * 0.3;
        this.color = `hsla(${h}, ${s}%, ${l}%, ${a})`;
      }

      update(width: number, height: number, mouse: { x: number, y: number }) {
        this.time += 0.005;
        this.x += this.speed;

        // Sine wave motion - deeper waves
        const wave1 = Math.sin(this.time + this.offset) * 25;
        const wave2 = Math.cos(this.time * 0.5 + this.offset) * 15;
        this.y = this.baseY + wave1 + wave2;

        // Mouse interaction - stronger push
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 250;

        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius;
          this.x += (dx / dist) * force * 2.5; // Stronger reaction
          this.baseY += (dy / dist) * force * 2.5;
        }

        // Loop screen
        if (this.x > width + 50) {
          this.x = -50;
          this.baseY = Math.random() * height;
        } else if (this.x < -50) {
          this.x = width + 50;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Glow effect for larger particles
        if (this.radius > 3) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color;
        } else {
          ctx.shadowBlur = 0;
        }
      }
    }

    let mouse = { x: -9999, y: -9999 };
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new WaveParticle(canvas.width, canvas.height, resolvedTheme || 'light'));
      }
    }

    function drawConnections() {
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '35 95% 58%';
      const parts = primaryColor.split(' ');
      const h = parseFloat(parts[0]) || 35;
      const s = parseFloat(parts[1]?.replace('%', '')) || 95;
      const l = resolvedTheme === 'dark' ? 70 : 40;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Gradient lines for cleaner look
            const opacity = 1 - dist / connectionDistance;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${opacity * 0.25})`; // Reduced opacity to keep it subtle
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      // Reset shadow for lines
      ctx.shadowBlur = 0;
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawConnections();

      particles.forEach(p => {
        p.update(canvas.width, canvas.height, mouse);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    if (container) {
      resizeObserver.observe(container);
    }

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (container) {
        resizeObserver.unobserve(container);
      }
    };
  }, [mounted, resolvedTheme]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      <canvas
        ref={canvasRef}
        className={cn(
          'w-full h-full transition-opacity duration-1000',
          mounted ? 'opacity-100' : 'opacity-0'
        )}
        aria-hidden="true"
      />
    </div>
  );
}
