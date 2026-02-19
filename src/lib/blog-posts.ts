export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  image: string;
};

export const blogPosts: Post[] = [
    {
        slug: 'intro-to-geo',
        title: 'The Future is Answer Engines: An Intro to GEO',
        date: '2024-07-29',
        excerpt: 'Search is evolving. Learn why Generative Engine Optimization (GEO) is the key to staying visible in the age of AI, turning your brand into the definitive answer.',
        author: 'Jane Doe',
        authorImage: 'https://picsum.photos/seed/author1/40/40',
        image: 'https://picsum.photos/seed/post1/800/400',
        content: `
<p>For two decades, Search Engine Optimization (SEO) has been the undisputed king of digital marketing. But the kingdom is changing. The rise of AI-powered "answer engines" like Google's AI Overviews and Perplexity is rewriting the rules of online visibility. Welcome to the era of Generative Engine Optimization (GEO).</p>
<h3>What is GEO?</h3>
<p>GEO isn't just a new buzzword; it's a fundamental shift in strategy. Where SEO focuses on ranking a list of blue links, GEO focuses on becoming the single, authoritative answer that an AI model presents to a user. It's the difference between being a library book and being the librarian's definitive recommendation.</p>
<h3>Why It Matters Now</h3>
<p>Users are learning to ask questions instead of just typing keywords. They want direct answers, not a list of websites to sift through. If your brand isn't the source of that answer, you're invisible. We've seen clients increase their qualified leads by over 40% by shifting their focus from traditional SEO to a comprehensive GEO strategy.</p>
<p>The goal is no longer just to be on the first page; the goal is to be the answer itself.</p>
        `,
    },
    {
        slug: 'common-ppc-mistakes',
        title: '5 Common PPC Mistakes Costing You Money',
        date: '2024-07-22',
        excerpt: 'Are your ad campaigns underperforming? You might be making one of these five common—and costly—PPC mistakes that we see every day.',
        author: 'John Smith',
        authorImage: 'https://picsum.photos/seed/author2/40/40',
        image: 'https://picsum.photos/seed/post2/800/400',
        content: `
<p>Pay-Per-Click (PPC) advertising can be a powerful driver of growth, but it's also an easy place to waste your budget. After auditing hundreds of ad accounts, we've seen the same mistakes time and time again. Here are the top five to avoid:</p>
<h3>1. Neglecting Negative Keywords</h3>
<p>Failing to add negative keywords means your ads show up for irrelevant searches, wasting clicks and money. Regularly review your search term reports to find and exclude terms that don't match user intent.</p>
<h3>2. Poor Landing Page Experience</h3>
<p>You can have the best ad in the world, but if it leads to a slow, confusing, or non-mobile-friendly landing page, you won't get conversions. Ensure your landing page is a seamless extension of your ad's promise.</p>
<h3>3. Ignoring Ad Extensions</h3>
<p>Ad extensions are free real estate! Using sitelinks, callouts, and structured snippets makes your ad bigger, more informative, and more likely to be clicked.</p>
<h3>4. Using Broad Match Everywhere</h3>
<p>While broad match has its place, relying on it too heavily gives Google too much control and can lead to wasted spend on irrelevant queries. Use phrase and exact match to control where your ads appear.</p>
<h3>5. Not Tracking Conversions Properly</h3>
<p>If you aren't accurately tracking what a "conversion" means for your business (a sale, a form submission, a phone call), you're flying blind. Proper conversion tracking is the only way to know what's working and optimize for ROI.</p>
        `,
    },
    {
        slug: 'local-seo-dominance',
        title: 'Dominating the Map Pack: Your Guide to Local SEO',
        date: '2024-07-15',
        excerpt: 'For local businesses, the Google Map Pack is the most valuable real estate online. Learn the key strategies to secure your spot and drive high-intent customers to your door.',
        author: 'Jane Doe',
        authorImage: 'https://picsum.photos/seed/author1/40/40',
        image: 'https://picsum.photos/seed/post3/800/400',
        content: `
<p>If you run a local business, you know that visibility in your immediate area is everything. While national SEO is important, winning the local search game—specifically, the Google Map Pack—is what drives foot traffic and phone calls. Here's how to do it.</p>
<h3>1. Master Your Google Business Profile</h3>
<p>Your Google Business Profile (GBP) is the cornerstone of local SEO. Treat it like a second homepage. Fill out every single section completely: services, products, hours, photos, and especially Q&As. A complete profile signals to Google that you are an active and legitimate business.</p>
<h3>2. Cultivate a Review Strategy</h3>
<p>Reviews are a massive ranking factor for the Map Pack. More importantly, they are a trust signal for potential customers. Actively encourage your happy customers to leave reviews, and always respond to them—both positive and negative. This shows you're engaged and care about customer feedback.</p>
<h3>3. Build Local Citations</h3>
<p>A citation is any online mention of your business's name, address, and phone number (NAP). Consistency is key. Ensure your NAP is identical across all major directories like Yelp, Yellow Pages, and industry-specific sites. This consistency builds Google's confidence in your location and contact information.</p>
<h3>4. Create Hyperlocal Content</h3>
<p>Write content that is explicitly about your service area. Create pages for specific neighborhoods or towns you serve. Mention local landmarks or events. This tells Google that you are not just located in an area, but you are an active part of that community.</p>
        `,
    },
    {
        slug: 'ai-content-strategy',
        title: 'Content is King, But AI is the Kingmaker',
        date: '2024-07-08',
        excerpt: 'Generative AI like Google Gemini is changing how content is created and consumed. Discover how to adapt your content strategy to thrive in the new age of AI-driven search.',
        author: 'John Smith',
        authorImage: 'https://picsum.photos/seed/author2/40/40',
        image: 'https://picsum.photos/seed/post4/800/400',
        content: `
<p>Content has always been the foundation of digital marketing. But the rise of powerful generative AI models like Google Gemini means the way we create and strategize content must evolve. AI is no longer just a tool; it's a collaborator and a new kind of audience.</p>
<h3>Shift from Keywords to Concepts</h3>
<p>AI-driven search understands topics and concepts, not just keywords. Your content strategy should focus on building "topical authority." Instead of writing one article about "roof repair," create a cluster of interconnected articles covering "common roof leak causes," "shingle vs. metal roofing," and "emergency roof repair costs." This signals to AI that you are an expert on the entire topic.</p>
<h3>Use AI as Your Creative Partner</h3>
<p>Struggling with writer's block? Use AI to brainstorm blog post ideas, generate outlines, and even write first drafts. The key is to use it as a starting point. An expert human must always refine, edit, and add unique insights to the AI-generated content to ensure it meets quality standards and reflects your brand's voice.</p>
<h3>Optimize for "The Answer"</h3>
<p>The goal is no longer just to rank, but to be the source of the answer in an AI overview. Structure your content with clear headings, bulleted lists, and concise answers to common questions. Use schema markup to give AI explicit clues about your content's meaning. Think of it as spoon-feeding the AI exactly what it needs to see you as the most authoritative source.</p>
        `,
    }
];
