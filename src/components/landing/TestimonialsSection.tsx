'use client';

import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    id: 1,
    name: 'Byron',
    title: 'National Equipment Dealer',
    quote: "We started out as a small group. We never intended to grow as big as we have. It’s been 9 years plus with Found It, and they turned us into a major volume dealer throughout the United States simply by using their service.",
  },
  {
    id: 2,
    name: 'Tyler Griffin',
    title: 'Business Owner',
    quote: "No fluff, no excuses, just real strategy and execution. If you're a business owner who wants a marketing partner you can trust—not just another vendor—Found It Marketing is it. I'm genuinely impressed and grateful for the impact they've had on our growth.",
  },
  {
    id: 3,
    name: 'Google Reviewer',
    title: '5-Star Review',
    quote: "A game-changer for my business. They built a tailored strategy that actually delivered quality leads that turned into paying customers. Their communication and transparency is second to none.",
  },
];


export function TestimonialsSection() {

  return (
    <section className="bg-background py-24 lg:py-32 relative z-40 lg:-mt-40">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-left mb-24 max-w-4xl">
          <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8 block border-l-4 border-primary pl-4">
            REAL RESULTS
          </span>
          <h2 className="text-foreground text-oversized">
            Trusted by Leaders.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Don't just take our word for it. Here's what our clients have to say about their success with our GEO strategies.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full relative">
                  <div className="bg-card rounded-[3rem] border border-border/50 flex flex-col overflow-hidden group h-full p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative z-10 backdrop-blur-sm">
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic text-lg mb-6 flex-grow">"{testimonial.quote}"</p>

                    <div>
                      <p className="font-bold text-card-foreground">{testimonial.name}</p>
                      <p className="text-sm text-primary">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-foreground bg-secondary hover:bg-muted border -left-4" />
          <CarouselNext className="text-foreground bg-secondary hover:bg-muted border -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
