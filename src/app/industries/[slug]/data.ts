/* ─── Industry Data ─── */
export interface IndustryData {
  name: string;
  slug: string;
  headline: string;
  subline: string;
  heroStat: { value: string; label: string };
  painPoints: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  websiteCopy: string;
  marketingCopy: string;
  ctaText: string;
}

export const industries: Record<string, IndustryData> = {
  medical: {
    name: 'Medical / Healthcare',
    slug: 'medical',
    headline: 'Grow Your Practice Through Proven Digital Strategies',
    subline:
      'Patients are searching for care online — and choosing providers who show up first. We make sure that provider is you, across Google, AI search, and every platform that matters.',
    heroStat: { value: '349%', label: 'Avg. Patient Growth' },
    painPoints: [
      {
        title: 'Losing Patients to Aggregators',
        description: 'ZocDoc, Healthgrades, and WebMD are ranking above your practice website, stealing patients who should be coming directly to you.',
      },
      {
        title: 'Invisible on Google Maps',
        description: 'When patients search "doctor near me," you\'re buried on page 2. Your competitors in the top 3 are getting 93% of the clicks.',
      },
      {
        title: 'Outdated Website That Doesn\'t Convert',
        description: 'Your website loads slowly, looks like it was built in 2015, and has no online booking — so patients bounce to the next provider.',
      },
      {
        title: 'AI Search Is the New Referral',
        description: 'Patients are asking ChatGPT and Google AI "best dermatologist near me." If your practice isn\'t optimized for AI, you\'re invisible to the next generation.',
      },
    ],
    solutions: [
      {
        title: 'GEO-Optimized for AI Recommendations',
        description: 'We structure your digital presence so Google, ChatGPT, Gemini, and Perplexity recommend YOUR practice when patients ask.',
      },
      {
        title: 'Local SEO Dominance',
        description: 'Top 3 in Google Maps for every specialty you treat. We optimize your Google Business Profile, build citations, and generate reviews on autopilot.',
      },
      {
        title: 'HIPAA-Conscious Website Design',
        description: 'Modern, conversion-optimized websites with online booking integration, patient portals, and mobile-first design that instills trust.',
      },
      {
        title: 'Reputation Management System',
        description: 'Automated review generation, monitoring, and response systems that build your 5-star reputation across Google, Healthgrades, and Yelp.',
      },
    ],
    websiteCopy: 'Your practice website should be your hardest-working employee — booking appointments 24/7, answering questions, and converting visitors into loyal patients. Our tiered website packages are built specifically for healthcare.',
    marketingCopy: 'From local SEO foundations to full-funnel paid + organic campaigns, our cumulative marketing packages are designed for practices at every growth stage.',
    ctaText: 'Get Your Healthcare Strategy Session',
  },
  contractors: {
    name: 'Contractors / Home Services',
    slug: 'contractors',
    headline: 'Stop Paying Per Lead. Own Your Pipeline.',
    subline:
      'Homeowners are searching for contractors right now. The ones who show up first get the jobs. We put you first — and keep you there.',
    heroStat: { value: '$2.1M', label: 'Avg. Revenue Generated' },
    painPoints: [
      {
        title: 'Bleeding Money on Lead Services',
        description: 'HomeAdvisor, Angi, and Thumbtack charge $50-200 per lead — and you\'re competing with 5 other contractors for every one.',
      },
      {
        title: 'Feast-or-Famine Lead Flow',
        description: 'Some months you\'re turning away work, other months your crew is sitting idle. No system for consistent, predictable lead generation.',
      },
      {
        title: 'Competitors Are Outranking You',
        description: 'When someone searches "hvac repair near me" or "roofer in [city]," your competition is showing up first in Google Maps and ads.',
      },
      {
        title: 'No Online Presence That Matches Your Work',
        description: 'You do incredible work but your website (if you have one) doesn\'t reflect it. No portfolio, no reviews, no trust signals.',
      },
    ],
    solutions: [
      {
        title: 'Portfolio-Driven Websites That Convert',
        description: 'Custom websites that showcase your best work, display reviews, and convert visitors into calls with click-to-call, forms, and chat.',
      },
      {
        title: 'Google Ads with AI-Powered Bidding',
        description: 'We build and manage PPC campaigns that deliver leads at a fraction of what Angi charges — and they\'re exclusively yours.',
      },
      {
        title: 'Top 3 in Google Maps for Every Service',
        description: 'Local SEO optimization for every service you offer in every area you serve. Google Business Profile, citations, and review generation.',
      },
      {
        title: '5-Star Reputation on Autopilot',
        description: 'Automated review request systems that build your reputation on Google, Yelp, and NextDoor without you lifting a finger.',
      },
    ],
    websiteCopy: 'Your website should generate more leads than HomeAdvisor — without sharing them. Our tiered packages range from professional brand sites to full custom builds with booking, payment, and portfolio systems.',
    marketingCopy: 'From getting your Google Business Profile dialed in to running full-scale ad campaigns across Google, Facebook, and NextDoor — our packages grow with your business.',
    ctaText: 'Get Your Contractor Strategy Session',
  },
  dealerships: {
    name: 'Dealerships / Automotive',
    slug: 'dealerships',
    headline: 'From Local Lots to National Volume Dealers',
    subline:
      'We\'ve scaled automotive businesses from one location to 48 states. Whether you\'re a single-point dealer or a national group, we build the digital infrastructure that moves metal.',
    heroStat: { value: '48', label: 'States Served' },
    painPoints: [
      {
        title: 'Cost-Per-Click Is Crushing Margins',
        description: 'Automotive keywords cost $5-15+ per click. Without smart bidding and landing page optimization, you\'re burning ad budget.',
      },
      {
        title: 'Aggregators Eat Your Organic Traffic',
        description: 'AutoTrader, CarGurus, and Cars.com dominate search results. Your actual inventory pages are buried under layers of third parties.',
      },
      {
        title: 'No AI Search Strategy',
        description: 'Customers are asking AI assistants "best used car dealer near me." If your dealership isn\'t optimized for LLMs, you\'re losing the next generation of buyers.',
      },
      {
        title: 'Scaling Beyond Local Is a Nightmare',
        description: 'You want to go regional or national but you don\'t have the digital infrastructure — no per-location landing pages, no geo-targeted campaigns.',
      },
    ],
    solutions: [
      {
        title: 'Inventory-Optimized Websites',
        description: 'Dynamic listing pages with VIN-level SEO, real-time inventory feeds, and conversion-optimized VDPs that turn browsers into buyers.',
      },
      {
        title: 'National PPC with Geo-Targeting',
        description: 'Campaigns that scale from 1 zip code to 48 states with AI-powered bidding, dynamic inventory ads, and geo-fenced strategies.',
      },
      {
        title: 'GEO Optimization for AI Assistants',
        description: 'We structure your dealership\'s digital presence so ChatGPT, Google AI, and every voice assistant recommends YOU first.',
      },
      {
        title: 'Custom Data Pipelines',
        description: 'Click-to-sale attribution, CRM integrations, and real-time dashboards that track every lead from first ad impression to closed deal.',
      },
    ],
    websiteCopy: 'From single-point dealers to multi-rooftop groups, our website tiers scale with your operation. Dynamic inventory, VDP optimization, and multi-location microsites.',
    marketingCopy: 'Our marketing packages include everything from baseline SEO and Google Business optimization to full omni-channel campaigns across Google, Facebook, YouTube, and AI platforms.',
    ctaText: 'Get Your Dealership Strategy Session',
  },
  retail: {
    name: 'Retail / Stores',
    slug: 'retail',
    headline: 'Turn Foot Traffic Into a Digital Empire',
    subline:
      'E-commerce competitors don\'t sleep. We build digital systems that drive both online orders and in-store visits — turning your brand into an omni-channel machine.',
    heroStat: { value: '4.2x', label: 'Avg. Revenue Multiplier' },
    painPoints: [
      {
        title: 'Amazon Is Stealing Your Customers',
        description: 'Local shoppers are defaulting to online because you don\'t have an e-commerce presence or your site doesn\'t rank for product searches.',
      },
      {
        title: 'No Online Ordering System',
        description: 'Customers expect to browse, order, and schedule pickup online. Without that capability, you\'re losing sales to competitors who offer it.',
      },
      {
        title: 'Social Media That Doesn\'t Convert',
        description: 'You\'re posting regularly but followers aren\'t becoming customers. No connection between your social presence and actual revenue.',
      },
      {
        title: 'Google Business Not Optimized',
        description: 'Your Google Business Profile is incomplete, has outdated hours, and no product listings — so local searchers skip right past you.',
      },
    ],
    solutions: [
      {
        title: 'E-Commerce Ready Websites',
        description: 'Online store with local pickup, delivery integration, and product catalog management that works seamlessly with your POS system.',
      },
      {
        title: 'Social Commerce Advertising',
        description: 'Facebook and Instagram ad campaigns that drive both online orders and foot traffic with precise targeting and conversion tracking.',
      },
      {
        title: 'Local SEO and Google Business',
        description: 'Complete Google Business optimization with product listings, posts, Q&A management, and review generation for maximum local visibility.',
      },
      {
        title: 'Email & SMS Automation',
        description: 'Automated marketing flows for abandoned carts, new products, seasonal promotions, and VIP customer segments that drive repeat purchases.',
      },
    ],
    websiteCopy: 'Your store deserves a website as good as the in-store experience. From product catalogs to e-commerce checkout, our tiers give you exactly what you need.',
    marketingCopy: 'Drive both online and foot traffic with our marketing packages — from local SEO foundations to full omni-channel campaigns across Google, social, email, and SMS.',
    ctaText: 'Get Your Retail Strategy Session',
  },
  realtors: {
    name: 'Real Estate',
    slug: 'realtors',
    headline: 'Be the Agent Buyers and Sellers Find First',
    subline:
      'In real estate, visibility is everything. We make sure you\'re not just another face on Zillow — you\'re THE agent in your market with a brand that commands trust.',
    heroStat: { value: '#1', label: 'In Your Market' },
    painPoints: [
      {
        title: 'Zillow Is Your Competition',
        description: 'Zillow, Realtor.com, and Redfin dominate search results for your area. Your personal website is invisible to the buyers who need you.',
      },
      {
        title: 'Leads Go to Bigger Budgets',
        description: 'Teams with larger marketing budgets are capturing leads from every digital channel while you rely on referrals and open houses.',
      },
      {
        title: 'No Personal Brand Differentiation',
        description: 'Your brokerage website makes you look like every other agent. No unique positioning, no thought leadership, no reason to choose you.',
      },
      {
        title: 'AI Home Search Is Coming Fast',
        description: 'Buyers are asking AI assistants for agent recommendations. If you\'re not optimized for AI search, you won\'t be recommended.',
      },
    ],
    solutions: [
      {
        title: 'IDX-Integrated Personal Websites',
        description: 'Custom websites with IDX integration that capture buyer leads, showcase your listings, and nurture prospects with automated drip campaigns.',
      },
      {
        title: 'Hyper-Local SEO Strategy',
        description: 'Target specific neighborhoods, zip codes, and subdivisions. Be the top result when someone searches "homes for sale in [your area]."',
      },
      {
        title: 'Personal Brand Positioning',
        description: 'Video content, thought leadership blog strategy, and social media presence that positions you as THE expert in your market.',
      },
      {
        title: 'AI Visibility Optimization',
        description: 'Structured data, content architecture, and GEO optimization so next-generation AI home search platforms recommend YOU.',
      },
    ],
    websiteCopy: 'Your website should be the best listing presentation you have. IDX integration, lead capture, neighborhood pages, and a brand that says "I\'m the expert here."',
    marketingCopy: 'From SEO foundations to paid ad campaigns targeting buyers and sellers in your market — our packages are designed for agents who want to dominate their farm area.',
    ctaText: 'Get Your Real Estate Strategy Session',
  },
  lawyers: {
    name: 'Legal / Law Firms',
    slug: 'lawyers',
    headline: 'Clients Are Deciding Before They Call',
    subline:
      'Legal clients research extensively online before ever picking up the phone. We make sure that when they search, when they ask AI, and when they compare firms — they find you and choose you.',
    heroStat: { value: '67%', label: 'Lead Cost Reduction' },
    painPoints: [
      {
        title: 'Most Expensive Keywords in Digital',
        description: 'Legal keywords cost $50-200+ per click on Google. Without ruthlessly optimized campaigns, your ad budget disappears with nothing to show for it.',
      },
      {
        title: 'Directory Sites Outrank Your Firm',
        description: 'Avvo, FindLaw, and Justia rank above your firm\'s website for your practice areas. You\'re sending traffic to sites that sell leads to your competitors.',
      },
      {
        title: 'Website That Doesn\'t Instill Trust',
        description: 'In legal, trust is everything. An outdated or generic website makes prospective clients question your competence before they even read your bio.',
      },
      {
        title: 'No AI Content Strategy',
        description: 'People are asking "do I need a lawyer for [situation]" to ChatGPT. If your firm\'s content isn\'t structured for AI, you lose the consultation.',
      },
    ],
    solutions: [
      {
        title: 'Authority-Building Content',
        description: 'Legal content strategy that positions your attorneys as the definitive experts, builds topical authority, and drives organic consultations.',
      },
      {
        title: 'Conversion-Optimized Law Firm Websites',
        description: 'Designed specifically for legal: attorney bios, practice area pages, results/settlements section, and trust signals that convert visitors to consultations.',
      },
      {
        title: 'Smart PPC on Expensive Keywords',
        description: 'AI-powered bidding, negative keyword management, and conversion-focused landing pages that maximize ROI on the most expensive keywords in digital.',
      },
      {
        title: 'GEO for Legal AI Queries',
        description: 'Optimize your firm\'s content for AI-powered legal search so when prospects ask AI for attorney recommendations, YOUR firm appears first.',
      },
    ],
    websiteCopy: 'A law firm website needs to do one thing above all: build trust. Our tiers range from professional brand sites to authority-driven platforms with case results, attorney profiles, and conversion optimization.',
    marketingCopy: 'Legal marketing requires precision. Our packages are built for the unique challenges of legal — expensive keywords, ethical advertising rules, and long sales cycles.',
    ctaText: 'Get Your Law Firm Strategy Session',
  },
};
