"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, Search } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  const allBlogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2025",
      excerpt: "Explore the latest trends and technologies shaping the digital marketing landscape, from AI-driven campaigns to immersive experiences.",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Digital Marketing",
      image: "/images/hero-image.jpg",
      slug: "future-digital-marketing-2025",
      featured: true
    },
    {
      id: 2,
      title: "Building Brand Identity in the Digital Age",
      excerpt: "Learn how to create a compelling brand identity that resonates with modern consumers and stands out in crowded digital spaces.",
      author: "Michael Chen",
      date: "January 12, 2025",
      readTime: "7 min read",
      category: "Branding",
      image: "/images/3.png.jpg",
      slug: "building-brand-identity-digital-age",
      featured: false
    },
    {
      id: 3,
      title: "Web3 and the Evolution of Customer Engagement",
      excerpt: "Discover how Web3 technologies are revolutionizing customer engagement and creating new opportunities for brands.",
      author: "Alex Rodriguez",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Web3",
      image: "/images/hero-image.jpg",
      slug: "web3-customer-engagement-evolution",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Strategy for B2B Companies",
      excerpt: "A comprehensive guide to leveraging social media platforms for B2B marketing success and lead generation.",
      author: "Emma Wilson",
      date: "January 8, 2025",
      readTime: "8 min read",
      category: "Social Media",
      image: "/images/3.png.jpg",
      slug: "social-media-strategy-b2b",
      featured: false
    },
    {
      id: 5,
      title: "The Psychology of Color in Brand Design",
      excerpt: "Understanding how color choices impact consumer perception and brand recognition in digital environments.",
      author: "David Park",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Design",
      image: "/images/hero-image.jpg",
      slug: "psychology-color-brand-design",
      featured: false
    },
    {
      id: 6,
      title: "Content Marketing ROI: Measuring What Matters",
      excerpt: "Learn how to track and optimize your content marketing efforts for maximum return on investment.",
      author: "Lisa Thompson",
      date: "January 3, 2025",
      readTime: "7 min read",
      category: "Content Marketing",
      image: "/images/3.png.jpg",
      slug: "content-marketing-roi-measuring",
      featured: false
    }
  ];

  const categories = ["All", "Digital Marketing", "Branding", "Web3", "Social Media", "Design", "Content Marketing"];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Insights, strategies, and trends from the world of digital marketing, 
            branding, and technology.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-md mx-auto relative"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/20 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 border-b border-white/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  category === "All"
                    ? "bg-orange-500 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
            {(() => {
              const featuredPost = allBlogPosts.find(post => post.featured);
              return featuredPost ? (
                <Link href={`/blog/${featuredPost.slug}`}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                            {featuredPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {featuredPost.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{featuredPost.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{featuredPost.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{featuredPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center text-orange-400 font-semibold">
                          <span>Read Full Article</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ) : null;
            })()}
          </motion.div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-3xl font-bold text-white mb-12"
          >
            All Articles
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex items-center text-orange-400 font-semibold group-hover:text-orange-300 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8">
              Get the latest insights and strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


