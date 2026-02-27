'use client';

import { blogPosts } from '@/lib/blog-posts';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ClientSideFormattedDate } from './ClientSideFormattedDate';

export function BlogList() {
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-bold">No posts yet.</h2>
        <p className="text-muted-foreground mt-2">Check back later for exciting updates!</p>
      </div>
    );
  }

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Featured Post */}
      <article className="group">
        <Link href={`/blog/${featuredPost.slug}`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                width={800}
                height={500}
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="abstract digital"
                priority
              />
            </div>
            <div className="lg:-ml-8">
              <div className="flex items-center gap-4 mb-2 text-sm uppercase tracking-widest">
                <p className="text-primary font-mono font-bold">Featured Story</p>
                <span className="text-muted-foreground">|</span>
                <time dateTime={featuredPost.date} className="text-muted-foreground font-mono">
                  <ClientSideFormattedDate dateString={featuredPost.date} />
                </time>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center font-bold text-primary">
                Read Article
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </article>

      <div className="border-t border-border pt-16 lg:pt-24">
        <h2 className="text-3xl font-black text-center mb-12 uppercase italic tracking-tighter">More Insights</h2>
        {otherPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article key={post.slug} className="bg-card border rounded-3xl flex flex-col group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-t-3xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    data-ai-hint="abstract digital"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-card-foreground mb-3 flex-grow">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                  </h2>
                  <div className="mt-4 pt-4 border-t text-sm text-muted-foreground">
                    <time dateTime={post.date}>
                      <ClientSideFormattedDate dateString={post.date} />
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
