import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://founditmarketing.com';

    const routes = [
        '',
        '/about',
        '/seo',
        '/ppc',
        '/case-studies',
        '/contact',
        '/blog',
        '/solutions',
        '/feasibility-study',
        '/ai-visibility-check',
        '/marketing-alexandria',
        '/pineville-seo',
        '/central-louisiana-web-design',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Add blog posts (static example based on existing content)
    const blogPosts = [
        'intro-to-geo',
        'common-ppc-mistakes',
        'local-seo-dominance',
        'ai-content-strategy',
    ].map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...blogPosts];
}
