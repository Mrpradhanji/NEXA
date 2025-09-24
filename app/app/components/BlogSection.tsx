"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import CTAButton from "./Button";

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2025",
      excerpt:
        "Explore the latest trends and technologies shaping the digital marketing landscape, from AI-driven campaigns to immersive experiences.",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Digital Marketing",
      image: "/images/hero-image.jpg",
      slug: "future-digital-marketing-2025",
    },
    {
      id: 2,
      title: "Building Brand Identity in the Digital Age",
      excerpt:
        "Learn how to create a compelling brand identity that resonates with modern consumers and stands out in crowded digital spaces.",
      author: "Michael Chen",
      date: "January 12, 2025",
      readTime: "7 min read",
      category: "Branding",
      image: "/images/3.png.jpg",
      slug: "building-brand-identity-digital-age",
    },
    {
      id: 3,
      title: "Web3 and the Evolution of Customer Engagement",
      excerpt:
        "Discover how Web3 technologies are revolutionizing customer engagement and creating new opportunities for brands.",
      author: "Alex Rodriguez",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Web3",
      image: "/images/hero-image.jpg",
      slug: "web3-customer-engagement-evolution",
    },
  ];

  return (
    <section className="py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">
            Latest Insights
          </h2>
          <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-orange-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest thoughts on digital
            marketing, branding, and emerging technologies.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-300 hover:bg-orange-100 hover:border-orange-600 transition-all duration-300 group cursor-pointer rounded-xl overflow-hidden"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 text-left break-words">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2 text-left">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 text-left break-words group-hover:text-gray-800 transition-colors">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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

                  <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-800 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/blog">
            <div className="mt-16">
              <CTAButton label="Get Started Today" type="1" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
