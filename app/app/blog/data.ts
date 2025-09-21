export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  tags: string[];
  relatedPosts?: string[];
}

export const allBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'future-digital-marketing-2025',
    title: 'The Future of Digital Marketing in 2025',
    excerpt: 'Explore the latest trends and technologies shaping the digital marketing landscape, from AI-driven campaigns to immersive experiences.',
    content: `# The Future of Digital Marketing in 2025

## Introduction
The digital marketing landscape is evolving at an unprecedented pace. In this article, we'll explore the key trends that will shape digital marketing in 2025.

## AI-Powered Personalization
Artificial Intelligence is revolutionizing how brands connect with their audiences. In 2025, we'll see even more sophisticated personalization, with AI analyzing vast amounts of data to deliver hyper-relevant content to each individual.

## Voice and Visual Search
With the rise of smart speakers and visual search technologies, optimizing for voice and image-based queries will become essential for brands.

## Interactive Content
Interactive content like quizzes, polls, and augmented reality experiences will dominate as consumers seek more engaging and immersive brand interactions.

## Conclusion
The future of digital marketing is bright, with new technologies creating exciting opportunities for brands to connect with their audiences in meaningful ways.`,
    author: {
      name: 'Sarah Johnson',
      role: 'Digital Marketing Director',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Sarah has over 10 years of experience in digital marketing and has helped numerous brands grow their online presence.'
    },
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Digital Marketing',
    image: '/images/hero-image.jpg',
    featured: true,
    tags: ['Marketing', 'AI', 'Trends', '2025'],
    relatedPosts: ['2', '3']
  },
  {
    id: '2',
    slug: 'building-brand-identity-digital-age',
    title: 'Building Brand Identity in the Digital Age',
    excerpt: 'Learn how to create a compelling brand identity that resonates with modern consumers and stands out in crowded digital spaces.',
    content: `# Building Brand Identity in the Digital Age

## The Foundation of Digital Branding
In today's digital landscape, brand identity goes beyond logos and color schemes. It's about creating a cohesive experience that resonates across all digital touchpoints.

## Key Elements of Digital Brand Identity

### Visual Consistency
- Logo variations for different platforms
- Color palette that works across digital mediums
- Typography that's readable on all devices

### Voice and Tone
Your brand's voice should be consistent across all digital channels, from social media posts to customer service interactions.

### Digital Touchpoints
Every interaction with your brand should reinforce your identity, from your website to your email signatures.

## Building Trust in Digital Spaces
Trust is crucial in digital environments where face-to-face interactions are limited. Your brand identity should communicate reliability and authenticity.

## Measuring Brand Identity Success
Track metrics like brand recognition, customer loyalty, and engagement rates to measure the effectiveness of your brand identity strategy.`,
    author: {
      name: 'Michael Chen',
      role: 'Brand Strategist',
      avatar: '/images/authors/michael.jpg',
      bio: 'Michael specializes in helping brands navigate the digital space and implement effective branding strategies.'
    },
    date: '2025-01-12',
    readTime: '7 min read',
    category: 'Branding',
    image: '/images/3.png.jpg',
    featured: false,
    tags: ['Branding', 'Digital', 'Identity', 'Strategy'],
    relatedPosts: ['1', '5']
  },
  {
    id: '3',
    slug: 'web3-customer-engagement-evolution',
    title: 'Web3 and the Evolution of Customer Engagement',
    excerpt: 'Discover how Web3 technologies are revolutionizing customer engagement and creating new opportunities for brands.',
    content: `# Web3 and the Evolution of Customer Engagement

## Understanding Web3's Impact on Marketing
Web3 represents a fundamental shift in how brands interact with customers, moving from traditional advertising to community-driven engagement.

## Key Web3 Marketing Strategies

### Community-Driven Marketing
- Building engaged communities around your brand
- Token-based loyalty programs
- Decentralized governance models

### NFT and Digital Collectibles
- Creating unique digital assets for customers
- Building scarcity and exclusivity
- Fostering emotional connections through ownership

### Decentralized Identity
- Giving customers control over their data
- Building trust through transparency
- Creating personalized experiences without compromising privacy

## Practical Implementation
Real-world examples of brands successfully implementing Web3 strategies, from Starbucks' NFT loyalty program to Nike's virtual sneaker drops.

## The Future of Customer Engagement
Web3 is just the beginning. The future will see even more innovative ways for brands to engage with customers in decentralized environments.`,
    author: {
      name: 'Alex Rodriguez',
      role: 'Web3 Marketing Specialist',
      avatar: '/images/authors/alex.jpg',
      bio: 'Alex helps brands navigate the Web3 space and implement effective blockchain-based marketing strategies.'
    },
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Web3',
    image: '/images/hero-image.jpg',
    featured: false,
    tags: ['Web3', 'Blockchain', 'Engagement', 'Community'],
    relatedPosts: ['1', '2']
  },
  {
    id: '4',
    slug: 'social-media-strategy-b2b',
    title: 'Social Media Strategy for B2B Companies',
    excerpt: 'A comprehensive guide to leveraging social media platforms for B2B marketing success and lead generation.',
    content: `# Social Media Strategy for B2B Companies

## Why B2B Companies Need Social Media
Social media isn't just for B2C companies. B2B organizations can leverage these platforms to build relationships, generate leads, and establish thought leadership.

## Platform Selection for B2B

### LinkedIn: The B2B Powerhouse
- Professional networking and lead generation
- Content marketing and thought leadership
- LinkedIn advertising and sponsored content

### Twitter: Real-time Engagement
- Industry conversations and trend monitoring
- Customer service and support
- Thought leadership and expertise sharing

### YouTube: Educational Content
- Product demonstrations and tutorials
- Webinar recordings and presentations
- Customer testimonials and case studies

## Content Strategy for B2B Social Media

### Educational Content
Share valuable insights, industry trends, and practical tips that help your audience solve problems.

### Behind-the-Scenes Content
Show the human side of your business with employee spotlights, office culture, and company milestones.

### User-Generated Content
Encourage customers to share their experiences and success stories with your products or services.

## Measuring B2B Social Media Success
Track metrics like lead generation, website traffic, engagement rates, and brand awareness to measure the effectiveness of your B2B social media strategy.`,
    author: {
      name: 'Emma Wilson',
      role: 'B2B Marketing Manager',
      avatar: '/images/authors/emma.jpg',
      bio: 'Emma specializes in B2B marketing strategies and has helped numerous companies grow their business through social media.'
    },
    date: '2025-01-08',
    readTime: '8 min read',
    category: 'Social Media',
    image: '/images/3.png.jpg',
    featured: false,
    tags: ['B2B', 'Social Media', 'LinkedIn', 'Strategy'],
    relatedPosts: ['1', '6']
  },
  {
    id: '5',
    slug: 'psychology-color-brand-design',
    title: 'The Psychology of Color in Brand Design',
    excerpt: 'Understanding how color choices impact consumer perception and brand recognition in digital environments.',
    content: `# The Psychology of Color in Brand Design

## The Science Behind Color Psychology
Colors evoke specific emotions and associations in consumers, making them a powerful tool in brand design and marketing.

## Color Meanings and Applications

### Red: Energy and Urgency
- Associated with passion, excitement, and urgency
- Effective for call-to-action buttons and sale announcements
- Can also signal danger or stop signs

### Blue: Trust and Stability
- Conveys trust, reliability, and professionalism
- Popular choice for financial and technology companies
- Can also represent calmness and serenity

### Green: Growth and Nature
- Associated with growth, health, and nature
- Effective for eco-friendly and health-related brands
- Can also represent money and financial success

### Yellow: Optimism and Attention
- Evokes happiness, optimism, and energy
- Great for grabbing attention and creating excitement
- Can also represent caution or warning

## Cultural Considerations
Color meanings can vary across cultures, so it's important to consider your target audience's cultural background when choosing brand colors.

## Testing and Optimization
A/B test different color schemes to see which resonates best with your audience and drives the desired actions.`,
    author: {
      name: 'David Park',
      role: 'Brand Design Specialist',
      avatar: '/images/authors/david.jpg',
      bio: 'David is a brand design expert who helps companies create compelling visual identities that resonate with their target audiences.'
    },
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Design',
    image: '/images/hero-image.jpg',
    featured: false,
    tags: ['Design', 'Color', 'Psychology', 'Branding'],
    relatedPosts: ['2', '4']
  },
  {
    id: '6',
    slug: 'content-marketing-roi-measuring',
    title: 'Content Marketing ROI: Measuring What Matters',
    excerpt: 'Learn how to track and optimize your content marketing efforts for maximum return on investment.',
    content: `# Content Marketing ROI: Measuring What Matters

## Understanding Content Marketing ROI
Content marketing ROI isn't just about direct sales. It's about building relationships, establishing authority, and creating long-term value for your brand.

## Key Metrics to Track

### Engagement Metrics
- Time spent on page
- Bounce rate
- Social shares and comments
- Email open and click-through rates

### Lead Generation Metrics
- Form submissions and downloads
- Newsletter signups
- Demo requests
- Sales-qualified leads

### Revenue Metrics
- Direct sales from content
- Customer lifetime value
- Cost per acquisition
- Revenue per visitor

## Attribution Challenges
Content marketing often has a long sales cycle, making it difficult to attribute direct revenue to specific content pieces.

## Tools for Measuring Content ROI
- Google Analytics for website traffic and conversions
- Marketing automation platforms for lead tracking
- CRM systems for sales attribution
- Social media analytics for engagement metrics

## Optimizing for Better ROI
Focus on creating high-quality, valuable content that addresses your audience's pain points and drives them toward your business goals.`,
    author: {
      name: 'Lisa Thompson',
      role: 'Content Marketing Director',
      avatar: '/images/authors/lisa.jpg',
      bio: 'Lisa has over 8 years of experience in content marketing and helps companies create strategies that drive measurable results.'
    },
    date: '2025-01-03',
    readTime: '7 min read',
    category: 'Content Marketing',
    image: '/images/3.png.jpg',
    featured: false,
    tags: ['Content Marketing', 'ROI', 'Analytics', 'Strategy'],
    relatedPosts: ['1', '4']
  }
];

export const getAllPosts = () => allBlogPosts;

export const getPostBySlug = (slug: string) => 
  allBlogPosts.find(post => post.slug === slug);

export const getRelatedPosts = (post: BlogPost) => {
  if (!post.relatedPosts) return [];
  return allBlogPosts.filter(p => post.relatedPosts?.includes(p.id));
};

export const getPostsByCategory = (category: string) => 
  allBlogPosts.filter(post => post.category === category);

export const getFeaturedPosts = () => 
  allBlogPosts.filter(post => post.featured);

export const getAllCategories = () => {
  const categories = new Set(allBlogPosts.map(post => post.category));
  return Array.from(categories);
};

export const getAllTags = () => {
  const tags = new Set(allBlogPosts.flatMap(post => post.tags));
  return Array.from(tags);
};