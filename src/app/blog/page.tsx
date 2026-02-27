import { BlogList } from '@/components/blog/BlogList';

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter mb-4 text-primary">
                    The Found It. Blog
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                    Insights on GEO, PPC, and the future of digital marketing.
                </p>
            </div>
            <BlogList />
        </div>
    </main>
  );
}
