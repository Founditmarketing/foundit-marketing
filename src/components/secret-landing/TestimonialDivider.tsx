'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';
import Link from 'next/link';

interface TestimonialDividerProps {
    videoSrc: string;
    title: string;
    link: string;
    reverse?: boolean; // Option to flip layout if needed, though for single video centered is best
}

export function TestimonialDivider({ videoSrc, title, link }: TestimonialDividerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-16 md:py-24 border-y border-border/50 bg-background overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <ScrollReveal>
                    <div className="flex flex-col items-center">
                        <div className="mb-6">
                            <span className="text-muted-foreground/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] select-none">
                                Partner Testimony
                            </span>
                        </div>
                        <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 group">
                            <video
                                ref={videoRef}
                                src={videoSrc}
                                className="w-full h-full object-cover"
                                controls={isPlaying}
                                playsInline
                                preload="metadata"
                                onEnded={() => setIsPlaying(false)}
                                onPause={() => setIsPlaying(false)}
                                onPlay={() => setIsPlaying(true)}
                                onClick={handlePlay}
                                onLoadedMetadata={(e) => {
                                    e.currentTarget.currentTime = 0.1;
                                }}
                            >
                                Your browser does not support the video tag.
                            </video>

                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors cursor-pointer"
                                    onClick={handlePlay}
                                >
                                    <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                                        <Play className="w-10 h-10 text-primary-foreground fill-current ml-1" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                        <h3 className="text-white font-bold text-xl md:text-2xl">{title}</h3>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-muted-foreground mb-4 font-medium">See their results live:</p>
                            <Link
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-primary/20 bg-primary/10 rounded-full text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                Visit Website
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
