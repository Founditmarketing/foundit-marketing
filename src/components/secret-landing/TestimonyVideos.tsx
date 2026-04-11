'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';

const testimonials = [
    {
        id: 'blake-knoll',
        title: 'Blake Knoll',
        src: '/blake-knoll-testimonial.mp4',
    },
    {
        id: 'byron',
        title: 'Byron',
        src: '/byron-testimonial.mp4',
    },
    {
        id: 'walls-tree-service',
        title: 'Walls Tree Service',
        src: '/walls-tree-service-testimonial.mp4',
    },
    {
        id: 'lecaze',
        title: 'Lecaze',
        src: '/lecaze-testimonial.mp4',
    }
];

export function TestimonyVideos() {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handlePlay = (index: number) => {
        if (playingIndex !== null && playingIndex !== index) {
            videoRefs.current[playingIndex]?.pause();
        }
        setPlayingIndex(index);
        videoRefs.current[index]?.play();
    };

    return (
        <section className="py-12 md:py-24 bg-card/20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <ScrollReveal>
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 md:mb-6">
                            Real <span className="text-primary">Stories</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                            Hear directly from business owners who stopped playing games and started building empires.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {testimonials.map((video, index) => (
                        <ScrollReveal key={video.id} delay={index * 0.1}>
                            <div className="group relative aspect-video bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-border/50 hover:border-primary/50 transition-all duration-300">
                                <video
                                    ref={(el) => { videoRefs.current[index] = el }}
                                    src={video.src}
                                    className="w-full h-full object-cover"
                                    controls={playingIndex === index}
                                    onPlay={() => handlePlay(index)}
                                    playsInline
                                    preload="metadata"
                                    onLoadedMetadata={(e) => {
                                        // Hack to show a non-black frame for videos which start with black
                                        e.currentTarget.currentTime = 0.1;
                                    }}
                                >
                                    Your browser does not support the video tag.
                                </video>

                                {playingIndex !== index && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors cursor-pointer"
                                        onClick={() => handlePlay(index)}
                                    >
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                                            <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground fill-current ml-1" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                            <h3 className="text-white font-bold text-lg md:text-xl">{video.title}</h3>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

