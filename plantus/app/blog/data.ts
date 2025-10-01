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

// ------------------ BLOG POSTS ------------------
export const allBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'future-digital-marketing-2025',
    title: 'The Future of Digital Marketing in 2025',
    excerpt: 'Explore the latest trends and technologies shaping the digital marketing landscape, from AI-driven campaigns to immersive experiences.',
    content: `# The Future of Digital Marketing in 2025

Introduction
The digital marketing landscape is evolving at an unprecedented pace. In this article, we'll explore the key trends that will shape digital marketing in 2025.

AI-Powered Personalization
Artificial Intelligence is revolutionizing how brands connect with their audiences. In 2025, we'll see even more sophisticated personalization, with AI analyzing vast amounts of data to deliver hyper-relevant content to each individual.

Voice and Visual Search
With the rise of smart speakers and visual search technologies, optimizing for voice and image-based queries will become essential for brands.

Interactive Content
Interactive content like quizzes, polls, and augmented reality experiences will dominate as consumers seek more engaging and immersive brand interactions.

Conclusion
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

The Foundation of Digital Branding
In today's digital landscape, brand identity goes beyond logos and color schemes. It's about creating a cohesive experience that resonates across all digital touchpoints.

Key Elements of Digital Brand Identity

Visual Consistency
Logo variations for different platforms
Color palette that works across digital mediums
Typography that's readable on all devices

Voice and Tone
Your brand's voice should be consistent across all digital channels, from social media posts to customer service interactions.

Digital Touchpoints
Every interaction with your brand should reinforce your identity, from your website to your email signatures.

Building Trust in Digital Spaces
Trust is crucial in digital environments where face-to-face interactions are limited. Your brand identity should communicate reliability and authenticity.

Measuring Brand Identity Success
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

Understanding Web3's Impact on Marketing
Web3 represents a fundamental shift in how brands interact with customers, moving from traditional advertising to community-driven engagement.

Key Web3 Marketing Strategies

Community-Driven Marketing
Building engaged communities around your brand
Token-based loyalty programs
Decentralized governance models

NFT and Digital Collectibles
Creating unique digital assets for customers
Building scarcity and exclusivity
Fostering emotional connections through ownership

Decentralized Identity
Giving customers control over their data
Building trust through transparency
Creating personalized experiences without compromising privacy

Practical Implementation
Real-world examples of brands successfully implementing Web3 strategies, from Starbucks' NFT loyalty program to Nike's virtual sneaker drops.

The Future of Customer Engagement
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
  // ... Add other posts (4,5,6) similarly
];

// ------------------ BLOG UTILITIES ------------------
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

// ------------------ SEARCH UTILITY ------------------
export const searchPosts = (query: string) => {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();

  return allBlogPosts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
