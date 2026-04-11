'use client';

import { blogPosts } from '@/lib/blog-posts';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ClientSideFormattedDate } from './ClientSideFormattedDate';
import { motion } from 'framer-motion';
import { TextScramble } from '@/components/ui/TextScramble';

export function BlogList() {
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="text-center py-24">
        <h2 className="text-4xl font-black italic tracking-tighter">No intelligence yet.</h2>
        <p className="text-muted-foreground mt-4 text-xl">The archives are currently empty.</p>
      </div>
    );
  }

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="space-y-16 lg:space-y-32">
        <div className="mb-20">
            <h1 className="text-oversized leading-[0.85] mb-8">
                <TextScramble text="The" delay={100} /><br />
                <span className="text-primary">
                <TextScramble text="Archives." delay={400} />
                </span>
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground max-w-4xl border-l-[12px] border-primary pl-10 font-medium italic">
                Unapologetic insights into Generative Engine Optimization, scaling revenue, and weaponizing AI against your competition.
            </p>
        </div>

      {/* Featured Post */}
      <motion.article 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="group relative"
      >
        <Link href={`/blog/${featuredPost.slug}`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card/10 backdrop-blur-2xl border border-border/20 p-6 lg:p-12 rounded-[3rem] shadow-2xl hover:border-primary/40 transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            
            <div className="overflow-hidden rounded-[2rem] relative z-10 w-full h-[300px] lg:h-[500px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-ai-hint="abstract digital dark mode"
                priority
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6 text-xs lg:text-sm uppercase tracking-[0.3em]">
                <p className="text-primary font-black bg-primary/10 px-4 py-2 rounded-full border border-primary/20">Featured Intel</p>
                <time dateTime={featuredPost.date} className="text-muted-foreground font-mono font-bold">
                  <ClientSideFormattedDate dateString={featuredPost.date} />
                </time>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 leading-tight uppercase italic tracking-tighter">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground text-lg lg:text-xl mb-10 font-medium leading-relaxed max-w-xl">
                {featuredPost.excerpt}
              </p>
              <div className="inline-flex flex-col">
                <div className="flex items-center font-black text-primary uppercase tracking-[0.2em] text-sm lg:text-base">
                    Access Intelligence
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="h-[2px] w-0 bg-primary mt-2 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </div>
          </div>
        </Link>
      </motion.article>

      <div className="pt-8">
        <h2 className="text-4xl font-black mb-16 uppercase italic tracking-tighter flex items-center gap-6">
            <span className="bg-primary/20 text-primary w-16 h-16 rounded-full flex items-center justify-center border border-primary/30 shrink-0">↓</span>
            Tactical Briefings
        </h2>
        {otherPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {otherPosts.map((post, index) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card/30 backdrop-blur-xl border border-border/20 rounded-[2.5rem] flex flex-col group hover:border-primary/40 transition-all duration-500 shadow-xl overflow-hidden relative"
              >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    data-ai-hint="abstract digital dark mode"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </Link>
                <div className="p-8 lg:p-10 flex flex-col flex-grow relative z-10">
                  <div className="mb-6">
                    <time dateTime={post.date} className="text-xs text-primary font-mono tracking-[0.2em] font-bold uppercase block">
                        <ClientSideFormattedDate dateString={post.date} />
                    </time>
                  </div>
                  <h2 className="text-2xl font-black text-foreground mb-4 flex-grow uppercase tracking-tight italic leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors duration-300">
                        {post.title}
                    </Link>
                  </h2>
                  <div className="mt-8 pt-6 border-t border-border/40">
                      <Link href={`/blog/${post.slug}`} className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] flex items-center group-hover:text-primary transition-colors">
                          Read Briefing <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
