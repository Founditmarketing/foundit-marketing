import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://founditmarketing.com';

    // Core pages
    const coreRoutes = [
        '',
        '/about',
        '/contact',
        '/team',
        '/blog',
        '/case-studies',
        '/web-development',
        '/platform',
        '/marketing',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Website tier pages
    const websiteTiers = [
        'ignite',
        'accelerate',
        'dominate',
        'empire',
    ].map((tier) => ({
        url: `${baseUrl}/websites/${tier}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Industry vertical pages
    const industries = [
        'medical',
        'contractors',
        'dealerships',
        'retail',
        'realtors',
        'lawyers',
    ].map((slug) => ({
        url: `${baseUrl}/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Legacy SEO/PPC pages (still indexed)
    const legacyRoutes = [
        '/seo',
        '/ppc',
        '/solutions',
        '/ai-visibility-check',
        '/marketing-alexandria',
        '/pineville-seo',
        '/central-louisiana-web-design',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Blog posts
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

    return [...coreRoutes, ...websiteTiers, ...industries, ...legacyRoutes, ...blogPosts];
}
