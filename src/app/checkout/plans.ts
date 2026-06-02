export const PLANS = [
  {
    id: 'essentials',
    name: 'Marketing Essentials',
    subtitle: 'Website Development/Management, Search Engine Optimization',
    price: 599,
    popular: false,
    features: [
      'Website Design, Management, Hosting, Backups, Security & SSL',
      'Search Engine Optimization & Listing Directories',
      'Google Business Profile Management',
    ],
  },
  {
    id: 'growth',
    name: 'Business Growth',
    subtitle: 'SEO / Web Design / Social Media Management',
    price: 1000,
    popular: false,
    features: [
      'Website Design, Management, Hosting, Backups, Security & SSL',
      'Search Engine Optimization & Listing Directories',
      'Google Business Profile Management',
      'Social Media Management, Graphics Production & Scheduled Posting',
    ],
  },
  {
    id: 'domination',
    name: 'Market Domination',
    subtitle: 'SEO / Web Design / Social Media Management',
    price: 1500,
    popular: true,
    features: [
      'Website Design, Management, Hosting, Backups, Security & SSL',
      'Search Engine Optimization & Listing Directories',
      'Google Business Profile Management',
      'Social Media Management, Graphics Production & Scheduled Posting',
      'Targeted Ads',
      'Google Ads, PPC & Google Local Services',
    ],
  },
  {
    id: 'ai',
    name: 'Market Domination + AI Optimization',
    subtitle: 'SEO / Web Design / Social Media Management + AIO GEO',
    price: 2200,
    popular: false,
    features: [
      'Everything in Market Domination',
      'AIO/SEO+ Package — AI visibility across major LLMs',
      'Personalized AI content optimization',
      'On-page & off-page GEO/SEO optimization',
      'Search performance reporting & GEO/SEO Specialist support',
    ],
  },
] as const;

export type Plan = (typeof PLANS)[number];
